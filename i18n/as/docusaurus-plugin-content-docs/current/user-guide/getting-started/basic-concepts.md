---
title: মৌলিক ধাৰণাসমূহ
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# आधारभूत ধাৰণাসমূহ {#basic-concepts}

যি কোনো নতুন WordPress Multisite ব্যৱহাৰকাৰী বা যিজন ব্যক্তিয়ে এইবাৰ Ultimate Multisite ব্যৱহাৰ কৰিবলৈ আৰম্ভ কৰিছে, তেওঁৰ বাবে প্ৰথমতে বহু নতুন শব্দ আৰু বাক্যৰ সমৰহেৰে মোকাবিলা কৰিবলগীয়া হ'ব পাৰে। এইবোৰ শিকি ল'ব এক গুৰুত্বপূৰ্ণ কাম, কাৰণ আপুনি প্ল্যাটফর্মটো আৰু ই কেনেকৈ এটা সম্পূৰ্ণ হিচাপে কাম কৰে, সেয়া বুজি উঠিব লাগিব।

এই প্ৰবন্ধত, আমি WordPressৰ কিছুমান মূল ধাৰণা সংজ্ঞায়িত আৰু ব্যাখ্যা কৰাৰ চেষ্টা কৰিম। ইয়াৰ কিছুমান ব্যৱহাৰকাৰীসকলৰ বাবে অধিক প্ৰাসংগিক, আন কিছুমান ডেভেলপাৰসকলৰ বাবে, আৰু কিছুমান দুয়োটাৰ বাবে।

## WordPress Multisite {#wordpress-multisite}

WordPress **Multisite** হৈছে এনে এটা ধৰণৰ WordPress installasyon যিয়ে আপোনাক এটা একক WordPress dashboardৰ পৰা একাধিক ওয়েবসাইটৰ এটা নেটৱৰ্ক সৃষ্টি কৰিবলৈ আৰু ব্যৱস্থাপনা কৰিবলৈ অনুমতি দিয়ে। আপুনি সাইটৰ সংখ্যা, বৈশিষ্ট্য, থীম, আৰু ব্যৱহাৰকাৰীৰ ভূমিকা (user roles) সহ সকলোবোৰ ব্যৱস্থাপনা কৰিব পাৰে। ইয়াৰ দ্বাৰা শতিকা আৰু হাজাৰ হাজাৰ সাইট ব্যৱস্থাপনা কৰিব পৰা যায়।

## Network {#network}

WordPressৰ ক্ষেত্ৰত, এটা multisite network হৈছে এনে এটা স্থান য'ত এটা একক dashboardৰ পৰা বহুতো **subsites** ব্যৱস্থাপনা কৰিব পাৰি। যদিও বিভিন্ন হোস্টিং প্ৰোভাইডেৰে multisite network সৃষ্টি কৰাৰ পদ্ধতি বেলেগ, কিন্তু শেষৰ ফলটো সাধাৰণতে **wp-config.php** ফাইলত কিছুমান অতিৰিক্ত নিৰ্দেশনা যোগ কৰা হয়, যাতে WordPress-ক জনা যায় যে ই এই বিশেষ ধৰণৰ ব্যৱহাৰ কৰি আছে।

multisite network আৰু এটা একক WordPress installasyonৰ মাজত কিছুমান স্পষ্ট পাৰ্থক্য আছে, যিবোৰ আমি চমুভাৱে আলোচনা কৰিম।

## Database {#database}

Database হৈছে এটা সুসংগঠিত, সুপৰিকল্পিত তথ্যৰ সংহতিকো। কম্পিউটিংৰ ভাষাত, database মানে হৈছে তথ্য সংৰক্ষণ আৰু সুসংগঠিত কৰিবলৈ ব্যৱহৃত সফ্টৱেৰ। ইয়াক এটা ফাইল কেবিনেট হিচাপে ভাবক, য'ত আপুনি বিভিন্ন অংশত 'টেবিল' (tables) বুলি নাম দিয়া স্থানত তথ্য সংৰক্ষণ কৰে।

WordPress Multisite এটা database ব্যৱহাৰ কৰে আৰু প্ৰতিটো subsite-ৰ নিজস্ব টেবুল থাকে, য'ত prefix-ত blog id থাকে। গতিকে, যেতিয়া আপুনি এটা network installasyon কৰে আৰু এটা subsite সৃষ্টি কৰে, তেতিয়া আপোনাৰ database ত এই টেবুলবোৰ থাকিব লাগে:

_wp_1_options_ \- প্ৰথম subsite-ৰ বাবে options টেবুল

_wp_2_options_ \- দ্বিতীয় subsite-ৰ বাবে options টেবুল

## Hosting provider {#hosting-provider}

