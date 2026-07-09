---
title: Pošiljanje e-poštnih sporočil in razpošiljanj
sidebar_position: 11
_i18n_hash: 0563b0c364cc014990c7066b8251ba36
---
# Pošiljanje e-poštnih sporočil in Broadcasts (v2)

_**POMEMBNA OPOMBA: Ta članek se nanaša na Ultimate Multisite različico 2.x.**_

Ultimate Multisite vključuje funkcijo, ki vam omogoča komunikacijo z vašimi strankami s pošiljanjem e-poštnega sporočila ciljnemu uporabniku ali skupini uporabnikov, pa tudi s pošiljanjem obvestil na njihov admin dashboard za objavo sporočil

## Dodajte admin notices na dashboard svojih strank z Broadcasts

Z uporabo funkcije Broadcast v Ultimate Multisite lahko dodate **admin notices** na admin dashboard podstrani vašega uporabnika.

To je izjemno koristno, če morate objaviti obvestilo, kot je vzdrževanje sistema ali ponudba novih izdelkov ali storitev vašim obstoječim uporabnikom. Tako bo admin notice videti na dashboardu vašega uporabnika.

<!-- Posnetek zaslona ni na voljo: Admin notice broadcast prikazan na dashboardu podstrani stranke -->

Za začetek admin notice pojdite na svoj network admin dashboard in pod menijem **Ultimate Multisite** boste našli možnost **Broadcasts**.

![Stran s seznamom Broadcasts v administraciji Ultimate Multisite](/img/admin/broadcasts-list.png)

Urejate lahko tudi obstoječe broadcasts:

![Vmesnik za urejanje Broadcast](/img/admin/broadcast-edit.png)

Na tej strani kliknite gumb **Add Broadcast** na vrhu.

To bo odprlo modalno okno Add broadcast, kjer lahko izberete, katero vrsto broadcasta želite poslati.

Izberite **Message** in nato kliknite gumb **Next Step**.

![Modalno okno Add broadcast z izbrano možnostjo Message](/img/admin/broadcast-add-message.png)

Naslednje okno vas bo vprašalo za **Target customer** ali **Target product**. Upoštevajte, da lahko izberete več kot enega uporabnika ali več kot en izdelek.

Za iskanje uporabniškega računa ali izdelka morate začeti vnašati ključno besedo v polje.

V polju **Message type** lahko izberete barvo obvestila. To bo poudarilo nujnost vašega sporočila.

Nato lahko kliknete **Next Step**.

![Polja Target customers, target product in message type za Message broadcast](/img/admin/broadcast-message-targets.png)

Naslednje okno je mesto, kjer lahko začnete sestavljati svoje sporočilo z vnosom zadeve in vsebine/sporočila, ki ga želite objaviti uporabnikom.

![Zadeva broadcast sporočila in urejevalnik vsebine v koraku sestavljanja](/img/admin/broadcast-edit.png)

Ko ustvarite svoje sporočilo, lahko nato pritisnete gumb **Send**.

In to je to. Admin notice bi se moral takoj prikazati na dashboardu vašega uporabnika.

## Pošiljanje e-poštnih sporočil vašim strankam

Z uporabo funkcije Broadcast v Ultimate Multisite lahko svojim uporabnikom pošljete e-poštno sporočilo. Imate možnost poslati e-poštno sporočilo samo določenim uporabnikom ali ciljati določeno skupino uporabnikov glede na izdelek ali paket, na katerega so naročeni.

Za začetek e-poštnega broadcasta pojdite na svoj network admin dashboard in pod menijem Ultimate Multisite boste našli možnost Broadcast.

![Stran s seznamom Broadcasts, uporabljena kot izhodišče za e-poštni broadcast](/img/admin/broadcasts-list.png)

Na tej strani kliknite gumb **Add broadcast** na vrhu.

To bo odprlo modalno okno Add broadcast, kjer lahko izberete, katero vrsto broadcasta želite poslati. Izberite **Email** in nato kliknite gumb **Next Step**.

![Modalno okno Add broadcast z izbrano možnostjo Email](/img/admin/broadcast-add-email.png)

Naslednje okno vas bo vprašalo za **Target customer** ali **Target produc** t. Upoštevajte, da lahko izberete več kot enega uporabnika ali več kot en izdelek.

