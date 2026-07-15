---
title: Slanje e-poruka i masovnih poruka
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Slanje emailova i emitiranja (v2)

_**VAŽNA NAPOMENA: Ovaj se članak odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite dolazi sa značajkom koja će vam omogućiti komunikaciju s vašim korisnicima slanjem emaila ciljanom korisniku ili skupini korisnika, kao i slanjem obavijesti na njihov admin Dashboard radi emitiranja najava

## Dodajte admin obavijesti na Dashboard svojih korisnika pomoću emitiranja {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Koristeći značajku emitiranja Ultimate Multisite, možete dodati **admin obavijesti** na admin Dashboard podstranice svog korisnika.

Ovo je iznimno korisno ako trebate objaviti najavu poput održavanja sustava ili ponude novih proizvoda ili usluga svojim postojećim korisnicima. Ovako će admin obavijest izgledati na Dashboardu vašeg korisnika.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Za pokretanje admin obavijesti idite na svoj mrežni admin Dashboard i pod izbornikom **Ultimate Multisite** pronaći ćete opciju **Emitiranja**.

![Stranica popisa emitiranja u Ultimate Multisite adminu](/img/admin/broadcasts-list.png)

Također možete uređivati postojeća emitiranja:

![Sučelje za uređivanje emitiranja](/img/admin/broadcast-edit.png)

Na ovoj stranici kliknite gumb **Dodaj emitiranje** na vrhu.

To će otvoriti modalni prozor za dodavanje emitiranja gdje možete odabrati koju vrstu emitiranja želite poslati.

Odaberite **Poruka**, a zatim kliknite gumb **Sljedeći korak**.

![Modalni prozor za dodavanje emitiranja s odabranom opcijom Poruka](/img/admin/broadcast-add-message.png)

Sljedeći prozor tražit će od vas ili **Ciljanog korisnika** ili **Ciljani proizvod**. Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Za pretraživanje korisničkog Accounta ili proizvoda trebate početi upisivati ključnu riječ unutar polja.

U polju **Vrsta poruke** možete odabrati boju obavijesti. Time ćete naglasiti hitnost svoje poruke.

Zatim možete kliknuti **Sljedeći korak**.

![Polja za ciljane korisnike, ciljani proizvod i vrstu poruke za emitiranje poruke](/img/admin/broadcast-message-targets.png)

Sljedeći prozor mjesto je gdje možete početi sastavljati svoju poruku unosom predmeta i sadržaja/poruke koju želite emitirati korisnicima.

![Predmet poruke emitiranja i uređivač sadržaja u koraku sastavljanja](/img/admin/broadcast-edit.png)

Nakon izrade poruke možete pritisnuti gumb **Pošalji**.

I to je to. Admin obavijest trebala bi se odmah prikazati na Dashboardu vašeg korisnika.

## Šaljite emailove svojim korisnicima {#send-emails-to-your-customers}

Koristeći značajku emitiranja Ultimate Multisite, možete poslati email svojim korisnicima. Imate opciju poslati email samo određenim korisnicima ili ciljati određenu korisničku skupinu na temelju proizvoda ili plana na koji su pretplaćeni.

Za pokretanje email emitiranja idite na svoj mrežni admin Dashboard i pod izbornikom Ultimate Multisite pronaći ćete opciju Emitiranje.

![Stranica popisa emitiranja koja se koristi kao početna točka za email emitiranje](/img/admin/broadcasts-list.png)

Na ovoj stranici kliknite gumb **Dodaj emitiranje** na vrhu.

To će otvoriti modalni prozor za dodavanje emitiranja gdje možete odabrati koju vrstu emitiranja želite poslati. Odaberite **Email**, a zatim kliknite gumb **Sljedeći korak**.

![Modalni prozor za dodavanje emitiranja s odabranom opcijom Email](/img/admin/broadcast-add-email.png)

