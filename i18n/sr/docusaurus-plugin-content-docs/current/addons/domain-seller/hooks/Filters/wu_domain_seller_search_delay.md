---
id: wu_domain_seller_search_delay
title: Филтер - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Филтер: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Филтрира кашњење debounce претраге домена у милисекундама.

Повећајте ову вредност да бисте смањили API позиве на спорим везама.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $delay | `int` | Debounce кашњење у милисекундама. Подразумевано 500. |

### Од верзије {#since}

- 2.1.0
### Извор {#source}

Дефинисано у [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) у реду 854
