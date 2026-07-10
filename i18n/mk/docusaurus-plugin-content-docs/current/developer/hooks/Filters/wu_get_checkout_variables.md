---
id: wu_get_checkout_variables
title: Филтер - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Филтер: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Дозволува програмерите на plugin-и да ги филтрираат претходните поставки на страницата за checkout.

Бидете внимателни, недостасувачките клучеви можат целосно да го нарушат checkout на предниот дел.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $variables | `array` | Локализирани променливи. |
| $checkout | `\Checkout` | Класата за checkout. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) на линија 1970


## Враќа {#returns}
Новата низа со променливи.
