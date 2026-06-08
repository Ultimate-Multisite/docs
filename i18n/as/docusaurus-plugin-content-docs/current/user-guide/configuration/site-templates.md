---
title: সাইট টেমপ্লেট
sidebar_position: 4
_i18n_hash: da303a4b11e2b54bb7892c08b88a4d24
---
# Site Templates (v2)

_**NOTE: এই article টি Ultimate Multisite version 2.x-ৰ বাবেহে। যদি আপুনি version 1.x ব্যৱহাৰ কৰি থাকে, তেন্তে এই article টি চাওক**_ **।**_

Ultimate Multisite ব্যৱহাৰ কৰি এটা premium network সৃষ্টি কৰোঁতে আমাৰ লক্ষ্য হৈছে যিমান পাৰ হৈ যায় সিমানেই প্ৰক্ৰিয়াটো স্বয়ংক্রিয় কৰা, কিন্তু একে সময়তে আমাৰ ক্লায়েন্টসকলক তেওঁলোকৰ ওয়েবসাইট বনোৱাৰ সময়ত নমনীয়তা আৰু বাছনিৰ বিভিন্ন বিকল্প দিব। এই সমতাটো বজাই ৰখাৰ এটা সহজ উপায় হ'ল Ultimate Multisite Site Templates বৈশিষ্ট্যটো ব্যৱহাৰ কৰা।

## Site Template মানে কি?

নামটোৰ পৰা বুজesan, Site Template হৈছে এটা boilerplate site, যাক আপুনি নিজৰ network-ত নতুন site বনোৱাৰ বাবে এটা ভিত্তি (base) হিচাপে ব্যৱহাৰ কৰিব পাৰে।

ইয়াৰ অৰ্থ হ'ল যে আপুনি এটা base site বনাব পাৰে, বিভিন্ন plugin activate কৰিব পাৰে, এটা active theme set কৰিব পাৰে, আৰু ইয়াৰ ওপৰত আপুনি যিমান ইচ্ছা কাস্টমাইজ কৰিব পাৰে। তাৰ পিছত, যেতিয়া আপোনাৰ গ্ৰাহকে এটা নতুন account বনাওঁ, তেতিয়া তেওঁৰ হাতত কোনো অৰ্থপূৰ্ণ বিষয়বস্তু নথকা এটা default WordPress site পোৱাৰ পৰিৱৰ্তে, তেওঁৰ হাতত আপোনাৰ base site-ৰ এটা কপি পোৱা যাব, য'ত সকলো কাস্টমাইজেশ্যন আৰু বিষয়বস্তু ইতিমধ্যে থকা থাকিব।

শুনিলে ভাল লাগিছে, কিন্তু মই নতুন site template কেনেকৈ বনাওঁ? ই বনোৱাৰ দৰে সহজ।

## Site Template বনাওঁ আৰু সম্পাদনা কৰোৱা

Site Templates হৈছে আপোনাৰ network-ৰ সাধাৰণ site। এটা নতুন template বনাওঁৰ বাবে আপুনি কেৱল **Network Admin > Ultimate Multisite > Sites > Add Site** লৈ গ'লে হ'ব।

**![Add site button in the Sites list page](/img/config/site-templates-list.png)**

এনেক কৰিলে এটা modal window খুলিব, য'ত **Site title, Site Domain/path,** আৰু **Site type**ৰ বাবে পোনাকৈ কোৱা হ'ব। **Site Type** drop-down field-ৰ তলত নিশ্চিত কৰক যে আপুনি **Site Template** বাছি লৈছে।

_![Add site template modal with site type dropdown](/img/config/site-templates-list.png)_

আপুনি site template description-টোও চাওঁ পাৰে:

![Site template description](/img/config/site-template-description.png)

