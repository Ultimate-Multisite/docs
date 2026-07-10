---
title: Ustvarjanje kodov popustov
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Ustvarjanje kodov popustov (v2) {#creating-discount-codes-v2}

_**POMEMBNE NAPOMENE: Ta članek se nanaša na Ultimate Multisite verzijo 2.x.**_

Z Ultimate Multisite lahko ustvarjate kode popustov, ki jih dajate svojim strankam za njihove naročnine. In jih je ustvarjanje enostavno!

## Ustvarjanje in urejanje kodov popustov {#creating-and-editing-discount-codes}

Da bi ustvarili ali uredili kod popusta, gre do **Ultimate Multisite > Discount Codes**.

![Seznam kodov popustov — prazno stanje pred obstojanjem kakršnih koli kodov](/img/config/discount-codes-empty.png)

Tamo boste imeli seznam kodov popustov, ki jih ste že ustvarili.

Na **Add Discount Code** (Dodaj kod popusta) lahko kliknete, da ustvarite novi kupon, ali pa jih uredite, če prenesete miš na njih in kliknete na **Edit** (Uredi).

![Seznam kodov popustov z akciji pri prenesanju miše, ki prikazuje povezave Edit in Delete](/img/config/discount-codes-list-hover.png)

![Gumb Add Discount Code v zaglavju strani](/img/config/discount-codes-add-button.png)

Boste preusmerjeni na stran, kjer boste ustvarili ali uredili svoj kupon kod. Na tem primer bomo ustvarili nov.

![Stranica za urejanje kode popusta z prikazanimi vsemi sekcijami](/img/config/discount-code-edit.png)

Pojedemo pogledati možnosti, ki so na voljo:

**Enter Discount Code:** To je samo ime vašega kode popusta. To ni kod, ki bodo stranke morali uporabiti na obrazcu za plačevanje (checkout form).

**Description:** Tukaj lahko kratko opišete, kaj ta kupon pomeni.

![Polja imena in opisa kode popusta na vrhu strani za urejanje](/img/config/discount-code-description.png)

Lahko vidite tudi kod popusta kot aktiven ali neaktivni:

![Status aktivnega kode popusta](/img/config/discount-code-active.png)

**Coupon code:** Tukaj definirate kod, ki bodo stranke morali vpisati med plačevanjem.

![Polje za kodo kupona kjer uporabniki vneseta kod pri plačevanju](/img/config/discount-code-coupon-field.png)

**Sprememba:** Tukaj lahko nastavite, ali boste določili **procent** ali **fiksno znesko** za vaš kodo kupona.

![Nastavitve zneske kupona s možnostjo procenta ali fiksa](/img/config/discount-code-amount.png)

**Priprava na obnovo (renewals):** Če je ta možnost izklopena, se ta kod kupona uporablja le za **prvo plačilo**. Vsa druga plačila ne bodo imela popust. Če pa je ta možnost vklopljena, bo kod kupona validen za vse prihodnje plačila.

**Sprememba za strošek za nastavitve (setup fee discount):** Če je ta možnost izklopena, kupon **ne daje nobenega popusta na strošek za nastavitve** naročila. Če pa je ta možnost vklopljena, lahko določite popust (procent ali fiksno znesko), ki ga bo ta kod kupona uporabil za strošek za vaše načrtov.

![Možnosti za pripravo na obnovo in spremembo za strošek za nastavitve](/img/config/discount-code-renewals.png)

**Aktivno (Active):** Ručno vključite ali izklopite ta kod kupona.

![Preklopnik aktivnega stanja za ručno vključitev ali izklop koda kupona](/img/config/discount-code-active.png)

Pod **Naprednimi možnostmi (Advanced Options)** imamo naslednje nastavitve:

![Napredne možnosti kode kupona](/img/config/discount-code-advanced.png)

**Omejitev uporabe (Limit uses):**

  * **Uporaba (Uses):** Tukaj lahko vidite, koliko je kod kupona bil že uporabljeno.

  * **Maksimalna uporaba (Max uses):** To omejuje, koliko namestov lahko uporabniki uporabijo ta kod kupona. Na primer, če tukaj postavite 10, se kupon lahko uporabi le 10 krat. Po tej omejitvi se kod kupona ne bo več uporabljal.

![Nastavitve omejitve uporabe z prikazom trenutne uporabe in maksimalne uporabe](/img/config/discount-code-limit-uses.png)

**Datumi začetka in poteka:** Tukaj boste imeli možnost dodati datum začetka in/ali datuma poteka za vaš kupon.

![Polja datuma začetka in poteka za urejanje kode popusta](/img/config/discount-code-dates.png)

**Omejitev izdelkov:** Če vključite **Select products**, se vam bodo prikazani vsi vaši izdelki. Boste imeli možnost ručno izbrati (vključitjem ali isključitvijo) katerega izdelka lahko sprejme ta kuponni kodo. Izdelki, ki so isključeni tukaj, ne bodo prikazali nobenih sprememb, če bodo vaši kupci poskušali uporabiti to kuponno kodo za njih.

![Oddział Omejitev izdelkov z preklopniki za vsako izdelek](/img/config/discount-code-limit-products.png)

Po nastavitvi vseh teh možnosti kliknite na **Save Discount Code**, da shranite svoj kupon in je to končano!

![Gumb Save Discount Code na dnu strani za urejanje](/img/config/discount-code-save.png)

Kupon se zdaj nahaja na vašem seznamu in od tam lahko kliknete, da ga **uredite ali odstranite**.

![Rade v seznamu kuponne kode z hover akciji Uredi in Odstrani](/img/config/discount-codes-list-hover.png)

###

### Uporaba URL parametrov: {#using-url-parameters}

Če želite prilagoditi svoje tabele cen ali narediti lep stran za kuponno kodo za vašo spletno stran in želite avtomatsko uporabiti kuponno kodo na svoji strani za plačevanje, lahko to storite preko URL parametrov.

Prvi korak je, da dobite deliteľni link za vaš načrt. Za to se obiščete v **Ultimate Multisite > Products** in izberete načrt.

Kliknite na gumb **Click to Copy Shareable Link**. To vam bo dalo deliteľni link za ta specifičen načrt. V našem primer je deliteľni link bil [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Stran izdelka z gumbom deliteľnega linka](/img/config/products-list.png)

Da boste uporabili svoj kod za popust na ta specifični paket, samo dodajte parameter **?discount_code=XXX** v URL. Kje je **XXX** vaš kuponni kôd.

V našem primeru bomo uporabljali kuponni kôd **50OFF** za to specifično produkt.

URL za ta specifični paket z uporabo kuponnega koda 50OFF bo izgledal tako: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
