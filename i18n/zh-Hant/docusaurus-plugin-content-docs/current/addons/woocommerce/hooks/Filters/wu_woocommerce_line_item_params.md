---
id: wu_woocommerce_line_item_params
title: Filter - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# 過濾器：wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

在將客戶導向 WooCommerce 結帳頁面之前，過濾用於建立 WooCommerce 購物車商品項目的參數。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $line_item_params | `array` | 購物車的商品項目參數。 |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite 的商品項目實例。 |
| $wc_product | `\WC_Product` | WooCommerce 的產品。 |

### 自 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) 的第 662 行


## 回傳值 {#returns}
修改後的商品項目參數。
