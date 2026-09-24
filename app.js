/* ================================================================
   UniMap — app.js
   Mappa interattiva e orientamento universitario personalizzato
   per Giovanni Peruzzi (ITIS Rossi, Vicenza)
   ================================================================ */

'use strict';

// ─── Costanti e Colori ──────────────────────────────────────────
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
  if (score >= 9.3) return '#00e5a0';
  if (score >= 8.5) return '#00d4ff';
  if (score >= 7.5) return '#ffb347';
  return '#ff5252';
};

// ─── Stato dell'Applicazione ────────────────────────────────────
let map;
let markers = {};             // id → { marker, uni }
let vicenzaMarker = null;
let activePolyline = null;    // Linea di collegamento Vicenza → Università
let selectedId = null;
let compareList = [];         // Max 3 ID
let compareMode = false;

let filters = {
  search: '',
  budgetMin: 0,
  budgetMax: 800,             // Default sul budget familiare indicato da Giovanni (600-800€)
  partTime: false,
  ambiti: new Set(['cs', 'ce', 'ai', 'robotics', 'embedded', 'cyber', 'gamedev', 'other_eng']),
  onlyEnglish: true,
  onlyItalian: true,
  qsMax: 700
};

// ─── Avvio ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initMap();
  initMarkers();
  initAmbitiUI();
  initFiltersUI();
  updateClosestStat();
  applyFilters();

  // Nascondi schermata di caricamento con fade-out
  setTimeout(() => {
    const loader = document.getElementById('loading');
    if (loader) loader.classList.add('done');
  }, 1200);
});

