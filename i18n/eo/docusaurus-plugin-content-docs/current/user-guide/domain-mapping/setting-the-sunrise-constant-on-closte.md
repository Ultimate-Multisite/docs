---
title: Definiĝo de la Konstanto Sunrise sur Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# La definado de la constante Sunrise a vero suraj Closte

Servantoj estas providendistoj blokas la wp-config.php pro sekureco kial. Tio signifas ke Ultimate Multisite ne povas aŭtomate modifi la filon por inkluzi la necesajn konstantojn por akiri mapadon de domeno kaj aliajn funkcioj por arbei. Closte estas unu el tia providendoj.

Tamen, Closte oferas manjon por aĉi konstantojn al wp-config.php en sekura maniero. Vi nur devas sekvi la paŝojn animaj:

## Sur la dashboard de Closte {#on-the-closte-dashboard}

Unue, [logu sin al via konto de Closte](https://app.closte.com/), kliku sur la menun item "Sites", tiam kliku sur la linko "Dashboard" sur la sitio kiu estas la loko kie vi laboras:

<!-- Screenshot ne estas disponabla: Dashboard de Closte montras la menun Sites kaj la linkon Dashboard -->

Vi estus prezentita kun pluraj novaj menuj itemoj sur la malparolo de la skriĉo. Navigu al la paĝo **Settings** uzante tiun menun:

<!-- Screenshot ne estas disponabla: Malparolo de la malparolo de Closte montras la opcio Settings -->

Tiam, sur **Settings**, trovu la tabon WP-Config, kaj tiam la kampan "Additional wp-config.php content" sur tiu tablo:

<!-- Screenshot ne estas disponabla: Paĝo de Closte Settings kun la WP-Config tablo montras la kampan Additional wp-config.php content -->

En la konteksto de instalado de Ultimate Multisite, vi bezonas aĉi la konstanton sunrise al tiu kampo. Simple aĉiu novan linion kaj atimi la linion sub:

define('SUNRISE', true);

Tio estas ĉio, vi estas جاهza. Revi al la wizard de instalado de Ultimate Multisite kaj refraschi la paĝon por kontinui la proceson.
