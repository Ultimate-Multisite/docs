---
title: Domain Seller Changelog
sidebar_position: 99
_i18n_hash: bc3ab4e3f0076e80e8c38ed313f4430d
---
# Domain Seller Változatok Listája

Verzió 1.1.0 - Kiadás dátuma: 2026-05-08
- Új: DNS rekord létrehozása (add_dns_record) megvalósítva a ResellerClub, Enom és OpenSRS regisztrátorok számára
- Javítás: A böngésző alapértelmezett DNS rekordok parserja most tolerálja a {DOMAIN} és {SITE_URL} tokeneket
- Javítás: A domain kiválasztásos checkout mező slug-jai nem térítik el a site_url-tól, így elkerülhető a törekvés

Verzió 1.0.8 - Kiadás dátuma: 2026-05-07
- Javítás: A ResellerClub domain árazása most élő költségeket fogva a megfelelő API endpoint-ről

Verzió 1.0.7 - Kiadás dátuma: 2026-05-06
* Javítás: A ResellerClub test_connection küldi az elváritott tlds paramétert (#224)

Verzió 1.0.6 - Kiadás dátuma: 2026-05-05
* Javítás: A ResellerClub domain regisztrációja most megfelelően működik javított API válaszkezeléssel és regisztrátorvezérelt szolgáltató útvonalazással
* Javítás: A Register Domain admin oldali felhasználói élmény (UX) javítása
* Eltávolítva: CyberPanel regisztrátor integráció

Verzió 1.0.5 - Kiadás dátuma: 2026-04-02
* Új: GoDaddy regisztrátor integráció a domain regisztráció és kezelése érdekében
* Új: NameSilo regisztrátor integráció
* Új: ResellerClub regisztrátor integráció
* Új: Automatikus SES küldő domain ellenőrzése a domain vásárlásakor és hozzárendeléskor
* Javítás: A Guard plugin konstansainak újraértelmezését akadályozó javítás a teszt környezetben
* Javítás: A MySQL flag-ek helyesen szétválasztva vannak az install-wp-tests.sh fájlban

Verzió 1.0.4 - Kiadás dátuma: 2026-03-14
* **Javítás:** Néhány hiányzó CSS eszköz
* **Javítás:** Hiba, amely az elérhetetlen tlds-ekkel kapcsolatos

Verzió 1.0.3 - Kiadás dátuma: 2026-03-09
* **Javítás:** Vue reaktív tulajdonságok hibái (domain_option, selected_domain, domain_provider) a régi regisztrációs sablón használva és a checkout shortcode-gal
* **Javítás:** A szubdomain mező elrendezési hibája és a domain kiválasztásos checkout mező túl nagy szövege
* **Javítás:** Elrejtette a "Your URL will be" előnézeti blokkot, ha jelen van a domain kiválasztás mező

Verzió 1.0.2 - Kiadás dátuma: 2026-03-01
* **Jobbított:** Eltávolították a globális markup beállításokat a beállítások oldaláról – az árazás most kizárólag termékenként történik
* **Jobbított:** Hozzáadták a "Manage Domain Products" linket a beállítások oldalára gyors navigációhoz
* **Jobbított:** Jobb leírások és tippek a domain termék beállításain (catch-all vs TLD-specific, markup típusok, bevezető árak)
* **Jobbított:** Jobb leírások az egész beállítások oldalon (TLD keresése, megújítások, DNS, értesítések)

Verzió 1.0.1 - Kiadás dátuma: 2026-02-27

* **Új:** TLD import eszköz tömeges árazáskezeléshez
* **Új:** Bevezető árazás támogatása a domain termékekhez
* **Új:** E2E teszt suite Cypress-szel
* **Új:** E-mail sablonok a domain életciklus értesítéseire
* **Új:** Regisztránság címmezők az admin domain regisztrációs modáljában, betelepítve a beállításokból
* **Új:** Ügyfél DNS kezelő felület hozzáadása, add, edit és delete rekord támogatással
* **Új:** "Bring your own domain" checkout opció automatikus domain hozzárendeléssel
* **Új:** Oldaltípus URL automatikus generálása a domain név alapján a checkout során
* **Új:** Alapértelmezett nameserver és DNS rekord konfiguráció a beállításokban
* **Új:** Domain regisztrációs részletek és DNS kezelése a fő domain szerkesztő oldalán
* **Új:** A setup wizard automatikusan létrehozza egy alapértelmezett domain terméket ésszerű alapértelmezésekkel
* **Új:** Naponta automatikus TLD szinkronizáció minden konfigurált szolgáltató জুড়ে cron segítségével
* **Új:** WHOIS adatvédelmi védelem termékenkénti konfigurációval (mindig aktív, ügyfél választása vagy kikapcsolt)
* **Új:** WHOIS adatvédelmi checkout jelölőnévi mező árazással és dark mode támogatással
* **Új:** Register Domain admin oldala kézi domain regisztrációhoz
* **Új:** Automatikus plugin frissítés Ultimate Multisite update server-en keresztül
* **Új:** Domain termék típus szűrő tab a termék listázó táblázatában lila jelzőszöveggel
* **Új:** Regisztránság elérhetőségi mezők (név, cím, város, állam, postal code, ország, telefon) a domain checkout űrlapon
* **Új:** Regisztránság mezővalidáció a regisztrátor API hívása előtt, világos hibaüzenetekkel
* **Új:** Szolgáltató-specifikus log csatornák a domain regisztrációs eseményekhez (pl. domain-seller-namecheap.log)
* **Új:** Regisztránság elérhetőségi mezők a fő regisztrációs/signup checkout űrlapon (megjelenik, ha domain regisztrálása történik)
* **Jobbított:** A Domain Search checkout mezője egy egységes Domain Selection mezővel lett cserélve, amely szubdomain, register és meglévő domain tabokat támogat
* **Jobbított:** A Domain termék beállításai inline módon jelennek meg a termék szerkesztő oldalán a core widget rendszeren keresztül
* **Jobbított:** Az ügyfél domain információi a core domain mapping widget-be kapcsolódnak, nem állandó metaboxba
* **Jobbított:** A TLD import wizard egyszerűsítve egy kattintásos szinkronizáció minden szolgáltatótól
* **Jobbított:** A Namecheap domain elérhetőségének keresése batch API hívást használ, gyorsabb kereséshez
* **Jobbított:** A Namecheap árazási API helyes paramétereket és válaszfeldolgozást használ
* **Jobbított:** Központi TLD tárolás egyetlen network optionban
* **Jobbított:** Domain aktivitás naplózása DNS változások, átvitel és konfiguráció alkalmazása esetén
* **Jobbított:** Teljes TLD szinkronizáció OpenSRS-szal az IANA master list segítségével batch validációval
* **Jobbított:** Teljes TLD szinkronizáció Namecheap-nel oldalszámozott API kérésekkel
* **Jobbított:** A régi szolgáltató osztályok cseréje az Integration Registry mintára
* **Jobbított:** Beállítások panelt DNS és átvitel konfigurációval
* **Jobbított:** Telefonszámok automatikus formázása +CC.NNN regisztrátor formátumra
* **Jobbított:** A telefonmezővalidáció eltávolítja a formázó karaktereket a küldés előtt
* **Jobbított:** A verzió követelménye emelkedett Ultimate Multisite 2.4.12-re, világosabb értesítéssel
* **Jobbított:** A CI workflow megfelelően használja a both addon és core plugin checkout-ot
* **Jobbított:** prepare_registrant_info() olvas a checkout-mentelt felhasználói meta adatból, számlázási cím fallback-gal
* **Javított:** A Domain search AJAX hiba, ha nem belépett felhasználó a checkout során
* **Javított:** A Domain pricing AJAX hiba, ha nem belépett felhasználó a checkout során
* **Javított:** A Spyc osztály újraértelmezési fatális hiba, ha WP-CLI parancsokat futtatunk
* **Javított:** A Namecheap sandbox API időkorlátozása túl rövid volt
* **Javított:** A Domain search Select gomb szövege nem látható zöld háttérrel
* **Javított:** A domain regisztráció sikertelen, "RegistrantFirstName is Missing" hiba miatt, mert hiányzott az elérhetőségi információ
* **Javított:** A domain rekord blog_id=0-val lett létrehozva, ha a site még nem létezett a checkout időpontjában
* **Javított:** Az alapértelmezett TLD-k beállítása stringként, nem feldolgozott tömbként lett visszaadva
* **Eltávolítva:** Az önálló Domain Management admin oldala – most a core domain oldalakon keresztül kezelhető

Verzió 1.0.0 - Kiadás dátuma: 2025-09-28

**Nagyméretű átírás Ultimate Multisite v2-re**

* **Új:** Teljes átírás modern PHP 7.4+ architektúrával
* **Új:** Zökzett integráció az Ultimate Multisite v2 checkout rendszerével
* **Új:** Domain termékkezelés rugalmas árazási opciókkal
* **Új:** Tölelő domain szolgáltató támogatási architektúra
* **Új:** Automatikus megújítás és előfizetés integráció
* **Új:** Ügyfél domain kezelő felület
* **Új:** Admin domain monitorozása és naplózása
* **Új:** Kupon támogatás a domain termékekhez
* **Új:** Komprehenszív beállítások kezelése
* **Új:** Fejlesztőbarát bővíthető kódalapzat
* **Jobbított:** Frissített OpenSRS szolgáltató teljes funkciótámogatással
* **Jobbított:** Modern UI, konzisztens az Ultimate Multisite v2-vel
* **Javított:** Minden elavult v1 kód v2 standardokra frissítve
* **Eltávolítva:** Örökségi v1 kompatibilitás (megváltoztató változás)

### Korábbi Verziók (v1 Örökség)

### Verzió 0.0.3 - 20/08/2019

* Javítás: Inkompatibilitás Groundhogg CRM-nel
* Megjegyzés: Ez volt az utolsó v1-kompatibilis kiadás

### Verzió 0.0.2 - 07/12/2018

* Javítás: Eltávolították a License Key mezőt
* Javítás: A Plan tabok hiányzóak, ha az extralink plugin aktív
* Jobbított: Hozzáadták egy "skip" gombot a regisztrációs mezőre

### Verzió 0.0.1 - Első kiadás

* Egyszerű OpenSRS integráció WP Ultimo v1-hez
* Egyszerű domain keresés és regisztráció
* Plan alapú domain engedélyek
