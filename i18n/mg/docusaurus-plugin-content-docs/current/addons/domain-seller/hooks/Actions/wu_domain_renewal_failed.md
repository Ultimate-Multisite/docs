---
id: wu_domain_renewal_failed
title: Hetsika - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Hetsika: wu_domain_renewal_failed

Mitranga aorian’ny tsy fahombiazan’ny andrana fanavaozana sehatra iray.

## Masontsivana {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ny fandoavam-bola izay niteraka ny fanavaozana. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata momba ny fanavaozana (domain_name, taona, sns.). |
| $error_message | `string` | Hafatra hadisoana mora vakina avy amin’ny registrar. |

### Hatramin’ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin’ny [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) amin’ny andalana 630
