---
title: Kliënt Account-bladsy
sidebar_position: 14
_i18n_hash: f7b0d45273561b6a0754b736c4dc4e3f
---
# Jou kliënt se Account-bladsy (v2)

_**BELANGRIKE NOTA: Hierdie artikel verwys na Ultimate Multisite weergawe 2.x.**_

Wanneer kliënte op jou netwerk op ’n plan inteken, kry hulle toegang tot ’n webwerf en sy Dashboard met belangrike inligting oor hul betalings, lidmaatskappe, domeine, planbeperkings, ens...

In hierdie handleiding sal ons jou deur die kliënt se Account-bladsy lei, en jy sal sien wat jou kliënte daarin kan sien en doen.

## Die Account-bladsy

Die Account-bladsy is toeganklik deur op **Account** binne jou kliënt se Dashboard te klik.

![Account-kieslys in die kliënt se Dashboard](/img/account-page/account-menu.png)

Op soewereine huurdernetwerke hou Ultimate Multisite v2.13.0 hierdie kliëntebestuurservaring op die hoofwerf. As ’n kliënt rekening-, betaalpunt-, fakturering-, faktuur-, werfbestuur-, sjabloonwisseling- of domeinkarteringaksies vanaf ’n soewereine huurder oopmaak, wys die aksie terug na die hoofwerf se kliëntepaneel sodat die netwerkfakturering- en lidmaatskaprekords gesaghebbend bly.

Wanneer die kliënt vanaf ’n soewereine huurder aankom, kan die hoofwerf se kliëntepaneel ’n terugkeer-skakel terug na die huurderwerf insluit. Die terugkeer-skakel word slegs gewys wanneer Ultimate Multisite die terugkeer-teiken as een van die kliënt se werwe kan valideer, wat arbitrêre herleidings voorkom terwyl die huurderwerkvloei behou word.

![Oorsig van kliënt se Account-bladsy](/img/account-page/overview.png)

Nadat ’n kliënt daarop klik, sal hulle ’n oorsig van hul lidmaatskap, faktuuradres, fakture, domeine, werfbeperkings sien, en sal hulle ook die ****Werfsjabloon** kan verander (as dit in jou netwerk toegelaat word)**.

Hulle kan ook die lidmaatskap na ’n ander plan verander, of ’n ander pakket of diens koop wat jy aanbied. Kom ons kyk afsonderlik na elke afdeling.

### Jou lidmaatskapoorsig:

Die eerste blok reg onder jou kliënte se webwerfnaam wys ’n oorsig van hul huidige plan en dienste/pakkette wat daarmee gekoop is. Die blok wys ook die lidmaatskapnommer, die aanvanklike bedrag wat daarvoor betaal is, hoeveel die plan en enige diens/pakket kos, en hoeveel keer hulle vir hierdie lidmaatskap gefaktureer is. Hulle kan ook sien of die lidmaatskap **Aktief**, **Verval** of **Gekanselleer** is.

![Lidmaatskapoorsig wat plan, bedrag en faktureringsbesonderhede wys](/img/account-page/membership-card.png)

Reg onder hierdie blok kan jou kliënte die **Oor hierdie werf**- en **Werfbeperkings**-blokke sien. Hierdie blokke wys vir hulle al die beperkings wat saam met hul plan kom: skyfspasie, plasings, bladsye, besoeke, ens... Hierdie limiete kan op elke planbladsy onder **Ultimate Multisite > Produkte** opgestel word.

![Oor hierdie werf- en Werfbeperkings-blokke wat planbeperkings wys](/img/account-page/site-limits.png)

Aan die regterkant van **Jou lidmaatskap** kan kliënte op **Verander** klik. Dit sal vir hulle alle beskikbare planne en pakkette/dienste wys. As hulle ’n ander plan kies, sal die beperkings vir die plan in werking tree in plaas van die huidige beperkings van die lidmaatskap — ongeag of hulle dit afgradeer of opgradeer.

As jou kliënte nou kies om pakkette of dienste vir hierdie huidige lidmaatskap te koop — soos meer skyfspasie of besoeke — sal die huidige lidmaatskap nie verander word nie; slegs die nuwe pakkette sal daarby gevoeg word.

