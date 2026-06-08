---
id: wu_page_this-id_after_render
title: 'عملکرد - wu_page_{$this->id}_after_render'
sidebar_label: 'wu_page_{$this->id}_after_render'
_i18n_hash: 8366130ec913af612a31f8385db10a0b
---
# Action: wu_page_{$this->id}_after_render

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا محتوای اضافی را پس از رندر شدن صفحه اضافه کنند.

## پارامترها

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string` | شناسه (ID) این صفحه |
| $page | `object` | شیء (Object) صفحه. |

### از نسخه

- 1.8.2
### منبع

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L423) در خط ۴۲۳ تعریف شده است.
