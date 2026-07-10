---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url {#filter-wureturnurl}

Omogoča razvijalcem, da spremenijo URL za vrnitev plačilnega prehoda, uporabljen po postopkih zaključka nakupa.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL za preusmeritev po postopku. |
| $gateway | `self` | instanca plačilnega prehoda. |
| $payment | `\WP_Ultimo\Models\Payment` | instanca plačila Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | trenutno naročilo v košarici Ultimate Multisite. |

### Od {#since}

- 2.0.20
### Vir {#source}

Določeno v [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) v vrstici 683


## Vrne {#returns}
