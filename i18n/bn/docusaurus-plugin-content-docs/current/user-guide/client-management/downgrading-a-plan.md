---
title: একটি প্ল্যান নিম্নস্তরে নামানো
sidebar_position: 7
_i18n_hash: ce49309d1cd1d8310fd360fa324119f3
---
# একটি plan ডাউনগ্রেড করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite version 2.x সম্পর্কে।**_

একটি plan বা subscription ডাউনগ্রেড করা আপনার client-দের করা একটি সাধারণ কাজ হতে পারে, যদি তাদের বাজেট সীমিত থাকে বা তারা সিদ্ধান্ত নেয় যে তাদের subsite চালাতে অনেক resources দরকার হবে না।

## কীভাবে একটি plan ডাউনগ্রেড করবেন

আপনার client-রা তাদের subsite admin dashboard-এ লগইন করে এবং তাদের Account page-এর অধীনে **Change**-এ ক্লিক করে যেকোনো সময় তাদের plan ডাউনগ্রেড করতে পারেন।

![Your Membership কার্ড এবং Change বোতামসহ customer Account page](/img/account-page/membership-change-button.png)

**Change** বোতামে ক্লিক করার পর, user/client-কে checkout page-এ নিয়ে যাওয়া হবে, যেখানে তারা তাদের subscription কোন plan-এ পরিবর্তন করতে চান তা নির্বাচন করতে পারবেন।

![customer পক্ষে downgrade plan options page](/img/account-page/downgrade-picker.png)

এই উদাহরণে, আমরা plan-টি **Premium** থেকে **Free**-তে ডাউনগ্রেড করছি।

এগোতে user-কে শুধু **Complete Checkout** বোতামে ক্লিক করতে হবে। এরপর এটি তাদের Account page-এ ফিরিয়ে নিয়ে যাবে এবং membership-এর মুলতুবি পরিবর্তন সম্পর্কে একটি বার্তা দেখাবে। পরিবর্তনগুলো customer-এর **পরবর্তী billing cycle**-এ কার্যকর হবে।

![মুলতুবি membership পরিবর্তন banner দেখানো Account page](/img/account-page/pending-change.png)

### একজন user তাদের plan ডাউনগ্রেড করলে কী ঘটে

মনে রাখা গুরুত্বপূর্ণ যে plan ডাউনগ্রেড করলে user-এর subsite-এর বিদ্যমান configuration পরিবর্তন হয় না।

এটি স্বয়ংক্রিয়ভাবে site template পরিবর্তন করে না, কারণ site template পরিবর্তন করলে subsite পুরোপুরি মুছে গিয়ে reset হবে। অপ্রয়োজনীয় data loss এড়াতেই এটি করা হয়। তাই posts ছাড়া disk space, themes, plugins ইত্যাদি অক্ষত থাকবে।

আমরা বুঝি যে আপনার প্রধান উদ্বেগ হবে প্রতিটি plan-এর অধীনে আপনার নির্ধারিত limits এবং quotas, কিন্তু user-এর subsite-এর কোনো configuration মুছে দিলে বা পরিবর্তন করলে যে ক্ষতি হতে পারে, তা বিবেচনা করতে হবে।

plan-এ নির্ধারিত limit ছাড়িয়ে যাওয়া posts-এর জন্য আপনার ৩টি ভিন্ন option আছে: **posts যেভাবে আছে সেভাবে রাখুন** *,* **posts trash-এ সরান** *,* অথবা **posts draft-এ সরান** *.* আপনি এটি Ultimate Multisite settings-এর অধীনে configure করতে পারেন।

![post-limit-exceeded behaviour options দেখানো Network Admin Settings Sites page](/img/account-page/settings-sites-post-limit.png)

### payment-এর কী হয়

version 2.0-এ, proration-এর ক্ষেত্রে payment-এ আর কোনো adjustment দরকার হয় না।

কারণ নতুন plan/membership কার্যকর হওয়ার **আগে** system বিদ্যমান membership-এর billing cycle সম্পূর্ণ হওয়া পর্যন্ত অপেক্ষা করবে। নতুন membership-এর নতুন billing amount স্বয়ংক্রিয়ভাবে প্রয়োগ হবে এবং পরবর্তী billing cycle-এ charge করা হবে।
