---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: فلټر - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# فلټر: wp_ultimo_woocommerce_checkout_fields_to_clean

پرمخ‌وړونکو ته اجازه ورکوي چې د WooCommerce د بلینګ پتې ډیفالټ ساحې فلټر کړي.

څرنګه چې Ultimate Multisite د بلینګ پتې ساحې لري، کېدای شي مناسبه وي چې هغه ډیفالټ ساحې لرې شي چې WooCommerce یې د checkout فورمه کې ښيي. په ډیفالټ ډول، دې لېست ته هېڅ ارزښت نه لېږدول کېږي، نو ټولې هغه ساحې ساتل کېږي چې په WooCommerce کې د ښودلو لپاره تنظیم شوې وي.

### له نسخې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) کې په 277 کرښه تعریف شوی


## بېرته ورکوي {#returns}
د لرې کولو لپاره د ساحو لېست. شته ارزښتونه billing_first_name، billing_last_name، billing_company، billing_country، billing_address_1، billing_address_2، billing_city، billing_state، billing_postcode، billing_email، او billing_phone شاملوي.
