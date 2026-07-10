---
title: Verwaltung vo Zahle und Rechnige
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# Bezahlig und Rechnige verwalte {#managing-payments-and-invoices}

## Zahlungseinstellungen {#payment-settings}

Bevor Sie mit dem Erhalt von Zahlungen beginnen, müssen Sie die Zahlungseinstellungen konfigurieren. Gehen Sie zu **Ultimate Multisite → Einstellungen** und klicken Sie auf den Reiter **Zahlung**.

![Payment settings tab](/img/admin/settings-payments-top.png)

Hier ist eine vollständige Ansicht der Seite für die Zahlungseinstellungen:

![Payment settings full page](/img/admin/settings-payments-full.png)

### Allgemeine Zahlungsoptionen {#general-payment-options}

In den allgemeinen Einstellungen können Sie Folgendes konfigurieren:

- **Währung** — Die Standardwährung, die für Transaktionen verwendet wird
- **Währungsplatzierung** — Wo das Währungssymbol erscheint (vor/nach dem Betrag)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Zahlungsgateways {#payment-gateways}

Ultimate Multisite unterstützt mehrere Zahlungsgateways. Sie können jedes davon aktivieren und konfigurieren im Reiter Zahlungseinstellungen.

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

Verfügbare Gateways sind:

- **Stripe** — Kreditkartenzahlungen über Stripe
- **PayPal** — PayPal-Zahlungen
- **Manuell** — Für Offline- oder benutzerdefinierte Zahlungsverarbeitung

Jedes Gateway hat seinen eigenen Konfigurationsbereich, in dem Sie API-Schlüssel und andere Einstellungen eingeben.

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox-Modus {#sandbox-mode}

Sie können den **Sandbox-Modus** aktivieren, um Ihre Zahlungsintegration zu testen, bevor Sie live gehen. Wenn der Sandbox-Modus aktiv ist, werden keine echten Abbuchungen vorgenommen.

## Zahlungen anzeigen {#viewing-payments}

Gehen Sie zur Seite **Zahlungen** unter Ultimate Multisite, um alle Transaktionen in Ihrem Netzwerk einzusehen.

![Payments list](/img/admin/payments-list.png)

Sie können Zahlungen nach Status (abgeschlossen, ausstehend, fehlgeschlagen, erstattet) filtern und nach bestimmten Transaktionen suchen.

Klicke uf e Zahlig, um d'ganze Details z'gseh, inklusiv de Listeneitem, d'verbundeni Mitgliedschaft, d'Kundinfinformation und d'Daten vom Zahlungsportal.

## Rechnige (Invoices) {#invoices}

Ultimate Multisite cha automatisch Rechnige für Zahlige generiere. Du chasch s'Rechnigsformat und d'Nummerierig vom Template individuell aapasse i de Zahligs-Iistellige.

D'Optionen zur Anpassung vom Rechnungs-Template umfasse:

- **Firmenname und Adrässe**, wo uf de Rechnige staht
- **Format und Sequenz vo de Rechnigsnummer**
- **Logo**, wo im Kopf vo de Rechnung zeigt wird
- **Custom Footer Text** für Bedingige, Notize oder rechtischi Informatione

Um s'Rechnungs-Template z'anpasse, ga zu **Ultimate Multisite → Settings → Payment** und lueg nach de Iistellige, wo mit de Rechnig z'tue händ.
