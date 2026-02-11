---
title: PayPal einrichten
sidebar_position: 10
_i18n_hash: 1744fb066b8291440fd7fb554aa8e2d9
---
# Einrichtung des PayPal-Gateways (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Sie können bis zu vier Zahlungsmethoden auf unserer Zahlungs‑Einstellungsseite aktivieren: Stripe, Stripe Checkout, PayPal und Manual. In diesem Artikel zeigen wir, wie Sie mit **PayPal** integrieren.

Ähnlich wie Stripe wird PayPal häufig für Online‑Zahlungen verwendet, insbesondere auf WordPress‑Websites. Dieser Artikel zeigt Ihnen, wie Sie PayPal als Zahlungsmethode in Ihrem Netzwerk verfügbar machen.

Beachten Sie, dass Sie ein **PayPal Business‑Konto** benötigen, um die für diese Integration benötigten API‑Anmeldeinformationen zu erhalten.

## PayPal in Ihrem Netzwerk aktivieren

Um PayPal als verfügbare Zahlungsmethode in Ihrem Netzwerk zu aktivieren, gehen Sie zum Tab **Ultimate Multisite > Settings > Payments** und aktivieren Sie das Kästchen neben PayPal.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FhlfHHJLPl.png)

## PayPal API‑Anmeldeinformationen erhalten

Sobald PayPal als Zahlungsgateway aktiviert ist, müssen Sie die Felder für PayPal API **Username**, PayPal API **Password** und PayPal API **Signature** ausfüllen.

Sie können diese erhalten, indem Sie sich bei Ihrem PayPal [Live](https://www.paypal.com/home) oder [Sandbox](https://www.sandbox.paypal.com/home) Konto anmelden.

(Denken Sie daran, dass Sie den **Sandbox‑Modus** verwenden können, um Zahlungen zu testen und zu prüfen, ob das Gateway korrekt eingerichtet ist. Schalten Sie einfach die entsprechende Sektion ein.)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-PgTatIgsIm.png)

Um API‑Signatur‑ oder Zertifikatsanmeldeinformationen für Ihr PayPal‑Konto anzufordern:

1. Gehen Sie zu Ihren [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).
2. Im Abschnitt **API access** klicken Sie auf **Update**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Dx72ARoKzx.png)
3. Unter **NVP/SOAP API integration (Classic)** klicken Sie auf **Manage API credentials**.  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mUoIzsfpMq.png)

   * Wenn Sie bereits eine API‑Signatur oder ein Zertifikat generiert haben, werden Sie zu einer Seite weitergeleitet, auf der Sie Ihre Anmeldeinformationen finden.
   * _**Hinweis:** Wenn Sie aufgefordert werden, Ihr PayPal‑Konto zu verifizieren, folgen Sie bitte den Anweisungen auf dem Bildschirm._

4. Wählen Sie _eine_ der folgenden Optionen aus und klicken Sie dann auf **Agree and Submit**.

   * **Request API Signature** – Wählen Sie für die API‑Signatur‑Authentifizierung.
   * **Request API Certificate** – Wählen Sie für die API‑Zertifikats‑Authentifizierung.

5. PayPal generiert Ihre API‑Anmeldeinformationen wie folgt:  
![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-utEMaS5roo.png)

   * **API Signature credentials** enthalten einen API‑Username, ein API‑Password und eine Signature, die nicht abläuft. Diese Werte sind standardmäßig aus Sicherheitsgründen ausgeblendet. Klicken Sie auf **Show/Hide**, um sie ein- oder auszublenden. Wenn Sie fertig sind, klicken Sie auf **Done**.
   * **API Certificate credentials** enthalten einen API‑Username, ein API‑Password und ein Zertifikat, das automatisch nach drei Jahren abläuft. Klicken Sie auf **Download Certificate**, um das API‑Zertifikat auf Ihren Desktop zu speichern.

Das war's, Ihre PayPal‑Zahlungsintegration ist abgeschlossen!

Wenn Sie Fragen zu den PayPal‑Einstellungen haben, können Sie sich an das [Help Center](https://www.paypal.com/br/smarthelp/home) von PayPal wenden.
