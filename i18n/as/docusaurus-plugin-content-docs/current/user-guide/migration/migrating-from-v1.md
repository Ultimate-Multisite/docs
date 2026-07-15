---
title: V1 ৰ পৰা স্থানান্তৰণ কৰা
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 ৰ পৰা মাইগ্ৰেট কৰা

## Ultimate Multisite, ইয়াৰ মূল ১.x ৰ পৰা ২.x ৰ সংস্কৰণীৰ পৰিয়াললৈ স্থানান্তৰ কৰিছে। {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite ৰ ২.০ আৰু তাৰ ওপৰৰ সংস্কৰণীটো কোডবেছৰ এটা সম্পূৰ্ণ পুনৰ্গঠন (complete rewrite) हो। ইয়াৰ অৰ্থ হ'ল যে পুৰণি সংস্কৰণী আৰু নতুন সংস্কৰণীৰ মাজত খুব কমেই কিছুমান অংশ একে। এই কাৰণত, ১.x ৰ পৰা ২.x লৈ আপুনি আপোনাৰ তথ্যক এনে এটা ফৰম্যাটোত মাইগ্ৰেট কৰিব লাগিব যিটো নতুন সংস্কৰণীয়ে বুজি পাব।

সৌভাগ্যবশতঃ, Ultimate Multisite ২.০+ **এটা মাইগ্ৰেটৰ (migrator) লৈ আহে** যিটো core ত বিল্ড কৰা হৈছে। ই পুৰণি সংস্কৰণীৰ তথ্য চিনাক্ত কৰিব আৰু তাক নতুন ফৰম্যাটোত ৰূপান্তৰ কৰিবলৈ সক্ষম। এই মাইগ্ৰেচনটো ২.০+ ৰ **Setup Wizard** ত হয়।

এই পাঠটোৱে ব্যাখ্যা কৰে যে মাইগ্ৰেটৰটো কেনেকৈ কাম কৰে, যদি কোনো সমস্যা হয় তেন্তে কি কৰিব লাগে, আৰু এই প্ৰক্ৰিয়াত উদ্ভৱ হ'ব পৰা সমস্যাসমূহ কেনেকৈ সমাধান কৰিব লাগে।

_**গুৰুত্বপূৰ্ণ: ১.x সংস্কৰণীৰ পৰা ২.০ সংস্কৰণীলৈ আপুনি আপগ্রেড কৰিবলৈ আৰম্ভ কৰাৰ আগতে, অনুগ্ৰহ কৰি আপোনাৰ সাইটৰ ডাটাবেছৰ এটা ব্যাকআপ লওক**_

## প্ৰথম পদক্ষেপসমূহ {#first-steps}

প্ৰথম পদক্ষেপটো হ'ল যে আপুনি plugin .zip ফাইলটো ডাউনলোড কৰি আপোনাৰ network admin dashboard ত ২.০ সংস্কৰণীটো ইনষ্টল কৰিব।

আপুনি [version ২.০ ইনষ্টল কৰি আৰু অ্যাক্টিভেট কৰাৰ পিছত](../getting-started/installing-ultimate-multisite.md), ব্যৱস্থাই স্বয়ংক্রিয়ভাৱে চিনাক্ত কৰিব যে আপোনাৰ Multisite ট্ৰুটি বাছনি সংস্কৰণত চলি আছে আৰু আপুনি plugin পৃষ্ঠাৰ ওপৰত এই বাৰ্ণিকটো দেখিব।

_**নোট:** যদি আপোনাৰ Multisite ত Ultimate Multisite ১.x ইনষ্টল কৰা আছে, তেন্তে আপোনাৰ ওচৰত plugin টো আপুনি জীয়াকৈ ডাউনলোড কৰা সংস্কৰণীৰে সলনি কৰাৰ বিকল্প থাকিব। অনুগ্ৰহ কৰি, **Replace current with uploaded** ক্লিক কৰক।_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

পৰৱৰ্তী পৃষ্ঠাখনত আপোনাক কোৱা হ'ব যে ১.x সংস্কৰণীৰ লগত আপুনি কি কি পুৰণি add-on ইনষ্টল কৰি আছে। ইয়াত নিৰ্দেশনা দিয়া হ'ব যে আপুনি ব্যৱহাৰ কৰি থকা সংস্কৰণীটো ২.০ সংস্কৰণীৰ সৈতে সামঞ্জস্যপূৰ্ণ নে নাই, অথবা মাইগ্ৰেচনৰ পিছত add-on টোৰ এটা আপগ্রেডেড সংস্কৰণী ইনষ্টল কৰিবলগীয়া নে।

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

আপুনি আগবঢ়াবলৈ সাজু হ'লে, আপুনি **Visit the Installer to finish the upgrade** বুলি লিখা বাটনটো ক্লিক কৰিব পাৰে।

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

এইটোৱে আপোনাক কিছুমান স্বাগতম বাৰ্ণিক লৈ ইনষ্টলেচন উইজৰ্ড পৃষ্ঠাখনলৈ লৈ যাব। আপুনি মাত্ৰ পৰৱৰ্তী পৃষ্ঠাখনলৈ যাবলৈ **Get Started** ক্লিক কৰিব লাগিব।

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** ক্লিক কৰাৰ পিছত, ই আপোনাক Pre-install Checks_._ লৈ পুনৰ্দেশ কৰিব। ই আপোনাৰ System Information আৰু WordPress installation দেখুৱাব আৰু ক'ব যে ইয়াৰ Ultimate Multisite-ৰ প্ৰয়োজনীয়তা পূৰণ কৰে নে নাই।

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

