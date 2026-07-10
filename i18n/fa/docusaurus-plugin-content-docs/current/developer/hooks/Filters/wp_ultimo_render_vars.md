---
id: wp_ultimo_render_vars
title: فیلتر - wp_ultimo_render_vars
sidebar_label: wp_ultimo_render_vars
_i18n_hash: 2f3f60e0a28a26eca6448de7ea29aadd
---
# فیلتر: wp_ultimo_render_vars {#filter-wpultimorendervars}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا متغیرهای اضافی را به صورت سراسری به محیط رندر (render context) اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $args | `array` | آرایه‌ای که متغیرهای ارسال شده توسط فراخوانی رندر را در خود جای داده است. |
| $view | `string` | نام نمای (view) که قرار است رندر شود. |
| $default_view | `string` | نام نمای پیش‌فرض (fallback_view). |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/functions/template.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/template.php#L31) در خط ۳۱ تعریف شده است.

## مقادیر بازگشتی {#returns}
