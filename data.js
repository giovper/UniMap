// UniMap — Dataset Completo Università Europee (QS 2027)
// Profilato per Giovanni Peruzzi (ITIS Rossi, Vicenza)
// Generato automaticamente con dati aggiornati

const VICENZA_COORDS = {
  nome: "Vicenza",
  lat: 45.5455,
  lng: 11.5355,
  desc: "Città di residenza (ITIS Rossi)"
};

const AMBITI_METADATA = {
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
};

const LAVORO_PAESE = {
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
};

const UNIVERSITIES = [
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
    "costo_vita_totale": "~500–750 €/mese (o ~100–150 € per treno se pendolare)",
    "budget_mensile_val": 650,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Information Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "embedded",
          "cs"
        ],
        "focus": "Interamente in inglese. Copre computer engineering, telecomunicazioni, elettronica e sistemi software."
      },
      {
        "nome": "Laurea in Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Dipartimento di Matematica. Solida base algoritmica, programmazione funzionale e ad oggetti, basi di machine learning."
      },
      {
        "nome": "Laurea in Ingegneria Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "embedded",
          "robotics"
        ],
        "focus": "Sistemi operativi, architettura elaboratori, controlli automatici e automazione industriale."
      },
      {
        "nome": "Laurea in Ingegneria Elettronica / Meccanica / Biomedica / Aerospaziale",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Perfetto per i tuoi amici dell'ITIS Rossi che vogliono fare altri rami dell'ingegneria nello stesso polo."
      }
    ],
    "lingua_triennale": "Inglese (Information Engineering) + Italiano (Informatica, Ing. Informatica)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I (erogato da CISIA) per Ingegneria; TOLC-S per Scienze Informatiche",
      "soglia_indicativa": "Punteggio TOLC consigliato ≥ 22-26/50 per rientrare nella prima graduatoria",
      "scadenze": "1ª finestra anticipata: Febbraio–Aprile; 2ª finestra estiva: Giugno–Luglio",
      "requisiti_lingua": "Inglese B2 certificato (il tuo Cambridge First B2/C1 ti esonera direttamente dal CLA)",
      "procedura": "1. Sostieni il TOLC-I o TOLC@CASA su cisiaonline.it\n2. Iscriviti alla selezione su Uniweb allegando il punteggio TOLC\n3. Controlla la graduatoria e perfeziona l'immatricolazione online con SPID",
      "difficolta": 2
    },
    "approccio_didattico": "Tradizione teorica rigorosa italiana, ottimi laboratori al DEI (Dipartimento di Ingegneria dell'Informazione).",
    "qualita_vita": "Padova è una città a misura di studente, con vivace vita universitaria (Portello, piazze) e piste ciclabili ovunque.",
    "soddisfazione_studenti": "8.8/10. Elevata reputazione accademica e forte radicamento industriale nel Nord-Est.",
    "rapporto_studio_vita": "Ottimo: la vicinanza estrema a Vicenza elimina lo stress dei lunghi viaggi.",
    "borse_sussidi": "Borse regionali ESU Veneto per merito/reddito (fino a 6.000 €/anno + mensa e alloggio gratis per idonei). No-tax area fino a 24k ISEE.",
    "fit_score": 9.4,
    "fit_note": "Scelta strategicamente imbattibile: a 30 km da casa, ha la triennale in inglese (Information Engineering), il tuo B2/C1 è subito valido e con 600-800€/mese ti avanza quasi tutto il budget se fai il pendolare!",
    "punti_forza": [
      "A soli 30 km da Vicenza (20 min di treno)",
      "Triennale in inglese 'Information Engineering'",
      "Spesa alloggio 0 € se pendolare",
      "Ampia gamma di ingegnerie per gli amici"
    ],
    "punti_deboli": [
      "Meno orientata al project-based learning rispetto agli atenei nordeuropei",
      "Classi del primo anno numerose"
    ],
    "url": "https://www.unipd.it",
    "distanza_vicenza_km": 31,
    "viaggio_vicenza": "🚆 ~20–30 min treno regionale (Pendolare comodissimo da Vicenza, zero affitto!)"
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
    "ambiti": [
      "cs",
      "ai",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai",
          "embedded"
        ],
        "focus": "Dipartimento di informatica a Ca' Vignal (Borgo Roma). Forte su sistemi embedded, algoritmi e intelligenza artificiale."
      },
      {
        "nome": "Laurea in Bioinformatica",
        "lingua": "🇮🇹 Italiano / Moduli Inglese",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Intersezione tra machine learning, data science e genetica/scienze biologiche."
      },
      {
        "nome": "Laurea in Ingegneria dei Sistemi Medicali",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng",
          "embedded"
        ],
        "focus": "Corso ingegneristico per dispositivi hardware/software sanitari."
      }
    ],
    "lingua_triennale": "Italiano (Informatica, Bioinformatica)",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-S per Informatica",
      "soglia_indicativa": "Punteggio TOLC ≥ 18-20/50",
      "scadenze": "Sessioni primaverili ed estive TOLC",
      "requisiti_lingua": "Italiano",
      "procedura": "Sostieni il TOLC-S, registrati su ESSE3 UniVr e inserisciti in graduatoria.",
      "difficolta": 1
    },
    "approccio_didattico": "Dipartimento compatto, ottimo rapporto studenti-docenti.",
    "qualita_vita": "Verona è bella, sicura, ordinata e comodissima da raggiungere da Vicenza.",
    "soddisfazione_studenti": "8.5/10. Docenti molto accessibili nei laboratori.",
    "rapporto_studio_vita": "Eccellente: 35 minuti di treno da Vicenza a Verona Porta Vescovo (vicina al campus).",
    "borse_sussidi": "Borse ESU Verona.",
    "fit_score": 8.7,
    "fit_note": "A 45 km da Vicenza. Polo di Borgo Roma vicinissimo alla stazione Porta Vescovo: perfetto se vuoi fare il pendolare con spesa minima.",
    "punti_forza": [
      "A 45 km da Vicenza (35 min di treno)",
      "Dipartimento informatica molto quotato",
      "Costi quasi zero da pendolare",
      "Rapporto stretto coi docenti"
    ],
    "punti_deboli": [
      "Non ha triennale 100% in inglese"
    ],
    "url": "https://www.univr.it",
    "distanza_vicenza_km": 44,
    "viaggio_vicenza": "🚆 ~35–55 min treno (Pendolare giornaliero facile o rientro serale rapido)"
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
    "affitto_mensile": "400–600 € (o 0 € pendolare per campus Mestre)",
    "costo_vita_totale": "~500–750 €/mese (o ~110 € treno)",
    "budget_mensile_val": 650,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ai",
      "cyber"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Digital Management (con H-FARM)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "100% in inglese presso il campus H-FARM. Combina computer science, AI, business digitale e innovazione."
      },
      {
        "nome": "Laurea in Informatica (Campus di Mestre)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai",
          "cyber"
        ],
        "focus": "Campus Scientifico di Via Torino a Mestre. Specializzazioni in cybersecurity e data science."
      }
    ],
    "lingua_triennale": "Inglese (Digital Management) + Italiano (Informatica)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I o TOLC-S per Informatica; TOLC-E / SAT per Digital Management",
      "soglia_indicativa": "Punteggio TOLC ≥ 20/50",
      "scadenze": "Finestra primaverile ed estiva",
      "requisiti_lingua": "B2 inglese per Digital Management",
      "procedura": "Iscrizione online su Ca' Foscari con esito TOLC.",
      "difficolta": 2
    },
    "approccio_didattico": "Moderno polo a Mestre; campus stile Silicon Valley a H-FARM.",
    "qualita_vita": "Facile da raggiungere via treno (fermata Venezia Mestre).",
    "soddisfazione_studenti": "8.4/10.",
    "rapporto_studio_vita": "Molto buono se fai il pendolare sulla linea ferroviaria Vicenza-Mestre (~40-50 min).",
    "borse_sussidi": "ESU Venezia.",
    "fit_score": 8.5,
    "fit_note": "A 60 km da Vicenza. Startup e innovazione a H-FARM in inglese, oppure Informatica e Cybersecurity al Campus di Mestre.",
    "punti_forza": [
      "A 60 km da Vicenza",
      "Digital Management 100% in inglese a H-FARM",
      "Campus scientifico moderno a Mestre"
    ],
    "punti_deboli": [
      "H-FARM ha rette extra rispetto alla pubblica pura",
      "Meno orientato all'hardware"
    ],
    "url": "https://www.unive.it",
    "distanza_vicenza_km": 63,
    "viaggio_vicenza": "🚆 ~35–55 min treno (Pendolare giornaliero facile o rientro serale rapido)"
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
    "tasse_annue_eu": "Fino a ~3.900 €/anno (fasce ISEE, no-tax area)",
    "affitto_mensile": "500–800 € (singola)",
    "costo_vita_totale": "~900–1.300 €/mese",
    "budget_mensile_val": 1100,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Ingegneria Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "cs",
          "ai",
          "embedded"
        ],
        "focus": "Il corso di riferimento per l'ingegneria informatica in Italia. Rigore matematico e ingegneristico di prim'ordine."
      },
      {
        "nome": "Laurea in Ingegneria dell'Automazione (Automation & Control)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "robotics",
          "embedded"
        ],
        "focus": "Robotica, controlli automatici, automazione industriale e meccatronica. Perfetto per il tuo background RoboCup."
      },
      {
        "nome": "Laurea in Ingegneria Elettronica / Meccanica / Aerospaziale / Biomedica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "I migliori corsi d'ingegneria in Italia per i tuoi compagni di scuola dell'ITIS Rossi."
      }
    ],
    "lingua_triennale": "Italiano (Triennali) — Magistrali 100% in inglese",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOL (Test On Line del Politecnico di Milano)",
      "soglia_indicativa": "Punteggio TOL ≥ 60/100 (in 4ª superiore garantisce immatricolazione anticipata!)",
      "scadenze": "Sessioni da Febbraio a Luglio",
      "requisiti_lingua": "Inglese B2 (il tuo Cambridge First ti esonera dal test TELA)",
      "procedura": "1. Registrati su polimi.it\n2. Sostieni il TOL\n3. Con ≥ 60 ti immatricoli direttamente nella sessione anticipata!",
      "difficolta": 3
    },
    "approccio_didattico": "Forte rigore teorico, Analisi e Fisica molto selettive. Team studenteschi top (Formula Student, Polimi Robotics).",
    "qualita_vita": "Milano offre opportunità professionali ed eventi tech ineguagliabili in Italia.",
    "soddisfazione_studenti": "8.9/10. Marchio PoliMi ricercatissimo in tutta Europa.",
    "rapporto_studio_vita": "Intenso: carico di studio alto, ma collegamenti ferroviari con Vicenza facilissimi (1h45 Frecciarossa).",
    "borse_sussidi": "DSU PoliMi (alloggio + borsa fino a 7.000 €).",
    "fit_score": 9.0,
    "fit_note": "Il top assoluto in Italia (#87 al mondo). A 1h45 di Frecciarossa da Vicenza. Se passi il TOL con ≥60 sei dentro subito. Solo la triennale è in italiano (magistrali in inglese).",
    "punti_forza": [
      "#87 al mondo (Top 1 in Italia)",
      "TOL superabile in anticipo",
      "Networking eccezionale con aziende IT e robotica",
      "A 1h45 di treno AV da Vicenza"
    ],
    "punti_deboli": [
      "Affitti molto cari a Milano (550-800€/stanza)",
      "Triennale in italiano"
    ],
    "url": "https://www.polimi.it",
    "distanza_vicenza_km": 180,
    "viaggio_vicenza": "🚆 ~1h45–2h15 AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
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
    "affitto_mensile": "300–450 € (singola molto più economica di Milano)",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "cs",
          "ai",
          "embedded"
        ],
        "focus": "Uno dei pochissimi corsi di Ingegneria Informatica in Italia interamente erogato in lingua inglese fin dal 1° anno!"
      },
      {
        "nome": "Laurea in Ingegneria Informatica (in Italiano)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "cs",
          "embedded"
        ],
        "focus": "Curriculum classico, solido su architetture calcolatori, sistemi operativi e reti di telecomunicazione."
      },
      {
        "nome": "Laurea in Ingegneria Meccatronica / Elettronica / Aerospaziale / Autoveicolo",
        "lingua": "🇮🇹 Italiano / Moduli Inglese",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "robotics",
          "other_eng",
          "embedded"
        ],
        "focus": "Torino capitale dell'automotive e della meccatronica. Perfetto per il tuo background embedded/robotico e per gli amici."
      }
    ],
    "lingua_triennale": "Inglese (Computer Engineering) + Italiano (altre ingegnerie)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TIL-I (Test d'Ingresso On-line PoliTo)",
      "soglia_indicativa": "Punteggio TIL-I ≥ 60/100 = ammissione garantita senza passare da graduatoria!",
      "scadenze": "Sessioni da Febbraio a Luglio",
      "requisiti_lingua": "B2 inglese (il tuo Cambridge First ti esonera dall'IELTS)",
      "procedura": "1. Account su Apply@polito\n2. Prenota il TIL-I\n3. Con ≥ 60 immatricolazione immediata!",
      "difficolta": 2
    },
    "approccio_didattico": "Metodo politecnico solido, team studenteschi eccellenti (Team Meccatronica, Squadra Corse).",
    "qualita_vita": "Miglior rapporto qualità/prezzo in Italia: affitti abbordabili, città ciclabile e verde.",
    "soddisfazione_studenti": "8.8/10. Ambiente accogliente e vivace.",
    "rapporto_studio_vita": "Equilibrato: ritmo impegnativo ma vita studentesca molto piacevole con costi contenuti.",
    "borse_sussidi": "EDISU Piemonte (fino a 6.500 € + mensa e residenza).",
    "fit_score": 9.5,
    "fit_note": "⭐ OPZIONE ITALIANA TOP: ha la triennale in Computer Engineering 100% IN INGLESE, costa molto meno di Milano (350-400€/stanza), budget familiare di 600-800€ perfetto e con TIL-I ≥60 sei dentro!",
    "punti_forza": [
      "Triennale Computer Engineering 100% in inglese",
      "Costi affitto bassi (300-450€)",
      "Budget 600-800€/mese ideale",
      "Ammissione automatica con TIL ≥ 60"
    ],
    "punti_deboli": [
      "A ~3h di treno da Vicenza"
    ],
    "url": "https://www.polito.it",
    "distanza_vicenza_km": 308,
    "viaggio_vicenza": "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
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
    "tasse_annue_eu": "Fino a ~3.000 € (No-tax area e welfare provinciale)",
    "affitto_mensile": "300–450 € (singola / Opera Universitaria)",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Ingegneria Informatica, Comunicazioni ed Elettronica (ICE)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "embedded",
          "cs"
        ],
        "focus": "Polo tecnologico DISI a Povo. Fortissima integrazione hardware/software e telecomunicazioni."
      },
      {
        "nome": "Laurea in Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Focalizzato su intelligenza artificiale, algoritmi avanzati e ingegneria software con la Fondazione Bruno Kessler (FBK)."
      },
      {
        "nome": "Laurea in Ingegneria Industriale / Meccatronica (Rovereto/Trento)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng",
          "robotics"
        ],
        "focus": "Ottimo per compagni interessati a meccatronica e materiali."
      }
    ],
    "lingua_triennale": "Italiano (triennali) — Magistrali in inglese (DISI)",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I (CISIA)",
      "soglia_indicativa": "Punteggio TOLC ≥ 22-24/50",
      "scadenze": "Bandi primaverili (Marzo-Maggio) ed estivi (Luglio)",
      "requisiti_lingua": "Italiano",
      "procedura": "Sostieni il TOLC-I e iscriviti al bando UniTn.",
      "difficolta": 2
    },
    "approccio_didattico": "Polo tecnologico di Povo eccezionale: aule moderne, laboratori ricchi, rapporto diretto con i docenti.",
    "qualita_vita": "Trento è ai vertici nazionali per vivibilità, sicurezza, verde e piste ciclabili.",
    "soddisfazione_studenti": "9.1/10 (tra le più alte d'Italia).",
    "rapporto_studio_vita": "Perfetto: a solo 1h30 di auto o treno da Vicenza (Valsugana).",
    "borse_sussidi": "Opera Universitaria di Trento: tra le migliori in Italia per alloggi e borse.",
    "fit_score": 9.2,
    "fit_note": "A 90 km da Vicenza. Il DISI di Trento è un'eccellenza per informatica e AI. Città splendida, welfare provinciale al top e rientro a casa facilissimo.",
    "punti_forza": [
      "A 90 km da Vicenza (1h30 auto/Valsugana)",
      "Dipartimento DISI al vertice",
      "Alloggi Opera Universitaria economici",
      "Qualità vita altissima"
    ],
    "punti_deboli": [
      "Triennale in italiano",
      "Città tranquilla per chi ama grandi metropoli"
    ],
    "url": "https://www.unitn.it",
    "distanza_vicenza_km": 67,
    "viaggio_vicenza": "🚆 ~35–55 min treno (Pendolare giornaliero facile o rientro serale rapido)"
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
    "tasse_annue_eu": "Fino a ~3.000 € (No-tax area fino a 24k ISEE)",
    "affitto_mensile": "400–650 € (forte crisi alloggi)",
    "costo_vita_totale": "~800–1.100 €/mese",
    "budget_mensile_val": 950,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Ingegneria Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "cs",
          "embedded"
        ],
        "focus": "Scuola di Ingegneria. Collegamenti con la Motor Valley e l'industria emiliana."
      },
      {
        "nome": "Laurea in Ingegneria dell'Automazione (Automation Engineering)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "robotics",
          "embedded"
        ],
        "focus": "Tradizione fortissima nei controlli automatici e robotica industriale."
      },
      {
        "nome": "Laurea in Scienze Informatiche",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Dipartimento DISI. Basi solide di algoritmi, programmazione e cloud computing."
      }
    ],
    "lingua_triennale": "Italiano (triennali)",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I o TOLC-S",
      "soglia_indicativa": "Punteggio TOLC ≥ 25/50",
      "scadenze": "Selezioni primaverili ed estive",
      "requisiti_lingua": "Italiano",
      "procedura": "Sostieni il TOLC e partecipa alla selezione su Studenti Online.",
      "difficolta": 2
    },
    "approccio_didattico": "Ateneo storico e prestigioso, formazione accademica rigorosa.",
    "qualita_vita": "Bologna è la capitale della vita studentesca italiana: cultura, musica, piazze sempre piene.",
    "soddisfazione_studenti": "9.0/10.",
    "rapporto_studio_vita": "Stimolante ma trovare casa a Bologna è attualmente molto complesso.",
    "borse_sussidi": "ER.GO Emilia-Romagna.",
    "fit_score": 8.6,
    "fit_note": "A 1h20 di treno AV da Vicenza. Vita studentesca favolosa, ma alloggi difficili e triennale in italiano.",
    "punti_forza": [
      "A 1h20 di treno da Vicenza",
      "Vita studentesca leggendaria",
      "Polo automazione forte"
    ],
    "punti_deboli": [
      "Difficoltà estrema alloggi",
      "Triennale in italiano"
    ],
    "url": "https://www.unibo.it",
    "distanza_vicenza_km": 118,
    "viaggio_vicenza": "🚆 ~1h–1h20 treno (Fattibile sia pendolare sia alloggio con weekend a casa)"
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
    "affitto_mensile": "400–650 €",
    "costo_vita_totale": "~800–1.150 €/mese",
    "budget_mensile_val": 950,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Applied Computer Science and Artificial Intelligence (ACSAI)",
        "lingua": "🇬🇧 Inglese (100% in lingua)",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ai",
          "cs",
          "robotics"
        ],
        "focus": "Uno dei più celebri Bachelor in AI d'Europa erogati in inglese! Machine learning, computer vision, elaborazione linguaggio naturale e robotica."
      },
      {
        "nome": "Laurea in Ingegneria Informatica e Automatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "robotics",
          "embedded"
        ],
        "focus": "Dipartimento DIAG. Grande tradizione nella robotica mobile e percezione autonoma."
      }
    ],
    "lingua_triennale": "Inglese (ACSAI) + Italiano (altri corsi)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I o SAT per il corso ACSAI in inglese",
      "soglia_indicativa": "Punteggio TOLC consigliato ≥ 30/50 o SAT ≥ 1200",
      "scadenze": "Bando aperto fino a Maggio/Giugno con graduatoria a Luglio",
      "requisiti_lingua": "Inglese B2 (il tuo Cambridge First ti qualifica direttamente)",
      "procedura": "1. Sostieni il TOLC-I\n2. Iscriviti al bando ACSAI su Infostud Sapienza\n3. Verifica la graduatoria",
      "difficolta": 3
    },
    "approccio_didattico": "DIAG Sapienza è un'autorità mondiale nella ricerca AI e robotica (RoboCup, lab ALCOR).",
    "qualita_vita": "Roma offre infinite attrazioni, metropoli vivace.",
    "soddisfazione_studenti": "8.5/10 (molto alta per la classe internazionale di ACSAI).",
    "rapporto_studio_vita": "Molto stimolante accademicamente, logistica cittadina impegnativa.",
    "borse_sussidi": "DiSCo Lazio.",
    "fit_score": 8.9,
    "fit_note": "Il corso 'ACSAI' (Applied Computer Science & AI) in inglese alla Sapienza è uno dei migliori d'Europa sui tuoi temi. Distante da Vicenza (~3h30 Frecciarossa), ma prestigioso.",
    "punti_forza": [
      "BSc in AI 100% in inglese (ACSAI)",
      "Reputazione mondiale DIAG nella RoboCup e AI",
      "#111 al mondo QS"
    ],
    "punti_deboli": [
      "Roma caotica e distante da Vicenza",
      "Selezione ACSAI molto competitiva"
    ],
    "url": "https://www.uniroma1.it",
    "distanza_vicenza_km": 412,
    "viaggio_vicenza": "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
  },
  {
    "id": "unipi",
    "nome": "Università di Pisa (UniPi)",
    "citta": "Pisa",
    "paese": "Italia",
    "bandiera": "🇮🇹",
    "lat": 43.7167,
    "lng": 10.4,
    "qs2027": 349,
    "qs2026": 389,
    "punteggio_qs": 35.8,
    "tasse_annue_eu": "Fino a ~2.400 € (No-tax area ISEE)",
    "affitto_mensile": "300–450 €",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Qui è nato il primo corso di Informatica in Italia. Tradizione teorica e algoritmica leggendaria."
      },
      {
        "nome": "Laurea in Ingegneria Informatica / Robotica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "robotics",
          "embedded"
        ],
        "focus": "Polo d'eccellenza per la robotica (connesso all'Istituto di Biorobotica e Sant'Anna)."
      }
    ],
    "lingua_triennale": "Italiano (triennali)",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I o TOLC-S",
      "soglia_indicativa": "Punteggio TOLC ≥ 18/50",
      "scadenze": "Finestre da Primavera a Settembre",
      "requisiti_lingua": "Italiano",
      "procedura": "Iscrizione con TOLC su Alice UniPi.",
      "difficolta": 2
    },
    "approccio_didattico": "Rigore teorico elevatissimo, polo di ricerca storico.",
    "qualita_vita": "Pisa è una città universitaria al 100%, ci si muove in bici ovunque.",
    "soddisfazione_studenti": "8.6/10.",
    "rapporto_studio_vita": "Tranquillo, vita a misura d'uomo.",
    "borse_sussidi": "DSU Toscana.",
    "fit_score": 8.4,
    "fit_note": "La culla dell'informatica italiana, vicinissima alla Scuola Sant'Anna per la robotica. Budget 600-800€ qui basta perfettamente.",
    "punti_forza": [
      "Culla dell'informatica italiana",
      "Costi contenuti per stanza e vita",
      "Città a misura di studente"
    ],
    "punti_deboli": [
      "Triennale in italiano",
      "A ~3h da Vicenza in treno"
    ],
    "url": "https://www.unipi.it",
    "distanza_vicenza_km": 222,
    "viaggio_vicenza": "🚆 ~1h45–2h15 AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
  },
  {
    "id": "unimi",
    "nome": "Università degli Studi di Milano (Statale)",
    "citta": "Milano",
    "paese": "Italia",
    "bandiera": "🇮🇹",
    "lat": 45.46,
    "lng": 9.1944,
    "qs2027": 285,
    "qs2026": 276,
    "punteggio_qs": 38.9,
    "tasse_annue_eu": "Fino a ~2.700 € (No-tax area fino a 24k ISEE)",
    "affitto_mensile": "500–750 €",
    "costo_vita_totale": "~900–1.250 €/mese",
    "budget_mensile_val": 1050,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ai"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Artificial Intelligence (Interateneo Milano-Pavia-Bicocca)",
        "lingua": "🇬🇧 Inglese (100% in lingua)",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Corso congiunto in inglese tra UniMi, UniPv e Bicocca. Matematica, computer science, neuroscienze ed etica dell'AI."
      },
      {
        "nome": "Laurea in Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "cs"
        ],
        "focus": "Dipartimento di Informatica in via Celoria a Città Studi. Storica preparazione informatica milanese."
      }
    ],
    "lingua_triennale": "Inglese (BSc Artificial Intelligence) + Italiano (Informatica)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I o test dedicato per il corso di Artificial Intelligence",
      "soglia_indicativa": "Punteggio TOLC ≥ 28/50 per AI (numero chiuso)",
      "scadenze": "Domande aperte in primavera con graduatoria a Giugno/Luglio",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Bando interateneo con iscrizione su UniMi allegando TOLC.",
      "difficolta": 3
    },
    "approccio_didattico": "Innovativo grazie alla combinazione dei docenti di 3 atenei lombardi.",
    "qualita_vita": "Città Studi a Milano: quartiere vivace e ben servito da metro e bus.",
    "soddisfazione_studenti": "8.7/10 per AI.",
    "rapporto_studio_vita": "Stimolante ma Milano richiede buona gestione del budget.",
    "borse_sussidi": "DSU Lombardia.",
    "fit_score": 8.8,
    "fit_note": "Il Bachelor in Artificial Intelligence in inglese interateneo è un'altra perla formativa per te, a 1h45 di treno AV da Vicenza.",
    "punti_forza": [
      "Bachelor in Artificial Intelligence 100% in inglese",
      "Network di tre grandi atenei",
      "A 1h45 di treno da Vicenza"
    ],
    "punti_deboli": [
      "Costi abitativi alti a Milano",
      "Solo 180 posti disponibili per AI"
    ],
    "url": "https://www.unimi.it",
    "distanza_vicenza_km": 183,
    "viaggio_vicenza": "🚆 ~1h45–2h15 AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
  },
  {
    "id": "unipv",
    "nome": "Università di Pavia (UniPv)",
    "citta": "Pavia",
    "paese": "Italia",
    "bandiera": "🇮🇹",
    "lat": 45.1866,
    "lng": 9.1554,
    "qs2027": 440,
    "qs2026": 460,
    "punteggio_qs": 31.0,
    "tasse_annue_eu": "Fino a ~2.400 € (No-tax area ISEE)",
    "affitto_mensile": "350–500 € (Collegi universitari storici molto convenienti)",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Artificial Intelligence (sede congiunta con Milano)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Sede di lezioni e laboratori anche presso il polo Cravino di Pavia."
      },
      {
        "nome": "Laurea in Ingegneria Elettronica e Informatica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "embedded",
          "cs"
        ],
        "focus": "Grande tradizione nella microelettronica, chip design e sistemi embedded."
      },
      {
        "nome": "Laurea in Bioingegneria / Ingegneria Industriale",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Ottima per amici orientati verso biomedicale e meccanica."
      }
    ],
    "lingua_triennale": "Inglese (Artificial Intelligence) + Italiano (altre ingegnerie)",
    "has_english_bachelor": true,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I",
      "soglia_indicativa": "Punteggio TOLC ≥ 20/50",
      "scadenze": "Primavera - Estate",
      "requisiti_lingua": "Inglese B2 per corso AI",
      "procedura": "Iscrizione tramite portale Esse3 Pavia allegando TOLC.",
      "difficolta": 2
    },
    "approccio_didattico": "Famoso per il sistema dei collegi storici di merito (Borromeo, Ghislieri, EDiSU).",
    "qualita_vita": "Città universitaria tranquilla, verde, a 25 min di treno da Milano ma a costi molto più bassi.",
    "soddisfazione_studenti": "8.8/10.",
    "rapporto_studio_vita": "Eccellente: vita di collegio comunitaria e costi contenuti.",
    "borse_sussidi": "EDiSU Pavia.",
    "fit_score": 8.7,
    "fit_note": "Pavia ha un sistema di collegi universitari unico in Italia che abbatte i costi d'alloggio, e partecipa al Bachelor in Artificial Intelligence in inglese.",
    "punti_forza": [
      "Sistema collegiale storico a costi ridotti",
      "BSc in Artificial Intelligence in inglese",
      "Costi molto inferiori a Milano pur essendo a 25 min"
    ],
    "punti_deboli": [
      "Città più piccola"
    ],
    "url": "https://www.unipv.it",
    "distanza_vicenza_km": 190,
    "viaggio_vicenza": "🚆 ~1h45–2h15 AV Frecciarossa/Italo (Weekend a casa a Vicenza comodissimi)"
  },
  {
    "id": "unina",
    "nome": "Università di Napoli Federico II",
    "citta": "Napoli",
    "paese": "Italia",
    "bandiera": "🇮🇹",
    "lat": 40.8497,
    "lng": 14.2562,
    "qs2027": 300,
    "qs2026": 335,
    "punteggio_qs": 37.8,
    "tasse_annue_eu": "Fino a ~2.300 € (No-tax area ISEE)",
    "affitto_mensile": "280–400 € (singola molto economica)",
    "costo_vita_totale": "~550–750 €/mese",
    "budget_mensile_val": 650,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Ingegneria Informatica (Polo di San Giovanni a Teduccio)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "cs",
          "ai"
        ],
        "focus": "Campus di San Giovanni a Teduccio, sede dell'Apple Developer Academy e della Cisco Academy."
      },
      {
        "nome": "Laurea in Ingegneria dell'Automazione e Robotica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "robotics",
          "embedded"
        ],
        "focus": "Scuola di eccellenza nel controllo dei robot manipolatori e veicoli autonomi (PRISMA Lab di Bruno Siciliano)."
      },
      {
        "nome": "Laurea in Ingegneria Aerospaziale / Meccanica",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Tra le migliori scuole d'Italia per l'aerospazio."
      }
    ],
    "lingua_triennale": "Italiano (triennali) — Academy internazionali in inglese",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I",
      "soglia_indicativa": "Punteggio TOLC ≥ 18/50",
      "scadenze": "Primavera ed estate",
      "requisiti_lingua": "Italiano",
      "procedura": "Iscrizione tramite Segrepass Federico II.",
      "difficolta": 2
    },
    "approccio_didattico": "Polo di San Giovanni a Teduccio modernissimo; laboratori PRISMA di livello mondiale nella robotica.",
    "qualita_vita": "Città ricca di energia, cultura, cibo straordinario a costi irrisori.",
    "soddisfazione_studenti": "8.5/10.",
    "rapporto_studio_vita": "Costi bassissimi, budget 600-800€ ti garantisce una vita agiatissima.",
    "borse_sussidi": "ADISURC Campania.",
    "fit_score": 8.3,
    "fit_note": "Il PRISMA Lab di robotica di Bruno Siciliano è una leggenda mondiale, e San Giovanni ospita l'Apple Developer Academy e la Cisco Academy. Lontana da Vicenza, ma costo vita super contenuto.",
    "punti_forza": [
      "PRISMA Lab tra i numeri 1 al mondo nella robotica",
      "Apple Developer Academy & Cisco Academy a San Giovanni",
      "Costi di vita ed affitti bassissimi"
    ],
    "punti_deboli": [
      "Lontana da Vicenza (~5h treno AV)",
      "Triennale in italiano"
    ],
    "url": "https://www.unina.it",
    "distanza_vicenza_km": 567,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "unimore",
    "nome": "Università di Modena e Reggio Emilia (UNIMORE)",
    "citta": "Modena",
    "paese": "Italia",
    "bandiera": "🇮🇹",
    "lat": 44.6471,
    "lng": 10.9252,
    "qs2027": 690,
    "qs2026": 710,
    "punteggio_qs": 27.9,
    "tasse_annue_eu": "Fino a ~2.400 € (No-tax area ISEE)",
    "affitto_mensile": "350–500 €",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Laurea in Ingegneria Informatica (Polo di Ingegneria Enzo Ferrari)",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "ce",
          "ai",
          "embedded"
        ],
        "focus": "Dipartimento DIEF. Fortissima su sistemi embedded per veicoli autonomi e AI applicata alla guida autonoma (AImark Lab)."
      },
      {
        "nome": "Laurea in Ingegneria Meccanica / Veicolo",
        "lingua": "🇮🇹 Italiano",
        "lingua_code": "it",
        "durata": "3 anni (180 CFU)",
        "ambiti": [
          "other_eng",
          "robotics"
        ],
        "focus": "Cuore della Motor Valley (Ferrari, Maserati, Ducati, Dallara). Perfetto per amici appassionati di automotive."
      }
    ],
    "lingua_triennale": "Italiano (triennali) — Magistrali MUNER in inglese",
    "has_english_bachelor": false,
    "has_italian_bachelor": true,
    "ammissione": {
      "test_richiesto": "TOLC-I",
      "soglia_indicativa": "Punteggio TOLC ≥ 20/50",
      "scadenze": "Finestre primaverili ed estive",
      "requisiti_lingua": "Italiano",
      "procedura": "Iscrizione tramite Esse3 UNIMORE allegando TOLC.",
      "difficolta": 2
    },
    "approccio_didattico": "Forte orientamento ai progetti pratici e connessione diretta con i team corse e la Motor Valley.",
    "qualita_vita": "Modena è pulita, ricca, ciclabile e a misura d'uomo.",
    "soddisfazione_studenti": "8.7/10.",
    "rapporto_studio_vita": "Ottimo: a 1h30 da Vicenza (linea ferroviaria Verona-Modena o Bologna).",
    "borse_sussidi": "ER.GO Emilia-Romagna.",
    "fit_score": 8.5,
    "fit_note": "A 1h30 da Vicenza. Se ti piacciono veicoli autonomi, simulazioni fisiche e automotive (come nel tuo progetto Unity ML-Agents su guida autonoma!), UNIMORE e la Motor Valley sono perfette.",
    "punti_forza": [
      "Capitale mondiale della Motor Valley",
      "Laboratorio AI per veicoli autonomi all'avanguardia",
      "A 1h30 da Vicenza",
      "Perfetto per chi ama automotive e simulazioni"
    ],
    "punti_deboli": [
      "Triennale in italiano"
    ],
    "url": "https://www.unimore.it",
    "distanza_vicenza_km": 111,
    "viaggio_vicenza": "🚆 ~1h–1h20 treno (Fattibile sia pendolare sia alloggio con weekend a casa)"
  },
  {
    "id": "tudelft",
    "nome": "TU Delft (Delft University of Technology)",
    "citta": "Delft",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 52.0016,
    "lng": 4.3718,
    "qs2027": 48,
    "qs2026": 49,
    "punteggio_qs": 84.7,
    "tasse_annue_eu": "~2.601 €/anno (tariffa legale statale olandese per studenti UE)",
    "affitto_mensile": "500–850 €/mese (alloggi molto richiesti, cercare presto)",
    "costo_vita_totale": "~1.050–1.450 €/mese",
    "budget_mensile_val": 1250,
    "budget_rating": 2,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science and Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "ai",
          "embedded"
        ],
        "focus": "Uno dei migliori corsi al mondo: algoritmi, software engineering, sistemi distribuiti, intelligenza artificiale, architetture hardware."
      },
      {
        "nome": "B.Sc. Aerospace / Electrical / Mechanical Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng",
          "robotics"
        ],
        "focus": "Aerospace Engineering e Electrical Engineering interamente in inglese. Top mondiale per gli amici appassionati di aerospazio e meccanica."
      }
    ],
    "lingua_triennale": "Inglese (BSc Computer Science & Engineering e Aerospace)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus Selection: test di matematica (CST), logica algoritmica e dossier motivazionale",
      "soglia_indicativa": "Ammessi i primi 550 nella graduatoria di selezione",
      "scadenze": "CRUCIALE: domanda su Studielink entro e non oltre il 15 GENNAIO! Test di selezione a Febbraio/Marzo",
      "requisiti_lingua": "Cambridge English C1 Advanced o IELTS ≥ 6.5 (min. 6.0 nei singoli componenti)",
      "procedura": "1. Registrazione su Studielink.nl entro il 15 gennaio\n2. Caricamento pagelle di 3ª e 4ª superiore su Osiaan (portale TU Delft)\n3. Partecipazione al test online di selezione (Matematica, Logica)\n4. Assegnazione del Ranking Number il 15 aprile",
      "difficolta": 4
    },
    "approccio_didattico": "Forte 'Project-Based Learning' e lavoro in team. Trimestri serrati, laboratori meccatronici spettacolari, D:Dream Hall (hangar di prototipi studenteschi).",
    "qualita_vita": "Cittadina storica meravigliosa attraversata da canali, interamente a misura di bicicletta.",
    "soddisfazione_studenti": "9.2/10. Ambiente internazionale stimolante.",
    "rapporto_studio_vita": "Ritmo intenso, esami frequenti, ma il campus è un'esperienza entusiasmante.",
    "borse_sussidi": "DUO Student Finance (lavorando 32h/mese sblocchi ~440 € di borsa base + abbonamento treni/bus gratuito in tutta l'Olanda).",
    "fit_score": 9.1,
    "fit_note": "Il sogno europeo per l'ingegneria (#48 al mondo, Top 1 in Olanda). Triennale in inglese di fama planetaria. Con 32h/mese di part-time sblocchi l'aiuto DUO (+440€) che rende la spesa sostenibile.",
    "punti_forza": [
      "#48 al mondo QS",
      "Triennale 100% in inglese tra le migliori al mondo",
      "D:Dream Hall per progetti pratici e robotica",
      "Aiuti DUO per studenti UE lavoratori"
    ],
    "punti_deboli": [
      "Scadenza anticipata al 15 GENNAIO (Numerus Fixus)",
      "Crisi alloggi nei Paesi Bassi"
    ],
    "url": "https://www.tudelft.nl",
    "distanza_vicenza_km": 888,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "tue",
    "nome": "Eindhoven University of Technology (TU/e)",
    "citta": "Eindhoven",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 51.4486,
    "lng": 5.4907,
    "qs2027": 124,
    "qs2026": 125,
    "punteggio_qs": 58.5,
    "tasse_annue_eu": "~2.601 €/anno (tariffa statale UE)",
    "affitto_mensile": "450–750 €/mese",
    "costo_vita_totale": "~950–1.350 €/mese",
    "budget_mensile_val": 1150,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science and Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "embedded"
        ],
        "focus": "Orientato all'ingegneria del software, sistemi operativi, sicurezza e programmazione concorrente."
      },
      {
        "nome": "B.Sc. Data Science (congiunto con Tilburg University)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Machine learning, statistica avanzata, big data ed estrazione della conoscenza."
      },
      {
        "nome": "B.Sc. Electrical Engineering / Mechanical Engineering (100% Inglese)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "embedded",
          "robotics",
          "other_eng"
        ],
        "focus": "Interamente in inglese: chip design, sensori, robotica e sistemi di controllo."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus per Computer Science: test online di matematica e pensiero logico",
      "soglia_indicativa": "Selezione competitiva con circa 325 posti disponibili",
      "scadenze": "15 GENNAIO per Computer Science (Numerus Fixus); 1 Maggio per altri corsi",
      "requisiti_lingua": "Cambridge First B2 (con score alto) o C1 Advanced / IELTS 6.5",
      "procedura": "Domanda su Studielink.nl -> invio transcript voti superiori -> svolgimento test di selezione",
      "difficolta": 3
    },
    "approccio_didattico": "Forte enfasi sulla didattica 'Challenge-Based Learning' in collaborazione con le aziende del Brainport Eindhoven.",
    "qualita_vita": "Eindhoven è la Silicon Valley d'Europa (sede di ASML, Philips, NXP Semiconductors, VDL). Piena occupazione per laureati tech.",
    "soddisfazione_studenti": "9.0/10. Campus iper-moderno e collaborativo.",
    "rapporto_studio_vita": "Molto stimolante: la vicinanza a colossi come ASML apre opportunità di stage retribuiti già durante la triennale.",
    "borse_sussidi": "DUO olandese (viaggi gratuiti + borsa se si lavorano 32h/mese).",
    "fit_score": 9.4,
    "fit_note": "⭐ PARADISO PER HARDWARE, EMBEDDED E AI: Eindhoven è la capitale mondiale dei semiconduttori (ASML produce qui i macchinari per tutti i microchip del pianeta). Triennali 100% in inglese e sbocchi lavorativi immediati!",
    "punti_forza": [
      "Capitale europea dei chip e tech (ASML, Philips, NXP)",
      "Triennali 100% in inglese",
      "Didattica orientata alle sfide pratiche (CBL)",
      "DUO finance accessibile con lavoro part-time"
    ],
    "punti_deboli": [
      "Scadenza 15 Gennaio per CS",
      "Ricerca alloggi impegnativa"
    ],
    "url": "https://www.tue.nl",
    "distanza_vicenza_km": 793,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "utwente",
    "nome": "University of Twente",
    "citta": "Enschede",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 52.2415,
    "lng": 6.8528,
    "qs2027": 210,
    "qs2026": 210,
    "punteggio_qs": 44.5,
    "tasse_annue_eu": "~2.601 €/anno (tariffa UE)",
    "affitto_mensile": "350–550 €/mese (l'unica uni olandese con VERO CAMPUS all'americana e alloggi garantiti/accessibili!)",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "gamedev",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Technical Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "cyber",
          "embedded"
        ],
        "focus": "Sistemi distribuiti, sicurezza informatica, algoritmi, reti e architetture hardware."
      },
      {
        "nome": "B.Sc. Creative Technology (CreaTe)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "gamedev",
          "embedded",
          "robotics"
        ],
        "focus": "Focalizzato su interazione uomo-macchina, realtà virtuale, sensoristica interattiva, Unity e prototipazione hardware/software."
      },
      {
        "nome": "B.Sc. Electrical Engineering / Mechanical Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "embedded",
          "robotics",
          "other_eng"
        ],
        "focus": "Robotica avanzata, meccatronica, droni autonomi e circuiti integrati."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus per Technical Computer Science (test online di matematica e pensiero logico)",
      "soglia_indicativa": "Posti disponibili circa 400",
      "scadenze": "15 GENNAIO per TCS; 1 Maggio per Creative Technology",
      "requisiti_lingua": "Cambridge First B2 (con score solido) o C1 / IELTS 6.5",
      "procedura": "Domanda su Studielink -> test online da casa -> ranking number",
      "difficolta": 2
    },
    "approccio_didattico": "Modello didattico TEM (Twente Educational Model): ogni trimestre è incentrato su un grande progetto pratico di gruppo che integra le materie teoriche.",
    "qualita_vita": "Unico vero campus all'americana dei Paesi Bassi: boschi, laghetti, impianti sportivi, laboratori aperti 24/7 e camere per studenti all'interno del campus!",
    "soddisfazione_studenti": "9.3/10. Spirito di comunità studentesca eccezionale.",
    "rapporto_studio_vita": "Il migliore dei Paesi Bassi: zero stress da pendolare, costi degli affitti molto più bassi di Amsterdam/Delft.",
    "borse_sussidi": "DUO finance olandese.",
    "fit_score": 9.5,
    "fit_note": "⭐ LA SCELTA PIÙ INTELLIGENTE IN OLANDA: ha il vero campus con stanze all'interno a prezzi accessibili (350-450€), progetti pratici continui ('Creative Technology' e 'Technical Computer Science' in inglese), e laboratori di robotica pazzeschi!",
    "punti_forza": [
      "Unico vero campus residenziale olandese",
      "Affitti molto più bassi del resto d'Olanda (350-500€)",
      "Corso unico 'Creative Technology' (VR, Unity, sensori)",
      "Approccio basato su progetti trimestrali"
    ],
    "punti_deboli": [
      "Enschede è a est vicino al confine tedesco, a 2h da Amsterdam Schiphol"
    ],
    "url": "https://www.utwente.nl",
    "distanza_vicenza_km": 819,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "groningen",
    "nome": "University of Groningen",
    "citta": "Groninga",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 53.2194,
    "lng": 6.5665,
    "qs2027": 139,
    "qs2026": 139,
    "punteggio_qs": 55.4,
    "tasse_annue_eu": "~2.601 €/anno (tariffa UE)",
    "affitto_mensile": "400–650 €/mese",
    "costo_vita_totale": "~900–1.250 €/mese",
    "budget_mensile_val": 1050,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ai",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "robotics",
          "cs"
        ],
        "focus": "Uno dei più antichi e celebri corsi di AI d'Europa: machine learning, robotica autonoma, percezione e modelli cognitivi."
      },
      {
        "nome": "B.Sc. Computing Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce"
        ],
        "focus": "Algoritmi, architettura del software, sicurezza e calcolo scientifico ad alte prestazioni."
      }
    ],
    "lingua_triennale": "Inglese (Artificial Intelligence e Computing Science)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus per Artificial Intelligence e Computing Science",
      "soglia_indicativa": "Test di matematica e logica online",
      "scadenze": "15 GENNAIO su Studielink!",
      "requisiti_lingua": "Cambridge Advanced C1 o First B2 (con score ≥ 175) / IELTS 6.5",
      "procedura": "Domanda Studielink -> test online",
      "difficolta": 3
    },
    "approccio_didattico": "Forte combinazione tra teoria rigorosa e progetti pratici di laboratorio AI.",
    "qualita_vita": "Groninga è la città più giovane d'Olanda: 1 abitante su 4 è studente, vita notturna senza orario di chiusura, città ciclabile per eccellenza.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Vivacissimo: atmosfera universitaria totale.",
    "borse_sussidi": "DUO finance olandese.",
    "fit_score": 9.2,
    "fit_note": "Groninga ha una delle lauree triennali in Artificial Intelligence più famose al mondo, 100% in inglese. Città giovanissima e divertente.",
    "punti_forza": [
      "Triennale pionieristica in Artificial Intelligence",
      "Città con la più alta percentuale di studenti in Olanda",
      "Top 140 mondiale QS"
    ],
    "punti_deboli": [
      "Scadenza 15 Gennaio per l'iscrizione",
      "Città situata nel nord dei Paesi Bassi"
    ],
    "url": "https://www.rug.nl",
    "distanza_vicenza_km": 925,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "vu_amsterdam",
    "nome": "Vrije Universiteit Amsterdam (VU)",
    "citta": "Amsterdam",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 52.3339,
    "lng": 4.8656,
    "qs2027": 220,
    "qs2026": 207,
    "punteggio_qs": 43.8,
    "tasse_annue_eu": "~2.601 €/anno (tariffa UE)",
    "affitto_mensile": "550–900 €/mese (Amsterdam molto cara)",
    "costo_vita_totale": "~1.100–1.550 €/mese",
    "budget_mensile_val": 1300,
    "budget_rating": 2,
    "ambiti": [
      "cs",
      "ai",
      "cyber"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "cyber"
        ],
        "focus": "Sviluppato congiuntamente con University of Amsterdam (UvA): sicurezza reti, sistemi distribuiti, algoritmi."
      },
      {
        "nome": "B.Sc. Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Focus su agenti intelligenti, machine learning, robotica cognitiva e web semantico."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus: test di matematica e logica",
      "soglia_indicativa": "Graduatoria di merito",
      "scadenze": "15 GENNAIO su Studielink",
      "requisiti_lingua": "IELTS 6.5 o Cambridge First/Advanced",
      "procedura": "Studielink -> matching test",
      "difficolta": 3
    },
    "approccio_didattico": "Innovativo, campus concentrato a Zuidas (distretto finanziario e tecnologico di Amsterdam).",
    "qualita_vita": "Amsterdam è una capitale mondiale di cultura e tolleranza.",
    "soddisfazione_studenti": "8.8/10.",
    "rapporto_studio_vita": "Affascinante, ma gli affitti ad Amsterdam richiedono forte attenzione al budget.",
    "borse_sussidi": "DUO finance.",
    "fit_score": 8.7,
    "fit_note": "Qualità dei corsi in CS e AI eccellente. Il limite principale è il costo della vita e degli affitti ad Amsterdam.",
    "punti_forza": [
      "Corsi in CS e AI di grande prestigio",
      "Amsterdam hub internazionale",
      "Connessioni con grandi aziende tech"
    ],
    "punti_deboli": [
      "Amsterdam molto costosa",
      "Alloggi introvabili se non prenotati con grande anticipo"
    ],
    "url": "https://vu.nl",
    "distanza_vicenza_km": 898,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "radboud",
    "nome": "Radboud University",
    "citta": "Nimega (Nijmegen)",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 51.8211,
    "lng": 5.8628,
    "qs2027": 246,
    "qs2026": 246,
    "punteggio_qs": 41.5,
    "tasse_annue_eu": "~2.601 €/anno (tariffa UE)",
    "affitto_mensile": "400–600 €/mese (SSH& garantisce alloggio agli studenti internazionali del primo anno!)",
    "costo_vita_totale": "~850–1.200 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ai",
      "cyber"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computing Science (specializzazione in Cyber Security!)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "cyber"
        ],
        "focus": "Uno dei centri di ricerca sulla Cybersecurity e crittografia più rinomati al mondo (Digital Security Group)."
      },
      {
        "nome": "B.Sc. Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "robotics"
        ],
        "focus": "Neuroinformatica, interfacce cervello-computer (BCI), reti neurali e robotica cognitiva."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Numerus Fixus per AI e Computing Science",
      "soglia_indicativa": "Test di matematica e selezione su dossier",
      "scadenze": "15 GENNAIO",
      "requisiti_lingua": "Inglese B2/C1 (Cambridge First accettato con punteggio alto)",
      "procedura": "Studielink -> portale Radboud -> ranking number",
      "difficolta": 3
    },
    "approccio_didattico": "Campus verde splendido, laboratori di crittografia e neuroscienze avanzatissimi.",
    "qualita_vita": "Nijmegen è la città più antica d'Olanda, molto accogliente e rilassata, piena di natura.",
    "soddisfazione_studenti": "9.2/10 (spesso votata come la migliore università generalista d'Olanda dagli studenti).",
    "rapporto_studio_vita": "Ottimo: l'università offre assistenza reale per trovare casa!",
    "borse_sussidi": "DUO finance olandese.",
    "fit_score": 9.3,
    "fit_note": "⭐ ECCELLENZA PER CYBERSECURITY E AI: Radboud è famosissima per la sicurezza informatica (Digital Security Group) e per l'AI. Inoltre offre un programma di garanzia alloggio per gli internazionali!",
    "punti_forza": [
      "Centro di ricerca leader mondiale in Cybersecurity",
      "BSc in AI di altissimo profilo",
      "Garanzia di alloggio per internazionali al 1° anno",
      "Città universitaria vivibile"
    ],
    "punti_deboli": [
      "Scadenza 15 Gennaio per Numerus Fixus"
    ],
    "url": "https://www.ru.nl",
    "distanza_vicenza_km": 812,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "maastricht",
    "nome": "Maastricht University",
    "citta": "Maastricht",
    "paese": "Paesi Bassi",
    "bandiera": "🇳🇱",
    "lat": 50.8497,
    "lng": 5.6889,
    "qs2027": 256,
    "qs2026": 256,
    "punteggio_qs": 40.5,
    "tasse_annue_eu": "~2.601 €/anno (tariffa UE)",
    "affitto_mensile": "400–650 €/mese",
    "costo_vita_totale": "~900–1.250 €/mese",
    "budget_mensile_val": 1050,
    "budget_rating": 3,
    "ambiti": [
      "ai",
      "cs",
      "robotics"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Data Science and Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "cs",
          "robotics"
        ],
        "focus": "Interamente basato sul metodo 'Project-Centred Learning': ogni semestre sviluppi un progetto software/AI concreto in team."
      },
      {
        "nome": "B.Sc. Computer Science",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce"
        ],
        "focus": "Sistemi distribuiti, ingegneria del software, algoritmi applicati."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Matching procedure e valutazione requisiti matematici",
      "soglia_indicativa": "Matematica a livello avanzato (voto superiore ≥ 7.5 o test OMPT-F)",
      "scadenze": "1 Maggio (Non ha Numerus Fixus rigido al 15 gennaio!)",
      "requisiti_lingua": "IELTS 6.0 / Cambridge B2 First o C1",
      "procedura": "Studielink -> caricamento voti e colloquio motivazionale online",
      "difficolta": 2
    },
    "approccio_didattico": "Pionieri del Problem-Based Learning (PBL) in Europa: niente lezioni frontali noiose, solo gruppi di discussione da 12-14 studenti guidati da tutor.",
    "qualita_vita": "Maastricht è splendida, al confine tra Belgio e Germania (a 30 min da Aquisgrana e Liegi).",
    "soddisfazione_studenti": "9.0/10.",
    "rapporto_studio_vita": "Didattica interattiva, città vivibile e multiculturale.",
    "borse_sussidi": "DUO finance olandese.",
    "fit_score": 9.2,
    "fit_note": "Grande vantaggio: il Bachelor in Data Science and AI NON ha il vincolo rigido del 15 gennaio, si applica con più calma (fino a maggio) e la didattica è tutta a progetti pratici (PCL)!",
    "punti_forza": [
      "Metodo Project-Centred Learning (tanta pratica)",
      "Nessun Numerus Fixus limitante (scadenza a Maggio)",
      "Posizione transfrontaliera (Olanda, Belgio, Germania)",
      "Città bellissima"
    ],
    "punti_deboli": [
      "Costi di vita comunque olandesi"
    ],
    "url": "https://www.maastrichtuniversity.nl",
    "distanza_vicenza_km": 731,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "aau",
    "nome": "Aalborg University (AAU)",
    "citta": "Aalborg",
    "paese": "Danimarca",
    "bandiera": "🇩🇰",
    "lat": 57.0122,
    "lng": 9.9723,
    "qs2027": 336,
    "qs2026": 341,
    "punteggio_qs": 36.2,
    "tasse_annue_eu": "0 € / ANNO (GRATIS al 100% per cittadini dell'Unione Europea)",
    "affitto_mensile": "300–450 €/mese (Aalborg è la città universitaria più economica di Danimarca, alloggi garantiti tramite AKU-Aalborg!)",
    "costo_vita_totale": "~800–1.000 €/mese totali",
    "budget_mensile_val": 900,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Electronic and Electrical Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "embedded",
          "robotics",
          "ce"
        ],
        "focus": "Fortissimo su sistemi embedded, microcontrollori, elaborazione segnali e sensoristica avanzata."
      },
      {
        "nome": "B.Sc. Robotics and Automation Engineering (English track)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "ai",
          "embedded"
        ],
        "focus": "Robotica autonoma, cinematica, visione artificiale (OpenCV), controllo motori e sistemi real-time. Perfetto per la RoboCup!"
      },
      {
        "nome": "B.Sc. Chemical / Mechanical / Sustainable Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Corsi in inglese per amici interessati a meccanica e nuove energie."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione 'Quota 2' basata su dossier motivazionale, curriculum tecnico (ITIS + RoboCup!), e voto di matematica",
      "soglia_indicativa": "Diploma di maturità con almeno 7/10 in Matematica (Livello A/B danese)",
      "scadenze": "15 MARZO (ore 12:00) tramite il portale nazionale danese Optagelse.dk!",
      "requisiti_lingua": "English B (IELTS ≥ 6.5 o Cambridge First con grado B/A o C1 Advanced)",
      "procedura": "1. Candidatura su optagelse.dk entro il 15 marzo (Quota 2)\n2. Allega diploma/transcript ITIS Rossi, certificato Cambridge, lettera motivazionale e progetti RoboCup/GitHub\n3. Esito comunicato il 28 luglio",
      "difficolta": 2
    },
    "approccio_didattico": "L'inventore dell'Aalborg PBL Model (Problem-Based Learning): il 50% di ogni semestre è dedicato a un progetto reale commissionato dall'industria svolto in gruppo di 4-6 persone con stanza/ufficio assegnata al team!",
    "qualita_vita": "Città giovane, vivibilissima, sicura, piena di canali e parchi. Tutti parlano inglese fluidamente.",
    "soddisfazione_studenti": "9.5/10. Il modello PBL elimina l'ansia da esame individuale e prepara direttamente al lavoro in team.",
    "rapporto_studio_vita": "Spettacolare: il lavoro di gruppo si fa di giorno, lasciando le serate libere.",
    "borse_sussidi": "⭐ SUSSIDIO STATALE DANESE (SU): se lavori almeno 10-12 ore/settimana, lo stato danese ti paga ~850 €/mese netti di borsa a fondo perduto!",
    "fit_score": 9.8,
    "fit_note": "🎯 FIT PERFETTO (#1 IN EUROPA PER GIOVANNI): Rette 0 €, alloggi a 350€, didattica 100% basata su progetti pratici in team (PBL), corso ideale in Robotics/Embedded e con 10h di lavoro part-time sblocchi la borsa SU da ~850€/mese!",
    "punti_forza": [
      "Università GRATUITA (0 € tasse)",
      "Borsa statale danese SU (~850 €/mese) se lavori 10-12h/sett.",
      "Metodo didattico pratico PBL (50% progetti di laboratorio)",
      "Affitti bassi con alloggio garantito (AKU-Aalborg)",
      "Valore enorme per il tuo background RoboCup"
    ],
    "punti_deboli": [
      "Clima invernale nordico (buio e vento)",
      "Città non gigante (120k abitanti)"
    ],
    "url": "https://www.en.aau.dk",
    "distanza_vicenza_km": 1280,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "sdu",
    "nome": "University of Southern Denmark (SDU)",
    "citta": "Odense",
    "paese": "Danimarca",
    "bandiera": "🇩🇰",
    "lat": 55.3686,
    "lng": 10.4285,
    "qs2027": 350,
    "qs2026": 361,
    "punteggio_qs": 35.4,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per cittadini UE)",
    "affitto_mensile": "320–480 €/mese (alloggi universitari disponibili)",
    "costo_vita_totale": "~850–1.050 €/mese",
    "budget_mensile_val": 950,
    "budget_rating": 5,
    "ambiti": [
      "robotics",
      "embedded",
      "ai",
      "ce",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Eng. Robot Systems (100% IN INGLESE - Odense)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS, include semestre di tirocinio retribuito)",
        "ambiti": [
          "robotics",
          "embedded",
          "ai"
        ],
        "focus": "Odense è la capitale europea dei cobot (Universal Robots, MiR)! Il corso copre cinematica, ROS (Robot Operating System), computer vision, driver embedded e droni autonomi."
      },
      {
        "nome": "B.Eng. Mechatronics (Sønderborg Campus)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS)",
        "ambiti": [
          "robotics",
          "embedded",
          "other_eng"
        ],
        "focus": "Sistemi meccatronici avanzati, nanotecnologie, azionamenti elettrici ed elettronica di potenza."
      },
      {
        "nome": "B.Sc. Software Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce"
        ],
        "focus": "Architetture software complesse per sistemi industriali e cloud."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione Quota 2 con colloquio online e portfolio tecnico (ideale per la tua RoboCup)",
      "soglia_indicativa": "Diploma tecnico ITIS, matematica livello intermedio/avanzato",
      "scadenze": "15 MARZO (Optagelse.dk)",
      "requisiti_lingua": "Cambridge First B2 / C1 o IELTS 6.5",
      "procedura": "Domanda su optagelse.dk entro il 15 marzo; test logico/matematico online di ateneo",
      "difficolta": 2
    },
    "approccio_didattico": "SDU Odense collabora a stretto contatto con l'Odense Robotics Cluster (oltre 130 aziende di robotica nate intorno all'università). Moltissima pratica di laboratorio.",
    "qualita_vita": "Odense è una città storica deliziosa (città natale di Hans Christian Andersen), verde, piste ciclabili spettacolari e collegamenti veloci con Copenaghen.",
    "soddisfazione_studenti": "9.4/10. Sbocchi di lavoro in robotica immediati.",
    "rapporto_studio_vita": "Eccellente: unisce vita rilassata a un ecosistema industriale di robotica unico.",
    "borse_sussidi": "Sussidio danese SU (~850 €/mese lavorando 10-12h/sett.) + tirocini aziendali retribuiti.",
    "fit_score": 9.9,
    "fit_note": "🎯 LA MECCA MONDIALE DELLA ROBOTICA: Odense è la capitale europea dei robot collaborativi. Il corso 'Robot Systems' in inglese sembra fatto su misura per te e la tua passione per la RoboCup. Tasse 0€ e borsa SU danese inclusa!",
    "punti_forza": [
      "Capitale europea della robotica (hub di Universal Robots e MiR)",
      "B.Eng. Robot Systems 100% in inglese",
      "Università 100% GRATUITA (0 € tasse)",
      "Borsa SU danese da ~850 €/mese accessibile",
      "Semestre di tirocinio retribuito integrato"
    ],
    "punti_deboli": [
      "Scadenza il 15 Marzo"
    ],
    "url": "https://www.sdu.dk",
    "distanza_vicenza_km": 1095,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "dtu",
    "nome": "Technical University of Denmark (DTU)",
    "citta": "Lyngby (Copenaghen)",
    "paese": "Danimarca",
    "bandiera": "🇩🇰",
    "lat": 55.786,
    "lng": 12.523,
    "qs2027": 105,
    "qs2026": 107,
    "punteggio_qs": 62.8,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per studenti UE)",
    "affitto_mensile": "450–700 €/mese (area metropolitana di Copenaghen)",
    "costo_vita_totale": "~1.000–1.350 €/mese",
    "budget_mensile_val": 1150,
    "budget_rating": 3,
    "ambiti": [
      "ce",
      "cs",
      "embedded",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. General Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ce",
          "embedded",
          "cs",
          "other_eng"
        ],
        "focus": "Ha 4 indirizzi tematici di specializzazione, tra cui 'Cyber Systems' (informatica, reti, algoritmi, AI) e 'Future Energy'."
      }
    ],
    "lingua_triennale": "Inglese (General Engineering)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Quota 2 su Optagelse.dk: valutazione voti di matematica, fisica e chimica",
      "soglia_indicativa": "Requisiti di matematica e fisica ad alto livello",
      "scadenze": "15 MARZO (ore 12:00)",
      "requisiti_lingua": "IELTS 6.5 o Cambridge First/Advanced",
      "procedura": "Domanda nazionale danese tramite optagelse.dk",
      "difficolta": 3
    },
    "approccio_didattico": "Politecnico nordeuropeo di punta. Grandi laboratori, fablab, incubatore studentesco DTU Skylab (tra i migliori incubatori universitari d'Europa).",
    "qualita_vita": "Campus a Lyngby (a 20 min di treno dal centro di Copenaghen). Città ciclabile, cosmopolita e innovativa.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Molto stimolante, ambiente internazionale vivace.",
    "borse_sussidi": "Borsa statale danese SU (~850 €/mese lavorando 10-12h/sett.). Rette = 0 €.",
    "fit_score": 9.2,
    "fit_note": "Il politecnico più prestigioso di Danimarca (#105 al mondo). Il corso General Engineering con indirizzo Cyber Systems è un'eccellenza assoluta a costo zero di retta.",
    "punti_forza": [
      "#105 al mondo QS",
      "Rette 0 € per cittadini UE",
      "DTU Skylab per startup e hardware",
      "Borsa SU danese disponibile"
    ],
    "punti_deboli": [
      "Costo alloggio a Copenaghen più alto di Aalborg e Odense",
      "Scadenza il 15 Marzo"
    ],
    "url": "https://www.dtu.dk",
    "distanza_vicenza_km": 1141,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "aarhus",
    "nome": "Aarhus University",
    "citta": "Aarhus",
    "paese": "Danimarca",
    "bandiera": "🇩🇰",
    "lat": 56.1682,
    "lng": 10.2032,
    "qs2027": 143,
    "qs2026": 143,
    "punteggio_qs": 54.8,
    "tasse_annue_eu": "0 € / ANNO (GRATIS)",
    "affitto_mensile": "350–550 €/mese",
    "costo_vita_totale": "~900–1.200 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Cognitive Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Intersezione tra modelli computazionali di intelligenza artificiale, neuroscienze e linguistica computazionale."
      }
    ],
    "lingua_triennale": "Inglese (Cognitive Science)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Quota 2 Optagelse.dk",
      "soglia_indicativa": "Buona media e motivazione",
      "scadenze": "15 MARZO",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda su optagelse.dk",
      "difficolta": 2
    },
    "approccio_didattico": "Campus integrato in un bellissimo parco collinare (UniParken).",
    "qualita_vita": "Aarhus è la seconda città danese, giovane e vivace (Capitale europea della cultura).",
    "soddisfazione_studenti": "9.0/10.",
    "rapporto_studio_vita": "Equilibrato e sereno.",
    "borse_sussidi": "Borsa SU danese (~850 €/mese con lavoro 10-12h).",
    "fit_score": 8.8,
    "fit_note": "Ateneo top 150 mondiale, rette gratuite e ottima qualità della vita.",
    "punti_forza": [
      "Top 150 al mondo",
      "Università gratuita",
      "Borsa SU danese",
      "Città bellissima"
    ],
    "punti_deboli": [
      "Offerta triennale in inglese focalizzata su Cognitive Science"
    ],
    "url": "https://international.au.dk",
    "distanza_vicenza_km": 1185,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "kth",
    "nome": "KTH Royal Institute of Technology",
    "citta": "Stoccolma",
    "paese": "Svezia",
    "bandiera": "🇸🇪",
    "lat": 59.3498,
    "lng": 18.0707,
    "qs2027": 82,
    "qs2026": 73,
    "punteggio_qs": 69.8,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per cittadini UE)",
    "affitto_mensile": "450–750 €/mese (campus Kista/Valhallavägen)",
    "costo_vita_totale": "~950–1.350 €/mese",
    "budget_mensile_val": 1150,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "embedded",
      "cyber",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Information and Communication Technology (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "embedded",
          "cyber"
        ],
        "focus": "Sede al KTH Campus Kista (il più grande polo ICT del Nord Europa, sede di Ericsson). Copre software, sistemi embedded, protocolli internet, sicurezza e architetture cloud."
      }
    ],
    "lingua_triennale": "Inglese (BSc ICT)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione centralizzata svedese su Universityadmissions.se (valutazione voti diploma e matematica avanzata)",
      "soglia_indicativa": "Media voti diploma ITIS ≥ 8/10 e Matematica livello 4 svedese",
      "scadenze": "15 GENNAIO per il round internazionale di Universityadmissions.se!",
      "requisiti_lingua": "English 6 (IELTS ≥ 6.5 o Cambridge Advanced C1 / First con punteggio alto)",
      "procedura": "1. Candidatura su universityadmissions.se entro il 15 gennaio\n2. Caricamento documenti e transcript voti entro il 1° febbraio\n3. Risultati ad aprile",
      "difficolta": 3
    },
    "approccio_didattico": "Didattica tecnologica all'avanguardia con fortissima collaborazione con l'industria svedese (Ericsson, Spotify, Scania, ABB).",
    "qualita_vita": "Stoccolma è una delle capitali più vivibili e verdi al mondo, pulita, sicura e cosmopolita.",
    "soddisfazione_studenti": "9.1/10. Reputazione accademica altissima in tutta la Scandinavia.",
    "rapporto_studio_vita": "Molto stimolante, campus ben organizzato.",
    "borse_sussidi": "Rette 0 € per cittadini UE. Lavoro part-time consentito senza limiti.",
    "fit_score": 9.3,
    "fit_note": "Il politecnico più prestigioso di Svezia (#82 al mondo). Il Bachelor in Information & Communication Technology a Kista è 100% in inglese e non paghi un solo euro di tasse universitarie!",
    "punti_forza": [
      "#82 al mondo QS",
      "Rette universitarie = 0 €",
      "Campus Kista nel cuore dell'ecosistema tech svedese",
      "Triennale 100% in inglese"
    ],
    "punti_deboli": [
      "Scadenza il 15 Gennaio su universityadmissions.se",
      "Costo della vita a Stoccolma medio-alto"
    ],
    "url": "https://www.kth.se/en",
    "distanza_vicenza_km": 1596,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "chalmers",
    "nome": "Chalmers University of Technology",
    "citta": "Göteborg",
    "paese": "Svezia",
    "bandiera": "🇸🇪",
    "lat": 57.6888,
    "lng": 11.9782,
    "qs2027": 137,
    "qs2026": 129,
    "punteggio_qs": 55.8,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per cittadini UE)",
    "affitto_mensile": "400–650 €/mese",
    "costo_vita_totale": "~900–1.250 €/mese",
    "budget_mensile_val": 1050,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "embedded",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Software Engineering and Management (congiunto con Uni Gothenburg)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce"
        ],
        "focus": "Ingegneria del software orientata a progetti industriali, metodologie agili (SCRUM), architetture distribuite."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Universityadmissions.se",
      "soglia_indicativa": "Diploma e matematica avanzata",
      "scadenze": "15 GENNAIO",
      "requisiti_lingua": "IELTS 6.5 o Cambridge C1/B2 alto",
      "procedura": "Candidatura centralizzata svedese online",
      "difficolta": 3
    },
    "approccio_didattico": "Forte legame con Volvo, Polestar ed Ericsson. Laboratori robotici e automobilistici eccezionali.",
    "qualita_vita": "Göteborg è la città più accogliente di Svezia, marittima, piena di caffè e cultura giovanile.",
    "soddisfazione_studenti": "9.2/10.",
    "rapporto_studio_vita": "Ottimo: atmosfera meno formale e più calorosa rispetto alla capitale.",
    "borse_sussidi": "Rette 0 € UE.",
    "fit_score": 9.1,
    "fit_note": "Ateneo tecnologico svedese di vertice. Göteborg è un polo fantastico per veicoli autonomi e software. Zero tasse universitarie.",
    "punti_forza": [
      "Zero tasse universitarie",
      "Polo automotive e veicoli autonomi (Volvo/Polestar)",
      "Città marittima stupenda"
    ],
    "punti_deboli": [
      "Scadenza il 15 Gennaio"
    ],
    "url": "https://www.chalmers.se/en",
    "distanza_vicenza_km": 1351,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "linkoping",
    "nome": "Linköping University (LiU)",
    "citta": "Linköping",
    "paese": "Svezia",
    "bandiera": "🇸🇪",
    "lat": 58.4019,
    "lng": 15.578,
    "qs2027": 304,
    "qs2026": 304,
    "punteggio_qs": 37.5,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per cittadini UE)",
    "affitto_mensile": "320–500 €/mese (alloggi studenteschi garantiti a Ryd!)",
    "costo_vita_totale": "~800–1.050 €/mese",
    "budget_mensile_val": 950,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ai",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. in Experimental and Industrial Technologies / IT tracks",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "other_eng"
        ],
        "focus": "Polo pionieristico per l'informatica e l'AI in Svezia (sede del supercomputer Berzelius per il deep learning)."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Universityadmissions.se",
      "soglia_indicativa": "Diploma e matematica",
      "scadenze": "15 GENNAIO",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda online centralizzata svedese",
      "difficolta": 2
    },
    "approccio_didattico": "Famosa per la didattica interdisciplinare e per ospitare il centro di ricerca WASP (Wallenberg AI, Autonomous Systems and Software Program).",
    "qualita_vita": "Linköping è la città universitaria svedese per eccellenza: il quartiere di Ryd è abitato quasi esclusivamente da studenti in bicicletta.",
    "soddisfazione_studenti": "9.3/10. Vita comunitaria imbattibile.",
    "rapporto_studio_vita": "Tranquillo, sano e accogliente.",
    "borse_sussidi": "Rette 0 €.",
    "fit_score": 9.0,
    "fit_note": "Sede del più potente supercomputer AI della Svezia e del programma WASP per i sistemi autonomi. Affitti bassissimi e zero tasse.",
    "punti_forza": [
      "Zero tasse universitarie",
      "Centro nevralgico della ricerca AI svedese (WASP)",
      "Costi bassi per gli alloggi (quartiere Ryd)",
      "Vera città-campus"
    ],
    "punti_deboli": [
      "Scadenza il 15 Gennaio"
    ],
    "url": "https://liu.se/en",
    "distanza_vicenza_km": 1455,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "malmo",
    "nome": "Malmö University",
    "citta": "Malmö",
    "paese": "Svezia",
    "bandiera": "🇸🇪",
    "lat": 55.6111,
    "lng": 12.9944,
    "qs2027": 650,
    "qs2026": 680,
    "punteggio_qs": 29.0,
    "tasse_annue_eu": "0 € / ANNO (GRATIS)",
    "affitto_mensile": "380–580 €/mese",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ai",
      "gamedev"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science: Applied Data Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Machine learning, analisi di grandi volumi di dati, programmazione Python/C++, sviluppo software moderno."
      },
      {
        "nome": "B.Sc. Interaction Design / Game Media",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "gamedev",
          "cs"
        ],
        "focus": "Interazione uomo-macchina, interfacce utente, prototipazione rapida per videogiochi e app interattive."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Universityadmissions.se",
      "soglia_indicativa": "Diploma e matematica",
      "scadenze": "15 GENNAIO",
      "requisiti_lingua": "IELTS 6.5 o Cambridge",
      "procedura": "Domanda su universityadmissions.se",
      "difficolta": 2
    },
    "approccio_didattico": "Moderno, urbano, inclusivo, con forte collegamento al Game Habitat della regione Öresund.",
    "qualita_vita": "Malmö è collegata a Copenaghen dal famoso ponte Öresund (35 min di treno per la capitale danese!).",
    "soddisfazione_studenti": "8.8/10.",
    "rapporto_studio_vita": "Città cosmopolita con un costo della vita molto più basso di Copenaghen pur essendole attaccata.",
    "borse_sussidi": "Rette 0 €.",
    "fit_score": 8.9,
    "fit_note": "A 35 minuti di treno da Copenaghen ma con affitti svedesi più bassi e rette 0€. Il Bachelor in Applied Data Science in inglese è molto pratico.",
    "punti_forza": [
      "Rette 0 €",
      "A 35 min di treno da Copenaghen attraverso il ponte Öresund",
      "Polo del game development nordico"
    ],
    "punti_deboli": [
      "Scadenza il 15 Gennaio"
    ],
    "url": "https://mau.se/en",
    "distanza_vicenza_km": 1124,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "aalto",
    "nome": "Aalto University",
    "citta": "Espoo (Helsinki)",
    "paese": "Finlandia",
    "bandiera": "🇫🇮",
    "lat": 60.187,
    "lng": 24.8307,
    "qs2027": 113,
    "qs2026": 109,
    "punteggio_qs": 60.5,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per tutti i cittadini dell'Unione Europea)",
    "affitto_mensile": "350–550 €/mese (alloggi convenzionati HOAS e AYY per studenti proprio sul campus di Otaniemi!)",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computational Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ai",
          "ce"
        ],
        "focus": "Simulazione computazionale, algoritmi numerici, intelligenza artificiale applicata all'ingegneria, machine learning."
      },
      {
        "nome": "B.Sc. Data Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "cs"
        ],
        "focus": "Machine learning, statistica avanzata, visualizzazione dati, deep learning e big data engineering."
      },
      {
        "nome": "B.Sc. Digital Systems and Design (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "embedded",
          "ce",
          "robotics"
        ],
        "focus": "Sistemi embedded, microelettronica, automazione e design di sistemi autonomi. Tagliato su misura per chi ama l'hardware!"
      },
      {
        "nome": "B.Sc. Quantum Technology (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "other_eng"
        ],
        "focus": "Quantum computing, fisica computazionale e nanoelettronica (Aalto ospita il computer quantistico finlandese Helmi)."
      }
    ],
    "lingua_triennale": "Inglese (tutti i 4 Bachelor tecnologici sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione basata sui punteggi del SAT (Sezione Matematica ≥ 650-700/800) OPPURE selezione su diploma e pagelle",
      "soglia_indicativa": "Un buon punteggio nel SAT Math garantisce l'ammissione!",
      "scadenze": "CRUCIALE: 2ª settimana di GENNAIO sul portale nazionale finlandese Opintopolku.fi (Studyinfo.fi)!",
      "requisiti_lingua": "IELTS 6.5 / Cambridge C1 Advanced o First con grado elevato / SAT",
      "procedura": "1. Domanda su Studyinfo.fi a inizio gennaio\n2. Invio punteggi SAT o transcript scolastico\n3. Esiti pubblicati in primavera",
      "difficolta": 3
    },
    "approccio_didattico": "Campus di Otaniemi: una meraviglia progettata da Alvar Aalto. Aalto Design Factory, laboratori aperti 24/7, Aalto Startup Center (dove è nata Slush, il più grande evento startup tech d'Europa!).",
    "qualita_vita": "La Finlandia è il Paese più felice del mondo per 7 anni consecutivi: sicurezza assoluta, natura incontaminata, metro diretta per Helsinki.",
    "soddisfazione_studenti": "9.6/10. Clima studentesco caloroso e collaborativo, saune studentesche gratuite nel campus.",
    "rapporto_studio_vita": "Straordinario: pranzare nei campus costa solo 2,95 € grazie al sussidio KELA!",
    "borse_sussidi": "Rette universitarie 0 € per cittadini UE. Pasti KELA a 2,95 € in tutto il campus.",
    "fit_score": 9.7,
    "fit_note": "⭐ GIOIELLO NORDICO PER HARDWARE, AI E STARTUP: 4 triennali 100% in inglese (tra cui Digital Systems and Design e Data Science), tasse 0€, campus di Otaniemi con fablab aperti 24/7 e mensa a 2,95€!",
    "punti_forza": [
      "Rette universitarie = 0 €",
      "4 triennali tecnologiche 100% in inglese",
      "Campus Otaniemi culla dell'innovazione europea",
      "Pasti completi al campus a 2,95 € (sussidio KELA)",
      "Qualità della vita finlandese al vertice mondiale"
    ],
    "punti_deboli": [
      "Scadenza anticipata a Gennaio su Studyinfo",
      "Inverni freddi e bui"
    ],
    "url": "https://www.aalto.fi/en",
    "distanza_vicenza_km": 1849,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "tampere",
    "nome": "Tampere University",
    "citta": "Tampere",
    "paese": "Finlandia",
    "bandiera": "🇫🇮",
    "lat": 61.4981,
    "lng": 23.7717,
    "qs2027": 436,
    "qs2026": 436,
    "punteggio_qs": 31.5,
    "tasse_annue_eu": "0 € / ANNO (GRATIS)",
    "affitto_mensile": "280–450 €/mese (alloggi TOAS ultra-economici e moderni!)",
    "costo_vita_totale": "~750–950 €/mese",
    "budget_mensile_val": 850,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "embedded",
      "robotics",
      "gamedev",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computing and Electrical Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "embedded",
          "robotics"
        ],
        "focus": "Sistemi embedded, software engineering, elaborazione segnali, robotica e IoT."
      },
      {
        "nome": "B.Sc. Game Studies and Digital Culture / Software",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "gamedev",
          "cs"
        ],
        "focus": "Tampere è la capitale finlandese dei videogiochi (Nokia, Remedy, Colossal Order - Cities: Skylines). Ecosistema gaming fortissimo."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione con punteggi SAT o selezione congiunta finlandese su Studyinfo.fi",
      "soglia_indicativa": "Punteggio SAT Math ≥ 620-650",
      "scadenze": "Metà GENNAIO su Studyinfo.fi",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda online centralizzata a gennaio",
      "difficolta": 2
    },
    "approccio_didattico": "Forte orientamento pratico ingegneristico e polo di eccellenza per il Game Development europeo.",
    "qualita_vita": "Città incastonata tra due laghi, vivibilissima, giovane, capitale mondiale della sauna.",
    "soddisfazione_studenti": "9.4/10. Costo della vita sensibilmente più basso di Helsinki.",
    "rapporto_studio_vita": "Ottimo: alloggi TOAS garantiti e molto economici (280-350€ tutto compreso!).",
    "borse_sussidi": "Rette 0 € per studenti UE + mensa a 2,95 €.",
    "fit_score": 9.4,
    "fit_note": "Ateneo favoloso per game development (Unity/simulazioni) e sistemi embedded. Affitti TOAS a meno di 300€/mese e rette 0€. Con il budget genitori di 600-800€ qui ci vivi benissimo senza pensieri!",
    "punti_forza": [
      "Rette universitarie 0 €",
      "Alloggi TOAS modernissimi a 280-350€/mese",
      "Polo n.1 in Finlandia per Game Dev e software",
      "Budget 600-800€/mese ampiamente sufficiente"
    ],
    "punti_deboli": [
      "Scadenza a inizio Gennaio"
    ],
    "url": "https://www.tuni.fi/en",
    "distanza_vicenza_km": 1942,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "lut",
    "nome": "LUT University (Lappeenranta-Lahti)",
    "citta": "Lappeenranta",
    "paese": "Finlandia",
    "bandiera": "🇫🇮",
    "lat": 61.05,
    "lng": 28.09,
    "qs2027": 336,
    "qs2026": 336,
    "punteggio_qs": 36.0,
    "tasse_annue_eu": "0 € / ANNO (GRATIS)",
    "affitto_mensile": "250–400 €/mese (tra i più economici d'Europa)",
    "costo_vita_totale": "~700–900 €/mese",
    "budget_mensile_val": 800,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Software and Systems Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce"
        ],
        "focus": "Ingegneria del software moderna, cloud computing, architetture scalabili, sicurezza."
      },
      {
        "nome": "B.Sc. Technology and Engineering Science",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng",
          "embedded"
        ],
        "focus": "Ingegneria meccanica, sostenibilità, circuiti e sensoristica."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Selezione tramite SAT o valutazione voti diploma",
      "soglia_indicativa": "Punteggio SAT Math o voto diploma buono",
      "scadenze": "Metà GENNAIO su Studyinfo.fi",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Studyinfo.fi",
      "difficolta": 2
    },
    "approccio_didattico": "Focalizzato su sostenibilità, clean tech e software engineering.",
    "qualita_vita": "Campus affacciato sul lago Saimaa, natura incontaminata, tranquillità totale.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Costi irrisori: una camera singola in studentato costa 250-320€ tutto incluso.",
    "borse_sussidi": "Rette 0 €.",
    "fit_score": 9.1,
    "fit_note": "Rapporto costi/benefici stellare: Software Engineering 100% in inglese, università gratis e vita da 700€/mese. Il tuo budget familiare basta al 100% anche senza lavorare.",
    "punti_forza": [
      "Rette 0 €",
      "Alloggi a 250-320€/mese",
      "Triennale Software Engineering in inglese",
      "Copertura completa con 600-800€/mese"
    ],
    "punti_deboli": [
      "Cittadina piccola nel sud-est della Finlandia"
    ],
    "url": "https://www.lut.fi/en",
    "distanza_vicenza_km": 2032,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "ntnu",
    "nome": "NTNU (Norwegian University of Science and Technology)",
    "citta": "Trondheim",
    "paese": "Norvegia",
    "bandiera": "🇳🇴",
    "lat": 63.4195,
    "lng": 10.4024,
    "qs2027": 292,
    "qs2026": 264,
    "punteggio_qs": 39.1,
    "tasse_annue_eu": "0 € / ANNO (GRATIS per cittadini UE/SEE nelle università pubbliche norvegesi)",
    "affitto_mensile": "450–650 €/mese (studentati SiT convenzionati a Trondheim)",
    "costo_vita_totale": "~950–1.250 €/mese",
    "budget_mensile_val": 1100,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ce",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. / Nordic Engineering Tracks (Informatics & Cybernetics)",
        "lingua": "🇬🇧 Inglese / Moduli scandinavi",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "ce",
          "embedded"
        ],
        "focus": "Polo leggendario per la cibernetica ingegneristica (Department of Engineering Cybernetics), droni marini, robotica autonoma e navigazione."
      }
    ],
    "lingua_triennale": "Inglese (moduli e corsi internazionali)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Samordna opptak (ammissione centralizzata norvegese) basata su diploma e matematica R2",
      "soglia_indicativa": "Diploma di maturità con ottimi voti in scienze e matematica",
      "scadenze": "15 MARZO (per candidati con titolo straniero)",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda su samordnaopptak.no allegando transcript",
      "difficolta": 3
    },
    "approccio_didattico": "L'ateneo tecnologico più importante della Norvegia. Grandi laboratori di robotica marina, robotica medica e intelligenza artificiale.",
    "qualita_vita": "Trondheim è una vera città universitaria (Samfundet, il più grande club studentesco del mondo gestito al 100% da studenti).",
    "soddisfazione_studenti": "9.5/10. Spirito di appartenenza leggendario.",
    "rapporto_studio_vita": "Molto stimolante; i salari per i lavori part-time sono i più alti d'Europa (~18-20€/h).",
    "borse_sussidi": "Rette 0 € per studenti SEE. Accesso ai prestiti/borse Lånekassen lavorando part-time.",
    "fit_score": 9.0,
    "fit_note": "La cibernetica e la robotica a NTNU sono di caratura mondiale. Nessuna retta universitaria e paghe orarie da ~19€/ora che rendono facilissimo mantenersi con poche ore settimanali.",
    "punti_forza": [
      "Rette 0 € per cittadini UE",
      "Dipartimento di Cibernetica e Robotica famoso nel mondo",
      "Paghe part-time altissime (18-20€/h)",
      "Città studentesca fantastica"
    ],
    "punti_deboli": [
      "Alcuni corsi triennali richiedono integrazione linguistica norvegese"
    ],
    "url": "https://www.ntnu.edu",
    "distanza_vicenza_km": 1989,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "saarland",
    "nome": "Saarland University (UdS)",
    "citta": "Saarbrücken",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 49.2564,
    "lng": 7.0425,
    "qs2027": 450,
    "qs2026": 450,
    "punteggio_qs": 32.5,
    "tasse_annue_eu": "~300 €/semestre (~600 €/anno, include il Semesterticket per viaggiare gratis su tutti i treni e bus!)",
    "affitto_mensile": "280–420 €/mese (Saarbrücken è una delle città universitarie più economiche di Germania!)",
    "costo_vita_totale": "~750–950 €/mese",
    "budget_mensile_val": 850,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ai",
      "cyber",
      "ce"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ai",
          "cyber"
        ],
        "focus": "Uno dei centri di Computer Science e Intelligenza Artificiale più potenti al mondo: Max Planck Institute for Informatics, Max Planck for Software Systems, CISPA Helmholtz Center for Information Security e DFKI (German Research Center for Artificial Intelligence) tutti sul campus!"
      },
      {
        "nome": "B.Sc. Cybersecurity (English modules)",
        "lingua": "🇬🇧 Inglese / Tedesco",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cyber",
          "cs"
        ],
        "focus": "Legato al CISPA (uno dei centri europei d'eccellenza per la sicurezza cibernetica)."
      }
    ],
    "lingua_triennale": "Inglese (BSc Computer Science 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione diretta basata sui voti del diploma di maturità e matematica",
      "soglia_indicativa": "Diploma di scuola superiore (Abitur equivalency) con buone valutazioni matematiche",
      "scadenze": "15 LUGLIO (molto tempo a disposizione rispetto a Olanda e Danimarca!)",
      "requisiti_lingua": "Inglese B2/C1 (Cambridge First accettato, o IELTS 6.0/6.5)",
      "procedura": "1. Domanda su Uni-Assist o direttamente sul portale SIM della Saarland University\n2. Caricamento diploma e certificato di lingua\n3. Ammissione comunicata in estate",
      "difficolta": 2
    },
    "approccio_didattico": "Densità di ricercatori in Computer Science impareggiabile in Europa continentale. Opportunità di fare contratti HiWi (assistente retribuito nei laboratori Max Planck a 14-16€/h) fin dal primo anno.",
    "qualita_vita": "Città tranquilla al confine con la Francia, verde, rilassata, con un costo della vita bassissimo.",
    "soddisfazione_studenti": "9.3/10 per gli studenti di Computer Science.",
    "rapporto_studio_vita": "Ideale: il Semesterticket incluso nella tassa ti permette di viaggiare gratis su tutti i treni regionali in Germania!",
    "borse_sussidi": "Rette 0 € (solo quota semestrale con trasporti inclusi). Minijob e contratti HiWi nei centri di ricerca (~538–800 €/mese).",
    "fit_score": 9.7,
    "fit_note": "⭐ LA GEMMA SEGRETA DELLA GERMANIA: Bachelor in Computer Science 100% IN INGLESE, sul campus hanno i Max Planck Institutes, DFKI per l'AI e CISPA per la cybersecurity. Costo della vita bassissimo (280-350€/camera), trasporti gratis e scadenza comoda a Luglio!",
    "punti_forza": [
      "B.Sc. Computer Science 100% in inglese",
      "Hub europeo dell'AI e Cybersecurity (Max Planck, DFKI, CISPA)",
      "Affitti tra i più bassi di Germania (280-400€)",
      "Semesterticket: treni gratis in tutta la Germania!",
      "Scadenza al 15 LUGLIO (nessun anticipo a gennaio)"
    ],
    "punti_deboli": [
      "Città tranquilla per chi cerca metropoli rumorose"
    ],
    "url": "https://www.uni-saarland.de/en",
    "distanza_vicenza_km": 533,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "tum",
    "nome": "Technical University of Munich (TUM)",
    "citta": "Monaco di Baviera / Heilbronn",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 48.1497,
    "lng": 11.5679,
    "qs2027": 25,
    "qs2026": 28,
    "punteggio_qs": 91.8,
    "tasse_annue_eu": "~144 €/semestre (Rette universitarie 0 € per cittadini UE)",
    "affitto_mensile": "550–850 €/mese (Monaco molto cara, Heilbronn più accessibile)",
    "costo_vita_totale": "~1.050–1.450 €/mese",
    "budget_mensile_val": 1250,
    "budget_rating": 2,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Information Engineering (100% IN INGLESE - Campus Heilbronn)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "ai",
          "embedded"
        ],
        "focus": "Corso di punta erogato in inglese al campus di Heilbronn: data engineering, cybersecurity, software architecture, intelligenza artificiale."
      },
      {
        "nome": "B.Sc. Aerospace (100% IN INGLESE - Garching)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng",
          "robotics"
        ],
        "focus": "Aeronautica, spazio, veicoli autonomi e sistemi di propulsione in lingua inglese."
      }
    ],
    "lingua_triennale": "Inglese (BSc Information Engineering e BSc Aerospace)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Aptitude Assessment (Eignungsfeststellungsverfahren): valutazione voti diploma e colloquio/test online",
      "soglia_indicativa": "Voto diploma alto in matematica e fisica",
      "scadenze": "15 LUGLIO tramite TUMonline e Uni-Assist",
      "requisiti_lingua": "IELTS 6.5 o Cambridge Advanced/First",
      "procedura": "Registrazione su TUMonline, invio VPD da Uni-Assist, test di idoneità",
      "difficolta": 3
    },
    "approccio_didattico": "L'università #1 della Germania (#25 al mondo). Partner tecnologico di BMW, Siemens, Allianz, Google Munich.",
    "qualita_vita": "Baviera prospera, sicura, ordinata; a 4h di auto o treno diretto da Vicenza (Brennero).",
    "soddisfazione_studenti": "9.4/10. Titolo TUM dal valore immenso sul CV.",
    "rapporto_studio_vita": "Ritmo molto rigoroso, città ricca di opportunità.",
    "borse_sussidi": "Rette 0 € per cittadini UE. Minijob e contratti Werkstudent ben pagati (~16-20€/h).",
    "fit_score": 9.3,
    "fit_note": "#25 al mondo (top in Germania). A sole 4 ore di treno/auto da Vicenza! Il corso Information Engineering in inglese a Heilbronn ha costi di vita più accessibili rispetto al centro di Monaco.",
    "punti_forza": [
      "#25 al mondo (Top università tedesca)",
      "Rette 0 € per studenti UE",
      "A sole 4h di treno da Vicenza",
      "Reputazione globale indiscussa"
    ],
    "punti_deboli": [
      "Monaco città molto cara per gli affitti",
      "Esami del primo anno molto selettivi"
    ],
    "url": "https://www.tum.de",
    "distanza_vicenza_km": 290,
    "viaggio_vicenza": "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
  },
  {
    "id": "th_deggendorf",
    "nome": "Deggendorf Institute of Technology (DIT)",
    "citta": "Deggendorf",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 48.8297,
    "lng": 12.9554,
    "qs2027": 650,
    "qs2026": 650,
    "punteggio_qs": 28.0,
    "tasse_annue_eu": "0 € tasse (solo ~72 €/semestre di contributo amministrativo)",
    "affitto_mensile": "260–380 €/mese (economicità bavarese eccezionale)",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 5,
    "ambiti": [
      "ai",
      "cs",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS, include semestre di stage aziendale)",
        "ambiti": [
          "ai",
          "robotics",
          "cs"
        ],
        "focus": "Uno dei rari corsi di laurea applicata in Artificial Intelligence in lingua inglese in Germania. Machine learning, computer vision, data science e robotica autonoma."
      },
      {
        "nome": "B.Eng. Mechatronics / Applied Computer Science",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS)",
        "ambiti": [
          "embedded",
          "robotics",
          "other_eng"
        ],
        "focus": "Sistemi embedded, microcontrollori, azionamenti meccatronici, IoT."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione diploma e colloquio online motivazionale",
      "soglia_indicativa": "Diploma tecnico ITIS Rossi pienamente riconosciuto per le Fachhochschulen tedesche",
      "scadenze": "15 LUGLIO",
      "requisiti_lingua": "Inglese B2 certificato (il tuo Cambridge First è perfetto)",
      "procedura": "Domanda su Primuss portal / Uni-Assist",
      "difficolta": 2
    },
    "approccio_didattico": "Didattica orientata alla pratica (University of Applied Sciences / Hochschule). Molti laboratori, stage aziendale di 6 mesi pagato obbligatorio.",
    "qualita_vita": "Cittadina sul Danubio nella bassa Baviera, tranquilla, sicura, a costi bassissimi.",
    "soddisfazione_studenti": "9.1/10. Ambiente internazionale con oltre il 40% di studenti esteri.",
    "rapporto_studio_vita": "Rilassato: con 600-800€ al mese vivi da signore senza alcun debito.",
    "borse_sussidi": "Rette 0 €.",
    "fit_score": 9.4,
    "fit_note": "Perfetto per chi vuole concretezza: B.Sc. in Artificial Intelligence 100% in inglese, università applicata (moltissimi laboratori), stanze a 280-320€/mese e tirocini retribuiti nell'industria bavarese.",
    "punti_forza": [
      "BSc Artificial Intelligence 100% in inglese",
      "Costi bassissimi (affitti a 260-350€)",
      "Didattica estremamente pratica (laboratori e stage)",
      "Budget 600-800€/mese copre tutto comodamente"
    ],
    "punti_deboli": [
      "Ateneo applicato meno teorico dei grandi politecnici"
    ],
    "url": "https://www.th-deg.de/en",
    "distanza_vicenza_km": 381,
    "viaggio_vicenza": "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
  },
  {
    "id": "jku_linz",
    "nome": "Johannes Kepler University Linz (JKU)",
    "citta": "Linz",
    "paese": "Austria",
    "bandiera": "🇦🇹",
    "lat": 48.337,
    "lng": 14.318,
    "qs2027": 450,
    "qs2026": 446,
    "punteggio_qs": 32.0,
    "tasse_annue_eu": "0 € tasse (solo ~22 €/semestre di contributo studenti ÖH per cittadini UE!)",
    "affitto_mensile": "300–450 €/mese (campus residenziale con alloggi studenteschi moderni a prezzi calmierati!)",
    "costo_vita_totale": "~750–950 €/mese",
    "budget_mensile_val": 850,
    "budget_rating": 5,
    "ambiti": [
      "ai",
      "cs",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Artificial Intelligence (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "robotics",
          "cs"
        ],
        "focus": "Uno dei primi Bachelor in AI del mondo! Guidato dal prestigioso Institute for Machine Learning fondato da Sepp Hochreiter (l'inventore delle reti neurali LSTM, pietra miliare del Deep Learning)."
      },
      {
        "nome": "B.Sc. Mechatronics (English modules)",
        "lingua": "🇬🇧 Inglese / Tedesco",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "embedded",
          "other_eng"
        ],
        "focus": "Linz è la culla accademica della meccatronica in Europa. Integrazione perfetta tra meccanica, elettronica e controlli."
      }
    ],
    "lingua_triennale": "Inglese (BSc Artificial Intelligence 100% in lingua inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Ammissione aperta con verifica del diploma di scuola superiore e delle competenze matematiche",
      "soglia_indicativa": "Diploma ITIS Rossi con buon voto in matematica",
      "scadenze": "Settembre per il semestre invernale (scadenze austriache molto flessibili!)",
      "requisiti_lingua": "Inglese B2 certificato (il tuo First B2/C1 Cambridge è pienamente riconosciuto)",
      "procedura": "1. Registrazione online sul portale JKU Kusss\n2. Invio copia diploma con dichiarazione di valore o legalizzazione\n3. Immatricolazione diretta senza graduatorie numerus fixus stressanti!",
      "difficolta": 1
    },
    "approccio_didattico": "Prestigio scientifico assoluto nel deep learning (la cattedra di Hochreiter attrae partnership con Audi, Apple, Google). Campus integrato con laghetto e dormitori.",
    "qualita_vita": "Linz è una città verde, affacciata sul Danubio, a sole 4 ore e mezza di auto da Vicenza (raggiungibile anche in treno via Tarvisio/Salisburgo).",
    "soddisfazione_studenti": "9.4/10. Campus universitario vivibile e moderno.",
    "rapporto_studio_vita": "Magnifico: vicinanza all'Italia e costi bassi.",
    "borse_sussidi": "Rette universitarie 0 € per studenti UE. Minijob austriaci esentasse fino a ~518 €/mese.",
    "fit_score": 9.8,
    "fit_note": "🎯 FIT CLAMOROSO: Bachelor in Artificial Intelligence 100% IN INGLESE presso l'ateneo di Sepp Hochreiter (padre delle reti LSTM!). Rette pari a ZERO, alloggio economico sul campus, ammissione agevole e vicinissima a Vicenza (4h30 di macchina o treno)!",
    "punti_forza": [
      "B.Sc. Artificial Intelligence 100% in inglese",
      "Istituto fondato da Sepp Hochreiter (inventore LSTM e pioniere AI)",
      "Rette universitarie = 0 €",
      "Vicinanza all'Italia (4h30 da Vicenza)",
      "Ammissione diretta senza graduatorie rigide"
    ],
    "punti_deboli": [
      "Città industriale elegante ma non metropoli globale"
    ],
    "url": "https://www.jku.at/en",
    "distanza_vicenza_km": 375,
    "viaggio_vicenza": "🚆/🚗 ~3h–4h (Treno AV o auto, rientro comodo per festività e weekend lunghi)"
  },
  {
    "id": "ku_leuven",
    "nome": "KU Leuven",
    "citta": "Lovanio (Leuven)",
    "paese": "Belgio",
    "bandiera": "🇧🇪",
    "lat": 50.8798,
    "lng": 4.7005,
    "qs2027": 59,
    "qs2026": 63,
    "punteggio_qs": 78.4,
    "tasse_annue_eu": "~1.116 €/anno (tariffa calmierata per studenti UE)",
    "affitto_mensile": "380–580 €/mese (residenze KU Leuven 'Kot')",
    "costo_vita_totale": "~850–1.200 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "embedded",
      "robotics",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Engineering Technology (100% IN INGLESE - Campus Group T)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "embedded",
          "robotics",
          "other_eng"
        ],
        "focus": "Uno dei rari corsi di ingegneria in inglese in Belgio. Indirizzi in: ICT (software, reti, embedded), Elettronica, Meccatronica, Chimica. Fortissima impronta pratica con gli 'Engineering Experiences' e team solari."
      }
    ],
    "lingua_triennale": "Inglese (BSc Engineering Technology al Campus Group T)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione del diploma di maturità tecnica + test di posizionamento matematico (Ijkingstoets, non ostativo)",
      "soglia_indicativa": "Diploma ITIS Rossi con almeno 7/10 in Matematica",
      "scadenze": "1° MARZO (per studenti internazionali) o fino a Giugno per cittadini UE",
      "requisiti_lingua": "IELTS 6.5 o Cambridge First/Advanced",
      "procedura": "Domanda sul portale KU Leuven Admissions",
      "difficolta": 2
    },
    "approccio_didattico": "KU Leuven è stabilmente al 1° posto in Europa per tasso di innovazione secondo Reuters. Campus Group T orientato a progetti e prototipi pratici.",
    "qualita_vita": "Leuven è una perla medievale a 20 minuti di treno da Bruxelles: una delle città universitarie più storiche del mondo.",
    "soddisfazione_studenti": "9.3/10. Il tipico alloggio belga ('Kot') crea forte socialità.",
    "rapporto_studio_vita": "Molto piacevole e vivace.",
    "borse_sussidi": "Contratto studenti belga (Studentenarbeid): 600 ore all'anno esenti da imposte.",
    "fit_score": 9.4,
    "fit_note": "#59 al mondo QS (Top 10 in Europa). Il Bachelor in Engineering Technology in inglese al Campus Group T unisce la teoria alla costruzione di prototipi (team studenteschi pluripremiati). Tasse basse (1.116€/anno).",
    "punti_forza": [
      "#59 al mondo QS",
      "Triennale Engineering Technology 100% in inglese",
      "Tasse basse (~1.116 €/anno)",
      "A 20 minuti di treno da Bruxelles",
      "Regime di lavoro studentesco esentasse"
    ],
    "punti_deboli": [
      "Scadenza consigliata entro Marzo"
    ],
    "url": "https://www.kuleuven.be/english",
    "distanza_vicenza_km": 779,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "howest",
    "nome": "Howest University of Applied Sciences",
    "citta": "Kortrijk",
    "paese": "Belgio",
    "bandiera": "🇧🇪",
    "lat": 50.828,
    "lng": 3.2649,
    "qs2027": 700,
    "qs2026": 700,
    "punteggio_qs": 26.0,
    "tasse_annue_eu": "~1.116 €/anno",
    "affitto_mensile": "320–480 €/mese",
    "costo_vita_totale": "~750–950 €/mese",
    "budget_mensile_val": 850,
    "budget_rating": 5,
    "ambiti": [
      "gamedev",
      "cs",
      "cyber"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Digital Arts and Entertainment (DAE) - (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "gamedev",
          "cs"
        ],
        "focus": "Votata per 3 volte MIGLIORE SCUOLA DI VIDEOGIOCHI DEL MONDO (Rookies Awards)! Specializzazioni in Game Development (C++, motori grafici, fisica, Unity/Unreal Engine) e Game Graphics 3D."
      },
      {
        "nome": "B.Sc. Applied Computer Science: Cyber Security Professional",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cyber",
          "cs"
        ],
        "focus": "Penetration testing, reverse engineering, sicurezza delle reti e malware analysis."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione diploma e test di attitudine alla programmazione/matematica",
      "soglia_indicativa": "Forte passione e basi matematiche",
      "scadenze": "15 Giugno",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Domanda online sul portale Howest DAE",
      "difficolta": 2
    },
    "approccio_didattico": "Il tempio mondiale per programmatori di videogiochi e computer graphics: 100% pratico, hardware con GPU top di gamma, docenti dall'industria tripla-A (Ubisoft, EA, Guerrilla).",
    "qualita_vita": "Cittadina fiamminga moderna e tranquilla, a costi molto contenuti.",
    "soddisfazione_studenti": "9.5/10. I laureati DAE lavorano nei principali studi di sviluppo del mondo.",
    "rapporto_studio_vita": "Impegnativo ma appassionante se adori Unity, C++ e computer graphics.",
    "borse_sussidi": "Tasse calmierate a ~1.116 €/anno.",
    "fit_score": 9.5,
    "fit_note": "Se vuoi fare Game Development, motori grafici o simulazioni avanzate (come il tuo simulatore Unity per la RoboCup), DAE Howest è considerata letteralmente la n.1 al mondo per distacco, con tasse a soli 1.116€/anno!",
    "punti_forza": [
      "Scuola n.1 al mondo per Game Development (Rookies Award)",
      "Insegnamento avanzatissimo di C++, shader, motori grafici e simulazione",
      "Tasse belghe basse (~1.116 €/anno)",
      "Assunzione diretta in studi di sviluppo tripla-A"
    ],
    "punti_deboli": [
      "Carico di lavoro nei progetti molto intenso"
    ],
    "url": "https://www.digitalartsandentertainment.be",
    "distanza_vicenza_km": 848,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "tcd",
    "nome": "Trinity College Dublin",
    "citta": "Dublino",
    "paese": "Irlanda",
    "bandiera": "🇮🇪",
    "lat": 53.3438,
    "lng": -6.2546,
    "qs2027": 75,
    "qs2026": 81,
    "punteggio_qs": 71.5,
    "tasse_annue_eu": "~3.000 €/anno (contributo studentesco EU sotto Free Fees Initiative)",
    "affitto_mensile": "750–1.150 €/mese (Dublino ha una crisi abitativa seria)",
    "costo_vita_totale": "~1.350–1.850 €/mese",
    "budget_mensile_val": 1500,
    "budget_rating": 1,
    "ambiti": [
      "cs",
      "ce",
      "ai",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.A. (Mod) Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (BSc Honours irlandese, opzione master integrato a 5 anni)",
        "ambiti": [
          "cs",
          "ai",
          "ce"
        ],
        "focus": "Algoritmi, intelligenza artificiale, architettura dei calcolatori, sistemi operativi e telecomunicazioni."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "CAO (Central Applications Office) irlandese: conversione dei voti di maturità in punti CAO",
      "soglia_indicativa": "Voto di maturità molto alto (≥ 90/100)",
      "scadenze": "1° FEBBRAIO (tramite CAO.ie)",
      "requisiti_lingua": "Inglese madrelingua / Cambridge Advanced C1 o First con grade A / IELTS 6.5",
      "procedura": "Domanda su cao.ie entro il 1° febbraio allegando transcript voti",
      "difficolta": 4
    },
    "approccio_didattico": "L'ateneo storico più prestigioso d'Irlanda. Campus iconico nel centro di Dublino, accanto ai quartier generali europei di Google, Meta, Twitter/X.",
    "qualita_vita": "Dublino è accogliente e giovanile (Giovanni ci ha già vissuto per il PCTO a Clondalkin e centro città).",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Città vivace, ma il costo dell'alloggio a Dublino è il più alto dell'UE dopo Zurigo.",
    "borse_sussidi": "Lavoro part-time a 12,70 €/ora minimo legale.",
    "fit_score": 8.0,
    "fit_note": "Ateneo leggendario (#75 al mondo) in un Paese che conosci già bene. Purtroppo gli affitti a Dublino sono alle stelle (800-1.100€ solo per la stanza), rendendola difficile con un budget di 600-800€ senza lavorare molte ore.",
    "punti_forza": [
      "#75 al mondo QS",
      "Conosci già Dublino dall'Erasmus PCTO",
      "Silicon Docks con quartier generali tech europei"
    ],
    "punti_deboli": [
      "Affitti proibitivi a Dublino",
      "Corso di durata quadriennale (4 anni)"
    ],
    "url": "https://www.tcd.ie",
    "distanza_vicenza_km": 1544,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "galway",
    "nome": "University of Galway",
    "citta": "Galway",
    "paese": "Irlanda",
    "bandiera": "🇮🇪",
    "lat": 53.2778,
    "lng": -9.06,
    "qs2027": 289,
    "qs2026": 289,
    "punteggio_qs": 39.5,
    "tasse_annue_eu": "~3.000 €/anno (contributo studentesco EU)",
    "affitto_mensile": "450–700 €/mese (molto più accessibile di Dublino!)",
    "costo_vita_totale": "~950–1.250 €/mese",
    "budget_mensile_val": 1100,
    "budget_rating": 3,
    "ambiti": [
      "cs",
      "ai",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science and Information Technology",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Forte polo per l'intelligenza artificiale e data science (ospita l'Insight Centre for Data Analytics)."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "CAO.ie",
      "soglia_indicativa": "Punti CAO basati sul diploma",
      "scadenze": "1° Febbraio",
      "requisiti_lingua": "IELTS 6.5 o Cambridge",
      "procedura": "Domanda tramite portale CAO",
      "difficolta": 3
    },
    "approccio_didattico": "Didattica orientata al software e alle tecnologie mediche/data science.",
    "qualita_vita": "Galway è la capitale culturale e musicale d'Irlanda, affacciata sull'Atlantico, sicura e accogliente.",
    "soddisfazione_studenti": "9.2/10.",
    "rapporto_studio_vita": "Molto più vivibile e rilassante rispetto a Dublino.",
    "borse_sussidi": "Part-time a 12,70 €/ora.",
    "fit_score": 8.6,
    "fit_note": "Se vuoi studiare in Irlanda evitando i prezzi folli di Dublino, Galway è la scelta migliore: alloggi più accessibili, Insight Centre per il Machine Learning e vita studentesca festosa.",
    "punti_forza": [
      "Costi abitativi molto più bassi di Dublino",
      "Insight Centre for Data Analytics",
      "Capitale culturale d'Irlanda"
    ],
    "punti_deboli": [
      "Durata quadriennale"
    ],
    "url": "https://www.universityofgalway.ie",
    "distanza_vicenza_km": 1711,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "ctu_prague",
    "nome": "Czech Technical University in Prague (ČVUT)",
    "citta": "Praga",
    "paese": "Repubblica Ceca",
    "bandiera": "🇨🇿",
    "lat": 50.1022,
    "lng": 14.3925,
    "qs2027": 400,
    "qs2026": 403,
    "punteggio_qs": 33.5,
    "tasse_annue_eu": "~2.200 €/anno per i corsi in inglese (o 0 € se studiassi in ceco)",
    "affitto_mensile": "150–250 €/mese (dormitorio universitario Strahov / Dejvice a prezzi irrisori!)",
    "costo_vita_totale": "~550–750 €/mese TUTTO COMPRESO",
    "budget_mensile_val": 650,
    "budget_rating": 5,
    "ambiti": [
      "robotics",
      "ai",
      "cs",
      "ce",
      "embedded",
      "cyber",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Cybernetics and Robotics (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "ai",
          "embedded",
          "ce"
        ],
        "focus": "Uno dei corsi più prestigiosi d'Europa Centrale: robotica autonoma, visione artificiale, sistemi di controllo, microcontrollori e sensori. Perfetto per la RoboCup!"
      },
      {
        "nome": "B.Sc. Informatics (Computer Science / Software Engineering)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "cyber",
          "ai"
        ],
        "focus": "Facoltà FIT (Faculty of Information Technology): programmazione di sistemi, architettura software, cybersecurity e reti."
      },
      {
        "nome": "B.Sc. Electrical Engineering and Computer Science",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ce",
          "embedded",
          "other_eng"
        ],
        "focus": "Elettronica, sistemi embedded, telecomunicazioni e automazione."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Test online di Matematica del ČVUT (erogato in inglese, basato sul programma delle superiori)",
      "soglia_indicativa": "Punteggio sufficiente nel test di matematica (preparazione ITIS Rossi ottima)",
      "scadenze": "31 MARZO (1ª finestra) o fino a fine Aprile",
      "requisiti_lingua": "Inglese B2 certificato (il tuo Cambridge First B2/C1 è pienamente accettato)",
      "procedura": "1. Candidatura sul portale admissions.cvut.cz\n2. Sostieni il test di matematica online\n3. Procedura di riconoscimento diploma (nostrificazione, molto rapida con supporto dell'ateneo)",
      "difficolta": 2
    },
    "approccio_didattico": "Forte tradizione ingegneristica dell'Europa Centrale: solida base matematica combinata con eccezionali laboratori di robotica (Department of Cybernetics al campus di Karlovo Náměstí).",
    "qualita_vita": "Praga è una delle capitali più sicure, affascinanti ed economiche d'Europa. Trasporti pubblici perfetti 24/7 (abbonamento studenti a soli ~5 €/mese!). Giovanni ci è già stato a luglio!",
    "soddisfazione_studenti": "9.4/10. La comunità studentesca internazionale è enorme e vivacissima.",
    "rapporto_studio_vita": "Spettacolare: il budget genitori di 600-800€ qui basta e avanza per fare vita da signori, con cene fuori e viaggi.",
    "borse_sussidi": "Dormitori studenteschi a 150-180 €/mese. Lavoro part-time in aziende tech multinazionali (Microsoft, JetBrains, Avast/Gen hanno enormi centri di sviluppo a Praga).",
    "fit_score": 9.8,
    "fit_note": "🎯 RAPPORTO QUALITÀ/PREZZO IMBATTIBILE (#1 PER BUDGET): Corso B.Sc. in Cybernetics & Robotics 100% IN INGLESE, dormitori a 150€/mese, Praga stupenda (la conosci già!), vita a meno di 650€/mese totali. Il budget familiare di 600-800€ ti garantisce totale indipendenza!",
    "punti_forza": [
      "B.Sc. Cybernetics & Robotics 100% in inglese",
      "Costi bassissimi (dormitorio a 150€, vita con 600€/mese)",
      "Hai già visitato Praga a luglio e conosci l'atmosfera",
      "Hub tech europeo (sede centrale di JetBrains e Avast)",
      "Pieno controllo del budget familiare di 600-800€"
    ],
    "punti_deboli": [
      "Tassa annua di ~2.200 € per il programma in inglese (ma ampiamente compensata dal risparmio sull'alloggio!)"
    ],
    "url": "https://www.cvut.cz/en",
    "distanza_vicenza_km": 550,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "charles_uni",
    "nome": "Charles University (Univerzita Karlova)",
    "citta": "Praga",
    "paese": "Repubblica Ceca",
    "bandiera": "🇨🇿",
    "lat": 50.088,
    "lng": 14.402,
    "qs2027": 248,
    "qs2026": 248,
    "punteggio_qs": 41.0,
    "tasse_annue_eu": "~3.500 €/anno per il programma in inglese",
    "affitto_mensile": "150–300 €/mese (dormitori studenteschi)",
    "costo_vita_totale": "~600–800 €/mese",
    "budget_mensile_val": 700,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ai"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (Faculty of Mathematics and Physics - Matfyz)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "La leggendaria facoltà 'Matfyz': una delle scuole di matematica e algoritmi teorici più rigorose e temute al mondo. Sforna regolarmente campioni delle finali mondiali ICPC di programmazione competitiva."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Test di matematica e logica (erogato online) o punteggi SAT Math",
      "soglia_indicativa": "Test di matematica selettivo",
      "scadenze": "Fine Aprile",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda su cuni.cz allegando transcript e sostenendo il test Matfyz",
      "difficolta": 3
    },
    "approccio_didattico": "Teorico, matematico, rigoroso. Se ami la complessità computazionale, le strutture dati e la matematica pura dell'informatica, Matfyz non ha rivali.",
    "qualita_vita": "Praga è incantevole.",
    "soddisfazione_studenti": "9.1/10 per la profondità intellettuale.",
    "rapporto_studio_vita": "Studio impegnativo, vita economica.",
    "borse_sussidi": "Dormitori a prezzi popolari.",
    "fit_score": 9.0,
    "fit_note": "Ateneo antichissimo (#248 al mondo). La facoltà Matfyz per Computer Science in inglese è una leggenda nella programmazione competitiva e negli algoritmi teorici.",
    "punti_forza": [
      "#248 al mondo QS",
      "Facoltà Matfyz al vertice per la teoria informatica",
      "Costi della vita a Praga irrisori"
    ],
    "punti_deboli": [
      "Carico matematico molto pesante",
      "Meno orientato all'hardware/robotica rispetto al ČVUT"
    ],
    "url": "https://cuni.cz/en",
    "distanza_vicenza_km": 548,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "taltech",
    "nome": "Tallinn University of Technology (TalTech)",
    "citta": "Tallinn",
    "paese": "Estonia",
    "bandiera": "🇪🇪",
    "lat": 59.395,
    "lng": 24.6719,
    "qs2027": 600,
    "qs2026": 620,
    "punteggio_qs": 29.5,
    "tasse_annue_eu": "0 € tasse se vincitore di borsa statale / ~3.000 €/anno",
    "affitto_mensile": "180–350 €/mese (campus integrato con dormitori modernissimi!)",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 5,
    "ambiti": [
      "cyber",
      "cs",
      "embedded",
      "ce"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Cyber Security Engineering (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cyber",
          "cs",
          "embedded"
        ],
        "focus": "L'unico Bachelor europeo in Cyber Security Engineering! Sviluppato in collaborazione con il NATO Cooperative Cyber Defence Centre of Excellence (NATO CCDCOE). Copre sicurezza di rete, crittografia, hardware security, forensics e difesa informatica."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Test online di matematica e pensiero logico + colloquio motivazionale via Skype/Teams",
      "soglia_indicativa": "Buone competenze informatiche e motivazione (il tuo background CCNA e progetti ti rende candidato ideale!)",
      "scadenze": "1° MAGGIO tramite DreamApply Estonia (estonia.dreamapply.com)",
      "requisiti_lingua": "IELTS 5.5-6.0 o Cambridge First B2 (il tuo First è perfetto)",
      "procedura": "Domanda su estonia.dreamapply.com -> test online -> colloquio",
      "difficolta": 2
    },
    "approccio_didattico": "L'Estonia è la culla dell'e-government e di unicorni tech come Skype, Wise, Bolt. Didattica estremamente pratica con laboratori di difesa cibernetica.",
    "qualita_vita": "Tallinn è una perla digitale: tutto si fa online con la carta d'identità digitale, trasporti pubblici gratuiti per residenti, natura a due passi.",
    "soddisfazione_studenti": "9.3/10. Spirito startup contagioso.",
    "rapporto_studio_vita": "Ottimo: dormitori moderni sul campus e vita poco costosa.",
    "borse_sussidi": "Borse di studio 'Dora Plus' e 'Achievement Stipends' per studenti meritevoli.",
    "fit_score": 9.5,
    "fit_note": "⭐ IL TOP ASSOLUTO PER CYBERSECURITY E RETI: B.Sc. in Cyber Security Engineering 100% in inglese a Tallinn (capitale mondiale della cybersecurity e sede del centro NATO). Le tue competenze CCNA su Cisco e networking qui ti mettono in prima fila!",
    "punti_forza": [
      "Unico Bachelor in Cyber Security Engineering in Europa",
      "Sede del NATO Cyber Defence Centre",
      "Ecosistema startup più digitalizzato del mondo",
      "Dormitori a 180-250€/mese"
    ],
    "punti_deboli": [
      "Inverni bui nel Baltico"
    ],
    "url": "https://taltech.ee/en",
    "distanza_vicenza_km": 1771,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "tartu",
    "nome": "University of Tartu",
    "citta": "Tartu",
    "paese": "Estonia",
    "bandiera": "🇪🇪",
    "lat": 58.3806,
    "lng": 26.7251,
    "qs2027": 358,
    "qs2026": 358,
    "punteggio_qs": 35.0,
    "tasse_annue_eu": "Rette spesso coperte da Tuition-Waiver Scholarships (borse di esenzione) / ~4.000 €",
    "affitto_mensile": "180–320 €/mese",
    "costo_vita_totale": "~650–850 €/mese",
    "budget_mensile_val": 750,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ai",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Science and Technology (indirizzo Computer Science & Robotics)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "robotics",
          "ai",
          "embedded"
        ],
        "focus": "Institute of Computer Science di Tartu (Delta Centre, il più moderno edificio tech del Baltico). Robotica autonoma, intelligenza artificiale e sistemi spaziali (satellite ESTCube)."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione voti diploma + lettera motivazionale ben strutturata",
      "soglia_indicativa": "Media voti diploma buona con focus su matematica e scienze",
      "scadenze": "15 APRILE (DreamApply)",
      "requisiti_lingua": "Inglese B2 (Cambridge First valido)",
      "procedura": "Domanda su estonia.dreamapply.com",
      "difficolta": 2
    },
    "approccio_didattico": "L'ateneo storico più prestigioso dei Paesi Baltici (#358 al mondo). Il nuovo Delta Centre è uno dei centri di ricerca informatica più all'avanguardia d'Europa.",
    "qualita_vita": "Tartu è una città universitaria per definizione (la 'città delle buone idee'), giovane, a misura di studente.",
    "soddisfazione_studenti": "9.4/10.",
    "rapporto_studio_vita": "Rilassato, costi bassissimi, tantissimi eventi studenteschi.",
    "borse_sussidi": "Borse di studio regionali e alloggi a meno di 200€/mese.",
    "fit_score": 9.2,
    "fit_note": "Ateneo baltico prestigioso (#358 al mondo). Il Delta Centre è spettacolare, la vita costa pochissimo e il corso Science & Technology permette di focalizzarsi su CS e Robotica.",
    "punti_forza": [
      "#358 al mondo QS",
      "Delta Centre per Computer Science all'avanguardia",
      "Costi alloggio a meno di 200€/mese",
      "Comunità accademica affiatata"
    ],
    "punti_deboli": [
      "Tartu è a 2h di treno da Tallinn"
    ],
    "url": "https://ut.ee/en",
    "distanza_vicenza_km": 1758,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "pw_warsaw",
    "nome": "Warsaw University of Technology (Politechnika Warszawska)",
    "citta": "Varsavia",
    "paese": "Polonia",
    "bandiera": "🇵🇱",
    "lat": 52.2205,
    "lng": 21.0105,
    "qs2027": 571,
    "qs2026": 571,
    "punteggio_qs": 29.8,
    "tasse_annue_eu": "~2.500–3.000 €/anno per i programmi in inglese",
    "affitto_mensile": "150–350 €/mese (dormitori studenteschi a 120-180€/mese)",
    "costo_vita_totale": "~550–750 €/mese",
    "budget_mensile_val": 650,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS, titolo di Inżynier)",
        "ambiti": [
          "cs",
          "ai",
          "ce"
        ],
        "focus": "Algoritmi, intelligenza artificiale, architetture dei calcolatori, sistemi operativi e database relazionali."
      },
      {
        "nome": "B.Sc. Mechatronics / Robotics (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS)",
        "ambiti": [
          "robotics",
          "embedded",
          "other_eng"
        ],
        "focus": "Sistemi meccatronici, sensori, microcontrollori, azionamenti robotici e visione computazionale."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione diploma di maturità con formula matematica e fisica",
      "soglia_indicativa": "Buoni voti in matematica e scienze all'ITIS",
      "scadenze": "Maggio / Giugno",
      "requisiti_lingua": "Inglese B2 certificato",
      "procedura": "Domanda online sul portale admissions.pw.edu.pl",
      "difficolta": 2
    },
    "approccio_didattico": "Il politecnico più prestigioso della Polonia. Forte impostazione ingegneristica con rilascio del titolo professionale europeo di 'Inżynier'.",
    "qualita_vita": "Varsavia è una metropoli europea in piena esplosione economica, pulita, moderna, con trasporti impeccabili.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Ottimo: costi della vita molto contenuti e 0% di tasse sul reddito da lavoro per gli under 26!",
    "borse_sussidi": "Esenzione fiscale totale under 26 (Zerowy PIT). Alloggi a partire da 130 €/mese.",
    "fit_score": 9.2,
    "fit_note": "Ateneo tecnologico leader in Polonia. Il corso in Mechatronics & Robotics in inglese è ottimo per il tuo background, i dormitori costano 150€ e il budget da 600-800€ ti lascia enormi risparmi.",
    "punti_forza": [
      "Politecnico n.1 in Polonia",
      "B.Sc. Mechatronics e CS 100% in inglese",
      "Dormitori a 150€/mese",
      "Tassazione 0% per giovani lavoratori under 26"
    ],
    "punti_deboli": [
      "Durata di 3.5 anni per il titolo di Inżynier"
    ],
    "url": "https://www.pw.edu.pl/eng",
    "distanza_vicenza_km": 1014,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "uc3m",
    "nome": "Universidad Carlos III de Madrid (UC3M)",
    "citta": "Leganés (Madrid)",
    "paese": "Spagna",
    "bandiera": "🇪🇸",
    "lat": 40.3323,
    "lng": -3.7663,
    "qs2027": 319,
    "qs2026": 319,
    "punteggio_qs": 37.0,
    "tasse_annue_eu": "~1.300–1.800 €/anno (tariffe pubbliche della Comunidad de Madrid per studenti UE)",
    "affitto_mensile": "380–600 €/mese (campus a Leganés, molto più economico del centro di Madrid)",
    "costo_vita_totale": "~800–1.100 €/mese",
    "budget_mensile_val": 950,
    "budget_rating": 4,
    "ambiti": [
      "robotics",
      "ai",
      "cs",
      "ce",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Grado en Ingeniería Robótica (B.Sc. Robotics Engineering - 100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (Grado spagnolo da 240 ECTS)",
        "ambiti": [
          "robotics",
          "ai",
          "embedded",
          "ce"
        ],
        "focus": "Uno dei pochissimi Grado in ingegneria robotica 100% in lingua inglese in Spagna! Robotica autonoma, robot umanoidi (TEO humanoid robot), cinematica, ROS e sistemi embedded."
      },
      {
        "nome": "Grado en Ingeniería Informática (B.Sc. Computer Science & Engineering - 100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (240 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "ai"
        ],
        "focus": "Ingegneria del software, intelligenza artificiale, architettura hardware, sicurezza reti."
      },
      {
        "nome": "Grado en Ingeniería Aeroespacial / Biomédica (100% in Inglese)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (240 ECTS)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Ottimi corsi in lingua inglese per amici appassionati di aerospazio e ingegneria biomedica."
      }
    ],
    "lingua_triennale": "Inglese (tutti i corsi sopra sono 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Conversione del voto di maturità tramite UNEDasiss (sistema spagnolo da 0 a 10/14 punti) o prove PCE (Pruebas de Competencias Específicas)",
      "soglia_indicativa": "Per Robotics e Computer Science punteggio di taglio (nota de corte) elevato (≥ 10-11/14)",
      "scadenze": "Maggio / Giugno per la preinscripción universitaria madrilena",
      "requisiti_lingua": "Inglese B2/C1 (il tuo Cambridge First ti esonera da test di lingua)",
      "procedura": "1. Domanda su unedasiss.uned.es per accreditamento titolo\n2. Partecipazione alla preinscripción sul portale unico delle università di Madrid",
      "difficolta": 3
    },
    "approccio_didattico": "L'ateneo più moderno e internazionale della Spagna. Il Robotics Lab di Leganés è celebre per lo sviluppo di robot umanoidi e robotica sociale.",
    "qualita_vita": "Campus a Leganés (a 20 min di treno Cercanías dalla stazione centrale di Madrid Atocha). Sole, vita sociale allegra, cibo fantastico.",
    "soddisfazione_studenti": "9.2/10.",
    "rapporto_studio_vita": "Spettacolare: il clima e la vita spagnola uniti a un corso 100% in inglese.",
    "borse_sussidi": "Tasse pubbliche moderate (~1.500 €/anno).",
    "fit_score": 9.4,
    "fit_note": "⭐ OPZIONE ECCEZIONALE IN SPAGNA: Triennale in 'Ingeniería Robótica' 100% IN INGLESE al campus di Leganés. Robotics Lab pazzesco (robot umanoide TEO), vita splendida a Madrid e vicina a casa con voli low-cost da Venezia a 20€!",
    "punti_forza": [
      "Grado in Robotics Engineering 100% in inglese",
      "Robotics Lab di fama mondiale",
      "Voli diretti Venezia-Madrid giornalieri a basso costo",
      "Campus a Leganés più economico del centro città"
    ],
    "punti_deboli": [
      "Il percorso 'Grado' spagnolo dura 4 anni (240 ECTS) anziché 3",
      "Procedura UNEDasiss da avviare con anticipo"
    ],
    "url": "https://www.uc3m.es",
    "distanza_vicenza_km": 1371,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "ist_lisbon",
    "nome": "Instituto Superior Técnico (IST - ULisboa)",
    "citta": "Lisbona",
    "paese": "Portogallo",
    "bandiera": "🇵🇹",
    "lat": 38.7369,
    "lng": -9.1387,
    "qs2027": 266,
    "qs2026": 266,
    "punteggio_qs": 40.2,
    "tasse_annue_eu": "~697 €/anno (tassa statale portoghese bassissima!)",
    "affitto_mensile": "400–650 €/mese",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "Licenciatura em Engenharia Informática e de Computadores (LEIC)",
        "lingua": "🇬🇧 Inglese / Portoghese (materiali e laboratori in inglese)",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "embedded",
          "ai"
        ],
        "focus": "Il polo ingegneristico più prestigioso del Portogallo. Famoso per l'Institute for Systems and Robotics (ISR Lisbon) e per la partecipazione storica alla RoboCup!"
      },
      {
        "nome": "Licenciatura em Engenharia Aeroespacial / Mecânica",
        "lingua": "🇵🇹 Portoghese / Inglese",
        "lingua_code": "it",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Top d'ingegneria portoghese."
      }
    ],
    "lingua_triennale": "Inglese / Portoghese (materiali e lab in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Concorso nazionale di ammissione portoghese (CNAES) o processo per studenti internazionali UE tramite equipollenza voti",
      "soglia_indicativa": "Media matematica e fisica elevata",
      "scadenze": "Luglio",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Domanda su dges.gov.pt o tramite portale candidature IST",
      "difficolta": 3
    },
    "approccio_didattico": "Rigoroso, prestigioso, sede dell'Institute for Systems and Robotics (ISR), da decenni tra i protagonisti europei delle competizioni RoboCup (Soccer Small Size e Middle Size).",
    "qualita_vita": "Lisbona è magica: oceano, surf, clima mite tutto l'anno, città accogliente e sicura.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Piacevole, tasse universitarie simboliche (meno di 700€ all'anno).",
    "borse_sussidi": "Tasse irrisorie a ~697 €/anno.",
    "fit_score": 8.8,
    "fit_note": "L'IST di Lisbona ha una tradizione fortissima nella RoboCup (ISR Lisbon). Le tasse universitarie sono tra le più basse d'Europa (697€/anno) e la città è meravigliosa.",
    "punti_forza": [
      "Tradizione storica nel laboratorio di robotica ISR e RoboCup",
      "Tasse statali minime (~697 €/anno)",
      "Clima splendido e vita marittima"
    ],
    "punti_deboli": [
      "Lezioni frontali del primo anno spesso in portoghese (anche se i testi ed esami sono in inglese)"
    ],
    "url": "https://tecnico.ulisboa.pt/en",
    "distanza_vicenza_km": 1858,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "kit",
    "nome": "Karlsruhe Institute of Technology (KIT)",
    "citta": "Karlsruhe",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 49.0069,
    "lng": 8.4037,
    "qs2027": 110,
    "qs2026": 102,
    "punteggio_qs": 61.5,
    "tasse_annue_eu": "Rette 0 € per corsi pubblici / Carl Benz School ha rette private",
    "affitto_mensile": "350–550 €/mese",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Mechanical Engineering / Mechatronics (Carl Benz School - 100% in Inglese)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "embedded",
          "other_eng"
        ],
        "focus": "Meccatronica, controllo dei sistemi, robotica industriale e sensoristica avanzata."
      }
    ],
    "lingua_triennale": "Inglese (Carl Benz School)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione diploma, SAT e colloquio motivazionale",
      "soglia_indicativa": "Diploma e forte motivazione tecnica",
      "scadenze": "30 Aprile",
      "requisiti_lingua": "IELTS 6.5 o Cambridge",
      "procedura": "Domanda tramite Carl Benz School portal",
      "difficolta": 3
    },
    "approccio_didattico": "Uno dei centri di ricerca tecnologica più importanti di Germania (parte della Helmholtz Association).",
    "qualita_vita": "Città soleggiata del Baden-Württemberg, ciclabile, verde.",
    "soddisfazione_studenti": "9.0/10.",
    "rapporto_studio_vita": "Rigoroso ma ricco di soddisfazioni.",
    "borse_sussidi": "Contratti HiWi nei laboratori (~15 €/ora).",
    "fit_score": 9.1,
    "fit_note": "Ateneo leggendario (#110 al mondo) per ingegneria e informatica in Germania. Carl Benz School offre un programma in inglese in meccatronica.",
    "punti_forza": [
      "#110 al mondo QS",
      "Top per meccatronica e robotica",
      "Centro di ricerca Helmholtz"
    ],
    "punti_deboli": [
      "Carl Benz School applica contributi extra"
    ],
    "url": "https://www.kit.edu",
    "distanza_vicenza_km": 452,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "constructor",
    "nome": "Constructor University (ex Jacobs University)",
    "citta": "Brema",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 53.167,
    "lng": 8.653,
    "qs2027": 550,
    "qs2026": 550,
    "punteggio_qs": 30.5,
    "tasse_annue_eu": "Borse di studio fino al 100% disponibili in base al merito",
    "affitto_mensile": "Incluso nei pacchetti campus residenziale all-inclusive",
    "costo_vita_totale": "~900–1.200 €/mese",
    "budget_mensile_val": 1050,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ai",
      "robotics",
      "embedded"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Algoritmi, intelligenza artificiale, architetture cloud e sistemi distribuiti."
      },
      {
        "nome": "B.Sc. Robotics and Intelligent Systems (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "robotics",
          "ai",
          "embedded"
        ],
        "focus": "Robotica autonoma, percezione, attuatori, machine learning per sistemi fisici."
      }
    ],
    "lingua_triennale": "Inglese (100% in lingua)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Domanda su Common App o portale ateneo con dossier e colloquio",
      "soglia_indicativa": "Diploma e lettera motivazionale",
      "scadenze": "1° Giugno",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda online con valutazione borse di merito",
      "difficolta": 2
    },
    "approccio_didattico": "Vero campus in stile anglosassone nel nord della Germania. Oltre 110 nazionalità rappresentate.",
    "qualita_vita": "Campus residenziale autonomo a Brema.",
    "soddisfazione_studenti": "9.2/10.",
    "rapporto_studio_vita": "Comunità internazionale molto coesa.",
    "borse_sussidi": "Borse di studio di merito ampie per studenti europei meritevoli.",
    "fit_score": 9.2,
    "fit_note": "Unico vero campus internazionale in lingua inglese in Germania con un corso specifico in 'Robotics and Intelligent Systems'.",
    "punti_forza": [
      "BSc in Robotics and Intelligent Systems 100% in inglese",
      "Vero campus residenziale internazionale",
      "Borse di merito disponibili"
    ],
    "punti_deboli": [
      "Tariffe private se non si ottiene la borsa"
    ],
    "url": "https://constructor.university",
    "distanza_vicenza_km": 873,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "fau",
    "nome": "FAU Erlangen-Nürnberg",
    "citta": "Erlangen",
    "paese": "Germania",
    "bandiera": "🇩🇪",
    "lat": 49.5978,
    "lng": 11.0038,
    "qs2027": 229,
    "qs2026": 229,
    "punteggio_qs": 42.5,
    "tasse_annue_eu": "~140 €/semestre (Rette universitarie 0 €)",
    "affitto_mensile": "350–520 €/mese",
    "costo_vita_totale": "~800–1.050 €/mese",
    "budget_mensile_val": 900,
    "budget_rating": 4,
    "ambiti": [
      "ai",
      "cs",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Autonomy Technologies (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ai",
          "embedded",
          "robotics"
        ],
        "focus": "Guida autonoma, robotica, machine learning per sistemi embedded, sensori LiDAR e computer vision."
      },
      {
        "nome": "B.Sc. Clean Energy Processes (100% in Inglese)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng"
        ],
        "focus": "Ingegneria dei processi energetici sostenibili e idrogeno."
      }
    ],
    "lingua_triennale": "Inglese (Autonomy Technologies)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione diploma e requisiti matematici",
      "soglia_indicativa": "Diploma di maturità tecnica",
      "scadenze": "15 Luglio",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Domanda su Campo portal FAU",
      "difficolta": 2
    },
    "approccio_didattico": "FAU è al 2° posto in Germania per innovazione. Sede del Fraunhofer IIS (dove è stato inventato l'MP3) e partner di Siemens.",
    "qualita_vita": "Erlangen è la capitale tedesca della bicicletta, sede centrale globale di Siemens e polo medico-tecnologico.",
    "soddisfazione_studenti": "9.1/10.",
    "rapporto_studio_vita": "Città tranquilla, sicura e piena di parchi.",
    "borse_sussidi": "Rette 0 € per cittadini UE.",
    "fit_score": 9.5,
    "fit_note": "⭐ CORSO 'AUTONOMY TECHNOLOGIES' IN INGLESE: focalizzato su veicoli autonomi, computer vision e sistemi intelligenti. Vicina a Norimberga, rette 0€ e costi abbordabili!",
    "punti_forza": [
      "B.Sc. Autonomy Technologies 100% in inglese",
      "Rette universitarie 0 €",
      "Quartier generale Siemens a Erlangen",
      "A sole 5 ore di treno da Vicenza"
    ],
    "punti_deboli": [
      "Scadenza il 15 Luglio"
    ],
    "url": "https://www.fau.eu",
    "distanza_vicenza_km": 452,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "tu_wien",
    "nome": "TU Wien (Vienna University of Technology)",
    "citta": "Vienna",
    "paese": "Austria",
    "bandiera": "🇦🇹",
    "lat": 48.1989,
    "lng": 16.3699,
    "qs2027": 190,
    "qs2026": 190,
    "punteggio_qs": 47.8,
    "tasse_annue_eu": "0 € tasse (~22 €/semestre quota studenti ÖH per cittadini UE)",
    "affitto_mensile": "380–580 €/mese (Vienna ha il miglior sistema di edilizia residenziale al mondo!)",
    "costo_vita_totale": "~850–1.150 €/mese",
    "budget_mensile_val": 1000,
    "budget_rating": 4,
    "ambiti": [
      "cs",
      "ce",
      "robotics",
      "embedded",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Technische Informatik / Computer Engineering (moduli bilingue)",
        "lingua": "🇬🇧 Inglese / Tedesco",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "ce",
          "embedded",
          "cs"
        ],
        "focus": "Architetture hardware, sistemi embedded, calcolo ad alte prestazioni, robotica."
      },
      {
        "nome": "B.Sc. Maschinenbau / Elektrotechnik",
        "lingua": "🇬🇧 Inglese / Tedesco",
        "lingua_code": "it",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "other_eng",
          "robotics"
        ],
        "focus": "Ingegneria meccanica ed elettrotecnica nel cuore dell'Austria."
      }
    ],
    "lingua_triennale": "Inglese / Tedesco (molti corsi magistrali 100% in inglese)",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Reihungstest per Informatik (test attitudinale online)",
      "soglia_indicativa": "Superamento del test attitudinale",
      "scadenze": "Luglio / Agosto",
      "requisiti_lingua": "Inglese B2 / Tedesco A2-B1",
      "procedura": "Registrazione online su TISS TU Wien",
      "difficolta": 2
    },
    "approccio_didattico": "Il più grande polo tecnologico dell'Austria. Rigore matematico e laboratori di microelettronica avanzati.",
    "qualita_vita": "Vienna è eletta da anni la città con la migliore qualità della vita al mondo (The Economist Global Liveability Index). Trasporti a 1 €/giorno.",
    "soddisfazione_studenti": "9.3/10.",
    "rapporto_studio_vita": "Insuperabile: musei, caffè storici, concerti e parchi infiniti.",
    "borse_sussidi": "Rette universitarie 0 € per studenti UE.",
    "fit_score": 9.1,
    "fit_note": "A poche ore di treno o Nightjet notturno diretto da Vicenza/Venezia. Vienna è la città più vivibile del mondo e le rette sono gratuite.",
    "punti_forza": [
      "Città con la migliore qualità della vita al mondo",
      "Rette universitarie = 0 €",
      "Treno Nightjet notturno diretto da Vicenza/Venezia a Vienna",
      "#190 al mondo QS"
    ],
    "punti_deboli": [
      "Triennale con moduli tedeschi"
    ],
    "url": "https://www.tuwien.at/en",
    "distanza_vicenza_km": 471,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "ucd",
    "nome": "University College Dublin (UCD)",
    "citta": "Dublino",
    "paese": "Irlanda",
    "bandiera": "🇮🇪",
    "lat": 53.3068,
    "lng": -6.2206,
    "qs2027": 100,
    "qs2026": 126,
    "punteggio_qs": 64.0,
    "tasse_annue_eu": "~3.000 €/anno (contributo studentesco EU)",
    "affitto_mensile": "750–1.100 €/mese",
    "costo_vita_totale": "~1.300–1.750 €/mese",
    "budget_mensile_val": 1450,
    "budget_rating": 1,
    "ambiti": [
      "cs",
      "ai",
      "other_eng"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Science (100% IN INGLESE - Belfield Campus)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (BSc Honours)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Grande campus a Belfield. Data science, software engineering, intelligenza artificiale e reti."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "CAO.ie",
      "soglia_indicativa": "Punteggio CAO elevato",
      "scadenze": "1° Febbraio",
      "requisiti_lingua": "IELTS 6.5 o Cambridge",
      "procedura": "Domanda su cao.ie",
      "difficolta": 3
    },
    "approccio_didattico": "Il più grande campus universitario d'Irlanda, moderno, immerso nel verde.",
    "qualita_vita": "Dublino (ambiente giovanile e internazionale).",
    "soddisfazione_studenti": "9.0/10.",
    "rapporto_studio_vita": "Molto piacevole.",
    "borse_sussidi": "Part-time retribuito.",
    "fit_score": 8.1,
    "fit_note": "Ateneo top 100 mondiale con un campus moderno a Belfield. Ottima didattica, ma costo degli alloggi a Dublino elevato.",
    "punti_forza": [
      "Top 100 al mondo QS",
      "Grande campus moderno a Belfield",
      "Ecosistema tech irlandese"
    ],
    "punti_deboli": [
      "Costi abitativi a Dublino",
      "Percorso di 4 anni"
    ],
    "url": "https://www.ucd.ie",
    "distanza_vicenza_km": 1541,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "dcu",
    "nome": "Dublin City University (DCU)",
    "citta": "Dublino",
    "paese": "Irlanda",
    "bandiera": "🇮🇪",
    "lat": 53.3858,
    "lng": -6.2573,
    "qs2027": 436,
    "qs2026": 436,
    "punteggio_qs": 31.9,
    "tasse_annue_eu": "~3.000 €/anno",
    "affitto_mensile": "650–950 €/mese (campus a Glasnevin nel nord di Dublino, un po' meno caro del centro)",
    "costo_vita_totale": "~1.150–1.550 €/mese",
    "budget_mensile_val": 1300,
    "budget_rating": 2,
    "ambiti": [
      "cs",
      "ai",
      "ce",
      "embedded"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Computer Applications (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni (include 6 mesi di tirocinio INTRA retribuito in azienda!)",
        "ambiti": [
          "cs",
          "ai"
        ],
        "focus": "Uno dei corsi di software più apprezzati dai datori di lavoro d'Irlanda. Tirocinio aziendale retribuito obbligatorio (INTRA)."
      },
      {
        "nome": "B.Sc. Electronic and Computer Engineering",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "4 anni",
        "ambiti": [
          "ce",
          "embedded"
        ],
        "focus": "Sistemi embedded, IoT, telecomunicazioni e architettura hardware."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "CAO.ie",
      "soglia_indicativa": "Punti CAO",
      "scadenze": "1° Febbraio",
      "requisiti_lingua": "Inglese B2/C1",
      "procedura": "Domanda su cao.ie",
      "difficolta": 2
    },
    "approccio_didattico": "L'ateneo dell'innovazione in Irlanda: pioniere dei tirocini curriculari retribuiti (programma INTRA).",
    "qualita_vita": "Campus a Glasnevin, vicino all'aeroporto di Dublino.",
    "soddisfazione_studenti": "9.1/10 per l'occupabilità.",
    "rapporto_studio_vita": "Pratico ed orientato all'inserimento lavorativo.",
    "borse_sussidi": "Tirocinio INTRA retribuito.",
    "fit_score": 8.4,
    "fit_note": "Ateneo tecnologico moderno a Dublino con un semestre di tirocinio aziendale retribuito (INTRA) garantito durante il corso.",
    "punti_forza": [
      "Tirocinio retribuito obbligatorio INTRA",
      "Orientata alla pratica del software e dell'embedded",
      "Tasso di occupazione altissimo"
    ],
    "punti_deboli": [
      "Costi di Dublino"
    ],
    "url": "https://www.dcu.ie",
    "distanza_vicenza_km": 1547,
    "viaggio_vicenza": "✈️ Volo diretto ~1h30–2h30 da Venezia Marco Polo (VCE) o Treviso (TSF)"
  },
  {
    "id": "vut_brno",
    "nome": "Brno University of Technology (VUT)",
    "citta": "Brno",
    "paese": "Repubblica Ceca",
    "bandiera": "🇨🇿",
    "lat": 49.2238,
    "lng": 16.5744,
    "qs2027": 590,
    "qs2026": 610,
    "punteggio_qs": 29.2,
    "tasse_annue_eu": "~2.000–2.500 €/anno per i corsi in inglese",
    "affitto_mensile": "130–220 €/mese (dormitori studenteschi Pod Palackého vrchem tra i più grandi d'Europa!)",
    "costo_vita_totale": "~500–700 €/mese TUTTO INCLUSO",
    "budget_mensile_val": 600,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ce",
      "embedded",
      "robotics",
      "cyber"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Information Technology (100% IN INGLESE - Faculty of IT FIT)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3 anni (180 ECTS)",
        "ambiti": [
          "cs",
          "ce",
          "cyber",
          "embedded"
        ],
        "focus": "Facoltà FIT (Faculty of Information Technology) a Božetěchova: situata in un ex monastero con laboratori ultramoderni di supercomputing, cybersecurity, robotica e sistemi embedded."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Test online di matematica o valutazione voti diploma",
      "soglia_indicativa": "Diploma tecnico",
      "scadenze": "31 Marzo",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Domanda su vut.cz/en",
      "difficolta": 2
    },
    "approccio_didattico": "Brno è definita la 'Silicon Valley della Repubblica Ceca': vi hanno sede centri di ricerca di Red Hat, IBM, Honeywell, F-Secure. Didattica con laboratori hardware e software avanzati.",
    "qualita_vita": "Città studentesca per eccellenza: 1 abitante su 5 è studente universitario. Costo della vita bassissimo.",
    "soddisfazione_studenti": "9.4/10. Atmosfera giovanile ovunque.",
    "rapporto_studio_vita": "Eccezionale: dormitori a 140€/mese con birra a 1,50€ e cene complete a 5€.",
    "borse_sussidi": "Alloggi universitari quasi gratuiti.",
    "fit_score": 9.5,
    "fit_note": "Brno è il cuore tech della Repubblica Ceca (sede di Red Hat e centri di cybersecurity). Bachelor in IT 100% in inglese, dormitori a 140€/mese e vita da re con il tuo budget genitori di 600-800€!",
    "punti_forza": [
      "Silicon Valley ceca (Red Hat, Honeywell, IBM)",
      "B.Sc. Information Technology 100% in inglese",
      "Dormitori a 130-180€/mese",
      "Budget 600-800€ copre ogni singola spesa"
    ],
    "punti_deboli": [
      "Brno non ha voli diretti da Venezia (si atterra a Vienna e si prendono 1h30 di treno o bus)"
    ],
    "url": "https://www.vut.cz/en",
    "distanza_vicenza_km": 558,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  },
  {
    "id": "pwr_wroclaw",
    "nome": "Wrocław University of Science and Technology (Politechnika Wrocławska)",
    "citta": "Breslavia (Wrocław)",
    "paese": "Polonia",
    "bandiera": "🇵🇱",
    "lat": 51.1079,
    "lng": 17.0617,
    "qs2027": 650,
    "qs2026": 650,
    "punteggio_qs": 28.5,
    "tasse_annue_eu": "~2.500 €/anno",
    "affitto_mensile": "130–250 €/mese",
    "costo_vita_totale": "~500–700 €/mese",
    "budget_mensile_val": 600,
    "budget_rating": 5,
    "ambiti": [
      "cs",
      "ai",
      "cyber",
      "ce"
    ],
    "lauree_triennali": [
      {
        "nome": "B.Sc. Applied Computer Science (100% IN INGLESE)",
        "lingua": "🇬🇧 Inglese",
        "lingua_code": "en",
        "durata": "3.5 anni (210 ECTS)",
        "ambiti": [
          "cs",
          "ai",
          "cyber"
        ],
        "focus": "Intelligenza artificiale, sicurezza dei sistemi software, reti di telecomunicazioni, sviluppo cloud."
      }
    ],
    "lingua_triennale": "Inglese",
    "has_english_bachelor": true,
    "has_italian_bachelor": false,
    "ammissione": {
      "test_richiesto": "Valutazione voti diploma",
      "soglia_indicativa": "Diploma tecnico",
      "scadenze": "Maggio / Giugno",
      "requisiti_lingua": "Inglese B2",
      "procedura": "Domanda su admission.pwr.edu.pl",
      "difficolta": 2
    },
    "approccio_didattico": "Politecnico eccellente con forti team studenteschi nei rover marziani e satelliti.",
    "qualita_vita": "Breslavia è considerata la città più bella e vivace della Polonia, con centinaia di canali e ponti.",
    "soddisfazione_studenti": "9.3/10.",
    "rapporto_studio_vita": "Basso costo, alta qualità.",
    "borse_sussidi": "Tassazione 0% under 26 in Polonia.",
    "fit_score": 9.1,
    "fit_note": "Ateneo tecnologico solido in una città stupenda. B.Sc. in Applied Computer Science in inglese, dormitori a 140€ e budget 600-800€ ampiamente coprente.",
    "punti_forza": [
      "Città splendida e giovanissima",
      "B.Sc. Applied CS 100% in inglese",
      "Costi irrisori (dormitori a 130-200€)"
    ],
    "punti_deboli": [
      "Corso da 3.5 anni"
    ],
    "url": "https://pwr.edu.pl/en",
    "distanza_vicenza_km": 741,
    "viaggio_vicenza": "🚆 Nightjet notturno o ✈️ volo diretto ~1h15 da Venezia (VCE)/Verona (VRN)"
  }
];

// Metadati calcolati
const PAESI = [...new Set(UNIVERSITIES.map(u => u.paese))].sort();
const MAX_QS = Math.max(...UNIVERSITIES.map(u => u.qs2027));
const MIN_QS = Math.min(...UNIVERSITIES.map(u => u.qs2027));

console.log("UniMap dataset caricato:", UNIVERSITIES.length, "università pronte.");
