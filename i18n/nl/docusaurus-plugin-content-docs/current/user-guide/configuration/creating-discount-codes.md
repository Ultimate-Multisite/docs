---
title: Kortingscodes aanmaken
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Kortingscodes aanmaken (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Met Ultimate Multisite kun je kortingscodes aanmaken om je klanten korting te geven op hun abonnementen. En ze aanmaken is eenvoudig!

## Kortingscodes aanmaken en bewerken {#creating-and-editing-discount-codes}

Om een kortingscode aan te maken of te bewerken, ga je naar **Ultimate Multisite > Kortingscodes**.

![Lijst met kortingscodes — lege staat voordat er codes bestaan](/img/config/discount-codes-empty.png)

Daar zie je een lijst met de kortingscodes die je al hebt aangemaakt.

Je kunt op **Kortingscode** **toevoegen** klikken om een nieuwe coupon aan te maken, of je kunt de codes die je hebt bewerken door er met de muis overheen te gaan en op **Bewerken** te klikken.

![Lijst met kortingscodes met hover-acties die links voor Bewerken en Verwijderen tonen](/img/config/discount-codes-list-hover.png)

![Knop Kortingscode toevoegen in de paginakop](/img/config/discount-codes-add-button.png)

Je wordt doorgestuurd naar de pagina waar je je couponcode aanmaakt of bewerkt. In dit voorbeeld maken we een nieuwe aan.

![Bewerkpagina voor kortingscode met alle secties zichtbaar](/img/config/discount-code-edit.png)

Laten we kijken naar de instellingen die hier beschikbaar zijn:

**Voer kortingscode in:** Dit is alleen de naam van je kortingscode. Dit is niet de code die je klanten op het checkout-formulier moeten gebruiken.

**Beschrijving:** Hier kun je kort beschrijven waarvoor deze coupon bedoeld is.

![Velden voor naam en beschrijving van kortingscode bovenaan de bewerkpagina](/img/config/discount-code-description.png)

Je kunt de kortingscode ook als actief of inactief bekijken:

![Actieve status van kortingscode](/img/config/discount-code-active.png)

**Couponcode:** Hier definieer je de code die je klanten tijdens de checkout moeten invoeren.

![Couponcodeveld waar klanten de code invoeren bij checkout](/img/config/discount-code-coupon-field.png)

**Korting:** Hier kun je voor je kortingscode een **percentage** of een **vast bedrag** instellen.

![Instelling voor kortingsbedrag met keuzelijst voor percentage of vast bedrag](/img/config/discount-code-amount.png)

**Toepassen op verlengingen:** Als deze optie is uitgeschakeld, wordt deze kortingscode alleen toegepast op de **eerste betaling**. Alle andere betalingen krijgen geen korting. Als deze optie is ingeschakeld, is de kortingscode geldig voor alle toekomstige betalingen.

**Korting op installatiekosten:** Als deze optie is uitgeschakeld, geeft de couponcode **geen korting op de installatiekosten** van de bestelling. Als deze optie is ingeschakeld, kun je de korting (percentage of vast bedrag) instellen die deze couponcode toepast op de installatiekosten van je abonnementen.

![Schakelopties voor toepassen op verlengingen en korting op installatiekosten](/img/config/discount-code-renewals.png)

**Actief:** Activeer of deactiveer deze couponcode handmatig.

![Schakelaar Actief om de kortingscode handmatig in of uit te schakelen](/img/config/discount-code-active.png)

Onder **Geavanceerde opties** hebben we de volgende instellingen:

![Geavanceerde opties voor kortingscode](/img/config/discount-code-advanced.png)

**Gebruik beperken:**

  * **Gebruik:** Hier kun je zien hoe vaak de kortingscode is gebruikt.

  * **Maximaal gebruik:** Dit beperkt het aantal keren dat gebruikers deze kortingscode kunnen gebruiken. Als je hier bijvoorbeeld 10 invult, kan de coupon slechts 10 keer worden gebruikt. Na deze limiet kan de couponcode niet meer worden gebruikt.

![Instelling Gebruik beperken met huidig aantal keren gebruikt en veld voor maximaal gebruik](/img/config/discount-code-limit-uses.png)

**Start- en vervaldatums:** Hier heb je de optie om een startdatum en/of een vervaldatum aan je coupon toe te voegen.

![Velden voor start- en vervaldatum om de kortingscode te plannen](/img/config/discount-code-dates.png)

**Producten beperken:** Als je **Producten selecteren** inschakelt, worden al je producten aan je getoond. Je hebt de optie om handmatig te selecteren (door in of uit te schakelen) welk product deze couponcode kan accepteren. Producten die hier zijn uitgeschakeld, tonen geen wijziging als je klanten deze couponcode voor die producten proberen te gebruiken.

![Sectie Producten beperken met schakelaars per product](/img/config/discount-code-limit-products.png)

Nadat je al deze opties hebt ingesteld, klik je op **Kortingscode opslaan** om je coupon op te slaan en dan is het klaar!

![Knop Kortingscode opslaan onderaan de bewerkpagina](/img/config/discount-code-save.png)

De coupon staat nu in je lijst en van daaruit kun je erop klikken om deze te **bewerken of verwijderen**.

![Rij met kortingscode in de lijst met hover-acties Bewerken en Verwijderen](/img/config/discount-codes-list-hover.png)

###

### URL-parameters gebruiken: {#using-url-parameters}

Als je je prijstabellen wilt aanpassen of een mooie couponcodepagina voor je website wilt maken en automatisch een kortingscode op je checkout-formulier wilt toepassen, kun je dit doen via URL-parameters.

Eerst moet je de deelbare link voor je abonnement ophalen. Ga hiervoor naar **Ultimate Multisite > Producten** en selecteer een abonnement.

Klik op de knop **Klik om deelbare link te kopiëren**. Dit geeft je de deelbare link naar dit specifieke abonnement. In ons geval was de gegeven deelbare link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Productpagina met knop voor deelbare link](/img/config/products-list.png)

Om je kortingscode op dit specifieke abonnement toe te passen, voeg je gewoon de parameter **?discount_code=XXX** toe aan de URL. Waarbij **XXX** de couponcode is.

In ons voorbeeld hier passen we de couponcode **50OFF** toe op dit specifieke product.

De URL voor dit specifieke abonnement met de 50OFF-kortingscode toegepast ziet er zo uit: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
