---
title: Greška s datom sunčja
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Greška pri instalaciji Sunrise datoteke {#error-installing-the-sunrise-file}

Datoteka `sunrise.php` je posebna datoteka koju WordPress traži dok se sam inicijalizira (bootstraps). Da bi WordPress mogao prepoznati tu datoteku, ona mora biti smještena unutar foldera **wp-content**.

Kada aktivirate Ultimate Multisite i prođete kroz wizard za postavljanje poput onog koji vidite na slici, Ultimate Multisite pokušava kopirati našu `sunrise.php` datoteku u folder `wp-content`.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

U većini slučajeva uspješno kopiramo datoteku i sve radi. Međutim, ako nešto nije pravilno postavljeno (na primjer, dozvole za foldere), možete naići na situaciju u kojoj Ultimate Multisite ne može kopirati datoteku.

Ako pročitate poruku o grešci koju Ultimo vam daje, vidjet ćete da se to upravo dogodilo ovdje: **Sunrise copy failed** (Kopiranje Sunrise datoteke nije uspješno).

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Da biste to popravili, jednostavno kopirajte `sunrise.php` datoteku unutar foldera vašeg plugin-a wp-ultimo i zalijepite je u svoj folder `wp-content`. Nakon toga, ponovno učitajte stranicu wizard-a i provjere bi trebale proći.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> U svakom slučaju, ovo može zahtijevati opću provjeru dozvola za foldere kako biste izbjegli probleme u budućnosti (ne samo s Ultimate Multisite, već i s drugim pluginovima i temama).

**Health Check tool** (Alat za provjeru stanja) koji je dio WordPressa (možete ga pristupiti putem glavnog **admin panel > Tools > Health Check** na vašoj stranici) sposoban je reći vam je li imate postavljene dozvole za foldere koje bi mogle uzrokovati probleme s WordPressom.

<!-- Zaslon nije dostupan: Alat za provjeru zdravlja WordPressa prikazuje status dozvola foldera -->
