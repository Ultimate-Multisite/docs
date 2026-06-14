---
title: Setio'r Constanta Gorau ar Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Mae'r cyflwyno'r constant Sunrise i'r Closte

Mae rhai prifau gweithredwyr sy'n roedd yn chynllhau'r wp-config.php am y dyfodol. Mae hyn yn ei fod yn rhyfeddu Ultimate Multisite i redig y ffeil amlwg i gael y constantau hanesyddol a buedau eraill i weithio. Closte yw un o'r prifau hyn.

Fodd bynnag, mae Closte yn cynnig ffordd i drosglai constantau i'r wp-config.php mewn modd diogel. Mae angen i chi dilyn y cynllunau isod:

## Ar y dashboard Closte

Cyndd cyntaf, [cyflwynwch eich cyfrif Closte](https://app.closte.com/), cliw ar y menu Sites, yna cliw ar y linc Dashboard ar y safle sy'n gweithio arno:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Bydd chi cael amser o newyddol o ddefnyddio'r menu ar ochr lleuad. Cyffredin i'r peidiad **Settings** gan y menu hwnnwch:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Yna, ar y **Settings**, dod i'r tab WP-Config, aethau i'r ffeil "Additional wp-config.php content" ar y tab hwnnwch:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Yn y context o ddefnyddio Ultimate Multisite, byddwch yn angen i drosglai'r constant sunrise i'r ffeil hwnnwch. Dodwch yn un llinell newydd a chysgu'r llinell isod. Ar ôl hynny, cliw ar y bot **Save All**.

define('SUNRISE', true);

Da iawn, mae hi'n ddefnyddio. Dorwi at y gwirddwr Ultimate Multisite a newid y peidiad i dilyn y proses.
