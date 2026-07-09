---
title: পлан হ্ৰাস কৰা
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# এটা প্লেন ডাউনগ্রেড কৰা (v2) {#downgrading-a-plan-v2}

_**গুৰুত্বপূৰ্ণ টোকা: এই article টি Ultimate Multisiteৰ version 2.x লৈ বৰ্ণনা কৰে।**_

এটা প্লেন বা subscription ডাউনগ্রেড কৰাটো এটা সাধাৰণ কাৰ্য্য, যিটো আপোনাৰ ক্লায়েন্টসকলে কৰিব পাৰে যদি তেওঁলোকৰ বাজেট সীমিত হয় বা তেওঁলোকে অনুভৱ কৰে যে তেওঁলোকৰ subsite চলাবলৈ বৰ বেছি resourcesৰ প্ৰয়োজন নহ'ব।

## প্লেন কেনেকৈ ডাউনগ্রেড কৰিব {#how-to-downgrade-a-plan}

আপোনাৰ ক্লায়েন্টসকলে তেওঁলোকৰ subsite admin dashboard লৈ লগইন কৰি আৰু তেওঁলোকৰ account page-ৰ তলত থকা **Change** বাটনটো ক্লিক কৰি যেতিয়া ইচ্ছা তেওঁলোকৰ প্লেন ডাউনগ্রেড কৰিব পাৰে।

![Customer account page with Your Membership card and Change button](/img/account-page/membership-change-button.png)

**Change** বাটনটো ক্লিক কৰাৰ পিছত, ব্যৱহাৰকাৰী/ক্লায়েন্টক checkout page লৈ redirect কৰা হ'ব, য'ত তেওঁলোকে তেওঁলোকৰ subscription কি প্লেনলৈ সলনি কৰিব বিচাৰে, সেইটো বাছি ল'ব পাৰিব।

![Downgrade plan options page on the customer side](/img/account-page/downgrade-picker.png)

এই উদাহৰণত, আমি **Premium** প্লেনটো **Free** প্লেনলৈ ডাউনগ্রেড কৰি আছো।

প্ৰক্ৰিয়াটো আগবঢ়াবলৈ ব্যৱহাৰকাৰীয়ে কেৱল **Complete Checkout** বাটনটো ক্লিক কৰিব লাগিব। তাৰ পিছত, ই তেওঁলোকক account page লৈ ঘূৰাই নিব, য'ত membership-ৰ বাবে pending change এটা message দেখুৱাব। এই সলনিবোৰ ক্লায়েন্টৰ **পৰৱৰ্তী billing cycle** ত কাৰ্যকৰী হ'ব।

![Account page showing pending membership change banner](/img/account-page/pending-change.png)

### ব্যৱহাৰকাৰীয়ে প্লেন ডাউনগ্রেড কৰিলে কি হয় {#what-happens-when-a-user-downgrades-their-plan}

এইটো উল্লেখ কৰাটো গুৰুত্বপূৰ্ণ যে প্লেন ডাউনগ্রেড কৰাটোৱে ব্যৱহাৰকাৰীৰ subsite-ৰ বিদ্যমান configuration (প্ৰয়োজনীয় সেটিং) সলনি নকৰে।

ই site template স্বয়ংক্রিয়ভাৱে সলনি নকৰে, কাৰণ site template সলনি কৰিলে subsite টেমপ্লেটটো সম্পূৰ্ণৰূপে মুছি আৰু reset হৈ যাব। ই অপ্রয়োজনীয় data loss এৰাই চলাৰ বাবে কৰা হয়। গতিকে disk space, themes, plugins আদি অক্ষত থাকিব, কেৱল posts বাহিৰে।

আমি বুজিছো যে আপোনাৰ মূল চিন্তা হ'ব প্লেনটোৰ তলত থকা limits আৰু quotas, কিন্তু আমি বিবেচনা কৰিব লাগিব যে যদি আমি ইয়াৰ কোনো configuration মুচি বা সলনি কৰোঁ, তেন্তে ব্যৱহাৰকাৰীৰ subsite-লৈ কি ক্ষতি হ'ব পাৰে।

প্লেনত থকা limit-ক পাছ কৰা posts-ৰ বাবে, আপোনাৰ ৩টা ভিন্ন বিকল্প আছে: **Keep the posts as it** *,* **Move the posts to trash** *,* বা **Move the posts to draft** *.* আপুনি Ultimate Multisite settingsৰ তলত এইটো configure কৰিব পাৰে।

![Network Admin Settings Sites page showing post-limit-exceeded behaviour options](/img/account-page/settings-sites-post-limit.png)

### ধনৰ লেনদেনলৈ কি হয় {#what-happens-to-the-payment}

version 2.0 ত, proration (অংশিক গণনাক) ক্ষেত্ৰত ধনৰ লেনদেনৰ বাবে কোনো সমন্বয় কৰাৰ প্ৰয়োজন নহ'ব।

এই কাৰণটো হ'ল যে ব্যৱস্থাটোৱে বিদ্যমান membership-টোৰ **billing cycle সম্পূৰ্ণ হোৱাৰ আগলৈ** নতুন প্লেন/membership-টো কাৰ্যকৰী হ'ব। নতুন membership-ৰ বাবে নতুন billing amount স্বয়ংক্রিয়ভাৱে গণনা কৰি পৰৱৰ্তী billing cycle ত charge কৰা হ'ব।
