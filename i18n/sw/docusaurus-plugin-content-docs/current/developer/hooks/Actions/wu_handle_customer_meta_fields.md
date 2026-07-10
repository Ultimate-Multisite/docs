---
id: wu_handle_customer_meta_fields
title: Kitendo - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Inaruhusu watengenezaji wa plugin kuhifadhi data ya meta kwa njia mbalimbali kulingana na mahitaji yao.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | Orodha ya sehemu za meta, zilizopangwa kwa muundo wa key => value. |
| $customer | `\Customer` | Object ya mteja wa Ultimate Multisite. |
| $checkout | `\Checkout` | Class ya checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Imefafanuliwa katika [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) kwenye mstari wa 1211
