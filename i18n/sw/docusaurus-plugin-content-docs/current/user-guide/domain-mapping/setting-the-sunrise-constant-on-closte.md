---
title: Kuweka Constant ya Sunrise kwenye Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Kuweka Kiwango cha Sunrise kuwa true kwenye Closte

Baadhi ya watoa huduma za hosting hufunga faili ya wp-config.php kwa sababu za usalama. Hii inamaanisha kuwa Ultimate Multisite haiwezi kuhariri faili hiyo moja kwa moja ili kuongeza constants zinazohitajika kufanya domain mapping na vipengele vingine vifanye kazi. Closte ni moja ya watoa huduma kama hao.

Hata hivyo, Closte inatoa njia ya kuongeza constants kwenye wp-config.php kwa njia salama. Unachohitajika kufanya ni kufuata hatua zilizo hapa chini:

## Kwenye dashibodi ya Closte

Kwanza, [ingia kwenye akaunti yako ya Closte](https://app.closte.com/), bofya kwenye menyu ya Sites, kisha bofya kiungo cha Dashboard kwenye tovuti unayofanya nayo kazi sasa hivi:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Utaonyeshwa menyu mpya upande wa kushoto wa skrini. Nenda kwenye ukurasa wa **Settings** ukitumia menyu hiyo:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Kisha, kwenye ukurasa wa **Settings**, tafuta kichupo cha WP-Config, na kisha sehemu ya "Additional wp-config.php content" kwenye kichupo hicho:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Katika muktadha wa kusakinisha Ultimate Multisite, utahitaji kuongeza sunrise constant kwenye sehemu hiyo. Ongeza mstari mpya na ubandike mstari ulio hapa chini. Baada ya hapo, bofya kitufe cha **Save All**.

define('SUNRISE', true);

Hiyo ndiyo yote, umemaliza. Rudi kwenye mchawi wa kusakinisha Ultimate Multisite na uonyeshe upya ukurasa ili kuendelea na mchakato.
