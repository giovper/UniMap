/* ================================================================
   UniMap — app.js
   Mappa interattiva università europee
   Tecnologia: Leaflet.js + Vanilla JS
   ================================================================ */

'use strict';

// ─── Costanti ──────────────────────────────────────────────────
const QS_CLASS = (rank) => {
  if (rank <= 50)  return 'qs-top50';
  if (rank <= 150) return 'qs-top150';
  if (rank <= 300) return 'qs-top300';
  return 'qs-top500';
};

const QS_COLOR = (rank) => {
  if (rank <= 50)  return '#00e5a0';
  if (rank <= 150) return '#4f8fff';
  if (rank <= 300) return '#ffb347';
  return '#ff7070';
};

const FIT_COLOR = (score) => {
  if (score >= 9)  return 'var(--accent-green)';
  if (score >= 7)  return 'var(--accent-cyan)';
  if (score >= 5)  return 'var(--accent-amber)';
  return 'var(--accent-red)';
};

const BUDGET_MAX = {
  1: 1600, // 1 stelle = >1400€/mese
  2: 1400,
  3: 1200,
  4: 1000,
  5: 800,
};

// ─── Stato ─────────────────────────────────────────────────────
let map;
let markers = {};      // id → { marker, uni }
let selectedId = null;
let compareList = [];  // max 3 ids
let compareMode = false;

let filters = {
  search: '',
  qsMax: 500,
  budgetMax: 2000,
  paesi: new Set(),
  onlyEnglish: false,
  onlyFree: false,
};

// ─── Init ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initMarkers();
  initFilters();
  initUI();
  updateStats();
  applyFilters();

  // Nascondi loading
  setTimeout(() => {
    document.getElementById('loading').classList.add('done');
  }, 1600);
});

// ─── Mappa Leaflet ──────────────────────────────────────────────
function initMap() {
  map = L.map('map', {
    center: [52, 12],
    zoom: 4,
    zoomControl: false,
    attributionControl: false,
  });

  // Tile: CartoDB Dark Matter
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO',
    subdomains: 'abcd',
    maxZoom: 18,
  }).addTo(map);

  // Zoom control in basso a destra
  L.control.zoom({ position: 'bottomright' }).addTo(map);

  // Attribuzione
  L.control.attribution({ position: 'bottomright', prefix: '© OpenStreetMap · CARTO · QS 2027' }).addTo(map);

  // Click su mappa → deseleziona
  map.on('click', () => {
    deselectAll();
  });
}

// ─── Markers ────────────────────────────────────────────────────
function initMarkers() {
  UNIVERSITIES.forEach(uni => {
    const cls = QS_CLASS(uni.qs2027);
    const color = QS_COLOR(uni.qs2027);

    // Icona custom HTML
    const icon = L.divIcon({
      className: '',
      html: `<div class="uni-marker ${cls}" style="position:relative;" data-id="${uni.id}" title="${uni.nome}">${uni.qs2027}</div>`,
      iconSize: null,
      iconAnchor: [0, 0],
    });

    const marker = L.marker([uni.lat, uni.lng], {
      icon,
      zIndexOffset: 500 - uni.qs2027, // migliore rank = più in alto
    });

    // Tooltip hover
    marker.bindTooltip(
      `<div class="uni-tooltip">
        <strong>${uni.bandiera} ${uni.nome}</strong>
        <span class="qs-rank">QS #${uni.qs2027} · ${uni.citta}</span>
      </div>`,
      { permanent: false, direction: 'top', offset: [0, -12], opacity: 1 }
    );

    marker.on('click', (e) => {
      L.DomEvent.stopPropagation(e);
      handleMarkerClick(uni.id);
    });

    marker.addTo(map);
    markers[uni.id] = { marker, uni };
  });
}

function handleMarkerClick(id) {
  if (compareMode) {
    toggleCompareSlot(id);
  } else {
    selectUniversity(id);
  }
}

function selectUniversity(id) {
  // Deseleziona precedente
  if (selectedId && markers[selectedId]) {
    const el = getMarkerEl(selectedId);
    if (el) el.classList.remove('selected');
  }
  selectedId = id;
  const el = getMarkerEl(id);
  if (el) el.classList.add('selected');

  openDetail(id);

  // Pan verso il marker (leggermente a sinistra per la sidebar)
  const uni = markers[id].uni;
  map.panTo([uni.lat, uni.lng], { animate: true, duration: 0.6 });
}

