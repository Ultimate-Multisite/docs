---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: फिल्टर - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# फिल्टर: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

विकासकर्ताहरूलाई पूर्वनिर्धारित WooCommerce बिलिङ ठेगाना फिल्डहरू फिल्टर गर्न अनुमति दिन्छ।

Ultimate Multisite मा बिलिङ ठेगाना फिल्डहरू भएकाले, checkout फारममा WooCommerce द्वारा देखाइने पूर्वनिर्धारित फिल्डहरू हटाउनु उपयुक्त हुन सक्छ। पूर्वनिर्धारित रूपमा, यस सूचीमा कुनै मान पास गरिँदैन, त्यसैले WooCommerce मा देखाउनका लागि कन्फिगर गरिएका सबै फिल्डहरू राखिन्छन्।

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) मा लाइन 277 मा परिभाषित


## फिर्ता गर्छ {#returns}
हटाउनुपर्ने फिल्डहरूको सूची। उपलब्ध मानहरूमा billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, र billing_phone समावेश छन्।