Sljedeći prozor tražit će od vas ili **Ciljanog korisnika** ili **Ciljani proizvo** d. Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Za pretraživanje korisničkog Accounta ili proizvoda trebate početi upisivati ključnu riječ unutar polja.

Nakon što je vaša ciljana publika odabrana, možete kliknuti **Sljedeći korak**.

![Odabir ciljanih korisnika i ciljanog proizvoda za email emitiranje](/img/admin/broadcast-email-targets.png)

Sljedeći prozor mjesto je gdje možete početi sastavljati svoj email unosom predmeta i sadržaja/poruke koju želite poslati korisnicima.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Nakon izrade poruke možete pritisnuti gumb **Pošalji**.

I tako je lako poslati email svojim krajnjim korisnicima pomoću značajke emitiranja.

## Sistemski emailovi {#system-emails}

Sistemski emailovi u Ultimate Multisite su one **automatske obavijesti** koje sustav šalje nakon određenih radnji poput registracije, plaćanja, mapiranja domene itd. Ti se emailovi mogu uređivati ili mijenjati u postavkama Ultimate Multisite. Također dolazi sa značajkom koja će vam omogućiti resetiranje i uvoz postojećih postavki iz druge Ultimate Multisite instalacije.

### Resetiranje i uvoz {#resetting--importing}

Nove Ultimate Multisite verzije, kao i dodaci, mogu i povremeno će registrirati nove emailove.

Kako bismo spriječili sukobe i druge probleme, **nećemo automatski dodati nove predloške emailova kao Sistemske emailove u vašu instalaciju** , osim ako su ključni za ispravno funkcioniranje određene značajke.

Međutim, super admini i agenti mogu uvesti te novoregistrirane emailove putem alata za uvoz. Taj će proces stvoriti novi sistemski email sa sadržajem i konfiguracijom novog predloška emaila, omogućujući super adminu da napravi bilo koje željene izmjene ili ih zadrži kakvi jesu.

#### Kako uvesti sistemske emailove {#how-to-import-system-emails}

Idite na svoju stranicu postavki Ultimate Multisite i prijeđite na karticu **Emailovi**.

![Kartica Emailovi u postavkama Ultimate Multisite koja prikazuje odjeljak Sistemski emailovi](/img/config/settings-emails-tab.png)

Zatim na bočnoj traci kliknite gumb **Prilagodi sistemske emailove**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stranici Sistemskih emailova vidjet ćete akcijski gumb **Resetiraj i uvezi** na vrhu. Klik na taj gumb trebao bi otvoriti modalni prozor za uvoz i resetiranje.

![Akcijski gumb Resetiraj ili uvezi na admin stranici Sistemskih emailova](/img/admin/system-emails-reset-import.png)

Zatim možete uključiti opcije Uvoza emailova kako biste vidjeli koji su sistemski emailovi dostupni za uvoz.

<!-- Snimka zaslona nedostupna: modal Reset and Import s proširenim opcijama Import Emails -->

#### Resetiranje sistemskih e-mailova {#reseting-system-emails}

Ponekad ćete shvatiti da vam promjene koje ste napravili na određenom predlošku e-maila više ne odgovaraju i da ga želite vratiti u njegovo **zadano stanje**.

U takvim slučajevima imate dvije opcije: možete jednostavno izbrisati sistemski e-mail i ponovno ga uvesti (koristeći gore navedene upute) - čime ćete izbrisati metrike slanja i druge stvari, zbog čega je ova metoda najmanje preporučljiva.

Ili možete upotrijebiti alat **Reset & Import** za resetiranje tog predloška e-maila.

Za resetiranje predloška e-maila možete slijediti gore navedene korake dok ne dođete do alata Reset & Import, a zatim uključiti opciju **Reset** i odabrati e-mailove koje želite vratiti na njihov zadani sadržaj.

<!-- Snimka zaslona nedostupna: modal Reset and Import s proširenim opcijama Reset Emails -->
