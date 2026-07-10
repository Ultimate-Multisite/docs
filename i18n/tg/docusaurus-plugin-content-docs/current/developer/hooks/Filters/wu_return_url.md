---
id: wu_return_url
title: Филтр - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Филтр: wu_return_url {#filter-wureturnurl}

Ба таҳиягарон имкон медиҳад, ки URL-и бозгашти дарвозаи пардохтро, ки пас аз равандҳои пардохт истифода мешавад, тағйир диҳанд.

## Параметрҳо {#parameters}

| Ном | Навъ | Тавсиф |
|------|------|-------------|
| $return_url | `string` | URL барои равона кардан пас аз раванд. |
| $gateway | `self` | намунаи дарвозаи пардохт. |
| $payment | `\WP_Ultimo\Models\Payment` | намунаи пардохти Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | фармоиши сабади ҷории Ultimate Multisite. |

### Аз замони {#since}

- 2.0.20
### Манбаъ {#source}

Дар [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) дар сатри 683 муайян шудааст


## Бармегардонад {#returns}
