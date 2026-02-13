---
title: Stripe einrichten
sidebar_position: 6
_i18n_hash: 44043734d0965a10c4e4b848dfed3f0b
---
# Einrichtung des Stripe-Gateways (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Sie können bis zu vier Zahlungsmethoden auf unserer Zahlungs-Einstellungsseite aktivieren: Stripe, Stripe Checkout, PayPal und Manual. In diesem Artikel zeigen wir, wie man mit **Stripe** integriert.

## Stripe aktivieren

Um Stripe als verfügbares Zahlungsgateway in Ihrem Netzwerk zu aktivieren, gehen Sie zu **Ultimate Multisite > Settings > Payments** und aktivieren Sie den Schalter neben **Stripe** oder **Stripe Checkout** im Abschnitt Aktive Zahlungsgateways.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Diese Methode zeigt einen Platz, um die Kreditkartennummer während des Checkouts einzugeben.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Diese Methode leitet den Kunden während des Checkouts auf eine Stripe Checkout-Seite weiter.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

**Erhalten Sie Ihre Stripe-API-Schlüssel**

Sobald Stripe als Zahlungsgateway aktiviert ist, müssen Sie die Felder für **Stripe Publishable Key** und **Stripe Secret Key** ausfüllen. Sie erhalten diese, indem Sie sich bei Ihrem Stripe-Konto anmelden.

_**Hinweis:** Sie können den **Sandbox-Modus** aktivieren, um zu testen, ob die Zahlungsmethode funktioniert._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Klicken Sie in Ihrem Stripe-Dashboard auf **Developers** in der oberen rechten Ecke und anschließend auf **API Keys** im linken Menü.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Sie können entweder **Testdaten** verwenden (um zu testen, ob die Integration auf Ihrer Produktionsseite funktioniert) oder nicht. Um dies zu ändern, schalten Sie den Schalter **Viewing test data** um.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopieren Sie den Wert aus **Publishable key** und **Secret key** aus der Spalte **Token** und fügen Sie ihn in die Felder des Ultimate Multisite Stripe Gateway ein. Klicken Sie anschließend auf **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Einrichtung des Stripe Webhooks

Stripe sendet Webhook-Ereignisse, die Ultimate Multisite jedes Mal benachrichtigen, wenn ein Ereignis auf **Ihrem Stripe-Konto** eintritt.

Klicken Sie auf **Developers** und wählen Sie dann im linken Menü den Eintrag **Webhooks**. Klicken Sie anschließend auf der rechten Seite auf **Add endpoint** *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Sie benötigen eine **Endpoint URL** *.* Ultimate Multisite generiert die Endpoint-URL automatisch, die Sie direkt unter dem Feld **Webhook Listener URL** im Abschnitt **Ultimate Multisite Stripe Gateway** finden_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopieren** Sie die Endpoint-URL und **fügen** Sie sie in das Feld **Endpoint URL** von Stripe ein.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Als Nächstes wählen Sie ein **Event** *.* Unter dieser Option müssen Sie einfach das Kästchen **Select all events** aktivieren und auf **Add events** klicken. Danach klicken Sie auf **Add Endpoint**, um die Änderungen zu speichern.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Das war's, Ihre Stripe-Zahlungsintegration ist abgeschlossen!
