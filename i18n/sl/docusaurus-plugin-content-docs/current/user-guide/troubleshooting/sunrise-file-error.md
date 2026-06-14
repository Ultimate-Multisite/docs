---
title: Napaka datoteke Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Napaka napaka težava pri namestitvi Sunrise fajla

Fail `sunrise.php` je poseben fajl, ki ga WordPress preverja med samostavskimi postopi (bootstrapping). Da bi WordPress mogel prepoznati `sunrise.php` fail, mora biti nahojen v **folderu wp-content**.

Ko aktivirate Ultimate Multisite in prehodujete skozi wizard nastavitve, kot je na zasliki, ki jo imate, Ultimate Multisite poskuša kopirati naš `sunrise.php` fail v folder `wp-content`.

<!-- Zaslivanje ni na voljo: stran z wizard nastavitvami, ki prikazuje korak namestitve sunrise.php -->

Več razčasih uspešno lahko kopiramo fajl in vse deluje. Vendar pa, če nekaj ni pravilno postavljeno (na primer dovoljenja za foldere), se lahko soočate z situacijo, kjer Ultimate Multisite ne more uspe kopirati fajla.

Če preberete sporočilo o napaki, ki ga Ultimo daje, boste videli, da je to kar to: **Sunrise copy failed** (Kopiranje Sunrise prepričanja ni uspešno).

<!-- Zaslivanje ni na voljo: Sporočilo o napaki, ki prikazuje Sunrise copy failed -->

Da bi to popravili, lahko preprosto kopirate `sunrise.php` fail v folder plugin-a wp-ultimo in ga lepišite v svoj folder `wp-content`. Po tem ponovno obnavite stran wizardja in preveritve bi morale biti uspešne.

<!-- Zaslivanje ni na voljo: File manager, ki prikazuje sunrise.php v folderu plugin-a wp-ultimo --> V kakršnem koli primer pa je to lahko vzrok za splošno preverbo dovoljenj za foldere, da se izognete problemom v prihodnosti (ne le z Ultimate Multisite, ampak tudi z drugimi pluginami in temami).

**Health Check tool**, ki je del WordPressa (ga lahko dostopate preko vaše glavne strani **admin panel > Tools > Health Check**), vam lahko pove, ali imate postavljena dovoljenja za foldere na vrednosti, ki bi lahko povzročile probleme z WordPressom.

<!-- Zasnovana slika ni na voljo: WordPress Health Check alat prikazuje stanje dovoljenosti za foldere -->
