---
id: wu_handle_user_meta_fields
title: Veprim - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Veprim: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Lejoni zhvilluesit e plugin të ruajnë të dhënat meta të përdoruesit në mënyra të ndryshme nëse u nevojitet.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $meta_repository | `array` | Lista e fushave meta, e strukturuar si key =&gt; value. |
| $user | `\WP_User` | Objekti i përdoruesit WordPress. |
| $customer | `\Customer` | Objekti i klientit Ultimate Multisite. |
| $checkout | `\Checkout` | Klasa e checkout. |

### Që prej {#since}

- 2.0.4
### Burimi {#source}

Përcaktuar në [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) në rreshtin 1244
