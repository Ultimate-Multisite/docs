---
title: Změny v prodejci domén
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Seznam změn pro Domain Seller

Verze 1.1.0 - Vydáno 8. 5. 2026
* Nové: Implementace vytváření DNS záznamů (add_dns_record) pro registrátory ResellerClub, Enom a OpenSRS
* Oprava: Parser výchozích DNS záznamů nyní toleruje tokeny {DOMAIN} a {SITE_URL}
* Oprava: Slugi pole výběru domény v checkoutu byly zasíleny do namespace, aby se zabránilo kolizi s `site_url`

Verze 1.0.8 - Vydáno 7. 5. 2026
* Oprava: Cenotvorba domény ResellerClub nyní načítá aktuální spotřebitelské ceny z правильного API endpointu

Verze 1.0.7 - Vydáno 6. 5. 2026
* Oprava: Testovací připojení domény ResellerClub odesílá požadovaný parametr tlds (#224)

Verze 1.0.6 - Vydáno 5. 5. 2026
* Oprava: Registrace domény ResellerClub nyní funguje správně díky vylepšené manipulaci s odpověďmi API a směrování poskytovatelů řízené registrem
* Oprava: Vylepšení uživatelského rozhraní (UX) stránky administrace pro registraci domény
* Odebráno: Integrace registrátora CyberPanel

Verze 1.0.5 - Vydáno 2. 4. 2026
* Nové: Integrace registrátora GoDaddy pro registraci a správu domén
* Nové: Integrace registrátora NameSilo
* Nové: Integrace registrátora ResellerClub
* Nové: Automatické ověření odesílající domény SES při nákupu a při přiřazení
* Oprava: Konstanty pluginu Guard proti opětovné definici v testovacím prostředí
* Oprava: MySQL správně rozděluje slova v install-wp-tests.sh

Verze 1.0.4 - Vydáno 14. 3. 2026
* **Oprava:** Některé chybějící CSS assety
* **Oprava:** Chyba související s nedostupnými tlds

Verze 1.0.3 - Vydáno 9. 3. 2026
* **Oprava:** Chyby reaktivní vlastnosti Vue (domain_option, selected_domain, domain_provider) při použití zastaralého formuláře pro registraci s krátkým kódem checkoutu
* **Oprava:** Vyrovnání pole pro zadání poddomény a příliš velký text v poli výběru domény v checkoutu
* **Oprava:** Skrytí bloku „Vaše URL bude“ za předpokladu, že je přítomno pole výběru domény

Verze 1.0.2 - Vydáno 1. 3. 2026
* **Vylepřeno:** Globální nastavení značky odstraněno ze stránky nastavení — cenotvorba je nyní výhradně na úrovni produktu
* **Vylepřeno:** Přidán odkaz „Spravovat produkty domény“ na stránce nastavení pro rychlou navigaci
* **Vylepřeno:** Jasnější popisy polí a tipy pro nastavení produktů domény (catch-all vs TLD-specifické, typy značky, úvodní ceny)
* **Vylepřeno:** Lepší popisy po celém panelu nastavení (hledání TLD, obnovy, DNS, upozornění)

Verze 1.0.1 - Vydáno 27. 2. 2026

* **Nové:** Nástroj pro import TLD pro masivní správu cen
* **Nové:** Podpora úvodních cen pro produkty domény
* **Nové:** E2E testovací sada pomocí Cypress
* **Nové:** E-mailové šablony pro upozornění na životní cyklus domény
* **Nové:** Pole adresy registranta na modalu administrace pro registraci domény, předvyplněné z nastavení
* **Nové:** Uživatelské rozhraní pro správu DNS zákazníka s podporou přidání, úpravy a mazání záznamů
* **Nové:** Možnost checkoutu „Přineste svou vlastní doménu“ s automatickým přiřazením domény
* **Nové:** Automatické generování URL stránky z názvu domény během checkoutu
* **Nové:** Výchozí konfigurace nameserverů a DNS záznamů v nastavení
* **Nové:** Detaily o registraci domény a správu DNS na hlavní stránce úpravy domény
* **Nové:** Setup Wizard automaticky vytváří výchozí produkt domény s rozumnými výchozími hodnotami
* **Nové:** Denná automatická synchronizace TLD pomocí cron pro všechny nakonfigurované poskytovatele
* **Nové:** Ochrana WHOIS s konfigurací na úrovni produktu (vždy zapnuté, volba zákazníka nebo vypnuté)
* **Nové:** Kontrolka pro ochranu WHOIS v checkoutu s zobrazením cen a podporou tmavého režimu
* **Nové:** Administrační stránka pro registraci domény pro manuální registraci domény
* **Nové:** Automatické aktualizace pluginů přes Ultimate Multisite update server
* **Nové:** Filtrační záložka typu produktu domény v tabulce seznamu produktů s purple badge styling
* **Nové:** Pole kontaktů registranta (jméno, adresa, město, stát, poštovní směrovací číslo, krajina, telefon) na formuláři checkoutu domény
* **Nové:** Validace polí registranta před voláním API registrátora s jasnými chybovými hláškami
* **Nové:** Kanály logování specifické pro poskytovatele pro události registraci domény (např. domain-seller-namecheap.log)
* **Nové:** Pole kontaktů registranta na hlavní formulář pro registraci/signup (zobrazeno při registraci domény)
* **Vylepřeno:** Pole výběru domény v checkoutu nahrazeno jednotným polem výběru domény, které podporuje záložky poddoména, registraci a stávající doména
* **Vylepřeno:** Nastavení produktů domény se vykresluje inline na stránce úpravy produktu pomocí core widget systému
* **Vylepřeno:** Informace o doméně zákazníka se připojují k jádrovému widgetu přiřazení domény namísto samostatného metaboxu
* **Vylepřeno:** Wizard pro import TLD zjednodušen na jednoklikovou synchronizaci ze všech poskytovatelů
* **Vylepřeno:** Kontrola dostupnosti domény Namecheap používá dávkové volání API pro rychlejší vyhledávání
* **Vylepřeno:** API pro ceny Namecheap používá správné parametry a parsování odpovědi
* **Vylepřeno:** Centralizované úložiště TLD v jediné network option
* **Vylepřeno:** Protokolování aktivit domény pro změny DNS, převody a aplikaci konfigurace
* **Vylepřeno:** Plná synchronizace TLD pro OpenSRS pomocí IANA master list s dávkovou validací
* **Vylepřeno:** Plná synchronizace TLD pro Namecheap s paginovanými API požadavky
* **Vylepřeno:** Zastaralé třídy poskytovatelů nahrazeny vzorem Integration Registry
* **Vylepřeno:** Panel nastavení s konfigurací DNS a převodů
* **Vylepřeno:** Telefonní čísla automaticky formátována na +CC.NNN formát registrátora
* **Vylepřeno:** Validace pole telefonu odstraňuje formátovací znaky před odesláním
* **Vylepřeno:** Požadavek na verzi zvýšen na Ultimate Multisite 2.4.12 s jasnějším upozorněním
* **Vylepřeno:** CI workflow používá správný checkout jak pro addon, tak pro jádrový plugin
* **Vylepřeno:** prepare_registrant_info() čte z uživatelského meta uloženého v checkoutu s fallbackem na adresu fakturace
* **Opraveno:** AJAX vyhledávání domény selhává pro uživatele, kteří nejsou přihlášeni během checkoutu
* **Opraveno:** AJAX cenotvorba domény selhává pro uživatele, kteří nejsou přihlášeni během checkoutu
* **Opraveno:** Fatální chyba opětovné definice třídy Spyc při spouštění WP-CLI příkazů
* **Opraveno:** Time-out sandbox API Namecheap příliš krátký
* **Opraveno:** Text tlačítka výběru domény v vyhledávání domény není viditelný na zeleném pozadí
* **Opraveno:** Registrace domény selhává s chybou „RegistrantFirstName is Missing“ kvůli chybějícím kontaktním informacím
* **Opraveno:** Doména je vytvořena s blog_id=0, když neexistoval ještě obsah na stránce během checkoutu
* **Opraveno:** Nastavení výchozích TLD je vraceno jako řetězec namísto zparsedého pole
* **Odebráno:** Samostatní administrace pro správu domény — nyní řešeno přes jádrové stránky domény

Verze 1.0.0 - Vydáno 28. 9. 2025

**Velká revize pro Ultimate Multisite v2**

* **Nové:** Kompletní přepsání moderní architekturou PHP 7.4+
* **Nové:** Bezproblémová integrace s systémem checkoutu Ultimate Multisite v2
* **Nové:** Správa produktů domény s flexibilními cenovými možnostmi
* **Nové:** Architektura podpory více poskytovatelů domény
* **Nové:** Integrace automatické obnovy a předplatného
* **Nové:** Uživatelské rozhraní pro správu domény zákazníka
* **Nové:** Monitorování a logy administrátorských domén
* **Nové:** Podpora kupónů pro produkty domény
* **Nové:** Komplexní správa nastavení
* **Nové:** Developer-friendly rozšiřitelný kód
* **Vylepřeno:** Aktualizovaný poskytovatel OpenSRS s plnou podporou funkcí
* **Vylepřeno:** Moderní UI konzistentní s Ultimate Multisite v2
* **Opraveno:** Všechny zastaralé kódy v1 aktualizovány na standardy v2
* **Odebráno:** Kompatibilita se starší verzí v1 (změna, která narušuje fungování)

### Předchozí verze (v1 Legacy)

### Verze 0.0.3 - 20. 8. 2019

* Opraveno: Nezpůsobilost kompatibility s Groundhogg CRM
* Poznámka: Toto byla poslední verze kompatibilní s v1

### Verze 0.0.2 - 7. 12. 2018

* Opraveno: Odebráno pole klíče licence
* Opraveno: Záložky plánů chyběly, když byl aktivní plugin funkce
* Vylepřeno: Přidáno tlačítko „Přeskočit“ na pole registraci

### Verze 0.0.1 - Počáteční vydání

* Základní integrace OpenSRS pro WP Ultimo v1
* Jednoduché vyhledávání a registraci domény
* Přístupy k doménám založené na pláne
