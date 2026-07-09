---
title: Regjistri i ndryshimeve
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Regjistri i ndryshimeve {#changelog}

## 1.18.0 — Publikuar më 2026-06-29 {#1180--released-on-2026-06-29}

### Të reja {#new}

- **Mjetet Google Calendar** — lexojnë kalendarët dhe ngjarjet e konfiguruara për automatizime të vetëdijshme për orarin
- **Hartëzimi i kontakteve dhe ndihmësit për pjesëmarrësit** — përputhin pjesëmarrësit e kalendarit me përdoruesit dhe kontaktet e sajtit
- **Porta miratimi nga njeriu dhe regjistra kujtuesish** — ndalin automatizimet për rishikim dhe shmangin njoftimet e dyfishta
- **Ofruesi TextBee SMS** — dërgon njoftime të konfiguruara me mesazhe tekst përmes TextBee
- **Paketë shoqëruese e avancuar** — shton mjete për sistem skedarësh të zhvilluesit të besuar, bazë të dhënash, WP-CLI, dërgues REST, ndërtues plugin-i, snapshot git, menaxhim përdoruesish dhe benchmark, të shpërndara veçmas nga ndërtimi i WordPress.org

### Përmirësuar {#improved}

- **Konfigurimi i shërbimit të menaxhuar Superdav** — shton endpoint-e shërbimi të hostuar dhe sigurim automatik lidhjeje për sajtet e mbështetura
- **Paketimi i publikimit** — ndërton ZIP-e të veçanta për core dhe Advanced, i publikon të dyja në GitHub dhe dërgon vetëm paketën core te WordPress.org

### Rregulluar {#fixed}

- **Besueshmëria e kërkesave AI** — përmirëson përzgjedhjen e modelit, timeout-et e kërkesave, modelin e parazgjedhur të konfigurimit, trajtimin e tekstit të arsyetimit dhe udhëzimet për riprovim për thirrje të pavlefshme mjetesh
- **Forcimi i kalendarit dhe kujtuesve** — forcon token-ët e Google Calendar dhe deduplikimin e kujtuesve
- **Onboarding dhe rifillimet pas miratimit** — rregullon nisjet e onboarding-ut në frontend dhe rifillimet e aftësive të konfirmuara
- **Çështje të rishikimit të paketimit në WordPress.org** — adreson komentet e rishikimit të paketimit për publikimin core

## 1.16.0 — Publikuar më 2026-05-20 {#1160--released-on-2026-05-20}

### Të reja {#new-1}

- **Aftësia Generate Logo SVG** — Theme Builder tani mund të gjenerojë dhe të ngulisë SVG logoje të personalizuara me pastrim të sigurt për namespace
- **Ngarkimi i fotografisë në intervistën e zbulimit** — intervista e zbulimit e Theme Builder tani përfshin një hap ngarkimi fotografie për kontekst më të pasur dizajni
- **Aftësia Validate Palette Contrast** — kontrollon çiftet e ngjyrave për përputhshmëri me WCAG përpara se të aplikohen në një theme
- **Menu për mikpritje** — Theme Builder tani mund të gjenerojë faqe të strukturuara menusë ushqimesh dhe pijesh për bizneset e mikpritjes
- **Renderimi i pamjes paraprake për desktop dhe celular** — shikoni paraprakisht dizajnin tuaj në pajisje desktop dhe celulare gjatë përzgjedhjes së drejtimit të dizajnit
- **Parametri i etiketës së navigimit** — aftësia Create Menu tani mbështet një `navigation_label` të veçantë, të ndarë nga titulli i faqes
- **Disponueshmëria e mjeteve Tier 1** — sd-ai-agent/site-scrape tani është një mjet Tier 1 i disponueshëm si parazgjedhje në Theme Builder

### Rregulluar {#fixed-1}

- **Cache i AI Client** — tani mbështetet nga transient-et për qëndrueshmëri ndërmjet kërkesave, duke parandaluar humbjen e të dhënave në detyrat e gjata të agent-it
- **Lidhjet e veprimeve në rreshtin e plugin-it** — u korrigjuan dhe u riemërtuan për qartësi

## 1.10.0 — Publikuar më 2026-05-05 {#1100--released-on-2026-05-05}

### Të reja {#new-2}

- **Kërkimi në internet Tavily** — shton Tavily si ofrues kërkimi për rezultate më të pasura kërkimi në internet krahas Brave Search
- **Aftësi të integruara të vetëdijshme për theme** — udhëzuesit e aftësive për Block Themes, Classic Themes, Kadence Blocks dhe Kadence Theme tani vijnë bashkë me plugin-in
- **Aftësia e formularit të kontaktit për ndërtuesin e sajtit** — shton një formular kontakti në çdo faqe drejtpërdrejt nga ndërfaqja e bisedës

### Përmirësuar {#improved-1}

- **Integrimi WooCommerce i ristrukturuar** — tani përdor API-të native të WooCommerce për besueshmëri dhe përputhshmëri më të mirë
- **Lista e ofruesve rifreskohet automatikisht** — kur aktivizohet ose çaktivizohet çfarëdo plugin-i

### Rregulluar {#fixed-2}

- **aftësia navigate-to** — rregulloi ciklin e pafund të ringarkimit në disa faqe administrimi
- **aftësia list-posts** — tani zgjidh saktë emrat e kategorive dhe etiketave në slugs
- **Komandat WP-CLI** — riktheu alias-et e munguar të namespace pas një ristrukturimi të mëparshëm
- **Automatizimi i ngjarjeve** — trajton me elegancë sajtet ku tabelat e automatizimit ende nuk janë krijuar
- **aftësia memory-save** — tani përdor prefiksin e saktë të namespace në ndërtuesin e udhëzimeve të sistemit
- **Rezultatet skalare të mjeteve** — tani mbështillen saktë përpara se t’i kthehen AI-së
- **Statistikat e përdorimit** — tani trajtojnë saktë formatin e vjetër të çelësit të aftësisë gjatë përditësimit nga versionet më të vjetra
