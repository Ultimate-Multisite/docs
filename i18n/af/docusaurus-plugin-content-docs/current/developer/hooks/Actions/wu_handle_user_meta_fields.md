---
id: wu_handle_user_meta_fields
title: Action - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Aksie: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Laat plugin-ontwikkelaars gebruikersmeta-data op verskillende maniere stoor indien hulle dit nodig het.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $meta_repository | `array` | Die lys van meta-velde, gestruktureer as sleutel => waarde. |
| $user | `\WP_User` | Die WordPress gebruikersobyek. |
| $customer | `\Customer` | Die Ultimate Multisite kliëntobyek. |
| $checkout | `\Checkout` | Die checkout-klas. |

### Sedert {#since}

- 2.0.4
### Bron {#source}

Bepaald in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) by lyn 1244
