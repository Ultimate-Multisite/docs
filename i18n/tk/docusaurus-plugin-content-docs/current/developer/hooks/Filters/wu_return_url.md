---
id: wu_return_url
title: Süzgüç - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Süzgüç: wu_return_url

Işläp düzüjilere checkout proseslerinden soň ulanylýan gateway gaýdyp gelme URL-ni üýtgetmäge rugsat berýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Beýany |
|------|------|-------------|
| $return_url | `string` | prosesden soň ugrukdyryljak URL. |
| $gateway | `self` | gateway nusgasy. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite töleg nusgasy. |
| $cart | `\WP_Ultimo\Checkout\Cart` | häzirki Ultimate Multisite sebet sargydy. |

### Şondan bäri {#since}

- 2.0.20
### Çeşme {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) içinde, 683-nji setirde kesgitlenen


## Gaýtarýar {#returns}
