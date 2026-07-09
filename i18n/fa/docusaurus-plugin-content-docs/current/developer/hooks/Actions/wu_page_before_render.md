---
id: wu_page_before_render
title: اکشن - wu_page_before_render
sidebar_label: wu_page_before_render
_i18n_hash: 80ace5356783d6d6ad2789d77480ace2
---
# اکشن: wu_page_before_render {#action-wupagebeforerender}

این اکشن به توسعه‌دهندگان پلاگین اجازه می‌دهد تا محتوای اضافی را قبل از رندر شدن صفحه، اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string` | شناسه (ID) این صفحه. |
| $page | `object` | شیء (Object) صفحه. |

### از نسخه {#since}

- 1.8.2
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L388) در خط ۳۸۸ تعریف شده است.
