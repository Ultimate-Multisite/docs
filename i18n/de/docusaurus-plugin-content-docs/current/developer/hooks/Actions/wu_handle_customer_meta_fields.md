---
id: wu_handle_customer_meta_fields
title: Aktion - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Ermöglicht Plugin-Entwicklern, Metadaten auf verschiedene Weise zu speichern, falls sie dies benötigen.

## Parameters {#parameters}

| Name | Typ | Beschreibung |
|------|-----|--------------|
| $meta_repository | `array` | Die Liste der Metafelder, Schlüssel => Wert strukturiert. |
| $customer | `\Customer` | Das Ultimate Multisite Kundenobjekt. |
| $checkout | `\Checkout` | Die Checkout-Klasse. |

### Seit {#since}

- 2.0.0

### Quelle {#source}

Definiert in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) in Zeile 1211