form-টোৰ তলত, আপুনি এটা **Copy Site** toggle switch notices কৰিব। ই আপোনাক এটা বিদ্যমান site template-ৰ ওপৰত ভিত্তি কৰি এটা নতুন site template বনাওঁৰ অনুমতি দিয়ে, যাতে আপুনি শূন্যৰ পৰা site template বনাওঁৰ সময়ত সময়ৰ সাঁচ কৰিব পাৰে।

![Add site template modal with copy site toggle](/img/config/site-templates-list.png)

### Site Template-ৰ বিষয়বস্তু কাস্টমাইজ কৰা

আপোনাৰ site template কাস্টমাইজ কৰিবলৈ, কেৱল ইয়াৰ dashboard panel-লৈ যোৱা আৰু আপোনাক যি পৰিৱৰ্তন কৰিব লাগে, সেইবোৰ কৰা। আপুনি নতুন post, page বনাওঁ পাৰে, plugin activate কৰিব পাৰে আৰু active theme সলনি কৰিব পাৰে। আপুনি Customizer লৈ গৈ সকলো ধৰণৰ কাস্টমাইজেশ্যন বিকল্প সলনি কৰিব পাৰে।

![Site template edit interface](/img/config/site-template-edit.png)

এই সকলো তথ্য গ্ৰাহকে সেই Site Template-ৰ ওপৰত ভিত্তি কৰি এটা নতুন site বনাওঁৰ সময়ত কপি হৈ যাব।

### উন্নত বিকল্পসমূহ (Advanced Options)

যদি আপুনি কাস্টম কোডিংৰ বিষয়ে কিছু জনা, তেন্তে আপুনি Search and Replace API ব্যৱহাৰ কৰিব পাৰে যাতে নতুন site বনাওঁৰ পিছত স্বয়ংক্রিয়ভাৱে তথ্য সলনি কৰিব পাৰে। এইটো About page-ত কোম্পানীৰ নাম সলনি কৰা, Contact page-ত contact email সলনি কৰা আদি বিষয়ৰ বাবে ব্যৱহাৰিক।

### Site Templates ব্যৱহাৰ কৰা

ঠিক আছে, আপুনি বিভিন্ন ডিজাইন, থীম আৰু সেটিংছ সহ বহুত Site Templates বনাওঁ। এতিয়া আপুনি এইবোৰক নিজৰ network-ত কেনেকৈ ব্যৱহাৰ কৰিব?

মূলতঃ, আপুনি এতিয়া দুটা পদ্ধতি ব্যৱহাৰ কৰিব পাৰে (একই সময়ত নহয়):

  * আপোনাৰ প্ৰতিটো Plan লগত এটা Site Template যোগ কৰা

**অথবা**

  * আপোনাৰ ক্লায়েন্টসকলক sign-up কৰাৰ সময়ত নিজে site template বাছনি কৰিবলৈ দিয়া।

#### Mode 1: Site Template নিৰ্ধাৰণ কৰা (Assign Site Template)

এই mode-ত, আপোনাৰ ক্লায়েন্টসকলে account বনাওঁৰ সময়ত template বাছনি কৰিব নোৱাৰিব, বৰঞ্চ আপুনি নিৰ্ধাৰণ কৰিব যে আপোনাৰ প্ৰতিটো Plan-ত কোনটো template ব্যৱহাৰ কৰা হ'ব।

এইটো কৰিবলৈ, আপুনি **Ultimate Multisite > Products > Edit** লৈ যাব লাগিব।

![Edit product to assign site template](/img/config/product-site-templates.png)

এনেক কৰিলে আপোনাক **Edit Product** page-লৈ লৈ যাব। **Product Options** section-ৰ তলত, **Site template** tab-টো বিচাৰি লওক আৰু drop-down field-ৰ পৰা **Assign Site** **Template** বিকল্পটো বাছি লওক। ইয়াৰ ফলত উপলব্ধ site templates-ৰ তালিকাখন খুলিব আৰু ই আপোনাক সেই product-ৰ বাবে নিৰ্দিষ্ট এটা site template বাছনি কৰিবলৈ অনুমতি দিব।

