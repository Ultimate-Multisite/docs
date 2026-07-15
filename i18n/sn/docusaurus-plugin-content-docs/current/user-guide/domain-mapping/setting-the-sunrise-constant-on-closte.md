---
title: Kutanga Constante ya Sunrise kuCloste
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Kuita const Sunrise kuva neku Closte

Vakasi vhaizvo vhaizvo host providers vanhu wp-config.php kune chivimbo chekuti. Izvi zvinore kuti Ultimate Multisite inogone kuenda uye kuwedzera constants dzine kuitira domain mapping uye zvinhu zvose zviri kuitika. Closte ndiyo mupfungwa iyi.

Asi chero, Closte inoratidza nzira yekuti uwedzere constants kune wp-config.php nekuita zvakanaka. Unofanira kutamba steps izvi:

## Pa dashboard ya Closte {#on-the-closte-dashboard}

Mazuva akapfiri, [tamba akaunti yako ya Closte](https://app.closte.com/), ndichivimbisa menu ya Sites, ndipo ndichivimbisa link ya Dashboard pa site unozviona zvakuti unogona kushanda:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Utaona zvinhu zvitsva zvinosangana munzira yakare (left side) ye screen. Tamba ku page ya **Settings** nekuita iye yenzaniso:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Zvakanaka, pa **Settings**, ndichivimbisa tab ya WP-Config, uye ndichivimbisa field inosanganisira "Additional wp-config.php content" pa tab iyi:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Mune context ye kuita Ultimate Multisite, unofanira kuwedzera sunrise constant iye kune field iye. Zvinotamba kuti uwedzere line yakare uye uta paste line iyi. Apana iye, ndichivimbisa button ya **Save All**.

define('SUNRISE', true);

Iyi ndiyo, unenge wakaita zvakanaka. Tamba ku wizard ye Ultimate Multisite uye tsvisa page kuti uende nekuita zvinhu zvakare.
