---
title: ସର୍ଭରପାଇଲ୍ ଇଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ସହିତ ଏକତ୍ରୀତା (Integration)

## ସମୀକ୍ଷା (Overview) {#overview}
ServerPilot ହେଉଛି DigitalOcean, Amazon, Google କିମ୍ବା ଅନ୍ୟ କୌଣସି सर्वर ପ୍ରଡାଭରେ WordPress ଏବଂ ଅନ୍ୟ PHP ୱେବସାଇଟକୁ ଆସ୍ତେଇ କରିବା ପାଇଁ ଏକ ক্লাଉଡ୍ ସେବା। ଏହି ଏକତ୍ରୀତା Ultimate Multisite ଏବଂ ServerPilot ମଧ୍ୟରେ ଅଟୋମାଟିକ୍ ଡୋमेन ସିଙ୍କିଂ (domain syncing) ଏବଂ SSL ସର୍ଟିଫିକେଟ୍ ପରିଚାଳନା (management)କୁ ସମ୍ପୂର୍ଣ୍ଣ କରିଥାଏ।

## ବୈଶିଷ୍ଟ୍ୟ (Features) {#features}
- ଅଟୋମାଟିକ୍ ଡୋमेन ସିଙ୍କିଂ
- Let's Encrypt ସହିତ SSL ସର୍ଟିଫିକେଟ୍ ପରିଚାଳନା
- ଅଟୋମାଟିକ୍ SSL ନୂଆ କରିବା

## ଆବଶ୍ୟକତା (Requirements) {#requirements}
ତଳେ ଦିଆଯାଇଥିବା କୁମାରନ୍ତୀଗୁଡ଼ିକ ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ବ୍ୟାଖ୍ୟା (define) କରିବାକୁ ପଡ଼ିବ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## ସେଟଅପ ନିର୍ଦ୍ଦେଶ (Setup Instructions) {#setup-instructions}

### ୧. ଆପଣଙ୍କର ServerPilot API କ୍ରିଡେନସିଆଲ୍ (Credentials) ଲାଭ କରନ୍ତୁ {#1-get-your-serverpilot-api-credentials}

1. ଆପଣଙ୍କର ServerPilot dashboard-ରେ ଲଗଇନ୍ କରନ୍ତୁ
2. "Account" > "API" ରେ ଯାଆନ୍ତୁ
3. ଆପଣ ପାଉଛନ୍ତି ନାହିଁ କି ମାନେ ନୂଆ API key ସୃଷ୍ଟି କରନ୍ତୁ
4. ଆପଣଙ୍କ Client ID ଏବଂ API Key କୁ କପି କରି ରଖନ୍ତୁ

### ୨. ଆପଣଙ୍କ App ID ଲାଭ କରନ୍ତୁ {#2-get-your-app-id}

1. ଆପଣଙ୍କ ServerPilot dashboard-ରେ, "Apps" ରେ ଯାଆନ୍ତୁ
2. ସେହି app ବାଛନ୍ତୁ ଯେଉଁଠାରେ ଆପଣଙ୍କ WordPress multisite ରହିଛି
3. URL ମଧ୍ୟରେ App ID ଦେଖିବାକୁ ମିଳିବ: `https://manage.serverpilot.io/apps/{APP_ID}`

### ୩. wp-config.php ରେ କୁମାରନ୍ତୀଗୁଡ଼ିକ ଯୋଡ଼ନ୍ତୁ (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

