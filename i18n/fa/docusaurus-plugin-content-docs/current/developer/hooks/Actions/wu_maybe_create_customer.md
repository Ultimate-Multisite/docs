---
id: wu_maybe_create_customer
title: عملیات - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا کارهای اضافی هنگام اضافه شدن مشتری انجام دهند.

در اینجا محلی است که می‌توانیم هوک‌هایی را برای اضافه کردن مشتری به کاربر اصلی سایت، برای مثال، اضافه کنیم.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $customer | `\Customer` | مشتری که ممکن است ایجاد شده باشد. |
| $checkout | `\Checkout` | کلاس تسویه حساب فعلی. |

### از نسخه

- 2.0.0
### منبع

تعریف شده در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) در خط ۱۱۵۶
