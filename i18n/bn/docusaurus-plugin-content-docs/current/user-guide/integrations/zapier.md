---
title: Zapier ইন্টিগ্রেশন
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite-কে Zapier-এর সাথে ইন্টিগ্রেট করা

আমাদের একটি আর্টিকেলে আমরা [Webhooks](webhooks.md) নিয়ে আলোচনা করেছিলাম এবং দেখিয়েছিলাম কীভাবে এগুলো থার্ড পার্টি অ্যাপ্লিকেশনের সাথে ইন্টিগ্রেট করতে ব্যবহার করা যায়।

Webhook ব্যবহার করা কিছুটা জটিল কারণ এর জন্য কোডিং এবং payload ক্যাচ করার অ্যাডভান্সড জ্ঞান প্রয়োজন। **Zapier** ব্যবহার করলে আপনি এই জটিলতা এড়িয়ে যেতে পারবেন।

Zapier ৫০০০+ অ্যাপের সাথে ইন্টিগ্রেশন সাপোর্ট করে, যা বিভিন্ন অ্যাপ্লিকেশনের মধ্যে যোগাযোগ অনেক সহজ করে দেয়।

আপনি **Trigger** তৈরি করতে পারবেন যেগুলো আপনার নেটওয়ার্কে কোনো ইভেন্ট ঘটলে অ্যাক্টিভ হবে (যেমন একটি অ্যাকাউন্ট তৈরি হলে account_create ইভেন্ট ট্রিগার হয়) অথবা বাইরের ইভেন্টের প্রতিক্রিয়ায় আপনার নেটওয়ার্কে **Action** জেনারেট করতে পারবেন (যেমন আপনার Ultimate Multisite নেটওয়ার্কে নতুন অ্যাকাউন্ট মেম্বারশিপ তৈরি করা)।

