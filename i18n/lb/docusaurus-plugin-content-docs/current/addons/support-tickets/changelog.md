---
title: Support-Ticketen Ännerungsprotokoll
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support-Ticketen-Ännerungsprotokoll

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Verbessert: `vendor/`-Verzeechnes aus dem Git-Tracking ewechgeholl (schonn duerch `.gitignore` ofgedeckt), wat d'Gréisst vum Repository reduzéiert
* Verbessert: Getest bis WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Fix: Null-Wäerter an nullable Ticket-Modell-Setters akzeptéieren
* Fix: All Ticketen a globale, netzwierkwäiten Tabellen späicheren, fir richteg Multisite-Ënnerstëtzung
* Fix: Staff-Felder verstoppen an d'Ëmleedung op eng eidel Säit am Formular fir nei Client-Ticketen fixéieren
* Fix: Ond definéiert `add_meta()`-Opriff duerch déi korrekt `update_meta()` fir Metadaten-Späicherung ersetzen
* Fix: Net registréiert Berechtegungspréifung duerch déi korrekt `wu_view_all_support_tickets` ersetzen
* Fix: Feelend AJAX-Handler fir Ticket-Status, Zouweisung a Quick-Edit-Aktiounen derbäisetzen
* Fix: Methodennumm fir d'Erkennung vu Staff-Äntwerten an Ticket-Usiichte korrigéieren
* Fix: Duebel Äntwert-Handler zesummeleeën an Nonce-Aktiounsnimm upassen
* Fix: Feelend Frontend-Usiicht fir `[wu_submit_ticket]`-Shortcode derbäisetzen
* Fix: Feelend `user_id`-Kolonn derbäisetzen an `Support_Ticket::get_user_id()`-Method fixéieren
* Fix: Extra duebelt Uféierungszeechen am Prioritéitsfilter-Optiounstag ewechhuelen
* Fix: Ticket-Verwaltungspanel am Netzwierk-Admin fir Super-Admins derbäisetzen
* Verbessert: Admin-CSS an engem eenzegen externe Stylesheet zesummeleeën
* Verbessert: Settings-Ënnermenü aus dem Subsite-Admin-Menü ewechhuelen
* Verbessert: Frontend-Assets nëmme bedéngt op Support-Ticket-Säite lueden
* Verbessert: Plugin-Autoloader iwwersprangen, wann de Bedrock-Root-Autoloader Ofhängegkeete schonn gelueden huet

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Derbäigesat: Vollstänneg Ticket-Ukuck-Funktionalitéit fir Admin a Frontend
* Derbäigesat: AJAX-Handler fir d'Ofschécke vun Ticket-Äntwerten
* Derbäigesat: Ënnerstëtzung fir Ticket-Äntwert-Funktionalitéit mat korrektem Formular-Handling
* Derbäigesat: Korrekt Notice-Uweisung fir Ticket-Ofschéckungen an Äntwerten am Admin
* Derbäigesat: Automatesch Ticket-Zouuerdnung zum aktuelle Benotzer fir Selbstofschéckunge vu Clienten
* Derbäigesat: Sécherheetsverbesserung, fir ze verhënneren, datt Clienten d'Ticket-Besëtzerschaft iwwerschreiwen
* Derbäigesat: Feelend Hëllefsfunktiounen (`wu_format_date`, `wu_user_can_view_ticket`, asw.)
* Derbäigesat: Korrekte Download an Handling vu Fichier-Uschlëss
* Derbäigesat: E-Mail-Benoriichtegungssystem fir Ticket-Äntwerten a Statusännerungen
* Fixéiert: Ticket-Äntwertformular enthält elo déi néideg Ticket-ID
* Fixéiert: Problemer mat der Siichtbarkeet vu Notices an Admin-Ticket-Usiichten
* Fixéiert: Syntaxfeeler an Support-Ticket-Funktiounen
* Verbessert: Datebankstruktur mat korrekten Query- a Schema-Klassen fir Äntwerten an Uschlëss
* Verbessert: Migratioun op richteg Eegenschaften amplaz vun Attributer fir Ticket-Modeller

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Aktualiséiert: Prefix op `ultimate-multisite` ëmbenannt fir Konsistenz
* Aktualiséiert: Text-Domain-Standardiséierung
* Fixéiert: Kleng Bugfixen a Verbesserungen

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Éischt Verëffentlechung
* Kompletten Ticket-Verwaltungssystem
* Zougrëffskontroll op méi Niveauen
* Gespréichssystem mat Threads
* Ënnerstëtzung fir Fichier-Uschlëss
* E-Mail-Benoriichtegungssystem
* Admin- a Client-Interfaces
* Statistiken a Rapportéierung
