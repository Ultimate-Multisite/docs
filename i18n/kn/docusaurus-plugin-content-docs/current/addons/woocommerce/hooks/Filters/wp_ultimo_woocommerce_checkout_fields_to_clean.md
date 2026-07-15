---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Developers-ಗಳಿಗೆ default WooCommerce billing address fields ಅನ್ನು filter ಮಾಡಲು ಅನುಮತಿಸುತ್ತದೆ.

Ultimate Multisite ನಲ್ಲಿ billing address fields ಇರುವುದರಿಂದ, checkout form ನಲ್ಲಿ WooCommerce ಪ್ರದರ್ಶಿಸುವ default fields ಗಳನ್ನು ತೆಗೆದುಹಾಕುವುದು ಸೂಕ್ತವಾಗಬಹುದು. default ಆಗಿ, ಈ list ಗೆ ಯಾವುದೇ value pass ಆಗುವುದಿಲ್ಲ, ಆದ್ದರಿಂದ WooCommerce ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ ಎಲ್ಲಾ fields ಉಳಿಯುತ್ತವೆ.

### ಲಭ್ಯತೆ {#since}

- 2.0.0
### ಮೂಲ {#source}

[inc/gateways/class-woocommerce-gateway.php](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ನಲ್ಲಿ 277ನೇ ಸಾಲಿನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆ.

## ಮರಳಿ ನೀಡುತ್ತದೆ {#returns}
ತೆಗೆದುಹಾಕಬೇಕಾದ fields ಗಳ ಪಟ್ಟಿ. ಲಭ್ಯವಿರುವ values ಗಳಲ್ಲಿ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, ಮತ್ತು billing_phone ಸೇರಿವೆ.
