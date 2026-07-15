---
id: wu_domain_registration_completed
title: Çalakî - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Çalakî: wu_domain_registration_completed

Piştî ku domain bi serkeftî hat tomar kirin, tê xebitandin.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ew payment ku tomarkirinê dest pê kir. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadatayên tomarkirinê (domain_name, provider_id, years, expiry_date, hwd.). |
| $result | `array&lt;string,mixed&gt;` | Array-a encama xav ku ji aliyê registrar ve hat vegerandin. |

### Ji guhertoyê ve {#since}

- 2.0.0
### Çavkanî {#source}

Di [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) de li rêza 1204 hatiye pênasekirin.