পৰৱৰ্তী পদক্ষেপটো হ'ল আপোনাৰ Ultimate Multisite license key ইনপুট কৰা আৰু plugin টো অ্যাক্টিভেট কৰা। ই নিশ্চিত কৰিব যে add-on সহ সকলো বৈশিষ্ট্য আপোনাৰ সাইটত উপলব্ধ হ'ব।

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

আপোনাৰ key টিপইন কৰাৰ পিছত, **Agree & Activate** ক্লিক কৰক।

লাইছেন্স অ্যাক্টিভেট কৰাৰ পিছত, আপুনি পৰৱৰ্তী পৃষ্ঠাখনত **Install** ক্লিক কৰি প্ৰকৃত ইনষ্টলেচন আৰম্ভ কৰিব পাৰে। ই স্বয়ংক্রিয়ভাৱে ২.০ সংস্কৰণীটো কাৰ্য্য কৰিবলৈ প্ৰয়োজনীয় ফাইল আৰু ডাটাবেছ সৃষ্টি কৰিব।

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## এতিয়া, মাইগ্ৰেচন {#now-the-migration}

মাইগ্ৰেটৰটোৰ এটা বিল্ড-ইন সেফটি বৈশিষ্ট্য আছে, যিটো আপোনাৰ সম্পূৰ্ণ multisite পৰীক্ষা কৰিবলৈ দিয়ে যাতে আপোনাৰ Ultimate Multisite ডাটা কোনো সমস্যা নোহোৱাকৈ মাইগ্ৰেট কৰিব পাৰি। প্ৰক্ৰিয়াটো আৰম্ভ কৰিবলৈ **Run Check** বাটনটো ক্লিক কৰক।

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

পৰীক্ষাটো কৰাৰ পিছত, আপোনাৰ দুটা সম্ভাৱনা আছে: ফলাফলটো হয় **এটা ভুল (error) লৈ** বা **কোনো ভুল নোহোৱাকৈ** হ'ব পাৰে।

### ভুল লৈ (With Error) {#with-error}

যদি আপুনি এটা ভুল বাৰ্ণিক পোৱা যায়, তেন্তে আপুনি আমাৰ suport team লগত যোগাযোগ কৰিব লাগিব যাতে তেওঁলোকে ভুলটো সলনি কৰাত সহায় কৰিব পাৰে। অনুগ্ৰহ কৰি টিকেট (ticket) বনালে **ভুলৰ লগ (error log)** প্ৰদান কৰিব। আপুনি লগটো ডাউনলোড কৰিব পাৰে বা "contact our support team" বুলি লিখা লিংকটো ক্লিক কৰিব পাৰে। ই আপোনাৰ পৃষ্ঠাৰ সোঁফাণত থকা help widget খুলিব, য'ত আপোনাৰ বাবে প্ৰয়োজনীয় ফিল্ডসমূহ পূৰণ কৰা থাকে, আৰু Description তলত ভুলৰ লগবোৰ থাকে।

_**যেহেতু ব্যৱস্থাই এটা ভুল বিচাৰি পাইছে, সেয়েহে আপুনি ২.০ সংস্কৰণীলৈ মাইগ্ৰেট কৰিব নোৱাৰিব। আপুনি তেতিয়া ১.x সংস্কৰণীলৈ ৰোল ব্যাক কৰি আপোনাৰ network চলোৱা অব্যাহত ৰাখিব পাৰে, তোলৈ যেতিয়ালৈকে ভুলটো সলনি নহয়।**_

### ভুল নোহোৱাকৈ (Without Error) {#without-error}

যদি ব্যৱস্থাই কোনো ভুল বিচাৰি নোপোৱা যায়, তেন্তে আপুনি এটা সফলতাৰ বাৰ্ণিক আৰু তলত এটা **Migrate** বাটন দেখিব, যিটোৱে আপোনাক মাইগ্ৰেচন কৰিবলৈ অনুমতি দিয়ে। এই পৃষ্ঠাখনত, আপোনাক পুনৰ বাৰ ডাটাবেছৰ এটা ব্যাকআপ ল'বলৈ মনত পেলাই দিয়া হ'ব, যিটো আমি সজোরে পৰামৰ্শ দিওঁ। যদি আপোনাৰ ইতিমধ্যে ব্যাকআপ আছে, তেন্তে **Migrate** ক্লিক কৰক।

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

আৰু ইমানহে লাগে!

আপুনি হয় উইজৰ্ড ছেটআপটো চলাই কৰি আপোনাৰ network ত আপোনাৰ লোগো আৰু আনবোৰ আপডেট কৰিব পাৰে, অথবা আপুনি Ultimate Multisite ২.০ সংস্কৰণীৰ মেনু আৰু ইয়াৰ নতুন interface নেভিগেট কৰিবলৈ আৰম্ভ কৰিব পাৰে। আগবাঢ়ক আৰু মজা কৰক।
