---
title: Daim ntawv teev kev hloov pauv
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Daim ntawv hloov tshiab

## 1.18.0 — Tso tawm rau 2026-06-29 {#1180--released-on-2026-06-29}

### Tshiab {#new}

- **Google Calendar tools** — nyeem cov calendar thiab cov xwm txheej uas tau teeb tsa rau kev automation uas paub txog sijhawm
- **Kev phim contact thiab cov cuab yeej pab attendee** — phim cov neeg koom calendar rau cov neeg siv thiab cov contact hauv site
- **Cov rooj vag kom tib neeg pom zoo thiab cov ntaub ntawv reminder** — nres automations ib ntus rau kev tshuaj xyuas thiab zam kev xa ntawv ceeb toom rov qab
- **TextBee SMS provider** — xa cov kev ceeb toom text-message uas tau teeb tsa los ntawm TextBee
- **Pob companion qib siab** — ntxiv cov cuab yeej trusted-developer filesystem, database, WP-CLI, REST dispatcher, plugin builder, git snapshot, user-management, thiab benchmark uas faib tawm nyias ntawm WordPress.org build

### Txhim kho {#improved}

- **Kev teeb tsa managed Superdav service** — ntxiv hosted service endpoints thiab kev tsim connection provisioning tsis siv neeg rau cov sites uas txhawb nqa
- **Kev ntim release** — tsim core thiab Advanced ZIPs nyias, tshaj tawm ob qho hauv GitHub, thiab xa tsuas yog core package mus rau WordPress.org

### Kho lawm {#fixed}

- **Kev ntseeg tau ntawm AI request** — txhim kho model selection, request timeouts, default setup model, reasoning-text handling, thiab retry guidance rau tool calls uas siv tsis tau
- **Kev ruaj khov rau calendar thiab reminder** — ntxiv zog rau Google Calendar tokens thiab reminder deduplication
- **Onboarding thiab kev rov pib approval** — kho frontend onboarding launches thiab confirmed ability resumes
- **Cov teeb meem WordPress.org packaging review** — daws packaging review feedback rau core release

## 1.16.0 — Tso tawm rau 2026-05-20 {#1160--released-on-2026-05-20}

### Tshiab {#new-1}

- **Generate Logo SVG ability** — Theme Builder tam sim no tsim tau thiab embed custom logo SVGs nrog namespace-safe sanitisation
- **Kev upload duab hauv discovery interview** — Theme Builder discovery interview tam sim no muaj ib theem photo upload rau design context uas nplua nuj dua
- **Validate Palette Contrast ability** — xyuas cov khub colour kom raws WCAG compliance ua ntej siv rau ib theme
- **Hospitality menus** — Theme Builder tam sim no tsim tau cov nplooj menu zaub mov thiab dej haus uas muaj qauv rau cov lag luam hospitality
- **Kev render preview rau desktop thiab mobile** — saib ua ntej koj design ntawm desktop thiab mobile devices thaum xaiv design-direction
- **Navigation label parameter** — Create Menu ability tam sim no txhawb `navigation_label` uas cais ntawm page title
- **Tier 1 tool availability** — sd-ai-agent/site-scrape tam sim no yog ib Tier 1 tool uas muaj siv los ntawm default hauv Theme Builder

### Kho lawm {#fixed-1}

- **AI Client cache** — tam sim no backed by transients rau cross-request persistence, pab tiv thaiv data loss rau agent tasks uas khiav ntev
- **Plugin row action links** — kho lawm thiab hloov npe kom meej dua

## 1.10.0 — Tso tawm rau 2026-05-05 {#1100--released-on-2026-05-05}

### Tshiab {#new-2}

- **Tavily internet search** — ntxiv Tavily ua ib search provider rau internet search results uas nplua nuj dua nrog Brave Search
- **Theme-aware built-in skills** — cov skill guides rau Block Themes, Classic Themes, Kadence Blocks, thiab Kadence Theme tam sim no los nrog plugin
- **Site builder contact form ability** — ntxiv ib contact form rau txhua nplooj ncaj qha ntawm chat interface

### Txhim kho {#improved-1}

- **WooCommerce integration refactored** — tam sim no siv native WooCommerce APIs kom ntseeg tau dua thiab compatibility zoo dua
- **Provider list refreshes automatically** — thaum ib plugin twg raug qhib lossis kaw

### Kho lawm {#fixed-2}

- **navigate-to ability** — kho infinite reload loop ntawm qee nplooj admin
- **list-posts ability** — tam sim no daws category thiab tag names mus rau slugs kom raug
- **WP-CLI commands** — rov qab namespace aliases uas ploj tom qab refactor dhau los
- **Event automation** — gracefully handles sites uas automation tables tseem tsis tau tsim
- **memory-save ability** — tam sim no siv namespace prefix kom raug hauv system instruction builder
- **Scalar tool results** — tam sim no raug qhwv kom raug ua ntej xa rov qab rau AI
- **Usage statistics** — tam sim no tuav tau legacy ability key format kom raug thaum upgrade los ntawm versions qub
