---
id: wu_woocommerce_line_item_params
title: فلتر - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# الفلتر: wu_woocommerce_line_item_params

تصفية المعلمات المستخدمة لإنشاء عناصر السطر في سلة WooCommerce، قبل إعادة توجيه العميل إلى صفحة الدفع في WooCommerce.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $line_item_params | `array` | معلمات عنصر السطر في السلة. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | كائن عنصر السطر في Ultimate Multisite. |
| $wc_product | `\WC_Product` | منتج WooCommerce. |

### منذ

- 2.0.0

### المصدر

معرّف في [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) في السطر 662

## يعيد

معلمات عنصر السطر المعدلة.
