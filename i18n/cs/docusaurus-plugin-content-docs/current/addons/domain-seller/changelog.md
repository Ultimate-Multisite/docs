---
title: Seznam změn Prodejce domén
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Changelog Domain Seller

Verze 1.3.0 - Vydáno 2026-06-02
- Nové: Přidáno upozornění pro správu sítě, když zůstatek prodejce HostAfrica klesne příliš nízko
- Nové: Přidáno automatické mapování nově registrovaných domén na síťový web
- Oprava: Požadavky na pole registranta použity pouze při registraci nové domény
- Oprava: Upozornění na sledování zůstatku je nyní možné zavřít
- Oprava: Zajištěno zachování fakturačních údajů registranta ve WooCommerce
- Oprava: Vynuceny požadavky na kontakt registranta během registrace
- Oprava: Zabráněno vytváření produktů pro registraci domén s 0% marží
- Oprava: Zachován výběr domén a ceny v průběhu relace checkoutu
- Oprava: Vylepšeno zobrazení měny u cen domén HostAfrica
- Oprava: Vylepšeno chování form-action v checkout formuláři, aby se předešlo neshodám query-var v jádru WP
- Vylepšeno: Propojena dokumentace konfigurace prodejce HostAfrica v pokynech k nastavení

Verze 1.2.0 - Vydáno 2026-05-25
- Nové: Přidána HostAfrica jako integrace pro prodej domén s podporou checkoutu, průvodce nastavením, vyhledávání, TLD/cen, registrace, obnovení, převodu, nameserveru, DNS, EPP code, registrar lock a ochrany ID
- Nové: Přidán Openprovider jako integrace pro prodej domén s podporou cen pro prodejce, registrace, obnovení, převodu, nameserveru, DNS, EPP code, registrar lock, WHOIS privacy a synchronizace TLD
- Nové: Přidán Hostinger jako integrace pro prodej domén využívající sdílený Hostinger API token z hlavní integrace pro kontroly dostupnosti, registraci, aktualizace nameserverů, registrar lock a WHOIS privacy
- Vylepšeno: Přidány docblocky akcí a filtrů životního cyklu domény pro pokyny k integraci pro vývojáře
- Vylepšeno: Aktualizována metadata kompatibility pluginu na WordPress 7.0 v readme doplňku
- Vylepšeno: Aktualizovány plánovací šablony používané pro koordinaci nadcházejícího vydání

Verze 1.1.0 - Vydáno 2026-05-08
- Nové: Vytváření DNS záznamů (add_dns_record) implementováno pro registrátory ResellerClub, Enom a OpenSRS
- Oprava: Výchozí parser DNS Records nyní toleruje tokeny {DOMAIN} a {SITE_URL}
- Oprava: Slugy polí checkoutu pro výběr domény mají namespace, aby se předešlo kolizi se site_url

Verze 1.0.8 - Vydáno 2026-05-07
- Oprava: Ceny domén ResellerClub nyní načítají aktuální nákladové ceny ze správného API endpointu

