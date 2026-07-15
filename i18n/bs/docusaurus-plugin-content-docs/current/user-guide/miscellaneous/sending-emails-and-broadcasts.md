---
title: Slanje e-mailova i broadcasta
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Slanje emailova i Broadcasts (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite dolazi s funkcijom koja će vam omogućiti da komunicirate sa svojim kupcima slanjem emaila ciljanom korisniku ili grupi korisnika, kao i slanjem obavijesti na njihov admin dashboard radi emitovanja najava

## Dodajte admin obavijesti na dashboard svojih kupaca uz Broadcasts {#add-admin-notices-to-your-customers-dashboard-with-broadcasts}

Korištenjem Ultimate Multisite broadcast funkcije, možete dodati **admin obavijesti** na admin dashboard podstranice svog korisnika.

Ovo je izuzetno korisno ako trebate objaviti najavu poput održavanja sistema ili ponude novih proizvoda ili usluga svojim postojećim korisnicima. Ovako će admin obavijest izgledati na dashboardu vašeg korisnika.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Da biste pokrenuli admin obavijest, idite na svoj mrežni admin dashboard i ispod **Ultimate Multisite** menija pronaći ćete opciju **Broadcasts**.

![Stranica liste Broadcasts u Ultimate Multisite adminu](/img/admin/broadcasts-list.png)

Također možete uređivati postojeće broadcasts:

![Interfejs za uređivanje broadcasta](/img/admin/broadcast-edit.png)

Na ovoj stranici kliknite dugme **Add Broadcast** na vrhu.

Ovo će otvoriti modalni prozor za dodavanje broadcasta, gdje možete odabrati koju vrstu broadcasta želite poslati.

Odaberite **Message**, zatim kliknite dugme **Next Step**.

![Modal za dodavanje broadcasta s odabranom opcijom Message](/img/admin/broadcast-add-message.png)

Sljedeći prozor će od vas tražiti ili **Target customer** ili **Target product**. Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Da biste pretražili korisnički račun ili proizvod, trebate početi unositi ključnu riječ unutar polja.

U polju **Message type** možete odabrati boju obavijesti. To će naglasiti hitnost vaše poruke.

Zatim možete kliknuti **Next Step**.

![Polja za ciljane kupce, ciljani proizvod i tip poruke za Message broadcast](/img/admin/broadcast-message-targets.png)

Sljedeći prozor je mjesto gdje možete početi sastavljati svoju poruku unosom naslova i sadržaja/poruke koju želite emitovati korisnicima.

![Naslov broadcast poruke i editor sadržaja u koraku sastavljanja](/img/admin/broadcast-edit.png)

Nakon što kreirate poruku, možete pritisnuti dugme **Send**.

I to je to. Admin obavijest bi se odmah trebala prikazati na dashboardu vašeg korisnika.

## Šaljite emailove svojim kupcima {#send-emails-to-your-customers}

Korištenjem Ultimate Multisite broadcast funkcije, možete poslati email svojim korisnicima. Imate opciju poslati email samo određenim korisnicima ili ciljati određenu korisničku grupu na osnovu proizvoda ili plana na koji su pretplaćeni.

Da biste pokrenuli email broadcast, idite na svoj mrežni admin dashboard i ispod Ultimate Multisite menija pronaći ćete opciju Broadcast.

![Stranica liste Broadcasts koja se koristi kao početna tačka za email broadcast](/img/admin/broadcasts-list.png)

Na ovoj stranici kliknite dugme **Add broadcast** na vrhu.

Ovo će otvoriti modalni prozor za dodavanje broadcasta, gdje možete odabrati koju vrstu broadcasta želite poslati. Odaberite **Email**, zatim kliknite dugme **Next Step**.

![Modal za dodavanje broadcasta s odabranom opcijom Email](/img/admin/broadcast-add-email.png)

Sljedeći prozor će od vas tražiti ili **Target customer** ili **Target product**. Imajte na umu da možete odabrati više od jednog korisnika ili više od jednog proizvoda.

Da biste pretražili korisnički račun ili proizvod, trebate početi unositi ključnu riječ unutar polja.

Kada je vaša ciljana publika odabrana, možete kliknuti **Next Step**.

![Odabir ciljanih kupaca i ciljanog proizvoda za Email broadcast](/img/admin/broadcast-email-targets.png)

Sljedeći prozor je mjesto gdje možete početi sastavljati svoj email unosom naslova i sadržaja/poruke koju želite poslati korisnicima.

<!-- Screenshot unavailable: Email broadcast subject and content editor on the compose step -->

Nakon što kreirate poruku, možete pritisnuti dugme **Send**.

I tako je jednostavno poslati email svojim krajnjim korisnicima koristeći broadcast funkciju.

## Sistemski emailovi {#system-emails}

Sistemski emailovi u Ultimate Multisite su one **automatske obavijesti** koje sistem šalje nakon određenih radnji kao što su registracija, plaćanje, mapiranje domena itd. Ovi emailovi se mogu uređivati ili mijenjati iz Ultimate Multisite postavki. Također dolazi s funkcijom koja će vam omogućiti da resetujete i uvezete postojeće postavke iz druge Ultimate Multisite instalacije.

### Resetovanje i uvoz {#resetting--importing}

Nove Ultimate Multisite verzije, kao i dodaci, mogu i povremeno će registrirati nove emailove.

Da bismo spriječili konflikte i druge probleme, **nećemo automatski dodati nove email predloške kao System Emails u vašu instalaciju** , osim ako su ključni za ispravno funkcionisanje određene funkcije.

Međutim, super administratori i agenti mogu uvesti ove novo registrovane emailove putem alata za uvoz. Taj proces će kreirati novi sistemski email sa sadržajem i konfiguracijom novog email predloška, omogućavajući super administratoru da napravi bilo kakve izmjene koje želi ili da ih zadrži takvima kakvi jesu.

#### Kako uvesti sistemske emailove {#how-to-import-system-emails}

Idite na svoju stranicu Ultimate Multisite Settings i pređite na karticu **Emails**.

![Kartica Emails u Ultimate Multisite postavkama koja prikazuje odjeljak System Emails](/img/config/settings-emails-tab.png)

Zatim, na bočnoj traci, kliknite dugme **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stranici System Emails vidjet ćete dugme akcije **Reset & Import** na vrhu. Klikom na to dugme trebao bi se otvoriti modalni prozor za uvoz i resetovanje.

![Dugme akcije Reset or Import na admin stranici System Emails](/img/admin/system-emails-reset-import.png)

Zatim možete uključiti opcije Import Emails da vidite koji su sistemski emailovi dostupni za uvoz.

<!-- Snimak ekrana nedostupan: modal za resetovanje i uvoz s proširenim opcijama za uvoz emailova -->

#### Resetovanje sistemskih emailova {#reseting-system-emails}

Ponekad ćete shvatiti da izmjene koje ste napravili na određenom predlošku emaila više ne odgovaraju vašim potrebama i da ga želite resetovati na njegovo **zadano stanje**.

U takvim slučajevima imate dvije opcije: možete jednostavno obrisati sistemsku email poruku i ponovo je uvesti (koristeći upute iznad) — što će obrisati metrike slanja i druge stvari, zbog čega je ova metoda najmanje preporučljiva.

Ili možete koristiti **alat za resetovanje i uvoz** da resetujete taj predložak emaila.

Da biste resetovali predložak emaila, možete slijediti korake iznad dok ne dođete do alata za resetovanje i uvoz, a zatim uključiti opciju **Resetovanje** i odabrati emailove koje želite vratiti na njihov zadani sadržaj.

<!-- Snimak ekrana nedostupan: modal za resetovanje i uvoz s proširenim opcijama za resetovanje emailova -->
