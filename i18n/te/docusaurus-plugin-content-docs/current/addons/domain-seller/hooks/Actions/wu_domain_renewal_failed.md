---
id: wu_domain_renewal_failed
title: చర్య - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

డొమైన్ రిన్యూవల్ ప్రయత్నం విఫలమైన తర్వాత ఇది ట్రిగ్గర్ అవుతుంది.

## పారామీటర్లు {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | రిన్యూవల్ చేయడానికి కారణమైన పేమెంట్ వివరాలు. |
| $renewal_data | `array&lt;string,mixed&gt;` | రిన్యూవల్ మెటాడేటా (domain_name, years, మొదలైనవి). |
| $error_message | `string` | రిజిస్ట్రార్ నుండి వచ్చిన మానవచదవగలిగే ఎర్రర్ మెసేజ్. |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) లోని 630వ లైన్‌లో నిర్వచించబడింది.
