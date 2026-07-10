---
title: Reġistru tal-bidliet
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Reġistru tal-bidliet {#changelog}

## 1.18.0 — Maħruġ fit-2026-06-29 {#1180--released-on-2026-06-29}

### Ġdid {#new}

- **Għodod Google Calendar** — aqra kalendarji u avvenimenti kkonfigurati għal awtomazzjonijiet konxji tal-iskeda
- **Immappjar tal-kuntatti u helpers għall-attendees** — qabbel parteċipanti tal-kalendarju ma' utenti u kuntatti tas-sit
- **Bibien ta' approvazzjoni umana u rekords ta' tfakkiriet** — waqqaf l-awtomazzjonijiet għal rieżami u evita notifiki duplikati
- **Fornitur SMS TextBee** — ibgħat notifiki kkonfigurati ta' messaġġi testwali permezz ta' TextBee
- **Pakkett avvanzat ta' akkumpanjament** — żid għodod ta' sistema tal-fajls għal żviluppaturi fdati, database, WP-CLI, dispatcher REST, bennej tal-plugins, snapshot git, ġestjoni tal-utenti, u benchmark imqassma separatament mill-binja ta' WordPress.org

### Imtejjeb {#improved}

- **Twaqqif tas-servizz immaniġġjat Superdav** — żid endpoints tas-servizz ospitat u proviżjonament awtomatiku tal-konnessjoni għal siti appoġġjati
- **Ippakkjar tar-rilaxx** — ibni ZIPs separati għall-qalba u Advanced, ippubblika t-tnejn fuq GitHub, u ibgħat biss il-pakkett tal-qalba lil WordPress.org

### Irranġat {#fixed}

- **Affidabbiltà tat-talbiet AI** — ittejjeb l-għażla tal-mudell, timeouts tat-talbiet, mudell predefinit tat-twaqqif, trattament tat-test tar-raġunament, u gwida għal tentattivi mill-ġdid għal sejħiet ta' għodod invalidi
- **Tisħiħ tal-kalendarju u t-tfakkiriet** — saħħaħ it-tokens ta' Google Calendar u d-deduplication tat-tfakkiriet
- **Onboarding u tkomplija tal-approvazzjonijiet** — irranġa t-tnedijiet tal-onboarding fil-frontend u t-tkomplija tal-abilitajiet ikkonfermati
- **Kwistjonijiet ta' rieżami tal-ippakkjar ta' WordPress.org** — indirizza feedback tar-rieżami tal-ippakkjar għar-rilaxx tal-qalba

## 1.16.0 — Maħruġ fl-2026-05-20 {#1160--released-on-2026-05-20}

### Ġdid {#new-1}

- **Abilità Generate Logo SVG** — Theme Builder issa jista' jiġġenera u jinkorpora SVGs ta' logo personalizzati b'sanitizzazzjoni sigura għan-namespace
- **Tlugħ ta' ritratt fl-intervista ta' skoperta** — l-intervista ta' skoperta ta' Theme Builder issa tinkludi pass ta' tlugħ ta' ritratt għal kuntest tad-disinn aktar għani
- **Abilità Validate Palette Contrast** — iċċekkja pari ta' kuluri għall-konformità ma' WCAG qabel tapplikahom għal tema
- **Menus għall-ospitalità** — Theme Builder issa jista' jiġġenera paġni strutturati ta' menus tal-ikel u x-xorb għal negozji tal-ospitalità
- **Rendering ta' preview fuq desktop u mobile** — ara preview tad-disinn tiegħek fuq apparati desktop u mobile waqt l-għażla tad-direzzjoni tad-disinn
- **Parametru tat-tikketta tan-navigazzjoni** — l-abilità Create Menu issa tappoġġja `navigation_label` distint separat mit-titlu tal-paġna
- **Disponibbiltà ta' għodda Tier 1** — sd-ai-agent/site-scrape issa hija għodda Tier 1 disponibbli b'mod predefinit f'Theme Builder

### Irranġat {#fixed-1}

- **Cache tal-AI Client** — issa appoġġjat minn transients għal persistenza bejn talbiet, biex jipprevjeni telf ta' data fuq kompiti twal tal-agent
- **Links tal-azzjonijiet tar-ringiela tal-plugin** — ikkoreġuti u msemmija mill-ġdid għal ċarezza

## 1.10.0 — Maħruġ fil-2026-05-05 {#1100--released-on-2026-05-05}

### Ġdid {#new-2}

- **Tfittxija fuq l-internet Tavily** — żid Tavily bħala fornitur tat-tfittxija għal riżultati tat-tfittxija fuq l-internet aktar għonja flimkien ma' Brave Search
- **Ħiliet inkorporati konxji tat-tema** — gwidi tal-ħiliet għal Block Themes, Classic Themes, Kadence Blocks, u Kadence Theme issa jiġu mal-plugin
- **Abilità tal-formola ta' kuntatt tal-bennej tas-sit** — żid formola ta' kuntatt ma' kwalunkwe paġna direttament mill-interface taċ-chat

### Imtejjeb {#improved-1}

- **Integrazzjoni WooCommerce ristrutturata** — issa tuża APIs nattivi ta' WooCommerce għal affidabbiltà u kompatibbiltà aħjar
- **Il-lista tal-fornituri tiġġedded awtomatikament** — meta kwalunkwe plugin jiġi attivat jew diżattivat

### Irranġat {#fixed-2}

- **Abilità navigate-to** — irranġat loop infinit ta' reload fuq xi paġni tal-admin
- **Abilità list-posts** — issa tirriżolvi b'mod korrett ismijiet ta' kategoriji u tags għal slugs
- **Kmandi WP-CLI** — restawrati aliases tan-namespace neqsin wara ristrutturar preċedenti
- **Awtomazzjoni tal-avvenimenti** — timmaniġġja b'mod eleganti siti fejn it-tabelli tal-awtomazzjoni għadhom ma nħolqux
- **Abilità memory-save** — issa tuża l-prefiss korrett tan-namespace fil-bennej tal-istruzzjoni tas-sistema
- **Riżultati skalari tal-għodod** — issa mgeżwra b'mod korrett qabel jintbagħtu lura lill-AI
- **Statistika tal-użu** — issa timmaniġġja b'mod korrett il-format antik taċ-ċavetta tal-abilità waqt upgrade minn verżjonijiet eqdem
