---
title: Endringslogg
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Endringslogg

## 1.18.0 — Utgitt 2026-06-29 {#1180--released-on-2026-06-29}

### Nytt {#new}

- **Google Calendar-verktøy** — les konfigurerte kalendere og hendelser for tidsplanbevisste automatiseringer
- **Kontaktkartlegging og deltakerhjelpere** — match kalenderdeltakere med nettstedsbrukere og kontakter
- **Godkjenningsporter for mennesker og påminnelsesposter** — sett automatiseringer på pause for gjennomgang og unngå dupliserte varsler
- **TextBee SMS-leverandør** — send konfigurerte tekstmeldingsvarsler gjennom TextBee
- **Avansert følgepakke** — legg til filsystem for betrodde utviklere, database, WP-CLI, REST-dispatcher, programtilleggsbygger, git-øyeblikksbilde, brukeradministrasjon og referansemålingsverktøy som distribueres separat fra WordPress.org-versjonen

### Forbedret {#improved}

- **Oppsett av administrert Superdav-tjeneste** — legg til hostede tjenesteendepunkter og automatisk tilkoblingsklargjøring for støttede nettsteder
- **Utgivelsespakking** — bygg separate core- og Advanced-ZIP-er, publiser begge på GitHub, og send bare core-pakken til WordPress.org

### Rettet {#fixed}

- **Pålitelighet for AI-forespørsler** — forbedre modellvalg, tidsavbrudd for forespørsler, standard oppsettsmodell, håndtering av resonneringstekst og veiledning for nye forsøk ved ugyldige verktøykall
- **Kalender- og påminnelsesherding** — styrk Google Calendar-tokens og deduplisering av påminnelser
- **Onboarding og gjenopptakelse av godkjenninger** — rett oppstart av onboarding i frontend og gjenopptakelse av bekreftede evner
- **Gjennomgangsproblemer med WordPress.org-pakking** — håndter tilbakemeldinger fra pakkegjennomgang for core-utgivelsen

## 1.16.0 — Utgitt 2026-05-20 {#1160--released-on-2026-05-20}

### Nytt {#new-1}

- **Evne til å generere Logo SVG** — Theme Builder kan nå generere og bygge inn tilpassede logo-SVG-er med navneromssikker sanitisering
- **Fotoopplasting i oppdagelsesintervju** — Theme Builder-oppdagelsesintervju inkluderer nå et trinn for fotoopplasting for rikere designkontekst
- **Evne til å validere palettkontrast** — sjekk fargepar for WCAG-samsvar før de brukes på et theme
- **Serveringsmenyer** — Theme Builder kan nå generere strukturerte sider for mat- og drikkemenyer for serveringsbedrifter
- **Forhåndsvisningsgjengivelse for desktop og mobil** — forhåndsvis designet ditt på desktop- og mobilenheter under valg av designretning
- **Parameter for navigasjonsetikett** — Create Menu-evnen støtter nå en egen `navigation_label` separat fra sidetittelen
- **Tilgjengelighet for nivå 1-verktøy** — sd-ai-agent/site-scrape er nå et nivå 1-verktøy som er tilgjengelig som standard i Theme Builder

### Rettet {#fixed-1}

- **AI Client-cache** — støttes nå av transients for vedvarende lagring på tvers av forespørsler, noe som hindrer datatap ved langvarige agentoppgaver
- **Handlingslenker i programtilleggsrad** — korrigert og omdøpt for tydelighet

## 1.10.0 — Utgitt 2026-05-05 {#1100--released-on-2026-05-05}

### Nytt {#new-2}

- **Tavily-internettsøk** — legg til Tavily som søkeleverandør for rikere internettsøkeresultater sammen med Brave Search
- **Theme-bevisste innebygde ferdigheter** — ferdighetsveiledninger for Block Themes, Classic Themes, Kadence Blocks og Kadence Theme leveres nå med programtillegget
- **Kontakt skjema-evne for nettstedbygger** — legg til et kontaktskjema på hvilken som helst side direkte fra chat-grensesnittet

### Forbedret {#improved-1}

- **WooCommerce-integrasjon omarbeidet** — bruker nå innebygde WooCommerce-API-er for bedre pålitelighet og kompatibilitet
- **Leverandørliste oppdateres automatisk** — når et programtillegg aktiveres eller deaktiveres

### Rettet {#fixed-2}

- **navigate-to-evne** — rettet uendelig omlastingsløkke på enkelte admin-sider
- **list-posts-evne** — løser nå kategorinavn og stikkordnavn korrekt til slugs
- **WP-CLI-kommandoer** — gjenopprettet manglende namespace-aliaser etter en tidligere omarbeiding
- **Hendelsesautomatisering** — håndterer på en ryddig måte nettsteder der automatiseringstabeller ennå ikke er opprettet
- **memory-save-evne** — bruker nå riktig namespace-prefiks i byggeren for systeminstruksjoner
- **Skalare verktøyresultater** — pakkes nå korrekt inn før de returneres til AI
- **Bruksstatistikk** — håndterer nå korrekt det eldre evnenøkkelformatet ved oppgradering fra eldre versjoner
