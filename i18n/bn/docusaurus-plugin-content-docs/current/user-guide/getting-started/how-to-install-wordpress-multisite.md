---
title: কিভাবে ওয়ার্ডপ্রেস মাল্টিসাইট ইনস্টল করবেন
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# কিভাবে WordPress Multisite ইনস্টল করবেন?

WordPress Multisite আপনাকে একটি মাত্র ইনস্টলেশনে একাধিক সাইটের নেটওয়ার্ক তৈরি করতে দেয়। এটি একটি বিল্ট-ইন ফিচার, তবে ডিফল্টভাবে সক্রিয় থাকে না।

:::tip
Ultimate Multisite-এ একটি **[বিল্ট-ইন Multisite Setup Wizard](./multisite-setup-wizard)** আছে যা এই পুরো প্রক্রিয়াটি স্বয়ংক্রিয়ভাবে সম্পন্ন করে। আপনার কাছে Ultimate Multisite ইনস্টল করা থাকলে, নিচের ম্যানুয়াল ধাপগুলো অনুসরণ না করে wizard ব্যবহার করার পরামর্শ দিচ্ছি।
:::

যেহেতু Ultimate Multisite শুধুমাত্র নেটওয়ার্কের জন্য তৈরি একটি plugin, তাই এই টিউটোরিয়ালে আপনি শিখবেন কিভাবে ম্যানুয়ালি WordPress Multisite ইনস্টল ও সেটআপ করতে হয়। এই লেখাটি WPBeginner-এর [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) আর্টিকেলের ভিত্তিতে তৈরি।

**মাল্টিসাইট নেটওয়ার্ক তৈরির আগে যে বিষয়গুলো মাথায় রাখবেন:**

  * ভালো মানের WordPress hosting নিন! একটি নেটওয়ার্কের সব ওয়েবসাইট একই সার্ভার রিসোর্স শেয়ার করে।

  * যদি আপনার মাত্র কয়েকটি সাইট থাকে এবং ট্রাফিক কম হয়, তাহলে shared hosting আপনার জন্য যথেষ্ট হতে পারে।

  * বেশিরভাগ **Managed WordPress hosting প্রোভাইডার** Multisite রেডিমেড অবস্থায় দেয় (তারা WordPress ইনস্টল করার সময়ই Multisite সক্রিয় ও কনফিগার করা থাকে)। WP Engine, Closte, Cloudways ইত্যাদি এর উদাহরণ। আপনার হোস্ট প্রোভাইডারের ক্ষেত্রে এটা প্রযোজ্য কিনা নিশ্চিত না থাকলে, এই টিউটোরিয়াল শুরু করার আগে তাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।

  * WordPress ইনস্টল করা এবং FTP দিয়ে ফাইল এডিট করার অভিজ্ঞতা থাকলে ভালো হয়।

_**গুরুত্বপূর্ণ**_ **:** আপনি যদি একটি বিদ্যমান WordPress ওয়েবসাইটে মাল্টিসাইট নেটওয়ার্ক সেটআপ করছেন, তাহলে ভুলবেন না:

  * আপনার WordPress সাইটের সম্পূর্ণ ব্যাকআপ নিন

  * আপনার সাইটের সব plugin নিষ্ক্রিয় করুন — plugins পেজে গিয়ে bulk actions থেকে _Deactivate_ সিলেক্ট করুন এবং _Apply_ ক্লিক করুন

<!-- Screenshot unavailable: WordPress plugins page showing bulk deactivate action -->

Multisite সক্রিয় করতে, প্রথমে FTP client বা cPanel file manager ব্যবহার করে আপনার সাইটে কানেক্ট করুন এবং wp-config.php ফাইলটি এডিট করার জন্য খুলুন।

_*That's all, stop editing! Happy blogging.*_ লাইনের আগে নিচের কোড যোগ করুন:

define('WP_ALLOW_MULTISITE', true);

wp-config.php ফাইলটি সেভ করে সার্ভারে আবার আপলোড করুন।

আপনার সাইটে মাল্টিসাইট ফিচার সক্রিয় হয়ে গেলে, এখন নেটওয়ার্ক সেটআপ করার সময়।

**Tools » Network Setup**-এ যান

<!-- Screenshot unavailable: WordPress Tools menu showing Network Setup option -->

