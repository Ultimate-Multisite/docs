---
title: Změnový deník pro supportovací tikety
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Seznam změn pro Support Tickets

### 1.0.4 - 2026-05-05 {#104---2026-05-05}
* Vylepšeno: Vyňato z sledování Git adresáře `vendor/` (je již pokryto souborem .gitignore), čímž se zmenší velikost repozitáře
* Vylepšeno: Otestováno až do WordPressu verze 7.0

### 1.0.3 - 2026-05-01 {#103---2026-05-01}
* Opraveno: Přijetí nulových hodnot v nastavovačích (setters) pro nulovatelné modely ticketů
* Opraveno: Uložení všech ticketů do globálních tabulek pro celou síť (network-wide tables) pro správnou podporu multisite
* Opraveno: Skrytí polí pro zaměstnance a oprava přesměrování na prázdnou stránku v formuláři pro nové tickety zákazníka
* Opraveno: Nahrazení volání `add_meta()` pro nedefinované hodnoty správným `update_meta()` pro ukládání metadat
* Opraveno: Nahrazení kontroly neoznačené schopnosti (capability) správnou funkcí `wu_view_all_support_tickets`
* Opraveno: Přidány chybějící AJAX handlery pro stav ticketu, přiřazení a akce rychlé úpravy
* Opraveno: Korekce názvu metody pro detekci odpovědi zaměstnance v pohledu ticketu
* Opraveno: Konsolidace duplicitních handlerů odpovědí a sladění názvů akcí nonce
* Opraveno: Přidán chybějící frontend pohled pro shortcode `[wu_submit_ticket]`
* Opraveno: Přidání chybějícího sloupce `user_id` a oprava metody `Support_Ticket::get_user_id()`
* Opraveno: Odstranění nadměrného dvojitého uvozovky v tagu možnosti filtru priorit
* Opraveno: Přidán panel pro správu ticketů pro administrátory sítě pro super administrátory
* Vylepšeno: Konsolidace CSS pro administraci do jediného externího souboru
* Vylepšeno: Odstranění podmenu Nastavení z menu administrace podstránky
* Vylepšeno: Podmínkové načítání frontend assetů pouze na stránkách supportu ticketů

### 1.0.2 - 2025-12-11 {#102---2025-12-11}
* Přidáno: Plná funkcionalita zobrazení ticketů pro administrátora i pro frontend
* Přidáno: AJAX handler pro odesílání odpovědí na tickety
* Přidáno: Podpora funkcionality odpovědí na tickety se správní manipulací s formulářem
* Přidáno: Správné zobrazení upozornění při odesílání a odpovědích na tickety v administraci
* Přidáno: Automatické spojení ticketu s aktuálním uživatelem pro samo-odesílání zákazníky
* Přidáno: Zvýšení bezpečnosti, aby se zákazníci nemohli přepsat vlastnictví ticketu
* Přidáno: Chybějící pomocné funkce (wu_format_date, wu_user_can_view_ticket atd.)
* Přidáno: Správné stahování a zpracování přílohou souborů
* Přidáno: Systém e-mailových oznámení pro odpovědi a změny stavu ticketů
* Opraveno: Formulář odpovědi na ticket nyní obsahuje potřebný ID ticketu
* Opraveno: Problémy se zobrazením upozornění v pohlede ticketů administrátora
* Opraveno: Chyby syntaxe v funkcích supportu ticketů
* Vylepšeno: Struktura databáze se správnými třídami dotazů a schématu pro odpovědi a přílohy
* Vylepšeno: Migrace na skutečné vlastnosti (real properties) namísto atributů pro modely ticketů

### 1.0.1 - 2025-09-28 {#101---2025-09-28}
* Aktualizováno: Změněn prefix na `ultimate-multisite` pro konzistenci
* Aktualizováno: Standardizace domény textu
* Opraveno: Menší chyby a vylepšení

### 1.0.0 - 2025-09-01 {#100---2025-09-01}
* První vydání
* Kompletní systém správy ticketů
* Multi-level kontrola přístupu
* Systém vláknové konverzace
* Podpora přílohou souborů
* Systém e-mailových oznámení
* Rozhraní pro administrátora a zákazníka
* Statistika a reporty
