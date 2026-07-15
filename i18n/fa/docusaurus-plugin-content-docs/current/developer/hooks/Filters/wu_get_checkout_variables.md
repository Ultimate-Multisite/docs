---
id: wu_get_checkout_variables
title: فیلتر - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# فیلتر: wu_get_checkout_variables

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا تنظیمات از پیش تعیین شده یک صفحه تسویه حساب را فیلتر کنند.

توجه داشته باشید که حذف کلیدها می‌تواند باعث از کار افتادن کامل تسویه حساب در فرانت‌اند شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $variables | `array` | متغیرهای محلی‌سازی شده. |
| $checkout | `\Checkout` | کلاس تسویه حساب. |

### از زمان {#since}

- 2.0.0
### منبع {#source}

در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) در خط ۱۹۷۰ تعریف شده است.


## مقادیر بازگشتی {#returns}
آرایه متغیرهای جدید.
