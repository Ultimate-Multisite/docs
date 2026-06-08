---
title: API Endpoint ৰেকজিষ্ট্ৰেট কৰা
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API endpoint

এই টিউটোরিয়ালত, আপুনি Ultimate Multisite /register API endpoint ব্যৱহাৰ কৰি আপোনাৰ নেটৱৰ্কৰ বাবে এটা নতুন Client-ক সম্পূৰ্ণ Onboarding প্ৰক্ৰিয়া কেনেকৈ সৃষ্টি কৰিব আৰু সেইটো Zapier-ৰ জৰিয়তে কেনেকৈ কৰিব, সেই বিষয়ে শিকিব।

এই endpoint-টোৱে POST method ব্যৱহাৰ কৰে আৰু ই তলৰ URL-টোৰ দ্বাৰা কল কৰা হয়: **https://yoursite.com/wp-json/wu/v2/register**। এই কলটোৰ জৰিয়তে আপোনাৰ নেটৱৰ্কৰ ভিতৰত ৪ টা প্ৰক্ৰিয়া সম্পন্ন হ'ব:

*   এটা নতুন WordPress user বা user ID মৰমেৰে ইয়াৰ চিনাক্তকৰণ কৰা হ'ব।

*   Ultimate Multisite-ত এটা নতুন Customer বা customer ID মৰমেৰে ইয়াৰ চিনাক্তকৰণ কৰা হ'ব।

*   WordPress network-ত এটা নতুন site সৃষ্টি হ'ব।

*   শেহতীয়াভাৱে, Ultimate Multisite-ত এটা নতুন Membership সৃষ্টি হ'ব।

এই প্ৰক্ৰিয়াটোৰ বাবে, আপোনাৰ API credentials প্ৰয়োজন হ'ব। ইয়া পাবলৈ, আপুনি আপোনাৰ network admin panel-লৈ যোৱা, **Ultimate Multisite > Settings** > **API & Webhooks** লৈ যোৱা, আৰু API Settings অংশটো বিচাৰিব।

![API Settings section in Ultimate Multisite](/img/config/settings-api.png)

API settings পৃষ্ঠাৰ এটা সম্পূৰ্ণ দৃশ্য তলত দিয়া হ'ল:

![API settings full page](/img/config/settings-api-full.png)

**Enable API** সিলেক্ট কৰক আৰু আপোনাৰ API credentials লওক।

এতিয়া, আহক আমি endpoint-টো জনাওঁ আৰু তাৰ পিছত Zapier-ত এটা registration action সৃষ্টি কৰোঁ।

## Endpoint body parameters

আহক আমি endpoint-লৈ পঠিয়াবলগীয়া ন্যূনতম তথ্যৰ এটা একনোট দিওঁ। এই article-টোৰ শেষত, আপুনি সম্পূৰ্ণ কলটো বিচাৰি পাব।

### Customer

এইটো সেই তথ্য যিটো User আৰু Ultimate Multisite Customer সৃষ্টি কৰাৰ প্ৰক্ৰিয়াৰ বাবে প্ৰয়োজনীয়:

"customer_id" : integer

আপুনি আপোনাৰ network-ত সৃষ্টি কৰা customer ID পঠিয়াব পাৰে। যদি ইয়াক পঠিয়াব নহয়, তেন্তে তলত দিয়া তথ্য ব্যৱহাৰ কৰি এটা নতুন customer আৰু এটা নতুন WordPress user সৃষ্টি কৰা হ'ব। user ID-টোও customer ID-ৰ দৰেই পঠিয়াব পাৰি।

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **Membership**

এই object-ৰ ভিতৰত আমি কেৱল Membership Status টোৱেই প্ৰয়োজন।

"membership" { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" },

### **Products**

Products হৈছে আপোনাৰ networkৰ পৰা ১ বা অধিক product ID লৈ এটা array হিচাপে দিয়া হয়। সজাগ হৈ থাকক, এই endpoint-টোৱে products সৃষ্টি নকৰে। product সৃষ্টি কৰা endpoint ভালদৰে বুজিবলৈ Ultimate Multisite-ৰ documentation চাওক।

**"products" : [1,2],**

### Payment

Membership-ৰ দৰেই, আমি কেৱল status টোৱেই প্ৰয়োজন।

**"payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" },**

### Site

আৰু body-টো বন্ধ কৰিবলৈ, আমি site-ৰ URL আৰু Title প্ৰয়োজন, দুয়োটা Site object-ৰ ভিতৰত।

