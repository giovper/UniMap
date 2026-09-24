# -*- coding: utf-8 -*-
"""
build_all_universities.py
Genera data.js per UniMap.
"""
import math
import json

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

print("Starting generation script...")
