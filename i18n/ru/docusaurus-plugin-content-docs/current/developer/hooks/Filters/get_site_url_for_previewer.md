---
id: get_site_url_for_previewer
title: Фильтр - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Позволяет разработчикам плагинов фильтровать URL, используемый в предпросмотре

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Домен по умолчанию, используемый в данный момент, полезен для манипуляций |
| $domain_options | `array` | Список всех вариантов доменов, введенных в Настройки Ultimate Multisite -> Настройки сети -> Варианты доменов |

### Since {#since}

- 1.7.2
### Source {#source}

Определено в [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) на строке 812


## Returns {#returns}
Новый домен, который будет использоваться
