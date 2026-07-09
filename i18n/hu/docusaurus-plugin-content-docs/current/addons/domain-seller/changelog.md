---
title: Doménértékesítő változásnaplója
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller változásnapló

1.3.0 verzió - Kiadva: 2026-06-02
- Új: Hálózati adminisztrátori figyelmeztetés hozzáadva, amikor a HostAfrica viszonteladói egyenleg túl alacsonyra csökken
- Új: Az újonnan regisztrált domainek automatikus hozzárendelése a hálózati site-hoz
- Javítás: A regisztráló mezőkövetelményei csak új domain regisztrálásakor érvényesülnek
- Javítás: Az egyenlegfigyelési értesítések elvethetővé téve
- Javítás: A WooCommerce regisztrálói számlázási adatok megőrzésének biztosítása
- Javítás: A regisztrálói kapcsolattartási követelmények kikényszerítése regisztráció során
- Javítás: Megakadályozva, hogy domainregisztrációs termékek 0%-os felárral jöjjenek létre
- Javítás: A domainválasztások és az árazás megőrzése a checkout munkamenetfolyamatán keresztül
- Javítás: A HostAfrica domainárazás pénznem-megjelenítésének javítása
- Javítás: A checkout űrlapművelet viselkedésének javítása a WP-core query-var eltérések megelőzésére
- Javítva: A HostAfrica viszonteladói konfigurációs dokumentáció összekapcsolva a beállítási útmutatóban

1.2.0 verzió - Kiadva: 2026-05-25
- Új: HostAfrica hozzáadva domainértékesítési integrációként checkout, beállítási varázsló, keresés, TLD/árazás, regisztráció, megújítás, átvitel, nameserver, DNS, EPP kód, regisztrátori zárolás és ID-védelem támogatással
- Új: Openprovider hozzáadva domainértékesítési integrációként viszonteladói árazás, regisztráció, megújítás, átvitel, nameserver, DNS, EPP kód, regisztrátori zárolás, WHOIS adatvédelem és TLD szinkronizálás támogatással
- Új: Hostinger hozzáadva domainértékesítési integrációként, a központi integrációból származó megosztott Hostinger API token használatával elérhetőségi ellenőrzésekhez, regisztrációhoz, nameserver frissítésekhez, regisztrátori zároláshoz és WHOIS adatvédelemhez
- Javítva: Domain életciklus művelet- és szűrő-docblockok hozzáadva fejlesztői integrációs útmutatáshoz
- Javítva: A plugin kompatibilitási metaadatai WordPress 7.0-ra frissítve az addon readme-ben
- Javítva: A közelgő kiadás koordinálásához használt tervezési sablonok frissítve

1.1.0 verzió - Kiadva: 2026-05-08
- Új: DNS rekord létrehozása (add_dns_record) implementálva a ResellerClub, Enom és OpenSRS regisztrátorokhoz
- Javítás: Az alapértelmezett DNS Records elemző most már tolerálja a {DOMAIN} és {SITE_URL} tokeneket
- Javítás: A domainválasztási checkout mező slugjai névtérbe kerültek, hogy elkerüljék az ütközést a site_url-lal

1.0.8 verzió - Kiadva: 2026-05-07
- Javítás: A ResellerClub domainárazás most már a megfelelő API endpointból kéri le az élő bekerülési árakat

