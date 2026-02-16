---
title: আপনার রেজিস্ট্রেশন ফর্ম কাস্টমাইজ করা
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# আপনার রেজিস্ট্রেশন ফর্ম কাস্টমাইজ করা

WordPress প্ল্যাটফর্মে তৈরি অন্যান্য SaaS থেকে আপনার নেটওয়ার্ককে আলাদা করতে, Ultimate Multisite আপনাকে আমাদের **Checkout Forms** ফিচার দিয়ে রেজিস্ট্রেশন এবং লগইন পেজ কাস্টমাইজ করার সুযোগ দেয়।

নতুন কাস্টমার পেতে বিভিন্ন পদ্ধতি পরীক্ষা করার জন্য এগুলো সহজ এবং নমনীয় উপায় হলেও, এগুলো মূলত ব্যক্তিগতকৃত রেজিস্ট্রেশন ফর্ম তৈরিতে ব্যবহৃত হয়। এই আর্টিকেলে আমরা দেখাবো কিভাবে আপনি এটি করতে পারেন।

## লগইন এবং রেজিস্ট্রেশন পেজ:

Ultimate Multisite ইনস্টল করার সাথে সাথে এটি স্বয়ংক্রিয়ভাবে আপনার মেইন সাইটে কাস্টম লগইন এবং রেজিস্ট্রেশন পেজ তৈরি করে। আপনি যেকোনো সময় এই ডিফল্ট পেজগুলো পরিবর্তন করতে পারেন **Ultimate Multisite > Settings > Login & Registration** পেজে গিয়ে।

![Login and Registration settings page](/img/config/settings-general.png)

আসুন দেখি **Login & Registration** পেজে কোন কোন অপশন কাস্টমাইজ করা যায়:

  * **Enable registration:** এই অপশনটি আপনার নেটওয়ার্কে রেজিস্ট্রেশন চালু বা বন্ধ করবে। এটি বন্ধ থাকলে, আপনার কাস্টমাররা রেজিস্ট্রেশন করে আপনার প্রোডাক্টে সাবস্ক্রাইব করতে পারবেন না।

  * **Enable email verification:** এই অপশন চালু থাকলে, ফ্রি প্ল্যান বা ট্রায়াল পিরিয়ড সহ পেইড প্ল্যানে সাবস্ক্রাইব করা কাস্টমাররা একটি ভেরিফিকেশন ইমেইল পাবেন এবং তাদের ওয়েবসাইট তৈরি হওয়ার জন্য ভেরিফিকেশন লিংকে ক্লিক করতে হবে।

  * **Default registration page:** এটি রেজিস্ট্রেশনের জন্য ডিফল্ট পেজ। এই পেজটি আপনার ওয়েবসাইটে পাবলিশ করা থাকতে হবে এবং একটি রেজিস্ট্রেশন ফর্ম (checkout form নামেও পরিচিত) থাকতে হবে - যেখানে আপনার ক্লায়েন্টরা আপনার প্রোডাক্টে সাবস্ক্রাইব করবেন। আপনি যত খুশি রেজিস্ট্রেশন পেজ এবং checkout form তৈরি করতে পারেন, শুধু মনে রাখবেন রেজিস্ট্রেশন পেজে checkout form shortcode যোগ করতে হবে, না হলে এটি দেখা যাবে না।

  * **Use custom login page:** এই অপশনটি আপনাকে ডিফল্ট wp-login.php পেজের বদলে একটি কাস্টম লগইন পেজ ব্যবহার করতে দেয়। এই অপশন চালু থাকলে, আপনি **Default login page** অপশনে (ঠিক নিচে) কোন পেজ লগইনের জন্য ব্যবহার হবে তা সিলেক্ট করতে পারবেন।

  * **Obfuscate the original login url (wp-login.php)** : আপনি যদি মূল লগইন URL লুকাতে চান, এই অপশন চালু করতে পারেন। brute-force আক্রমণ ঠেকাতে এটি কাজে আসে। এই অপশন চালু থাকলে, কেউ মূল wp-login.php লিংকে যেতে চাইলে Ultimate Multisite একটি 404 error দেখাবে।

  * **Force synchronous site publication:** কোনো কাস্টমার নেটওয়ার্কে কোনো প্রোডাক্টে সাবস্ক্রাইব করার পর, নতুন pending সাইটটিকে একটি আসল নেটওয়ার্ক সাইটে রূপান্তর করতে হয়। পাবলিশিং প্রক্রিয়াটি Job Queue এর মাধ্যমে asynchronously হয়। সাইনআপের সাথে একই request-এ পাবলিকেশন করতে চাইলে এই অপশন চালু করুন।

