---
id: wu_model_post_save
title: عملکرد - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# اکشن: wu_model_post_save

پس از ذخیره شدن یک آبجکت در دیتابیس فعال می‌شود.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $model | `string` | اسلاگ مدل. |
| $data | `array` | داده‌های آبجکتی که قرار است ذخیره شوند، سریالایز شده. |
| $data_unserialized | `array` | داده‌های آبجکتی که قرار است ذخیره شوند. |
| $this | `\Base_Model` | نمونه آبجکت. |

### از نسخه {#since}

- 2.0.0
### منبع {#source}

- تعریف شده در [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) در خط ۶۱۳
- تعریف شده در [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) در خط ۱۷۴۳
