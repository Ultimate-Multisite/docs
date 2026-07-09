---
id: wu_domain_transfer_completed
title: Dejanje - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Sproži se po zaključku prenosa domene.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Objekt domene. |
| $transfer_data | `array` | Podatki o zaključku prenosa. |

### Od različice {#since}

- 2.1.0
### Vir {#source}

Definirano v [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) v vrstici 690
