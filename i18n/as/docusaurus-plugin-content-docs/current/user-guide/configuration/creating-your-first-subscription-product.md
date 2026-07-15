---
title: আপোনাৰ প্ৰথম সাবস্ক্রিপচন প্ৰডাক্ট সৃষ্টি কৰা
sidebar_position: 6
_i18n_hash: a4a36ed896f6691eebb099208a746cd7
---
# আপোনাৰ প্ৰথম সাবস্ক্রিপচন প্ৰডাক্ট (v2) সৃষ্টি কৰা

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো কেৱল Ultimate Multisite version 2.x ব্যৱহাৰকাৰীসকলৰ বাবে। যদি আপুনি version 1.x ব্যৱহাৰ কৰি আছে,**_ **_**এই article টো চাওক**_**.

আপোনাৰ network চলাই আৰম্ভ কৰিবলৈ আৰু সম্ভাৱ্য ব্যৱহাৰকাৰীসকলক আপোনাৰ সেৱাসমূহ বিক্ৰী কৰিবলৈ, আপোনাৰ বিভিন্ন সাবস্ক্রিপচন বিকল্প থাকিব লাগিব। এই প্ৰডাক্টবোৰ কেনেকৈ সৃষ্টি কৰিব? আপুনি কি ধৰণৰ প্ৰডাক্ট আগবঢ়াব পাৰে? এই article টোত, আমি প্ৰডাক্টসমূহৰ বিষয়ে আপুনি জানিবলগীয়া সকলো কথা কওঁ।

## Product Type (প্ৰডাক্টৰ ধৰণ) {#product-type}

Ultimate Multisite লৈ আপুনি আপোনাৰ ক্লায়েন্টসকলক দুটা ধৰণৰ প্ৰডাক্ট আগবঢ়াব পাৰে: **plans** আৰু **add-ons** **(Order Bump)**। Add-ons ক দুটা ধৰণত ভাগ কৰিব পাৰি: **packages** আৰু **services**। আমি তলত তেওঁলোকৰ পাৰ্থক্য আৰু বিশেষত্ব দেখুৱাম।

*   **Plans** : Ultimate Multisite ৰ মৌলিক প্ৰডাক্ট। আপোনাৰ ক্লায়েন্টৰ কেৱল এটা plan লৈহে membership থাকিব পাৰে। এটা plan-এ আপোনাৰ ক্লায়েন্টক এটা বা তাতকৈ অধিক site (আপোনাৰ plan editing page-ত দিয়া configuration ওপৰত নিৰ্ভৰ কৰে) দিয়ে, যিটো আপুনি আপোনাৰ প্ৰডাক্ট editing page-ত দিয়া limitation সমূহৰ ওপৰত ভিত্তি কৰি হয়।

*   **Packages** : add-ons যিয়ে Ultimate Multisite plan-ৰ কাৰ্যক্ষমতাত (functionalities) পোনপটীয়া প্ৰভাৱ পেলায়। ইয়াৰ দ্বাৰা limitation সলনি কৰিব পাৰি বা নতুন resource, plugin বা theme যোগ কৰিব পাৰি যিটো ক্লায়েন্টয়ে মূল plan লৈছিল। উদাহৰণস্বৰূপে, এটা basic plan-এ মাহে ১,০০০ visit কৰিব পাৰিব আৰু আপুনি এটা package উপলব্ধ কৰিব পাৰে যিয়ে এই সংখ্যাটো ১০,০০০ লৈ বৃদ্ধি কৰে।

*   **Services:** add-ons যিয়ে Ultimate Multisite ৰ কাৰ্যক্ষমতাত কোনো পৰিৱৰ্তন নকৰে। ইয়াৰ পৰিৱৰ্তে, এইবোৰ এনে কিছুমান কাৰ্য যিটো আপুনি আপোনাৰ ক্লায়েন্টৰ বাবে তেওঁলোকে লৈ থকা plan-ৰ উপৰিও কৰি দিয়ে। উদাহৰণস্বৰূপে, আপোনাৰ গ্ৰাহকে এটা plan কিনিব পাৰে যিয়ে এটা site লৈহে অনুমতি দিয়ে আৰু লগতে এটা অতিৰিক্ত সেৱাৰ বাবেও ধন দিয়ে যিয়ে এই site টো ডিজাইন কৰিব।

