---
title: Podešavanje konstante Sunčja na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Podeš li postaviti konstantu Sunrise na true u Closte-u

Neki hosting provajderi zaključavaju fajl `wp-config.php` zbog sigurnosnih razloga. To znači da Ultimate Multisite ne može automatski uređivati taj fajl kako bi uključio potrebne konstante za mapiranje domena i druge funkcije da bi radile. Closte je jedan od takvih hostingu.

Međutim, Closte nudi način da dodate konstante u `wp-config.php` na siguran način. Samo treba da pratite korake ispod:

## Na Closte dashboardu

Prvo, [prijavite se na svoj Closte nalog](https://app.closte.com/), kliknite na meni Sites, a zatim kliknite na link Dashboard na sajtu na kojem trenutno radite:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Doći ćete do nekoliko novih stavki u meniju sa leve strane ekrana. Koristeći taj meni, navigirajte do stranice **Settings** (Podešavanja):

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Zatim, na **Settings**, pronađite karticu WP-Config i zatim polje "Additional wp-config.php content" (Dodatni sadržaj wp-config.php) na toj kartici:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

U kontekstu instaliranja Ultimate Multisite, moraćete da dodate konstantu `sunrise` u to polje. Samo dodajte novi red i zalepite liniju ispod. Nakon toga, kliknite na dugme **Save All** (Spremi sve).

define('SUNRISE', true);

To je sve, spremili ste. Vratite se na wizard za instalaciju Ultimate Multisite i osvježite stranicu da biste nastavili sa procesom.
