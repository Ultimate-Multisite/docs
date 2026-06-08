---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# Action: wu_domain_became_primary

زمانی فعال می‌شود که یک دامنه، دامنه اصلی یک سایت شود.

این اکشن زمانی فعال می‌شود که پرچم `primary_domain` یک دامنه روی `true` تنظیم شود؛ چه در هنگام ایجاد یک دامنه اصلی جدید و چه در هنگام به‌روزرسانی یک دامنه موجود تا دامنه اصلی شود.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | دامنه‌ای که دامنه اصلی شد. |
| $blog_id | `int` | شناسه وبلاگ سایت تحت تأثیر. |
| $was_new | `bool` | مشخص می‌کند که آیا این یک دامنه تازه ایجاد شده است یا خیر. |

### از نسخه

- 2.0.0
### منبع

در [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) در خط ۵۶۰ تعریف شده است.
