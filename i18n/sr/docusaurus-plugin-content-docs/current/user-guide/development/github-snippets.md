---
title: GitHub Snippeti
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kako koristiti Ultimate Multisite snippetove na našem GitHub repozitorijumu {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

U GitHub repozitorijumu dostupne su kod fragmente (snippetovi) koje često traže korisnici Ultimate Multisite koji žele dodati male funkcije, poput dodavanja Google Analytics skripte na stranice za registraciju ili skrivanja meta box-a iz admin dashboard-a.

Ovaj članak će vam pokazati kako da koristite te kod fragmente ili preciznije gde ih postaviti.

Snippetove možete pronaći na linku ispod:

https://github.com/next-press/wp-ultimo-snippets/

Postoje dva načina za dodavanje koda:

  1. U datoteke `functions.php` vašeg teme.

  2. Must-Use Plugins (mu-plugins).

# Kako dodati snippet na datoteku functions.php vaše teme. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Prijavite se u admin dashboard mreže WordPressa i idite na Themes > Theme Editor (Pogledajte sliku ispod).

  2. Na stranici "Edit Themes", uverite se da ste izabrali aktivnu temu u padajućem meniju koji se nalazi u gornjem desnom delu ekrana (#3 na slici ispod).

  3. Kliknite na datoteku `functions.php` pod sekcijom "Theme Files" da biste učitali datoteku. Skrolujte do dna i zalepite Ultimate Multisite snippet koji ste dobili iz GitHub repozitorijuma.

<!-- Slika nije dostupna: WordPress Theme Editor prikazuje uređivanje datoteke functions.php -->

# Kako kreirati Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ima funkciju koja vam omogućava da učitate prilagođenu funkcionalnost zvanu "Must-Use Plugins", ili skraćeno "mu-plugins".

Ovi specijalni mu-plugins se učitavaju pre svih ostalih običnih pluginova i ne mogu se deaktivirati. U multisite mreži, kod u ovim mu-plugins će biti učitan na svim sajtovima vaše instalacije.

1. Koristite FTP ili SSH da pristupite fajl sistemu vaše WordPress instalacije.

2. У директоријуму wp-content у вашој инсталаци WordPress-а, креирајте нову директоријум под називом: mu-plugins.

<!-- Скриншот недоступен: Файл мена за управљање показује директоријум wp-content са фолдером mu-plugins -->

3. На компјутере креирајте нови PHP даточну файл под називом wu-snippet.php користећи Notepad или било који редач кода.

4. У този даточен файл унесите код Ultimate Multisite из репозиторијума на GitHub и сачувајте га. Можете такође додати овај код на vrh кода да означите свој mu plugin.
