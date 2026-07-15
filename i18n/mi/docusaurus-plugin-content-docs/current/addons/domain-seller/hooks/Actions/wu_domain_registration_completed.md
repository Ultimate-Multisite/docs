---
id: wu_domain_registration_completed
title: Mahi - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Ka whakahohe i muri i te rēhitatanga angitu o tētahi rohe.

## Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Te utu nāna i whakaoho te rēhitatanga. |
| $registration_data | `array&lt;string,mixed&gt;` | Ngā raraunga āpiti o te rēhitatanga (domain_name, provider_id, years, expiry_date, me ērā atu). |
| $result | `array&lt;string,mixed&gt;` | Te huānga hua mata i whakahokia mai e te kai-rēhita. |

### Mai i {#since}

- 2.0.0
### Pūtake {#source}

Kua tautuhia ki [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) i te rārangi 1204