function deselectAll() {
  if (selectedId) {
    const el = getMarkerEl(selectedId);
    if (el) el.classList.remove('selected');
    selectedId = null;
  }
  closeDetail();
}

function getMarkerEl(id) {
  const m = markers[id];
  if (!m) return null;
  return m.marker.getElement()?.querySelector('.uni-marker');
}

// ─── Detail Panel ───────────────────────────────────────────────
function openDetail(id) {
  const uni = UNIVERSITIES.find(u => u.id === id);
  if (!uni) return;

  // Header
  document.getElementById('d-flag').textContent = uni.bandiera;
  document.getElementById('d-name').textContent = uni.nome;
  document.getElementById('d-location').textContent = `📍 ${uni.citta}, ${uni.paese}`;

  // QS badge
  const qsEl = document.getElementById('d-qs-badge');
  const color = QS_COLOR(uni.qs2027);
  qsEl.style.background = `${color}22`;
  qsEl.style.border = `1px solid ${color}55`;
  qsEl.style.color = color;
  const chg = uni.qs2026
    ? (uni.qs2027 < uni.qs2026 ? ` ▲${uni.qs2026 - uni.qs2027}` : uni.qs2027 > uni.qs2026 ? ` ▼${uni.qs2027 - uni.qs2026}` : ' =')
    : '';
  qsEl.innerHTML = `<span style="font-size:16px;font-weight:800">#${uni.qs2027}</span> QS Mondiale 2027${chg ? `<span style="font-size:10px;opacity:0.7">${chg} rispetto 2026</span>` : ''}`;

  // Body
  const body = document.getElementById('detail-body');
  body.innerHTML = buildDetailBody(uni);

  // Apri panel
  document.getElementById('detail-panel').classList.add('open');
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
}

