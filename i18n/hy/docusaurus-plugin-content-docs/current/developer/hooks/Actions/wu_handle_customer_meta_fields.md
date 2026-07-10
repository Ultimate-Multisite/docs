---
id: wu_handle_customer_meta_fields
title: Գործողություն - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Գործողություն: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Թույլ տվեք plugin մշակողներին պահպանել մետատվյալները տարբեր եղանակներով, եթե նրանց դա անհրաժեշտ է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $meta_repository | `array` | Մետա դաշտերի ցանկը՝ կառուցված key =&gt; value ձևաչափով։ |
| $customer | `\Customer` | Ultimate Multisite-ի հաճախորդի օբյեկտը։ |
| $checkout | `\Checkout` | Վճարման ձևակերպման դասը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) ֆայլում՝ 1211-րդ տողում։
