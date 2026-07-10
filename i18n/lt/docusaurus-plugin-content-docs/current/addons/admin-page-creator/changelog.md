---
title: Administratoriaus puslapio kūrėjo pakeitimų žurnalas
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# Administratoriaus puslapių kūrimo pakeitimų žurnalas {#admin-page-creator-changelog}

### Versija 1.9.0 - Išleista 2026-01-18 {#version-190---released-on-2026-01-18}

* Ištaisyta: lemtingos klaidos aktyvuojant.
* Perstruktūrizuota: turinio šaltinio klasės, kad naudotų Singleton trait su tinkamu tėvinio konstruktoriaus inicijavimu
* Ištaisyta: Vue.js šablono kompiliavimo klaidos, neleidusios atvaizduoti turinio tipo parinkiklio
* Ištaisyta: trūkstamos Vue duomenų ypatybės (template_id, external_link_url_embedable, external_link_url_checking)
* Ištaisyta: TinyMCE redaktorius tinkamai neinicijuojamas įkeliant puslapį
* Ištaisyta: Divi palaikymo failas nebuvo automatiškai įkeliamas per Composer
* Ištaisyta: sugadinta PHP sintaksė Divi palaikymo klasėje
* Patobulinta: JavaScript išteklių organizavimas ir minifikavimas
* Patobulinta: suderinamumas su naujausiomis WordPress ir puslapių kūrimo priemonių versijomis

= Versija: 1.8.8 - Išleista 2025-09-28

* Pervadintas prefiksas į ultimate-multisite; atnaujintas teksto domenas; versijos pakėlimas.

### Versija 1.8.7 - 04/10/2023 {#version-187---04102023}

* Ištaisyta: lemtinga klaida bandant pridėti naują administratoriaus puslapį;
* Ištaisyta: konfliktas su Oxygen stilių lentelių prefiksu;

### Versija 1.8.6 - 09/08/2023 {#version-186---09082023}

* Pridėta: pridėta parinktis rodyti duomenis iš pagrindinės svetainės arba dabartinės posvetainės.
* Pridėta: pridėtas WordPress Block Editor (Gutenberg) palaikymas.
* Ištaisyta: ištaisyta problema, dėl kurios Brizy puslapio ištekliai nebuvo įkeliami.

### Versija 1.8.5 - 09/12/2020 {#version-185---09122020}

* Ištaisyta: problema, kai Screen Options skirta meniu paslėpti neišnykdavo;

### Versija 1.8.4 - 11/11/2020 {#version-184---11112020}

* Ištaisyta: Multisite Ultimate v2 palaikymas;

### Versija 1.8.3 - 01/10/2020 {#version-183---01102020}

* Ištaisyta: nesuderinamumai su Beaver Builder iš ankstesnio rinkinio;
* Ištaisyta: paraščių neatitikimai su WP 5.5;

### Versija 1.8.2 - 21/09/2020 {#version-182---21092020}

* Ištaisyta: nedideli nesuderinamumai su WP 5.5;

### Versija 1.8.1 - 05/08/2020 {#version-181---05082020}

* Ištaisyta: nesuderinamumas su Brizy 2.0;
* Ištaisyta: nedidelės našumo problemos kuriant meniu sąrašą;

### Versija 1.8.0 - 27/04/2020 {#version-180---27042020}

* Ištaisyta: pranešimai buvo paslėpti po viršutine juosta, kai nepasirinktas paraštės režimas;
* Pridėta: pasirinktiniai puslapiai dabar gali vienu metu pakeisti kelis WordPress administratoriaus aukščiausio lygio ir antrinius puslapius;
* Pridėta: administratoriai dabar gali slėpti administratoriaus puslapius naudodami WP Admin Pages PRO;

### Versija 1.7.9 - 01/04/2020 {#version-179---01042020}

* Ištaisyta: Brizy 1.10.118 ir naujesnės versijos sugadindavo SVG palaikymą administratoriaus puslapiuose;

### Versija 1.7.8 - 26/03/2020 {#version-178---26032020}

* Ištaisyta: išvedimo apsaugos klaida sugadindavo redaktoriaus puslapį naudojant prancūzų kalbą;

### Versija 1.7.7 - 04/03/2020 {#version-177---04032020}

* Ištaisyta: nedidelis nesuderinamumas su Brizy Builder;
* Patobulinta: Freemius SDK atnaujintas į 2.3.2;

### Versija 1.7.6 - 10/02/2020 {#version-176---10022020}

