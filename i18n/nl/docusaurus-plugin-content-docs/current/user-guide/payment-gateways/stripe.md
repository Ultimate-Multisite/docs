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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Deze methode toont een ruimte om het creditcardnummer in te voeren tijdens het afrekenen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Deze methode leidt de klant door naar een Stripe Checkout-pagina tijdens het afrekenen.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

## Je Stripe API-sleutels verkrijgen

Zodra Stripe is ingeschakeld als betaalgateway, moet je de velden voor **Stripe Publishable Key** en **Stripe Secret Key** invullen. Je kunt deze verkrijgen door in te loggen op je Stripe-account.

_**Opmerking:** je kunt **Sandbox mode** activeren om te testen of de betaalmethode werkt._  

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Op je Stripe-dashboard klik je op **Developers** in de rechterbovenhoek, en vervolgens op **API Keys** in het linkermenu.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Je kunt **Test Data** gebruiken (om te testen of de integratie werkt op je productie-site) of niet. Om dit te wijzigen, schakel je de **Viewing test data** schakelaar in.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Kopieer de waarde van de **Publishable key** en **Secret key** uit de kolom **Token** en plak deze in de velden van de Ultimate Multisite Stripe Gateway. Klik vervolgens op **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Stripe Webhook instellen

Stripe verzendt webhook-evenementen die Ultimate Multisite informeren elke keer dat er een gebeurtenis plaatsvindt op **je stripe-account**.

Klik op **Developers** en kies vervolgens het item **Webhooks** in het linkermenu. Klik vervolgens aan de rechterkant op **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Je hebt een **Endpoint URL** *.* Ultimate Multisite genereert automatisch de endpoint-URL die je direct onder het veld **Webhook Listener URL** in het gedeelte **Ultimate Multisite Stripe Gateway** kunt vinden_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Kopieer** de endpoint-URL en **plak** deze in het veld **Endpoint URL** van Stripe.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Vervolgens moet je een **Event** *.* Onder deze optie hoef je alleen maar het vakje **Select all events** aan te vinken en op **Add events** te klikken. Klik daarna op **Add Endpoint** om de wijzigingen op te slaan.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

Dat is het, je Stripe-betaalintegratie is voltooid!
