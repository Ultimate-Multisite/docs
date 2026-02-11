---
title: Verwaltung von Zahlungen und Rechnungen
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# Verwaltung von Zahlungen und Rechnungen

## Zahlungseinstellungen

Bevor Sie mit dem Empfang von Zahlungen beginnen, müssen Sie die zahlungsbezogenen Einstellungen konfigurieren. Navigieren Sie zu **Ultimate Multisite → Einstellungen** und klicken Sie auf die Registerkarte **Zahlung**.

![Payment settings tab](/img/admin/settings-payments-top.png)

### Allgemeine Zahlungseinstellungen

In den allgemeinen Einstellungen können Sie konfigurieren:

- **Currency** — Die Standardwährung für Transaktionen
- **Currency Position** — Wo das Währungssymbol erscheint (vor/nach dem Betrag)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Zahlungs-Gateways

Ultimate Multisite unterstützt mehrere Zahlungs-Gateways. Sie können jedes einzelne von der Registerkarte Zahlungseinstellungen aus aktivieren und konfigurieren.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Verfügbare Gateways umfassen:

- **Stripe** — Kreditkartenzahlungen über Stripe
- **PayPal** — PayPal-Zahlungen
- **Manual** — Für Offline- oder benutzerdefinierte Zahlungsabwicklung

Jedes Gateway hat einen eigenen Konfigurationsbereich, in dem Sie API-Schlüssel und andere Einstellungen eingeben.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox-Modus

Sie können den Sandbox-Modus aktivieren, um Ihre Zahlungsintegration vor dem Live-Betrieb zu testen. Wenn der Sandbox-Modus aktiv ist, werden keine echten Gebühren berechnet.

## Zahlungen anzeigen

Navigieren Sie zur Seite **Zahlungen** unter Ultimate Multisite, um alle Transaktionen in Ihrem Netzwerk anzuzeigen.

![Payments list](/img/admin/payments-list.png)

Sie können Zahlungen nach Status (abgeschlossen, ausstehend, fehlgeschlagen, erstattet) filtern und nach bestimmten Transaktionen suchen.

Klicken Sie auf eine Zahlung, um alle Details einschließlich der Positionen, der zugehörigen Mitgliedschaft, Kundeninformationen und Zahlungs-Gateway-Daten anzuzeigen.

## Rechnungen

Ultimate Multisite kann automatisch Rechnungen für Zahlungen erstellen. Sie können die Rechnungsvorlage und das Nummerierungsformat in den Zahlungseinstellungen anpassen.

Anpassungsoptionen für Rechnungen umfassen:

- **Company name and address** angezeigt auf Rechnungen
- **Invoice numbering** Format und Sequenz
- **Logo** angezeigt im Rechnungsheader
- **Custom footer text** für Bedingungen, Notizen oder rechtliche Informationen

Um die Rechnungsvorlage anzupassen, gehen Sie zu **Ultimate Multisite → Einstellungen → Zahlung** und suchen Sie nach den rechnungsbezogenen Einstellungen.