* Ištaisyta: administratoriaus puslapio redagavimo mygtukas apatiniame dešiniajame kampe neveikė Dashboard valdikliuose;
* Ištaisyta: nedidelis nesuderinamumas su Astra;
* Ištaisyta: nauja Brizy versija sugadino suderinamumą;

### Versija 1.7.5 - 14/12/2019 {#version-175---14122019}

* Ištaisyta: pridėtas naujas ribinio atvejo tvarkytuvas meniu elementams užpildyti Replace Page parinktyje;
* Ištaisyta: Elementor šriftai neveikė;
* Patobulinta: Freemius SDK atnaujintas, kad palaikytų jautrios informacijos slėpimą Account puslapyje;

### Versija 1.7.4 - 29/11/2019 {#version-174---29112019}

* Ištaisyta: nesuderinamumas su WooCommerce Memberships;
* Ištaisyta: Oxygen Builder kortelės komponentas neveikė;
* Ištaisyta: Beaver Themer neveikė;

### Versija 1.7.3 - 12/07/2019 {#version-173---12072019}

* Ištaisyta: puslapiai dingdavo, kai jų tėvinis puslapis būdavo konvertuojamas į kitą administratoriaus puslapio tipą;
* Patobulinta: geresni sąrašo lentelės skirtukai tarp administratoriaus puslapių tipų;
* Patobulinta: visos plugin kodo bazės saugumo peržiūra;
* Patobulinta: pastaba Separator kortelės įspėjime, kai funkcija nepasiekiama konkrečiam meniu / turinio šaltinio tipui;

### Versija 1.7.2 - 01/07/2019 {#version-172---01072019}

* Ištaisyta: Freemius SDK versija atnaujinta į 2.3.0;
* Ištaisyta: nesuderinamumo problema su Flywheel;

### Versija 1.7.1 - 27/06/2019 {#version-171---27062019}

* Ištaisyta: Welcome Widget dabar rodomas visiems vaidmenims;
* Ištaisyta: Screen Option, skirta slėpti / rodyti Admin Pages meniu, nepridedama, jei meniu slepiamas per filtrą, dokumentuotą https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/
* Patobulinta: Admin Pages meniu slėpimas dabar taip pat paslepia šablonus, sukurtus iš Beaver Builder išsaugotų šablonų sąrašo kūrimo priemonės UI;
* Pridėta: parinktys masiškai aktyvuoti ir deaktyvuoti administratoriaus puslapius;
* Pridėta: parinktis rodyti puslapius ir pagrindinėje svetainėje;
* Pridėta: parinktis pervadinti aukščiausio ir antrinio lygio meniu etiketes Replace režime;

### Versija 1.7.0 - 04/06/2019 {#version-170---04062019}

* Ištaisyta: problemos, kai Oxygen šablonai nepasirodydavo;
* Pridėta: valdiklių kūrimo palaikymas!

### Versija 1.6.1 - 22/05/2019 {#version-161---22052019}

* Ištaisyta: rašybos klaidos;
* Ištaisyta: antrinio meniu puslapiai perrašydavo ankstesnius antrinio meniu elementus su ta pačia eilės reikšme;
* Ištaisyta: dubliavimas dabar iš naujo nustato dubliuoto puslapio slug;
* Patobulinta: atnaujinti pt_BR ir es_ES po failai;
* Patobulinta: sąrašo lentelė dabar taip pat rodo pasirinktinių puslapių pavadinimą kaip tėvinius puslapius;

### Versija 1.6.0 - 21/05/2019 {#version-160---21052019}

* Pridėta: External Links dabar taip pat palaiko iframe įkėlimą;

### Versija 1.5.5 - 17/05/2019 {#version-155---17052019}

* Ištaisyta: įspėjimo pranešimas buvo rodomas, kai puslapis buvo ištrintas arba dubliuotas;
* Ištaisyta: leidimų nustatymai nebuvo taikomi administratoriams;

### Versija 1.5.4 - 08/05/2019 {#version-154---08052019}

* Ištaisyta: nesuderinamumai su Sliced Invoices;
* Ištaisyta: nedidelė problema su Oxygen;
* Ištaisyta: vietaženklis naujo administratoriaus puslapio pavadinimo lauke neišnykdavo paspaudus klavišą;

### Versija 1.5.3 - 03/05/2019 {#version-153---03052019}

* Ištaisyta: nesuderinamumas su Advanced Custom Field parinkčių puslapiais;
* Pridėta: parinktis pridėti konkrečius naudotojus kaip pasirinktinių administratoriaus puslapių tikslus;

