---
id: wu_domain_renewal_completed
title: Ìṣe - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Ìṣe: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Máa nṣiṣẹ́ lẹ́yìn tí domain kan ti tún ṣe ìforúkọsílẹ̀ rẹ̀ ní aṣeyọrí.

## Àwọn Párámítà {#parameters}

| Orúkọ | Irú | Àpèjúwe |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ìsanwó tí ó fa ìtúnṣe ìforúkọsílẹ̀ náà. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ìtúnṣe ìforúkọsílẹ̀ (domain_name, years, customer_id, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ). |
| $result | `array&lt;string,mixed&gt;` | Àkójọpọ̀ èsì aise tí registrar dá padà, pẹ̀lú expiry_date tuntun. |

### Láti {#since}

- 2.0.0
### Orísun {#source}

Ti ṣàlàyé nínú [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ní ìlà 594
