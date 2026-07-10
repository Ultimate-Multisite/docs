---
title: Ažuriranje plana
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Ažuriranje plana (v2) {#upgrading-a-plan-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Vaši kupci mogu ažurirati svoje planove u bilo kojem trenutku. Oni mogu ažurirati na drugi plan ili kupiti bilo koje dodatne usluge ili pakete koje nudite na svojoj mreži.

U ovom tutorijalu ćemo pokriti kako to mogu učiniti i što se događa nakon procesa ažuriranja.

Da bi ažurirali svoj plan, vaši kupci trebaju pristupiti svom dashboardu i otići na stranicu **Account** (Račun).

![Dashboard korisničkog podpodododododododododododododododododododododododododododododododod

![Ažuriranje sažetka plaćanja koji prikazuje primijenjeni kredit i sljedeći iznos računa](/img/account-page/upgrade-summary.png)

Ako odaberete plan ili paket koji ne mijenja ništa u odnosu na trenutnu pretplatu, vidjet ćete poruku koja objašnjava to.

![Obavijest kada odabrani plan ne mijenja pretplatu](/img/account-page/upgrade-no-change.png)

Nakon što se plaćanje završi, novi proizvod(i) će biti dodan na račun vaših kupaca i svi limiti ili značajke novog proizvoda(a) će im se trenutno dodati: posjeti, prostor na disku, postovi itd...

##

##

## Putanje za nadogradnju i sniženje (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

Na svakom od vaših proizvoda, dobit ćete karticu **Up & Downgrades**. Prvi izbor na toj kartici je polje pod nazivom **Plan Group**.

**Plan grupe** omogućuju vam da Ultimate Multisite zna da određeni planovi pripadaju istoj "porodici", i stoga bi trebali biti korišteni za konstrukciju opcija za nadogradnju/sniženje.

![Tab uređivanja proizvoda Up and Downgrades s poljem Plan Group](/img/config/product-upgrades-plan-group.png)

Na primjer, imate dostupan **Besplatan plan**, **Osnovni plan** i **Premium plan**. Želite da korisnici pretplaćeni na **Besplatan plan** mogu nadograditi samo na **Premium plan** i ne želite da im se "Osnovni plan" prikazuje kao opcija za nadogradnju. Sve što trebate učiniti je dodijeliti isto ime plan grupe za Besplatan i Premium plan, kao što je prikazano u slikama ispod.

![Stranica proizvoda Besplatan plan s dodijeljenom Plan Group High End](/img/config/product-upgrades-free.png)

![Stranica proizvoda Premium plan s dodijeljenom Plan Group High End](/img/config/product-upgrades-premium.png)

Ovo treba pročitati Ultimate Multisite da bi se javilo da postoji "porodica" planova u mreži koja se zove **High End**. Kada ponavljate napredek ili prebacujete na niže, samo planovi iz iste obitelji će biti prikazani kao opcija za korisnika.
