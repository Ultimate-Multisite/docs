---
id: wu_domain_registration_failed
title: Azione - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Azione: wu_domain_registration_failed

Si attiva dopo che un tentativo di registrazione di dominio fallisce.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il pagamento che ha causato il tentativo di registrazione. |
| $registration_data | `array<string,mixed>` | Metadati di registrazione che includono lo stato=fallito e il messaggio di errore. |
| $error_message | `string` | Messaggio di errore leggibile dall'uomo fornito dal registrar. |

### Da {#since}

- 2.0.0
### Fonte {#source}

Definito in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) alla riga 1250
