---
id: wu_return_url
title: Фільтр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Дазваляе рэаліза tar змяніць URL паваротнай кропцы, які выкарыстоўваецца для шлюзу пасля працэсу аплатам.

## Параметры {#parameters}

| Назва | Тып | Апісан |
|------|------|-------------|
| $return_url | `string` | URL, на які адпраўляюць пасля працэсу. |
| $gateway | `self` | Экземпляры шлюзу (gateway). |
| $payment | `\WP_Ultimo\Models\Payment` | Экземпляры аплаты Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Актуальнае замоўленне карыткі Ultimate Multisite. |

### З адпаноўлення {#since}

- 2.0.20
### Вынік {#source}

Вызначаны ў [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) на 683-й пасылцы.


## Паказвае {#returns}
