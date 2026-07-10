---
id: wu_page_this-id_register_widgets
title: 'Action - wu_page_{$this->id}_register_widgets'
sidebar_label: 'wu_page_{$this->id}_register_widgets'
_i18n_hash: accfd3a11e80c5b3d9c753f065a15fbe
---
# Action: wu_page_\{$this->id\}_register_widgets {#action-wupagethis-idregisterwidgets}

این اکشن پس از ثبت ویجت‌ها برای این صفحه اجرا می‌شود.

بخش پویا (dynamic) نام هوک، یعنی `$this->id`، به شناسه (ID) صفحه اشاره دارد.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $id | `string` | شناسه صفحه. |
| $page_hook | `string` | هوک صفحه. |
| $page | `object` | شیء (Object) صفحه. |

### از نسخه {#since}

- 2.4.10
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L755) در خط ۷۵۵ تعریف شده است.
