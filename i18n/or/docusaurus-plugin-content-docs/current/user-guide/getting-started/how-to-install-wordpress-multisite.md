---
title: WordPress Multisite କିପରି ଇନଷ୍ଟଲ୍ କରିବ?
sidebar_position: 2
_i18n_hash: 81ac2c706ca3b3b48bacaf85039d4753
---
# ମୁଁ କିପରି WordPress Multisite ଇନଷ୍ଟଲ କରିବି?

WordPress Multisite ଆପଣଙ୍କୁ ଏକ ସମୟରେ ଅନେକ ସାଇଟ୍‌ର ନେଟୱାର୍କ (network) ରଖିବାକୁ ଅନୁମତି ଦିଏ। ଏହା ଏକ built-in feature, କିନ୍ତୁ ଡିଫାଉଟଲି ଭାବରେ ଏହା ଆକ୍ଟିଭ ହୋଇଥାଏ ନାହିଁ।

:::tip
Ultimate Multisite ମଧ୍ୟରେ ଏକ **[built-in Multisite Setup Wizard](./multisite-setup-wizard)** ଅଛି ଯାହା ଏହି ସମଗ୍ର ପ୍ରକ୍ରିୟାକୁ ଆଟୋମେଟ୍ (automate) କରିଦିଏ। ଯଦି ଆପଣ Ultimate Multisite ଇନଷ୍ଟଲ କରିଛନ୍ତି, ତେବେ ମୁଁ ନିମ୍ନରେ ଦିଆଯାଇଥିବା ମାନୁଷ୍ୟମାନଙ୍କ ପାଇଁ ସୂଚନା ଅପେକ୍ଷା କରୁଛି।
:::

