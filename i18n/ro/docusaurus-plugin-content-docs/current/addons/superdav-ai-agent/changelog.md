---
title: Istoric de modificări
sidebar_position: 5
_i18n_hash: d18a5d0a6c766913ed5d348b54dd6acc
---
# Istoric de versiuni

## 1.16.0 — Lansat pe 2026-05-20

### Noutăți

- **Funcționalitatea de generare a SVG-urilor de logo** — Theme Builder poate genera și încorpora acum SVG-uri de logo personalizate, cu sanitizare sigură la nivel de namespace.
- **Urcarea foto în interviul de descoperire** — Interviul de descoperire din Theme Builder include acum un pas de urcare a foto pentru un context de design mai bogat.
- **Funcționalitatea de validare a contrastului paletei** — Verifică perechile de culori pentru conformitatea WCAG înainte de a le aplica unei teme.
- **Meniuri pentru industria ospitalității** — Theme Builder poate genera acum pagini structurate de meniuri de alimente și băuturi pentru afacerile din domeniul ospitalității.
- **Vizualizarea pe desktop și mobil** — Preview-ți designul pe dispozitive desktop și mobile în timpul selecției direcției de design.
- **Parametrul eticheta de navigare** — Funcționalitatea Create Menu suportă acum o `navigation_label` distinctă de titlul paginii.
- **Disponibilitatea instrumentelor de Nivel 1** — sd-ai-agent/site-scrape este acum un instrument de Nivel 1, disponibil implicit în Theme Builder.

### Corecții

- **Cache-ul clientului AI** — Acum este susținut de *transients* pentru persistență între cereri, prevenind pierderea datelor la sarcini lungi ale agentului.
- **Link-urile de acțiune ale rândurilor de plugin-uri** — Corectate și redenumite pentru claritate.

## 1.10.0 — Lansat pe 2026-05-05

### Noutăți

- **Căutarea pe internet cu Tavily** — Adaugă Tavily ca furnizor de căutare pentru rezultate de căutare pe internet mai bogate, alături de Brave Search.
- **Seturi de abilități integrate, conștiente de temă** — Block Themes, Classic Themes, Kadence Blocks și ghidurile de abilități Kadence Theme vin acum cu plugin-ul.
- **Funcționalitatea formular de contact pentru constructorul de site-uri** — Adaugă un formular de contact oricărei pagini direct din interfața de chat.

### Îmbunătățiri

- **Integrarea WooCommerce refactorizată** — Folosește acum API-urile native WooCommerce pentru o fiabilitate și o compatibilitate mai bune.
- **Lista de furnizori se actualizează automat** — Când se activează sau se dezactivează un plugin.

### Corecții

- **Funcționalitatea navigate-to** — Corectat bucla infinite de reîncărcare pe unele pagini de administrare.
- **Funcționalitatea list-posts** — Rezolvă acum corect numele categoriilor și tag-urilor în *slug-uri*.
- **Comenzile WP-CLI** — Restaurate aliasurile de namespace lipsă după o refactorizare anterioară.
- **Automatizarea evenimentelor** — Gestionează cu grație site-urile unde tabelele de automatizare nu au fost încă create.
- **Funcționalitatea memory-save** — Folosește acum prefixul de namespace corect în constructorul de instrucțiuni sistem.
- **Rezultatele instrumentului Scalar** — Sunt acum încapsulate corect înainte de a fi returnate către AI.
- **Statistici de utilizare** — Gestionează acum corect formatul vechi al cheii de abilitate la actualizare de la versiuni mai vechi.
