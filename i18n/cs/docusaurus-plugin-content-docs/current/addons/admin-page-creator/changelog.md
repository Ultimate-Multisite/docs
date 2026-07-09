---
title: Změnový deník pro vytvoření administrace
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Changelog pro Admin Page Creator {#admin-page-creator-changelog}

### Verze 1.9.0 - Vydáno 2026-01-18 {#version-190---released-on-2026-01-18}

* Opraveno: Fatální chyby při aktivaci.
* Přepracováno: Třídy zdrojů obsahu nyní používají Singleton trait s řádnou inicializací rodičovského konstruktoru.
* Opraveno: Chyby při kompilaci šablon Vue.js, které bránily vykreslení vyběru typu obsahu.
* Opraveno: Chybějící vlastnosti dat Vue (template_id, external_link_url_embedable, external_link_url_checking).
* Opraveno: Editor TinyMCE se při načítání stránky neinicializoval správně.
* Opraveno: Soubor podpory Divi nebyl automaticky načten přes Composer.
* Opraveno: Zkorošená PHP syntaxe v třídě podpory Divi.
* Vylepšeno: Organizace a minifikace JavaScriptu.
* Vylepšeno: Kompatibilita s nejnovějšími verzemi WordPressu a page builderů.

= Verze: 1.8.8 - Vydáno 2025-09-28

* Předpona změněna na ultimate-multisite; aktualizován textový domén (text domain); zvýšena verze.

### Verze 1.8.7 - 04/10/2023 {#version-187---04102023}

* Opraveno: Fatální chyba při pokusu o přidání nové admin stránky;
* Opraveno: Konflikt s prefixem barevových listů Oxygen.

### Verze 1.8.6 - 09/08/2023 {#version-186---09082023}

* Přidáno: Přidána možnost zobrazení dat z hlavní stránky nebo aktuální sub-stránky.
* Přidáno: Přidána podpora pro WordPress Block Editor (Gutenberg).
* Opraveno: Opraven problém s načítáním assetů stránky Brizy.

### Verze 1.8.5 - 09/12/2020 {#version-185---09122020}

* Opraveno: Problém s nastavením zobrazení (Screen Options), kdy se skrytí menu neukončovalo.

### Verze 1.8.4 - 11/11/2020 {#version-184---11112020}

* Opraveno: Podpora pro Multisite Ultimate v2;

### Verze 1.8.3 - 01/10/2020 {#version-183---01102020}

* Opraveno: Nekompatibility s Beaver Builder z předchozí verze;
* Opraveno: Neshody s okrajovými prostory (Margin) u WP 5.5;

### Verze 1.8.2 - 21/09/2020 {#version-182---21092020}

* Opraveno: Malé nekompatibility s WP 5.5;

### Verze 1.8.1 - 05/08/2020 {#version-181---05082020}

* Opraveno: Nekompatibilita s Brizy 2.0;
* Opraveno: Malé problémy s výkonem při vytváření seznamu menu;

### Verze 1.8.0 - 27/04/2020 {#version-180---27042020}

* Opraveno: Upozornění, která se skryvala pod horní lištou, když nebyl vybrán režim s okrajovými prostory;
* Přidáno: Vlastní stránky nyní mohou nahradit více úrovní WordPress admin stránek a sub-stránek najednou;
* Přidáno: Administrátoři nyní mohou skrývat admin stránky pomocí WP Admin Pages PRO;

### Verze 1.7.9 - 01/04/2020 {#version-179---01042020}

* Opraveno: Brizy 1.10.118 a novější narušovaly podporu SVG na admin stránkách;

### Verze 1.7.8 - 26/03/2020 {#version-178---26032020}

* Opraveno: Chyba při escapingu narušovala stránku Editoru při použití francouzštiny;

### Verze 1.7.7 - 04/03/2020 {#version-177---04032020}

* Opraveno: Malá nekompatibilita s Brizy Builder;
* Vylepšeno: Aktualizován Freemius SDK na verzi 2.3.2;

### Verze 1.7.6 - 10/02/2020 {#version-176---10022020}

* Opraveno: Tlačítko pro editaci admin stránky v pravém dolním rohu nefungovalo na Dashboard Widgets;
* Opraveno: Malá nekompatibilita s Astra;
* Opraveno: Nová verze Brizy narušovala kompatibilitu;

### Verze 1.7.5 - 14/12/2019 {#version-175---14122019}

* Opraveno: Přidán nový handler pro okrajové případy (edge-case), který vyplňuje položky menu v možnostech Nahrazení stránky;
* Opraveno: Fonty Elementoru nefungovaly;
* Vylepšeno: Aktualizován Freemius SDK pro podporu skrytí citlivých informací ze stránky Account.

### Verze 1.7.4 - 29/11/2019 {#version-174---29112019}

* Opraveno: Nekompatibilita s WooCommerce Memberships;
* Opraveno: Komponenta tabu Oxygen Builder nefungovala;
* Opraveno: Beaver Themer nefungoval;

### Verze 1.7.3 - 12/07/2019 {#version-173---12072019}

* Opraveno: Stránky mizely, když byl jejich rodič převeden na jiný typ admin stránky;
* Vylepšeno: Lepší oddělovače v tabulce seznamu mezi různými typy Admin Page;
* Vylepšeno: Bezpečnostní přezkum celého kódu pluginu;
* Vylepšeno: Poznámka o varování v tabu Separator, když funkce není k dispozici pro daný typ menu/zdroje obsahu.

### Verze 1.7.2 - 01/07/2019 {#version-172---01072019}

* Opraveno: Aktualizována verze Freemius SDK na 2.3.0;
* Opraveno: Problém s nekompatibilitou s Flywheel;

### Verze 1.7.1 - 27/06/2019 {#version-171---27062019}

* Opraveno: Welcome Widget je nyní zobrazen pro všechny role;
* Opraveno: Screen Option pro skrytí/zobrazení menu Admin Pages není přidán, pokud je menu skryto pomocí filtru dokumentovaného na https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Vylepšeno: Skrytí menu Admin Pages nyní skrývá i šablony vytvořené ze seznamu uložených šablon Beaver Builder v uživatelském rozhraní builderu;
* Přidáno: Možnosti hromadné aktivace a deaktivace admin stránek;
* Přidáno: Možnost zobrazení stránek i na hlavní stránce;
* Přidáno: Možnost přepínání jmen záhlaví menu na úrovni topu a sub-úrovně v režimu Replace.

### Verze 1.7.0 - 04/06/2019 {#version-170---04062019}

* Opraveno: Problémy se zobrazením šablon Oxygen;
* Přidáno: Podpora pro vytvoření Widgetů!

### Verze 1.6.1 - 22/05/2019 {#version-161---22052019}

* Opraveno: Typografie (chyby v psaní);
* Opraveno: Sub-menu stránky přeháněly předchozí položky sub-menu se stejnou hodnotou pořadí;
* Opraveno: Duplikace nyní resetuje slug duplikované stránky;
* Vylepšeno: Aktualizovány po soubory pt_BR a es_ES;
* Vylepšeno: Seznam tabul nyní uvádí název vlastních stránek také jako rodičovské stránky.

### Verze 1.6.0 - 21/05/2019 {#version-160---21052019}

* Přidáno: Externí odkazy nyní podporují i načítání iframe.

### Verze 1.5.5 - 17/05/2019 {#version-155---17052019}

* Opraveno: Výstražná zpráva byla vyvolána, když byla stránka smazána nebo duplikována;
* Opraveno: Nastavení oprávnění nebyly aplikovány na administrátory;

### Verze 1.5.4 - 08/05/2019 {#version-154---08052019}

* Opraveno: Nekompatibility s Sliced Invoices;
* Opraveno: Malý problém s Oxygen;
* Opraveno: Placeholder v novém poli názvu admin stránky neukončoval při zadávání klávesy.

### Verze 1.5.3 - 03/05/2019 {#version-153---03052019}

* Opraveno: Nekompatibilita s stránkami možností Advanced Custom Field;
* Přidáno: Možnost přidání konkrétních uživatelů jako cíl vlastních admin stránek;

### Verze 1.5.2 - 30/04/2019 {#version-152---30042019}

* Opraveno: Nekompatibility s novějšími verzemi Brizy;
* Přidáno: Přidáno španělské překladu – díky Johnovi Rozzo. Díky, John!
* Přidáno: Beta podpora pro Oxygen Builder;

### Verze 1.5.1 - 15/04/2019 {#version-151---15042019}

* Opraveno: Problém s placeholderem v editorech Normal a HTML;
* Opraveno: Admin Pages se neobjevovaly na Tools -> Export;
* Opraveno: Načítání skriptů a stylů pouze na našich stránkách;
* Přidáno: Super administrátoři nyní mohou duplikovat Admin Pages;

### Verze 1.5.0 - 29/03/2019 {#version-150---29032019}

* Opraveno: Malé chyby zachycené Sentry;
* Opraveno: Tlačítko pro smazání nefungovalo na obrazovce Edit Admin page;
* Vylepšeno: Tlačítko BeaverBuilder bylo změněno, aby bylo jasné, že je podporována i standardní licence BB;
* Přidáno: Administrátoři nyní mohou nastavit pořadí sub-menu;
* Přidáno: Režim nahrazení stránek nyní podporuje všechny dostupné položky menu;

### Verze 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* Přidáno: Spuštěno jako samostatný plugin na https://wpadminpagespro.com
* Přidáno: Možnost odstranit položku menu Admin Pages z menu po dokončení procesu vytváření stránky;
* Přidáno: Možnost odstranit administrátorské upozornění ze stránek;
* Přidáno: Zpracování obsahu, takže můžete umístit placeholder jako {{user:first_name}} a automaticky nahradit ho meta polem jméno uživatele;
* Přidáno: Inline Editor;
* Přidáno: Konsolidovaná rodičovská třída zdrojů obsahu, aby bylo v budoucnu snadné přidávat nové Page Builders/Content Sources;
* Přidáno: Podpora pro Externí URL.

### Verze 1.3.0 - 15/01/2019 {#version-130---15012019}

* Opraveno: Admin Pages se na multisite prostředí neobjevovaly na hlavní stránce;
* Vylepšeno: Odstraněny vlastní typy příspěvků Multisite Ultimate ze zobrazení exportu sub-stránek;
* Přidáno: Horní lišta s rychlými akcemi pro administrátory sítě na stránce vytváření;
* Přidáno: VELKÉ! Podpora Elementoru!
* Přidáno: VELKÉ! Podpora Brizy!

### Verze 1.2.1 - 17/11/2018 {#version-121---17112018}

* Opraveno: Zajištěna kompatibilita pluginu s Multisite Ultimate 1.9.0;

### Verze 1.2.0 - 10/09/2018 {#version-120---10092018}

* Přidáno: Podpora PHP byla přidána, pokud je v wp-config.php nastavená hodnota WU_APC_ALLOW_PHP_PROCESSING na true. To nepoužívá PHP's eval, ale stále může vést k bezpečnostním dírami. Používejte to opatrně;
* Vylepšeno: Aktualizátor add-on pluginu;
* Vylepšeno: Nová URL pro server aktualizací;

### Verze 1.1.2 - 16/08/2018 {#version-112---16082018}

* Opraveno: Malý problém s WP Engine;

### Verze 1.1.1 - 16/08/2018 {#version-111---16082018}

* Opraveno: Oprávnění nebyly správně aplikována na nahrazované stránky;

### Verze 1.1.0 - 15/08/2018 {#version-110---15082018}

* Přidáno: Nyní jsou podporovány šablony Beaver Builder! Můžete použít svůj oblíbený page builder k vytvoření vlastních admin stránek;
* Přidáno: Nyní je možné nahradit obsah výchozních admin stránek WordPressu;
* Přidáno: Nyní je možné přidat vytvořený obsah na začátek nebo konec výchozních admin stránek WordPressu.

### 0.0.1 {#001}
- První vydání
