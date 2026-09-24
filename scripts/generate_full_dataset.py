# -*- coding: utf-8 -*-
"""
UniMap dataset generator
Creates data.js with 60+ European universities.
"""
import json
import math

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
        return f"🚆 ~20–30 min in treno regionale (Pendolare comodissimo da Vicenza, spesa alloggio zero)"
    elif dist <= 90:
        return f"🚆 ~35–55 min in treno (Pendolare giornaliero facilissimo da Vicenza)"
    elif dist <= 140:
        return f"🚆 ~1h–1h20 in treno (Pendolare possibile o rientro nei weekend)"
    elif dist <= 260:
        return f"🚆 ~1h45–2h15 in Frecciarossa / Italo (Milano/Bologna, weekend a casa facilissimi)"
    elif dist <= 450:
        return f"🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per weekend o festività)"
    elif dist <= 800:
        return f"🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE) / Verona (VRN)"
    else:
        return f"✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"

with open('universities_data.json', 'w', encoding='utf-8') as f:
    f.write('{}')
print("Scaffold ready")
