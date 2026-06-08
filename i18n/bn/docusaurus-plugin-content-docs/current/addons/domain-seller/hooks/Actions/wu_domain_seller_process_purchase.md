---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

চেকআউট সম্পন্ন হওয়ার পরে ডোমেইন ক্রয় প্রক্রিয়া করা হলে এটি ট্রিগার হয়।

## প্যারামিটারসমূহ

| নাম | প্রকার | বিবরণ |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট অবজেক্ট। |
| $checkout_data | `array<string,mixed>` | সাইনআপ ফর্ম থেকে সম্পূর্ণ চেকআউট ডেটা। |

### সংস্করণ

- 2.0.0
### উৎস

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) এর লাইন ২৪৬ এ সংজ্ঞায়িত।
