---
id: wu_handle_user_meta_fields
title: Ago - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Ago: wu_handle_user_meta_fields

Permesas al plugin-programistoj konservi uzantajn metadatumojn en malsamaj manieroj, se ili bezonas.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $meta_repository | `array` | La listo de metakampoj, strukturita kiel ŝlosilo =&gt; valoro. |
| $user | `\WP_User` | La WordPress-uzanto-objekto. |
| $customer | `\Customer` | La Ultimate Multisite-kliento-objekto. |
| $checkout | `\Checkout` | La checkout-klaso. |

### Ekde {#since}

- 2.0.4
### Fonto {#source}

Difinita en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ĉe linio 1244