function buildDetailBody(uni) {
  const fitColor = FIT_COLOR(uni.fit_score);
  const budgetStars = buildBudgetStars(uni.budget_rating);
  const langBadge = uni.lingua_triennale_flag.includes('✅')
    ? `<span class="lang-badge ok">${uni.lingua_triennale_flag}</span>`
    : `<span class="lang-badge warn">${uni.lingua_triennale_flag}</span>`;

  const proPills = (uni.punti_forza || []).map(p => `<span class="pill pro">✓ ${p}</span>`).join('');
  const conPills = (uni.punti_deboli || []).map(p => `<span class="pill con">✗ ${p}</span>`).join('');

  const addBtn = compareList.includes(uni.id)
    ? `<button class="btn-nav active" onclick="removeFromCompare('${uni.id}')" style="width:100%;margin-bottom:8px">✕ Rimuovi dal confronto</button>`
    : compareList.length < 3
      ? `<button class="btn-nav" onclick="addToCompare('${uni.id}')" style="width:100%;margin-bottom:8px">⚖️ Aggiungi al confronto</button>`
      : '';

  const lavoroInfo = (typeof LAVORO_PAESE !== 'undefined') ? LAVORO_PAESE[uni.paese] : null;
  const lavoroSection = lavoroInfo ? `
    <!-- Lavoro Part-Time -->
    <div class="info-section" style="border-left: 3px solid var(--accent-green);">
      <div class="info-section-title">💼 Lavoro Part-time & Salari (${lavoroInfo.emoji} ${uni.paese})</div>
      <div class="info-row">
        <span class="info-key">Paga oraria tipica</span>
        <span class="info-val success">${lavoroInfo.salario_minimo_ora}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Ore/sett. tipiche</span>
        <span class="info-val">${lavoroInfo.ore_studente_tipiche}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Stima guadagno</span>
        <span class="info-val highlight">${lavoroInfo.guadagno_mensile_stima}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Lavori comuni</span>
        <span class="info-val" style="font-size:11px">${lavoroInfo.tipi_lavoro_comuni}</span>
      </div>
      <div style="margin-top:8px;font-size:11px;color:var(--text-secondary);background:rgba(255,255,255,0.03);padding:10px;border-radius:6px;line-height:1.5">
        <strong>📋 Regole EU:</strong> ${lavoroInfo.regole_eu}<br/>
        <strong style="color:var(--accent-cyan);display:block;margin-top:4px">💡 Combo Borse & Lavoro:</strong> ${lavoroInfo.combinazione_borse}<br/>
        <strong style="color:var(--accent-amber);display:block;margin-top:4px">📊 Esempio Bilancio:</strong> ${lavoroInfo.bilancio_mensile}
        ${lavoroInfo.note_speciali ? `<br/><span style="color:var(--accent-green);font-weight:600;display:block;margin-top:4px">${lavoroInfo.note_speciali}</span>` : ''}
      </div>
    </div>
  ` : '';

  return `
    <!-- Fit Score -->
    <div class="fit-bar-wrap">
      <div class="fit-bar-header">
        <span class="fit-label">🎯 Fit Score (profilo Giovanni)</span>
        <span class="fit-score-val" style="color:${fitColor}">${uni.fit_score}<span style="font-size:14px;opacity:0.5">/10</span></span>
      </div>
      <div class="fit-bar"><div class="fit-bar-fill" style="width:${uni.fit_score * 10}%"></div></div>
      <div class="fit-note">${uni.fit_note}</div>
    </div>

    <!-- Costi -->
    <div class="info-section">
      <div class="info-section-title">💸 Costi</div>
      <div class="info-row">
        <span class="info-key">Tasse/anno</span>
        <span class="info-val ${uni.tasse_annue_eu.includes('GRATIS') ? 'success' : ''}">${uni.tasse_annue_eu}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Affitto/mese</span>
        <span class="info-val">${uni.affitto_mensile}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Vita totale/mese</span>
        <span class="info-val highlight">${uni.costo_vita_totale}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Con 600-800€</span>
        <span class="info-val">${budgetStars}</span>
      </div>
    </div>

    ${lavoroSection}

    <!-- Ammissione -->
    <div class="info-section">
      <div class="info-section-title">📋 Ammissione</div>
      <div class="info-row">
        <span class="info-key">Lingua laurea</span>
        <span class="info-val">${langBadge} <span style="color:var(--text-muted);font-size:10px;display:block;margin-top:3px">${uni.lingua_triennale}</span></span>
      </div>
      <div class="info-row">
        <span class="info-key">Requisiti</span>
        <span class="info-val">${uni.requisiti_ammissione}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Lingua req.</span>
        <span class="info-val">${uni.test_lingua}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Selettività</span>
        <span class="info-val">${buildDifficultyBar(uni.difficolta_ammissione)}</span>
      </div>
    </div>

    <!-- Lauree -->
    <div class="info-section">
      <div class="info-section-title">💻 Lauree disponibili</div>
      <div class="info-row">
        <span class="info-key">CS / Informatica</span>
        <span class="info-val">${uni.lauree_cs}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Altre ingegnerie</span>
        <span class="info-val">${uni.altre_ingegnerie}</span>
      </div>
    </div>

    <!-- Vita -->
    <div class="info-section">
      <div class="info-section-title">🏙️ Qualità della vita</div>
      <div class="info-row">
        <span class="info-key">Città</span>
        <span class="info-val">${uni.qualita_vita}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Soddisfazione</span>
        <span class="info-val">${uni.soddisfazione_studenti}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Studio/vita</span>
        <span class="info-val">${uni.rapporto_studio_vita}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Didattica</span>
        <span class="info-val">${uni.approccio_didattico}</span>
      </div>
    </div>

    <!-- Sussidi -->
    <div class="info-section">
      <div class="info-section-title">🎁 Borse e sussidi</div>
      <div style="font-size:12px;color:var(--text-secondary);line-height:1.6">${uni.borse_sussidi}</div>
    </div>

    <!-- Pro/Contro -->
    <div class="info-section">
      <div class="info-section-title">✅ Punti di forza</div>
      <div class="pills-list">${proPills}</div>
    </div>
    <div class="info-section">
      <div class="info-section-title">⚠️ Punti deboli</div>
      <div class="pills-list">${conPills}</div>
    </div>

    <!-- Actions -->
    <div style="padding-top:4px">
      ${addBtn}
      <a class="btn-visit" href="${uni.url}" target="_blank" rel="noopener">🌐 Sito ufficiale →</a>
    </div>
  `;
}

