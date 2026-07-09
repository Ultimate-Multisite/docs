---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: Filter - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# Filter: wp_ultimo_woocommerce_checkout_fields_to_clean {#filter-wpultimowoocommercecheckoutfieldstoclean}

ডেভেলপাৰসকলক ডিফল্ট WooCommerce বিলিং এড্ৰես ফিল্ডসমূহ ফিল্টাৰ কৰিবলৈ অনুমতি দিয়ে।

যেহেতু Ultimate Multisite-ত বিলিং এড্ৰես ফিল্ড আছে, সেয়েহে চেকআউট ফৰ্মত WooCommerce-এ দেখুওৱা ডিফল্ট ফিল্ডসমূহ আঁতৰাই দিয়াটো যুক্তিযুক্ত হ'ব। ডিফল্টভাৱে, এই তালিকাখনলৈ কোনো মান (value) প্ৰেৰণ কৰা নহয়, সেয়েহে WooCommerce-ত দেখুওৱাৰ বাবে কনফিগাৰেট কৰা সকলো ফিল্ড ৰখা হয়।

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) ফাইলৰ ২77 নং লাইনত সংজ্ঞায়িত কৰা হৈছে।

## Returns {#returns}
আঁতৰাবলগীয়া ফিল্ডসমূহৰ তালিকা। উপলব্ধ মানসমূহৰ ভিতৰত আছে billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, আৰু billing_phone।
