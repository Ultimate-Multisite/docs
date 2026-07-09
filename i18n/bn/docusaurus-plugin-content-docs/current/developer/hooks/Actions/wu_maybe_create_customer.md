---
id: wu_maybe_create_customer
title: Action - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer {#action-wumaybecreatecustomer}

প্লাগইন ডেভেলপারদের সুযোগ দেয় যে গ্রাহক যোগ করার সময় তারা অতিরিক্ত কিছু কাজ করতে পারে।

উদাহরণস্বরূপ, গ্রাহককে মূল সাইটেও ব্যবহারকারী হিসেবে যোগ করার জন্য আমরা এখানে হুকস যোগ করি।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $customer | `\Customer` | যে গ্রাহকটি হয়তো তৈরি হয়েছে। |
| $checkout | `\Checkout` | বর্তমান চেকআউট ক্লাস। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[inc/checkout/class-checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156)-এ লাইন ১১৫৬-এ সংজ্ঞায়িত।
