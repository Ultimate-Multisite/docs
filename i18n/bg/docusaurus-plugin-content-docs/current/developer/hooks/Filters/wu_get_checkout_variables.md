---
id: wu_get_checkout_variables
title: Филтър - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Филтър: wu_get_checkout_variables

Позволява на разработчиците на плагини да филтрират предварителните настройки на страницата за плащане (checkout).

Бъдете внимателни, липсващите ключове могат напълно да счупят страницата за плащане на фронтенда.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $variables | `array` | Локализирани променливи. |
| $checkout | `\Checkout` | Класът за страницата за плащане. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) на ред 1970


## Връща {#returns}
Новия масив от променливи.
