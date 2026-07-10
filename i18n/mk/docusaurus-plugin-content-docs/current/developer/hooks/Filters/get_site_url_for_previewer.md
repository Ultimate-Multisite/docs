---
id: get_site_url_for_previewer
title: Филтер - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Филтер: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Им овозможува на развивачите на plugin да го филтрираат URL што се користи во прегледувачот

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $domain | `string` | Стандарден domain што се користи во моментов, корисен за манипулации |
| $domain_options | `array` | Листа на сите domain опции внесени во Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Од верзија {#since}

- 1.7.2
### Извор {#source}

Дефинирано во [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) на линија 812


## Враќа {#returns}
Нов domain што треба да се користи
