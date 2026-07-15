---
id: wu_domain_renewal_completed
title: Mahi - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Mahi: wu_domain_renewal_completed

Ka whakakāngia i muri i te whakahoutanga angitu o tētahi domain.

## Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Te utu nāna i whakaoho te whakahoutanga. |
| $renewal_data | `array&lt;string,mixed&gt;` | Ngā raraunga āpiti mō te whakahoutanga (domain_name, years, customer_id, aha atu). |
| $result | `array&lt;string,mixed&gt;` | Te array hua mata i whakahokia mai e te kairēhita, tae atu ki te expiry_date hou. |

### Mai i {#since}

- 2.0.0
### Pūtake {#source}

Kua tautuhia ki [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) i te rārangi 594
