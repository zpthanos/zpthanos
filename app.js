const evidence = [
  {
    id: 'production-stories',
    title: 'Production Engineering Stories',
    type: 'REAL PRODUCTION',
    description: '21 first-hand, sanitized cases covering incidents, integrations, QA, customer recovery, delivery decisions and support improvement.',
    url: 'https://github.com/zpthanos/production-stories',
    signals: ['production ownership', 'troubleshooting', 'incident response', 'customer communication', 'documentation'],
    keywords: ['technical support engineer', 'support engineer', 'customer support', 'application support', 'customer engineering', 'technical account manager', 'developer support', 'production', 'tickets', 'escalation', 'customer', 'support'],
    priority: 100
  },
  {
    id: 'checkout-conflict',
    title: 'Payment / checkout compatibility conflict',
    type: 'SANITIZED PRODUCTION',
    description: 'Isolated a compatibility issue, identified the supported resolution and regression-tested the complete purchasing journey.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/03-payoneer-funnelkit-conflict.md',
    signals: ['issue reproduction', 'payments', 'integration troubleshooting', 'regression testing', 'WooCommerce'],
    keywords: ['checkout', 'payment', 'cart', 'purchase', 'plugin', 'funnelkit', 'payoneer', 'integration', 'broken checkout', 'ecommerce', 'qa'],
    priority: 96
  },
  {
    id: 'malware-recovery',
    title: 'Critical malware recovery',
    type: 'SANITIZED PRODUCTION',
    description: 'Safe recovery and relaunch of a compromised ecommerce site with credential rotation, stakeholder communication and full customer-journey verification.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/06-malware-recovery.md',
    signals: ['incident response', 'security', 'recovery', 'stakeholder communication', 'verification'],
    keywords: ['incident', 'outage', 'malware', 'compromise', 'security incident', 'production', 'recovery', 'credentials', 'site down', 'emergency'],
    priority: 94
  },
  {
    id: 'client-recovery',
    title: 'Recovering an unhappy client relationship',
    type: 'SANITIZED PRODUCTION',
    description: 'Reopened requirements, listened to dissatisfaction, coordinated changes and restored confidence through clear ownership and final approval.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/17-client-relationship-recovery.md',
    signals: ['customer ownership', 'communication', 'requirements', 'trust recovery', 'follow-through'],
    keywords: ['unhappy customer', 'angry customer', 'frustrated client', 'difficult customer', 'client recovery', 'relationship', 'account', 'expectations', 'escalation'],
    priority: 93
  },
  {
    id: 'playwright',
    title: 'WooCommerce Playwright',
    type: 'EXECUTABLE',
    description: 'End-to-end guest checkout testing with Playwright, axe accessibility checks, CI, traces, screenshots and machine-readable reports.',
    url: 'https://github.com/zpthanos/WooCommerce-Playwright',
    signals: ['Playwright', 'end-to-end QA', 'accessibility', 'CI', 'regression verification'],
    keywords: ['qa', 'test', 'testing', 'release', 'regression', 'playwright', 'typescript', 'accessibility', 'axe', 'ci', 'github actions', 'checkout', 'developer support'],
    priority: 92
  },
  {
    id: 'cache-complaints',
    title: 'Reducing recurring cache complaints',
    type: 'SANITIZED PRODUCTION',
    description: 'Turned repeated customer frustration into a clearer troubleshooting process and reusable support guidance.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/19-recurring-cache-complaints.md',
    signals: ['root-cause thinking', 'caching', 'process improvement', 'documentation', 'repeat-ticket reduction'],
    keywords: ['repeat tickets', 'recurring issue', 'knowledge base', 'runbook', 'documentation', 'self service', 'cache', 'caching', 'support operations', 'reduce support'],
    priority: 90
  },
  {
    id: 'client-engagements',
    title: 'End-to-end client engagements',
    type: 'SANITIZED PRODUCTION',
    description: 'Customer discovery, requirements clarification, delivery decisions, expectation setting, incident communication and post-launch support.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/07-end-to-end-client-engagements.md',
    signals: ['customer ownership', 'requirements', 'delivery', 'incident communication', 'post-launch support'],
    keywords: ['customer solutions engineer', 'technical account manager', 'customer success', 'customer engineering', 'onboarding', 'account management', 'requirements', 'stakeholder'],
    priority: 89
  },
  {
    id: 'washland',
    title: 'The Washland Portal',
    type: 'EXECUTABLE',
    description: 'PHP 8.2 and MySQL application with validation, prepared statements, JSON endpoints and explicit HTTP behaviour.',
    url: 'https://github.com/zpthanos/The-Washland-Portal',
    signals: ['PHP', 'MySQL', 'JSON endpoints', 'HTTP behaviour', 'validation'],
    keywords: ['api', 'backend', 'http', 'json', 'endpoint', 'database', 'mysql', 'php', 'rest', 'validation', 'developer support', 'application support'],
    priority: 88
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare Security Starter',
    type: 'EXECUTABLE',
    description: 'Worker request controls, WAF templates, rate limiting, monitoring and staged rollout guidance with rollback thinking.',
    url: 'https://github.com/zpthanos/Cloudflare-Security-Starter',
    signals: ['Cloudflare', 'WAF', 'rate limiting', 'monitoring', 'safe rollout'],
    keywords: ['security', 'waf', 'cloudflare', 'http', 'rate limit', 'ddos', 'bot', 'monitoring', 'rollback', 'production operations', 'secure'],
    priority: 87
  },
  {
    id: 'browserstack',
    title: 'BrowserStack Business Testing',
    type: 'EXECUTABLE',
    description: 'Cross-browser automation, Playwright/TypeScript, secure configuration, GitHub Actions, test operations and release guidance.',
    url: 'https://github.com/zpthanos/Browserstack-Business-Testing',
    signals: ['cross-browser QA', 'Playwright', 'BrowserStack', 'CI', 'release guidance'],
    keywords: ['qa', 'browser', 'cross browser', 'browserstack', 'test', 'release', 'regression', 'ci', 'github actions', 'typescript', 'verification'],
    priority: 86
  },
  {
    id: 'handover',
    title: 'WooCommerce operations and customer handover',
    type: 'SANITIZED PRODUCTION',
    description: 'Established workflows for a 2,000+ product store, configured the first 200 products and trained a non-technical owner for independent operation.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/05-woocommerce-administration-handover.md',
    signals: ['onboarding', 'customer enablement', 'training', 'WooCommerce', 'handover'],
    keywords: ['onboarding', 'adoption', 'training', 'handover', 'enablement', 'customer success', 'catalogue', 'woocommerce', '2,000 products'],
    priority: 85
  },
  {
    id: 'ambiguous-request',
    title: 'Creating structure from an ambiguous request',
    type: 'SANITIZED PRODUCTION',
    description: 'Turned unclear business needs into concrete requirements, implementation decisions and reviewable outcomes.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/14-ambiguous-requirements.md',
    signals: ['requirements clarification', 'ambiguity reduction', 'technical translation', 'delivery decisions'],
    keywords: ['vague requirements', 'unclear request', 'ambiguous', 'requirements', 'discovery', 'what should we build', 'customer solutions', 'business need'],
    priority: 84
  },
  {
    id: 'dns-services',
    title: 'DNS and third-party services',
    type: 'SANITIZED PRODUCTION',
    description: 'Production troubleshooting across DNS and external services, with evidence-led isolation and controlled changes.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/08-dns-third-party-services.md',
    signals: ['DNS', 'third-party services', 'production troubleshooting', 'controlled change'],
    keywords: ['dns', 'network', 'integration', 'third party', 'external service', 'production', 'http', 'infrastructure', 'incident'],
    priority: 83
  },
  {
    id: 'pagespeed',
    title: 'PageSpeed improvement',
    type: 'SANITIZED PRODUCTION',
    description: 'Improved a production store from below 20 to above 75 while protecting catalogue, cart and checkout behaviour.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/11-pagespeed-improvement.md',
    signals: ['performance diagnosis', 'controlled change', 'regression testing', 'WooCommerce'],
    keywords: ['slow', 'performance', 'pagespeed', 'lighthouse', 'speed', 'cache', 'production', 'regression', 'woocommerce'],
    priority: 82
  },
  {
    id: 'accessibility-defect',
    title: 'Accessibility-related checkout defect',
    type: 'SANITIZED PRODUCTION',
    description: 'Defect reproduction and verification around an accessibility-sensitive customer journey.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/10-accessibility-checkout-defect.md',
    signals: ['defect reproduction', 'accessibility', 'checkout', 'verification', 'QA'],
    keywords: ['accessibility', 'wcag', 'axe', 'qa', 'checkout', 'defect', 'bug', 'reproduce', 'test', 'release'],
    priority: 80
  },
  {
    id: 'support-knowledge',
    title: 'Repeatable support knowledge',
    type: 'SANITIZED PRODUCTION',
    description: 'A production case focused on turning solved problems into reusable guidance and reducing repeated support work.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/21-repeatable-support-knowledge.md',
    signals: ['documentation', 'knowledge transfer', 'runbooks', 'repeatable support', 'self-service'],
    keywords: ['documentation', 'runbook', 'knowledge base', 'repeat tickets', 'self service', 'support process', 'reusable reply', 'training'],
    priority: 79
  },
  {
    id: 'civicflow',
    title: 'CivicFlow',
    type: 'PORTFOLIO CASE',
    description: 'Requirements-first delivery case study covering business rules, acceptance criteria, traceability, test strategy and release discipline.',
    url: 'https://github.com/zpthanos/civicflow-portfolio',
    signals: ['requirements engineering', 'acceptance criteria', 'traceability', 'test strategy', 'delivery discipline'],
    keywords: ['requirements', 'business analysis', 'acceptance criteria', 'traceability', 'uat', 'api design', 'delivery', 'project', 'qa'],
    priority: 76
  },
  {
    id: 'secure-operations',
    title: 'Signals, secure communications & IT operations',
    type: 'SECURE OPERATIONS',
    description: 'Hellenic Army Signals / IT service as a Transmitter Cryptographer, including secure communications, mission-critical IT support and technical failure escalation/reporting involving NRDC-GR.',
    url: '#about',
    tab: 'defense',
    signals: ['secure communications', 'mission-critical IT', 'technical escalation', 'NRDC-GR', 'disclosure discipline'],
    keywords: ['nato', 'nrdc', 'nrdc-gr', 'military', 'army', 'signals', 'cryptographer', 'secure operations', 'classified server', 'secure communications', 'incident', 'escalation'],
    priority: 75
  }
];

