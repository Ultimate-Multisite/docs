---
id: wu_domain_transfer_completed
title: Akcija - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Akcija: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Pokreće se nakon što je transfer domene završen.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Objekat domene. |
| $transfer_data | `array` | Podaci o završetku transfera. |

### Od {#since}

- 2.1.0
### Izvor {#source}

Definisano je u [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) na liniji 690
