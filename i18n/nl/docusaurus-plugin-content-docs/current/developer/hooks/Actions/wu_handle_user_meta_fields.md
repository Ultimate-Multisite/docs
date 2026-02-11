---
id: wu_handle_user_meta_fields
title: Actie - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields

Laat pluginontwikkelaars gebruikersmeta-gegevens op verschillende manieren opslaan als ze dat nodig hebben.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | De lijst met meta-velden, key => value gestructureerd. |
| $user | `\WP_User` | Het WordPress-gebruikersobject. |
| $customer | `\Customer` | Het Ultimate Multisite-klantobject. |
| $checkout | `\Checkout` | De checkout-klasse. |

### Since

- 2.0.4

### Source

Gedefinieerd in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) op regel 1244
