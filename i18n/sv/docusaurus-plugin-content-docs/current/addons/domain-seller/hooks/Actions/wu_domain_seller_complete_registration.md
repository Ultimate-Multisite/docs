---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Körs när en betalning går till ett status som ska utlösa domänregistrering.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningsobjektet. |
| $old_status | `string` | Det tidigare betalningsstatuset innan övergången. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) på rad 266
