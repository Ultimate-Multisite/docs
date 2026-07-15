---
title: Konstantes "Sunrise" i Ierobe Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise konstanta i Closte hosta iestat uz "true"

Daži hosti nodrošina `wp-config.php` failu drošinības dēļ, kas aizver. Tas nozīmē, ka Ultimate Multisite nevar automātiski rediģēt failu un iekļaut nepieciešamo konstantu, lai domēna mapi un citus funkcijas darbotos. Closte ir viens no šādiem hostiem.

Tomēr Closte piedāvā veidu, kā droši pievienot konstantas `wp-config.php` failam. Vam pietiks sekojam šo soļus:

## Closte dashboardā {#on-the-closte-dashboard}

Vispirms [loginieties uz savu Closte kontu](https://app.closte.com/), noklikšķiniet uz menu itema Sites, pēc tam noklikšķiniet uz Dashboard linka uz tajā vietnē, kur strādājat:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Jums parādīsies vairāki jauni menu elementi ekrāna kreisajā pusē. Izmantojiet šo menu pārlūkot **Settings** lapai:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Pēc tam, uz **Settings**, atrodiet WP-Config tabu un pēc tam lauku "Additional wp-config.php content" šajā tabā:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite instalēšanas kontekstā jums būs jāpievieno `sunrise` konstanta šajam laukam. Vienkārši pievienojiet jaunu rengi un iekļaujiet šo rengi:

define('SUNRISE', true);

Tas ir viss, kas nepieciešams. Atgriezieties Ultimate Multisite instalēšanas wizardā un atjauninājiet lapu, lai turpinātu procesu.
