---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean

ডেভেলপারদেরকে ডিফল্ট WooCommerce বিলিং অ্যাড্রেস ফিল্ডগুলো ফিল্টার করার সুযোগ দেয়।

যেহেতু Ultimate Multisite-এ বিলিং অ্যাড্রেস ফিল্ড থাকে, তাই চেকআউট ফর্মে WooCommerce দ্বারা প্রদর্শিত ডিফল্ট ফিল্ডগুলো সরিয়ে ফেলা যুক্তিযুক্ত হতে পারে। ডিফল্টভাবে, এই তালিকায় কোনো মান পাস করা হয় না, তাই WooCommerce-এ প্রদর্শনের জন্য কনফিগার করা সমস্ত ফিল্ডই বজায় থাকে।

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277)-এ লাইন ২৭৭-এ সংজ্ঞায়িত।

## Returns {#returns}
যে ফিল্ডগুলো সরিয়ে ফেলতে হবে তার তালিকা। উপলব্ধ মানগুলোর মধ্যে রয়েছে billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, এবং billing_phone।
