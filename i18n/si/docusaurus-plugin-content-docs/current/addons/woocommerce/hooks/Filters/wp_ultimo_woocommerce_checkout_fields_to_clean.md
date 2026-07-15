---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: පෙරහන - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

සංවර්ධකයන්ට පෙරනිමි WooCommerce බිල්පත් ලිපින ක්ෂේත්‍ර පෙරීමට ඉඩ සලසයි.

Ultimate Multisite හි බිල්පත් ලිපින ක්ෂේත්‍ර ඇති බැවින්, checkout ආකෘතියේ WooCommerce විසින් පෙන්වන පෙරනිමි ක්ෂේත්‍ර ඉවත් කිරීම සුදුසු විය හැක. පෙරනිමියෙන්, මෙම ලැයිස්තුවට අගයක් නොයවනු ලබන නිසා WooCommerce මත පෙන්වීමට වින්‍යාස කළ සියලු ක්ෂේත්‍ර තබා ගනී.

### සිට {#since}

- 2.0.0
### මූලාශ්‍රය {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) තුළ 277 වන පේළියේ අර්ථ දක්වා ඇත


## ආපසු ලබා දෙන්නේ {#returns}
ඉවත් කළ යුතු ක්ෂේත්‍ර ලැයිස්තුව. ලබා ගත හැකි අගයන් අතර billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, සහ billing_phone ඇතුළත් වේ.
