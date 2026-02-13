---
title: Der Registrierungsablauf
sidebar_position: 3
_i18n_hash: 3e38d2f50683a422650956e5a3b0dff9
---
# Der Registrierungsfluss (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Benutzer können sich auf verschiedene Weise in Ihrem Netzwerk registrieren. Sie können Ihr Registrierungsformular oder einen teilbaren Link zu einem vorab ausgewählten Plan verwenden. Hier zeigen wir Ihnen, wie Ihre Kunden sich in Ihrem Netzwerk registrieren können, welche Pfade verfügbar sind und was passiert, nachdem sie sich registriert haben.

## Verwendung des Registrierungsformulars:

Dies ist der Standardregistrierungsprozess. Sie erstellen eine Registrierungsseite mit einem **Checkout-Formular**, und dort werden Ihre Kunden sich in Ihrem Netzwerk registrieren und ein Plan abonnieren. Sie können mehrere Registrierungsseiten haben, jede mit einem anderen Registrierungsformular, wenn Sie möchten.

Die Standardseite für die Registrierung ist [_**yourdomain.com/register**_](http://yourdomain.com/register), aber Sie können diese jederzeit unter **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** ändern.

Nachdem ein Benutzer Ihre Registrierungsseite erreicht hat (normalerweise durch Klicken auf einen **Sign in**- oder **Buy now**-Button), wird er Ihr Registrierungsformular dort sehen.

![Registration form displayed on the registration page](/img/config/checkout-forms-list.png)

Alles, was sie tun müssen, ist, alle Pflichtfelder auszufüllen – E‑Mail, Benutzername, Passwort usw. – und für den Plan zu bezahlen oder ihre E‑Mail-Adresse zu bestätigen, wenn sie sich für einen kostenlosen Plan oder einen kostenpflichtigen Plan mit Testphase ohne Zahlungsinformationen registrieren.

Auf der Seite „Thank you“ sehen sie eine Nachricht, die ihnen mitteilt, ob sie ihre E‑Mail-Adresse bestätigen müssen oder ob ihre Website bereits aktiviert ist und sie sie nutzen können.

![Thank You page after registration](/img/config/checkout-form-editor.png)

Wenn eine Bestätigung der E‑Mail-Adresse erforderlich ist, müssen sie in ihren Posteingang gehen und auf den Verifizierungslink klicken. Ihre Website wird nicht aktiviert, wenn ihre E‑Mail-Adresse nicht verifiziert wird.

Wenn sie sich für einen kostenpflichtigen Plan registriert haben oder die E‑Mail-Verifizierung in Ihrem Netzwerk nicht zwingend ist, wird ihre Website sofort nach dem Checkout aktiviert und ihnen wird ein Link zum Einloggen in ihr Dashboard angezeigt.

![Site activated with link to sign in to dashboard](/img/config/checkout-form-editor.png)

## Verwendung eines teilbaren Links:

Der Registrierungsprozess mit einem teilbaren Link ist im Grunde identisch mit dem Registrierungsformular; der einzige Unterschied besteht darin, dass Ihre Kunden mit einem teilbaren Link ein Produkt oder eine Website-Vorlage bereits vorab im Checkout-Formular ausgewählt haben können (siehe Abschnitt „Pre-selecting products and templates via URL parameters“) oder vielleicht einen Gutscheincode hinzugefügt haben (siehe Abschnitt „Using URL Parameters“).

Der Registrierungsprozess bleibt gleich: Sie müssen ihren Namen, Benutzernamen, E‑Mail-Adresse, Website-Namen und Titel usw. ausfüllen, aber der Plan oder die Website-Vorlage wird bereits für sie vorab ausgewählt sein.

### Registrierung mit manuellen Zahlungen:

Wenn Sie PayPal, Stripe oder ein anderes von Ultimate Multisite oder seinen Add‑On-Integrationen angebotenes Zahlungsgateway nicht nutzen möchten, können Sie manuelle Zahlungen für Ihre Kunden verwenden. Auf diese Weise können Sie eine Rechnung erstellen, die sie nach ihrer Registrierung in Ihrem Netzwerk bei Ihrem bevorzugten Zahlungsanbieter begleichen.

Der Registrierungsprozess ist genau wie oben beschrieben, aber auf der Registrierungsseite sehen Ihre Kunden eine Nachricht, die besagt, dass sie eine E‑Mail mit weiteren Anweisungen zum Abschluss der Zahlung erhalten werden.

![Manual payment message during registration](/img/config/settings-payment-gateways.png)

Und nachdem die Registrierung abgeschlossen ist, sehen sie die von Ihnen festgelegten Zahlungsanweisungen (und erhalten diese auch per E‑Mail).

![Payment instructions shown after registration](/img/config/settings-payment-gateways.png)

Die Zahlungsanweisungen können unter **Ultimate Multisite > Settings > Payments** geändert werden, nachdem Sie die Option **Manual** aktiviert haben:

![Manual payment toggle with payment instructions field](/img/config/settings-payment-gateways.png)

Nachdem Ihre Kunden die manuelle Zahlung abgeschlossen und Ihnen die Bestätigung gesendet haben, müssen Sie die Zahlung **manuell bestätigen**, um die Mitgliedschaft und die Website des Kunden zu aktivieren.

Dazu gehen Sie zu **Ultimate Multisite > Payments** und suchen die Zahlung des Kunden. Sie sollte noch den Status **Pending** anzeigen.

![Payments list with pending manual payment](/img/admin/payments-list.png)

Klicken Sie auf die Zahlungsnummer und Sie können den Status auf **Completed** ändern.

![Payment details page](/img/admin/payments-list.png)

![Changing payment status to Completed](/img/admin/payments-list.png)

Nachdem Sie den Status auf **Completed** geändert haben, sollten Sie eine **Activate membership**-Nachricht sehen. Schalten Sie diese Option **ein**, um die Mitgliedschaft und die Website, die diesem Kunden zugeordnet ist, zu aktivieren. Klicken Sie anschließend auf **Save Payment**.

![Activate membership toggle and Save Payment button](/img/admin/payments-list.png)

Ihr Kunde sollte nun in der Lage sein, auf das Dashboard und alle Funktionen zuzugreifen, die er abonniert hat.