![Product site template tab with assign site template option](/img/config/product-site-templates.png)

#### Mode 2: উপলব্ধ Site Template বাছনি কৰা (Choose Available Site Template)

এই mode-ত, আপুনি sign-up প্ৰক্ৰিয়াৰ সময়ত আপোনাৰ ক্লায়েন্টসকলক এটা বাছনিৰ সুযোগ দিব। তেওঁলোকে product settings-ৰ তলত আপুনি নিৰ্ধাৰণ কৰা বিভিন্ন site templateৰ পৰা বাছনি কৰিব পাৰিব। আপোনাৰ বাবে এটা বিকল্প আছে যে আপুনি বাছনি কৰা product-ৰ তলত তেওঁলোকে কি template বাছনি কৰিব পাৰিব, তাক সীমিত কৰিব পাৰে। ই আপোনাক বিভিন্ন product-ৰ তলত বিভিন্ন set-ৰ site templates ৰাখিবলৈ অনুমতি দিয়ে, যিটো উচ্চ মূল্যৰ product-ৰ বাবে বিভিন্ন কাৰ্য্য আৰু বৈশিষ্ট্য হাইলাইট কৰিবলৈ উপযুক্ত।

**Edit Product** page-ত। **Product Options** section-ৰ তলত, **Site template** tab-টো বিচাৰি লওক আৰু drop-down field-ৰ পৰা **Choose Available Site Template** বিকল্পটো বাছি লওক। ইয়াৰ ফলত উপলব্ধ site templates-ৰ তালিকাখন খুলিব আৰু ই আপোনাক যি site template উপলব্ধ হ'ব, সেয়া বাছনি কৰিবলৈ অনুমতি দিব। আপুনি ইয়াৰ আচৰণ (Behavior) বাছনি কৰিও এইটো কৰিব পাৰে: যদি আপুনি site template-টো তালিকাখনত অন্তৰ্ভুক্ত কৰিব বিচাৰে তেন্তে **Available**। যদি আপুনি site template-টো বিকল্প হিচাপে দেখুৱাব নোৱাব বিচাৰে তেন্তে _**Not Available**_। আৰু যদি আপুনি তালিকাভুক্ত site template-ৰ এটা ডিফল্ট বাছনি কৰিব বিচাৰে তেন্তে **Pre-selected**।

![Choose available site templates with behavior options](/img/config/product-site-templates.png)

### Default Mode: Checkout form-ত Site template বাছনি

যদি আপুনি আপোনাৰ সকলো site template রেজিস্ট্রেশ্যনৰ সময়ত উপলব্ধ হ'ব বুলি বিচাৰে, বা হয় আপুনি প্ৰতিটো product-ৰ তলত site template নিৰ্ধাৰণ কৰা বা নির্দিষ্ট কৰা অধিক কাম কৰিবলৈ ভাল নহ'ব। তেন্তে আপুনি কেৱল আপোনাৰ **Checkout Form**-ৰ তলত site template বাছনি কৰি দিব পাৰে। ইয়াৰ বাবে, আপুনি কেৱল **Ultimate Multisite > Checkout Forms** লৈ যাব লাগিব। তাৰ পিছত, যি form-টো কনফিগাৰ কৰিব বিচাৰে, তাৰ তলত **Edit** ক্লিক কৰক।

![Checkout forms list page](/img/config/checkout-forms-list.png)

এনেক কৰিলে **Edit Checkout Form** page খুলিব। **Template Selection** field বিচাৰি লওক আৰু ইয়াৰ তলত **Edit** ক্লিক কৰক।

![Checkout form editor with template selection field](/img/config/checkout-form-editor.png)

