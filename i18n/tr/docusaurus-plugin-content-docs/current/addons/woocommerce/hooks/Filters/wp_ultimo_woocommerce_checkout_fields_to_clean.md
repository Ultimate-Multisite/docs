---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filtre - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filtre: wp_ultimo_woocommerce_checkout_fields_to_clean

Geliştiricilerin varsayılan WooCommerce fatura adresi alanlarını filtrelemesine olanak tanır.

Ultimate Multisite'ın fatura adresi alanları bulunduğu için, WooCommerce'in ödeme formunda gösterdiği varsayılan alanları kaldırmak mantıklı olabilir. Varsayılan olarak bu listeye hiçbir değer geçirilmediği için, WooCommerce'te gösterilmesi yapılandırılmış tüm alanlar korunur.

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) dosyasının 277. satırında tanımlanmıştır.

## Returns {#returns}
Kaldırılacak alanların listesini döndürür. Mevcut değerler arasında `billing_first_name`, `billing_last_name`, `billing_company`, `billing_country`, `billing_address_1`, `billing_address_2`, `billing_city`, `billing_state`, `billing_postcode`, `billing_email` ve `billing_phone` bulunur.
