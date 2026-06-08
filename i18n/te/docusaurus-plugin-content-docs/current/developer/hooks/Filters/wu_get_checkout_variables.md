---
id: wu_get_checkout_variables
title: ఫిల్టర్ - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

చెక్అవుట్ పేజీ యొక్క ప్రీ-సెట్‌లను ఫిల్టర్ చేయడానికి ప్లగిన్ డెవలపర్‌లకు ఇది అనుమతిస్తుంది.

జాగ్రత్తగా ఉండండి, లేని కీలు (missing keys) ఫ్రంట్-ఎండ్‌లో చెక్అవుట్‌ను పూర్తిగా విచ్ఛిన్నం చేయవచ్చు.

## పారామీటర్లు (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | స్థానికీకరించబడిన వేరియబుల్స్. |
| $checkout | `\Checkout` | చెక్అవుట్ క్లాస్. |

### Since

- 2.0.0
### Source

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) లోని 1970వ లైన్‌లో నిర్వచించబడింది.

## తిరిగి ఇస్తుంది (Returns)
కొత్త వేరియబుల్స్ శ్రేణి (new variables array).
