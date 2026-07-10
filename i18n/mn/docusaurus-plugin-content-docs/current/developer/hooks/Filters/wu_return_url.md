---
id: wu_return_url
title: Шүүлтүүр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Шүүлтүүр: wu_return_url {#filter-wureturnurl}

Хөгжүүлэгчдэд checkout үйл явцын дараа ашиглагдах gateway буцах URL-ийг өөрчлөх боломж олгоно.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $return_url | `string` | үйл явцын дараа чиглүүлэх URL. |
| $gateway | `self` | gateway instance. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite төлбөрийн instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | одоогийн Ultimate Multisite сагсны захиалга. |

### Хувилбараас хойш {#since}

- 2.0.20
### Эх сурвалж {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683)-д 683-р мөрөнд тодорхойлсон


## Буцаах утга {#returns}
