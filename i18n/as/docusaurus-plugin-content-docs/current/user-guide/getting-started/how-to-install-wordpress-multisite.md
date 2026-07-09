---
title: WordPress Multisite কেনেকৈ ইনষ্টল কৰিব
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# মই কেনেকৈ WordPress Multisite ইনষ্টল কৰিম? {#how-do-i-install-wordpress-multisite}

WordPress Multisite ব্যৱস্থাৰ জৰিয়তে আপুনি এটা একক ইনষ্টলেচনত বহুতো সাইটৰ নেটৱৰ্ক (network) ৰাখিব পাৰে। এইটো এটা বিল্ট-ইন বৈশিষ্ট্য, কিন্তু ই ডিফল্টভাৱে সক্ৰিয় নহয়।

:::tip
Ultimate Multisite-ত এটা **[বিল্ট-ইন Multisite Setup Wizard](./multisite-setup-wizard)** আছে, যিয়ে এই সমগ্ৰ প্ৰক্ৰিয়াটো স্বয়ংক্রিয় কৰি তোলে। যদি আপুনি Ultimate Multisite ইনষ্টল কৰিছে, তেন্তে তলত দিয়া হাতেৰে কৰা পদক্ষেপসমূহ অনুসৰণ কৰাৰ সলনি উইজৰ্ডটো ব্যৱহাৰ কৰিবলৈ আমি পৰামৰ্শ দিয়ে।
:::

