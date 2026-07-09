---
id: wu_domain_registration_failed
title: Mahi - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Mahi: wu_domain_registration_failed

Ka whakaohohia i muri i te rahunga o tētahi nganatanga rēhita domain.

## Tawhā

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Te utu nāna i whakaoho te rēhitatanga. |
| $registration_data | `array&lt;string,mixed&gt;` | Ngā raraunga ā-rēhita tae atu ki status=failed me error_message. |
| $error_message | `string` | He karere hapa mārama ki te tangata nō te kaiwhakarēhita. |

### Mai i

- 2.0.0
### Pūtake

Kua tautuhia ki [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) i te rārangi 1250
