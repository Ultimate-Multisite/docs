---
id: wu_return_url
title: Filtry - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtr: wu_return_url

Pozwala deweloperom zmienić URL powrotny bramki płatności, który jest używany po zakończeniu procesu checkoutu.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $return_url | `string` | URL, do którego zostanie przekierowany użytkownik po zakończeniu procesu. |
| $gateway | `self` | Instancja bramki płatności. |
| $payment | `\WP_Ultimo\Models\Payment` | Instancja płatności Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Aktualne zamówienie koszyka Ultimate Multisite. |

### Od {#since}

- 2.0.20
### Źródło {#source}

Zdefiniowane w [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) w linii 683


## Zwraca {#returns}
