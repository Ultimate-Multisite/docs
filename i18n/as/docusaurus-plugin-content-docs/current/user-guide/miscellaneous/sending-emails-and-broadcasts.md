---
title: ইমেইল আৰু ব্ৰডকাস্ট প্ৰেৰণ কৰা
sidebar_position: 11
_i18n_hash: e9ddc461d32299505e4a7a5af491cff6
---
# ইমেইল আৰু ব্ৰאָডকাস্ট প্ৰেৰণ (v2)

_**গুৰুত্বপূৰ্ণ টোকা: এই article টি Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

Ultimate Multisite-ত এটা বৈশিষ্ট্য আছে যাৰ জৰিয়তে আপুনি লক্ষ্য কৰা কোনো ব্যৱহাৰকাৰী (user) বা ব্যৱহাৰকাৰীৰ এটা গোটলৈ ইমেইল প্ৰেৰণ কৰিব পাৰে, লগতে তেওঁলোকৰ admin ড্যাশবৰ্ডত বিভিন্ন ঘোষণা (announcements) প্ৰচাৰ কৰিব পাৰে।

## ব্ৰאָডকাস্টৰ জৰিয়তে আপোনাৰ গ্ৰাহকসকলৰ ড্যাশবৰ্ডত admin বিজ্ঞপ্তি যোগ কৰক

Ultimate Multisiteৰ ব্ৰאָডকাস্ট বৈশিষ্ট্য ব্যৱহাৰ কৰি, আপুনি ব্যৱহাৰকাৰীৰ subsite admin ড্যাশবৰ্ডত **admin বিজ্ঞপ্তি** যোগ কৰিব পাৰে।

যদি আপুনি কোনো ব্যৱস্থাৰ মেইনটেনেঞ্চ (system maintenance) বা আপোনাৰ বিদ্যমান ব্যৱহাৰকাৰীসকলক নতুন সামগ্ৰী বা সেৱা আগবঢ়োৱাৰ দৰে কোনো ঘোষণা কৰিবলগীয়া হয়, তেন্তে এইটো অতি সহায়ক। আপোনাৰ ব্যৱহাৰকাৰীৰ ড্যাশবৰ্ডত admin বিজ্ঞপ্তিটো এনেদৰে দেখিব।

