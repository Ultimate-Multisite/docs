---
title: De Registrierigsfluss
sidebar_position: 3
_i18n_hash: ae01b241f684c1a85d93bdc765eec135
---
# De Registrierigsablauf (v2)

_**WICHTIGE NOTIZ: Dä Artikel bezieht sich uf Ultimate Multisite Version 2.x.**_

User chönne uf verschidde Wëssen zu Ier Netz registriere. Si chönne Ier Registrierungsformular oder en teilbare Link zu enger voregschuelte Plan nutze. Hie zeigemer, wéi Ier Kunde uf Ier Netz registriere chönne, mit de verfügbare Wegin und wat danach passiert, wenn si sich registriere.

## Mit em Registrierungsformular: {#using-the-registration-form}

Das isch de standardregistrierigsablauf. Dir erstellt en Registrierungsseite mit eme **checkout form**, und do wä si Ier Kunde hige, um uf Ier Netz z'registriere und e Plan abzschlüsse. Dir chönntet verschidde Registrierungsseite ha, jede mit eme andere Formular, wenn Dir das wëllt.

D Standard-Page fir d'Registrierig isch [_**yourdomain.com/register**_](http://yourdomain.com/register), aber Dir chönntet das jederzeit i **Ultimate Multisite > Settings > Login & Registration > Default Registration Page** ändere.

Nachdem en User uf Ier Registrierungsseite chunnt (meistens dur en **Sign in** oder **Buy now** Button klicke), gseet si do Ier Registrierungsformular.

![Registrierungsformular an de Registrierigsseite aazeigt](/img/frontend/registration-form.png)

Hie isch en Bispil vom checkout form, wéi er uf em Frontend usgseet:

![Frontend checkout registrierungsform](/img/config/checkout-frontend-registration.png)

All si müesse do nur alli obligatorische Fälder usfüllen – E-Mail, Benutzername, Passwort usw... – und de Plan zahle oder si d'E-Mail-Adresse bestätigen, wenn si für en gratis Plan oder en bezahlte Plan mit Probemonat ohni Zahldaten registriere.

Uf de "Thank you"-Page gseet si e Nachricht, wo si sägt, ob si d'E-Mail-Adresse bestätigen müesse oder ob si Website scho aktiviert isch und si sofort afange chönne nutze.

![Dankeschön-siite nach Registrierig](/img/frontend/registration-thank-you.png)

Wenn d'Bestätigung per E-Mail erforderlich isch, müesse si i ihre E-Mail-Postfach go und uf de Verifizierungslink klicke. D'Website wird nöd aktiviert, wenn d'E-Mail-Adresse nöd verifiziert isch.

Wenn si sich für en bezahlte Plan registriert händ oder d'E-Mail-Verifizierig uf ihrem Netzwerk nöd obligatorisch isch, wird ihre Website direkt nach em Checkout aktiviert und sie gseht en Link zum Ilogge i ihrem Dashboard.

![Site aktiviert mit Link zum Ilogge i Dashboard](/img/frontend/site-activated.png)

## Verwende en teilbare Link: {#using-a-shareable-link}

De Prozess vo de Registrierig mit eme teilbare Link isch im Grunde glych wie s'Registrierigsformular, de einzig Unterschied isch, dass si mit eme teilbare Link Produkt oder en Website-Template scho vorab uf em Checkout-Formular usgwählt ha chönne (siehe Abschnitt Pre-selecting products and templates via URL parameters) oder villicht en Gutscheincode dezue füege chönne (siehe Abschnitt Using URL Parameters).

De Registrierigsprozess isch de gliich: si müesse ire Name, Benutzername, E-Mail-Adresse, Website-Name und Titel usw. usfülle... aber de Plan oder s'Website-Template wird scho für sie vorab usgwählt sii.

### Registriere mit manuellen Zahlige: {#registering-using-manual-payments}

Wenn Sie PayPal, Stripe oder e anderi Zahlungsgateway vo Ultimate Multisite oder ihre Add-on-Integratione nöd bruche wend, chönne Sie manuelli Zahlige für Ihre Kunde verwende. So chönd Sie en Rechnung für sie generiere, wo si nach de Registrierig uf ihrem Netzwerk bi Ihrem bevorzugte Zahlungsprozessor zahle chönne.

De Registrierigsprozess isch genau wie obe, aber uf de Registrierigsseite gseht ihre Kunde en Nachricht, dass si en E-Mail mit wiitere Aawiesige über d'Zahlung erhalte wärde.

![Manuelle Zahlungsnachricht während der Registrierung](/img/frontend/registration-manual-notice.png)

Und nachdem die Registrierung abgeschlossen ist, sehen sie die Zahlungsanweisungen, die Sie festgelegt haben (und erhalten diese auch per E-Mail).

![Zahlungsanweisungen nach der Registrierung angezeigt](/img/frontend/registration-payment-instructions.png)

Die Zahlungsanweisungen können in **Ultimate Multisite > Einstellungen > Zahlungen** geändert werden, indem man die Option **Manuell** einschaltet:

![Manuelle Zahlungsschaltuhr mit Feld für Zahlungsanweisungen](/img/config/manual-gateway-settings.png)

Nachdem Ihre Kunden die manuelle Zahlung abgeschlossen und Ihnen die Bestätigung geschickt haben, müssen Sie die Zahlung **manuell bestätigen**, um das Mitgliedschafts- und Website-Konto des Kunden zu aktivieren.

Dafür gehen Sie zu **Ultimate Multisite > Zahlungen** und suchen die Kundenzahlung. Dort sollte der Status immer noch als **Ausstehend (Pending)** angezeigt werden.

![Zahlungsliste mit ausstehender manueller Zahlung](/img/admin/payments-list.png)

Klicken Sie auf die Zahlungsnummer, und Sie können den Status auf **Abgeschlossen (Completed)** ändern.

![Zahlungsdetailsseite](/img/admin/payment-edit.png)

![Status der Zahlung auf Abgeschlossen ändern](/img/admin/payment-status-completed.png)

Nachdem Sie den Status auf **Abgeschlossen** geändert haben, sollten Sie eine Meldung wie „Mitgliedschaft aktivieren“ sehen. Schalten Sie diese Option **ein**, um die Mitgliedschaft und die damit verbundene Website für diesen Kunden zu aktivieren. Klicken Sie dann auf **Zahlung speichern (Save Payment)**.

![Aktivierung der Mitgliedschaftsschaltuhr und Speichern der Zahlung](/img/admin/payment-activate-membership.png)

Ihr Kunde kann jetzt das Dashboard und alle Funktionen nutzen, für die er sich angemeldet hat.
