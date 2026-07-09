---
id: wu_handle_user_meta_fields
title: Handling - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Tillad plugin-udviklere at gemme bruger-metadata på forskellige måder, hvis de har brug for det.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $meta_repository | `array` | Listen over meta-felter, struktureret som key =&gt; value. |
| $user | `\WP_User` | WordPress-brugerobjektet. |
| $customer | `\Customer` | Ultimate Multisite-kundeobjektet. |
| $checkout | `\Checkout` | Checkout-klassen. |

### Siden {#since}

- 2.0.4
### Kilde {#source}

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) på linje 1244
