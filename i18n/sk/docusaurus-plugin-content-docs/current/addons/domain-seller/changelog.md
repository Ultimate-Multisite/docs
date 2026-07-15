---
title: Záznam zmien Predajcu domén
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Záznam zmien Domain Seller

Verzia 1.3.0 - Vydané 2026-06-02
- Nové: Pridané upozornenie pre network-admin, keď je zostatok predajcu HostAfrica príliš nízky
- Nové: Pridané automatické mapovanie novo zaregistrovaných domén na sieťovú stránku
- Oprava: Požiadavky na polia registranta sa uplatňujú iba pri registrácii novej domény
- Oprava: Oznámenia o monitorovaní zostatku je teraz možné zavrieť
- Oprava: Zabezpečené zachovanie fakturačných údajov registranta WooCommerce
- Oprava: Vynútené požiadavky na kontakt registranta počas registrácie
- Oprava: Zabránené vytváraniu produktov registrácie domén s 0 % prirážkou
- Oprava: Zachované výbery domén a ceny počas toku relácie pokladne
- Oprava: Vylepšené zobrazenie meny cien domén HostAfrica
- Oprava: Vylepšené správanie form-action pri pokladni, aby sa predišlo nezhodám query-var jadra WP
- Vylepšené: Prepojená dokumentácia konfigurácie predajcu HostAfrica v pokynoch na nastavenie

Verzia 1.2.0 - Vydané 2026-05-25
- Nové: Pridaná HostAfrica ako integrácia na predaj domén s podporou pokladne, sprievodcu nastavením, vyhľadávania, TLD/cien, registrácie, obnovenia, transferu, nameserverov, DNS, EPP kódu, zámku registrátora a ochrany ID
- Nové: Pridaný Openprovider ako integrácia na predaj domén s podporou predajných cien, registrácie, obnovenia, transferu, nameserverov, DNS, EPP kódu, zámku registrátora, súkromia WHOIS a synchronizácie TLD
- Nové: Pridaný Hostinger ako integrácia na predaj domén používajúca zdieľaný Hostinger API token z jadrovej integrácie na kontroly dostupnosti, registráciu, aktualizácie nameserverov, zámok registrátora a súkromie WHOIS
- Vylepšené: Pridané docblocky pre akcie a filtre životného cyklu domény ako pokyny pre integráciu vývojárov
- Vylepšené: Aktualizované metadáta kompatibility pluginu na WordPress 7.0 v readme doplnku
- Vylepšené: Aktualizované plánovacie šablóny používané na koordináciu nadchádzajúceho vydania

Verzia 1.1.0 - Vydané 2026-05-08
- Nové: Vytváranie DNS záznamov (add_dns_record) implementované pre registrátorov ResellerClub, Enom a OpenSRS
- Oprava: Predvolený analyzátor DNS záznamov teraz toleruje tokeny {DOMAIN} a {SITE_URL}
- Oprava: Slugy poľa výberu domény pri pokladni majú namespace, aby sa predišlo kolízii so site_url

Verzia 1.0.8 - Vydané 2026-05-07
- Oprava: Ceny domén ResellerClub teraz načítavajú živé nákladové ceny zo správneho API endpointu

