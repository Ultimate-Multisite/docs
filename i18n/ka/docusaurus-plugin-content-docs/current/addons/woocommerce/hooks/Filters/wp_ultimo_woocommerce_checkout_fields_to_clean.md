---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: ფილტრი - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# ფილტრი: wp_ultimo_woocommerce_checkout_fields_to_clean

დეველოპერებს საშუალებას აძლევს, გაფილტრონ ნაგულისხმევი WooCommerce ბილინგის მისამართის ველები.

რადგან Ultimate Multisite-ს აქვს ბილინგის მისამართის ველები, შესაძლოა აზრიანი იყოს checkout ფორმაზე WooCommerce-ის მიერ ნაჩვენები ნაგულისხმევი ველების წაშლა. ნაგულისხმევად, ამ სიას მნიშვნელობა არ გადაეცემა, ამიტომ WooCommerce-ში საჩვენებლად კონფიგურირებული ყველა ველი შენარჩუნებულია.

### ვერსიიდან {#since}

- 2.0.0
### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277)-ში, ხაზზე 277


## აბრუნებს {#returns}
წასაშლელი ველების სიას. ხელმისაწვდომი მნიშვნელობებია billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email და billing_phone.
