---
title: କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍ ଏକୀକରଣକୁ ବୃଦ୍ଧି କରନ୍ତୁ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍ ସହିତ ଏକତ୍ରତା ବୃଦ୍ଧି

## ସମୀକ୍ଷା (Overview) {#overview}
Enhance ହେଉଛି ଏକ ଆଧୁନିକ କଣ୍ଟ୍ରୋଲ୍ ପ୍ୟାନେଲ୍ ଯାହା ଶକ୍ତିଶାଳୀ ହୋଷ୍ଟିଂ ଅଟୋମେସନ୍ ଏବଂ ମ୍ୟାନେଜମେଣ୍ଟ କ୍ଷମତା ପ୍ରଦାନ କରେ। ଏହି ଏକତ୍ରତା Ultimate Multisite ଏବଂ Enhance Control Panel ମଧ୍ୟରେ ଡୋमेन ସିଙ୍କିଂ (domain syncing) ଏବଂ SSL ସର୍ଟିଫିକେଟ୍ ମ୍ୟାନେଜମେଣ୍ଟକୁ ଆତ୍ମେଗ୍ରେଟ କରେ।

**ସମ୍ପର୍କିତ ଆଲୋଚନା:** ଆମେ community ଟିପ୍ସ ଏବଂ ଅଧିକ ସୂଚନା ପାଇଁ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ଦେଖନ୍ତୁ।

## ମୁକ୍ତିକ (Features) {#features}
- Ultimate Multisite ରେ ଡୋमेन ମ୍ୟାପ୍ କରାଯିବା ସମୟରେ ଆତ୍ମେଗତ ଡୋमेन ସିଙ୍କିଂ।
- DNS ସମାଧାନ ହେବା ମାତ୍ରେ LetsEncrypt ମାଧ୍ୟମରେ ଆତ୍ମେଗତ SSL ସର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ।
- ଡୋମେନ୍ ସବ୍ଡୋମେନ୍ ମୋଡ୍ ଚଲୁଥିବା ନେଟୱାର୍କ ପାଇଁ ସମର୍ଥନ।
- ମ୍ୟାପିଂ ବାଦ ଦେଲେ ଡୋमेन ହ୍ରାସ (removal)।
- API କ୍ରେଡେଣ୍ଟିଆଲ୍ ଯାଞ୍ଚ କରିବା ପାଇଁ କନେକ୍ସନ୍ ଟେଷ୍ଟିଂ।

## ଆବଶ୍ୟକତା (Requirements) {#requirements}

### ସିଷ୍ଟମ୍ ଆବଶ୍ୟକତା (System Requirements) {#system-requirements}
- Enhance Control Panel ସ୍ଥାପିତ ଏବଂ ପ୍ରବେଶଯୋଗ୍ୟ ହେବା ଆବଶ୍ୟକ।
- Enhance ସର୍ଭର ଉପରେ କିମ୍ବା ଯୋଡିତ WordPress Multisite ସ୍ଥାପନ।
- Apache web server (Enhance ବର୍ତ୍ତମାନ Apache configurationକୁ ସମର୍ଥନ କରେ; LiteSpeed Enterprise କମିଟି ଦ୍ୱାରା କମିତ ମୂଲ୍ୟରେ లେବେଲ୍ ଅଛି)।

### API ପ୍ରବେଶ (API Access) {#api-access}
API ଟୋକେନ୍ ସୃଷ୍ଟି କରିବା ପାଇଁ ଆପଣଙ୍କର Enhance Control Panel ଉପରେ ଇନଷ୍ଟ୍ରିଟର ଏକ୍ସେସ୍ ରହୁଥିବା ଆବଶ୍ୟକ।

## ଆପଣଙ୍କ API କ୍ରେଡେଣ୍ଟିଆଲ୍ ଗ୍ରହଣ କରିବା (Getting Your API Credentials) {#getting-your-api-credentials}

### ୧. ଏକ API ଟୋକେନ୍ ସୃଷ୍ଟି କରନ୍ତୁ (Create an API Token) {#1-create-an-api-token}

