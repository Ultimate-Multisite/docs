---
title: ସାଇବରପାନେଲ୍ ଏଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ସହିତ ଏକୀକରଣ (Integration) {#cyberpanel-integration}

ଏହି ଗାଇଡ୍‌ରେ ଆପଣଙ୍କ ନେଟୱାର୍କରେ ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍ଗୁଡ଼ିକୁ ଅଟୋମେଟିକ୍ ଭାବରେ CyberPanel-ରେ ବର୍ଚୁଆଲ୍ ହୋଷ୍ଟ (virtual host) ଭାବରେ ଯୋଡ଼ିବା ଏବଂ ଉପଯୁକ୍ତ ସ୍ୱୟଂଚାଳିତ SSL ପ୍ରଭେସନ (Let's Encrypt ମାଧ୍ୟମରେ) କରିବା ପାଇଁ Ultimate Multisite CyberPanel integration କିପରି କନଫିଗ୍ୟୁରେଟ କରିବ ବୋଲି ବୁଝାଏ।

## ଏହା କ’ଣ କରେ? {#what-it-does}

- ଯେତେବେଳେ Ultimate Multisite ରେ ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍ କରାଯାଏ, integration କେଉଁ CyberPanel API-କୁ ସେହି ଡୋମେନ୍ ପାଇଁ ଏକ ବର୍ଚୁଆଲ୍ ହୋଷ୍ଟ (virtual host) ସୃଷ୍ଟି କରିବା ପାଇଁ କଲ୍ କରେ।
- ଯେତେବେଳେ ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍‌କୁ ਹଟ୍ କରାଯାଏ, integration ସେହି ସମ୍ପର୍କିତ ବର୍ଚୁଆଲ୍ ହୋଷ୍ଟକୁ ମଧ୍ୟ ବିଲ୍ (delete) କରିବା ପାଇଁ API-କୁ କଲ୍ କରେ।
- ଯଦି ଅଟୋ-SSL ଅନ୍ୟାୟ କରାଯାଏ, integration ବର୍ଚୁଆଲ୍ ହୋଷ୍ଟ ସୃଷ୍ଟି ହେବା ପରେ ତୁରନ୍ତ Let's Encrypt ପ୍ରମାଣପତ୍ର (certificate) ପ୍ରଦାନକୁ ଆରମ୍ଭ କରେ।
- ଡୋमेन ମ୍ୟାପିଂ ସେଟିଙ୍ଗ୍‌ରେ "Auto-create www subdomain" ସେଟିଙ୍ଗ୍ ଅନୁଯାୟୀ, ଆପଣଙ୍କର `www.` ଆଲିଅସ୍ (alias)କୁ ଅ optsନାଲି ଭାବରେ ଯୋଡ଼ିବା ବା ହଟ କରିବା।

## ଆବଶ୍ୟକତା (Prerequisites) {#prerequisites}

- ଏକ ଚାଲୁଥିବା CyberPanel instance (v2.3 କିମ୍ବା ତଳେ ଅଧିକ ପରୀକ୍ଷଣୀ ଭଲ୍), ଯାହା ଆପଣଙ୍କ WordPress ସର୍ଭରଠାରୁ ପହଞ୍ଚିବାକୁ ମିଳିବ।
- CyberPanel ରେ ଏକ ଅସ୍ଥିତ ୱେବସାଇଟ୍ (website) ଯାହା ଆପଣଙ୍କର WordPress ନେଟୱାର୍କ ରୁଟ୍‌କୁ ସେଭ୍ କରୁଛି। integration ଏହି ସର୍ଭରରେ ନୂଆ ବର୍ଚୁଆଲ୍ ହୋଷ୍ଟଗୁଡ଼ିକୁ ଅନେକ କରେ (attach କରେ)।
- CyberPanel API ପ୍ରବେଶ ଅନୁମତି ଦିଆଯାଇଛି। ଯାଞ୍ଚ ପାଇଁ ଆପଣଙ୍କର CyberPanel ଇଡିନ୍ ଏବଂ ପାସୱାର୍ଡ ବ୍ୟବହୃତ ହେବ।
- ଅଟୋ-SSL ଯଥାସମୟରେ ଏକ ବୈଧ ପ୍ରମାଣପତ୍ର ଜାରି କରିବା ପାଇଁ, ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍‌ଗୁଡ଼ିକର ଆପଣଙ୍କ ସର୍ଭରର IP ଅଡ୍ରେସ୍‌କୁ DNS ରେକର୍ଡ୍ସ ଦେଖା ହୋଇଥିବା ଆବଶ୍ୟକ।

## ଆବଶ୍ୟକତା (Requirements) {#requirements}

ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ନିମ୍ନଲିଖିତ କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକ ବ୍ୟାଖ୍ୟା କରିବାକୁ ପଡ଼ିବ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ଅ optsନାଲି ଭାବରେ, ଆପଣ ଏହା ମଧ୍ୟ ବ୍ୟାଖ୍ୟା କରିପାରିବେ:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // ডিফল্ট: true — ডোমেইন তৈরি করার পর Let's Encrypt SSL চালু করবে
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // ডিফল্ট: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL সার্টিফিকেট যোগাযোগের জন্য ব্যবহার করা হয়
```

## সেটআপ নির্দেশাবলী {#setup-instructions}

### ১. CyberPanel API চালু করুন {#1-enable-the-cyberpanel-api}

১. অ্যাডমিনিস্ট্রেটর হিসাবে আপনার CyberPanel ড্যাশবোর্ডে লগইন করুন।
২. **Security** > **SSL** এ যান এবং নিশ্চিত করুন যে CyberPanel ইন্টারফেসে SSL সক্রিয় আছে (নিরাপদ API কলের জন্য এটি প্রয়োজন)।
৩. ডিফল্টভাবে, CyberPanel API এই ঠিকানায় উপলব্ধ: `https://your-server-ip:8090/api/`। এটি চালু করার জন্য কোনো অতিরিক্ত ধাপের প্রয়োজন নেই — অ্যাডমিন ব্যবহারকারীদের জন্য এটি ডিফল্টভাবে চালু থাকে।

### ২. wp-config.php এ কনস্ট্যান্ট যোগ করুন {#2-add-constants-to-wp-configphp}

`/* That's all, stop editing! */` লাইনের আগে আপনার `wp-config.php` ফাইলে নিম্নলিখিত কনস্ট্যান্টগুলো যোগ করুন:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

অটো-SSL সক্ষম করতে (প্রস্তাবিত):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### ৩. ইন্টিগ্রেশন সক্ষম করুন {#3-enable-the-integration}

১. আপনার ওয়ার্ডপ্রেস নেটওয়ার্ক অ্যাডমিন থেকে, **Ultimate Multisite** > **Settings** এ যান।
২. **Domain Mapping** ট্যাবে যান।
৩. নিচে স্ক্রল করে **Host Integrations** এ যান।
৪. **CyberPanel** ইন্টিগ্রেশন চালু করুন।
৫. **Save Changes** ক্লিক করুন।

### ৪. সংযোগ যাচাই করুন {#4-verify-connectivity}

সেটিংস উইজার্ডে বিল্ট-ইন কানেকশন টেস্ট ব্যবহার করুন:

୧. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ରେ ଯାଆନ୍ତୁ।
୨. **Test Connection** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
୩. ଏକ ସଫଳତା ବାର୍ତ୍ତା ଆପଣଙ୍କୁ ଦେଖାଇବ ଯେ ପ୍ଲଗିନ୍ CyberPanel API-କୁ ପହଞ୍ଚିପାରୁଛି ଏବଂ ସଠିକ୍ ଭାବରେ ଅଥେନ୍ଟିକ୍ ହୋଇଛି।

## ଏହା କିପରି କାମ କରେ {#how-it-works}

### ଡୋमेन ମ୍ୟପିଂ (Domain Mapping) {#domain-mapping}

Ultimate Multisite ରେ ଯେତେବେଳେ ଏକ ଡୋमेन ମ୍ୟପ୍ କରାଯାଏ:

୧. ଆଇଣ୍ଟିଗ୍ରେସନ୍ ଆପଣଙ୍କ CyberPanel ହସ୍ଟରେ `/api/createWebsite` ଉପରେ ଏକ `POST` రిକ୍ଷା (request) ପଠାଇଥାଏ।
୨. CyberPanel ଦ୍ୱାରା ନିର୍ଦ୍ଧାରିତ ପ୍ୟାକେଜ୍ ଅଧୀନରେ ଡୋमेन ପାଇଁ ଏକ ନୂଆ ଭର୍ଚୁଆଲ୍ ହସ୍ଟ୍ (virtual host) ସୃଷ୍ଟି କରେ।
୩. ଡକ୍ୟୁମେଣ୍ଟ ରୁଟ୍ ଆପଣଙ୍କ WordPress ନେଟୱର୍କ ରୁଟ୍ ଡିରେକ୍ଟୋରୀକୁ ଦେଖାଇବା ପାଇଁ ସେଟ ହୋଇଥାଏ।
୪. ଯେତେବେଳେ ଡୋमेन ମ୍ୟପିଂ ବାଦ ଦିଆଯାଏ, ସେହି ଭର୍ଚୁଆଲ୍ ହସ୍ଟ୍‌କୁ ସଫା କରିବା ପାଇଁ ଆଇଣ୍ଟିଗ୍ରେସନ୍ `/api/deleteWebsite` କୁ କଲ୍ କରେ।

### ଅଟୋ-SSL (Auto-SSL) {#auto-ssl}

ଯେତେବେଳେ `WU_CYBERPANEL_AUTO_SSL` ମୂଲ୍ୟ `true` ହୋଇଥାଏ:

୧. ଭର୍ଚୁଆଲ୍ ହସ୍ଟ୍ ସୃଷ୍ଟି ହେବା ପରେ, ଆଇଣ୍ଟିଗ୍ରେସନ୍ ଡୋमेन ପାଇଁ `/api/issueSSL` କୁ କଲ୍ କରେ।
୨. CyberPanel ACME HTTP-01 ଚ୍ୟାଲେଞ୍ଜ୍ ବ୍ୟବହାର କରି Let's Encrypt ପ୍ରମାଣପତ୍ର (certificate) ଅନୁରୋଧ କରେ।
୩. ଏହି ପ୍ରମାଣପତ୍ରଟି ମେକ୍ସିମ୍ମଲ୍ ସମୟ ପୂର୍ବରୁ CyberPanel ଦ୍ୱାରା ଆତ୍ମେଚ୍ଛା (automatically) ନୂଆ କରାଯାଇଥାଏ।

> **ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ:** Let's Encrypt ଡୋमेनକୁ ଯାଞ୍ଚ କରିବା ପାଇଁ DNS ଆପଣଙ୍କ ସର୍ଭରର IP ଆଡ୍ରେସରେ ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରସାରିତ (propagated) ହୋଇଯିବା ଆବଶ୍ୟକ। ମ୍ୟପିଂ ପରେ SSL ନିମନ୍ତେ କୌଣସି ବିଫଳତା ଘଟେ, DNS ପ୍ରସାରଣ ପାଇଁ ଅପେକ୍ଷା କରନ୍ତୁ ଏବଂ **SSL** > **Manage SSL** ଡେଶ୍‌ବୋର୍ଡରୁ CyberPanel ମଧ୍ୟରେ SSLକୁ ପୁଣି ଆରମ୍ଭ କରନ୍ତୁ।

### www ସବ-ଡୋमेन (www Subdomain) {#www-subdomain}

ଯଦି ଆପଣଙ୍କ Domain Mapping ସେଟିଙ୍ଗରେ **Auto-create www subdomain** ଅନ୍ୟାଲ୍ଗ୍ ହୋଇଥାଏ, ତେବେ ଆଇଣ୍ଟିଗ୍ରେସନ୍ `www.<domain>` ପାଇଁ ଏକ ଭର୍ଚୁଆଲ୍ ହସ୍ଟ୍ ଆଲିଅସ୍ (alias) ମଧ୍ୟ ସୃଷ୍ଟି କରେ ଏବଂ ଅଟୋ-SSL অন ବେଳେ, ଏହା ଉପର ଏବଂ www ଦୁଇଭାଗକୁ ଆବେଦନ କରିବା ପାଇଁ ଏକ ସertificate ପ୍ରଦାନ କରେ।

### ଇମେଲ୍ ଫୋର୍ವರ್ଡର୍ (Email Forwarders) {#email-forwarders}

ଯେତେବେଳେ [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) ଆଡଉନ୍ (addon) ակଟିଭ୍ (active) ଅଛି, ସେତେବେଳେ CyberPanel ମଧ୍ୟ କଷ୍ଟମର୍ ଏମାଇଲ୍ ଫୋର୍ವರ್ (customer email forwarders) ପ୍ରଦାନ କରିପାରିବ। ଫୋର୍ವರ್ଗୁଡ଼ିକ ଦସ୍ତଖତ ଆଇନରେ (domain address) ରୁ ଅନ୍ୟ ଏକ ଇନବକ୍ସକୁ ମେସେଜ୍ ବାଟାଇଥାନ୍ତି, ଯାହା ପୂର୍ଣ୍ଣ ମେଲ୍ ବକ୍ସ ନ ତିଆରି କରିବା ବିନା ସେବା ପ୍ରଦାନ କରେ। ଏହା `info@customer-domain.test` ବା `support@customer-domain.test` ଭଳି ଅଲିଅସ୍ (aliases) ପାଇଁ ବହୁତ ଉପଯୋଗୀ।

କଷ୍ଟମର୍ ପାଇଁ ଫୋର୍ವರ್ ସେବା ଏକଟିକୁ ଆରମ୍ଭ କରିବା ପୂର୍ବରୁ:

୧. ଉପରୋକ୍ତ CyberPanel କନଷ୍ଟାଣ୍ଟ୍ଗୁଡ଼ିକ ସଠିକ୍ ଭାବରେ ସେଟିଂ ହୋଇଛି କି ଏବଂ କନେକ୍ସନ୍ ଟେଷ୍ଟ୍ ପାସ ହେଉଛି କି, ତାହା ନିଶ୍ଚିତ କରନ୍ତୁ।
୨. Emails ଆଡଉନ୍ ସେଟିଂରେ CyberPanel ଇମେଲ ପ୍ରୋଭାଇଡର୍ (email provider)କୁ ଏକଟି ଅନେକ କରିଦିଅନ୍ତୁ।
୩. ଫୋର୍ವರ್ ତିଆରି କରିବା ପୂର୍ବରୁ, କଷ୍ଟମର୍ ଡୋमेनଟି ଆପଣଙ୍କ CyberPanel ମଧ୍ୟରେ ଅଛି ବୋଲି ନିଶ୍ଚିତ କରନ୍ତୁ।
୪. ପ୍ରଡକ୍ସନ୍ (production) ପ୍ଲାନଗୁଡ଼ିକରେ ଏହି ବିଶେଷତ୍ୱ ପ୍ରଦାନ କରିବା ପୂର୍ବରୁ, ଏକ ଟେଷ୍ଟ ଫୋର୍ವರ್ ତିଆରି କରନ୍ତୁ ଏବଂ ସେଥି ମାଧ୍ୟମରେ ଏହା ମାଧ୍ୟମରେ ଏକ ମେସେଜ୍ ପଠାନ୍ତୁ।

ଯଦି ଫୋର୍ವರ್ ତିଆରି କରିବା ବିଫଳ ହୁଏ, ପ୍ରଥମେ Ultimate Multisite କାର୍ଯ୍ୟତା ଲଗ୍ (activity logs) ଯାଞ୍ଚ କରନ୍ତୁ, ଏବଂ ତା'ପରେ CyberPanel ମଧ୍ୟରେ ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ସମ୍ପ୍ରସାରଣୀୟ ଡୋमेनଟି ଅଛି ଏବଂ API ବ୍ୟବହାରକାରୀଙ୍କ ପାଖରେ ଇମେଲ-ମ୍ୟାନେଜମେଣ୍ଟ ଅନୁମତି (permissions) ଅଛି।

## କନଫିଗୁରେସନ୍ ସୂଚନା {#configuration-reference}

| Constant | ଆବଶ୍ୟକ | ডিଫାଉର୍ଟ୍ (Default) | ବର୍ଣ୍ଣନା (Description) |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | ହଁ | — | ପୋର୍ଟ୍ ସହିତ ଆପଣଙ୍କ CyberPanel ଇନଷ୍ଟାନ୍ସର ପୂର୍ଣ୍ଣ URL, ଯେପରିକି `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | ହଁ | — | CyberPanel ପ୍ରଶାସକ ବ୍ୟବହାରକାରୀ ନାମ |
| `WU_CYBERPANEL_PASSWORD` | ହଁ | — | CyberPanel ପ୍ରଶାସକ ପାସୱାର୍ଡ |
| `WU_CYBERPANEL_PACKAGE` | ହଁ | `Default` | ନୂଆ ଭର୍ଚୁଆଲ୍ ହୋଷ୍ଟଗୁଡ଼ିକ ପାଇଁ ଅନୁଦାନ କରାଯିବା CyberPanel ହୋଷ୍ଟିଂ ପ୍ୟାକେଜ୍ |
| `WU_CYBERPANEL_AUTO_SSL` | ନା | `true` | ଡୋमेन ସୃଷ୍ଟି କରିବା ପରେ Let's Encrypt SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ କରିବା |
| `WU_CYBERPANEL_PHP_VERSION` | ନା | `PHP 8.2` | ନୂଆ ଭର୍ଚୁଆଲ୍ ହୋଷ୍ଟଗୁଡ଼ିକ ପାଇଁ PHP ବର୍ଷ (ଯାହା CyberPanelରେ ଇନଷ୍ଟଲ୍ କରାଯାଇଥିବା ବର୍ଷ ସହିତ ମେଳ ହେବା ଆବଶ୍ୟକ) |
| `WU_CYBERPANEL_EMAIL` | ନା | — | SSL ସର୍ଟିଫିକେଟ୍ ପଞ୍ଜୀକରଣ ପାଇଁ ଯୋଗାଯୋଗ ଇମେଲ୍ |

## ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୋଟ୍ସ {#important-notes}

- CyberPanel ର API ରେ ସେସନ-ଆଧାରିତ ଟୋକେନ୍ ଅଥେଣ୍ଟିଫେସନ୍ ବ୍ୟବହୃତ ହୁଏ। ପ୍ରତି API କଲ୍ ଉପରେ ଟୋକେନ୍ ଆବେଦନକୁ ଏହା ଆତ୍ମେ ଯୋଗାଯୋଗ (automatically) କରିବାରେ ସାହାଯ୍ୟ କରେ।
- ଆପଣଙ୍କର CyberPanel ଅଡମିନ୍ ଆକାଉଣ୍ଟରେ ୱେବସାଇଟ୍ ସୃଷ୍ଟି ଏବଂ ମୂଳ website ଡିଲ୍ଟି କରିବାର ଅନୁମତି ରହିବା ଆବଶ୍ୟକ।
- CyberPanel ডিଫାଉର୍ଟ ଭାବରେ `8090` ପୋର୍ଟରେ ଚାଲିଥାଏ। ଯଦି ଆପଣଙ୍କ ସର୍ଭରରେ ଫायरୱାଲ୍ ବ୍ୟବହାର କରାଯାଇଛି, ତେବେ ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଏହି ପୋର୍ଟଟି WordPress application server ଠାରୁ ପ୍ରବେଶୀ (accessible) ଅଛି।
- ଏହି integration ରେ DNS record ମାନଗୁଡ଼ିକ ପରିଚାଳନା କରାଯାଏ ନାହିଁ। Ultimate Multisite ରେ ডোমেইন ମ୍ୟାପ୍ କରିବା ପୂର୍ବରୁ, ଆପଣଙ୍କର ସର୍ଭରର IP address କୁ domain DNS ଠାରୁ ଦେଖାଇବାକୁ (point) ହେବ।
- ଯଦି ଆପଣ OpenLiteSpeed (OLS) ବ୍ୟବହାର କରନ୍ତି, ୱାର୍ଟ ଅସ୍ଟ୍ ଚେଞ୍ଜ୍ ପରେ ଅତୀତରେ ଏକ ସୁନ୍ଦର (graceful) ରିଷ୍ଟାର୍ଟ ଆତ୍ମେ ट्रिଗର୍ ହୋଇଯାଏ। ମାନୁଆଲ୍ ଇଣ୍ଟରଭେନ୍ସନର ଆବଶ୍ୟକତା ନାହିଁ।

## ట్రବଶୁଟିଂ (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ସର୍ଭର ଫायरୱାଲରେ `8090` ପୋର୍ଟଟି ଖୋଲା ଅଛି।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ `WU_CYBERPANEL_HOST` ମୂଲ୍ୟରେ ଠିକ୍ ପ୍ରोटोକଲ (`https://`) ଏବଂ ପୋର୍ଟ ସହିତ ସମସ୍ତ ଜିନିଷ ଅଛି।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ CyberPanel SSL ସertifikatଟି ବୈଧ (valid) ଅଛି; ସେଲ୍ଫ-ସାଇନ୍ଡ୍ ସertifikat TLS verification ବିଫଳତା ଦେଇପାରେ। ଏହାକୁ କେବଳ ବିଶ୍ୱାସୀ ଉପରେ ନିଜର ପ୍ରାଇଭେଟ ନେଟୱାର୍କ ପରିବେଶରେ `WU_CYBERPANEL_VERIFY_SSL` କୁ `false` ରୂପେ ସେଟ୍ କରନ୍ତୁ।

### Authentication Errors {#authentication-errors}

- CyberPanel ରେ ସିଧାସଳଖ ଲଗଇନ୍ କରି ଦର୍ଶିବା ଦ୍ୱାରା ଆପଣଙ୍କର `WU_CYBERPANEL_USERNAME` ଏବଂ `WU_CYBERPANEL_PASSWORD` ଠିକ୍ ଅଛି କି ନାହିଁ, ତାହା ସ୍ଥିର କରନ୍ତୁ।
- ପୁନରାବୃତ୍ତିକ ବିଫଳ ଲଗଇନ୍ ଚେଷ୍ଟାର ପରେ CyberPanel ଆକାଉଣ୍ଟକୁ ବନ୍ଦ (locks) କରିଦିଏ। ଯଦି ଏପରି ଲକ୍ ଅବସ୍ଥା ହୁଏ, ତେବେ CyberPanel ର **Security** > **Brute Force Monitor** କୁ ଯାଞ୍ଚ କରନ୍ତୁ।

### Domain Not Created {#domain-not-created}

- API error message ପାଇଁ Ultimate Multisite କାର୍ଯ୍ୟକତା ଲଗ (activity log) (**Ultimate Multisite** > **Activity Logs**) ଯାଞ୍ଚ କରନ୍ତୁ।
- `WU_CYBERPANEL_PACKAGE` ରେ ବ୍ୟାଖ୍ୟା କରାଯାଇଥିବା ପ୍ୟାକେଜଟି CyberPanel ରେ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ (**Packages** > **List Packages**)।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ডোমেইনଟି CyberPanel ରେ ଆପଣଙ୍କ website ଭାବରେ ପ୍ରବେଷିତ (registered) ହୋଇନାହିଁ — ଦୁଇଥର website ସୃଷ୍ଟି କରିବା ପରେ ଏହା error ଦେଇଥାଏ।

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

DNS ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରସାରିତ ହୋଇଛି କି ନାହିଁ ଯାଞ୍ଚ କରନ୍ତୁ: `dig +short your-domain.com` ଆପଣଙ୍କ సర్વରର IP ଠିକ୍ ଭାବରେ ଦେଖାଇବାକୁ ଅନୁଭବ କରିବ।
Let's Encrypt ରେ ରିଟ୍ ଲିମିଟ୍ (rate limits) ର ସୀମା ରହିଛି। ଯଦି ଆପଣ ନିକଟରେ ଏକ ହିସାବର ଅଧିକ ସertificate ଜାରି କରିଛନ୍ତି, ତେବେ ପୁଣି ଚେଷ୍ଟା କରିବା ପୂର୍ବ କିଛି ସମୟ ଅପେକ୍ଷା କରନ୍ତୁ।
sertificate ଜାରି ହେବାର ବିଫଳତା ବିଷୟରେ ବିବରଣୀ ପାଇଁ **Logs** > **Error Logs** ତଳେ CyberPanel ର SSL ଲଗ୍‌କୁ ଯାଞ୍ଚ କରନ୍ତୁ।
ଏକ ବାକିବା ଭାବରେ, ଆପଣ CyberPanel ମଧ୍ୟରୁ ସ୍ୱୟଂଚିତ ଭାବରେ SSL ଜାରି କରିପାରିବେ: **SSL** > **Manage SSL** > ଡୋମେନ୍ ଚୟନ କରନ୍ତୁ > **Issue SSL**।

## ସୂଚନା (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
