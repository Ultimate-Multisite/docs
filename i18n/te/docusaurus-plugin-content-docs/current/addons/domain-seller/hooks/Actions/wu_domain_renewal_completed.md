---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

ఒక డొమైన్ విజయవంతంగా పునరుద్ధరించబడిన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## పారామీటర్లు {#parameters}

| Name | Type | వివరణ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | పునరుద్ధరణను ప్రేరేపించిన చెల్లింపు (payment). |
| $renewal_data | `array&lt;string,mixed&gt;` | పునరుద్ధరణ మెటాడేటా (domain_name, years, customer_id, మొదలైనవి). |
| $result | `array&lt;string,mixed&gt;` | కొత్త expiry_date తో సహా రిజిస్ట్రార్ ద్వారా తిరిగి ఇవ్వబడిన ముడి ఫలిత శ్రేణి (raw result array). |

### నుండి {#since}

- 2.0.0
### మూలం {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) లో 594వ లైన్‌లో నిర్వచించబడింది
