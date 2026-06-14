---
title: GitHub Snippeti
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kako uporabiti Ultimate Multisite snippetove na našem GitHub repozitoriju

Na GitHub repozitoriju je na voljo kod snippetov, ki jih pogosto zahtevajo uporabniki Ultimate Multisite, ki želijo dodati majhne funkcije, kot so vključenje Google Analytics skript na strani za registracijo ali skritanje meta boxa iz admin dashboarda.

Ta članek vam bo pokazal, kako uporabiti te kode ali bolj specifično, kje jih postaviti.

Snippetove najdete na povezavi spodaj:

https://github.com/next-press/wp-ultimo-snippets/

Obstaja 2 načina, kako lahko dodate kod:

  1. Na datoteko functions.php vaše teme.

  2. Must-Use Plugins (mu-plugins).

# Kako dodati snippet na datoteko functions.php vaše teme.

  1. Pri logovanju v admin dashboard omrežja WordPress, gre do Themes > Theme Editor (Pogledajte sliko spodaj).

  2. Na strani "Edit Themes" se prepričajte, da je izbrana vaša aktivna tema na spletni vrati z enim padalcem, ki se nahaja v zgornjem desnem kotu zaslona (#3 na sliki spodaj).

  3. Kliknite na datoteko functions.php pod razdelkom "Theme Files", da jo naložite. Prejmovajte do dna in prilepite Ultimate Multisite snippet, ki ste ga dobili iz GitHub repozitorija.

<!-- Slika ni na voljo: WordPress Theme Editor prikazuje urejanje datoteke functions.php -->

# Kako ustvariti Must-Use Plugins (mu-plugins)

WordPress ima funkcijo, ki vam omogoča naložbo prilagojene funkcionalnosti, ki se nanašajo na "Must-Use Plugins", ali mu-plugins za kratko.

Ti posebni mu-plugins so naloženi pred vsi drugimi običajnimi pluginami in jih ne morete deaktivirati. V multisite omrežju bo kod v teh mu-plugins naložen na vse strani vaše instalacije.

1. Uporabite FTP ali SSH za dostop do datoteke vašega WordPress instalacije.

2. V direktorij WordPress instalacije, v složku `wp-content`, ustvarite nov direktorij z imenom: `mu-plugins`.

<!-- Slikovico ni na voljo: File manager prikazuje wp-content direktorij z foldrom mu-plugins -->

3. Ustvarite nov PHP datotek na svojem računalniku z imenom `wu-snippet.php` uporabo Notpada ali kakršnega koli kode editorja.

4. V to datoteko vstavite kod snippet Ultimate Multisite, ki ste ga dobili iz GitHub repozitorija, in ga shranite. Lahko boste tudi ta kod dodali na vrh kode snippet za označevanje vašega mu plugin-a.
