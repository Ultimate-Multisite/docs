---
title: Innstillingar fyrir Sunrise Constant á Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Skráning Sunrise konstantar í Closte

Notanirnar þínar geta lokað `wp-config.php` vegna öryggisþátta. Þetta þýðir að Ultimate Multisite nefnast ekki sjálfskipta að breyta textanum til að innihalda nauðsynlegar konstantur fyrir mappa-myndun og övrutt eiginleika. Closte er einn slíkar notanirnar.

Hins vegar býður Closte upp á hátt að bæta konstantum í `wp-config.php` á öryggjanlega hátt. Þú þarft bara að fylgja eftir stega hér að neðan:

## Á Closte dashboard {#on-the-closte-dashboard}
Fyrst, [logga inn í reikninginn þinn á Closte](https://app.closte.com/), klikka á menulinuna Sites, og svo klikka á linkinn Dashboard á vefsíðu sem þú ert að vinnja:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Þar sjáð þú fleiri nýjar menulinna á vinstri hálfhlutinu. Navigera yfir í **Settings** (Innstillingar) með þessum menulinnum:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Svo, á **Settings**, finn tabinn WP-Config, og svo fari í feltið "Additional wp-config.php content" (Aðgerðarinn til viðbót) á þessum tabinn:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Í samhengi með innreiðslu Ultimate Multisite þarfurðu að bæta sunrise konstantann í það felt. Bara bæti nýjum linuna og set þennan linuna hér:

define('SUNRISE', true);

Það er allt, þú ert klára. Fari aftur í innreiðslu Ultimate Multisite og uppfrisja síðuna til að halda ferlið á gangi.
