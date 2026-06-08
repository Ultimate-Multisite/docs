---
title: Zapier Integration
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite लाई Zapier লগত ইন্টিগ্রেট কৰা

এটা article-ত, আমি [Webhooks](webhooks.md) ত আলোচনা কৰিছিলো আৰু কেনেকৈ ইয়াৰ ব্যৱহাৰ কৰি ত্ৰিটি (3rd party) application সমূহৰ লগত ইন্টিগ্রেট কৰিব পাৰি।

Webhooks ব্যৱহাৰ কৰাটো অলপ জটিল, কাৰণ ইয়াৰ বাবে coding-ৰ গভীৰ জ্ঞান আৰু data (payloads) কেনেকৈ আহিছে সেয়া বুজি পোৱাৰ জ্ঞান লাগে। কিন্তু **Zapier** ব্যৱহাৰ কৰিলে আপুনি এই সমস্যাৰ পৰা আঁতৰি যাব পাৰে।

Zapier-ৰ ৫০০০ তকৈও অধিক app লগত ইন্টিগ্ৰেচন আছে, যাৰ ফলত বিভিন্ন application ৰ মাজত যোগাযোগ কৰাটো সহজ হৈ পৰে।

আপুনি **Triggers** সৃষ্টি কৰিব পাৰে, যিবোৰ আপোনাৰ network ত কোনো ঘটনা (event) ঘটিলে active হয় (উদাহৰণস্বৰূপে, এটা account সৃষ্টি হ'লে account_create event ট্ৰিগাৰ হ'ব)। অথবা, বাহ্যিক ঘটনাৰ ওপৰত প্ৰতিক্ৰিয়া কৰিবলৈ আপুনি **Actions** সৃষ্টি কৰিব পাৰে (উদাহৰণস্বৰূপে, আপোনাৰ Ultimate Multisite network ত এটা নতুন account membership সৃষ্টি কৰা)।