## Managing Products (প্ৰডাক্ট ব্যৱস্থাপনা) {#managing-products}

বহু লোকৰ বাবে Ultimate Multisite ৰ **Products** টো (Ultimate Multisite > Products) এটা পৰম্পৰাগত hosting environment-ৰ plan লৈ তুলনা কৰিব পাৰি।

Ultimate Multisite ত Products টোৱে এটা নিৰ্দিষ্ট প্ৰডাক্ট বা সেৱাৰ বাবে প্ৰযোজ্য গঠন (construct) আৰু limitation সংজ্ঞায়িত কৰে। এনে গঠনবোৰত প্ৰডাক্ট বা সেৱাৰ বৰ্ণনা, মূল্য, ট্ৰাকছ (taxes), আৰু অনুমতি (permissions) অন্তৰ্ভুক্ত থাকে।

এই অংশটোৱে Ultimate Multisite ৰ এই গুৰুত্বপূৰ্ণ ভিত্তিটো বুজিবলৈ আপোনাক সহায় কৰিব।

![Products list page](/img/config/products-list.png)

## Adding Products (প্ৰডাক্ট যোগ কৰা) {#adding-products}

সেয়া plan হ'ব, package হ'ব, বা service হ'ব, এটা নতুন item সংজ্ঞায়িত কৰাৰ প্ৰৱেশ পথটো হৈছে **Ultimate Multisite > Products > Add Product**।

![Add Product button](/img/config/product-add-button.png)

এই interface টোত দুটা প্ৰধান অংশ আছে। বাঁহফালে কেইবাটাও tabs আছে যিয়ে প্ৰডাক্ট সংজ্ঞায়িত কৰাত সহায় কৰে আৰু সোঁফালে কেইটামান section আছে যিয়ে প্ৰডাক্টৰ মূল মূল্য, ইয়াৰ active state, আৰু প্ৰডাক্টৰ image সংজ্ঞায়িত কৰে।

![Product edit page overview](/img/config/product-edit-full.png)

### Description (বৰ্ণনা) {#description}

প্ৰডাক্টৰ মূল তথ্যটো এটা প্ৰডাক্টৰ নাম আৰু বৰ্ণনা যোগ কৰি সংজ্ঞায়িত কৰিব পাৰি। এই identifier সমূহ সেই সকলো ঠাইত প্ৰদৰ্শিত হয় য'ত প্ৰডাক্টৰ তথ্যৰ প্ৰয়োজন হয়, যেনে plan আৰু pricing selection, invoices, upgrades, আৰু ইয়াৰ দৰে।

![Product description section](/img/config/product-description.png)

### Pricing Type (মূল্য নিৰ্ধাৰণৰ ধৰণ) {#pricing-type}

interface টোৰ সোঁফালে, মূল মূল্য নিৰ্ধাৰণ কৰিব পাৰি।

![Pricing and save section](/img/config/product-pricing-save.png)

Ultimate Multisite ত তিনিটা ভিন্ন মূল্য নিৰ্ধাৰণৰ ধৰণ সমৰ্থন কৰে। **paid** বিকল্পটোৱে network administrator-ক প্ৰডাক্টটোৰ মূল্য আৰু billing frequency সম্পৰ্কে তথ্য দিবলৈ কয়।

### Pricing (মূল্য) {#pricing}

এই component টোৱে মূল প্ৰডাক্টৰ মূল্য আৰু billing interval সংজ্ঞায়িত কৰে।

![Pricing and save section](/img/config/product-pricing-save.png)

গতিকে, $29.99 ৰ এটা উদাহৰণ মূল্য, য'ত ১ महীয়া set কৰা আছে, প্ৰতি মাহে $29.99 বিল কৰিব। একেদৰে, ৩ महীয়া set কৰা $89.97 ৰ মূল্যটো প্ৰতি ত্রৈমাসিক সেই পৰিমাণ বিল কৰিব।

### Billing Cycles (বিলিং চক্ৰ) {#billing-cycles}

এই billing cycles section টোৱে ওপৰত উল্লেখ কৰা billing interval ৰ ফ্ৰিকৱেঞ্চী (frequency) নিৰ্ধাৰণ কৰে আৰু সাধাৰণতে চুক্তি বা নিৰ্দিষ্ট সময়ৰ লগে লগে বুজি পোৱা যায়।

![Pricing and save section](/img/config/product-pricing-save.png)

