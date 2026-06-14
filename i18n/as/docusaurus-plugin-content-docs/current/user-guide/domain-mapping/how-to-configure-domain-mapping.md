---
title: Domain Mapping কেনেকৈ কনফিগার কৰিব?
sidebar_position: 6
_i18n_hash: 70b0ea1fd4e24e701978329f52843452
---
# Domain Mapping কেনেকৈ কনফিগার কৰিব (v2)

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

এটা premium network-ৰ আটাইতকৈ শক্তিশালী বৈশিষ্ট্যসমূহৰ এটা হ'ল আমাৰ clients-লৈ তেওঁলোকৰ site-লৈ এটা top-level domain যোগ কৰাৰ সুযোগ দিয়াটো। কাৰণ, [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) আৰু [_**joesbikeshop.com**_](http://joesbikeshop.com) - কোনটো বেছি professional লাগে? সেয়েহে Ultimate Multisite-এ এই feature টো third-party plugins ব্যৱহাৰ কৰাৰ প্ৰয়োজন নোহোৱাকৈয়ে inbuilt কৰি দিছে।

## Domain mapping কি?

নামটোৰ দৰেই, domain mapping হৈছে Ultimate Multisite-এ দিয়া এটা ক্ষমতা, যাৰ দ্বাৰা এটা custom domain-ৰ বাবে অহা অনুৰোধক লৈ সেই অনুৰোধক নেটৱৰ্কৰ সংশ্লিষ্ট site-ৰ সৈতে সেই বিশেষ domain টো যোগ কৰি ম্যাপ কৰা যায়।

### আপোনাৰ Ultimate Multisite Network-ত domain mapping কেনেকৈ সেটআপ কৰিব

Domain mapping কাম কৰিবলৈ আপোনাৰ পিনে কিছুমান set-up কৰিবলগীয়া হয়। ভাগ্যীয়াক্ৰমে, Ultimate Multisiteয়ে আপোনাৰ বাবে কঠিন কামবোৰ স্বয়ংক্রিয়ভাৱে কৰি দিয়ে, যাতে আপুনি সহজে এই requirementবোৰ পূৰণ কৰিব পাৰে।

Ultimate Multisite install কৰাৰ সময়ত, wizard-এ স্বয়ংক্রিয়ভাৱে **sunrise.php** ফাইলটো designated folder লৈ copy কৰি install কৰিব। **এই step টো সম্পূৰ্ণ নহ'লৈকে wizard-এ আগবাঢ়িব নিদিব।**

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

এয়া মানে হ'ল যে Ultimate Multisite installation wizard-এ আপোনাৰ network সেটআপ কৰা শেষ কৰাৰ পিছত, আপুনি তৎক্ষণাত custom domain ম্যাপ কৰিবলৈ আৰম্ভ কৰিব পাৰিব।

মন কৰিবলগীয়া যে Ultimate Multisite-ত domain mapping বাধ্যতামূলক নহয়। আপোনাৰ ওচৰত WordPress Multisite native domain mapping function বা আন কোনো domain mapping solution ব্যৱহাৰ কৰাৰ বিকল্প আছে।

যদি আপুনি আন domain mapping solution-ৰ বাবে Ultimate Multisite domain mapping অক্ষম কৰিবলগীয়া হয়, তেন্তে আপুনি **Ultimate Multisite > Settings > Domain Mapping** ত এই feature টো disable কৰিব পাৰে।

![Domain Mapping settings page showing admin redirect, mapping message and DNS options](/img/config/domain-mapping-settings.png)

এই option টোৰ ঠিক তলত, আপুনি **Force Admin Redirect** option টোও পাব। এই option টোৱে আপোনাক নিয়ন্ত্ৰণ কৰিবলৈ দিয়ে যে আপোনাৰ clients-সকলে তেওঁলোকৰ custom domain আৰু subdomain দুয়োটাৰ লগতে admin dashboard লৈ যাব পাৰিব নে কেৱল এটা স্থানৰ পৰা।

