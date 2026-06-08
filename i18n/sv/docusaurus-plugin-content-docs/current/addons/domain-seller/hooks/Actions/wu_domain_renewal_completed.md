---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Triggas efter att ett domännamn har blivit framgångsrikt förnyat.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningen som utlöste förnyelsen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata för förnyelsen (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Rå resultatarray som returneras av registratorn, inklusive det nya expiry_date. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) på rad 594