এবার আসুন, লগইন এবং রেজিস্ট্রেশন প্রক্রিয়ার সাথে সম্পর্কিত অন্যান্য অপশনগুলো দেখি। এগুলো একই Login & registration পেজে **Other options** এর নিচে আছে:

  * **Default role:** সাইনআপ প্রক্রিয়ার পর আপনার কাস্টমারদের তাদের ওয়েবসাইটে এই role থাকবে।

  * **Add users to the main site as well:** এই অপশন চালু করলে সাইনআপ প্রক্রিয়ার পর ইউজারকে আপনার নেটওয়ার্কের মেইন সাইটেও যুক্ত করা হবে। এই অপশন চালু করলে, এই ইউজারদের আপনার ওয়েবসাইটে **default role** সেট করার অপশনও ঠিক নিচে দেখা যাবে।

  * **Enable multiple accounts:** ইউজারদের একই ইমেইল অ্যাড্রেস দিয়ে আপনার নেটওয়ার্কের বিভিন্ন সাইটে অ্যাকাউন্ট রাখতে দেয়। এই অপশন বন্ধ থাকলে, আপনার কাস্টমাররা একই ইমেইল অ্যাড্রেস দিয়ে আপনার নেটওয়ার্কে চলমান অন্য কোনো ওয়েবসাইটে অ্যাকাউন্ট তৈরি করতে পারবেন না।

এবং এগুলোই হলো লগইন এবং রেজিস্ট্রেশন সংক্রান্ত সব অপশন যা আপনি কাস্টমাইজ করতে পারেন! এডিট শেষ করার পর আপনার সেটিংস সেভ করতে ভুলবেন না।

## একাধিক রেজিস্ট্রেশন ফর্ম ব্যবহার করা:

Ultimate Multisite 2.0 একটি checkout form editor অফার করে যা আপনাকে বিভিন্ন ফিল্ড, অফারে থাকা প্রোডাক্ট ইত্যাদি দিয়ে যত খুশি ফর্ম তৈরি করতে দেয়।

লগইন এবং রেজিস্ট্রেশন পেজ দুটোতেই shortcode এম্বেড করা থাকে: লগইন পেজে **[wu_login_form]** এবং রেজিস্ট্রেশন পেজে **[wu_checkout]**। আপনি checkout form তৈরি বা বিল্ড করে রেজিস্ট্রেশন পেজ আরও কাস্টমাইজ করতে পারেন।

এই ফিচারে যেতে, বাম পাশের সাইডবারে **Checkout Forms** মেনুতে যান।

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

এই পেজে, আপনি আপনার সব checkout form দেখতে পাবেন।

নতুন একটি তৈরি করতে চাইলে, পেজের উপরে **Add Checkout Form** এ ক্লিক করুন।

আপনি তিনটি অপশনের যেকোনো একটি থেকে শুরু করতে পারেন: single step, multi-step অথবা blank। তারপর, **Go to the Editor** এ ক্লিক করুন।

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

