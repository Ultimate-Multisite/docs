---
title: Prebacivanje na niži plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Prebacivanje plana (v2) {#downgrading-a-plan-v2}

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Prebacivanje ili snižavanje plana pretplate je uobičajena radnja koju vaši klijenti mogu uraditi ako imaju ograničen budžet ili odluče da im više resursa neće trebati za upravljanje sub-sajtom.

## Kako prebaciti plan {#how-to-downgrade-a-plan}

Vaši klijenti mogu bilo kada prebaciti svoj plan tako što će se ulogovati na admin dashboard svog sub-sajta i kliknuti na **Change** (Promeni) pod stranicom sa svojim računom.

![Stranica sa računom korisnika, Vaša kartica članstva i dugme Promeni](/img/account-page/membership-change-button.png)

Nakon klika na dugme **Change**, korisnik/klijent će biti preusmeren na stranicu za plaćanje gde može izabrati plan koji želi da promeni svoju pretplatu.

![Stranica sa opcijama snižavanja plana sa strane klijenta](/img/account-page/downgrade-picker.png)

U ovom primeru, snižavamo plan sa **Premium** na **Free** (Besplatan).

Da bi nastavio, korisnik samo treba kliknuti na dugme **Complete Checkout** (Završi plaćanje). Zatim će ga vratiti na stranicu sa računom koja prikazuje poruku o predviđenoj promeni za članstvo. Promene će stupiti na snagu u sledećem **računarskom ciklusu**.

![Stranica sa računom koja prikazuje banner sa predviđenom promenom članstva](/img/account-page/pending-change.png)

### Šta se dešava kada korisnik sniža plan {#what-happens-when-a-user-downgrades-their-plan}

Važno je napomenuti da snižavanje plana ne menja postojeću konfiguraciju u sub-sajtu korisnika.

Ne menja automatski šablon sajta jer promena šablona sajta potpuno briše i resetuje sub-sajt. To se radi kako bi se izbeglo nepotrebno gubitak podataka. Dakle, prostor na disku, teme, pluginovi itd. ostaju nepromenjeni, osim postova.

Razumemo da je vaša glavna briga ograničenja i kvote koje postavljate pod svakim planom, ali moramo uzeti u obzir štetu koju bi moglo naneti korisnikovom subsitetom ako izbrišemo ili promenimo bilo kakve njegove konfiguracije.

Za objave koje premašuju limit postavljen na planu, imate 3 različite opcije: **Ostaviti objave kako su** *,* **Prebaciti objave u smeće** *,* ili **Prebaciti objave u projekat (draft)** *. Možete ovo konfigurirati pod Ultimate Multisite podešavanjima.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Šta se dešava sa plaćanjem {#what-happens-to-the-payment}

U verziji 2.0 više nije potrebno nijedno podešavanje u vezi sa proračunom (proration).

To je zato što sistem čeka da postojeći članstvo **završite svoj ciklus fakturisanja pre nego što** novi plan/članstvo stupi na snagu. Novi iznos za novo članstvo će se automatski primeniti i naplatiti u sledećem ciklusu fakturisanja.
