---
title: Pag-set sa Sunrise Constant sa Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Pag-set sa Sunrise constant para maging true sa Closte

May mga host provider nga nag-lock sa wp-config.php para sa seguridad. Nagpasabot ni nga ang Ultimate Multisite dili makapag-edit sa file dayon aron maglakip sa kinahanglanon nga constants para ma-work ang domain mapping ug uban pang features. Ang Closte usa niini nga host.

Bisan pa, nagtanyag ang Closte og pamaagi aron magdugang og constants sa wp-config.php sa usa ka luwas nga paagi. Kinahanglan lang nimo sundon ang mga lakang sa ubos:

## Sa dashboard sa Closte

Una, [log in sa imong Closte account](https://app.closte.com/), i-click ang Sites menu item, unya i-click ang Dashboard link sa site nga imong gina-work karon:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Makita nimo og daghang bag-ong menu items sa kilid sa screen. Mag-navigate sa **Settings** page gamit kana nga menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Dayon, sa **Settings**, pangitaa ang WP-Config tab, ug unya ang "Additional wp-config.php content" field sa tab nga mao na:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Sa konteksto sa pag-install og Ultimate Multisite, kinahanglan nimo i-add ang sunrise constant sa maong field. Basta magdugang lang og bag-ong linya ug i-paste ang linya sa ubos. Human ni, i-click ang **Save All** button.

define('SUNRISE', true);

Naa na, andam ka na. Balik sa Ultimate Multisite install wizard ug i-refresh ang page para mapadayon ang proseso.
