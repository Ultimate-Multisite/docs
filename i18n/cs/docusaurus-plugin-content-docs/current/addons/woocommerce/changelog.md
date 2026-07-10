---
title: Seznam změn integrace WooCommerce
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# Seznam změn integrace WooCommerce {#woocommerce-integration-changelog}

Verze 2.2.0 - Vydáno 2026-07-01
* Nové: Částky daní Ultimate Multisite se nyní při pokladně zobrazují jako samostatné řádky poplatků WooCommerce, takže součty daní jsou před platbou přehlednější.
* Nové: Přidáno volitelné nastavení „Suspend Memberships Immediately on Failed Renewals“ a filtr `wu_woo_suspend_on_payment_failure` pro weby, které chtějí pozastavení při neúspěšném obnovení během okna opakování WooCommerce Subscriptions.
* Oprava: Sladěny stavy WooCommerce Subscription, které mohly zůstat nesynchronizované s členstvími Ultimate Multisite po neúspěšných nebo obnovených obnoveních.
* Oprava: Přidána měna obchodu WooCommerce do seznamu měn Ultimate Multisite, když chyběla.
* Oprava: Zachovány fakturační údaje zákazníka při přesměrování odběratelů do pokladny WooCommerce.
* Vylepšeno: Přidána kompatibilita s Jetpack Autoloader 5.
* Vylepšeno: Vyčištěno generování balíčku vydání, aby zipy pro GitHub a marketplace neobsahovaly vnořené staging adresáře a vývojové soubory.

Verze 2.0.6 - Vydáno 2026-01-16
* Vylepšení: Zahrnuje základní předplatná v doplňku. Již nevyžaduje rozšíření Woocommerce Subscriptinos.

Verze 2.0.5 - Vydáno 2026-01-09
* Vylepšení: Načítání překladů z glotpress API.
* Oprava: Fatální chyba v některých page builderech.
* Oprava: Nekonečné přesměrování, když je zákazník členem hlavního webu.

Verze 2.0.4 - Vydáno 2025-11-14
* Přidáno: Překlady pro mnohem více jazyků.
* Změněno: Přejmenováno na Ultimate Multisite: Woocommerce Integration.
* Přidáno: Kompatibilita s Woocommerce 10.2.1.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 7.7.0.
* Oprava: Kompatibilita s PHP 8.4
* Oprava: Přesměrování, když neexistuje stránka účtu WC.

Verze 2.0.3 - Vydáno 2025-08-13
* Změněno: Povoleny automatické aktualizace s novým marketplace.

Verze 2.0.2 - Vydáno 2025-07-05
* Změněno: Přejmenováno na Multisite Ultimate: Woocommerce Integration.
* Přidáno: Kompatibilita s Woocommerce 9.8.1.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 7.3.0.
* Oprava: Zrušení předplatného zákazníkem.
* Oprava: Fatální chyba při použití bloku pokladny.
* Vylepšení: Nyní kompatibilní s vlastními tabulkami objednávek Woocommerce s vysokým výkonem.
* Oprava: Zrušení v pokladně WooCommerce stále může upgradovat členství.

Verze 2.0.1 - Vydáno 2023-08-09

* Přidáno: Kompatibilita s Woocommerce 7.9.0.
* Přidáno: Kompatibilita s Woocommerce Subscriptions 5.3.0.
* Přidáno: Podpora pro aktualizace členství.
* Přidáno: Upozornění o zkušebních obdobích a zřizovacích poplatcích ve Woocommerce.
* Přidáno: Identifikace produktů Ultimate Multisite Woocommerce pomocí meta hodnoty.
* Přidáno: Vložena jednorázová oprava pro označení všech souvisejících produktů Ultimate Multisite ve Woocommerce.
* Přidáno: Produkty vytvořené Ultimate Multisite odstraněny ze seznamu Woocommerce.
* Vylepšení: Vytvořena neopakující se sleva Woocommerce pro použití v košíku.
* Vylepšení: Obnovena opakující se sleva u produktu Woocommerce.
* Vylepšení: Přidán štítek opakující se slevy k produktu Woocommerce.
* Vylepšení: Zajištěn typ produktu při pokladně.
* Oprava: Zachován stav členství během procesu downgradu.
* Oprava: Kontrola, zda existuje předplatné, aby se předešlo chybám během procesu zrušení.
* Oprava: Přidáno datum začátku předplatného pro použití v předplatných Woocommerce.
* Interní: Implementován nový proces sestavení pro PHP 8.1.

