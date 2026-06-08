---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: फ़िल्टर - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

डेवलपर्स को डिफ़ॉल्ट WooCommerce बिलिंग पता फ़ील्ड को फ़िल्टर करने की अनुमति देता है।

चूंकि Ultimate Multisite में बिलिंग पते के फ़ील्ड होते हैं, इसलिए यह समझ में आता है कि चेकआउट फ़ॉर्म पर WooCommerce द्वारा दिखाए गए डिफ़ॉल्ट फ़ील्ड्स को हटा दिया जाए। डिफ़ॉल्ट रूप से, इस सूची में कोई मान पास नहीं किया जाता है, इसलिए WooCommerce पर कॉन्फ़िगर किए गए सभी फ़ील्ड्स वैसे के वैसे ही बने रहते हैं।

### Since

- 2.0.0
### Source

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) में लाइन 277 पर परिभाषित है।

## Returns
उन फ़ील्ड्स की सूची जिन्हें हटाना है। उपलब्ध मानों में `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, और `billing_phone` शामिल हैं।
