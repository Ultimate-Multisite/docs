---
title: PayPal einrichten
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# Einrichtung des PayPal-Gateways (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Sie können auf unserer Seite für Zahlungseinstellungen bis zu vier Zahlungsmethoden aktivieren: Stripe, Stripe Checkout, PayPal und Manuell. In diesem Artikel sehen wir uns an, wie Sie **PayPal** integrieren.

Genau wie Stripe wird PayPal häufig für Online-Zahlungen verwendet, insbesondere auf WordPress-Websites. Dieser Artikel zeigt Ihnen, wie Sie PayPal als Zahlungsmethode verwenden, die in Ihrem Netzwerk verfügbar ist.

Beachten Sie, dass Sie ein **PayPal Business Account** benötigen, um die für diese Integration erforderlichen API-Zugangsdaten zu erhalten.

## PayPal in Ihrem Netzwerk aktivieren

Um PayPal als verfügbare Zahlungsmethode in Ihrem Netzwerk zu aktivieren, gehen Sie zum Tab **Ultimate Multisite > Einstellungen > Zahlungen** und aktivieren Sie das Kontrollkästchen neben PayPal.

![PayPal in aktiven Zahlungsgateways aktivieren](/img/config/settings-payment-gateways.png)

## Den geführten Einrichtungsassistenten verwenden

Ultimate Multisite 2.10.0 fügt den Zahlungsgateway-Einstellungen einen geführten PayPal-Einrichtungsassistenten hinzu. Nachdem Sie PayPal aktiviert haben, verwenden Sie den Assistenten unter **Ultimate Multisite > Einstellungen > Zahlungen**, um auszuwählen, wie Sie das Gateway verbinden möchten, und zu bestätigen, welche Zugangsdaten vor dem Speichern noch benötigt werden.

Der Assistent unterstützt zwei Einrichtungswege:

* **Manuelle Eingabe der Zugangsdaten**: Verwenden Sie diesen Weg, wenn Sie bereits PayPal-API-Zugangsdaten haben, wenn die OAuth-Einrichtung für Ihr Account nicht verfügbar ist oder wenn Sie die Zugangsdaten lieber selbst aus PayPal kopieren möchten. Geben Sie API Username, API Password und API Signature in die PayPal-Felder ein und speichern Sie dann die Zahlungseinstellungen.
* **OAuth-Verbindungstor**: Verwenden Sie diesen Weg nur, wenn die OAuth-Option verfügbar und für Ihre Installation aktiviert ist. Der Assistent zeigt den OAuth-Ablauf hinter einem Feature-Flag an, sodass Netzwerke ohne das Flag weiterhin die Felder für die manuelle Eingabe der Zugangsdaten verwenden.

Wenn Sie die OAuth-Option im Assistenten nicht sehen, schließen Sie den unten beschriebenen Ablauf zur manuellen Eingabe der Zugangsdaten ab. Das Gateway funktioniert mit denselben PayPal Business API-Zugangsdaten wie frühere Ultimate Multisite 2.x-Versionen.

## Die PayPal-API-Zugangsdaten erhalten

Sobald PayPal als Zahlungsgateway aktiviert ist, müssen Sie die Felder für PayPal API **Username** , PayPal API **Password** und PayPal API **Signature** ausfüllen.

Sie erhalten diese, indem Sie sich bei Ihrem PayPal-[Live](https://www.paypal.com/home)- oder [Sandbox](https://www.sandbox.paypal.com/home)-Account anmelden.

(Denken Sie daran, dass Sie den **Sandbox-Modus** verwenden können, um Zahlungen zu testen und zu prüfen, ob das Gateway korrekt eingerichtet ist. Aktivieren Sie einfach den entsprechenden Abschnitt.)

![Felder für PayPal-API-Zugangsdaten und Umschalter für den Sandbox-Modus](/img/config/settings-payment-gateways.png)

So fordern Sie API Signature- oder Certificate-Zugangsdaten für Ihr PayPal-Account an:

  1. Gehen Sie zu Ihren [Account-Einstellungen](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Klicken Sie im Abschnitt **API-Zugriff** auf **Aktualisieren**.
![PayPal Account-Einstellungen mit Abschnitt für API-Zugriff](/img/config/settings-payment-gateways.png)

  3. Klicken Sie unter **NVP/SOAP-API-Integration (klassisch)** auf **API-Zugangsdaten verwalten**.
![PayPal NVP/SOAP-API-Integration API-Zugangsdaten verwalten](/img/config/settings-payment-gateways.png)

     * Wenn Sie bereits eine API Signature oder ein Certificate generiert haben, werden Sie zu einer Seite weitergeleitet, auf der Sie Ihre Zugangsdaten finden.

     * _**Hinweis:** Wenn Sie aufgefordert werden, Ihr PayPal-Account zu verifizieren, folgen Sie den Anweisungen auf dem Bildschirm._

  4. Wählen Sie _eine_ der folgenden Optionen aus und klicken Sie dann auf **Zustimmen und absenden**.

     * **API Signature anfordern** – Für API Signature-Authentifizierung auswählen.

     * **API Certificate anfordern** – Für API Certificate-Authentifizierung auswählen.

  5. PayPal generiert Ihre API-Zugangsdaten wie folgt:
![Von PayPal generierte API-Zugangsdaten](/img/config/settings-payment-gateways.png)

     * **API Signature-Zugangsdaten** enthalten API Username, API Password und Signature, die nicht abläuft. Diese Werte sind standardmäßig aus Sicherheitsgründen ausgeblendet. Klicken Sie auf **Anzeigen/Ausblenden**, um sie ein- und auszublenden. Wenn Sie fertig sind, klicken Sie auf **Fertig**.

     * **API Certificate-Zugangsdaten** enthalten API Username, API Password und Certificate, das nach drei Jahren automatisch abläuft. Klicken Sie auf **Zertifikat herunterladen**, um das API Certificate auf Ihrem Desktop zu speichern.

Das war’s, Ihre PayPal-Zahlungsintegration ist abgeschlossen!

Wenn Sie Fragen zu PayPal-Einstellungen haben, können Sie das [Help Center](https://www.paypal.com/br/smarthelp/home) von PayPal aufrufen.
