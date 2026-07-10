---
id: wu_handle_user_meta_fields
title: Dejanje - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Dejanje: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Omogoči razvijalcem pluginov, da po potrebi shranjujejo meta podatke uporabnikov na različne načine.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $meta_repository | `array` | Seznam meta polj, strukturiran kot key =&gt; value. |
| $user | `\WP_User` | Objekt uporabnika WordPress. |
| $customer | `\Customer` | Objekt stranke Ultimate Multisite. |
| $checkout | `\Checkout` | Razred zaključka nakupa. |

### Od različice {#since}

- 2.0.4
### Vir {#source}

Določeno v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) v vrstici 1244
