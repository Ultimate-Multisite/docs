---
title: GriddPane ସମନ୍ୱୟ
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ইন্টিগ্রেশন

## ওভারভিউ {#overview}
GridPane হলো একটি বিশেষ ওয়ার্ডপ্রেস হোস্টিং কন্ট্রোল প্যানেল যা সিরিয়াস ওয়ার্ডপ্রেস পেশাদারদের জন্য তৈরি করা হয়েছে। এই ইন্টিগ্রেশনটি Ultimate Multisite এবং GridPane-এর মধ্যে স্বয়ংক্রিয় ডোমেইন সিঙ্কিং এবং SSL সার্টিফিকেট পরিচালনার সুবিধা দেয়।

## বৈশিষ্ট্যসমূহ {#features}
- স্বয়ংক্রিয় ডোমেইন সিঙ্কিং
- SSL সার্টিফিকেট ব্যবস্থাপনা
- SUNRISE কনস্ট্যান্টের স্বয়ংক্রিয় কনফিগারেশন

## প্রয়োজনীয়তা {#requirements}
আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি সংজ্ঞায়িত করতে হবে:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

## সেটআপ নির্দেশাবলী {#setup-instructions}

### ১. আপনার GridPane API ক্রেডেনশিয়াল সংগ্রহ করুন {#1-get-your-gridpane-api-credentials}

১. আপনার GridPane ড্যাশবোর্ডে লগ ইন করুন।
২. "Settings" > "API"-তে যান।
৩. যদি আপনার API কী না থাকে তবে একটি API কী তৈরি করুন।
৪. আপনার API কী কপি করুন।

### ২. আপনার সার্ভার এবং সাইট আইডি সংগ্রহ করুন {#2-get-your-server-and-site-ids}

১. আপনার GridPane ড্যাশবোর্ডে, "Servers"-এ যান।
২. যেখানে আপনার ওয়ার্ডপ্রেস মাল্টিসাইট হোস্ট করা আছে সেই সার্ভারটি নির্বাচন করুন।
৩. সার্ভার আইডি নোট করুন (যা URL বা সার্ভার ডিটেইলস পেজে দেখা যায়)।
৪. "Sites"-এ যান এবং আপনার ওয়ার্ডপ্রেস সাইটটি নির্বাচন করুন।
৫. সাইট আইডি নোট করুন (যা URL বা সাইট ডিটেইলস পেজে দেখা যায়)।

### ৩. wp-config.php এ কনস্ট্যান্ট যোগ করুন {#3-add-constants-to-wp-configphp}

আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলি যোগ করুন:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ৪. ইন্টিগ্রেশন সক্ষম করুন {#4-enable-the-integration}

১. আপনার ওয়ার্ডপ্রেস অ্যাডমিন থেকে, Ultimate Multisite > Settings-এ যান।
২. "Domain Mapping" ট্যাবে যান।
৩. নিচে স্ক্রল করে "Host Integrations"-এ যান।
৪. GridPane ইন্টিগ্রেশন চালু (Enable) করুন।
৫. "Save Changes" ক্লিক করুন।

## এটি কিভাবে কাজ করে {#how-it-works}

যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপ করা হয়:

୧. ଇంటిଗ୍ରେସନ୍ ଆପିଗ୍ରାଇଡ୍ (GridPane) କୁ ଆପଣଙ୍କ ସାଇଟ୍‌ରେ ଡୋମେନ୍ ଯୋଗ କରିବା ପାଇଁ ଏକ ଅନୁରୋଧ ଜଣାଏ।
୨. GridPane ଆପଣଙ୍କ ପାଇଁ SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଭେସନିଂ (provisioning) ନିଜେ ମାନେ ବ୍ୟବହାର କରେ।
୩. ଯେତେବେଳେ ଏକ ଡୋମେନ୍ ମ୍ୟାପିଙ୍ଗ (domain mapping) ହଟ୍ କରାଯାଏ, ଇంటిଗ୍ରେସନ୍ ସେହି ଡୋମେନ୍‌କୁ GridPane ରୁ ବାହାର କରିଦେବ।

ଇంటిଗ୍ରେସନ୍ ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ SUNRISE କన్‌ଷ୍ଟାଣ୍ଟ୍‌କୁ ମଧ୍ୟ ଆତ୍ମେୟିତ ଭାବରେ ପରିଚାଳନା କରେ, ଯାହା ଡୋମେନ୍ ମ୍ୟାପିଙ୍ଗ ସଠିକ୍ ଭାବରେ କାର୍ଯ୍ୟ କରିବା ପାଇଁ ଆବଶ୍ୟକ।

## SUNRISE କన్‌ଷ୍ଟାଣ୍ଟ୍ ପରିଚାଳନା (Management) {#sunrise-constant-management}

GridPane ଇంటిଗ୍ରେସନ୍ ର ଏକ ବିଶେଷ ଅଲଗା ବୈଶିଷ୍ଟ୍ୟ ହେଉଛି, ଯେଉଁଥିରେ ଏହା `wp-config.php` ଫାଇଲରେ SUNRISE କన్‌ଷ୍ଟାଣ୍ଟ୍‌କୁ ଆପଣଙ୍କର ନିଜ ଡୋମେନ୍ ମ୍ୟାପିଙ୍ଗ ସିଷ୍ଟମ୍ ସହିତ ବିରୋଧ (conflict) ରୁ ରକ୍ଷା କରିବା ପାଇଁ ସେଥିରେ ଅସ୍ୱୀକାର କରୁଛି। ଏହା ଦ୍ୱାରା ଦୁଇଟି ସିଷ୍ଟମ୍ ସମସ୍ୟା ବିନା ମିଶି କାର୍ଯ୍ୟ କରିପାରନ୍ତି।

## ତ୍ରୁଟି ସମାଧାନ (Troubleshooting) {#troubleshooting}

### API koneksi ସମସ୍ୟା {#api-connection-issues}
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର API key ସଠିକ୍ ଅଛି କି ନାହିଁ।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର server ଏବଂ site ID ସଠିକ୍ ଅଛି କି ନାହିଁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର GridPane ଆକାଉଣ୍ଟରେ ଆବଶ୍ୟକ ଅନୁମତି (permissions) ରହିଛି।

### SSL Certificate ସମସ୍ୟା {#ssl-certificate-issues}
- SSL ସର୍ଟିଫିକେଟ୍ ଜାରି କରିବା ପାଇଁ GridPaneକୁ କିଛି ସମୟ ନେଇପାରେ।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋମେନ୍ଗୁ ଆପଣଙ୍କ serverର IP address ସହିତ ସଠିକ୍ ଭାବରେ ମ୍ୟାପ୍ (pointing) ହୋଇଛି କି ନାହିଁ।
- ଆପଣଙ୍କ ସାଇଟ୍‌ಗಾಗಿ GridPane ର SSL ସେଟିଙ୍ଗ୍‌କୁ ଯାଞ୍ଚ କରନ୍ତୁ।

### ଡୋମେନ୍ ଯୋଗ ନଥିବା {#domain-not-added}
- କୌଣସି ତ୍ରୁଟି ବାର୍ତ୍ତା (error messages) ପାଇଁ Ultimate Multisite ଲଗ୍‌ରେ ଯାଞ୍ଚ କରନ୍ତୁ।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଡୋମେନ୍ ଆପଣଙ୍କର GridPaneରେ ପ୍ରବେଶିତ ହୋଇନାହିଁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋମେନ୍‌ର DNS ରେକର୍ଡ୍ ସଠିକ୍ ଭାବରେ ସେଟ୍ (configured) କରାଯାଇଛି।