1. ପ୍ରବେଶକ ଭାବରେ ଆପଣଙ୍କ Enhance Control Panel ରେ ଲଗଇନ୍ କରନ୍ତୁ।
2. ନେଭିଗେସନ୍ ମେନୁରେ **Settings** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
3. **Access Tokens** ରେ ଯାଆନ୍ତୁ।
4. **Create Token** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
5. ଟୋକେନ୍‌କୁ ଏକ ବର୍ଣ୍ଣନାତ୍ମକ ନାମ ଦିଅନ୍ତୁ (ଯେପରି, "Ultimate Multisite Integration")।
6. **System Administrator** ଭୂମିକା (role) ମୁକ୍ତ କରନ୍ତୁ।
7. ଅବସର ସମୟ ପାଇଁ:
   - ଯଦି ଆପଣ ଚାହାନ୍ତି ଟୋକେନ୍ କେବେ ବି ବ୍ୟାପାର ନାହିଁ, ତେବେ ଏହାକୁ ଖାଲି ଛାଡ଼ନ୍ତୁ।
   - କିମ୍ବା ସୁରକ୍ଷା ପାଇଁ ଏକ ନିର୍ଦ୍ଦିଷ୍ଟ ଅବସର ତାରିଖ ସ୍ଥିର କରନ୍ତୁ।
8. **Create** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।

ସୃଷ୍ଟି କରିବା ପରେ, ଆପଣଙ୍କର **Access Token** ଏବଂ **Organization ID** ଦେଖାଯିବ। ଏଗୁଡ଼ିକ ତୁରନ୍ତ **ସେଭ୍** କରିଦିଅନ୍ତୁ କାରଣ টোকেন କେବଳ ଗୋଥରେ ଦେଖାଯାଏ।

### ୨. ଆପଣଙ୍କ ଅର୍ଗନାइजेशन ID (Organization ID) କିପରି ନି ಪಡೆಯବେ {#2-get-your-organization-id}

Organization ID ର ବିଷୟରେ blue information box ଭିତରେ "Org ID: {your_id}" ଭଳି লেবেল ସହିତ Access Tokens page ରେ ଦେଖାଯାଇଛି।

Organization ID ହେଉଛି ଏକ UUID ଆକାରର, ଯାହା ଏପରି ଦେଖାଏ: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ଆପଣ କଷ୍ଟମର୍ (customer) ର Organization ID ମଧ୍ୟ ନିମ୍ନଲିଖିତ ଉପରେ କରିପାରିବେ:
୧. **Customers** page ରେ ଯାଆନ୍ତୁ।
୨. ସମ୍ପୃକ୍ତ customer ପାଇଁ **Manage customer** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
୩. URL ଦେଖନ୍ତୁ - Organization ID ହେଉଛି `/customers/` ପରେ ଆସୁଥିବା ଅଲଫାନୁମେରିକ୍ ଚାର୍ଟର ଅକ୍ଷରଗୁଡ଼ିକ।

### ୩. ଆପଣଙ୍କ ସର୍ଭର ID (Server ID) କିପରି ନି ಪಡೆಯବେ {#3-get-your-server-id}

ଆପଣଙ୍କ Server ID (domain operations ପାଇଁ ଆବଶ୍ୟକ):

୧. Enhance Control Panel ରେ, **Servers** ରେ ଯାଆନ୍ତୁ।
୨. ଆପଣଙ୍କ WordPress installation ଚଲାଇଥିବା server ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
୩. Server ID (UUID format) URL ବା server details ରେ ଦେଖାଯିବ।
୪. ବା ଅନ୍ୟ ଏକ ପଦ୍ଧତି ଭାବରେ, ଆପଣ serverଗୁଡ଼ିକୁ ତାଲିକା କରିବା ପାଇଁ API ବ୍ୟବହାର କରିପାରିବେ:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID UUID ଆକାରରେ ଏପରି ଦେଖାଏ: `00000000-0000-0000-0000-000000000000`