Verze 2.0.0 - Kompletní přepsání.

* Přidáno: Metoda zpracování zrušení pro odstranění woo předplatného při změně brány nebo zrušení členství;
* Přidáno: Obslužná rutina pro downgrade a upgrade členství;
* Vylepšení: Načítání závislostí woocommerce ve formuláři aktualizace zákazníka v podwebech pro umožnění aktualizace účtu;
* Vylepšení: Správné načtení košíku Woocommerce, pokud neexistuje;
* Vylepšení: Zajištění, že jsme v tabulkách hlavního webu při zpracování pokladny;
* Vylepšení: Vytvoření obnovovací objednávky Ultimo podle hodnoty objednávky předplatného Woocommerce, nikoli podle poslední platby;
* Oprava: Odkaz tlačítka Přejít na členství WU;
* Oprava: Nastavení objednávky Ultimo jako zaplacené, když bylo zaplaceno obnovení Woocommerce subscriptions;
* Sestavení: Přidání MPB jako builderu;

Verze 2.0.0-beta-5 - Vydáno 2022-01-21

* Interní: Přidán generátor hooků a filtrů;
* Interní: Přidány Ultimate Multisite stuby pro lepší práci vývojářů;
* Opraveno: Zabráněno vytváření více produktů, když to není nutné;

Verze 2.0.0-beta.4 - 2021-09-23

* Oprava: vyžadování, aby WooCommerce byl aktivní v síti, místo pouze na hlavním webu;
* Vylepšení: přidán filtr umožňující použití doplňku jako mu-plugin;

Verze 2.0.0-beta.3 - 2021-05-28

* Oprava: kontrola přístupu k dashboardu byla příliš agresivní;
* Vylepšení: Přidány odkazy nápovědy WooCommerce do horní nabídky Ultimate Multisite;

Verze 2.0.0-beta.2 - 2021-05-04

* Vylepšení: vytváří čekající platby v Ultimo při vytvoření obnovovací objednávky WCS;
* Vylepšení: předvyplňuje fakturační pole zákaznickými údaji Ultimate Multisite;
* Vylepšení: znovu přidává fakturační pole pro brány;

Verze 2.0.0-beta.1 - 2021-05-04

* Počáteční beta vydání

-- Starší verze --

Verze 1.2.6 - 26/03/2020

* Opraveno: Malá nekompatibilita s novějšími verzemi WooCommerce Subscriptions;

Verze 1.2.5 - 26/08/2019

* Opraveno: Chyba v předchozím vydání;

Verze 1.2.4 - 22/08/2019

* Vylepšeno: Přidána možnost okamžitého přesměrování na obrazovku pokladny WooCommerce po integraci;

Verze 1.2.3 - 26/05/2019

* Opraveno: Platební e-mail pro WooCommerce v některých okrajových případech zmizel;

Verze 1.2.2 - 27/02/2019

* Přidáno: Podpora zřizovacích poplatků v integraci WooCommerce Subscription;

Verze 1.2.1 - 17/11/2018

* Opraveno: Problémy s kompatibilitou s verzí Ultimate Multisite 1.9.0;

Verze 1.2.0 - 10/09/2018

* Vylepšeno: Nová URL aktualizací pro doplňky;
* Přidáno: Beta podpora pro WooCommerce Subscription;

Verze 1.1.2 - 11/02/2018

* Opraveno: Odkaz pro zaplacení se generuje dynamicky, aby reagoval na změny endpointů WooCommerce;
* Vylepšeno: Nyní vynucujeme stav dokončeno pro naše objednávky, když je zavoláno payment_completed, abychom zajistili, že naše hooky obnovení poběží, když mají;

Version 1.1.1 - 24/01/2018

* Opraveno: Nyní také kontroluje, zda je WooCommerce právě aktivován na hlavním webu;
* Opraveno: Zahrnuta přetížení, aby vytvoření objednávky mohlo zahrnovat daně;

Version 1.1.0 - 04/11/2017

* Opraveno: Nyní se popisek integračního tlačítka skutečně mění tak, aby odrážel nastavení. Vyžaduje Ultimate Multisite 1.5.0;
* Opraveno: WooCommerce Integration nyní funguje, i když WooCommerce není aktivní v síti a je aktivován pouze na hlavním webu;

1.0.0 - První vydání
