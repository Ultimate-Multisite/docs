---
title: ডছকাণ্ট কোড সৃষ্টি কৰা
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# ডিসকাউন্ট কোড (Discount Codes) সৃষ্টি কৰা (v2) {#creating-discount-codes-v2}

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

Ultimate Multisite ব্যৱহাৰ কৰি আপুনি নিজৰ ক্লায়েন্টসকলক তেওঁলোকৰ সাবস্ক্রিপশ্যনত ডিসকাউন্ট দিবলৈ ডিসকাউন্ট কোড সৃষ্টি কৰিব পাৰে। আৰু ইয়াৰ সৃষ্টি কৰাটো সহজ!

## ডিসকাউন্ট কোড সৃষ্টি কৰা আৰু সম্পাদনা কৰা {#creating-and-editing-discount-codes}

এটা ডিসকাউন্ট কোড সৃষ্টি কৰিব বা সম্পাদনা কৰিবলৈ, **Ultimate Multisite > Discount Codes** লৈ যাওক।

![Discount codes list — empty state before any codes exist](/img/config/discount-codes-empty.png)

তাত আপুনি ইতিমধ্যে সৃষ্টি কৰা ডিসকাউন্ট কোডসমূহৰ এটা তালিকা পাব।

আপুনি এটা নতুন কুপন সৃষ্টি কৰিবলৈ **Add Discount Code** ত ক্লিক কৰিব পাৰে, অথবা আপুনি থকা কোডবোৰৰ ওপৰত মাউছ লৈ গৈ **Edit** ক্লিক কৰিও সম্পাদনা কৰিব পাৰে।

![Discount codes list with hover actions showing Edit and Delete links](/img/config/discount-codes-list-hover.png)

![Add Discount Code button in the page header](/img/config/discount-codes-add-button.png)

আপোনাক সেই পৃষ্ঠালৈ পুনৰ স্থানান্তৰ কৰা হ'ব য'ত আপুনি আপোনাৰ কুপন কোড সৃষ্টি বা সম্পাদনা কৰিব। এই উদাহৰণত, আমি এটা নতুন কোড সৃষ্টি কৰিম।

![Discount code edit page with all sections visible](/img/config/discount-code-edit.png)

ইয়াত উপলব্ধ সেটিংবোৰলৈ আহক:

**Enter Discount Code:** এইটো কেৱল আপোনাৰ ডিসকাউন্ট কোডৰ নাম। এইটো সেই কোড নহয় যিটো আপোনাৰ গ্ৰাহকসকলে checkout form ত ব্যৱহাৰ কৰিব লাগিব।

**Description:** ইয়াত, আপুনি সংক্ষেপে বৰ্ণনা কৰিব পাৰে যে এই কুপনটো ক'ৰ বাবে।

![Discount code name and description fields at the top of the edit page](/img/config/discount-code-description.png)

আপুনি ডিসকাউন্ট কোডটো active নে inactive বুলিও দেখা পাৰে:

![Discount code active status](/img/config/discount-code-active.png)

**Coupon code:** ইয়াত আপুনি সেই কোডটো সংজ্ঞায়িত কৰে যিটো আপোনাৰ গ্ৰাহকসকলে checkout কৰাৰ সময়ত প্ৰৱেশ কৰিব লাগিব।

![Coupon code field where customers enter the code at checkout](/img/config/discount-code-coupon-field.png)

**Discount:** ইয়াত, আপুনি আপোনাৰ ডিসকাউন্ট কোডৰ বাবে এটা **শতাংশ (percentage)** বা এটা **নিৰ্দিষ্ট ধনৰ পৰিমাণ (fixed amount)** সেট কৰিব পাৰে।

![Discount amount setting with percentage or fixed-amount dropdown](/img/config/discount-code-amount.png)

**Apply to renewals:** যদি এই বিকল্পটো বন্ধ (toggled off) কৰা হয়, তেন্তে এই ডিসকাউন্ট কোডটো কেৱল **প্ৰথম भुঙীয়াটোলৈ (first payment)**হে প্ৰযোজ্য হ'ব। আন সকলো भुঙীয়াটোলৈ কোনো ডিসকাউন্ট নহ'ব। যদি এই বিকল্পটো অন (toggled on) কৰা হয়, তেন্তে ডিসকাউন্ট কোডটো ভৱিষ্যতৰ সকলো भुঙীয়াটোলৈ বৈধ থাকিব।

**Setup fee discount:** যদি এই বিকল্পটো বন্ধ কৰা হয়, তেন্তে কুপন কোডটোৱে অৰ্ডাৰৰ **setup fee-ৰ বাবে কোনো ডিসকাউন্ট নিদিয়ে**। যদি এই বিকল্পটো অন কৰা হয়, তেন্তে আপুনি সেই ডিসকাউন্ট (শতাংশ বা নিৰ্দিষ্ট পৰিমাণ) সেট কৰিব পাৰে যিটো এই কুপন কোডটোৱে আপোনাৰ প্লেনৰ setup fee-লৈ প্ৰয়োগ কৰিব।

![Apply to renewals and setup fee discount toggle options](/img/config/discount-code-renewals.png)

**Active:** এই কুপন কোডটো হাতেৰে active বা deactivate কৰিব পাৰি।