### ୪. ଆପଣଙ୍କ API URL କିପରି ନି ಪಡೆಯବେ {#4-get-your-api-url}

ଆପଣଙ୍କ API URL ହେଉଛି ଆପଣଙ୍କ Enhance Control Panel URL ଯେଉଁଠି `/api/` ଅନୁସାରେ ଯୋଡ଼ାଯାଇଛି:

```
https://your-enhance-panel.com/api/
```

**ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ:** `/api/` ପଥଟି ଆବଶ୍ୟକ। ସାଧାରଣ ଭୁଲଗୁଡ଼ିକ ହେଉଛି:
- କେବଳ domain ବ୍ୟବହାର କରିବା, `/api/` ବିନା।
- ସୁରକ୍ଷା ପାଇଁ HTTP ବଦଳରେ HTTPS ବ୍ୟବହାର ନକରିବା (ସୁରକ୍ଷା ପାଇଁ HTTPS ଆବଶ୍ୟକ)।

## Configuration {#configuration}

### ଆବଶ୍ୟକ ଧାରଣାଗୁଡ଼ିକ (Required Constants) {#required-constants}

ତଳେ ଦିଆଯାଇଥିବା constantଗୁଡ଼ିକୁ ଆପଣଙ୍କ `wp-config.php` ଫାଇଲରେ ଯୋଡ଼ନ୍ତୁ:

```php
// Control Panel ସହିତ ଏକତ୍ରୀକରଣକୁ ବୃଦ୍ଧି କରିବା ପାଇଁ
define('WU_ENHANCE_API_TOKEN', 'ଆପଣଙ୍କ-ବେୟାର-ଟୋକେନ୍-ଏଠାକୁ');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'ଆପଣଙ୍କ-서버-ଉଇଡ୍-ଏୟୁଡି-ଏଠାକୁ');
```

### ଇଣ୍ଟିଗ୍ରେସନ୍ ମାଧ୍ୟମରେ ସେଟଅପ୍ କରିବା {#setup-via-integration-wizard}

୧ ଆପଣଙ୍କ WordPress admin ରେ, **Ultimate Multisite** > **Settings** କୁ ଯାଆନ୍ତୁ।
୨ **Integrations** ଟ୍ୟାବ୍‌କୁ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ।
୩ **Enhance Control Panel Integration** ଖୋଜନ୍ତୁ ଏବଂ **Configuration** ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।
୪ ବିଜ୍ଞାନୀ ଆପଣଙ୍କୁ ସେଟଅପ୍ କରିବାରେ ମାର୍ଗଦର୍ଶନ କରିବ:
   - **ପଦକ୍ଷେପ ୧:** ପରିଚୟ ଏବଂ ଅବସର ବ୍ୟାଖ୍ୟା।
   - **ପଦକ୍ଷେପ ୨:** ଆପଣଙ୍କ API କ୍ରିଡେଣ୍ଟିଆଲ୍ (Token, API URL, Server ID) ପ୍ରବେଶ କରନ୍ତୁ।
   - **ପଦକ୍ଷେପ ୩:** ସଂଯୋଗକୁ ପରୀକ୍ଷା କରନ୍ତୁ।
   - **ପଦକ୍ଷେପ ୪:** ଯାଞ୍ଚ କରନ୍ତୁ ଏବଂ ସକାରଣ କରନ୍ତୁ (Activate)।

ଆପଣ ନିମ୍ନରେ ମଧ୍ୟରୁ ଗୋଟିଏ ବାଛିପାରିବେ:
- ବିଜ୍ଞାନୀ ଆପଣଙ୍କ `wp-config.php` ଫାଇଲରେ କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକୁ ଆତ୍ମେୟ (automatically) ପ୍ରବେଶ କରିବାକୁ ଦେଇପାରିବ।
- କన్‌ଷ୍ଟାଣ୍ଟ ଡେଫିନିସନ୍ ମକ୍କି କରି ନିଜେ ସେଥିରେ ଯୋଡ଼ିପାରିବେ।

## ଅତିରିକ୍ତ WordPress କନଫିଗୁରେସନ୍ {#additional-wordpress-configuration}

