---
title: Často kladené otázky
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# Často kladené otázky

Tu sú niektoré **často kladené otázky**, ktoré sa často objavujú pri žiadankách o podporu.

  * **Čo je Ultimate Multisite?**

Ultimate Multisite je WordPress plugin, ktorý je určený pre instalácie WordPress multisite a transformuje vašu instaláciu do premium siete cien – podobnej [WordPress.com] – čo umožňuje klientom vytvárať webové stránky za mesačné, čtvrté alebo ročné poplatky (môžete vytvárať aj bezplatné plány).

  * **Čo sa stane, ak Ultimate Multisite nefunguje bez Multisite?**

Nie. Ultimate Multisite vyžaduje WordPress multisite, podkategóriu (subdirectory) alebo poddoménu (subdomain).

  * **Ak sú požiadavky na Ultimate Multisite?**

Ultimate Multisite vyžaduje:

**Verzia WordPress**: v5.3+ (Doporučujeme: Najnovšia stabilná verzia)
**Verzia PHP**: 7.4.x (Podpora pre > 8.0 je čoskoro)
**Verzia MySQL**: v5+ (Doporučujeme: Verzia 5.6, ak na vašom hostingovom poskytovateľovi nemáte dostupnú verziu 8.0)

_Musí byť tiež aktivovaná Multisite (podkategória alebo poddoména). Viac informácií o tom, ako nainštalovať WordPress Multisite nájdete tu: [Ako nainštalovať WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite)._

  * **Funguje Ultimate Multisite s podkategóriami (subdirectories)?**

Áno. Ultimate Multisite podporuje ako instalácie v podkategóriách, tak aj instalácie v podkategóriách.

  * **Funguje Ultimate Multisite s poddoménkami (subdomains)?**

Áno. Ultimate Multisite podporuje ako instalácie v podkategóriách, tak aj instalácie v poddoménkach.

  * **Možnosť použiť Ultimate Multisite na obmedzenie pluginov a témy, ktoré používajú používatelia?**

Áno. S Ultimate Multisite môžete vybrať, aké pluginy a témy sú k dispozícii pre každý plán v vašej sieti.

  * **Možnosť použiť Ultimate Multisite na obmedzenie počtu príspevkov, ktoré môže používateľ vytvoriť na jeho stránke?**

Áno. S s Ultimátnom multisite môžete vytvoriť kvóty pre príspevky pre **každý dostupný typ príspevku** v celej sieti. Môžete tiež obmedziť počet používateľov, ktorých môže admin pozvať, **množstvo diskového priestoru** a mnoho ďalších vecí.

  * **Podporuje Ultimátny multisite šablóny sítí?**

Áno. S Ultimátnym multisite môžete vytvoriť taku siatku šablón prečokoľvek. Šablóny sítí nie sú témami, je to normálne sity v vašej sieti. Môžete aktivovať pluginy, témy a prispôsobiť túto siatku ako chcete. Ak používateľ vybere tú šablónu, jeho sita sa vytvorí ako kopie tejto šablóny so všetkými prispôsobeniami na mieste.

Môžete tiež nastaviť šablónu pre konkrétny plán. Týmto spôsobom bude každá siatka používateľa, ktorý sa zaregistruje na tento plán, vytvorená ako duplicita tejto šablóny sítí.

  * **Integruje sa Ultimátny multisite s WooCommerce?**

Áno!

Ak chcete, aby používatelia vašej siete mali k dispozícii WooCommerce, aby si mohli vytvárať obchody, je to možné pomocou Ultimátneho multisite. Môžete tiež obmedziť počet produktov, ktoré môžu vaši zákazníci vytvoriť na každom úrovni plánu.

V zmysle predplatných platieb pre Ultimátny multisite môžete použiť [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/), aby umožnili vašim klientom Ultimátneho multisite platiť pomocou WooCommerce gatewayov na vašej hlavnej sieti. Takto môžete využiť obrovskú knižnicu platobných gatewayov vyvinutých pre WooCommerce a používať ich na fakturáciu vašich klientov Ultimátneho multisite.

  * **Je existuje spôsob migracie predplatných z WPMUDEV Pro Sitov?**

Ultimate Multisite vám teraz ponúka [pomocný nástroj na migraci] vašej siete Pro Sites (https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/).

* **Prečo je záložka „Povolené súvisi“ prázdna na mojej stránke úpravy plánu?**

Ultimate Multisite vám umožňuje povoliť alebo zakázať prístup k externým pluginom, ktoré nie sú aktivované v sieti. Keď plugin je aktivovaný v sieti, bude ho štandardne načítavať na každej site v sieti.

Ak nevidíte žiadne pluginy v záložke „Povolené súvisi“, zistite, či je požadovaný plugin aktivovaný v sieti alebo nie.

* **Môžem používať môj vlastný dizajn tabuľky cien?**

Áno. Od verzie 1.4.0 Ultimate Multisite podporuje prejsť (template overrides).

* **Dá Ultimate Multisite fungovať s WP Engine?**

Áno. Ultimate Multisite vždy podporoval WP Engine, ale aby sa mapovanie domén pracovalo, potrebovali ste manuálne extra kroky od admina (pridanie domény do panela WP Engine). **Toto už nie je aktuálne od verzie 1.6.0.** Ultimate Multisite sa integrova priamo s API WP Engine a domény sa automaticky pridajú do panela po mapovaní.

* **Aký poskytovateľ hostingu odporúčate?**

Ultimate Multisite by mal fungovať s akýmkoľvek poskytovateľom hostingu. Jediná rozdiel je, že niektoré spoločnosti ako Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane a [Runcloud.io](http://Runcloud.io) majú lepšiu integráciu pre mapovanie domén, takže fungujú bez toho, aby ste museli robiť manuálne kroky. Pre iné hostings môžete mať potrebu o mape domén manuálne sami.
