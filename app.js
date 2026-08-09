const evidence = [
  {
    id: 'production-stories',
    title: 'Production Engineering Stories',
    type: 'REAL PRODUCTION',
    description: '21 first-hand, sanitized cases covering incidents, integrations, QA, customer recovery, delivery decisions and support improvement.',
    url: 'https://github.com/zpthanos/production-stories',
    tags: ['production', 'customer ownership', 'incident response', 'troubleshooting', 'documentation', 'communication'],
    roles: ['technical support engineer', 'customer support engineer', 'application support engineer', 'customer solutions engineer', 'technical account manager', 'customer success engineer']
  },
  {
    id: 'malware-recovery',
    title: 'Critical malware recovery',
    type: 'SANITIZED PRODUCTION',
    description: 'Safe recovery and relaunch of a compromised ecommerce site with credential rotation, stakeholder communication and full customer-journey verification.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/06-malware-recovery.md',
    tags: ['incident response', 'security', 'production', 'recovery', 'verification', 'customer communication'],
    roles: ['application support engineer', 'technical support engineer', 'security operations', 'incident response engineer', 'customer support engineer']
  },
  {
    id: 'checkout-conflict',
    title: 'Payment / checkout compatibility conflict',
    type: 'SANITIZED PRODUCTION',
    description: 'Isolated a compatibility issue, identified the supported resolution and regression-tested the complete purchasing journey.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/03-payoneer-funnelkit-conflict.md',
    tags: ['payments', 'checkout', 'integration', 'reproduction', 'regression testing', 'woocommerce'],
    roles: ['technical support engineer', 'application support engineer', 'customer solutions engineer', 'qa support engineer', 'ecommerce support']
  },
  {
    id: 'client-engagements',
    title: 'End-to-end client engagements',
    type: 'SANITIZED PRODUCTION',
    description: 'Customer discovery, requirements clarification, delivery decisions, expectation setting, incident communication and post-launch support.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/07-end-to-end-client-engagements.md',
    tags: ['customer ownership', 'requirements', 'delivery', 'communication', 'onboarding', 'account management'],
    roles: ['customer solutions engineer', 'technical account manager', 'customer success engineer', 'technical support engineer']
  },
  {
    id: 'ambiguous-request',
    title: 'Creating structure from an ambiguous request',
    type: 'SANITIZED PRODUCTION',
    description: 'Turned unclear business needs into concrete requirements, implementation decisions and reviewable outcomes.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/14-ambiguous-requirements.md',
    tags: ['requirements', 'ambiguity', 'customer communication', 'delivery', 'technical translation'],
    roles: ['customer solutions engineer', 'technical account manager', 'solutions engineer', 'customer success engineer']
  },
  {
    id: 'client-recovery',
    title: 'Recovering an unhappy client relationship',
    type: 'SANITIZED PRODUCTION',
    description: 'Reopened requirements, listened to dissatisfaction, coordinated changes and restored confidence through clear ownership and final approval.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/17-client-relationship-recovery.md',
    tags: ['customer communication', 'account ownership', 'requirements', 'escalation', 'trust recovery'],
    roles: ['technical account manager', 'customer solutions engineer', 'customer success engineer', 'technical support engineer']
  },
  {
    id: 'cache-complaints',
    title: 'Reducing recurring cache complaints',
    type: 'SANITIZED PRODUCTION',
    description: 'Turned repeated customer frustration into a clearer troubleshooting process and reusable support guidance.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/19-recurring-cache-complaints.md',
    tags: ['caching', 'root cause', 'documentation', 'process improvement', 'support operations'],
    roles: ['technical support engineer', 'application support engineer', 'customer support engineer', 'support operations']
  },
  {
    id: 'dns-services',
    title: 'DNS and third-party services',
    type: 'SANITIZED PRODUCTION',
    description: 'Production troubleshooting across DNS and external services, with evidence-led isolation and controlled changes.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/08-dns-third-party-services.md',
    tags: ['dns', 'third-party integration', 'networking', 'production', 'troubleshooting'],
    roles: ['application support engineer', 'technical support engineer', 'security operations', 'support engineer']
  },
  {
    id: 'accessibility-defect',
    title: 'Accessibility-related checkout defect',
    type: 'SANITIZED PRODUCTION',
    description: 'Defect reproduction and verification around an accessibility-sensitive customer journey.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/10-accessibility-checkout-defect.md',
    tags: ['accessibility', 'qa', 'checkout', 'defect reproduction', 'verification'],
    roles: ['qa support engineer', 'qa engineer', 'technical support engineer', 'application support engineer']
  },
  {
    id: 'pagespeed',
    title: 'PageSpeed improvement',
    type: 'SANITIZED PRODUCTION',
    description: 'Improved a production store from below 20 to above 75 while protecting catalogue, cart and checkout behaviour.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/11-pagespeed-improvement.md',
    tags: ['performance', 'production', 'regression testing', 'woocommerce', 'controlled change'],
    roles: ['technical support engineer', 'application support engineer', 'qa support engineer', 'web operations']
  },
  {
    id: 'playwright',
    title: 'WooCommerce Playwright',
    type: 'EXECUTABLE EVIDENCE',
    description: 'End-to-end guest checkout testing with Playwright, axe accessibility checks, CI, traces, screenshots and machine-readable reports.',
    url: 'https://github.com/zpthanos/WooCommerce-Playwright',
    tags: ['playwright', 'typescript', 'qa', 'accessibility', 'ci', 'regression testing', 'checkout'],
    roles: ['qa support engineer', 'qa engineer', 'technical support engineer', 'developer support', 'application support engineer']
  },
  {
    id: 'browserstack',
    title: 'BrowserStack Business Testing',
    type: 'EXECUTABLE EVIDENCE',
    description: 'Cross-browser automation, Playwright/TypeScript, secure configuration, GitHub Actions, test operations and release guidance.',
    url: 'https://github.com/zpthanos/Browserstack-Business-Testing',
    tags: ['browserstack', 'playwright', 'cross-browser', 'qa', 'ci', 'release verification', 'documentation'],
    roles: ['qa support engineer', 'qa engineer', 'technical support engineer', 'developer support']
  },
  {
    id: 'cloudflare',
    title: 'Cloudflare Security Starter',
    type: 'EXECUTABLE EVIDENCE',
    description: 'Worker request controls, WAF templates, rate limiting, monitoring and staged rollout guidance with rollback thinking.',
    url: 'https://github.com/zpthanos/Cloudflare-Security-Starter',
    tags: ['cloudflare', 'security', 'waf', 'rate limiting', 'monitoring', 'http', 'operations'],
    roles: ['security operations', 'technical support engineer', 'application support engineer', 'developer support']
  },
  {
    id: 'washland',
    title: 'The Washland Portal',
    type: 'EXECUTABLE EVIDENCE',
    description: 'PHP 8.2 and MySQL application with validation, prepared statements, JSON endpoints and explicit HTTP behaviour.',
    url: 'https://github.com/zpthanos/The-Washland-Portal',
    tags: ['php', 'mysql', 'api', 'json', 'http', 'backend', 'validation'],
    roles: ['application support engineer', 'technical support engineer', 'api support', 'developer support', 'support engineer']
  },
  {
    id: 'civicflow',
    title: 'CivicFlow',
    type: 'PORTFOLIO CASE STUDY',
    description: 'Requirements-first delivery case study covering business rules, acceptance criteria, traceability, test strategy and release discipline.',
    url: 'https://github.com/zpthanos/civicflow-portfolio',
    tags: ['requirements', 'acceptance criteria', 'traceability', 'qa', 'api design', 'delivery'],
    roles: ['customer solutions engineer', 'technical account manager', 'solutions engineer', 'business analyst', 'qa engineer']
  },
  {
    id: 'handover',
    title: 'WooCommerce operations and customer handover',
    type: 'SANITIZED PRODUCTION',
    description: 'Established workflows for a 2,000+ product store, configured the first 200 products and trained a non-technical owner for independent operation.',
    url: 'https://github.com/zpthanos/production-stories/blob/main/stories/05-woocommerce-administration-handover.md',
    tags: ['onboarding', 'customer enablement', 'woocommerce', 'documentation', 'training'],
    roles: ['customer solutions engineer', 'customer success engineer', 'technical account manager', 'technical support engineer']
  }
];

