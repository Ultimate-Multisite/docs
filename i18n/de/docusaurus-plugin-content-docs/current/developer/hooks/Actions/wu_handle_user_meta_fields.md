---
id: wu_handle_user_meta_fields
title: Aktion - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aktion: wu_handle_user_meta_fields

Ermöglicht Plugin-Entwicklern, Benutzermetadaten auf verschiedene Weise zu speichern, falls sie dies benötigen.

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $meta_repository | `array` | Die Liste der Metafelder, strukturiert als Schlüssel => Wert. |
| $user | `\WP_User` | Das WordPress-Benutzerobjekt. |
| $customer | `\Customer` | Das Ultimate Multisite-Kundenobjekt. |
| $checkout | `\Checkout` | Die Checkout-Klasse. |

### Seit

- 2.0.4

### Quelle

Definiert in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) in Zeile 1244
