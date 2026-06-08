---
id: wu_domain_registration_completed
title: Azione - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Si attiva dopo che un dominio è stato registrato con successo.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il pagamento che ha causato la registrazione. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadati di registrazione (domain_name, provider_id, years, expiry_date, ecc.). |
| $result | `array&lt;string,mixed&gt;` | Array di risultati grezzi restituito dal registrar. |

### Da

- 2.0.0
### Fonte

Definito in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) alla riga 1204
