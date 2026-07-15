---
title: Istoric de modificări al Planurilor cu Măsurare
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Jurnal de Modificări pentru Planurile Metrice

Versiunea 1.1.0 - Lansat pe 2026-05-05
- Nou: Facturare pentru token-uri AI pentru sub-site-uri multisite — urmăriți și facturați utilizarea token-urilor AI pe site-urile clienților, cu tarife configurabile pe token.
- Nou: Aplicarea conectorilor reconstruită cu descoperire dinamică a limitelor și scriere în timp real (write-through), asigurând o acuratețe în timp real pe toate conectorii.
- Corectat: Actualizările tabelelor de bază sunt acum aliniate corect cu definițiile schemei BerlinDB, prevenind eșecurile de actualizare la instalările noi.
- Corectat: Callback-urile de actualizare a bazei de date au fost convertite în formatul corect, rezolvând eșecurile silențioase de actualizare.
- Corectat: Valorile fracționare sunt acum acceptate în câmpul de intrare „AI Usage Overage Markup”.
- Corectat: Rezolvate erorile fatale și problemele de inițializare dublă la încărcarea plugin-ului.
- Îmbunătățit: Adăugat script-ul npm check-env, astfel încât mediile de dezvoltare să se configureze singure la prima rulare.

### 1.0.3 {#103}
* Actualizat la Plugin Update Checker v5
* Adăugate anteturi moderne pentru plugin-uri WordPress
* Îmbunătățită compatibilitatea cu cele mai recente versiuni WordPress
* Performanța urmării utilizării îmbunătățită

### 1.0.2 {#102}
* Corectări de bug și îmbunătățiri de performanță
* Raportare a utilizării îmbunătățită

### 1.0.0 {#100}
* Lansarea inițială
* Funcționalitatea de bază de facturare metrice
* Urmărirea utilizării și calculul suprautilizării
* Generarea automată a facturilor
