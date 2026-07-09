---
title: Zoznam zmien Tvorcu stránok administrácie
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Zoznam zmien Admin Page Creator

### Verzia 1.9.0 - Vydané 2026-01-18

* Opravené: Fatálne chyby pri aktivácii.
* Refaktorované: Triedy zdrojov obsahu tak, aby používali Singleton trait so správnou inicializáciou rodičovského konštruktora
* Opravené: Chyby kompilácie šablón Vue.js, ktoré bránili vykresleniu selektora typu obsahu
* Opravené: Chýbajúce dátové vlastnosti Vue (template_id, external_link_url_embedable, external_link_url_checking)
* Opravené: Editor TinyMCE sa pri načítaní stránky neinicializoval správne
* Opravené: Súbor podpory Divi sa nenačítaval automaticky cez Composer
* Opravené: Poškodená syntax PHP v triede podpory Divi
* Vylepšené: Organizácia a minifikácia JavaScript assetov
* Vylepšené: Kompatibilita s najnovšími verziami WordPress a page builderov

= Verzia: 1.8.8 - Vydané 2025-09-28

* Premenovaný prefix na ultimate-multisite; aktualizovaná textová doména; zvýšená verzia.

### Verzia 1.8.7 - 04/10/2023

* Opravené: Fatálna chyba pri pokuse o pridanie novej admin stránky;
* Opravené: Konflikt s prefixom štýlov Oxygen;

### Verzia 1.8.6 - 09/08/2023

* Pridané: Pridaná možnosť zobrazovať údaje z hlavnej stránky alebo aktuálnej podstránky.
* Pridané: Pridaná podpora pre WordPress Block Editor (Gutenberg).
* Opravené: Opravený problém s nenačítavaním assetov stránky Brizy.

### Verzia 1.8.5 - 09/12/2020

* Opravené: Problém s možnosťami obrazovky na skrytie menu, ktoré nezmizli;

### Verzia 1.8.4 - 11/11/2020

* Opravené: Podpora pre Multisite Ultimate v2;

### Verzia 1.8.3 - 01/10/2020

* Opravené: Nekompatibility s Beaver Builder z predchádzajúceho buildu;
* Opravené: Nekonzistentnosti okrajov s WP 5.5;

### Verzia 1.8.2 - 21/09/2020

* Opravené: Drobné nekompatibility s WP 5.5;

### Verzia 1.8.1 - 05/08/2020

* Opravené: Nekompatibilita s Brizy 2.0;
* Opravené: Drobné problémy s výkonom pri vytváraní zoznamu menu;

### Verzia 1.8.0 - 27/04/2020

* Opravené: Oznámenia boli skryté pod hornou lištou, keď nebol vybraný režim okraja;
* Pridané: Vlastné stránky teraz môžu nahradiť viacero hlavných a podstránok administrácie WordPress naraz;
* Pridané: Administrátori teraz môžu skryť admin stránky pomocou WP Admin Pages PRO;

### Verzia 1.7.9 - 01/04/2020

* Opravené: Brizy 1.10.118 a novšie narúšali podporu SVG na admin stránkach;

### Verzia 1.7.8 - 26/03/2020

* Opravené: Chyba escapovania, ktorá rozbíjala stránku editora pri používaní francúzštiny;

### Verzia 1.7.7 - 04/03/2020

* Opravené: Drobná nekompatibilita s Brizy Builder;
* Vylepšené: Aktualizovaný Freemius SDK na 2.3.2;

### Verzia 1.7.6 - 10/02/2020

* Opravené: Tlačidlo úpravy admin stránky v pravom dolnom rohu nefungovalo na Dashboard widgetoch;
* Opravené: Drobná nekompatibilita s Astra;
* Opravené: Nová verzia Brizy narúšala kompatibilitu;

### Verzia 1.7.5 - 14/12/2019

* Opravené: Pridaný nový handler pre okrajový prípad na naplnenie položiek menu pri možnosti nahradenia stránky;
* Opravené: Fonty Elementor nefungovali;
* Vylepšené: Aktualizovaný Freemius SDK s podporou skrývania citlivých informácií zo stránky Account;

### Verzia 1.7.4 - 29/11/2019

* Opravené: Nekompatibilita s WooCommerce Memberships;
* Opravené: Komponent kariet Oxygen Builder nefungoval;
* Opravené: Beaver Themer nefungoval;

### Verzia 1.7.3 - 12/07/2019

* Opravené: Stránky mizli, keď bola ich rodičovská stránka konvertovaná na iný typ admin stránky;
* Vylepšené: Lepšie oddeľovače v tabuľke zoznamu medzi typmi admin stránok;
* Vylepšené: Bezpečnostná kontrola celej kódovej základne pluginu;
* Vylepšené: Poznámka na karte oddeľovača s upozornením, keď funkcia nie je dostupná pre daný typ menu/zdroja obsahu;

### Verzia 1.7.2 - 01/07/2019

* Opravené: Aktualizovaná verzia Freemius SDK na 2.3.0;
* Opravené: Problém s nekompatibilitou s Flywheel;

### Verzia 1.7.1 - 27/06/2019

* Opravené: Uvítací widget sa teraz zobrazuje všetkým rolám;
* Opravené: Možnosť obrazovky na skrytie/zobrazenie menu admin stránok sa nepridá, ak sa menu skrýva cez filter zdokumentovaný na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Vylepšené: Skrytie menu admin stránok teraz skryje aj šablóny vytvorené zo zoznamu uložených šablón Beaver Builder v používateľskom rozhraní buildera;
* Pridané: Možnosti hromadnej aktivácie a deaktivácie admin stránok;
* Pridané: Možnosť zobrazovať stránky aj na hlavnej stránke;
* Pridané: Možnosť premenovať popisky menu najvyššej úrovne a podúrovne v režime nahradenia;