![Admin notice broadcast shown on a customer's subsite dashboard](/img/frontend/broadcast-customer-dashboard.png)

এটা admin বিজ্ঞপ্তি আৰম্ভ কৰিবলৈ, আপুনি নিজৰ network admin ড্যাশবৰ্ডলৈ যাওক আৰু **Ultimate Multisite** মেনুৰ তলত **Broadcasts** অপচনটো বিচাৰি উলিয়াব।

![Broadcasts list page in Ultimate Multisite admin](/img/admin/broadcasts-list.png)

আপুনি ইতিমধ্যে থকা ব্ৰאָডকাস্টসমূহো সম্পাদনা কৰিব পাৰে:

![Broadcast edit interface](/img/admin/broadcast-edit.png)

এই পৃষ্ঠাৰ পৰা, ওপৰত থকা **Add Broadcast** বাটনটো ক্লিক কৰক।

এনেতে Add broadcast modal window খুলিব, য'ত আপুনি কি ধৰণৰ ব্ৰאָডকাস্ট প্ৰেৰণ কৰিব বিচাৰিছে তাৰ বাবে বাছনি কৰিব পাৰিব।

আপুনি **Message** বাছক আৰু তাৰ পিছত **Next Step** বাটনটো ক্লিক কৰক।

![Add broadcast modal with the Message option selected](/img/admin/broadcast-add-message.png)

পৰৱৰ্তী উইন্ডোত আপোনাক হয় **Target customer** বা **Target product** লৈ সোধিব। মন কৰিব যে আপুনি এটাৰতকৈ বেছি ব্যৱহাৰকাৰী বা এটাৰতকৈ বেছি সামগ্ৰী বাছনি কৰিব পাৰে।

হয় ব্যৱহাৰকাৰীৰ একাউণ্ট বা সামগ্ৰী বিচাৰিবলৈ, আপুনি ফিল্ডটোৰ ভিতৰত কিবা এটা কিৱৰ্ড (keyword) টাইপ কৰিব লাগিব।

**Message type** ফিল্ডৰ তলত, আপুনি বিজ্ঞপ্তিৰ ৰং বাছনি কৰিব পাৰে। ই আপোনাৰ বাৰ্তাৰ গুৰুত্বক অধিক প্ৰকাশ কৰিব।

আপুনি তাৰ পিছত **Next Step** ক্লিক কৰিব পাৰে।

![Target customers, target product and message type fields for a Message broadcast](/img/admin/broadcast-message-targets.png)

পৰৱৰ্তী উইন্ডোটো হ'ল য'ত আপুনি বিষয় (subject) আৰু ব্যৱহাৰকাৰীসকলক প্ৰচাৰ কৰিব বিচাৰিছে সেই বিষয়বস্তু/message লিখি আপোনাৰ বাৰ্তা গঠন কৰিবলৈ আৰম্ভ কৰিব পাৰে।

![Broadcast message subject and content editor on the compose step](/img/admin/broadcast-edit.png)

আপোনাৰ বাৰ্তাটো সৃষ্টি কৰাৰ পিছত, আপুনি **Send** বাটনটো ক্লিক কৰিব পাৰে।

আৰু ইমানহে। admin বিজ্ঞপ্তিটো তৎক্ষণাত আপোনাৰ ব্যৱহাৰকাৰীৰ ড্যাশবৰ্ডত দেখুৱাব লাগিব।

## আপোনাৰ গ্ৰাহকসকলক ইমেইল প্ৰেৰণ কৰক

Ultimate Multisiteৰ ব্ৰאָডকাস্ট বৈশিষ্ট্য ব্যৱহাৰ কৰি, আপুনি নিজৰ ব্যৱহাৰকাৰীসকলক ইমেইল প্ৰেৰণ কৰিব পাৰে। আপোনাৰ এটা অপচন আছে যে ইমেইলটো কেৱল নির্দিষ্ট ব্যৱহাৰকাৰীকহে প্ৰেৰণ কৰিব, অথবা তেওঁলোকে কোন সামগ্ৰী বা প্লেনৰ অধীনত সাবস্ক্রাইব কৰিছে তাৰ ওপৰত ভিত্তি কৰি এটা নির্দিষ্ট ব্যৱহাৰকাৰী গোটক লক্ষ্য কৰিব পাৰে।

এটা ইমেইল ব্ৰאָডকাস্ট আৰম্ভ কৰিবলৈ, আপুনি নিজৰ network admin ড্যাশবৰ্ডলৈ যাওক আৰু Ultimate Multisite মেনুৰ তলত Broadcast অপচনটো বিচাৰি উলিয়াব।

![Broadcasts list page used as the starting point for an email broadcast](/img/admin/broadcasts-list.png)

এই পৃষ্ঠাৰ পৰা, ওপৰত থকা **Add broadcast** বাটনটো ক্লিক কৰক।

এনেতে Add broadcast modal window খুলিব, য'ত আপুনি কি ধৰণৰ ব্ৰאָডকাস্ট প্ৰেৰণ কৰিব বিচাৰিছে তাৰ বাবে বাছনি কৰিব পাৰিব। আপুনি **Email** বাছক আৰু তাৰ পিছত **Next Step** বাটনটো ক্লিক কৰক।

![Add broadcast modal with the Email option selected](/img/admin/broadcast-add-email.png)

পৰৱৰ্তী উইন্ডোত আপোনাক হয় **Target customer** বা **Target product** লৈ সোধিব। মন কৰিব যে আপুনি এটাৰতকৈ বেছি ব্যৱহাৰকাৰী বা এটাৰতকৈ বেছি সামগ্ৰী বাছনি কৰিব পাৰে।

হয় ব্যৱহাৰকাৰীৰ একাউণ্ট বা সামগ্ৰী বিচাৰিবলৈ, আপুনি ফিল্ডটোৰ ভিতৰত কিবা এটা কিৱৰ্ড (keyword) টাইপ কৰিব লাগিব।

আপোনাৰ লক্ষ্যৰ শ্রোতা (target audience) বাছনি কৰাৰ পিছত, আপুনি **Next Step** ক্লিক কৰিব পাৰে।

![Target customers and target product selection for an Email broadcast](/img/admin/broadcast-email-targets.png)

পৰৱৰ্তী উইন্ডোটো হ'ল য'ত আপুনি বিষয় (subject) আৰু ব্যৱহাৰকাৰীসকলক প্ৰেৰণ কৰিব বিচাৰিছে সেই বিষয়বস্তু/message লিখি আপোনাৰ ইমেইল গঠন কৰিবলৈ আৰম্ভ কৰিব পাৰে।

![Email broadcast subject and content editor on the compose step](/img/admin/broadcast-email-compose.png)

আপোনাৰ বাৰ্তাটো সৃষ্টি কৰাৰ পিছত, আপুনি **Send** বাটনটো ক্লিক কৰিব পাৰে।

আৰু এনেদৰে সহজ যে ব্ৰאָডকাস্ট বৈশিষ্ট্য ব্যৱহাৰ কৰি আপুনি নিজৰ end-users লৈ ইমেইল প্ৰেৰণ কৰিব পাৰে।

## ব্যৱস্থাৰ ইমেইল (System emails)

Ultimate Multisite-ত ব্যৱস্থাৰ ইমেইলবোৰ হৈছে সেইবোৰ **স্বয়ংক্রিয় বিজ্ঞপ্তি** যিবোৰ ব্যৱস্থাৰ দ্বাৰা কিছুমান কাৰ্য্যকলাপৰ পিছত প্ৰেৰণ কৰা হয়, যেনে - ৰেজিষ্ট্ৰেচন, পেমেন্ট, ডোমেইন ম্যাপিং, আদি। এই ইমেইলবোৰ Ultimate Multisite সেটিংসৰ পৰা সম্পাদনা বা সলনি কৰিব পাৰি। ইয়াৰ উপৰিও এটা বৈশিষ্ট্য আছে যি আপোনাক আন এটা Ultimate Multisite installেশ্যনৰ পৰা থকা সেটিংস পুনৰ সেট কৰিব আৰু import কৰিবলৈ অনুমতি দিয়ে।

### Resetting & Importing (পুনৰ সেট কৰা আৰু আমদানি কৰা)

নতুন Ultimate Multisite সংস্কৰণ, লগতে add-on সমূহ, সময়ৰ লগে লগে নতুন ইমেইলবোৰ ৰেজিষ্ট্ৰ কৰিব পাৰে।

সংঘাত (conflicts) আৰু অন্যান্য সমস্যাৰ পৰা ৰক্ষা কৰিবলৈ, **যদি কোনো বৈশিষ্ট্যৰ সঠিক কাৰ্য্যৰ বাবে ইমেইল টেমপ্লেটবোৰ অতি গুৰুত্বপূৰ্ণ নহয়, তেন্তে আমি আপোনাৰ install-ত নতুন ইমেইল টেমপ্লেটবোৰ স্বয়ংক্রিয়ভাৱে System Emails হিচাপে যোগ কৰিম না।**

কিন্তু, super admin আৰু agent সকলৰ বাবে importer tool-ৰ জৰিয়তে এই নতুন ৰেজিষ্ট্ৰ কৰা ইমেইলবোৰ আমদানি কৰিব পাৰি। এই প্ৰক্ৰিয়াটোৱে নতুন ইমেইল টেমপ্লেটৰ বিষয়বস্তু আৰু কনফিগাৰেচনৰে এটা নতুন system email সৃষ্টি কৰিব, যাৰ ফলত super admin-ক তেওঁলোকে যি ইচ্ছা সলনি কৰিব বা এনেদৰেই ৰাখিব পৰ কৰিব।

#### System Emails আমদানি কৰাৰ পদ্ধতি

আপুনি Ultimate Multisite Settings পৃষ্ঠালৈ যাওক আৰু **Emails** ট্ৰি-লৈ যাওক।

![Emails tab in Ultimate Multisite settings showing the System Emails section](/img/config/settings-emails-tab.png)

তাৰ পিছত, সাইডবৰ্ডত, **Customize System Emails** বাটনটো ক্লিক কৰক।

![Customize System Emails button on the System Emails sidebar panel](/img/config/settings-emails-customize-button.png)

System Emails পৃষ্ঠাখনত, আপুনি ওপৰত **Reset & Import** অ্যাকচন বাটনটো দেখিব। এই বাটনটো ক্লিক কৰিলে import আৰু reset modal window খুলিব।

![Reset or Import action button on the System Emails admin page](/img/admin/system-emails-reset-import.png)

তাৰ পিছত, আপুনি কোনবোৰ system email আমদানি কৰিবলৈ উপলব্ধ তাৰ বাবে Import Emails অপচনটো টগল কৰিব পাৰে।

![Reset and Import modal with the Import Emails options expanded](/img/admin/system-emails-import-options.png)

#### System Emails পুনৰ সেট কৰা (Resetting System Emails)

আন সময়ত, আপুনি অনুভৱ কৰিব পাৰে যে এটা নির্দিষ্ট ইমেইল টেমপ্লেটত আপুনি কৰা সলনিবোৰ আৰু আপোনাৰ বাবে কাম নকৰিছে আৰু আপুনি ইয়াক তাৰ **default state** লৈ পুনৰ সেট কৰিব বিচাৰে।

এইদৰে ক্ষেত্ৰত, আপোনাৰ দুটা অপচন আছে: আপুনি কেৱল system email টি ডিলিট কৰি পুনৰ আমদানি কৰিব পাৰে (উপৰৰ নিৰ্দেশনা ব্যৱহাৰ কৰি) - যাৰ ফলত send metrics আৰু অন্যান্যবোৰ মুছ হৈ যায়, সেয়েহে এই পদ্ধতিটো আটাইতকৈ কম পছন্দৰ।

অথবা আপুনি সেই ইমেইল টেমপ্লেট পুনৰ সেট কৰিবলৈ **Reset & Import tool** ব্যৱহাৰ কৰিব পাৰে।

এটা ইমেইল টেমপ্লেট পুনৰ সেট কৰিবলৈ, আপুনি ওপৰৰ পদক্ষেপবোৰ অনুসৰণ কৰি Reset & Import tool লৈ আহিব, আৰু তাৰ পিছত, **Reset** অপচনটো টগল কৰক আৰু যি ইমেইলবোৰ আপুনি তাৰ default content লৈ পুনৰ সেট কৰিব বিচাৰে তাৰ বাবে বাছনি কৰক।

![Reset and Import modal with the Reset Emails options expanded](/img/admin/system-emails-reset-options.png)
