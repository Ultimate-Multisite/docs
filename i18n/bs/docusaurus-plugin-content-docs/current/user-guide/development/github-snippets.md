---
title: GitHub Snippets
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kako koristiti Ultimate Multisite snipetove na našem GitHub repozitoriju {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

U GitHub repozitoriju dostupni su kodni snipetovi koji su često traženi od strane korisnika Ultimate Multisite-a koji žele dodati male funkcionalnosti, kao što je dodavanje Google Analytics skripte na stranice za registraciju ili sakrivanje meta kutije sa admin dashboarda.

U ovom članku ćemo vam pokazati kako da koristite, ili preciznije, gdje da postavite ovaj kod.

Snipetove možete pronaći na linku ispod.

https://github.com/next-press/wp-ultimo-snippets/

Postoji dva načina na koja možete dodati kod:

  1. U `functions.php` fajl vaše teme.

  2. Must-Use Plugins (mu-plugins)

# Kako dodati snipet u `functions.php` fajl vaše teme. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Prijavite se na WordPress Network admin dashboard i idite na Themes > Theme Editor (Pogledajte snimak ekrana ispod).

  2. Na stranici "Edit Themes", pobrinite se da ste iz padajućeg menija u gornjem desnom uglu odabrali aktivnu temu (#3 na snimku ekrana ispod).

  3. Kliknite na `functions.php` fajl u sekciji "Theme Files" da biste učitali fajl. Skrolujte do dna i zalijepite Ultimate Multisite snipet koji ste dobili iz GitHub repozitorija.

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Kako kreirati Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ima funkciju koja vam omogućava učitavanje prilagođene funkcionalnosti nazvane "Must-Use Plugins", ili skraćeno "mu-plugins".

Ovi posebni mu-plugins učitavaju se prije svih ostalih redovnih pluginova i ne mogu se deaktivirati. U multisite mreži, kod u ovim mu-pluginovima učitavat će se na svim sajtovima u vašoj instalaciji.

1. Koristite FTP ili SSH da pristupite fajl sistemu vaše WordPress instalacije.

2. Unutar direktorijuma `wp-content` vaše WordPress instalacije, kreirajte novi direktorijum pod nazivom: mu-plugins.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Kreirajte novi PHP fajl na vašem računaru pod nazivom `wu-snippet.php` koristeći Notepad ili bilo koji kod editor.

4. Postavite Ultimate Multisite kodni snipet koji ste dobili iz GitHub repozitorija u fajl i sačuvajte ga. Takođe možete dodati ovaj kod na vrh kodnog snipeta kako biste označili svoj mu plugin.
