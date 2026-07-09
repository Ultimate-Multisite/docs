---
title: Automatsko pretraživanje i zamjena u predlošcima web-lokacija
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Automatsko pretraživanje i zamjena u predlošcima stranice (v2)

_**Ovaj vodič zahtijeva WP UItimo verziju 2.x.**_

Jedna od najmoćnijih funkcija Ultimate Multisite je mogućnost dodavanja proizvoljnog teksta, boje i polja za odabir u obrazac za registraciju. Kada zabilježimo te podatke, možemo ih koristiti za unaprijed popunjavanje sadržaja u određenim dijelovima odabranog predloška stranice. Zatim, kada nova stranica bude objavljena, Ultimate Multisite će zamijeniti rezervisana mjesta stvarnim informacijama unesenim tokom registracije.

Na primjer, svoje predloške stranica možete napraviti s rezervisanim mjestima. Rezervisana mjesta treba dodati okružena dvostrukim vitičastim zagradama - {{placeholder_name}}.

Zatim možete jednostavno dodati odgovarajuće polje za registraciju kako biste prikupili te podatke

Vaš kupac će zatim moći popuniti to polje tokom registracije.

Ultimate Multisite će zatim automatski zamijeniti rezervisana mjesta podacima koje je kupac naveo.

## **Rješavanje problema "predložak pun rezervisanih mjesta"**

Sve je to odlično, ali nailazimo na ružan problem: sada su naši predlošci stranica - koje naši kupci mogu posjetiti - puni ružnih rezervisanih mjesta koja ne govore mnogo.

Da bismo to riješili, nudimo opciju postavljanja lažnih vrijednosti za rezervisana mjesta, a te vrijednosti koristimo za pretraživanje i zamjenu njihovog sadržaja na predlošcima stranica dok ih vaši kupci posjećuju.

Uređivaču rezervisanih mjesta predložaka možete pristupiti tako što ćete otići na **Ultimate Multisite > Settings > Stranice**, pomaknuti se do područja Opcije predloška stranice, a zatim kliknuti na link **Uredi rezervisana mjesta**.

![Područje Opcije predloška stranice na stranici postavki Stranice](/img/config/settings-sites-templates-section.png)

To će vas odvesti do uređivača sadržaja rezervisanih mjesta, gdje možete dodati rezervisana mjesta i njihov odgovarajući sadržaj.

![Ulazna tačka uređivača rezervisanih mjesta predložaka](/img/config/settings-sites-templates-section.png)
