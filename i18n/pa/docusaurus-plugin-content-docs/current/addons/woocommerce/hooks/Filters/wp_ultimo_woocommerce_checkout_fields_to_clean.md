---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

ਡਿਵੈਲਪਰਾਂ ਨੂੰ WooCommerce ਦੇ ਡਿਫਾਲਟ ਬਿਲਿੰਗ ਪਤੇ ਦੇ ਖੇਤਰਾਂ (fields) ਨੂੰ ਫਿਲਟਰ ਕਰਨ ਦੀ ਇਜਾਜ਼ਤ ਦਿੰਦਾ ਹੈ।

ਕਿਉਂਕਿ Ultimate Multisite ਵਿੱਚ ਬਿਲਿੰਗ ਪਤੇ ਦੇ ਖੇਤਰ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ ਇਹ ਸਹੀ ਹੋ ਸਕਦਾ ਹੈ ਕਿ WooCommerce ਦੁਆਰਾ ਚੈੱਕਆਉਟ ਫਾਰਮ 'ਤੇ ਦਿਖਾਏ ਗਏ ਡਿਫਾਲਟ ਖੇਤਰਾਂ ਨੂੰ ਹਟਾ ਦਿੱਤਾ ਜਾਵੇ। ਡਿਫਾਲਟ ਤੌਰ 'ਤੇ, ਇਸ ਸੂਚੀ ਵਿੱਚ ਕੋਈ ਮੁੱਲ ਨਹੀਂ ਭੇਜਿਆ ਜਾਂਦਾ, ਇਸ ਲਈ WooCommerce 'ਤੇ ਸੈਟ ਕੀਤੇ ਗਏ ਸਾਰੇ ਖੇਤਰ ਰਹਿ ਰਹਿੰਦੇ ਹਨ।

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ਵਿੱਚ ਲਾਈਨ 277 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।

## Returns {#returns}
ਹਟਾਉਣ ਲਈ ਖੇਤਰਾਂ ਦੀ ਸੂਚੀ। ਉਪਲਬਧ ਮੁੱਲਾਂ ਵਿੱਚ `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, ਅਤੇ `billing_phone` ਸ਼ਾਮਲ ਹਨ।
