---
title: Slanje e-poruka i masovnih obavijesti
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Slanje e-mailova i obavijesti (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite dolazi sa funkcijom koja vam omogućava da komunicirate sa svojim klijentima slanjem e-maila ciljanom korisniku ili grupi korisnika, kao i slanjem obavijesti na njihov admin dashboard radi oglašavanja.

## Dodavanje admin obavijesti na dashboard vaših klijenta putem Broadcasts-a

Koristeći funkciju Broadcasts u Ultimate Multisite-u, možete dodati **admin obavijesti** na admin dashboard subsite-a vašeg korisnika.

Ovo je izuzetno korisno ako trebate objaviti neku obavijest, poput održavanja sistema ili predstavljanja novih proizvoda ili usluga vašim postojećim korisnicima. Tako će izgledati admin obavijest na dashboard-u vašeg korisnika.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Da biste kreirali admin obavijest, idite na admin dashboard vaše mreže i pod menijem **Ultimate Multisite** pronaći ćete opciju **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Možete uređivati i postojeće obavijesti:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

Sa ove stranice, kliknite na gumb **Add Broadcast** (Dodaj obavijest) na vrhu.

Ovo će otvoriti modalni prozor za dodavanje obavijesti gdje možete odabrati koji tip obavijesti želite poslati.

Nastavite i odaberite **Message** (Poruka), a zatim kliknite na gumb **Next Step** (Sljedeći korak).

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Sljedeći prozor će vas pitati za **Target customer** (Ciljani korisnik) ili **Target product** (Ciljani proizvod). Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Da biste pretražili korisnički račun ili proizvod, morate početi kucati ključnu riječ u polje.

Pod poljem **Message type** (Tip poruke), možete odabrati boju obavijesti. Ovo će naglasiti hitnost vaše poruke.

Zatim možete kliknuti **Next Step**.

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

Sljedeći prozor je mjesto gdje možete početi sastavljati poruku unosom teme i sadržaja/poruke koju želite objaviti korisnicima.

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

Nakon kreiranja poruke, možete pritisnuti gumb **Send** (Pošalji).

I to je sve. Admin obavijest bi trebala odmah biti vidljiva na dashboard-u vašeg korisnika.

## Slanje e-mailova vašim klijentima

Koristeći funkciju Broadcasts u Ultimate Multisite-u, možete poslati e-mail vašim korisnicima. Imate opciju da pošaljete e-mail samo određenim korisnicima ili da ciljate određenu grupu korisnika na osnovu proizvoda ili plana na koje su pretplaćeni.

Da biste započeli e-mail broadcast, idite na admin dashboard vaše mreže i pod menijem Ultimate Multisite pronaći ćete opciju Broadcast.

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

Sa ove stranice, kliknite na gumb **Add broadcast** (Dodaj obavijest) na vrhu.

Ovo će otvoriti modalni prozor za dodavanje obavijesti gdje možete odabrati koji tip obavijesti želite poslati. Nastavite i odaberite **Email** (E-mail), a zatim kliknite na gumb **Next Step**.

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

Sljedeći prozor će vas pitati za **Target customer** (Ciljani korisnik) ili **Target product** (Ciljani proizvod). Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Da biste pretražili korisnički račun ili proizvod, morate početi kucati ključnu riječ u polje.

Nakon što je vaša ciljna publika odabrana, možete kliknuti **Next Step**.

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

Sljedeći prozor je mjesto gdje možete početi sastavljati e-mail unosom teme i sadržaja/poruke koju želite poslati korisnicima.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Nakon kreiranja poruke, možete pritisnuti gumb **Send** (Pošalji).

I tako je jednostavno poslati e-mail vašim krajnjim korisnicima koristeći funkciju broadcast.

## Sistemski e-mailovi

Sistemski e-mailovi u Ultimate Multisite-u su **automatske obavijesti** koje sistem šalje nakon određenih radnji, kao što su registracija, plaćanje, mapiranje domena itd. Ove e-mail poruke se mogu uređivati ili mijenjati iz Ultimate Multisite postavki. Također dolazi sa funkcijom koja vam omogućava resetovanje i uvoz postojećih postavki iz druge Ultimate Multisite instalacije.

### Resetovanje i uvoz

Nove verzije Ultimate Multisite-a, kao i add-on-i, povremeno mogu registrovati nove e-mail šablone.

Da bismo spriječili sukobe i druge probleme, **mi nećemo automatski dodavati nove e-mail šablone kao sistemske e-mailove na vašu instalaciju** , osim ako nisu ključni za pravilno funkcionisanje određene funkcije.

Međutim, super admini i agenti mogu uvesti ove novoregistrovane e-mailove putem alata za uvoz (importer tool). Taj proces će kreirati novi sistemski e-mail sa sadržajem i konfiguracijom novog e-mail šablona, omogućavajući super adminu da napravi bilo kakve modifikacije koje želi ili da ih ostavi takve kakve jesu.

#### Kako uvesti sistemske e-mailove

Idite na stranicu Postavke Ultimate Multisite-a i idite na karticu **Emails** (E-mailovi).

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Zatim, na bočnom panelu, kliknite na gumb **Customize System Emails** (Prilagodi sistemske e-mailove).

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stranici Sistemski e-mailovi, vidjet ćete akcioni gumb **Reset & Import** (Resetovanje i uvoz) na vrhu. Klikom na taj gumb bi trebalo da se otvori modalni prozor za uvoz i resetovanje.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Zatim, možete uključiti opcije Import Emails da vidite koji sistemski e-mailovi su dostupni za uvoz.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resetovanje sistemskih e-mailova

Ponekad ćete shvatiti da promjene koje ste napravili određenom e-mail šablonu više ne rade za vas i želite ga vratiti u **podrazumevano stanje**.

U takvim slučajevima, imate dvije opcije: možete jednostavno obrisati sistemski e-mail i ponovo ga uvesti (koristeći gore navedene uputstva) – što će izbrisati metrike slanja i druge stvari, što čini ovu metodu najmanje poželjnom.

Ili možete koristiti **Reset & Import tool** za resetovanje tog e-mail šablona.

Da biste resetovali e-mail šablon, možete pratiti gore navedene korake sve dok ne stignete do alata Reset & Import, a zatim uključiti opciju **Reset** i odabrati e-mailove koje želite vratiti na podrazumevano stanje sadržaja.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
