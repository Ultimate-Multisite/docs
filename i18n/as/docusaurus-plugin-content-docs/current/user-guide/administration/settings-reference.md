---
title: ছেটিংছৰ সন্দৰ্ভ
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# ছেটিংছ ৰেফাৰেন্স

এই পৃষ্ঠাই Ultimate Multisite-ত দৈনন্দিন প্ৰশাসন আৰু শেহতীয়া আচৰণ পৰিৱৰ্তনত প্ৰভাৱ পেলোৱা ছেটিংছ অনুসৰণ কৰে।

## অন্যান্য বিকল্পসমূহ

**অন্যান্য বিকল্পসমূহ** অঞ্চলটো **Ultimate Multisite > Settings > Login & Registration**-ৰ অধীনত দেখা যায়।

| ছেটিং | বিৱৰণ |
|---|---|
| **Jumper সক্ৰিয় কৰক** | প্ৰশাসন অঞ্চলত Jumper দ্ৰুত নেভিগেচন সঁজুলি দেখুৱায়। ইয়াক Ultimate Multisite স্ক্ৰীন, নেটৱৰ্ক অবজেক্ট, আৰু সমৰ্থিত প্ৰশাসন গন্তব্যলৈ পোনপটীয়াকৈ যাবলৈ ব্যৱহাৰ কৰক। এই চৰ্টকাট দৃশ্যমান হোৱাটো নিবিচাৰিলে ইয়াক নিষ্ক্ৰিয় কৰক। |

## ত্ৰুটি ৰিপৰ্টিং আৰু টেলিমেট্ৰি

পূৰ্বৰ ত্ৰুটি-ৰিপৰ্টিং opt-in ছেটিংটো ছেটিংছ পৃষ্ঠাৰ পৰা আঁতৰোৱা হৈছে। বেনামী টেলিমেট্ৰি নিষ্ক্ৰিয় কৰা হৈছে আৰু ইয়াক সক্ৰিয় কৰিবলৈ কোনো UI toggle নাই।

যদি আপুনি ছেটিংছ পৃষ্ঠাৰ বাবে অভ্যন্তৰীণ runbooks বা screenshots ৰক্ষণাবেক্ষণ কৰে, পুৰণি ত্ৰুটি-ৰিপৰ্টিং opt-in field-ৰ উল্লেখ আঁতৰাওক যাতে প্ৰশাসকসকলে এতিয়া আৰু নথকা কোনো ছেটিং বিচাৰি নাথাকে।

## Import/Export ছেটিংছ

**Import/Export** ছেটিংছ টেবে ই কোনবোৰ ছেটিংছ নিয়ন্ত্ৰণ কৰে সেইটো বৰ্ণনা কৰে আৰু ছাইট আৰু নেটৱৰ্ক archive-ৰ বাবে পোনপটীয়াকৈ **Ultimate Multisite > Site Export**-লৈ link কৰে। import/export configuration-ৰ বাবে ছেটিংছ টেব ব্যৱহাৰ কৰক, single-site export/import workflow-ৰ বাবে **Tools > Export & Import** ব্যৱহাৰ কৰক, আৰু পূৰ্ণ Network Export archive প্ৰয়োজন হ’লে Site Export সঁজুলি ব্যৱহাৰ কৰক।

## Domain Seller HostAfrica বেলেঞ্চ সতর্কবাণী

Domain Seller addon HostAfrica-ৰ সৈতে সংযুক্ত থাকিলে, network administrators-এ এতিয়া reseller account balance নিৰ্ভৰযোগ্য domain registration বা renewal processing-ৰ বাবে অতি কম হ’লে dismissible balance-low warning দেখে।

এই জাননীক operational warning হিচাপে বিবেচনা কৰক: অধিক paid domain registrations গ্ৰহণ কৰাৰ আগতে HostAfrica reseller balance top up কৰক, তাৰ পিছত registrations আৰু renewals স্বাভাৱিকভাৱে চলি থাকিব পাৰে বুলি নিশ্চিত কৰিবলৈ Domain Seller settings বা domain-monitoring screen-লৈ উভতি যাওক।

## AI provider connector ছেটিংছ

AI provider connector ছেটিংছে এতিয়া কেৱল সমৰ্থিত OAuth account pools-হে দেখুৱায়:

| Provider | Setup flow |
|---|---|
| **Anthropic Max** | OAuth button-ৰ সৈতে এটা বা ততোধিক Anthropic Max accounts সংযোগ কৰক। sandboxed browser-এ redirect স্বয়ংক্ৰিয়ভাৱে সম্পূৰ্ণ কৰিব নোৱাৰিলে manual OAuth fallback ব্যৱহাৰ কৰক। |
| **OpenAI ChatGPT/Codex** | একে OAuth pool workflow-ৰ জৰিয়তে ChatGPT accounts সংযোগ কৰক। account সংযুক্ত হোৱাৰ পিছত connector-supported operations-এ ChatGPT Codex tool calls ব্যৱহাৰ কৰিব পাৰে। |
| **Google AI Pro** | OAuth-ৰ জৰিয়তে Google AI Pro accounts সংযোগ কৰক, তাৰ পিছত account list তৎক্ষণাত update নহ’লে connector refresh কৰক। |

Cursor Pro আৰু সমৰ্থিত provider নহয়। Cursor Pro setup fields বা connector paths উল্লেখ কৰা পুৰণি internal screenshots, runbooks, বা onboarding steps আঁতৰাওক।

provider accounts যোগ বা আঁতৰোৱাৰ সময়ত, refresh বা delete কৰা account-ৰ বাবে এটা valid email address দিয়ক আৰু connector-backed operations পৰীক্ষা কৰাৰ আগতে provider settings save কৰক।
