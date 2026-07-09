---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

این اکشن زمانی فعال می‌شود که فرآیند خرید دامنه پس از تکمیل تسویه حساب در حال پردازش باشد.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | آبجکت پرداخت. |
| $checkout_data | `array<string,mixed>` | داده‌های کامل تسویه حساب از فرم ثبت نام. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) در خط ۲۴۶ تعریف شده است.
