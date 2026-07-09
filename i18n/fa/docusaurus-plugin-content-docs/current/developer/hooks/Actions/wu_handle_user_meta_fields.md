---
id: wu_handle_user_meta_fields
title: عملیات - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# Action: wu_handle_user_meta_fields {#action-wuhandleusermetafields}

به توسعه‌دهندگان پلاگین اجازه می‌دهد تا در صورت نیاز، داده‌های متا (meta data) کاربر را به روش‌های مختلف ذخیره کنند.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $meta_repository | `array` | لیستی از فیلدهای متا، با ساختار کلید => مقدار. |
| $user | `\WP_User` | شیء (object) کاربر وردپرس. |
| $customer | `\Customer` | شیء مشتری Ultimate Multisite. |
| $checkout | `\Checkout` | کلاس تسویه حساب (checkout). |

### از نسخه {#since}

- 2.0.4
### منبع {#source}

در [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) در خط ۱۲۴۴ تعریف شده است.
