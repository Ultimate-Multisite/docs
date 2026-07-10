---
title: An t-aistriú an Chonstant Órra ar Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Déanáil an constant Sunrise ar fáil ar Closte {#setting-the-sunrise-constant-to-true-on-closte}

Tá curteoirí host chuidithe a laithreacha i bhfáine seo mar chuid de chuid séurtiúil. Is é sin, ní féidir le Ultimate Multisite a bheith ag éidíochtadh an cilg (file) chun an constantí ag fáil ar fáil chun mapáil domáin agus feichar eile a bheith ag eanglaigh. Closte is curteoir sin.

Mar sin féin, téann Closte le curte a chur ar fáil chun constantí a chleachtú i wp-config.php ar fáil ar fáil ar fáil. Bíodh an t-amás agat go bhfuil tú ag déanamh an t-amach seo:

## Ar d'fhéidir Closte {#on-the-closte-dashboard}

Ar anois, [lograigh do chontacht Closte](https://app.closte.com/), cliceáil ar an meán Sites, agus ansin cliceáil ar an link Dashboard ar an site a bhfuil tú ag déanamh ar aghaidh:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Beidh tú le curte oiriú ar nuidéar nua ar chuid de chéad ar an chuid de chéad. Déan an t-amach go dtí an curte **Settings** a bheith agat trí fhoireann seo:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Ansin, ar an **Settings**, glacann tú an tab WP-Config, agus an áit "Additional wp-config.php content" ar an tab sin:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Agairm go dtí an t-amach de chuid de chéad a bheith ag éanglaigh Ultimate Multisite, beidh tú ag cur constant Sunrise ar fáil ar fáil i dteangán seo. Déan an t-amach go bhfuil tú ag cur línte nua agus glacann tú an línte seo:

define('SUNRISE', true);

Is é sin an t-amach, tá tú ag déanamh cinnte. Léimeadh ar ais go dtí an amach de chuid de chéad Ultimate Multisite agus féach ar an cur isteach chun an t-amach a dhéanamh.
