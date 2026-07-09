---
id: wu_domain_registration_failed
title: Acción - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Acción: wu_domain_registration_failed

Dispárase despois de que falle un intento de rexistro de dominio.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que activou o rexistro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadatos do rexistro, incluíndo status=failed e error_message. |
| $error_message | `string` | Mensaxe de erro lexible para humanos procedente do rexistrador. |

### Desde

- 2.0.0
### Fonte

Definido en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na liña 1250