1.0.7 verzió - Kiadva: 2026-05-06
* Javítás: A ResellerClub test_connection elküldi a szükséges tlds paramétert (#224)

1.0.6 verzió - Kiadva: 2026-05-05
* Javítás: A ResellerClub domainregisztráció most már megfelelően működik továbbfejlesztett API-válaszkezeléssel és nyilvántartás-vezérelt szolgáltatói útválasztással
* Javítás: Register Domain admin oldal UX-fejlesztései
* Eltávolítva: CyberPanel regisztrátori integráció

1.0.5 verzió - Kiadva: 2026-04-02
* Új: GoDaddy regisztrátori integráció domainregisztrációhoz és -kezeléshez
* Új: NameSilo regisztrátori integráció
* Új: ResellerClub regisztrátori integráció
* Új: SES küldési domain automatikus ellenőrzése domainvásárláskor és hozzárendeléskor
* Javítás: Plugin konstansok védelme az újradefiniálás ellen tesztkörnyezetben
* Javítás: A MySQL flagek szófelosztása helyesen történik az install-wp-tests.sh fájlban

1.0.4 verzió - Kiadva: 2026-03-14
* **Javítás:** Néhány hiányzó css asset
* **Javítás:** Nem elérhető tld-khez kapcsolódó hiba

1.0.3 verzió - Kiadva: 2026-03-09
* **Javítás:** Vue reaktív tulajdonsághibák (domain_option, selected_domain, domain_provider) a régi signup sablon checkout shortcode-dal való használatakor
* **Javítás:** Aldomain beviteli mező igazítási hibája és túlméretezett szöveg a domainválasztási checkout mezőben
* **Javítás:** A "Your URL will be" előnézeti blokk elrejtése, amikor a domainválasztási mező jelen van

1.0.2 verzió - Kiadva: 2026-03-01
* **Javítva:** Globális felárbeállítások eltávolítva a beállítási oldalról — az árazás most kizárólag termékenként történik
* **Javítva:** "Manage Domain Products" link hozzáadva a beállítási oldalon a gyors navigációhoz
* **Javítva:** Egyértelműbb mezőleírások és elemleírások a domaintermék-beállításokhoz (catch-all vs TLD-specifikus, felártípusok, bevezető árazás)
* **Javítva:** Jobb leírások a beállítási oldalon mindenütt (TLD-k keresése, megújítások, DNS, értesítések)

1.0.1 verzió - Kiadva: 2026-02-27

* **Új:** TLD importáló eszköz tömeges árkezeléshez
* **Új:** Bevezető árképzés támogatása domain termékekhez
* **Új:** E2E tesztcsomag Cypress használatával
* **Új:** Email sablonok domain-életciklus értesítésekhez
* **Új:** Regisztráló címező mezők az admin domain-regisztrációs modális ablakban, a beállításokból előre kitöltve
* **Új:** Ügyfél DNS-kezelő felület rekordok hozzáadásának, szerkesztésének és törlésének támogatásával
* **Új:** „Hozd a saját domainedet” checkout opció automatikus domain-leképezéssel
* **Új:** Webhely URL automatikus generálása a domain névből checkout során
* **Új:** Alapértelmezett nameserver és DNS rekord konfiguráció a beállításokban
* **Új:** Domain-regisztrációs részletek és DNS-kezelés az alap domain-szerkesztési oldalon
* **Új:** A beállítási varázsló automatikusan létrehoz egy alapértelmezett domain terméket ésszerű alapértékekkel
* **Új:** Napi automatikus TLD-szinkronizálás cron segítségével az összes konfigurált szolgáltatónál
* **Új:** WHOIS adatvédelmi védelem termékenkénti konfigurációval (mindig bekapcsolva, ügyfél választása szerint vagy letiltva)
* **Új:** WHOIS adatvédelmi checkout jelölőnégyzet ármegjelenítéssel és sötét mód támogatással
* **Új:** Domain regisztrálása admin oldal kézi domain-regisztrációhoz
* **Új:** Automatikus plugin-frissítések az Ultimate Multisite frissítési szerverén keresztül
* **Új:** Domain terméktípus szűrőfül a terméklista táblázatban lila jelvény stílusozással
* **Új:** Regisztráló kapcsolattartási mezők (név, cím, város, állam, irányítószám, ország, telefon) a domain checkout űrlapon
* **Új:** Regisztráló mezők érvényesítése a regisztrátor API hívása előtt egyértelmű hibaüzenetekkel
* **Új:** Szolgáltatóspecifikus naplócsatornák domain-regisztrációs eseményekhez (pl. domain-seller-namecheap.log)
* **Új:** Regisztráló kapcsolattartási mezők a fő regisztrációs/feliratkozási checkout űrlapon (domain regisztrálásakor jelennek meg)
* **Javítva:** A Domain Search checkout mező lecserélve egységes Domain Selection mezőre, amely támogatja az aldomain, regisztráció és meglévő domain füleket
* **Javítva:** A domain termékbeállítások soron belül jelennek meg a termékszerkesztési oldalon az alap widget rendszerén keresztül
* **Javítva:** Az ügyfél domain-információi az önálló metabox helyett az alap domain-leképezési widgethez kapcsolódnak
* **Javítva:** A TLD importáló varázsló egyszerűsítve egykattintásos szinkronizálásra az összes szolgáltatótól
* **Javítva:** A Namecheap domain-elérhetőség batch API-hívást használ a gyorsabb kereséshez
* **Javítva:** A Namecheap árképzési API helyes paramétereket és válaszfeldolgozást használ
* **Javítva:** Központosított TLD-tárolás egyetlen hálózati opcióban
* **Javítva:** Domain-tevékenységek naplózása DNS-módosításokhoz, átvitelekhez és konfiguráció alkalmazásához
* **Javítva:** Teljes TLD-szinkronizálás OpenSRS esetén az IANA mesterlistával és batch érvényesítéssel
* **Javítva:** Teljes TLD-szinkronizálás Namecheap esetén lapozott API-kérésekkel
* **Javítva:** A régi szolgáltatóosztályok lecserélve Integration Registry mintára
* **Javítva:** Beállítási panel DNS- és átviteli konfigurációval
* **Javítva:** A telefonszámok automatikusan +CC.NNN regisztrátori formátumra formázódnak
* **Javítva:** A telefonmező érvényesítése eltávolítja a formázási karaktereket a beküldés előtt
* **Javítva:** A verziókövetelmény Ultimate Multisite 2.4.12-re emelve, egyértelműbb értesítéssel
* **Javítva:** A CI munkafolyamat megfelelő checkoutot használ mind az addonhoz, mind az alap pluginhoz
* **Javítva:** prepare_registrant_info() a checkout során mentett felhasználói metából olvas, számlázási cím tartalékkal
* **Javítva:** A domain-keresési AJAX sikertelen volt be nem jelentkezett felhasználóknál checkout során
* **Javítva:** A domain-árazási AJAX sikertelen volt be nem jelentkezett felhasználóknál checkout során
* **Javítva:** Spyc osztály újradeklarálási végzetes hiba WP-CLI parancsok futtatásakor
* **Javítva:** A Namecheap sandbox API időtúllépése túl rövid volt
* **Javítva:** A domain-keresési Kiválasztás gomb szövege nem volt látható zöld háttéren
* **Javítva:** A domain-regisztráció sikertelen volt „RegistrantFirstName is Missing” hiba miatt, hiányzó kapcsolattartási adatok következtében
* **Javítva:** A domain rekord blog_id=0 értékkel jött létre, amikor a webhely még nem létezett a checkout időpontjában
* **Javítva:** Az alapértelmezett TLD-k beállítása karakterláncként tért vissza elemzett tömb helyett
* **Eltávolítva:** Önálló Domain Management admin oldal — mostantól az alap domain oldalak kezelik

1.0.0 verzió - Kiadva: 2025-09-28

**Jelentős újraírás az Ultimate Multisite v2-höz**

* **Új:** Teljes újraírás modern PHP 7.4+ architektúrával
* **Új:** Zökkenőmentes integráció az Ultimate Multisite v2 checkout rendszerével
* **Új:** Domain termékkezelés rugalmas árképzési opciókkal
* **Új:** Több domain szolgáltatót támogató architektúra
* **Új:** Automatikus megújítás és előfizetés-integráció
* **Új:** Ügyfél domain-kezelő felület
* **Új:** Admin domain-monitorozás és naplók
* **Új:** Kupon támogatás domain termékekhez
* **Új:** Átfogó beállításkezelés
* **Új:** Fejlesztőbarát, bővíthető kódbázis
* **Javítva:** Frissített OpenSRS szolgáltató teljes funkciótámogatással
* **Javítva:** Modern UI, amely összhangban van az Ultimate Multisite v2-vel
* **Javítva:** Minden elavult v1 kód frissítve v2 szabványokra
* **Eltávolítva:** Régi v1 kompatibilitás (kompatibilitást megszakító változás)

### Korábbi verziók (v1 örökölt)

### 0.0.3 verzió - 2019/08/20

* Javítva: Inkompatibilitás a Groundhogg CRM-mel
* Megjegyzés: Ez volt az utolsó v1-kompatibilis kiadás

### 0.0.2 verzió - 2018/12/07

* Javítva: Eltávolítva a License Key mező
* Javítva: Hiányzó Plan fülek, amikor a funkció plugin aktív
* Javítva: Kihagyás gomb hozzáadva a regisztrációs mezőnél

### 0.0.1 verzió - Kezdeti kiadás

* Alap OpenSRS integráció a WP Ultimo v1-hez
* Egyszerű domain-keresés és regisztráció
* Plan-alapú domain jogosultságok
