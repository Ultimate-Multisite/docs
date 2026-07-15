---
id: wu_domain_registration_completed
title: Aksyon - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Aksyon: wu_domain_registration_completed

Deklanche apre yon domèn fin anrejistre avèk siksè.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Peman ki te deklanche anrejistreman an. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadone anrejistreman (domain_name, provider_id, ane, expiry_date, elatriye). |
| $result | `array&lt;string,mixed&gt;` | Tablo rezilta brit rejistrè a retounen. |

### Depi {#since}

- 2.0.0
### Sous {#source}

Defini nan [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) nan liy 1204
