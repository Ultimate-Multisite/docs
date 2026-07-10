---
id: wu_page_after_render
title: عملکرد - wu_page_after_render
sidebar_label: wu_page_after_render
_i18n_hash: df5c3e7ef27ab39b167189e082ed729b
---
# Action: wu_page_after_render {#action-wupageafterrender}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا محتوای اضافی را پس از رندر شدن صفحه اضافه کنند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $page_id | `string` | شناسه (ID) این صفحه |
| $page | `object` | شیء (Object) صفحه. |

### از نسخه {#since}

- 1.8.2
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L413) در خط ۴۱۳ تعریف شده است.
