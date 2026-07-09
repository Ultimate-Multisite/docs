---
id: wu_domain_transfer_completed
title: Action - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Triggas när överföringen av ett domännamn är slutförd.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Domänobjektet. |
| $transfer_data | `array` | Data som bekräftar överföringen. |

### Sedan {#since}

- 2.1.0
### Källa {#source}

Definieras i [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) på rad 690
