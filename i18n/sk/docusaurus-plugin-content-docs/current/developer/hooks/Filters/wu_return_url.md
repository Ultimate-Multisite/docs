---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Umožňuje vývojárom zmeniť návratovú URL platobnej brány použitú po procesoch pokladne.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $return_url | `string` | URL, na ktorú sa má presmerovať po procese. |
| $gateway | `self` | inštancia platobnej brány. |
| $payment | `\WP_Ultimo\Models\Payment` | inštancia platby Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | aktuálna objednávka košíka Ultimate Multisite. |

### Od verzie {#since}

- 2.0.20
### Zdroj {#source}

Definované v [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) na riadku 683


## Návratové hodnoty {#returns}
