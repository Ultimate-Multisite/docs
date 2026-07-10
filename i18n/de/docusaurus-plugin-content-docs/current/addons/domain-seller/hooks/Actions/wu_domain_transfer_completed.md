---
id: wu_domain_transfer_completed
title: Action - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed {#action-wudomaintransfercompleted}

Wird ausgelöst, nachdem ein Domain-Transfer abgeschlossen wurde.

## Parameter {#parameters}

| Name | Type | Beschreibung |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | Das Domain-Objekt. |
| $transfer_data | `array` | Daten zum Abschluss des Transfers. |

### Seit {#since}

- 2.1.0
### Quelle {#source}

Definiert in [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) in Zeile 690
