---
title: Zahlungen erhalten
sidebar_position: 15
_i18n_hash: 7808f514b91797f7ffb68811b12c48be
---
# Bezahlt werden (v2)

_**WICHTIGER HINWEIS: Dieser Artikel bezieht sich auf Ultimate Multisite Version 2.x.**_

Ultimate Multisite verfügt über ein integriertes Mitgliedschafts- und Abrechnungssystem. Damit unser Abrechnungssystem funktioniert, haben wir die gängigsten Zahlungs-Gateways integriert, die im E-Commerce verwendet werden. Die standardmäßigen Zahlungs-Gateways in Ultimate Multisite sind _Stripe_ , _PayPal_ und manuelle Zahlung. Sie können auch _WooCommerce_ , _GoCardless_ und _Payfast_ verwenden, um Zahlungen zu erhalten, indem Sie deren jeweilige Add-ons installieren.

## Grundeinstellungen

Sie können jedes dieser Zahlungs-Gateways in den Zahlungseinstellungen von Ultimate Multisite konfigurieren. Sie finden diese über **Ultimate Multisite Menü > Einstellungen > Zahlungen.**

![Seite mit Zahlungseinstellungen in Ultimate Multisite, die das Zahlungen-Panel zeigt](/img/config/payments-settings-page.png)

Bevor Sie Ihr Zahlungs-Gateway einrichten, sehen Sie sich bitte die grundlegenden Zahlungseinstellungen an, die Sie konfigurieren können:

**Automatische Verlängerung erzwinge** **n:** Dadurch wird sichergestellt, dass die Zahlung am Ende jedes Abrechnungszyklus automatisch wiederkehrt, abhängig von der vom Benutzer ausgewählten Abrechnungshäufigkeit.

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 prüft, ob das aktive Gateway über einen wiederverwendbaren Verlängerungsnachweis verfügt, bevor eine wiederkehrende Mitgliedschaft mit aktivierter automatischer Verlängerung gespeichert wird. Ein Verlängerungsnachweis kann ein Gateway-Abonnement, eine Abrechnungsvereinbarung, ein gespeicherter Vault-Token oder eine entsprechende wiederverwendbare Zahlungsmethode sein. Wenn das Gateway meldet, dass kein nutzbarer Nachweis vorhanden ist, speichert Ultimate Multisite die Mitgliedschaft, deaktiviert jedoch die automatische Verlängerung und zeichnet den Status des fehlenden Nachweises auf, damit ein Administrator oder Support-Ablauf den Kunden auffordern kann, die Zahlung vor dem Verlängerungsdatum erneut zu autorisieren.

Dies verhindert, dass eine Mitgliedschaft so wirkt, als würde sie automatisch verlängert, wenn das Gateway nur einmalige Zahlungen einziehen kann. Gateway-Add-ons sollten bestätigen, dass wiederkehrende Checkouts einen wiederverwendbaren Nachweis speichern, insbesondere wenn das Gateway sowohl einmalige Abbuchungen als auch Vault-/Abonnement-Zahlungsmodi unterstützt.

**Testphasen ohne Zahlungs** **methode erlauben:** Wenn diese Option aktiviert ist, muss Ihr Kunde während des Registrierungsprozesses keine Finanzinformationen hinzufügen. Dies ist erst erforderlich, wenn die Testphase abläuft.

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Rechnung bei Zahlungsbestätigung senden:** Dies gibt Ihnen die Möglichkeit, festzulegen, ob nach der Zahlung eine Rechnung gesendet werden soll oder nicht. Beachten Sie, dass Benutzer in ihrem Subsite-Dashboard Zugriff auf ihre Zahlungshistorie haben. Diese Option gilt nicht für das manuelle Gateway.

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Rechnungsnummerierungsschema:** Hier können Sie entweder einen Zahlungsreferenzcode oder ein fortlaufendes Nummernschema auswählen. Wenn Sie einen Zahlungsreferenzcode für Ihre Rechnungen verwenden möchten, müssen Sie nichts konfigurieren. Wenn Sie ein fortlaufendes Nummernschema verwenden möchten, müssen Sie die **nächste Rechnungsnummer** konfigurieren (Diese Nummer wird als Rechnungsnummer für die nächste im System generierte Rechnung verwendet. Sie wird jedes Mal um eins erhöht, wenn eine neue Rechnung erstellt wird. Sie können sie ändern und speichern, um die fortlaufende Rechnungsnummer auf einen bestimmten Wert zurückzusetzen) sowie das **Rechnungsnummernpräfix.**

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Wo Sie die Gateways finden:

Sie können die Zahlungs-Gateways auf derselben Seite einrichten ( **Ultimate Multisite > Einstellungen > Zahlungen**). Direkt unter **aktive Zahlungs-Gateways** können Sie Folgendes sehen: _Stripe_ , _Stripe_ _Checkout_ , _PayPal_ und _Manuell_.

![Abschnitt „Aktive Zahlungs-Gateways“, der Stripe, Stripe Checkout, PayPal und Manuell auflistet](/img/config/payments-active-gateways.png)

Wir haben einen eigenen Artikel für jedes Zahlungs-Gateway, der Sie durch die Schritte der Einrichtung führt und den Sie über die folgenden Links finden.

Sie können Zahlungsdetails anzeigen und bearbeiten:

![Oberfläche zur Zahlungsbearbeitung](/img/admin/payment-edit.png)

Hier ist eine vollständige Ansicht der Seite zur Zahlungsbearbeitung:

![Vollständige Oberfläche zur Zahlungsbearbeitung](/img/admin/payment-edit-full.png)

