---
id: wu_domain_registration_failed
title: Hetsika - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Mitranga rehefa tsy mahomby ny andrana fisoratana anarana domain.

## Masontsivana {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ny fandoavam-bola izay nampandeha ny fisoratana anarana. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata fisoratana anarana ahitana status=failed sy error_message. |
| $error_message | `string` | Hafatra fahadisoana azon’olombelona vakina avy amin’ny mpisoratra anarana. |

### Hatramin'ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) amin'ny andalana 1250
