---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

આ ડેવલપર્સને ડિફોલ્ટ WooCommerce બિલિંગ એડ્રેસ ફીલ્ડ્સને ફિલ્ટર કરવાની મંજૂરી આપે છે.

કારણ કે Ultimate Multisite માં બિલિંગ એડ્રેસ ફીલ્ડ્સ છે, તેથી ચેકઆઉટ ફોર્મ પર WooCommerce દ્વારા બતાવવામાં આવતા ડિફોલ્ટ ફીલ્ડ્સને દૂર કરવું યોગ્ય રહેશે. ડિફોલ્ટ રૂપે, આ લિસ્ટમાં કોઈ વેલ્યુ પાસ થતી નથી, તેથી WooCommerce પર ડિસ્પ્લે કરવા માટે કન્ફિગર કરેલા બધા ફીલ્ડ્સ જળવાઈ રહે છે.

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) at line 277


## શું પરત કરે છે (Returns) {#returns}
દૂર કરવાના ફીલ્ડ્સની યાદી. ઉપલબ્ધ વેલ્યુમાં billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, અને billing_phone નો સમાવેશ થાય છે.
