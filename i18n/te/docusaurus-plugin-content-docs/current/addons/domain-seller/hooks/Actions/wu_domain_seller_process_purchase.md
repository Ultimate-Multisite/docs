---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

చెక్అవుట్ పూర్తయిన తర్వాత డొమైన్ కొనుగోలు ప్రాసెస్ అవుతున్నప్పుడు ఇది ట్రిగ్గర్ అవుతుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | చెల్లింపు ఆబ్జెక్ట్ (payment object). |
| $checkout_data | `array<string,mixed>` | సైన్అప్ ఫారమ్ నుండి వచ్చిన పూర్తి చెక్అవుట్ డేటా. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) లోని 246వ లైన్‌లో నిర్వచించబడింది.
