---
title: Webhooks
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Een eerste blik op webhooks (v2)

_**LET OP: Houd er rekening mee dat deze functie of dit artikel bedoeld is voor gevorderde gebruikers.**_

Een **webhook** is een manier voor een app of software zoals Ultimate Multisite om andere applicaties van realtime informatie te voorzien. Een webhook levert gegevens of payloads aan andere applicaties op het moment dat het gebeurt, wat betekent dat je **gegevens onmiddellijk ontvangt.**

Dit is handig als je bepaalde gegevens vanuit Ultimate Multisite moet integreren of doorgeven aan een andere CRM of systeem telkens wanneer een gebeurtenis wordt geactiveerd. Bijvoorbeeld: je moet de naam en het e-mailadres van de gebruiker naar een mailinglijst sturen telkens wanneer een nieuw gebruikersaccount wordt aangemaakt.

## Een webhook maken {#how-to-create-a-webhook}

Om een webhook te maken, ga je naar je netwerkbeheer-dashboard. Klik op **Ultimate Multisite > Webhooks > Nieuwe Webhook toevoegen.**

![Lege Webhooks-lijstpagina met knop Nieuwe Webhook toevoegen](/img/admin/webhooks-list-empty.png)

Je kunt vervolgens de webhookconfiguratie bewerken:

![Formulier Nieuwe Webhook toevoegen met velden Naam, Gebeurtenis en URL](/img/admin/webhook-add-modal.png)

Bij het maken van een nieuwe webhook wordt je gevraagd om informatie zoals **Naam, URL,** en **Gebeurtenis**. Je kunt elke naam gebruiken die je wilt voor je webhook. De belangrijkste velden zijn de URL en Gebeurtenis.

![Webhook-bewerkingsinterface met het URL-veld en payloadvoorbeeld](/img/admin/webhook-url-field.png)

URL is het **endpoint of de bestemming** waarnaar Ultimate Multisite de **payload of gegevens** zal sturen. Dit is de applicatie die de gegevens zal ontvangen.

Zapier is de meest gebruikte oplossing die gebruikers gebruiken om integratie met applicaties van derden gemakkelijker te maken. Zonder een platform zoals Zapier moet je handmatig een aangepaste functie maken die de gegevens opvangt en verwerkt. Bekijk dit artikel over **hoe je Ultimate Multisite-webhook met Zapier gebruikt.**

In dit artikel kijken we naar het basisconcept van hoe een webhook werkt en welke gebeurtenissen beschikbaar zijn in Ultimate Multisite. We gebruiken een site van derden genaamd [requestbin.com](https://requestbin.com/). Deze site stelt ons in staat een endpoint te maken en de payload op te vangen zonder te coderen. _**Disclaimer: het enige wat dit doet, is ons laten zien dat de gegevens zijn ontvangen.**_ Er wordt geen verwerking of enige actie op de payload uitgevoerd.

Ga naar [requestbin.com](https://requestbin.com/) en klik op Request Bin maken.

Nadat je op die knop hebt geklikt, wordt je gevraagd in te loggen als je al een account hebt of je aan te melden. Als je al een account hebt, brengt dit je direct naar hun dashboard. Op hun dashboard zie je onmiddellijk het endpoint of de URL die je kunt gebruiken bij het maken van je Ultimate Multisite-webhook.

Ga door en kopieer de URL en ga terug naar Ultimate Multisite. Plaats het endpoint in het URL-veld en selecteer een gebeurtenis uit de dropdown. In dit voorbeeld selecteren we **Betaling ontvangen**.

Deze gebeurtenis wordt geactiveerd telkens wanneer een gebruiker een betaling doet. Alle beschikbare gebeurtenissen, hun beschrijving en payloads staan onderaan de pagina vermeld. Klik op de knop **Nieuwe Webhook toevoegen** om de webhook op te slaan.

![Dropdown voor webhookgebeurtenissen met Betaling ontvangen geselecteerd](/img/admin/webhook-event-picker.png)

We kunnen nu een testgebeurtenis naar het endpoint sturen, zodat we kunnen zien of de webhook die we hebben gemaakt werkt. We kunnen dit doen door op **Testgebeurtenis verzenden** te klikken onder de webhook die we hebben gemaakt.

![Webhooks-lijst met één geconfigureerde webhook en actie Test verzenden](/img/admin/webhooks-list-populated.png)

Dit toont een bevestigingsvenster waarin staat dat de test succesvol was.

![Resultaat van webhooktestgebeurtenis na het verzenden van een testpayload](/img/admin/webhook-test-result.png)

Als we nu teruggaan naar de _Requestbin_-site, zien we dat de payload is ontvangen en enkele testgegevens bevat.

Dit is het basisprincipe van hoe webhooks en endpoints werken. Als je een aangepast endpoint wilt maken, moet je een aangepaste functie maken om de gegevens te verwerken die je van Ultimate Multisite ontvangt.
