---
id: wu_domain_renewal_failed
title: Ìṣe - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Ó máa ń ṣiṣẹ́ lẹ́yìn tí ìgbìyànjú ìtúnṣe domain kan bá kùnà.

## Àwọn Parameter {#parameters}

| Orúkọ | Type | Àpèjúwe |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ìsanwó tó fa ìtúnṣe náà. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ìtúnṣe (domain_name, years, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ). |
| $error_message | `string` | Ìfiranṣẹ́ àṣìṣe tí ènìyàn lè kà láti ọ̀dọ̀ registrar. |

### Láti {#since}

- 2.0.0
### Orísun {#source}

Ti ṣàlàyé nínú [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ní laini 630
