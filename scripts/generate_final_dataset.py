# -*- coding: utf-8 -*-
"""
generate_final_dataset.py
Assegna distanze da Vicenza, travel hints e genera data.js.
"""
import json
import math
from unis_it import ITALIAN_UNIS
from unis_nl import DUTCH_UNIS
from unis_nordic import NORDIC_UNIS
from unis_de_at_be_ie import DE_AT_BE_IE_UNIS
from unis_other import OTHER_EU_UNIS
from unis_extra import EXTRA_UNIS

VICENZA_LAT = 45.5455
VICENZA_LNG = 11.5355

def calc_dist(lat, lng):
    R = 6371.0
    dlat = math.radians(lat - VICENZA_LAT)
    dlng = math.radians(lng - VICENZA_LNG)
    a = math.sin(dlat / 2.0)**2 + math.cos(math.radians(VICENZA_LAT)) * math.cos(math.radians(lat)) * math.sin(dlng / 2.0)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return int(round(R * c))

def travel_hint(dist, citta, paese):
    if dist <= 40:
        return "🚆 ~20–30 min treno regionale (Pendolare comodissimo da Vicenza, zero affitto!)"
    elif dist <= 90:
        return "🚆 ~35–55 min treno (Pendolare giornaliero facile o rientro serale rapido)"
    elif dist <= 140:
        return "🚆 ~1h–1h20 treno (Fattibile sia pendolare sia alloggio con weekend a casa)"
    elif dist <= 260:
        return "🚆 ~1h45–2h15 AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
    elif dist <= 450:
        return "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
    elif dist <= 800:
        return "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
    else:
        return "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"

from make_data import AMBITI_METADATA, LAVORO_PAESE

all_unis = ITALIAN_UNIS + DUTCH_UNIS + NORDIC_UNIS + DE_AT_BE_IE_UNIS + OTHER_EU_UNIS + EXTRA_UNIS

# Add distance and travel hint to each
for u in all_unis:
    d = calc_dist(u['lat'], u['lng'])
    u['distanza_vicenza_km'] = d
    u['viaggio_vicenza'] = travel_hint(d, u['citta'], u['paese'])
    if 'budget_rating' not in u:
        u['budget_rating'] = 3

print(f"Totale università elaborate: {len(all_unis)}")

# Serializza per data.js
js_content = f"""// UniMap — Dataset Completo Università Europee (QS 2027)
// Profilato per Giovanni Peruzzi (ITIS Rossi, Vicenza)
// Generato automaticamente con dati aggiornati

const VICENZA_COORDS = {{
  nome: "Vicenza",
  lat: {VICENZA_LAT},
  lng: {VICENZA_LNG},
  desc: "Città di residenza (ITIS Rossi)"
}};

const AMBITI_METADATA = {json.dumps(AMBITI_METADATA, indent=2, ensure_ascii=False)};

const LAVORO_PAESE = {json.dumps(LAVORO_PAESE, indent=2, ensure_ascii=False)};

const UNIVERSITIES = {json.dumps(all_unis, indent=2, ensure_ascii=False)};

// Metadati calcolati
const PAESI = [...new Set(UNIVERSITIES.map(u => u.paese))].sort();
const MAX_QS = Math.max(...UNIVERSITIES.map(u => u.qs2027));
const MIN_QS = Math.min(...UNIVERSITIES.map(u => u.qs2027));

console.log("UniMap dataset caricato:", UNIVERSITIES.length, "università pronte.");
"""

with open("data.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("data.js generato con successo con 55 università!")
