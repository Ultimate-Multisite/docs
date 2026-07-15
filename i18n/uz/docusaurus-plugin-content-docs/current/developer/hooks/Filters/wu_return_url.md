---
id: wu_return_url
title: Filtr - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtr: wu_return_url

Dasturchilarga checkout jarayonlaridan keyin ishlatiladigan to‘lov shlyuzi qaytish URL manzilini o‘zgartirishga ruxsat beradi.

## Parametrlar {#parameters}

| Nomi | Turi | Tavsif |
|------|------|-------------|
| $return_url | `string` | jarayondan keyin yo‘naltiriladigan URL. |
| $gateway | `self` | to‘lov shlyuzi instansi. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite to‘lov instansi. |
| $cart | `\WP_Ultimo\Checkout\Cart` | joriy Ultimate Multisite savat buyurtmasi. |

### Beri {#since}

- 2.0.20
### Manba {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ichida 683-qatorda aniqlangan


## Qaytaradi {#returns}