**"site" : { "site_url" : "string", "site_title" : "string" }**

register endpoint-টোৰ ফলস্বৰূপে নতুনকৈ সৃষ্টি কৰা membership তথ্য সম্বলিত এটা array পোৱা যাব।

## Creating an action in Zapier

এই নতুন আৰু অধিক শক্তিশালী account creation endpoint-ৰ আৱিষ্কাৰৰ লগে লগে, আপুনি Zapier-ত এটা নতুন action-ও পাব।

Do you know how to use and enjoy everything that the new version of Zapier offers? Learn more here. (link?)

### Creating an action

Zapier-ৰ লগত registration endpoint ব্যৱহাৰ কৰাৰ পদ্ধতি ভালদৰে দেখুৱাবলৈ, আহক আমি Google Forms লগত এটা integration সৃষ্টি কৰোঁ। যেতিয়াই এই form-টো পূৰ কৰা হয় আৰু তথ্যটো form-ৰ answer sheet-ত সেভ কৰা হয়, তেতিয়াই Ultimate Multisite network-ত এটা নতুন membership সৃষ্টি হ'ব।

Google Forms-ত, network-ত এটা নতুন membership সৃষ্টি কৰিবলৈ প্ৰয়োজনীয় ন্যূনতম field লৈ এটা form বনাওক।

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

এতিয়া Zapier-ত, এটা নতুন Zap বনাওক আৰু Google Forms-ৰ দ্বাৰা সৃষ্টি কৰা form-টোক সেই spreadsheet-ৰ লগত সংযোগ কৰক য'ত data সেভ কৰা হয়।

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

সম্পূৰ্ণ! Google Forms form-টো Zapier লগত সংযোগ কৰা হ'ল আৰু network লগত integrate কৰিবলৈ সাজু। এতিয়া আহক আমি Action-লৈ যাওঁ যিটো Trigger-এ সৃষ্টি কৰা হ'ব যেতিয়া Google Forms-এ পূৰ কৰা হ'ব।

নতুন Ultimate Multisite app-টো বিচাৰি লওক আৰু ইয়াক সিলেক্ট কৰক। এই ধৰণৰ Zap-ৰ বাবে, Register option-টো বাছি লওক।

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

এই প্ৰথম পদক্ষেপৰ পিছত, সেই account-টো বাছি লওক যিটো এই Zap লগত সংযোগ হ'ব।<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

এইটো সমগ্ৰ প্ৰক্ৰিয়াৰ আটাইতকৈ সংবেদনশীল অংশ। আমি Google Forms-ৰ পৰা অহা field-সমূহক এই article-ৰ পূৰ্বৰ অংশত দেখুওৱা register endpoint-ৰ বাবে প্ৰয়োজনীয় ন্যূনতম field লগত মিলিব লাগিব।

এই উদাহৰণত, আমি কেৱল username, email, password, name আৰু website-ৰ URL কনফিগাৰ কৰিবলগীয়া। বাকীবোৰ আগতে নিৰ্ধাৰিত (pre-determined) থোৱা হয় যাতে এই Google Forms-ত সৃষ্টি হোৱা সকলো membership একেটা product আৰু status pattern অনুসৰণ কৰে।

<!-- Screenshot unavailable: Zapier field mapping between Google Forms and Ultimate Multisite register endpoint -->

তথ্য সেট কৰাৰ লগে লগে, চূড়ান্ত পৰীক্ষাটো কৰক। শেষৰ screen-ত আপুনি সেই সকলো field দেখা পাব যিবোৰ endpoint-লৈ পঠিয়াব লাগিব, তেওঁলোকৰ নিজ নিজ তথ্য আৰু যিবোৰ field খালি পঠিয়াব লাগিব।<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

আপোনাৰ নতুন Zap-টো Test কৰক আৰু ই সফলভাৱে সম্পন্ন হোৱা উচিত। যদি কোনো error হয়, তেন্তে সকলো field পৰীক্ষা কৰক আৰু যদি সিহঁত সঠিকভাৱে পঠিয়াব লগা হয়। কাৰণ ইয়াত যথেষ্ট তথ্য আছে, কিছুমান কথা নজৰীয়া হৈ যাব পাৰে।

### Complete endpoint parameters

এইটো সম্পূৰ্ণ কল আৰু পঠিয়াব পৰা field-সমূহৰ সকলো সম্ভাৱনা ইয়াত দিয়া হ'ল।

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // one of "pending", "active", "trialing", "expired", "on-hold", "canceled" "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // one of "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
