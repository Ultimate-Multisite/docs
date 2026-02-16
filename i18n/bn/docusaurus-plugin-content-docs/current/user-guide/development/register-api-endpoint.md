---
title: API এন্ডপয়েন্ট নিবন্ধন করুন
sidebar_position: 6
_i18n_hash: 33318472a834d15f5533362cddfeca20
---
# Ultimate Multisite Register API এন্ডপয়েন্ট

এই টিউটোরিয়ালে আপনি শিখবেন কীভাবে Ultimate Multisite /register API এন্ডপয়েন্ট ব্যবহার করে আপনার নেটওয়ার্কে নতুন গ্রাহকদের জন্য সম্পূর্ণ অনবোর্ডিং প্রক্রিয়া তৈরি করবেন এবং Zapier দিয়ে এটি কীভাবে করবেন।

এই এন্ডপয়েন্টটি POST মেথড ব্যবহার করে এবং এই URL-এ কল করতে হয়: _**https://yoursite.com/wp-json/wu/v2/register**_। এই কলে আপনার নেটওয়ার্কে ৪টি প্রক্রিয়া সম্পাদিত হবে:

  * একটি নতুন WordPress ব্যবহারকারী তৈরি হবে অথবা user ID-র মাধ্যমে বিদ্যমান ব্যবহারকারী শনাক্ত করা হবে।

  * Ultimate Multisite-এ একটি নতুন Customer তৈরি হবে অথবা customer ID-র মাধ্যমে বিদ্যমান গ্রাহক শনাক্ত করা হবে।

  * WordPress নেটওয়ার্কে একটি নতুন সাইট তৈরি হবে।

  * সবশেষে, Ultimate Multisite-এ একটি নতুন Membership তৈরি হবে।

এই প্রক্রিয়ার জন্য আপনার API credentials প্রয়োজন হবে। এগুলো পেতে আপনার নেটওয়ার্ক অ্যাডমিন প্যানেলে যান, **Ultimate Multisite > Settings** > **API & Webhooks**-এ নেভিগেট করুন এবং API Settings সেকশনটি খুঁজুন।

![Ultimate Multisite-এ API Settings সেকশন](/img/config/settings-api.png)  
**Enable API** সিলেক্ট করুন এবং আপনার API credentials সংগ্রহ করুন।

এখন চলুন এন্ডপয়েন্টটি বিস্তারিত দেখি এবং তারপর Zapier-এ একটি registration action তৈরি করি।

## এন্ডপয়েন্ট body parameters

চলুন দেখে নিই এন্ডপয়েন্টে পাঠানোর জন্য ন্যূনতম কী কী তথ্য দরকার। এই আর্টিকেলের শেষে সম্পূর্ণ কলটি পাবেন।

### Customer

User এবং Ultimate Multisite Customer তৈরির প্রক্রিয়ার জন্য এই তথ্যগুলো প্রয়োজন:

"customer_id" : integer

আপনার নেটওয়ার্কে তৈরি করা customer ID পাঠানো সম্ভব। যদি না পাঠান, তাহলে নিচের তথ্যগুলো ব্যবহার করে একটি নতুন customer এবং নতুন WordPress user তৈরি হবে। customer ID-র মতোই user ID-ও পাঠানো যায়।

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

এই অবজেক্টের মধ্যে শুধু Membership Status-ই দরকার।