Za iskanje uporabniškega računa ali izdelka morate začeti vnašati ključno besedo v polje.

Ko je vaša ciljna publika izbrana, lahko kliknete **Next Step**.

![Izbira Target customers in target product za Email broadcast](/img/admin/broadcast-email-targets.png)

Naslednje okno je mesto, kjer lahko začnete sestavljati svoje e-poštno sporočilo z vnosom zadeve in vsebine/sporočila, ki ga želite poslati uporabnikom.

<!-- Posnetek zaslona ni na voljo: Urejevalnik zadeve in vsebine e-poštnega broadcasta v koraku sestavljanja -->

Ko ustvarite svoje sporočilo, lahko pritisnete gumb **Send**.

In tako enostavno je poslati e-poštno sporočilo svojim končnim uporabnikom z uporabo funkcije broadcast.

## Sistemska e-poštna sporočila

Sistemska e-poštna sporočila v Ultimate Multisite so tista **samodejna obvestila**, ki jih sistem pošlje po določenih dejanjih, kot so registracija, plačilo, preslikava domene itd. Ta e-poštna sporočila je mogoče urejati ali spreminjati v nastavitvah Ultimate Multisite. Vključuje tudi funkcijo, ki vam omogoča ponastavitev in uvoz obstoječih nastavitev iz druge namestitve Ultimate Multisite.

### Ponastavitev in uvoz

Nove različice Ultimate Multisite, pa tudi dodatki, lahko in bodo občasno registrirali nova e-poštna sporočila.

Da bi preprečili konflikte in druge težave, **novih predlog e-poštnih sporočil ne bomo samodejno dodali kot System Emails v vašo namestitev** , razen če so ključne za pravilno delovanje določene funkcije.

Vendar lahko super administratorji in agenti ta novo registrirana e-poštna sporočila uvozijo prek orodja za uvoz. Ta postopek bo ustvaril novo sistemsko e-poštno sporočilo z vsebino in konfiguracijo nove predloge e-poštnega sporočila, kar super administratorju omogoča, da naredi poljubne spremembe ali jih pusti takšne, kot so.

#### Kako uvoziti sistemska e-poštna sporočila

Pojdite na stran z nastavitvami Ultimate Multisite in odprite zavihek **Emails**.

![Zavihek Emails v nastavitvah Ultimate Multisite, ki prikazuje razdelek System Emails](/img/config/settings-emails-tab.png)

Nato v stranski vrstici kliknite gumb **Customize System Emails**.

<!-- Posnetek zaslona ni na voljo: Gumb Customize System Emails na stranski plošči System Emails -->

Na strani System Emails boste na vrhu videli akcijski gumb **Reset & Import**. Klik na ta gumb bi moral odpreti modalno okno za uvoz in ponastavitev.

![Akcijski gumb Reset or Import na administratorski strani System Emails](/img/admin/system-emails-reset-import.png)

Nato lahko preklopite možnosti Import Emails, da vidite, katera sistemska e-poštna sporočila so na voljo za uvoz.

<!-- Posnetek zaslona ni na voljo: modalno okno Ponastavi in uvozi z razširjenimi možnostmi Uvozi e-poštna sporočila -->

#### Ponastavljanje sistemskih e-poštnih sporočil

Včasih boste ugotovili, da spremembe, ki ste jih naredili v določeni predlogi e-poštnega sporočila, ne delujejo več za vas in bi jo radi ponastavili v njeno **privzeto stanje**.

V takih primerih imate dve možnosti: sistemsko e-poštno sporočilo lahko preprosto izbrišete in ga znova uvozite (z uporabo zgornjih navodil) – kar bo izbrisalo metrike pošiljanja in druge stvari, zato je ta metoda najmanj priporočljiva.

Lahko pa uporabite **orodje Ponastavi in uvozi**, da ponastavite to predlogo e-poštnega sporočila.

Če želite ponastaviti predlogo e-poštnega sporočila, lahko sledite zgornjim korakom, dokler ne pridete do orodja Ponastavi in uvozi, nato pa preklopite možnost **Ponastavi** in izberete e-poštna sporočila, ki jih želite ponastaviti nazaj na njihovo privzeto vsebino.

<!-- Posnetek zaslona ni na voljo: modalno okno Ponastavi in uvozi z razširjenimi možnostmi Ponastavi e-poštna sporočila -->
