---
id: wu_sso_loaded
title: عملکرد - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# اکشن: wu_sso_loaded {#action-wussoloaded}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا در صورت نیاز، هوک‌های (hooks) اضافی اضافه کنند.

این باید تا زمان `init` به تأخیر بیفتد، زیرا SSO چیزی است که در زمان `sunrise` اجرا می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $sso | `self` | کلاس SSO. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

در [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) در خط ۲۸۵ تعریف شده است.
