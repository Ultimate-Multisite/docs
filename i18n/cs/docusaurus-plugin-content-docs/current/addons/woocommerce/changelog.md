---
title: Změnový deník integrace WooCommerce
sidebar_position: 99
_i18n_hash: b34d062c52ab13dbab02f7162f01e641
---
# Změny v integraci WooCommerce

Verze 2.0.6 - Vydáno 16.01.2026
* Zlepšení: Zahrnuje základní předplatné do doplňku. Už není nutné rozšíření WooCommerce Subscriptions.

Verze 2.0.5 - Vydáno 09.01.2026
* Zlepšení: Načítá překlady z API glotpress.
* Oprava: Fatální chyba v některých page builderích.
* Oprava: Nekonečný přesměrování, když je zákazník členem hlavní stránky.

Verze 2.0.4 - Vydáno 14.11.2025
* Přidáno: Překlady pro mnohem více jazyků.
* Změněno: Překřejováno na Ultimate Multisite: Woocommerce Integration.
* Přidáno: Kompatibilita s Woocommerce 10.2.1.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 7.7.0.
* Oprava: Kompatibilita s PHP 8.4
* Oprava: Přesměrování, ale když neexistuje stránka účtu WC.

Verze 2.0.3 - Vydáno 13.08.2025
* Změněno: Zapnuto automatické aktualizace s novým marketplace.

Verze 2.0.2 - Vydáno 05.07.2025
* Změněno: Překřejováno na Multisite Ultimate: Woocommerce Integration.
* Přidáno: Kompatibilita s Woocommerce 9.8.1.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 7.3.0.
* Oprava: Zrušení předplatného zákazníkem.
* Oprava: Fatální chyba při použití bloku pokladny.
* Zlepšení: Nyní je kompatibilní s pokročilými vlastními tabulkami objednávek WooCommerce.
* Oprava: Zrušení na pokladně WooCommerce stále může upgradovat členství.

Verze 2.0.1 - Vydáno 09.08.2023

* Přidáno: Kompatibilita s Woocommerce 7.9.0.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 5.3.0.
* Přidáno: Podpora pro aktualizace členství.
* Přidáno: Upozornění na zkušební období a poplatky za nastavení v Woocommerce.
* Přidáno: Identifikace produktů Ultimate Multisite Woocommerce pomocí meta hodnoty.
* Přidáno: Vložena jednorázová oprava pro označení všech produktů souvisejících s Ultimate Multisite.
* Přidáno: Odstraněny produkty vytvořené Ultimate Multisite ze seznamu Woocommerce.
* Zlepšení: Vytvořeno neperiodické snížení ceny WooCommerce pro aplikaci do košíku.
* Zlepšení: Obnoveno periodické snížení ceny pro produkt WooCommerce.
* Zlepšení: Přidáno označení periodického snížení ceny na produkt WooCommerce.
* Zlepšení: Zajistěno, že na pokladně je správný typ produktu.
* Oprava: Udržován stav členství během procesu snížení úrovně.
* Oprava: Kontroluje, zda existuje předplatné, aby se zabránilo chybám během procesu zrušení.
* Oprava: Přidáno datum zahájení předplatného pro použití v předplatných WooCommerce.
* Interní: Implementován nový proces sestavení PHP 8.1.

Verze 2.0.0 - Kompletní přepsání.

* Přidáno: Metoda zpracování zrušení pro odstranění předplatného woo při změně brány nebo zrušení členství;
* Přidáno: Handler pro snížení a zvýšení členství;
* Zlepšení: Načítání závislostí WooCommerce na formuláři aktualizace zákazníka v subsitích, aby bylo možné aktualizovat účet;
* Zlepšení: Opravené načítání košíku WooCommerce, pokud neexistuje;
* Zlepšení: Zajistěno, že při zpracování pokladny pracujeme s tabulkami hlavní stránky;
* Zlepšení: Zajištěno, že objednávka Ultimo je založena na hodnotě předplatného WooCommerce, nikoli na poslední platbě;
* Oprava: Přesměrování na tlačítko členství WU;
* Oprava: Nastaveno, že objednávka Ultimo je zaplacená, když je obnovení předplatného WooCommerce zaplaceno;
* Build: Přidán MPB jako builder;

Verze 2.0.0-beta-5 - Vydáno 21.01.2022

* Interní: Přidán generátor hooků a filtrů;
* Interní: Přidány Ultimate Multisite stubs pro zlepšení kvality života vývojáře;
* Opraveno: Zabraňování vytvoření více produktů, když to není nutné;

Verze 2.0.0-beta.4 - 23.09.2021

* Oprava: Vyžadování, aby WooCommerce byl aktivní na celé síti, nikoli pouze na hlavní stránce;
* Zlepšení: Přidán filtr, který umožňuje použít addon jako mu-plugin;

Verze 2.0.0-beta.3 - 28.05.2021

* Oprava: Kontrola přístupu k dashboardu byla příliš agresivní;
* Zlepšení: Přidány odkazy na pomoc WooCommerce do horního menu Ultimate Multisite;

Verze 2.0.0-beta.2 - 04.05.2021

* Zlepšení: Vytváří čekající platby na Ultimo při vytvoření objednávky obnovy WCS;
* Zlepšení: Předplňuje pole pro fakturaci daty zákazníka Ultimate Multisite;
* Zlepšení: Přidává pole pro fakturaci pro brány platby;

Verze 2.0.0-beta.1 - 04.05.2021

* Počáteční beta vydání

-- Starší verze --

Verze 1.2.6 - 26.03.2020

* Opraveno: Malá nekompatibilita s novějšími verzemi WooCommerce Subscriptions;

Verze 1.2.5 - 26.08.2019

* Opraveno: Chyba z předchozí verze;

Verze 1.2.4 - 22.08.2019

* Vylepšeno: Přidána možnost přesměrování na obrazovku pokladny WooCommerce po integraci ihned;

Verze 1.2.3 - 26.05.2019

* Opraveno: E-mail s platbou pro WooCommerce zmizel v některých okrajových případech;

Verze 1.2.2 - 27.02.2019

* Přidáno: Podpora pro poplatky za nastavení v integraci WooCommerce Subscription;

Verze 1.2.1 - 17.11.2018

* Opraveno: Problémy s kompatibilitou s Ultimate Multisite verze 1.9.0;

Verze 1.2.0 - 10.09.2018

* Vylepšeno: Nová URL pro aktualizace addonů;
* Přidáno: Beta podpora pro WooCommerce Subscription;

Verze 1.1.2 - 11.02.2018

* Opraveno: Odkaz na platbu je generován dynamicky, aby reagoval na změny v koncových bodech WooCommerce;
* Vylepšeno: Nyní vynucujeme stav "dokončeno" pro naše objednávky, když je vyvoláno `payment_completed`, abychom zajistili, že naše kroky pro obnovu se spustí, když by měly.

Verze 1.1.1 - 24.01.2018

* Opraveno: Nyní také kontroluje, zda je WooCommerce aktivován pouze na hlavní stránce;
* Opraveno: Zahrnuto přehání, aby bylo možné vytvářet objednávky včetně daně.

Verze 1.1.0 - 04.11.2017

* Opraveno: Nyní se štítek tlačítka integrace skutečně mění, aby odrážel nastavení. Vyžaduje Ultimate Multisite 1.5.0;
* Opraveno: Integrace WooCommerce funguje i v případě, že WooCommerce není aktivní na celé síti a aktivován pouze na hlavní stránce;

1.0.0 - Počáteční vydání