এখন WordPress-কে জানাতে হবে আপনার নেটওয়ার্কের সাইটগুলোর জন্য কোন ধরনের ডোমেইন স্ট্রাকচার ব্যবহার করবেন: subdomain নাকি subdirectory।

আপনি subdomain বেছে নিলে, domain mapping-এর জন্য আপনার DNS সেটিংস পরিবর্তন করতে হবে এবং মাল্টিসাইট নেটওয়ার্কের জন্য _**wildcard subdomains**_ সেটআপ করতে হবে।

Network Setup-এ ফিরে, আপনার নেটওয়ার্কের একটি নাম দিন এবং Network admin email-এ সঠিক ইমেইল ঠিকানা আছে কিনা নিশ্চিত করুন। এগিয়ে যেতে _Install_ ক্লিক করুন।

<!-- Screenshot unavailable: WordPress Network Setup page with network title and admin email fields -->

WordPress-এর দেওয়া এই কোডটি আপনার _**wp-config.php**_-তে যোগ করুন:

define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);

এবং WordPress-এর দেওয়া এই কোডটি আপনার _**.htaccess**_ ফাইলে যোগ করুন:

RewriteEngine On RewriteBase / RewriteRule ^index.php$ - [L]

# /wp-admin-এ trailing slash যোগ করুন

RewriteRule ^wp-admin$ wp-admin/ [R=301,L]

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client বা file manager (যেমন cPanel ব্যবহার করলে) দিয়ে এই দুটি ফাইলে কোড কপি-পেস্ট করুন।

সবশেষে, আপনার মাল্টিসাইট নেটওয়ার্কে প্রবেশ করতে আপনার WordPress সাইটে পুনরায় লগইন করুন।

**Ultimate Multisite ইনস্টল করার আগে, আপনার WordPress Multisite ইনস্টলেশনে সাবসাইট তৈরি করা যাচ্ছে কিনা পরীক্ষা করে নিশ্চিত হওয়া জরুরি।**

সাবসাইট তৈরি করতে:

  1. আপনার ওয়েবসাইটের wp-admin খুলুন

  2. My Sites > Sites-এ যান (/wp-admin/network/sites.php)

  3. উপরে Add New ক্লিক করুন

  4. সব ফিল্ড পূরণ করুন:

  * Site Address — কখনো "www" ব্যবহার করবেন না

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — সাইটের শিরোনাম, পরে পরিবর্তন করা যায়

  * Admin Email — সাবসাইটের প্রাথমিক অ্যাডমিন ইউজার হিসেবে সেট করুন

![WordPress Multisite-এ নতুন সাইট যোগ করার ফর্ম](/img/admin/sites-list.png)

ফিল্ডগুলো পূরণ করার পর "Add site" বাটনে ক্লিক করুন। নতুন সাবসাইট তৈরি হয়ে গেলে, সেটিতে প্রবেশ করে দেখুন সাবসাইটটি ঠিকমতো কাজ করছে কিনা।

## সাধারণ সমস্যা:

### ১. নতুন সাইট তৈরি করতে পারছি কিন্তু সেগুলো অ্যাক্সেস করা যাচ্ছে না।

আপনি subdomain বেছে নিলে, আপনার মাল্টিসাইট নেটওয়ার্কের জন্য wildcard subdomains সেটআপ করতে হবে।

এটি করতে, আপনার ওয়েবসাইটের hosting অ্যাকাউন্টের control panel dashboard-এ যান (যেমন আপনার hosting প্রোভাইডার অনুযায়ী cPanel/Plesk/Direct Admin)।

"Domains" বা "Subdomains" অপশন খুঁজুন। কিছু control panel-এ এটি "Domain administration" নামে থাকে।

subdomain ফিল্ডে একটি asterisk (*) লিখুন। তারপর, কোন domain name-এর অধীনে subdomain যোগ করবেন তা সিলেক্ট করতে বলা হবে।

সিলেক্ট করা domain name-এর document root স্বয়ংক্রিয়ভাবে শনাক্ত হয়ে যাবে। আপনার wildcard subdomain যোগ করতে _Create_ বা _Save_ বাটনে ক্লিক করুন। এন্ট্রিটি "*.[mydomain.com](http://mydomain.com)" এর মতো দেখাবে