const intents = [
  {
    label: 'API & integrations',
    prompt: 'API is failing',
    aliases: ['api', 'api is failing', 'integration', 'integration failure', 'webhook', 'http 403', '403', '401', 'json', 'endpoint', 'authentication', 'developer support', 'customer solutions engineer'],
    summary: 'Prioritizing HTTP behaviour, integration troubleshooting, reproducible requests, backend context and verification.',
    terms: ['api', 'integration', 'http', 'json', 'endpoint', 'backend', 'authentication', 'webhook'],
    strongest: ['washland', 'checkout-conflict', 'dns-services', 'cloudflare', 'client-engagements']
  },
  {
    label: 'Checkout & payments',
    prompt: 'Checkout broke',
    aliases: ['checkout', 'checkout broke', 'payment', 'payments', 'cart broken', 'purchase flow', 'refund', 'woocommerce'],
    summary: 'Prioritizing customer-impacting ecommerce flows, compatibility isolation and full-journey regression verification.',
    terms: ['checkout', 'payment', 'woocommerce', 'integration', 'reproduction', 'regression'],
    strongest: ['checkout-conflict', 'playwright', 'accessibility-defect', 'pagespeed', 'handover']
  },
  {
    label: 'Customer recovery',
    prompt: 'Customer is unhappy',
    aliases: ['customer is unhappy', 'unhappy customer', 'angry customer', 'frustrated customer', 'difficult client', 'relationship recovery', 'trust', 'escalated customer'],
    summary: 'Prioritizing ownership, expectation reset, requirements clarification, communication and confidence recovery.',
    terms: ['customer ownership', 'communication', 'requirements', 'trust recovery', 'follow-through'],
    strongest: ['client-recovery', 'client-engagements', 'ambiguous-request', 'handover', 'production-stories']
  },
  {
    label: 'Production incident',
    prompt: 'Production incident',
    aliases: ['production incident', 'incident', 'outage', 'site down', 'malware', 'emergency', 'production issue', 'application support engineer', 'production support'],
    summary: 'Prioritizing containment, evidence, safe recovery, stakeholder communication and verified return to service.',
    terms: ['incident response', 'recovery', 'production', 'verification', 'security'],
    strongest: ['malware-recovery', 'production-stories', 'dns-services', 'cache-complaints', 'cloudflare']
  },
  {
    label: 'QA & release confidence',
    prompt: 'Need release confidence',
    aliases: ['need release confidence', 'qa', 'quality assurance', 'test', 'testing', 'regression', 'release', 'cross browser', 'accessibility', 'qa engineer', 'qa support engineer'],
    summary: 'Prioritizing reproducible tests, regression coverage, browser evidence, accessibility checks and release verification.',
    terms: ['qa', 'regression testing', 'verification', 'playwright', 'accessibility', 'ci'],
    strongest: ['playwright', 'browserstack', 'accessibility-defect', 'checkout-conflict', 'pagespeed']
  },
  {
    label: 'Ambiguous requirements',
    prompt: 'Requirements are vague',
    aliases: ['requirements are vague', 'vague requirements', 'unclear request', 'ambiguous request', 'requirements', 'discovery', 'business need', 'technical account manager'],
    summary: 'Prioritizing clarification, business intent, implementation input, acceptance and reviewable outcomes.',
    terms: ['requirements', 'ambiguity reduction', 'technical translation', 'delivery'],
    strongest: ['ambiguous-request', 'client-engagements', 'civicflow', 'client-recovery', 'handover']
  },
  {
    label: 'Security & recovery',
    prompt: 'Security and recovery',
    aliases: ['security and recovery', 'security', 'waf', 'malware recovery', 'secure', 'cloudflare', 'security operations'],
    summary: 'Prioritizing incident handling, controlled security changes, monitoring, recovery and operational discipline.',
    terms: ['security', 'recovery', 'monitoring', 'controlled change', 'incident response'],
    strongest: ['cloudflare', 'malware-recovery', 'secure-operations', 'dns-services', 'production-stories']
  },
  {
    label: 'Onboarding & handover',
    prompt: 'Onboarding and handover',
    aliases: ['onboarding and handover', 'onboarding', 'handover', 'training', 'adoption', 'enablement', 'customer success engineer'],
    summary: 'Prioritizing practical enablement, workflow setup, training, documentation and customer independence.',
    terms: ['onboarding', 'handover', 'training', 'customer enablement', 'documentation'],
    strongest: ['handover', 'client-engagements', 'support-knowledge', 'production-stories', 'civicflow']
  },
  {
    label: 'Reduce repeat support',
    prompt: 'Reduce repeat tickets',
    aliases: ['reduce repeat tickets', 'repeat tickets', 'recurring issue', 'documentation', 'runbook', 'knowledge base', 'self service', 'support operations'],
    summary: 'Prioritizing root-cause notes, reusable troubleshooting guidance and changes that reduce repeated support work.',
    terms: ['documentation', 'process improvement', 'runbooks', 'root-cause thinking', 'repeat-ticket reduction'],
    strongest: ['cache-complaints', 'support-knowledge', 'production-stories', 'browserstack', 'handover']
  },
  {
    label: 'Secure operations / NATO context',
    prompt: 'NATO secure operations',
    aliases: ['nato secure operations', 'nato', 'nrdc', 'nrdc-gr', 'army', 'military', 'signals', 'cryptographer', 'secure communications'],
    summary: 'Prioritizing secure communications context, mission-critical IT, technical escalation and careful public disclosure boundaries.',
    terms: ['secure communications', 'mission-critical IT', 'technical escalation', 'nrdc-gr', 'disclosure discipline'],
    strongest: ['secure-operations', 'cloudflare', 'malware-recovery', 'dns-services']
  },
  {
    label: 'Technical support',
    prompt: 'Technical support',
    aliases: ['technical support engineer', 'technical support', 'support engineer', 'customer support engineer', 'application support engineer', 'developer support', 'product support engineer', 'customer engineering'],
    summary: 'Prioritizing ownership, reproduction, investigation, escalation, customer communication, verification and reusable guidance.',
    terms: ['production ownership', 'troubleshooting', 'issue reproduction', 'customer communication', 'verification', 'documentation'],
    strongest: ['production-stories', 'checkout-conflict', 'playwright', 'client-recovery', 'cache-complaints', 'washland']
  }
];

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

