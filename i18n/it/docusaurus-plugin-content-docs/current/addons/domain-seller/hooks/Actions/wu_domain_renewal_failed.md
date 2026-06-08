---
id: wu_domain_renewal_failed
title: Azione - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Azione: wu_domain_renewal_failed

Si attiva quando un tentativo di rinnovo di dominio fallisce.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il pagamento che ha innescato il rinnovo. |
| $renewal_data | `array<string,mixed>` | Metadati di rinnovo (nome_dominio, anni, ecc.). |
| $error_message | `string` | Messaggio di errore leggibile dall'uomo fornito dal registrar. |

### Da

- 2.0.0
### Fonte

Definito in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) alla riga 630
