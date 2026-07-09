---
id: wu_return_url
title: פילטר - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# מסנן: wu_return_url {#filter-wureturnurl}

מאפשר למפתחים לשנות את כתובת ה-URL ההחזרה של ה-gateway שמשמשת לאחר תהליך התשלום.

## פרמטרים {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | כתובת ה-URL אליה יש להפנות לאחר התהליך. |
| $gateway | `self` | מופע ה-gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | מופע התשלום של Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | הזמנת העגלה הנוכחית של Ultimate Multisite. |

### מאז {#since}

- 2.0.20
### מקור {#source}

מוגדר ב[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) בשורה 683


## מחזיר {#returns}