যদি আপুনি **Force redirect to mapped domain** select কৰে, তেন্তে আপোনাৰ clients-সকলে কেৱল তেওঁলোকৰ custom domain পৰাহে নিজৰ admin dashboard লৈ যাব পাৰিব।

**Force redirect to network domain** option টোৱে ঠিক বিপৰীত কাম কৰিব—আপোনাৰ clients-সকলে কেৱল তেওঁলোকৰ subdomain পৰাহে নিজৰ dashboard লৈ যাব পাৰিব, যদিও তেওঁলোকে custom domain পৰা sign in কৰিবলৈ চেষ্টা কৰে।

আৰু **Allow access to the admin by both mapped domain domain and network domain** option টোৱে তেওঁলোকক subdomain আৰু custom domain দুয়োটা পৰা নিজৰ admin dashboard লৈ যাবলৈ অনুমতি দিয়ে।

![Admin Redirect dropdown expanded showing the three redirect options](/img/config/domain-mapping-redirect-options.png)

Custom domain ম্যাপ কৰিবলৈ দুটা উপায় আছে। প্ৰথমটো হ'ল super admin হিচাপে আপোনাৰ network admin dashboardৰ পৰা domain name ম্যাপ কৰা, আৰু দ্বিতীয়টো হ'ল account page-ৰ তলত subsite admin dashboardৰ পৰা।

কিন্তু আপুনি এটা subsite-লৈ custom domain ম্যাপ কৰিবলৈ আৰম্ভ কৰাৰ আগতে, আপুনি নিশ্চিত কৰিব লাগিব যে domain name-ৰ **DNS settings** সঠিকভাৱে কনফিগার কৰা হৈছে।

###

### domain DNS settings সঠিকভাৱে কনফিগার কৰা আছে নেকি নিশ্চিত কৰা

এটা mapping কাম কৰিবলৈ, আপুনি নিশ্চিত কৰিব লাগিব যে যি domain ম্যাপ কৰিব বিচাৰিছে, সেয়া আপোনাৰ Network-ৰ IP address লৈ আঙুলিয়াই আছে। মন কৰিবলগীয়া যে আপোনাক Network IP address লাগে—যিটো IP address-ত Ultimate Multisite install কৰা হৈছে, সেই domainটোৰ IP address, যিটো custom domain ম্যাপ কৰিব বিচাৰিছে, সেইটো নহয়। এটা নির্দিষ্ট domainৰ IP address বিচাৰিবলৈ, আমি [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) লৈ যোৱাটো পৰামৰ্শ দিয়ে।

