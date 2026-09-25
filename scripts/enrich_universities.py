# -*- coding: utf-8 -*-
"""
enrich_universities.py
Arricchisce data.js con le colonne del foglio QS Excel:
- size (S, M, L, XL)
- Academic Reputation (AR)
- Employer Reputation (ER)
- Faculty Student (FSR)
- International Students (ISR)
- Employment Outcomes (EO)
E con i calcoli finanziari puntuali:
- tasse_anno_num
- costi_totali_mese (spese mese + tasse anno / 12)
- stipendio_possibile (part-time nel paese)
- bonus_eventuali (sussidi statali EU tipo SU, DUO, Lånekassen)
- bilancio_mese_autonomo: (stipendio + bonus) - costi_totali_mese (senza soldi dei genitori!)
"""

import openpyxl
import json
import re

wb = openpyxl.load_workbook('/Users/sor-team/Documents/ChatGPT/UniMap/2027 QS World University Rankings 1.3 (For qs.com).xlsx', read_only=True)
sheet = wb.active
qs_rows = [r for i, r in enumerate(sheet.iter_rows(values_only=True)) if i >= 3]

with open('data.js', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'const UNIVERSITIES = (\[.*?\]);\n\n// Metadati', text, re.DOTALL)
unis = json.loads(m.group(1))

# Carica lavoro paese
m_lav = re.search(r'const LAVORO_PAESE = (\{.*?\});\n\nconst UNIVERSITIES', text, re.DOTALL)
lavoro_paese = json.loads(m_lav.group(1))

aliases = {
    'unipd': 'padova',
    'univr': 'verona',
    'unive': 'foscari',
    'polimi': 'politecnico di milano',
    'polito': 'politecnico di torino',
    'unitn': 'university of trento',
    'unibo': 'bologna',
    'sapienza': 'sapienza',
    'unipi': 'university of pisa',
    'unimi': 'university of milan',
    'unipv': 'pavia',
    'unina': 'federico ii',
    'unimore': 'modena',
    'tudelft': 'delft',
    'tue': 'eindhoven',
    'utwente': 'university of twente',
    'groningen': 'university of groningen',
    'vu_amsterdam': 'vrije universiteit amsterdam',
    'radboud': 'radboud',
    'maastricht': 'maastricht',
    'aau': 'aalborg',
    'sdu': 'southern denmark',
    'dtu': 'technical university of denmark',
    'aarhus': 'aarhus',
    'kth': 'kth',
    'chalmers': 'chalmers',
    'linkoping': 'linköping',
    'malmo': 'malmo university',
    'aalto': 'aalto',
    'tampere': 'tampere',
    'lut': 'lut university',
    'ntnu': 'norwegian university of science and technology',
    'saarland': 'saarland',
    'tum': 'technical university of munich',
    'th_deggendorf': None,
    'jku_linz': 'johannes kepler',
    'ku_leuven': 'ku leuven',
    'howest': None,
    'tcd': 'trinity college dublin',
    'galway': 'university of galway',
    'ctu_prague': 'czech technical university',
    'charles_uni': 'charles university',
    'taltech': 'tallinn university of technology',
    'tartu': 'university of tartu',
    'pw_warsaw': 'warsaw university of technology',
    'uc3m': 'carlos iii',
    'ist_lisbon': 'university of lisbon',
    'kit': 'karlsruhe institute of technology',
    'constructor': None,
    'fau': 'erlangen',
    'tu_wien': 'technische universität wien',
    'ucd': 'university college dublin',
    'dcu': 'dublin city university',
    'vut_brno': 'brno university of technology',
    'pwr_wroclaw': 'wroclaw university of science'
}

