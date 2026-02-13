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

![](/img/config/discount-codes-list.png)

Daar heb je een lijst van de kortingscodes die je al hebt gemaakt.

Je kunt op **Add Discount** **Code** klikken om een nieuwe coupon te maken of je kunt de bestaande bewerken door erover te zweven en op **Edit** te klikken.

![Discount codes list with hover actions](/img/config/discount-codes-list.png)

![Add Discount Code button](/img/config/discount-codes-list.png)

Je wordt doorgestuurd naar de pagina waar je je kortingscode maakt of bewerkt. In dit voorbeeld maken we er een nieuwe.

![Discount code edit page](/img/config/discount-codes-list.png)

Laten we de beschikbare instellingen bekijken:

**Enter Discount Code:** Dit is alleen de naam van je kortingscode. Dit is niet de code die je klanten moeten gebruiken op het afrekenformulier.

**Description:** Hier kun je kort beschrijven waarvoor deze coupon bedoeld is.

![Discount code name and description fields](/img/config/discount-codes-list.png)

**Coupon code:** Hier definieer je de code die je klanten moeten invoeren tijdens het afrekenen.

![Coupon code field](/img/config/discount-codes-list.png)

**Discount:** Hier kun je een **percentage** of een **vast bedrag** instellen voor je kortingscode.

![Discount percentage or fixed amount setting](/img/config/discount-codes-list.png)

**Apply to renewals:** Als deze optie uitgeschakeld is, wordt deze kortingscode alleen toegepast op de **eerste betaling**. Alle andere betalingen krijgen geen korting. Als deze optie ingeschakeld is, is de kortingscode geldig voor alle toekomstige betalingen.

**Setup fee discount:** Als deze optie uitgeschakeld is, geeft de couponcode **geen korting op de installatiekosten** van de bestelling. Als deze optie ingeschakeld is, kun je de korting (percentage of vast bedrag) instellen die deze couponcode toepast op de installatiekosten van je plannen.

![Apply to renewals and setup fee discount options](/img/config/discount-codes-list.png)

**Active:** Schakel deze kortingscode handmatig in of uit.

![Active toggle for discount code](/img/config/discount-codes-list.png)

Onder **Advanced Options** hebben we de volgende instellingen:

**Limit uses:**

  * **Uses:** Hier zie je hoe vaak de kortingscode is gebruikt.

  * **Max uses:** Dit beperkt het aantal keren dat gebruikers deze kortingscode kunnen gebruiken. Als je bijvoorbeeld 10 invoert, kan de coupon slechts 10 keer worden gebruikt. Na deze limiet kan de kortingscode niet meer worden gebruikt.

![Limit uses setting with uses and max uses fields](/img/config/discount-codes-list.png)**Start & expiration dates:** Here you will have the option to add a start date and/or an expiration date to your coupon.

**Start & expiration dates:** Hier kun je een startdatum en/of een vervaldatum toevoegen aan je coupon.

![Start and expiration date fields](/img/config/discount-codes-list.png)

**Limit products:** Als je **Select products** inschakelt, worden al je producten getoond. Je kunt handmatig selecteren (door aan of uit te schakelen) welke producten deze kortingscode kunnen accepteren. Producten die hier uitgeschakeld zijn, tonen geen wijziging als je klanten proberen deze kortingscode op die producten toe te passen.

![Limit products selection toggles](/img/config/discount-codes-list.png)

Na het instellen van al deze opties, klik op **Save Discount Code** om je coupon op te slaan en klaar!

![Save Discount Code button](/img/config/discount-codes-list.png)

De coupon staat nu in je lijst en daar kun je op **edit or delete** klikken.

![Discount code in the list with edit and delete options](/img/config/discount-codes-list.png)

### 

### URL-parameters gebruiken:

Wil je je prijstabellen aanpassen of een mooie kortingscodepagina voor je website bouwen en automatisch een kortingscode toepassen op je afrekenformulier, dan kun je dit doen via URL-parameters.

Allereerst moet je de deelbare link voor je plan verkrijgen. Ga hiervoor naar **Ultimate Multisite > Products** en selecteer een plan.

Klik op de knop **Click to Copy Shareable Link**. Hiermee krijg je de deelbare link naar dit specifieke plan. In ons geval was de deelbare link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_.

![Product page with shareable link button](/img/config/products-list.png)

Om je kortingscode op dit specifieke plan toe te passen, voeg je gewoon de parameter **?discount_code=XXX** toe aan de URL. Waarbij **XXX** de kortingscode is.

In dit voorbeeld passen we de kortingscode **50OFF** toe op dit specifieke product.

De URL voor dit specifieke plan en met de 50OFF kortingscode toegepast ziet er als volgt uit: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
