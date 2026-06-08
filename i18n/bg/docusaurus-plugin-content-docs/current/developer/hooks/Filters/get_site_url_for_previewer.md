---
id: get_site_url_for_previewer
title: Филтър - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Филтър: get_site_url_for_previewer

Позволява на разработчиците на плагини да филтрират URL-адресата, използвана от превюера

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $domain | `string` | Използваният в момента домейн, полезен за манипулации |
| $domain_options | `array` | Списък от всички домейни, въведени в Ultimate Multisite Settings -> Network Settings -> Domain Options |

### От

- 1.7.2
### Източник

Дефиниран в [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) на ред 812


## Връща
Новият домейн, който трябва да бъде използван