function buildBudgetStars(rating) {
  let html = '<div class="budget-stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<div class="budget-star ${i <= rating ? 'filled' : 'empty'}"></div>`;
  }
  const labels = ['', 'Impossibile', 'Difficile', 'Con aiuti', 'Fattibile', 'Comodo ✓'];
  html += `<span style="font-size:11px;color:var(--text-secondary);margin-left:4px">${labels[rating]}</span>`;
  html += '</div>';
  return html;
}

function buildDifficultyBar(level) {
  const labels = ['', 'Aperta', 'Facile', 'Moderata', 'Selettiva', 'Durissima'];
  let html = '<div style="display:flex;gap:3px;align-items:center">';
  for (let i = 1; i <= 5; i++) {
    const color = level >= 4 ? 'var(--accent-red)' : level >= 3 ? 'var(--accent-amber)' : 'var(--accent-green)';
    html += `<div style="width:10px;height:10px;border-radius:2px;background:${i <= level ? color : 'var(--border)'}"></div>`;
  }
  html += `<span style="font-size:11px;color:var(--text-secondary);margin-left:4px">${labels[level]}</span>`;
  html += '</div>';
  return html;
}

// ─── Filtri ─────────────────────────────────────────────────────
function initFilters() {
  // Search
  document.getElementById('search-input').addEventListener('input', (e) => {
    filters.search = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // QS range
  const qsSlider = document.getElementById('qs-filter');
  qsSlider.addEventListener('input', () => {
    filters.qsMax = +qsSlider.value;
    document.getElementById('qs-max-lbl').textContent = qsSlider.value;
    updateSliderGradient(qsSlider, qsSlider.value, qsSlider.max);
    applyFilters();
  });
  updateSliderGradient(qsSlider, qsSlider.value, qsSlider.max);

  // Budget range
  const budgetSlider = document.getElementById('budget-filter');
  budgetSlider.addEventListener('input', () => {
    filters.budgetMax = +budgetSlider.value;
    document.getElementById('budget-lbl').textContent = Number(budgetSlider.value).toLocaleString('it-IT');
    updateSliderGradient(budgetSlider, budgetSlider.value - budgetSlider.min, budgetSlider.max - budgetSlider.min);
    applyFilters();
  });
  updateSliderGradient(budgetSlider, budgetSlider.value - budgetSlider.min, budgetSlider.max - budgetSlider.min);

  // Country tags
  const tagsGrid = document.getElementById('country-tags');
  PAESI.forEach(paese => {
    const uni = UNIVERSITIES.find(u => u.paese === paese);
    const btn = document.createElement('button');
    btn.className = 'tag-btn';
    btn.dataset.paese = paese;
    btn.innerHTML = `${uni?.bandiera || ''} ${paese}`;
    btn.addEventListener('click', () => {
      btn.classList.toggle('active');
      if (btn.classList.contains('active')) {
        filters.paesi.add(paese);
      } else {
        filters.paesi.delete(paese);
      }
      applyFilters();
    });
    tagsGrid.appendChild(btn);
  });

  // Toggles
  document.getElementById('toggle-english').addEventListener('change', (e) => {
    filters.onlyEnglish = e.target.checked;
    applyFilters();
  });
  document.getElementById('toggle-free').addEventListener('change', (e) => {
    filters.onlyFree = e.target.checked;
    applyFilters();
  });

  // Clear
  document.getElementById('btn-clear-filters').addEventListener('click', clearFilters);
}

function updateSliderGradient(el, val, max) {
  const pct = (val / max * 100).toFixed(1) + '%';
  el.style.setProperty('--val', pct);
}

function clearFilters() {
  filters = { search: '', qsMax: 500, budgetMax: 2000, paesi: new Set(), onlyEnglish: false, onlyFree: false };

  document.getElementById('search-input').value = '';
  document.getElementById('qs-filter').value = 500;
  document.getElementById('qs-max-lbl').textContent = '500';
  document.getElementById('budget-filter').value = 2000;
  document.getElementById('budget-lbl').textContent = '2.000';
  document.getElementById('toggle-english').checked = false;
  document.getElementById('toggle-free').checked = false;

  document.querySelectorAll('.tag-btn.active').forEach(b => b.classList.remove('active'));

  updateSliderGradient(document.getElementById('qs-filter'), 500, 500);
  updateSliderGradient(document.getElementById('budget-filter'), 1400, 1400);

  applyFilters();
  showToast('Filtri azzerati');
}

function applyFilters() {
  let visible = 0;

  UNIVERSITIES.forEach(uni => {
    const el = getMarkerEl(uni.id);
    if (!el) return;

    let show = true;

    // Search
    if (filters.search) {
      const hay = `${uni.nome} ${uni.citta} ${uni.paese} ${uni.lauree_cs}`.toLowerCase();
      if (!hay.includes(filters.search)) show = false;
    }

    // QS rank
    if (uni.qs2027 > filters.qsMax) show = false;

    // Budget: confronta con il budget_rating
    // budget_rating 1→>1400€, 2→~1200-1400, 3→~900-1200, 4→~700-900, 5→<700
    const estimatedMax = BUDGET_MAX[uni.budget_rating] || 1600;
    if (estimatedMax > filters.budgetMax) show = false;

    // Paese
    if (filters.paesi.size > 0 && !filters.paesi.has(uni.paese)) show = false;

    // Solo inglese
    if (filters.onlyEnglish && !uni.lingua_triennale_flag.includes('✅')) show = false;

    // Solo gratis
    if (filters.onlyFree && !uni.tasse_annue_eu.includes('GRATIS')) show = false;

    // Applica
    if (show) {
      el.classList.remove('hidden');
      visible++;
    } else {
      el.classList.add('hidden');
    }
  });

  document.getElementById('filtered-count').textContent = visible;
  document.getElementById('stat-visible').textContent = visible;
}

// ─── Stats ──────────────────────────────────────────────────────
function updateStats() {
  document.getElementById('stat-total').textContent = UNIVERSITIES.length;
  document.getElementById('stat-paesi').textContent = PAESI.length;
  document.getElementById('stat-visible').textContent = UNIVERSITIES.length;
  document.getElementById('filtered-count').textContent = UNIVERSITIES.length;
}

// ─── UI Events ──────────────────────────────────────────────────
function initUI() {
  // Toggle filtri
  document.getElementById('btn-toggle-filters').addEventListener('click', () => {
    const panel = document.getElementById('filters-panel');
    const btn = document.getElementById('btn-toggle-filters');
    panel.classList.toggle('collapsed');
    btn.classList.toggle('active');
  });

  // Reset vista
  document.getElementById('btn-reset-view').addEventListener('click', () => {
    map.flyTo([52, 12], 4, { animate: true, duration: 1 });
  });

  // Close detail
  document.getElementById('detail-close').addEventListener('click', deselectAll);

  // Compare toggle
  document.getElementById('btn-compare-toggle').addEventListener('click', () => {
    compareMode = !compareMode;
    const btn = document.getElementById('btn-compare-toggle');
    const bar = document.getElementById('compare-bar');
    btn.classList.toggle('active', compareMode);
    bar.classList.toggle('open', compareMode);
    if (!compareMode) {
      compareList = [];
      updateCompareBar();
    }
    showToast(compareMode ? '⚖️ Modalità confronto attiva — clicca fino a 3 università' : 'Confronto disattivato');
  });

  // Close compare bar
  document.getElementById('btn-close-compare').addEventListener('click', () => {
    compareMode = false;
    compareList = [];
    document.getElementById('btn-compare-toggle').classList.remove('active');
    document.getElementById('compare-bar').classList.remove('open');
    updateCompareBar();
  });

  // Do compare
  document.getElementById('btn-do-compare').addEventListener('click', openCompareModal);

  // Modal close
  document.getElementById('cmp-modal-close').addEventListener('click', () => {
    document.getElementById('cmp-modal').classList.remove('open');
  });
  document.getElementById('cmp-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cmp-modal')) {
      document.getElementById('cmp-modal').classList.remove('open');
    }
  });
}

