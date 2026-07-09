---
title: Ondersteuningskaartjies-veranderingslogboek
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Ondersteuningskaartjies-wysigingslog {#support-tickets-changelog}

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Verbeter: vendor/-gids uit Git-nasporing verwyder (reeds deur .gitignore gedek), wat die repository-grootte verminder
* Verbeter: Getoets tot by WordPress 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Regstelling: Aanvaar null-waardes in nullable kaartjiemodel-setters
* Regstelling: Stoor alle kaartjies in globale netwerk-wye tabelle vir behoorlike multisite-ondersteuning
* Regstelling: Versteek personeelvelde en stel leëbladsy-herleiding op kliënt se nuwe-kaartjie-vorm reg
* Regstelling: Vervang ongedefinieerde add_meta()-oproepe met korrekte update_meta() vir metadataberging
* Regstelling: Vervang ongeregistreerde vermoëkontrole met korrekte wu_view_all_support_tickets
* Regstelling: Voeg ontbrekende AJAX-handlers by vir kaartjiestatus-, toewysings- en vinnig-redigeer-aksies
* Regstelling: Korrigeer metodenaam vir personeelreaksie-opsporing in kaartjie-aansigte
* Regstelling: Konsolideer duplikaat antwoord-handlers en belyn nonce-aksiename
* Regstelling: Voeg ontbrekende voorkant-aansig vir [wu_submit_ticket]-kortkode by
* Regstelling: Voeg ontbrekende user_id-kolom by en stel Support_Ticket::get_user_id()-metode reg
* Regstelling: Verwyder ekstra dubbelaanhalingsteken in prioriteitsfilter-opsie-etiket
* Regstelling: Voeg netwerkadministrasie-kaartjiebestuurpaneel vir superadministrateurs by
* Verbeter: Konsolideer admin-CSS in ’n enkele eksterne stylblad
* Verbeter: Verwyder Settings-subkieslys uit subsite-administrasiekieslys
* Verbeter: Laai voorkant-bates voorwaardelik slegs op ondersteuningskaartjiebladsye
* Verbeter: Slaan plugin-autoloader oor wanneer Bedrock-wortel-autoloader reeds afhanklikhede gelaai het

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Bygevoeg: Volledige kaartjiekyk-funksionaliteit vir administrateur en voorkant
* Bygevoeg: AJAX-handler vir indiening van kaartjie-antwoorde
* Bygevoeg: Ondersteuning vir kaartjie-antwoordfunksionaliteit met behoorlike vormhantering
* Bygevoeg: Behoorlike kennisgewingvertoning vir kaartjie-indienings en antwoorde in admin
* Bygevoeg: Outomatiese kaartjie-assosiasie met huidige gebruiker vir kliënt-selfindienings
* Bygevoeg: Sekuriteitsverbetering om te voorkom dat kliënte kaartjie-eienaarskap oorskryf
* Bygevoeg: Ontbrekende helperfunksies (wu_format_date, wu_user_can_view_ticket, ens.)
* Bygevoeg: Behoorlike lêeraanhegsel-aflaai en -hantering
* Bygevoeg: E-poskennisgewingstelsel vir kaartjie-antwoorde en statusveranderings
* Reggestel: Kaartjie-antwoordvorm sluit nou noodsaaklike kaartjie-ID in
* Reggestel: Kennisgewingsigbaarheidsprobleme in admin-kaartjie-aansigte
* Reggestel: Sintaksfoute in ondersteuningskaartjie-funksies
* Verbeter: Databasisstruktuur met behoorlike navraag- en skemaklasse vir reaksies en aanhegsels
* Verbeter: Migrasie na werklike eienskappe in plaas van attribute vir kaartjiemodelle

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Opgedateer: Voorvoegsel na ultimate-multisite hernoem vir konsekwentheid
* Opgedateer: Standaardisering van teksdomein
* Reggestel: Klein foutregstellings en verbeterings

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* Aanvanklike vrystelling
* Volledige kaartjiebestuurstelsel
* Meervlak-toegangsbeheer
* Gestruktureerde gesprekstelsel
* Lêeraanhegsel-ondersteuning
* E-poskennisgewingstelsel
* Administrateur- en kliëntkoppelvlakke
* Statistieke en verslagdoening
