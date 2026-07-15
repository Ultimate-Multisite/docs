---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

Lehetővé teszi a plugin fejlesztőknek, hogy szükség esetén más módon mentse el a meta adatokat.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $meta_repository | `array` | A meta mezők listája, kulcs => érték struktúrában. |
| $customer | `\Customer` | Az Ultimate Multisite vásárlói objektuma. |
| $checkout | `\Checkout` | A checkout osztálya. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) fájlban, 1211-sorban.