ତଳେ ଦିଆଯାଇଥିବା କୁମାରନ୍ତୀଗୁଡ଼ିକ ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ଯୋଡ଼ନ୍ତୁ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ୪. ଏକତ୍ରୀତାକୁ ସକାରାତ୍ମକ କରନ୍ତୁ (Enable the Integration) {#4-enable-the-integration}

1. ଆପଣଙ୍କ WordPress admin-ରେ, Ultimate Multisite > Settings ରେ ଯାଆନ୍ତୁ
2. "Domain Mapping" ଟ୍ୟାବ୍‌କୁ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ
3. "Host Integrations" ଉପରେ ସ୍କ୍ରୋଲ୍ କରି ଆସନ୍ତୁ
4. ServerPilot integration କୁ ଏକାର କରନ୍ତୁ (Enable)
5. "Save Changes" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ

## ଏହା କିପରି କାମ କରେ (How It Works) {#how-it-works}

### ଡୋमेन ସିଙ୍କିଂ (Domain Syncing) {#domain-syncing}

ଯେତେବେଳେ Ultimate Multisite ରେ ଏକ ଡୋमेन ମ୍ୟାପ୍ କରାଯାଇଥାଏ:

୧. ଏହି ఇంటిగ్రేସନ୍ ସରଭର୍ପାଇଲଟ୍ (ServerPilot) ରୁ ବର୍ତ୍ତମାନର ଡୋମେନଗୁଡ଼ିକର ତାଲିକାଟିକୁ ଆଣିବ।
୨. ଏହା ନୂଆ ଡୋମେନ୍‌କୁ ତାଲିକାରେ ଯୋଗ କରେ (ଯଦି ଆବଶ୍ୟକ ହୁଏ, ୱ୍ୱ୍ୱ୍ (www) ଭର୍ସନ୍ ମଧ୍ୟ ସହିତ)।
୩. ଏହା ଅପଡେଟ୍ ତାଲିକାଟିକୁ API ମାଧ୍ୟମରେ ServerPilot ପାଖକୁ ପଠାଇଦିଏ।
୪. ServerPilot ଆପଣଙ୍କ ଆବ୍‌ଲିକେସନର ଡୋମେନ୍ ତାଲିକାଗୁଡ଼ିକୁ ଅପଡେଟ୍ କରିଦିଏ।

### SSL ସର୍ଟିଫିକେଟ୍ ମ୍ୟାନେଜମେଣ୍ଟ (SSL Certificate Management) {#ssl-certificate-management}

ଡୋମେନ୍ ସିଙ୍କ୍ ହେବା ପରେ:

୧. ଏହି ఇంటిగ్రేସନ୍ ଆପଣଙ୍କ ଆବ୍‌ଲିକେସନ ପାଇଁ ଅଟୋଏସ୍‌ଏସ୍‌ଏଲ୍ (AutoSSL) ଖୋଲିଦିଏ।
୨. ServerPilot Let's Encrypt ବ୍ୟବହାର କରି SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ ଏବଂ ଇନଷ୍ଟଲେସନ୍ ମଧ୍ୟ ପରିଚାଳନା କରେ।
୩. ServerPilot ଅଟୋମେଲି SSL ସର୍ଟିଫିକେଟ୍ ନୂଆ କରିବା (renewal) ମଧ୍ୟ ପରିଚାଳନା କରେ।

## SSL ସର୍ଟିଫିକେଟ୍ ଯାଞ୍ଚ (SSL Certificate Verification) {#ssl-certificate-verification}

ServerPilot ପାଇଁ SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ ଏବଂ ଇନଷ୍ଟଲେସନ୍ କରିବାକୁ କିଛି ସମୟ ନେଇପାରେ, ତେଣୁ ଆପଣ ServerPilot ପାଇଁ SSL ସର୍ଟିଫିକେଟ୍ ଯାଞ୍ଚର ଚେଷ୍ଟା କରିବାର ସଂଖ୍ୟା ବଢ଼ାଇବା ପାଇଁ ଏହି ఇంటిగ్రేସନ୍ କନଫିଗରେ କରାଯାଇଛି। ଡିଫାଉଟ୍ ଭାବରେ, ଏହା ୫ကြိမ် ପର୍ଯ୍ୟନ୍ତ ଚେଷ୍ଟା କରିବ, କିନ୍ତୁ ଏହାକୁ ଫିଲ୍ଟର ବ୍ୟବହାର କରି ଅଙ୍କିତ (adjust) କରାଯାଇପାରିବ।

## ସମସ୍ୟା ସମାଧାନ (Troubleshooting) {#troubleshooting}

### API କନେକ୍ସନ୍ ସମସ୍ୟା (API Connection Issues) {#api-connection-issues}
- ଆପଣଙ୍କ Client ID ଏବଂ API Key ଠିକ୍ ଅଛି କି, ଯାଞ୍ଚ କରନ୍ତୁ।
- ଆପଣଙ୍କ App ID ଠିକ୍ ଅଛି କି, ଯାଞ୍ଚ କରନ୍ତୁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ServerPilot ଆକାଉଣ୍ଟରେ ଆବଶ୍ୟକ ଅନୁମତି (permissions) ରହିଛି।

### SSL ସର୍ଟିଫିକେଟ୍ ସମସ୍ୟା (SSL Certificate Issues) {#ssl-certificate-issues}
- SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ କରିବା ପୂର୍ବ ଡୋମେନ୍‌ଗୁଡ଼ିକ ଆପଣଙ୍କ ସରଭର୍କୁ ଠିକ୍ ଭାବରେ ପଏଣ୍ଟ କରୁଥିବା ବୈଧ DNS ରେକର୍ଡ (valid DNS records) ରହିବା ଆବଶ୍ୟକ।
- ଯଦି SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ ହେଉନାହିଁ, ତେବେ ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋମେନ୍ଗୁଡ଼ିକ ଆପଣଙ୍କ ସରଭର୍‌ର IP ଅଡ୍ରେସକୁ ଠିକ୍ ଭାବରେ ପଏଣ୍ଟ କରୁଛନ୍ତି।
- ServerPilot ଦ୍ୱାରା SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ ଏବଂ ଇନଷ୍ଟଲେସନ୍ କରିବାକୁ କିଛି ସମୟ ନେଇପାରେ (సాధారణంగా ୫-୧୫ ମିନିଟ୍)।

### ଡୋମେନ୍ ଯୋଗ ହେଉନାହିଁ (Domain Not Added) {#domain-not-added}
- କୌଣସି ଅପରାଧ ବାର୍ତ୍ତା ପାଇବା ପାଇଁ Ultimate Multisite ଲଗ୍‌ରେ ଦୁଇଟି ଲଗ୍ (logs) ଯାଞ୍ଚ କରନ୍ତୁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଡୋମେନ୍ ଆପଣଙ୍କ ServerPilot ମଧ୍ୟରେ ପ୍ରବର୍ତ୍ତିତ ହୋଇନାହିଁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ServerPilot ପ୍ଲାନ ଆପଣ ଯାହା ଡୋମେନ୍ ଯୋଗ କରୁଛନ୍ତି, ତାହାର ସଂଖ୍ୟାକୁ ସମର୍ଥନ କରେ।

### ডোমেইন রিমুভ করা (Domain Removal) {#domain-removal}
- বর্তমানে, ServerPilot API থেকে কোনো নির্দিষ্ট ডোমেইন মুছে ফেলার ব্যবস্থা নেই।
- যখন Ultimate Multisite-এ একটি ডোমেইন ম্যাপিং সরানো হয়, তখন ইন্টিগ্রেশনটি ServerPilot-এর ডোমেইন লিস্ট আপডেট করে এবং সরানো হয়েছে এমন ডোমেইনটিকে তালিকা থেকে বাদ দেয়।
