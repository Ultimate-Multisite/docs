---
title: Der Registrierungsablauf
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# Der Registrierungsablauf (v2) {#the-registration-flow-v2}

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Benutzer können sich auf verschiedene Weise in deinem Netzwerk registrieren. Sie können dein Registrierungsformular oder einen teilbaren Link zu einem vorausgewählten Tarif verwenden. Hier zeigen wir dir, wie sich deine Kunden über die verfügbaren Wege in deinem Netzwerk registrieren können und was passiert, nachdem sie sich in deinem Netzwerk registriert haben.

## Verwendung des Registrierungsformulars: {#using-the-registration-form}

Dies ist der standardmäßige Registrierungsprozess. Du erstellst eine Registrierungsseite mit einem **Checkout-Formular**, und dort werden deine Kunden sich in deinem Netzwerk registrieren und einen Tarif abonnieren. Du kannst mehrere Registrierungsseiten haben, jeweils mit einem anderen Registrierungsformular, wenn du möchtest.

Die Standardseite für die Registrierung ist [_**yourdomain.com/register**_](http://yourdomain.com/register), aber du kannst dies jederzeit unter **Ultimate Multisite > Einstellungen > Anmeldung & Registrierung > Standard-Registrierungsseite** ändern.

Nachdem ein Benutzer auf deine Registrierungsseite gelangt ist (normalerweise durch Klicken auf einen **Anmelden**- oder **Jetzt kaufen**-Button), sieht er dort dein Registrierungsformular.

![Registrierungsformular, das auf der Registrierungsseite angezeigt wird](/img/frontend/registration-form.png)

Hier ist ein Beispiel für das Checkout-Formular, wie es im Frontend erscheint:

![Frontend-Checkout-Registrierungsformular](/img/config/checkout-frontend-registration.png)

Alles, was sie tun müssen, ist, alle Pflichtfelder auszufüllen – E-Mail, Benutzername, Passwort usw. – und für den Tarif zu bezahlen oder ihre E-Mail-Adresse zu bestätigen, wenn sie sich für einen kostenlosen Tarif oder einen kostenpflichtigen Tarif mit Testzeitraum ohne Zahlungsinformationen registrieren.

Auf der „Danke“-Seite sehen sie eine Nachricht, die ihnen mitteilt, ob sie ihre E-Mail-Adresse bestätigen müssen oder ob ihre Website bereits aktiviert ist und sie mit der Nutzung beginnen können.

![Danke-Seite nach der Registrierung](/img/frontend/registration-thank-you.png)

Wenn eine Bestätigung der E-Mail-Adresse erforderlich ist, müssen sie in ihren E-Mail-Posteingang gehen und auf den Verifizierungslink klicken. Ihre Website wird nicht aktiviert, wenn ihre E-Mail-Adresse nicht verifiziert wird.

Wenn sie sich für einen kostenpflichtigen Tarif registriert haben oder die E-Mail-Verifizierung in deinem Netzwerk nicht verpflichtend ist, wird ihre Website direkt nach dem Checkout aktiviert, und ihnen wird ein Link angezeigt, über den sie sich in ihrem Dashboard anmelden können.

![Website aktiviert mit Link zur Anmeldung im Dashboard](/img/frontend/site-activated.png)

## Verwendung eines teilbaren Links: {#using-a-shareable-link}

Der Prozess der Registrierung über einen teilbaren Link ist im Grunde derselbe wie beim Registrierungsformular. Der einzige Unterschied besteht darin, dass deine Kunden bei Verwendung eines teilbaren Links ein Produkt oder eine Website-Vorlage im Checkout-Formular vorausgewählt haben können (siehe Abschnitt Vorauswahl von Produkten und Vorlagen über URL-Parameter) oder vielleicht ein Gutscheincode hinzugefügt wurde (siehe Abschnitt Verwendung von URL-Parametern).

Der Registrierungsprozess bleibt derselbe: Sie müssen ihren Namen, Benutzernamen, ihre E-Mail-Adresse, den Website-Namen und -Titel usw. ausfüllen, aber der Tarif oder die Website-Vorlage ist für sie bereits vorausgewählt.

### Registrierung mit manuellen Zahlungen: {#registering-using-manual-payments}

Wenn du PayPal, Stripe oder ein anderes von Ultimate Multisite oder seinen Add-on-Integrationen angebotenes Zahlungsgateway nicht verwenden möchtest, kannst du manuelle Zahlungen für deine Kunden nutzen. Auf diese Weise kannst du eine Rechnung für sie erstellen, die sie nach der Registrierung in deinem Netzwerk über deinen bevorzugten Zahlungsanbieter bezahlen.

Der Registrierungsprozess ist genau derselbe wie oben, aber auf der Registrierungsseite sehen deine Kunden eine Nachricht, dass sie eine E-Mail mit weiteren Anweisungen erhalten, um die Zahlung abzuschließen.

![Nachricht zur manuellen Zahlung während der Registrierung](/img/frontend/registration-manual-notice.png)

Und nachdem die Registrierung abgeschlossen ist, sehen sie die Zahlungsanweisungen, die du festgelegt hast (und erhalten sie auch per E-Mail).

![Nach der Registrierung angezeigte Zahlungsanweisungen](/img/frontend/registration-payment-instructions.png)

Die Zahlungsanweisungen können unter **Ultimate Multisite > Einstellungen > Zahlungen** geändert werden, nachdem die Zahlungsoption **Manuell** aktiviert wurde:

![Schalter für manuelle Zahlung mit Feld für Zahlungsanweisungen](/img/config/manual-gateway-settings.png)

Nachdem deine Kunden die manuelle Zahlung abgeschlossen und dir die Bestätigung gesendet haben, musst du die **Zahlung manuell bestätigen**, um die Kundenmitgliedschaft und Website zu aktivieren.

Gehe dazu zu **Ultimate Multisite > Zahlungen** und suche die Kundenzahlung. Sie sollte weiterhin den Status **Ausstehend** anzeigen.

![Zahlungsliste mit ausstehender manueller Zahlung](/img/admin/payments-list.png)

Klicke auf die Zahlungsnummer, und du kannst ihren Status in **Abgeschlossen** ändern.

![Seite mit Zahlungsdetails](/img/admin/payment-edit.png)

![Zahlungsstatus auf Abgeschlossen ändern](/img/admin/payment-status-completed.png)

Nachdem du den Status in **Abgeschlossen** geändert hast, solltest du eine Nachricht **Mitgliedschaft aktivieren** sehen. Schalte diese Option **ein**, um die mit diesem Kunden verknüpfte Mitgliedschaft und Website zu aktivieren. Klicke dann auf **Zahlung speichern**.

![Schalter Mitgliedschaft aktivieren und Button Zahlung speichern](/img/admin/payment-activate-membership.png)

Dein Kunde sollte nun auf das Dashboard und alle Funktionen zugreifen können, die er abonniert hat.
