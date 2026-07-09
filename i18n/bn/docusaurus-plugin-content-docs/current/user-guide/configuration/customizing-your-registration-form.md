---
title: আপনার নিবন্ধন ফর্ম কাস্টমাইজ করা
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# আপনার Registration Form কাস্টমাইজ করা

WordPress প্ল্যাটফর্মে তৈরি অন্য সব SaaS থেকে আপনার নেটওয়ার্ককে আলাদা দেখাতে, Ultimate Multisite আমাদের **Checkout Forms** ফিচার দিয়ে আপনার registration ও login পেজ কাস্টমাইজ করার সুযোগ দেয়।

নতুন গ্রাহককে রূপান্তর করার সময় ভিন্ন পদ্ধতি পরীক্ষা করার জন্য এগুলো সহজ ও নমনীয় উপায় হলেও, এগুলো মূলত ব্যক্তিগতকৃত registration form তৈরি করতে ব্যবহৃত হয়। এই নিবন্ধে দেখানো হবে কীভাবে আপনি তা করতে পারেন।

## Login এবং registration পেজ:

Ultimate Multisite ইনস্টল করার পর, এটি আপনার প্রধান site-এ স্বয়ংক্রিয়ভাবে কাস্টম login ও registration পেজ তৈরি করে। আপনি যেকোনো সময় আপনার **Ultimate Multisite > Settings > Login & Registration** পেজে গিয়ে এই default পেজগুলো পরিবর্তন করতে পারেন।

![Login এবং Registration settings পেজ](/img/config/settings-general.png)

login এবং registration settings পেজের সম্পূর্ণ দৃশ্য এখানে:

![Login এবং Registration settings সম্পূর্ণ পেজ](/img/config/settings-login-registration-full.png)

**Login & Registration** পেজে আপনি যেসব option কাস্টমাইজ করতে পারেন, সেগুলো একে একে দেখি:

  * **Registration সক্রিয় করুন:** এই option আপনার নেটওয়ার্কে registration সক্রিয় বা নিষ্ক্রিয় করবে। এটি বন্ধ থাকলে, আপনার গ্রাহকেরা register করতে এবং আপনার product-এ subscribe করতে পারবেন না।

  * **Email verification সক্রিয় করুন:** এই option চালু থাকলে, free plan বা trial period সহ paid plan-এ subscribe করা গ্রাহকেরা একটি verification email পাবেন এবং তাদের website তৈরি করার জন্য verification link-এ click করতে হবে।

  * **Default registration page:** এটি registration-এর default পেজ। এই পেজটি আপনার website-এ published থাকতে হবে এবং এতে একটি registration form (checkout form নামেও পরিচিত) থাকতে হবে - যেখানে আপনার client-রা আপনার product-এ subscribe করবেন। আপনি যত খুশি registration page এবং checkout form তৈরি করতে পারেন, শুধু registration page-এ checkout form shortcode দিতে ভুলবেন না, নাহলে এটি দেখা যাবে না।

  * **Custom login page ব্যবহার করুন:** এই option আপনাকে default wp-login.php পেজের বদলে একটি customized login page ব্যবহার করতে দেয়। এই option চালু থাকলে, **Default login page** option-এ (ঠিক নিচে) login-এর জন্য কোন পেজ ব্যবহার হবে তা নির্বাচন করতে পারবেন।

  * **মূল login url (wp-login.php) আড়াল করুন** : আপনি যদি মূল login URL লুকাতে চান, এই option চালু করতে পারেন। brute-force attack ঠেকাতে এটি কার্যকর। এই option চালু থাকলে, কোনো user মূল wp-login.php link-এ access করতে গেলে Ultimate Multisite একটি 404 error দেখাবে

  * **Synchronous site publication বাধ্যতামূলক করুন:** কোনো গ্রাহক একটি নেটওয়ার্কে product-এ subscribe করার পর, নতুন pending site-টিকে একটি আসল network site-এ রূপান্তর করতে হয়। Publishing প্রক্রিয়াটি Job Queue-এর মাধ্যমে asynchronously ঘটে। signup-এর একই request-এ publication বাধ্যতামূলক করতে এই option চালু করুন।

