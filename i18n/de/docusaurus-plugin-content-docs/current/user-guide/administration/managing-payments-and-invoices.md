---
title: Zahlungen und Rechnungen verwalten
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Zahlungen und Rechnungen verwalten {#managing-payments-and-invoices}

## Zahlungseinstellungen {#payment-settings}

Bevor du Zahlungen empfangen kannst, musst du die zahlungsbezogenen Einstellungen konfigurieren. Navigiere zu **Ultimate Multisite → Einstellungen** und klicke auf den Tab **Payment**.

![Tab für Zahlungseinstellungen](/img/admin/settings-payments-top.png)

Hier ist eine vollständige Ansicht der Seite mit den Zahlungseinstellungen:

![Vollständige Seite der Zahlungseinstellungen](/img/admin/settings-payments-full.png)

### Allgemeine Zahlungsoptionen {#general-payment-options}

In den allgemeinen Einstellungen kannst du Folgendes konfigurieren:

- **Währung** — Die Standardwährung, die für Transaktionen verwendet wird
- **Währungsposition** — Wo das Währungssymbol erscheint (vor/nach dem Betrag)

![Einstellungen für Zahlungsgateways](/img/admin/settings-payments-options.png)

### Payment Gateways {#payment-gateways}

Ultimate Multisite unterstützt mehrere Zahlungsgateways. Du kannst jedes einzelne über den Tab Payment-Einstellungen aktivieren und konfigurieren.

![Konfiguration von Zahlungsgateways](/img/admin/settings-payments-gateways.png)

Verfügbare Gateways umfassen:

- **Stripe** — Kreditkartenzahlungen über Stripe
- **PayPal** — PayPal-Zahlungen
- **Manual** — Für Offline- oder benutzerdefinierte Zahlungsabwicklung

Jedes Gateway hat einen eigenen Konfigurationsbereich, in dem du API-Schlüssel und andere Einstellungen eingibst.

![Zusätzliche Gateway-Einstellungen](/img/admin/settings-payments-gateways-2.png)

### Sandbox-Modus {#sandbox-mode}

Du kannst den **Sandbox-Modus** aktivieren, um deine Zahlungsintegration zu testen, bevor sie live geht. Wenn der Sandbox-Modus aktiv ist, werden keine echten Abbuchungen vorgenommen.

## Zahlungen anzeigen {#viewing-payments}

Navigiere zur Seite **Payments** unter Ultimate Multisite, um alle Transaktionen in deinem Netzwerk zu sehen.

![Zahlungsliste](/img/admin/payments-list.png)

Du kannst Zahlungen nach Status filtern (abgeschlossen, ausstehend, fehlgeschlagen, erstattet) und nach bestimmten Transaktionen suchen.

Klicke auf eine Zahlung, um die vollständigen Details einschließlich der Positionen, der zugehörigen Mitgliedschaft, der Kundeninformationen und der Zahlungsgateway-Daten zu sehen.

## Rechnungen {#invoices}

Ultimate Multisite kann automatisch Rechnungen für Zahlungen erstellen. Du kannst die Rechnungsvorlage und das Nummerierungsformat in den Payment-Einstellungen anpassen.

Optionen zur Rechnungsanpassung umfassen:

- **Firmenname und Adresse**, die auf Rechnungen angezeigt werden
- **Rechnungsnummerierung**: Format und Reihenfolge
- **Logo**, das in der Kopfzeile der Rechnung angezeigt wird
- **Benutzerdefinierter Fußzeilentext** für Bedingungen, Hinweise oder rechtliche Informationen

Um die Rechnungsvorlage anzupassen, gehe zu **Ultimate Multisite → Einstellungen → Payment** und suche nach den rechnungsbezogenen Einstellungen.
