---
title: Sunrise File Errora
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise File Instalazioan Erro {#error-installing-the-sunrise-file}

Ez dago `sunrise.php` filea, WordPress-ek berezian (bootstrapping) identifikatzen duen programa bat. WordPress-ek `sunrise.php` filea identifikatu dezake, hori **wp-content** folderaren belurra dagoela beharrezkoa da.

Ultimate Multisite aktibatu du eta screenshotan erabiliko duen bezala setup wizard-en bidez jarraitu duzenean, Ultimate Multisite-ek gure `sunrise.php` filea wp-content folderera kopiatzen saiatzen da.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Geroan, denbora guztiaren gehiendu, filea ondo kopiatzen dugu eta guztia funtzionatzen du. Hau beti, bat ez dago ondo konpondu (folder permission-ak, adibidez), Ultimate Multisite-ek filea kopiatzen ez duenean, eragiketa bat aurkitu dezakezu.

Ultimo ematen duen error messagea lekutzean lekatu behar duzu, horrek da zenbait dagoen: **Sunrise copy failed** (Sunrise kopiatzea ondo ez zuela).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Horra konpondu eta `wp-ultimo` plugin folderaren belurraren `sunrise.php` filea kopiatu eta wp-content folderera haitzi behar duzu. Horren ondoren, wizard pagea iraukatzen baduzu, kontrolak ondo egin beharko dute.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Nondra, horrek iragatik, inorkizunaren (folder permissions) generala ikustea egin behar duzu, zerbait problema ez duela iraukatzeko (Ultimate Multisite-ekin eta beste pluginak eta themes ere).

WordPress-en parte bat dela **Health Check tool** (main sitean **admin panel > Tools > Health Check** bidez jartzen dituzu), folder permission-ek WordPress-eko eragiketa ez duela, problema sortzeko modua izan daitekeena informatzen duen.

<!-- Irkosea ez dago: WordPress eraguntasun kontrola da, emateko emakian eta diru iraditzenaren testua -->
