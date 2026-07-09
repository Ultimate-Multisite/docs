---
title: Jurnal de modificări
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Jurnal de modificări

## 1.18.0 — Lansat pe 2026-06-29

### Nou

- **Instrumente Google Calendar** — citesc calendarele și evenimentele configurate pentru automatizări conștiente de program
- **Maparea contactelor și ajutoare pentru participanți** — potrivesc participanții din calendar cu utilizatorii și contactele site-ului
- **Porți de aprobare umană și înregistrări de memento** — pun automatizările în pauză pentru revizuire și evită notificările duplicate
- **Furnizor SMS TextBee** — trimite notificări configurate prin mesaje text prin TextBee
- **Pachet companion avansat** — adaugă instrumente de sistem de fișiere pentru dezvoltatori de încredere, bază de date, WP-CLI, dispecer REST, constructor de pluginuri, instantaneu git, gestionare a utilizatorilor și benchmark, distribuite separat față de versiunea WordPress.org

### Îmbunătățit

- **Configurarea serviciului gestionat Superdav** — adaugă endpointuri de serviciu găzduite și provizionare automată a conexiunii pentru site-urile acceptate
- **Împachetarea lansării** — construiește ZIP-uri separate pentru nucleu și Advanced, le publică pe GitHub și trimite doar pachetul de nucleu către WordPress.org

### Remediat

- **Fiabilitatea solicitărilor AI** — îmbunătățește selecția modelului, timeouturile solicitărilor, modelul implicit de configurare, gestionarea textului de raționament și îndrumarea pentru reîncercare în cazul apelurilor de instrumente nevalide
- **Consolidarea calendarului și a mementourilor** — întărește tokenurile Google Calendar și deduplicarea mementourilor
- **Reluări pentru onboarding și aprobări** — remediază lansările de onboarding din frontend și reluările abilităților confirmate
- **Probleme de revizuire a împachetării WordPress.org** — abordează feedbackul de revizuire a împachetării pentru lansarea nucleului

## 1.16.0 — Lansat pe 2026-05-20

### Nou

- **Abilitatea Generate Logo SVG** — Theme Builder poate acum genera și încorpora SVG-uri de logo personalizate cu sanitizare sigură pentru namespace
- **Încărcare de fotografie în interviul de descoperire** — interviul de descoperire Theme Builder include acum un pas de încărcare a unei fotografii pentru un context de design mai bogat
- **Abilitatea Validate Palette Contrast** — verifică perechile de culori pentru conformitatea WCAG înainte de aplicarea la o temă
- **Meniuri pentru ospitalitate** — Theme Builder poate acum genera pagini structurate de meniuri cu mâncare și băuturi pentru afaceri din domeniul ospitalității
- **Randare de previzualizare desktop și mobilă** — previzualizează designul pe dispozitive desktop și mobile în timpul selecției direcției de design
- **Parametru pentru eticheta de navigare** — abilitatea Create Menu acceptă acum un `navigation_label` distinct, separat de titlul paginii
- **Disponibilitate instrument Tier 1** — sd-ai-agent/site-scrape este acum un instrument Tier 1 disponibil implicit în Theme Builder

### Remediat

- **Cache AI Client** — acum este susținut de transients pentru persistență între solicitări, prevenind pierderea datelor în sarcinile de agent de lungă durată
- **Linkuri de acțiune pe rândul pluginului** — corectate și redenumite pentru claritate

## 1.10.0 — Lansat pe 2026-05-05

### Nou

- **Căutare pe internet Tavily** — adaugă Tavily ca furnizor de căutare pentru rezultate de căutare pe internet mai bogate, alături de Brave Search
- **Abilități încorporate conștiente de temă** — ghidurile de abilități Block Themes, Classic Themes, Kadence Blocks și Kadence Theme sunt acum livrate împreună cu pluginul
- **Abilitate de formular de contact pentru constructorul de site-uri** — adaugă un formular de contact pe orice pagină direct din interfața de chat

### Îmbunătățit

- **Integrare WooCommerce refactorizată** — acum folosește API-urile native WooCommerce pentru fiabilitate și compatibilitate mai bune
- **Lista de furnizori se reîmprospătează automat** — când orice plugin este activat sau dezactivat

### Remediat

- **Abilitatea navigate-to** — a fost remediată bucla infinită de reîncărcare pe unele pagini de administrare
- **Abilitatea list-posts** — acum rezolvă corect numele categoriilor și etichetelor în sluguri
- **Comenzi WP-CLI** — au fost restaurate aliasurile de namespace lipsă după o refactorizare anterioară
- **Automatizarea evenimentelor** — gestionează elegant site-urile în care tabelele de automatizare nu sunt încă create
- **Abilitatea memory-save** — acum folosește prefixul de namespace corect în constructorul instrucțiunii de sistem
- **Rezultate scalare ale instrumentelor** — acum sunt împachetate corect înainte de a fi returnate către AI
- **Statistici de utilizare** — acum gestionează corect formatul vechi al cheii de abilitate la upgrade de la versiuni mai vechi