এটা modal window খুলিব। **Template Sites** field-ৰ তলত আপুনি সেই সকলো site template বাছনি আৰু তালিকাভুক্ত কৰিব পাৰে যিবোৰ রেজিস্ট্রেশ্যনৰ সময়ত উপলব্ধ হ'ব। ইয়াত যি site templates নিৰ্ধাৰণ কৰা হ'ব, সেইবোৰ ব্যবহারকাৰীয়ে কোন product বাছনি কৰে তাৰ পৰা গেঁহ নহওক, উপলব্ধ হ'ব।

![Template sites field in checkout form editor](/img/config/checkout-form-step.png)

### Site Template বিকল্পসমূহ (Site Template Options)

Ultimate Multisite settings-ত উপলব্ধ আন কিছুমান site templates functions আছে, যাক আপুনি অন বা অফ কৰিব পাৰে।

![Site template options in Ultimate Multisite settings](/img/config/settings-sites.png)

#### Template Switching কৰিবলৈ অনুমতি দিয়া (Allow Template Switching)

এই বিকল্পটো সক্ষম কৰিলে আপোনাৰ ক্লায়েন্টসকলক account আৰু site বনাওঁৰ পিছত sign-up প্ৰক্ৰিয়াৰ সময়ত তেওঁলোকে বাছনি কৰা template সলনি কৰিবলৈ অনুমতি দিয়া হ'ব। এইটো ক্লায়েন্টৰ দৃষ্টিকোণৰ পৰা ব্যৱহাৰিক, কাৰণ ই তেওঁলোকক পুনৰ template বাছনি কৰিবলৈ অনুমতি দিয়ে যদি তেওঁলোকে পিছত গম পায় যে তেওঁলোকৰ মূল বাছনিটো তেওঁলোকৰ বিশেষ প্ৰয়োজনীয়তাৰ বাবে আটাইতকৈ ভাল নহয়।

#### Site-ক template হিচাপে ব্যৱহাৰ কৰিবলৈ ব্যৱহাৰকাৰীক অনুমতি দিয়া (Allow Users to use their Site as templates)

যেহেতু subsite userসকলে তেওঁলোকৰ নিজৰ site বনাওঁ আৰু ডিজাইন কৰিবলৈ সময় দিছে, সেয়েহে তেওঁলোকে নিজৰ site-টো clone কৰি বা ব্যৱহাৰ কৰিব বিচাব পাৰে, যিটো আপোনাৰ network-ত আন subsite বনাওঁৰ সময়ত উপলব্ধ site template-সমূহৰ ভিতৰত এটা হ'ব পাৰে। এই বিকল্পটোৱে তেওঁলোকক সেয়া কৰাত সহায় কৰিব।

#### Template Duplicate কৰোঁতে Media কপি কৰা (Copy Media on Template Duplication)

এই বিকল্পটো চেক কৰিলে template site-ত upload কৰা media-সমূহ নতুন site-লৈ কপি হ'ব। এইটো প্ৰতিটো plan-ত সলনি কৰিব পাৰি।

#### **Search Engine-ক Site Templates সূচী কৰাৰ পৰা ৰখা (Prevent Search Engines from indexing Site Templates)**

এই article-ত আলোচনা কৰা site templates-বোৰ boilerplate হ'লেও আপোনাৰ networkৰ অংশ, যাৰ অৰ্থ হ'ল যে ই search engine-ৰ বাবে উপলব্ধ। এই বিকল্পটোৱে site templates লুকুৱাই ৰাখিবলৈ অনুমতি দিয়ে যাতে search engine-সমূহে ইয়াক সূচী কৰিব নোৱাৰে।

## Auto search-and-replace লৈ Site Templates পূৰণ কৰা

