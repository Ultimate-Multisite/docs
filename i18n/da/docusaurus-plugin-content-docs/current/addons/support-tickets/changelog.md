---
title: Support Tickets ændringslog
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Ændringslog for support tickets

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Forbedret: Fjernede vendor/-mappen fra Git-sporing (allerede dækket af .gitignore), hvilket reducerer repository-størrelsen
* Forbedret: Testet op til WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Rettelse: Acceptér null-værdier i nullable ticket model setters
* Rettelse: Gem alle tickets i globale netværksdækkende tabeller for korrekt multisite-understøttelse
* Rettelse: Skjul medarbejderfelter, og ret omdirigering til tom side på kundens formular til ny ticket
* Rettelse: Erstat udefinerede add_meta()-kald med korrekt update_meta() til lagring af metadata
* Rettelse: Erstat uregistreret capability-tjek med korrekt wu_view_all_support_tickets
* Rettelse: Tilføj manglende AJAX-handlers til ticket-status, tildeling og hurtigredigeringshandlinger
* Rettelse: Ret metodenavn til registrering af medarbejdersvar i ticket-visninger
* Rettelse: Konsolidér duplikerede svar-handlers, og afstem nonce-handlingsnavne
* Rettelse: Tilføj manglende frontend-visning for [wu_submit_ticket] shortcode
* Rettelse: Tilføj manglende user_id-kolonne, og ret Support_Ticket::get_user_id()-metoden
* Rettelse: Fjern ekstra dobbeltanførselstegn i option-tag for prioritetsfilter
* Rettelse: Tilføj netværksadmin-panel til ticket-håndtering for superadmins
* Forbedret: Konsolidér admin-CSS i et enkelt eksternt stylesheet
* Forbedret: Fjern Settings-undermenu fra adminmenuen på subsite
* Forbedret: Indlæs kun frontend-assets betinget på support ticket-sider
* Forbedret: Spring plugin-autoloader over, når Bedrock-root-autoloader allerede har indlæst afhængigheder

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Tilføjet: Fuld funktionalitet til visning af tickets for admin og frontend
* Tilføjet: AJAX-handler til indsendelser af ticket-svar
* Tilføjet: Understøttelse af ticket-svarfunktionalitet med korrekt formularhåndtering
* Tilføjet: Korrekt visning af meddelelser for ticket-indsendelser og svar i admin
* Tilføjet: Automatisk ticket-tilknytning til aktuel bruger for kunders egne indsendelser
* Tilføjet: Sikkerhedsforbedring for at forhindre kunder i at tilsidesætte ticket-ejerskab
* Tilføjet: Manglende hjælpefunktioner (wu_format_date, wu_user_can_view_ticket osv.)
* Tilføjet: Korrekt download og håndtering af filvedhæftninger
* Tilføjet: System til e-mailnotifikationer for ticket-svar og statusændringer
* Rettet: Ticket-svarformularen indeholder nu nødvendigt ticket-ID
* Rettet: Problemer med synlighed af meddelelser i admin-ticketvisninger
* Rettet: Syntaksfejl i support ticket-funktioner
* Forbedret: Databasestruktur med korrekte forespørgsels- og skemaklasser til svar og vedhæftninger
* Forbedret: Migrering til rigtige egenskaber i stedet for attributter for ticket-modeller

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Opdateret: Omdøbte præfiks til ultimate-multisite for konsistens
* Opdateret: Standardisering af tekstdomæne
* Rettet: Mindre fejlrettelser og forbedringer

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Første udgivelse
* Komplet ticket-håndteringssystem
* Adgangskontrol på flere niveauer
* Trådet samtalesystem
* Understøttelse af filvedhæftninger
* System til e-mailnotifikationer
* Admin- og kundegrænseflader
* Statistik og rapportering
