---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: فلتەر - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

ڕێگا بە گەشەپێدەران دەدات کە خانەکانی ناونیشانی پسووڵەی بنەڕەتی WooCommerce فلتەر بکەن.

لەبەر ئەوەی Ultimate Multisite خانەکانی ناونیشانی پسووڵەی هەیە، ڕەنگە مانای هەبێت خانە بنەڕەتییەکانی نیشاندراو لەلایەن WooCommerce لەسەر فۆڕمی checkout لاببرێن. بە شێوەی بنەڕەت، هیچ بەهایەک بۆ ئەم لیستە نانێردرێت، بۆیە هەموو خانە ڕێکخراوەکانی WooCommerce کە بۆ نیشاندان ڕێکخراون، دەپارێزرێن.

### لە وەشانی {#since}

- 2.0.0
### سەرچاوە {#source}

پێناسە کراوە لە [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) لە هێڵی 277


## گەڕاندنەوەکان {#returns}
لیستی ئەو خانانەی کە لادەبرێن. بەها بەردەستەکان بریتین لە billing_first_name، billing_last_name، billing_company، billing_country، billing_address_1، billing_address_2، billing_city، billing_state، billing_postcode، billing_email، و billing_phone.
