---
id: wu_return_url
title: فیلتر - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# فیلتر: wu_return_url {#filter-wureturnurl}

این فیلتر به توسعه‌دهندگان اجازه می‌دهد تا URL بازگشت (return URL) که پس از فرآیند پرداخت استفاده می‌شود را تغییر دهند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $return_url | `string` | URL مقصد پس از فرآیند. |
| $gateway | `self` | نمونه (instance) گیت‌وی. |
| $payment | `\WP_Ultimo\Models\Payment` | نمونه پرداخت Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | سفارش سبد خرید فعلی Ultimate Multisite. |

### از نسخه {#since}

- 2.0.20
### منبع {#source}

در [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) در خط ۶۸۳ تعریف شده است.


## مقادیر بازگشتی {#returns}
