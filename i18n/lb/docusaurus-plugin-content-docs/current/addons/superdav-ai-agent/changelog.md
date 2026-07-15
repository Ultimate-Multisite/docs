---
title: Ännerungsprotokoll
sidebar_position: 5
_i18n_hash: 9747e37b1fd831941c9f86e6c3f85c81
---
# Ännerungsprotokoll

## 1.18.0 — Verëffentlecht den 2026-06-29 {#1180--released-on-2026-06-29}

### Nei {#new}

- **Google Calendar-Wierkzäicher** — konfiguréiert Kalenneren an Evenementer fir plangbewosst Automatiséierunge liesen
- **Kontakt-Zouuerdnung an Helfer fir Participanten** — Kalennerparticipante mat Benotzer vun der Websäit a Kontakter ofgläichen
- **Gaten fir mënschlech Geneemegung an Erënnerungsopzeechnungen** — Automatiséierunge fir Iwwerpréiwung pauséieren an duebel Notifikatioune vermeiden
- **TextBee SMS-Ubidder** — konfiguréiert SMS-Notifikatiounen iwwer TextBee schécken
- **Fortgeschratte Begleetpak** — vertrauenswierdeg-Entwéckler-Dateisystem-, Datebank-, WP-CLI-, REST-Dispatcher-, Erweiderungs-Builder-, Git-Snapshot-, Benotzerverwaltungs- a Benchmark-Wierkzäicher dobäisetzen, déi separat vum WordPress.org-Build verdeelt ginn

### Verbessert {#improved}

- **Ariichtung vum verwaltete Superdav-Service** — gehost Service-Endpunkten an automatesch Verbindungsbereitstellung fir ënnerstëtzt Websäiten dobäisetzen
- **Verëffentlechungsverpakung** — getrennte Kär- an Advanced-ZIPs bauen, allebéid op GitHub publizéieren an nëmmen de Kärpak u WordPress.org schécken

### Behuewen {#fixed}

- **Zouverlässegkeet vun AI-Ufroen** — Modell-Auswiel, Ufro-Timeouten, Standard-Ariichtungsmodell, Ëmgang mat Begrënnungstext an Uleedung fir Nei-Versich bei ongëltege Wierkzäich-Uriff verbesseren
- **Häertung vu Kalenner an Erënnerungen** — Google Calendar-Token an Erënnerungs-Deduplicatioun stäerken
- **Onboarding an Geneemegungs-Fortféierungen** — Frontend-Onboarding-Starten a confirméiert Fäegkeets-Fortféierunge fixéieren
- **WordPress.org-Verpakungs-Iwwerpréiwungsproblemer** — Feedback aus der Verpakungs-Iwwerpréiwung fir d'Kärverëffentlechung ugoen

## 1.16.0 — Verëffentlecht den 2026-05-20 {#1160--released-on-2026-05-20}

### Nei {#new-1}

- **Generate Logo SVG-Fäegkeet** — Theme Builder kann elo personaliséiert Logo-SVGen mat namespace-sécherer Sanitiséierung generéieren an abetten
- **Foto-Eroplueden am Entdeckungsinterview** — Theme Builder-Entdeckungsinterview enthält elo e Foto-Eroplueden-Schrëtt fir méi räichen Design-Kontext
- **Validate Palette Contrast-Fäegkeet** — Faarfpuer op WCAG-Konformitéit iwwerpréiwen, ier se op en Theme applizéiert ginn
- **Gaaschtfrëndschaftsmenüen** — Theme Builder kann elo strukturéiert Iess- a Gedrénksmenü-Säite fir Gaaschtfrëndschaftsbetriber generéieren
- **Virschau-Rendering fir Desktop a Mobil** — kuck deng Design op Desktop- a mobilen Apparater wärend der Auswiel vun der Design-Richtung vir
- **Navigatiounslabel-Parameter** — Create Menu-Fäegkeet ënnerstëtzt elo en eegestännegen `navigation_label`, getrennt vum Säitentitel
- **Disponibilitéit vu Niveau-1-Wierkzäicher** — sd-ai-agent/site-scrape ass elo e Niveau-1-Wierkzäich, dat standardméisseg am Theme Builder disponibel ass

### Behuewen {#fixed-1}

- **AI Client-Cache** — gëtt elo duerch Transienten ënnerstëtzt fir Bestännegkeet iwwer Ufroen ewech, wat Dateverloscht bei laang lafenden Agent-Aufgabe verhënnert
- **Aktiounslinken an Erweiderungsreien** — korrigéiert an ëmbenannt fir méi Kloerheet

## 1.10.0 — Verëffentlecht den 2026-05-05 {#1100--released-on-2026-05-05}

### Nei {#new-2}

- **Tavily-Internetsich** — Tavily als Sich-Ubidder dobäisetzen, fir méi räich Internetsichresultater nieft Brave Search
- **Theme-bewosst agebaute Fäegkeeten** — Fäegkeetsguiden fir Block-Themes, Classic-Themes, Kadence Blocks a Kadence Theme ginn elo mat der Erweiderung matgeliwwert
- **Kontaktformular-Fäegkeet fir Websäite-Builder** — e Kontaktformular direkt aus der Chat-Uewerfläch op all Säit dobäisetzen

### Verbessert {#improved-1}

- **WooCommerce-Integratioun refaktoriséiert** — benotzt elo natierlech WooCommerce-APIs fir besser Zouverlässegkeet a Kompatibilitéit
- **Ubidderlëscht aktualiséiert sech automatesch** — wann eng Erweiderung aktivéiert oder deaktivéiert gëtt

### Behuewen {#fixed-2}

- **navigate-to-Fäegkeet** — onendlech Nei-Lued-Schläif op e puer Admin-Säite fixéiert
- **list-posts-Fäegkeet** — léist elo Kategorie- an Tag-Nimm korrekt a Slugs op
- **WP-CLI-Befehler** — feelend Namespace-Aliassen no enger fréierer Refaktoriséierung restauréiert
- **Evenement-Automatiséierung** — geet propper mat Websäiten ëm, wou Automatiséierungstabellen nach net erstallt sinn
- **memory-save-Fäegkeet** — benotzt elo de richtege Namespace-Prefix am Systeminstruktiouns-Builder
- **Skalar Wierkzäichresultater** — ginn elo korrekt agepaakt, ier se un d'AI zeréckginn
- **Benotzungsstatistiken** — behandelen elo beim Upgrade vun eelere Versiounen dat legacy Fäegkeets-Schlëssel-Format korrekt
