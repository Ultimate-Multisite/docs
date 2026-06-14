---
title: Closte-aren Sunrise Constantena emateko
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-an SUNRISE constanta truthona

Bazun host provider-ek gabe wp-config.php-n lock egiten dute segurtasun erantzunetan. Horrek euskarri Ultimate Multisite-rek ez du automatikoki filea editatzeko, domain mapping eta beste funtzioak berri egiteko beharrezko constantsak sartzeko. Closte hori bat da.

Hala ere, Closte-ek wp-config.php-n constants sartzeko bidea ematen du segurtasun handia duen moduan. Lehenik, lehenik [sortu account-era Closte](https://app.closte.com/), Sites menua klikatu, eta orduan dagoen sitearen Dashboard linka klikatu:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Eskurtu izango du menuaren eskuan irrikiak berriak. Horrek erabiliz **Settings** (Konfigurazioa) lapera aurkitu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Orduan, **Settings**-an, WP-Config tab-a aurkitu, eta hori lapera "Additional wp-config.php content" (Ezdatzeko wp-config.php kontentua) lehiakoa aurkitu:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite instalatzen duen kontekstuko, sunri constanta hori dailean sartu behar duzu. Lehenik, lineia berria gehitu eta ondoriozko lineia hartu:

define('SUNRISE', true);

Horrak da, guztiz konpondu presu dago. Ultimate Multisite instalazio wizard-eraan itzultu eta lapera refreshatu behar duzu prozesua konturu egin dezake.
