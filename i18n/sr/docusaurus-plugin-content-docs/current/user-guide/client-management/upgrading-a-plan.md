---
title: Ažuriranje plana
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Ažuriranje plana (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Vaši klijenti mogu ažurirati svoje planove u bilo kom trenutku. Oni mogu da ažuriraju na drugi plan ili kupuju bilo koje dodatne usluge ili pakete koje nudite na vašoj mreži.

U ovom tutorijalu ćemo pokriti kako to mogu da ažuriraju svoj plan i šta se dešava nakon procesa ažuriranja.

Da bi ažurirali svoj plan, vaši klijenti treba da pristupe svom dashboardu i idu na stranicu **Account** (Račun).

![Dashboard korisničkog podsajta sa linkom u meniju Account](/img/account-page/account-menu.png)

Na stranici Account će im biti prikazana njihova trenutna članarina i plan koji joj je povezan. Da bi ažurirali na drugi plan, moraju da kliknu na **Change** (Promeni) u gornjem desnom uglu sekcije **Your Membership** (Vaša Članarina).

![Stranica Account Vaša kartica Your Membership sa dugmetom Change](/img/account-page/membership-change-button.png)

Beci će biti preusmereni na formular za plaćanje gde će im biti prikazani svi dostupni planovi.

Tako će moći da vide **usluge i pakete dostupne za njihov trenutni plan**, u slučaju da žele samo kupiti određenu uslugu ili paket (kao što su neograničena poseta ili prostor na disku u našem primeru), a ne ažurirati plan.

![Upgrade picker prikazuje dostupne planove i pakete sa strane klijenta](/img/account-page/upgrade-picker.png)

Nakon što izaberu proizvod koji žele da kupuju, videće koliko će moraju da plate trenutno – isključujući bilo kakvu postojeću kreditnu liniju – i koliko će biti naplaćeno na sledeći datum fakturisanja.

Obično, ako je proizvod drugi plan i plaćanje se vrši između naknade za članarinu, dobiće kredit za iznos koji je plaćen na prvom planu.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Ako izaberete plan ili paket koji ne menja ništa u odnosu na trenutnu pretplatu, videćete poruku koja vam to objašnjava.

![Napomena kada odabrani plan ne menja pretplatu](/img/account-page/upgrade-no-change.png)

Nakon što se prođe kroz plaćanje (checkout), novi proizvod(i) će biti dodati na nalog vaših kupaca, a svi limiti ili funkcije novog proizvoda(a) će im se trenutno dodati: posete, prostor na disku, postovi itd...

##

##

## Putanje za nadogradnju i povratak (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Na svakom od vaših proizvoda, dobićete karticu **Up & Downgrades**. Prvi opcija na toj kartici je polje pod nazivom **Plan Group**.

**Plan grupe** omogućavaju Ultimate Multisite da zna da određeni planovi pripadaju istoj "porodici", i zato treba koristiti te planove za kreiranje opcija za nadogradnju/povratak.

![Up & Downgrades kartica proizvoda sa poljem Plan Group](/img/config/product-upgrades-plan-group.png)

Na primer, imate dostupan **Besplan** (Free plan), **Osnovni plan** (Basic Plan) i **Premium plan**. Želite da korisnici pretplaćeni na **Besplan** mogu nadograditi samo na **Premium plan**, a ne želite da im se "Osnovni plan" prikaže kao opcija za nadogradnju. Sve što treba da uradite je dodeliti isti naziv grupe plana i za Besplan i Premium plan, kako je prikazano u slikama ispod.

![Stranica proizvoda sa Besplanom planom sa dodeljenom High End plan group](/img/config/product-upgrades-free.png)

![Stranica proizvoda sa Premium planom sa dodeljenom High End plan group](/img/config/product-upgrades-premium.png)

Ovo treba da kaže Ultimate Multisite da postoji "porodica" planova u mreži pod nazivom **High End**. Kada se nudi nadogradnja ili sniženje, samo planovi iz iste porodice će biti prikazani kao opcija korisniku.