এটা সম্ভব হয়েছে কারণ **Ultimate Multisite Zapier-এর trigger** এবং action গুলো [REST API](https://developer.ultimatemultisite.com/api/docs/) দ্বারা চালিত।

## কীভাবে শুরু করবেন

প্রথমে, Zapier অ্যাপ লিস্টে Ultimate Multisite খুঁজুন। অথবা, আপনি [এই লিংকে](https://zapier.com/apps/wp-ultimo/integrations) ক্লিক করতে পারেন।

আপনার dashboard-এ যান এবং একটি নতুন Zap সেটআপ করতে বাম সাইডবারে **+** **Create Zap** বাটনে ক্লিক করুন।

![Create Zap বাটনসহ Zapier dashboard](/img/admin/webhooks-list.png)

আপনাকে Zap তৈরির পেজে নিয়ে যাওয়া হবে।

সার্চ বক্সে "wp ultimo" টাইপ করুন। **Beta** ভার্সন অপশনটি সিলেক্ট করতে ক্লিক করুন।

![Zapier অ্যাপ লিস্টে WP Ultimo খোঁজা](/img/admin/webhooks-list.png)

আমাদের অ্যাপ সিলেক্ট করার পর, উপলব্ধ ইভেন্টটি বেছে নিন: **New Ultimate Multisite Event**।

![New Ultimate Multisite Event trigger সিলেক্ট করা](/img/admin/webhooks-list.png)

এখন আমাদের Zapier-কে **আপনার নেটওয়ার্কে** অ্যাক্সেস দিতে হবে। **Sign in**-এ ক্লিক করলে একটি নতুন উইন্ডো খুলবে যেখানে **API credentials** দিতে হবে।

![API credentials-এর জন্য Zapier Sign in প্রম্পট](/img/admin/webhooks-list.png)

আপনার নেটওয়ার্ক অ্যাডমিন প্যানেলে যান এবং **Ultimate Multisite > Settings** > **API & Webhooks**-এ নেভিগেট করে API Settings সেকশনটি খুঁজুন।

**Enable API** অপশনটি সিলেক্ট করুন কারণ এই কানেকশন কাজ করতে এটি আবশ্যক।

![Ultimate Multisite-এ Enable API অপশনসহ API Settings](/img/admin/webhooks-list.png)

API Key এবং API Secret ফিল্ডে **Copy to Clipboard** আইকন ব্যবহার করুন এবং সেই ভ্যালুগুলো ইন্টিগ্রেশন স্ক্রিনে পেস্ট করুন।

URL ফিল্ডে, প্রোটোকলসহ (HTTP বা HTTPS) আপনার নেটওয়ার্কের সম্পূর্ণ URL দিন।

![API Key, Secret, এবং URL ফিল্ডসহ Zapier ইন্টিগ্রেশন স্ক্রিন](/img/admin/webhooks-list.png)

পরবর্তী ধাপে যেতে **Yes, Continue** বাটনে ক্লিক করুন। সবকিছু ঠিকঠাক হলে, আপনি আপনার নতুন কানেক্টেড অ্যাকাউন্ট দেখতে পাবেন! একটি নতুন trigger তৈরি করতে **Continue**-এ ক্লিক করুন।

## কীভাবে নতুন Trigger তৈরি করবেন

এখন আপনার অ্যাকাউন্ট কানেক্ট হয়ে গেছে এবং আপনি উপলব্ধ ইভেন্টগুলো দেখতে পাচ্ছেন। এই টিউটোরিয়ালে আমরা **payment_received** ইভেন্ট বেছে নেব।

![Zapier trigger-এ payment_received ইভেন্ট সিলেক্ট করা](/img/admin/webhooks-list.png)

ইভেন্ট সিলেক্ট করে **continue**-এ ক্লিক করলে একটি **test step** দেখা যাবে।

![Trigger-এর জন্য Zapier test step](/img/admin/webhooks-list.png)

এই ধাপে, Zapier পরীক্ষা করবে আপনার Zap **সেই ইভেন্টের নির্দিষ্ট payload ফেচ করতে পারছে কিনা**। ভবিষ্যতে একই ধরনের ইভেন্টে, এই একই স্ট্রাকচারের তথ্য পাঠানো হবে।

![Payload-সহ Zapier trigger টেস্ট সফলভাবে সম্পন্ন](/img/admin/webhooks-list.png)

আমাদের টিউটোরিয়ালে টেস্ট **সফলভাবে সম্পন্ন** হয়েছে এবং উদাহরণ payload তথ্য রিটার্ন করেছে। এই উদাহরণ তথ্য action তৈরি করার সময় আমাদের গাইড করতে কাজে আসবে। আপনার trigger এখন তৈরি এবং অন্যান্য অ্যাপ্লিকেশনের সাথে কানেক্ট করার জন্য প্রস্তুত।

## কীভাবে Action তৈরি করবেন

Action অন্যান্য trigger থেকে পাওয়া তথ্য ব্যবহার করে আপনার নেটওয়ার্কে নতুন এন্ট্রি তৈরি করে।

**action তৈরির ধাপে** আপনি Ultimate Multisite **Beta** এবং **Create Items on Ultimate Multisite** অপশন বেছে নেবেন।

![Create Items on Ultimate Multisite দিয়ে action তৈরি করা](/img/admin/webhooks-list.png)

পরবর্তী ধাপে আপনি হয় নতুন authentication তৈরি করবেন, যেমনটা আমরা **কীভাবে শুরু করবেন**-এ করেছিলাম, অথবা আগে তৈরি করা authentication সিলেক্ট করবেন। এই টিউটোরিয়ালে আমরা আগে তৈরি করা একই authentication বেছে নেব।

![Zapier action-এর জন্য authentication সিলেক্ট করা](/img/admin/webhooks-list.png)

### Action সেটআপ করা

এটি **action-এর মূল ধাপ** এবং এখানে বিষয়গুলো একটু ভিন্ন। প্রথম যে তথ্যটি আপনি বেছে নেবেন সেটি হলো **Item**। Item হলো আপনার নেটওয়ার্কের **ইনফরমেশন মডেল** যেমন **Customers, Payments, Sites, Emails** এবং অন্যান্য।

![Zapier action-এর জন্য Item টাইপ বেছে নেওয়া](/img/admin/webhooks-list.png)

একটি item সিলেক্ট করলে, ফর্মটি **সেই item-এর জন্য প্রয়োজনীয় এবং ঐচ্ছিক ফিল্ডগুলো নিয়ে আসতে পুনর্বিন্যস্ত হবে**।

উদাহরণস্বরূপ, **Customer** item সিলেক্ট করলে, ফর্ম ফিল্ডগুলো নেটওয়ার্কে নতুন Customer তৈরি করতে যা যা পূরণ করা দরকার সবকিছু নিয়ে আসবে।

![Zapier action সেটআপে Customer item ফিল্ডগুলো](/img/admin/webhooks-list.png)

**required** হিসেবে চিহ্নিত সব ফিল্ড পূরণ করে continue-এ ক্লিক করলে, একটি শেষ স্ক্রিন আপনাকে পূরণ করা ফিল্ড এবং যেগুলো পূরণ করা হয়নি সেগুলো দেখাবে।

![পূরণ করা এবং না করা ফিল্ড দেখানো Zapier action টেস্ট](/img/admin/webhooks-list.png)

আপনার টেস্ট সম্পন্ন ও সফল হলেই আপনার action কনফিগার হয়ে গেছে। আপনার action-এর টেস্টের মাধ্যমে item তৈরি হয়েছে কিনা তা আপনার নেটওয়ার্কে গিয়ে চেক করাও গুরুত্বপূর্ণ।
