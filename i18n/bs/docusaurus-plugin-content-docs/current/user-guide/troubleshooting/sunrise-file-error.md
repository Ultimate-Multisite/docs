---
title: Greška u fajlu Sunrise
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Greška pri instalaciji Sunrise fajla

Sunrise.php fajl je poseban fajl koji WordPress traži dok se pokreće (bootstraps). Da bi WordPress mogao da detektuje fajl `sunrise.php`, mora biti smješten unutar **wp-content foldera**.

Kada aktivirate Ultimate Multisite i prolazite kroz čarobnik za podešavanje (setup wizard), kao što je na snimku ekrana, Ultimate Multisite pokušava da kopira naš fajl `sunrise.php` u `wp-content` folder.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

Najčešće uspijemo da kopiramo fajl i sve radi kako treba. Međutim, ako nešto nije pravilno postavljeno (na primjer, dozvole foldera), možete naići na situaciju u kojoj Ultimate Multisite nije u stanju da kopira fajl.

Ako pročitate poruku o grešci koju vam Ultimate daje, vidjet ćete da je upravo to i slučaj: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

Da biste to popravili, jednostavno kopirajte fajl `sunrise.php` iz unutrašnjosti foldera plugin-a `wp-ultimo` i zalijepite ga u svoj `wp-content` folder. Nakon toga, ponovo učitajte stranicu čarobnjaka, a provjere bi trebalo da prođu.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> U svakom slučaju, ovo može ukazivati na potrebu za opštim provjerama dozvola foldera kako biste izbjegli probleme u budućnosti (ne samo sa Ultimate Multisite, već i sa drugim pluginovima i temama).

**Health Check alat** koji je dio WordPressa (možete ga pristupiti preko glavnog **admin panela sajta > Tools > Health Check**) sposoban je da vam kaže da li su vam dozvole foldera postavljene na vrijednosti koje bi mogle uzrokovati probleme sa WordPressom.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