// ─── Mappa Leaflet ──────────────────────────────────────────────
function initMap() {
  map = L.map('map', {
    center: [50.5, 11.5],
    zoom: 5,
    minZoom: 3,
    maxZoom: 18,
    zoomControl: false,
    attributionControl: false
  });

  // Tile: CartoDB Dark Matter per stile high-tech
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '© OpenStreetMap contributors © CARTO · QS World University Rankings 2027',
    subdomains: 'abcd',
    maxZoom: 18
  }).addTo(map);

  L.control.zoom({ position: 'bottomright' }).addTo(map);
  L.control.attribution({ position: 'bottomright', prefix: 'UniMap · ITIS Rossi' }).addTo(map);

  // Marker speciale per Vicenza (Casa)
  const homeIcon = L.divIcon({
    className: '',
    html: `<div class="vicenza-home-marker" title="Vicenza — La tua città di residenza (ITIS Rossi)">🏠</div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 16]
  });

  vicenzaMarker = L.marker([VICENZA_COORDS.lat, VICENZA_COORDS.lng], {
    icon: homeIcon,
    zIndexOffset: 1000
  }).addTo(map);

  vicenzaMarker.bindTooltip(
    `<div style="font-size:12px; font-weight:700; color:var(--accent-amber);">
      📍 Vicenza (ITIS A. Rossi)
      <div style="font-size:10px; font-weight:400; color:#fff; opacity:0.85;">Punto base di calcolo distanze</div>
    </div>`,
    { permanent: false, direction: 'top', offset: [0, -14], opacity: 0.95 }
  );

  vicenzaMarker.on('click', () => {
    map.flyTo([VICENZA_COORDS.lat, VICENZA_COORDS.lng], 9, { duration: 1 });
    showToast("📍 Casa: Vicenza (ITIS Rossi) — Punto di riferimento per tutte le distanze");
  });

  // Click su mappa deseleziona
  map.on('click', () => {
    deselectAll();
  });
}

// ─── Inizializzazione Marker Università ──────────────────────────
function initMarkers() {
  UNIVERSITIES.forEach(uni => {
    const cls = QS_CLASS(uni.qs2027);
    const color = QS_COLOR(uni.qs2027);

    const icon = L.divIcon({
      className: '',
      html: `<div class="uni-marker ${cls}" data-id="${uni.id}" title="${uni.nome}">
              <span>${uni.qs2027}</span>
             </div>`,
      iconSize: null,
      iconAnchor: [0, 0]
    });

    const marker = L.marker([uni.lat, uni.lng], {
      icon,
      zIndexOffset: 1000 - uni.qs2027
    });

    // Tooltip informativo
    const distText = uni.distanza_vicenza_km <= 60 
      ? `🚗/🚆 ${uni.distanza_vicenza_km} km da Vicenza (Pendolare!)`
      : `📍 ${uni.distanza_vicenza_km} km da Vicenza`;

    const langBadge = uni.has_english_bachelor && uni.has_italian_bachelor
      ? '🇬🇧 Inglese + 🇮🇹 Italiano'
      : uni.has_english_bachelor
        ? '🇬🇧 Triennale in Inglese'
        : '🇮🇹 Triennale in Italiano';

    marker.bindTooltip(
      `<div class="uni-tooltip">
        <strong>${uni.bandiera} ${uni.nome}</strong>
        <div style="font-size:11px; color:var(--accent-cyan); margin: 2px 0;">#${uni.qs2027} QS · ${uni.citta} (${uni.paese})</div>
        <div style="font-size:10px; color:#fff; opacity:0.8;">${distText}</div>
        <div style="font-size:10px; color:var(--accent-green); margin-top:2px;">${langBadge}</div>
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
  // Rimuovi selezione precedente
  if (selectedId && markers[selectedId]) {
    const el = getMarkerEl(selectedId);
    if (el) el.classList.remove('selected');
  }

  selectedId = id;
  const el = getMarkerEl(id);
  if (el) el.classList.add('selected');

  const uni = markers[id].uni;

  // Disegna linea di collegamento con Vicenza
  drawTravelLine(uni.lat, uni.lng);

  openDetail(id);

  // Pan mappa verso l'ateneo
  map.panTo([uni.lat, uni.lng], { animate: true, duration: 0.6 });
}

function deselectAll() {
  if (selectedId) {
    const el = getMarkerEl(selectedId);
    if (el) el.classList.remove('selected');
    selectedId = null;
  }
  if (activePolyline) {
    map.removeLayer(activePolyline);
    activePolyline = null;
  }
  closeDetail();
}

function getMarkerEl(id) {
  const m = markers[id];
  if (!m) return null;
  return m.marker.getElement()?.querySelector('.uni-marker');
}

function drawTravelLine(destLat, destLng) {
  if (activePolyline) {
    map.removeLayer(activePolyline);
    activePolyline = null;
  }

  const latlngs = [
    [VICENZA_COORDS.lat, VICENZA_COORDS.lng],
    [destLat, destLng]
  ];

  activePolyline = L.polyline(latlngs, {
    color: '#00d4ff',
    weight: 2,
    dashArray: '6, 8',
    opacity: 0.8
  }).addTo(map);
}

// ─── Inizializzazione Checkbox Ambiti di Studio ──────────────────
function initAmbitiUI() {
  const container = document.getElementById('ambiti-checkboxes');
  if (!container) return;
  container.innerHTML = '';

  const ambitiKeys = Object.keys(AMBITI_METADATA);

  ambitiKeys.forEach(key => {
    const item = AMBITI_METADATA[key];
    const isChecked = filters.ambiti.has(key);

    // Conta quante università offrono questo ambito
    const count = UNIVERSITIES.filter(u => u.ambiti && u.ambiti.includes(key)).length;

    const row = document.createElement('label');
    row.className = `ambito-item ${isChecked ? 'checked' : ''}`;
    row.dataset.ambito = key;

    row.innerHTML = `
      <input type="checkbox" class="ambito-cb" ${isChecked ? 'checked' : ''} />
      <span class="ambito-label">${item.emoji} ${item.nome}</span>
      <span class="ambito-count">${count}</span>
    `;

    const cb = row.querySelector('.ambito-cb');
    cb.addEventListener('change', () => {
      if (cb.checked) {
        filters.ambiti.add(key);
        row.classList.add('checked');
      } else {
        filters.ambiti.delete(key);
        row.classList.remove('checked');
      }
      applyFilters();
    });

    container.appendChild(row);
  });

  // Pulsanti rapidi Tutti / Azzera
  document.getElementById('btn-select-all-ambiti')?.addEventListener('click', () => {
    ambitiKeys.forEach(k => filters.ambiti.add(k));
    document.querySelectorAll('.ambito-item').forEach(el => {
      el.classList.add('checked');
      el.querySelector('.ambito-cb').checked = true;
    });
    applyFilters();
  });

  document.getElementById('btn-clear-ambiti')?.addEventListener('click', () => {
    filters.ambiti.clear();
    document.querySelectorAll('.ambito-item').forEach(el => {
      el.classList.remove('checked');
      el.querySelector('.ambito-cb').checked = false;
    });
    applyFilters();
  });
}

// ─── Inizializzazione Filtri & Eventi UI ─────────────────────────
function initFiltersUI() {
  // Ricerca
  document.getElementById('search-input')?.addEventListener('input', (e) => {
    filters.search = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Slider QS
  const qsSlider = document.getElementById('qs-filter');
  if (qsSlider) {
    qsSlider.addEventListener('input', () => {
      filters.qsMax = +qsSlider.value;
      document.getElementById('qs-max-lbl').textContent = qsSlider.value;
      updateSliderGradient(qsSlider, qsSlider.value, qsSlider.max);
      applyFilters();
    });
    updateSliderGradient(qsSlider, qsSlider.value, qsSlider.max);
  }

  // Budget Min & Max
  const budgetMinInput = document.getElementById('budget-min');
  const budgetMaxInput = document.getElementById('budget-max');
  const budgetSlider = document.getElementById('budget-filter');

  if (budgetMinInput) {
    budgetMinInput.addEventListener('input', () => {
      filters.budgetMin = Math.max(0, +budgetMinInput.value || 0);
      applyFilters();
    });
  }

  if (budgetMaxInput) {
    budgetMaxInput.addEventListener('input', () => {
      const val = Math.max(200, +budgetMaxInput.value || 800);
      filters.budgetMax = val;
      if (budgetSlider) {
        budgetSlider.value = val;
        document.getElementById('budget-lbl').textContent = `${Number(val).toLocaleString('it-IT')} €`;
        updateSliderGradient(budgetSlider, val - budgetSlider.min, budgetSlider.max - budgetSlider.min);
      }
      applyFilters();
    });
  }

  if (budgetSlider) {
    budgetSlider.addEventListener('input', () => {
      const val = +budgetSlider.value;
      filters.budgetMax = val;
      if (budgetMaxInput) budgetMaxInput.value = val;
      document.getElementById('budget-lbl').textContent = `${Number(val).toLocaleString('it-IT')} €`;
      updateSliderGradient(budgetSlider, val - budgetSlider.min, budgetSlider.max - budgetSlider.min);
      applyFilters();
    });
    updateSliderGradient(budgetSlider, budgetSlider.value - budgetSlider.min, budgetSlider.max - budgetSlider.min);
  }

  // Toggle Lavoro Part-Time
  const togglePartTime = document.getElementById('toggle-part-time');
  const partTimeCard = document.getElementById('part-time-card');
  if (togglePartTime) {
    togglePartTime.addEventListener('change', (e) => {
      filters.partTime = e.target.checked;
      if (partTimeCard) {
        if (filters.partTime) {
          partTimeCard.classList.add('active');
          showToast("💼 Lavoro part-time attivato: ricalcolo budget con stipendio locale e sussidi statali!");
        } else {
          partTimeCard.classList.remove('active');
        }
      }
      applyFilters();
    });
  }

  // Toggle Lingua (Solo Inglese o Italiano)
  const toggleEn = document.getElementById('toggle-english');
  const toggleIt = document.getElementById('toggle-italian');

  if (toggleEn) {
    toggleEn.addEventListener('change', (e) => {
      filters.onlyEnglish = e.target.checked;
      applyFilters();
    });
  }

  if (toggleIt) {
    toggleIt.addEventListener('change', (e) => {
      filters.onlyItalian = e.target.checked;
      applyFilters();
    });
  }

  // Azzera Filtri
  document.getElementById('btn-clear-filters')?.addEventListener('click', clearFilters);

  // Toggle pannello filtri
  document.getElementById('btn-toggle-filters')?.addEventListener('click', () => {
    const panel = document.getElementById('filters-panel');
    const btn = document.getElementById('btn-toggle-filters');
    panel.classList.toggle('collapsed');
    btn.classList.toggle('active');
  });

  // Reset vista mappa
  document.getElementById('btn-reset-view')?.addEventListener('click', () => {
    map.flyTo([50.5, 11.5], 5, { animate: true, duration: 1 });
  });

  // Chiudi dettaglio
  document.getElementById('detail-close')?.addEventListener('click', deselectAll);

  // Compare toggles
  document.getElementById('btn-compare-toggle')?.addEventListener('click', toggleCompareMode);
  document.getElementById('btn-close-compare')?.addEventListener('click', () => setCompareMode(false));
  document.getElementById('btn-do-compare')?.addEventListener('click', showCompareModal);
  document.getElementById('cmp-modal-close')?.addEventListener('click', hideCompareModal);
  document.getElementById('cmp-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'cmp-modal') hideCompareModal();
  });
}

function updateSliderGradient(el, val, max) {
  if (!el) return;
  const pct = (val / max * 100).toFixed(1) + '%';
  el.style.setProperty('--val', pct);
}

function clearFilters() {
  filters.search = '';
  filters.budgetMin = 0;
  filters.budgetMax = 800;
  filters.partTime = false;
  filters.ambiti = new Set(['cs', 'ce', 'ai', 'robotics', 'embedded', 'cyber', 'gamedev', 'other_eng']);
  filters.onlyEnglish = true;
  filters.onlyItalian = true;
  filters.qsMax = 700;

  document.getElementById('search-input').value = '';
  document.getElementById('budget-min').value = 0;
  document.getElementById('budget-max').value = 800;
  document.getElementById('budget-filter').value = 800;
  document.getElementById('budget-lbl').textContent = '800 €';
  document.getElementById('qs-filter').value = 700;
  document.getElementById('qs-max-lbl').textContent = '700';

  const togglePT = document.getElementById('toggle-part-time');
  if (togglePT) togglePT.checked = false;
  document.getElementById('part-time-card')?.classList.remove('active');

  document.getElementById('toggle-english').checked = true;
  document.getElementById('toggle-italian').checked = true;

  document.querySelectorAll('.ambito-item').forEach(el => {
    el.classList.add('checked');
    el.querySelector('.ambito-cb').checked = true;
  });

  updateSliderGradient(document.getElementById('qs-filter'), 700, 700);
  const bSlider = document.getElementById('budget-filter');
  updateSliderGradient(bSlider, 800 - bSlider.min, bSlider.max - bSlider.min);

  applyFilters();
  showToast("Filtri ripristinati");
}

// ─── Logica Principale di Filtraggio ────────────────────────────
function applyFilters() {
  let visible = 0;

  UNIVERSITIES.forEach(uni => {
    const el = getMarkerEl(uni.id);
    if (!el) return;

    let show = true;

    // 1. Ricerca Testuale (Nome, Città, Paese, Corsi di Laurea, Focus)
    if (filters.search) {
      const degreesText = (uni.lauree_triennali || []).map(d => `${d.nome} ${d.focus}`).join(' ');
      const hay = `${uni.nome} ${uni.citta} ${uni.paese} ${degreesText}`.toLowerCase();
      if (!hay.includes(filters.search)) show = false;
    }

    // 2. QS Ranking 2027
    if (uni.qs2027 > filters.qsMax) show = false;

    // 3. Lingua Triennale (Inclusione solo di Inglese o Italiano)
    const hasEnglishCourse = uni.has_english_bachelor === true;
    const hasItalianCourse = uni.has_italian_bachelor === true;

    if (filters.onlyEnglish && !filters.onlyItalian) {
      if (!hasEnglishCourse) show = false;
    } else if (filters.onlyItalian && !filters.onlyEnglish) {
      if (!hasItalianCourse) show = false;
    } else if (!filters.onlyEnglish && !filters.onlyItalian) {
      // Se entrambi sono spenti, non mostrare nulla
      show = false;
    }

    // 4. Ambiti di Studio (deve offrire almeno 1 ambito selezionato)
    if (filters.ambiti.size > 0) {
      const uniAmbiti = uni.ambiti || [];
      const hasMatchingAmbito = uniAmbiti.some(a => filters.ambiti.has(a));
      if (!hasMatchingAmbito) show = false;
    } else {
      // Se nessun ambito selezionato, escludi
      show = false;
    }

    // 5. Budget Mensile & Lavoro Part-Time
    // Costo mensile reale dell'ateneo
    let monthlyCost = uni.budget_mensile_val || 1000;

    // Se pendolare da Vicenza (es. Padova o Verona), l'affitto è 0€!
    if (uni.distanza_vicenza_km <= 50 && uni.paese === 'Italia') {
      monthlyCost = 150; // Solo abbonamento treno + pranzi
    }

    // Calcolo del budget disponibile per Giovanni
    let availableBudget = filters.budgetMax;

    if (filters.partTime) {
      const countryWork = LAVORO_PAESE[uni.paese];
      if (countryWork) {
        const workIncome = countryWork.guadagno_mensile_val || 0;
        const subsidy = countryWork.sussidio_statale_val || 0;
        availableBudget += (workIncome + subsidy);
      }
    }

    // Verifica compatibilità budget
    if (monthlyCost > availableBudget) {
      show = false;
    }

    if (monthlyCost < filters.budgetMin) {
      show = false;
    }

    // Applicazione visibilità marker Leaflet
    if (show) {
      el.classList.remove('hidden');
      visible++;
    } else {
      el.classList.add('hidden');
      if (selectedId === uni.id) {
        deselectAll();
      }
    }
  });

  // Aggiorna contatori statistiche
  const totalEl = document.getElementById('stat-total');
  const visibleEl = document.getElementById('stat-visible');
  const filteredCountEl = document.getElementById('filtered-count');

  if (totalEl) totalEl.textContent = UNIVERSITIES.length;
  if (visibleEl) visibleEl.textContent = visible;
  if (filteredCountEl) filteredCountEl.textContent = visible;
}

function updateClosestStat() {
  const statEl = document.getElementById('stat-vicenza-closest');
  if (!statEl) return;
  const sorted = [...UNIVERSITIES].sort((a, b) => a.distanza_vicenza_km - b.distanza_vicenza_km);
  if (sorted.length > 0) {
    statEl.textContent = `${sorted[0].citta} (${sorted[0].distanza_vicenza_km} km)`;
  }
}

// ─── Rendering Scheda Dettaglio Ateneo ───────────────────────────
function openDetail(id) {
  const uni = UNIVERSITIES.find(u => u.id === id);
  if (!uni) return;

  // Header
  document.getElementById('d-flag').textContent = uni.bandiera;
  document.getElementById('d-name').textContent = uni.nome;
  document.getElementById('d-location').textContent = `📍 ${uni.citta}, ${uni.paese}`;

  // Distanza da Vicenza badge
  const distBadge = document.getElementById('d-distance-badge');
  if (distBadge) {
    distBadge.innerHTML = `📍 <strong>${uni.distanza_vicenza_km} km</strong> da Vicenza`;
  }

  // QS badge
  const qsEl = document.getElementById('d-qs-badge');
  const color = QS_COLOR(uni.qs2027);
  qsEl.style.background = `${color}22`;
  qsEl.style.border = `1px solid ${color}55`;
  qsEl.style.color = color;
  const chg = uni.qs2026
    ? (uni.qs2027 < uni.qs2026 ? ` ▲${uni.qs2026 - uni.qs2027}` : uni.qs2027 > uni.qs2026 ? ` ▼${uni.qs2027 - uni.qs2026}` : ' =')
    : '';
  qsEl.innerHTML = `<span style="font-size:16px;font-weight:800">#${uni.qs2027}</span> QS Mondiale 2027${chg ? `<span style="font-size:10px;opacity:0.75">${chg} vs 2026</span>` : ''}`;

  // Body
  const body = document.getElementById('detail-body');
  body.innerHTML = buildDetailBody(uni);

  // Apri pannello
  document.getElementById('detail-panel').classList.add('open');
}

function closeDetail() {
  document.getElementById('detail-panel').classList.remove('open');
}

function buildDetailBody(uni) {
  const fitColor = FIT_COLOR(uni.fit_score);
  const budgetStars = buildBudgetStars(uni.budget_rating);

  // Calcolo finanziario con simulatore part-time
  const countryWork = LAVORO_PAESE[uni.paese];
  const workIncome = countryWork ? (countryWork.guadagno_mensile_val || 0) : 0;
  const subsidy = countryWork ? (countryWork.sussidio_statale_val || 0) : 0;
  const totalPartTimeBoost = workIncome + subsidy;

  const userBaseBudget = filters.budgetMax;
  const totalAvailable = filters.partTime ? (userBaseBudget + totalPartTimeBoost) : userBaseBudget;

  let actualLivingCost = uni.budget_mensile_val || 1000;
  if (uni.distanza_vicenza_km <= 50 && uni.paese === 'Italia') {
    actualLivingCost = 150; // pendolare da casa
  }

  const balance = totalAvailable - actualLivingCost;
  const balanceClass = balance >= 0 ? 'surplus' : 'deficit';
  const balanceText = balance >= 0 
    ? `+${balance} €/mese (Avanzo / Pienamente sostenibile! ✓)`
    : `${balance} €/mese (Richiede attenzione al budget o ore extra)`;

  // Costruzione elenco lauree triennali specifiche
  const degreesHtml = (uni.lauree_triennali || []).map(deg => {
    const isEn = deg.lingua_code === 'en' || deg.lingua.includes('Inglese');
    const pillClass = isEn ? 'en' : 'it';
    const tagsHtml = (deg.ambiti || []).map(a => {
      const meta = AMBITI_METADATA[a];
      return `<span class="degree-tag">${meta ? `${meta.emoji} ${meta.nome.split('/')[0]}` : a}</span>`;
    }).join('');

    return `
      <div class="degree-card">
        <div class="degree-top">
          <div class="degree-name">${deg.nome}</div>
          <span class="degree-lang-pill ${pillClass}">${deg.lingua}</span>
        </div>
        <div style="font-size:11px; color:var(--text-secondary);">⏳ ${deg.durata}</div>
        <div class="degree-tags">${tagsHtml}</div>
        <div class="degree-focus">${deg.focus}</div>
      </div>
    `;
  }).join('');

  // Sezione Procedure d'Iscrizione & Test d'Ingresso
  const adm = uni.ammissione || {};
  const diffBar = buildDifficultyBar(adm.difficolta || 2);

  const admissionSection = `
    <div class="info-section">
      <div class="info-section-title">📝 Procedure di Iscrizione & Test d'Ingresso</div>
      <div class="admission-card">
        <div class="info-row">
          <span class="info-key">Test Richiesto</span>
          <span class="info-val highlight">${adm.test_richiesto || 'Valutazione diploma / Test ateneo'}</span>
        </div>
        <div class="info-row">
          <span class="info-key">Soglia / Requisiti</span>
          <span class="info-val">${adm.soglia_indicativa || 'Diploma di maturità con buone basi'}</span>
        </div>
        <div class="info-row">
          <span class="info-key">Scadenze Chiave</span>
          <span class="info-val warning" style="font-weight:700">${adm.scadenze || 'Primavera / Estate'}</span>
        </div>
        <div class="info-row">
          <span class="info-key">Requisito Lingua</span>
          <span class="info-val success">${adm.requisiti_lingua || 'Inglese B2 / Cambridge First'}</span>
        </div>
        <div class="info-row">
          <span class="info-key">Selettività</span>
          <span class="info-val">${diffBar}</span>
        </div>
        <div style="margin-top:4px;">
          <span style="font-size:11px; font-weight:600; color:var(--text-secondary);">📋 Procedura di candidatura:</span>
          <div class="admission-step-list">${adm.procedura || 'Candidatura sul portale ateneo.'}</div>
        </div>
      </div>
    </div>
  `;

  // Simulatore Finanziario Dinamico
  const financeSimSection = `
    <div class="info-section">
      <div class="info-section-title">📊 Bilancio Finanziario Stimato</div>
      <div class="finance-sim">
        <div class="sim-grid">
          <div class="sim-row">
            <span>Budget Genitori (filtro impostato):</span>
            <strong>${userBaseBudget} €/mese</strong>
          </div>
          ${filters.partTime ? `
            <div class="sim-row" style="color:var(--accent-green);">
              <span>+ Stima Lavoro Part-Time (10-12h/sett.):</span>
              <strong>+${workIncome} €/mese</strong>
            </div>
            ${subsidy > 0 ? `
              <div class="sim-row" style="color:var(--accent-cyan);">
                <span>+ Sussidio Statale Studenti (${countryWork?.sussidio_statale_nome}):</span>
                <strong>+${subsidy} €/mese</strong>
              </div>
            ` : ''}
            <div class="sim-row" style="font-weight:700; color:var(--text-primary);">
              <span>= Budget Totale Disponibile:</span>
              <strong>${totalAvailable} €/mese</strong>
            </div>
          ` : `
            <div style="font-size:10px; color:var(--text-muted); margin: 2px 0;">
              💡 <em>Attiva il toggle 'Voglio lavorare part-time' nei filtri per aggiungere fino a +${totalPartTimeBoost} €/mese!</em>
            </div>
          `}
          <div class="sim-divider"></div>
          <div class="sim-row">
            <span>Costo Stimato Vita & Alloggio (${uni.citta}):</span>
            <span style="color:var(--accent-amber); font-weight:700;">~${actualLivingCost} €/mese</span>
          </div>
          <div class="sim-row">
            <span>Esito Bilancio Mensile:</span>
            <span class="sim-result ${balanceClass}">${balanceText}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Lavoro Part-Time & Opportunità Paese
  const lavoroSection = countryWork ? `
    <div class="info-section" style="border-left: 3px solid var(--accent-green);">
      <div class="info-section-title">💼 Opportunità di Lavoro Part-Time (${countryWork.emoji} ${uni.paese})</div>
      <div class="info-row">
        <span class="info-key">Paga oraria</span>
        <span class="info-val success">${countryWork.salario_minimo_ora}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Ore tipiche</span>
        <span class="info-val">${countryWork.ore_studente_tipiche}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Stima mensile</span>
        <span class="info-val highlight">${countryWork.guadagno_mensile_stima}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Lavori comuni</span>
        <span class="info-val" style="font-size:11px">${countryWork.tipi_lavoro_comuni}</span>
      </div>
      <div style="margin-top:8px;font-size:11px;color:var(--text-secondary);background:rgba(255,255,255,0.03);padding:10px;border-radius:6px;line-height:1.5">
        <strong>📋 Regole EU:</strong> ${countryWork.regole_eu}<br/>
        <strong style="color:var(--accent-cyan);display:block;margin-top:4px">💡 Combinazione Borse:</strong> ${countryWork.combinazione_borse}
        ${countryWork.note_speciali ? `<br/><span style="color:var(--accent-green);font-weight:600;display:block;margin-top:4px">${countryWork.note_speciali}</span>` : ''}
      </div>
    </div>
  ` : '';

  // Pills Pro / Con
  const proPills = (uni.punti_forza || []).map(p => `<span class="pill pro">✓ ${p}</span>`).join('');
  const conPills = (uni.punti_deboli || []).map(p => `<span class="pill con">✗ ${p}</span>`).join('');

  // Pulsante Confronto
  const addBtn = compareList.includes(uni.id)
    ? `<button class="btn-nav active" onclick="removeFromCompare('${uni.id}')" style="width:100%;margin-bottom:8px">✕ Rimuovi dal confronto</button>`
    : compareList.length < 3
      ? `<button class="btn-nav" onclick="addToCompare('${uni.id}')" style="width:100%;margin-bottom:8px">⚖️ Aggiungi al confronto</button>`
      : '';

  return `
    <!-- Fit Score Personalizzato -->
    <div class="fit-bar-wrap">
      <div class="fit-bar-header">
        <span class="fit-label">🎯 Fit Score (Profilo Giovanni · ITIS Rossi)</span>
        <span class="fit-score-val" style="color:${fitColor}">${uni.fit_score}<span style="font-size:14px;opacity:0.5">/10</span></span>
      </div>
      <div class="fit-bar"><div class="fit-bar-fill" style="width:${Math.min(100, uni.fit_score * 10)}%"></div></div>
      <div class="fit-note">${uni.fit_note}</div>
    </div>

    <!-- Collegamento da Vicenza -->
    <div class="info-section">
      <div class="info-section-title">📍 Distanza e Viaggio da Vicenza</div>
      <div class="info-row">
        <span class="info-key">Distanza</span>
        <span class="info-val highlight"><strong>${uni.distanza_vicenza_km} km</strong> da Vicenza (linea d'aria)</span>
      </div>
      <div class="info-row">
        <span class="info-key">Logistica</span>
        <span class="info-val">${uni.viaggio_vicenza}</span>
      </div>
    </div>

    <!-- Corsi di Laurea Triennale -->
    <div class="info-section">
      <div class="info-section-title">🎓 Corsi di Laurea Triennale Disponibili (${(uni.lauree_triennali || []).length})</div>
      <div class="degrees-list">
        ${degreesHtml}
      </div>
    </div>

    <!-- Procedure d'Iscrizione e Test -->
    ${admissionSection}

    <!-- Costi e Tasse -->
    <div class="info-section">
      <div class="info-section-title">💸 Costi Base & Tasse Universitarie</div>
      <div class="info-row">
        <span class="info-key">Tasse / anno</span>
        <span class="info-val ${uni.tasse_annue_eu.includes('0 €') || uni.tasse_annue_eu.includes('GRATIS') ? 'success' : ''}" style="font-weight:700">${uni.tasse_annue_eu}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Affitto stanza</span>
        <span class="info-val">${uni.affitto_mensile}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Vita totale/mese</span>
        <span class="info-val highlight">${uni.costo_vita_totale}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Valutazione</span>
        <span class="info-val">${budgetStars}</span>
      </div>
    </div>

    <!-- Simulatore Finanziario -->
    ${financeSimSection}

    <!-- Lavoro Part-Time -->
    ${lavoroSection}

    <!-- Didattica e Qualità della Vita -->
    <div class="info-section">
      <div class="info-section-title">🏙️ Vita & Didattica</div>
      <div class="info-row">
        <span class="info-key">Metodo didattico</span>
        <span class="info-val">${uni.approccio_didattico}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Città & Campus</span>
        <span class="info-val">${uni.qualita_vita}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Soddisfazione</span>
        <span class="info-val">${uni.soddisfazione_studenti}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Studio / Vita</span>
        <span class="info-val">${uni.rapporto_studio_vita}</span>
      </div>
      <div class="info-row">
        <span class="info-key">Borse & Welfare</span>
        <span class="info-val">${uni.borse_sussidi}</span>
      </div>
    </div>

    <!-- Punti di Forza e Deboli -->
    <div class="info-section">
      <div class="info-section-title">✅ Punti di Forza</div>
      <div class="pills-list">${proPills}</div>
    </div>
    <div class="info-section">
      <div class="info-section-title">⚠️ Punti da Considerare</div>
      <div class="pills-list">${conPills}</div>
    </div>

    <!-- Azioni -->
    <div style="padding-top:6px">
      ${addBtn}
      <a class="btn-visit" href="${uni.url}" target="_blank" rel="noopener">🌐 Visita il Sito Ufficiale dell'Ateneo →</a>
    </div>
  `;
}

function buildBudgetStars(rating) {
  let html = '<div class="budget-stars">';
  for (let i = 1; i <= 5; i++) {
    html += `<div class="budget-star ${i <= rating ? 'filled' : 'empty'}"></div>`;
  }
  const labels = ['', 'Impegnativo', 'Con lavoro', 'Equilibrato', 'Fattibile', 'Ottimo ✓'];
  html += `<span style="font-size:11px;color:var(--text-secondary);margin-left:5px">${labels[rating] || ''}</span>`;
  html += '</div>';
  return html;
}

function buildDifficultyBar(level) {
  const labels = ['', 'Aperta', 'Accessibile', 'Moderata', 'Selettiva', 'Molto Rigorosa'];
  let html = '<div style="display:flex;gap:3px;align-items:center">';
  for (let i = 1; i <= 5; i++) {
    const color = level >= 4 ? 'var(--accent-red)' : level >= 3 ? 'var(--accent-amber)' : 'var(--accent-green)';
    html += `<div style="width:10px;height:10px;border-radius:2px;background:${i <= level ? color : 'var(--border)'}"></div>`;
  }
  html += `<span style="font-size:11px;color:var(--text-secondary);margin-left:5px">${labels[level] || ''}</span>`;
  html += '</div>';
  return html;
}

// ─── Modalità Confronto ──────────────────────────────────────────
function toggleCompareMode() {
  setCompareMode(!compareMode);
}

function setCompareMode(val) {
  compareMode = val;
  const bar = document.getElementById('compare-bar');
  const btn = document.getElementById('btn-compare-toggle');
  if (compareMode) {
    bar.classList.add('visible');
    btn.classList.add('active');
    showToast("Modalità confronto attiva: seleziona fino a 3 università");
  } else {
    bar.classList.remove('visible');
    btn.classList.remove('active');
  }
  updateCompareSlots();
}

function addToCompare(id) {
  if (compareList.includes(id)) return;
  if (compareList.length >= 3) {
    showToast("Puoi confrontare al massimo 3 università contemporaneamente");
    return;
  }
  compareList.push(id);
  setCompareMode(true);
  updateCompareSlots();
  if (selectedId) openDetail(selectedId);
  showToast(`Aggiunta al confronto (${compareList.length}/3)`);
}

function removeFromCompare(id) {
  compareList = compareList.filter(i => i !== id);
  updateCompareSlots();
  if (selectedId) openDetail(selectedId);
}

function toggleCompareSlot(id) {
  if (compareList.includes(id)) {
    removeFromCompare(id);
  } else {
    addToCompare(id);
  }
}

function updateCompareSlots() {
  for (let i = 0; i < 3; i++) {
    const slot = document.getElementById(`cmp-slot-${i}`);
    if (!slot) continue;
    const id = compareList[i];
    if (id) {
      const uni = UNIVERSITIES.find(u => u.id === id);
      slot.className = 'compare-slot filled';
      slot.innerHTML = `
        <span class="slot-name">${uni.bandiera} ${uni.nome}</span>
        <button class="slot-remove" onclick="event.stopPropagation(); removeFromCompare('${id}')">✕</button>
      `;
    } else {
      slot.className = 'compare-slot';
      slot.innerHTML = i === 0 ? 'Clicca un ateneo sulla mappa' : i === 1 ? 'Secondo ateneo' : 'Terzo (opzionale)';
    }
  }

  const btnDo = document.getElementById('btn-do-compare');
  if (btnDo) btnDo.disabled = compareList.length < 2;
}

function showCompareModal() {
  if (compareList.length < 2) return;
  const modal = document.getElementById('cmp-modal');
  const table = document.getElementById('cmp-table');
  table.innerHTML = buildCompareTable();
  modal.classList.add('open');
}

function hideCompareModal() {
  document.getElementById('cmp-modal').classList.remove('open');
}

function buildCompareTable() {
  const unis = compareList.map(id => UNIVERSITIES.find(u => u.id === id)).filter(Boolean);

  const rows = [
    { label: "Posizione & Paese", fn: u => `<strong>${u.bandiera} ${u.citta}</strong> (${u.paese})` },
    { label: "Distanza da Vicenza", fn: u => `<span style="color:var(--accent-cyan); font-weight:700;">${u.distanza_vicenza_km} km</span><br/><span style="font-size:10px; color:var(--text-muted);">${u.viaggio_vicenza}</span>` },
    { label: "QS Ranking 2027", fn: u => `<strong style="color:${QS_COLOR(u.qs2027)}">#${u.qs2027}</strong>` },
    { label: "🎯 Fit Score", fn: u => `<strong style="color:${FIT_COLOR(u.fit_score)}">${u.fit_score}/10</strong>` },
    { label: "Tasse Universitarie", fn: u => `<span class="${u.tasse_annue_eu.includes('0 €') || u.tasse_annue_eu.includes('GRATIS') ? 'success' : ''}">${u.tasse_annue_eu}</span>` },
    { label: "Affitto Medio / Mese", fn: u => u.affitto_mensile },
    { label: "Costo Vita Totale / Mese", fn: u => `<strong style="color:var(--accent-cyan)">${u.costo_vita_totale}</strong>` },
    { label: "Lavoro Part-Time & Sussidi", fn: u => {
      const c = LAVORO_PAESE[u.paese];
      return c ? `~${c.guadagno_mensile_stima}<br/><span style="font-size:10px;color:var(--accent-green);">${c.sussidio_statale_nome}</span>` : '—';
    }},
    { label: "Lingua Triennale", fn: u => u.has_english_bachelor && u.has_italian_bachelor ? '🇬🇧 Inglese + 🇮🇹 Italiano' : u.has_english_bachelor ? '🇬🇧 Inglese' : '🇮🇹 Italiano' },
    { label: "Test d'Ingresso", fn: u => `<span style="font-weight:600;color:var(--accent-amber)">${u.ammissione?.test_richiesto || 'Dossier'}</span>` },
    { label: "Scadenze Domanda", fn: u => `<strong style="color:var(--accent-red)">${u.ammissione?.scadenze || 'Estate'}</strong>` },
    { label: "Lauree Rilevanti", fn: u => (u.lauree_triennali || []).map(d => `<div style="font-size:11px;margin-bottom:3px;">• ${d.nome} (${d.lingua})</div>`).join('') },
    { label: "Metodo Didattico", fn: u => u.approccio_didattico }
  ];

  let headerHtml = `<tr><th>Caratteristica</th>`;
  unis.forEach(u => {
    headerHtml += `<th class="uni-col">${u.bandiera} ${u.nome}</th>`;
  });
  headerHtml += `</tr>`;

  let bodyHtml = '';
  rows.forEach(r => {
    bodyHtml += `<tr><td>${r.label}</td>`;
    unis.forEach(u => {
      bodyHtml += `<td>${r.fn(u)}</td>`;
    });
    bodyHtml += `</tr>`;
  });

  return `<thead>${headerHtml}</thead><tbody>${bodyHtml}</tbody>`;
}

// ─── Toast Feedback ─────────────────────────────────────────────
let toastTimer = null;
function showToast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
  }, 2800);
}
