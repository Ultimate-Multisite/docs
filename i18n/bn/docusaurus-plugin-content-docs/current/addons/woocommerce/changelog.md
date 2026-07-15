---
title: WooCommerce ইন্টিগ্রেশন পরিবর্তনলগ
sidebar_position: 99
_i18n_hash: 54658c4a8d52e85998183f523437d5a3
---
# WooCommerce ইন্টিগ্রেশন পরিবর্তন-লগ

Version 2.2.0 - 2026-07-01-এ প্রকাশিত
* নতুন: Ultimate Multisite করের পরিমাণ এখন checkout-এ আলাদা WooCommerce fee line হিসেবে দেখা যায়, ফলে payment-এর আগে করের মোট পরিমাণ আরও স্পষ্ট হয়।
* নতুন: WooCommerce Subscriptions পুনঃচেষ্টার সময়সীমায় যেসব site ব্যর্থ renewal suspension চায়, তাদের জন্য opt-in "ব্যর্থ renewal হলে সঙ্গে সঙ্গে membership suspend করুন" setting এবং `wu_woo_suspend_on_payment_failure` filter যোগ করা হয়েছে।
* সংশোধন: ব্যর্থ বা পুনরুদ্ধার হওয়া renewal-এর পর Ultimate Multisite membership-এর সঙ্গে sync-এর বাইরে থেকে যেতে পারত এমন WooCommerce Subscription status মিলিয়ে দেওয়া হয়েছে।
* সংশোধন: অনুপস্থিত থাকলে Ultimate Multisite currency list-এ WooCommerce store currency যোগ করা হয়েছে।
* সংশোধন: subscriber-দের WooCommerce checkout-এ পাঠানোর সময় customer billing details সংরক্ষণ করা হয়েছে।
* উন্নত: Jetpack Autoloader 5-এর সঙ্গে compatibility যোগ করা হয়েছে।
* উন্নত: release package generation পরিষ্কার করা হয়েছে, যাতে GitHub এবং marketplace zip-এ nested staging directory ও development file না থাকে।

Version 2.0.6 - 2026-01-16-এ প্রকাশিত
* উন্নতি: addon-এ core subscription অন্তর্ভুক্ত করা হয়েছে। আর Woocommerce Subscriptinos extension প্রয়োজন নেই।

Version 2.0.5 - 2026-01-09-এ প্রকাশিত
* উন্নতি: glotpress API থেকে অনুবাদ load করা হয়েছে।
* সংশোধন: কিছু page builder-এ fatal error।
* সংশোধন: customer main site-এর member হলে infinite redirect।

Version 2.0.4 - 2025-11-14-এ প্রকাশিত
* যোগ করা হয়েছে: আরও অনেক ভাষার অনুবাদ।
* পরিবর্তিত: নাম বদলে Ultimate Multisite: Woocommerce Integration করা হয়েছে।
* যোগ করা হয়েছে: Woocommerce 10.2.1-এর সঙ্গে compatibility।
* যোগ করা হয়েছে: Woocommerce Subscriptions 7.7.0-এর সঙ্গে compatibility।
* সংশোধন: PHP 8.4-এর সঙ্গে compatibility
* সংশোধন: WC account page না থাকলে redirect সংক্রান্ত সমস্যা।

Version 2.0.3 - 2025-08-13-এ প্রকাশিত
* পরিবর্তিত: নতুন marketplace দিয়ে automatic update চালু করা হয়েছে।

Version 2.0.2 - 2025-07-05-এ প্রকাশিত
* পরিবর্তিত: নাম বদলে Multisite Ultimate: Woocommerce Integration করা হয়েছে।
* যোগ করা হয়েছে: Woocommerce 9.8.1-এর সঙ্গে compatibility।
* যোগ করা হয়েছে: Woocommerce Subscriptions 7.3.0-এর সঙ্গে compatibility।
* সংশোধন: customer-এর মাধ্যমে subscription cancel করা।
* সংশোধন: checkout block ব্যবহার করলে fatal error।
* উন্নতি: এখন Woocommerce high performance custom order table-এর সঙ্গে compatible।
* সংশোধন: WooCommerce checkout-এ cancel করলেও membership upgrade হতে পারত।

Version 2.0.1 - 2023-08-09-এ প্রকাশিত

* যোগ করা হয়েছে: Woocommerce 7.9.0-এর সঙ্গে compatibility।
* যোগ করা হয়েছে: Woocommerce Subscriptions 5.3.0-এর সঙ্গে compatibility।
* যোগ করা হয়েছে: membership update-এর support।
* যোগ করা হয়েছে: Woocommerce-এ trial এবং setup fee সম্পর্কিত notice।
* যোগ করা হয়েছে: meta value দিয়ে Ultimate Multisite Woocommerce product শনাক্তকরণ।
* যোগ করা হয়েছে: সব Ultimate Multisite সম্পর্কিত Woocommerce product চিহ্নিত করতে এককালীন fix ঢোকানো হয়েছে।
* যোগ করা হয়েছে: Woocommerce list থেকে Ultimate Multisite-created product সরানো হয়েছে।
* উন্নতি: cart-এ প্রয়োগের জন্য non-recurring Woocommerce discount তৈরি করা হয়েছে।
* উন্নতি: Woocommerce product-এ recurring discount ফিরিয়ে আনা হয়েছে।
* উন্নতি: Woocommerce product-এ recurring discount label যোগ করা হয়েছে।
* উন্নতি: checkout-এ product type নিশ্চিত করা হয়েছে।
* সংশোধন: downgrade process চলাকালীন membership status বজায় রাখা হয়েছে।
* সংশোধন: cancellation process চলাকালীন error এড়াতে subscription আছে কি না পরীক্ষা করা হয়েছে।
* সংশোধন: Woocommerce subscriptions-এ ব্যবহারের জন্য start subscription date যোগ করা হয়েছে।
* অভ্যন্তরীণ: নতুন PHP 8.1 build process বাস্তবায়ন করা হয়েছে।

