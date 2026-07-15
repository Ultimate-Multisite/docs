---
title: Plani allundamine
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# Plaani alla liigutamine (v2)

_**TÄHTIS NOTE: See artikli viitab Ultimate Multisite versioonile 2.x.**_

Plaani või jälgenduse alla liigutamine on tavaline tegevus, mida teie kliendid võivad teha, kui nad on piiratud eelarvega või otsustavad, et neil ei vaja palju ressursside oma subsite juhendamiseks.

## Kuidas plaani alla liigutada {#how-to-downgrade-a-plan}

Teised kliendid võivad plaani alla liigutada millalgi sisse logimaks oma subsite administraatori dashboardile ja klõpsamaks **Muuda** (Change) üles kasutaja/kliendi kontorile.

![Kliendi kontori lehekülje pilt, kus on Teie Liikmusedkaart ja Muuda-nupuk](/img/account-page/membership-change-button.png)

**Muuda**-nupul klõpsamise korral suudutatakse kasutaja/kliendit kassale, kus nad võivad valita plaani, mida soovivad oma jälgenduse muutmine teha.

![Plaani alla liigutamise võimaluste lehekülje kliendi küljest](/img/account-page/downgrade-picker.png)

See esimeses näites me alla liigutame plaani **Premium**'ist **Free**'le.

Järgmine jaoks kasutaja peab lihtsalt klõpsama **Kassande lõpetamine** (Complete Checkout) nupul. See siis viitab talle tagasi kontori lehekülje, kus näidatakse sõnumi jälgenduse muutmistest. Muutised jõustuvad effectiviks kliendi **järgmisel lahenduses**.

![Kontori lehekülje pilt, kus on jälgenduse muutmine ootamises banner](/img/account-page/pending-change.png)

### Mis happens, kui kasutaja alla liigutab plaani? {#what-happens-when-a-user-downgrades-their-plan}

On oluline märida, et plaani alla liigutamine ei muuta olemasoleva konfiguratsiooni subsite sisse.

See ei muuta automaatselt veebilehe malli (site template), kuna veebilehe malli muutmine puhastab ja ümber asub subsite täiesti. See on tehtud vältida vajadatu andmete kaotamist. Seega diskide ruumi, teemad, pluginid jne jäävad koruna, välja arvatud sisu (posts).

Meie mõistame, et teie peamine mure on sellele piisutega ja kvootidega, mida iga plaan määratates, kuid tuleb arvestada, millise kahju kasutajale subsite teeb konfiguratsioonide kustutamise või muutmise korral.

Postide, mis ületavad plaani seadsetud piirid, on teil 3 erinevat valikut: **Haldada postid nagu on** *,* **Liiga hävitada postid** *,* või **Liiga draafks viia postid** *.* Seda saab konfigurida Ultimate Multisite seadistustes.

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### Mis happens on maksuga {#what-happens-to-the-payment}

Versioon 2.0 ei nõua enam prooratsiooni osutamise reguleerimist maksuluse osas.

See on seega, et süsteem ootab olemasoleva liiklusest **maksulaikjuhi lõpmine enne**, kui uus plaan/liiklus jõustub jõuduks. Uue liikluse jaoks määratud maksuluse summa lisatakse ja esitakse automaatselt järgmise maksulaikjuhi ajal.
