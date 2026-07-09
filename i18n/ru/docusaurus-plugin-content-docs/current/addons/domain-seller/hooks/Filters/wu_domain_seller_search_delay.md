---
id: wu_domain_seller_search_delay
title: Фильтр - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

Фильтрует задержку дебаунса поиска домена в миллисекундах.

Увеличьте это значение, чтобы уменьшить количество запросов к API при медленном соединении.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | Задержка дебаунса в миллисекундах. По умолчанию 500. |

### Since {#since}

- 2.1.0
### Source {#source}

Определен в [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) в строке 854
