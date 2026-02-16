---
title: Stripe সেটআপ করা
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe গেটওয়ে সেটআপ করা (v2)

_**গুরুত্বপূর্ণ দ্রষ্টব্য: এই আর্টিকেলটি Ultimate Multisite ভার্সন 2.x-এর জন্য প্রযোজ্য।**_

আমাদের পেমেন্ট সেটিংস পেজে আপনি সর্বোচ্চ চারটি পেমেন্ট পদ্ধতি চালু করতে পারেন: Stripe, Stripe Checkout, PayPal এবং Manual। এই আর্টিকেলে আমরা দেখব কীভাবে **Stripe**-এর সাথে ইন্টিগ্রেশন করতে হয়।

## Stripe চালু করা

আপনার নেটওয়ার্কে Stripe কে পেমেন্ট গেটওয়ে হিসেবে চালু করতে, **Ultimate Multisite > Settings > Payments**-এ যান এবং Active Payment Gateways সেকশনে **Stripe** অথবা **Stripe Checkout**-এর পাশের টগলে টিক দিন।

![Active payment gateways-এ Stripe চালু করা](/img/config/settings-payment-gateways.png)

### Stripe বনাম Stripe Checkout:

**Stripe:** এই পদ্ধতিতে checkout-এর সময় ক্রেডিট কার্ড নম্বর দেওয়ার জন্য একটি জায়গা দেখাবে।

![Checkout-এর সময় Stripe inline ক্রেডিট কার্ড ফিল্ড](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** এই পদ্ধতিতে checkout-এর সময় কাস্টমারকে একটি Stripe Checkout পেজে রিডাইরেক্ট করা হবে।

![Checkout-এর সময় Stripe Checkout রিডাইরেক্ট পেজ](/img/config/settings-payment-gateways.png)

আপনার Stripe API কী পাওয়া

Stripe পেমেন্ট গেটওয়ে হিসেবে চালু হয়ে গেলে, আপনাকে **Stripe Publishable Key** এবং **Stripe Secret Key** ফিল্ডগুলো পূরণ করতে হবে। আপনার Stripe অ্যাকাউন্টে লগইন করে এগুলো পেতে পারেন।

_**দ্রষ্টব্য:** পেমেন্ট পদ্ধতি ঠিকমতো কাজ করছে কিনা টেস্ট করতে আপনি **Sandbox mode** চালু করতে পারেন।_

![Stripe API কী ফিল্ড এবং sandbox mode টগল](/img/config/settings-payment-gateways.png)

আপনার Stripe dashboard-এ, উপরের ডানদিকে **Developers**-এ ক্লিক করুন, তারপর বাম মেনুতে **API Keys**-এ ক্লিক করুন।

![Stripe dashboard-এর Developers সেকশনে API Keys](/img/config/settings-payment-gateways.png)

আপনি **Test Data** ব্যবহার করতে পারেন (আপনার production সাইটে ইন্টিগ্রেশন কাজ করছে কিনা টেস্ট করতে) অথবা না-ও করতে পারেন। এটি পরিবর্তন করতে **Viewing test data** টগলটি সুইচ করুন।

![Stripe-এর Viewing test data টগল](/img/config/settings-payment-gateways.png)

**Token** কলাম থেকে **Publishable key** এবং **Secret key**-এর মান কপি করুন এবং Ultimate Multisite Stripe Gateway ফিল্ডগুলোতে পেস্ট করুন। তারপর **Save Changes**-এ ক্লিক করুন।

![Stripe publishable এবং secret key-এর মান](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings-এ Stripe কী পেস্ট করা](/img/config/settings-payment-gateways.png)

## Stripe Webhook সেটআপ করা

Stripe webhook ইভেন্ট পাঠায় যা **আপনার Stripe অ্যাকাউন্টে** কোনো ইভেন্ট ঘটলে Ultimate Multisite-কে জানিয়ে দেয়।

**Developers**-এ ক্লিক করুন এবং তারপর বাম মেনু থেকে **Webhooks** আইটেমটি বেছে নিন। তারপর ডানদিকে **Add endpoint**-এ ক্লিক করুন।

![Stripe Webhooks পেজে Add endpoint বাটন](/img/config/settings-payment-gateways.png)

আপনার একটি **Endpoint URL** লাগবে। Ultimate Multisite স্বয়ংক্রিয়ভাবে endpoint URL তৈরি করে যা আপনি **Ultimate Multisite Stripe Gateway** সেকশনে **Webhook Listener URL** ফিল্ডের ঠিক নিচে পাবেন।

![Stripe gateway settings-এ Webhook Listener URL ফিল্ড](/img/config/settings-payment-gateways.png)

endpoint URL **কপি** করুন এবং Stripe-এর **Endpoint URL** ফিল্ডে **পেস্ট** করুন।

![Stripe webhook সেটআপে endpoint URL পেস্ট করা](/img/config/settings-payment-gateways.png)

এরপর একটি **Event** সিলেক্ট করতে হবে। এই অপশনের নিচে, আপনাকে শুধু **Select all events** বক্সে চেক করতে হবে এবং **Add events**-এ ক্লিক করতে হবে। এরপর পরিবর্তনগুলো সেভ করতে **Add Endpoint**-এ ক্লিক করুন।

![সব ইভেন্ট সিলেক্ট করা এবং Stripe endpoint যোগ করা](/img/config/settings-payment-gateways.png)

ব্যস, আপনার Stripe পেমেন্ট ইন্টিগ্রেশন সম্পূর্ণ হয়ে গেছে!