### Verzia 1.7.0 - 04/06/2019

* Oprava: Problémy so šablónami Oxygen, ktoré sa nezobrazovali;
* Pridané: Podpora pre vytváranie widgetov!

### Verzia 1.6.1 - 22/05/2019

* Opravené: Preklepy;
* Opravené: Stránky podmenu prepisovali predchádzajúce položky podmenu s rovnakou hodnotou poradia;
* Opravené: Duplikovanie teraz resetuje slug duplikovanej stránky;
* Vylepšené: Aktualizované súbory po pre pt_BR a es_ES;
* Vylepšené: Tabuľka zoznamu teraz uvádza názov vlastných stránok aj ako rodičovských stránok;

### Verzia 1.6.0 - 21/05/2019

* Pridané: Externé odkazy teraz podporujú aj načítanie cez iframe;

### Verzia 1.5.5 - 17/05/2019

* Opravené: Zobrazovalo sa varovné hlásenie, keď bola stránka odstránená alebo duplikovaná;
* Opravené: Nastavenia oprávnení sa neaplikovali na administrátorov;

### Verzia 1.5.4 - 08/05/2019

* Opravené: Nekompatibility so Sliced Invoices;
* Opravené: Drobný problém s Oxygen;
* Opravené: Placeholder v poli názvu novej admin stránky nezmizol pri key-up;

### Verzia 1.5.3 - 03/05/2019

* Opravené: Nekompatibilita so stránkami možností Advanced Custom Field;
* Pridané: Možnosť pridať konkrétnych používateľov ako ciele vlastných admin stránok;

### Verzia 1.5.2 - 30/04/2019

* Opravené: Nekompatibility s novšími verziami Brizy;
* Pridané: Pridaný španielsky preklad - s láskavým prispením Johna Rozza. Vďaka, John!
* Pridané: Beta podpora pre Oxygen Builder;

### Verzia 1.5.1 - 15/04/2019

* Opravené: Problém s placeholdermi v editoroch Normal a HTML;
* Opravené: Admin stránky sa nezobrazovali v Tools -> Export;
* Opravené: Načítavanie skriptov a štýlov iba na našich vlastných stránkach;
* Pridané: Super administrátori teraz môžu duplikovať admin stránky;

### Verzia 1.5.0 - 29/03/2019

* Opravené: Malé chyby zachytené službou Sentry;
* Opravené: Tlačidlo Delete nefungovalo na obrazovke stránky Edit Admin;
* Vylepšené: Zmenené tlačidlo BeaverBuilder, aby bolo jasné, že je podporovaná aj licencia Standard BB;
* Pridané: Administrátori môžu nastaviť aj poradie podponúk;
* Pridané: Režim nahradenia stránky teraz podporuje všetky dostupné položky ponuky;

### Verzia 1.4.0 - 14/02/2019 (samostatný) & 27/02/2019 (doplnok)

* Pridané: Spustené ako samostatný doplnok na https://wpadminpagespro.com
* Pridané: Možnosť odstrániť položku ponuky Admin Pages z ponuky po dokončení procesu vytvárania stránky;
* Pridané: Možnosť odstrániť administrátorské oznámenia z administrátorských stránok;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Pridané: Inline Editor;
* Pridané: Konsolidovaná rodičovská trieda zdroja obsahu, aby bolo v budúcnosti jednoduché pridávať nové Page Builders/zdroje obsahu;
* Pridané: Podpora externých URL;

### Verzia 1.3.0 - 15/01/2019

* Opravené: Admin Pages sa nezobrazujú na hlavnej stránke v prostrediach multisite;
* Vylepšené: Odstránené vlastné typy príspevkov Multisite Ultimate z obrazovky exportu podstránok;
* Pridané: Horná lišta s rýchlymi akciami pre sieťových administrátorov na stránkach vytvárania;
* Pridané: OBROVSKÉ! Podpora Elementor!
* Pridané: OBROVSKÉ! Podpora Brizy!

### Verzia 1.2.1 - 17/11/2018

* Opravené: Zabezpečená kompatibilita doplnku s Multisite Ultimate 1.9.0;

### Verzia 1.2.0 - 10/09/2018

* Pridané: Pridaná podpora PHP, ak je WU_APC_ALLOW_PHP_PROCESSING nastavené na true vo wp-config.php. Toto nepoužíva PHP eval, ale stále to môže viesť k bezpečnostným dieram. Používajte to opatrne;
* Vylepšené: Aktualizátor doplnku add-on;
* Vylepšené: Nová URL pre server aktualizácií;

### Verzia 1.1.2 - 16/08/2018

* Opravené: Malý problém s WP Engine;

### Verzia 1.1.1 - 16/08/2018

* Opravené: Oprávnenia sa správne neuplatňovali na nahradzované stránky;

### Verzia 1.1.0 - 15/08/2018

* Pridané: Šablóny Beaver Builder sú teraz podporované! Na vytváranie vlastných administrátorských stránok môžete použiť svoj obľúbený page builder;
* Pridané: Teraz je možné nahradiť aj obsah predvolených administrátorských stránok WordPress;
* Pridané: Teraz je možné pridať vytvorený obsah aj na vrch alebo spodok predvolených administrátorských stránok WordPress;

### 0.0.1
- Úvodné vydanie
