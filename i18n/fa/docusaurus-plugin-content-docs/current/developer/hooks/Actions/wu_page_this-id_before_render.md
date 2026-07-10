---
id: wu_page_this-id_before_render
title: 'Action - wu_page_{$this->id}_before_render'
sidebar_label: 'wu_page_{$this->id}_before_render'
_i18n_hash: c3ef7f96b45f5b4175d13585a6cca368
---
# Action: wu_page_{$this->id}_before_render {#action-wupagethis-idbeforerender}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا محتوای اضافی قبل از رندر شدن (نمایش) صفحه، اضافه کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $page_id | `string` | شناسه (ID) این صفحه. |
| $page | `object` | شیء (Object) صفحه. |

### از نسخه {#since}

- 1.8.2
### منبع {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L398) در خط ۳۹۸ تعریف شده است.
