---
id: wu_domain_transfer_completed
title: Aksyon - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Ito ay tumatakbo pagkatapos makumpleto ang paglipat (transfer) ng isang domain.

## Mga Parameter {#parameters}

| Name | Type | Paglalarawan |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Ang object ng domain. |
| $transfer_data | `array` | Data ng pagkumpleto ng transfer. |

### Mula pa noong {#since}

- 2.1.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) sa linya 690
