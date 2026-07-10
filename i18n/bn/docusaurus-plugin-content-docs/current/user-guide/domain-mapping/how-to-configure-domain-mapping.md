---
title: ডোমেইন ম্যাপিং কীভাবে কনফিগার করবেন
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Mapping (v2) কীভাবে কনফিগার করবেন {#how-to-configure-domain-mapping-v2}

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite সংস্করণ 2.x সম্পর্কে।**_

একটি প্রিমিয়াম নেটওয়ার্কের সবচেয়ে শক্তিশালী বৈশিষ্ট্যগুলোর একটি হলো আমাদের ক্লায়েন্টদের তাদের সাইটে একটি টপ-লেভেল ডোমেইন যুক্ত করার সুযোগ দেওয়া। শেষ পর্যন্ত, কোনটি বেশি পেশাদার দেখায়: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) নাকি [_**joesbikeshop.com**_](http://joesbikeshop.com)? এ কারণেই Ultimate Multisite এই বৈশিষ্ট্যটি বিল্ট-ইনভাবে দেয়, তৃতীয়-পক্ষের plugin ব্যবহার করার প্রয়োজন ছাড়াই।

## Domain mapping কী? {#whats-domain-mapping}

নাম থেকেই বোঝা যায়, domain mapping হলো Ultimate Multisite প্রদত্ত এমন একটি সক্ষমতা, যা একটি কাস্টম ডোমেইনের অনুরোধ গ্রহণ করে এবং সেই নির্দিষ্ট ডোমেইনটি যুক্ত থাকা নেটওয়ার্কের সংশ্লিষ্ট সাইটের সঙ্গে অনুরোধটি ম্যাপ করে।

### আপনার Ultimate Multisite Network-এ domain mapping কীভাবে সেট আপ করবেন {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping কাজ করাতে আপনার কিছু সেটআপ দরকার। সৌভাগ্যবশত, Ultimate Multisite কঠিন কাজগুলো আপনার জন্য স্বয়ংক্রিয়ভাবে করে, তাই আপনি সহজেই প্রয়োজনীয় শর্ত পূরণ করতে পারেন।

Ultimate Multisite ইনস্টলেশনের সময়, উইজার্ড স্বয়ংক্রিয়ভাবে **sunrise.php** নির্ধারিত ফোল্ডারে কপি করে ইনস্টল করবে। **এই ধাপটি সম্পন্ন না হওয়া পর্যন্ত উইজার্ড আপনাকে এগোতে দেবে না**।

<!-- স্ক্রিনশট উপলভ্য নয়: sunrise.php ধাপসহ Ultimate Multisite ইনস্টলেশন উইজার্ড -->

এর মানে হলো, Ultimate Multisite ইনস্টলেশন উইজার্ড আপনার নেটওয়ার্ক সেটআপ সম্পন্ন করলেই আপনি সঙ্গে সঙ্গে কাস্টম ডোমেইন ম্যাপ করা শুরু করতে পারবেন।

মনে রাখবেন, Ultimate Multisite-এ domain mapping বাধ্যতামূলক নয়। আপনার কাছে WordPress Multisite-এর নিজস্ব domain mapping ফাংশন বা অন্য কোনো domain mapping সমাধান ব্যবহারের বিকল্প আছে।

অন্য domain mapping সমাধানের জন্য জায়গা করে দিতে Ultimate Multisite domain mapping নিষ্ক্রিয় করতে হলে, **Ultimate Multisite > Settings > Domain Mapping**-এর অধীনে এই বৈশিষ্ট্যটি নিষ্ক্রিয় করতে পারেন।

![অ্যাডমিন রিডাইরেক্ট, ম্যাপিং বার্তা এবং DNS বিকল্প দেখানো Domain Mapping সেটিংস পেজ](/img/config/domain-mapping-settings.png)

এই বিকল্পের ঠিক নিচে আপনি **Force Admin Redirect** বিকল্পটিও দেখতে পাবেন। এই বিকল্পটি আপনাকে নিয়ন্ত্রণ করতে দেয়, আপনার গ্রাহকেরা তাদের কাস্টম ডোমেইন ও সাবডোমেইন—দুটিতেই তাদের admin dashboard অ্যাক্সেস করতে পারবে, নাকি কেবল একটিতে পারবে।

আপনি **Force redirect to mapped domain** নির্বাচন করলে, আপনার গ্রাহকেরা শুধুমাত্র তাদের কাস্টম ডোমেইনে তাদের admin dashboard অ্যাক্সেস করতে পারবে।

**Force redirect to** **network domain** বিকল্পটি ঠিক উল্টো কাজ করবে—আপনার গ্রাহকেরা তাদের কাস্টম ডোমেইনে সাইন ইন করার চেষ্টা করলেও, শুধুমাত্র তাদের সাবডোমেইনে তাদের dashboard অ্যাক্সেস করতে পারবে।

আর **Allow access to the admin by both mapped domain domain and network domain** বিকল্পটি তাদের সাবডোমেইন এবং কাস্টম ডোমেইন—দুটিতেই admin dashboard অ্যাক্সেস করতে দেয়।

![তিনটি রিডাইরেক্ট বিকল্প দেখানো প্রসারিত Admin Redirect ড্রপডাউন](/img/config/domain-mapping-redirect-options.png)

কাস্টম ডোমেইন ম্যাপ করার দুটি উপায় আছে। প্রথমটি হলো আপনার network admin dashboard থেকে super admin হিসেবে ডোমেইন নাম ম্যাপ করা, আর দ্বিতীয়টি হলো Account পেজের অধীনে subsite admin dashboard থেকে।

তবে আপনার নেটওয়ার্কের কোনো সাবসাইটে কাস্টম ডোমেইন ম্যাপ করা শুরু করার আগে, নিশ্চিত করতে হবে যে ডোমেইন নামের **DNS settings** সঠিকভাবে কনফিগার করা আছে।

###

### ডোমেইনের DNS settings সঠিকভাবে কনফিগার করা আছে কি না নিশ্চিত করা {#making-sure-the-domain-dns-settings-are-properly-configured}

ম্যাপিং কাজ করার জন্য, আপনি যে ডোমেইনটি ম্যাপ করতে চান সেটি আপনার Network-এর IP address-এর দিকে নির্দেশ করছে কি না নিশ্চিত করতে হবে। মনে রাখবেন, আপনার Network IP address দরকার—যে ডোমেইনে Ultimate Multisite ইনস্টল করা আছে তার IP address—আপনি যে কাস্টম ডোমেইনটি ম্যাপ করতে চান তার IP address নয়। নির্দিষ্ট কোনো ডোমেইনের IP address খুঁজতে, উদাহরণ হিসেবে আমরা [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)-এ যাওয়ার পরামর্শ দিই।

ডোমেইনটি সঠিকভাবে ম্যাপ করতে, আপনার **DNS** কনফিগারেশনে সেই **IP address**-এর দিকে নির্দেশ করা একটি **A RECORD** যোগ করতে হবে। বিভিন্ন domain registrar-এর মধ্যে DNS ব্যবস্থাপনা অনেক ভিন্ন হতে পারে, তবে অনলাইনে এ বিষয়ে প্রচুর টিউটোরিয়াল আছে। আপনার domain registrar অনুযায়ী " _Creating A Record on XXXX_ " লিখে খুঁজুন, যেখানে XXXX হলো আপনার domain registrar (যেমন: " _Creating A Record on_ _GoDaddy_ ")।

এটি কাজ করাতে সমস্যা হলে, **আপনার domain registrar support-এর সঙ্গে যোগাযোগ করুন** এবং তারা এই অংশে আপনাকে সাহায্য করতে পারবে।

আপনি যদি আপনার ক্লায়েন্টদের তাদের নিজস্ব ডোমেইন ম্যাপ করার অনুমতি দিতে চান, তাহলে এই অংশের কাজ তাদের নিজেকেই করতে হবে। তারা A Record তৈরি করতে না পারলে, তাদের registrar support system-এর দিকে নির্দেশ করুন।

### Super Admin হিসেবে কাস্টম ডোমেইন নাম ম্যাপ করা {#mapping-custom-domain-name-as-super-admin}

আপনি যখন আপনার নেটওয়ার্কে super admin হিসেবে লগইন থাকবেন, তখন **Ultimate Multisite > Domains**-এ গিয়ে সহজেই কাস্টম ডোমেইন নাম যোগ ও পরিচালনা করতে পারবেন।

![Ultimate Multisite-এ Domains তালিকা পেজ](/img/admin/domains-list.png)

এই পেজে, উপরের **Add Domain** বোতামে ক্লিক করতে পারেন। এতে একটি modal window খুলবে, যেখানে আপনি **custom domain name**, যে **subsite**-এ কাস্টম ডোমেইন নাম প্রয়োগ করতে চান সেটি সেট ও পূরণ করতে পারবেন, এবং এটিকে **primary domain** নাম হিসেবে সেট করবেন কি না তা নির্ধারণ করতে পারবেন (মনে রাখবেন, আপনি **একটি subsite-এ একাধিক domain name ম্যাপ করতে পারেন**)।

![ডোমেইন নাম, সাইট পিকার এবং primary domain টগলসহ Add Domain মডাল](/img/admin/domain-add-modal.png)

সব তথ্য দেওয়ার পর, নিচের **Add Existing Domain** বোতামে ক্লিক করতে পারেন।

এটি কাস্টম ডোমেইনের DNS তথ্য যাচাই ও সংগ্রহ করার প্রক্রিয়া শুরু করবে। প্রক্রিয়াটি কীভাবে এগোচ্ছে তা অনুসরণ করার জন্য আপনি পেজের নিচে একটি লগও দেখতে পাবেন। এই প্রক্রিয়া সম্পন্ন হতে কয়েক মিনিট সময় লাগতে পারে।

Ultimate Multisite v2.13.0 নতুন সাইট তৈরি হলে স্বয়ংক্রিয়ভাবে অভ্যন্তরীণ ডোমেইন রেকর্ডও তৈরি করে, যদি হোস্টটিকে প্রতি-সাইট ডোমেইন হিসেবে বিবেচনা করা উচিত হয়। যদি হোস্টটি নেটওয়ার্কের প্রধান ডোমেইন হয়, অথবা **Site URL** ফিল্ডে কনফিগার করা শেয়ারড checkout-form বেস ডোমেইনগুলোর একটি হয়, তাহলে স্বয়ংক্রিয় mapped-domain রেকর্ড এড়িয়ে যাওয়া হয়, যাতে শেয়ারড বেস ডোমেইনটি ব্যবহারকারী প্রতিটি সাইটের জন্য উপলভ্য থাকে।

কোনো গ্রাহক Domain Seller v1.3.0 বা তার পরের সংস্করণের মাধ্যমে নতুন ডোমেইন নিবন্ধন করলে, Ultimate Multisite ডিফল্টভাবে নিবন্ধিত ডোমেইনটি গ্রাহকের নেটওয়ার্ক সাইটে স্বয়ংক্রিয়ভাবে ম্যাপ করে। সফল নিবন্ধনের পরে প্রশাসকদের আর আলাদা mapped-domain রেকর্ড যোগ করতে হবে না, যদি না তারা primary-domain ফ্ল্যাগ, সক্রিয়তার অবস্থা, বা SSL পরিচালনার মতো অপশন পরিবর্তন করতে চান।

সবকিছু সঠিকভাবে সেট আপ করা থাকলে **Stage** বা স্ট্যাটাস **Checking DNS** থেকে **Ready**-তে পরিবর্তিত হওয়া উচিত।

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

আপনি যদি ডোমেইন নামে ক্লিক করেন, তাহলে এর ভেতরে কিছু অপশন দেখতে পারবেন। চলুন দ্রুত সেগুলো দেখে নেওয়া যাক:

![স্টেজ, সাইট, সক্রিয়, primary এবং SSL টগলসহ ডোমেইন বিস্তারিত পেজ](/img/admin/domain-edit.png)

**Stage:** এটি ডোমেইনটির বর্তমান স্টেজ। আপনি প্রথমবার ডোমেইন যোগ করলে, এটি সম্ভবত **Checking DNS** স্টেজে থাকবে। প্রক্রিয়াটি DNS এন্ট্রি পরীক্ষা করবে এবং সেগুলো সঠিক কিনা নিশ্চিত করবে। এরপর ডোমেইনটি **Checking SSL** স্টেজে রাখা হবে। Ultimate Multisite ডোমেইনে SSL আছে কি না পরীক্ষা করবে এবং আপনার ডোমেইনকে **Ready** বা **Ready (without SSL)** হিসেবে শ্রেণিবদ্ধ করবে।

**Site:** এই ডোমেইনের সঙ্গে যুক্ত সাবডোমেইন। mapped domain এই নির্দিষ্ট সাইটের কনটেন্ট দেখাবে।

**Active:** ডোমেইন সক্রিয় বা নিষ্ক্রিয় করতে আপনি এই অপশনটি অন বা অফ করতে পারেন।

**Is Primary Domain?:** আপনার গ্রাহকদের প্রতিটি সাইটের জন্য একাধিক mapped domain থাকতে পারে। নির্দিষ্ট সাইটের জন্য এটি primary domain হবে কি না নির্বাচন করতে এই অপশন ব্যবহার করুন।

**Is Secure?:** Ultimate Multisite ডোমেইন সক্রিয় করার আগে SSL সার্টিফিকেট আছে কি না পরীক্ষা করলেও, আপনি চাইলে ম্যানুয়ালি SSL সার্টিফিকেটসহ বা ছাড়া ডোমেইন লোড করার অপশন নির্বাচন করতে পারেন। মনে রাখবেন, ওয়েবসাইটে SSL সার্টিফিকেট না থাকলে এবং আপনি SSL দিয়ে জোর করে লোড করার চেষ্টা করলে, ত্রুটি দেখা দিতে পারে।

### Subsite ব্যবহারকারী হিসেবে কাস্টম ডোমেইন নাম ম্যাপ করা {#mapping-custom-domain-name-as-subsite-user}

Subsite প্রশাসকরাও তাদের subsite admin dashboard থেকে কাস্টম ডোমেইন নাম ম্যাপ করতে পারেন।

প্রথমে, আপনাকে নিশ্চিত করতে হবে যে **Domain mapping** সেটিংসের অধীনে এই অপশনটি সক্রিয় করা আছে। নিচের স্ক্রিনশটটি দেখুন।

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

আপনি **Ultimate Multisite > Products**-এ **Plan** স্তর বা পণ্য অপশন থেকেও এই অপশন সেট বা কনফিগার করতে পারেন।

![পণ্য সম্পাদনা পেজে Custom Domains সেকশন](/img/config/product-custom-domains.png)

এই অপশনগুলোর কোনোটি সক্রিয় থাকলে এবং কোনো subsite ব্যবহারকারীকে কাস্টম ডোমেইন নাম ম্যাপ করার অনুমতি দেওয়া হলে, subsite ব্যবহারকারীর **Account** পেজে **Domains** নামে একটি মেটাবক্স দেখা উচিত।

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

ব্যবহারকারী **Add Domain** বোতামে ক্লিক করতে পারেন এবং এতে কিছু নির্দেশনাসহ একটি মডাল উইন্ডো খুলবে।

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

তারপর ব্যবহারকারী **Next Step**-এ ক্লিক করে কাস্টম ডোমেইন নাম যোগ করার দিকে এগোতে পারেন। এটি primary domain হবে কি না, সেটিও তারা নির্বাচন করতে পারেন।

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain**-এ ক্লিক করলে কাস্টম ডোমেইনের DNS তথ্য যাচাই ও সংগ্রহের প্রক্রিয়া শুরু হবে।

### Domain Syncing সম্পর্কে {#about-domain-syncing}

Domain Syncing হলো এমন একটি প্রক্রিয়া যেখানে Ultimate Multisite আপনার হোস্টিং Account-এ কাস্টম ডোমেইন নামকে add-on domain হিসেবে যোগ করে, **যাতে domain mapping কাজ করে**।

আপনার হোস্টিং প্রদানকারীর Ultimate Multisite domain mapping ফিচারের সঙ্গে ইন্টিগ্রেশন থাকলে domain syncing স্বয়ংক্রিয়ভাবে হয়। বর্তমানে এই হোস্টিং প্রদানকারীরা হলেন _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ এবং _Cpanel._

কোনো host-provider ইন্টিগ্রেশন সক্রিয় থাকলে, Ultimate Multisite নতুন তৈরি সাইটগুলোর জন্য provider-side DNS বা সাবডোমেইন তৈরির কাজও queue-তে যোগ করতে পারে। যদি কোনো ইন্টিগ্রেশন সেই কাজের জন্য সক্রিয় না থাকে, তাহলে অকার্যকর queue এন্ট্রি এড়াতে background job এড়িয়ে যাওয়া হয়। mapped domain-এর DNS এবং SSL পরীক্ষা স্বাভাবিক domain-stage প্রক্রিয়ার মাধ্যমে চলতে থাকে।

আপনাকে Ultimate Multisite সেটিংসে **Integration** ট্যাবের অধীনে এই ইন্টিগ্রেশন সক্রিয় করতে হবে।

![হোস্টিং প্রদানকারীদের দেখানো Ultimate Multisite সেটিংসের Integrations ট্যাব](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_মনে রাখবেন, আপনার হোস্টিং প্রদানকারী যদি উপরে উল্লেখ করা প্রদানকারীদের মধ্যে না থাকে, তাহলে **আপনাকে ম্যানুয়ালি ডোমেইন নাম sync বা যোগ করতে হবে** আপনার হোস্টিং Account-এ।_
