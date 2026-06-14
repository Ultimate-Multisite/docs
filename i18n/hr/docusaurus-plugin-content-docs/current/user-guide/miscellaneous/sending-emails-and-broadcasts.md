---
title: Slanje e-mailova i obavijesti
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Slanje e obavijesti (v2)

_**VAŽNA NAPOMENA: Ovaj članak se odnosi na Ultimate Multisite verziju 2.x.**_

Ultimate Multisite dolazi s značajkom koja vam omogućuje komunikaciju s klijentima tako što im pošaljete e-mail ili pošljete obavijesti na njihov admin dashboard kako biste objavili informacije.

## Dodajte admin obavijesti na dashboard vaše korisnika pomoću Broadcasta

Koristeći značajku za broadcast u Ultimate Multisite, možete dodati **admin obavijesti** na admin dashboard pod-sajta vašeg korisnika.

Ovo je izuzetno korisno ako trebate objaviti nešto poput obavijesti o održavanju sustava ili ponudi novih proizvoda ili usluga postojećim korisnicima. Tako će izgledati admin obavijest na dashboardu vašeg korisnika.

<!-- Screenshot unavailable: Admin obavijest broadcast prikazana na dashboardu klijenta pod-sajta -->

Da biste započeli s admin obavijesti, idite na svoj network admin dashboard i pod menijem **Ultimate Multisite**, pronaći ćete opciju **Broadcasts**.

![Stranica s listom Broadcasta u Ultimate Multisite adminu](/img/admin/broadcasts-list.png)

Možete uređivati i postojeće broadcastove:

![Aplikacija za uređivanje broadcasta](/img/admin/broadcast-edit.png)

S ove stranice kliknite na gumb **Add Broadcast** (Dodaj broadcast) na vrhu.

Ovo će otvoriti prozor modalnog prozora za dodavanje broadcasta gdje možete odabrati koji tip broadcast želite poslati.

Nastavite i odaberite **Message** (Poruka), a zatim kliknite na gumb **Next Step** (Sljedeći korak).

![Modalno prozor za dodavanje broadcasta s odabranom opcijom Message](/img/admin/broadcast-add-message.png)

Slijede prozor će vas pitati ili za **Target customer** (Ciljni klijent) ili za **Target product** (Ciljni proizvod). Napomena: možete odabrati više korisnika ili više proizvoda.

Da biste pretraživali korisnički nalog ili proizvod, morate početi pisati ključnu riječ unutar polja.

U polju **Tip poruke** možete odabrati boju obavijesti. To će naglasiti hitnost vaše poruke.

Zatim možete kliknuti na **Slijede korak**.

![Polja za ciljne korisnike, ciljni proizvod i tip poruke za pošiljku poruke](/img/admin/broadcast-message-targets.png)

Slede prozor je mjesto gdje možete početi pisati svoju poruku unose naslov i sadržaj/poruku koju želite poslati korisnicima.

![Urednik naslova i sadržaja poruke za korak kreiranja](/img/admin/broadcast-edit.png)

Nakon što stvorite poruku, možete pritisnuti dugme **Pošalji**.

I to je sve. Obavijest administratora bi se odmah pojavila na dashboardu vašeg korisnika.

## Pošaljite e-mailove svojim klijentima

Koristeći značajke pošiljke poruka Ultimate Multisite, možete poslati e-mail korisnicima. Imate opciju da pošaljete e-mail samo određenim korisnicima ili ciljate određenu grupu korisnika na temelju proizvoda ili plana na kojem su pretplatnici.

Da biste započeli pošiljku poruke putem e-maila, idite na dashboard administratora mreže i pod menijem Ultimate Multisite pronaći ćete opciju Pošalji (Broadcast).

![Stranica s listom pošiljki korištena kao početna točka za pošiljku poruke](/img/admin/broadcasts-list.png)

S ove stranice kliknite na dugme **Dodaj pošiljku** (Add broadcast) na vrhu.

