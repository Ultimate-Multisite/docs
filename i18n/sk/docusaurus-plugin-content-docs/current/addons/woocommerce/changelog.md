---
title: Zoznam zmien integrácie WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Záznam zmien integrácie WooCommerce

Verzia 2.2.0 - Vydaná dňa 2026-07-01
* Nové: Sumy daní Ultimate Multisite sa teraz zobrazujú ako samostatné riadky poplatkov WooCommerce pri pokladni, vďaka čomu sú súčty daní pred platbou jasnejšie.
* Nové: Pridané voliteľné nastavenie "Suspend Memberships Immediately on Failed Renewals" a filter `wu_woo_suspend_on_payment_failure` pre lokality, ktoré chcú pozastavenie po neúspešnom obnovení počas okna opakovaných pokusov WooCommerce Subscriptions.
* Oprava: Zosúladené stavy WooCommerce Subscription, ktoré mohli po neúspešných alebo obnovených obnoveniach zostať nesynchronizované s členstvami Ultimate Multisite.
* Oprava: Pridaná mena obchodu WooCommerce do zoznamu mien Ultimate Multisite, keď chýbala.
* Oprava: Zachované fakturačné údaje zákazníka pri presmerovaní predplatiteľov na pokladňu WooCommerce.
* Vylepšené: Pridaná kompatibilita s Jetpack Autoloader 5.
* Vylepšené: Vyčistené generovanie vydávacieho balíka, aby zip súbory pre GitHub a marketplace neobsahovali vnorené staging adresáre a vývojové súbory.

Verzia 2.0.6 - Vydaná dňa 2026-01-16
* Vylepšenie: Zahrnuté jadrové predplatné v doplnku. Už nevyžaduje rozšírenie Woocommerce Subscriptinos.

Verzia 2.0.5 - Vydaná dňa 2026-01-09
* Vylepšenie: Načítanie prekladov z glotpress API.
* Oprava: Fatálna chyba v niektorých page builderoch.
* oprava: Nekonečné presmerovanie, keď je zákazník členom hlavnej lokality.

Verzia 2.0.4 - Vydaná dňa 2025-11-14
* Pridané: Preklady pre oveľa viac jazykov.
* Zmenené: Premenované na Ultimate Multisite: Woocommerce Integration.
* Pridané: Kompatibilita s Woocommerce 10.2.1.
* Pridané: Kompatibilita s Woocommerce Subscriptions 7.7.0.
* Oprava: Kompatibilita s PHP 8.4
* Oprava: Presmerovanie, keď neexistuje stránka WC Account.

Verzia 2.0.3 - Vydaná dňa 2025-08-13
* Zmenené: Povolené automatické aktualizácie s novým marketplace.

Verzia 2.0.2 - Vydaná dňa 2025-07-05
* Zmenené: Premenované na Multisite Ultimate: Woocommerce Integration.
* Pridané: Kompatibilita s Woocommerce 9.8.1.
* Pridané: Kompatibilita s Woocommerce Subscriptions 7.3.0.
* Oprava: Zrušenie predplatného zákazníkom.
* Oprava: Fatálna chyba pri použití checkout bloku.
* Vylepšenie: Teraz kompatibilné s vlastnými tabuľkami objednávok s vysokým výkonom Woocommerce.
* Oprava: Zrušenie pri pokladni WooCommerce môže stále upgradovať členstvo.

Verzia 2.0.1 - Vydaná dňa 2023-08-09

* Pridané: Kompatibilita s Woocommerce 7.9.0.
* Pridané: Kompatibilita s Woocommerce Subscriptions 5.3.0.
* Pridané: Podpora aktualizácií členstva.
* Pridané: Oznámenia o skúšobných obdobiach a zriaďovacích poplatkoch vo Woocommerce.
* Pridané: Identifikácia produktov Ultimate Multisite Woocommerce pomocou meta hodnoty.
* Pridané: Vložená jednorazová oprava na označenie všetkých produktov Woocommerce súvisiacich s Ultimate Multisite.
* Pridané: Odstránené produkty vytvorené Ultimate Multisite zo zoznamu Woocommerce.
* Vylepšenie: Vytvorená jednorazová zľava Woocommerce na uplatnenie v košíku.
* Vylepšenie: Obnovená opakovaná zľava pre produkt Woocommerce.
* Vylepšenie: Pridaný štítok opakovanej zľavy k produktu Woocommerce.
* Vylepšenie: Zaistený typ produktu pri pokladni.
* Oprava: Zachovaný stav členstva počas procesu downgrade.
* Oprava: Skontrolované, či existuje predplatné, aby sa predišlo chybám počas procesu zrušenia.
* Oprava: Pridaný dátum začiatku predplatného na použitie v predplatných Woocommerce.
* Interné: Implementovaný nový proces zostavenia PHP 8.1.

