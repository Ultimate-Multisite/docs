---
id: wu_domain_transfer_completed
title: Azione - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

Si attiva dopo che un trasferimento di dominio è stato completato.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | L'oggetto dominio. |
| $transfer_data | `array` | Dati di completamento del trasferimento. |

### Da {#since}

- 2.1.0
### Fonte {#source}

Definito in [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) alla riga 690
