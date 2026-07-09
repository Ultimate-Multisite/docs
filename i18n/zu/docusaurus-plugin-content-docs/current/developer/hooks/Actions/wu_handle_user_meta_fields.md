---
id: wu_handle_user_meta_fields
title: Isenzo - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Isenzo: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Vumela abathuthukisi be-plugin ukuthi balondoloze idatha ye-meta yomsebenzisi ngezindlela ezahlukene uma kudingeka.

## Amapharamitha {#parameters}

| Igama | Uhlobo | Incazelo |
|------|------|-------------|
| $meta_repository | `array` | Uhlu lwezinkambu ze-meta, olwakhiwe njenge-key =&gt; value. |
| $user | `\WP_User` | Into yomsebenzisi we-WordPress. |
| $customer | `\Customer` | Into yekhasimende le-Ultimate Multisite. |
| $checkout | `\Checkout` | Ikilasi le-checkout. |

### Kusukela {#since}

- 2.0.4
### Umthombo {#source}

Kuchazwe ku-[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) emgqeni 1244