উদাহৰণস্বৰূপে, ১ महীয়া interval আৰু ১২ billing cycles লৈ $29.99 ৰ এটা প্ৰডাক্ট মূল্যৰ বাবে, ই অহা ১২ মাহৰ বাবে প্ৰতি মাহে $29.99 বিল কৰিব। আন ভাষাত ক'বলৈ গ'লে, এনে এটা set-up এ ১২ মাহৰ বাবে প্ৰতি মাহে $29.99 ৰ এটা নিৰ্দিষ্ট মূল্যৰ এটা মেয়াদ স্থাপন কৰিব আৰু তাৰ পিছত বিলিং বন্ধ কৰি দিয়ে।

### Trial Period (প্ৰৱেশকাল) {#trial-period}

Offer trial toggle সক্ষম কৰিলে network administrator-ক প্ৰডাক্টটোৰ বাবে এটা trial period সংজ্ঞায়িত কৰিবলৈ দিয়ে।

![Pricing and save section](/img/config/product-pricing-save.png)

Trial period চলাৱে, গ্ৰাহকসকলে প্ৰডাক্টটো ব্যৱহাৰ কৰিবলৈ মুক্ত আৰু trial period শেষ নহ'লৈকে তেওঁলোকক বিল কৰা নহ'ব।

### Setup Fee (স্থাপন মূল্য) {#setup-fee}

আপুনি আপোনাৰ plan ত এটা setup feeো লগোৱা পাৰে।

![Pricing and save section](/img/config/product-pricing-save.png)

এৰ মানে হ'ল যে আপোনাৰ ক্লায়েন্টয়ে প্ৰথম বিলিংত এটা অতিৰিক্ত পৰিমাণ (plan মূল্যৰ উপৰিও) পৰিশোধ কৰিব যিটো এই section ত আপুনি সংজ্ঞায়িত কৰা fee লগত মিলিব।

### Active (সক্ৰিয়) {#active}

Active toggle টোৱে প্ৰডাক্টটো নতুন sign-up কৰা গ্ৰাহকসকলৰ বাবে উপলব্ধ নে নাই, সেয়া নিৰ্ধাৰণ কৰে।

![Active toggle](/img/config/product-active.png)

যদি এই plan ত ইতিমধ্যে গ্ৰাহক আছে, তেন্তে toggle টো disable state ত set কৰিলে plan টো future sign-up সমূহৰ পৰা বাদ পৰি যায়। **plan ত থকা বিদ্যমান গ্ৰাহকসকলক বিল কৰি যাব** পৰিযন্ত্ৰীয়াকৈ তেওঁলোকক এটা নতুন plan লৈ স্থানান্তৰ কৰা নহ'লৈকে বা plan ত পৰিহাৰ নহ'লৈকে।

### Product Image (প্ৰডাক্টৰ ছবি) {#product-image}

**Upload Image** button টোৱে network administrator-ক media library ব্যৱহাৰ কৰি এটা প্ৰডাক্টৰ ছবি বাছি ল'বলৈ বা upload কৰিবলৈ দিয়ে।

![Product image section](/img/config/product-image.png)

### Delete (মুছ) {#delete}

**Delete Product** button টোৱে system ካৰ পৰা প্ৰডাক্টটো মুছ কৰে। প্ৰডাক্টটো publish কৰাৰ পিছত ই দেখা যায়।

![Delete product section](/img/config/product-delete.png)

অন্যান্য deletion ৰ পৰিৱৰ্তে, এই প্ৰডাক্টটো কোনো trash state ত থোৱা নহয়। গতিকে, মুছ কৰাৰ পিছত এই কাৰ্যটো উলটে নিব নোৱাৰি।

### Product Options (প্ৰডাক্ট বিকল্প) {#product-options}

মূল-স্তৰৰ প্ৰডাক্ট তথ্য সংজ্ঞায়িত কৰাৰ পিছত, product options টোৱে network administrator-ক প্ৰডাক্টৰ নিৰ্দিষ্ট বৈশিষ্ট্যসমূহ আৰু অধিক সংজ্ঞায়িত কৰাত সহায় কৰে।

#### General (সাধাৰণ) {#general}

**General** tab টোৱে প্ৰডাক্টৰ সাধাৰণ বৈশিষ্ট্য সংজ্ঞায়িত কৰে যিটো আন কোনো product-specific tab লৈ প্ৰযোজ্য নহয়।

