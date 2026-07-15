---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Triggas när ett försök till domänförnyelse misslyckas.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningen som utlöste förnyelsen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata för förnyelsen (domännamn, år, etc.). |
| $error_message | `string` | Läsbart felmeddelande från registrar. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) på rad 630
