# -*- coding: utf-8 -*-
"""
make_data.py
Script che genera direttamente data.js per UniMap.
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

# Dizionario metadati ambiti
AMBITI_METADATA = {
    "cs": {
        "id": "cs",
        "nome": "Scienze Informatiche / Software",
        "emoji": "💻",
        "desc": "Computer Science, Software Engineering, Algoritmi, Sviluppo Web e Sistemi"
    },
    "ce": {
        "id": "ce",
        "nome": "Ingegneria Informatica",
        "emoji": "⚡",
        "desc": "Computer Engineering, Architettura Elaboratori, Sistemi Operativi, Controlli"
    },
    "ai": {
        "id": "ai",
        "nome": "AI, Data Science & Machine Learning",
        "emoji": "🤖",
        "desc": "Intelligenza Artificiale, Reti Neurali, Computer Vision, Deep Learning, PPO/RL"
    },
    "robotics": {
        "id": "robotics",
        "nome": "Robotica & Automazione",
        "emoji": "🦾",
        "desc": "Sistemi Autonomi, Robotica Mobile, Meccatronica, Cinematica, Simulazione"
    },
    "embedded": {
        "id": "embedded",
        "nome": "Sistemi Embedded & IoT",
        "emoji": "🔌",
        "desc": "Microcontrollori (Pico, Arduino, ARM), Hardware, Circuiti, Sensori, CircuitPython"
    },
    "cyber": {
        "id": "cyber",
        "nome": "Reti & Cybersecurity",
        "emoji": "🛡️",
        "desc": "Networking Cisco CCNA, Protocolli di Routing, Sicurezza Reti, Crittografia"
    },
    "gamedev": {
        "id": "gamedev",
        "nome": "Game Development & Grafica 3D",
        "emoji": "🎮",
        "desc": "Unity, Unreal Engine, ML-Agents, Computer Graphics, Simulazione Fisica"
    },
    "other_eng": {
        "id": "other_eng",
        "nome": "Altre Ingegnerie (per amici)",
        "emoji": "⚙️",
        "desc": "Meccanica, Elettronica, Aerospaziale, Biomedica, Gestionale, Civile"
    }
}

LAVORO_PAESE = {
    "Danimarca": {
        "salario_minimo_ora": "~135–155 DKK/ora (~18–21 €/ora)",
        "ore_studente_tipiche": "10–12 ore/settimana",
        "guadagno_mensile_stima": "~750–900 €/mese",
        "guadagno_mensile_val": 800,
        "sussidio_statale_val": 850,
        "sussidio_statale_nome": "SU Danese (~850 €/mese per studenti EU lavoratori)",
        "tipi_lavoro_comuni": "Student Assistant universitario, logistica, café, software tester",
        "regole_eu": "Studenti EU hanno diritto alla borsa statale danese SU (~850 €/mese) se lavorano almeno 10-12 ore a settimana!",
        "combinazione_borse": "Borsa SU (~850 €) + Lavoro 10h/settimana (~750 €) = oltre 1.550 €/mese garantiti a fronte di zero tasse universitarie!",
        "bilancio_mensile": "Con 10h di lavoro: 800€ (lavoro) + 850€ (SU) = 1.650 €/mese. Spese Aalborg: ~850-1.000 €. Avanzano 650-800 €!",
        "rating_lavoro": 5,
        "emoji": "🇩🇰",
        "note_speciali": "⭐ La Danimarca è la destinazione numero 1 per sostenibilità economica degli studenti EU grazie alla combinazione borsa SU + rette gratuite."
    },
    "Germania": {
        "salario_minimo_ora": "12,82 €/ora (minimo legale) — 14–18 €/ora come Werkstudent IT",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~538 € (Minijob) o 800–1.100 € (Werkstudent)",
        "guadagno_mensile_val": 650,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Esenzione fiscale Minijob / Werkstudent privilege",
        "tipi_lavoro_comuni": "HiWi universitario (assistente di ricerca/laboratorio nei politecnici ~14-16€/h), developer junior, retail",
        "regole_eu": "Studenti EU: lavoro libero. Il regime Werkstudent esonera dai contributi previdenziali principali.",
        "combinazione_borse": "Minijob da 538 € esentasse + budget genitori (600-800 €) = 1.150–1.350 €/mese. Rette pubbliche = 0 €!",
        "bilancio_mensile": "Lavoro Werkstudent/HiWi (~650 €) + Genitori (~600 €) = 1.250 €. Copre perfettamente il costo vita a Saarbrücken, Aquisgrana, Norimberga!",
        "rating_lavoro": 5,
        "emoji": "🇩🇪",
        "note_speciali": "I contratti 'HiWi' all'interno dei dipartimenti universitari permettono di fare ricerca retribuita a 14-16€/h a pochi metri dalle aule."
    },
    "Paesi Bassi": {
        "salario_minimo_ora": "~13,68 €/ora",
        "ore_studente_tipiche": "8–12 ore/settimana (almeno 32h/mese per aiuti DUO)",
        "guadagno_mensile_stima": "~480–650 €/mese",
        "guadagno_mensile_val": 550,
        "sussidio_statale_val": 450,
        "sussidio_statale_nome": "DUO Basic Grant + Student Travel (~450 €/mese)",
        "tipi_lavoro_comuni": "Ristorazione, logistica, tutor universitario, tech support",
        "regole_eu": "Se lavori almeno 32 ore al mese, sblocchi la borsa statale DUO (~440 €/mese) e viaggi gratis su treni e bus in tutta l'Olanda!",
        "combinazione_borse": "Lavoro 32h/mese (~500 €) + DUO grant (~440 €) + Trasporti gratuiti = ~940 €/mese di entrate proprie.",
        "bilancio_mensile": "Lavoro+DUO (~950 €) + Genitori (~600 €) = 1.550 €. Delft/Eindhoven/Enschede: ~1.100-1.300 €. Sostenibile!",
        "rating_lavoro": 4,
        "emoji": "🇳🇱",
        "note_speciali": "Qualità didattica straordinaria per CS e AI. Attenzione alla ricerca della stanza: muoversi 4-6 mesi prima!"
    },
    "Svezia": {
        "salario_minimo_ora": "~140–160 SEK/ora (~12,50–14,50 €/ora)",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~550–800 €/mese",
        "guadagno_mensile_val": 650,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Rette universitarie 0 € per cittadini UE",
        "tipi_lavoro_comuni": "Café, logistica, IT lab support, startup",
        "regole_eu": "Studenti EU: nessun limite di ore, tasse universitarie completamente gratuite.",
        "combinazione_borse": "Università gratuita + lavoro part-time (~650 €) + genitori (~700 €) = ~1.350 €. Copre perfettamente le spese a Göteborg o Linköping.",
        "bilancio_mensile": "Costo vita Svezia: ~900-1.200 €/mese. Con un part-time leggero e il supporto familiare si vive benissimo.",
        "rating_lavoro": 4,
        "emoji": "🇸🇪",
        "note_speciali": "Inglese parlato fluidamente dal 95% della popolazione. Atmosfera nei campus tecnologici aperta e informale."
    },
    "Finlandia": {
        "salario_minimo_ora": "~12–15 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~550–850 €/mese",
        "guadagno_mensile_val": 650,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Mense KELA a 2,95 € + Rette 0 € UE",
        "tipi_lavoro_comuni": "Logistica, servizi campus, software QA, ristorazione",
        "regole_eu": "Studenti EU: rette 0 €, alloggi HOAS/TOAS a canone agevolato per studenti.",
        "combinazione_borse": "Pranzi completi a soli 2,95 € nei campus grazie al sussidio KELA statale!",
        "bilancio_mensile": "Lavoro (~650 €) + Genitori (~600 €) = 1.250 €. Spese a Espoo/Tampere: ~800-1.000 €. Ottimo risparmio.",
        "rating_lavoro": 4,
        "emoji": "🇫🇮",
        "note_speciali": "Otaniemi (campus di Aalto) è il più grande polo d'innovazione e startup del Nord Europa."
    },
    "Norvegia": {
        "salario_minimo_ora": "~200–225 NOK/ora (~17–19 €/ora)",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~700–1.050 €/mese",
        "guadagno_mensile_val": 850,
        "sussidio_statale_val": 400,
        "sussidio_statale_nome": "LÅNEKASSEN (supporto studenti SEE)",
        "tipi_lavoro_comuni": "Supermercati, student assistant (~230 NOK/h), bar",
        "regole_eu": "Studenti SEE: lavoro libero e salari orari tra i più alti del pianeta.",
        "combinazione_borse": "Lavoro part-time (~850 €) + genitori (~600 €) = 1.450 €. A Trondheim la vita costa meno che a Oslo.",
        "bilancio_mensile": "Trondheim: affitto camera ~450-550 €, cibo ~400 €. Con 10 ore a settimana si è del tutto autonomi.",
        "rating_lavoro": 4,
        "emoji": "🇳🇴",
        "note_speciali": "NTNU Trondheim è la mecca dell'ingegneria norvegese; la città è popolata per oltre il 20% da universitari."
    },
    "Austria": {
        "salario_minimo_ora": "~12–15 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~500–750 €/mese",
        "guadagno_mensile_val": 600,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Tasse semestrali solo simboliche (~24 €)",
        "tipi_lavoro_comuni": "Geringfügige Beschäftigung (~518€ esentasse), HiWi nei politecnici, bar, tutor",
        "regole_eu": "Studenti EU: accesso libero al mercato del lavoro, rette universitarie praticamente gratuite.",
        "combinazione_borse": "Minijob austriaco (~500 €) + genitori (600-800 €) = 1.100–1.300 €. A Linz o Graz la vita costa ~800-950 €.",
        "bilancio_mensile": "JKU Linz con part-time: vita studentesca tranquilla e vicina a casa.",
        "rating_lavoro": 4,
        "emoji": "🇦🇹",
        "note_speciali": "Linz e Vienna sono comodamente raggiungibili dal Veneto in treno o in auto in poche ore."
    },
    "Belgio": {
        "salario_minimo_ora": "~13–14 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana (fino a 600h/anno esentasse)",
        "guadagno_mensile_stima": "~550–750 €/mese",
        "guadagno_mensile_val": 600,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Studentenarbeid (600 ore all'anno a tassazione minima)",
        "tipi_lavoro_comuni": "Studentenjob in ristorazione, logistica, fablab, retail",
        "regole_eu": "Contratto studenti belga esente da imposte sul reddito fino a 600 ore lavorate.",
        "combinazione_borse": "Tasse KU Leuven contenute (~1.116 €/anno) + lavoro part-time (~600 €) + genitori (~600 €) = 1.200 €/mese.",
        "bilancio_mensile": "Leuven è a 20 minuti di treno da Bruxelles, ambiente giovanile e vivace.",
        "rating_lavoro": 3,
        "emoji": "🇧🇪",
        "note_speciali": "KU Leuven ha una triennale 'Engineering Technology' interamente in inglese al Campus Group T, basata su team project."
    },
    "Irlanda": {
        "salario_minimo_ora": "12,70 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~550–800 €/mese",
        "guadagno_mensile_val": 650,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Free Fees Initiative UE",
        "tipi_lavoro_comuni": "Pub, café, call center tech, tutor",
        "regole_eu": "Studenti EU: regime Free Fees (si versa solo la student contribution di ~3.000 €/anno).",
        "combinazione_borse": "Part-time (~700 €) + genitori (~700 €) = 1.400 €. Attenzione: Dublino ha affitti molto cari.",
        "bilancio_mensile": "Galway o Cork sono molto più economiche di Dublino per l'alloggio.",
        "rating_lavoro": 3,
        "emoji": "🇮🇪",
        "note_speciali": "Giovanni conosce già l'Irlanda grazie all'Erasmus PCTO svolto a Dublino/Clondalkin."
    },
    "Repubblica Ceca": {
        "salario_minimo_ora": "~170–230 CZK/ora (~7–10 € per lavori generici, ~12–15 € per IT junior)",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~400–600 €/mese",
        "guadagno_mensile_val": 450,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Dormitori universitari a ~130–180 €/mese",
        "tipi_lavoro_comuni": "Helpdesk IT, developer junior in multinazionali a Praga o Brno, bar",
        "regole_eu": "Studenti EU: accesso libero. Costo della vita bassissimo.",
        "combinazione_borse": "Dormitorio universitario a 150 €/mese. Spese complessive a Praga: ~600–750 €/mese!",
        "bilancio_mensile": "Con il budget genitori di 600-800€ si vive senza alcun bisogno di lavorare; lavorando part-time si risparmiano centinaia di euro al mese!",
        "rating_lavoro": 5,
        "emoji": "🇨🇿",
        "note_speciali": "Rapporto qualità/prezzo incredibile: ČVUT / CTU Praga è tra i centri di cibernetica e robotica più prestigiosi dell'Europa Centrale."
    },
    "Polonia": {
        "salario_minimo_ora": "~28–35 PLN/ora (~6,50–8,50 €/ora)",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~350–550 €/mese",
        "guadagno_mensile_val": 400,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "0% tasse sul reddito per under 26 (Zerowy PIT)",
        "tipi_lavoro_comuni": "Sviluppatore junior, tester QA, call center multilingua, barista",
        "regole_eu": "Studenti under 26 hanno esenzione totale dalle tasse sul reddito (PIT zero).",
        "combinazione_borse": "Alloggio in collegio universitario a 100-180 €/mese. Spesa totale mensile: ~500-650 €.",
        "bilancio_mensile": "Il budget di 600-800€ copre ampiamente tutte le spese a Varsavia o Breslavia.",
        "rating_lavoro": 4,
        "emoji": "🇵🇱",
        "note_speciali": "Hub emergente per il software e la cybersecurity con costi della vita molto favorevoli."
    },
    "Estonia": {
        "salario_minimo_ora": "~6,00–8,50 €/ora base, 12–16 €/ora in ambito IT",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~400–700 €/mese",
        "guadagno_mensile_val": 500,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Borse Dora Plus e Achievement Stipend per STEM",
        "tipi_lavoro_comuni": "Junior developer, QA/cybersecurity intern in startup (Skype, Bolt, Wise), supporto IT",
        "regole_eu": "Studenti EU: accesso libero. Ecosistema 100% digitalizzato.",
        "combinazione_borse": "Borse di merito estoni (100–400 €/mese) + vita a ~650-850 €/mese.",
        "bilancio_mensile": "Tartu e Tallinn: il budget di 600-800€ + borse o lavoretto copre interamente le necessità.",
        "rating_lavoro": 4,
        "emoji": "🇪🇪",
        "note_speciali": "La nazione più digitalizzata al mondo. TalTech è il punto di riferimento europeo per la Cybersecurity (sede NATO CCDCOE)."
    },
    "Spagna": {
        "salario_minimo_ora": "~8,50–10,50 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~350–500 €/mese",
        "guadagno_mensile_val": 400,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Tasse pubbliche moderate (~1.200–2.000 €)",
        "tipi_lavoro_comuni": "Ristorazione, retail, tirocini convenzionati, ripetizioni",
        "regole_eu": "Studenti EU: lavoro libero tramite codice NIE.",
        "combinazione_borse": "Tasse universitarie pubbliche contenute. A Valencia costo vita ~650-850 €/mese.",
        "bilancio_mensile": "A Valencia o Madrid: con 600-800€ familiari + 400€ di lavoretto si sta sereni.",
        "rating_lavoro": 2,
        "emoji": "🇪🇸",
        "note_speciali": "La Carlos III di Madrid (UC3M) è uno dei rari atenei spagnoli con triennali in Robotica e CS interamente in lingua inglese."
    },
    "Portogallo": {
        "salario_minimo_ora": "~6,00–7,50 €/ora",
        "ore_studente_tipiche": "10–15 ore/settimana",
        "guadagno_mensile_stima": "~250–400 €/mese",
        "guadagno_mensile_val": 350,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Tasse pubbliche molto basse (~700–1.000 €/anno)",
        "tipi_lavoro_comuni": "Call center tech multilingue a Lisbona, turismo, bar",
        "regole_eu": "Studenti EU: lavoro libero.",
        "combinazione_borse": "Tasse tra le più basse dell'Europa occidentale. Porto molto più accessibile di Lisbona per gli affitti.",
        "bilancio_mensile": "Porto: ~650-800 €/mese coperti bene dal budget familiare.",
        "rating_lavoro": 2,
        "emoji": "🇵🇹",
        "note_speciali": "Presso l'Instituto Superior Técnico (IST) di Lisbona si respira un'ottima atmosfera ingegneristica con forte orientamento alla robotica."
    },
    "Italia": {
        "salario_minimo_ora": "~8–10 €/ora",
        "ore_studente_tipiche": "8–15 ore/settimana",
        "guadagno_mensile_stima": "~300–500 €/mese",
        "guadagno_mensile_val": 350,
        "sussidio_statale_val": 0,
        "sussidio_statale_nome": "Collaborazioni studentesche '150 ore' & Borsa regionale DSU/ESU",
        "tipi_lavoro_comuni": "Bando '150 ore' dell'ateneo (~8-9 €/h in lab/biblioteche), ripetizioni scolastiche (15-20€/h), rider, bar",
        "regole_eu": "Nessun vincolo per studenti italiani. No-tax area fino a 24.000€ ISEE per le tasse.",
        "combinazione_borse": "Se pendolare da Vicenza (Padova o Verona): AFFITTO = 0 €! Il budget genitoriale di 600-800€ si trasforma per il 70-80% in puro risparmio!",
        "bilancio_mensile": "Padova/Verona da pendolare: ~100-150 €/mese di abbonamento treno + cibo. Torino/Pisa fuori sede: ~700-900 €/mese totali.",
        "rating_lavoro": 3,
        "emoji": "🇮🇹",
        "note_speciali": "Il bando universitario '150 ore' è comodissimo: si lavora direttamente all'interno delle strutture universitarie senza perdere tempo in spostamenti."
    }
}

print("Base setup completo.")
