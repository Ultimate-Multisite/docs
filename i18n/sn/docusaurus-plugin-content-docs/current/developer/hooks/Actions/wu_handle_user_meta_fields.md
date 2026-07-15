---
id: wu_handle_user_meta_fields
title: Chiito - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Chiito: wu_handle_user_meta_fields

Bvumira vagadziri vezviwedzerwa kuchengetedza metadata yemushandisi nenzira dzakasiyana kana vachida.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $meta_repository | `array` | Rondedzero yeminda ye meta, yakarongwa se key =&gt; value. |
| $user | `\WP_User` | Object yemushandisi weWordPress. |
| $customer | `\Customer` | Object yemutengi weUltimate Multisite. |
| $checkout | `\Checkout` | Kirasi yekubhadhara. |

### Kubva {#since}

- 2.0.4
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) pamutsetse 1244
