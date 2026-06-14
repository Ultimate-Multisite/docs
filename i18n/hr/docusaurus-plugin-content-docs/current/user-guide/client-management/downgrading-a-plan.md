---
title: Prebacivanje na niži plan
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Prebacivanje plana (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Prebacivanje ili prebacivanje pretplate je uobičajena radnja koju vaši klijenti mogu učiniti ako imaju ograničen budžet ili odluče da više ne trebaju mnogo resursa za upravljanje svojim sub-sajtom.

## Kako prebaciti plan

Vaši klijenti mogu prebaciti svoj plan bilo kada tako što se prijave na admin dashboard svog sub-sajta i kliknu na **Promijeni** (Change) pod stranicom s računom.

![Stranica s računom korisnika sa Vašom karticom članstva i gumbom Promijeni](/img/account-page/membership-change-button.png)

Nakon što kliknu na gumb **Promijeni**, korisnik/klijent će biti preusmjeren na stranicu za plaćanje gdje mogu odabrati plan koji žele promijeniti svoje pretplatu.

![Stranica s opcijama prebacivanja plana sa strane klijenta](/img/account-page/downgrade-picker.png)

U ovom primjeru, prebacujemo plan s **Premium** na **Besplatan**.

Da bi nastavili, korisnik samo treba kliknuti na gumb **Završi plaćanje** (Complete Checkout). Zatim će ga vratiti na stranicu s računom koja prikazuje poruku o predstojećoj promjeni članstva. Promjene će stupiti na snagu u **sledećem ciklusu fakturiranja** klijenta.

![Stranica s računom koja prikazuje banner za predstojeću promjenu članstva](/img/account-page/pending-change.png)

### Što se događa kada korisnik prebaci plan

Važno je napomenuti da prebacivanje plana ne mijenja postojeću konfiguraciju na sub-sajtu korisnika.

Ne mijenja automatski šablon sajta jer promijeniti šablon sajta potpuno obriše i resetira sub-sajt. To se radi kako bi se izbjegla nepotrebna gubitak podataka. Dakle, prostor na disku, teme, pluginovi itd. ostaju netaknuti osim postova.

Razumijemo da je vaš glavni problem ograničenja i kvota koje postavljate pod svakim planom, ali moramo uzeti u obzir štetu koju bi to moglo nanijeti subsite korisnika ako izbrišemo ili promijenimo bilo koja njegova postrojenja.

Za objave koje premašuju limit postavljen na planu, imate 3 različita opcije: **Ostaviti objave kako su** *,* **Prebaciti objave u smeće** *,* ili **Prebaciti objave u radni nacrt** *. Možete to konfigurirati pod Ultimate Multisite podešavanjima.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Što se događa s plaćanjem

U verziji 2.0 više nije potrebno nikakvo podešavanje u vezi sa proračunom (proration).

To je zato što sustav čeka da postojeći članstvo **završite svoj ciklusa fakturiranja prije nego što** novi plan/članstvo stupi na snagu. Novi iznos za novo članstvo će se automatski primijeniti i naplatiti u sljedećem ciklusu fakturiranja.
