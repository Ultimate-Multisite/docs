---
title: GitHub Snippeti
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# Kako koristiti Ultimate Multisite snippetove na našem GitHub repozitoriju {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

U GitHub repozitoriju dostupna su kodovi koji često traže korisnici Ultimate Multisite koji žele dodati male funkcionalnosti, poput dodavanja Google Analytics skripte na stranice za registraciju ili skrivanja meta kutije s admin panela.

Ovim člankom ćemo vam pokazati kako koristiti te kodove ili preciznije gdje ih postaviti.

Snippetove možete pronaći na linku:

https://github.com/next-press/wp-ultimo-snippets/

Postoje dva načina za dodavanje koda:

  1. U datoteku `functions.php` vašeg teme.

  2. Must-Use Plugins (mu-plugins).

# Kako dodati snippet na datoteku functions.php vaše teme. {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  1. Prijavite se u admin dashboard mreže WordPressa i idite na Themes > Theme Editor (Pogledajte sliku ispod).

  2. Na stranici "Edit Themes", provjerite da je vaša aktivna tema odabrana u padajućem meniju na gornjem desnom dijelu ekrana (#3 na slici ispod).

  3. Kliknite na datoteku `functions.php` pod sekcijom "Theme Files" kako biste učitali datoteku. Skrolajte do dna i zalijepite Ultimate Multisite snippet koji ste dobili iz GitHub repozitorija.

<!-- Slika nije dostupna: WordPress Theme Editor prikazuje uređivanje datoteke functions.php -->

# Kako kreirati Must-Use Plugins (mu-plugins) {#how-to-create-must-use-plugins-mu-plugins}

WordPress ima značajku koja vam omogućuje učitavanje prilagođenih funkcionalnosti zvanih "Must-Use Plugins", ili kraće, "mu-plugins".

Ovi posebni mu-plugins se učitavaju prije svih ostalih običnih pluginova i ne mogu se deaktivirati. U multisite mreži kod u ovim mu-plugins će biti učitan na svim stranicama vaše instalacije.

1. Koristite FTP ili SSH za pristup datotečnom sustavu vaše WordPress instalacije.

2. Unutar direktorija `wp-content` vaše WordPress instalacije, kreirajte novi direktorij koji se zove: `mu-plugins`.

<!-- Snimak ekrana nedostupan: File manager prikazuje wp-content direktorij sa mu-plugins folderom -->

3. Kreirajte novi PHP datoteku na svom računalu pod nazivom `wu-snippet.php` koristeći Notepad ili bilo koji editor koda.

4. Umetnite Ultimate Multisite kod snippet koji ste dobili iz GitHub repozitorija u tu datoteku i sačuvajte je. Također možete dodati ovaj kod na vrh kodeksa kako biste označili svoj mu plugin.
