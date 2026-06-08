---
id: get_site_url_for_previewer
title: Фільтр - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Дозволяє розробникам плагінів фільтрувати URL, який використовується у попередньому перегляді.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Домен, який використовується зараз за замовчуванням. Корисний для маніпуляцій. |
| $domain_options | `array` | Список усіх опцій доменів, введених у Ultimate Multisite Settings -> Network Settings -> Domain Options. |

### Since

- 1.7.2
### Source

Визначено в [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) на рядку 812


## Returns
Новий домен, який буде використано.
