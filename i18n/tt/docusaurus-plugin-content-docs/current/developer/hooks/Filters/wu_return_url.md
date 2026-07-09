---
id: wu_return_url
title: Фильтр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Фильтр: wu_return_url

Эшкәртүләрдән соң кулланыла торган gateway кайту URL-адресын үзгәртү мөмкинлеген эшләүчеләргә бирә.

## Параметрлар

| Исем | Тип | Тасвирлама |
|------|------|-------------|
| $return_url | `string` | эшкәртүдән соң юнәлтү өчен URL. |
| $gateway | `self` | gateway нөсхәсе. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite түләү нөсхәсе. |
| $cart | `\WP_Ultimo\Checkout\Cart` | хәзерге Ultimate Multisite кәрзин заказы. |

### Кайчаннан

- 2.0.20
### Чыганак

683 нче юлда [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) эчендә билгеләнгән


## Кайтара
