---
id: wu_return_url
title: Filtre - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtre: wu_return_url

Permet als desenvolupadors canviar la URL de retorn de la passarel·la utilitzada després dels processos de checkout.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $return_url | `string` | la URL a la qual redirigir després del procés. |
| $gateway | `self` | la instància de la passarel·la. |
| $payment | `\WP_Ultimo\Models\Payment` | la instància de pagament d'Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | la comanda de cistella actual d'Ultimate Multisite. |

### Des de {#since}

- 2.0.20
### Font {#source}

Definit a [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) a la línia 683


## Retorna {#returns}
