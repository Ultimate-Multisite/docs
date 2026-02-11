---
id: wu_woocommerce_line_item_params
title: 过滤 - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# 过滤器: wu_woocommerce_line_item_params

过滤用于在 WooCommerce 购物车中创建行项目的参数，在将客户重定向到 WooCommerce 结账之前。

## Parameters

| 名称 | 类型 | 描述 |
|------|------|------|
| $line_item_params | `array` | 购物车行项目参数。 |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite 行项目实例。 |
| $wc_product | `\WC_Product` | WooCommerce 产品。 |

### 版本

- 2.0.0

### 源码

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) at line 662

## 返回

修改后的行项目参数。
