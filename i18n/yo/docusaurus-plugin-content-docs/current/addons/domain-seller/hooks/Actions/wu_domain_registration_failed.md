---
id: wu_domain_registration_failed
title: Ìṣe - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Ó máa ń ṣiṣẹ́ lẹ́yìn tí ìgbìyànjú ìforúkọsílẹ̀ domain bá kùnà.

## Àwọn Parameter {#parameters}

| Orúkọ | Iru | Àpejuwe |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ìsanwó tó fa ìforúkọsílẹ̀ náà. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ìforúkọsílẹ̀ pẹ̀lú status=failed àti error_message. |
| $error_message | `string` | Ìfiránṣẹ́ àṣìṣe tí ènìyàn lè kà láti ọ̀dọ̀ registrar. |

### Láti {#since}

- 2.0.0
### Orísun {#source}

A ṣàlàyé rẹ̀ nínú [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) ní ìlà 1250
