---
title: Bezahlung erhalten
sidebar_position: 15
_i18n_hash: b7e644488bb1bef802e024319be88725
---
# Zahlungen erhalten (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ultimate Multisite hat ein integriertes Mitgliedschafts- und Abrechnungssystem. Damit unser Abrechnungssystem funktioniert, haben wir die am häufigsten verwendeten Zahlungs-Gateways im E-Commerce integriert. Die Standard-Zahlungs-Gateways in Ultimate Multisite sind _Stripe_, _PayPal_ und Manual Payment. Sie können auch _WooCommerce_, _GoCardless_ und _Payfast_ nutzen, um Zahlungen zu erhalten, indem Sie deren jeweilige Add-ons installieren.

## Grundeinstellungen

Sie können jedes dieser Zahlungs-Gateways unter den Ultimate Multisite Zahlungs-Einstellungen konfigurieren. Sie finden sie, indem Sie zu **Ultimate Multisite Menü > Einstellungen > Zahlungen** gehen.

![Payment settings page in Ultimate Multisite](/img/config/settings-payment-gateways.png)

Bevor Sie Ihr Zahlungs-Gateway einrichten, werfen Sie bitte einen Blick auf die grundlegenden Zahlungseinstellungen, die Sie konfigurieren können:

**Automatische Verlängerung erzwingen** **w:** Damit wird sichergestellt, dass die Zahlung am Ende jedes Abrechnungszyklus automatisch erneuert wird, abhängig von der vom Benutzer ausgewählten Abrechnungsfrequenz.

![Force auto-renew toggle setting](/img/config/settings-payment-gateways.png)

**Erlauben Sie Testversionen ohne Zahlung** **method:** Mit dieser Option muss Ihr Kunde während des Registrierungsprozesses keine finanziellen Informationen angeben. Dies wird erst erforderlich, wenn die Testphase abläuft.

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Rechnung bei Zahlungsbestätigung senden:** Diese Option gibt Ihnen die Möglichkeit, nach der Zahlung eine Rechnung zu senden oder nicht. Beachten Sie, dass Benutzer Zugriff auf ihre Zahlungs-Historie im Dashboard ihres Subsites haben. Diese Option gilt nicht für das Manual Gateway.

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Rechnungsnummerierungs-Schema:** Hier können Sie entweder einen Zahlungsreferenzcode oder ein fortlaufendes Nummern-Schema auswählen. Wenn Sie einen Zahlungsreferenzcode für Ihre Rechnungen verwenden, müssen Sie nichts konfigurieren. Wenn Sie ein fortlaufendes Nummern-Schema wählen, müssen Sie die **nächste Rechnungsnummer** (Diese Nummer wird als Rechnungsnummer für die nächste vom System generierte Rechnung verwendet. Sie wird jedes Mal um eins erhöht, wenn eine neue Rechnung erstellt wird. Sie können sie ändern und speichern, um die fortlaufende Rechnungsnummer auf einen bestimmten Wert zurückzusetzen) sowie das **Rechnungsnummern-Präfix** konfigurieren.

![Invoice numbering scheme selection](/img/config/settings-payment-gateways.png)

![Sequential invoice number and prefix settings](/img/config/settings-payment-gateways.png)

## Wo Sie die Gateways finden:

Sie können die Zahlungs-Gateways auf derselben Seite einrichten ( **Ultimate Multisite > Einstellungen > Zahlungen**). Direkt unter **aktive Zahlungs-Gateways** können Sie sehen: _Stripe_, _Stripe Checkout_, _PayPal_ und _Manual_.

![Active payment gateways list](/img/config/settings-payment-gateways.png)

Wir haben einen eigenen Artikel für jedes Zahlungs-Gateway, der Sie durch die Schritte zur Einrichtung führt, die Sie unter den untenstehenden Links finden können.

**Einrichten des Stripe-Gateways**

**Einrichten des PayPal-Gateways**

**Einrichten manueller Zahlungen**

Wenn Sie nun _WooCommerce_, _GoCardless_ oder _Payfast_ als Ihr Zahlungs-Gateway nutzen möchten, müssen Sie **ihre Add-ons installieren und konfigurieren**.

### Wie man das WooCommerce-Add-on installiert:

Wir verstehen, dass _Stripe_ und _PayPal_ in einigen Ländern nicht verfügbar sind, was Ultimate Multisite-Benutzer daran hindert, unser Plugin effektiv zu nutzen. Deshalb haben wir ein Add-on entwickelt, um _WooCommerce_ zu integrieren, das ein sehr beliebtes E-Commerce-Plugin ist. Entwickler weltweit haben Add-ons erstellt, um verschiedene Zahlungs-Gateways zu integrieren. Wir haben diese Möglichkeit genutzt, um die Zahlungs-Gateways, die Sie mit dem Ultimate Multisite-Abrechnungssystem verwenden können, zu erweitern.

_**WICHTIG:** Ultimate Multisite: WooCommerce-Integration erfordert, dass WooCommerce mindestens auf Ihrer Hauptseite aktiviert ist._

Zuerst gehen Sie bitte zur Add-ons-Seite. Sie finden sie, indem Sie zu **Ultimate Multisite > Einstellungen** gehen. Sie sollten die **Add-ons**-Tabelle sehen. Klicken Sie auf **Check our Add-ons**.

![Settings page with add-ons section](/img/config/settings-general.png)

Nach dem Klicken auf **Check our Add-ons** werden Sie zur Add-ons-Seite weitergeleitet. Hier finden Sie alle Ultimate Multisite Add-ons. Klicken Sie auf das Add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Ein Fenster öffnet sich mit den Add-on-Details. Klicken Sie einfach auf **Install Now**.

![WooCommerce add-on install dialog](/img/config/settings-general.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das WooCommerce-Add-on wird in Ihrem Netzwerk aktiviert.

![Network Activate the WooCommerce add-on](/img/config/settings-general.png)

Nach der Aktivierung erhalten Sie eine Erinnerung, falls das WooCommerce-Plugin noch nicht auf Ihrer Website installiert und aktiviert ist.

![WooCommerce activation reminder notice](/img/config/settings-general.png)

Um mehr über das WooCommerce-Integration-Add-on zu erfahren, **hier klicken**.

### Wie man das GoCardless-Add-on installiert:

Die Schritte zum Installieren des _GoCardless_-Add-ons sind im Wesentlichen die gleichen wie beim _WooCommerce_-Add-on. Bitte gehen Sie zur Add-ons-Seite und wählen Sie das Add-on **Ultimate Multisite: GoCardless Gateway** aus.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Das Add-on-Fenster öffnet sich. Klicken Sie auf **Install Now**.

![GoCardless add-on install dialog](/img/config/settings-general.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das _GoCardless_-Add-on wird in Ihrem Netzwerk aktiviert.

![Network Activate the GoCardless add-on](/img/config/settings-general.png)

Um zu erfahren, wie Sie mit dem _GoCardless_-Gateway starten, **lesen Sie diesen Artikel**.

### Wie man das Payfast-Add-on installiert:

Gehen Sie zur Add-ons-Seite und wählen Sie das Add-on **Ultimate Multisite: Payfast Gateway** aus.

![Add-ons page listing available add-ons](/img/config/settings-general.png)

Das Add-on-Fenster öffnet sich. Klicken Sie auf **Install Now.**

![Payfast add-on install dialog](/img/config/settings-general.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das _Payfast_-Add-on wird in Ihrem Netzwerk aktiviert.

![Network Activate the Payfast add-on](/img/config/settings-general.png)
