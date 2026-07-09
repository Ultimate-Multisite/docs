---
title: Postavljanje konstante Sunrise na Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Postavljanje konstante Sunrise na true u Closte-u {#setting-the-sunrise-constant-to-true-on-closte}

Neki provajderi hostinga zaključavaju `wp-config.php` iz sigurnosnih razloga. To znači da Ultimate Multisite ne može automatski urediti fajl kako bi uključio neophodne konstante za rad mapiranja domena i drugih značajnosti. Closte je takav provajder.

Međutim, Closte nudi način za siguran dodatak konstanti u `wp-config.php`. Samo je potrebno slijediti korake ispod:

## Na Closte dashboardu {#on-the-closte-dashboard}

Prvo, [prijavite se na svoj Closte račun](https://app.closte.com/), kliknite na izbornik Sites, a zatim kliknite na link Dashboard na sajtu na kojem trenutno radite:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Na lijevoj strani ekrana bi trebalo da vidite nekoliko novih stavki u izborniku. Navigirajte na stranicu **Settings** koristeći taj izbornik:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Zatim, na **Settings**, pronađite karticu WP-Config, a zatim polje "Additional wp-config.php content" na toj kartici:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

U kontekstu instalacije Ultimate Multisite-a, morat ćete dodati konstantu sunrise u to polje. Jednostavno dodajte novi red i zalijepite sljedeći red. Nakon toga, kliknite na gumb **Save All**.

define('SUNRISE', true);

To je sve, spremni ste. Vratite se na Ultimate Multisite instalacioni wizard i osvježite stranicu da biste nastavili proces.
