---
id: wu_domain_seller_search_delay
title: Szűrő - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Szűrő: wu_domain_seller_search_delay

Ez a szűrő szabályozza a tartománykeresés (domain search) debounce késlekedő idejét millirendben.

Ha növeli ennek az értéknek a méretét, csökkentheti az API hívásokat lassú kapcsolatokon.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $delay | `int` | A debounce késlekedő ideje millirendben. Alapértelmezett érték 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Definíciója található [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) fájlban, 854-sorban.
