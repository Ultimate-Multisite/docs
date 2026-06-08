---
id: wu_apply_plan_limits
title: فیلتر - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# فیلتر: wu_apply_plan_limits

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا محدودیت‌ها را دور بزنند (short-circuit).

شما می‌توانید از این فیلتر برای اجرای کدهای دلخواه قبل از اینکه هر یک از محدودیت‌ها فعال شوند، استفاده کنید. اگر فیلتر شما مقداری منطقی (truthy) برگرداند، فرآیند ادامه پیدا می‌کند؛ اما اگر مقداری غیرمنطقی (falsy) برگرداند، کد متوقف شده و هیچ‌کدام از هوک‌های زیر اجرا نخواهند شد.

### از زمان

- ۱.۷.۰
### منبع

- در [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52) در خط ۵۲ تعریف شده است
- در [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98) در خط ۹۸ تعریف شده است
## بازگشت (Returns)