Verzia 1.0.7 - Vydané 2026-05-06
* Oprava: ResellerClub test_connection odosiela požadovaný parameter tlds (#224)

Verzia 1.0.6 - Vydané 2026-05-05
* Oprava: Registrácia domén ResellerClub teraz funguje správne vďaka vylepšenému spracovaniu odpovedí API a smerovaniu poskytovateľa riadenému registrom
* Oprava: Vylepšenia UX administrátorskej stránky Register Domain
* Odstránené: Integrácia registrátora CyberPanel

Verzia 1.0.5 - Vydané 2026-04-02
* Nové: Integrácia registrátora GoDaddy na registráciu a správu domén
* Nové: Integrácia registrátora NameSilo
* Nové: Integrácia registrátora ResellerClub
* Nové: Automatické overenie odosielacej domény SES pri kúpe a mapovaní domény
* Oprava: Ochrana konštánt pluginu pred opätovnou definíciou v testovacom prostredí
* Oprava: Príznaky MySQL sa v install-wp-tests.sh správne rozdeľujú na slová

Verzia 1.0.4 - Vydané 2026-03-14
* **Oprava:** Niektoré chýbajúce css assety
* **Oprava:** Chyba súvisiaca s nedostupnými tlds

Verzia 1.0.3 - Vydané 2026-03-09
* **Oprava:** Chyby reaktívnych vlastností Vue (domain_option, selected_domain, domain_provider) pri použití legacy šablóny registrácie s checkout shortcode
* **Oprava:** Nesprávne zarovnanie vstupného poľa subdomény a príliš veľký text v poli výberu domény pri pokladni
* **Oprava:** Skryť blok náhľadu „Your URL will be“, keď je prítomné pole výberu domény

Verzia 1.0.2 - Vydané 2026-03-01
* **Vylepšené:** Odstránené globálne nastavenia prirážky zo stránky nastavení — ceny sú teraz výhradne podľa produktu
* **Vylepšené:** Pridaný odkaz „Manage Domain Products“ na stránke nastavení pre rýchlu navigáciu
* **Vylepšené:** Jasnejšie popisy polí a tooltipy pre nastavenia doménových produktov (catch-all vs špecifické pre TLD, typy prirážok, úvodné ceny)
* **Vylepšené:** Lepšie popisy naprieč stránkou nastavení (vyhľadávanie TLD, obnovenia, DNS, oznámenia)

Verzia 1.0.1 - Vydané 2026-02-27

* **Nové:** Nástroj na import TLD pre hromadnú správu cien
* **Nové:** Podpora úvodných cien pre doménové produkty
* **Nové:** E2E testovacia sada s Cypress
* **Nové:** Emailové šablóny pre oznámenia životného cyklu domény
* **Nové:** Polia adresy registranta v administrátorskom modálnom okne registrácie domény, predvyplnené z nastavení
* **Nové:** Rozhranie zákazníckej správy DNS s podporou pridania, úpravy a odstránenia záznamu
* **Nové:** Možnosť pri pokladni „Prineste si vlastnú doménu“ s automatickým mapovaním domény
* **Nové:** Automatické vygenerovanie URL lokality z názvu domény počas pokladne
* **Nové:** Konfigurácia predvoleného nameservera a DNS záznamu v nastaveniach
* **Nové:** Podrobnosti registrácie domény a správa DNS na základnej stránke úpravy domény
* **Nové:** Sprievodca nastavením automaticky vytvára predvolený doménový produkt s rozumnými predvolenými hodnotami
* **Nové:** Denná automatická synchronizácia TLD cez cron naprieč všetkými nakonfigurovanými poskytovateľmi
* **Nové:** Ochrana súkromia WHOIS s konfiguráciou pre jednotlivé produkty (vždy zapnutá, voľba zákazníka alebo vypnutá)
* **Nové:** Zaškrtávacie políčko súkromia WHOIS pri pokladni so zobrazením ceny a podporou tmavého režimu
* **Nové:** Administrátorská stránka Register Domain pre manuálnu registráciu domény
* **Nové:** Automatické aktualizácie pluginu cez aktualizačný server Ultimate Multisite
* **Nové:** Karta filtra typu doménového produktu v tabuľke zoznamu produktov so štýlovaním fialovým odznakom
* **Nové:** Polia kontaktu registranta (meno, adresa, mesto, štát, PSČ, krajina, telefón) vo formulári pokladne domény
* **Nové:** Validácia polí registranta pred volaním API registrátora s jasnými chybovými hláseniami
* **Nové:** Logovacie kanály špecifické pre poskytovateľa pre udalosti registrácie domény (napr. domain-seller-namecheap.log)
* **Nové:** Polia kontaktu registranta v hlavnom registračnom/prihlasovacom formulári pokladne (zobrazené pri registrácii domény)
* **Vylepšené:** Pole pokladne Domain Search nahradené zjednoteným poľom Domain Selection s podporou kariet subdomény, registrácie a existujúcej domény
* **Vylepšené:** Nastavenia doménového produktu sa vykresľujú inline na stránke úpravy produktu cez základný systém widgetov
* **Vylepšené:** Informácie o doméne zákazníka sa pripájajú do základného widgetu mapovania domény namiesto samostatného metaboxu
* **Vylepšené:** Sprievodca importom TLD zjednodušený na synchronizáciu jedným kliknutím od všetkých poskytovateľov
* **Vylepšené:** Dostupnosť domén Namecheap používa dávkové volanie API pre rýchlejšie vyhľadávanie
* **Vylepšené:** Cenové API Namecheap používa správne parametre a parsovanie odpovede
* **Vylepšené:** Centralizované ukladanie TLD v jednej sieťovej možnosti
* **Vylepšené:** Zaznamenávanie aktivity domén pre zmeny DNS, prevody a aplikáciu konfigurácie
* **Vylepšené:** Úplná synchronizácia TLD pre OpenSRS pomocou hlavného zoznamu IANA s dávkovou validáciou
* **Vylepšené:** Úplná synchronizácia TLD pre Namecheap so stránkovanými API požiadavkami
* **Vylepšené:** Zastarané triedy poskytovateľov nahradené vzorom Integration Registry
* **Vylepšené:** Panel nastavení s konfiguráciou DNS a prevodu
* **Vylepšené:** Telefónne čísla sa automaticky formátujú do registrátorského formátu +CC.NNN
* **Vylepšené:** Validácia telefónneho poľa odstraňuje formátovacie znaky pred odoslaním
* **Vylepšené:** Požiadavka na verziu zvýšená na Ultimate Multisite 2.4.12 s jasnejším upozornením
* **Vylepšené:** CI workflow používa správny checkout pre addon aj základný plugin
* **Vylepšené:** prepare_registrant_info() číta z používateľských metaúdajov uložených pri pokladni so záložnou fakturačnou adresou
* **Opravené:** Domain search AJAX zlyhával pre neprihlásených používateľov počas pokladne
* **Opravené:** Domain pricing AJAX zlyhával pre neprihlásených používateľov počas pokladne
* **Opravené:** Fatálna chyba opätovnej deklarácie triedy Spyc pri spúšťaní príkazov WP-CLI
* **Opravené:** Timeout sandbox API Namecheap bol príliš krátky
* **Opravené:** Text tlačidla Select pri vyhľadávaní domény nebol viditeľný na zelenom pozadí
* **Opravené:** Registrácia domény zlyhávala s chybou „RegistrantFirstName is Missing“ kvôli chýbajúcim kontaktným informáciám
* **Opravené:** Doménový záznam vytvorený s blog_id=0, keď lokalita v čase pokladne ešte neexistovala
* **Opravené:** Nastavenie predvolených TLD sa vracalo ako reťazec namiesto spracovaného poľa
* **Odstránené:** Samostatná administrátorská stránka Domain Management — teraz sa rieši cez základné stránky domén

Verzia 1.0.0 - Vydaná 2025-09-28

**Veľký prepis pre Ultimate Multisite v2**

* **Nové:** Kompletný prepis s modernou architektúrou PHP 7.4+
* **Nové:** Bezproblémová integrácia s pokladničným systémom Ultimate Multisite v2
* **Nové:** Správa doménových produktov s flexibilnými cenovými možnosťami
* **Nové:** Architektúra podpory viacerých poskytovateľov domén
* **Nové:** Integrácia automatického obnovovania a predplatného
* **Nové:** Rozhranie zákazníckej správy domén
* **Nové:** Administrátorské monitorovanie domén a logy
* **Nové:** Podpora kupónov pre doménové produkty
* **Nové:** Komplexná správa nastavení
* **Nové:** Rozšíriteľná kódová základňa priateľská k vývojárom
* **Vylepšené:** Aktualizovaný poskytovateľ OpenSRS s úplnou podporou funkcií
* **Vylepšené:** Moderné UI konzistentné s Ultimate Multisite v2
* **Opravené:** Všetok zastaraný kód v1 aktualizovaný na štandardy v2
* **Odstránené:** Kompatibilita so zastaranou v1 (zásadná zmena)

### Predchádzajúce verzie (zastaraná v1) {#previous-versions-v1-legacy}

### Verzia 0.0.3 - 20/08/2019 {#version-003---20082019}

* Opravené: Nekompatibilita s Groundhogg CRM
* Poznámka: Toto bolo posledné vydanie kompatibilné s v1

### Verzia 0.0.2 - 07/12/2018 {#version-002---07122018}

* Opravené: Odstránené pole License Key
* Opravené: Chýbajúce karty plánov, keď je aktívny plugin funkcie
* Vylepšené: Pridané tlačidlo preskočenia v registračnom poli

### Verzia 0.0.1 - Úvodné vydanie {#version-001---initial-release}

* Základná integrácia OpenSRS pre WP Ultimo v1
* Jednoduché vyhľadávanie a registrácia domény
* Oprávnenia domén založené na pláne
