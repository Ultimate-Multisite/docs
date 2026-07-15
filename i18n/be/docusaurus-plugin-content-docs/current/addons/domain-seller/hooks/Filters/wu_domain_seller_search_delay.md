---
id: wu_domain_seller_search_delay
title: Filter - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay

Фільтруе запыненне (debounce) пошуку домена ў мілісекундах.

Павялічце гэтае значэнне, каб знізіць выклікі API пры працы павайготных злучэнняў.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $delay | `int` | Запыненне (debounce) пошуку ў мілісекундах. Па спісыкам 500. |

### З {#since}

- 2.1.0
### Паходжанне {#source}

Вызначана ў [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) у 854-й кропцы
