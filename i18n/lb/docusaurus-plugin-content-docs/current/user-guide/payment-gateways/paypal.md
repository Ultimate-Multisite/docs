---
title: PayPal irichte
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal-Gateway Irichte (v2)

_**WICHTIGE NOTIZ: Dä Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

Sie chönne bis zu vier Zahligsmethodene uf de Zahligs-Iistellige-Siite aktiviere: Stripe, Stripe Checkout, PayPal und Manuell. In däm Artikel luege mir, wie mer mit **PayPal** integriere chönd.

Genau wie bi Stripe wird PayPal sehr viel für Online-Zahleige brucht, bsunders uf WordPress-Websites. Dä Artikel wird Sie erkläre, wie Sie PayPal als Zahligsmethode uf Ihrem Netzwerk nutze chönne.

Bitte bemerke Sie, dass Sie es **PayPal Business Account** müend ha, um d'API-Credentials z'becho, wo für die Integration nötig sind.

## PayPal uf Ihrem Netzwerk aktiviere

Um PayPal als verfügbari Zahligsmethode uf Ihrem Netzwerk z'aktiviere, gönd Sie zu **Ultimate Multisite > Settings > Payments** und setze de Hake bi PayPal.

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## De geführte Setup-Wizard bruche

Ultimate Multisite 2.10.0 füegt en gefüehrti PayPal Setup-Wizard zu de Zahligs-Gateway-Iistellige bi. Nachdem Sie PayPal aktiviert händ, bruuche Sie de Wizard uf **Ultimate Multisite > Settings > Payments**, um z'wähle, wie Sie d'Gateway verbinde wend und z'bestätige, welchi Credentials no nötig sind, bevor Sie speichere.

De Wizard unterstützt zwei Setup-Wäg:

* **Manuelle Benutzerangabe**: Verwende dä Pfad, wenn Sie scho PayPal API Credentials hend, wenn d OAuth-Iistellig für Ihr Konto nöd verfügbar isch, oder wenn Sie d Credentials selber vo PayPal kopiere wend. Gib de API Username, API Password und API Signature i de PayPal-Feld ii und speich d Zahligseinstellige.
* **OAuth-Verbindigsgate**: Verwende dä Pfad nur, wenn d OAuth-Option für Ihr Installierti verfügbar und aktiviert isch. De Wizard zeigt de OAuth-Flow hinter eme Feature Flag a, drum bruched Netzwerch ohni s Flag wiiterhin d Felder für manuelli Benutzerangabe.

Wenn Sie d OAuth-Option im Wizard nöd gsehnd, vervollständige Sie de manuelle Benutzerangabefluss unde. De Gateway funktioniert mit de gliiche PayPal Business API Credentials wie bi früehere Ultimate Multisite 2.x Versionen.

## PayPal API Credentials finde

Sobald PayPal als Zahligsgate aktiviert isch, müend Sie d Felder für de PayPal API **Username**, de PayPal API **Password** und d PayPal API **Signature** usfüllä.

Sie chönd das mache, indem Sie sich i Ihr PayPal [Live](https://www.paypal.com/home) oder [Sandbox](https://www.sandbox.paypal.com/home) Konto iilogge.

(Erinneret Sie sich dra, dass Sie de **Sandbox-Modus** chönd bruche, um Zahlige z'teste und z'gseh, öb de Gateway richtig igstellt isch. Schalte eifach de entsprechende Abschnitt ii.)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Um d API Signature oder Zertifikat Credentials für Ihr PayPal Konto aazfordere:

  1. Gehe zu Ihre [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess).

  2. Im Abschnitt **API access** klicke Sie auf **Update**.

3. Unter **NVP/SOAP API Integration (Classic)** klickt me uf **Manage API credentials**.
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * Wenn Sie scho e API Signature oder en Zertifikat generiert händ, wärde Sie uf e Seite umgleitet, wo Sie Ihre Credentials finde chönd.

     * _**Hinweis:** Falls Sie gfrogt wärde, Ihr PayPal-Konto z'verifiziere, folge bitte de Anwiesige uf em Bildschirm._

  4. Wähle _e_ vo de folgende Option us und klickt uf **Agree and Submit**.

     * **Request API Signature** – Wähle das für API Signature Authentifizierig.

     * **Request API Certificate** – Wähle das für API Zertifikat Authentifizierig.

  5. PayPal generiert Ihre API Credentials wie folgt:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature Credentials** enthalte en API Username, en API Password und e Signature, wo nöd abläuft. Die Wärt sind standardmässig versteckt für meh Sicherheit. Klickt uf **Show/Hide**, um sie i- und uszschalte. Wenn Sie fertig sind, klickt uf **Done**.

     * **API Certificate Credentials** enthalte en API Username, en API Password und es Zertifikat, wo automatisch nach drei Jahr abläuft. Klickt uf **Download Certificate**, um s'API Zertifikat uf Ihrem Desktop z'speichere.

Das isch alles! Ihre PayPal Zahlungs-Integration isch fertig!

Falls Sie Froge zu de PayPal Iistellige händ, chönd Sie sich an de [Help Center](https://www.paypal.com/br/smarthelp/home) vo PayPal wende.
