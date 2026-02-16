---
title: ওয়েবহুক
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) পরিচিতি

_**মনোযোগ: এই ফিচার বা আর্টিকেলটি অ্যাডভান্সড ইউজারদের জন্য।**_

**Webhook** হলো Ultimate Multisite-এর মতো কোনো অ্যাপ বা সফটওয়্যারের জন্য অন্যান্য অ্যাপ্লিকেশনকে রিয়েল-টাইম তথ্য পাঠানোর একটি উপায়। Webhook ঘটনা ঘটার সাথে সাথেই অন্যান্য অ্যাপ্লিকেশনে ডেটা বা payload পৌঁছে দেয়, অর্থাৎ আপনি **তাৎক্ষণিকভাবে ডেটা পাবেন।**

যখন কোনো ইভেন্ট ট্রিগার হলে Ultimate Multisite থেকে অন্য কোনো CRM বা সিস্টেমে নির্দিষ্ট ডেটা পাঠাতে বা ইন্টিগ্রেট করতে চান, তখন এটি কাজে আসে। উদাহরণস্বরূপ, প্রতিবার নতুন ইউজার অ্যাকাউন্ট তৈরি হলে আপনি ইউজারের নাম এবং ইমেইল ঠিকানা একটি মেইলিং লিস্টে পাঠাতে চাইতে পারেন।

## কীভাবে webhook তৈরি করবেন

Webhook তৈরি করতে আপনার network admin dashboard-এ যান। **Ultimate Multisite > Webhooks > Add New Webhook**-এ ক্লিক করুন।

![Add New Webhook বাটনসহ Webhooks তালিকা পেজ](/img/admin/webhooks-list.png)

নতুন webhook তৈরি করার সময় আপনাকে **Name, URL,** এবং **Event**-এর মতো তথ্য দিতে হবে। আপনি আপনার webhook-এর জন্য যেকোনো নাম ব্যবহার করতে পারেন। সবচেয়ে গুরুত্বপূর্ণ ফিল্ড হলো URL এবং Event।

![Name, URL, এবং Event ফিল্ডসহ নতুন webhook ফর্ম](/img/admin/webhooks-list.png)

URL হলো সেই **endpoint বা গন্তব্য** যেখানে Ultimate Multisite **payload বা ডেটা** পাঠাবে। এটি হলো সেই অ্যাপ্লিকেশন যেটি ডেটা গ্রহণ করবে।

Zapier হলো সবচেয়ে জনপ্রিয় সমাধান যা ইউজাররা থার্ড পার্টি অ্যাপ্লিকেশনের সাথে ইন্টিগ্রেশন সহজ করতে ব্যবহার করেন। Zapier-এর মতো প্ল্যাটফর্ম ছাড়া, আপনাকে ম্যানুয়ালি একটি কাস্টম ফাংশন তৈরি করতে হবে যেটি ডেটা ধরবে এবং প্রসেস করবে। **Zapier-এর সাথে Ultimate Multisite webhook কীভাবে ব্যবহার করবেন** সেই আর্টিকেলটি দেখুন।

এই আর্টিকেলে আমরা webhook কীভাবে কাজ করে তার মৌলিক ধারণা এবং Ultimate Multisite-এ উপলব্ধ ইভেন্টগুলো দেখব। আমরা [requestbin.com](https://requestbin.com/) নামের একটি থার্ড পার্টি সাইট ব্যবহার করব। এই সাইটটি আমাদের কোনো কোডিং ছাড়াই একটি endpoint তৈরি করতে এবং payload ধরতে সাহায্য করবে। _**দ্রষ্টব্য: এটি শুধুমাত্র দেখাবে যে ডেটা গৃহীত হয়েছে।**_ Payload-এর উপর কোনো প্রসেসিং বা কোনো ধরনের অ্যাকশন করা হবে না।

[requestbin.com](https://requestbin.com/)-এ যান এবং Create Request Bin-এ ক্লিক করুন।

![RequestBin ওয়েবসাইটে Create Request Bin বাটন](/img/admin/webhooks-list.png)

সেই বাটনে ক্লিক করার পর, আপনার ইতিমধ্যে অ্যাকাউন্ট থাকলে লগ ইন করতে বা সাইন আপ করতে বলা হবে। আপনার অ্যাকাউন্ট থাকলে এটি সরাসরি তাদের dashboard-এ নিয়ে যাবে। তাদের dashboard-এ আপনি সাথে সাথেই সেই endpoint বা URL দেখতে পাবেন যেটি আপনার Ultimate Multisite webhook তৈরিতে ব্যবহার করতে পারবেন।

![Endpoint URL দেখানো RequestBin dashboard](/img/admin/webhooks-list.png)

URL কপি করুন এবং Ultimate Multisite-এ ফিরে যান। URL ফিল্ডে endpoint বসান এবং dropdown থেকে একটি event নির্বাচন করুন। এই উদাহরণে আমরা **Payment Received** সিলেক্ট করব।

এই event টি ট্রিগার হয় যখনই কোনো ইউজার পেমেন্ট করে। সকল উপলব্ধ event, তাদের বিবরণ এবং payload পেজের নিচে তালিকাভুক্ত আছে। Webhook সেভ করতে **Add New Webhook** বাটনে ক্লিক করুন।

![Payment Received event সহ কনফিগার করা Webhook](/img/admin/webhooks-list.png)

এখন আমরা তৈরি করা webhook কাজ করছে কিনা দেখতে endpoint-এ একটি টেস্ট ইভেন্ট পাঠাতে পারি। আমরা তৈরি করা webhook-এর নিচে **Send Test Event**-এ ক্লিক করে এটি করতে পারি।

![Webhook-এর নিচে Send Test Event অপশন](/img/admin/webhooks-list.png)

এটি একটি কনফার্মেশন উইন্ডো দেখায় যা বলে যে টেস্ট সফল হয়েছে।

![Webhook টেস্ট ইভেন্ট সফল হওয়ার কনফার্মেশন](/img/admin/webhooks-list.png)

এখন যদি আমরা _Requestbin_ সাইটে ফিরে যাই, দেখব যে কিছু টেস্ট ডেটা সম্বলিত payload গৃহীত হয়েছে।

![RequestBin-এ প্রাপ্ত webhook payload ডেটা দেখাচ্ছে](/img/admin/webhooks-list.png)

এটাই হলো webhook এবং endpoint কীভাবে কাজ করে তার মৌলিক নীতি। আপনি যদি কাস্টম endpoint তৈরি করতে চান, তাহলে Ultimate Multisite থেকে প্রাপ্ত ডেটা প্রসেস করার জন্য একটি কাস্টম ফাংশন তৈরি করতে হবে।