// ─── Confronto ──────────────────────────────────────────────────
function addToCompare(id) {
  if (compareList.includes(id) || compareList.length >= 3) return;
  compareList.push(id);
  if (!compareMode) {
    compareMode = true;
    document.getElementById('compare-bar').classList.add('open');
    document.getElementById('btn-compare-toggle').classList.add('active');
  }
  updateCompareBar();
  openDetail(id);
  showToast(`✓ Aggiunto al confronto`);
}

function removeFromCompare(id) {
  compareList = compareList.filter(i => i !== id);
  updateCompareBar();
  openDetail(id); // refresh detail
  showToast('Rimosso dal confronto');
}

function toggleCompareSlot(id) {
  if (compareList.includes(id)) {
    removeFromCompare(id);
  } else if (compareList.length < 3) {
    addToCompare(id);
  } else {
    showToast('⚠️ Massimo 3 università nel confronto');
  }
}

function updateCompareBar() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`cmp-slot-${i}`);
    const id = compareList[i];
    if (id) {
      const uni = UNIVERSITIES.find(u => u.id === id);
      slot.classList.add('filled');
      slot.innerHTML = `<span style="font-size:12px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${uni.bandiera} ${uni.nome}</span><button class="remove-cmp" onclick="removeFromCompare('${id}')">✕</button>`;
    } else {
      slot.classList.remove('filled');
      const msgs = [
        'Clicca una università sulla mappa',
        'Clicca una seconda università',
        'Terza (opzionale)',
      ];
      slot.textContent = msgs[i];
    }
  }
  document.getElementById('btn-do-compare').disabled = compareList.length < 2;
}

