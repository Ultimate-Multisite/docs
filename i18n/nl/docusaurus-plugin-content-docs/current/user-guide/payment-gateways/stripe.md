---
title: Stripe instellen
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# De Stripe Gateway instellen (v2)

_**BELANGRIJKE OPMERKING: Dit artikel verwijst naar Ultimate Multisite versie 2.x.**_

Je kunt tot vier betaalmethoden activeren op onze pagina met betalingsinstellingen: Stripe, Stripe Checkout, PayPal en Handmatig. In dit artikel bekijken we hoe je met **Stripe** integreert.

## Stripe inschakelen {#enabling-stripe}

Om Stripe als beschikbare betalingsgateway op je netwerk in te schakelen, ga je naar **Ultimate Multisite > Settings > Payments** en vink je de toggle naast **Stripe** of **Stripe Checkout** aan in de sectie Active Payment Gateways.

![Stripe inschakelen in actieve betalingsgateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Deze methode toont tijdens het afrekenen een ruimte om het creditcardnummer in te voeren.

![Inline creditcardveld van Stripe tijdens het afrekenen](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Deze methode stuurt de klant tijdens het afrekenen door naar een Stripe Checkout-pagina.

![Doorverwijspagina van Stripe Checkout tijdens het afrekenen](/img/config/settings-payment-gateways.png)

Je Stripe API-sleutels verkrijgen

Zodra Stripe is ingeschakeld als betalingsgateway, moet je de velden voor **Stripe Publishable Key** en **Stripe Secret Key** invullen. Je kunt deze verkrijgen door in te loggen op je Stripe account.

_**Opmerking:** je kunt **Sandbox mode** activeren om te testen of de betaalmethode werkt._

![Stripe API-sleutelvelden en sandboxmodus-toggle](/img/config/settings-payment-gateways.png)

Klik in je Stripe dashboard op **Developers** in de rechterbovenhoek en daarna op **API Keys** in het linkermenu.

![Stripe dashboard sectie Developers met API Keys](/img/config/settings-payment-gateways.png)

Je kunt **Test Data** gebruiken (om te testen of de integratie op je productiesite werkt), of niet. Om dit te wijzigen, zet je de **Viewing test data**-toggle om.

![Stripe Viewing test data-toggle](/img/config/settings-payment-gateways.png)

Kopieer de waarde van de **Publishable key** en **Secret key** uit de kolom **Token** en plak deze in de velden van Ultimate Multisite Stripe Gateway. Klik daarna op **Save Changes**.

![Waarden van Stripe publishable en secret key](/img/config/settings-payment-gateways.png)

![Stripe-sleutels plakken in Ultimate Multisite-instellingen](/img/config/settings-payment-gateways.png)

## Stripe Webhook instellen {#setting-up-stripe-webhook}

Stripe stuurt webhookgebeurtenissen die Ultimate Multisite melden wanneer er een gebeurtenis plaatsvindt op **je Stripe account**.

Klik op **Developers** en kies daarna het item **Webhooks** in het linkermenu. Klik vervolgens aan de rechterkant op **Add endpoint** *.*

![Stripe Webhooks-pagina met knop Add endpoint](/img/config/settings-payment-gateways.png)

Je hebt een **Endpoint URL** nodig *.* Ultimate Multisite genereert automatisch de endpoint-URL, die je direct onder het veld **Webhook Listener URL** in de sectie **Ultimate Multisite Stripe Gateway** kunt vinden_._

![Veld Webhook Listener URL in instellingen van Stripe-gateway](/img/config/settings-payment-gateways.png)

**Kopieer** de endpoint-URL en **plak** deze in het veld **Endpoint URL** van Stripe.

![Endpoint-URL plakken in Stripe-webhookinstelling](/img/config/settings-payment-gateways.png)

Vervolgens moet je een **Event** selecteren *.* Onder deze optie hoef je alleen maar het vakje **Select all events** aan te vinken en op **Add events** te klikken. Klik daarna op **Add Endpoint** om de wijzigingen op te slaan.

![Alle events selecteren en het Stripe-endpoint toevoegen](/img/config/settings-payment-gateways.png)

Dat is alles, je Stripe-betalingsintegratie is voltooid!
