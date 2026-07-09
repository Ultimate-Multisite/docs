---
id: wu_handle_customer_meta_fields
title: ක්‍රියාව - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# ක්‍රියාව: wu_handle_customer_meta_fields {#action-wuhandlecustomermetafields}

අවශ්‍ය නම් plugin සංවර්ධකයන්ට meta දත්ත වෙනස් ආකාරවලින් සුරැකීමට ඉඩ දෙන්න.

## පරාමිතීන් {#parameters}

| නම | වර්ගය | විස්තරය |
|------|------|-------------|
| $meta_repository | `array` | key =&gt; value ආකාරයට ව්‍යුහගත meta ක්ෂේත්‍ර ලැයිස්තුව. |
| $customer | `\Customer` | Ultimate Multisite පාරිභෝගික වස්තුව. |
| $checkout | `\Checkout` | ගෙවීම් අවසන් කිරීමේ පන්තිය. |

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) තුළ 1211 වන පේළියේ නිර්වචනය කර ඇත.
