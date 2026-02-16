---
title: Setarea constantei Sunrise pe Closte
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Setarea constantei Sunrise la true pe Closte

Unii furnizori de hosting blochează fișierul wp-config.php din motive de securitate. Asta înseamnă că Ultimate Multisite nu poate edita automat fișierul pentru a include constantele necesare funcționării mapării domeniilor și a altor funcționalități. Closte este unul dintre acești furnizori.

Cu toate acestea, Closte oferă o modalitate sigură de a adăuga constante în wp-config.php. Trebuie doar să urmezi pașii de mai jos:

## În dashboard-ul Closte

Mai întâi, [conectează-te la contul tău Closte](https://app.closte.com/), apasă pe elementul de meniu Sites, apoi apasă pe link-ul Dashboard pentru site-ul la care lucrezi:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Vei vedea o serie de noi elemente de meniu în partea stângă a ecranului. Navighează la pagina **Settings** folosind acest meniu:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Apoi, pe pagina **Settings**, găsește tab-ul WP-Config și câmpul „Additional wp-config.php content" din acel tab:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

În contextul instalării Ultimate Multisite, va trebui să adaugi constanta sunrise în acel câmp. Pur și simplu adaugă o linie nouă și lipește linia de mai jos. După aceea, apasă butonul **Save All**.

define('SUNRISE', true);

Asta e tot, ai terminat. Întoarce-te la asistentul de instalare Ultimate Multisite și reîmprospătează pagina pentru a continua procesul.
