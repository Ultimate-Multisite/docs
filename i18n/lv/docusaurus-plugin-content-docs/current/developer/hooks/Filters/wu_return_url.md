---
id: wu_return_url
title: Filtrs - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtrs: wu_return_url

Ļauj izstrādātājiem mainīt maksājumu vārtejas atgriešanās URL, kas tiek izmantots pēc norēķinu procesiem.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL, uz kuru novirzīt pēc procesa. |
| $gateway | `self` | maksājumu vārtejas instance. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite maksājuma instance. |
| $cart | `\WP_Ultimo\Checkout\Cart` | pašreizējais Ultimate Multisite groza pasūtījums. |

### Kopš {#since}

- 2.0.20
### Avots {#source}

Definēts [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) 683. rindā


## Atgriež {#returns}