Verzia 2.0.0 - Kompletné prepísanie.

* Pridané: Metóda spracovania zrušenia na odstránenie woo predplatného pri zmene platobnej brány alebo zrušení členstva;
* Pridané: Handler na downgrade a upgrade členstiev;
* Vylepšenie: Načítanie závislostí woocommerce vo formulári aktualizácie zákazníka v podlokalitách, aby bolo možné aktualizovať Account;
* Vylepšenie: Správne načítanie košíka Woocommerce, ak neexistuje;
* Vylepšenie: Zabezpečenie, že sme pri spracovaní pokladne na tabuľkách hlavnej lokality;
* Vylepšenie: Vytvorenie objednávky obnovenia Ultimo na základe hodnoty objednávky predplatného Woocommerce, nie z poslednej platby;
* Oprava: Odkaz tlačidla Prejsť na členstvo WU;
* Oprava: Nastavenie objednávky Ultimo ako zaplatenej, keď bolo obnovenie Woocommerce subscriptions zaplatené;
* Zostavenie: Pridaný MPB ako builder;

Verzia 2.0.0-beta-5 - Vydaná dňa 2022-01-21

* Interné: Pridaný generátor hookov a filtrov;
* Interné: Pridané Ultimate Multisite stubs pre lepšiu prácu vývojárov;
* Opravené: Zabránenie vytváraniu viacerých produktov, keď to nie je potrebné;

Verzia 2.0.0-beta.4 - 2021-09-23

* Oprava: vyžadovanie, aby bol WooCommerce aktívny v sieti namiesto iba na hlavnej lokalite;
* Vylepšenie: pridaný filter, ktorý umožňuje používať doplnok ako mu-plugin;

Verzia 2.0.0-beta.3 - 2021-05-28

* Oprava: kontrola prístupu do dashboardu bola príliš agresívna;
* Vylepšenie: Pridané odkazy pomocníka WooCommerce do horného menu Ultimate Multisite;

Verzia 2.0.0-beta.2 - 2021-05-04

* Vylepšenie: vytvára čakajúce platby v Ultimo pri vytvorení objednávky obnovenia WCS;
* Vylepšenie: predvyplní fakturačné polia údajmi zákazníka Ultimate Multisite;
* Vylepšenie: pridáva späť fakturačné polia pre platobné brány;

Verzia 2.0.0-beta.1 - 2021-05-04

* Úvodné beta vydanie

-- Staršie verzie --

Verzia 1.2.6 - 26/03/2020

* Opravené: Malá nekompatibilita s novšími verziami WooCommerce Subscriptions;

Verzia 1.2.5 - 26/08/2019

* Opravené: Chyba v predchádzajúcom vydaní;

Verzia 1.2.4 - 22/08/2019

* Vylepšené: Pridaná možnosť okamžite po integrácii presmerovať na obrazovku pokladne WooCommerce;

Verzia 1.2.3 - 26/05/2019

* Opravené: Platobný e-mail pre WooCommerce v niektorých okrajových prípadoch zmizol;

Verzia 1.2.2 - 27/02/2019

* Pridané: Podpora zriaďovacích poplatkov pri integrácii WooCommerce Subscription;

Verzia 1.2.1 - 17/11/2018

* Opravené: Problémy s kompatibilitou s verziou Ultimate Multisite 1.9.0;

Verzia 1.2.0 - 10/09/2018

* Vylepšené: Nová URL aktualizácií pre doplnky;
* Pridané: Beta podpora pre WooCommerce Subscription;

Verzia 1.1.2 - 11/02/2018

* Opravené: Odkaz na zaplatenie sa generuje dynamicky, aby reagoval na zmeny endpointov WooCommerce;
* Vylepšené: Teraz vynucujeme stav dokončené pre naše objednávky, keď sa zavolá payment_completed, aby sme zabezpečili, že naše hooky obnovenia sa spustia vtedy, keď majú;

Verzia 1.1.1 - 24/01/2018

* Opravené: Teraz tiež kontroluje, či je WooCommerce práve aktivovaný na hlavnej stránke;
* Opravené: Zahrnuté preťaženia, aby vytváranie objednávok mohlo zahŕňať dane;

Verzia 1.1.0 - 04/11/2017

* Opravené: Teraz sa označenie integračného tlačidla skutočne mení tak, aby odrážalo nastavenia. Vyžaduje Ultimate Multisite 1.5.0;
* Opravené: WooCommerce Integration teraz funguje aj vtedy, keď WooCommerce nie je aktívny v sieti a je aktivovaný iba na hlavnej stránke;

1.0.0 - Počiatočné vydanie
