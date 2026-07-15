---
id: wu_page_this-id_load
title: 'عملکرد - wu_page_{$this->id}_load'
sidebar_label: 'wu_page_{$this->id}_load'
_i18n_hash: d386046d2a23406f0fed8400e9aefa6e
---
# Action: wu_page_{$this->id}_load

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا هوک‌های اضافی را به صفحات ما اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $id | `string` | شناسه (ID) این صفحه. |
| $page_hook | `string` | هوک صفحه این صفحه. |
| $admin_page | `self` | نمونه (instance) صفحه. |

### از نسخه {#since}

- 1.8.2
- 2.0.4: پارامتر سوم اضافه شد: نمونه صفحه.
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L332) در خط ۳۳۲ تعریف شده است.
