---
id: wu_domain_registration_completed
title: Ìṣe - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Ó máa ń ṣiṣẹ́ lẹ́yìn tí a ti forúkọ ìkápá sílẹ̀ ní aṣeyọrí.

## Àwọn Parameters

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ìsanwó tí ó fa ìforúkọsílẹ̀. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ìforúkọsílẹ̀ (domain_name, provider_id, years, expiry_date, àti bẹ́ẹ̀ bẹ́ẹ̀ lọ). |
| $result | `array&lt;string,mixed&gt;` | Array abajade gangan tí registrar dá padà. |

### Láti

- 2.0.0
### Orísun

Ti ṣàlàyé nínú [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ní laini 1204