বিকল্পভাবে, আপনি ইতিমধ্যে থাকা ফর্মগুলোর নামের নিচের অপশনে ক্লিক করে সেগুলো এডিট বা ডুপ্লিকেট করতে পারেন। সেখানে ফর্মের shortcode কপি করার বা ফর্ম ডিলিট করার অপশনও পাবেন।

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

আপনি single step বা multi-step সিলেক্ট করলে, checkout form-এ কাজ করার জন্য প্রয়োজনীয় বেসিক স্টেপগুলো আগে থেকেই থাকবে। এরপর চাইলে আপনি অতিরিক্ত স্টেপ যোগ করতে পারেন।

### Checkout Form এডিট করা:

আগেই বলেছি, আপনি বিভিন্ন উদ্দেশ্যে checkout form তৈরি করতে পারেন। এই উদাহরণে আমরা একটি রেজিস্ট্রেশন ফর্ম নিয়ে কাজ করবো।

checkout form editor-এ যাওয়ার পর, আপনার ফর্মকে একটি নাম দিন (এটি শুধু internal reference-এর জন্য ব্যবহৃত হবে) এবং একটি slug (উদাহরণস্বরূপ, shortcode তৈরিতে ব্যবহৃত হয়)।

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

ফর্ম স্টেপ এবং ফিল্ড দিয়ে তৈরি। **Add New Checkout Step** এ ক্লিক করে নতুন স্টেপ যোগ করতে পারেন।

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window-এর প্রথম ট্যাবে, আপনার ফর্মের স্টেপের content পূরণ করুন। একটি ID, নাম এবং description দিন। এগুলো মূলত internally ব্যবহৃত হয়।

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

এরপর, স্টেপের visibility সেট করুন। আপনি **Always show**, **Only show for logged in users** অথবা **Only show for guests** এর মধ্যে বেছে নিতে পারেন।

![Checkout step visibility options](/img/config/checkout-form-step.png)

সবশেষে, স্টেপের style কনফিগার করুন। এগুলো optional ফিল্ড।

![Checkout step style configuration](/img/config/checkout-form-step.png)

এখন, আমাদের প্রথম স্টেপে ফিল্ড যোগ করার সময়। **Add New Field** এ ক্লিক করুন এবং আপনি যে ধরনের section চান তা সিলেক্ট করুন।

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

প্রতিটি ফিল্ডের বিভিন্ন parameter পূরণ করতে হয়। এই প্রথম এন্ট্রির জন্য, আমরা **Username** ফিল্ড সিলেক্ট করবো।

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

আপনার প্রয়োজন অনুযায়ী যতগুলো স্টেপ এবং ফিল্ড চান যোগ করতে পারেন। আপনার কাস্টমারদের কাছে প্রোডাক্ট দেখাতে এবং তাদের একটি বেছে নিতে দিতে, Pricing Table ফিল্ড ব্যবহার করুন। আপনার ক্লায়েন্টদের template বেছে নিতে দিতে চাইলে, Template Selection ফিল্ড যোগ করুন। এভাবে চলতে থাকবে।

_**নোট:** আপনার checkout form তৈরির পর যদি কোনো প্রোডাক্ট তৈরি করেন, আপনাকে Pricing table সেকশনে প্রোডাক্টটি যোগ করতে হবে। যোগ না করলে, প্রোডাক্টটি রেজিস্ট্রেশন পেজে আপনার কাস্টমারদের কাছে দেখা যাবে না।_

_**নোট ২:** username, email, password, site title, site URL, order summary, payment, এবং submit button হলো checkout form তৈরির জন্য বাধ্যতামূলক ফিল্ড।_

আপনার checkout form-এ কাজ করার সময়, আপনি সবসময় Preview বাটন ব্যবহার করে দেখতে পারেন আপনার ক্লায়েন্টরা ফর্মটি কিভাবে দেখবেন। আপনি existing user বা visitor হিসেবে দেখার মধ্যেও পরিবর্তন করতে পারেন।

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

