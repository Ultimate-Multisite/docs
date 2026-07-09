---
title: কোড স্নিপেট
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2-ৰ বাবে কোড স্নিপেট {#code-snippets-for-v2}

মূলতঃ, **WordPress**-ৰ বাবে কোড স্নিপেট ব্যৱহাৰ কৰা হয় এনে কিছুমান কাৰ্য্য সম্পাদন কৰিবলৈ, যাৰ বাবে আনকি এটা ডেডিকেটেড সৰু প্লাগইনৰ প্ৰয়োজন হ'ব পাৰে। এনে কোড স্নিপেটবোৰ WordPress-ৰ core বা theme ফাইলৰ (সাধাৰণতে আপোনাৰ theme-ৰ functions.php ফাইল) ভিতৰত যোগ কৰিব পাৰি, অথবা ইয়াক এটা MU প্লাগইন হিচাপেও ব্যৱহাৰ কৰিব পাৰি।

এই article-ত আমি আপোনাক **Ultimate Multisite v2** লগত ব্যৱহাৰ কৰিব পৰা তিনিটা কোড স্নিপেট দেখুৱাব:

  * [**Account মেনু আইটেমৰ স্থান সলনি কৰা**](#changing-the-position-of-the-account-menu-item)

  * [**ব্যৱহাৰকাৰী কোনো এটা Plan-ৰ অধীনত আছে নে নহয় আৰু/অথবা তেওঁৰ active subscription আছে নে নাই, কেনেকৈ পৰীক্ষা কৰিব**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ম্যাপ কৰা ডোমেইনত Font-Icons লগত CORS সমস্যা সমাধান কৰা**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account মেনু আইটেমৰ স্থান সলনি কৰা {#changing-the-position-of-the-account-menu-item}

আপোনাৰ client-ৰ Dashboard-ত Account মেনু আইটেমৰ স্থান সলনি কৰিবলৈ, কেৱল তলৰ কোড স্নিপেটটো আপোনাৰ মূল site-ৰ active theme-ৰ functions.php ফাইলত যোগ কৰক। আপুনি এই স্নিপেটটো এটা mu-plugin বা custom pluginৰ ভিতৰতো ৰাখিব পাৰে।

add_filter('wu_my_account_menu_position', function() { return 10; // Tweak this value to place the menu in the desired position.

## ব্যৱহাৰকাৰী কোনো এটা Plan-ৰ অধীনত আছে নে নহয় আৰু/অথবা তেওঁৰ active subscription আছে নে নাই, কেনেকৈ পৰীক্ষা কৰিব {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}

এটা network admin হিচাপে, আপোনাক এনে কিছুমান custom function বনোৱাৰ প্ৰয়োজন হ'ব পাৰে, যিয়ে মৌলিক কাৰ্য্য সম্পাদন কৰিব বা তেওঁলোকৰ subscription আৰু তেওঁ কোন Plan-ৰ অধীনত আছে তাৰ ওপৰত ভিত্তি কৰি কিছুমান নিৰ্বাচিত subscriber বা end-user গোটলৈ এটা service/feature উপলব্ধ কৰিব।

এই Ultimate Multisite native function-বোৰে আপোনাক সহায় কৰিব।

ব্যৱহাৰকাৰী কোনো এটা Plan-ৰ সদস্য হ'ল নে নাই, পৰীক্ষা কৰিবলৈ, আপুনি এই function টো ব্যৱহাৰ কৰিব পাৰে:

wu_has_plan($user_id, $plan_id)

subscription active আছে নে নাই, পৰীক্ষা কৰিবলৈ, আপুনি এই function টো ব্যৱহাৰ কৰিব পাৰে:

wu_is_active_subscriber($user_id)

তলত এটা উদাহৰণ স্নিপেট দিয়া হৈছে যিয়ে পৰীক্ষা কৰে যে বৰ্তমান ব্যৱহাৰকাৰীজন এটা নিৰ্দিষ্ট Plan (_Plan ID 50_) ৰ অধীনত আছে নেকি আৰু ব্যৱহাৰকাৰীজনৰ subscription active আছে নে।

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // USER IS MEMBER OF PLAN AND HIS SUBSCRIPTION IS ACTIVE, DO STUFF} else { // USER IS NOT A MEMBER OF PLAN -- OR -- HIS SUBSCRIPTION IS NOT ACTIVE, DO OTHER STUFF} // end if;

মন কৰিব যে _**wu_has_plan**_ ফাংচনটো কাম কৰিবলৈ এটা "Plan ID"ৰ প্ৰয়োজন।

এটা Plan-ৰ ID পাবলৈ, আপুনি **Ultimate Multisite > Products** ত যাব পাৰে। প্ৰতিটো product-ৰ ID টেবুলটোৰ সোঁফাণত দেখুৱдено থাকিব।

মন কৰিব যে ব্যৱহাৰকাৰীসকলে কেৱল এটা **Plan** লগতহে সাবস্ক্রাইব কৰিব পাৰে, Package বা Service লগত নহয়, কাৰণ এইবোৰ কেৱল এটা **Plan**-ৰ বাবে add-on।

![Products list showing plan IDs](/img/admin/products-list.png)

## ম্যাপ কৰা ডোমেইনত Font-Icons লগত CORS সমস্যা সমাধান কৰা {#fixing-cors-issues-with-font-icons-in-mapped-domains}
## ম্যাপ কৰা ডোমেইনত Font-Icons লগত CORS সমস্যা সমাধান কৰা {#fixing-cors-issues-with-font-icons-in-mapped-domains-1}

এটা ডোমেইনক sub-site লগত ম্যাপ কৰাৰ পিছত আপুনি পালে যে site-টোৱে custom fonts লোড কৰাত সমস্যা কৰিছে। ই আপোনাৰ server settings-ত থকা cross-origin block-ৰ বাবে হৈছে।

কাৰণ font ফাইলবোৰ প্ৰায় সদায় CSS ৰ পৰা পোনপটীয়াকৈ লোড হয়, আমাৰ domain mapping plugin-এ original ডোমেইনৰ সলনি ম্যাপ কৰা ডোমেইন ব্যৱহাৰ কৰিবলৈ URLবোৰ rewrite কৰিব নোৱাৰে। গতিকে, এই সমস্যাটো সমাধান কৰিবলৈ আপুনি আপোনাৰ server configuration fileবোৰ সংশোধন কৰিব লাগিব।

তলত Apache আৰু NGINX-ৰ বাবে সমস্যাটো সমাধান কৰিবলৈ কোড স্নিপেট দিয়া হৈছে। এই সলনিবোৰৰ বাবে server configuration file (.htaccess file আৰু NGINX config file) সম্পৰ্কে উন্নত জ্ঞানৰ প্ৰয়োজন। যদি আপুনি নিজে এই সলনিবোৰ কৰাত স্বচ্ছন্দ নহয়, তেন্তে সহায়ৰ প্ৰয়োজন হ'লে এই পৃষ্ঠাখন আপোনাৰ hosting provider support agent-লৈ প্ৰেণ কৰক।

### Apache {#apache}

আপোনাৰ .htaccess ফাইলত, যোগ কৰক:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX {#nginx}

আপোনাৰ server config file (location server অনুসৰি সলনি হয়), যোগ কৰক:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
