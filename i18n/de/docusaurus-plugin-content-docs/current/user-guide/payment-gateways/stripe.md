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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-UUtLaJgx7R.png)

### Stripe vs Stripe Checkout:

**Stripe:** Diese Methode zeigt einen Platz, um die Kreditkartennummer während des Checkouts einzugeben.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-k73ZUl1hTW.png)

**Stripe Checkout:** Diese Methode leitet den Kunden während des Checkouts auf eine Stripe Checkout-Seite weiter.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PCZ16DhYrj.png)

**Erhalten Sie Ihre Stripe-API-Schlüssel**

Sobald Stripe als Zahlungsgateway aktiviert ist, müssen Sie die Felder für **Stripe Publishable Key** und **Stripe Secret Key** ausfüllen. Sie erhalten diese, indem Sie sich bei Ihrem Stripe-Konto anmelden.

_**Hinweis:** Sie können den **Sandbox-Modus** aktivieren, um zu testen, ob die Zahlungsmethode funktioniert._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-dhnvBN03ii.png)

Klicken Sie in Ihrem Stripe-Dashboard auf **Developers** in der oberen rechten Ecke und anschließend auf **API Keys** im linken Menü.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-HVqsu1SXuE.png)

Sie können entweder **Testdaten** verwenden (um zu testen, ob die Integration auf Ihrer Produktionsseite funktioniert) oder nicht. Um dies zu ändern, schalten Sie den Schalter **Viewing test data** um.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-kdVC3W8Bsr.png)

Kopieren Sie den Wert aus **Publishable key** und **Secret key** aus der Spalte **Token** und fügen Sie ihn in die Felder des Ultimate Multisite Stripe Gateway ein. Klicken Sie anschließend auf **Save Changes**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-JyAifSGNOn.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-4rFGxkXr1K.png)

## Einrichtung des Stripe Webhooks

Stripe sendet Webhook-Ereignisse, die Ultimate Multisite jedes Mal benachrichtigen, wenn ein Ereignis auf **Ihrem Stripe-Konto** eintritt.

Klicken Sie auf **Developers** und wählen Sie dann im linken Menü den Eintrag **Webhooks**. Klicken Sie anschließend auf der rechten Seite auf **Add endpoint** *.*

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-LmYsdylNdd.png)

Sie benötigen eine **Endpoint URL** *.* Ultimate Multisite generiert die Endpoint-URL automatisch, die Sie direkt unter dem Feld **Webhook Listener URL** im Abschnitt **Ultimate Multisite Stripe Gateway** finden_._

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-sZrCX9OZaw.png)

**Kopieren** Sie die Endpoint-URL und **fügen** Sie sie in das Feld **Endpoint URL** von Stripe ein.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-tMlomo8gx1.png)

Als Nächstes wählen Sie ein **Event** *.* Unter dieser Option müssen Sie einfach das Kästchen **Select all events** aktivieren und auf **Add events** klicken. Danach klicken Sie auf **Add Endpoint**, um die Änderungen zu speichern.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Hv8KzaGMrq.png)

Das war's, Ihre Stripe-Zahlungsintegration ist abgeschlossen!
