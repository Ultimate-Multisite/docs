---
id: wu_handle_user_meta_fields
title: Chochita - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Zochita: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Lolani opanga plugin kusunga user meta data m'njira zosiyanasiyana ngati akufunikira.

## Magawo {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $meta_repository | `array` | Mndandanda wa meta fields, wokonzedwa ngati key =&gt; value. |
| $user | `\WP_User` | Chinthu cha wogwiritsa ntchito wa WordPress. |
| $customer | `\Customer` | Chinthu cha kasitomala wa Ultimate Multisite. |
| $checkout | `\Checkout` | Kalasi ya kulipira. |

### Kuyambira {#since}

- 2.0.4
### Gwero {#source}

Yafotokozedwa mu [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) pa mzere 1244
