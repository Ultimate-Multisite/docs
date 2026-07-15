---
id: wu_domain_transfer_completed
title: Toiminto - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Käynnistyy, kun verkkotunnuksen siirto on valmis.

## Parametrit {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Verkkotunnusobjekti. |
| $transfer_data | `array` | Siirron valmistumistiedot. |

### Alkaen {#since}

- 2.1.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) rivillä 690
