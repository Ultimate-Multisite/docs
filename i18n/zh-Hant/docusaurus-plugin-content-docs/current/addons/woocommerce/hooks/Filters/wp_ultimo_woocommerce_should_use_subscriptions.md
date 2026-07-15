---
id: wp_ultimo_woocommerce_should_use_subscriptions
title: Filter - wp_ultimo_woocommerce_should_use_subscriptions
sidebar_label: wp_ultimo_woocommerce_should_use_subscriptions
_i18n_hash: 9167c7b5a3151c5752b983f5c890606f
---
# 篩選器：wp_ultimo_woocommerce_should_use_subscriptions

讓開發人員可以強制使用 WooCommerce Subscriptions。

預設情況下，此附加元件會檢查兩件事：首先，檢查是否安裝了 WooCommerce Subscriptions（無論是完整的 plugin 還是捆綁的核心功能）；接著，再檢查設定中是否啟用了使用 WooCommerce Subscriptions 的功能。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enable_woocommerce_subscription_integration | `bool` | 我們目前是否需要使用 Woo Subs。 |
| $woo_gateway | `\WP_Ultimo_WooCommerce\Gateways\WooCommerce_Gateway` | 當前的物件。 |

### 來源 {#source}

定義於 [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L361) 的第 361 行。

## 回傳值 {#returns}
回傳 `true` 表示使用 WooCommerce Subscriptions，回傳 `false` 表示不使用。
