---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Шүүлтүүр - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Шүүлтүүр: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

Хөгжүүлэгчдэд үндсэн WooCommerce төлбөрийн хаягийн талбаруудыг шүүх боломж олгоно.

Ultimate Multisite нь төлбөрийн хаягийн талбаруудтай тул WooCommerce-ээс checkout маягт дээр харуулдаг үндсэн талбаруудыг хасах нь утга учиртай байж магадгүй. Анхдагчаар энэ жагсаалтад ямар ч утга дамжуулагддаггүй тул WooCommerce дээр харуулахаар тохируулсан бүх талбар хадгалагдана.

### Хойш {#since}

- 2.0.0
### Эх сурвалж {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) дотор 277-р мөрөнд тодорхойлогдсон


## Буцаана {#returns}
Хасах талбаруудын жагсаалт. Боломжит утгууд нь billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email болон billing_phone.
