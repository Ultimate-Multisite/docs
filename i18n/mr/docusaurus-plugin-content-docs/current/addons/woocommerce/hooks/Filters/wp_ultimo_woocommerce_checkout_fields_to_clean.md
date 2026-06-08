---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

डेव्हलपर्सना WooCommerce च्या डिफॉल्ट बिलिंग पत्त्याच्या फील्ड्स फिल्टर करण्याची परवानगी देतो.

Ultimate Multisite मध्ये बिलिंग पत्त्याची फील्ड्स असल्याने, चेकआउट फॉर्मवर WooCommerce द्वारे प्रदर्शित होणाऱ्या डिफॉल्ट फील्ड्स काढून टाकणे योग्य ठरू शकते. डीफॉल्टनुसार, या यादीत कोणताही व्हॅल्यू पास केला जात नाही, त्यामुळे WooCommerce मध्ये प्रदर्शित करण्यासाठी कॉन्फिगर केलेल्या सर्व फील्ड्स तशाच राहतात.

### Since

- 2.0.0
### Source

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) याच्या लाइन 277 वर परिभाषित केले आहे.

## Returns
काढायच्या फील्ड्सची यादी. उपलब्ध व्हॅल्यूजमध्ये billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, आणि billing_phone यांचा समावेश आहे.
