---
title: Automatsko pretraživanje i zamena u šablonima sajtova
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatsko pretraživanje i zamena u šablonima sajtova (v2)

_**Ovaj tutorial zahteva WP Uitimo verziju 2.x.**_

Jedna od najmoćnijih karakteristika Ultimate Multisite je mogućnost dodavanja proizvoljnog teksta, boja i polja na formular za registraciju. Kada uhvatimo taj podaci, možemo ih koristiti da unapred popunimo sadržaj u određenim delovima izabranog šablona sajta. Zatim, kada se novi sajt objavi, Ultimate Multisite će zamijeniti placeholder-e (lokalizatore) stvarnom informacijom unetom tokom registracije.

Na primer, možete kreirati svoje šablonske sajtove sa placeholder-ima. Placeholder-e treba da dodate okružene dvostrukim vitičastim zagradama - {{placeholder_name}}.

Zatim, jednostavno dodajte odgovarajući polje za registraciju kako biste taj podatak uhvatili.

Vaš kupac će tada moći da popuni to polje tokom registracije.

Ultimate Multisite će zatim automatski zamijeniti placeholder-e podacima koje je kupac unio.

## **Rešavanje problema "šablon pun placeholder-a"**

Sve to je super, ali naiđemo na neugodan problem: sada su na našim šablonima sajtova - koje mogu posetiti naši kupci - puna jezivi placeholder-i koji ne daju mnogo informacija.

Da bismo to rešili, nudimo opciju podešavanja lažnih vrednosti za placeholder-e i koristimo te vrednosti da ih pretražujemo i zamijenimo sadržaj na šablonima sajtova dok su vaši kupci poseti.

Možete pristupiti editoru placeholder-a tako što ćete otići na **Ultimate Multisite > Settings > Sites**, skrolovati do oblasti Site Template Options, a zatim kliknuti na link **Edit Placeholders**.

![Obnova opcija šablona sajta u stranici podešavanja sajtova](/img/config/settings-sites-templates-section.png)

To će vas odvesti do editora sadržaja placeholder-a, gde možete dodati placeholder-e i njihov odgovarajući sadržaj.

![Entry point za editor šablona podešavanja sajtova](/img/config/settings-sites-templates-section.png)
