---
title: Stripe instellen
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Het opzetten van de Stripe Gateway (v2)

_**BELANGRIJK: Deze artikel verwijst naar Ultimate Multisite versie 2.x.**_

Je kunt tot vier betaalmethoden activeren op onze betaalinstellingenpagina: Stripe, Stripe Checkout, PayPal en Manual. In dit artikel bekijken we hoe je integreert met **Stripe**.

## Stripe inschakelen

Om Stripe als beschikbare betaalgateway op je netwerk in te schakelen, ga je naar **Ultimate Multisite > Settings > Payments** en vink je de schakelaar naast **Stripe** of **Stripe Checkout** aan in het gedeelte Actieve betaalgateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Deze methode toont een ruimte om het creditcardnummer in te voeren tijdens het afrekenen.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Deze methode leidt de klant door naar een Stripe Checkout-pagina tijdens het afrekenen.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

## Je Stripe API-sleutels verkrijgen

Zodra Stripe is ingeschakeld als betaalgateway, moet je de velden voor **Stripe Publishable Key** en **Stripe Secret Key** invullen. Je kunt deze verkrijgen door in te loggen op je Stripe-account.

_**Opmerking:** je kunt **Sandbox mode** activeren om te testen of de betaalmethode werkt._  

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Op je Stripe-dashboard klik je op **Developers** in de rechterbovenhoek, en vervolgens op **API Keys** in het linkermenu.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Je kunt **Test Data** gebruiken (om te testen of de integratie werkt op je productie-site) of niet. Om dit te wijzigen, schakel je de **Viewing test data** schakelaar in.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopieer de waarde van de **Publishable key** en **Secret key** uit de kolom **Token** en plak deze in de velden van de Ultimate Multisite Stripe Gateway. Klik vervolgens op **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook instellen

Stripe verzendt webhook-evenementen die Ultimate Multisite informeren elke keer dat er een gebeurtenis plaatsvindt op **je stripe-account**.

Klik op **Developers** en kies vervolgens het item **Webhooks** in het linkermenu. Klik vervolgens aan de rechterkant op **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Je hebt een **Endpoint URL** *.* Ultimate Multisite genereert automatisch de endpoint-URL die je direct onder het veld **Webhook Listener URL** in het gedeelte **Ultimate Multisite Stripe Gateway** kunt vinden_.

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopieer** de endpoint-URL en **plak** deze in het veld **Endpoint URL** van Stripe.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Vervolgens moet je een **Event** *.* Onder deze optie hoef je alleen maar het vakje **Select all events** aan te vinken en op **Add events** te klikken. Klik daarna op **Add Endpoint** om de wijzigingen op te slaan.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Dat is het, je Stripe-betaalintegratie is voltooid!
