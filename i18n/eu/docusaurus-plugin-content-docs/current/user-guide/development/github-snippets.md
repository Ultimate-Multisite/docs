---
title: GitHub Snippetak
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Ultimate Multisite snippet-akordeak GitHub repositoryan erabiltzen {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

GitHub repositoryan daiko kodeak Ultimate Multisite erabiltzaileek leku batzuk erreqitzen dute, adibidez, Google Analytics scripta ezarritzean edo admin dashboard-eko meta box bat horretzeko.

Hau artikuluan zer modu uso dira onartu edo non jarri behar dira hauek.

Kodeak linkaren daiteke aurkitu:

https://github.com/next-press/wp-ultimo-snippets/

Kodea jodez modu 2an ezazu daiteke:

  1. Itxura (theme) funktionen.php filean.

  2. Must-Use Plugins (mu-plugins).

# Snippetak onartu itxura funktionen.php filean jarri {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. WordPress Network admin dashboardan logiatzi eta Themes > Theme Editor (eziaurreko screenshotan ikusi) laukera jarri.

  2. "Edit Themes" eskurriaren daurikan, ekranaren eskaintzeko lekuan (ekiaurreko screenshotan #3an) aktibo itxura dela aukeratu duzu eta hori daiko.

  3. "Theme Files" seksioan dagoen functions.php filean klik egin dezakezu filea laden dizkion. Behin amai laualduan, GitHub repositoryan lortu Ultimate Multisite snippetak pasteatu.

<!-- Screenshot ez dago: WordPress Theme Editor-ek functions.php filearen editzapen ikusi -->

# Must-Use Plugins (mu-plugins) sortzea {#how-to-create-must-use-plugins-mu-plugins}

WordPress-ek "Must-Use Plugins" edo kurzua "mu-plugins" bitartean custom funtzioak laden dezakeko aukera dago.

Hau mu-plugins bereziak, beste plugin guztiaren aurian laden dira eta ez daitezke deshabilitatu. Multisite networkan, hauek mu-plugins-ek kodeak instalazioaren guztietako lekuetan laden dira.

1. FTP edo SSH erabiliz WordPress instalazioaren filesystem-era erabili.

2. WordPress instalazioaren wp-content direktori horretan, "mu-plugins" irizpiak bat sortuatu.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3. Komputuarenbeare Notepad edo beste editerra batekin wu-snippet.php irizpiak bat sortuatu.

4. GitHub repository-n dariola Ultimate Multisite kode snippet-a hori irizpia laitzen eta salduzu. Mu plugin-a identifikatzeko, ha kode snippet-aren üstiaren itxarria ere beste kode-aren üstian gehitu dezakezu.
