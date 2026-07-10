---
id: wu_handle_customer_meta_fields
title: Aðgerð - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

Leyfir plugin-hönnuðum að vista lýsigögn á mismunandi vegu ef þeir þurfa þess.

## Færibreytur {#parameters}

| Nafn | Tegund | Lýsing |
|------|------|-------------|
| $meta_repository | `array` | Listi yfir lýsigagnareiti, uppbyggður sem key =&gt; value. |
| $customer | `\Customer` | Customer-hlutur Ultimate Multisite. |
| $checkout | `\Checkout` | Greiðsluferlis-klasinn. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) í línu 1211
