---
title: GitHub Snippetid
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kuidas Ultimate Multisite snippet'e kasutamine meie GitHubi repositoriumis {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHubi repositoriumis on saadaval koodide snippetid, mida Ultimate Multisite kasutajad sageli küsivad väikeste funktsioonide lisamiseks, nagu Google Analytics skripti lisamine registreerimise lehtele või meta boxi hoidmine administraatori dashboardist.

See artikli näitab teil, kuidas neid koodi kasutada või tarkemalt, kus neid paigutada.

Snippetid leiate allpool olevas linkis:

https://github.com/next-press/wp-ultimo-snippets/

Koodi lisamiseks on teil kaks viiva:

  1. Tema `functions.php` failis.

  2. Must-Use Plugins (mu-plugins).

# Kuidas snippet paigutada tema `functions.php` failile. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Logige sisse oma WordPress Network admin dashboardi ja minuga Themes > Theme Editori (vaadake allpool oleva skraanšootrit).

  2. "Themes" lehel veenduge, et on valitud aktiveeritud tema drop-down valikust, mis asub ekraani paremal ääres (#3 allpool oleva skraanšootris).

  3. Klõpsake "Theme Files" osas olevat `functions.php` faili laadida. Skroolipara alla ja liigutage GitHubi repositoriumist saanud Ultimate Multisite snippet.

<!-- Skraanšootrit ei ole saadaval: WordPress Theme Editor, mis näitab functions.php faili editas -->

# Kuidas Must-Use Plugins (mu-plugins) luua {#how-to-create-must-use-plugins-mu-plugins}

WordPressil on funktsioon, mis võimaldab laadida kustom funktsionaalsust nimega "Must-Use Plugins" või lühendina "mu-plugins".

Need eriklassed mu-plugins laaditakse enne kõikide regulaarsete pluginate ja neid ei saa deaktiveerida. Multisite võrku koodid laaditakse teie installatsiooni kõikide lehtele.

1. Kasutage FTP või SSH'i abil pääseda oma WordPress installatsiooni failisüsteemi juurde.

2. Estonian WordPress installi kohta `wp-content` direktoriumis uue direktoriumi luua nimega: `mu-plugins`.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Kui komputeri kasutades Notepad't või millekonda luute oma arvutisse uue PHP faili nimega `wu-snippet.php`.

4. Pandige Ultimate Multisite koodikombinatsioon GitHubist saanud faili selle faili sisse ja salvestage see. Saate ka lisada seda koodi koodikombinatsiooni üles, et nimetada oma mu plugin.
