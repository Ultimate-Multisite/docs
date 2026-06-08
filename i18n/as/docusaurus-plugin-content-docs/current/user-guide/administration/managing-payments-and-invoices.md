---
title: পেমেন্ট আৰু ইনভয়েছ ব্যৱস্থাপনা
sidebar_position: 15
_i18n_hash: 1aefdd4ebf84e2eda188b3d28ce18e36
---
# পৰিশোধ আৰু ইনভয়েছ व्यवस्थापन

## Payment Settings (পৰিৱৰ্তনৰ সেটিং)

পৰিৱৰ্তন (payment) গ্ৰহ কৰিবলৈ আৰম্ভ কৰাৰ আগতে, আপুনি পৰিশোধ-সম্পৰ্কীয় সেটিংবোৰ কনফিগাৰ কৰিব লাগিব। **Ultimate Multisite → Settings** স্থানলৈ যোৱা আৰু **Payment** ট্ৰিখনত ক্লিক কৰক।

![Payment settings tab](/img/admin/settings-payments-top.png)

পৰিৱৰ্তন সেটিং পৃষ্ঠাৰ সম্পূৰ্ণ দৃশ্য ইয়াত দিয়া হ'ল:

![Payment settings full page](/img/admin/settings-payments-full.png)

### General Payment Options (সাধাৰণ পৰিশোধ বিকল্প)

সাধাৰণ সেটিংসমূহত আপুনি তলত দিয়া বিষয়বোৰ কনফিগাৰ কৰিব পাৰে:

- **Currency** — লেনদেনৰ বাবে ব্যৱহৃত ডিফল্ট মুদ্রা (default currency)
- **Currency Position** — মুদ্রাৰ চিহ্ন ক'ত দেখুৱাব লাগিব (টাককৰ আগত/পিছত)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways (পৰিৱৰ্তন গেটৱে)

Ultimate Multisite ले বহুতো পৰিশোধ গেটৱে সমৰ্থন কৰে। আপুনি Payment settings ট্ৰিৰ পৰা প্ৰতিটো গেটৱে সক্ষম কৰি আৰু কনফিগাৰ কৰিব পাৰে।

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

উপলব্ধ গেটৱেসমূহৰ ভিতৰত আছে:

- **Stripe** — Stripeৰ জৰিয়তে ক্রেডিট কাৰ্ড পৰিশোধ
- **PayPal** — PayPal পৰিশোধ
- **Manual** — অফলাইন বা ব্যক্তিগত পৰিশোধ প্ৰক্ৰিয়াকৰণৰ বাবে

প্ৰতিটো গেটৱেৰ নিজস্ব কনফিগাৰেশ্বন অংশ আছে, য'ত আপুনি API keys আৰু অন্যান্য সেটিংবোৰ প্ৰৱেশ কৰিব লাগিব।

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode (ছাণ্ডবক্স মোড)

লাইভ হোৱাৰ আগতে আপোনাৰ পৰিশোধ ইন্টিগ্ৰেচন পৰীক্ষা কৰিবলৈ আপুনি **Sandbox Mode** সক্ষম কৰিব পাৰে। ছাণ্ডবক্স মোড актив হৈ থকা সময়ত, কোনোবা এটা প্ৰকৃত ধনৰ লেনদেন নহ'ব।

## Viewing Payments (পৰিৱৰ্তন দেখা)

আপোনাৰ নেটৱৰ্কৰ সকলো লেনদেন দেখাৰ বাবে Ultimate Multisiteৰ তলত থকা **Payments** পৃষ্ঠালৈ যোৱা।

![Payments list](/img/admin/payments-list.png)

আপুনি লেনদেনৰ স্থিতি (completed, pending, failed, refunded) অনুসৰি ফিল্টাৰ কৰিব পাৰে আৰু নিৰ্দিষ্ট লেনদেন বিচাৰি পাব পাৰে।

পৰিৱৰ্তনৰ ওপৰত ক্লিক কৰক, তেন্তে আপুনি ইয়াৰ সম্পূৰ্ণ বিৱৰণ পাব, যাৰ ভিতৰত লাইন আইটেম, জড়িত সদস্যপদ (associated membership), গ্ৰাহকৰ তথ্য, আৰু পৰিশোধ গেটৱেৰ তথ্য অন্তৰ্ভুক্ত।

## Invoices (ইনভয়েছ)

Ultimate Multisite লে পৰিশোধৰ বাবে স্বয়ংক্ৰিয়ভাৱে ইনভয়েছ সৃষ্টি কৰিব পাৰে। আপুনি Payment settingsৰ পৰা ইনভয়েছ টেমপ্লেট আৰু নম্বৰিং ফৰমট কাস্টমাইজ কৰিব পাৰে।

ইনভয়েছ কাস্টমাইজেশ্বন বিকল্পসমূহৰ ভিতৰত আছে:

- ইনভয়েছত প্ৰদৰ্শিত **Company name and address**
- **Invoice numbering** ফৰমট আৰু অনুক্ৰম
- ইনভয়েছৰ হেডাৰত দেখুৱাই থকা **Logo**
- চৰম, টোকা বা আইনী তথ্যৰ বাবে **Custom footer text**

ইনভয়েছ টেমপ্লেট কাস্টমাইজ কৰিবলৈ, **Ultimate Multisite → Settings → Payment** লৈ যোৱা আৰু ইনভয়েছ-সম্পৰ্কীয় সেটিংবোৰ বিচাৰক।
