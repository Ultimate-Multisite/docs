---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Developerların checkout proseslərindən sonra istifadə edilən gateway return URL-ni dəyişməsinə imkan verir.

## Parametrlər {#parameters}

| Name | Type | Təsvir |
|------|------|-------------|
| $return_url | `string` | Prosesdən sonra yönləndiriləcək URL. |
| $gateway | `self` | Gateway nümunəsi. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite ödəniş nümunəsi. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Hazırkı Ultimate Multisite səbət sifarişi. |

### Nə vaqtdan bəri {#since}

- 2.0.20
### Mənbə {#source}

[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) faylında 683-cü sətirində təyin edilmişdir.


## Qaytarır {#returns}