function openCompareModal() {
  if (compareList.length < 2) return;

  const unis = compareList.map(id => UNIVERSITIES.find(u => u.id === id));

  const rows = [
    ['🌍 Paese',           u => `${u.bandiera} ${u.paese}`],
    ['📍 Città',           u => u.citta],
    ['📊 QS 2027',         u => `<strong>#${u.qs2027}</strong>`],
    ['💶 Tasse/anno',      u => u.tasse_annue_eu],
    ['🏠 Affitto/mese',    u => u.affitto_mensile],
    ['📊 Vita totale/mese',u => u.costo_vita_totale],
    ['💚 Con 600-800€',    u => u.budget_rating >= 4 ? '✅ Fattibile' : u.budget_rating >= 3 ? '⚠️ Difficile' : '❌ Stretto'],
    ['💼 Paga part-time',  u => LAVORO_PAESE[u.paese]?.salario_minimo_ora || 'N/D'],
    ['💰 Stima guadagno/mo', u => LAVORO_PAESE[u.paese]?.guadagno_mensile_stima || 'N/D'],
    ['🗣️ Lingua',          u => u.lingua_triennale_flag],
    ['💻 CS/Informatica',  u => u.lauree_cs],
    ['📋 Test ammissione', u => u.requisiti_ammissione],
    ['🎯 Fit Score',       u => `<strong style="color:${FIT_COLOR(u.fit_score)}">${u.fit_score}/10</strong>`],
    ['🏙️ Qualità vita',    u => u.qualita_vita.substring(0, 80) + '…'],
    ['📚 Didattica',       u => u.approccio_didattico.substring(0, 80) + '…'],
    ['🎁 Sussidi',         u => u.borse_sussidi.substring(0, 80) + '…'],
  ];

  let html = '<thead><tr><th>Parametro</th>';
  unis.forEach(u => {
    html += `<th class="uni-col">${u.bandiera} ${u.nome}</th>`;
  });
  html += '</tr></thead><tbody>';

  rows.forEach(([label, fn]) => {
    html += `<tr><td>${label}</td>`;
    unis.forEach(u => { html += `<td>${fn(u)}</td>`; });
    html += '</tr>';
  });
  html += '</tbody>';

  document.getElementById('cmp-table').innerHTML = html;
  document.getElementById('cmp-modal').classList.add('open');
}

// ─── Toast ──────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2500);
}

// ─── Expose globals per onclick inline ──────────────────────────
window.addToCompare = addToCompare;
window.removeFromCompare = removeFromCompare;
