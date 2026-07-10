---
id: wu_get_checkout_variables
title: Фільтр - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Дазваляе раробнікам плагінаў фільтраваць наборы пачатковых значэнняў страночкі аплатам.

Будзьце ўважлівы: адсутнасць ключаў можа цалкам збей паказанне аплатам на фронт-энды.

## Параметры {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Локалізаваныя значэнні. |
| $checkout | `\Checkout` | Клас аплатам. |

### З {#since}

- 2.0.0
### Вынік {#source}

Вызначаны ў [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) на 1970-й паўні.


## Павяртае {#returns}
Новы маратыў значэнняў.
