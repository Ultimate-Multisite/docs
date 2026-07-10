---
id: wu_sso_enabled
title: فیلتر - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# فیلتر: wu_sso_enabled {#filter-wussoenabled}

قابلیت ورود یکپارچه (single-sign-on) در دامنه‌های مختلف را فعال یا غیرفعال می‌کند.

با فیلتر کردن این مقدار، می‌توانید ورود یکپارچه را کاملاً غیرفعال کنید یا آن را به صورت مشروط فعال نمایید.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | آیا SSO باید فعال باشد؟ `True` برای فعال، و `false` برای غیرفعال. |

### Since {#since}

- 2.0.11
### Source {#source}

در [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) در خط ۱۱۰ تعریف شده است.


## Returns {#returns}
مقدار اینکه آیا SSO فعال است یا خیر.