Ultimate Multisite-ৰ আটাইতকৈ শক্তিশালী বৈশিষ্ট্যসমূহৰ এটা হ'ল রেজিস্ট্রেশ্যন form-ত arbitrary text, color, আৰু select field যোগ কৰাৰ ক্ষমতা। এবাৰ আমি সেই data-টো সংগ্ৰহ কৰিলে, আমি ইয়াক ব্যৱহাৰ কৰি বাছনি কৰা site template-ৰ কিছু অংশত বিষয়বস্তু পূৰণ কৰিব পাৰোঁ। তাৰ পিছত, নতুন site টি প্ৰকাশ কৰা হ'লে, Ultimate Multisite স্বয়ংক্রিয়ভাৱে placeholders-বোৰক রেজিস্ট্রেশ্যনৰ সময়ত দিয়া প্ৰকৃত তথ্যৰে সলনি কৰিব।

উদাহৰণস্বৰূপে, যদি আপুনি রেজিস্ট্রেশ্যনৰ সময়ত আপোনাৰ end-user-ৰ কোম্পানীৰ নাম ল'ব বিচাৰে আৰু স্বয়ংক্রিয়ভাৱে সেই কোম্পানীৰ নামটো home page-ত দিব বিচাৰে। আপোনাৰ template site home page-ত আপুনি placeholders যোগ কৰিব লাগিব, যেনে তলৰ ছবিখনত দিয়া হৈছে (placeholders-বোৰ double curly braces - {{placeholder_name}} ৰ ভিতৰত যোগ কৰিব লাগে)।

![Homepage with placeholder text in curly braces](/img/config/site-templates-list.png)

তাৰ পিছত, আপুনি কেৱল checkout form-ত এটা মিল থকা registration field যোগ কৰিব পাৰে যাতে সেই data-টো সংগ্ৰহ কৰিব পাৰি:

![Checkout form with matching registration field](/img/config/checkout-form-editor.png)

আপোনাৰ গ্ৰাহকে তাৰ পিছত সেই field-টো রেজিস্ট্রেশ্যনৰ সময়ত পূৰণ কৰিব পাৰিব।

![Registration field filled by customer](/img/config/checkout-form-step.png)

![Preview of the registration form](/img/config/checkout-form-editor.png)

Ultimate Multisite তাৰ পিছত স্বয়ংক্রিয়ভাৱে placeholders-বোৰক গ্ৰাহকে দিয়া data-ৰে সলনি কৰিব।

![Placeholders replaced with customer data on the site](/img/config/site-templates-list.png)

### "placeholderৰে ভৰা template" সমস্যা সমাধান কৰা

এই সকলোবোৰ ভাল, কিন্তু আমি এটা বেয়া সমস্যাৰ সন্মুখীন হওঁ: এতিয়া আমাৰ site templates-বোৰ—যিটো আমাৰ গ্ৰাহকে ভ্ৰমণ কৰিব পাৰে—সেবোৰ বেয়া placeholdersৰে ভৰা হৈ আছে যিয়ে বেছি কিছু ক'ব নোৱাৰে।

এইটো সমাধান কৰিবলৈ, আমি placeholders-ৰ বাবে নকল মান (fake values) সেট কৰাৰ বিকল্প দিয়ে, আৰু আমি সেই মানবোৰ ব্যৱহাৰ কৰি template sites-ত বিষয়বস্তু search and replace কৰোঁ যেতিয়া আপোনাৰ গ্ৰাহকে ভ্ৰমণ কৰি থাকে।

আপুনি **Ultimate Multisite > Settings > Sites** লৈ গৈ, আৰু তাৰ পিছত, sidebar-ত, **Edit Placeholders** link-ত ক্লিক কৰি template placeholders editor-লৈ যাব পাৰে।

![Placeholder settings under Sites settings page](/img/config/settings-sites.png)

এনেক কৰিলে আপোনাক placeholders-ৰ content editor-লৈ লৈ যাব, য'ত আপুনি placeholders আৰু তেওঁলোকৰ নিজ নিজ বিষয়বস্তু যোগ কৰিব পাৰে।

![Template placeholders content editor](/img/config/settings-sites.png)
