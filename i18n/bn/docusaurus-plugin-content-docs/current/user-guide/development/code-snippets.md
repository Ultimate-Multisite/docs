---
title: কোড স্নিপেটস
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2-এর জন্য কোড স্নিপেট

মূলত, **WordPress**-এ কোড স্নিপেট ব্যবহার করা হয় এমন কিছু কাজ করার জন্য যেগুলোর জন্য সাধারণত একটি ছোট আলাদা plugin প্রয়োজন হতে পারে। এই ধরনের কোড স্নিপেট WordPress core বা theme ফাইলগুলোর একটিতে রাখা হয় (সাধারণত আপনার theme-এর functions.php ফাইলে) অথবা এগুলো MU plugin হিসেবেও ব্যবহার করা যায়।

এই আর্টিকেলে আমরা আপনাকে তিনটি কোড স্নিপেট দেখাবো যেগুলো **Ultimate Multisite v2**-এর সাথে ব্যবহার করা যায়:

  * [**Account মেনু আইটেমের অবস্থান পরিবর্তন করা**](#changing-the-position-of-the-account-menu-item)

  * [**ব্যবহারকারী কোনো নির্দিষ্ট plan-এর অধীনে আছেন কিনা এবং/অথবা সক্রিয় subscription আছে কিনা তা যাচাই করার উপায়**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**ম্যাপ করা domain-এ Font-Icon সংক্রান্ত CORS সমস্যা সমাধান**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account মেনু আইটেমের অবস্থান পরিবর্তন করা

আপনার ক্লায়েন্টের Dashboard-এ Account মেনু আইটেমের অবস্থান পরিবর্তন করতে, শুধু নিচের কোড স্নিপেটটি আপনার main site-এর সক্রিয় theme-এর functions.php ফাইলে যোগ করুন। আপনি স্নিপেটটি আপনার mu-plugins বা custom plugin-এর একটিতেও রাখতে পারেন।

add_filter('wu_my_account_menu_position', function() { return 10; // মেনুটি কাঙ্ক্ষিত অবস্থানে রাখতে এই মানটি পরিবর্তন করুন।

## ব্যবহারকারী কোনো নির্দিষ্ট plan-এর অধীনে আছেন কিনা এবং/অথবা সক্রিয় subscription আছে কিনা তা যাচাই করার উপায়

একজন network admin হিসেবে, আপনার এমন custom function তৈরি করার প্রয়োজন হতে পারে যেগুলো সাধারণ কাজ সম্পাদন করবে অথবা নির্বাচিত subscriber বা end-user-দের জন্য কোনো সার্ভিস/ফিচার উপলব্ধ করবে—তাদের subscription-এর অবস্থা এবং তারা যে plan-এ subscribe করা আছেন তার ভিত্তিতে।

এই Ultimate Multisite-এর নিজস্ব function গুলো এতে আপনাকে সাহায্য করবে।

ব্যবহারকারী কোনো নির্দিষ্ট plan-এর সদস্য কিনা তা যাচাই করতে, আপনি এই function টি ব্যবহার করতে পারেন:

wu_has_plan($user_id, $plan_id)

subscription সক্রিয় কিনা তা যাচাই করতে, আপনি এই function টি ব্যবহার করতে পারেন:

wu_is_active_subscriber($user_id)

নিচে একটি উদাহরণ স্নিপেট দেওয়া হলো যা যাচাই করে বর্তমান ব্যবহারকারী কোনো নির্দিষ্ট plan-এর (_Plan ID 50_) অধীনে আছেন কিনা এবং ব্যবহারকারীর subscription সক্রিয় কিনা।

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // ব্যবহারকারী plan-এর সদস্য এবং তার subscription সক্রিয়, কাজ করুন} else { // ব্যবহারকারী plan-এর সদস্য নন -- অথবা -- তার subscription সক্রিয় নয়, অন্য কাজ করুন} // end if;

মনে রাখবেন _**wu_has_plan**_ কাজ করার জন্য একটি "Plan ID" প্রয়োজন।

একটি plan-এর ID পেতে, আপনি **Ultimate Multisite > Products**-এ যেতে পারেন। প্রতিটি product-এর ID টেবিলের ডানদিকে দেখানো হবে।

মনে রাখবেন যে ব্যবহারকারীরা শুধুমাত্র একটি **Plan**-এ subscribe করতে পারেন, Package বা Service-এ নয়, কারণ এগুলো শুধুমাত্র একটি **Plan**-এর add-on।

![Plan ID দেখানো Products তালিকা](/img/admin/products-list.png)

## ম্যাপ করা domain-এ Font-Icon সংক্রান্ত CORS সমস্যা সমাধান
## ম্যাপ করা domain-এ Font-Icon সংক্রান্ত CORS সমস্যা সমাধান

একটি sub-site-এ domain ম্যাপ করার পর আপনি হয়তো দেখতে পাবেন যে site টি custom font লোড করতে সমস্যা হচ্ছে। এটি আপনার server সেটিংসে cross-origin block-এর কারণে হয়।

যেহেতু font ফাইলগুলো প্রায় সবসময় সরাসরি CSS থেকে লোড হয়, আমাদের domain mapping plugin মূল URL-গুলোকে ম্যাপ করা domain দিয়ে rewrite করতে পারে না, তাই এই সমস্যা সমাধান করতে আপনাকে আপনার server configuration ফাইল পরিবর্তন করতে হবে।

নিচে Apache এবং NGINX-এর জন্য এই সমস্যা সমাধানের কোড স্নিপেট দেওয়া হলো। এই পরিবর্তনগুলোর জন্য server configuration ফাইল (.htaccess ফাইল এবং NGINX config ফাইল) সম্পর্কে উন্নত জ্ঞান প্রয়োজন। আপনি যদি এই পরিবর্তনগুলো নিজে করতে স্বাচ্ছন্দ্যবোধ না করেন, তাহলে সাহায্যের জন্য আপনার hosting provider-এর support agent-দের কাছে এই পেজটি পাঠান।

### Apache

আপনার .htaccess ফাইলে, যোগ করুন:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

আপনার server config ফাইলে (অবস্থান server ভেদে ভিন্ন হয়), যোগ করুন:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