କାରଣ Ultimate Multisite ଏକ network-only plugin, ଏହି tutorial ରେ ଆପଣ WordPress Multisite ମାନୁଷ୍ୟମାନଙ୍କ ଦ୍ୱାରା ମାନୁଷ୍ୟମାନଙ୍କ ପାଇଁ ଏହାକୁ କିପରି manual ଭାବେ ଇନଷ୍ଟଲ କରିବା ଏବଂ set up କରିବା ଶିଖିବେ। ଏହି textଟି WPBeginner ର [How to Install and Setup WordPress Multisite Network](https://www.wpbeginner.com/wp-tutorials/how-to-install-and-setup-wordpress-multisite-network/) ଉପରେ ଆଧାରିତ।

**ଆପଣ ନିଜ multisite network ସୃଷ୍ଟି କରିବା ପୂର୍ବରୁ ଏହାକୁ ଦେଖିବା:**

  * ଭଲ WordPress hosting ନିଅନ୍ତୁ! ଏକ network ରେ ଅଛି ସାଇଟ୍‌ଗୁଡ଼ିକ ସମାନ server resources ବ୍ୟବହାର କରେ।

  * ଯଦି ଆପଣଙ୍କ ପାଖରେ କେବଳ ଦୁଇ-ତିଟି low traffic ସାଇଟ୍ ଅଛି, ତେବେ shared hosting ଆପଣଙ୍କ ପାଇଁ ଠିକ୍ ହୋଇଯାଇପାରେ।

  * ଅଧିକ **Managed WordPress hosting providers** ସମସ୍ତ Multisite out-of-the-box (ସେମାନେ WordPress ରେ Multisite ହିଁ pre-installed କରି ଦିଅନ୍ତି, ଯାହା ଆପଣଙ୍କ ପାଇଁ activate ଓ configure ହୋଇଥାଏ)। ଏହା WP Engine, Closte, Cloudways ଭଳି ସ୍ଥାନୀୟ provider ଙ୍କ ପାଇଁ। ଆପଣ ନିଶ୍ଚିତ ନୁହଁନ୍ତି କି ଏହା ଆପଣଙ୍କ host provider ପାଇଁ ସେମାନଙ୍କ ସହିତ ହୋଇଥାଏ କି, ତେବେ ଏହି tutorial ଚାଲିବା ପୂର୍ବରୁ ସେମାନଙ୍କ ସହିତ contact କରିଦିଅନ୍ତୁ।

  * FTP ବ୍ୟବହାର କରି WordPress ଇନଷ୍ଟଲ୍ କରିବା ଏବଂ files एडिट କରିବା ବି ଜାଣିବା ଭଲ।

_**ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ**_ **:** ଯଦି ଆପଣ ଏକ existing WordPress website ରେ multisite network set up କରୁଛନ୍ତି, ତେବେ ନିଶ୍ଚିତ କରିବାକୁ ଭୁଲନ୍ତୁ ନାହିଁ:

  * ଆପଣଙ୍କ WordPress site ର ସମ୍ପୂର୍ଣ୍ଣ backup ନେଇଛନ୍ତି।

  * ଆପଣଙ୍କ plugins page ରେ ଯାଇ bulk actions ମଧ୍ୟରେ _Deactivate_ ବାଛିပြီး selection କରିସାରିଥିବା ସମସ୍ତ pluginକୁ deactivate କରିଦେଲେ।

মাল্টিসাইট চালু করার জন্য, প্রথমে FTP ক্লায়েন্ট বা cPanel ফাইল ম্যানেজার ব্যবহার করে আপনার সাইটের সাথে সংযোগ করুন এবং আপনার `wp-config.php` ফাইলটি সম্পাদনার জন্য খুলুন।

`_*এইটুকুই, এডিট করা বন্ধ করুন! হ্যাপি ব্লগিং।*_` লাইনের আগে নিচের কোড স্নিপেটটি যোগ করুন:

```php
define('WP_ALLOW_MULTISITE', true);
```

তারপর আপনার `wp-config.php` ফাইলটি সেভ করে সার্ভারে আবার আপলোড করুন।

আপনার সাইটে মাল্টিসাইট ফিচার চালু করার পর, এখন আপনার নেটওয়ার্ক সেটআপ করার সময় এসেছে।

**Tools » Network Setup** এ যান।

এখন আপনাকে ওয়ার্ডপ্রেসে বলতে হবে যে আপনার নেটওয়ার্কের সাইটগুলোর জন্য আপনি কী ধরনের ডোমেইন কাঠামো ব্যবহার করবেন: সাবডোমেইন নাকি সাবডিরেক্টরি।

যদি আপনি সাবডোমেইন বেছে নেন, তবে ডোমেইন ম্যাপিংয়ের জন্য আপনার DNS সেটিংস পরিবর্তন করতে হবে এবং আপনার মাল্টিসাইট নেটওয়ার্কের জন্য _**ওয়াইল্ডকার্ড সাবডোমেইন**_ সেটআপ করতে ভুলবেন না।

Network Setup-এ ফিরে এসে আপনার নেটওয়ার্কের জন্য একটি টাইটেল দিন এবং নিশ্চিত করুন যে Network admin email-এ ইমেল ঠিকানাটি সঠিক আছে। চালিয়ে যাওয়ার জন্য _Install_ ক্লিক করুন।

আপনার `wp-config.php`-তে ওয়ার্ডপ্রেস দ্বারা সরবরাহ করা এই কোডটি যোগ করুন:

```php
define('MULTISITE', true); define('SUBDOMAIN_INSTALL', true); define('DOMAIN_CURRENT_SITE', 'multisite.local'); define('PATH_CURRENT_SITE', '/'); define('SITE_ID_CURRENT_SITE', 1); define('BLOG_ID_CURRENT_SITE', 1);
```

এবং আপনার `**.htaccess**` ফাইলে ওয়ার্ডপ্রেস দ্বারা সরবরাহ করা এই কোডটিও যোগ করুন:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]

