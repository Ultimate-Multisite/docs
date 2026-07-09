---
id: wu_domain_registration_completed
title: Chochita - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Imayambitsidwa domain ikalembetsedwa bwino.

## Ma Parameter

| Dzina | Type | Kufotokozera |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Malipiro amene anayambitsa kulembetsa. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ya kulembetsa (domain_name, provider_id, years, expiry_date, ndi zina). |
| $result | `array&lt;string,mixed&gt;` | Array ya zotsatira zosakonzedwa yobwezeredwa ndi registrar. |

### Kuyambira

- 2.0.0
### Gwero

Yafotokozedwa mu [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) pa mzere 1204
