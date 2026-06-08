---
title: Automatsko pretraživanje i zamjena u šablonima stranice
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# Automatsko pretraživanje i zamjena u šablonima stranica (v2)

_**Za ovaj tutorijal je potrebna verzija 2.x WP UItimo.**_

Jedna od najmoćnijih značajki Ultimate Multisite-a je mogućnost dodavanja proizvoljnog teksta, boje i polja za odabir na formular za registraciju. Kada prikupimo te podatke, možemo ih koristiti za popunjavanje sadržaja u određenim dijelovima šablona stranice. Zatim, kada se nova stranica objavi, Ultimate Multisite će zamijeniti *placeholdere* stvarnim informacijama koje su uneseni tokom registracije.

Na primjer, možete napraviti svoje šablone stranica koristeći *placeholdere*. *Placeholdere* treba dodati okružene dvostrukim vitičastim zagradama – `{{placeholder_name}}`.

Zatim, jednostavno dodajte odgovarajuće polje za registraciju kako biste prikupili te podatke.

Vaš klijent će tada moći popuniti to polje tokom registracije.

Ultimate Multisite će automatski zamijeniti *placeholdere* podacima koje je klijent dostavio.

## **Rješavanje problema "šablon pun *placeholdera*"**

Sve je odlično, ali naiđemo na neugodan problem: naši šabloni stranica – koje mogu posjetiti naši klijenti – pune su neugodnih *placeholdera* koji ne govore ništa.

Da bismo to riješili, nudimo opciju postavljanja lažnih vrijednosti za *placeholdere*, i koristimo te vrijednosti za pretraživanje i zamjenu njihovog sadržaja na šablonima stranica dok klijenti posjećuju.

Pristup *editoru* *placeholdera* možete dobiti tako što ćete otići na **Ultimate Multisite > Settings > Sites**, a zatim na bočnom panelu kliknuti na link Edit Placeholders.

![Edit Placeholders link in the Sites settings sidebar](/img/config/settings-sites.png)

To će vas odvesti do *editora* sadržaja *placeholdera*, gdje možete dodati *placeholdere* i njihov odgovarajući sadržaj.

![Placeholders content editor with placeholder names and values](/img/config/settings-sites.png)
