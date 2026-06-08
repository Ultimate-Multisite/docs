---
id: wu_return_url
title: Szűrő - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Szűrő: wu_return_url

Megengedi a fejlesztőknek módosítani a fizetési kapu (gateway) visszaút URL-jét, amelyet a fizetés utáni folyamatok során használnak.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | az URL, amelyre továbbítják a folyamat végén. |
| $gateway | `self` | a fizetési kapu példány. |
| $payment | `\WP_Ultimo\Models\Payment` | az Ultimate Multisite fizetési példány. |
| $cart | `\WP_Ultimo\Checkout\Cart` | az aktuális Ultimate Multisite kosárrendelés. |

### Since

- 2.0.20
### Source

Megvalósítva a [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) fájlban, 683-án.


## Returns
