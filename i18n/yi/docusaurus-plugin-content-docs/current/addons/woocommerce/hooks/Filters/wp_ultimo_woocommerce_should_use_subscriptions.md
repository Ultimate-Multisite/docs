---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: פילטער - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# פילטער: wp_ultimo_woocommerce_should_use_subscriptions

דערלויבט דעוועלאָפּערס צו צווינגען די באַניץ פון WooCommerce Subscriptions.

לויטן פעליקייַט קאָנטראָלירט דער add-on צי (1) WooCommerce Subscriptions איז פאָראַן (אָדער דער פולער plugin אָדער דער צוגעפּאַקטער קערן), דערנאָך (2) קאָנטראָלירט די באַשטעטיקונג וואָס דערמעגלעכט די באַניץ פון WooCommerce Subscriptions.

## פּאַראַמעטערס {#parameters}

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | אויב מיר דאַרפֿן איצט צו נוצן Woo Subs. |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | דער איצטיקער אָביעקט. |

### מקור {#source}

דעפֿינירט אין [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) אין שורה 361


## גיט צוריק {#returns}
true כּדי צו נוצן WooCommerce Subs, false כּדי עס נישט צו נוצן.
