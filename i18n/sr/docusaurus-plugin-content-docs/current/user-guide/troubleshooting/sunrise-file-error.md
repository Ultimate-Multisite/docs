---
title: Greška u fajlu Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Greška pri instalaciji Sunrise fajla {#error-installing-the-sunrise-file}

Fajl `sunrise.php` je poseban fajl koji WordPress traži dok se sam inicijalizuje (bootstraps). Da bi WordPress mogao da detektuje taj `sunrise.php` fajl, on mora biti lociran unutar foldera **wp-content**.

Kada aktivirate Ultimate Multisite i prolazite kroz uslovni vodič podešavanja kao onaj koji vidite na slici, Ultimate Multisite pokušava da kopira naš `sunrise.php` fajl u folder `wp-content`.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

U većini slučajeva uspevamo da ga uspešno kopiramo i sve radi. Međutim, ako nešto nije pravilno podešeno (na primer, dozvole za foldere), možete naići na situaciju u kojoj Ultimate Multisite ne može da kopira fajl.

Ako pročitate poruku o grešci koju Ultimo vam daje, videćete da se upravo desilo: **Sunrise copy failed** (Kopiranje Sunrise fajla nije uspelo).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Da biste to popravili, jednostavno kopirajte `sunrise.php` fajl unutar foldera vašeg plugin-a wp-ultimo i zalepite ga u folder `wp-content`. Nakon toga, ponovo učitajte stranicu vodiča i provere bi trebalo da prođu.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> U svakom slučaju, ovo može zahtevati opštanu proveru dozvola za foldere kako biste izbegli probleme u budućnosti (ne samo sa Ultimate Multisite, već i sa drugim pluginovima i temama).

**Health Check alat**, koji je deo WordPressa (možete ga pristupiti preko glavnog **admin panel > Tools > Health Check** na vašoj glavnoj lokaciji), sposoban je da vam kaže da li su dozvole za foldere postavljene na vrednosti koje bi mogle da izazovu probleme sa WordPressom.

<!-- Скриншот недоступен: Инструмент за проверу здравља WordPressа prikazuje статус дозвола фолдера -->