const normalize = value => value
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9+#/. -]/g, ' ')
  .replace(/\s+/g, ' ');

const words = value => normalize(value).split(' ').filter(Boolean);

function editDistance(a, b) {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const row = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i += 1) {
    let previous = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const temp = row[j];
      row[j] = Math.min(
        row[j] + 1,
        row[j - 1] + 1,
        previous + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
      previous = temp;
    }
  }
  return row[b.length];
}

function tokenSimilarity(a, b) {
  if (a === b) return 1;
  if (a.length < 4 || b.length < 4) return 0;
  const distance = editDistance(a, b);
  const max = Math.max(a.length, b.length);
  return distance <= 2 ? 1 - distance / max : 0;
}

function intentScore(intent, query) {
  const q = normalize(query);
  if (!q) return 0;
  const qWords = words(q);
  let score = 0;

  [intent.label, intent.prompt, ...intent.aliases].forEach(candidate => {
    const name = normalize(candidate);
    if (q === name) score = Math.max(score, 120);
    else if (name.includes(q) || q.includes(name)) score = Math.max(score, 88);
    else {
      const candidateWords = words(name);
      let fuzzy = 0;
      qWords.forEach(qWord => {
        candidateWords.forEach(candidateWord => {
          fuzzy += tokenSimilarity(qWord, candidateWord) * 14;
        });
      });
      score = Math.max(score, fuzzy);
    }
  });

  return score;
}

