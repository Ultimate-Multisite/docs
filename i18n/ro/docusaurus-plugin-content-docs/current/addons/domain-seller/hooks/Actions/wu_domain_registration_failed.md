---
id: wu_domain_registration_failed
title: Acțiune - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Se declanșează după ce o încercare de înregistrare de domeniu eșuează.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plățile care au declanșat înregistrarea. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadatele de înregistrare, incluzând status=failed și error_message. |
| $error_message | `string` | Mesajul de eroare ușor de citit de către utilizator, primit de la registrar. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) la linia 1250
