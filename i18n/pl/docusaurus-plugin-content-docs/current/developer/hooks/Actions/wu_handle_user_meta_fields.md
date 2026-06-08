---
id: wu_handle_user_meta_fields
title: Akcja - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Akcja: wu_handle_user_meta_fields

Pozwala deweloperom pluginów na zapisywanie danych użytkownika (meta data) na różne sposoby, jeśli zajdzie taka potrzeba.

## Parametry

| Nazwa | Typ | Opis |
|------|------|-------------|
| $meta_repository | `array` | Lista pól meta, ustrukturyzowana jako klucz => wartość. |
| $user | `\WP_User` | Obiekt użytkownika WordPress. |
| $customer | `\Customer` | Obiekt klienta Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa obsługująca proces kasy. |

### Od

- 2.0.4
### Źródło

Zdefiniowane w [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) w linii 1244
