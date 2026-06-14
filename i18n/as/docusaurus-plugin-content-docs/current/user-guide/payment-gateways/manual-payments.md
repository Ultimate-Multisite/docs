---
title: ম্যানুৱেল পেমেন্ট সেটআপ কৰা
sidebar_position: 20
_i18n_hash: cc6364919e001b3e1c8a9de72dab4f76
---
# ম্যানুৱেল পেমেন্ট সেটআপ কৰা (v2)

_**গুৰুত্বপূৰ্ণ টোকা: এই article টি Ultimate Multisiteৰ version 2.x লৈ বৰ্ণনা কৰে।**_

যদি আপোনাৰ ব্যৱহাৰকাৰীসকলৰ বাবে **Stripe** বা **PayPal** উপলব্ধ নহয়, তেন্তে আন কিছুমান भुक्तानी পদ্ধতি আগবঢ়াবলৈ ম্যানুৱেল পেমেন্ট এটা উপায়। ই এটা wire বা bank transfer হ'ব পাৰে বা আপোনাৰ স্থানীয় ব্যৱহাৰকাৰীসকলৰ বাবে উপলব্ধ আন কোনো भुक्तानी পদ্ধতি হ'ব পাৰে।

## ম্যানুৱেল পেমেন্ট কেনেকৈ সক্ষম কৰিব

ম্যানুৱেল পেমেন্ট সেটআপ কৰাটো অতি সহজ। আপুনি কেৱল Payment Gatewaysৰ তলত ইয়াক সক্ষম কৰিব লাগিব আৰু ব্যৱহাৰকাৰীয়ে কেনেকৈ পেমেন্ট কৰিব লাগে তাৰ বিষয়ে বিশদ নিৰ্দেশনা দিব লাগিব।

প্ৰথমে, **Ultimate Multisite > Settings > Payments** লৈ যাওক। **Payment Gateways** ৰ তলত, **Manual** টগল কৰি অন কৰক। আপুনি দেখিব যে এটা **Payment Instructions** বক্স খুলি আহিছে।

এই বক্সত সেই তথ্য যোগ কৰক যিটো আপোনাৰ ग्राहकক পেমেন্ট কৰিবলৈ লাগিব। ই আপোনাৰ বেংক একাউণ্টৰ বিৱৰণ আৰু আপোনাৰ ইমেইল হ'ব পাৰে, যাতে ग्राहकজনে আপোনাক পেমেন্টৰ নিশ্চিতকৰণ (confirmation) পঠিয়াব পাৰে, উদাহৰণস্বৰূপে।

![Manual payment gateway toggle with Payment Instructions text area](/img/config/manual-gateway-expanded.png)

ইয়াত ম্যানুৱেল গেটৱেৰৰ সেটিংসৰ ইন্টারফেচটো দিয়া হ'ল:

![Manual gateway settings](/img/config/manual-gateway-settings.png)

সেটআপ কৰাৰ পিছত, কেৱল **Save Settings** मा ক্লিক কৰক আৰু ই হৈ গ'ল। যেতিয়া ব্যৱহাৰকাৰীসকলে আপোনাৰ নেটৱৰ্কত ৰেজিষ্টাৰ কৰে, তেওঁলোকে এটা মেছেজ দেখিব যে তেওঁক ক্ৰয় সম্পন্ন কৰিবলৈ আপোনাৰ নিৰ্দেশনা লাভ কৰিব।

![Registration confirmation message telling the user they will receive payment instructions](/img/frontend/registration-manual-notice.png)

আৰু তেওঁলোকে আপোনাৰ **Thank You** পৃষ্ঠাখনতও আপোনাৰ পেমেন্ট নিৰ্দেশনা লাভ কৰিব।

<!-- Screenshot unavailable: Thank You page showing payment instructions after checkout -->

## ম্যানুৱেল পেমেন্ট নিশ্চিত কৰা

এটা ম্যানুৱেল পেমেন্ট নিশ্চিত কৰিবলৈ, বাঁহফালে থকা **Payments** মেনুত যাওক। তাত আপুনি আপোনাৰ নেটৱৰ্কৰ সকলো পেমেন্ট আৰু তাৰ বিৱৰণ, লগতে তাৰ **status**ো দেখিব পাৰিব। এটা ম্যানুৱেল পেমেন্ট সদায় **Pending** status-ত থাকিব, যাৰ পাছত আপুনি নিজে ইয়াক সলনি কৰিব লাগিব।

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** मा ক্লিক কৰি পেমেন্ট পৃষ্ঠাখনত প্ৰৱেশ কৰক। এই পৃষ্ঠাখনত আপোনাৰ Pending পেমেন্টৰ সকলো বিৱৰণ আছে, যেনে reference ID, products, timestamps আৰু অন্যান্য।

![Payment details page showing reference code, products, and totals](/img/admin/payment-edit.png)

ডানফালে, আপুনি পেমেন্টৰ status সলনি কৰিব পাৰে। ইয়াক **Completed** কৰা আৰু **Activate Membership** অপচনটো টগল কৰিলে আপোনাৰ ग्राहकৰ site টি সক্ষম হ'ব আৰু তেওঁলোকৰ membership active হ'ব।

![Payment edit page with Status set to Completed and Activate Membership toggle](/img/admin/payment-activate-membership.png)
