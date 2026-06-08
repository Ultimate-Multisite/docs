---
title: Smanjivanje plana
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Smanjenje plana (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Smanjenje plana ili pretplate je uobičajena akcija koju vaši klijenti mogu izvršiti ako im je budžet ograničen ili ako odluče da neće trebati mnogo resursa za pokretanje svoje podstranice.

## Kako smanjiti plan

Vaši klijenti mogu u bilo kojem trenutku smanjiti svoj plan tako što će se prijaviti na admin dashboard svoje podstranice i kliknuti na **Change** (Promijeni) na stranici sa njihovim računom.

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

Nakon klika na gumb **Change**, korisnik/klijent će biti preusmjeren na stranicu za naplatu (checkout page) gdje može odabrati plan na koji želi da pređe svoju pretplatu.

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

U ovom primjeru, smanjujemo plan sa **Premium** na **Free**.

Da bi nastavili, korisnik samo treba da klikne na gumb **Complete Checkout**. To će ga zatim vratiti na stranicu sa računom, prikazujući poruku o pending (ocčekivanoj) promjeni za članstvo. Promjene će stupiti na snagu u **sljedećem ciklusu naplate** klijenta.

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### Šta se dešava kada korisnik smanji svoj plan

Važno je napomenuti da smanjenje plana ne mijenja postojeću konfiguraciju u podstranici korisnika.

Ne mijenja automatski i šablon stranice (site template), jer bi promjena šablona potpuno izbrisala i resetovala podstranicu. To je radi izbjegavanja nepotretnog gubitka podataka. Stoga će disk prostor, teme, pluginovi itd. ostati netaknuti, osim objave (posts).

Razumijemo da je vaš glavni problem ograničenja i kvote koje ste postavili pod svakim planom, ali moramo uzeti u obzir štetu koju bi to nanijelo podstranici korisnika da bismo izbrisali ili promijenili bilo koju od njene konfiguracije.

Za objave koje nadmašuju limit postavljen na planu, imate 3 različite opcije: **Keep the posts as it** *,* **Move the posts to trash** *,* ili **Move the posts to draft** *.* Ovo možete konfigurisati pod Ultimate Multisite podešavanjima.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Šta se dešava sa plaćanjem

U verziji 2.0, više nije potrebno bilo kakvo podešavanje plaćanja u smislu prorate (proporcionalnog naplata).

To je zato što će sistem sačekati da **postojeće članstvo završi svoj ciklus naplate prije** nego što će novi plan/članstvo stupiti na snagu. Nova iznos naplate za novo članstvo automatski će biti primijenjen i naplaćen u sljedećem ciklusu naplate.