const roleProfiles = [
  {
    name: 'Technical Support Engineer',
    aliases: ['technical support', 'support engineer', 'customer support engineer', 'product support engineer'],
    summary: 'Production ownership, issue reproduction, integrations, escalation, verification and reusable support guidance.',
    strongest: ['production-stories', 'checkout-conflict', 'playwright', 'cache-complaints', 'washland', 'cloudflare']
  },
  {
    name: 'Customer Solutions Engineer',
    aliases: ['customer solutions', 'solutions engineer', 'customer engineer', 'customer success engineer'],
    summary: 'Requirements clarification, customer ownership, integrations, onboarding, technical translation and delivery follow-through.',
    strongest: ['client-engagements', 'ambiguous-request', 'client-recovery', 'handover', 'civicflow', 'checkout-conflict']
  },
  {
    name: 'Application Support Engineer',
    aliases: ['application support', 'production support', 'software support engineer'],
    summary: 'Incident response, HTTP/DNS troubleshooting, backend context, reproduction, escalation and regression verification.',
    strongest: ['malware-recovery', 'dns-services', 'checkout-conflict', 'washland', 'playwright', 'cache-complaints']
  },
  {
    name: 'Technical Account Manager',
    aliases: ['technical account', 'tam', 'technical customer success'],
    summary: 'Account ownership, expectation management, requirements, incident communication, recovery and long-term enablement.',
    strongest: ['client-engagements', 'client-recovery', 'ambiguous-request', 'handover', 'production-stories', 'civicflow']
  },
  {
    name: 'QA / Support Engineer',
    aliases: ['qa support engineer', 'qa engineer', 'quality assurance', 'test engineer'],
    summary: 'Reproduction, cross-browser testing, accessibility, regression evidence, CI and release verification.',
    strongest: ['playwright', 'browserstack', 'accessibility-defect', 'pagespeed', 'checkout-conflict', 'production-stories']
  },
  {
    name: 'API Support',
    aliases: ['api support engineer', 'integration support', 'integration engineer', 'api engineer'],
    summary: 'HTTP behaviour, JSON, integration troubleshooting, reproducible requests, backend context and customer-to-engineering translation.',
    strongest: ['washland', 'checkout-conflict', 'dns-services', 'cloudflare', 'client-engagements', 'civicflow']
  },
  {
    name: 'Security Operations',
    aliases: ['security operations', 'security support', 'soc', 'secure operations'],
    summary: 'Operational discipline, incident handling, controlled change, secure communications context and disclosure awareness.',
    strongest: ['cloudflare', 'malware-recovery', 'dns-services', 'production-stories', 'washland']
  },
  {
    name: 'Developer Support',
    aliases: ['developer support engineer', 'developer experience support', 'technical developer support'],
    summary: 'Technical reproduction, APIs, code-level context, CI evidence, diagnostics and engineering-quality handoffs.',
    strongest: ['playwright', 'browserstack', 'washland', 'cloudflare', 'checkout-conflict', 'production-stories']
  }
];

