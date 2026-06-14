---
title: Siti mallid
sidebar_position: 4
_i18n_hash: fec01b1bf4e915bea1e8cd662fc1b465
---
# Veebilehedid (v2)

_**MÄÄRKE: See artikli viitab Ultimate Multisite versioon 2.x. Kui kasutate versiooni 1.x,**_ **vaata seda artiklit.**_

Meie eesmärk Ultimate Multisite abil premium võrku loomisel on võimalikult palju protsesse automaatsustada samal ajal kui anname meie klientidele paindlikkuse ja erinevaid valikuid nende veebilehtide luomise ajal. See tasakaalu saavutamiseks lihtne viis on kasutada Ultimate Multisite Site Templates funktsiooni.

## Mis on Site Template?

Nagu nime viitab, on Site Template põhi veebileht, mida saab kasutada aluseks uute veebilehtide loomisel teie võrkudes.

See tähendab, et saate luua aluse veebilehti, aktiveerida erinevaid pluginid, seada aktiivse teema ja kohandada seda igal soov anda. Seejärel, kui klient luuakse uue konto, ei saa nad poolt puhtalt WordPressi veebilehte ilma muidu sisuteta, vaid saavad koopi teie aluse veebilehtist, kus kõik kohandused ja sisu on juba paigutatud.

See kuulub hästi, kuid kuidas ma uue site template'i luun? See on võimalikult lihtne.

## Uue Site Template loomine ja redigeerimine

Site Templates on lihtsalt tavaline veebileht teie võrkudes. Uue template loomiseks saate lihtsalt minna **Network Admin > Ultimate Multisite > Sites > Add Site.**

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

See avab modulaaru, kus palutakse anda **Site title (Veebilehti nimi), Site Domain/path (Veebilehtdomaan/teel) ja Site type (Veebilehti tüüp).** **Site Type** drop-down valikust veenduge, et on valitud **Site Template**.

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

Saate ka lisada klientidele mõeldud kirjelduse selgitamiseks, mida template sisaldab:

![Site template description field on the site template edit screen](/img/config/site-template-edit-description.png)

Formi alates, leidate **Copy Site** lühend. See võimaldab teil uuest veebilehule tegelikku variant (site template) luua olemasoleva site template põhjal alguspunktina, et aita anda säästema ja mitte ülesalgust alustabest.

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template sisu muutmise

Omaduse site template muutmiseks navige lihtsalt selle dashboard paneelile ja tee neid muutusi, mida vajad. Saate luua uusi posts, lehted, aktiveerida pluginid ja muuta aktiivset teema. Saate isegi minna Customizeri ja muuta kõiki tüüpi kohandamise valikuid.

![Site template edit interface](/img/config/site-template-edit.png)

Kõik see andmed kopitakse üle, kui klient luub uue veebilehule selle Site Template põhjal.

### Andmevahelised valikud (Advanced Options)

Kui te teada, kuidas mõnda kohandatud koodiga töötada, saate kasutada meie Search and Replace API-t, et anda uues veebilehule luomise pärast seda automaatselt infot asendada. See on kasulik asjade nagu ettevõtte nimi muutmiseks About lehel, kontakt e-posti aadressi muutmiseks Contact lehel jne.

### Site Template kasutamine

Ok, siis te olete lunud palju erinevaid Site Templates erinevate disainidega, teemadega ja seadistustega. Kuidas neid nüüd oma võrreedel kasulikuks teha?

Põhjalikult on teil nüüd kaks lähenemist, mida saate kasutada (ei samanaikselt):

  * Üks Site Template kinnitamiseks iga Planele lisamine

**VÄLGA**

  * Lükkida klientide valima site template'id registreitumise ajal.

#### Režiim 1: Site Template asendamine

Lacus režiimis kasutajad ei saa konto luoda, kus nad saaksid valiku teemakust, vaid teil tuleb määrata, millist teema igale oma Plaanile kasutatakse.

See teha jaoks tuleb minna **Ultimate Multisite > Products > Edit** menüüpunktisse.

![Edit product to assign site template](/img/config/product-site-templates.png)

See viie teid **Product Options** sektsiooniga. Seal leiate **Site template** tab ja valige drop-down-valgustest **Assign Site Template** (Teema määramise). See avab teie saadaval olevate teemad nimekirju ja võimaldab teil valida ainult ühe teema, mis on omandatud sellele produktsile.

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Režiim 2: Valige saadaval olev teema

See režiimis annate oma klientide valikku registreitumise ajal. Nad saavad valida erinevate teemadest, mida definitsite produkti seadistustes. Teil on võimalus piirata neid teemasid, mida nad saan välja, valitud produkti all. See võimaldab teil saada erinevaid teemaomad iga produkti all, mis on ideaalne erinevate funktsioonide ja spetsiifiliste omadete esile tõstamiseks hilisemaks hinnaga olevatele produkitele.

**Toode toote redigeerimisle lehel.** **Toote valikute** osas leppige ja leppige **Siti malli** tab ja valige drop-down-väljendist **Vali saadaval siti malli**. See avab saate saatavate siti mallide nimekirja ja võimaldab teil välja valida selle siti malli, mida soovite saadaval olla. Saate seda teha valides selle käitumise: **Saadaaval** (nend korral, kui soovite siti malli esitatud nimekirjale lisada) või **Ei ole saadaval** (nend korral, kui soovite, et siti malli ei näha valikuna). Samuti on **Eelvalitud**, kui soovite, et üks leppige siti mallist olevaid olevat oletustena valitud.

![Vali saatavate siti mallide käitumise valikud](/img/config/product-site-templates.png)