এই সকলো সম্ভৱ হয় কাৰণ **Ultimate Multisite Zapier-ৰ triggers** আৰু actions সমূহ [REST API](https://developer.ultimatemultisite.com/api/docs/) দ্বাৰা চালিত।

## কেনেকৈ আৰম্ভ কৰিব

প্ৰথমে, Zapier app list ত Ultimate Multisite বিচাৰি লওক। বিকল্পভাৱে, আপুনি [এই link](https://zapier.com/apps/wp-ultimo/integrations) ক্লিক কৰিও যাব পাৰে।

আপোনাৰ dashboard मा যাওক আৰু নতুন Zap এটা সেট আপ কৰিবলৈ বাঁহৰ পাক্ষিকত (left sidebar) থকা **+ Create Zap** বাটনটো ক্লিক কৰক।

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

আপোনাক Zap creation page मा redirect কৰা হ'ব।

Search box ত "wp ultimo" টাইপ কৰক। **Beta** version অপচনটো বাছি ল'বলৈ ক্লিক কৰক।

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

আপোনাৰ app টি বাছি লোৱাৰ পিছত, উপলব্ধ event টি বাছি লওক: **New Ultimate Multisite Event**।

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

এতিয়া আমি Zapier लाई **আপোনাৰ network** লগত সংযোগ কৰিবলৈ অনুমতি দিব লাগিব। **Sign in** मा ক্লিক কৰিলে **API credentials** লাগে বুলি এটা নতুন window খুলিব।

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

আপোনাৰ network admin panel मा যাওক আৰু **Ultimate Multisite > Settings** > **API & Webhooks** লৈ যোৱা আৰু API Settings অংশটো বিচাৰক।

এই সংযোগটো কাম কৰিবলৈ **Enable API** অপচনটো বাছি লওক।

![API Settings with Enable API option in Ultimate Multisite](/img/admin/webhooks-list.png)

API Key আৰু API Secret field সমূহৰ ওপৰত থকা **Copy to Clipboard** আইকনটো ব্যৱহাৰ কৰি সেই মানবোৰ কপি কৰি ইন্টিগ্ৰেচন screen ত পেষ্ট কৰক।

URL field ত আপোনাৰ network-ৰ full URL, protocol (HTTP বা HTTPS) সহ, দিয়ক।

![Zapier integration screen with API Key, Secret, and URL fields](/img/admin/webhooks-list.png)

পৰৱৰ্তী ধাপলৈ আগবাঢ়িবলৈ **Yes, Continue** বাটনটো ক্লিক কৰক। যদি সকলো ঠিক থাকে, তেন্তে আপোনাৰ নতুন সংযোগ কৰা account টিৰেখা হ'ব! নতুন trigger এটা সৃষ্টি কৰিবলৈ **Continue** ক্লিক কৰক।

## নতুন Trigger কেনেকৈ সৃষ্টি কৰিব

আপোনাৰ account টি সংযোগ হোৱাৰ লগে লগে আপুনি উপলব্ধ event সমূহ দেখা পাৰিব। এই tutorial-ৰ বাবে আমি **payment_received** event টি বাছি লওঁ।

![Selecting payment_received event in Zapier trigger](/img/admin/webhooks-list.png)

event টি বাছি লোৱা আৰু আপুনি **continue** ক্লিক কৰাৰ পিছত, এটা **test step** দেখা যাব।

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

এই পৰ্যায়ত, Zapier এটা test কৰিব যে আপোনাৰ Zap টো সেই event-ৰ বাবে **specific payload টি fetch কৰিব পাৰেনে**। ভৱিষ্যতৰ একে ধৰণৰ event সমূহৰ বাবে, এই একে গঠনৰ (structure) তথ্য প্ৰেৰণ কৰা হ'ব।

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

আমাৰ tutorial-ত test টো **completed successfully** হৈছিল আৰু payload example information ঘূৰি আহিছিল। এই example information টো action সৃষ্টি কৰাৰ সময়ত আমাক পথ প্ৰদৰ্শন কৰাত সহায়ক হ'ব। আপোনাৰ trigger টি এতিয়া সৃষ্টি হৈ গ'ল আৰু আন application সমূহৰ লগত সংযোগ কৰিবলৈ সাজু।

## Actions কেনেকৈ সৃষ্টি কৰিব

Actions সমূহ আন trigger সমূহৰ পৰা তথ্য ব্যৱহাৰ কৰি আপোনাৰ network ত নতুন entry সৃষ্টি কৰে।

**creating an action step** ত, আপুনি Ultimate Multisite **Beta** আৰু **Create Items on Ultimate Multisite** অপচনটো বাছি ল'ব।

![Creating an action with Create Items on Ultimate Multisite](/img/admin/webhooks-list.png)

পৰৱৰ্তী ধাপত, আপুনি হয় authentication সৃষ্টি কৰিব লাগিব, যিটো আমি **How to start** ত কৰিছিলো, নহ'লে এটা সৃষ্টি কৰা authentication বাছি ল'ব লাগিব। এই tutorial ত আমি পূৰ্বে সৃষ্টি কৰা authentication টি বাছি ল'ম।

![Selecting authentication for the Zapier action](/img/admin/webhooks-list.png)

### Action সেট আপ কৰা

এইটো **action-ৰ মূল ধাপ** আৰু ইয়াত কথাবোৰ অলপ বেলেগ। প্ৰথম তথ্যটো যিটো আপুনি বাছি ল'ব, সেয়া হৈছে **Item**। Item হৈছে আপোনাৰ network-ৰ **information model**, যেনে **Customers, Payments, Sites, Emails** আৰু আনবোৰ।

![Choosing Item type for the Zapier action](/img/admin/webhooks-list.png)

এটা item বাছি ল'লে, form টো **rearrange হৈ যাব যাতে বাছি লোৱা item-ৰ বাবে প্ৰয়োজনীয় আৰু ঐচ্ছিক field সমূহ** দেখুৱাই।

উদাহৰণস্বৰূপে, item **Customer** বাছি ল'লে, form field সমূহৰ দ্বাৰা network ত এটা নতুন Customer সৃষ্টি কৰিবলৈ যি সকলো তথ্য লাগিব, সেইবোৰ দেখুৱাই।

![Customer item fields in Zapier action setup](/img/admin/webhooks-list.png)

সকলো **required** বুলি চিহ্নিত কৰা field সমূহ ভৰাই ল'ব আৰু continue ক্লিক কৰাৰ পিছত, এটা শেষ screen ত আপোনাৰ ভৰাই থোৱা field আৰু যি field সমূহ ভৰাই থোৱা নহ'ল, সেইবোৰ দেখুৱাব।

![Zapier action test showing filled and unfilled fields](/img/admin/webhooks-list.png)

যিমান সোনকালে আপোনাৰ test টি সম্পন্ন হৈ সফল হয়, তাৰ লগে লগে আপোনাৰ action টি configure হৈ যায়। ইয়াৰ উপৰিও, আপোনাৰ action-ৰ test লগত item টি সৃষ্টি হৈছে নে নাই, সেয়াও আপোনাৰ network ত পৰীক্ষা কৰাটো গুৰুত্বপূৰ্ণ।
