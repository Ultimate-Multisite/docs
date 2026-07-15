---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Scagaire - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Scagaire: wp_ultimo_woocommerce_checkout_fields_to_clean

Ligeann sé d’fhorbróirí réimsí réamhshocraithe seolta billeála WooCommerce a scagadh.

Ós rud é go bhfuil réimsí seolta billeála ag Ultimate Multisite, d’fhéadfadh sé ciall a dhéanamh na réimsí réamhshocraithe a thaispeánann WooCommerce ar an bhfoirm checkout a bhaint. De réir réamhshocraithe, ní chuirtear luach ar bith ar aghaidh chuig an liosta seo, mar sin coinnítear gach réimse atá cumraithe ar WooCommerce le taispeáint.

### Ó shin {#since}

- 2.0.0
### Foinse {#source}

Sainithe in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ag líne 277


## Tuairisceáin {#returns}
An liosta réimsí le baint. I measc na luachanna atá ar fáil tá billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, agus billing_phone.