"membership" { "status" : "string", // এর মধ্যে একটি: "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products-এ আপনার নেটওয়ার্কের ১ বা একাধিক product ID সহ একটি array দিতে হবে। মনে রাখবেন, এই এন্ডপয়েন্ট product তৈরি করে না। Product তৈরির এন্ডপয়েন্ট ভালোভাবে বুঝতে Ultimate Multisite-এর ডকুমেন্টেশন দেখুন।

**"products" : [1,2],**

### Payment

Membership-এর মতোই, এখানেও শুধু status দরকার।

**"payment" { "status" : "string", // এর মধ্যে একটি: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

এবং body শেষ করতে Site অবজেক্টের মধ্যে সাইটের URL এবং Title দরকার।

**"site" : { "site_url" : "string", "site_title" : "string" }**

register এন্ডপয়েন্ট থেকে নতুন তৈরি হওয়া membership-এর তথ্য সহ একটি array রিটার্ন হবে।

## Zapier-এ একটি action তৈরি করা

এই নতুন এবং আরও শক্তিশালী অ্যাকাউন্ট তৈরির এন্ডপয়েন্ট চালু হওয়ায় আপনি Zapier-এ একটি নতুন action-ও ব্যবহার করতে পারবেন।

Zapier-এর নতুন ভার্সনে কী কী সুবিধা আছে এবং কীভাবে ব্যবহার করবেন জানেন? এখানে আরও জানুন। (link?)

### একটি action তৈরি করা

Zapier-এর সাথে registration এন্ডপয়েন্ট কীভাবে ব্যবহার করবেন তা ভালোভাবে বোঝাতে, চলুন Google Forms-এর সাথে একটি integration তৈরি করি। প্রতিবার এই ফর্ম পূরণ করে ফর্মের উত্তর শিটে তথ্য সেভ হলে, Ultimate Multisite নেটওয়ার্কে একটি নতুন membership তৈরি হবে।

Google Forms-এ, নেটওয়ার্কে নতুন membership তৈরির জন্য প্রয়োজনীয় ন্যূনতম ফিল্ডগুলো দিয়ে একটি ফর্ম তৈরি করুন।

<!-- Screenshot unavailable: নতুন membership তৈরির ফিল্ডসহ Google Forms ফর্ম -->

এখন Zapier-এ, একটি নতুন Zap তৈরি করুন এবং যে spreadsheet-এ ডেটা সেভ হচ্ছে তার মাধ্যমে Google-এ তৈরি করা ফর্মটি কানেক্ট করুন।

<!-- Screenshot unavailable: Google Forms spreadsheet-এর সাথে কানেক্ট করা Zapier trigger কনফিগারেশন -->

হয়ে গেল! Google Forms ফর্মটি Zapier-এর সাথে কানেক্ট হয়েছে এবং নেটওয়ার্কের সাথে integrate করার জন্য প্রস্তুত। এখন চলুন সেই Action-এ যাই যেটা প্রতিবার ফর্ম পূরণ হলে Google Forms যে Trigger করে তার ফলাফল হিসেবে কাজ করবে।

নতুন Ultimate Multisite app খুঁজুন এবং সিলেক্ট করুন। এই ধরনের Zap-এর জন্য Register অপশনটি বেছে নিন।

<!-- Screenshot unavailable: Register অপশনসহ Ultimate Multisite app দেখানো Zapier action সিলেকশন -->

এই প্রথম ধাপের পর, এই Zap-এর সাথে যে অ্যাকাউন্ট কানেক্ট হবে সেটি বেছে নিন।<!-- Screenshot unavailable: Ultimate Multisite-এর জন্য Zapier অ্যাকাউন্ট কানেকশন স্টেপ -->

এটি পুরো প্রক্রিয়ার সবচেয়ে গুরুত্বপূর্ণ অংশ। আমাদের Google Forms থেকে আসা ফিল্ডগুলোকে register এন্ডপয়েন্টের জন্য প্রয়োজনীয় ন্যূনতম ফিল্ডগুলোর সাথে মিলিয়ে দিতে হবে, যেমনটা এই আর্টিকেলের আগের সেকশনে দেখানো হয়েছে।

এই উদাহরণে, আমাদের শুধু username, email, password, name এবং ওয়েবসাইটের URL কনফিগার করতে হবে। বাকিগুলো আগে থেকেই নির্ধারিত রাখা হয়েছে যাতে এই Google Forms থেকে তৈরি সব membership একই product এবং status প্যাটার্ন অনুসরণ করে।

<!-- Screenshot unavailable: Google Forms এবং Ultimate Multisite register এন্ডপয়েন্টের মধ্যে Zapier ফিল্ড ম্যাপিং -->

তথ্য সেট আপ করা হয়ে গেলে, চূড়ান্ত টেস্টে এগিয়ে যান। শেষ স্ক্রিনে আপনি এন্ডপয়েন্টে পাঠানো সব ফিল্ড, তাদের তথ্য এবং যে ফিল্ডগুলো খালি পাঠানো হবে সেগুলো দেখতে পাবেন।<!-- Screenshot unavailable: register এন্ডপয়েন্টে পাঠানো সব ফিল্ড দেখানো Zapier টেস্ট স্ক্রিন -->

আপনার নতুন Zap টেস্ট করুন এবং এটি সফলভাবে সম্পন্ন হওয়া উচিত। কোনো error হলে, সব ফিল্ড চেক করুন এবং দেখুন সেগুলো সঠিকভাবে পাঠানো হচ্ছে কিনা। অনেক তথ্য থাকায় কিছু জিনিস হয়তো চোখ এড়িয়ে যেতে পারে।

### সম্পূর্ণ এন্ডপয়েন্ট parameters

এখানে সম্পূর্ণ কল এবং পাঠানো যায় এমন সব ফিল্ডের সম্ভাবনা দেওয়া হলো।

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // এর মধ্যে একটি: "pending", "active", "trialing", "expired", "on-hold", "cancelled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // এর মধ্যে একটি: "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