এটা hosting provider হৈছে এনে এটা কোম্পানী যিয়ে ব্যৱসায় আৰু ব্যক্তিগত মানুহক World Wide Webৰ জৰিয়তে তেওঁলোকৰ ওয়েবসাইট উপলব্ধ কৰাত সহায় কৰে। web hosting provider-সকলে যি সেৱা আগবঢ়ায়, সেয়া ভিন্ন হ'ব পাৰে, কিন্তু সাধাৰণতে ইয়াত ওয়েবসাইট ডিজাইন, এটা হোষ্টত ষ্টোৰেজ স্পেছ, আৰু ইন্টাৰনেটৰ সৈতে সংযোগৰ ব্যৱস্থা থাকে।

## Domain {#domain}

এটা domain name হৈছে সেই ঠিকনা যিটো ব্যৱহাৰকাৰীসকলে আপোনাৰ সাইটলৈ যাবলৈ ব্যৱহাৰ কৰে। ই web browser-ক কয় যে তেওঁৰ সাইট ক'ত বিচাৰিব লাগিব। এটা পথৰ ঠিকনাৰ দৰেই, এটা domain হৈছে অনলাইনত আপোনাৰ ওয়েবসাইটলৈ যোৱাৰ উপায়। আৰু, আপোনাৰ দোকানৰ সন্মুখত এটা চিহ্ন থকাৰ দৰেই। যদি আপুনি আমাৰ ওয়েবসাইটলৈ যাব বিচাৰে, তেন্তে আপুনি আমাৰ web address-টো আপোনাৰ browser-ৰ address-ত টাইপ কৰিব লাগিব, যিটো হৈছে [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com), য'ত [**ultimatemultisite.com**](http://ultimatemultisite.com) হৈছে domain name।

## Subdomain {#subdomain}

এটা subdomain হৈছে মূল domainৰ তলত থকা এটা ধৰণৰ ওয়েবসাইটৰ কাঠামো, কিন্তু ওয়েবসাইটত বিষয়বস্তু সুসংগঠিত কৰিবলৈ ফোল্ডাৰ ব্যৱহাৰ কৰাৰ পৰিৱৰ্তে, ই এক প্ৰকাৰৰ নিজা ওয়েবসাইট লৈ যায়। ইয়াক [**https://site1.domain.com/**](https://site1.domain.com/) হিচাপে উপস্থাপন কৰা হয়, য'ত _site1_ হৈছে subdomain name আৰু [_domain.com_](http://domain.com) হৈছে মূল domain।

## Subdirectory {#subdirectory}

এটা subdirectory হৈছে এটা মূল domainৰ তলত থকা এটা ধৰণৰ ওয়েবসাইটৰ কাঠামো যিয়ে ওয়েবসাইটত বিষয়বস্তু সুসংগঠিত কৰিবলৈ ফোল্ডাৰ ব্যৱহাৰ কৰে। এটা subdirectory হৈছে এটা subfolderৰ দৰেই আৰু এই দুটা নাম একেলগে ব্যৱহাৰ কৰিব পাৰি। ইয়াক [**https://domain.com/site1**](https://domain.com/site1) হিচাপে উপস্থাপন কৰা হয়, য'ত _site1_ হৈছে subdirectory name আৰু [_domain.com_](http://domain.com) হৈছে মূল domain।

## Subsite {#subsite}

Subsite হৈছে এটা শিশু সাইট (child site) যিটো আপুনি এটা Multisite network ত সৃষ্টি কৰে। ই এটা **subdomain** হ'ব পাৰে বা **subdirectory** হ'ব পাৰে, সেয়া আপোনাৰ WordPress Multisite installasyon কেনেকৈ কনফিগাৰেট কৰা হৈছে তাৰ ওপৰত নিৰ্ভৰ কৰে।

## Super Admin {#super-admin}

এটা WordPress Super Admin হৈছে এটা ব্যৱহাৰকাৰীৰ ভূমিকা (user role) যিয়ে এটা Multisite network ত থকা সকলো subsite ব্যৱস্থাপনা কৰাৰ সম্পূৰ্ণ ক্ষমতা দিয়ে। Multisite ব্যৱহাৰকাৰীসকলৰ বাবে, ই আপোনাৰ WordPress installasyonলৈ দিয়া **উচ্চতম স্তৰৰ প্ৰৱেশ (highest level of access)**।

## Plugin {#plugin}

সাধাৰণতে, এটা plugin হৈছে এটা কোডৰ সংহতিকো যিয়ে আপোনাৰ WordPress সাইটত অতিৰিক্ত কাৰ্যক্ষমতা যোগ কৰে। ই কেৱল লগইন লোগো সলনি কৰাৰ দৰে সৰল হ'ব পাৰে, অথবা e-commerce কাৰ্যক্ষমতা যোগ কৰাৰ দৰে জটিল হ'ব পাৰে। _Woocommerce আৰু Contact Form_ হৈছে plugin-ৰ উদাহৰণ।

এটা WordPress Multisite ত, plugin-সমূহ কেৱল Super Admin-ৰ দ্বাৰা network admin dashboardৰ পৰাহে install কৰিব পাৰি। Subsite Admin-সকলে কেৱল তেওঁলোকৰ subsiteৰ ভিতৰত plugin activate আৰু deactivate কৰিব পাৰে।

## Themes {#themes}

এটা WordPress theme হৈছে ফাইলৰ এটা সংহতিকো (_graphics, style sheets, আৰু code_) যিয়ে সাইটটোৰ সামগ্ৰিক ৰূপক নিৰ্ধাৰণ কৰে। ই ফণ্টৰ শৈলী, পেজৰ লেআউট, ৰং আদিৰ দৰে সকলো front-end styling যোগান ধৰে।

pluginৰ দৰেই, WordPress Multisite ত themes কেৱল Super Admin-ৰ দ্বাৰা install কৰিব পাৰি আৰু subsite admin-সকলে subsite স্তৰত activate কৰিব পাৰে।

## Site Template {#site-template}

**Site Template** হৈছে এটা boilerplate site যিটো আপোনাৰ network ত নতুন সাইট সৃষ্টি কৰাৰ সময়ত এটা ভিত্তি হিচাপে ব্যৱহাৰ কৰিব পাৰি।

ইয়াৰ অৰ্থ হ'ল যে আপুনি এটা ভিত্তি সাইট সৃষ্টি কৰিব পাৰে, বিভিন্ন plugin activate কৰিব পাৰে, এটা active theme সেট কৰিব পাৰে, আৰু ইয়াক যিকোনো ধৰণে কাস্টমাইজ কৰিব পাৰে। তাৰ পিছত, যেতিয়া আপোনাৰ গ্ৰাহকে এটা নতুন একাউণ্ট সৃষ্টি কৰে, তেতিয়া তেওঁৰ ওচৰত কোনো অৰ্থপূৰ্ণ বিষয়বস্তু নথকা ডিফল্ট WordPress সাইট পোৱাৰ পৰিৱৰ্তে, তেওঁৰ ওচৰত আপোনাৰ ভিত্তি সাইটৰ এটা প্ৰতিলিপি পোৱা যাব, য'ত সকলো কাস্টমাইজেশ্যন আৰু বিষয়বস্তু ইতিমধ্যে থকা থাকে।

## Domain Mapping {#domain-mapping}

WordPressৰ সৈতে **Domain mapping** হৈছে এটা উপায় যাৰ দ্বাৰা এটা ওয়েবসাইটৰ ঠিকনাৰ জৰিয়তে ব্যৱহাৰকাৰীক সঠিক হোষ্টলৈ পুনৰ স্থানান্তৰিত কৰা হয়। এটা WordPress Multisite ত, subsite-সমূহ হয় এটা subdirectory ব্যৱহাৰ কৰি বা এটা subdomain ব্যৱহাৰ কৰি সৃষ্টি কৰা হয়। domain mapping কি কৰে भने, ই subsite ব্যৱহাৰকাৰীক [**joesbikeshop.com**](http://joesbikeshop.com) जस्तो এটা টপ-লেভেল domain ব্যৱহাৰ কৰি তেওঁলোকৰ সাইটৰ ঠিকনা অধিক পেছাদাৰী দেখুৱাবলৈ অনুমতি দিয়ে।

## SSL {#ssl}

SSL মানে হৈছে **Secure Sockets Layer**। ই এটা ডিজিটেল সার্টিফিকেট যিয়ে এটা ওয়েবসাইটৰ পৰিচয় প্ৰমাণ কৰে আৰু এটা এনক্ৰিপ্টেড সংযোগ (encrypted connection) সক্ষম কৰে। আজিৰ দিনত ইয়াক ইন্টাৰনেট সংযোগক সুৰক্ষিত ৰাখিবলৈ আৰু দুটা ব্যৱস্থাৰ মাজত প্ৰেৰণ কৰা কোনো সংবেদনশীল তথ্যক সুৰক্ষিত কৰিবলৈ এটা মানক প্ৰযুক্তি হিচাপে ব্যৱহাৰ কৰা হয়, যাতে কোনো অপৰাধীসকলে স্থানান্তৰিত কোনো তথ্য, সম্ভাব্য ব্যক্তিগত বিৱৰণ সহ, পঢ়ি বা সলনি কৰিব নোৱাৰে। আধুনিক browser-সমূহে SSL দাবী কৰে, যাৰ বাবে ওয়েবসাইট সৃষ্টি কৰা আৰু সচল ৰখাৰ সময়ত ই অত্যাৱশ্যকীয়।

## Media {#media}

Media হৈছে ছবি, অডিঅ’, ভিডিঅ’ আৰু অন্যান্য ফাইল যিয়ে এটা ওয়েবসাইট গঠন কৰে।

WordPress Multisite ত network সাইটসমূহে এটা একক database ভাগ কৰি ব্যৱহাৰ কৰে, কিন্তু media ফাইলৰ বাবে তেওঁলোকে filesystem ত পৃথক পথ (separate paths) ৰখায়।

সাধাৰণ WordPress স্থানটো (wp-content/uploads) একেই থাকে; কিন্তু ইয়াৰ পথটো network সাইটৰ অনন্য ID প্ৰতিফলিত কৰিবলৈ সলনি কৰা হয়। ফলস্বৰূপে, এটা network সাইটৰ বাবে media ফাইলবোৰ wp-contents/uploads/site/[id] হিচাপে দেখুৱдено হয়।

## Permalinks {#permalinks}

Permalinks হৈছে আপোনাৰ সাইটৰ ভিতৰত থকা আপোনাৰ ব্যক্তিগত ব্লগ পোষ্ট বা পেজৰ স্থায়ী URL। Permalinks ক **pretty links** বুলিও কোৱা হয়। ডিফল্টভাৱে, WordPress URL-সমূহে query string format ব্যৱহাৰ কৰে, যিটো এনেকুৱা দেখায়:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite {#ultimate-multisite}

Ultimate Multisite হৈছে এটা WordPress plugin, যিটো WordPress Multisite install-ৰ বাবে বনোৱা হৈছে, যিয়ে আপোনাৰ WordPress install-ক এটা প্ৰিমিয়াম নেটৱৰ্ক সাইটলৈ ৰূপান্তৰ কৰে – যেনে [WordPress.com](https://WordPress.com) – যাৰ দ্বাৰা গ্ৰাহকসকলে মাহে, ত্রৈমাসিকে, বা বছৰীয়াকৈ ফিৰ জৰিয়তে সাইট সৃষ্টি কৰিব পাৰে (আপুনি বিনামূলীয়া প্লেনো সৃষ্টি কৰিব পাৰে)।

## Checkout Form {#checkout-form}

Checkout Form হৈছে এটা একক বা বহু-ধাপৰ অৰ্ডাৰ ফৰ্ম যিয়ে Ultimate Multisite registrationৰ জৰিয়তে subsite, membership, আৰু user account সৃষ্টি কৰে। ই বিভিন্ন ফিল্ড আৰু পেমেন্ট ফৰ্মৰে গঠিত যিটো ব্যৱহাৰকাৰীয়ে নাম লেখাওঁৰ সময়ত জমা কৰিব লাগিব।

## Webhook {#webhook}

এটা webhook (যাক web callback বা HTTP push API বুলিও কোৱা হয়) হৈছে এটা উপায় যাৰ দ্বাৰা এটা অ্যাপले আন অ্যাপলikationলৈ real-time তথ্য যোগান ধৰে। এটা webhook-এ তথ্য আন অ্যাপলikationলৈ ঘটনা ঘটি যোৱাৰ লগে লগে প্ৰেৰণ কৰে, যাৰ অৰ্থ হ'ল যে আপুনি তাৎক্ষণিকভাৱে তথ্য পায়।

**Ultimate Multisite webhooks** এ অসীম সম্ভাৱনা মুকলি কৰে, যাৰ ফলত network admin-সকলে সকলো ধৰণৰ আচৰণীয় কিন্তু উপযোগী ইন্টিগ্ৰেচন কৰিব পাৰে, বিশেষকৈ যদি ইয়াক _Zapier আৰু IFTTT_ जस्ता সেৱাসমূহৰ সৈতে ব্যৱহাৰ কৰা হয়।

## Events {#events}

এটা Event হৈছে এটা কাৰ্য্য যিটো ব্যৱহাৰকাৰী বা আন কোনো উৎসৰ কাৰ্য্যৰ ফলত ঘটে, যেনে মাউছ ক্লিক। Ultimate Multisite-এ আপোনাৰ সমগ্ৰ network ত ঘটি থকা সকলো event আৰু log-ৰ এটা ৰেকৰ্ড ৰাখে। ই আপোনাৰ multisite ত ঘটি থকা বিভিন্ন কাৰ্য্যকলাপৰ গতিবিধি অনুসৰণ কৰে, যেনে প্লেন সলনি কৰা।