সবশেষে, **Advanced Options**-এ আপনি **Thank You** পেজের মেসেজ কনফিগার করতে পারেন, conversion track করার snippet যোগ করতে পারেন, আপনার checkout form-এ custom CSS যোগ করতে পারেন অথবা নির্দিষ্ট দেশে এটি সীমাবদ্ধ রাখতে পারেন।

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

আপনি ডান কলামে এই অপশন toggle করে ম্যানুয়ালি আপনার checkout form চালু বা বন্ধ করতে পারেন, অথবা ফর্মটি স্থায়ীভাবে ডিলিট করতে পারেন।

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

আপনার checkout form সেভ করতে ভুলবেন না!

![Save Checkout Form button](/img/config/checkout-form-save.png)

আপনার ফর্মের shortcode পেতে **Generate Shortcode** এ ক্লিক করুন এবং modal window-এ দেখানো ফলাফল কপি করুন।

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**নোট:** এই checkout form আপনার রেজিস্ট্রেশন পেজে যোগ করতে হলে আপনাকে এই shortcode আপনার রেজিস্ট্রেশন পেজে যোগ করতে হবে।_

## URL parameter দিয়ে প্রোডাক্ট এবং template আগে থেকে সিলেক্ট করা:

আপনি যদি আপনার প্রোডাক্টের জন্য কাস্টমাইজড pricing table তৈরি করতে চান এবং আপনার কাস্টমার আপনার pricing table বা templates পেজ থেকে যে প্রোডাক্ট বা template বেছে নেন সেটি checkout form-এ আগে থেকে সিলেক্ট করে রাখতে চান, আপনি এর জন্য URL parameter ব্যবহার করতে পারেন।

### **প্ল্যানের জন্য:**

**Ultimate Multisite > Products > Select a plan**-এ যান। পেজের উপরে **Click to copy Shareable Link** বাটন দেখতে পাবেন। এই লিংকটি আপনি আপনার checkout form-এ এই নির্দিষ্ট প্ল্যান আগে থেকে সিলেক্ট করতে ব্যবহার করতে পারেন।

![Product page with shareable link button](/img/config/products-list.png)

মনে রাখবেন এই shareable link শুধু **Plans**-এর জন্য কাজ করে। package বা service-এর জন্য shareable link ব্যবহার করা যাবে না।

### Template-এর জন্য:

আপনি যদি আপনার checkout form-এ site template আগে থেকে সিলেক্ট করতে চান, আপনি আপনার রেজিস্ট্রেশন পেজ URL-এ এই parameter ব্যবহার করতে পারেন: **?template_id=X**। "X"-এর জায়গায় **site template ID number** বসাতে হবে। এই নম্বর পেতে, **Ultimate Multisite > Sites**-এ যান।

আপনি যে site template ব্যবহার করতে চান তার ঠিক নিচে **Manage**-এ ক্লিক করুন। আপনি SITE ID নম্বর দেখতে পাবেন। এই নির্দিষ্ট site template আপনার checkout form-এ আগে থেকে সিলেক্ট করতে শুধু এই নম্বরটি ব্যবহার করুন। আমাদের এই ক্ষেত্রে, URL parameter হবে **?template_id=2**।

![Sites list showing site template ID](/img/config/site-templates-list.png)

ধরুন আমাদের নেটওয়ার্ক ওয়েবসাইট হলো [**www.mynetwork.com**](http://www.mynetwork.com) এবং আমাদের checkout form সহ রেজিস্ট্রেশন পেজ আছে **/register** পেজে। এই site template আগে থেকে সিলেক্ট করা পুরো URL দেখতে এরকম হবে [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**।

এবং আপনি চাইলে, আপনার checkout form-এ প্রোডাক্ট এবং template দুটোই আগে থেকে সিলেক্ট করতে পারেন। শুধু প্ল্যানের shareable link কপি করুন এবং শেষে template parameter পেস্ট করুন। এটি দেখতে এরকম হবে [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**।