![Active toggle to manually enable or disable the discount code](/img/config/discount-code-active.png)

**Advanced Options**ৰ তলত, আমি তলত দিয়া সেটিংবোৰ পাই:

![Discount code advanced options](/img/config/discount-code-advanced.png)

**Limit uses:**

  * **Uses:** ইয়াত, আপুনি ক'মানবাৰ ডিসকাউন্ট কোডটো ব্যৱহাৰ কৰা হৈছে, সেয়া দেখা পাৰে।

  * **Max uses:** ইয়াৰ দ্বাৰা ব্যৱহাৰকাৰীসকলে এই ডিসকাউন্ট কোডটো ক'মানবাৰ ব্যৱহাৰ কৰিব পাৰিব, তাৰ সীমা নিৰ্ধাৰণ কৰা হয়। উদাহৰণস্বৰূপে, যদি আপুনি ইয়াত ১০ দিয়ে, তেন্তে কুপনটো কেৱল ১০ বৰ ጊዜহে ব্যৱহাৰ কৰিব পাৰিব। এই সীমাৰ পিছত, কুপন কোডটো আৰু ব্যৱহাৰ কৰিব নোৱাৰি।

![Limit uses setting with current uses count and max uses field](/img/config/discount-code-limit-uses.png)

**Start & expiration dates:** ইয়াত আপোনাৰ কুপনলৈ এটা আৰম্ভণি তাৰিখ আৰু/অথবা এটা সমাপ্তি তাৰিখ যোগ কৰাৰ বিকল্প থাকে।

![Start and expiration date fields for scheduling the discount code](/img/config/discount-code-dates.png)

**Limit products:** যদি আপুনি **Select products** অন কৰে, তেন্তে আপোনাৰ সকলো প্ৰডাক্ট আপোনাৰ ওচৰত দেখুৱাই দিয়া হ'ব। আপোনাৰ ওচৰত বিকল্প থাকিব যে কোন প্ৰডাক্টটোৱে এই কুপন কোডটো গ্ৰহণ কৰিব পাৰিব (অন বা অফ কৰি)। যি প্ৰডাক্টবোৰ ইয়াত অফ কৰা হয়, যদি আপোনাৰ গ্ৰাহকসকলে সেই কোডটো ব্যৱহাৰ কৰিবলৈ চেষ্টা কৰে, তেন্তে কোনো পৰিৱৰ্তন নহ'ব।

![Limit products section with per-product toggle switches](/img/config/discount-code-limit-products.png)

এই সকলো বিকল্প সেট কৰাৰ পিছত, আপোনাৰ কুপনটো সেভ কৰিবলৈ **Save Discount Code** ত ক্লিক কৰক আৰু ইমানহে!

![Save Discount Code button at the bottom of the edit page](/img/config/discount-code-save.png)

কুপনটো এতিয়া আপোনাৰ তালিকাত আছে আৰু তাৰ পৰা, আপুনি ইয়াক **edit বা delete** কৰিবলৈ ক্লিক কৰিব পাৰে।

![Discount code row in the list with Edit and Delete hover actions](/img/config/discount-codes-list-hover.png)

###

### URL Parameters ব্যৱহাৰ কৰা: {#using-url-parameters}

যদি আপুনি আপোনাৰ মূল্য তালিকা (pricing tables) ক কাস্টমাইজ কৰিব বিচাৰে বা আপোনাৰ ওয়েবসাইটৰ বাবে এটা ভাল কুপন কোড পৃষ্ঠা (coupon code page) বনাওঁতে আৰু আপোনাৰ checkout form ত কোনো ডিসকাউন্ট কোড স্বয়ংক্রিয়ভাৱে প্ৰয়োগ কৰিব বিচাৰে, তেন্তে আপুনি URL parameters ব্যৱহাৰ কৰি এই কামটো কৰিব পাৰে।

প্ৰথমে, আপোনাৰ প্লেনৰ বাবে এটা shareable link ল'ব লাগিব। ইয়াৰ বাবে, **Ultimate Multisite > Products** লৈ যাওক আৰু এটা প্লেন বাছি লওক।

**Click to Copy Shareable Link** বোৱাৰত ক্লিক কৰক। ইয়াৰ দ্বাৰা আপোনাক এই নিৰ্দিষ্ট প্লেনটোৰ shareable link দিয়া হ'ব। আমাৰ ক্ষেত্ৰত, দিয়া shareable link আছিল [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._

![Product page with shareable link button](/img/config/products-list.png)

এই নিৰ্দিষ্ট প্লেনটোলৈ আপোনাৰ ডিসকাউন্ট কোড প্ৰয়োগ কৰিবলৈ, কেৱল URL লৈ **?discount_code=XXX** এই প‍্যৰামিটাৰটো যোগ কৰক। য'ত **XXX** হৈছে কুপন কোড।

এই উদাহৰণত, আমি এই নিৰ্দিষ্ট প্ৰডাক্টটোলৈ **50OFF** কুপন কোডটো প্ৰয়োগ কৰিম।

এই নিৰ্দিষ্ট প্লেনটোৰ আৰু 50OFF ডিসকাউন্ট কোডটো প্ৰয়োগ কৰা URL টো এনেকুৱা হ'ব: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
