---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: フィルタ - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

Allows developers to filter default WooCommerce billing address fields.  
開発者がデフォルトのWooCommerce請求先住所フィールドをフィルタリングできるようにします。

Since Ultimate Multisite has billing address fields, it might make sense to remove the default fields displayed by WooCommerce on the checkout form.  
Ultimate Multisiteには請求先住所フィールドがあるため、チェックアウトフォームでWooCommerceが表示するデフォルトフィールドを削除することが合理的かもしれません。  
By default, no value is passed to this list, so all fields configured on WooCommerce to be displayed are kept.  
デフォルトでは、このリストに値が渡されないため、WooCommerceで表示設定されたすべてのフィールドが保持されます。

### Since

- 2.0.0

### Source

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277

## Returns

The list of fields to remove.  
削除するフィールドのリスト。  
Available values include billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, and billing_phone.  
利用可能な値には、billing_first_name、billing_last_name、billing_company、billing_country、billing_address_1、billing_address_2、billing_city、billing_state、billing_postcode、billing_email、およびbilling_phone が含まれます。
