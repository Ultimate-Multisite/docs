---
title: WP Engine ସମନ୍ୱୟ
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine ସହିତ ଏକୀକରଣ (Integration)

## ଦୃଷ୍ଟିକୋଣ (Overview) {#overview}
WP Engine ହେଉଛି ଏକ ପ୍ରିମିୟମ୍ ମ୍ୟାନେଜ୍ଡ WordPress হোস্টিং ପ୍ଲାଟଫର୍ମ, ଯାହା WordPress साईटଗୁଡ଼ିକ ପାଇଁ ଅପ୍ଟିମାଇଜ୍ କରାଯାଇଥିବା ପ୍ରଦର୍ଶନ (performance), ସୁରକ୍ଷା (security) ଏବଂ ବିସ୍ତାରଯୋଗ୍ୟତା (scalability) ପ୍ରଦାନ କରେ। ଏହି ଏକୀକରଣ Ultimate Multisite ଏବଂ WP Engine ମଧ୍ୟରେ ଡୋमेन ସମకాలୀକରଣ (domain syncing) ପାଇଁ ଆอัตโนମତିକ ସମର୍ଥନ ଯୋଗେଇ ଦିଏ।

## ଅବସର (Features) {#features}
- ଆอัตโนମତିକ ଡୋमेन ସମకాలୀକରଣ (Automatic domain syncing)
- ମల్ଟିସାଇଟ୍ ଇନଷ୍ଟଲେସନ୍ ପାଇଁ ସବ୍ଡୋमेन ସମର୍ଥନ (Subdomain support for multisite installations)
- WP Engine ର ଅସ୍ଥିତ ବ୍ୟବସ୍ଥାଗୁଡ଼ିକ ସହିତ ସହଜ ଏକୀକରଣ (Seamless integration with WP Engine's existing systems)

## ଆବଶ୍ୟକତା (Requirements) {#requirements}
ଏହି ଏକୀକରଣଟି ଆପଣଙ୍କ ଉପରେ WP Engine ରେ ହୋଷ୍ଟି କରୁଛନ୍ତି କି ନାହିଁ, ତାହା ଆอัตโนମତିକ ଭାବେ ଚିହ୍ନଟ କରିବ ଏବଂ built-in WP Engine API ବ୍ୟବହାର କରିବ। ଯଦି WP Engine plugin ସକ୍ରିୟ (active) ଏବଂ ସଠିକ୍ ଭାବରେ କନଫିଗ୍ୟୁରାନ୍ (configured) ଅଛି, ତେବେ ଆଉ କୌଣସି ଅତିରିକ୍ତ କନଫିଗୁରେସନ୍ ଆବଶ୍ୟକ ନୁହେଁ।

ଅନ୍ୟପଟେ, ଯଦି ଆପଣକୁ ଏକୀକରଣଟି ମାନୁଆଲି ଭାବରେ କନଫିଗୁରାନ୍ କରିବାକୁ ପଡ଼ିବ, ତେବେ ଆପଣ ଆପଣଙ୍କ `wp-config.php` ଫାଇଲରେ ଏହି କୌଣସି ଗୁଣ (constant) ବ୍ୟାଖ୍ୟା କରିପାରିବେ:

```php
define('WPE_APIKEY', 'your_api_key'); // ପ୍ରିୟ ପଦ୍ଧତି (Preferred method)
// କିମ୍ବା
define('WPE_API', 'your_api_key'); // ଅନ୍ୟ ଏକ ବିକଳ୍ପ (Alternative method)
```

## ସେଟଅପ ନିର୍ଦ୍ଦେଶ (Setup Instructions) {#setup-instructions}

### ୧. WP Engine Plugin ଯାଞ୍ଚ କରନ୍ତୁ (Verify WP Engine Plugin) {#1-verify-wp-engine-plugin}
ଯଦି ଆପଣ WP Engine ରେ ହୋଷ୍ଟି କରୁଛନ୍ତି, ତେବେ WP Engine plugin ସ୍ଥାପନ କରାଯାଇଥିବା ଏବଂ ସକ୍ରିୟ ଅଛି। ଯାଞ୍ଚ କରନ୍ତୁ:

1. WP Engine plugin ସକ୍ରିୟ ଅଛି
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ଫାଇଲଟି ଅଛି କି ନାହିଁ

### ୨. ଏକୀକରଣକୁ ସକ୍ରିୟ କରନ୍ତୁ (Enable the Integration) {#2-enable-the-integration}
1. ଆପଣଙ୍କ WordPress admin ମେନୁରେ, Ultimate Multisite > Settings ରେ ଯାଆନ୍ତୁ।
2. "Domain Mapping" ଟ୍ୟାବ୍‌କୁ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ।
3. "Host Integrations" ଉପରେ ସ୍କ୍ରୋଲ୍ କରି "WP Engine integration" କୁ ଏକାଦିକରଣ (Enable) କରନ୍ତୁ।
4. "Save Changes" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

## ଏହା କିପରି କାର୍ଯ୍ୟ କରେ (How It Works) {#how-it-works}

### ଡୋमेन ସମకాలୀକରଣ (Domain Syncing) {#domain-syncing}
Ultimate Multisite ରେ ଏକ ଡୋमेन ମ୍ୟାପ୍ କରାଗଲେ:

1. ଏକୀକରଣଟି WP Engine API ବ୍ୟବହାର କରି ଆପଣଙ୍କ WP Engine ଇନଷ୍ଟଲେସନ୍‌ରେ ଡୋमेनକୁ ଯୋଡ଼ିଦେ।
2. WP Engine ଡୋमेन କନଫିଗୁରାସନ୍ ଏବଂ SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ (issuance) ମାନ୍ୟତା କରିବ।
3. ଯେତେବେଳେ ଏକ ଡୋमेन ମ୍ୟାପ୍ ହଟାଯିବ, ଏକୀକରଣଟି WP Engine ରୁ ଡୋमेनକୁ ବାହାର କରିଦେବ।

### ସବ୍ଡୋमेन ସମର୍ଥନ (Subdomain Support) {#subdomain-support}

ସବୁଡୋमेन ମల్ଟିସାଇଟ୍ ଇନଷ୍ଟଲେସନ୍ ପାଇଁ:

୧। ନୂଆ ସାଇଟ୍ ସୃଷ୍ଟି ହେବା ବେଳେ ପ୍ରତ୍ୟେକ ସବୁଡୋମେନ୍‌କୁ WP Engine ସହିତ ଯୋଗ କରାଯାଏ।
୨। WP Engine ସବୁଡୋମେନ୍ କନଫିଗରେସନ୍ ମାନି ରଖେ।
୩। ଯଦି ଏକ ସାଇଟ୍ ଡିଲିଟ କରାଯାଏ, ତେବେ ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ WP Engine ରୁ ସେହି ସବୁଡୋମେନ୍‌କୁ ହଟାଇ ଦେବ।

## ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନୋଟ୍ {#important-notes}

### ୱାଇଲ୍ଡକାର୍ଡ ଡୋमेन (Wildcard Domains) {#wildcard-domains}

ସବୁଡୋମେନ୍ ମల్ଟିସାଇଟ୍ ଇନଷ୍ଟଲେସନ୍ ପାଇଁ, ଆପଣଙ୍କୁ WP Engine ସହାୟତା ବିଭାଗକୁ ଜଣାଇବାକୁ ପଡ଼ିବ ଯେ ଏକ ୱାଇଲ୍ଡକାର୍ଡ ଡୋमेन କନଫିଗରେସନ୍ ମାଗନ୍ତୁ। ଏହା ଅର୍ଥ ହେଉଛି ଆପଣଙ୍କର ସମସ୍ତ ସବୁଡୋମେନ୍ ଆବଶ୍ୟକତା ବିନା ଆଧିକାରରେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ କାର୍ଯ୍ୟ କରିବାକୁ ଦେବ।

### SSL ସର୍ଟିକେଟ୍ (SSL Certificates) {#ssl-certificates}

ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ ମାଧ୍ୟମରେ ଯୋଗ କରାଯାଇଥିବା ସମସ୍ତ ଡୋमेन ପାଇଁ WP Engine ଆପଣଙ୍କୁ SSL ସର୍ଟିକେଟ୍ ପ୍ରଦାନ ଏବଂ ନୂଆ କରିବାର (renewal) ସବୁ ସମୟରେ ସ୍ୱୟଂଚାଳିତ ଭାବରେ ମାନି ରଖେ। ଏଥିପାଇଁ କୌଣସି ଅତିରିକ୍ତ କନଫିଗରେସନ୍ ଆବଶ୍ୟକ ନୁହେଁ।

## ଟ୍ରବଲଶూଟିଙ୍ଗ (Troubleshooting) {#troubleshooting}

### API କନେକ୍ସନ୍ ସମସ୍ୟା {#api-connection-issues}
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ WP Engine pluginଟି ଅନ୍ୟାନ୍ୟ ଏବଂ ସଠିକ୍ ଭାବରେ କନଫିଗରେ ରହିଛି।
- ଯଦି ଆପଣ ନିଜେ API key ଡିଫିନିଶ୍ କରିଛନ୍ତି, ତେବେ ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଏହା ସଠିକ୍ ଅଛି।
- ଯଦି ଆପଣଙ୍କ ପାଖରେ API ସହିତ କୌଣସି ସମସ୍ୟା ହେଉଛି, ତେବେ WP Engine ସହାୟତା ବିଭାଗକୁ ଜଣାଇବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।

### ଡୋमेन ଯୋଗ ନଥିବା {#domain-not-added}
- କୌଣସି ଭୁଲ୍ ବାର୍ତ୍ତା ପାଇଁ Ultimate Multisite ଲଗ୍‌ରେ ଯାଞ୍ଚ କରନ୍ତୁ।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଡୋमेनଟି WP Engine ସହିତ ଆଗରୁ ଯୋଗ କରାଯାଇନାହିଁ।
- ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର WP Engine ପ୍ଲାନରେ ଆପଣ ଯାହାକୁ ଯୋଗ କରୁଛନ୍ତି ତାହାର ସଂଖ୍ୟା ଅନୁଯାୟୀ ଡୋमेन ସମର୍ଥନ ରହିଛି।

### ସବୁଡୋମେନ୍ ସମସ୍ୟା {#subdomain-issues}
- ଯଦି ସବୁଡୋମେନ୍ କାର୍ଯ୍ୟ କରୁନାानि, ତେବେ ୱାଇଲ୍ଡକାର୍ଡ ଡୋमेन କନଫିଗରେସନ୍ ମାଗିବା ପାଇଁ WP Engine ସହାୟତା ବିଭାଗକୁ ଜଣାଇବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।
- ମୁଖ୍ୟ ଡୋमेन ଏବଂ ସବୁଡୋମେନ୍‌ଗୁଡ଼ିକ ପାଇଁ ଆପଣଙ୍କ DNS ସେଟିଙ୍ଗସଠିକ୍ ଭାବରେ କନଫିଗରେ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
