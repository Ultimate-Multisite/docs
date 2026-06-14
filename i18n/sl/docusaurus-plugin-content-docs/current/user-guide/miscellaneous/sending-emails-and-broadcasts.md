---
title: Pošiljanje e-poštnih sporočil in enanjih sporočil
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# Pošiljanje e-poštenj in obvesti (v2)

_**POMEMBNE NAPOMENE: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Ultimate Multisite ima funkcijo, ki vam omogoča komunikacijo z vašimi strankami tako s poslanjem e-pošte ciljanemu uporabniku ali skupini uporabnikov kot tudi z obvestilami na njihov admin dashboard za objavo sporočil.

## Dodajte admin obvestila na dashboard vaše stranke z Obvestili (Broadcasts)

S uporabo funkcije Obvestil (Broadcasts) v Ultimate Multisite lahko dodate **admin obvestila** na admin dashboard podpodpoddome vašega uporabnika.

To je izjemno koristno, če potrebujete objaviti sporočilo, kot je sistemska vzdrževanje ali ponudba novih izdelkov ali storitev za vaše obstoječe uporabnike. Tako bodo admin obvestila videti na dashboardu vaše uporabnika.

<!-- Screenshot unavailable: Admin notice broadcast shown on a customer's subsite dashboard -->

Da bi začeli s admin obvestilom, se obiščite na admin dashboard mreže in pod menijem **Ultimate Multisite** boste našli možnost **Broadcasts**.

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

Obvestila lahko uredite tudi obstoječa:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

S te strani kliknite na gumb **Add Broadcast** (Dodaj obvestilo) zgoraj.

To bo odprlo modalno okno za dodajanje obvestila, kjer boste mogli izbrati, kakšno vrsto obvestilo želite poslati.

Predvsem izberite **Message** (Sporočilo), nato kliknite na gumb **Next Step** (Naslednji korak).

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

Naslednje okno vam bo vprašalo, ali želite izbrati **Target customer** (Cilni stranke) ali **Target product** (Cilni izdelek). Opazite, da lahko izberete več kot en uporabnika ali več kot en izdelek.

Za iskanje uporabnika ali izdelka morate začeti vpisati ključno besedo v polje.

Pod poljem **Tip sporočila** lahko izberete barvo obvestila. To bo poudarilo nujnost vaše sporočila.

Potem lahko kliknete na **Naslednji korak**.

![Polja za ciljne stranke, ciljni izdelek in tip sporočila za prenos sporočil](/img/admin/broadcast-message-targets.png)

Naslednje okno je mesto, kjer lahko začnete sestavljati svoje sporočilo, vpisavanjem predmeta in vsebine/besedila, ki želite pošlati uporabnikom.

![Redaktor predmeta in vsebine prenosnega sporočila na koraku sestavljanja](/img/admin/broadcast-edit.png)

Po ustvaritvi svojega sporočila lahko nato pritisnete gumb **Pošlji**.

In to je vse. Obvestilo za admin se mora takoj pojaviti na dashboardu vašega uporabnika.

## Pošiljanje e-poštnih sporočil strankam

S uporabo funkcije prenosnega sporočila Ultimate Multisite lahko pošljete e-pošto svojim uporabnikom. Imate možnost poslati e-pošto le določenim uporabnikom ali ciljati specifičnu skupino uporabnikov na podlagi izdelka ali paketa, ki so na njega naročeni.

Za začetek prenosnega sporočila greite na svoj network admin dashboard in pod menijem Ultimate Multisite boste našli opcijo Prenos (Broadcast).

![Stranica z seznamom prenosov uporabljena kot začetek za prenos e-pošte](/img/admin/broadcasts-list.png)

S te strani kliknite na gumb **Dodaj prenos** na vrhu.

To bo odprlo modalno okno Dodaj prenos, kjer lahko izberete, kakšen tip prenos želite poslati. Predvsem izberite **E-pošta** in nato kliknite na gumb **Naslednji korak**.

