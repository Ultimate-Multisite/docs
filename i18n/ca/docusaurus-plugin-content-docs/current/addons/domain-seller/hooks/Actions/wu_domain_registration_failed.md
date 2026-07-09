---
id: wu_domain_registration_failed
title: Acció - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

S'executa quan falla un intent de registre de domini.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pagament que va activar el registre. |
| $registration_data | `array<string,mixed>` | Metadades de registre incloent status=failed i error_message. |
| $error_message | `string` | Missatge d'error legible per l'humà de la empresa registradora. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) a la línia 1250
