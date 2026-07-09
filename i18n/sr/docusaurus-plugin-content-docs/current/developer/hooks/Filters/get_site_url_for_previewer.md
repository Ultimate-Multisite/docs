---
id: get_site_url_for_previewer
title: Филтер - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Филтер: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Омогућава програмерима plugin-а да филтрирају URL који се користи у прегледачу

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Подразумевани домен који се тренутно користи, корисно за манипулације |
| $domain_options | `array` | Листа свих опција домена унетих у Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Од верзије {#since}

- 1.7.2
### Извор {#source}

Дефинисано у [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) у реду 812


## Враћа {#returns}
Нови домен који ће се користити