# Costi tasse annue numeriche standard di riferimento
TUITION_NUMERIC = {
    'unipd': 1500,
    'univr': 1400,
    'unive': 1500,
    'polimi': 2200,
    'polito': 1800,
    'unitn': 1600,
    'unibo': 1800,
    'sapienza': 1500,
    'unipi': 1400,
    'unimi': 1800,
    'unipv': 1400,
    'unina': 1200,
    'unimore': 1400,
    'tudelft': 2601,
    'tue': 2601,
    'utwente': 2601,
    'groningen': 2601,
    'vu_amsterdam': 2601,
    'radboud': 2601,
    'maastricht': 2601,
    'aau': 0,
    'sdu': 0,
    'dtu': 0,
    'aarhus': 0,
    'kth': 0,
    'chalmers': 0,
    'linkoping': 0,
    'malmo': 0,
    'aalto': 0,
    'tampere': 0,
    'lut': 0,
    'ntnu': 0,
    'saarland': 600,
    'tum': 300,
    'th_deggendorf': 150,
    'jku_linz': 44,
    'ku_leuven': 1116,
    'howest': 1116,
    'tcd': 3000,
    'galway': 3000,
    'ctu_prague': 2200,
    'charles_uni': 3500,
    'taltech': 2000,
    'tartu': 2500,
    'pw_warsaw': 2500,
    'uc3m': 1500,
    'ist_lisbon': 697,
    'kit': 300,
    'constructor': 5000,
    'fau': 280,
    'tu_wien': 44,
    'ucd': 3000,
    'dcu': 3000,
    'vut_brno': 2200,
    'pwr_wroclaw': 2500
}

def clean_val(v):
    if v is None: return "—"
    if isinstance(v, (int, float)):
        return round(float(v), 1)
    s = str(v).strip()
    try:
        return round(float(s), 1)
    except:
        return s if s else "—"

for u in unis:
    uid = u['id']
    target = aliases.get(uid)
    matched_row = None
    if target:
        for q in qs_rows:
            if target in str(q[3]).lower():
                matched_row = q
                break
    
    # Valori QS da Excel
    if matched_row:
        u['qs_excel_name'] = str(matched_row[3])
        u['qs_size'] = str(matched_row[6]) if matched_row[6] else "M"
        u['qs_ar_score'] = clean_val(matched_row[10]) # Academic Reputation
        u['qs_er_score'] = clean_val(matched_row[12]) # Employer Reputation
        u['qs_fsr_score'] = clean_val(matched_row[14]) # Faculty Student
        u['qs_isr_score'] = clean_val(matched_row[20]) # International Students
        u['qs_eo_score'] = clean_val(matched_row[24]) # Employment Outcomes
    else:
        u['qs_excel_name'] = u['nome']
        u['qs_size'] = "M"
        u['qs_ar_score'] = "—"
        u['qs_er_score'] = "—"
        u['qs_fsr_score'] = "—"
        u['qs_isr_score'] = "—"
        u['qs_eo_score'] = "—"

    # Calcoli Finanziari
    tasse_anno = TUITION_NUMERIC.get(uid, 1500)
    u['tasse_anno_num'] = tasse_anno
    
    # Costo spese vive mensili (alloggio + cibo + utenze)
    base_living = u.get('budget_mensile_val', 850)
    if u['distanza_vicenza_km'] <= 50 and u['paese'] == 'Italia':
        base_living = 150 # pendolare da casa
    u['spese_mensili_base'] = base_living
    
    # Quota mensile tasse
    quota_tasse_mese = int(round(tasse_anno / 12))
    u['quota_tasse_mese'] = quota_tasse_mese
    
    # Costi totali mese = spese vive + tasse/12
    costi_totali_mese = base_living + quota_tasse_mese
    u['costi_totali_mese'] = costi_totali_mese
    
    # Entrate potenziali nel paese
    lav = lavoro_paese.get(u['paese'], {})
    stipendio = lav.get('guadagno_mensile_val', 400)
    bonus = lav.get('sussidio_statale_val', 0)
    bonus_nome = lav.get('sussidio_statale_nome', '')
    
    u['stipendio_possibile'] = stipendio
    u['bonus_eventuali'] = bonus
    u['bonus_nome'] = bonus_nome
    
    # Bilancio del mese senza genitori: (stipendio + bonus) - costi_totali_mese
    bilancio_autonomo = (stipendio + bonus) - costi_totali_mese
    u['bilancio_mese_autonomo'] = bilancio_autonomo

# Serializza per data.js
new_js_content = text[:m.start(1)] + json.dumps(unis, indent=2, ensure_ascii=False) + text[m.end(1):]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(new_js_content)

print(f"data.js aggiornato con successo per tutte le {len(unis)} università!")