# wp-admin এর জন্য শেষে একটি স্ল্যাশ যোগ করা হচ্ছে
RewriteRule ^wp-admin$ wp-admin/ [R=301,L]
```

RewriteCond %{REQUEST_FILENAME} -f [OR] RewriteCond %{REQUEST_FILENAME} -d RewriteRule ^ - [L] RewriteRule ^(wp-(content|admin|includes)._) $1 [L] RewriteRule ^(._.php)$ $1 [L] RewriteRule . index.php [L]

FTP client ବା ଫାଇଲ ମ୍ୟାନେଜର (ଯଦି ଆପଣ cPanel ଭଳି କୌଣସି ଅଟୋମେଟିକ୍ ପ୍ଲାଟଫର୍ମ ବ୍ୟବହାର କରୁଛନ୍ତି) ବ୍ୟବହାର କରି ଏହି ଦୁଇଟି ଫାଇଲରେ କୋଡ୍ କପି ଓ ପେଷ୍ଟ କରନ୍ତୁ।

ଶେଷରେ, ଆପଣଙ୍କର WordPress ସାଇଟ୍‌କୁ ନୂଆ ଭାବରେ ଲଗଇନ୍ (re-login) କରନ୍ତୁ ଯାହାଦ୍ୱାରା ଆପଣ ଆପଣଙ୍କ multisite ନେଟୱାର୍କକୁ ପ୍ରବେଶ କରିପାରିବେ।

**Ultimate Multisite install କରିବା ପୂର୍ବ, ଆପଣଙ୍କ WordPress Multisite ଇନଷ୍ଟଲରେ ଏକ ସବସାଇଟ୍ (subsite) ସୃଷ୍ଟି କରିପାରିବେ କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରିବା ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ।**

ସବସାଇଟ୍ ସୃଷ୍ଟି କରିବା ପାଇଁ:

  1. ଆପଣଙ୍କର websites wp-admin ରେ ଖୋଲନ୍ତୁ।

  2. My Sites > Sites (/wp-admin/network/sites.php) ରେ ଯାଆନ୍ତୁ।

  3. ଉପରେ Add New କ୍ଲିକ୍ କରନ୍ତୁ।

  4. ସମସ୍ତ ଫିଲ୍ଡ ଭରିଦିଅନ୍ତୁ:

  * Site Address — କେବେ ବି “www” ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।

  * Subdomain: [siteaddress.yourdomain.com](http://siteaddress.yourdomain.com)

  * Subdirectory: [yourdomain.com/siteaddress](http://yourdomain.com/siteaddress)

  * Site Title — ସାଇଟ୍‌ର ନାମ, ଏହା ପରେ ବଦଳାଇପାରିବ।

  * Admin Email — ସବସାଇଟ୍‌ಗಾಗಿ ପ୍ରଥମ ଇନଷ୍ଟଲ୍ ଆଡମିନ୍ (admin user) ଭାବରେ ଏହାକୁ ସେଟ କରନ୍ତୁ।

![WordPress Multisite ରେ ନୂଆ ସାଇଟ୍ ଫର୍ମ](/img/admin/sites-list.png)

ଫିଲ୍ଡଗୁଡ଼ିକ ପୂରଣ କରିବା ପରେ, "Add site" ବଟନ୍‌କୁ କ୍ଲିକ୍ କରନ୍ତୁ। ନୂଆ ସବସାଇଟ୍ ସୃଷ୍ଟି ହେବା ପରେ, ଏହା ଠିକ୍ ଭାବରେ କାର୍ଯ୍ୟ କରୁଛି କି ନାହିଁ ଯାଞ୍ଚ କରିବା ପାଇଁ ଏହାକୁ ପ୍ରବେଶ କରନ୍ତୁ।

## ସାଧାରଣ ସମସ୍ୟା:

### 1. ମୁଁ ନୂଆ ସାଇଟ୍ ସୃଷ୍ଟି କରିପାରୁଛି, କିନ୍ତୁ ସେଗୁଡ଼ିକ ପ୍ରବେଶୀ ହୋଇପାରୁନାହିଁ।

ଯଦି ଆପଣ ସବସାଇଡେମେନ୍ (subdomains) ବ୍ୟବହାର କରିଛନ୍ତି, ତେବେ ଆପଣଙ୍କ multisite ନେଟୱାର୍କ ପାଇଁ ವೈଲ୍ଡ୍ କ୍ୱାଲ୍ଡ୍ ସବସାଇଡେମେନ୍ (wildcard subdomains) ମଧ୍ୟ ସେଟ୍ କରିବାକୁ ପଡ଼ିବ।

ଏହା କରିବା ପାଇଁ, ଆପଣଙ୍କ ୱେବସାଇଟ୍ ହୋଷ୍ଟିଂ ଆକାଉଣ୍ଟର କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍‌କୁ (ଯେପରି cPanel/Plesk/Direct Admin ଆପଣଙ୍କ ହୋଷ୍ଟିଂ ପ୍ରଦାତା ଅନୁଯାୟୀ) ଯାଆନ୍ତୁ।

"Domains" ବା "Subdomains" ପାଇଁ ଏକ ବିକଳ୍ପ ଖୋଜନ୍ତୁ। କିଛି କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲରେ ଏହାକୁ “Domain administration” ଭାବରେ ନାମ ଦିଆଯାଇଥାଏ।

서브도메인 필드에 별표(*)를 입력하세요. 그러면 해당 서브도메인을 추가할 도메인을 선택하라는 메시지가 나타납니다.

선택한 도메인의 문서 루트는 자동으로 감지됩니다. 와일드카드 서브도메인을 추가하려면 _Create_ 또는 _Save_ 버튼을 클릭하세요. 항목은 “*.[mydomain.com](http://mydomain.com)”와 같이 보일 것입니다.
