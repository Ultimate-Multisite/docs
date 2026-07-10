---
id: wu_handle_user_meta_fields
title: Ketso - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Ketso: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Dumella baetsi ba ditlatsetso ho boloka data ya meta ya mosebedisi ka ditsela tse fapaneng haeba ba hloka.

## Dipharamitha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $meta_repository | `array` | Lenane la masimo a meta, le hlophisitswe ka key =&gt; value. |
| $user | `\WP_User` | Ntho ya mosebedisi wa WordPress. |
| $customer | `\Customer` | Ntho ya moreki wa Ultimate Multisite. |
| $checkout | `\Checkout` | Sehlopha sa tefo. |

### Ho tloha {#since}

- 2.0.4
### Mohlodi {#source}

E hlalositswe ho [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) moleng wa 1244
