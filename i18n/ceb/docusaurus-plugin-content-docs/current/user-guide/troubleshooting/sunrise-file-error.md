---
title: Error sa Sunrise File
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sayop sa Pag-install sa Sunrise File {#error-installing-the-sunrise-file}

Ang file nga `sunrise.php` usa ka espesyal nga file nga gitan-aw sa WordPress kung nag-bootload kini. Aron makadiskubre ang WordPress sa `sunrise.php` file, kinahanglan kini naa sa sulod sa **wp-content folder**.

Kung i-activate nimo ang Ultimate Multisite ug magpadayon sa setup wizard sama sa imong nakita sa screenshot, ang Ultimate Multisite mosulay nga kopyahon ang atong `sunrise.php` file ngadto sa wp-content folder.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Kadaghanan sa mga higayon, makapakahimtang ta sa malampuson nga pagkopya sa file ug molihok na tanan. Bisan pa, kung dili maayo ang setup (sama sa folder permissions, pananglitan), mahimo kang makakita og sitwasyon diin dili makopyahon sa Ultimate Multisite ang file.

Kung basahon nimo ang error message nga gihatag sa Ultimo, makita nimo nga mao gyud kana ang nahitabo diri: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Aron maayo kini, pwede nimong kopyahon ang `sunrise.php` file sulod sa folder sa wp-ultimo plugin ug i-paste kini sa imong wp-content folder. Human nimo kana, i-reload ang wizard page ug ang mga check dapat magpass na.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> Bisan unsa pa, mahimong kinahanglan nimo og general check sa imong folder permissions aron malikayan ang problema sa umaabot (dili lang sa Ultimate Multisite kondili sa ubang plugins ug themes usab).

Ang **Health Check tool** nga bahin sa WordPress (pwede nimo kini ma-access pinaagi sa imong main site **admin panel > Tools > Health Check**) kay makahatag kanimo og impormasyon kung ang folder permissions nimo naa ba sa mga value nga mahimong magpabAlright problema sa WordPress.

<!-- Screenshot wala dili available: WordPress Health Check tool nagpakita sa folder permissions status -->