Verze 1.0.7 - Vydáno 2026-05-06
* Oprava: ResellerClub test_connection odesílá požadovaný parametr tlds (#224)

Verze 1.0.6 - Vydáno 2026-05-05
* Oprava: Registrace domén ResellerClub nyní funguje správně díky vylepšenému zpracování odpovědí API a směrování poskytovatele podle registru
* Oprava: Vylepšení UX admin stránky Register Domain
* Odstraněno: Integrace registrátora CyberPanel

Verze 1.0.5 - Vydáno 2026-04-02
* Nové: Integrace registrátora GoDaddy pro registraci a správu domén
* Nové: Integrace registrátora NameSilo
* Nové: Integrace registrátora ResellerClub
* Nové: Automatické ověření odesílací domény SES při nákupu a mapování domény
* Oprava: Ochrana konstant pluginu proti opětovné definici v testovacím prostředí
* Oprava: MySQL flags se v install-wp-tests.sh správně rozdělují na slova

Verze 1.0.4 - Vydáno 2026-03-14
* **Oprava:** Některé chybějící css assety
* **Oprava:** Chyba související s nedostupnými tlds

Verze 1.0.3 - Vydáno 2026-03-09
* **Oprava:** Chyby reaktivních vlastností Vue (domain_option, selected_domain, domain_provider) při použití starší šablony registrace se shortcode checkoutu
* **Oprava:** Nesprávné zarovnání vstupního pole subdomény a příliš velký text v poli checkoutu pro výběr domény
* **Oprava:** Skrýt náhledový blok „Vaše URL bude“, když je přítomno pole pro výběr domény

Verze 1.0.2 - Vydáno 2026-03-01
* **Vylepšeno:** Odstraněna globální nastavení marže ze stránky nastavení — ceny jsou nyní výhradně podle produktu
* **Vylepšeno:** Přidán odkaz „Spravovat doménové produkty“ na stránku nastavení pro rychlou navigaci
* **Vylepšeno:** Jasnější popisy polí a tooltipy pro nastavení doménových produktů (catch-all vs specifické pro TLD, typy marže, úvodní ceny)
* **Vylepšeno:** Lepší popisy napříč stránkou nastavení (vyhledávání TLD, obnovení, DNS, oznámení)

Verze 1.0.1 - Vydáno 2026-02-27

* **Nové:** Nástroj pro import TLD pro hromadnou správu cen
* **Nové:** Podpora zaváděcích cen pro doménové produkty
* **Nové:** Sada E2E testů s Cypress
* **Nové:** E-mailové šablony pro oznámení životního cyklu domény
* **Nové:** Pole adresy registranta v administračním modálním okně registrace domény, předvyplněná z nastavení
* **Nové:** Rozhraní pro správu DNS zákazníkem s podporou přidávání, úprav a mazání záznamů
* **Nové:** Možnost checkoutu „Přinést vlastní doménu“ s automatickým mapováním domény
* **Nové:** Automatické generování URL webu z názvu domény během checkoutu
* **Nové:** Konfigurace výchozího nameserveru a DNS záznamu v nastavení
* **Nové:** Podrobnosti registrace domény a správa DNS na základní stránce úprav domény
* **Nové:** Průvodce nastavením automaticky vytváří výchozí doménový produkt s rozumnými výchozími hodnotami
* **Nové:** Denní automatická synchronizace TLD přes cron napříč všemi nakonfigurovanými poskytovateli
* **Nové:** Ochrana soukromí WHOIS s konfigurací pro jednotlivé produkty (vždy zapnuto, volba zákazníka nebo vypnuto)
* **Nové:** Zaškrtávací políčko soukromí WHOIS v checkoutu se zobrazením ceny a podporou tmavého režimu
* **Nové:** Administrační stránka Registrace domény pro ruční registraci domény
* **Nové:** Automatické aktualizace pluginu přes aktualizační server Ultimate Multisite
* **Nové:** Záložka filtru typu doménového produktu v tabulce seznamu produktů s fialovým stylem štítku
* **Nové:** Pole kontaktních údajů registranta (jméno, adresa, město, stát, PSČ, země, telefon) ve formuláři checkoutu domény
* **Nové:** Ověření polí registranta před voláním API registrátora s jasnými chybovými zprávami
* **Nové:** Logovací kanály specifické pro poskytovatele pro události registrace domény (např. domain-seller-namecheap.log)
* **Nové:** Pole kontaktních údajů registranta v hlavním registračním/přihlašovacím checkout formuláři (zobrazí se při registraci domény)
* **Vylepšeno:** Pole checkoutu Vyhledávání domény nahrazeno sjednoceným polem Výběr domény podporujícím záložky subdomény, registrace a existující domény
* **Vylepšeno:** Nastavení doménového produktu se vykreslují přímo na stránce úprav produktu prostřednictvím základního systému widgetů
* **Vylepšeno:** Informace o doméně zákazníka se napojují na základní widget mapování domény místo samostatného metaboxu
* **Vylepšeno:** Průvodce importem TLD zjednodušen na synchronizaci ze všech poskytovatelů jedním kliknutím
* **Vylepšeno:** Dostupnost domény Namecheap používá dávkové volání API pro rychlejší vyhledávání
* **Vylepšeno:** Cenové API Namecheap používá správné parametry a parsování odpovědi
* **Vylepšeno:** Centralizované úložiště TLD v jedné síťové volbě
* **Vylepšeno:** Protokolování aktivity domén pro změny DNS, převody a aplikaci konfigurace
* **Vylepšeno:** Úplná synchronizace TLD pro OpenSRS pomocí hlavního seznamu IANA s dávkovým ověřením
* **Vylepšeno:** Úplná synchronizace TLD pro Namecheap se stránkovanými API požadavky
* **Vylepšeno:** Starší třídy poskytovatelů nahrazeny vzorem Integration Registry
* **Vylepšeno:** Panel nastavení s konfigurací DNS a převodů
* **Vylepšeno:** Telefonní čísla se automaticky formátují do formátu registrátora +CC.NNN
* **Vylepšeno:** Ověření telefonního pole před odesláním odstraňuje formátovací znaky
* **Vylepšeno:** Požadavek na verzi zvýšen na Ultimate Multisite 2.4.12 s jasnějším upozorněním
* **Vylepšeno:** CI workflow používá správný checkout pro addon i základní plugin
* **Vylepšeno:** prepare_registrant_info() čte z uživatelských metadat uložených při checkoutu se záložním použitím fakturační adresy
* **Opraveno:** Domain search AJAX selhával pro nepřihlášené uživatele během checkoutu
* **Opraveno:** Domain pricing AJAX selhával pro nepřihlášené uživatele během checkoutu
* **Opraveno:** Fatální chyba opětovné deklarace třídy Spyc při spouštění příkazů WP-CLI
* **Opraveno:** Timeout Namecheap sandbox API byl příliš krátký
* **Opraveno:** Text tlačítka Vybrat při vyhledávání domény nebyl viditelný na zeleném pozadí
* **Opraveno:** Registrace domény selhávala s chybou „RegistrantFirstName is Missing“ kvůli chybějícím kontaktním údajům
* **Opraveno:** Doménový záznam vytvořen s blog_id=0, když web v době checkoutu ještě neexistoval
* **Opraveno:** Nastavení výchozích TLD se vracelo jako řetězec místo parsovaného pole
* **Odstraněno:** Samostatná administrační stránka Správa domén — nyní řešeno přes základní stránky domén

Verze 1.0.0 - Vydáno 2025-09-28

**Zásadní přepsání pro Ultimate Multisite v2**

* **Nové:** Kompletní přepsání s moderní architekturou PHP 7.4+
* **Nové:** Bezproblémová integrace se systémem checkoutu Ultimate Multisite v2
* **Nové:** Správa doménových produktů s flexibilními cenovými možnostmi
* **Nové:** Architektura podpory více poskytovatelů domén
* **Nové:** Integrace automatického obnovení a předplatného
* **Nové:** Rozhraní pro správu domén zákazníkem
* **Nové:** Administrační monitorování domén a logy
* **Nové:** Podpora kupónů pro doménové produkty
* **Nové:** Komplexní správa nastavení
* **Nové:** Rozšiřitelná kódová základna přívětivá pro vývojáře
* **Vylepšeno:** Aktualizovaný poskytovatel OpenSRS s plnou podporou funkcí
* **Vylepšeno:** Moderní UI konzistentní s Ultimate Multisite v2
* **Opraveno:** Veškerý zastaralý kód v1 aktualizován na standardy v2
* **Odstraněno:** Kompatibilita se starší v1 (nekompatibilní změna)

### Předchozí verze (starší v1)

### Verze 0.0.3 - 20/08/2019

* Opraveno: Nekompatibilita s Groundhogg CRM
* Poznámka: Toto bylo poslední vydání kompatibilní s v1

### Verze 0.0.2 - 07/12/2018

* Opraveno: Odstraněno pole License Key
* Opraveno: Záložky plánů chyběly, když byl aktivní funkční plugin
* Vylepšeno: Přidáno tlačítko přeskočení v registračním poli

### Verze 0.0.1 - První vydání

* Základní integrace OpenSRS pro WP Ultimo v1
* Jednoduché vyhledávání a registrace domén
* Oprávnění domén založená na plánech