Version 2.0.0 - সম্পূর্ণ নতুন করে লেখা।

* যোগ করা হয়েছে: gateway পরিবর্তন বা membership cancel করার সময় woo subscription সরাতে cancellation method process করা;
* যোগ করা হয়েছে: membership downgrade এবং upgrade করার handler;
* উন্নতি: account update-এর সুযোগ দিতে subsite-এ customer update form-এ woocommerce dependency load করা;
* উন্নতি: না থাকলে Woocommerce cart সঠিকভাবে load করা;
* উন্নতি: checkout process করার সময় আমরা main site table-এ আছি তা নিশ্চিত করা;
* উন্নতি: Ultimo renewal order Woocommerce subscription order value-এর ভিত্তিতে করা, last payment থেকে নয়;
* সংশোধন: WU Membership button link;
* সংশোধন: Woocommerce subscriptions renewal paid হলে Ultimo order-কে paid হিসেবে set করা;
* Build: builder হিসেবে MPB যোগ করা;

Version 2.0.0-beta-5 - 2022-01-21-এ প্রকাশিত

* অভ্যন্তরীণ: hook এবং filter generator যোগ করা হয়েছে;
* অভ্যন্তরীণ: developer quality of life-এর জন্য Ultimate Multisite stub যোগ করা হয়েছে;
* সংশোধন: প্রয়োজন না হলে একাধিক product তৈরি হওয়া ঠেকানো হয়েছে;

Version 2.0.0-beta.4 - 2021-09-23

* সংশোধন: শুধু main site নয়, WooCommerce network active থাকা বাধ্যতামূলক করা;
* উন্নতি: add-on-কে mu-plugin হিসেবে ব্যবহারের সুযোগ দিতে filter যোগ করা হয়েছে;

Version 2.0.0-beta.3 - 2021-05-28

* সংশোধন: dashboard access control খুব বেশি কঠোর ছিল;
* উন্নতি: Ultimate Multisite top-menu-তে WooCommerce help link যোগ করা হয়েছে;

Version 2.0.0-beta.2 - 2021-05-04

* উন্নতি: WCS renewal order creation-এ Ultimo-তে pending payment তৈরি করে;
* উন্নতি: Ultimate Multisite customer data দিয়ে billing field আগে থেকেই পূরণ করে;
* উন্নতি: gateway-এর জন্য billing field আবার যোগ করে;

Version 2.0.0-beta.1 - 2021-05-04

* প্রাথমিক beta release

-- পুরোনো সংস্করণ --

Version 1.2.6 - 26/03/2020

* সংশোধন: WooCommerce Subscriptions-এর নতুন version-এর সঙ্গে ছোট incompatibility;

Version 1.2.5 - 26/08/2019

* সংশোধন: আগের release-এ error;

Version 1.2.4 - 22/08/2019

* উন্নত: integration-এর পর সঙ্গে সঙ্গে WooCommerce checkout screen-এ redirect করার option যোগ করা হয়েছে;

Version 1.2.3 - 26/05/2019

* সংশোধন: কিছু edge case-এ WooCommerce-এর payment email হারিয়ে যেত;

Version 1.2.2 - 27/02/2019

* যোগ করা হয়েছে: WooCommerce Subscription integration-এ setup fee-এর support;

Version 1.2.1 - 17/11/2018

* সংশোধন: Ultimate Multisite version 1.9.0-এর সঙ্গে compatibility issue;

Version 1.2.0 - 10/09/2018

* উন্নত: add-on-এর জন্য নতুন update URL;
* যোগ করা হয়েছে: WooCommerce Subscription-এর beta support;

Version 1.1.2 - 11/02/2018

* সংশোধন: WooCommerce endpoint-এর পরিবর্তনে সাড়া দিতে Pay link dynamically তৈরি করা;
* উন্নত: এখন `payment_completed` call হলে আমরা order-এর জন্য completed status force করি, যাতে আমাদের renewal hook ঠিক সময়ে চলে;

Version 1.1.1 - 24/01/2018

* সংশোধন: এখন এটি প্রধান সাইটে WooCommerce সদ্য সক্রিয় করা হয়েছে কি না, সেটিও পরীক্ষা করে;
* সংশোধন: অর্ডার তৈরিতে কর অন্তর্ভুক্ত করার সুযোগ দিতে ওভার-লোডিংগুলো অন্তর্ভুক্ত করা হয়েছে;

Version 1.1.0 - 04/11/2017

* সংশোধন: এখন integration বোতামের লেবেল সেটিংস অনুযায়ী সত্যিই বদলায়। Ultimate Multisite 1.5.0 প্রয়োজন;
* সংশোধন: WooCommerce Integration এখন WooCommerce network active না হলেও এবং শুধু প্রধান সাইটে সক্রিয় থাকলেও কাজ করে;

1.0.0 - প্রাথমিক প্রকাশ
