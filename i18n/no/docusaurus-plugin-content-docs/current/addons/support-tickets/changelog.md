---
title: Support Tickets Endringslogg
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Endringslogg for Support Tickets {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Forbedret: Fjernet `vendor/`-mappen fra Git-sporing (dette dekkes allerede av `.gitignore`), noe som reduserer størrelsen på repositoryet.
* Forbedret: Testet opp til WordPress 7.0.

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Løst: Aksepterer null-verdier i setterne for nullbare ticket-modeller.
* Løst: Lagrer alle tickets i globale, nettverksomspennende tabeller for korrekt multisite-støtte.
* Løst: Skjuler staff-felt og fikser blank-side-omdirigering på kundens `new-ticket`-skjema.
* Løst: Erstatter udefinerte `add_meta()`-kall med korrekte `update_meta()` for metadata-lagring.
* Løst: Erstatter ukjent capability-sjekk med korrekt `wu_view_all_support_tickets`.
* Løst: Legger til manglende AJAX-håndterere for ticket-status, tildeling og rask redigering.
* Løst: Korrigerer metodenavnet for oppdagelse av staff-svar i ticket-visninger.
* Løst: Konsoliderer dupliserte svarhåndterere og justerer nonce-handlingsnavnene.
* Løst: Legger til manglende frontend-visning for `[wu_submit_ticket]` shortcode.
* Løst: Legger til manglende `user_id`-kolonne og fikser metoden `Support_Ticket::get_user_id()`.
* Løst: Fjerner ekstra anførselstegn i prioritet-filteralternativet.
* Løst: Legger til panel for administrasjon av tickets for nettverksadministratorer (super admins).
* Forbedret: Konsoliderer admin CSS i et enkelt eksternt stilark.
* Forbedret: Fjerner Settings-under-menyen fra subsite-admin-menyen.
* Forbedret: Laster kun frontend-ressurser betinget på support ticket-sider.
* Forbedret: Hopper over plugin autoloader når Bedrock root autoloader allerede har lastet inn avhengighetene.

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Lagt til: Full funksjonalitet for visning av tickets for både admin og frontend.
* Lagt til: AJAX-håndterer for innsending av ticket-svar.
* Lagt til: Støtte for funksjonalitet for ticket-svar med korrekt skjema-håndtering.
* Lagt til: Korrekt varslingsvisning for ticket-innsendinger og svar i admin.
* Lagt til: Automatisk tilknytning av ticket til gjeldende bruker ved selvregistrering fra kunden.
* Lagt til: Sikkerhetsforbedring for å hindre at kunder overstyrer eierskapet til en ticket.
* Lagt til: Manglende hjelpefunksjoner (`wu_format_date`, `wu_user_can_view_ticket`, etc.).
* Lagt til: Korrekt nedlasting og håndtering av filvedlegg.
* Lagt til: E-postvarslingssystem for ticket-svar og statusendringer.
* Løst: Ticket-svar-skjemaet inkluderer nå nødvendig ticket ID.
* Løst: Problemer med synlighet av varsler i admin-ticket-visninger.
* Løst: Syntaksfeil i support ticket-funksjonene.
* Forbedret: Databasestruktur med korrekte spørrings- og skjema-klasser for svar og vedlegg.
* Forbedret: Migrering til faktiske egenskaper (real properties) i stedet for attributter for ticket-modeller.

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Oppdatert: Omdøpt prefikset til `ultimate-multisite` for konsistens.
* Oppdatert: Standardisering av tekstdomene.
* Løst: Mindre feilrettinger og forbedringer.

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Første utgivelse
* Komplett system for administrasjon av tickets
* Flernivå tilgangskontroll
* Trådet konversasjonssystem
* Støtte for filvedlegg
* E-postvarslingssystem
* Admin- og kunde-grensesnitt
* Statistikk og rapportering
