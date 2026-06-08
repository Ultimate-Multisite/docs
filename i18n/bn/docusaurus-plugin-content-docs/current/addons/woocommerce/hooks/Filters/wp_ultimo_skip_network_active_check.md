---
id: wp_ultimo_skip_network_active_check
title: ফিল্টার - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ডেভেলপারদের জন্য নেটওয়ার্ক অ্যাক্টিভেশন চেক বাইপাস করার সুযোগ দেয়।

এটি তখন খুব কাজে আসে যখন আপনি composer-ভিত্তিক বা অন্যান্য কাস্টম সেটআপ ব্যবহার করছেন, যেমন Bedrock। এই ধরনের সেটআপে mu-plugins হিসেবে প্লাগইন ব্যবহার করা সাধারণ।

## প্যারামিটারসমূহ

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | যদি আমরা চেকটি এড়িয়ে যেতে চাই কিনা, তা নির্ধারণ করে। ডিফল্ট মান হলো false। |

### Since

- 2.0.0
### Source

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ফাইলটির লাইন ২৭২ এ সংজ্ঞায়িত।

## Returns
আপনি যদি চেকটি এড়িয়ে যেতে চান তবে `true` এবং অন্যথায় `false` রিটার্ন করে।