Hier ist außerdem eine vollständige Ansicht der Einstellungen für Zahlungs-Gateways:

![Vollständige Seite der Zahlungs-Gateway-Einstellungen](/img/config/settings-payments-gateways-full.png)

**Einrichten des Stripe-Gateways**

**Einrichten des PayPal-Gateways**** **

**Einrichten manueller Zahlungen**

Wenn Sie nun _WooCommerce_ , _GoCardless_ oder _Payfast_ als Ihr Zahlungs-Gateway verwenden möchten, müssen Sie deren **Add-ons installieren und konfigurieren**.

### So installieren Sie das WooCommerce-Add-on:

Wir verstehen, dass _Stripe_ und _PayPal_ in einigen Ländern nicht verfügbar sind, was Ultimate Multisite-Benutzer einschränkt oder daran hindert, unser Plugin effektiv zu nutzen. Deshalb haben wir ein Add-on erstellt, um _WooCommerce_ zu integrieren, ein sehr beliebtes E-Commerce-Plugin. Entwickler auf der ganzen Welt haben Add-ons erstellt, um verschiedene Zahlungs-Gateways darin zu integrieren. Wir haben dies genutzt, um die Zahlungs-Gateways zu erweitern, die Sie mit dem Abrechnungssystem von Ultimate Multisite verwenden können.

_**WICHTIG:** Ultimate Multisite: WooCommerce Integration erfordert, dass WooCommerce mindestens auf Ihrer Hauptseite aktiviert ist._

Gehen Sie zunächst bitte zur Add-ons-Seite. Sie finden sie über **Ultimate Multisite > Einstellungen**. Sie sollten die Tabelle **Add-ons** sehen. Klicken Sie auf **Unsere Add-ons ansehen**.

<!-- Screenshot unavailable: Add-ons table on the Ultimate Multisite Settings sidebar with the Check our Add-ons link -->

Nachdem Sie auf **Unsere Add-ons ansehen** geklickt haben, werden Sie zur Add-ons-Seite weitergeleitet. Hier finden Sie alle Ultimate Multisite-Add-ons. Klicken Sie auf das Add-on **Ultimate Multisite: WooCommerce Integration**.

![Add-ons-Seite, die Ultimate Multisite-Add-ons einschließlich WooCommerce Integration auflistet](/img/addons/addons-page.png)

Ein Fenster mit den Add-on-Details wird angezeigt. Klicke einfach auf **Jetzt installieren**.

<!-- Screenshot nicht verfügbar: Dialog mit Details zum Ultimate Multisite WooCommerce Integration Add-on mit Button Jetzt installieren -->

Nachdem die Installation abgeschlossen ist, wirst du zur Plugin-Seite weitergeleitet. Klicke hier einfach auf **Netzwerkweit aktivieren**, und das WooCommerce Add-on wird in deinem Netzwerk aktiviert.

<!-- Screenshot nicht verfügbar: Plugin-Seite mit dem Link Netzwerkweit aktivieren für das WooCommerce Integration Add-on -->

Nachdem du es aktiviert hast, erhältst du eine Erinnerung, falls du das WooCommerce Plugin noch nicht auf deiner Website installiert und aktiviert hast.

<!-- Screenshot nicht verfügbar: Admin-Hinweis, der den Administrator daran erinnert, das WooCommerce Plugin zu installieren und zu aktivieren -->

Um mehr über das WooCommerce Integration Add-on zu lesen, **klicke hier**.

### So installierst du das GoCardless Add-on:

Die Schritte zur Installation des _GoCardless_ Add-ons sind im Grunde dieselben wie beim _WooCommerce_ Add-on. Bitte gehe zur Add-ons-Seite und wähle das **Ultimate Multisite: GoCardless Gateway** Add-on aus.

<!-- Screenshot nicht verfügbar: Add-ons-Seite mit hervorgehobenem Ultimate Multisite GoCardless Gateway Add-on -->

Das Add-on-Fenster wird angezeigt. Klicke auf **Jetzt installieren**.

<!-- Screenshot nicht verfügbar: Dialog mit Details zum Ultimate Multisite GoCardless Gateway Add-on mit Button Jetzt installieren -->

Nachdem die Installation abgeschlossen ist, wirst du zur Plugin-Seite weitergeleitet. Klicke hier einfach auf **Netzwerkweit aktivieren**, und das _GoCardless_ Add-on wird in deinem Netzwerk aktiviert.

<!-- Screenshot nicht verfügbar: Plugin-Seite mit dem Link Netzwerkweit aktivieren für das GoCardless Gateway Add-on -->

Um zu erfahren, wie du mit dem _GoCardless_ Gateway loslegst, **lies diesen Artikel**.

### So installierst du das Payfast Add-on:

Gehe zur Add-ons-Seite und wähle das **Ultimate Multisite: Payfast Gateway** Add-on aus.

<!-- Screenshot nicht verfügbar: Add-ons-Seite mit hervorgehobenem Ultimate Multisite Payfast Gateway Add-on -->

Das Add-on-Fenster wird angezeigt. Klicke auf **Jetzt installieren.**

<!-- Screenshot nicht verfügbar: Dialog mit Details zum Ultimate Multisite Payfast Gateway Add-on mit Button Jetzt installieren -->

Nachdem die Installation abgeschlossen ist, wirst du zur Plugin-Seite weitergeleitet. Klicke hier einfach auf **Netzwerkweit aktivieren**, und das _Payfast_ Add-on wird in deinem Netzwerk aktiviert.

<!-- Screenshot nicht verfügbar: Plugin-Seite mit dem Link Netzwerkweit aktivieren für das Payfast Gateway Add-on -->
