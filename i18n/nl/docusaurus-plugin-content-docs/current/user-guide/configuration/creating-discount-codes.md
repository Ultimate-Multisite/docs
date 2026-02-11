---
title: Kortingscodes maken
sidebar_position: 19
_i18n_hash: 3c7a42fff1710e14a95a32365f893dc3
---
# Creëren van Kortingscodes (v2)

_**BELANGRIJK NOTITIE: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Met Ultimate Multisite kun je kortingscodes maken om je klanten kortingen te geven op hun abonnementen. En ze maken is eenvoudig!

## Kortingscodes maken en bewerken

Om een kortingscode te maken of te bewerken, ga naar **Ultimate Multisite > Discount Codes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-G2iYAraljI.png)

Daar heb je een lijst van de kortingscodes die je al hebt gemaakt.

Je kunt op **Add Discount** **Code** klikken om een nieuwe coupon te maken of je kunt de bestaande bewerken door erover te zweven en op **Edit** te klikken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-nl6H0I06Jl.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-3puhU5xCFF.png)

Je wordt doorgestuurd naar de pagina waar je je kortingscode maakt of bewerkt. In dit voorbeeld maken we er een nieuwe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9dup6xM4Cx.png)

Laten we de beschikbare instellingen bekijken:

**Enter Discount Code:** Dit is alleen de naam van je kortingscode. Dit is niet de code die je klanten moeten gebruiken op het afrekenformulier.

**Description:** Hier kun je kort beschrijven waarvoor deze coupon bedoeld is.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-V97PvPqtmK.png)

**Coupon code:** Hier definieer je de code die je klanten moeten invoeren tijdens het afrekenen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-En58UdF3b7.png)

**Discount:** Hier kun je een **percentage** of een **vast bedrag** instellen voor je kortingscode.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-96cicxcs7f.png)

**Apply to renewals:** Als deze optie uitgeschakeld is, wordt deze kortingscode alleen toegepast op de **eerste betaling**. Alle andere betalingen krijgen geen korting. Als deze optie ingeschakeld is, is de kortingscode geldig voor alle toekomstige betalingen.

**Setup fee discount:** Als deze optie uitgeschakeld is, geeft de couponcode **geen korting op de installatiekosten** van de bestelling. Als deze optie ingeschakeld is, kun je de korting (percentage of vast bedrag) instellen die deze couponcode toepast op de installatiekosten van je plannen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zDYmcgHcoq.png)

**Active:** Schakel deze kortingscode handmatig in of uit.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-rwNFfGobBB.png)

Onder **Advanced Options** hebben we de volgende instellingen:

**Limit uses:**

  * **Uses:** Hier zie je hoe vaak de kortingscode is gebruikt.

  * **Max uses:** Dit beperkt het aantal keren dat gebruikers deze kortingscode kunnen gebruiken. Als je bijvoorbeeld 10 invoert, kan de coupon slechts 10 keer worden gebruikt. Na deze limiet kan de kortingscode niet meer worden gebruikt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zx4xudymt2.png)

**Start & expiration dates:** Hier kun je een startdatum en/of een vervaldatum toevoegen aan je coupon.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-AyTJkzxz9W.png)

**Limit products:** Als je **Select products** inschakelt, worden al je producten getoond. Je kunt handmatig selecteren (door aan of uit te schakelen) welke producten deze kortingscode kunnen accepteren. Producten die hier uitgeschakeld zijn, tonen geen wijziging als je klanten proberen deze kortingscode op die producten toe te passen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-OHK9Bgsaq7.png)

Na het instellen van al deze opties, klik op **Save Discount Code** om je coupon op te slaan en klaar!

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-wAAoviDov8.png)

De coupon staat nu in je lijst en daar kun je op **edit or delete** klikken.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-ySn575AxqX.png)

### 

### URL-parameters gebruiken:

Wil je je prijstabellen aanpassen of een mooie kortingscodepagina voor je website bouwen en automatisch een kortingscode toepassen op je afrekenformulier, dan kun je dit doen via URL-parameters.

Allereerst moet je de deelbare link voor je plan verkrijgen. Ga hiervoor naar **Ultimate Multisite > Products** en selecteer een plan.

Klik op de knop **Click to Copy Shareable Link**. Hiermee krijg je de deelbare link naar dit specifieke plan. In ons geval was de deelbare link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TecoStCUYi.png)

Om je kortingscode op dit specifieke plan toe te passen, voeg je gewoon de parameter **?discount_code=XXX** toe aan de URL. Waarbij **XXX** de kortingscode is.

In dit voorbeeld passen we de kortingscode **50OFF** toe op dit specifieke product.

De URL voor dit specifieke plan en met de 50OFF kortingscode toegepast ziet er als volgt uit: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
