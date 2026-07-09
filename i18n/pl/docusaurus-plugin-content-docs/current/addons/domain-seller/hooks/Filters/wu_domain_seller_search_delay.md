---
id: wu_domain_seller_search_delay
title: Filtr - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filtr: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Filtruje opóźnienie (debounce delay) wyszukiwania domeny w milisekundach.

Zwiększenie tej wartości zmniejszy liczbę wywołań API w przypadku wolnego połączenia.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $delay | `int` | Opóźnienie debouncing w milisekundach. Domyślnie 500. |

### Od {#since}

- 2.1.0
### Źródło {#source}

Zdefiniowane w [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) w linii 854
