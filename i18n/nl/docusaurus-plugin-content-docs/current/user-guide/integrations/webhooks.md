---
title: Webhooks
sidebar_position: 15
_i18n_hash: 31948dc4c1b47114e296e95813b25348
---
# Een eerste blik op Webhooks (v2)

_**LET OP: Merk op dat deze functie of artikel bedoeld is voor gevorderde gebruikers.**_

Een **webhook** is een manier voor een app of software zoals Ultimate Multisite om andere applicaties real-time informatie te bieden. Een webhook levert data of payloads aan andere applicaties zodra het gebeurt, wat betekent dat je **direct data ontvangt.**

Dit is handig als je bepaalde data van Ultimate Multisite naar een ander CRM of systeem wilt integreren of doorgeven telkens wanneer een gebeurtenis wordt getriggerd. Bijvoorbeeld, je moet de naam en e-mailadres van de gebruiker naar een mailinglijst sturen elke keer dat een nieuw gebruikersaccount wordt aangemaakt.

## Hoe maak je een webhook

Ga om een webhook te maken naar je netwerkbeheerder dashboard. Klik op **Ultimate Multisite > Webhooks > Add New Webhook.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7cBdC7uhfX.png)

Bij het aanmaken van een nieuwe webhook wordt je om informatie gevraagd zoals **Name, URL,** en **Event**. Je kunt elke naam kiezen die je wilt voor je webhook. De belangrijkste velden zijn de URL en het Event.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-7MmyV3wafK.png)

URL is het **endpoint of de bestemming** waarnaar Ultimate Multisite de **payload of data** zal sturen. Dit is de applicatie die de data ontvangt.

Zapier is de meest gebruikte oplossing waarmee gebruikers integratie met een derde partij applicatie gemakkelijker maken. Zonder een platform zoals Zapier moet je handmatig een aangepaste functie maken die de data opvangt en verwerkt. Zie dit artikel over **hoe je Ultimate Multisite webhook met Zapier gebruikt.**

In dit artikel zullen we het basisconcept bekijken van hoe een webhook werkt en de beschikbare gebeurtenissen in Ultimate Multisite. We gebruiken een derde partij site genaamd [requestbin.com](https://requestbin.com/). Deze site stelt ons in staat een endpoint te maken en de payload op te vangen zonder code te schrijven. _**Disclaimer: het enige wat het doet is ons laten zien dat de data is ontvangen.**_ Er zal geen verwerking of enige actie op de payload worden uitgevoerd.

Ga naar [requestbin.com](https://requestbin.com/) en klik op Create Request Bin.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-J0e5FzS04g.png)

Na het klikken op die knop wordt je gevraagd in te loggen als je al een account hebt of je aan te melden. Als je al een account hebt, leidt het je meteen naar hun dashboard. Op hun dashboard zie je meteen het endpoint of de URL die je kunt gebruiken bij het aanmaken van je Ultimate Multisite webhook.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-M40kPMGsji.png)

Kopieer de URL en ga terug naar Ultimate Multisite. Plaats het endpoint in het URL-veld en selecteer een gebeurtenis uit het dropdownmenu. In dit voorbeeld kiezen we **Payment Received**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1NwqQP4bP0.png)

Deze gebeurtenis wordt getriggerd telkens wanneer een gebruiker een betaling doet. Alle beschikbare gebeurtenissen, hun beschrijving en payloads staan onderaan de pagina. Klik op de knop **Add New Webhook** om de webhook op te slaan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-zTDhrG4wlP.png)

We kunnen nu een testgebeurtenis naar het endpoint sturen om te zien of de webhook die we hebben gemaakt werkt. Dit doen we door op **Send Test Event** te klikken onder de webhook die we hebben gemaakt.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-9jP9r7yRT9.png)

Dit toont een bevestigingsvenster waarin staat dat de test succesvol was.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RZke5xnrAg.png)

Als we teruggaan naar de _Requestbin_ site, zien we dat de payload is ontvangen met wat testdata.

Dit is het basisprincipe van hoe webhooks en endpoints werken. Als je een aangepast endpoint wilt maken, moet je een aangepaste functie maken om de data te verwerken die je van Ultimate Multisite ontvangt.