const input = document.querySelector('#role-input');
const clearButton = document.querySelector('#clear-search');
const quickButtons = [...document.querySelectorAll('.quick-roles button')];
const suggestions = document.querySelector('#suggestions');
const grid = document.querySelector('#evidence-grid');
const resultsTitle = document.querySelector('#results-title');
const resultCount = document.querySelector('#result-count');
const fitSummary = document.querySelector('#fit-summary');

const normalize = value => value.toLowerCase().trim().replace(/[^a-z0-9+#/. -]/g, ' ').replace(/\s+/g, ' ');

function findProfile(query) {
  const q = normalize(query);
  if (!q) return null;
  return roleProfiles
    .map(profile => {
      const names = [profile.name, ...profile.aliases].map(normalize);
      let score = 0;
      names.forEach(name => {
        if (q === name) score = Math.max(score, 100);
        else if (name.includes(q) || q.includes(name)) score = Math.max(score, 75);
        else {
          const words = q.split(' ').filter(Boolean);
          const matches = words.filter(word => name.includes(word)).length;
          score = Math.max(score, matches * 18);
        }
      });
      return { profile, score };
    })
    .sort((a, b) => b.score - a.score)[0];
}

function scoreEvidence(item, query, profile) {
  const q = normalize(query);
  const tokens = q.split(' ').filter(word => word.length > 1);
  const haystack = normalize([item.title, item.description, ...item.tags, ...item.roles].join(' '));
  let score = 0;

  if (profile) {
    const curatedIndex = profile.strongest.indexOf(item.id);
    if (curatedIndex !== -1) score += 140 - curatedIndex * 12;
    if (item.roles.some(role => normalize(role).includes(normalize(profile.name)))) score += 35;
  }

  tokens.forEach(token => {
    if (normalize(item.title).includes(token)) score += 30;
    if (item.roles.some(role => normalize(role).includes(token))) score += 22;
    if (item.tags.some(tag => normalize(tag).includes(token))) score += 15;
    if (haystack.includes(token)) score += 5;
  });

  if (item.type.includes('PRODUCTION')) score += 8;
  if (item.type === 'EXECUTABLE EVIDENCE') score += 6;
  return score;
}

function cardTemplate(item, index, maxScore) {
  const relevance = maxScore > 0 ? Math.max(72, Math.min(99, Math.round((item._score / maxScore) * 99))) : null;
  return `
    <article class="evidence-card">
      <div class="card-top">
        <span class="card-type">${item.type}</span>
        ${relevance ? `<span class="match-score">${relevance}% match</span>` : ''}
      </div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="tags">${item.tags.slice(0, 4).map(tag => `<span>${tag}</span>`).join('')}</div>
      <a class="card-link" href="${item.url}">Inspect evidence →</a>
    </article>`;
}

function render(query = '') {
  const q = query.trim();
  const match = findProfile(q);
  const profile = match && match.score >= 25 ? match.profile : null;

  let ranked;
  if (!q) {
    const defaultIds = ['production-stories', 'checkout-conflict', 'playwright', 'client-recovery', 'cloudflare', 'washland'];
    ranked = defaultIds.map(id => ({ ...evidence.find(item => item.id === id), _score: 100 }));
    resultsTitle.textContent = 'Start with the strongest evidence';
    resultCount.textContent = 'Curated for technical support and customer engineering.';
    fitSummary.innerHTML = `
      <div>
        <span class="label">BEST FIRST IMPRESSION</span>
        <h3>Production ownership + technical reproduction + verified closure</h3>
        <p>The default route mixes real production judgment with executable technical evidence.</p>
      </div>
      <a class="text-link" href="https://github.com/zpthanos/production-stories">Open production casebook →</a>`;
  } else {
    ranked = evidence
      .map(item => ({ ...item, _score: scoreEvidence(item, q, profile) }))
      .filter(item => item._score > 0)
      .sort((a, b) => b._score - a._score)
      .slice(0, 6);

    resultsTitle.textContent = profile ? `Evidence for ${profile.name}` : `Evidence matching “${q}”`;
    resultCount.textContent = ranked.length ? `${ranked.length} strongest items surfaced.` : 'No direct match yet.';

    if (profile) {
      fitSummary.innerHTML = `
        <div>
          <span class="label">WHY THE FIT IS CREDIBLE</span>
          <h3>${profile.summary}</h3>
          <p>Ranked from real production evidence first, then executable technical work.</p>
        </div>
        <a class="text-link" href="#process">See how I troubleshoot →</a>`;
    } else {
      fitSummary.innerHTML = `
        <div>
          <span class="label">SEARCHING BY EVIDENCE</span>
          <h3>Try a role title, skill, system or problem.</h3>
          <p>Examples: API, DNS, Playwright, customer onboarding, incident response, checkout, security.</p>
        </div>`;
    }
  }

  if (!ranked.length) {
    grid.innerHTML = `<article class="evidence-card"><span class="card-type">NO DIRECT MATCH</span><h3>Try a broader phrase.</h3><p>Use one of the suggested roles above, or search for API, incident, QA, customer, DNS, checkout, security or documentation.</p></article>`;
    return;
  }

  const maxScore = Math.max(...ranked.map(item => item._score));
  grid.innerHTML = ranked.map((item, index) => cardTemplate(item, index, maxScore)).join('');
}

function updateSuggestions(value) {
  const q = normalize(value);
  if (!q) {
    suggestions.hidden = true;
    suggestions.innerHTML = '';
    return;
  }

  const matches = roleProfiles
    .filter(profile => normalize([profile.name, ...profile.aliases].join(' ')).includes(q) || q.split(' ').some(token => normalize(profile.name).includes(token)))
    .slice(0, 4);

  if (!matches.length) {
    suggestions.hidden = true;
    suggestions.innerHTML = '';
    return;
  }

  suggestions.innerHTML = matches.map(profile => `
    <button type="button" data-suggestion="${profile.name}">
      <span>${profile.name}</span><small>show evidence</small>
    </button>`).join('');
  suggestions.hidden = false;

  suggestions.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => applyQuery(button.dataset.suggestion, true));
  });
}

