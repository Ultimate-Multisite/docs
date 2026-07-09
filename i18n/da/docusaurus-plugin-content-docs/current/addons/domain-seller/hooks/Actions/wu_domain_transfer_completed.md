---
id: wu_domain_transfer_completed
title: Handling - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Udløses, efter en domæneoverførsel er fuldført.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domæneobjektet. |
| $transfer_data | `array` | Data for fuldførelse af overførsel. |

### Siden {#since}

- 2.1.0
### Kilde {#source}

Defineret i [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) på linje 690
