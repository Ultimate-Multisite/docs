---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: فیلتر - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# فیلتر: wp_ultimo_woocommerce_checkout_fields_to_clean

به توسعه‌دهندگان اجازه می‌دهد تا فیلدهای آدرس صورت‌حساب پیش‌فرض ووکامرس را فیلتر کنند.

از آنجایی که Ultimate Multisite فیلدهای آدرس صورت‌حساب دارد، ممکن است منطقی باشد که فیلدهای پیش‌فرضی که ووکامرس در فرم تسویه حساب نمایش می‌دهد، حذف شوند. به طور پیش‌فرض، هیچ مقداری به این لیست ارسال نمی‌شود، بنابراین تمام فیلدهایی که در ووکامرس برای نمایش پیکربندی شده‌اند، باقی می‌مانند.

### از زمان {#since}

- 2.0.0
### منبع {#source}

در [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) در خط ۲۷۷ تعریف شده است.

## مقدار بازگشتی {#returns}
لیست فیلدهایی که باید حذف شوند. مقادیر موجود شامل `billing_first_name`، `billing_last_name`، `billing_company`، `billing_country`، `billing_address_1`، `billing_address_2`، `billing_city`، `billing_state`، `billing_postcode`، `billing_email`، و `billing_phone` هستند.
