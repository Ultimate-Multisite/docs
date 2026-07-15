---
title: Stripe ସେଟଅପ୍ କରିବା
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe গেটওয়ে সেটআপ করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x এর জন্য প্রযোজ্য।**_

আমাদের পেমেন্ট সেটিংস পেজে আপনি চারটি পেমেন্ট পদ্ধতি সক্রিয় করতে পারেন: Stripe, Stripe Checkout, PayPal এবং ম্যানুয়াল। এই নিবন্ধে, আমরা **Stripe** এর সাথে কীভাবে ইন্টিগ্রেট করতে হয় তা দেখব।

## Stripe সক্ষম করা {#enabling-stripe}

আপনার নেটওয়ার্কে Stripe কে একটি উপলব্ধ পেমেন্ট গেটওয়ে হিসাবে চালু করতে, **Ultimate Multisite > Settings > Payments** এ যান এবং Active Payment Gateways সেকশনের অধীনে **Stripe** বা **Stripe Checkout** এর পাশের টগলটি টিক দিন।

![Active payment gateways-এ Stripe সক্ষম করা](/img/config/settings-payment-gateways.png)

### Stripe বনাম Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** এই পদ্ধতিটিতে চেকআউটের সময় ক্রেডিট কার্ডের নম্বর ঢোকানোর জন্য একটি জায়গা দেখানো হবে।

![চেকআউটের সময় Stripe ইনলাইন ক্রেডিট কার্ড ফিল্ড](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** এই পদ্ধতিটি গ্রাহককে চেকআউটের সময় একটি Stripe Checkout পেজে পুনঃনির্দেশিত করবে।

![চেকআউটের সময় Stripe Checkout রিডাইরেক্ট পেজ](/img/config/settings-payment-gateways.png)

আপনার Stripe API কী সংগ্রহ করা

একবার Stripe কে পেমেন্ট গেটওয়ে হিসাবে সক্ষম করার পরে, আপনাকে **Stripe Publishable Key** এবং **Stripe Secret Key** ফিল্ডগুলি পূরণ করতে হবে। আপনি আপনার Stripe অ্যাকাউন্টে লগইন করে এটি পেতে পারেন।

_**দ্রষ্টব্য:** পেমেন্ট পদ্ধতি কাজ করছে কিনা তা পরীক্ষা করার জন্য আপনি **Sandbox mode** সক্রিয় করতে পারেন।_

![Stripe API key ফিল্ড এবং স্যান্ডবক্স মোড টগল](/img/config/settings-payment-gateways.png)

আপনার Stripe ড্যাশবোর্ডে, উপরে ডানদিকে **Developers** এ ক্লিক করুন, এবং তারপর বাম দিকের মেনু থেকে **API Keys** এ যান।

![API কী সহ Stripe ড্যাশবোর্ডের ডেভেলপার বিভাগ](/img/config/settings-payment-gateways.png)

ଆପଣ ବ୍ୟବହାର କରିପାରିବେ **Test Data** (ଯଦି ଆପଣ ଚାକ୍ରିକ ସାଇଟ୍ ଉପରେ ଏହା କାର୍ଯ୍ୟ କରୁଛି କି ନାହିଁ ଯାଞ୍ଚ କରିବା ପାଇଁ) କିମ୍ବା ନାହିଁ। ଏହା ବଦଳାଇବା ପାଇଁ **Viewing test data** togglenକୁ ଟିକେ ଚୋପି ଦିଅନ୍ତୁ।

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** ଏବଂ **Secret key** ର ମୂଲ୍ୟ, **Token** କଲମ୍ ଆଡ଼କୁ ଯାଇ ସେଥିରୁ ନକଲ କରି Ultimate Multisite Stripe Gateway ଫିଲ୍ଡରେ ପେଷ୍ଟ କରନ୍ତୁ। ତା'ପରେ **Save Changes** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook ସେଟଅପ୍ କରିବା {#setting-up-stripe-webhook}

Stripe ଆପଣଙ୍କ **stripe account** ରେ କୌଣସି ବିଷୟ ହେଲେ Ultimate Multisite କୁ ନୋଟିଫିକେସନ୍ ପାଇଁ webhook events ପଠାଏ।

**Developers** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ ଏବଂ ତା'ପରେ ବାମ ମେନୁରେ **Webhooks** ଆଇଟମ୍ ଚୟନ କରନ୍ତୁ। ତା'ପରେ ଡାଇଟ୍ ସାଇଡରେ **Add endpoint** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ *।*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

ଆପଣଙ୍କୁ ଏକ **Endpoint URL** ଆବଶ୍ୟକ ହେବ *।* Ultimate Multisite ଆପଣଙ୍କ ପାଇଁ ଅଟୋମାଟିକ୍ ଭାବରେ ଇଣ୍ଟରଫେସ୍ URL ତିଆରି କରିଦିଏ, ଯାହାକୁ ଆପଣ **Ultimate Multisite Stripe Gateway** ସେକ୍ସନରେ **Webhook Listener URL** ଫିଲ୍ଡ ମଠରେ ପାଇପାରିବେ।

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL କୁ **Copy** କରି **Stripe Endpoint URL** ଫିଲ୍ଡରେ **Paste** କରନ୍ତୁ।

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

ପରବର୍ତ୍ତୀ ପାଦରେ ଏକ **Event** ଚୟନ କରିବା ଆବଶ୍ୟକ *।* ଏହି ଅପ୍ସନ୍ ତଳେ, ଆପଣ କେବଳ **Select all events** ବକ୍ସଟି ଚେକ୍ କରି **Add events** ଉପରେ କ୍ଲିକ୍ କରିପାରିବେ। ଏହା ପରେ ପରିବର୍ତ୍ତନ ସୁରକ୍ଷିତ କରିବା ପାଇଁ **Add Endpoint** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

ଏତିକିରେ, ଆପଣଙ୍କର Stripe ପେମେଣ୍ଟ ଇଣ୍ଟିଗ୍ରେସନ୍ ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଛି!
