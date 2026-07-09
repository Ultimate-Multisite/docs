---
id: wu_domain_seller_search_delay
title: Филтер - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Филтер: wu_domain_seller_search_delay

Го филтрира debounce доцнењето за пребарување домени во милисекунди.

Зголемете ја оваа вредност за да ги намалите API повиците на бавни конекции.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $delay | `int` | Debounce доцнење во милисекунди. Стандардно 500. |

### Од

- 2.1.0
### Извор

Дефинирано во [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) на линија 854
