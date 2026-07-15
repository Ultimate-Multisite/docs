---
title: Sunrise faila kļūda
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Kļūda instalēt Sunrise failu

`sunrise.php` fails ir īpašs fails, ko WordPress meklē, kad tas startējas. Lai WordPress būtu spējis atpazīt `sunrise.php` failu, tas jāatrod **wp-content** maperā.

Kad aktivizējat Ultimate Multisite un sekāt iestatījumus ar wizardu, kā to redziet screenshotā, Ultimate Multisite mēģina kopēt mūsu `sunrise.php` failu uz wp-content maperi.

<!-- Screenshot nav pieejams: Wizardas sākuma vārdā, kas redz sunrise.php instalācijas solī -->

Lielākajā daļā mēs spējamos veiksmīgi kopēt failu un viss darba ir labi. Tomēr, ja kaut kas nav labi iestatīts (piemēram, maperu atļaujas), jūs varat sasniegt situāciju, kur Ultimate Multisite nevar kopēt failu.

Ja lasāt kļūdas ziņojumu, ko Ultimo jums sniedz, redziet, ka tas ir tieši notikusi šeit: **Sunrise copy failed** (Sunrise kopēšana neizglītā).

<!-- Screenshot nav pieejams: Kļūdas ziņojums, kas redz Sunrise copy failed -->

Lai to labotu, varat vienkārši kopēt `sunrise.php` failu wp-ultimo plugin maperī un iekļaut to savā wp-content maperī. Pēc tam atjauninājiet wizardas lapu un pārbaudes rezultāti būs veiksmīgi.

<!-- Screenshot nav pieejams: Failu manēžments, kas redz sunrise.php wp-ultimo plugin maperī --> Bez tam, tas var prasa vispārīgu pārbaudi jūsu maperu atļaujas, lai izvairītos no problēmām nākotnē (ne tikai ar Ultimate Multisite, bet arī ar citām pluginiem un temām).

WordPressa **Health Check tool** (Latvian: Veselības pārbaudes rīks), kas ir daļa no WordPressa (jūs varat piekļūt tam caur savu galveno vietnes **admin panel > Tools > Health Check**), spēj jums pateikt, vai jūsu maperu atļaujas ir noteiktas vērtībām, kas var radīt problēmas ar WordPress.

<!-- Uzraksties nepieciešams: WordPress saludas pārbaudes rīkojas uz folderu atļauņām -->
