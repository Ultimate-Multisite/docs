---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: フィルタ - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# Filter: wp_ultimo_woocommerce_should_use_subscriptions

開発者が WooCommerce Subscriptions の使用を強制できるようにします。

デフォルトでは、アドオンは (1) WooCommerce Subscriptions が存在するか（フルプラグインまたはバンドルされたコア）、(2) WooCommerce Subscriptions の使用を有効にする設定を確認します。

## Parameters

| 名前 | タイプ | 説明 |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | 現在 WooSubs を使用する必要があるかどうか |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | 現在のオブジェクト。 |

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) at line 361


## Returns
WooCommerce Subs を使用する場合は true、使用しない場合は false。
