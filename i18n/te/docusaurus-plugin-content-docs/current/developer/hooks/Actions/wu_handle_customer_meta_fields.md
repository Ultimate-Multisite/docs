---
id: wu_handle_customer_meta_fields
title: Action - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

ప్లగిన్ డెవలపర్‌లు అవసరమైతే మెటా డేటాను వివిధ రకాలుగా సేవ్ చేయడానికి ఇది అనుమతిస్తుంది.

## పారామీటర్లు

| Name | Type | Description |
|------|------|-------------|
| $meta_repository | `array` | మెటా ఫీల్డ్‌ల జాబితా, key => value రూపంలో ఉంటుంది. |
| $customer | `\Customer` | Ultimate Multisite కస్టమర్ ఆబ్జెక్ట్. |
| $checkout | `\Checkout` | చెక్అవుట్ క్లాస్. |

### ఎప్పటి నుండి

- 2.0.0
### మూలం

[inc/checkout/class-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) లోని 1211వ లైన్‌లో నిర్వచించబడింది.
