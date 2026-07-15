---
title: ওয়েবহুকস
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) সম্পর্কে প্রথম ধারণা

_**মনোযোগ দিন: এই feature বা নিবন্ধটি advanced ব্যবহারকারীদের জন্য।**_

**webhook** হলো এমন একটি উপায়, যার মাধ্যমে Ultimate Multisite-এর মতো কোনো app বা software অন্য application-গুলোকে real-time তথ্য দিতে পারে। webhook ঘটনা ঘটার সঙ্গে সঙ্গে অন্য application-এ data বা payload পাঠায়, অর্থাৎ আপনি **তাৎক্ষণিকভাবে data পান।**

প্রতিবার কোনো event trigger হলে Ultimate Multisite থেকে অন্য কোনো CRM বা system-এ নির্দিষ্ট data integrate বা পাঠাতে হলে এটি সহায়ক। উদাহরণস্বরূপ, নতুন user account তৈরি হলেই আপনাকে ব্যবহারকারীর নাম ও email address একটি mailing list-এ পাঠাতে হবে।

## webhook কীভাবে তৈরি করবেন {#how-to-create-a-webhook}

webhook তৈরি করতে আপনার network admin dashboard-এ যান। **Ultimate Multisite > Webhooks > Add New Webhook**-এ ক্লিক করুন।

![Add New Webhook button সহ খালি Webhooks list পৃষ্ঠা](/img/admin/webhooks-list-empty.png)

এরপর আপনি webhook configuration সম্পাদনা করতে পারেন:

![Name, Event এবং URL field সহ Add New Webhook form](/img/admin/webhook-add-modal.png)

নতুন webhook তৈরি করার সময় আপনাকে **Name, URL,** এবং **Event**-এর মতো তথ্য দিতে বলা হবে। আপনার webhook-এর জন্য আপনি যেকোনো নাম ব্যবহার করতে পারেন। সবচেয়ে গুরুত্বপূর্ণ field হলো URL এবং Event।

![URL field এবং payload preview দেখানো webhook edit interface](/img/admin/webhook-url-field.png)

URL হলো সেই **endpoint বা গন্তব্য**, যেখানে Ultimate Multisite **payload বা data** পাঠাবে। এই application-টিই data গ্রহণ করবে।

3rd party application-এর সঙ্গে integration সহজ করতে ব্যবহারকারীরা সাধারণত Zapier ব্যবহার করেন। Zapier-এর মতো platform ছাড়া, data ধরতে এবং process করতে আপনাকে manual-ভাবে একটি custom function তৈরি করতে হবে। **Zapier-এর সঙ্গে Ultimate Multisite webhook কীভাবে ব্যবহার করবেন**—এই নিবন্ধটি দেখুন।

এই নিবন্ধে আমরা webhook কীভাবে কাজ করে তার basic concept এবং Ultimate Multisite-এ থাকা events দেখব। আমরা [requestbin.com](https://requestbin.com/) নামে একটি 3rd party site ব্যবহার করব। এই site আমাদের কোনো coding ছাড়াই একটি endpoint তৈরি করতে এবং payload ধরতে দেবে। _**Disclaimer: এটি শুধু আমাদের দেখাবে যে data গ্রহণ করা হয়েছে।**_ payload-এর ওপর কোনো processing বা কোনো ধরনের action করা হবে না।

[requestbin.com](https://requestbin.com/)-এ যান এবং Create Request Bin-এ ক্লিক করুন।

ওই button-এ ক্লিক করার পর, আপনার account থাকলে log in করতে বা sign up করতে বলা হবে। আপনার account থাকলে এটি আপনাকে সরাসরি তাদের dashboard-এ নিয়ে যাবে। তাদের dashboard-এ আপনি সঙ্গে সঙ্গেই সেই endpoint বা URL দেখতে পাবেন, যা আপনার Ultimate Multisite webhook তৈরি করতে ব্যবহার করতে পারেন।

URL copy করে Ultimate Multisite-এ ফিরে যান। URL field-এ endpoint বসান এবং dropdown থেকে একটি event নির্বাচন করুন। এই উদাহরণে আমরা **Payment Received** নির্বাচন করব।

কোনো user payment করলে এই event trigger হয়। উপলব্ধ সব event, তাদের description এবং payloads পৃষ্ঠার নিচে তালিকাভুক্ত আছে। webhook সংরক্ষণ করতে **Add New Webhook** button-এ ক্লিক করুন।

![Payment Received নির্বাচিত webhook event dropdown](/img/admin/webhook-event-picker.png)

এখন আমরা তৈরি করা webhook কাজ করছে কি না দেখতে endpoint-এ একটি test event পাঠাতে পারি। তৈরি করা webhook-এর নিচে **Send Test Event**-এ ক্লিক করে আমরা এটি করতে পারি।

![একটি configured webhook এবং Send Test action দেখানো Webhooks list](/img/admin/webhooks-list-populated.png)

এটি একটি confirmation window দেখায়, যেখানে বলা হয় test সফল হয়েছে।

![test payload পাঠানোর পর webhook test event result](/img/admin/webhook-test-result.png)

এখন আমরা _Requestbin_ site-এ ফিরে গেলে দেখব যে কিছু test data-সহ payload গ্রহণ করা হয়েছে।

webhook এবং endpoint কীভাবে কাজ করে—এটাই তার basic principle। আপনি যদি custom endpoint তৈরি করতে চান, তাহলে Ultimate Multisite থেকে পাওয়া data process করার জন্য আপনাকে একটি custom function তৈরি করতে হবে।
