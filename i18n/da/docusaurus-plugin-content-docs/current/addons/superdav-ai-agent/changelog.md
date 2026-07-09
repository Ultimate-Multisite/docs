---
title: Ændringslog
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Ændringslog {#changelog}

## 1.18.0 — Udgivet den 2026-06-29 {#1180--released-on-2026-06-29}

### Nyt {#new}

- **Google Calendar-værktøjer** — læs konfigurerede kalendere og begivenheder til tidsplanbevidste automatiseringer
- **Kontaktkortlægning og deltagerhjælpere** — match kalenderdeltagere med webstedets brugere og kontakter
- **Menneskelige godkendelsesporte og påmindelsesposter** — sæt automatiseringer på pause til gennemgang, og undgå dublerede notifikationer
- **TextBee SMS-udbyder** — send konfigurerede sms-notifikationer via TextBee
- **Avanceret ledsagepakke** — tilføj værktøjer til filsystem, database, WP-CLI, REST-dispatcher, plugin-bygger, git-snapshot, brugerstyring og benchmark for betroede udviklere, distribueret separat fra WordPress.org-buildet

### Forbedret {#improved}

- **Opsætning af administreret Superdav-tjeneste** — tilføj hostede tjenesteendpoints og automatisk forbindelsesklargøring for understøttede websteder
- **Udgivelsespakning** — byg separate kerne- og Advanced-ZIP'er, udgiv begge på GitHub, og send kun kernepakken til WordPress.org

### Rettet {#fixed}

- **AI-anmodningspålidelighed** — forbedr modelvalg, anmodningstimeouts, standardopsætningsmodel, håndtering af ræsonnementstekst og vejledning til genforsøg ved ugyldige værktøjskald
- **Kalender- og påmindelseshærdning** — styrk Google Calendar-tokens og deduplikering af påmindelser
- **Onboarding og genoptagelse efter godkendelse** — ret frontend-onboardingstarter og genoptagelse af bekræftede evner
- **Gennemgangsproblemer med WordPress.org-pakning** — håndter feedback fra pakningsgennemgangen for kerneudgivelsen

## 1.16.0 — Udgivet den 2026-05-20 {#1160--released-on-2026-05-20}

### Nyt {#new-1}

- **Generate Logo SVG-evne** — Theme Builder kan nu generere og indlejre brugerdefinerede logo-SVG'er med namespace-sikker sanitering
- **Foto-upload i opdagelsesinterview** — Theme Builder-opdagelsesinterviewet inkluderer nu et foto-upload-trin for rigere designkontekst
- **Validate Palette Contrast-evne** — tjek farvepar for WCAG-overholdelse, før de anvendes på et theme
- **Hospitality-menuer** — Theme Builder kan nu generere strukturerede mad- og drikkemenusider til hospitality-virksomheder
- **Rendering af desktop- og mobilforhåndsvisning** — forhåndsvis dit design på desktop- og mobilenheder under valg af designretning
- **Parameter for navigationsetiket** — Create Menu-evnen understøtter nu en separat `navigation_label`, adskilt fra sidetitlen
- **Tilgængelighed af Tier 1-værktøj** — sd-ai-agent/site-scrape er nu et Tier 1-værktøj, der er tilgængeligt som standard i Theme Builder

### Rettet {#fixed-1}

- **AI Client-cache** — understøttes nu af transients for persistens på tværs af anmodninger, hvilket forhindrer datatab ved langvarige agentopgaver
- **Handlingslinks i plugin-række** — rettet og omdøbt for klarhed

## 1.10.0 — Udgivet den 2026-05-05 {#1100--released-on-2026-05-05}

### Nyt {#new-2}

- **Tavily-internetsøgning** — tilføj Tavily som søgeudbyder for rigere internetsøgeresultater sammen med Brave Search
- **Theme-bevidste indbyggede færdigheder** — færdighedsguider til Block Themes, Classic Themes, Kadence Blocks og Kadence Theme leveres nu med pluginet
- **Kontaktformular-evne til site builder** — tilføj en kontaktformular til enhver side direkte fra chatgrænsefladen

### Forbedret {#improved-1}

- **WooCommerce-integration refaktoreret** — bruger nu native WooCommerce API'er for bedre pålidelighed og kompatibilitet
- **Udbyderliste opdateres automatisk** — når et plugin aktiveres eller deaktiveres

### Rettet {#fixed-2}

- **navigate-to-evne** — rettede uendelig genindlæsningsløkke på nogle admin-sider
- **list-posts-evne** — opløser nu korrekt kategori- og tagnavne til slugs
- **WP-CLI-kommandoer** — gendannede manglende namespace-aliasser efter en tidligere refaktorering
- **Begivenhedsautomatisering** — håndterer elegant websteder, hvor automatiseringstabeller endnu ikke er oprettet
- **memory-save-evne** — bruger nu det korrekte namespace-præfiks i systeminstruktionsbyggeren
- **Skalære værktøjsresultater** — nu korrekt indpakket, før de returneres til AI
- **Brugsstatistik** — håndterer nu korrekt det ældre evne-nøgleformat ved opgradering fra ældre versioner
