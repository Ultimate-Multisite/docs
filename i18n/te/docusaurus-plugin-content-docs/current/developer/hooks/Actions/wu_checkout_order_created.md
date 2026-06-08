---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

చెక్అవుట్ ఆర్డర్ పూర్తిగా తయారైన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

విడివిడిగా బిల్లింగ్ సైకిల్స్ ఉన్న ఉత్పత్తుల కోసం అదనపు (secondary) memberships సృష్టించడానికి యాడ్-ఆన్స్ దీనిని ఉపయోగించవచ్చు.

## పారామీటర్లు (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | కార్ట్/ఆర్డర్ ఆబ్జెక్ట్. |
| $customer | `\WP_Ultimo\Models\Customer` | కస్టమర్. |
| $membership | `\WP_Ultimo\Models\Membership` | ప్రధాన membership. |
| $payment | `\WP_Ultimo\Models\Payment` | చెల్లింపు (Payment). |

### ఎప్పటి నుండి (Since)

- 2.5.0
### మూలం (Source)

ఇది [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) లోని 891వ లైన్‌లో నిర్వచించబడింది.