function applyQuery(value, scroll = false) {
  input.value = value;
  quickButtons.forEach(button => button.classList.toggle('active', normalize(button.dataset.query) === normalize(value)));
  suggestions.hidden = true;
  render(value);
  if (scroll) document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

input.addEventListener('input', event => {
  quickButtons.forEach(button => button.classList.remove('active'));
  updateSuggestions(event.target.value);
  render(event.target.value);
});

input.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    suggestions.hidden = true;
    document.querySelector('#evidence').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

clearButton.addEventListener('click', () => {
  input.value = '';
  suggestions.hidden = true;
  quickButtons.forEach(button => button.classList.remove('active'));
  render('');
  input.focus();
});

quickButtons.forEach(button => button.addEventListener('click', () => applyQuery(button.dataset.query, true)));

document.addEventListener('keydown', event => {
  if (event.key === '/' && document.activeElement !== input && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    input.focus();
  }
  if (event.key === 'Escape') {
    suggestions.hidden = true;
    input.blur();
  }
});

document.addEventListener('click', event => {
  if (!event.target.closest('.role-search')) suggestions.hidden = true;
});

const tabs = [...document.querySelectorAll('[role="tab"]')];
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(other => {
      const selected = other === tab;
      other.setAttribute('aria-selected', String(selected));
      document.querySelector(`#${other.getAttribute('aria-controls')}`).hidden = !selected;
    });
  });
});

render();
