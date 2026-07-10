---
id: wu_return_url
title: Чыпка - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Иштеп чыгуучуларга checkout процесстеринен кийин колдонулуучу gateway кайтаруу URL дарегин өзгөртүүгө уруксат берет.

## Параметрлер {#parameters}

| Аты | Түрү | Сүрөттөмө |
|------|------|-------------|
| $return_url | `string` | процесстен кийин багыттоо үчүн URL. |
| $gateway | `self` | gateway инстанциясы. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite төлөм инстанциясы. |
| $cart | `\WP_Ultimo\Checkout\Cart` | учурдагы Ultimate Multisite араба буйрутмасы. |

### Чыгарылышы {#since}

- 2.0.20
### Булак {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) файлында, 683-сапта аныкталган


## Кайтарат {#returns}
