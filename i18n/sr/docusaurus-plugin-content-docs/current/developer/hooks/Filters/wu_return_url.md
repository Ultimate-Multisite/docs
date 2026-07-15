---
id: wu_return_url
title: Филтер - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Филтер: wu_return_url

Омогућава програмерима да промене повратни URL мрежног пролаза за плаћање који се користи након процеса плаћања.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $return_url | `string` | URL за преусмеравање након процеса. |
| $gateway | `self` | инстанца мрежног пролаза за плаћање. |
| $payment | `\WP_Ultimo\Models\Payment` | инстанца плаћања за Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | тренутна поруџбина корпе у Ultimate Multisite. |

### Од верзије {#since}

- 2.0.20
### Извор {#source}

Дефинисано у [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) у реду 683


## Враћа {#returns}