এখন login এবং registration প্রক্রিয়ার সঙ্গে সম্পর্কিত আরও কিছু option দেখি। এগুলো একই Login & registration পেজে **Other options**-এর ঠিক নিচে রয়েছে:

  * **Default role:** signup প্রক্রিয়ার পর আপনার গ্রাহকেরা তাদের website-এ যে role পাবেন, এটি সেটিই।

  * **Jumper সক্রিয় করুন:** admin area-তে Jumper shortcut সক্রিয় করে। Jumper administrator-দের প্রতিটি menu ঘুরে না দেখে দ্রুত Ultimate Multisite screen, network object এবং অন্যান্য supported destination-এ যেতে দেয়। আপনি admin interface থেকে এই দ্রুত navigation tool লুকাতে চাইলে এটি বন্ধ করুন।

  * **User-দের main site-এও যোগ করুন:** এই option চালু করলে signup প্রক্রিয়ার পর user-কে আপনার নেটওয়ার্কের main site-এও যোগ করা হবে। আপনি এই option চালু করলে, আপনার website-এ এই user-দের **default role** সেট করার একটি option ঠিক নিচে দেখা যাবে।

  * **Multiple accounts সক্রিয় করুন:** একই email address দিয়ে আপনার নেটওয়ার্কের বিভিন্ন site-এ user-দের account রাখতে দেয়। এই option বন্ধ থাকলে, আপনার গ্রাহকেরা একই email address দিয়ে আপনার নেটওয়ার্কে চলা অন্য website-এ account তৈরি করতে পারবেন না।

login এবং registration সম্পর্কিত কাস্টমাইজযোগ্য সব option এটুকুই! সম্পাদনা শেষ হলে আপনার settings save করতে ভুলবেন না।

## একাধিক registration form ব্যবহার করা:

Ultimate Multisite 2.0 একটি checkout form editor দেয়, যা আপনাকে বিভিন্ন field, প্রস্তাবিত product ইত্যাদি দিয়ে যত খুশি form তৈরি করতে দেয়।

login এবং registration—দুই পেজেই shortcode embedded থাকে: login page-এ **[wu_login_form]** এবং registration page-এর জন্য **[wu_checkout]**। checkout form তৈরি বা build করে আপনি registration page আরও কাস্টমাইজ করতে পারেন।

এই feature access করতে, বাম side-bar-এ **Checkout Forms** menu-তে যান।

![sidebar-এ Checkout Forms menu](/img/config/checkout-forms-list.png)

এই পেজে, আপনার থাকা সব checkout form দেখতে পারবেন।

নতুন একটি তৈরি করতে চাইলে, পেজের ওপরে **Add Checkout Form**-এ click করুন।

আপনি starting point হিসেবে এই তিনটি option-এর একটি নির্বাচন করতে পারেন: single step, multi-step অথবা blank। তারপর, **Go to the Editor**-এ click করুন।

![single step, multi-step, বা blank option সহ Add Checkout Form](/img/config/checkout-forms-list.png)

অন্যভাবে, আপনার থাকা form-গুলোর নামের নিচের option-এ click করে সেগুলো edit বা duplicate করতে পারেন। সেখানে form-এর shortcode copy করার বা form delete করার option-ও পাবেন।

![edit, duplicate, এবং delete সহ checkout form hover action](/img/config/checkout-form-hover-actions.png)

আপনি single step বা multi-step নির্বাচন করলে, checkout form কাজ করার জন্য প্রয়োজনীয় basic step দিয়ে আগে থেকেই pre-populated থাকবে। এরপর চাইলে এতে অতিরিক্ত step যোগ করতে পারেন।

### একটি Checkout Form সম্পাদনা করা:

আগে যেমন বলা হয়েছে, আপনি বিভিন্ন উদ্দেশ্যে checkout form তৈরি করতে পারেন। এই উদাহরণে আমরা একটি registration form নিয়ে কাজ করব।

checkout form editor-এ যাওয়ার পর, আপনার form-এর একটি নাম দিন (যা শুধু internal reference হিসেবে ব্যবহৃত হবে) এবং একটি slug দিন (যেমন shortcode তৈরি করতে ব্যবহৃত হয়)।

![নাম ও স্লাগ ফিল্ডসহ চেকআউট ফর্ম এডিটর](/img/config/checkout-form-name-slug.png)

ফর্ম ধাপ ও ফিল্ড দিয়ে তৈরি। **নতুন চেকআউট ধাপ যোগ করুন**-এ ক্লিক করে আপনি নতুন ধাপ যোগ করতে পারেন।

![নতুন চেকআউট ধাপ যোগ করুন বোতাম](/img/config/checkout-form-add-step.png)

মোডাল উইন্ডোর প্রথম ট্যাবে আপনার ফর্মের ধাপের বিষয়বস্তু পূরণ করুন। এটিকে একটি ID, একটি নাম এবং একটি বিবরণ দিন। এগুলো বেশিরভাগই অভ্যন্তরীণভাবে ব্যবহৃত হয়।

![ID, নাম ও বিবরণসহ চেকআউট ধাপের বিষয়বস্তু ট্যাব](/img/config/checkout-form-step-content.png)

এরপর, ধাপটির দৃশ্যমানতা সেট করুন। আপনি **সবসময় দেখান**, **শুধু লগইন করা ব্যবহারকারীদের জন্য দেখান** বা **শুধু অতিথিদের জন্য দেখান**-এর মধ্যে বেছে নিতে পারেন।