Let daarop dat koeponkodes nie op hierdie lidmaatskapveranderingsbladsy bygevoeg kan word nie. As die kliënt ’n koeponkode op die eerste lidmaatskapaankoop gebruik het, sal die kode ook op hierdie nuwe lidmaatskap van toepassing wees.

### Opdatering van die faktuuradres:

Op die Account-bladsy kan jou kliënte ook hul faktuuradres opdateer. Hulle hoef net op **Opdateer** langs _Faktuuradres_ te klik.

![Faktuuradres-afdeling met Opdateer-knoppie](/img/account-page/billing-address.png)

’n Nuwe venster sal vir jou kliënt verskyn. Al wat hulle hoef te doen, is om die nuwe adres in te vul en op _Stoor veranderinge_ te klik.

![Vorm om faktuuradres op te dateer](/img/account-page/billing-address-form.png)

### Verandering van die werfsjabloon:

Om jou kliënte toe te laat om hul werfsjablone te verander, moet jy na **Ultimate Multisite > Instellings > Werwe** gaan en die opsie **Laat sjabloonwisseling toe** aanskakel.

Kies ook onder **Ultimate Multisite > Produkte** jou planne en gaan na die **Werfsjablone**-oortjie. Maak seker die opsie **Laat werfsjablone toe** is aangeskakel en dat onder **Werfsjabloon-keusemodus** die opsie **Kies beskikbare werfsjablone** gekies is.

![Produk se werfsjablone-oortjie met sjabloon-keusemodus](/img/config/product-site-templates.png)

Jy sal al die beskikbare werfsjablone op jou webwerf kan sien. Kies watter jy beskikbaar wil maak en watter jy nie beskikbaar wil maak vir jou kliënte wat onder hierdie plan ingeteken is nie. Let daarop dat hierdie opsies ook die betaalpuntvorm beïnvloed, dus sal enige sjabloon wat as **Nie beskikbaar** gekies is, nie op die registrasiebladsy vir hierdie plan verskyn nie.

Nou kan jou kliënte op **Verander werfsjabloon** binne hul Account-bladsy klik.

![Verander werfsjabloon-knoppie op Account-bladsy](/img/account-page/change-template-button.png)

Ultimate Multisite 2.10.0 wys ’n herontwerpte sjabloonwisselingspaneel. Die paneel begin met ’n **huidige-sjabloon-kaart** sodat kliënte kan sien watter sjabloon aktief is voordat hulle ’n plaasvervanger kies.

’n Volgehoue rooster van beskikbare werfsjablone bly sigbaar terwyl kliënte hul opsies hersien. Dit help hulle om die sjablone wat vir hul plan toegelaat word te vergelyk sonder om die huidige keuse uit die oog te verloor.

![Lys van beskikbare werfsjablone vir die plan](/img/config/site-templates-list.png)

Nadat hulle die een gekies het waarna hulle wil verander, sal hulle gevra word om die verandering te bevestig.

![Bevestigingsdialoog vir werfsjabloonwisseling](/img/account-page/template-switch-confirm.png)

Nadat hulle die bevestiging aangeskakel en op **Verwerk wisseling** geklik het, sal die nuwe werfsjabloon op jou kliënt se webwerf gebruik word.

Kliënte kan ook **Stel huidige sjabloon terug** vanaf hierdie paneel gebruik wanneer hulle die werf moet terugstel na die tans toegewysde sjabloon. Soos met die wisseling na ’n ander sjabloon, kan die terugstelling van ’n sjabloon werfinhoud oorskryf, dus moet kliënte dit slegs bevestig wanneer hulle die terugstelaksie verstaan.

### Byvoeging van pasgemaakte domeine:

Jou kliënte sal ook die opsie hê om ’n pasgemaakte domein vir hierdie plan op hul Account-bladsy by te voeg. Om jou kliënte toe te laat om pasgemaakte domeine te gebruik, gaan na **Ultimate Multisite > Instellings >** **Domeinkartering**.

Skakel die opsie **Aktiveer domeinkartering** aan. Dit sal jou kliënte toelaat om pasgemaakte domeine op netwerkvlak te gebruik.

Moenie vergeet om ook na te gaan of domeinkartering op ’n produkbasis geaktiveer is nie — omdat jy ’n produk kan beperk om nie jou kliënte toe te laat om pasgemaakte domeine te gebruik nie.

