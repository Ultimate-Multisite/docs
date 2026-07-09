---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: سۈزگۈچ - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

تەرەققىياتچىلارنىڭ WooCommerce سۈكۈتتىكى ھېسابات ئادرېس سۆرەش ساھەلىرىنى سۈزۈشىگە يول قويىدۇ.

Ultimate Multisite تا ھېسابات ئادرېس ساھەلىرى بولغاچقا، چىقىم قىلىش جەدۋىلىدە WooCommerce تەرىپىدىن كۆرسىتىلىدىغان سۈكۈتتىكى ساھەلەرنى ئۆچۈرۈش مۇۋاپىق بولۇشى مۇمكىن. سۈكۈت بويىچە، بۇ تىزىملىككە ھېچقانداق قىممەت يوللانمايدۇ، شۇڭا WooCommerce دا كۆرسىتىلىدىغان قىلىپ تەڭشەلگەن بارلىق ساھەلەر ساقلىنىدۇ.

### باشلانغان نەشرى {#since}

- 2.0.0
### مەنبە {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) دا، 277-قۇردا ئېنىقلانغان


## قايتۇرىدۇ {#returns}
ئۆچۈرۈلىدىغان ساھەلەر تىزىملىكى. ئىشلەتكىلى بولىدىغان قىممەتلەر billing_first_name، billing_last_name، billing_company، billing_country، billing_address_1، billing_address_2، billing_city، billing_state، billing_postcode، billing_email ۋە billing_phone نى ئۆز ئىچىگە ئالىدۇ.
