const input = document.querySelector('#evidence-input');
const clearButton = document.querySelector('#clear-search');
const promptButtons = [...document.querySelectorAll('.quick-prompts button')];
const suggestions = document.querySelector('#suggestions');
const grid = document.querySelector('#evidence-grid');
const resultsTitle = document.querySelector('#results-title');
const resultCount = document.querySelector('#result-count');
const searchSummary = document.querySelector('#search-summary');
const tabButtons = [...document.querySelectorAll('[role="tab"]')];
const tabPanels = [...document.querySelectorAll('[role="tabpanel"]')];
let showFullRegistry = false;

const normalize = value => value.toLowerCase().trim().replace(/[^a-z0-9+#/. -]/g, ' ').replace(/\s+/g, ' ');
const words = value => normalize(value).split(' ').filter(Boolean);
function editDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0]; row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j];
      row[j] = Math.min(row[j] + 1, row[j - 1] + 1, previous + (a[i - 1] === b[j - 1] ? 0 : 1));
      previous = temp;
    }
  }
  return row[b.length];
}
function tokenSimilarity(a, b) {
  if (a === b) return 1;
  if (a.length < 4 || b.length < 4) return 0;
  const d = editDistance(a, b), max = Math.max(a.length, b.length);
  return d <= 2 ? 1 - d / max : 0;
}
function intentScore(item, query) {
  const q = normalize(query); if (!q) return 0;
  const qWords = words(q); let score = 0;
  [item.label, item.prompt, ...item.aliases].forEach(candidate => {
    const name = normalize(candidate);
    if (q === name) score = Math.max(score, 120);
    else if (name.includes(q) || q.includes(name)) score = Math.max(score, 88);
    else {
      let fuzzy = 0;
      qWords.forEach(qWord => words(name).forEach(candidateWord => { fuzzy += tokenSimilarity(qWord, candidateWord) * 14; }));
      score = Math.max(score, fuzzy);
    }
  });
  return score;
}
function findIntent(query) {
  const ranked = intents.map(item => ({ item, score: intentScore(item, query) })).sort((a, b) => b.score - a.score);
  return ranked[0] && ranked[0].score >= 20 ? ranked[0].item : null;
}
function itemText(item) { return normalize([item.title, item.description, ...item.signals, ...item.keywords].join(' ')); }
function scoreEvidence(item, query, matchedIntent) {
  const qWords = words(query), title = normalize(item.title), description = normalize(item.description);
  const signalText = normalize(item.signals.join(' ')), keywordText = normalize(item.keywords.join(' '));
  let score = 0;
  if (matchedIntent) {
    const curatedIndex = matchedIntent.strongest.indexOf(item.id);
    if (curatedIndex !== -1) score += 180 - curatedIndex * 18;
    matchedIntent.terms.forEach(term => {
      const t = normalize(term);
      if (signalText.includes(t)) score += 24; else if (keywordText.includes(t)) score += 12;
    });
  }
  const searchableWords = words(itemText(item));
  qWords.forEach(word => {
    if (title.includes(word)) score += 38;
    if (signalText.includes(word)) score += 28;
    if (keywordText.includes(word)) score += 18;
    if (description.includes(word)) score += 8;
    if (searchableWords.some(candidate => tokenSimilarity(word, candidate) >= 0.66)) score += 6;
  });
  if (item.type.includes('PRODUCTION')) score += 10;
  if (item.type === 'EXECUTABLE') score += 6;
  return score + item.priority / 20;
}
function matchedSignals(item, query, matchedIntent) {
  const qWords = words(query), intentTerms = matchedIntent ? matchedIntent.terms.map(normalize) : [];
  const matches = item.signals.filter(signal => {
    const s = normalize(signal);
    return qWords.some(word => s.includes(word)) || intentTerms.some(term => s.includes(term) || term.includes(s));
  });
  return (matches.length ? matches : item.signals).slice(0, 3);
}
function cardTemplate(item, rank, query, matchedIntent) {
  const label = query ? (rank < 2 ? 'TOP MATCH' : rank < 5 ? 'STRONG MATCH' : 'RELATED') : 'FEATURED';
  const matched = matchedSignals(item, query, matchedIntent);
  const tabAttribute = item.tab ? ` data-open-tab="${item.tab}"` : '';
  return `<article class="evidence-card" style="animation-delay:${Math.min(rank * 22, 132)}ms">
    <div class="card-top"><span class="card-type">${item.type}</span><span class="match-label">${label}</span></div>
    <h3>${item.title}</h3><p>${item.description}</p>
    ${query ? `<div class="match-line">Matched on <strong>${matched.join(' · ')}</strong></div>` : ''}
    <div class="tags">${item.signals.slice(0, 4).map(signal => `<span>${signal}</span>`).join('')}</div>
    <a class="card-link" href="${item.url}"${tabAttribute}>${item.tab ? 'Open secure operations →' : 'Inspect evidence →'}</a></article>`;
}
function setSummary(query, matchedIntent, count) {
  if (!query) {
    resultsTitle.textContent = 'Strongest evidence first';
    resultCount.textContent = showFullRegistry ? `${evidence.length} evidence records, including all 21 production stories.` : 'A curated mix of real customer work, production cases and executable technical evidence.';
    searchSummary.innerHTML = `<div><span class="label">${showFullRegistry ? 'FULL REGISTRY' : 'DEFAULT VIEW'}</span>
      <h3>${showFullRegistry ? 'Every production story is visible. Search to narrow it instantly.' : 'Customer ownership, delivery judgment and verified closure.'}</h3>
      <p>${showFullRegistry ? 'All 21 first-hand production stories are included alongside supporting executable work.' : 'The registry prioritizes first-hand customer and production evidence, then executable work that shows how I investigate and verify.'}</p></div>
      <button id="registry-toggle" class="text-button" type="button">${showFullRegistry ? 'Show strongest proof' : 'Browse full registry'}</button>`;
  } else {
    resultsTitle.textContent = `Evidence for “${query}”`;
    resultCount.textContent = `${count} strongest records surfaced.`;
    searchSummary.innerHTML = `<div><span class="label">${matchedIntent ? matchedIntent.label.toUpperCase() : 'LIVE EVIDENCE SEARCH'}</span>
      <h3>${matchedIntent ? matchedIntent.summary : 'Ranking the registry by customer situation, problem language, capabilities and technical context.'}</h3>
      <p>First-hand production evidence receives a small priority boost. Search terms can be situations, responsibilities, technologies or role names.</p></div>
      <button id="registry-toggle" class="text-button" type="button">Reset search</button>`;
  }
  bindRegistryToggle();
}
function render(query = '') {
  const q = query.trim(), matchedIntent = q ? findIntent(q) : null;
  const ranked = !q
    ? [...evidence].sort((a, b) => b.priority - a.priority).slice(0, showFullRegistry ? evidence.length : 6)
    : evidence.map(item => ({ ...item, _score: scoreEvidence(item, q, matchedIntent) })).filter(item => item._score > 8).sort((a, b) => b._score - a._score).slice(0, 8);
  setSummary(q, matchedIntent, ranked.length);
  if (!ranked.length) {
    grid.innerHTML = '<div class="empty-state"><h3>No direct evidence match yet.</h3><p>Try customer, onboarding, account, API, checkout, incident, QA, security, documentation or NATO.</p></div>';
    return;
  }
  grid.innerHTML = ranked.map((item, index) => cardTemplate(item, index, q, matchedIntent)).join('');
  bindInternalEvidenceLinks();
}
function updateSuggestions(query) {
  const q = normalize(query);
  if (!q) { suggestions.hidden = true; suggestions.innerHTML = ''; return; }
  const matches = intents.map(item => ({ item, score: intentScore(item, q) })).filter(x => x.score > 10).sort((a, b) => b.score - a.score).slice(0, 5);
  if (!matches.length) { suggestions.hidden = true; suggestions.innerHTML = ''; return; }
  suggestions.innerHTML = matches.map(({ item }) => `<button type="button" data-suggestion="${item.prompt}"><strong>${item.prompt}</strong><small>${item.label}</small></button>`).join('');
  suggestions.hidden = false;
  suggestions.querySelectorAll('[data-suggestion]').forEach(button => button.addEventListener('click', () => { applyQuery(button.dataset.suggestion, true); suggestions.hidden = true; }));
}
function syncUrl(query) {
  const url = new URL(window.location.href);
  if (query) url.searchParams.set('q', query); else url.searchParams.delete('q');
  history.replaceState(null, '', `${url.pathname}${url.search}${window.location.hash || ''}`);
}
function applyQuery(value, scroll = false) {
  const query = value.trim(); input.value = query; showFullRegistry = false;
  promptButtons.forEach(button => button.classList.toggle('active', normalize(button.dataset.query) === normalize(query)));
  render(query); updateSuggestions(''); syncUrl(query);
  if (scroll) document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function bindRegistryToggle() {
  const button = document.querySelector('#registry-toggle'); if (!button) return;
  button.addEventListener('click', () => {
    if (input.value.trim()) { applyQuery('', false); input.focus(); return; }
    showFullRegistry = !showFullRegistry; render('');
  });
}
function activateTab(name, scroll = false) {
  tabButtons.forEach(button => button.setAttribute('aria-selected', String(button.dataset.tab === name)));
  tabPanels.forEach(panel => { panel.hidden = panel.id !== `about-${name}`; });
  if (scroll) document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function bindInternalEvidenceLinks() {
  document.querySelectorAll('[data-open-tab]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); activateTab(link.dataset.openTab, true); }));
}
input.addEventListener('input', () => {
  const query = input.value; showFullRegistry = false; render(query); updateSuggestions(query);
  promptButtons.forEach(button => button.classList.toggle('active', normalize(button.dataset.query) === normalize(query)));
  syncUrl(query.trim());
});
input.addEventListener('keydown', event => {
  if (event.key === 'Enter') { suggestions.hidden = true; document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  if (event.key === 'Escape') suggestions.hidden = true;
});
clearButton.addEventListener('click', () => { applyQuery('', false); input.focus(); });
promptButtons.forEach(button => button.addEventListener('click', () => applyQuery(button.dataset.query, true)));
tabButtons.forEach(button => button.addEventListener('click', () => activateTab(button.dataset.tab, false)));
document.addEventListener('keydown', event => {
  const tag = document.activeElement && document.activeElement.tagName, typing = tag === 'INPUT' || tag === 'TEXTAREA';
  if (event.key === '/' && !typing) { event.preventDefault(); input.focus(); }
  if (event.key === 'Escape') suggestions.hidden = true;
});
document.addEventListener('click', event => { if (!suggestions.contains(event.target) && event.target !== input) suggestions.hidden = true; });
const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
if (initialQuery) { input.value = initialQuery; render(initialQuery); } else render('');