Ovo će otvoriti prozor modalnog prozora Dodaj pošiljku gdje možete odabrati koji tip pošiljke želite poslati. Nastavite i odaberite **E-mail**, a zatim kliknite na dugme **Slijede korak**.

![Modalno prozor za dodavanje pošiljke s odabranim opcijom E-mail](/img/admin/broadcast-add-email.png)

Slede prozor će vas pitati za **Ciljne korisnike** ili **Ciljni proizvod**. Napomena: možete odabrati više korisnika ili više proizvoda.

Da biste pretražili korisnički račun ili proizvod, morate početi pisati ključnu riječ unutar polja.

Kada odaberete ciljnu publiku, možete kliknuti na **Slijedi korak** (Next Step).

![Odabir ciljne publike i ciljanog proizvoda za e-mail obavijest](/img/admin/broadcast-email-targets.png)

Sljedeće prozor je mjesto gdje možete početi pisati svoj e-mail tako što ćete unijeti naslov (subject) i sadržaj/poruku koju želite poslati korisnicima.

<!-- Screenshot unavailable: Urednik naslova i sadržaja za e-mail obavijest na koraku kreiranja -->

Nakon što stvorite poruku, možete pritisnuti dugme **Pošalji** (Send).

I tako je lako poslati e-mail svojim krajnjim korisnicima koristeći značajku obavijesti (broadcast feature).

## Sistem e-mailovi

Sistem e-mailovi u Ultimate Multisite su **automatske obavijesti** koje sistem šalje nakon određenih radnji, kao što su registracija, plaćanje, mapiranje domena itd. Ove e-mailove možete uređivati ili mijenjati iz postavki Ultimate Multisite. Također dolazi s značajkom koja će vam omogućiti resetiranje i uvoz postojećih postavki iz druge instalacije Ultimate Multisite.

### Resetiranje i Uvoz

Novi verzije Ultimate Multisite, kao i add-onovi, mogu i će povremeno registrirati nove e-mailove.

Da biste spriječili konflikte i druge probleme, **mi nećemo automatski dodavati nove šablone za e-mail kao Sistem e-mailove na vašu instalaciju**, osim ako nisu ključne za ispravno funkcioniranje određene značajke.

Međutim, super admini i agenci mogu uvesti ove novoregistrirane e-mailove putem alata za uvoz (importer tool). Taj proces će stvoriti novi sistem e-mail s sadržajem i konfiguracijom nove šablone za e-mail, omogućujući super adminu da napravi bilo kakve izmjene koje želi ili ih ostavi kako su.

#### Kako uvesti sistem e-mailove

Idite na svoju Ultimate Multisite postavke i otiđi na karticu **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Zatim, u bočnoj traci (sidebaru), kliknite na dugme **Customize System Emails** (Prilagodi sistemske e-mailove).

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stranici System Emails ćete vidjeti gumb akcije **Reset & Import** (Pristavi i importiraj) na vrhu. Klikom na taj gumb će se otvoriti prozor za importiranje i resetiranje.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Zatim možete uključiti opcije Import Emails (Importiraj e-mailove) kako biste vidjeli koje sistemske e-mailove su dostupni za importiranje.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resetiranje sistemskih e-mailova

Ponekad ćete shvatiti da promjene koje ste napravili na određenom šablonu e-maila više ne rade za vas i želite ga vratiti u **podrazmjeni (default) stanja**.

U takvim slučajevima, imate dvije opcije: možete jednostavno obrisati sistemski e-mail i ponovno importirati (koristeći upute gore) – što će obrisati metri o slanju i druge stvari, što čini tu metodu najmanje poželjnom.

Ili možete koristiti **Reset & Import tool** (Alat za resetiranje i importiranje) za resetiranje tog šablona e-maila.

Da biste resetirali šablon e-maila, možete pratiti gore navedene korake do Alata za resetiranje i importiranje, a zatim uključiti opciju **Reset** (Resetiraj) i odabrati e-mailove koje želite vratiti na podrazmjeni sadržaj.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