function findIntent(query) {
  const ranked = intents
    .map(intent => ({ intent, score: intentScore(intent, query) }))
    .sort((a, b) => b.score - a.score);
  return ranked[0] && ranked[0].score >= 20 ? ranked[0].intent : null;
}

function itemText(item) {
  return normalize([
    item.title,
    item.description,
    ...item.signals,
    ...item.keywords
  ].join(' '));
}

function scoreEvidence(item, query, intent) {
  const q = normalize(query);
  const qWords = words(q);
  const title = normalize(item.title);
  const description = normalize(item.description);
  const signalText = normalize(item.signals.join(' '));
  const keywordText = normalize(item.keywords.join(' '));
  let score = 0;

  if (intent) {
    const curatedIndex = intent.strongest.indexOf(item.id);
    if (curatedIndex !== -1) score += 180 - curatedIndex * 18;

    intent.terms.forEach(term => {
      const normalizedTerm = normalize(term);
      if (signalText.includes(normalizedTerm)) score += 24;
      else if (keywordText.includes(normalizedTerm)) score += 12;
    });
  }

  qWords.forEach(queryWord => {
    if (title.includes(queryWord)) score += 38;
    if (signalText.includes(queryWord)) score += 28;
    if (keywordText.includes(queryWord)) score += 18;
    if (description.includes(queryWord)) score += 8;

    const searchableWords = words(itemText(item));
    const fuzzyMatch = searchableWords.some(candidate => tokenSimilarity(queryWord, candidate) >= 0.66);
    if (fuzzyMatch) score += 6;
  });

  if (item.type.includes('PRODUCTION')) score += 10;
  if (item.type === 'EXECUTABLE') score += 6;
  score += item.priority / 20;
  return score;
}

