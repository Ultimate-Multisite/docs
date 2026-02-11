---
id: wu_woocommerce_line_item_params
title: フィルタ - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

WooCommerce カートでラインアイテムを作成する際に使用されるパラメータをフィルタリングし、顧客を WooCommerce チェックアウトにリダイレクトする前に処理します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $line_item_params | `array` | カートラインアイテムのパラメータ。 |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ラインアイテムインスタンス。 |
| $wc_product | `\WC_Product` | WooCommerce 商品。 |

### 以降

- 2.0.0

### ソース

以下で定義されています [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662)（行 662）

## 戻り値

変更されたラインアイテムのパラメータ。
