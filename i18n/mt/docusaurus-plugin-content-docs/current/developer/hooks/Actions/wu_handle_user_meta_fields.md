---
id: wu_handle_user_meta_fields
title: Azzjoni - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Azzjoni: wu_handle_user_meta_fields

Ippermetti lill-iżviluppaturi tal-plugin isalvaw id-dejta meta tal-utent b’modi differenti jekk ikollhom bżonn.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $meta_repository | `array` | Il-lista ta’ oqsma meta, strutturata bħala key =&gt; value. |
| $user | `\WP_User` | L-oġġett tal-utent WordPress. |
| $customer | `\Customer` | L-oġġett tal-klijent Ultimate Multisite. |
| $checkout | `\Checkout` | Il-klassi tal-checkout. |

### Minn

- 2.0.4
### Sors

Iddefinit f’[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) fil-linja 1244
