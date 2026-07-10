---
title: এটা প্লেন আপগ্রেড কৰা
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# এটা প্লেন আপগ্রেড কৰা (v2) {#upgrading-a-plan-v2}

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ বৰ্ণনা কৰে।**_

আপোনাৰ গ্ৰাহকসকলে যেতিয়া ইচ্ছা তেওঁলোকৰ প্লেন আপগ্রেড কৰিব পাৰে। তেওঁলোকে হয় আন এটা প্লেনত আপগ্রেড কৰিব পাৰে, নহয় আপুনি আপোনাৰ নেটৱৰ্কত যি কোনো এটা অতিৰিক্ত সেৱা বা পেকেজ ক্ৰয় কৰিব পাৰে।

এই tutorial ত আমি কওঁ যে তেওঁলোকে কেনেকৈ তেওঁলোকৰ প্লেন আপগ্রেড কৰিব পাৰে আৰু আপগ্রেড প্ৰক্ৰিয়াৰ পিছত কি কি হ'ব।

তেওঁলোকৰ প্লেন আপগ্রেড কৰিবলৈ, আপোনাৰ গ্ৰাহকসকলে তেওঁলোকৰ dashboard-লগ ইন কৰি **Account** পৃষ্ঠাখনলৈ যাব লাগিব।

![Customer subsite dashboard with Account menu link visible](/img/account-page/account-menu.png)

Account পৃষ্ঠাখনত, তেওঁলোকক তেওঁলোকৰ বৰ্তমানৰ সদস্যপদ আৰু তাৰ সৈতে জড়িত প্লেনটো দেখুওৱা হ'ব। আন এটা প্লেনত আপগ্রেড কৰিবলৈ, তেওঁলোকে **Your Membership** অংশটোৰ ওপৰ-ডান কোণত থকা **Change** বোতামত ক্লিক কৰিব লাগিব।

![Account page Your Membership card with Change button](/img/account-page/membership-change-button.png)

তেওঁলোকক এটা checkout form-লৈ পুনৰ স্থানান্তৰ কৰা হ'ব, য'ত উপলব্ধ সকলো প্লেন দেখুওৱা হ'ব।

তেওঁলোকে **তেওঁলোকৰ বৰ্তমানৰ প্লেনৰ বাবে উপলব্ধ সেৱা আৰু পেকেজ**ো দেখিবলৈ পাব, যদি তেওঁলোকে কেৱল এটা নিৰ্দিষ্ট সেৱা বা পেকেজ (যেনে এই উদাহৰণত unlimited visits বা disk space) ক্ৰয় কৰিব বিচাৰে আৰু প্লেন আপগ্রেড কৰিব বিচাৰে নহয়।

![Upgrade picker showing available plans and packages on the customer side](/img/account-page/upgrade-picker.png)

তেওঁলোকে যিটো প্ৰডাক্ট ক্ৰয় কৰিব বিচাৰে, তাৰ পিছত তেওঁলোকে দেখিব যে তেওঁলোকে বৰ্তমান কিমান টকা দিব লাগিব (যি কোনো বিদ্যমান credit বাদ দি) আৰু পৰৱৰ্তী বিলিং তাৰিখে কিমান টকা চার্জ কৰা হ'ব।

সাধাৰণতে, যদি প্ৰডাক্টটো আন এটা প্লেন হয় আৰু বিলিং চার্জৰ মাজত ধন পৰিশোধ কৰা হয়, তেন্তে তেওঁলোকে প্ৰথম প্লেনত দিয়া ধনৰ বাবে এটা credit লাভ কৰিব।

![Upgrade payment summary showing credit applied and next billing amount](/img/account-page/upgrade-summary.png)

যদি তেওঁলোকে এনে এটা প্লেন বা পেকেজ বাছি লয় যিয়ে বৰ্তমানৰ সদস্যপদত কোনো পৰিৱৰ্তন নকৰে, তেন্তে তেওঁলোকে সেইটো ব্যাখ্যা কৰা এটা message দেখিব।

![Notice when the selected plan does not change the subscription](/img/account-page/upgrade-no-change.png)

checkout সম্পন্ন হোৱাৰ পিছত, নতুন প্ৰডাক্ট(সমূহ) আপোনাৰ গ্ৰাহকৰ account-ত যোগ কৰা হ'ব আৰু নতুন প্ৰডাক্ট(সমূহৰ) সকলো সীমা বা বৈশিষ্ট্য তৎক্ষণাত যোগ কৰা হ'ব: visits, disk space, posts, ইত্যাদি...

##

##

## আপগ্রেড আৰু ডাউনগ্রেড পথসমূহ (Upgrade and Downgrade Paths) {#upgrade-and-downgrade-paths}

আপোনাৰ প্ৰতিটো প্ৰডাক্টত, আপোনাৰ ওচৰত এটা **Up & Downgrades** ট্ৰি (tab) থাকিব। সেই ট্ৰিৰ প্ৰথম বিকল্পটো এটা **Plan Group** নামৰ ফিল্ড।

**Plan groups** ব্যৱস্থাটোৱে আপোনাক Ultimate Multisite-ক জনাওঁ যে কিছুমান প্লেন এটা "পৰিয়াল"ৰ অংশ, আৰু সেয়েহে আপগ্রেড/ডাউনগ্রেড পথৰ বিকল্পসমূহ নিৰ্মাণ কৰিবলৈ ইয়াক ব্যৱহাৰ কৰা উচিত।

![Product edit Up and Downgrades tab with Plan Group field](/img/config/product-upgrades-plan-group.png)

উদাহৰণস্বৰূপে, আপোনাৰ ওচৰত এটা **Free plan**, এটা **Basic Plan** আৰু এটা **Premium Plan** উপলব্ধ। আপুনি বিচাৰে যে **Free Plan** ত সাবস্ক্রাইব কৰা ব্যৱহাৰকাৰীসকলে কেৱল **Premium Plan** লৈ আপগ্রেড কৰিব পাৰে আৰু তেওঁলোকে আপগ্রেড বিকল্প হিচাপে "Basic Plan" দেখা নালাগে। আপুনি কেৱল তলৰ screenshot-ত দেখুওৱা ধৰণ অনুসৰি Free আৰু Premium দুয়োটা প্লেনৰ বাবে একেটা plan group name দিলেই হ'ব।

![Free Plan product page with High End plan group assigned](/img/config/product-upgrades-free.png)

![Premium Plan product page with High End plan group assigned](/img/config/product-upgrades-premium.png)

ইয়াৰ ফলত কি হ'ব भने, Ultimate Multisite-ক জনাওঁ যে নেটৱৰ্কত **High End** নামৰ এটা "পৰিয়াল"ৰ প্লেন আছে। আপগ্রেড বা ডাউনগ্রেড আগবঢ়োৱাৰ সময়ত, কেৱল একে পৰিয়ালৰ প্লেনবোৰহে ব্যৱহাৰকাৰীৰ বাবে বিকল্প হিচাপে দেখুওৱা হ'ব।
