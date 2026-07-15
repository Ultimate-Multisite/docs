---
id: wu_limits_is_fluent_form_above_limit
title: فیلتر - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# فیلتر: wu_limits_is_fluent_form_above_limit

بررسی می‌کند که آیا یک نوع فرم مشخص، در این پلن مجاز است یا خیر. این فیلتر به توسعه‌دهندگان پلاگین اجازه می‌دهد تا مقدار بازگشتی را فیلتر کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $value | `bool` | اگر نوع فرم از حد مجاز فراتر رفته است یا خیر. |
| $form_type | `string` | نوع فرم مورد بررسی. |
| $form_count | `int` | تعداد فعلی فرم‌ها. |
| $quota | `int` | سهمیه مجاز. |

### از نسخه {#since}

- 1.0.0
### منبع {#source}

- تعریف شده در [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) در خط ۵۶
- تعریف شده در [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) در خط ۸۹