function matchedSignals(item, query, intent) {
  const qWords = words(query);
  const intentTerms = intent ? intent.terms.map(normalize) : [];
  const matches = item.signals.filter(signal => {
    const normalizedSignal = normalize(signal);
    return qWords.some(word => normalizedSignal.includes(word))
      || intentTerms.some(term => normalizedSignal.includes(term) || term.includes(normalizedSignal));
  });
  return (matches.length ? matches : item.signals).slice(0, 3);
}

function cardTemplate(item, rank, query, intent) {
  const label = query ? (rank < 2 ? 'TOP MATCH' : rank < 5 ? 'STRONG MATCH' : 'RELATED') : 'FEATURED';
  const matched = matchedSignals(item, query, intent);
  const tabAttribute = item.tab ? ` data-open-tab="${item.tab}"` : '';
  const linkText = item.tab ? 'Open secure operations →' : 'Inspect evidence →';

  return `
    <article class="evidence-card" style="animation-delay:${Math.min(rank * 22, 132)}ms">
      <div class="card-top">
        <span class="card-type">${item.type}</span>
        <span class="match-label">${label}</span>
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${query ? `<div class="match-line">Matched on <strong>${matched.join(' · ')}</strong></div>` : ''}
      <div class="tags">${item.signals.slice(0, 4).map(signal => `<span>${signal}</span>`).join('')}</div>
      <a class="card-link" href="${item.url}"${tabAttribute}>${linkText}</a>
    </article>`;
}

