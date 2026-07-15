---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

டெவலப்பர்கள் இயல்பான WooCommerce பில்லிங் முகவரி புலங்களை (fields) வடிகட்ட அனுமதிக்கிறது.

Ultimate Multisite-ல் பில்லிங் முகவரி புலங்கள் இருப்பதால், checkout படிவத்தில் WooCommerce இயல்பாகக் காட்டும் புலங்களை நீக்குவது பொருத்தமாக இருக்கும். இயல்பாக, இந்த பட்டியலில் எந்த மதிப்பும் அனுப்பப்படாது, அதனால் WooCommerce-ல் காட்டும்படி அமைக்கப்பட்ட அனைத்து புலங்களும் அப்படியே இருக்கும்.

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## Returns {#returns}
நீக்கப்பட வேண்டிய புலங்களின் பட்டியல். இதில் கிடைக்கக்கூடிய மதிப்புகள்: billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, மற்றும் billing_phone ஆகியவை அடங்கும்.
