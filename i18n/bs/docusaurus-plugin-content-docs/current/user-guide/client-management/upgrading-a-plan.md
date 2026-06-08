---
title: Nadogradnja plana
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Nadogradnja plana (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Vaši klijenti mogu nadograditi svoje planove u bilo kojem trenutku. Mogu ili nadograditi na drugi plan ili kupiti bilo koje dodatne usluge ili pakete koje nudite na svojoj mreži.

U ovom tutorijalu pokrićemo kako mogu nadograditi svoj plan i šta se dešava nakon procesa nadogradnje.

Da nadograde svoj plan, vaši klijenti treba da pristupe svom dashboardu i idu na stranicu **Account**.

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Na stranici Account, prikazan će im biti njihovo trenutno članstvo i plan povezan s njime. Da nadograde na drugi plan, moraju kliknuti na **Change** u gornjem desnom uglu sekcije **Your Membership**.

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

Bit će preusmjereni na formular za plaćanje gdje će biti prikazani svi dostupni planovi.

Također će moći vidjeti **usluge i pakete dostupne za njihov trenutni plan**, u slučaju da žele kupiti samo određenu uslugu ili paket (poput neograničenog broja posjeta ili disk prostora u našem primjeru ovdje), a ne nadograditi plan.

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

Nakon što izaberu proizvod koji žele kupiti, videće koliko moraju platiti odmah – bez obzira na postojeći kredit – i koliko će biti naplaćeno na sljedeći datum naplate.

Obično, ako je proizvod drugi plan i plaćanje se vrši između naplate članstva, dobit će kredit za iznos plaćen na prvom planu.

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Ako odaberu plan ili paket koji neće ništa promijeniti u odnosu na trenutnu pretplatu, videće poruku koja to objašnjava.

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

Nakon što se proces plaćanja završi, novi proizvod(i) bit će dodati na račun vaših klijenata, a sve ograničenja ili značajke novog proizvoda(a) trenutno će biti dodate: posjeti, disk prostor, objave, itd...

##

##

## Nadogradnja i ponizanje (Upgrade and Downgrade Paths)

Na svakom vašem proizvodu, bit će vam dostupna kartica **Up & Downgrades**. Prva opcija na toj kartici je polje nazvano **Plan Group**.

**Plan groups** vam omogućava da Ultimate Multisiteu kažete da određeni planovi pripadaju istoj "porodi", i stoga bi se trebali koristiti za kreiranje opcija putanje za nadogradnju/ponizanje.

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

Na primjer, imate na raspolaganju **Free plan**, **Basic Plan** i **Premium Plan**. Želite da korisnici pretplaćeni na **Free Plan** mogu nadograditi samo na **Premium Plan**, a da ne žele da vide "Basic Plan" kao opciju nadogradnje. Sve što je potrebno da uradite jeste da dodijelite isto ime plan group za Free i Premium plan, kao što je prikazano u snimcima zaslona ispod.

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

Ono što ovo treba da uradi je da kaže Ultimate Multisiteu da postoji "porodica" planova u mreži nazvana **High End**. Kada nudi nadogradnje ili ponizanje, prikazat će se samo planovi iz iste porodice kao opcija za korisnika.
