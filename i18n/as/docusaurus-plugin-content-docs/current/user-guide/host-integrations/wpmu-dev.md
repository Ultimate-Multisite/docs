---
title: WPMU DEV ইন্টিগ্ৰেচন
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV ইন্টিগ্ৰেচন {#wpmu-dev-integration}

## সামগ্ৰিক ব্যৱস্থাপন (Overview) {#overview}
WPMU DEV হৈছে এটা সম্পূৰ্ণ WordPress platfrom যিয়ে WordPress সাইটৰ বাবে hosting, plugins আৰু বিভিন্ন সেৱা আগবঢ়ায়। এই ইন্টিগ্ৰেচনটোৱে Ultimate Multisite আৰু WPMU DEV hosting ৰ মাজত স্বয়ংক্রিয় domain syncing আৰু SSL certificate management সক্ষম কৰে।

## বৈশিষ্ট্যসমূহ (Features) {#features}
- স্বয়ংক্রিয় domain syncing
- SSL certificate management
- উন্নত SSL certificate verification প্ৰয়াসসমূহ

## প্ৰয়োজনীয়তা (Requirements) {#requirements}
যদি আপুনি WPMU DEV मा hosting কৰে, তেন্তে এই ইন্টিগ্ৰেচনটোৱে স্বয়ংক্রিয়ভাৱে সেইটো ধৰিব আৰু বিল্ট-ইন API ব্যৱহাৰ কৰিব। যদি আপুনি WPMU DEV मा hosting কৰে, তেন্তে কোনো এটা অতিৰিক্ত configuration কৰাৰ প্ৰয়োজন নহয়।

এই ইন্টিগ্ৰেচনটোৱে `WPMUDEV_HOSTING_SITE_ID` constant আছে নে নাই, সেইটো পৰীক্ষা কৰে, যিটো WPMU DEV मा hosting কৰাৰ সময়ত স্বয়ংক্রিয়ভাৱে সংজ্ঞায়িত হয়।

## সেটআপ কৰাৰ পদ্ধতি (Setup Instructions) {#setup-instructions}

### ১. WPMU DEV Hosting পৰীক্ষা কৰক {#1-verify-wpmu-dev-hosting}

যদি আপুনি WPMU DEV मा hosting কৰে, তেন্তে প্ৰয়োজনীয় constantবোৰ ইতিমধ্যে সংজ্ঞায়িত হোৱা উচিত। অনুগ্ৰহ কৰি পৰীক্ষা কৰক যে:

১. আপোনাৰ environment ত `WPMUDEV_HOSTING_SITE_ID` constant সংজ্ঞায়িত হৈ আছে।
২. আপোনাৰ API access সহ এটা active WPMU DEV membership আছে।

### ২. ইন্টিগ্ৰেচনটো সক্ষম কৰক (Enable the Integration) {#2-enable-the-integration}

১. আপোনাৰ WordPress admin ত, Ultimate Multisite > Settings লৈ যাওক।
২. "Domain Mapping" টোৱেলীলৈ যোৱা।
৩. "Host Integrations" লৈ তললৈ নামি যাওক।
৪. WPMU DEV ইন্টিগ্ৰেচনটো সক্ষম কৰক।
৫. "Save Changes" ক্লিক কৰক।

## ই কেনেকৈ কাম কৰে (How It Works) {#how-it-works}

### Domain Syncing (ডোমেইন Syncing) {#domain-syncing}

যদি Ultimate Multisite ত এটা ডোমেইন ম্যাপ কৰা হয়:

১. ইন্টিগ্ৰেচনটোৱে ডোমেইনটো আপোনাৰ hosting account ত যোগ কৰিবলৈ WPMU DEV API ব্যৱহাৰ কৰে।
২. ই স্বয়ংক্রিয়ভাৱে ডোমেইনটোৰ www সংস্কৰণটোও যোগ কৰে।
৩. WPMU DEV ले ডোমেইন configuration আৰু SSL certificate issuance ব্যৱস্থাপনা কৰে।

### SSL Certificate Management (SSL সার্টিফিকেট ব্যৱস্থাপনা) {#ssl-certificate-management}

এই ইন্টিগ্ৰেচনটো WPMU DEV hosting ৰ বাবে SSL certificate verification প্ৰয়াসৰ সংখ্যা বৃদ্ধি কৰিবলৈ configure কৰা হৈছে, কাৰণ SSL certificate সমূহক issued আৰু install কৰিবলৈ কিছু সময় লাগিব পাৰে। ডিফল্টভাৱে, ই SSL certificate verification ৰ বাবে ৫ টা standard প্ৰয়াসৰ তুলনাত ১০ টা প্ৰয়াসলৈ চেষ্টা কৰিব।

## গুৰুত্বপূৰ্ণ টোকা (Important Notes) {#important-notes}

### ডোমেইন আঁতৰোৱা (Domain Removal) {#domain-removal}

বৰ্তমান, WPMU DEV API ত ডোমেইন আঁতৰোৱাৰ কোনো উপায় দিয়া নাই। যদি Ultimate Multisite ত এটা ডোমেইন mapping আঁতৰোৱা হয়, তেন্তে ডোমেইনটো আপোনাৰ WPMU DEV hosting account ত থাকিব। যদি প্ৰয়োজন হয়, তেন্তে আপুনি ইয়াক WPMU DEV hosting dashboard ৰ পৰা হাতেৰে আঁতৰাব লাগিব।

### API Authentication (API প্ৰমাণীকৰণ) {#api-authentication}

এই ইন্টিগ্ৰেচনটোৱে WPMU DEV API key ব্যৱহাৰ কৰে, যিটো আপোনাৰ WordPress database ত `wpmudev_apikey` option হিচাপে সংৰক্ষিত হৈ থাকে। আপুনি আপোনাৰ সাইটক WPMU DEV লগত সংযোগ কৰাৰ সময়ত ইয়াক স্বয়ংক্রিয়ভাৱে সেট কৰা হয়।

## সমস্যা সমাধান (Troubleshooting) {#troubleshooting}

### API Connection Issues (API সংযোগ সমস্যা) {#api-connection-issues}
- পৰীক্ষা কৰক যে আপোনাৰ সাইটটো WPMU DEV লগত সঠিকভাৱে সংযোগ হৈ আছে নেকি।
- নিশ্চিত কৰক যে আপোনাৰ WordPress database ত `wpmudev_apikey` option সেট কৰা আছে।
- নিশ্চিত কৰক যে আপোনাৰ WPMU DEV membership active আছে।

### SSL Certificate Issues (SSL সার্টিফিকেট সমস্যা) {#ssl-certificate-issues}
- WPMU DEV লৈ SSL certificate issued কৰিবলৈ কিছু সময় লাগিব পাৰে (সাধাৰণতে ৫-১৫ মিনিট)।
- ইন্টিগ্ৰেচনটোৱে SSL certificate সমূহৰ বাবে ১০ টা লৈকে পৰীক্ষা কৰিবলৈ configure কৰা হৈছে।
- যদি বহু প্ৰয়াসৰ পিছতো SSL certificate issued নহয়, তেন্তে WPMU DEV support লগত যোগাযোগ কৰক।

### Domain Not Added (ডোমেইন যোগ নহ'লে) {#domain-not-added}
- কোনো error message আছে নেকি, তাৰ বাবে Ultimate Multisite logs পৰীক্ষা কৰক।
- পৰীক্ষা কৰক যে ডোমেইনটো ইতিমধ্যে WPMU DEV ত যোগ কৰা নাই।
- নিশ্চিত কৰক যে আপোনাৰ WPMU DEV hosting plan ত আপুনি যিমান ডোমেইন যোগ কৰিছে, সেই সংখ্যাটো সমৰ্থন কৰে।
