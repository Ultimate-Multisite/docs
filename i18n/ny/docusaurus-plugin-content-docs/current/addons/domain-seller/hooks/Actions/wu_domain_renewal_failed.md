---
id: wu_domain_renewal_failed
title: Chochita - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Chochita: wu_domain_renewal_failed

Imayambika pambuyo poti kuyesa kukonzanso domain kwalephera.

## Ma parameter

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipiro amene anayambitsa kukonzanso. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya kukonzanso (domain_name, years, ndi zina). |
| $error_message | `string` | Uthenga wolakwa womveka kwa munthu kuchokera kwa registrar. |

### Kuyambira

- 2.0.0
### Gwero

Yafotokozedwa mu [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) pa mzere 630
