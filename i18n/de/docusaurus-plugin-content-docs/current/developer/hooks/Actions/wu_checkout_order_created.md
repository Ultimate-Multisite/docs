---
id: wu_checkout_order_created
title: Aktion - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Aktion: wu_checkout_order_created

Ausgelöst, nachdem die Bestellung vollständig zusammengestellt wurde.

Addons können dies nutzen, um sekundäre Mitgliedschaften für Produkte mit unabhängigen Abrechnungszyklen zu erstellen.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Das Warenkorb-/Bestellobjekt. |
| $customer | `\WP_Ultimo\Models\Customer` | Der Kunde. |
| $membership | `\WP_Ultimo\Models\Membership` | Die primäre Mitgliedschaft. |
| $payment | `\WP_Ultimo\Models\Payment` | Die Zahlung. |

### Since

- 2.5.0

### Source

Definiert in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) in Zeile 891
