---
id: wu_handle_user_meta_fields
title: Գործողություն - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Գործողություն՝ wu_handle_user_meta_fields {#action-wuhandleusermetafields}

Թույլ է տալիս plugin մշակողներին անհրաժեշտության դեպքում օգտատիրոջ մետա տվյալները պահպանել տարբեր ձևերով։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $meta_repository | `array` | Մետա դաշտերի ցանկը՝ key =&gt; value կառուցվածքով։ |
| $user | `\WP_User` | WordPress օգտատիրոջ օբյեկտը։ |
| $customer | `\Customer` | Ultimate Multisite հաճախորդի օբյեկտը։ |
| $checkout | `\Checkout` | Checkout դասը։ |

### Սկսած {#since}

- 2.0.4
### Աղբյուր {#source}

Սահմանված է [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244)-ում՝ 1244-րդ տողում։
