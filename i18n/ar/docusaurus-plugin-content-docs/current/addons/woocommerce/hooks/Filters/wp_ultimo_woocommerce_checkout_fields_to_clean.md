---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: مرشح - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# مرشح: wp_ultimo_woocommerce_checkout_fields_to_clean

يسمح للمطورين بتصفية حقول عنوان الفاتورة الافتراضية في WooCommerce.

نظرًا لأن Ultimate Multisite يحتوي على حقول عنوان الفاتورة، فقد يكون من المنطقي إزالة الحقول الافتراضية المعروضة من WooCommerce في نموذج الدفع. بشكل افتراضي، لا يتم تمرير أي قيمة إلى هذه القائمة، لذا يتم الاحتفاظ بجميع الحقول التي تم تكوينها في WooCommerce ليتم عرضها.

### منذ

- 2.0.0

### المصدر

مُعرَّف في [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) في السطر 277


## يعيد

قائمة الحقول التي يجب إزالتها. القيم المتاحة تشمل billing_first_name، billing_last_name، billing_company، billing_country، billing_address_1، billing_address_2، billing_city، billing_state، billing_postcode، billing_email، و billing_phone.
