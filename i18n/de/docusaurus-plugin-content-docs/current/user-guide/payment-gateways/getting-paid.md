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

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-42sl37Fn5G.png)

Bevor Sie Ihr Zahlungs-Gateway einrichten, werfen Sie bitte einen Blick auf die grundlegenden Zahlungseinstellungen, die Sie konfigurieren können:

**Automatische Verlängerung erzwingen** **w:** Damit wird sichergestellt, dass die Zahlung am Ende jedes Abrechnungszyklus automatisch erneuert wird, abhängig von der vom Benutzer ausgewählten Abrechnungsfrequenz.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-Og3iJwLdmn.png)

**Erlauben Sie Testversionen ohne Zahlung** **method:** Mit dieser Option muss Ihr Kunde während des Registrierungsprozesses keine finanziellen Informationen angeben. Dies wird erst erforderlich, wenn die Testphase abläuft.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-aA5Olqe9M9.png)

**Rechnung bei Zahlungsbestätigung senden:** Diese Option gibt Ihnen die Möglichkeit, nach der Zahlung eine Rechnung zu senden oder nicht. Beachten Sie, dass Benutzer Zugriff auf ihre Zahlungs-Historie im Dashboard ihres Subsites haben. Diese Option gilt nicht für das Manual Gateway.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-RGupao7GvW.png)

**Rechnungsnummerierungs-Schema:** Hier können Sie entweder einen Zahlungsreferenzcode oder ein fortlaufendes Nummern-Schema auswählen. Wenn Sie einen Zahlungsreferenzcode für Ihre Rechnungen verwenden, müssen Sie nichts konfigurieren. Wenn Sie ein fortlaufendes Nummern-Schema wählen, müssen Sie die **nächste Rechnungsnummer** (Diese Nummer wird als Rechnungsnummer für die nächste vom System generierte Rechnung verwendet. Sie wird jedes Mal um eins erhöht, wenn eine neue Rechnung erstellt wird. Sie können sie ändern und speichern, um die fortlaufende Rechnungsnummer auf einen bestimmten Wert zurückzusetzen) sowie das **Rechnungsnummern-Präfix** konfigurieren.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-mP0949Eawa.png)

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-oD5LaLaw7t.png)

## Wo Sie die Gateways finden:

Sie können die Zahlungs-Gateways auf derselben Seite einrichten ( **Ultimate Multisite > Einstellungen > Zahlungen**). Direkt unter **aktive Zahlungs-Gateways** können Sie sehen: _Stripe_, _Stripe Checkout_, _PayPal_ und _Manual_.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-g9RMYx84r5.png)

Wir haben einen eigenen Artikel für jedes Zahlungs-Gateway, der Sie durch die Schritte zur Einrichtung führt, die Sie unter den untenstehenden Links finden können.

**Einrichten des Stripe-Gateways**

**Einrichten des PayPal-Gateways**

**Einrichten manueller Zahlungen**

Wenn Sie nun _WooCommerce_, _GoCardless_ oder _Payfast_ als Ihr Zahlungs-Gateway nutzen möchten, müssen Sie **ihre Add-ons installieren und konfigurieren**.

### Wie man das WooCommerce-Add-on installiert:

Wir verstehen, dass _Stripe_ und _PayPal_ in einigen Ländern nicht verfügbar sind, was Ultimate Multisite-Benutzer daran hindert, unser Plugin effektiv zu nutzen. Deshalb haben wir ein Add-on entwickelt, um _WooCommerce_ zu integrieren, das ein sehr beliebtes E-Commerce-Plugin ist. Entwickler weltweit haben Add-ons erstellt, um verschiedene Zahlungs-Gateways zu integrieren. Wir haben diese Möglichkeit genutzt, um die Zahlungs-Gateways, die Sie mit dem Ultimate Multisite-Abrechnungssystem verwenden können, zu erweitern.

_**WICHTIG:** Ultimate Multisite: WooCommerce-Integration erfordert, dass WooCommerce mindestens auf Ihrer Hauptseite aktiviert ist._

Zuerst gehen Sie bitte zur Add-ons-Seite. Sie finden sie, indem Sie zu **Ultimate Multisite > Einstellungen** gehen. Sie sollten die **Add-ons**-Tabelle sehen. Klicken Sie auf **Check our Add-ons**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-WtOkJNuCsj.png)

Nach dem Klicken auf **Check our Add-ons** werden Sie zur Add-ons-Seite weitergeleitet. Hier finden Sie alle Ultimate Multisite Add-ons. Klicken Sie auf das Add-on **Ultimate Multisite: WooCommerce Integration**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Ein Fenster öffnet sich mit den Add-on-Details. Klicken Sie einfach auf **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-fGaxHyPtsv.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das WooCommerce-Add-on wird in Ihrem Netzwerk aktiviert.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-TM2lYtgyM7.png)

Nach der Aktivierung erhalten Sie eine Erinnerung, falls das WooCommerce-Plugin noch nicht auf Ihrer Website installiert und aktiviert ist.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-VwIGoJhzqc.png)

Um mehr über das WooCommerce-Integration-Add-on zu erfahren, **hier klicken**.

### Wie man das GoCardless-Add-on installiert:

Die Schritte zum Installieren des _GoCardless_-Add-ons sind im Wesentlichen die gleichen wie beim _WooCommerce_-Add-on. Bitte gehen Sie zur Add-ons-Seite und wählen Sie das Add-on **Ultimate Multisite: GoCardless Gateway** aus.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Das Add-on-Fenster öffnet sich. Klicken Sie auf **Install Now**.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-YIpPgP4VVo.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das _GoCardless_-Add-on wird in Ihrem Netzwerk aktiviert.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-FGurJpzaF0.png)

Um zu erfahren, wie Sie mit dem _GoCardless_-Gateway starten, **lesen Sie diesen Artikel**.

### Wie man das Payfast-Add-on installiert:

Gehen Sie zur Add-ons-Seite und wählen Sie das Add-on **Ultimate Multisite: Payfast Gateway** aus.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-BmLWqj4yjt.png)

Das Add-on-Fenster öffnet sich. Klicken Sie auf **Install Now.**

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-1jpCakOHNy.png)

Nach Abschluss der Installation werden Sie zur Plugin-Seite weitergeleitet. Klicken Sie hier einfach auf **Network Activate** und das _Payfast_-Add-on wird in Ihrem Netzwerk aktiviert.

![](https://wp-ultimo-space.fra1.cdn.digitaloceanspaces.com/hs-file-49OQHBwPxk.png)
