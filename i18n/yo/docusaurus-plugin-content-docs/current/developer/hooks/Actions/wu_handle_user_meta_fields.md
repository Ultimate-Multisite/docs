---
id: wu_handle_user_meta_fields
title: Ìgbésẹ̀ - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Ìṣe: wu_handle_user_meta_fields

Gba àwọn olùdàgbàsókè plugin láàyè láti fi user meta data pamọ́ ní àwọn ọ̀nà ọ̀tọ̀ bí wọ́n bá nílò rẹ̀.

## Àwọn Parameters

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $meta_repository | `array` | Àtòjọ àwọn meta fields, tí a ṣètò bí key =&gt; value. |
| $user | `\WP_User` | WordPress user object. |
| $customer | `\Customer` | Ultimate Multisite customer object. |
| $checkout | `\Checkout` | Checkout class náà. |

### Láti

- 2.0.4
### Orísun

A ṣàlàyé rẹ̀ nínú [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) ní ìlà 1244
