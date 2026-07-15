---
title: Stripe iistelle
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Inrichte de Stripe Gateway (v2)

_**WICHTIGE NOTIERE: Dëse Artikel bezieht sich uf Ultimate Multisite version 2.x.**_

Dir chönnt bis zu vier Zahlamethoden uf de Pagé "Payment Settings" aktiveren: Stripe, Stripe Checkout, PayPal und Manuell. In dësem Artikel gsehnd mir, wéi mer mit **Stripe** integriert.

## Stripe aktiveren {#enabling-stripe}

Um Stripe als verfügbare Zahlamethode uf irem Netz z'aktiveren, gaet op **Ultimate Multisite > Settings > Payments** und setz de Schalter neche **Stripe** oder **Stripe Checkout** im Abschnitt "Active Payment Gateways" a.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Dëse Methode wäert en Platz zezeig, wou d'Kreditkardnummer i de Checkout iifloessen kann.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Dëse Methode leitet de Kunde uf e Stripe Checkout Pagé wiit, wéi er d'Checkout macht.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

Ihre Stripe API-Schlüchli überchoen

Echmol wann Stripe als Zahlamethode aktiveret isch, müesse Dir d'Feld für de **Stripe Publishable Key** und de **Stripe Secret Key** usfüllen. Dir chönnt die über d'Ilogi in Irem Stripe-Konto überchoen.

_**Notiz:** Dir chönnt **Sandbox mode** aktiveren, um z'prüefe, ob d'Zahlamethode funktioniert._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

U Ihrer Stripe Dashboard klickt op **Developers** i de obe rechts Ecke und denn uf **API Keys** i de linki Menü.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Sie chönne entweder **Testdaten** bruche (om z'prüefe, ob d'Integration uf Ihrer Produktionssite funktioniert) oder nöd. Um das z'ändere, schalte de Schalter **Viewing test data** um.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopiere de Wert us em Feld **Publishable key** und **Secret key**, us de Spalte **Token**, und füeg ihn i d'Feld vo Ultimate Multisite Stripe Gateway ii. Denn klicke Sie uf **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook iistelle {#setting-up-stripe-webhook}

Stripe schickt webhook-Events, wo Ultimate Multisite informiere, sobald öppis uf **Ihrem stripe-Konto** passiert.

Klicke uf **Developers** und wähle denn de Punkt **Webhooks** im linke Menü us. Denn klicke Sie uf de rechte Siite uf **Add endpoint** *.

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Sie bruche en **Endpoint URL** *. Ultimate Multisite generiert automatisch de Endpoint URL, wo Sie direkt unter em Feld **Webhook Listener URL** im Abschnitt **Ultimate Multisite Stripe Gateway** finde chönne._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopiere** Sie de Endpoint URL und **füege** Sie ihn i s'Feld **Endpoint URL** vo Stripe ii.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Nächst mues Sie en **Event** wähle *. Unter dere Option müesse Sie eifach de Hake bi **Select all events** aaschalte und uf **Add events** klicke. Danach klicke Sie uf **Add Endpoint**, um d'Änderige z'speichere.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Dat isch es! Dini Stripe Payment Integration isch fertig!