![Modal za dodaj prenos z izbrano opcjo E-pošta](/img/admin/broadcast-add-email.png)

Naslednje okno bo vprašalo, ali želite ciljati **Ciljno stranko** ali **Ciljni izdelek**. Opazite, da lahko izberete več kot en uporabnika ali več kot en izdelek.

Za iskanje uporabnika ali izdelka morate začeti vpisati ključno besedo v polje.

Ko ste izbrali ciljno publiko, lahko kliknete na **Naslednji korak**.

![Izbira ciljne skupine in ciljnega izdelka za e-poštni pošiljko](/img/admin/broadcast-email-targets.png)

Naslednje okno je mesto, kjer lahko začnete sestavljati svoj e-poštni sporočilo, vpisavanjem predmeta in vsebine/poriske, ki želite poslati uporabnikom.

<!-- Screenshot unavailable: Urednik predmeta in vsebine za e-poštno pošiljko na koraku sestavljanja -->

Po ustvaritvi sporočila lahko pritisnete gumb **Pošlji**.

In tako je enostavno poslati e-pošto vašim končnim uporabnikom z uporabo funkcije broadcast.

## Sistem e-pošte

Sistem e-pošte v Ultimate Multisite so tiste **avtomatske obvestila**, ki jih sistem po določenih dejekcijah, kot je registracija, plačilo, mapiranje domena itd., pošlje. Te e-pošte lahko uredite ali spremenite iz nastavitv Ultimate Multisite. Sistem pa ima tudi funkcijo, ki vam omogoča resetiranje in importovanje obstoječih nastavitev iz druge instalacije Ultimate Multisite.

### Resetiranje in importovanje

Nova verzija Ultimate Multisite, kot tudi dodatki (add-ons), lahko občasno registrirajo nove e-pošte.

Da bi preprečili konflikte in druge težave, **nove šablone e-pošte ne bomo avtomatsko dodali kot Sistem e-pošte na vašo instalacijo**, razen če so ključne za pravilno delovanje določenega funkcije.

Vendar lahko super admini in agenti importirajo te novosti registrirane e-pošte preko orodja za import. Ta proces ustvari novo sistem e-pošto z vsebino in konfiguracijo nove šablone, kar omogoča super adminu, da jo spremeni kot želite ali jo pusti kot je.

#### Kako importirati sistem e-pošte

Pojdi na stran za nastavitve Ultimate Multisite in seveda na tab **Emails**.

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

Potem, na levi strani (sidebaru) kliknite na gumb **Customize System Emails**.

<!-- Screenshot unavailable: Customize System Emails button on the System Emails sidebar panel -->

Na stran za System Emails boste videli gumb akcije **Reset & Import** na vrhu. Klik na ta gumb bi odprl modalno okno za import in reset.

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

Potem lahko preklopite možnosti Import Emails, da vidite, kakšne sistemske e-pošte so na voljo za import.

<!-- Screenshot unavailable: Reset and Import modal with the Import Emails options expanded -->

#### Resetiranje sistemskih e-poštnih sporočil

Včasih boste ugotovili, da spremembe, ki ste jih naredili na določenem šablonu e-pošte, vam več ne deluje in želite ga vrniti v **izvorno stanje**.

V takih primerih imate dve možnosti: lahko preprosto odstranite sistemsko e-pošto in jo ponovno importirate (uporabljajo navodila zgoraj) – kar pa bo izbrisalo podatke o pošiljanju in druge stvari, zato je ta način najmanj predviden.

Ali pa lahko uporabite **Reset & Import tool**, da resetirate šablon e-pošte.

Za resetiranje šablona e-pošte lahko sledite korakom zgoraj do "Reset & Import tool", nato pa preklopite možnost **Reset** in izberete e-pošte, ki jih želite vrniti na njihovo izvorno vsebino.

<!-- Screenshot unavailable: Reset and Import modal with the Reset Emails options expanded -->
