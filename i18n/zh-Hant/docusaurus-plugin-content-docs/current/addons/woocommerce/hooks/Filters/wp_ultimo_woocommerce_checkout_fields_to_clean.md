---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

允許開發人員過濾預設的 WooCommerce 帳單地址欄位。

由於 Ultimate Multisite 包含帳單地址欄位，因此我們可能需要移除 WooCommerce 在結帳表單上顯示的預設欄位。預設情況下，此列表不會傳入任何值，因此所有在 WooCommerce 中設定為顯示的欄位都會被保留。

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) 的第 277 行。


## Returns {#returns}
要移除的欄位列表。可用值包括 `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email`, 和 `billing_phone`。
