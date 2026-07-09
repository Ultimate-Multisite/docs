---
id: wu_post_count_statuses
title: فیلتر - wu_post_count_statuses
sidebar_label: wu_post_count_statuses
_i18n_hash: 663f78e3da3805371e6ab96edef64285
---
# فیلتر: wu_post_count_statuses {#filter-wupostcountstatuses}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا تعیین کنند که کدام وضعیت پست باید شمارش شود. به طور پیش‌فرض، پست‌های منتشر شده (published) و خصوصی (private) شمارش می‌شوند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $post_status | `array` | لیستی از وضعیت‌های پست |
| $post_type | `string` | اسلاگ (slug) نوع پست |

### از نسخه {#since}

- 1.9.1
### منبع {#source}

در [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L119) در خط ۱۱۹ تعریف شده است.

## مقدار بازگشتی {#returns}
آرایه جدیدی از وضعیت‌های پست
