---
id: wu_post_count
title: فیلتر - wu_post_count
sidebar_label: wu_post_count
_i18n_hash: 435505abb02375a268c71a8cb10b7ac6
---
# فیلتر: wu_post_count {#filter-wupostcount}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا مجموع تعداد پست‌ها را تغییر دهند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $count | `int` | مجموع تعداد پست‌ها |
| $post_counts | `object` | شیء وردپرس که توسط تابع `wp_count_posts` برگردانده می‌شود |
| $post_type | `string` | اسلاگ نوع پست |

### از نسخه {#since}

- 1.9.1
### منبع {#source}

در [`inc/limitations/class-limit-post-types.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limitations/class-limit-post-types.php#L136) در خط ۱۳۶ تعریف شده است.

## مقدار بازگشتی {#returns}
مجموع جدید
