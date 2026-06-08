---
title: Ultimate Multisite স্থাপন কৰি থকা
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite इन्स्टल কৰা

:::note
এই ট्युटोरियलले मान्छ যে আপুনি पहिले नै WordPress Multisite इन्स्टल আৰু কনফিগার কৰি লৈছে। কেনেকৈ কৰিব লাগে জানিবলৈ, WP Beginner-ৰ এই ট्युटोरিয়ালটো চাওক: [this tutorial](https://www.wpbeginner.com/glossary/multisite/).
:::

## Plugin इन्स्टल কৰা

Ultimate Multisite [WordPress.org]-ত বিনামূলীয়াকৈ উপলব্ধ।

আপোনাৰ **Network Admin Dashboard** बाट, **Plugins → Add New Plugin** লৈ যাওক।

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (সঠিক মিলৰ বাবে কোৱটেৰে) বিচাৰক আৰু ই প্ৰথম ফলাফল হিচাপে দেখিব। **Install Now** ক্লিক কৰক।

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

ইনस्टल কৰাৰ পিছত, আপোনাৰ সমগ্ৰ নেটৱৰ্কত প্লাগইনটো aktivate কৰিবলৈ **Network Activate** ক্লিক কৰক।

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

অ্যাক্টিভেট কৰাৰ পিছত, আপোনাক স্বয়ংক্রিয়ভাৱে Setup Wizard লৈ পুনৰ পথ প্ৰদৰ্শন কৰা হ'ব।

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## Setup Wizard

Setup Wizard-এ আপোনাক প্ৰায় ১০ মিনিটৰ ভিতৰত Ultimate Multisite কনফিগার কৰাত সহায় কৰিব।

### Welcome

শুরু কৰিবলৈ **Get Started** ক্লিক কৰক।

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### Pre-install Checks

এই ধাপটোৱে আপোনাৰ ছিষ্টেমৰ তথ্য আৰু WordPress इन्ষ্টলেচন পৰীক্ষা কৰে যাতে ই Ultimate Multisite-ৰ প্ৰয়োজনীয়তা পূৰণ কৰে। যদি সকলো ঠিক লাগে, তেন্তে **Go to the Next Step** ক্লিক কৰক।

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate button (v2.6.1+)
যদি Ultimate Multisite इन्स्टल হৈছে কিন্তু **আহিম নেটৱৰ্ক-অ্যাক্টিভেট** হোৱা নাই — উদাহৰণস্বৰূপে, যদি আপুনি নেটৱৰ্ক প্লাগইন স্ক্ৰীণৰ পৰা **Network Activate** বুলি কৰাৰ সলনি **Activate** (single-site) ক্লিক কৰিছিল — তেন্তে Pre-install Checks ধাপটোৱে ইয়াক ধৰিব আৰু এটা **Network Activate** বাটন দেখুৱাব।

**Network Activate** ক্লিক কৰিলে প্লাগইনটো স্বয়ংক্রিয়ভাৱে আপোনাৰ সমগ্ৰ multisite নেটৱৰ্কত aktivate হৈ যায়। aktivate হোৱাৰ পিছত, wizard-এ সাধাৰণভাৱে इन्ষ্টলেচন ধাপলৈ আগুৱাই যায়। aktivation state ঠিক কৰিবলৈ আপুনি wizard এৰি যাব প্ৰয়োজন নাই।
:::

### Installation

ইনষ্টেলেৰে প্ৰয়োজনীয় ডাটাবেছ টেবুলবোৰ সৃষ্টি কৰিব আৰু `sunrise.php` ফাইলটো ইনষ্টল কৰিব যিটো Ultimate Multisite-ক কাৰ্য্য কৰিবলৈ লাগে। আগুৱাই যাবলৈ **Install** ক্লিক কৰক।

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### Your Company

আপোনাৰ কোম্পানীৰ তথ্য ভৰাওক আৰু আপোনাৰ ডিফল্ট currrency সেট কৰক। এই তথ্যবোৰ আপোনাৰ WaaS platfrom ত ব্যৱহাৰ কৰা হ'ব। হোৱা শেষ হ'লে **Continue** ক্লিক কৰক।

![Your Company configuration step](/img/installation/wizard-your-company.png)

### Default Content

এই ধাপটোৱে আপোনাক আগতে নিৰ্ধাৰিত টেমপ্লেট, প্ৰডাক্ট আৰু আন আৰম্ভণি বিষয়বস্তু (starter content) ইনষ্টল কৰিবলৈ দিয়ে। Ultimate Multisite-ৰ বৈশিষ্ট্যবোৰ চিনাকি হোৱাৰ বাবে এইটো এটা ভাল উপায়। ডিফল্ট বিষয়বস্তু যোগ কৰিবলৈ **Install** ক্লিক কৰক, অথবা যদি আপুনি শূন্যৰ পৰা আৰম্ভ কৰিব বিচাৰে তেন্তে এই ধাপটো এৰি যাব পাৰে।

![Default content installation step](/img/installation/wizard-default-content.png)

### Recommended Plugins

ঐচ্ছিকভাৱে পৰামৰ্শ দিয়া সহযোগী প্লাগইনবোৰ ইনষ্টল কৰক। যোগ কৰিবলৈ **Install** ক্লিক কৰক বা আগুৱাই যাবলৈ এৰি যাব পাৰে।

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### Ready!

এইটোৱেই! আপোনাৰ Ultimate Multisite इन्ষ্টলেচন সম্পূৰ্ণ হ'ল। এতিয়া আপুনি **Network Admin Dashboard** बाट আপোনাৰ Website as a Service platfrom নিৰ্মাণ কৰিবলৈ আৰম্ভ কৰিব পাৰে।

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

আগুৱাই যাওক আৰু মজা কৰক!