যেহেতু Ultimate Multisite এটা নেটৱৰ্ক-মাত্ৰা প্লাগইন, সেয়ে এই টিউটোরিয়েলত, আপুনি হাতেৰে WordPress Multisite ইনষ্টল আৰু সেটআপ কৰিবলৈ শিকিব। এই পাঠ্যখন WPBeginner-ৰ [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ৰ ওপৰত ভিত্তি কৰি কৰা হৈছে।

**আপোনাৰ multisite নেটৱৰ্ক সৃষ্টি কৰাৰ আগতে গুৰুত্ব দিবলগীয়া বিষয়সমূহ:**

  * ভাল WordPress হোষ্টিং লওক! এটা নেটৱৰ্কত থকা সাইটবোৰে একেটা ছাৰ্ভাৰ সম্পদ (server resources) ভাগ কৰি লয়।

  * যদি আপোনাৰ মাত্ৰ কেইটামান কম ট্ৰেফিকৰ সাইট আছে, তেন্তে ছাৱেৰে হোষ্টিং (shared hosting) আপোনাৰ বাবে কাৰ্যকৰী হ'ব পাৰে।

  * বেছিভাগ **Managed WordPress hosting providers** লেতেৰেই Multisite ব্যৱস্থাটো দি থাকে (তেওঁলোকে আপোনাৰ বাবে Multisite সক্ৰিয় কৰি আৰু কনফিগাৰ কৰি WordPress ইনষ্টল কৰি দিয়ে)। WP Engine, Closte, Cloudways আদিৰ বাবে এনেকুৱাই। যদি আপুনি নিশ্চিত নহয় যে আপোনাৰ হোষ্ট প্ৰোভাইডৰে এনে কৰে নে নাই, তেন্তে এই টিউটোরিয়েলটো আগুৱাই নিযোৰাৰ আগতে তেওঁলোকৰ সহায়ক (support) লৈ কথা পাতি লওক।

  * FTP ব্যৱহাৰ কৰি আৰু ফাইলসমূহ এডিট কৰাতও অভ্যস্ত হোৱাটো ভাল।

_**গুৰুত্বপূৰ্ণ**_ **:** যদি আপুনি এটা বিদ্যমান WordPress ওয়েবসাইটত multisite নেটৱৰ্ক সেটআপ কৰি আছে, তেন্তে এইবোৰ কৰিবলৈ পাহৰিব নালাগে:

  * আপোনাৰ WordPress সাইটৰ এটা সম্পূৰ্ণ ব্যাকআপ (backup) সৃষ্টি কৰক

  * আপোনাৰ সাইটৰ সকলো প্লাগইন নিষ্ক্ৰিয় কৰক। আপুনি plugins পৃষ্ঠালৈ গৈ bulk actionsৰ পৰা _Deactivate_ বাছি লওক আৰু তাৰ পিছত _Apply_ ক্লিক কৰক।

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite সক্ৰিয় কৰিবলৈ, প্ৰথমে এটা FTP client বা cPanel file manager ব্যৱহাৰ কৰি আপোনাৰ সাইটলৈ সংযোগ কৰক, আৰু আপোনাৰ wp-config.php ফাইলটো এডিট কৰিবলৈ খুলক।

_*That’s all, stop editing! Happy blogging.*_ লাইনটোৰ আগতে, তলৰ কোড স্নিপেটটো যোগ কৰক:

define('WP_ALLOW_MULTISITE', true);

আপোনাৰ wp-config.php ফাইলটো সেভ কৰি ছাৰ্ভাৰলৈ আপলোড কৰক।

আপোনাৰ সাইটত multisite বৈশিষ্ট্যটো সক্ৰিয় কৰাৰ লগে লগে, এতিয়া আপোনাৰ নেটৱৰ্ক সেটআপ কৰাৰ সময়।

**Tools » Network Setup** লৈ যাওক

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

এতিয়া আপুনি WordPress लाई ক'ব লাগিব যে আপোনাৰ নেটৱৰ্কৰ সাইটবোৰৰ বাবে কি ধৰণৰ ডোমেইন কাঠামো (domain structure) ব্যৱহাৰ কৰিব। সেয়া হ'ব পাৰে ছাৱ-ডোমেইন (subdomains) বা ছাৱ-ডাইৰেক্টৰি (subdirectories)।

যদি আপুনি ছাৱ-ডোমেইন বাছি লয়, তেন্তে আপুনি ডোমেইন ম্যাপিংৰ বাবে আপোনাৰ DNS সেটিংস সলনি কৰিব লাগিব আৰু আপোনাৰ multisite নেটৱৰ্কৰ বাবে _**wildcard subdomains**_ সেটআপ কৰিব নিশ্চিত কৰিব।

Network Setup লৈ উভতি আহক, আপোনাৰ নেটৱৰ্কৰ বাবে এটা শিৰোনাম (title) দিয়ক আৰু Network admin email ত থকা ইমেইল ঠিকনাটো সঠিক হ'ব বুলি নিশ্চিত কৰক। আগুৱাই যাবলৈ _Install_ ক্লিক কৰক।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress এ দিয়া এই কোডটো আপোনাৰ _**wp-config.php**_ ত যোগ কৰক:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

আৰু WordPress এ দিয়া এই কোডটো আপোনাৰ _**.htaccess**_ ফাইলত যোগ কৰক:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# add a trailing slash to /wp-admin {#add-a-trailing-slash-to-wp-admin}

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

এই দুটা ফাইলত কোডটো কপি কৰি পেষ্ট কৰিবলৈ এটা FTP client বা এটা ফাইল মেনেজাৰ (যদি আপুনি cPanel जस्तो কিবা ব্যৱহাৰ কৰিছে) ব্যৱহাৰ কৰক।

শেহতীয়াভাৱে, আপোনাৰ multisite নেটৱৰ্কলৈ প্ৰৱেশ কৰিবলৈ আপোনাৰ WordPress সাইটত পুনৰ লগ-ইন কৰক।

**Ultimate Multisite ইনষ্টল কৰাৰ আগতে এটা পৰীক্ষা কৰাটো আৰু নিশ্চিত কৰাটো গুৰুত্বপূৰ্ণ যে আপুনি এটা ছাৱ-সাইট (subsite) সৃষ্টি কৰিব পাৰিছে।**

এটা ছাৱ-সাইট সৃষ্টি কৰিবলৈ:

  1. আপোনাৰ ওয়েবসাইটৰ wp-admin খুলক

  2. My Sites > Sites (/wp-admin/network/sites.php) লৈ যাওক

  3. ওপৰত থকা Add New ক্লিক কৰক

  4. সকলো ফিল্ড ভৰক:

  * Site Address — কেতিয়াও “www” ব্যৱহাৰ নকৰিব

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — সাইটৰ শিৰোনাম, পিছত সলনি কৰিব পাৰি

  * Admin Email — ছাৱ-সাইটৰ বাবে প্ৰথম admin user হিচাপে সেট কৰক

![Add new site form in WordPress Multisite](/img/admin/sites-list.png)

ফিল্ডবোৰ ভৰাই শেষ কৰাৰ পিছত, "Add site" বাটনটো ক্লিক কৰক। নতুন ছাৱ-সাইটটো সৃষ্টি হোৱাৰ লগে লগে, আপুনি নিশ্চিত কৰিবলৈ ইয়ালৈ গৈ ইয়াক অ্যাক্সেছ কৰক যে ছাৱ-সাইটটো কাৰ্যক্ষম (functional) আছে।

## সাধাৰণ সমস্যাসমূহ: {#common-problems}

### 1. মই নতুন সাইট সৃষ্টি কৰিব পাওঁ, কিন্তু সেয়া অ্যাক্সেছ কৰিব নোৱাৰোঁ। {#1-i-can-create-new-sites-but-they-are-not-accessible}

যদি আপুনি ছাৱ-ডোমেইন বাছি লয়, তেন্তে আপুনি আপোনাৰ multisite নেটৱৰ্কৰ বাবে wildcard subdomains সেটআপ কৰিব লাগিব।

সেয়া কৰিবলৈ, আপোনাৰ Website-ৰ হোষ্টিং একাউণ্টৰ কনট্ৰল প্যানেল ড্যাশবৰ্ডলৈ যাওক (যেনে cPanel/Plesk/Direct Admin, আপোনাৰ হোষ্টিং প্ৰোভাইডৰৰ ওপৰত নিৰ্ভৰশীল)।

“Domains” বা “Subdomains” বিকল্পটো বিচাৰক। কিছুমান কনট্ৰল প্যানেলত ইয়াক “Domain administration” বুলি লেবেল কৰা থাকে।

subdomain ফিল্ডত, এটা asterisk (*) প্ৰৱেশ কৰক। তাৰ পিছত, ইয়াক এটা ডোমেইন নাম বাছি ল'বলৈ ক'ব য'ত আপুনি ছাৱ-ডোমেইনটো যোগ কৰিব বিচাৰে।

প্ৰৱৰ্তিত ডোমেইন নামৰ বাবে document root স্বয়ংক্ৰিয়ভাৱে ধৰা পাম। আপোনাৰ wildcard subdomain যোগ কৰিবলৈ _Create_ বা _Save_ বাটনটো ক্লিক কৰক। এন্ট্ৰীটো “*.[mydomain.com](http://mydomain.com)” হ'ব লাগে।
