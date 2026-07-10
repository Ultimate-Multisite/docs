---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: فلٹر - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

یہ ڈویلپرز کو ڈیفالٹ WooCommerce بلنگ ایڈریس فیلڈز کو فلٹر کرنے کی اجازت دیتا ہے۔

چونکہ Ultimate Multisite میں بلنگ ایڈریس فیلڈز موجود ہیں، اس لیے یہ مناسب ہو سکتا ہے کہ WooCommerce کی طرف سے چیک آؤٹ فارم پر دکھائے جانے والے ڈیفالٹ فیلڈز کو ہٹا دیا جائے۔ ڈیفالٹ طور پر، اس لسٹ میں کوئی ویلیو پاس نہیں کی جاتی، لہذا WooCommerce پر کنفیگر کیے گئے تمام فیلڈز کو دکھایا جاتا ہے وہ ویسے ہی رکھے جاتے ہیں۔

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) میں لائن 277 پر ڈیفائن کیا گیا ہے۔

## Returns {#returns}
وہ فیلڈز کی لسٹ جو ہٹانے ہیں (remove کرنے ہیں۔) دستیاب ویلیوز میں `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, اور `billing_phone` شامل ہیں۔
