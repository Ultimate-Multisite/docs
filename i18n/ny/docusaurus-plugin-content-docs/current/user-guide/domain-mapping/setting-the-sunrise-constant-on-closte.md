---
title: Kutanthauza Kukhala kwa Sunrise Constant ku Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Kufufu kwa kutuma constant ya Sunrise iwe true ku Closte {#setting-the-sunrise-constant-to-true-on-closte}

Mwanzo, wengine wa host wamefungua wp-config.php kwa sababu za usalama. Hii inamaanisha Ultimate Multisite haikubali kurekebisha faili hili kiotomatiki ili kuongeza constants zinazohitajika ili kupata mapping ya domain na vipengele vingine kufanya kazi. Closte ni mmoja kati ya host hizo.

Hata hivyo, Closte inatoa njia ya kuongeza constants kwenye wp-config.php kwa njia salama. Unahitaji tu kufuata hatua hizi:

## Kwenye dashboard ya Closte {#on-the-closte-dashboard}

Kwanza, [ingia kwenye akaunti yako ya Closte](https://app.closte.com/), bonyeza menu ya Sites, kisha bonyeza link ya Dashboard kwenye tovuti unayofanya kazi nayo:

<!-- Screenshot is not available: Closte dashboard showing Sites menu and Dashboard link -->

Utapata orodha mpya ya menu upande wa kushoto wa skrini. Nenda kwenye ukurasa wa **Settings** kwa kutumia menu hiyo:

<!-- Screenshot is not available: Closte left sidebar menu showing Settings option -->

Kisha, kwenye **Settings**, utaona tab ya WP-Config, na kisha sehemu inayoitwa "Additional wp-config.php content" kwenye tab hiyo:

<!-- Screenshot is not available: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Katika muktadha wa kusakinisha Ultimate Multisite, utahitaji kuongeza constant ya sunrise kwenye sehemu hiyo. Rahisi, ongeza mstari mpya na uweke mstari huu hapa chini. Baada ya hayo, bonyeza kitufe cha **Save All**.

define('SUNRISE', true);

Hiyo ndiyo yote, umekamilika. Rudi kwenye wizard ya kusakinisha Ultimate Multisite na fanya refresh kwa ajili ya kuendelea na mchakato huo.