function setSummary(query, intent, count) {
  if (!query) {
    resultsTitle.textContent = 'Strongest evidence first';
    resultCount.textContent = showFullRegistry
      ? `${evidence.length} evidence records in the registry.`
      : 'A curated mix of real production work and executable technical evidence.';
    searchSummary.innerHTML = `
      <div>
        <span class="label">${showFullRegistry ? 'FULL REGISTRY' : 'DEFAULT VIEW'}</span>
        <h3>${showFullRegistry ? 'Everything is visible. Search to narrow it instantly.' : 'Production judgment, technical reproduction and verified closure.'}</h3>
        <p>${showFullRegistry ? 'Every record is tagged by capability, system and problem language.' : 'The registry prioritizes first-hand production evidence, then executable work that shows how I investigate and verify.'}</p>
      </div>
      <button id="registry-toggle" class="text-button" type="button">${showFullRegistry ? 'Show strongest proof' : 'Browse full registry'}</button>`;
    bindRegistryToggle();
    return;
  }

  resultsTitle.textContent = `Evidence for “${query}”`;
  resultCount.textContent = `${count} strongest records surfaced.`;
  searchSummary.innerHTML = `
    <div>
      <span class="label">${intent ? intent.label.toUpperCase() : 'LIVE EVIDENCE SEARCH'}</span>
      <h3>${intent ? intent.summary : 'Ranking the registry by problem language, capabilities and technical context.'}</h3>
      <p>Real production evidence receives a small priority boost. No self-scored skill bars, no invented percentages.</p>
    </div>
    <button id="registry-toggle" class="text-button" type="button">Reset search</button>`;
  bindRegistryToggle();
}

