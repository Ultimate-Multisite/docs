---
id: wp_ultimo_skip_network_active_check
title: ফিল্টৰ - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

ডেভেলপমেন্টৰ বাবে নেটৱৰ্ক অ্যাক্টিভেশ্যন চেকব স্কিপ কৰিবলৈ অনুমতি দিয়ে।

এইটো বিশেষকৈ composer-based আৰু আন কাস্টম ছেটআপ, যেনে Bedrock, ব্যৱহাৰ কৰোঁতে উপযোগী, য'ত mu-plugins হিচাপে প্লাগইন ব্যৱহাৰ কৰাটো সাধাৰণ।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $skip_network_activation_check | `bool` | যদি আমি চেকব স্কিপ কৰিব লাগে নে নাই, ডিফল্টভাৱে false থাকে। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) ফাইলৰ লাইন ২৭২ ত সংজ্ঞায়িত কৰা হৈছে।


## Returns {#returns}
যদি আপুনি চেকব স্কিপ কৰিব বিচাৰে তেন্তে true, নহ'লে false।
