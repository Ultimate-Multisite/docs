---
id: wu_checkout_order_created
title: Գործողություն - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Գործողություն: wu_checkout_order_created

Գործարկվում է checkout պատվերի ամբողջությամբ ձևավորումից հետո։

Հավելումները կարող են սա օգտագործել անկախ հաշվարկային ցիկլերով ապրանքների համար երկրորդային անդամակցություններ ստեղծելու համար։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Զամբյուղի/պատվերի օբյեկտը։ |
| $customer | `\WP_Ultimo\Models\Customer` | Հաճախորդը։ |
| $membership | `\WP_Ultimo\Models\Membership` | Հիմնական անդամակցությունը։ |
| $payment | `\WP_Ultimo\Models\Payment` | Վճարումը։ |

### Սկսած {#since}

- 2.5.0
### Աղբյուր {#source}

Սահմանված է [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891)-ում՝ 891-րդ տողում