function render(query = '') {
  const q = query.trim();
  const intent = q ? findIntent(q) : null;
  let ranked;

  if (!q) {
    ranked = [...evidence]
      .sort((a, b) => b.priority - a.priority)
      .slice(0, showFullRegistry ? evidence.length : 6)
      .map(item => ({ ...item, _score: item.priority }));
  } else {
    ranked = evidence
      .map(item => ({ ...item, _score: scoreEvidence(item, q, intent) }))
      .filter(item => item._score > 8)
      .sort((a, b) => b._score - a._score)
      .slice(0, 8);
  }

  setSummary(q, intent, ranked.length);

  if (!ranked.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>No direct evidence match yet.</h3>
        <p>Try a shorter term such as API, checkout, incident, customer, QA, security, documentation, onboarding or NATO.</p>
      </div>`;
    return;
  }

  grid.innerHTML = ranked
    .map((item, index) => cardTemplate(item, index, q, intent))
    .join('');

  bindInternalEvidenceLinks();
}

function updateSuggestions(query) {
  const q = normalize(query);
  if (!q) {
    suggestions.hidden = true;
    suggestions.innerHTML = '';
    return;
  }

  const matches = intents
    .map(intent => ({ intent, score: intentScore(intent, q) }))
    .filter(item => item.score > 10)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  if (!matches.length) {
    suggestions.hidden = true;
    suggestions.innerHTML = '';
    return;
  }

  suggestions.innerHTML = matches.map(({ intent }) => `
    <button type="button" data-suggestion="${intent.prompt}">
      <strong>${intent.prompt}</strong>
      <small>${intent.label}</small>
    </button>`).join('');

  suggestions.hidden = false;

  suggestions.querySelectorAll('[data-suggestion]').forEach(button => {
    button.addEventListener('click', () => {
      applyQuery(button.dataset.suggestion, true);
      suggestions.hidden = true;
    });
  });
}

function syncUrl(query) {
  const url = new URL(window.location.href);
  if (query) url.searchParams.set('q', query);
  else url.searchParams.delete('q');
  history.replaceState(null, '', `${url.pathname}${url.search}${window.location.hash || ''}`);
}

function applyQuery(value, scroll = false) {
  const query = value.trim();
  input.value = query;
  showFullRegistry = false;
  promptButtons.forEach(button => {
    button.classList.toggle('active', normalize(button.dataset.query) === normalize(query));
  });
  render(query);
  updateSuggestions('');
  syncUrl(query);
  if (scroll) document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bindRegistryToggle() {
  const button = document.querySelector('#registry-toggle');
  if (!button) return;
  button.addEventListener('click', () => {
    if (input.value.trim()) {
      applyQuery('', false);
      input.focus();
      return;
    }
    showFullRegistry = !showFullRegistry;
    render('');
  });
}

function activateTab(name, scroll = false) {
  tabButtons.forEach(button => {
    const selected = button.dataset.tab === name;
    button.setAttribute('aria-selected', String(selected));
  });

  tabPanels.forEach(panel => {
    panel.hidden = panel.id !== `about-${name}`;
  });

  if (scroll) document.querySelector('#about').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function bindInternalEvidenceLinks() {
  document.querySelectorAll('[data-open-tab]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      activateTab(link.dataset.openTab, true);
    });
  });
}

input.addEventListener('input', () => {
  const query = input.value;
  showFullRegistry = false;
  render(query);
  updateSuggestions(query);
  promptButtons.forEach(button => {
    button.classList.toggle('active', normalize(button.dataset.query) === normalize(query));
  });
  syncUrl(query.trim());
});

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    suggestions.hidden = true;
    document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  if (event.key === 'Escape') {
    suggestions.hidden = true;
  }
});

clearButton.addEventListener('click', () => {
  applyQuery('', false);
  input.focus();
});

promptButtons.forEach(button => {
  button.addEventListener('click', () => applyQuery(button.dataset.query, true));
});

tabButtons.forEach(button => {
  button.addEventListener('click', () => activateTab(button.dataset.tab, false));
});

document.addEventListener('keydown', event => {
  const tag = document.activeElement && document.activeElement.tagName;
  const typing = tag === 'INPUT' || tag === 'TEXTAREA';
  if (event.key === '/' && !typing) {
    event.preventDefault();
    input.focus();
  }
  if (event.key === 'Escape') suggestions.hidden = true;
});

document.addEventListener('click', event => {
  if (!suggestions.contains(event.target) && event.target !== input) {
    suggestions.hidden = true;
  }
});

const initialQuery = new URLSearchParams(window.location.search).get('q') || '';
if (initialQuery) {
  input.value = initialQuery;
  render(initialQuery);
} else {
  render('');
}
