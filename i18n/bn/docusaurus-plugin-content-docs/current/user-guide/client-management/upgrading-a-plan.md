---
title: একটি প্ল্যান আপগ্রেড করা
sidebar_position: 11
_i18n_hash: 292fe52b63762d11e65c720ada133d39
---
# একটি Plan আপগ্রেড করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite version 2.x নিয়ে।**_

আপনার গ্রাহকেরা যেকোনো সময় তাদের plan আপগ্রেড করতে পারেন। তারা অন্য কোনো plan-এ আপগ্রেড করতে পারেন, অথবা আপনার নেটওয়ার্কে দেওয়া অতিরিক্ত কোনো পরিষেবা বা প্যাকেজ কিনতে পারেন।

এই টিউটোরিয়ালে আমরা দেখব কীভাবে তারা তাদের plan আপগ্রেড করতে পারেন এবং আপগ্রেড প্রক্রিয়ার পরে কী ঘটে।

তাদের plan আপগ্রেড করতে, আপনার গ্রাহকদের তাদের Dashboard-এ গিয়ে **Account** পেজে যেতে হবে।

![Account মেনু লিংক দেখা যাচ্ছে এমন গ্রাহকের subsite Dashboard](/img/account-page/account-menu.png)

Account পেজে তাদের বর্তমান membership এবং এর সঙ্গে যুক্ত plan দেখানো হবে। অন্য কোনো plan-এ আপগ্রেড করতে, তাদের **Your Membership** সেকশনের উপরের ডান কোণে থাকা **Change**-এ ক্লিক করতে হবে।

![Change বোতামসহ Account পেজের Your Membership কার্ড](/img/account-page/membership-change-button.png)

তাদের একটি checkout ফর্মে পাঠানো হবে, যেখানে উপলভ্য সব plan দেখানো হবে।

তারা **তাদের বর্তমান plan-এর জন্য উপলভ্য পরিষেবা ও প্যাকেজগুলিও** দেখতে পারবেন, যদি তারা শুধু নির্দিষ্ট কোনো পরিষেবা বা প্যাকেজ কিনতে চান (যেমন এখানে আমাদের উদাহরণে unlimited visits বা disk space), plan আপগ্রেড না করে।

![গ্রাহক পাশে উপলভ্য plan এবং প্যাকেজ দেখানো upgrade picker](/img/account-page/upgrade-picker.png)

তারা যে product কিনতে চান সেটি বেছে নেওয়ার পরে, তারা দেখতে পাবেন এখনই কত টাকা দিতে হবে—বিদ্যমান কোনো credit বাদে—এবং পরবর্তী billing তারিখে কত চার্জ করা হবে।

সাধারণত, যদি product-টি অন্য কোনো plan হয় এবং পেমেন্টটি membership চার্জের মাঝামাঝি সময়ে করা হয়, তাহলে প্রথম plan-এ দেওয়া টাকার জন্য তারা একটি credit পাবেন।

![প্রয়োগ করা credit এবং পরবর্তী billing পরিমাণ দেখানো upgrade payment summary](/img/account-page/upgrade-summary.png)

যদি তারা এমন কোনো plan বা প্যাকেজ নির্বাচন করেন যা বর্তমান subscription থেকে কিছুই পরিবর্তন করবে না, তাহলে তারা সেটি ব্যাখ্যা করা একটি বার্তা দেখবেন।

![নির্বাচিত plan subscription পরিবর্তন না করলে দেখানো নোটিস](/img/account-page/upgrade-no-change.png)

checkout সম্পন্ন হওয়ার পরে, নতুন product(গুলি) আপনার গ্রাহকদের account-এ যোগ হবে এবং নতুন product(গুলি)-এর সব সীমা বা ফিচার সঙ্গে সঙ্গে এতে যোগ হবে: visits, disk space, posts, ইত্যাদি...

##

##

## আপগ্রেড ও ডাউনগ্রেড পথ {#upgrade-and-downgrade-paths}

আপনার প্রতিটি product-এ একটি **Up & Downgrades** ট্যাব থাকবে। ওই ট্যাবের প্রথম অপশনটি হলো **Plan Group** নামের একটি field।

**Plan groups** Ultimate Multisite-কে জানাতে সাহায্য করে যে নির্দিষ্ট কিছু plan একই "পরিবারের" অন্তর্ভুক্ত, তাই সেগুলো upgrade/downgrade path অপশন তৈরি করতে ব্যবহার করা উচিত।

![Plan Group field-সহ product edit Up and Downgrades ট্যাব](/img/config/product-upgrades-plan-group.png)

উদাহরণস্বরূপ, আপনার কাছে একটি **Free plan**, একটি **Basic Plan** এবং একটি **Premium Plan** উপলভ্য আছে। আপনি চান **Free Plan**-এর অধীনে subscribed ব্যবহারকারীরা শুধু **Premium Plan**-এ আপগ্রেড করতে পারুক এবং তারা যেন "Basic Plan"-কে upgrade অপশন হিসেবে না দেখে। আপনাকে শুধু নিচের স্ক্রিনশটগুলিতে দেখানো মতো Free ও Premium—দুই plan-এর জন্য একই plan group নাম assign করতে হবে।

![High End plan group assign করা Free Plan product পেজ](/img/config/product-upgrades-free.png)

![High End plan group assign করা Premium Plan product পেজ](/img/config/product-upgrades-premium.png)

এর ফলে Ultimate Multisite-কে জানানো হবে যে নেটওয়ার্কে **High End** নামে plan-এর একটি "পরিবার" আছে। upgrade বা downgrade দেওয়ার সময়, একই পরিবারের plan-গুলিই শুধু ব্যবহারকারীর জন্য অপশন হিসেবে দেখানো হবে।
