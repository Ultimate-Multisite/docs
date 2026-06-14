---
title: Stripe کي ترتیب ڏيڻ
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe गेटवे सेट করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x এর জন্য প্রযোজ্য।**_

আমাদের পেমেন্ট সেটিং পেজে আপনি চারটি পেমেন্ট পদ্ধতি সক্রিয় করতে পারেন: Stripe, Stripe Checkout, PayPal এবং ম্যানুয়াল। এই নিবন্ধে, আমরা **Stripe** এর সাথে কীভাবে ইন্টিগ্রেট করতে হয় তা দেখব।

## Stripe সক্ষম করা

আপনার নেটওয়ার্কে Stripe কে একটি উপলব্ধ পেমেন্ট গেটওয়ে হিসাবে চালু করতে, **Ultimate Multisite > Settings > Payments** এ যান এবং Active Payment Gateways সেকশনের পাশে থাকা **Stripe** বা **Stripe Checkout** এর পাশের টগলটি টিক দিন।

![Active payment gateways-এ Stripe সক্ষম করা](/img/config/settings-payment-gateways.png)

### Stripe বনাম Stripe Checkout:

**Stripe:** এই পদ্ধতিটিতে চেকআউটের সময় ক্রেডিট কার্ডের নম্বর ঢোকানোর জন্য একটি জায়গা দেখানো হবে।

![চেকআউটের সময় Stripe ইনলাইন ক্রেডিট কার্ড ফিল্ড](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** এই পদ্ধতিটি চেকআউটের সময় গ্রাহককে একটি Stripe Checkout পেজে রিডাইরেক্ট করবে।

![চেকআউটের সময় Stripe Checkout রিডাইরেক্ট পেজ](/img/config/settings-payment-gateways.png)

আপনার Stripe API কী সংগ্রহ করা

একবার Stripe কে পেমেন্ট গেটওয়ে হিসাবে সক্ষম করার পরে, আপনাকে **Stripe Publishable Key** এবং **Stripe Secret Key** এর ক্ষেত্রগুলি পূরণ করতে হবে। আপনি আপনার Stripe অ্যাকাউন্টে লগইন করে এটি পেতে পারেন।

_**দ্রষ্টব্য:** পেমেন্ট পদ্ধতি কাজ করছে কিনা তা পরীক্ষা করার জন্য আপনি **Sandbox mode** সক্রিয় করতে পারেন._

![Stripe API key ফিল্ড এবং স্যান্ডবক্স মোড টগল](/img/config/settings-payment-gateways.png)

আপনার Stripe ড্যাশবোর্ডে, উপরে ডানদিকে **Developers** এ ক্লিক করুন, এবং তারপর বাম দিকের মেনু থেকে **API Keys** এ যান।

![API কী সহ Stripe ড্যাশবোর্ডের ডেভেলপার বিভাগ](/img/config/settings-payment-gateways.png)

توهان توهان **Test Data** استعمال ڪري سگهو ٿا (هي ڏسڻ لاءِ ته ڪهڙي integration توهان جي production site تي کام ڪري رهي آهي يا نه). ان کي تبديل ڪرڻ لاءِ، **Viewing test data** toggle کي switch ڪريو.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** ۽ **Secret key** کان **Token** کالم مان قيمت ڪاپي ڪريو ۽ ان کي Ultimate Multisite Stripe Gateway جي فیلڊز ۾ پیسٽ ڪريو. پنهنجا تبديل ڪرڻ لاءِ ڇڪڻ (click) تي **Save Changes** تي کليڪ ڪريو.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook کي set up ڪرڻ

Stripe webhook events ڇاڻن ٿا جيڪي Ultimate Multisite کي توهان جي **stripe account** تي ڪنهن به event ٿيڻ تي اطلاع ڏين ٿا.

**Developers** تي کليڪ ڪريو ۽ پوءِ لائي هاري (left menu) ۾ **Webhooks** جو خيار چنو. پوءِ هيٺ دائي (right hand side) **Add endpoint** تي کليڪ ڪريو *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

توهان کي هڪ **Endpoint URL** جي ضرورت پوندي *.* Ultimate Multisite خود Endpoint URL خود هيٺ **Ultimate Multisite Stripe Gateway** سيكشن ۾ **Webhook Listener URL** فیلڊ کان ملي ويندي آهي_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL کي **Copy** ڪريو ۽ ان کي Stripe **Endpoint URL** فیلڊ ۾ **Paste** ڪريو.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

پنهنجي سادي **Event** چونڊ ڪرڻ جو عمل آهي *.* هيٺ ڏنل خيار (option) تي، توهان کي بس **Select all events** بڪس کي چڪر ڪري **Add events** تي کليڪ ڪرڻ ۽ پوءِ تبديل ڪرڻ لاءِ **Add Endpoint** تي کليڪ ڪرڻ جي ضرورت آهي.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

هي ختم ٿي ويو، توهان جو Stripe پيمنٽ انٽيغريشن كامل آهي!
