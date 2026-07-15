---
id: wu_domain_transfer_completed
title: Radnja - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Akcija: wu_domain_transfer_completed

Pokreće se nakon dovršetka prijenosa domene.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Objekt domene. |
| $transfer_data | `array` | Podaci o dovršetku prijenosa. |

### Od {#since}

- 2.1.0
### Izvor {#source}

Definirano u [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) u retku 690
