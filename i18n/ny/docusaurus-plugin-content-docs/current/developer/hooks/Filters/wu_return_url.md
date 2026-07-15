---
id: wu_return_url
title: Sefa - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Fyuluta: wu_return_url

Lolani opanga mapulogalamu kusintha URL yobwerera ya gateway yomwe imagwiritsidwa ntchito pambuyo pa njira za checkout.

## Ma Parameter {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $return_url | `string` | URL yopita komwe atumizidwe pambuyo pa njira. |
| $gateway | `self` | instance ya gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | instance ya malipiro ya Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | order yapano ya cart ya Ultimate Multisite. |

### Kuyambira {#since}

- 2.0.20
### Gwero {#source}

Yafotokozedwa mu [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) pa mzere 683


## Zobwerera {#returns}