![General tab](/img/config/product-general-tab.png)

স্বয়ং-ব্যাখ্যামূলক **product slug** টোৱে সেই slug সংজ্ঞায়িত কৰে যাৰ দ্বাৰা Ultimate Multisite ৰ URL আৰু আন ঠাইত প্ৰডাক্টটো চিনাক্ত কৰা হয়।

Ultimate Multisite ত Plan, Package, আৰু Service নামৰ কেইবাটাও product type সমৰ্থন কৰে। **Product Options** tabs টোৱে নিৰ্দিষ্ট কৰা product type ওপৰত নিৰ্ভৰ কৰি গতিশীলভাৱে adjust হয়।

**Customer Role** টোৱে সেই role সংজ্ঞায়িত কৰে যিটো site সৃষ্টি কৰাৰ সময়ত গ্ৰাহকক দিয়া হয়। সাধাৰণতে বেছিভাগ network administratorৰ বাবে, এইটো Ultimate Multisite default বা Administrator হ'ব। Ultimate Multisite default role টো **Ultimate Multisite > Settings > Login & Registration** ত set কৰিব পাৰি।

![Customer role settings](/img/config/product-customer-role-settings.png)

#### Up & Downgrades (উন্নত আৰু নিম্ন স্তৰলৈ যোৱা) {#up--downgrades}

এই tab টোৱে এটা নিৰ্দিষ্ট tier ত থকা গ্ৰাহকৰ বাবে উপলব্ধ upgrade আৰু downgrade path সংজ্ঞায়িত কৰে।

এই ধাৰণাটো বুজিবলৈ এটা উদাহৰণ বিবেচনা কৰক য'ত এটা niche Ultimate Multisite installation-এ তেওঁলোকৰ গ্ৰাহকসকলক learning management solutions দিয়ে। ইয়াৰ বাবে তিনিটা plan (Basic, Plus, আৰু Premium) সংজ্ঞায়িত কৰা হয় আৰু প্ৰতিটো planৰ বাবে নিৰ্দিষ্ট plugin activate কৰা হয় (plugin activate কৰাৰ পদ্ধতি জানিবলৈ এই section-ৰ পিছত চাওক)।

যদি Ultimate Multisite installation-এ business website বা eCommerce website-ক সেৱা দিয়ে, তেন্তে সেই plan সমূহক বেলেগ plugin install আৰু activate কৰাৰ প্ৰয়োজন হ'ব পাৰে।

এই পৰ্যায়লৈ, eLearning গ্ৰাহকসকলক eCommerce plan লৈ স্থানান্তৰ কৰিবলৈ দিয়াটো অনাকাংক্ষিত আৰু সমস্যাযুক্ত হ'ব পাৰে কাৰণ এই plan, pricing, আৰু limitation সমূহ উপযুক্ত নহ'ব পাৰে।

গতিকে, গ্ৰাহকৰ পথ সীমিত কৰিবলৈ আৰু ঘটনা নহ'বলৈ network administrator-এ এটা plan group সংজ্ঞায়িত কৰিব পাৰে আৰু সেই group ৰ ভিতৰত গ্ৰাহকয়ে ক'ত স্থানান্তৰ হ'ব পাৰে সেই plan সমূহ নিৰ্দিষ্ট কৰিব পাৰে।

![Up and Downgrades tab](/img/config/product-upgrades.png)

এটা plan group সংজ্ঞায়িত কৰিবলৈ **plan group** list ত compatible plan সমূহ নিৰ্দিষ্ট কৰক। **product order** টোৱে plan সমূহক ল'ৰা লৈ বৰ্ধমান (lowest to highest) ধৰণে ক'ত আৰু কেনেকৈ প্ৰদৰ্শিত হ'ব সেইটো নিৰ্ধাৰণ কৰে।

Ultimate Multisite ত এটা **order bump** featureো আছে য'ত উপযুক্ত add-on products আৰু services plan সমূহলৈ যোগ কৰিব পাৰি। এইবোৰ গ্ৰাহকক অতিৰিক্ত item হিচাপে আগবঢ়োৱা হয় যিবোৰ checkout বা upgrade সময়ত plan কৰিব পাৰি।

---

**[এই অংশটোৰ পিছত, বাকী অংশবোৰো একে ধৰণৰেই অনুবাদ কৰিব লাগিব।]**
