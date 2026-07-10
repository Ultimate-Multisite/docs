---
id: wu_return_url
title: Filtrační parametr - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtrační hook: wu_return_url {#filter-wureturnurl}

Umožňuje vývojářům změnit URL cílové stránky brány (gateway), která se používá po dokončení procesu platby.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $return_url | `string` | URL, na kterou se přesměruje po procesu. |
| $gateway | `self` | Instancí brány (gateway). |
| $payment | `\WP_Ultimo\Models\Payment` | Instancí platby Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Aktuální objednávka košíku Ultimate Multisite. |

### Od {#since}

- 2.0.20
### Zdroj {#source}

Definováno v [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) na řádku 683


## Vrací {#returns}
