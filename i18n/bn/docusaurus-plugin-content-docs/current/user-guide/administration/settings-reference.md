---
title: সেটিংসের রেফারেন্স
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Settings রেফারেন্স

এই পৃষ্ঠাটি Ultimate Multisite-এ দৈনন্দিন প্রশাসনকে প্রভাবিত করে এমন settings এবং সাম্প্রতিক আচরণগত পরিবর্তনগুলো অনুসরণ করে।

## অন্যান্য বিকল্প

**Other Options** এলাকা **Ultimate Multisite > Settings > Login & Registration**-এর অধীনে দেখা যায়।

| Setting | বিবরণ |
|---|---|
| **Enable Jumper** | admin এলাকায় Jumper দ্রুত navigation টুল দেখায়। Ultimate Multisite স্ক্রিন, network অবজেক্ট এবং সমর্থিত admin গন্তব্যে সরাসরি যেতে এটি ব্যবহার করুন। এই shortcut দৃশ্যমান রাখতে না চাইলে এটি নিষ্ক্রিয় করুন। |

## ত্রুটি প্রতিবেদন এবং টেলিমেট্রি

আগের error-reporting opt-in setting settings পৃষ্ঠা থেকে সরানো হয়েছে। বেনামী টেলিমেট্রি নিষ্ক্রিয় এবং এটি সক্ষম করার জন্য কোনো UI toggle নেই।

আপনি যদি settings পৃষ্ঠার জন্য internal runbook বা screenshot রক্ষণাবেক্ষণ করেন, তাহলে পুরোনো error-reporting opt-in field-এর reference সরিয়ে ফেলুন, যাতে administrator-রা আর নেই এমন কোনো setting খুঁজতে না যান।

## Import/Export settings

**Import/Export** settings tab কোন settings নিয়ন্ত্রণ করে তা বর্ণনা করে এবং site ও network archive-এর জন্য সরাসরি **Ultimate Multisite > Site Export**-এ link করে। import/export configuration-এর জন্য settings tab ব্যবহার করুন, single-site export/import workflow-এর জন্য **Tools > Export & Import** ব্যবহার করুন, এবং পূর্ণ Network Export archive দরকার হলে Site Export tool ব্যবহার করুন।

## Domain Seller HostAfrica balance warning

Domain Seller addon HostAfrica-এর সাথে সংযুক্ত থাকলে, reseller account balance নির্ভরযোগ্য domain registration বা renewal processing-এর জন্য খুব কম হলে network administrator-রা এখন dismissible balance-low warning দেখেন।

এই notice-টিকে operational warning হিসেবে ধরুন: আরও paid domain registration গ্রহণ করার আগে HostAfrica reseller balance top up করুন, তারপর registration ও renewal স্বাভাবিকভাবে চালু থাকতে পারে কি না নিশ্চিত করতে Domain Seller settings বা domain-monitoring screen-এ ফিরে যান।

## AI provider connector settings

AI provider connector settings এখন শুধু সমর্থিত OAuth account pool-গুলো প্রকাশ করে:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | OAuth button দিয়ে এক বা একাধিক Anthropic Max account সংযুক্ত করুন। sandboxed browser স্বয়ংক্রিয়ভাবে redirect সম্পন্ন করতে না পারলে manual OAuth fallback ব্যবহার করুন। |
| **OpenAI ChatGPT/Codex** | একই OAuth pool workflow-এর মাধ্যমে ChatGPT account সংযুক্ত করুন। account সংযুক্ত হওয়ার পর connector-সমর্থিত operation-গুলো ChatGPT Codex tool call ব্যবহার করতে পারে। |
| **Google AI Pro** | OAuth-এর মাধ্যমে Google AI Pro account সংযুক্ত করুন, তারপর account তালিকা সঙ্গে সঙ্গে update না হলে connector refresh করুন। |

Cursor Pro আর সমর্থিত provider নয়। Cursor Pro setup field বা connector path উল্লেখ করে এমন পুরোনো internal screenshot, runbook, বা onboarding step সরিয়ে ফেলুন।

provider account যোগ বা সরানোর সময়, refresh বা delete করা হচ্ছে এমন account-এর জন্য বৈধ email address লিখুন এবং connector-backed operation পরীক্ষা করার আগে provider settings save করুন।
