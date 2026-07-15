---
title: Domain Mapping কেনেকৈ কনফিগাৰ কৰিব
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Mapping কেনেকৈ Configure কৰিব (v2)

_**গুৰুত্বপূর্ণ টোকা: এই প্ৰবন্ধটো Ultimate Multisite সংস্কৰণ 2.x-ৰ বিষয়ে।**_

এটা premium network-ৰ আটাইতকৈ শক্তিশালী বৈশিষ্ট্যসমূহৰ এটাৰ হৈছে আমাৰ clients-ক তেওঁলোকৰ ছাইটসমূহত এটা top-level domain সংলগ্ন কৰাৰ সুযোগ দিয়াৰ ক্ষমতা। শেষত, কোনটো অধিক পেছাদাৰী যেন লাগে: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) নে [_**joesbikeshop.com**_](http://joesbikeshop.com)? সেইকাৰণেই Ultimate Multisite-এ তৃতীয়-পক্ষৰ plugins ব্যৱহাৰৰ প্ৰয়োজন নোহোৱাকৈ এই বৈশিষ্ট্যটো অন্তৰ্ভুক্তভাৱে আগবঢ়ায়।

## Domain mapping কি? {#whats-domain-mapping}

নামটোৱে সূচোৱাৰ দৰে, domain mapping হৈছে Ultimate Multisite-এ আগবঢ়োৱা সেই ক্ষমতা, যাৰ জৰিয়তে এটা custom domain-ৰ অনুৰোধ গ্ৰহণ কৰি সেই অনুৰোধটো network-ত সেই নিৰ্দিষ্ট domain সংলগ্ন থকা সংশ্লিষ্ট ছাইটলৈ map কৰা হয়।

### আপোনাৰ Ultimate Multisite Network-ত domain mapping কেনেকৈ setup কৰিব {#how-to-setup-domain-mapping-on-your-ultimate-multisite-network}

Domain mapping কাম কৰিবলৈ আপোনাৰ ফালৰ পৰা কিছু setup প্ৰয়োজন। সৌভাগ্যক্ৰমে, Ultimate Multisite-এ আপোনাৰ বাবে কঠিন কামবোৰ স্বয়ংক্ৰিয় কৰে যাতে আপুনি সহজেই প্ৰয়োজনীয়তাসমূহ পূৰণ কৰিব পাৰে।

Ultimate Multisite installation-ৰ সময়ত, wizard-এ স্বয়ংক্ৰিয়ভাৱে **sunrise.php** নিৰ্দিষ্ট folder-লৈ copy আৰু install কৰিব। **এই পদক্ষেপ সম্পূৰ্ণ নোহোৱালৈকে wizard-এ আপোনাক আগবাঢ়িবলৈ নিদিয়ে**।

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

ইয়াৰ অৰ্থ হৈছে Ultimate Multisite installation wizard-এ আপোনাৰ network setup সম্পূৰ্ণ কৰাৰ পিছতেই, আপুনি তৎক্ষণাৎ custom domain map কৰা আৰম্ভ কৰিব পাৰে।

মন কৰিব যে Ultimate Multisite-ত domain mapping বাধ্যতামূলক নহয়। আপোনাৰ WordPress Multisite native domain mapping function বা আন যিকোনো domain mapping solution ব্যৱহাৰ কৰাৰ বিকল্প আছে।

যদি আন domain mapping solutions-ৰ বাবে Ultimate Multisite domain mapping নিষ্ক্ৰিয় কৰিবলগীয়া হয়, আপুনি **Ultimate Multisite > Settings > Domain Mapping**-ৰ অধীনত এই বৈশিষ্ট্যটো নিষ্ক্ৰিয় কৰিব পাৰে।

![Admin redirect, mapping message আৰু DNS options দেখুওৱা Domain Mapping settings page](/img/config/domain-mapping-settings.png)

এই option-ৰ ঠিক তলত, আপুনি **Force Admin Redirect** option-টোও দেখিব পাৰে। এই option-এ আপোনাক নিয়ন্ত্ৰণ কৰিবলৈ দিয়ে যে আপোনাৰ customers-এ তেওঁলোকৰ custom domain আৰু subdomain দুয়োটাতে তেওঁলোকৰ admin Dashboard access কৰিব পাৰিব নে কেৱল ইয়াৰ এটাতহে পাৰিব।

যদি আপুনি **Force redirect to mapped domain** বাছনি কৰে, আপোনাৰ customers-এ কেৱল তেওঁলোকৰ custom domains-তহে তেওঁলোকৰ admin Dashboard access কৰিব পাৰিব।

**Force redirect to** **network domain** option-টোৱে ঠিক বিপৰীত কাম কৰিব - আপোনাৰ customers-এ কেৱল তেওঁলোকৰ subdomain-তহে তেওঁলোকৰ Dashboards access কৰিবলৈ অনুমতি পাব, আনকি তেওঁলোকৰ custom domains-ত sign in কৰিবলৈ চেষ্টা কৰিলেও।

আৰু **Allow access to the admin by both mapped domain domain and network domain** option-এ তেওঁলোকক subdomain আৰু custom domain দুয়োটাতে তেওঁলোকৰ admin Dashboards access কৰিবলৈ দিয়ে।

![তিনিটা redirect options দেখুৱাই expanded হোৱা Admin Redirect dropdown](/img/config/domain-mapping-redirect-options.png)

এটা custom domain map কৰাৰ দুটা পদ্ধতি আছে। প্ৰথমটো হৈছে super admin হিচাপে আপোনাৰ network admin Dashboard-ৰ পৰা domain name map কৰা আৰু দ্বিতীয়টো হৈছে account page-ৰ অধীনত subsite admin Dashboard-ৰ জৰিয়তে।

কিন্তু আপোনাৰ network-ৰ subsites-সমূহৰ এটালৈ custom domain map কৰা আৰম্ভ কৰাৰ আগতে, আপুনি domain name-ৰ **DNS settings** সঠিকভাৱে configured হৈছে বুলি নিশ্চিত কৰিব লাগিব।

###

### domain DNS settings সঠিকভাৱে configured হৈছে বুলি নিশ্চিত কৰা {#making-sure-the-domain-dns-settings-are-properly-configured}

Mapping কাম কৰিবলৈ, আপুনি map কৰিবলৈ পৰিকল্পনা কৰা domain-টো আপোনাৰ Network-ৰ IP address-লৈ point কৰি আছে বুলি নিশ্চিত কৰিব লাগিব। মন কৰিব যে আপোনাক Network IP address প্ৰয়োজন - Ultimate Multisite install কৰা domain-ৰ IP address - আপুনি map কৰিব বিচৰা custom domain-ৰ IP address নহয়। কোনো নিৰ্দিষ্ট domain-ৰ IP address বিচাৰিবলৈ, উদাহৰণস্বৰূপে, আমি [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html)-লৈ যাবলৈ পৰামৰ্শ দিওঁ।

Domain-টো সঠিকভাৱে map কৰিবলৈ, আপোনাৰ **DNS** configuration-ত সেই **IP address**-লৈ point কৰা এটা **A RECORD** যোগ কৰিব লাগিব। DNS management বিভিন্ন domain registrars-ৰ মাজত বহুত ভিন্ন হয়, কিন্তু আপুনি " _Creating A Record on XXXX_ " বুলি search কৰিলে, য'ত XXXX হৈছে আপোনাৰ domain registrar (উদা.: " _Creating A Record on_ _GoDaddy_ "), এই বিষয়ে অনলাইনত বহুতো tutorials আছে।

যদি আপুনি এইটো কাম কৰোৱাত অসুবিধা পাইছে, **আপোনাৰ domain registrar support-ৰ সৈতে যোগাযোগ কৰক** আৰু তেওঁলোকে এই অংশত আপোনাক সহায় কৰিব পাৰিব।

যদি আপুনি আপোনাৰ clients-ক তেওঁলোকৰ নিজৰ domains map কৰিবলৈ অনুমতি দিয়াৰ পৰিকল্পনা কৰিছে, তেওঁলোকে এই অংশৰ কাম নিজেই কৰিব লাগিব। যদি তেওঁলোকে A Record সৃষ্টি কৰিবলৈ অক্ষম হয়, তেওঁলোকক তেওঁলোকৰ registrar support system-ৰ দিশে নিৰ্দেশ কৰক।

### Super Admin হিচাপে custom domain name map কৰা {#mapping-custom-domain-name-as-super-admin}

আপুনি আপোনাৰ network-ত super admin হিচাপে logged in থাকিলে, **Ultimate Multisite > Domains**-ৰ অধীনলৈ গৈ custom domain names সহজেই যোগ আৰু manage কৰিব পাৰে।

![Ultimate Multisite-ত Domains list page](/img/admin/domains-list.png)

এই page-ৰ অধীনত, আপুনি ওপৰত থকা **Add Domain** button-ত click কৰিব পাৰে আৰু ইয়াৰ ফলত এটা modal window আহিব, য'ত আপুনি **custom domain name** , custom domain name-টো যিটো **subsite**-ত apply কৰিব বিচাৰে সেইটো set আৰু fill in কৰিব পাৰে, আৰু আপুনি ইয়াক **primary domain** name হিচাপে set কৰিব বিচাৰে নে নকৰে সেয়া সিদ্ধান্ত ল'ব পাৰে (মন কৰিব যে আপুনি **এটা subsite-লৈ একাধিক domain names map** কৰিব পাৰে)।

![Domain name, site picker আৰু primary domain toggle থকা Add Domain modal](/img/admin/domain-add-modal.png)

সকলো তথ্য ভৰোৱাৰ পিছত, আপুনি তলত থকা **Add Existing Domain** button-ত click কৰিব পাৰে।

ই custom domain-ৰ DNS তথ্য verify আৰু fetch কৰাৰ প্ৰক্ৰিয়া আৰম্ভ কৰিব। আপুনি page-ৰ তলত এটা log-ও দেখিব, যাতে আপুনি চলি থকা প্ৰক্ৰিয়াটো অনুসৰণ কৰিব পাৰে। এই প্ৰক্ৰিয়া সম্পূৰ্ণ হ'বলৈ কেইমিনিটমান সময় লাগিব পাৰে।

Ultimate Multisite v2.13.0-এ নতুন ছাইট এটা প্ৰতি-ছাইট ডমেইন হিচাপে বিবেচনা কৰিবলগীয়া হ’ষ্টত সৃষ্টি হ’লে অভ্যন্তৰীণ ডমেইন ৰেকৰ্ডো স্বয়ংক্ৰিয়ভাৱে সৃষ্টি কৰে। যদি হ’ষ্টটো নেটৱৰ্কৰ প্ৰাথমিক ডমেইন হয়, বা **ছাইট URL** ফিল্ডত কনফিগাৰ কৰা ভাগ-বতৰা কৰা চেকআউট-ফৰ্মৰ আধাৰ ডমেইনসমূহৰ এটা হয়, তেন্তে স্বয়ংক্ৰিয় মেপড-ডমেইন ৰেকৰ্ড এৰি দিয়া হয় যাতে সেই ভাগ-বতৰা কৰা আধাৰ ডমেইন ইয়াক ব্যৱহাৰ কৰা প্ৰতিটো ছাইটৰ বাবে উপলব্ধ হৈ থাকে।

যেতিয়া গ্ৰাহকে Domain Seller v1.3.0 বা তাৰ নতুন সংস্কৰণৰ জৰিয়তে নতুন ডমেইন পঞ্জীয়ন কৰে, Ultimate Multisite-এ ডিফল্টভাৱে পঞ্জীয়িত ডমেইনটো গ্ৰাহকৰ নেটৱৰ্ক ছাইটলৈ স্বয়ংক্ৰিয়ভাৱে মেপ কৰে। সফল পঞ্জীয়নৰ পিছত প্ৰশাসকসকলে আৰু পৃথক মেপড-ডমেইন ৰেকৰ্ড যোগ কৰাৰ প্ৰয়োজন নাই, যদিহে তেওঁলোকে প্ৰাথমিক-ডমেইন ফ্লেগ, সক্ৰিয়কৰণ অৱস্থা, বা SSL পৰিচালনাৰ দৰে বিকল্পসমূহ সলনি কৰিব নিবিচাৰে।

**পৰ্যায়** বা অৱস্থাটো **DNS পৰীক্ষা কৰি আছে**-ৰ পৰা **সাজু**-লৈ সলনি হ’ব লাগে, যদি সকলো সঠিকভাৱে ছেট আপ কৰা আছে।

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

যদি আপুনি ডমেইন নামত ক্লিক কৰে, আপুনি তাৰ ভিতৰত কিছু বিকল্প চাব পাৰিব। সেইবোৰলৈ দ্ৰুতভাৱে এবাৰ চাওঁ আহক:

![পৰ্যায়, ছাইট, সক্ৰিয়, প্ৰাথমিক আৰু SSL টগলসহ ডমেইন বিৱৰণ পৃষ্ঠা](/img/admin/domain-edit.png)

**পৰ্যায়:** এইটো হৈছে ডমেইনটো যি পৰ্যায়ত আছে। আপুনি প্ৰথমবাৰ ডমেইনটো যোগ কৰিলে, ই সম্ভৱতঃ **DNS পৰীক্ষা কৰি আছে** পৰ্যায়ত থাকিব। প্ৰক্ৰিয়াটোৱে DNS প্ৰবিষ্টিসমূহ পৰীক্ষা কৰিব আৰু সেইবোৰ সঠিক বুলি নিশ্চিত কৰিব। তাৰ পিছত, ডমেইনটো **SSL পৰীক্ষা কৰি আছে** পৰ্যায়ত ৰখা হ’ব। Ultimate Multisite-এ ডমেইনটোৰ SSL আছে নে নাই পৰীক্ষা কৰিব আৰু আপোনাৰ ডমেইনটো **সাজু** বা **সাজু (SSL অবিহনে)** হিচাপে শ্ৰেণীবদ্ধ কৰিব।

**ছাইট:** এই ডমেইনৰ সৈতে সংযুক্ত উপ-ডমেইন। মেপড ডমেইনে এই নিৰ্দিষ্ট ছাইটৰ বিষয়বস্তু দেখুৱাব।

**সক্ৰিয়:** আপুনি ডমেইনটো সক্ৰিয় বা নিষ্ক্ৰিয় কৰিবলৈ এই বিকল্পটো অন বা অফ টগল কৰিব পাৰে।

**প্ৰাথমিক ডমেইন নেকি?:** আপোনাৰ গ্ৰাহকৰ প্ৰতিটো ছাইটৰ বাবে এটাতকৈ অধিক মেপড ডমেইন থাকিব পাৰে। এই নিৰ্দিষ্ট ছাইটৰ বাবে এইটো প্ৰাথমিক ডমেইন নেকি নিৰ্বাচন কৰিবলৈ এই বিকল্পটো ব্যৱহাৰ কৰক।

**সুৰক্ষিত নেকি?:** Ultimate Multisite-এ ডমেইনটো সক্ষম কৰাৰ আগতে ডমেইনটোৰ SSL প্ৰমাণপত্ৰ আছে নে নাই পৰীক্ষা কৰিলেও, আপুনি SSL প্ৰমাণপত্ৰসহ বা অবিহনে ডমেইনটো লোড কৰিবলৈ মেনুৱেলি নিৰ্বাচন কৰিব পাৰে। মন কৰিব যে যদি ৱেবছাইটটোৰ SSL প্ৰমাণপত্ৰ নাই আৰু আপুনি ইয়াক SSL-সহ বলপূৰ্বক লোড কৰিবলৈ চেষ্টা কৰে, তেন্তে ই আপোনাক ত্ৰুটি দেখুৱাব পাৰে।

### Subsite ব্যৱহাৰকাৰী হিচাপে কাষ্টম ডমেইন নাম মেপ কৰা {#mapping-custom-domain-name-as-subsite-user}

Subsite প্ৰশাসকসকলেও তেওঁলোকৰ subsite প্ৰশাসন Dashboard-ৰ পৰা কাষ্টম ডমেইন নাম মেপ কৰিব পাৰে।

প্ৰথমে, আপুনি **ডমেইন মেপিং** ছেটিংছৰ অধীনত এই বিকল্পটো সক্ষম কৰা নিশ্চিত কৰিব লাগিব। তলৰ স্ক্ৰীণশ্বটটো চাওক।

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

আপুনি এই বিকল্পটো **Plan** স্তৰ বা **Ultimate Multisite > Products**-ত প্ৰডাক্ট বিকল্পসমূহৰ অধীনতো ছেট বা কনফিগাৰ কৰিব পাৰে।

![প্ৰডাক্ট সম্পাদনা পৃষ্ঠাত কাষ্টম ডমেইন অংশ](/img/config/product-custom-domains.png)

যেতিয়া সেই বিকল্পসমূহৰ যিকোনো এটা সক্ষম থাকে আৰু subsite ব্যৱহাৰকাৰীক কাষ্টম ডমেইন নাম মেপ কৰিবলৈ অনুমতি দিয়া হয়, তেতিয়া subsite ব্যৱহাৰকাৰীয়ে **Account** পৃষ্ঠাৰ অধীনত **ডমেইনসমূহ** নামৰ এটা মেটাবক্স দেখা উচিত।

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

ব্যৱহাৰকাৰীয়ে **ডমেইন যোগ কৰক** বুটামত ক্লিক কৰিব পাৰে আৰু ই কিছু নিৰ্দেশনাসহ এটা মডাল উইণ্ড’ দেখুৱাব।

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

তাৰ পিছত ব্যৱহাৰকাৰীয়ে **পৰৱৰ্তী পদক্ষেপ**-ত ক্লিক কৰি কাষ্টম ডমেইন নাম যোগ কৰিবলৈ আগবাঢ়িব পাৰে। তেওঁলোকে এইটো প্ৰাথমিক ডমেইন হ’ব নে নহয় সেয়াও বাছি ল’ব পাৰে।

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**ডমেইন যোগ কৰক**-ত ক্লিক কৰিলে কাষ্টম ডমেইনৰ DNS তথ্য পৰীক্ষা আৰু আহৰণ কৰাৰ প্ৰক্ৰিয়া আৰম্ভ হ’ব।

### ডমেইন চিঙ্কিং সম্পৰ্কে {#about-domain-syncing}

ডমেইন চিঙ্কিং হৈছে এনে এটা প্ৰক্ৰিয়া য’ত Ultimate Multisite-এ **ডমেইন মেপিং কাম কৰিবলৈ** আপোনাৰ হ’ষ্টিং Account-ত কাষ্টম ডমেইন নামটো এড-অন ডমেইন হিচাপে যোগ কৰে।

যদি আপোনাৰ হ’ষ্টিং প্ৰদানকাৰীৰ Ultimate Multisite ডমেইন মেপিং বৈশিষ্ট্যৰ সৈতে ইণ্টিগ্ৰেচন আছে, ডমেইন চিঙ্কিং স্বয়ংক্ৰিয়ভাৱে ঘটে। বৰ্তমান, এই হ’ষ্টিং প্ৰদানকাৰীসকল হৈছে _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ আৰু _Cpanel._

হ’ষ্ট-প্ৰদানকাৰী ইণ্টিগ্ৰেচন সক্ৰিয় থাকিলে, Ultimate Multisite-এ নতুনকৈ সৃষ্টি কৰা ছাইটসমূহৰ বাবে প্ৰদানকাৰী-পক্ষৰ DNS বা উপ-ডমেইন সৃষ্টি টাস্কো কিউত যোগ কৰিব পাৰে। যদি সেই টাস্কৰ বাবে কোনো ইণ্টিগ্ৰেচন শুনি থকা নাই, তেন্তে কোনো-কাম-নকৰা কিউ প্ৰবিষ্টি এৰাই চলিবলৈ পটভূমিৰ কামটো এৰি দিয়া হয়। মেপড ডমেইনসমূহৰ বাবে DNS আৰু SSL পৰীক্ষাসমূহ সাধাৰণ ডমেইন-পৰ্যায় প্ৰক্ৰিয়াৰ জৰিয়তে চলি থাকে।

আপুনি Ultimate Multisite ছেটিংছত **ইণ্টিগ্ৰেচন** টেবৰ অধীনত এই ইণ্টিগ্ৰেচন সক্ৰিয় কৰিব লাগিব।

![হ’ষ্টিং প্ৰদানকাৰী দেখুওৱা Ultimate Multisite ছেটিংছৰ ইণ্টিগ্ৰেচন টেব](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_মন কৰিব যে যদি আপোনাৰ হ’ষ্টিং প্ৰদানকাৰী ওপৰত উল্লেখ কৰা প্ৰদানকাৰীসমূহৰ এজন নহয়, **আপুনি মেনুৱেলি চিঙ্ক কৰিব লাগিব বা ডমেইন নামটো যোগ কৰিব লাগিব** আপোনাৰ হ’ষ্টিং Account-ত._