![চেকআউট ধাপের দৃশ্যমানতার বিকল্প](/img/config/checkout-form-step-visibility.png)

শেষে, ধাপের স্টাইল কনফিগার করুন। এগুলো ঐচ্ছিক ফিল্ড।

![চেকআউট ধাপের স্টাইল কনফিগারেশন](/img/config/checkout-form-step-style.png)

এখন আমাদের প্রথম ধাপে ফিল্ড যোগ করার সময়। শুধু **নতুন ফিল্ড যোগ করুন**-এ ক্লিক করুন এবং আপনি যে ধরনের সেকশন চান তা নির্বাচন করুন।

![নতুন ফিল্ড যোগ করুন বোতাম](/img/config/checkout-form-add-field-button.png)![ফিল্ডের ধরন নির্বাচনের ড্রপডাউন](/img/config/checkout-form-field-type-dropdown.png)

প্রতিটি ফিল্ডে পূরণ করার জন্য আলাদা প্যারামিটার থাকে। এই প্রথম প্রবেশের জন্য, আমরা **ব্যবহারকারীনাম** ফিল্ড নির্বাচন করব।

![ব্যবহারকারীনাম ফিল্ড কনফিগারেশন](/img/config/checkout-form-username-content.png)![ব্যবহারকারীনাম ফিল্ডের প্যারামিটার](/img/config/checkout-form-username-visibility.png)![ব্যবহারকারীনাম ফিল্ডের অতিরিক্ত সেটিংস](/img/config/checkout-form-username-style.png)

আপনার যত ধাপ ও ফিল্ড দরকার, ততগুলো যোগ করতে পারেন। আপনার গ্রাহকরা যাতে একটি পণ্য বেছে নিতে পারেন, সে জন্য আপনার পণ্যগুলো দেখাতে প্রাইসিং টেবিল ফিল্ড ব্যবহার করুন। আপনি যদি আপনার ক্লায়েন্টদের একটি টেমপ্লেট বেছে নিতে দিতে চান, টেমপ্লেট নির্বাচন ফিল্ড যোগ করুন। এভাবেই এগিয়ে যান।

![টেমপ্লেট নির্বাচন ফিল্ডসহ চেকআউট ফর্ম এডিটর](/img/config/checkout-form-with-template-field.png)

_**নোট:** আপনার চেকআউট ফর্ম তৈরি করার পরে যদি আপনি কোনো পণ্য তৈরি করেন, তাহলে প্রাইসিং টেবিল সেকশনে পণ্যটি যোগ করতে হবে। আপনি যদি এটি যোগ না করেন, পণ্যটি নিবন্ধন পৃষ্ঠায় আপনার গ্রাহকদের কাছে দেখা যাবে না।_

_**নোট ২:** একটি চেকআউট ফর্ম তৈরি করতে ব্যবহারকারীনাম, ইমেল, পাসওয়ার্ড, সাইটের শিরোনাম, সাইটের URL, অর্ডার সারাংশ, পেমেন্ট এবং জমা দেওয়ার বোতাম বাধ্যতামূলক ফিল্ড।_

আপনি যখন আপনার চেকআউট ফর্মে কাজ করছেন, তখন আপনার ক্লায়েন্টরা ফর্মটি কীভাবে দেখবেন তা দেখতে যেকোনো সময় প্রিভিউ বোতাম ব্যবহার করতে পারেন। আপনি বিদ্যমান ব্যবহারকারী বা ভিজিটর হিসেবে দেখার মধ্যেও বদলাতে পারেন।

![চেকআউট ফর্ম এডিটরে প্রিভিউ বোতাম](/img/config/checkout-form-preview-button.png)![ভিজিটর বা বিদ্যমান ব্যবহারকারী হিসেবে চেকআউট ফর্ম প্রিভিউ](/img/config/checkout-form-preview-modal.png)

শেষে, **উন্নত বিকল্প**-এ আপনি **ধন্যবাদ** পৃষ্ঠার বার্তা কনফিগার করতে পারেন, কনভার্সন ট্র্যাক করার জন্য স্নিপেট যোগ করতে পারেন, আপনার চেকআউট ফর্মে কাস্টম CSS যোগ করতে পারেন বা এটিকে নির্দিষ্ট দেশে সীমাবদ্ধ করতে পারেন।

![ধন্যবাদ পৃষ্ঠা, কনভার্সন ট্র্যাকিং এবং কাস্টম CSS সহ উন্নত বিকল্প](/img/config/checkout-form-advanced.png)

ডান কলামে এই বিকল্পটি টগল করে আপনি আপনার চেকআউট ফর্ম ম্যানুয়ালি সক্রিয় বা নিষ্ক্রিয় করতে পারেন, অথবা ফর্মটি স্থায়ীভাবে মুছে ফেলতে পারেন।

