---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Զտիչ - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Զտիչ: wp_ultimo_woocommerce_checkout_fields_to_clean

Թույլ է տալիս մշակողներին զտել WooCommerce-ի վճարային հասցեի լռելյայն դաշտերը։

Քանի որ Ultimate Multisite-ն ունի վճարային հասցեի դաշտեր, կարող է իմաստ ունենալ հեռացնել WooCommerce-ի կողմից checkout ձևում ցուցադրվող լռելյայն դաշտերը։ Լռելյայնորեն այս ցանկին որևէ արժեք չի փոխանցվում, ուստի WooCommerce-ում ցուցադրման համար կարգավորված բոլոր դաշտերը պահպանվում են։

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277)-ում՝ 277-րդ տողում


## Վերադարձնում է
Հեռացվող դաշտերի ցանկը։ Հասանելի արժեքներն են՝ billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email և billing_phone։
