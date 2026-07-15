---
id: wu_domain_registration_completed
title: Aðgerð - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Keyrist eftir að lén hefur verið skráð með góðum árangri.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Greiðslan sem ræsti skráninguna. |
| $registration_data | `array&lt;string,mixed&gt;` | Lýsigögn skráningar (domain_name, provider_id, years, expiry_date o.s.frv.). |
| $result | `array&lt;string,mixed&gt;` | Hrátt niðurstöðufylki sem skráningaraðilinn skilaði. |

### Frá útgáfu {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) í línu 1204
