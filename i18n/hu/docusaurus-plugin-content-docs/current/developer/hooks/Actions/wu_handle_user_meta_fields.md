---
id: wu_handle_user_meta_fields
title: Akció - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Engedi a plugin fejlesztőknek, hogy szükség szerint különböző módon mentse a felhasználói meta adatokat.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | A meta mezők listája, kulcs => érték struktúrában. |
| $user | `\WP_User` | A WordPress felhasználói objektum. |
| $customer | `\Customer` | Az Ultimate Multisite vásárlói objektum. |
| $checkout | `\Checkout` | A checkout osztály. |

### Since {#since}

- 2.0.4
### Source {#source}

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) at line 1244
