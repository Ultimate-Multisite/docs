---
title: Kuponide luomine
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kättemärkide luomine (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioon 2.x.**_

Ultimate Multisite abil saate luua kättemärgid, et antida oma klientidele allahindlusi nende jälgimiskirjandi jaoks. Ja neid luua on lihtne!

## Kättemärkide loomine ja redigeerimine {#creating-and-editing-discount-codes}

Kättemärgi loomiseks või redigeerimiseks külastage **Ultimate Multisite > Discount Codes**.

![Kättemärkide nimekiri — tühja staatuse pilt enne kättemärkide olemasolu](/img/config/discount-codes-empty.png)

Siis on teie esile luudud kättemärkide nimekiri.

Saate klõpsata **Lisa kättemärk** (Add Discount Code), et luua uue kuponi või saate redigeerida neid, mida teil on, vöökides üle neil ja klõpsates **Redige** (Edit).

![Kättemärkide nimekiri vöökimise toiminguid näitav pilt Edit- ja Delete-linkidega](/img/config/discount-codes-list-hover.png)

![Lisa kättemärk -nupugi pilt lehelise ülekannes](/img/config/discount-codes-add-button.png)

Te olete suunatud lehele, kus luute või redige oma kuponikoodi. Selle näites on me luua uue ühe.

![Kättemärkide redigeerimise lehel pilt kõigi osade nähtavaks](/img/config/discount-code-edit.png)

Vaadame siin saadaval olevat seadistust:

**Sisesta kättemärgi:** See on lihtsalt teie kättemärgi nimi. See ei ole see kood, mida kliendid peavad kasutama kassas.

**Kirjeldus:** Siin saate lühidalt kirjeldada, mis see kupon on jaoks.

![Kättemärgi nime ja kirjelduse väljad redigeerimise lehe ülal](/img/config/discount-code-description.png)

Saate ka vaadata kättemärgi aktiivset või inaktiivset:

![Kättemärgi aktiivse staatuse pilt](/img/config/discount-code-active.png)

**Kuponikood:** Siin määrate kood, mida kliendid peavad sisestama kassas.

![Kuponikoodi tekstikool, kus kasutajad koodi ostukorras sisendavad](/img/config/discount-code-coupon-field.png)

**Kõnakood:** Siin saate määrata kas oma kuponikoodile **protsent** või **fikseeritud summa**.

![Kõnakoodi summa seadistamine protsentiga või fikseeritud summaga valikuga](/img/config/discount-code-amount.png)

**Kohastamise uuesti:** Kui see valik on välja lülitatud, kasutatakse seda kuponikoodi ainult **esimesel maksul**. Kõik muutuvad maksud pole kvalifitseeritud kuponiga. Kui see valik on sisse lülitatud, kuponikood on kehtiv kõigile tulevate maksudele.

**Seadistusüsimuse allahindlus:** Kui see valik on välja lülitatud, kuponikood **ei annab allahindlust seadistusüsimusele**. Kui see valik on sisse lülitatud, saate määrata (protsent või fikseeritud summa), mida see kuponikood allahindlastab teie plaanide seadistusüsimusele.

![Kohastamise uuesti ja seadistusüsimuse allahindlus lülituste valikud](/img/config/discount-code-renewals.png)

**Aktifne:** Aktifigeerige või deaktiveerige seda kuponikoodi manuaalselt.

![Aktifne lülitus, mille abil saab allahindluse koodi manuaalselt aktiveerida või deaktiveerida](/img/config/discount-code-active.png)

**Advanced Options** (Võrgu seadistused) all on järgmised seadistused:

![Kõnakoodi võrgu seadistused](/img/config/discount-code-advanced.png)

**Kasutuste piir:**

  * **Kasutus:** Siin näete, kui palju allahindlust kuponikood on kasutatud.

  * **Max uses** (Max kasutused): See piirab seda, kui palju kasutajad saavad kasutada antud kuponikoodi. Näiteks, kui panete siia 10, võib kuponikoodi kasutada ainult 10 korda. Selle piiri pärast kuponikoodit ei saa kasutada enam.

![Kasutuste piir seadistus, kus on praegune kasutuste arv ja maksimaalne kasutuste arv](/img/config/discount-code-limit-uses.png)

**Algne ja lügemaad:** Siin saate lisada algusdatum ja/või lõppdatum datum oma kuponile.

![Alguse ja lõppdatud datumide väljad allahindluse koodi planeerimiseks](/img/config/discount-code-dates.png)

**Toote piiramine:** Kui lülitate **Vali toote** on sisse, näidatakse teile kõik teie tooted. Saada võimalus manuaalselt valita (lülitades sisse või välja), milline toote võib seda kuponikoodi kasutada. Siin välja lülitatud tooted ei muudu midagi, kui teie kliendid proovivad seda kuponikoodi kasutada nendele.

![Toote piiramine osas toote-koondajad](/img/config/discount-code-limit-products.png)

Kõiki neid valikuid seadistades klõpsake **Salvesta allahindluse kood** salvestamiseks ja lõpetatakse!

![Salvesta allahindluse koodi nupp editipoolil](/img/config/discount-code-save.png)

Kupon on nüüd teie loendil ja seal järgmine klikkida, et seda **redige või eemaldada**.

![Loendi kuponikoodi rida redigeerimise ja eemaldamise hover-toimised](/img/config/discount-codes-list-hover.png)

###

### URL-parametrite kasutamine: {#using-url-parameters}

Kui soovite oma hinnatavates tabelidesi kohandada või luua endale hästi näeviku kuponikoodipoolile veebile ja automaatselt rakendada allahindluse koodi oma kassas, saate seda teha URL-parametrite abil.

Eelmine on saada ühise link oma plaani jaoks. Selleks minuka **Ultimate Multisite > Tooted** ja valige plaani.

Klõpsake **Klikka kopienda ühine link** nupul. See annab teile ühise linki selle konkreetse plaani jaoks. Meie juhul antud ühine link oli [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Tootepool, kus on ühine link nupp](/img/config/products-list.png)

Käsi kasutage oma allahindlustukoode selle spetsiifilise plaanile, lisades URL-le parametri **?discount_code=XXX**. Seal **XXX** on kuponikood.

Meie näitesel kasutame kuponikood **50OFF** selle spetsiifilise toote jaoks.

See URL-l, mis on selle plaanile ja 50OFF allahindlustukoode lisatud, ilmub selliselt: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
