---
title: Postavljanje konstante Sunčja na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Postavljanje konstante Sunrise na true u Closte-u

Neki hosting provjedi zaključavaju wp-config.php zbog sigurnosnih razloga. To znači da Ultimate Multisite ne može automatski uređivati taj datoteku kako bi uključio potrebne konstante za mapiranje domena i druge značajke da bi počele raditi. Closte je jedan od takvih hostingu.

Međutim, Closte nudi način da dodate konstante u wp-config.php na siguran način. Samo trebate slijediti korake ispod:

## Na Closte dashboardu

Prvo, [prijavite se na svoj Closte račun](https://app.closte.com/), kliknite na meni Sites, a zatim kliknite na link Dashboard na sajtu na kojem trenutno radite:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Do vas će se pojaviti niz novih stavki u meniju s lijeve strane ekrana. Navigirajte do stranice **Settings** koristeći taj meni:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Zatim, na **Settings**, pronađite karticu WP-Config, a zatim polje "Additional wp-config.php content" (Dodatni sadržaj wp-config.php) na toj kartici:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

U kontekstu instaliranja Ultimate Multisite, trebat će vam dodati konstantu sunrise u to polje. Samo dodajte novi red i zalijepite liniju ispod. Nakon toga, kliknite na dugme **Save All** (Spremi sve).

define('SUNRISE', true);

To je to, sve je spremno. Vratite se na wizard za instalaciju Ultimate Multisite i osvježite stranicu kako biste nastavili s procesom.
