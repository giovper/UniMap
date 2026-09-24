# -*- coding: utf-8 -*-
"""
unis_data_builder.py
Generatore completo del dataset JavaScript 'data.js' per UniMap.
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
        return "🚆 ~20–30 min in treno regionale (Pendolare comodissimo da Vicenza, zero affitto!)"
    elif dist <= 90:
        return "🚆 ~35–55 min in treno (Pendolare giornaliero facile o rientro serale)"
    elif dist <= 140:
        return "🚆 ~1h–1h20 in treno (Fattibile sia pendolare sia stanza con weekend a casa)"
    elif dist <= 260:
        return "🚆 ~1h45–2h15 in AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
    elif dist <= 450:
        return "🚆/🚗 ~3h–4h (Treno AV o auto, rientro facile per weekend lunghi e festività)"
    elif dist <= 800:
        return "🚆 Treno Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
    else:
        return "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"

# ─── UNIVERSITÀ ITALIANE ──────────────────────────────────────────────
ITALIAN_UNIS = [
    {
        "id": "unipd",
        "nome": "Università di Padova (UniPD)",
        "citta": "Padova",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.4064,
        "lng": 11.8768,
        "qs2027": 219,
        "qs2026": 219,
        "punteggio_qs": 43.1,
        "tasse_annue_eu": "Fino a ~2.600 € (No-tax area totale sotto 24.000 € ISEE)",
        "affitto_mensile": "350–500 € (singola) / 0 € se vivi a Vicenza con i tuoi",
        "costo_vita_totale": "~500–750 €/mese (o ~100–150 € per abbonamento treno se fai il pendolare)",
        "budget_mensile_val": 650,
        "budget_rating": 5,
        "ambiti": ["cs", "ce", "ai", "embedded", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "B.Sc. Information Engineering",
                "lingua": "🇬🇧 Inglese",
                "lingua_code": "en",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "embedded", "cs"],
                "focus": "Interamente in inglese. Copre computer engineering, telecomunicazioni, elettronica e sistemi software."
            },
            {
                "nome": "Laurea in Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "Dipartimento di Matematica. Solida base algoritmica, programmazione funzionale e orientata agli oggetti, basi di machine learning."
            },
            {
                "nome": "Laurea in Ingegneria Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "embedded", "robotics"],
                "focus": "Sistemi operativi, architettura degli elaboratori, controlli automatici e automazione industriale."
            },
            {
                "nome": "Laurea in Ingegneria Elettronica / Meccanica / Biomedica / Aerospaziale",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["other_eng"],
                "focus": "Perfetto per il gruppo di amici dell'ITIS Rossi che vogliono intraprendere altri rami dell'ingegneria nello stesso polo."
            }
        ],
        "lingua_triennale": "Inglese (Information Engineering) + Italiano (Informatica, Ing. Informatica)",
        "has_english_bachelor": True,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I (erogato da CISIA) per Ingegneria; TOLC-S per Scienze Informatiche",
            "soglia_indicativa": "Punteggio TOLC consigliato ≥ 22-26/50 per rientrare comodamente nella 1ª graduatoria",
            "scadenze": "1ª finestra anticipata: Febbraio–Aprile; 2ª finestra estiva: Giugno–Luglio",
            "requisiti_lingua": "Inglese B2 certificato (il tuo Cambridge First B2/C1 ti esonera direttamente dalla prova CLA)",
            "procedura": "1. Prenota e sostieni il TOLC-I o TOLC@CASA su cisiaonline.it\n2. Iscriviti alla selezione su Uniweb allegando il punteggio TOLC\n3. Controlla la graduatoria e perfeziona l'immatricolazione online con SPID",
            "difficolta": 2
        },
        "approccio_didattico": "Tradizione teorica rigorosa italiana, ottimi laboratori al DEI (Dipartimento di Ingegneria dell'Informazione).",
        "qualita_vita": "Padova è una città a misura di studente, con vivace vita universitaria (il Portello, piazze), piste ciclabili ovunque.",
        "soddisfazione_studenti": "8.8/10. Elevata reputazione accademica e forte radicamento industriale nel Nord-Est.",
        "rapporto_studio_vita": "Ottimo: la vicinanza estrema a Vicenza elimina lo stress dei lunghi viaggi.",
        "borse_sussidi": "Borse regionali ESU Veneto per merito/reddito (fino a 6.000 €/anno + mensa e alloggio gratis per aventi diritto). No-tax area fino a 24k ISEE.",
        "fit_score": 9.4,
        "fit_note": "Scelta strategicamente imbattibile: a 30 km da casa, ha la triennale in inglese (Information Engineering), il tuo B2/C1 è subito valido e con 600-800€/mese ti avanza quasi tutto il budget se fai il pendolare!",
        "punti_forza": ["A soli 30 km da Vicenza (20 min di treno)", "Triennale in inglese 'Information Engineering'", "Spesa alloggio 0 € se pendolare", "Ampia gamma di ingegnerie per gli amici"],
        "punti_deboli": ["Meno orientata al project-based learning rispetto agli atenei nordeuropei", "Classi del primo anno molto numerose"],
        "url": "https://www.unipd.it"
    },
    {
        "id": "univr",
        "nome": "Università di Verona (UniVr)",
        "citta": "Verona",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.4384,
        "lng": 10.9916,
        "qs2027": 680,
        "qs2026": 700,
        "punteggio_qs": 28.5,
        "tasse_annue_eu": "Fino a ~2.300 € (No-tax area ISEE fino a 24.000 €)",
        "affitto_mensile": "350–480 € (o 0 € pendolare da Vicenza)",
        "costo_vita_totale": "~450–700 €/mese (o ~110 € treno pendolare)",
        "budget_mensile_val": 600,
        "budget_rating": 5,
        "ambiti": ["cs", "ai", "embedded", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "Laurea in Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai", "embedded"],
                "focus": "Forte dipartimento di informatica (Ca' Vignal), eccellente in sistemi embedded, algoritmi e intelligenza artificiale."
            },
            {
                "nome": "Laurea in Bioinformatica",
                "lingua": "🇮🇹 Italiano / Moduli Inglese",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "Pioniera in Italia per l'intersezione tra machine learning, data science e genetica/scienze biologiche."
            },
            {
                "nome": "Laurea in Ingegneria dei Sistemi Medicali per la Persona",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["other_eng", "embedded"],
                "focus": "Corso ingegneristico incentrato su dispositivi hardware/software per la salute, ottimo per compagni di classe."
            }
        ],
        "lingua_triennale": "Italiano (Informatica, Bioinformatica)",
        "has_english_bachelor": False,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-S per Informatica",
            "soglia_indicativa": "Punteggio TOLC ≥ 18-20/50 per ammissione diretta",
            "scadenze": "Sessioni primaverili ed estive TOLC; immatricolazioni fino a Settembre",
            "requisiti_lingua": "Italiano madrelingua / B2",
            "procedura": "Sostieni il TOLC-S, registrati su ESSE3 UniVr e inserisciti in graduatoria.",
            "difficolta": 1
        },
        "approccio_didattico": "Dipartimento compatto e moderno, ottimo rapporto studenti-docenti rispetto ai mega-atenei.",
        "qualita_vita": "Verona è una città bellissima, sicura, ordinata e comodissima da raggiungere da Vicenza.",
        "soddisfazione_studenti": "8.5/10. Docenti molto disponibili nei laboratori.",
        "rapporto_studio_vita": "Eccellente: 35 minuti di treno da Vicenza a Verona Porta Vescovo (proprio a due passi dal Polo Scientifico di Borgo Roma).",
        "borse_sussidi": "Borse ESU Verona, facilitazioni per abbonamenti ferroviari studenti.",
        "fit_score": 8.7,
        "fit_note": "A soli 45 km da Vicenza, Polo scientifico di Borgo Roma vicinissimo alla stazione di Porta Vescovo: perfetto se vuoi fare il pendolare con spesa minima.",
        "punti_forza": ["A 45 km da Vicenza (35 min di treno da Porta Vescovo)", "Dipartimento di informatica molto quotato", "Costi quasi zero da pendolare", "Rapporto stretto coi professori"],
        "punti_deboli": ["Non ha una triennale 100% in inglese", "Meno prestigio internazionale di PoliMi o TUM"],
        "url": "https://www.univr.it"
    },
    {
        "id": "unive",
        "nome": "Università Ca' Foscari Venezia",
        "citta": "Venezia",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.4344,
        "lng": 12.3267,
        "qs2027": 630,
        "qs2026": 650,
        "punteggio_qs": 30.2,
        "tasse_annue_eu": "Fino a ~2.400 € (No-tax area ISEE)",
        "affitto_mensile": "400–600 € (o 0 € pendolare da Vicenza per il campus di Mestre)",
        "costo_vita_totale": "~500–750 €/mese (o ~110 € treno da pendolare)",
        "budget_mensile_val": 650,
        "budget_rating": 5,
        "ambiti": ["cs", "ai", "cyber"],
        "lauree_triennali": [
            {
                "nome": "B.Sc. Digital Management (in collaborazione con H-FARM)",
                "lingua": "🇬🇧 Inglese",
                "lingua_code": "en",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "100% in inglese presso il campus H-FARM di Roncade (Treviso). Combina computer science, AI, business digitale e innovazione."
            },
            {
                "nome": "Laurea in Informatica (Campus Scientifico di Mestre)",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai", "cyber"],
                "focus": "Presso il moderno Campus Scientifico di Via Torino a Mestre. Ottima specializzazione in cybersecurity e data science."
            }
        ],
        "lingua_triennale": "Inglese (Digital Management) + Italiano (Informatica)",
        "has_english_bachelor": True,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I o TOLC-S per Informatica; TOLC-E / SAT per Digital Management",
            "soglia_indicativa": "Punteggio TOLC ≥ 20/50",
            "scadenze": "Finestra primaverile (Marzo-Maggio) ed estiva (Luglio)",
            "requisiti_lingua": "B2 inglese per Digital Management",
            "procedura": "Iscrizione online sul portale Ca' Foscari con esito TOLC.",
            "difficolta": 2
        },
        "approccio_didattico": "Il campus scientifico di Mestre è modernissimo e ben collegato; H-FARM offre un ambiente stile campus della Silicon Valley.",
        "qualita_vita": "Il campus di Via Torino è a Mestre (facile da raggiungere in treno da Vicenza senza entrare nella laguna).",
        "soddisfazione_studenti": "8.4/10. Ottimi laboratori e ambiente stimolante.",
        "rapporto_studio_vita": "Molto buono se fai il pendolare sulla linea ferroviaria Vicenza-Mestre (~40-50 min).",
        "borse_sussidi": "Borse ESU Venezia, agevolazioni regionali.",
        "fit_score": 8.5,
        "fit_note": "A 60 km da Vicenza. Se ti interessa l'ecosistema startup c'è Digital Management in inglese a H-FARM, oppure Informatica/Cybersecurity al Campus di Mestre.",
        "punti_forza": ["A 60 km da Vicenza (linea ferroviaria diretta per Mestre)", "Digital Management 100% in inglese in H-FARM", "Campus scientifico moderno a Mestre", "Ambiente molto innovativo"],
        "punti_deboli": ["H-FARM ha rette extra rispetto alla pubblica pura", "Meno orientato all'hardware/embedded rispetto a Padova"],
        "url": "https://www.unive.it"
    },
    {
        "id": "polimi",
        "nome": "Politecnico di Milano (PoliMi)",
        "citta": "Milano",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.4781,
        "lng": 9.2273,
        "qs2027": 87,
        "qs2026": 111,
        "punteggio_qs": 68.4,
        "tasse_annue_eu": "Fino a ~3.900 €/anno (fasce ISEE, no-tax area fino a 24k)",
        "affitto_mensile": "500–800 € (singola a Milano) — mercato alloggi molto teso",
        "costo_vita_totale": "~900–1.300 €/mese",
        "budget_mensile_val": 1100,
        "budget_rating": 3,
        "ambiti": ["cs", "ce", "ai", "robotics", "embedded", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "Laurea in Ingegneria Informatica (Milano Leonardo / Bovisa)",
                "lingua": "🇮🇹 Italiano (con ampia bibliografia inglese)",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "cs", "ai", "embedded"],
                "focus": "Il corso di riferimento per l'ingegneria informatica in Italia. Preparazione matematica e ingegneristica di primissimo livello."
            },
            {
                "nome": "Laurea in Ingegneria dell'Automazione (Automation & Control)",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["robotics", "embedded"],
                "focus": "Focalizzato su robotica, sistemi di controllo, automazione industriale e meccatronica. Perfetto per il tuo background RoboCup."
            },
            {
                "nome": "Laurea in Ingegneria Elettronica / Meccanica / Aerospaziale / Biomedica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["other_eng"],
                "focus": "I migliori corsi d'ingegneria in Italia per i tuoi compagni di scuola dell'ITIS."
            }
        ],
        "lingua_triennale": "Italiano (Triennali) — Magistrali interamente in inglese",
        "has_english_bachelor": False,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOL (Test On Line del Politecnico di Milano)",
            "soglia_indicativa": "Punteggio TOL ≥ 60/100 (in 4ª superiore basta 60 per immatricolazione anticipata garantita!)",
            "scadenze": "Sessioni anticipate per studenti di 4ª e 5ª superiore da Febbraio a Maggio; sessioni standard a Giugno-Luglio",
            "requisiti_lingua": "TELA (Test di lingua inglese) con punteggio minimo oppure certificazione Cambridge B2 (il tuo First è perfetto!)",
            "procedura": "1. Registrati sui servizi online PoliMi\n2. Sostieni il TOL online o nelle aule del PoliMi\n3. Con punteggio ≥ 60 ti immatricoli direttamente nella sessione anticipata senza rischiare la graduatoria!",
            "difficolta": 3
        },
        "approccio_didattico": "Forte rigore teorico, esami di Analisi 1, 2, Fisica tecnica molto selettivi. Ottimi laboratori e team studenteschi (Formula Student, Polimi Robotics).",
        "qualita_vita": "Milano offre opportunità professionali ineguagliabili in Italia, eventi tech, collegamenti con multinazionali.",
        "soddisfazione_studenti": "8.9/10. Marchio PoliMi ricercatissimo dai recruiter di tutta Europa.",
        "rapporto_studio_vita": "Intenso e impegnativo: il carico di studio è alto, ma i collegamenti ferroviari con Vicenza sono comodissimi (1h45 Frecciarossa).",
        "borse_sussidi": "Borse Diritto allo Studio DSU PoliMi (alloggio + borsa fino a 7.000 €).",
        "fit_score": 9.0,
        "fit_note": "Il top assoluto per reputazione in Italia (#87 al mondo). A 1h45 di Frecciarossa da Vicenza. Se passi il TOL con ≥60 sei dentro subito. Solo peccato che la triennale sia in italiano, ma le magistrali sono 100% in inglese.",
        "punti_forza": ["#87 al mondo (Top 1 in Italia)", "TOL superabile già in anticipo", "Networking eccezionale con aziende IT e robotica", "A 1h45 di treno AV da Vicenza"],
        "punti_deboli": ["Affitti molto cari a Milano (550-800€/stanza)", "Triennale erogata in italiano"],
        "url": "https://www.polimi.it"
    },
    {
        "id": "polito",
        "nome": "Politecnico di Torino (PoliTo)",
        "citta": "Torino",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.0628,
        "lng": 7.6626,
        "qs2027": 241,
        "qs2026": 252,
        "punteggio_qs": 41.2,
        "tasse_annue_eu": "Fino a ~2.600 € (fasce ISEE, no-tax area)",
        "affitto_mensile": "300–450 € (singola a Torino, molto più economica di Milano)",
        "costo_vita_totale": "~650–850 €/mese",
        "budget_mensile_val": 750,
        "budget_rating": 4,
        "ambiti": ["cs", "ce", "ai", "robotics", "embedded", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "B.Sc. Computer Engineering (100% IN INGLESE)",
                "lingua": "🇬🇧 Inglese",
                "lingua_code": "en",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "cs", "ai", "embedded"],
                "focus": "Uno dei pochissimi corsi di Ingegneria Informatica in Italia interamente erogato in lingua inglese fin dal 1° anno!"
            },
            {
                "nome": "Laurea in Ingegneria Informatica (in Italiano)",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "cs", "embedded"],
                "focus": "Curriculum classico in italiano, solido su architetture calcolatori, sistemi operativi e reti di telecomunicazione."
            },
            {
                "nome": "Laurea in Ingegneria Meccatronica / Elettronica / Aerospaziale / Autoveicolo",
                "lingua": "🇮🇹 Italiano / Moduli Inglese",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["robotics", "other_eng", "embedded"],
                "focus": "Torino è la capitale italiana dell'automotive e della meccatronica. Perfetto per il tuo background embedded/robotico e per gli amici."
            }
        ],
        "lingua_triennale": "Inglese (Computer Engineering) + Italiano (tutte le altre ingegnerie)",
        "has_english_bachelor": True,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TIL-I (Test d'Ingresso On-line PoliTo)",
            "soglia_indicativa": "Con punteggio TIL-I ≥ 60/100 ammissione garantita senza passare da graduatoria!",
            "scadenze": "Sessioni TIL-I da Febbraio a Luglio sia in sede sia @HOME",
            "requisiti_lingua": "Certificato B2 di inglese (il tuo Cambridge First è pienamente valido ed esonera dall'IELTS)",
            "procedura": "1. Crea account su 'Apply@polito'\n2. Prenota e sostieni il TIL-I\n3. Con punteggio ≥ 60 ti immatricoli immediatamente al corso in inglese!",
            "difficolta": 2
        },
        "approccio_didattico": "Metodo politecnico solido, team studenteschi d'eccellenza (Team Meccatronica, Squadra Corse, Polito Rocket Team).",
        "qualita_vita": "Torino è tra le città universitarie con il miglior rapporto qualità/prezzo in Italia: affitti accessibili, parchi, trasporti efficienti.",
        "soddisfazione_studenti": "8.8/10. La comunità studentesca è affiatata e la città è molto accogliente per i fuori sede.",
        "rapporto_studio_vita": "Equilibrato: ritmo accademico impegnativo ma vita studentesca molto piacevole con costi contenuti.",
        "borse_sussidi": "Borse EDISU Piemonte (fino a 6.500 € + mensa gratuita e residenza per ISEE sotto soglia).",
        "fit_score": 9.5,
        "fit_note": "⭐ OPZIONE ITALIANA TOP: ha la triennale in Computer Engineering 100% IN INGLESE, costa molto meno di Milano (singola a 350-400€), il budget di 600-800€ dei tuoi genitori basta perfettamente e con il TIL-I ≥60 sei dentro!",
        "punti_forza": ["Triennale Computer Engineering 100% in inglese", "Costi affitto molto più bassi di Milano e Bologna (350-450€)", "Budget 600-800€/mese perfettamente compatibile", "Ammissione automatica con TIL ≥ 60"],
        "punti_deboli": ["A ~3h di treno da Vicenza (meno vicino di Padova/Verona)"],
        "url": "https://www.polito.it"
    },
    {
        "id": "unitn",
        "nome": "Università di Trento (UniTn)",
        "citta": "Trento",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 46.0697,
        "lng": 11.1211,
        "qs2027": 429,
        "qs2026": 435,
        "punteggio_qs": 31.8,
        "tasse_annue_eu": "Fino a ~3.000 € (No-tax area e borse provinciali generosissime)",
        "affitto_mensile": "300–450 € (singola / alloggi Opera Universitaria)",
        "costo_vita_totale": "~650–850 €/mese",
        "budget_mensile_val": 750,
        "budget_rating": 4,
        "ambiti": ["cs", "ce", "ai", "embedded", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "Laurea in Ingegneria Informatica, delle Comunicazioni ed Elettronica (ICE)",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "embedded", "cs"],
                "focus": "Dipartimento DISI a Povo. Uno dei poli tecnologici più all'avanguardia d'Italia, con fortissima integrazione hardware/software."
            },
            {
                "nome": "Laurea in Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "Focalizzato su intelligenza artificiale, algoritmi avanzati e ingegneria del software, collegato ai laboratori FBK (Fondazione Bruno Kessler)."
            },
            {
                "nome": "Laurea in Ingegneria Industriale / Meccatronica (Polo di Rovereto/Trento)",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["other_eng", "robotics"],
                "focus": "Ottimo per gli amici interessati a meccatronica, materiali e robotica industriale."
            }
        ],
        "lingua_triennale": "Italiano (triennali) — Magistrali interamente in inglese (DISI)",
        "has_english_bachelor": False,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I (erogato da CISIA)",
            "soglia_indicativa": "Punteggio TOLC ≥ 22-24/50",
            "scadenze": "Bandi primaverili (Marzo-Maggio) ed estivi (Luglio)",
            "requisiti_lingua": "Italiano B2",
            "procedura": "Sostieni il TOLC-I e iscriviti al bando di ammissione sul portale d'ateneo UniTn.",
            "difficolta": 2
        },
        "approccio_didattico": "Polo tecnologico di Povo eccezionale: aule moderne, laboratori ricchi, rapporto diretto e costante con i professori.",
        "qualita_vita": "Trento è ai vertici nazionali per qualità della vita, sicurezza, verde e piste ciclabili.",
        "soddisfazione_studenti": "9.1/10 (tra le più alte in Italia nelle classifiche Censis).",
        "rapporto_studio_vita": "Perfetto: a solo 1h30 di treno o auto da Vicenza (linea della Valsugana o Brennero).",
        "borse_sussidi": "Opera Universitaria di Trento: tra i servizi di welfare studentesco più efficienti d'Italia (mensa, alloggi moderni a Povo e borse cospicue).",
        "fit_score": 9.2,
        "fit_note": "A 90 km da Vicenza. Il DISI di Trento è una perla per l'informatica e l'AI in Italia. Città a misura d'uomo, welfare provinciale eccellente e rientro a casa in Valsugana in un lampo.",
        "punti_forza": ["A 90 km da Vicenza (1h30 in auto/Valsugana)", "Dipartimento DISI al vertice della ricerca informatica", "Alloggi Opera Universitaria economici e curati", "Qualità della vita altissima"],
        "punti_deboli": ["La triennale è in italiano (magistrali in inglese)", "Città tranquilla per chi cerca movida metropolitana"],
        "url": "https://www.unitn.it"
    },
    {
        "id": "unibo",
        "nome": "Università di Bologna (UniBo)",
        "citta": "Bologna",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 44.4949,
        "lng": 11.3426,
        "qs2027": 123,
        "qs2026": 154,
        "punteggio_qs": 58.7,
        "tasse_annue_eu": "Fino a ~3.000 € (No-tax area fino a 24.000 € ISEE)",
        "affitto_mensile": "400–650 € (grave carenza alloggi a Bologna)",
        "costo_vita_totale": "~800–1.100 €/mese",
        "budget_mensile_val": 950,
        "budget_rating": 3,
        "ambiti": ["cs", "ce", "ai", "robotics", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "Laurea in Ingegneria Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "cs", "embedded"],
                "focus": "Scuola di Ingegneria di Bologna. Corso consolidato con ottimi collegamenti con la Motor Valley e l'industria emiliana."
            },
            {
                "nome": "Laurea in Ingegneria dell'Automazione (Automation Engineering)",
                "lingua": "🇮🇹 Italiano / Moduli Inglese",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["robotics", "embedded"],
                "focus": "Tradizione fortissima nei controlli automatici, robotica industriale e packaging automatizzato."
            },
            {
                "nome": "Laurea in Scienze Informatiche",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "Dipartimento di Informatica - Scienza e Ingegneria (DISI). Basi solide di programmazione, algoritmi e cloud computing."
            }
        ],
        "lingua_triennale": "Italiano (triennali)",
        "has_english_bachelor": False,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I per Ingegneria, TOLC-S per Scienze",
            "soglia_indicativa": "Punteggio TOLC ≥ 25/50 per rientrare nella graduatoria",
            "scadenze": "Selezioni primaverili (Aprile) ed estive (Luglio)",
            "requisiti_lingua": "Italiano",
            "procedura": "Sostieni il TOLC e partecipa alla selezione sul portale Studenti Online UniBo.",
            "difficolta": 2
        },
        "approccio_didattico": "Prestigioso ateneo storico, didattica accademica strutturata e rigorosa.",
        "qualita_vita": "Bologna è la capitale della vita studentesca italiana: cultura, musica, eventi, piazze sempre vive.",
        "soddisfazione_studenti": "9.0/10 per la vita sociale ed esperienza di crescita personale.",
        "rapporto_studio_vita": "Molto stimolante, ma la ricerca della stanza può rivelarsi stressante.",
        "borse_sussidi": "Borse ER.GO Emilia-Romagna.",
        "fit_score": 8.6,
        "fit_note": "A 1h20 di treno AV da Vicenza. Vita studentesca favolosa, ma la crisi degli alloggi a Bologna è seria e la triennale è in italiano.",
        "punti_forza": ["A 1h20 di treno da Vicenza", "Vita studentesca leggendaria", "Forte polo per l'automazione e l'AI", "Ottima reputazione nazionale"],
        "punti_deboli": ["Difficoltà estrema a trovare casa/camera", "Triennale solo in italiano"],
        "url": "https://www.unibo.it"
    },
    {
        "id": "sapienza",
        "nome": "Sapienza Università di Roma",
        "citta": "Roma",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 41.9028,
        "lng": 12.4964,
        "qs2027": 111,
        "qs2026": 134,
        "punteggio_qs": 61.3,
        "tasse_annue_eu": "Fino a ~2.900 € (No-tax area ISEE)",
        "affitto_mensile": "400–650 € (singola)",
        "costo_vita_totale": "~800–1.150 €/mese",
        "budget_mensile_val": 950,
        "budget_rating": 3,
        "ambiti": ["cs", "ce", "ai", "robotics", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "B.Sc. Applied Computer Science and Artificial Intelligence (ACSAI)",
                "lingua": "🇬🇧 Inglese (100% in lingua)",
                "lingua_code": "en",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ai", "cs", "robotics"],
                "focus": "Uno dei primissimi e più celebri Bachelor in AI d'Europa erogati in inglese! Machine learning, computer vision, elaborazione linguaggio naturale e robotica cognitiva."
            },
            {
                "nome": "Laurea in Ingegneria Informatica e Automatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "robotics", "embedded"],
                "focus": "Dipartimento DIAG. Grande tradizione nella robotica mobile e nella percezione autonoma."
            }
        ],
        "lingua_triennale": "Inglese (ACSAI) + Italiano (altri corsi)",
        "has_english_bachelor": True,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I o SAT per il corso ACSAI in inglese",
            "soglia_indicativa": "Per ACSAI selezione molto competitiva: punteggio TOLC consigliato ≥ 30/50 o SAT ≥ 1200",
            "scadenze": "Bando per studenti UE solitamente aperto fino a Maggio/Giugno con graduatoria a Luglio",
            "requisiti_lingua": "Inglese B2 certificato (il tuo Cambridge First ti qualifica direttamente)",
            "procedura": "1. Sostieni il TOLC-I\n2. Iscriviti al bando ACSAI su Infostud Sapienza\n3. Verifica la graduatoria di merito",
            "difficolta": 3
        },
        "approccio_didattico": "Il dipartimento DIAG di Sapienza è un'autorità mondiale nella ricerca di intelligenza artificiale e robotica (es. RoboCup, lab ALCOR).",
        "qualita_vita": "Roma offre infinite attrazioni, ma è una metropoli caotica con spostamenti lunghi.",
        "soddisfazione_studenti": "8.5/10 (molto alta specificamente per la classe internazionale di ACSAI).",
        "rapporto_studio_vita": "Molto stimolante accademicamente, logistica cittadina impegnativa.",
        "borse_sussidi": "Borse DiSCo Lazio.",
        "fit_score": 8.9,
        "fit_note": "Il corso 'ACSAI' (Applied Computer Science & AI) in inglese alla Sapienza è uno dei migliori d'Europa sui tuoi temi (AI, computer vision, robotica). Più distante da Vicenza (~3h30 di Frecciarossa), ma di altissimo valore.",
        "punti_forza": ["BSc in AI 100% in inglese (ACSAI)", "Reputazione mondiale DIAG nella RoboCup e AI", "#111 al mondo QS", "Classe fortemente internazionale"],
        "punti_deboli": ["Roma è caotica e distante da Vicenza (~450 km)", "Selezione ACSAI molto competitiva"],
        "url": "https://www.uniroma1.it"
    },
    {
        "id": "unipi",
        "nome": "Università di Pisa (UniPi)",
        "citta": "Pisa",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 43.7167,
        "lng": 10.4000,
        "qs2027": 349,
        "qs2026": 389,
        "punteggio_qs": 35.8,
        "tasse_annue_eu": "Fino a ~2.400 € (No-tax area ISEE)",
        "affitto_mensile": "300–450 € (molto accessibile)",
        "costo_vita_totale": "~650–850 €/mese",
        "budget_mensile_val": 750,
        "budget_rating": 4,
        "ambiti": ["cs", "ce", "ai", "robotics", "other_eng"],
        "lauree_triennali": [
            {
                "nome": "Laurea in Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs", "ai"],
                "focus": "Qui è nato il primo corso di Informatica in Italia (1969). Tradizione teorica e algoritmica leggendaria."
            },
            {
                "nome": "Laurea in Ingegneria Informatica / Robotica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ce", "robotics", "embedded"],
                "focus": "Polo d'eccellenza per la robotica (connesso con l'Istituto di Biorobotica e la Scuola Sant'Anna)."
            }
        ],
        "lingua_triennale": "Italiano (triennali)",
        "has_english_bachelor": False,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I o TOLC-S",
            "soglia_indicativa": "Punteggio TOLC ≥ 18/50",
            "scadenze": "Finestre da Primavera a Settembre",
            "requisiti_lingua": "Italiano",
            "procedura": "Iscrizione con TOLC su Alice UniPi.",
            "difficolta": 2
        },
        "approccio_didattico": "Rigore teorico elevatissimo, esami sfidanti, polo di ricerca informatica storico.",
        "qualita_vita": "Pisa è una città universitaria al 100%, ci si muove comodamente a piedi o in bicicletta ovunque.",
        "soddisfazione_studenti": "8.6/10.",
        "rapporto_studio_vita": "Buono e tranquillo, vita a misura d'uomo.",
        "borse_sussidi": "DSU Toscana.",
        "fit_score": 8.4,
        "fit_note": "La culla dell'informatica italiana, vicinissima alla Scuola Sant'Anna per la robotica. Budget 600-800€ qui basta perfettamente.",
        "punti_forza": ["Culla storica dell'informatica italiana", "Costi contenuti per stanza e vita (budget 600-800€ perfetto)", "Città a misura di bicicletta"],
        "punti_deboli": ["Triennale solo in italiano", "A ~3h da Vicenza in treno"],
        "url": "https://www.unipi.it"
    },
    {
        "id": "unimi",
        "nome": "Università degli Studi di Milano (Statale)",
        "citta": "Milano",
        "paese": "Italia",
        "bandiera": "🇮🇹",
        "lat": 45.4600,
        "lng": 9.1944,
        "qs2027": 285,
        "qs2026": 276,
        "punteggio_qs": 38.9,
        "tasse_annue_eu": "Fino a ~2.700 € (No-tax area fino a 24k ISEE)",
        "affitto_mensile": "500–750 €",
        "costo_vita_totale": "~900–1.250 €/mese",
        "budget_mensile_val": 1050,
        "budget_rating": 3,
        "ambiti": ["cs", "ai"],
        "lauree_triennali": [
            {
                "nome": "B.Sc. Artificial Intelligence (Interateneo Milano-Pavia-Bicocca)",
                "lingua": "🇬🇧 Inglese (100% in lingua)",
                "lingua_code": "en",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["ai", "cs"],
                "focus": "Corso congiunto interamente in inglese tra UniMi, UniPv e Bicocca. Unisce matematica, computer science, neuroscienze ed etica dell'AI."
            },
            {
                "nome": "Laurea in Informatica",
                "lingua": "🇮🇹 Italiano",
                "lingua_code": "it",
                "durata": "3 anni (180 CFU)",
                "ambiti": ["cs"],
                "focus": "Dipartimento di Informatica in via Celoria a Città Studi. Storica preparazione informatica milanese."
            }
        ],
        "lingua_triennale": "Inglese (BSc Artificial Intelligence) + Italiano (Informatica)",
        "has_english_bachelor": True,
        "has_italian_bachelor": True,
        "ammissione": {
            "test_richiesto": "TOLC-I o test dedicato per il corso di Artificial Intelligence",
            "soglia_indicativa": "Punteggio TOLC ≥ 28/50 per il corso AI (numero chiuso)",
            "scadenze": "Domande aperte in primavera con graduatoria a Giugno/Luglio",
            "requisiti_lingua": "Inglese B2 certificato",
            "procedura": "Bando interateneo con iscrizione sul portale UniMi allegando TOLC.",
            "difficolta": 3
        },
        "approccio_didattico": "Innovativo grazie alla combinazione dei docenti di 3 atenei lombardi.",
        "qualita_vita": "Città Studi a Milano: quartiere universitario vivace e ben servito da metro e bus.",
        "soddisfazione_studenti": "8.7/10 per il corso di Artificial Intelligence.",
        "rapporto_studio_vita": "Stimolante ma Milano richiede buona gestione del budget.",
        "borse_sussidi": "Borse DSU regionali lombarde.",
        "fit_score": 8.8,
        "fit_note": "Il Bachelor in Artificial Intelligence in inglese interateneo è un'altra perla formativa per te, a 1h45 di treno AV da Vicenza.",
        "punti_forza": ["Bachelor in Artificial Intelligence 100% in inglese", "Network di tre grandi atenei (Milano, Pavia, Bicocca)", "A 1h45 di treno da Vicenza"],
        "punti_deboli": ["Costi abitativi alti a Milano", "Solo 180 posti disponibili per AI"],
        "url": "https://www.unimi.it"
    }
]

print(f"Università italiane definite: {len(ITALIAN_UNIS)}")
