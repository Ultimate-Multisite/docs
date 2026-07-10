---
title: Supporttickets changelog
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Supporttickets-changelog {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Verbeterd: vendor/-directory verwijderd uit Git-tracking (al gedekt door .gitignore), waardoor de repositorygrootte is verminderd
* Verbeterd: Getest tot WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Oplossing: Null-waarden accepteren in nullable ticketmodel-setters
* Oplossing: Alle tickets opslaan in globale netwerkbrede tabellen voor correcte multisite-ondersteuning
* Oplossing: Staff-velden verbergen en redirect naar lege pagina op het klantformulier voor nieuw ticket herstellen
* Oplossing: Ongedefinieerde add_meta()-aanroepen vervangen door correcte update_meta() voor metadata-opslag
* Oplossing: Niet-geregistreerde capability-controle vervangen door correcte wu_view_all_support_tickets
* Oplossing: Ontbrekende AJAX-handlers toevoegen voor ticketstatus-, toewijzings- en quick-edit-acties
* Oplossing: Correcte methodenaam voor staff-reactiedetectie in ticketweergaven
* Oplossing: Dubbele reactiehandlers consolideren en nonce-actienamen op elkaar afstemmen
* Oplossing: Ontbrekende frontend-weergave toevoegen voor [wu_submit_ticket]-shortcode
* Oplossing: Ontbrekende user_id-kolom toevoegen en Support_Ticket::get_user_id()-methode herstellen
* Oplossing: Extra dubbel aanhalingsteken verwijderen in option-tag van prioriteitsfilter
* Oplossing: Ticketbeheerpaneel in netwerkbeheer toevoegen voor superbeheerders
* Verbeterd: Admin-CSS geconsolideerd in één externe stylesheet
* Verbeterd: Settings-submenu verwijderd uit het subsite-beheermenu
* Verbeterd: Frontend-assets alleen voorwaardelijk laden op supportticketpagina’s
* Verbeterd: Plugin-autoloader overslaan wanneer Bedrock-root-autoloader afhankelijkheden al heeft geladen

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Toegevoegd: Volledige ticketweergavefunctionaliteit voor admin en frontend
* Toegevoegd: AJAX-handler voor het indienen van ticketreacties
* Toegevoegd: Ondersteuning voor ticketreactiefunctionaliteit met correcte formulierafhandeling
* Toegevoegd: Correcte meldingweergave voor ticketindieningen en reacties in admin
* Toegevoegd: Automatische ticketkoppeling met huidige gebruiker voor zelfindieningen door klanten
* Toegevoegd: Beveiligingsverbetering om te voorkomen dat klanten ticketeigenaarschap overschrijven
* Toegevoegd: Ontbrekende hulpfuncties (wu_format_date, wu_user_can_view_ticket, enz.)
* Toegevoegd: Correct downloaden en afhandelen van bestandsbijlagen
* Toegevoegd: E-mailmeldingssysteem voor ticketreacties en statuswijzigingen
* Opgelost: Ticketreactieformulier bevat nu de noodzakelijke ticket-ID
* Opgelost: Problemen met zichtbaarheid van meldingen in admin-ticketweergaven
* Opgelost: Syntaxfouten in supportticketfuncties
* Verbeterd: Databasestructuur met correcte query- en schemaklassen voor reacties en bijlagen
* Verbeterd: Migratie naar echte eigenschappen in plaats van attributen voor ticketmodellen

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Bijgewerkt: Prefix hernoemd naar ultimate-multisite voor consistentie
* Bijgewerkt: Standaardisatie van text domain
* Opgelost: Kleine bugfixes en verbeteringen

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Eerste release
* Compleet ticketbeheersysteem
* Toegangscontrole op meerdere niveaus
* Gestructureerd conversatiesysteem met threads
* Ondersteuning voor bestandsbijlagen
* E-mailmeldingssysteem
* Interfaces voor admin en klant
* Statistieken en rapportage
