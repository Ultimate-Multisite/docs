---
title: હોસ્ટિંગર (hPanel) ଇంటిଗ୍ରେସନ୍
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ସହିତ ଏକାଠିତା (Integration) {#hostinger-hpanel-integration}

## ସମୀକ୍ଷା (Overview) {#overview}

Hostinger ହେଉଛି ଏକ ପ୍ରସିଦ୍ଧ ୱେବ ହୋଷ୍ଟିଂ ପ୍ରଦୋଷିକ, ଯାହାର ଆଧୁନିକ କଣ୍ଟ୍ରୋଲ ପ୍ୟାନେଲ୍ ନାମରେ hPanel। Ultimate Multisite Hostinger integration ଦ୍ୱାରା Ultimate Multisite ଏବଂ Hostinger ର hPanel ମଧ୍ୟରେ ଡୋमेन ସିଙ୍କିଙ୍ଗ (automatic domain syncing) ସୁବିଧା ଯୋଗାଇଥାଏ, ଯାହା ଆପଣଙ୍କୁ WordPress admin ମଧ୍ୟରୁ ଡୋमेन ମ୍ୟାପିଂ ଏବଂ ସବ-ଡୋमेनକୁ ଅଟୋମେଟିକ୍ ଭାବରେ ପରିଚାଳନା କରିବାକୁ ଅନୁମତି ଦିଏ।

## ବୈଶିଷ୍ଟ୍ୟ (Features) {#features}

- hPanel ରେ ଆଟୋମେଟିକ୍ ଆଡନ୍ ଡୋमेन ସୃଷ୍ଟି
- hPanel ରେ ଆଟୋମେଟିକ୍ ସବ-ଡୋमेन ସୃଷ୍ଟି (ସବ-ଡୋमेन ମల్టీସାଇଟ୍ ଇନଷ୍ଟଲେସନ୍ ପାଇଁ)
- ମ୍ୟାପିଂ ବାଦ ଦେବା ସମୟରେ ଡୋमेन ହଟାଇବା
- hPanel ର ଡୋमेन ମ୍ୟାନେଜମେଣ୍ଟ API ସହିତ ସୁବିଧା

## ଆବଶ୍ୟକତା (Requirements) {#requirements}

Hostinger integration ବ୍ୟବହାର କରିବା ପାଇଁ, ଆପଣଙ୍କର ନିମ୍ନଲିଖିତ ଜିନିଷଗୁଡ଼ିକ ଥିବା ଆବଶ୍ୟକ:

1. hPanel ପ୍ରବେଶ ସହିତ Hostinger ଆକାଉଣ୍ଟ
2. Hostinger ରୁ ଏକ API token
3. ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ନିର୍ଦ୍ଧାରିତ ନିମ୍ନଲିଖିତ କన్‌ସ୍ଟାଣ୍ଟ୍ (constants):

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ବୈଧିକ, ଆପଣ ଏହା ମଧ୍ୟ ନିର୍ଦ୍ଧାରଣ କରିପାରିବେ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## ସେଟଅପ ନିର୍ଦ୍ଦେଶ (Setup Instructions) {#setup-instructions}

### ୧. ଆପଣଙ୍କର Hostinger API Token ତିଆରି କରନ୍ତୁ {#1-generate-your-hostinger-api-token}

1. ଆପଣଙ୍କ Hostinger ଆକାଉଣ୍ଟରେ ଲଗଇନ୍ କରନ୍ତୁ ଏବଂ hPanel ରେ ପ୍ରବେଶ କରନ୍ତୁ
2. **Account Settings** → **API Tokens** ରେ ଯାଆନ୍ତୁ
3. **Create New Token** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ
4. ଆପଣଙ୍କ টୋକନ୍‌କୁ ଏକ ବର୍ଣ୍ଣନାତ୍ମକ ନାମ ଦିଅନ୍ତୁ (ଯେପରି, "Ultimate Multisite")
5. ଆବଶ୍ୟକ ଅନୁମତିଗୁଡ଼ିକ ଚୟନ କରନ୍ତୁ:
   - Domain management
   - Subdomain management
6. ତିଆରି ହୋଇଥିବା টୋକନ୍‌କୁ କପି କରି ସୁରକ୍ଷିତ ଭାବରେ ସଞ୍ଚୟ କରନ୍ତୁ

### ୨. ଆପଣଙ୍କ ଆକାଉଣ୍ଟ ID ଖୋଜନ୍ତୁ {#2-find-your-account-id}

1. hPanel ରେ, **Account Settings** → **Account Information** ରେ ଯାଆନ୍ତୁ
2. ଆପଣଙ୍କ ଆକାଉଣ୍ଟ ID ଏହି ପୃଷ୍ଠାରେ ଦର୍ଶିତ ହେବ
3. ପରବର୍ତ୍ତୀ ପଦକ୍ଷେପ ପାଇଁ ଏହାକୁ କପି କରି ସଞ୍ଚୟ କରନ୍ତୁ

### ୩. wp-config.php ରେ କన్‌ସ୍ଟାଣ୍ଟ୍ ଯୋଡ଼ନ୍ତୁ {#3-add-constants-to-wp-configphp}

ନିମ୍ନଲିଖିତ କన్‌ସ୍ଟାଣ୍ଟ୍ଗୁଡ଼ିକ ଆପଣଙ୍କ `wp-config.php` ଫାଇଲରେ ଯୋଡ଼ନ୍ତୁ:

```php
define('WU_HOSTINGER_API_TOKEN', 'ଆପଣଙ୍କର hostinger api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'ଆପଣଙ୍କର hostinger_account_id');
```

ଯଦି ଆପଣଙ୍କ Hostinger ଆକାଉଣ୍ଟରେ ଅଲଗା API endpoint ବ୍ୟବହାର କରନ୍ତି, ତେବେ ଆପଣ ଏହାକୁ କଷ୍ଟମାଇଜ୍ କରିପାରିବେ:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ఇంటిଗ୍ରେସନ୍ ଅନ୍ୟାନ୍ୟ କରିବା (Enable the Integration) {#4-enable-the-integration}

୧. ଆପଣଙ୍କ WordPress admin-ରେ, **Ultimate Multisite > Settings**-କୁ ଯାଆନ୍ତୁ।
୨. **Domain Mapping** ଟ୍ୟାବ୍‌କୁ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ।
୩. **Host Integrations** ଉପରେ ସ୍କ୍ରୋଲ୍ କରି ଆସନ୍ତୁ।
୪. **Hostinger (hPanel)** ఇంటిଗ୍ରେସନ୍ ଅନ୍ୟାନ୍ୟ କରନ୍ତୁ।
୫. **Save Changes** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

## ଏହା କିପରି କାର୍ଯ୍ୟ କରେ (How It Works) {#how-it-works}

### Addon Domains (ଅଧିକଣ ଡୋମେନ୍) {#addon-domains}

Ultimate Multisite-ରେ ଆପଣ ଯଦି ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍ କରନ୍ତି:

୧. ఇంటిଗ୍ରେସନ୍ Hostinger ର API-କୁ ଏକ ଅଧିକଣ ଡୋମେନ୍ ଭାବରେ ଡୋମେନ୍ ଯୋଡ଼ିବା ପାଇଁ ଏକ ଅନୁହ୍ସୂଦ୍ୟ (request) ପଠାଇଥାଏ।
୨. ଡୋମେନ୍‌ଟି ଆପଣଙ୍କ ରୁଟ ଡିରେକ୍ଟୋରୀକୁ ପాయిଣ୍ଟ କରିବା ପାଇଁ ସେଗୁଡ଼ିକ ସେଟିଂ କରାଯାଏ।
୩. ଯେତେବେଳେ ଏକ ଡୋମେନ୍ ମ୍ୟାପ୍ ହଟ୍ କରାଯାଏ, ఇంటిଗ୍ରେସନ୍ ଆଧାରରେ ଅଧିକଣ ଡୋମେନ୍‌କୁ hPanel ରୁ ସ୍ୱୟଂଚିତ ଭାବରେ ਹଟ କରିଦିଏ।

### Subdomains (ଉପ-ଡୋମେନ୍) {#subdomains}

Subdomain multisite installations ପାଇଁ, ଯେତେବେଳେ ଏକ ନୂଆ साईट ସୃଷ୍ଟି କରାଯାଏ:

୧. ఇంటిଗ୍ରେସନ୍ ପୂର୍ଣ୍ଣ ଡୋମେନ୍‌ରୁ subdomain ଅଂଶକୁ ବାହାର କରିଥାଏ।
୨. ଏହା subdomain-ଟି Hostinger ର API-କୁ ଯୋଡ଼ିବା ପାଇଁ ଏକ ଅନୁହ୍ସୂଦ୍ୟ ପଠାଇଥାଏ।
୩. subdomain-ଟି ଆପଣଙ୍କ ରୁଟ ଡିରେକ୍ଟୋରୀକୁ ପాయిଣ୍ଟ କରିବା ପାଇଁ ସେଟିଂ କରାଯାଏ।

## ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୋଟ୍ସ (Important Notes) {#important-notes}

- ଏହି ఇంటిଗ୍ରେସନ୍ ଆପଣଙ୍କ ଆକାଉଣ୍ଟ ସହିତ ଯୋଗାଯୋଗ କରିବା ପାଇଁ Hostinger ର REST API ବ୍ୟବହାର କରେ।
- ଆପଣଙ୍କର API token ଡୋମେନ୍ ଏବଂ subdomain ମାନକୁ ପରିଚାଳନା କରିବା ପାଇଁ ଆବଶ୍ୟକ ଅନୁମତି కలిగి ହେବା ଆବଶ୍ୟକ।
- ఇంటిଗ୍ରେସନ୍ DNS କନଫିଗରେ ସହାୟତା କରେ ନାହିଁ; ଡୋମେନ୍‌ଗୁଡ଼ିକ ଆପଣଙ୍କ Hostinger ଆକାଉଣ୍ଟକୁ ପాయిଣ୍ଟ କରିବା ଆବଶ୍ୟକ।
- API ଅନୁହ୍ସୂଦ୍ୟ HTTPS ମାଧ୍ୟମରେ ସୁରକ୍ଷିତ ଭାବରେ କରାଯାଏ।
- ଆପଣଙ୍କର API tokenକୁ ସୁରକ୍ଷିତ ରଖନ୍ତୁ ଏବଂ ଏହାକୁ କେବେ ବି ଲୋକଙ୍କ ସମ୍ମୁଖରେ ବାଣ୍ଟିବାକୁ ନ ଦିଅନ୍ତୁ।

## ସମସ୍ୟା ସମାଧାନ (Troubleshooting) {#troubleshooting}

### API Connection Issues {#api-connection-issues}

* ଆପଣଙ୍କ API token ସଠିକ୍ ଅଛି ଏବଂ ଏହା ମଧ୍ୟ ବାୟୋଜମାନ ହୋଇନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
* ଆପଣଙ୍କ Account ID ସଠିକ୍ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
* ডোমেইন ମ୍ୟାନେଜମେଣ୍ଟ ପାଇଁ ଆପଣଙ୍କ API tokenରେ ଆବଶ୍ୟକ ଅନୁମତି ଅଛି କି ନାହିଁ, ତାହା ସୁନିଶ୍ଚିତ କରନ୍ତୁ।
* ଆପଣଙ୍କ Hostinger account ସକ୍ରିୟ ଏବଂ ଭଲ ଅବସ୍ଥାରେ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।

### ডোমেইন ଯୋଗାଯାଇନାହିଁ (Domain Not Added) {#domain-not-added}

* Ultimate Multisite logs ମଧ୍ୟରେ କୌଣସି error message ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
* ଆପଣଙ୍କ Hostinger accountରେ ডোমেইনଟି ପୂର୍ବରୁ ଯୋଗାଯାଇଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
* ଆପଣଙ୍କ Hostinger account ଅଡନ୍ ଡୋମେନ୍ (addon domains) ପାଇଁ ସୀମାରେ ପହଞ୍ଚିଛି କି ନାହିଁ, ତାହା ସୁନିଶ୍ଚିତ କରନ୍ତୁ।
* ডোমেইনଟି ଆପଣଙ୍କ Hostinger nameserversକୁ ସଠିକ୍ ଭାବରେ ପଏଣ୍ଟ କରାଯାଇଛି କି ନାହିଁ, ତାହା ନିଶ୍ଚିତ କରନ୍ତୁ।

### SSL సర్ଟିଫିକେଟ୍ ସମସ୍ୟା (SSL Certificate Issues) {#ssl-certificate-issues}

* ଏହି integration ଦ୍ୱାରା SSL certificate ପ୍ରଦାନ କରାଯାଉନାହିଁ।
* Hostinger ମାଧ୍ୟମରେ AutoSSL ମାଧ୍ୟମରେ ମୁକ୍ତ SSL certificate ପ୍ରଦାନ କରନ୍ତି।
* ଆପଣ hPanel ରେ **SSL/TLS** ଅଧୀନରେ ସିଧାସଳଖ SSL certificate ପରିଚାଳନା କରିପାରିବେ।
* ବାଲ୍ଟିଭି, Hostinger ର AutoSSL feature ମଧ୍ୟରେ Let's Encrypt ବ୍ୟବହାର କରିପାରନ୍ତି।

## ସହାୟତା (Support) {#support}

Hostinger integration ସମ୍ବନ୍ଧରେ ଅତିରିକ୍ତ ସାହାଯ୍ୟ ପାଇଁ ଦୟାକରି ଏଥିକୁ ଦେଖନ୍ତୁ:

* [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Documentation](/)
* [Ultimate Multisite Support](https://ultimatemultisite.com/support)