domain টো সঠিকভাৱে ম্যাপ কৰিবলৈ, আপুনি আপোনাৰ **DNS** configuration मा এটা **A RECORD** যোগ কৰিব লাগিব যিটো সেই **IP address** লৈ আঙুলিয়াই থাকে। DNS management বিভিন্ন domain registrar-ৰ মাজত বহুত বেলেগ হয়, কিন্তু যদি আপুনি " _Creating A Record on XXXX_ " (য'ত XXXX হৈছে আপোনাৰ domain registrar, উদাহৰণস্বৰূপে: " _Creating A Record on_ _GoDaddy_ ") বুলি search কৰে, তেন্তে অনলাইনত বহু tutorial পোৱা যায়।

যদি আপুনি ইয়াক কাম কৰাত অসুবিধা অনুভৱ কৰে, **আপোনাৰ domain registrar support-ক যোগাযোগ কৰক** আৰু তেওঁলোকে আপোনাক এই অংশটোত সহায় কৰিব পাৰিব।

যদি আপুনি আপোনাৰ clients-ক তেওঁলোকৰ নিজৰ domain ম্যাপ কৰিবলৈ অনুমতি দিবলৈ বিচাৰে, তেন্তে তেওঁলোকে এই অংশটো নিজে কৰিব লাগিব। যদি তেওঁলোকে A Record বনাাত অক্ষম হয়, তেন্তে তেওঁলোকক তেওঁলোকৰ registrar support system-ৰ ফালে আঙুলিয়াই দিয়ক।

### Super Admin হিচাপে custom domain name ম্যাপ কৰা

আপুনি আপোনাৰ network-ত super admin হিচাপে log in কৰিলে, আপুনি **Ultimate Multisite > Domains** লৈ গৈ সহজে custom domain name যোগ আৰু manage কৰিব পাৰে।

![Domains list page in Ultimate Multisite](/img/admin/domains-list.png)

এই page টোৰ তলত, আপুনি ওপৰত থকা **Add Domain** button টোত ক্লিক কৰিব পাৰে আৰু ই এটা modal window খুলিব য'ত আপুনি **custom domain name** সেট আৰু ভৰিব পাৰে, **subsite** টো য'ত custom domain name apply কৰিব বিচাৰে, আৰু এটা primary domain name হিচাপে সেট কৰিব বিচাৰে নে নাই (মন কৰিব যে আপুনি **এটা subsite-লৈ একাধিক domain name ম্যাপ কৰিব পাৰে**)।

![Add Domain modal with domain name, site picker and primary domain toggle](/img/admin/domain-add-modal.png)

সকলো তথ্য ভৰাই লোৱাৰ পিছত, আপুনি তলত থকা **Add Existing Domain** button টোত ক্লিক কৰিব পাৰে।

এয়া custom domain-ৰ DNS information verify আৰু fetch কৰাৰ প্ৰক্ৰিয়া আৰম্ভ কৰিব। আপুনি তলত এটা logোও দেখিব, যাৰ দ্বাৰা আপুনি এই প্ৰক্ৰিয়াটো ক'ৰ মাজেৰে গৈছে তাৰ অনুসৰণ কৰিব পাৰিব। এই প্ৰক্ৰিয়াটো সম্পূৰ্ণ হ'বলৈ কিছু মিনিট সময় লাগিব পাৰে।

যদি সকলো সঠিকভাৱে সেটআপ কৰা হৈছে, তেন্তে **Stage** বা status টো **Checking DNS** ৰ পৰা **Ready** লৈ সলনি হ'ব লাগিব।

<!-- Screenshot unavailable: Domain row showing the Checking DNS stage in the domains list -->

<!-- Screenshot unavailable: Domain row showing the Ready stage with the green status indicator -->

যদি আপুনি domain name টোত ক্লিক কৰে, তেন্তে আপুনি ইয়াৰ ভিতৰত কিছুমান option পালে। আহক, আমি ইয়াক চাব লাগি:

![Domain detail page with stage, site, active, primary and SSL toggles](/img/admin/domain-edit.png)

**Stage:** এইটো সেই stage য'ত domain টো আছে। যেতিয়া আপুনি প্ৰথমবাৰৰ বাবে domain টো যোগ কৰে, তেতিয়া ই সম্ভৱতঃ **Checking DNS** stage-ত হ'ব। এই প্ৰক্ৰিয়াটোৱে DNS entry সমূহ পৰীক্ষা কৰে আৰু নিশ্চিত কৰে যে সিহঁত সঠিক আছে। তাৰ পাছত, domain টো **Checking SSL** stage-ত পঠিওৱা হয়। Ultimate Multisite-এ পৰীক্ষা কৰিব যে domain টোৰ SSL আছে নে নাই আৰু আপোনাৰ domain টো **Ready** বা **Ready (without SSL)** বুলি categorize কৰিব।

**Site:** এই domain লগত জড়িত subdomain টো। ম্যাপ কৰা domain টোৱে এই বিশেষ site-টোৰ content দেখুৱাব।

**Active:** আপুনি এই option টো on বা off কৰি domain টো activate বা deactivate কৰিব পাৰে।

**Is Primary Domain?:** আপোনাৰ clients-সকলে প্ৰতিটো site-ৰ বাবে এটাৰ অধিক ম্যাপ কৰা domain থাকিব পাৰে। এই option টো ব্যৱহাৰ কৰক যদি আপুনি এই বিশেষ site-টোৰ বাবে primary domain টো select কৰিব বিচাৰে।

**Is Secure?:** যদিও Ultimate Multisite-এ enable কৰাৰ আগতে domain টোৰ SSL certificate আছে নে নাই পৰীক্ষা কৰে, তথাপিও আপুনি SSL certificate লৈ বা ন লৈ domain টো load কৰিবলৈ হাতেৰে select কৰিব পাৰে। মন কৰিবলগীয়া যে যদি website-টোৰ SSL certificate নাই আৰু আপুনি SSL লৈ force load কৰিবলৈ চেষ্টা কৰে, তেন্তে ই আপোনাক errors দিব পাৰে।

### Subsite user হিচাপে custom domain name ম্যাপ কৰা

Subsite administrator-সকলেও তেওঁলোকৰ subsite admin dashboardৰ পৰা custom domain name ম্যাপ কৰিব পাৰে।

প্ৰথমে, আপুনি **Domain mapping** settings তলত এই option টো enable কৰিব লাগিব। তলৰ screenshot টো চাওক।

<!-- Screenshot unavailable: Domain mapping settings allowing subsite users to map domains via Customer DNS Management toggle -->

আপুনি **Ultimate Multisite > Products** ত **Plan** level বা product option-ৰ তলত এই option টো set বা configure কৰিব পাৰে।

![Custom Domains section on the product edit page](/img/config/product-custom-domains.png)

যেতিয়া এই option-বোৰৰ কোনো এটা enable কৰা হয় আৰু এটা subsite user-ক custom domain name ম্যাপ কৰিবলৈ অনুমতি দিয়া হয়, তেতিয়া subsite user-ক **Account** page তলত **Domains** নামৰ এটা metabox দেখিব।

<!-- Screenshot unavailable: Domains metabox on the subsite Account page with Add Domain button -->

user-এ **Add Domain** button টোত ক্লিক কৰিব পাৰে আৰু ই কিছুমান instructions লৈ এটা modal window খুলিব।

<!-- Screenshot unavailable: Add Domain modal showing DNS A-record instructions for subsite users -->

user-এ তাৰ পাছত **Next Step** ক্লিক কৰি custom domain name যোগ কৰিবলৈ আগবাঢ়িব পাৰে। তেওঁলোকে এইটো primary domain হ'ব নে নহ'ব, সেয়াও বাছি ল'ব পাৰে।

<!-- Screenshot unavailable: Add Domain form with custom domain name field and primary domain toggle -->

<!-- Screenshot unavailable: Add Domain confirmation step that triggers DNS verification -->

**Add Domain** ক্লিক কৰিলে custom domain-ৰ DNS information verify আৰু fetch কৰাৰ প্ৰক্ৰিয়া আৰম্ভ হ'ব।

### Domain Syncing বিষয়ে

Domain Syncing হৈছে এটা প্ৰক্ৰিয়া য'ত Ultimate Multisite-এ domain mapping কাম কৰিবলৈ custom domain name টো আপোনাৰ hosting account-ত এটা add-on domain হিচাপে যোগ কৰে।

যদি আপোনাৰ hosting provider-এ Ultimate Multisite domain mapping feature লগত integration আছে, তেন্তে Domain syncing স্বয়ংক্রিয়ভাৱে হয়। বৰ্তমান, এই hosting provider-বোৰ হ'ল _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ আৰু _Cpanel._

আপুনি Ultimate Multisite settings-ত **Integration** tab তলত এই integration টো activate কৰিব লাগিব।

![Integrations tab in Ultimate Multisite settings showing hosting providers](/img/config/integrations-tab.png)

<!-- Screenshot unavailable: Hosting provider Configuration links on the Integrations settings tab -->

_মন কৰিবলগীয়া যে যদি আপোনাৰ hosting provider ওপৰত উল্লেখ কৰা provider-বোৰৰ ভিতৰত নহয়, তেন্তে**আপুনি নিজে domain name টো আপোনাৰ hosting account-ত sync বা add কৰিব লাগিব**।_