ଆମେ ଆଲୋଚନା (Discussion #265) ଉପରେ ଆଧାର କରି, ଆପଣ ଏହି ଅତିରିକ୍ତ ସେଟିଂଗ୍ଗୁଡ଼ିକ କନଫିଗ୍ୟୁରେଟ କରିବାକୁ ପାରନ୍ତି:

### .htaccess କନଫିଗୁରେସନ୍ {#htaccess-configuration}

ଯଦି ଆପଣ ଡୋମେନ୍ ମ୍ୟାପିଙ୍ଗ୍ (domain mapping) ସହିତ ସମସ୍ୟା ଅନୁଭବ କରୁଛନ୍ତି:
୧ ମୂଳ Enhance `.htaccess` ଫାଇଲଟିକୁ ମିୂତନ୍ତୁ।
୨ ଏହାକୁ ସ୍ଥାନୀୟ WordPress Multisite `.htaccess` ଫାଇଲରେ ବଦଳାଯାଉଥିବା ପାଇଁ ପ୍ରତିସ୍ଥାପନ କରନ୍ତୁ।

### କୁକି ଅନୁଶାସନ (Cookie Constants) {#cookie-constants}

ମ୍ୟାପ୍ କରାଯାଇଥିବା ଡୋମେନ୍ ମଧ୍ୟରେ ସଠିକ୍ କୁକି ହ୍ୟାଣ୍ଡଲିଂ ବାବଦରେ, `wp-config.php` ରେ ଏହି କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକ ଯୋଡ଼ନ୍ତୁ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ଏହା କିପରି କାର୍ଯ୍ୟ କରେ {#how-it-works}

### ଡୋମେନ୍ ମ୍ୟାପ୍ କରାଗଲେ {#when-a-domain-is-mapped}

(This section is a heading, translated directly as it describes the concept.)

୧. Ultimate Multisite (କିମ୍ବା ସబ్‌ଡୋमेन ମୋଡରେ ଏକ ନୂଆ ସାଇଟ୍ ସୃଷ୍ଟି କରାଯାଏ) ରେ ଏକ କଷ୍ଟମ ଡୋमेन ମ୍ୟପ୍ କରିବା।
୨. ଆଇଣ୍ଟିଗ୍ରେସନ୍ Enhance ର API-କୁ POST ଅନୁରୋଧ ପଠାଏ: `/servers/{server_id}/domains`
୩. Enhance ଆପଣଙ୍କ ସର୍ଭର କନଫିଗରେ ଡୋमेनକୁ ଯୋଗୀ କରେ।
୪. DNS ଆପଣଙ୍କ ସର୍ଭରକୁ ମେଲ୍ (resolve) ହେବା ବେଳେ, Enhance ନିଜେ LetsEncrypt ମାଧ୍ୟମରେ SSL ସertificate ପ୍ରବେଶ କରେ।
୫. ଡୋमेन HTTPS ସହିତ ସକ୍ରିୟ ହୋଇଯାଏ।

### ଯେତେବେଳେ ଏକ ଡୋमेन ବାହାର କରାଯାଏ (When a Domain is Removed) {#when-a-domain-is-removed}

୧. Ultimate Multisite ରେ ଏକ ଡୋमेन ମ୍ୟପ୍‌କୁ ଡିଲିଟ୍ କରାଯାଏ।
୨. ଆଇଣ୍ଟିଗ୍ରେସନ୍ Enhance-କୁ ଡୋमेनର ID ଖୋଜିବା ପାଇଁ ପ୍ରଶ୍ନ କରେ।
୩. ଏଥିପାଇଁ DELETE ଅନୁରୋଧ ପଠାଯାଏ: `/servers/{server_id}/domains/{domain_id}`
୪. Enhance ଆପଣଙ୍କ ସର୍ଭର କନଫିଗରୁ ଡୋमेनକୁ ବାହାର କରିଦିଏ।

### DNS ଏବଂ SSL ଯାଞ୍ଚ (DNS and SSL Checking) {#dns-and-ssl-checking}

Ultimate Multisite ରେ built-in DNS ଏବଂ SSL ଯାଞ୍ଚ ଅଛି:
- ଆପଣ **Domain Mapping Settings** ରେ ଯାଞ୍ଚର ଅବଧି (interval) ସେଟ କରିପାରିବେ (ଡିଫାଉଟ: 300 second/5 ମିନିଟ୍)।
- ଏକ ଡୋमेनକୁ ସକ୍ରିୟ ବାହାର କରିବା ପୂର୍ବରୁ, ସିଷ୍ଟମ୍ DNS ପ୍ରଚଳନ (propagation) ଯାଞ୍ଚ କରିବ।
- SSL ସertिफिकेटର ବୈଧତା ଆପଣଙ୍କ ଦ୍ୱାରା ଆତ୍ମେ ଯାଞ୍ଚ ହୋଇଥାଏ।
- Enhance ନିଜେ SSL ପ୍ରବେଶ କରେ, ତେଣୁ ମାନୁଷୀୟ ହସ୍ତକ୍ଷେପ (manual) ସ୍ଥାପନ ନାହିଁ।

## ସେଟଅପ ଯାଞ୍ଚ କରିବା (Verifying Setup) {#verifying-setup}

### କନେକ୍ସନ୍ ପରୀକ୍ଷା କରନ୍ତୁ (Test the Connection) {#test-the-connection}

୧. Integration Wizard ରେ, **Test Connection** ପଦକ୍ଷେପ ବ୍ୟବହାର କରନ୍ତୁ।
୨. প্লাଗଇନ୍ ଆପଣଙ୍କ ସର୍ଭରରେ ଡୋमेनଗୁଡ଼ିକୁ ଲିଷ୍ଟ କରିବାକୁ ଚେଷ୍ଟା କରିବ।
୩. ଏକ ସଫଳତା ବାର୍ତ୍ତା ଦେଖାଯିବ:
   - API credentials ସଠିକ୍ ଅଛି
   - API URL ପ୍ରବେଶୀ (accessible) ଅଛି
   - Server ID ବୈଧ ଅଛି
   - ଅନୁମତି (Permissions) ଠିକ୍ ସେଟ ହୋଇଛି

### ଡୋमेन ମ୍ୟପ୍ କରିବା ପରେ (After Mapping a Domain) {#after-mapping-a-domain}

୧. Ultimate Multisite ରେ ଏକ ଟେଷ୍ଟ ଡୋमेन ମ୍ୟପ୍ କରନ୍ତୁ।
୨. Ultimate Multisite ଲଗ୍‌କୁ ଯାଞ୍ଚ କରନ୍ତୁ (**Ultimate Multisite** > **Logs** > **integration-enhance**)।
୩. Enhance Control Panel ରେ ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଡୋमेनଟି ଯୋଗୀ ହୋଇଛି:
   - **Servers** > **Your Server** > **Domains** ରେ ଯାଆନ୍ତୁ।
   - ନୂଆ ଡୋमेनଟି ଲିଷ୍ଟରେ ଦେଖାଯିବା ଆବଶ୍ୟକ।
୪. DNS ପ୍ରଚଳନ (propagate) ହେବା ପରେ, SSL ଆତ୍ମେ ପ୍ରବେଶ କରାଯାଇଛି ବୋଲି ଯାଞ୍ଚ କରନ୍ତୁ।

## ସମସ୍ୟାଗୁଡ଼ିକର ଉପରେ କାର୍ଯ୍ୟ କରିବା (Troubleshooting) {#troubleshooting}

### API ଯୋଗାଯୋଗ ସମସ୍ୟା (API Connection Issues) {#api-connection-issues}

**Error: "Enhance API ಗೆ ଯୋଡି ହେବାରେ ବିଫଳ" ("Failed to connect to Enhance API")**
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ `WU_ENHANCE_API_URL` ରେ ଶେଷରେ `/api/` ଅଛି କି ନାହିଁ।
- HTTPS ବ୍ୟବହାର କରୁଛନ୍ତି, HTTP ନୁହେଁ, ତାହା ନିଶ୍ଚିତ କରନ୍ତୁ।
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ Enhance ପ୍ୟାନେଲଟି ଆପଣଙ୍କ WordPress ସର୍ଭରରୁ ପ୍ରବେଶୀ (accessible) ଅଛି।
- ଯୋଗାଯୋଗ ବାଧା ପକାଇବା ପାଇଁ କୌଣସି firewall ନିୟମ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।

**Error: "Enhance API Token ମିଳିଲା ନାହିଁ" ("Enhance API Token not found")**
- `wp-config.php` ରେ `WU_ENHANCE_API_TOKEN` ବାଛିବାକୁ ଅଛି, ତାହା ନିଶ୍ଚିତ କରନ୍ତୁ।
- Enhance ରେ টোকেনଟି ମଧ୍ୟ ହଟ୍ କରାଯାଇଛି କିମ୍ବା ବଇତିଗଲା କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
- টୋକେନ୍ ମୂଲ୍ୟରେ କୌଣସି ତ୍ରୁଟି (typo) ଅଛି କି ନାହିଁ, ତାହା ଦେଖନ୍ତୁ।

**Error: "서버 ID ସେଟିଂ ହୋଇନାହିଁ" ("Server ID is not configured")**
- `wp-config.php` ରେ `WU_ENHANCE_SERVER_ID` ବାଛିବାକୁ ଅଛି, ତାହା ନିଶ୍ଚିତ କରନ୍ତୁ।
- Server IDଟି ଏକ ବୈଧ UUID ଫର୍ମାଟରେ ଅଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
- ଆପଣଙ୍କ Enhance ପ୍ୟାନେଲରେ ସେବା (server) ର ଅବସ୍ଥା ଦେଖନ୍ତୁ।

### ডোমেইন ଯୋଗାଯୋଗ ହେଉନାହିଁ (Domain Not Added) {#domain-not-added}

**ଲଗ୍ସ ଯାଞ୍ଚ କରନ୍ତୁ:**
1. **Ultimate Multisite** > **Logs** ରେ ଯାଆନ୍ତୁ।
2. **integration-enhance** ଦ୍ୱାରା ଫିଲ୍ଟର୍ କରିବାକୁ ଚେଷ୍ଟା କରନ୍ତୁ।
3. ସମସ୍ୟା ସୂଚାଉଥିବା ମେସେଜଗୁଡ଼ିକ ପାଇଁ ଅନୁଧ୍ୟାନ କରନ୍ତୁ।

**ସାଧାରଣ କାରଣ:**
- ଅସଠିକ୍ ଡୋमेन ନାମ ଫର୍ମାଟ୍ (Invalid domain name format)।
- Enhance ରେ ଡୋमेनଟି ପୂର୍ବରୁ ଅଛି।
- API ଅନୁମତି ଅଭାବ (ଯତ୍ନ କରନ୍ତୁ ଯେ টୋକେନ୍‌ରେ System Administrator ଭୂମିକା ଅଛି)।
- Server ID, Enhance ରେ ଥିବା ବାସ୍ତବ ସର୍ଭର ସହିତ ମେଳ ହେଉନାହିଁ।

### SSL ପ୍ରମାଣପ୍ରାପ୍ତି ସମସ୍ୟା (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL ପ୍ରମାଣପ୍ରାପ୍ତି ନହେବା:**
- DNS ଆପଣଙ୍କ ସର୍ଭରର IP ଠାରୁ ପଏଣ୍ଟ କରୁଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
- ଡୋमेनଟି ସଠିକ୍ ଭାବରେ ମିଳୁଛି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ: `nslookup yourdomain.com`
- SSL ପ୍ରମାଣପ୍ରାପ୍ତି ହେବା ପୂର୍ବରୁ DNS ମିଳିବା ଆବଶ୍ୟକ, Enhance ରେ SSL ପ୍ରମାଣପ୍ରାପ୍ତି କରିବାକୁ ସମ୍ଭବ।
- DNS ପ୍ରଚଳନ (propagation) ପରେ SSL ପ୍ରମାଣପ୍ରାପ୍ତି ହେବାକୁ ୫-୧୦ ମିନିଟ୍ ନିଆଯାଏ।
- SSL-ସମ୍ବନ୍ଧୀୟ ତ୍ରୁଟିଗୁଡ଼ିକ ପାଇଁ Enhance Control Panel ଲଗ୍ସ ଯାଞ୍ଚ କରନ୍ତୁ।

**Enhance ରେ ମାନୁକରଣ (Manual) SSL ସମସ୍ୟା ସମାଧାନ:**
1. **Servers** > **Your Server** > **Domains** ରେ ଯାଆନ୍ତୁ।
2. ଆପଣଙ୍କ ଡୋमेनଟି ଖୋଜନ୍ତୁ ଏବଂ

ডোমেইন বা SSL সার্টিফিকেট অ্যাক্টিভেট হতে বেশি সময় লাগলে:
১. **Ultimate Multisite** > **Settings** > **Domain Mapping**-এ যান।
২. **DNS Check Interval** সেটিংসটি খুঁজুন।
৩. ডিফল্ট ৩০০ সেকেন্ড থেকে এটিকে কম মান (ন্যূনতম: ১০ সেকেন্ড) এ পরিবর্তন করুন।
৪. **দ্রষ্টব্য:** কম ইন্টারভ্যাল মানে ঘন ঘন চেক হবে কিন্তু সার্ভারের লোড বেশি হতে পারে।

### অথেন্টিকেশন এররসমূহ {#dns-check-interval}

**HTTP 401/403 এরর:**
- Enhance-এ আপনার API টোকেনটি আবার তৈরি করুন (Regenerate)।
- নিশ্চিত করুন যে টোকেনে **System Administrator** রোল আছে।
- পরীক্ষা করুন যে টোকেনটি মেয়াদ উত্তীর্ণ হয়নি।
- সঠিক Organization ID ব্যবহার করছেন কিনা তা নিশ্চিত করুন (যদিও এটি সাধারণত URL-এ প্রয়োজন হয় না)।

### লগ বিশ্লেষণ {#authentication-errors}

বিস্তারিত লগ চালু করুন:
```php
// উন্নত ডিবাগিংয়ের জন্য wp-config.php-তে যোগ করুন
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

তারপর নিচের জায়গাগুলোতে লগ চেক করুন:
- Ultimate Multisite লগ: **Ultimate Multisite** > **Logs**
- WordPress ডিবাগ লগ: `wp-content/debug.log`
- Enhance প্যানেল লগ: Enhanc-এর অ্যাডমিন ইন্টারফেসে পাওয়া যাবে।

## API রেফারেন্স {#log-analysis}

### অথেন্টিকেশন {#api-reference}
সমস্ত API রিকোয়েস্ট Bearer টোকেন অথেন্টিকেশন ব্যবহার করে:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ব্যবহৃত সাধারণ এন্ডপয়েন্টসমূহ {#authentication}

**সার্ভার তালিকা:**
```
GET /servers
```

**একটি সার্ভারে ডোমেইন তালিকা:**
```
GET /servers/{server_id}/domains
```

**একটি ডোমেইন যোগ করা:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**একটি ডোমেইন মুছে ফেলা:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### সম্পূর্ণ API ডকুমেন্টেশন {#common-endpoints-used}
সম্পূর্ণ API ডকুমেন্টেশন দেখুন: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## সেরা অনুশীলনসমূহ {#full-api-documentation}

### ସୁରକ୍ଷା (Security) {#best-practices}
- **API tokens କେବେ ବି version control ରେ ରଖନ୍ତୁ ନାହିଁ**
- tokens တွေကို `wp-config.php` ରେ ସେଭ୍ କରନ୍ତୁ, ଯାହାକୁ Git ଠାରୁ ବାହାର କରିବା ଆବଶ୍ୟକ।
- ପ୍ରାପ୍ତ ଅନୁମତି (tokens) ଉପରେ ଉପଯୁକ୍ତ ଅନୁମତି ରଖନ୍ତୁ (ସମ୍ପୂର୍ଣ୍ଣ ଏ anti-integration ପାଇଁ System Administrator ବ୍ୟବହାର କରନ୍ତୁ)।
- production environment ପାଇଁ token expiry dates set କରନ୍ତୁ।
- ନିୟମିତ ଭାବରେ tokens rotate କରନ୍ତୁ।

### ପ୍ରଦର୍ଶନ (Performance) {#security}
- ଅଧିକ API calls ରହିବାକୁ ଦ୍ୱାରା ବାଧା ହେଉଥିବା ପାଇଁ default DNS check interval (300 seconds) ବ୍ୟବହାର କରନ୍ତୁ।
- ବଡ଼ ସ୍କେଲରେ domain operations ଚାଲିବା ବେଳେ Enhance server ର resources ମନେ ରଖନ୍ତୁ।
- ଏକାସାଙ୍ଗରେ ଅନେକ domain ମ୍ୟାପ୍ (mapping) କରିବାକୁ ପଡ଼ିଲେ, domain addition တွေကို stagger କରନ୍ତୁ।

### ମନୋରିଣ (Monitoring) {#performance}
- integration errors ପାଇଁ Ultimate Multisite logs ଠାରୁ ନିୟମିତ ଭାବରେ ଯାଞ୍ଚ କରନ୍ତୁ।
- failed domain additions ପାଇଁ monitoring set up କରନ୍ତୁ।
- SSL certificates ସଠିକ୍ ଭାବରେ provision ହେଉଛନ୍ତି କି ନାହିଁ, ତାହା ଯାଞ୍ଚ କରନ୍ତୁ।
- Enhance server ର capacity ଏବଂ domain limits ଉପରେ ନଜର ରଖନ୍ତୁ।

## ଅତିରିକ୍ତ ସମ୍ପୂର୍ଣ୍ଣ (Additional Resources) {#monitoring}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** "How to Configure Domain Mapping v2" wiki page ରେ ଦେଖନ୍ତୁ।

## ସହାୟତା (Support) {#additional-resources}

ଯଦି ଆପଣ କୌଣସି ସମସ୍ୟା ମିଳିବ:
1. ଉପରୋକ୍ତ Troubleshooting section ଟି ଯାଞ୍ଚ କରନ୍ତୁ।
2. Ultimate Multisite logs ରେ ଦେଖନ୍ତୁ।
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ରେ ପରାମର୍ଶ ନିଅନ୍ତୁ।
4. panel-specific ସମସ୍ୟା ପାଇଁ Enhance support ସହିତ ଯୋଗାଯୋଗ କରନ୍ତୁ।
5. community assistance ପାଇଁ ବିସ୍ତୃତ error logs ସହିତ ଏକ ନୂଆ discussion ତିଆରି କରନ୍ତୁ।

## ଟିପ୍ସ (Notes) {#support}

এই ইন্টিগ্রেশন শুধুমাত্র ডোমেইন অ্যালিয়াস (domain aliases) পরিচালনা করে; এনহ্যান্স স্বয়ংক্রিয়ভাবে SSL পরিচালনা করে।
এই ইন্টিগ্রেশন কাস্টম ডোমেইন ম্যাপিং এবং সাবডোমেইন-ভিত্তিক সাইট দুটোকেই সমর্থন করে।
ডোমেইন ম্যাপিং সেটিংসে অটোমেটিক www সাবডোমেইন তৈরি করার অপশন কনফিগার করা যেতে পারে।
এনহ্যান্স বর্তমানে Apache কনফিগারেশন সমর্থন করে (LiteSpeed Enterprise উপলব্ধ)।
Ultimate Multisite থেকে ডোমেইন সরিয়ে দিলে Enhance থেকে সেই ডোমেইনটি সরে যাবে, কিন্তু সাথে যুক্ত SSL সার্টিফিকেটগুলো তাৎক্ষণিকভাবে মুছে নাও যেতে পারে।
