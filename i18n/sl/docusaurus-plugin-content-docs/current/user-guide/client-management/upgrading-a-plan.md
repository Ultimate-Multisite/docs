---
title: Ugradba paketa
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# Onavaditev paketa (v2)

_**POMEMBNE OPOMENJE: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Vaši uporabniki imajo možnost svoje pakete v katerem koli času obnaviti. Lahko obnavdijo paket ali kupijo kakršne koli dodatne storitve ali pakete, ki jih ponujate na svoji mreži.

V tem tutorialu bomo prikazali, kako lahko uporabniki obnavdijo svoj paket in kaj se dogaja po procesu obnavitve.

Za obnavaditev paketa morajo uporabniki dostopati do svoje dashboard-e in iti na stran **Account** (Račun).

![Dashboard podpodpodododododododododododododododododododododododododododododododod

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

Če izberete paket ali načrt, ki ne bo nič spremenil v trenutni naročilo, boste videli sporočilo, ki to pojasnjuje.

![Obvestilo, ko izbran načrt ne spremeni naročila](/img/account-page/upgrade-no-change.png)

Po dokončanju plačila bodo novi produkt(i) dodani na račun vaših strank in vsi omejitve ali funkcije novih produktov se bodo trenutno dodale: obledi, prostori diskove, objave itd...

##

##

## Potnji za izboljšanje in spuščanje (Upgrade and Downgrade Paths)

Na vsakem svojem produktu boste imeli tab **Up & Downgrades**. Prvi izbor na tej tab je polje z imenom **Plan Group**.

**Plan skupine (Plan groups)** omogoča, da povežete Ultimate Multisite, da določene načrti pripadajo istoj "družini" in zato nênohtata uporabljati za ustvarjanje možnosti za izboljšanje/spuščanje.

![Uredba produkta s tabo Up and Downgrades in poljem Plan Group](/img/config/product-upgrades-plan-group.png)

Na primer imate na voljo **Free plan**, **Basic Plan** in **Premium Plan**. Želite, da uporabniki naročeni pod **Free Plan** lahko izboljšajo samo do **Premium Plan**, in ne želite, da jim "Basic Plan" vidijo kot možnost za izboljšanje. Vse, kar morate storiti, je dodeliti isto ime plan skupine tako za Free plan kot za Premium plan, kot je prikazano na spodnjih zaslankah.

![Stranica produkta Free Plan z dodeljenim High End plan group](/img/config/product-upgrades-free.png)

![Stranica produkta Premium Plan z dodeljenim High End plan group](/img/config/product-upgrades-premium.png)

To to bi moralo povedati Ultimate Multisite, da v mreži obstaja "družina" paketov z imenom **High End**. Ko ponujate napredovanje ali spuščanje paketov, bodo prikazani le paketi iz iste družine kot možnost za uporabnika.
