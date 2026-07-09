---
title: Sanya ƙaramin ƙaramin Rana a Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Shiga constant-yi a gaskiya a Closte {#setting-the-sunrise-constant-to-true-on-closte}

Wasu wasu na masu gudanar da sabon wurare (host providers) suna ƙona fayil <code>wp-config.php</code> don tsaro. Wannan yana nufin Ultimate Multisite ba zai iya gyara wannan fayil ne kai tsaye don shigar da ƙa'idodin da ake bukata don samar da haske na domain (domain mapping) da wasu ƙarin ƙwarewa su ya yi aiki. Closte ɗaya daga cikin waɗannan masu gudanarwa ne.

Dukansu, Closte yana ba hanyar shigar da ƙa'idodin (constants) zuwa <code>wp-config.php</code> cikin kyakkyawan tsaro. Ka bi matakan da ke a kan nan:

## A kan dashboard na Closte {#on-the-closte-dashboard}

Farko, [ka shiga asusunka na Closte](https://app.closte.com/), ka danna menunya na Sites, sannan ka danna link ɗin Dashboard a wurin wajen da kake aiki a yanzu:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Za ka ga wasu sabbin menus a gefen ƙaramin layar. Ka tafiya zuwa shafin **Settings** (Wannan shi ne wuri na gyara abubuwan da ake bukata) ta amfani da wannan menu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Sannan, a cikin **Settings**, ka nemo tab ɗin WP-Config, sannan ka nemo fildar "Additional wp-config.php content" (Ƙarin abubuwan wp-config.php) a wannan tab ɗin:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

A cikin mahallin shigar da Ultimate Multisite, za ka buƙaci ƙara ƙa'idodin sunrise zuwa wannan fildar. Ka ƙara wata sashi kuma ka dabba wannan sashi:

define('SUNRISE', true);

Wannan shi ne kawai, an gama. Ka dubi wurin shigar da Ultimate Multisite (install wizard) da ka tafi don sake gyara shafin don ci gaba da aiki.
