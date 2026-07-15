---
id: wu_page_load
title: Action - wu_page_load
sidebar_label: wu_page_load
_i18n_hash: ad34b2f5095d3cd6f3c54172f800e3fd
---
# Action: wu_page_load

به توسعه‌دهندگان پلاگین اجازه می‌دهد هوک‌های اضافی به صفحات ما اضافه کنند.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $id | `string` | شناسه (ID) این صفحه. |
| $page_hook | `string` | هوک صفحه این صفحه. |
| $admin_page | `self` | نمونه (instance) صفحه. |

### Since {#since}

- 1.8.2
- 2.0.4: پارامتر سوم: نمونه صفحه، اضافه شد.
### Source {#source}

در [`inc/admin-pages/class-base-admin-page.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/admin-pages/class-base-admin-page.php#L318) در خط ۳۱۸ تعریف شده است.
