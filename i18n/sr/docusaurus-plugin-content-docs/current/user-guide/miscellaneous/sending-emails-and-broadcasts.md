---
title: Slanje mejlova i podsetnica
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Slanje mejlova i obaveštenja (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite dolazi sa funkcijom koja će vam omogućiti da komunicirate sa svojim klijentima tako što šaljete mejlove ciljanom korisniku ili grupi korisnika, kao i da šaljete obaveštenja na njihov admin dashboard za objavljivanje najava.

## Dodavanje admin obaveštenja na dashboard vaše klijenata pomoću Broadcast-a

Koristeći funkciju Broadcast-a u Ultimate Multisite-u, možete dodati **admin obaveštenja** na admin dashboard pod-sajta vašeg korisnika.

Ovo je izuzetno korisno ako vam treba da objavite nešto poput obaveštenja o održavanju sistema ili ponude novih proizvoda ili usluga postojećim korisnicima. Tako će izgledati admin obaveštenje na dashboardu vašeg korisnika.

<!-- Screenshot unavailable: Admin obaveštenje broadcast prikazan na dashboard-u klijenta -->

Da biste započeli sa admin obaveštenjem, idite na svoj network admin dashboard i pod menijem **Ultimate Multisite**, pronaći ćete opciju **Broadcasts**.

![Stranica sa listom Broadcast-a u Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Možete takođe uređivati postojeće broadcastove:

![Interfejs za uređivanje broadcast-a](/img/admin/broadcast-edit.png)

Sa ove stranice, kliknite na dugme **Add Broadcast** (Dodaj broadcast) na vrhu.

Ovo će otvoriti prozor modalnog prozora za dodavanje broadcast-a gde možete izabrati kakav tip broadcast želite da pošaljete.

Nastavite i odaberite **Message** (Poruka), a zatim kliknite na dugme **Next Step** (Slede korak).

![Modalno prozor za dodavanje broadcast-a sa opcijom Message izabrano](/img/admin/broadcast-add-message.png)

Slede prozor će vas pitati da odaberete ili **Target customer** (Ciljani klijent) ili **Target product** (Ciljan proizvod). Napomena: možete izabrati više korisnika ili više proizvoda.

Da biste pretražali korisnički nalog ili proizvod, potrebno je početi da kucate ključnu reč unutar polja.

Pod poljem **Tip poruke** možete izabrati boju obaveštenja. Ovo će naglasiti hitnost vaše poruke.

Zatim možete kliknuti na **Sledeći korak**.

![Polja za ciljne klijente, ciljni proizvod i tip poruke za pošiljku poruke](/img/admin/broadcast-message-targets.png)

Sledeće prozor je mesto gde možete početi da pišete svoju poruku unose naslov (subject) i sadržaj/poruku koju želite da pošaljete korisnicima.

![Editor naslova i sadržaja za pošiljku na koraku kreiranja](/img/admin/broadcast-edit.png)

Nakon što kreirate poruku, možete pritisnuti dugme **Pošalji**.

I to je sve. Obaveštenje administratora bi trebalo odmah da se pojavi na dashboardu vašeg korisnika.

## Pošaljite e-mailove svojim klijentima

Koristeći funkciju pošiljke poruka Ultimate Multisite, možete poslati e-mail korisnicima. Imate opciju da pošaljete e-mail samo određenim korisnicima ili ciljate određenu grupu korisnika na osnovu proizvoda ili plana na kojem su pretplatnici.

Da biste započeli pošiljku poruke putem e-maila, idite na dashboard administratora mreže i pod menijem Ultimate Multisite, pronaći ćete opciju Pošalji (Broadcast).

![Stranica sa listom pošiljki korišćena kao početna tačka za pošiljku poruke](/img/admin/broadcasts-list.png)

Sa ove stranice kliknite na dugme **Dodaj pošiljku** (Add broadcast) na vrhu.

Ovo će otvoriti prozor modalnog prozora Dodaj pošiljku gde možete izabrati koji tip pošiljke želite da pošaljete. Nastavite i izaberite **E-mail**, a zatim kliknite dugme **Sledeći korak**.

![Modalno prozor za dodavanje pošiljke sa izabranom opcijom E-mail](/img/admin/broadcast-add-email.png)

Sledeći prozor će vas pitati za **Ciljni klijent** (Target customer) ili **Ciljni proizvod** (Target product). Napomena: možete izabrati više korisnika ili više proizvoda.

Da biste pretražili korisnički nalog ili proizvod, potrebno je početi da kucate ključnu reč unutar polja.

Kada odaberete ciljnu publiku, možete kliknuti na **Sledeći korak** (Next Step).

![Odabir ciljne kupovine i ciljnog proizvoda za e-mail slanje](/img/admin/broadcast-email-targets.png)

Sledeće prozor je mesto gde možete početi da pišete svoj e-mail tako što ćete uneti naslov i sadržaj/poruku koju želite poslati korisnicima.

<!-- Screenshot unavailable: Editor naslova i sadržaja za e-mail slanje na koraku kreiranja -->

Nakon što kreirate poruku, možete pritisnuti dugme **Pošalji** (Send).

I tako je lako poslati e-mail svojim krajnjim korisnicima koristeći funkciju slanja putem broadcast-a.

## Sistem e-mailovi

Sistem e-mailovi u Ultimate Multisite su **automatske obaveštenja** koja šalje sistem nakon određenih radnji, kao što su registracija, plaćanje, mapiranje domena itd. Ove e-mailove se mogu uređivati ili menjati iz podešavanja Ultimate Multisite. Takođe dolazi sa funkcijom koja će vam omogućiti da resetujete i uvezete postojeće postavke iz druge instalacije Ultimate Multisite.

### Resetovanje i uvoz

Nova verzija Ultimate Multisite, kao i dodatci (add-ons), mogu i će povremeno registrovati nove e-mailove.

Da biste sprečili konflikte i druge probleme, **mi nećemo automatski dodavati nove šablone za e-mailove kao Sistem e-mailove na vašu instalaciju**, osim ako nisu ključne za ispravno funkcionisanje određene funkcije.

Međutim, super admini i agenti mogu uvesti ove novoregistrovane e-mailove putem alata za uvoz (importer tool). Taj proces će kreirati novi sistem e-mail sa sadržajem i konfiguracijom nove šablone za e-mail, omogućavajući super adminu da napravi bilo kakve izmene koje želi ili ih ostavi kako su.

#### Kako uvesti sistem e-mailove

Idite na podeškom stranici Ultimate Multisite Settings i idi na karticu **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Zatim, u bočnoj traci (sidebaru), klikni na dugme **Customize System Emails** (Prilagodi sistemske mejlove).

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stranici System Emails ćeš videti dugme akcije **Reset & Import** (Pristavi i resetuj) na vrhu. Klikom na to dugme će se otvoriti prozor dijaloga za import i resetovanje.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Zatim, možeš da prebacuješ opcije Import Emails (Import mejlova) da vidiš koje sistemske mejlove su dostupni za import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resetovanje sistemskih mejlova

Ponekad ćeš shvatiti da promene koje si napravio u nekom email šablonu više ne rade za tebe i želiš da ga vratiš na **podrazumevanu vrednost**.

U takvim slučajevima, imaš dve opcije: možeš jednostavno obrisati sistemski mejl i ponovo ga importovati (koristeći uputstva gore) – što će obrisati metrike slanja i ostale stvari, pa je ova metoda najmanje poželjna.

Ili možeš koristiti **Reset & Import tool** (Alat za resetovanje i importovanje) da resetuje taj email šablon.

Da bi resetovao email šablon, možeš pratiti korake gore dok ne dođeš do alata Reset & Import, a zatim prebaci opciju **Reset** (Resetuj) i izaberi mejlove koje želiš vratiti na njihovu podrazumevanu sadržaj.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