![চেকআউট ফর্মের জন্য সক্রিয় টগল ও মুছে ফেলার বিকল্প](/img/config/checkout-form-active.png)

আপনার চেকআউট ফর্ম সংরক্ষণ করতে ভুলবেন না!

![চেকআউট ফর্ম সংরক্ষণ করুন বোতাম](/img/config/checkout-form-save.png)

আপনার ফর্মের শর্টকোড পেতে **শর্টকোড তৈরি করুন**-এ ক্লিক করুন এবং মোডাল উইন্ডোতে দেখানো ফলাফল কপি করুন।

![কপি করার শর্টকোডসহ শর্টকোড তৈরি করুন মোডাল](/img/config/checkout-form-editor.png)

_**নোট:** এই চেকআউট ফর্মটি আপনার নিবন্ধন পৃষ্ঠায় যোগ করতে হলে আপনাকে সেই পৃষ্ঠায় এই শর্টকোড যোগ করতে হবে।_

## URL প্যারামিটারের মাধ্যমে পণ্য ও টেমপ্লেট আগে থেকে নির্বাচন করা:

আপনি যদি আপনার পণ্যের জন্য কাস্টমাইজড প্রাইসিং টেবিল তৈরি করতে চান এবং আপনার গ্রাহক আপনার প্রাইসিং টেবিল বা টেমপ্লেট পৃষ্ঠা থেকে যে পণ্য বা টেমপ্লেট বেছে নেন, তা চেকআউট ফর্মে আগে থেকেই নির্বাচিত রাখতে চান, তাহলে এর জন্য URL প্যারামিটার ব্যবহার করতে পারেন।

### **প্ল্যানের জন্য:**

**Ultimate Multisite > পণ্য > একটি প্ল্যান নির্বাচন করুন**-এ যান। পৃষ্ঠার উপরে **শেয়ারযোগ্য লিংক কপি করতে ক্লিক করুন** বোতামটি দেখতে পাবেন। আপনার চেকআউট ফর্মে এই নির্দিষ্ট প্ল্যান আগে থেকে নির্বাচন করতে এই লিংক ব্যবহার করতে পারেন।

![শেয়ারযোগ্য লিংক বোতামসহ পণ্য পৃষ্ঠা](/img/config/products-list.png)

মনে রাখবেন, এই শেয়ারযোগ্য লিংকটি শুধু **প্ল্যান**-এর জন্য বৈধ। আপনি প্যাকেজ বা পরিষেবার জন্য শেয়ারযোগ্য লিংক ব্যবহার করতে পারবেন না।

### টেমপ্লেটের জন্য:

আপনি যদি আপনার চেকআউট ফর্মে সাইট টেমপ্লেট আগে থেকে নির্বাচন করতে চান, তাহলে আপনার নিবন্ধন পৃষ্ঠার URL-এ এই প্যারামিটারটি ব্যবহার করতে পারেন: **?template_id=X**। "X"-এর জায়গায় **সাইট টেমপ্লেট ID নম্বর** বসাতে হবে। এই নম্বর পেতে **Ultimate Multisite > সাইট**-এ যান।

আপনি যে সাইট টেমপ্লেট ব্যবহার করতে চান, তার ঠিক নিচে **পরিচালনা করুন**-এ ক্লিক করুন। আপনি SITE ID নম্বর দেখতে পাবেন। আপনার চেকআউট ফর্মে এই নির্দিষ্ট সাইট টেমপ্লেট আগে থেকে নির্বাচিত রাখতে শুধু এই নম্বরটি ব্যবহার করুন। এখানে আমাদের ক্ষেত্রে URL প্যারামিটার হবে **?template_id=2**।

![সাইট টেমপ্লেট ID দেখানো সাইটের তালিকা](/img/config/site-templates-list.png)

ধরা যাক আমাদের নেটওয়ার্ক ওয়েবসাইট হলো [**www.mynetwork.com**](http://www.mynetwork.com) এবং আমাদের চেকআউট ফর্মসহ নিবন্ধন পৃষ্ঠাটি **/register** পৃষ্ঠায় রয়েছে। এই সাইট টেমপ্লেট আগে থেকে নির্বাচিত অবস্থায় সম্পূর্ণ URL দেখতে হবে [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**।

আর চাইলে আপনি আপনার চেকআউট ফর্মে পণ্য ও টেমপ্লেট দুটোই আগে থেকে নির্বাচন করতে পারেন। এর জন্য আপনাকে শুধু প্ল্যানের শেয়ারযোগ্য লিংক কপি করে শেষে টেমপ্লেট প্যারামিটার পেস্ট করতে হবে। এটি দেখতে হবে [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**।