Gaan na **Ultimate Multisite > Produkte**. Kies die plan van jou keuse en gaan na die **Pasgemaakte domeine**-oortjie. Skakel die opsie **Laat pasgemaakte domeine toe** aan.

![Pasgemaakte domeine-oortjie met Laat pasgemaakte domeine toe-skakelaar](/img/config/product-custom-domains.png)

Dit sal alle kliënte wat op hierdie spesifieke plan ingeteken is, toelaat om pasgemaakte domeine te gebruik. Nou kan jou kliënte op die Account-bladsy ’n pasgemaakte domein byvoeg deur op **Voeg domein by** te klik.

![Voeg domein by-knoppie op die Account-bladsy](/img/account-page/add-domain-button.png)

Die eerste venster wat oopmaak, sal vir jou kliënte ’n boodskap wys wat hulle instruksies gee oor hoe om hul DNS-rekords op te dateer sodat hierdie pasgemaakte domein op jou netwerk kan werk.

![DNS-instruksies wat gewys word wanneer ’n pasgemaakte domein bygevoeg word](/img/account-page/add-domain-dns.png)

Hierdie boodskap kan (deur jou) gewysig word onder **Ultimate Multisite > Instellings > Domeinkartering > Instruksies vir nuwe domein byvoeg**.

![Instruksies vir nuwe domein byvoeg-instelling in Domeinkartering](/img/config/settings-domain-mapping.png)

Hier is ’n volledige aansig van die domeinkartering-instellingsbladsy:

![Volledige bladsy met domeinkartering-instellings](/img/config/settings-domain-mapping-full.png)

Nadat hulle op **Volgende stap** geklik het, kan jou kliënte hul pasgemaakte domeinnaam byvoeg en kies of hierdie pasgemaakte domein die primêre een sal wees. Let daarop dat jou kliënte meer as een pasgemaakte domein vir hul webwerwe kan gebruik, dus kan hulle kies watter een die primêre een sal wees.

![Invoer van pasgemaakte domeinnaam met primêre domein-opsie](/img/account-page/add-domain-primary.png)

Nadat hulle op **Voeg domein by** geklik het, sal die domein by jou kliënt se Account gevoeg word. Al wat hulle nou hoef te doen, is om die DNS-rekords van hierdie pasgemaakte domein by hul domeinregistreerder te verander.

### Verandering van wagwoord:

Binne die Account-Dashboard kan jou kliënte ook hul wagwoord verander deur op **Verander wagwoord** te klik.

![Verander wagwoord-knoppie op Account-bladsy](/img/account-page/change-password-button.png)

Dit sal ’n nuwe venster wys waar jou kliënte hul huidige wagwoord moet invul en dan die nuwe wagwoord moet invul wat hulle wil gebruik.

![Verander wagwoord-vorm met huidige en nuwe wagwoordvelde](/img/account-page/change-password-form.png)

### Gevaarsone:

Ons het ook twee opsies wat in die **Gevaarsone**-gedeelte gewys word: **Vee werf uit** en **Vee Account uit**. Hulle is albei in die Gevaarsone-gedeelte omdat hierdie twee aksies onomkeerbaar is. As jou kliënte hul webwerf of hul Account uitvee, kan hulle dit nie herstel nie.

![Gevaarsone met Vee werf uit- en Vee Account uit-opsies](/img/account-page/danger-zone.png)

As jou kliënte op enige van hierdie twee opsies klik, sal ’n venster vir hulle gewys word waar hulle die opsie moet aanskakel om die webwerf of Account te verwyder, en hulle sal gewaarsku word dat hierdie aksie nie ongedaan gemaak kan word nie.

![Bevestigingsdialoog vir Vee werf uit](/img/account-page/delete-site-confirm.png)

![Bevestigingsdialoog vir Vee Account uit](/img/account-page/delete-account-confirm.png)

As hulle hul webwerf uitvee, sal hul Account en lidmaatskap steeds onaangeraak bly. Hulle sal net al die inhoud op hul webwerf verloor. As hulle hul Account uitvee, sal alle webwerwe, lidmaatskappe en inligting rakende hierdie Account verlore gaan.
