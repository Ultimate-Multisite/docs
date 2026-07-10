---
title: অ্যাডমিন প্যানেল ঘুরে দেখা
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Admin Panel ঘুরে দেখা {#touring-the-admin-panel}

Ultimate Multisite যতটা সম্ভব সহজ ও স্বয়ংব্যাখ্যামূলক হতে চায়, তবে এত শক্তিশালী একটি টুলের ক্ষেত্রে নির্দেশিত ভ্রমণ সহায়ক হতে পারে। আপনাকে পরিচিত করতে চলুন admin পাতাগুলো দেখে নেওয়া যাক।

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** রাজস্ব, সাইট কার্যকলাপ, membership বৃদ্ধি, দর্শক সংখ্যা এবং ভৌগোলিক ডেটাসহ মৌলিক রিপোর্ট ও অ্যানালিটিক্স দেখায়।

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

এখানে Dashboard-এর পূর্ণ দৃশ্য দেওয়া হলো:

![Ultimate Multisite Dashboard পূর্ণ পাতা](/img/admin/um-dashboard-full.png)

এবং Dashboard-এর নিচের অংশ:

![Ultimate Multisite Dashboard নিচের অংশ](/img/admin/um-dashboard-bottom.png)

এখানে network Dashboard-এরও একটি পূর্ণ দৃশ্য দেওয়া হলো:

![Network Dashboard পূর্ণ পাতা](/img/admin/network-dashboard-full-page.png)

## Checkout Forms {#checkout-forms}

**Checkout Forms** আপনাকে custom registration পাতা তৈরি করার নমনীয়তা দেয়। আপনি ক্ষেত্র কাস্টমাইজ করতে, custom classes ও scripts যোগ করতে এবং দর্শকের দেশ বা অবস্থানের ভিত্তিতে প্রবেশাধিকার সীমিত করতে পারেন।

![Checkout Forms তালিকা](/img/admin/checkout-forms-list.png)

## Products {#products}

**Products** অংশে আপনি আপনার network-এর জন্য বিভিন্ন plan, package এবং service তৈরি করেন। product স্তরে দাম, billing frequency, এবং limits & quotas নির্ধারণ করুন।

![Products তালিকা](/img/admin/products-list.png)

## Memberships {#memberships}

**Memberships** পাতা আপনার network-এর সব subscription দেখায়। plan, product, billing amount ও frequency, payment history এবং timestamp সহ subscription-এর বিবরণ পর্যালোচনা ও সম্পাদনা করুন।

![Memberships তালিকা](/img/admin/memberships-list.png)

## Payments {#payments}

**Payments** পাতা আপনার পুরো network জুড়ে payment history-এর দ্রুত দৃশ্য দেয়, যেখানে নির্দিষ্ট product ও amount সহ বিস্তারিত transaction তথ্য থাকে।

![Payments তালিকা](/img/admin/payments-list.png)

## Customers {#customers}

**Customers** পাতা আপনার network-এ নিবন্ধিত সব member দেখায়। এতে নাম, email address, last login, এবং তাদের subsite-এ login করার জন্য একটি "switch to" link সহ মৌলিক user তথ্য থাকে।

![Customers তালিকা](/img/admin/customers-list.png)

## Sites {#sites}

**Sites** পাতা আপনার network-এর সব subsite তালিকাভুক্ত করে, যার মধ্যে site template এবং customer-owned site থাকে। mapped domain, limits & quotas, plugins ও themes, এবং site thumbnail সহজে পরিচালনা করুন।

![Sites তালিকা](/img/admin/sites-list.png)

## Domains {#domains}

**Domains** পাতা subsite-এ mapped custom domain-এর জন্য নির্দিষ্ট। super admin হিসেবে আপনি custom domain name হাতে যোগ বা map করতে পারেন এবং DNS records ও logs দেখতে পারেন।

![Domains তালিকা](/img/admin/domains-list.png)

## Discount Codes {#discount-codes}

**Discount Codes** আপনাকে end-userদের discount দেওয়ার জন্য coupon code তৈরি করতে দেয়। discount value নির্দিষ্ট করুন এবং নির্দিষ্ট user বা group লক্ষ্য করুন।

![Discount Codes তালিকা](/img/admin/discount-codes-list.png)

## Broadcasts {#broadcasts}

**Broadcasts** হলো আপনার subsite userদের কাছে announcement প্রকাশ বা private message পাঠানোর একটি টুল। তারা যে plan বা product-এ subscribed, তার ভিত্তিতে নির্দিষ্ট user group লক্ষ্য করুন।

![Broadcasts তালিকা](/img/admin/broadcasts-list.png)

## Settings {#settings}

**Settings** পাতা হলো যেখানে আপনি Ultimate Multisite কনফিগার করেন — registration settings, payments, API এবং webhooks, domain mapping, এবং অন্যান্য integrations।

AI connector settings বর্তমানে সমর্থিত OAuth provider pool তালিকাভুক্ত করে: Anthropic Max, OpenAI ChatGPT/Codex, এবং Google AI Pro। প্রতিটি provider card super adminদের account connect করতে, সংরক্ষিত account refresh করতে, email দিয়ে account remove করতে, এবং sandboxed environment browser redirect block করলে manual OAuth fallback ব্যবহার করতে দেয়। Cursor Pro setup options admin panel থেকে সরিয়ে দেওয়া হয়েছে।

ChatGPT/Codex account connector-backed tool use সমর্থন করে যেখানে operation tools অনুমোদন করে, তাই connector-supported operation-এর ওপর নির্ভর করা admin workflow OpenAI account connected হওয়ার পর Codex tool behavior ব্যবহার করতে পারে।

![Settings পাতা](/img/admin/settings-general.png)

এখানে general settings পাতার পূর্ণ দৃশ্য দেওয়া হলো:

![Settings general পূর্ণ পাতা](/img/admin/settings-general-full.png)

এবং emails settings পাতা:

![Settings emails পূর্ণ পাতা](/img/admin/settings-emails-full.png)

এবং payments settings পাতা:

![Settings payments পূর্ণ পাতা](/img/admin/settings-payments-full.png)

এবং payments settings-এর নিচের অংশ:

![Settings payments নিচের অংশ](/img/admin/settings-payments-bottom.png)

এবং sites settings পাতা:

![Settings sites পূর্ণ পাতা](/img/admin/settings-sites-full.png)

## Events {#events}

**Events** পাতা আপনার network-এর সব event ও log-এর রেকর্ড রাখে। এটি plan পরিবর্তন, signup এবং অন্যান্য movement-এর মতো activity track করে — আপনার multisite পর্যবেক্ষণের জন্য উপযোগী।

![Events তালিকা](/img/admin/events-list.png)

## Webhooks {#webhooks}

**Webhooks** আপনাকে অন্য application-এ data deliver করতে দেয়। Ultimate Multisite থেকে Zapier-এর মতো platform-এ data পাঠানোর জন্য উপযোগী।

![Webhooks তালিকা](/img/admin/webhooks-list.png)
