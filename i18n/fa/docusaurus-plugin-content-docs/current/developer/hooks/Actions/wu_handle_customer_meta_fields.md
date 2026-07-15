---
id: wu_handle_customer_meta_fields
title: عمل - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# Action: wu_handle_customer_meta_fields

این اکشن به توسعه‌دهندگان پلاگین اجازه می‌دهد که در صورت نیاز، داده‌های متا (meta data) را به روش‌های مختلف ذخیره کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $meta_repository | `array` | لیستی از فیلدهای متا، که به صورت کلید => مقدار (key => value) ساختار یافته‌اند. |
| $customer | `\Customer` | آبجکت مشتری Ultimate Multisite. |
| $checkout | `\Checkout` | کلاس تسویه حساب (checkout). |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) در خط ۱۲۱۱ تعریف شده است.
