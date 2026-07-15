---
id: wu_domain_renewal_failed
title: Aktion - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Wird ausgelöst, wenn ein Versuch zur Domain-Verlängerung fehlschlägt.

## Parameter {#parameters}

| Name | Type | Beschreibung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Das Zahlungsobjekt, das die Verlängerung ausgelöst hat. |
| $renewal_data | `array<string,mixed>` | Metadaten zur Verlängerung (domain_name, years usw.). |
| $error_message | `string` | Eine lesbare Fehlermeldung vom Registrar. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) in Zeile 630
