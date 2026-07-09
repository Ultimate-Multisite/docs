---
title: cPanel ସମନ୍ୱୟ
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ସହିତ ଏକତ୍ରୀକରଣ (Integration) {#cpanel-integration}

## ଦୃଷ୍ଟିକୋଣ (Overview) {#overview}
cPanel ହେଉଛି ଅନେକ ସେୟାର୍ଡ୍ ଏବଂ ଡେଡିକେଟ୍ ହୋଷ୍ଟିଂ ପ୍ରଦାତାମାନଙ୍କ ଦ୍ୱାରା ବ୍ୟବହୃତ ସବୁଠାରୁ ପ୍ରସିଦ୍ଧ ୱେବ ହୋଷ୍ଟିଂ କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍‌ ମଧ୍ୟରୁ ଅନ୍ୟତମ। ଏହି ଏକତ୍ରୀକରଣ Ultimate Multisite ଏବଂ cPanel ମଧ୍ୟରେ ଅଟୋମାଟିକ୍ ଡୋमेन ସିଙ୍କିଙ୍ଗ (domain syncing)କୁ ସମ୍ଭବ କରିଥାଏ, ଯାହା ଆପଣଙ୍କୁ ଆପଣଙ୍କ cPanel ଆକାଉଣ୍ଟରେ ଡୋमेन ଆଲିଆସ ଏବଂ ସବ୍-ଡୋमेन ଅଟୋମାଟିକ୍ ଭାବେ ଯୋଗ କରିବାକୁ ଅନୁମତି ଦିଏ।

## ମୁଖ୍ୟ ବିଶେଷତା (Features) {#features}
- cPanel ରେ ଅଟୋମାଟିକ୍ ଆଡନ୍ ଡୋमेन ସୃଷ୍ଟି (Automatic addon domain creation in cPanel)
- cPanel ରେ ଅଟୋମାଟିକ୍ ସବ୍-ଡୋमेन ସୃଷ୍ଟି (subdomain multisite installations ପାଇଁ)
- ମ୍ୟାପିଂ ବାଦ ଦେଲେ ଡୋमेन ହଟାଇବା

## ଆବଶ୍ୟକତା (Requirements) {#requirements}
ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ନିମ୍ନଲିଖିତ କన్‌ସ୍ଟାଣ୍ଟ୍‌ଗୁଡ଼ିକ ବ୍ୟାଖ୍ୟା କରିବାକୁ ପଡ଼ିବ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ବିବେକୀ ଭାବରେ, ଆପଣ ଏହା ମଧ୍ୟ ବ୍ୟାଖ୍ୟା କରିପାରିବେ:

```php
define('WU_CPANEL_PORT', 2083); // ডিଫାଉ্ট ହେଉଛି 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ডিଫାଉ্ট ହେଉଛି /public_html
```

## ସେଟଅପ ନିର୍ଦ୍ଦେଶ (Setup Instructions) {#setup-instructions}

### ୧. ଆପଣଙ୍କର cPanel କ୍ରିଡେନସିଆଲ୍‌ଗୁଡ଼ିକ ଲାଭ କରନ୍ତୁ (Get Your cPanel Credentials) {#1-get-your-cpanel-credentials}

1. ଆପଣଙ୍କ ହୋଷ୍ଟିଂ ପ୍ରଦାତାଙ୍କଠାରୁ ଆପଣଙ୍କର cPanel ইউଜର୍ ନାମ ଏବଂ ପାସୱାର୍ଡ ଲାଭ କରନ୍ତୁ।
2. ଆପଣଙ୍କର cPanel ହୋଷ୍ଟ (ଯେପରିକି `cpanel.yourdomain.com` ବା `yourdomain.com:2083`) ଠିକ୍ କରିଦିଅନ୍ତୁ।

### ୨. wp-config.php ରେ କన్‌ସ୍ଟାଣ୍ଟ୍‌ଗୁଡ଼ିକ ଯୋଡ଼ନ୍ତୁ (Add Constants to wp-config.php) {#2-add-constants-to-wp-configphp}

ତଳେ ଦିଆଯାଇଥିବା କన్‌ସ୍ଟାଣ୍ଟ୍‌ଗୁଡ଼ିକ ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ଯୋଡ଼ନ୍ତୁ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ବିବେକୀ ଭାବରେ, ଆପଣ ପୋର୍ଟ ଏବଂ ରୁଟ୍ ଡିରେକ୍ଟୋରୀକୁ କଷ୍ଟମାଇଜ୍ କରିପାରିବେ:

```php
define('WU_CPANEL_PORT', 2083); // ଯଦି ଆପଣଙ୍କ cPanel ଅନ୍ୟ ପୋର୍ଟ ବ୍ୟବହାର କରେ, ତେବେ ଏହାକୁ ବଦଳାନ୍ତୁ
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ଯଦି ଆପଣଙ୍କର ଡକ୍ୟୁମେଣ୍ଟ ରୁଟ୍ ଅଲଗାଥ ହୋଇଥାଏ, ତେବେ ଏହାକୁ ବଦଳାନ୍ତୁ
```

### ୩. ଏକତ୍ରୀକରଣକୁ ସକାରାତ୍ମକ କରନ୍ତୁ (Enable the Integration) {#3-enable-the-integration}

୧. ଆପଣଙ୍କ WordPress admin ରେ, Ultimate Multisite > Settings କୁ ଯାଆନ୍ତୁ
୨. "Domain Mapping" tab ରେ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ
୩. "Host Integrations" కిందକୁ ସ୍କ୍ରୋଲ୍ କରନ୍ତୁ
୪. cPanel integration ଟି ଅନ୍ (Enable) କରନ୍ତୁ
୫. "Save Changes" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ

## ଏହା କିପରି କାମ କରେ {#how-it-works}

### Addon Domains {#addon-domains}

Ultimate Multisite ରେ ଯେତେବେଳେ ଏକ domain ମ୍ୟାପ୍ (map) କରାଯାଏ:

୧. integration ଟି cPanel ର API କୁ ଅନୁରୋଧ ଜଣାଉଛି ଯେ domain ଟିକୁ addon domain ଭାବରେ ଯୋଡ଼ିବା ପାଇଁ
୨. domain ଟି ଆପଣଙ୍କ root directory କୁ point କରିବା ପାଇଁ ସେଟିଂ ହୋଇଥାଏ
୩. ଯେତେବେଳେ ଏକ domain mapping ବାଦ୍ ଦିଆଯାଏ, integration ଟି cPanel ରୁ addon domain ଟିକୁ removal କରିଦେବ

### Subdomains {#subdomains}

subdomain multisite installations ପାଇଁ, ନୂଆ ସାଇଟ୍ ସୃଷ୍ଟି ହେବା ସମୟରେ:

୧. integration ଟି full domain ରୁ subdomain ଅଂଶଟି ବାହାର କରୁଛି
୨. ଏହା subdomain ଟିକୁ cPanel ର API କୁ ଯୋଡ଼ିବା ପାଇଁ ଅନୁରୋଧ ଜଣାଉଛି
୩. subdomain ଟି ଆପଣଙ୍କ root directory କୁ point କରିବା ପାଇଁ ସେଟିଂ ହୋଇଥାଏ

## ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୋଟ୍ସ {#important-notes}

- integration ଟି ଆପଣଙ୍କ cPanel account ସହିତ ଯୋଗାଯୋଗ କରିବା ପାଇଁ cPanel ର API2 ବ୍ୟବହାର କରେ
- ଆପଣଙ୍କ cPanel accountରେ addon domains ଏବଂ subdomains ଯୋଡ଼ିବାର ଅନୁମତି (permissions) ରହିବା ଆବଶ୍ୟକ
- କିଛି hosting provider ଦ୍ୱାରା ଆପଣ ସୃଷ୍ଟି କରିପାରିବେ ଥିବା addon domain ବା subdomain ଗୁଣରେ ମଧ୍ୟ ସୀମା ରଖାଯାଇପାରେ
- integration ଟି DNS configuration ପରିଚାଳନା କରେ ନାହିଁ; ଆପଣଙ୍କର domains ଟିକୁ ଆପଣଙ୍କ server ର IP address କୁ point କରିବା ଆବଶ୍ୟକ

## ट्रବ୍ଗୁଲିସିଂ (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ cPanel username ଏବଂ password ଠିକ୍ ଅଛି କି ନାହିଁ
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ cPanel host ଠିକ୍ ଅଛି ଏବଂ ତାହା ଉପଲବ୍ଧ (accessible) ଅଛି କି ନାହିଁ
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ cPanel accountରେ ଆବଶ୍ୟକ ଅନୁମତି ରହିଛି
- host ପାଇଁ full URL ବ୍ୟବହାର କରି ଦେଖନ୍ତୁ (ଉଦାହରଣ ସ୍ୱରୂପ, `https://cpanel.yourdomain.com`)

### Domain Not Added {#domain-not-added}
- କୌଣସି error message ପାଇବା ପାଇଁ Ultimate Multisite logs ଯାଞ୍ଚ କରନ୍ତୁ
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ domain ଟି cPanel ରେ ଆଗରୁ ଯୋଡ଼ାଯାଇଛି କି ନାହିଁ
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ cPanel account addon domains ବା subdomains ପାଇଁ ସୀମାରେ ପହଞ୍ଚିନାହାନ୍ତି

### SSL సర్టిఫికేట్ సమస్యలు {#ssl-certificate-issues}
- ఈ ఇంటిగ్రేషన్ SSL సర్టిఫికేట్ జారీని హ్యాండిల్ చేయదు.
- మీ డొమైన్‌ల కోసం SSL సర్టిఫికేట్‌లను జారీ చేయడానికి మీరు cPanel యొక్క SSL/TLS టూల్స్ లేదా AutoSSL ఫీచర్‌ను ఉపయోగించాల్సి ఉంటుంది.
- ప్రత్యామ్నాయంగా, cPanel యొక్క AutoSSL తో Let's Encrypt వంటి సేవను ఉపయోగించవచ్చు.
