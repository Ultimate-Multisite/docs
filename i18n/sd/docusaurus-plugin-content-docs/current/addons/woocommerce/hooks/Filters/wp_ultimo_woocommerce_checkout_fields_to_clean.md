---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: فلٽر - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

ڊولپرن کي ڊفالٽ WooCommerce بلنگ ايڊريس فيلڊن کي فلٽر ڪرڻ جي اجازت ڏئي ٿو.

جيئن ته Ultimate Multisite وٽ بلنگ ايڊريس فيلڊ آهن، تنهنڪري checkout فارم تي WooCommerce پاران ڏيکاريل ڊفالٽ فيلڊن کي هٽائڻ مناسب ٿي سگهي ٿو. ڊفالٽ طور، هن فهرست ڏانهن ڪا به قيمت پاس نٿي ڪئي وڃي، تنهنڪري WooCommerce تي ڏيکارڻ لاءِ ترتيب ڏنل سڀ فيلڊ برقرار رکيا وڃن ٿا.

### کان وٺي {#since}

- 2.0.0
### ماخذ {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ۾ قطار 277 تي بيان ٿيل


## واپسيون {#returns}
هٽائڻ لاءِ فيلڊن جي فهرست. دستياب قيمتن ۾ billing_first_name، billing_last_name، billing_company، billing_country، billing_address_1، billing_address_2، billing_city، billing_state، billing_postcode، billing_email، ۽ billing_phone شامل آهن.
