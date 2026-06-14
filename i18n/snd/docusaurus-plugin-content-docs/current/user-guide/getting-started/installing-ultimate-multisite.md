---
title: Ultimate Multisite نصب ڪرڻ
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite انسٹال ڪرڻ

:::note
هي ट्यूटोरियल मान्नु छ कि तपाईँसँग पहिले नै WordPress Multisite इन्स्टल र सेट गरिएको छ। कसरी गर्ने जान्नको लागि, WP Beginner को [यो ट्यूटोरियल](https://www.wpbeginner.com/glossary/multisite/) हेर्नुहोस्।
:::

## प्लगइन इन्स्टल गर्नु

Ultimate Multisite मुफ्री रूपमा [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) मा उपलब्ध छ।

तपाईंको **Network Admin Dashboard** बाट, जानुहोस्: **Plugins → Add New Plugin**.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (सटीक मिलानका लागि उद्धरण चिह्न राखेर खोज्नुहोस्) खोज्नुहोस् र यो पहिलो नतिजाको रूपमा देखिनेछ। **Install Now** मा क्लिक गर्नुहोस्।

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

इन्स्टल भएपछि, सम्पूर्ण नेटवर्कमा प्लगइन सक्रिय गर्न **Network Activate** मा क्लिक गर्नुहोस्।

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

सक्रिय गरेपछि, तपाईँलाई स्वचालित रूपमा Setup Wizard मा पठाइनेछ।

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## सेटअप विजरड (Setup Wizard)

सेटअप विजरडले तपाईंलाई लगभग १० मिनेटमा Ultimate Multisite कन्फिगर गर्न मद्दत गर्नेछ।

### स्वागत (Welcome)

शुरू गर्न **Get Started** मा क्लिक गर्नुहोस्।

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### इन्स्टल गर्नुअघि जाँचहरू (Pre-install Checks)

यो चरणले तपाईँको सिस्टम जानकारी र WordPress इन्स्टल गरिएको अवस्था जाँच गर्छ ताकि यो Ultimate Multisite को माग पूरा गरिरहेको छ कि छैन, हेर्न सकिन्छ। यदि सबै राम्रो देखिन्छ भने, **Go to the Next Step** मा क्लिक गर्नुहोस्।

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate बटन (v2.6.1+)
যদি Ultimate Multisite ইনস্টল করা থাকে কিন্তু **এখনও নেটওয়ার্ক অ্যাক্টিভেট না করা হয়ে থাকে** — যেমন, আপনি নেটওয়ার্ক প্লাগইন স্ক্রিন থেকে **Network Activate** এর বদলে **Activate** (single-site) ক্লিক করে থাকেন — তাহলে Pre-install Checks ধাপটি এটি সনাক্ত করবে এবং একটি **Network Activate** বাটন দেখাবে।

**Network Activate** ক্লিক করলে আপনার পুরো মাল্টিসাইট নেটওয়ার্কে প্লাগইনটি স্বয়ংক্রিয়ভাবে অ্যাক্টিভেট হয়ে যাবে। একবার অ্যাক্টিভেট হলে, উইজার্ড স্বাভাবিকভাবে ইনস্টলেশন ধাপে চলে যাবে। অ্যাক্টিভেশন অবস্থা ঠিক করার জন্য আপনাকে উইজার্ড থেকে বের হতে হবে না।
:::

### ইনস্টলেশন (Installation)

ইনস্টলার প্রয়োজনীয় ডেটাবে টেবিল তৈরি করবে এবং Ultimate Multisite-এর কাজ করার জন্য `sunrise.php` ফাইলটি ইনস্টল করবে। এগিয়ে যাওয়ার জন্য **Install** ক্লিক করুন।

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### আপনার কোম্পানি (Your Company)

আপনার কোম্পানির তথ্য পূরণ করুন এবং আপনার ডিফল্ট কারেন্সি সেট করুন। এই তথ্যটি আপনার WaaS প্ল্যাটফর্ম জুড়ে ব্যবহার করা হবে। কাজ শেষ হলে **Continue** ক্লিক করুন।

![Your Company configuration step](/img/installation/wizard-your-company.png)

### ডিফল্ট কন্টেন্ট (Default Content)

এই ধাপে আপনি আগে থেকে তৈরি টেমপ্লেট, প্রোডাক্ট এবং অন্যান্য স্টার্টার কন্টেন্ট ইনস্টল করতে পারবেন। Ultimate Multisite-এর ফিচারগুলো সম্পর্কে পরিচিত হওয়ার এটি একটি দারুণ উপায়। ডিফল্ট কন্টেন্ট যোগ করতে **Install** ক্লিক করুন, অথবা যদি আপনি একদম নতুন করে শুরু করতে চান তবে এই ধাপটি এড়িয়ে যেতে পারেন।

![Default content installation step](/img/installation/wizard-default-content.png)

### প্রস্তাবিত প্লাগইন (Recommended Plugins)

ঐচ্ছিকভাবে প্রস্তাবিত সহযোগী প্লাগইনগুলো ইনস্টল করুন। সেগুলোকে যোগ করতে **Install** ক্লিক করুন অথবা চালিয়ে যাওয়ার জন্য এটি এড়িয়ে যান।

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### প্রস্তুত!

هي بس! توهان جو Ultimate Multisite installation مکمل ڪري ڇڏيو آهي. اها وقت اچي وئي آهي ته توهان **Network Admin Dashboard** کان توهان جي Website as a Service platform کي بنانا شروع ڪري سگهو ٿا.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

جنهن سان مزا ڪندا!
