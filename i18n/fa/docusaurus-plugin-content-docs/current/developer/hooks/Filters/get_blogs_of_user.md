---
id: get_blogs_of_user
title: فیلتر - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

این فیلتر، نسخه اصلی فیلتر WP را برای اطمینان، در اینجا بازتولید می‌کند.

لیست سایت‌هایی که یک کاربر به آن‌ها تعلق دارد را فیلتر می‌کند.

## پارامترها

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | آرایه‌ای از آبجکت‌های سایت که متعلق به کاربر هستند. |
| $user_id | `int` | شناسه کاربری. |
| $all | `bool` | اینکه آیا آرایه سایت‌های بازگشتی باید شامل تمام سایت‌ها باشد، از جمله آن‌هایی که 'deleted'، 'archived' یا 'spam' علامت‌گذاری شده‌اند. پیش‌فرض: false. |

### از نسخه

- 2.0.11
### منبع

در [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) در خط ۸۵۱ تعریف شده است.
