---
id: wu_domain_seller_search_delay
title: Filtro - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtro: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtra il ritardo di debounce della ricerca del dominio in millisecondi.

Aumentare questo valore può ridurre le chiamate all'API quando la connessione è lenta.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $delay | `int` | Ritardo di debounce in millisecondi. Predefinito 500. |

### Da {#since}

- 2.1.0
### Fonte {#source}

Definito in [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) alla riga 854
