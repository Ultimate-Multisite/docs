---
title: Automatsko pretraživanje i zamjena u šablonima stranica
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatsko pretraživanje i zamjena u šablonima stranica (v2)

_**Ovaj tutorial zahtijeva WP Uitimo verziju 2.x.**_

Jedna od najmoćnijih značajki Ultimate Multisite je mogućnost dodavanja bilo kojeg teksta, boje i polja na registracioni formular. Kada uhvatimo taj podaci, možemo ih koristiti za unaprijed popunjavanje sadržaja u određenim dijelovima odabranog šablona stranice. Zatim, kada se nova stranica objavi, Ultimate Multisite će zamijeniti placeholder-e stvarnim informacijama koje su unijete tijekom registracije.

Na primjer, možete koristiti svoje šablonske stranice s placeholder-ima. Placeholder-i dodajte okružujući dvostrukim zagradama - {{placeholder_name}}.

Zatim možete jednostavno dodati odgovarajuće polje za registraciju kako biste uhvatili taj podatak.

Vaš kupac će tada moći popuniti to polje tijekom registracije.

Ultimate Multisite zatim automatski zamijenit će placeholder-e podacima koje je dao kupac.

## **Rješavanje problema "šablon pun placeholder-a"**

Sve to je super, ali naiđemo na neugodan problem: sada su na našim šablonima stranica - koje mogu posjetiti naši kupci - puna neugodnih placeholder-a koji ne daju mnogo informacija.

Da bismo riješili to, nudimo opciju podešavanja lažnih vrijednosti za placeholder-e i koristimo te vrijednosti za pretraživanje i zamjenu njihovog sadržaja na šablonima stranica dok su vaši kupci posjetili.

Možete pristupiti editoru placeholder-a idući na **Ultimate Multisite > Settings > Sites**, skrolajući do područja Site Template Options, a zatim klikom na link **Edit Placeholders**.

![Područje Site Template Options u stranici podešavanja Sites](/img/config/settings-sites-templates-section.png)

To će vas odvesti do editora sadržaja placeholder-a, gdje možete dodati placeholder-e i njihov odgovarajući sadržaj.

![Editor za šablone i postavke lokacija](/img/config/settings-sites-templates-section.png)
