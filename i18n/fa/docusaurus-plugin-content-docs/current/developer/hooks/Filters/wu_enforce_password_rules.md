---
id: wu_enforce_password_rules
title: فیلتر - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules {#filter-wuenforcepasswordrules}

فیلتر می‌کند که آیا قوانین اضافی برای رمز عبور اعمال شود یا خیر.

وقتی این فیلتر True باشد، حداقل طول و الزامات کاراکتر را اعمال می‌کند. این فیلتر به طور خودکار برای تنظیمات "Super Strong" یا زمانی که قابلیت Strong Password در Defender Pro فعال باشد، فعال می‌شود.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | اینکه آیا قوانین اضافی اعمال شود. |
| $strength_setting | `string` | مقدار تنظیمات ادمین. |
| $defender_active | `bool` | اینکه آیا Strong Password در Defender Pro فعال است یا خیر. |

### از نسخه {#since}

- 2.4.0
### منبع {#source}

در [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) در خط ۵۳۱ تعریف شده است.
