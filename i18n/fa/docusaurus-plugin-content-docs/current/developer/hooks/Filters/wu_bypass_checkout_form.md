---
id: wu_bypass_checkout_form
title: فیلتر - wu_bypass_checkout_form
sidebar_label: wu_bypass_checkout_form
_i18n_hash: ad57eddbc5463e999d4896a31ed368a3
---
# فیلتر: wu_bypass_checkout_form {#filter-wubypasscheckoutform}

به توسعه‌دهندگان اجازه می‌دهد خروجی را دور بزنند (bypass) و خروجی جدیدی تعیین کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $bypass | `string\|bool` | اگر می‌خواهیم فرم تسویه حساب را دور بزنیم یا یک رشته (string) برای جایگزینی فرم. |
| $atts | `array` | پارامترهای بلاک/شورت‌کد تسویه حساب. |

### منبع {#source}

در [`inc/ui/class-checkout-element.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/ui/class-checkout-element.php#L327) در خط ۳۲۷ تعریف شده است.
