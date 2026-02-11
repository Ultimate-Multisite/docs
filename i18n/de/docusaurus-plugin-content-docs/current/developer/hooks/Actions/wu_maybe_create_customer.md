---
id: wu_maybe_create_customer
title: Aktion - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Ermöglicht Plugin-Entwicklern, zusätzliche Aktionen auszuführen, wenn der Kunde hinzugefügt wird.

Hier fügen wir beispielsweise die Hooks hinzu, um den customer->user auch auf der Hauptseite hinzuzufügen.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $customer | `\Customer` | Der Kunde, der möglicherweise erstellt wurde. |
| $checkout | `\Checkout` | Die aktuelle Checkout-Klasse. |

### Seit

- 2.0.0

### Quelle

Definiert in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) in Zeile 1156
