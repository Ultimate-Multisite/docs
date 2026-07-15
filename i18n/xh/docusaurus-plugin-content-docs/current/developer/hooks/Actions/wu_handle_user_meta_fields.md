---
id: wu_handle_user_meta_fields
title: Isenzo - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Isenzo: wu_handle_user_meta_fields

Vumela abaphuhlisi be-plugin ukuba bagcine idatha ye-meta yomsebenzisi ngeendlela ezahlukeneyo ukuba bayayidinga.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $meta_repository | `array` | Uluhlu lweendawo ze-meta, olwakhiwe njenge-key =&gt; value. |
| $user | `\WP_User` | I-object yomsebenzisi we-WordPress. |
| $customer | `\Customer` | I-object yomthengi we-Ultimate Multisite. |
| $checkout | `\Checkout` | I-class ye-checkout. |

### Ukususela {#since}

- 2.0.4
### Umthombo {#source}

Ichazwe kwi-[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) kumgca 1244
