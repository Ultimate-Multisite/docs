---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

డెవలపర్‌లు డిఫాల్ట్ WooCommerce బిల్లింగ్ అడ్రస్ ఫీల్డ్‌లను ఫిల్టర్ చేయడానికి ఇది అనుమతిస్తుంది.

Ultimate Multisite లో బిల్లింగ్ అడ్రస్ ఫీల్డ్‌లు ఉన్నందున, చెక్అవుట్ ఫామ్‌లో WooCommerce చూపించే డిఫాల్ట్ ఫీల్డ్‌లను తీసివేయడం మంచిది. డిఫాల్ట్‌గా, ఈ లిస్ట్‌కు ఏ విలువ కూడా పంపబడదు, కాబట్టి WooCommerce లో చూపించడానికి కాన్ఫిగర్ చేయబడిన అన్ని ఫీల్డ్‌లు అలాగే ఉంటాయి.

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## Returns
తొలగించాల్సిన ఫీల్డ్‌ల జాబితా. అందుబాటులో ఉన్న విలువల్లో billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, మరియు billing_phone వంటివి ఉన్నాయి.