### Versija 1.5.2 - 30/04/2019 {#version-152---30042019}

* Ištaisyta: nesuderinamumai su naujesnėmis Brizy versijomis;
* Pridėta: pridėtas vertimas į ispanų kalbą – John Rozzo dėka. Ačiū, John!
* Pridėta: beta palaikymas Oxygen Builder;

### Versija 1.5.1 - 15/04/2019 {#version-151---15042019}

* Ištaisyta: problema su vietaženkliais Normal ir HTML redaktoriuose;
* Ištaisyta: Admin Pages nerodomi Tools -> Export;
* Ištaisyta: scenarijai ir stiliai įkeliami tik mūsų pačių puslapiuose;
* Pridėta: Super Admins dabar gali dubliuoti Admin Pages;

### Versija 1.5.0 - 29/03/2019 {#version-150---29032019}

* Pataisyta: smulkios klaidos, aptiktos Sentry;
* Pataisyta: šalinimo mygtukas neveikė Edit Admin puslapio ekrane;
* Patobulinta: pakeistas BeaverBuilder mygtukas, kad būtų aišku, jog palaikoma ir Standard BB licencija;
* Pridėta: administratoriai taip pat gali nustatyti pomeniu tvarką;
* Pridėta: puslapio pakeitimo režimas dabar palaiko visus pasiekiamus meniu elementus;

### Versija 1.4.0 - 14/02/2019 (atskiras) & 27/02/2019 (priedas) {#version-140---14022019-stand-alone--27022019-add-on}

* Pridėta: paleista kaip atskiras plugin adresu https://wpadminpagespro.com
* Pridėta: parinktis pašalinti administratoriaus puslapių meniu elementą iš meniu, kai puslapio kūrimo procesas baigtas;
* Pridėta: parinktis pašalinti administratoriaus pranešimus iš administratoriaus puslapių;
* Added: Content processing, so you can place placeholders like {{user:first_name}} and have it be automatically replaced with the user first_name meta field;
* Pridėta: įterptinis redaktorius;
* Pridėta: konsoliduota turinio šaltinio tėvinė klasė, kad ateityje būtų lengva pridėti naujus puslapių kūrimo įrankius / turinio šaltinius;
* Pridėta: išorinių URL palaikymas;

### Versija 1.3.0 - 15/01/2019 {#version-130---15012019}

* Pataisyta: administratoriaus puslapiai nerodomi pagrindinėje svetainėje multisite aplinkose;
* Patobulinta: Multisite Ultimate pasirinktiniai įrašų tipai pašalinti iš subsites eksporto ekrano;
* Pridėta: viršutinė juosta su greitaisiais veiksmais tinklo administratoriams puslapių kūrimo ekranuose;
* Pridėta: DIDŽIULIS! Elementor palaikymas!
* Pridėta: DIDŽIULIS! Brizy palaikymas!

### Versija 1.2.1 - 17/11/2018 {#version-121---17112018}

* Pataisyta: plugin suderinamas su Multisite Ultimate 1.9.0;

### Versija 1.2.0 - 10/09/2018 {#version-120---10092018}

* Pridėta: PHP palaikymas pridėtas, jei WU_APC_ALLOW_PHP_PROCESSING wp-config.php faile nustatyta kaip true. Tai nenaudoja PHP eval, bet vis tiek gali sukelti saugumo spragų. Naudokite atsargiai;
* Patobulinta: priedo plugin atnaujintuvas;
* Patobulinta: naujas naujinimų serverio URL;

### Versija 1.1.2 - 16/08/2018 {#version-112---16082018}

* Pataisyta: nedidelė problema su WP Engine;

### Versija 1.1.1 - 16/08/2018 {#version-111---16082018}

* Pataisyta: leidimai netinkamai pritaikomi pakeitimo puslapiams;

### Versija 1.1.0 - 15/08/2018 {#version-110---15082018}

* Pridėta: Beaver Builder šablonai dabar palaikomi! Galite naudoti mėgstamą puslapių kūrimo įrankį pasirinktinėms administratoriaus puslapiams kurti;
* Pridėta: dabar taip pat galima pakeisti numatytųjų WordPress administratoriaus puslapių turinį;
* Pridėta: dabar taip pat galima pridėti sukurtą turinį numatytųjų WordPress administratoriaus puslapių viršuje arba apačioje;

### 0.0.1 {#001}
- Pradinis leidimas