### Oletusteel: Siti malli valik lahkumine ostukorvi vormis

Kui soovite, et kõik teie siti mallid oleksid registreerimise ajal saadaval, või ei soovi lisatöö teha iga toote all olevate siti mallide määramise või spetsifitseerimise osas. Siis saate lihtsalt asetada siti malli valik **Ostukorvi vormis**. Selleks minige **Ultimate Multisite > Checkout Forms** ja klõpsake **Redige** soovitud vormi all.

See avab **Ostukorvi vormi redigeerimise** lehe. Leppige **Mallivalik** välja ja klõpsake selle all **Redige**.

Avab seadistusaru. **Mallide sitiid** väljendil saate valida ja nimekirja teha kõik need siti mallid, mida soovite registreerimise ajal saadaval olla. Siit antud teil spetsifitseeritud siti mallid on saadaval, igas juhul, millist toote kasutaja valinud oleva.

![Mallivalik väljend ostukorvi vormi redigeerimisjahendis](/img/config/checkout-form-template-step.png)

Etuleju lehel kasutajad näevad mallivalikku ostukorvi ajal ja saavad valida uue siti algse disaini.

![Frontend template chooser during registration](/img/config/frontend-template-chooser.png)

### Veebilehtet valikud

On onne on saad kasutada teisi veebilehtemõõtlikke funktsioone, mida saab sisse lülitada või välja lülitada Ultimate Multisite seadistustes.

![Veebilehtemõõtlikkide valikud Ultimate Multisite seadistustes](/img/config/settings-sites-templates-section.png)

#### Veebilehtemõõtlikkide ülemine võimaldamine

See valiku sisse lülitamine võimaldab teie klientidele pärast konto ja veebileht loomist välja valitud veebilehtemõõtliku ülemine laadida. See on kas klientide jaoks kasulik, kuna see võimaldab neid uuesti valita veebilehtemõõtlikku, kui nad hiljem teavad, et nende algne valik ei olnud parim nende erispärade jaoks.

#### Kasutajatele võimalus kasutada oma veebilehte veebilehtemõõtlikuna

Selle tõttu, et subsite kasutajad on aega kulutanud oma veebilehte laiamise ja disainimise loomisel, võivad nad soovida seda klonit ja kasutada selle ühtse veebilehtemõõtliku kui üks võimalustele olevaid veebilehtemõõtlikke, kui luuavad uue subsite oma võrku. See valik annab neile see saavutada.

#### Media klonimine veebilehtemõõtliku duplikaati ajal

Selle valiku kontrollimine klonib media, mida on laaditud veebilehtemõõtlikul veebilehel uuesti loomisel loodud veebilehega. Seda saab ületada iga plaaniga.

#### **Veebilehtemõõtlike indeksimise vabanemine otsingumahvade poolt**

Veebilehtemõõtlikud, nagu selles artiklis discusseeritakse, on boilerplateid, kuid elasid endiselt teie võrku osa, mis tähendab, et nad on edelleen saadaval otsimuhavade leida. See valik võimaldab teil veebilehtemõõtlike varjuta, seega saavad otsingumahvad neid indeksida.

## Veebilehtemõõtlike ettevalmistamine automaatse otsingu ja asendamise abil

Ultimate Multisite kõige võimlikum funktsioon on võimalus lisada vaba teksti, värve ja valikud vormi registreerimise vormisse. Kui me selle andmeid kogume, saame neid kasutada sisse seadistatud sihtlehelte osade ettevalmistamiseks. Seejärel, kui uus sihtlehel on avaldatav, asendab Ultimate Multisite paigutajad (placeholders) tegelikud registreerimise ajal sisestatud informatsiooniga.

Näiteks, kui soovite saada end kliendi ettevõtte nimi registreeerimisega ja automaatselt seada ettevõtte nime kodulehelile. Kui teie sihtlehe hoolduslehelil peate lisama paigutajad, nagu näidatud allpool (paigutajaid tuleb tähendada kaks ühise pikkkuuliku lühendit - {{placeholder_name}}).

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

Seejärel saate lihtsalt lisada vastava registreerimise füldri oma ostukorvi vormi, et koguda seda andmeid. Sama ostukorvi vormi redigeerija, mida kasutatakse sihtlehe valikute jaoks, võimaldab te anda lisafielde paigutada sihtlehe valiku kõrval:

![Template selection and registration fields in the checkout form editor](/img/config/checkout-form-template-step.png)

Seejärel saab teie klient seda füldri registreerimise ajal täita.

<!-- Screenshot unavailable: Frontend checkout form with template chooser -->

Ultimate Multisite asendab siis paigutajad automaatselt kliendilt antud andmetega.

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### Paigutajate täitmise probleem lahendamine

Kõik see on suurepärase, kuid me vastame kahju: meie sihtlehe hoolduslehelid – mida kliendid külastavad – on täis paigutajad, mis ei räägi palju.

See, et selleks probleem lahendamiseks pakume võimalust asutada fiktivseid väärtusi paigutajatele (placeholders). Seejärel kasutame neid väärtusi sisu otsimiseks ja asendamiseks malli veebileides, kui teie kliendid seda külastavad.

Sa saate päästa paigutajate sisu redigeerimise juurde minema **Ultimate Multisite > Settings > Sites** läbi navigatsiooni, ja siis sivubari ülesklikkudes **Edit Placeholders** linki.

![Site template settings under the Sites settings page](/img/config/settings-sites-templates-section.png)

See viie teid paigutajate sisu redigeerimise juurde, kus saate lisada paigutaja ja nende vastava sisu.

![Template placeholders content editor entry point](/img/config/settings-sites-templates-section.png)
