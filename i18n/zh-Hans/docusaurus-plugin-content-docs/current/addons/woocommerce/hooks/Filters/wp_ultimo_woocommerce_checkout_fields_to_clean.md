---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: 过滤器 - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# 过滤器: wp_ultimo_woocommerce_checkout_fields_to_clean

允许开发者过滤默认的 WooCommerce 账单地址字段。

由于 Ultimate Multisite 已经包含账单地址字段，可能需要移除 WooCommerce 在结账表单中默认显示的字段。默认情况下，该列表不传递任何值，因此 WooCommerce 配置为显示的所有字段都会保留。

### 适用版本

- 2.0.0

### 源码

在 [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) 的第 277 行定义

## 返回值

要移除的字段列表。可用值包括 billing_first_name、billing_last_name、billing_company、billing_country、billing_address_1、billing_address_2、billing_city、billing_state、billing_postcode、billing_email 和 billing_phone。
