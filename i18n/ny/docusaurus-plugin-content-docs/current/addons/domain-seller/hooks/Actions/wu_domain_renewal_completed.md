---
id: wu_domain_renewal_completed
title: Zochita - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Zochita: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Imayambitsidwa domain ikakonzedwanso bwino.

## Magawo {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipiro omwe anayambitsa kukonzanso. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya kukonzanso (domain_name, years, customer_id, ndi zina). |
| $result | `array&lt;string,mixed&gt;` | Array ya zotsatira zosaphika yobwezedwa ndi wolembetsa domain kuphatikizapo expiry_date yatsopano. |

### Kuyambira {#since}

- 2.0.0
### Gwero {#source}

Yafotokozedwa mu [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) pa mzere 594
