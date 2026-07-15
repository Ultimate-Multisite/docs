---
id: wp_ultimo_woocommerce_checkout_fields_to_clean
title: តម្រង - wp_ultimo_woocommerce_checkout_fields_to_clean
sidebar_label: wp_ultimo_woocommerce_checkout_fields_to_clean
_i18n_hash: bf2093f846ebd66c6c959383edb1a766
---
# តម្រង៖ wp_ultimo_woocommerce_checkout_fields_to_clean

អនុញ្ញាតឱ្យអ្នកអភិវឌ្ឍន៍តម្រងវាលអាសយដ្ឋានវិក្កយបត្រ WooCommerce លំនាំដើម។

ដោយសារ Ultimate Multisite មានវាលអាសយដ្ឋានវិក្កយបត្រ វាអាចសមហេតុផលក្នុងការលុបវាលលំនាំដើមដែល WooCommerce បង្ហាញនៅលើសំណុំបែបបទទូទាត់។ តាមលំនាំដើម មិនមានតម្លៃណាមួយត្រូវបានបញ្ជូនទៅបញ្ជីនេះទេ ដូច្នេះវាលទាំងអស់ដែលបានកំណត់រចនាសម្ព័ន្ធលើ WooCommerce ដើម្បីបង្ហាញ នឹងត្រូវបានរក្សាទុក។

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L277) នៅបន្ទាត់ 277


## ត្រឡប់ {#returns}
បញ្ជីវាលដែលត្រូវលុប។ តម្លៃដែលអាចប្រើបានរួមមាន billing_first_name, billing_last_name, billing_company, billing_country, billing_address_1, billing_address_2, billing_city, billing_state, billing_postcode, billing_email, និង billing_phone។
