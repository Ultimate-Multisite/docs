---
title: Stripe einrichten
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Einrichten des Stripe Gateway (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Du kannst auf unserer Seite mit den Zahlungseinstellungen bis zu vier Zahlungsmethoden aktivieren: Stripe, Stripe Checkout, PayPal und Manuell. In diesem Artikel sehen wir uns an, wie die Integration mit **Stripe** funktioniert.

## Stripe aktivieren {#enabling-stripe}

Um Stripe als verfügbares Payment Gateway in deinem Netzwerk zu aktivieren, gehe zu **Ultimate Multisite > Settings > Payments** und aktiviere den Schalter neben **Stripe** oder **Stripe Checkout** im Abschnitt Active Payment Gateways.

![Stripe in aktiven Payment Gateways aktivieren](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Diese Methode zeigt während des Checkout ein Feld zur Eingabe der Kreditkartennummer an.

![Inline-Kreditkartenfeld von Stripe während des Checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Diese Methode leitet den Kunden während des Checkout auf eine Stripe Checkout-Seite weiter.

![Weiterleitungsseite von Stripe Checkout während des Checkout](/img/config/settings-payment-gateways.png)

Deine Stripe API-Schlüssel abrufen

Sobald Stripe als Payment Gateway aktiviert ist, musst du die Felder für **Stripe Publishable Key** und **Stripe Secret Key** ausfüllen. Diese erhältst du, indem du dich in deinem Stripe Account anmeldest.

_**Hinweis:** Du kannst den **Sandbox-Modus** aktivieren, um zu testen, ob die Zahlungsmethode funktioniert._

![Stripe API-Schlüsselfelder und Sandbox-Modus-Schalter](/img/config/settings-payment-gateways.png)

Klicke in deinem Stripe Dashboard oben rechts auf **Developers** und dann im linken Menü auf **API Keys**.

![Stripe Dashboard-Bereich Developers mit API Keys](/img/config/settings-payment-gateways.png)

Du kannst entweder **Test Data** verwenden (um zu testen, ob die Integration auf deiner Produktions-Website funktioniert) oder nicht. Um dies zu ändern, betätige den Schalter **Viewing test data**.

![Stripe-Schalter Viewing test data](/img/config/settings-payment-gateways.png)

Kopiere den Wert aus **Publishable key** und **Secret key** aus der Spalte **Token** und füge ihn in die Ultimate Multisite Stripe Gateway-Felder ein. Klicke anschließend auf **Save Changes**.

![Werte für Publishable Key und Secret Key von Stripe](/img/config/settings-payment-gateways.png)

![Stripe-Schlüssel in die Ultimate Multisite-Einstellungen einfügen](/img/config/settings-payment-gateways.png)

## Stripe Webhook einrichten {#setting-up-stripe-webhook}

Stripe sendet Webhook-Ereignisse, die Ultimate Multisite benachrichtigen, sobald ein Ereignis in **deinem Stripe Account** auftritt.

Klicke auf **Developers** und wähle dann im linken Menü den Eintrag **Webhooks**. Klicke anschließend rechts auf **Add endpoint** *.*

![Stripe Webhooks-Seite mit Add endpoint-Button](/img/config/settings-payment-gateways.png)

Du benötigst eine **Endpoint URL** *.* Ultimate Multisite generiert die Endpoint-URL automatisch, die du direkt unter dem Feld **Webhook Listener URL** im Abschnitt **Ultimate Multisite Stripe Gateway** findest_._

![Webhook Listener URL-Feld in den Stripe Gateway-Einstellungen](/img/config/settings-payment-gateways.png)

**Kopiere** die Endpoint-URL und **füge** sie in das Stripe-Feld **Endpoint URL** ein.

![Endpoint-URL in die Stripe Webhook-Einrichtung einfügen](/img/config/settings-payment-gateways.png)

Als Nächstes musst du ein **Event** auswählen *.* Unter dieser Option musst du einfach das Kästchen **Select all events** markieren und auf **Add events** klicken. Klicke danach auf **Add Endpoint**, um die Änderungen zu speichern.

![Alle Ereignisse auswählen und den Stripe Endpoint hinzufügen](/img/config/settings-payment-gateways.png)

Das war’s, deine Stripe-Zahlungsintegration ist abgeschlossen!
