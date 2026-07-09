---
id: wu_domain_registration_failed
title: Aksyon - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aksyon: wu_domain_registration_failed

Lanse apre yon tantativ anrejistreman domèn echwe.

## Paramèt

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Peman ki te deklanche anrejistreman an. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadone anrejistreman ki gen ladan status=failed ak error_message. |
| $error_message | `string` | Mesaj erè moun ka li ki soti nan rejistrè a. |

### Depi

- 2.0.0
### Sous

Defini nan [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) nan liy 1250
