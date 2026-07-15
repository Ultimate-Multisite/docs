---
title: କ୍ଲାଉଡୱେଜ୍ ଇଣ୍ଟିଗ୍ରେସନ୍
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ସହିତ ଏକତ୍ରୀକରଣ (Integration)

## ସମୀକ୍ଷା (Overview) {#overview}
Cloudways ହେଉଛି ଏକ ମ୍ୟାନେଜ୍ଡ କ୍ଲାଉଡ ହୋଷ୍ଟିଂ ପ୍ଲାଟଫର୍ମ, ଯାହା ଆପଣଙ୍କୁ DigitalOcean, AWS, Google Cloud ଏବଂ ଅନ୍ୟାନ୍ୟ ବିଭିନ୍ନ କ୍ଲାଉଡ ପ୍ରଡାଭର୍ଦକକୀ ଭଳି ବିଭିନ୍ନ କ୍ଲାଉଡ ପ୍ରୋବାଇଡରରେ WordPress साईट ଡିପ୍ଲଏପ୍ କରିବାକୁ ସୁବିଧା ଦିଏ। ଏହି ଏକତ୍ରୀକରଣ Ultimate Multisite ଏବଂ Cloudways ମଧ୍ୟରେ ଅଟୋମେଟିକ୍ ଡୋमेन ସିଙ୍କିଂ (automatic domain syncing) ଏବଂ SSL ସର୍ଟିଫିକେଟ୍ ମାନେଜମେଣ୍ଟକୁ ସମ୍ପାଦନ କରେ।

## ବୈଶିଷ୍ଟ୍ୟ (Features) {#features}
- ଅଟୋମେଟିକ୍ ଡୋमेन ସିଙ୍କିଂ (Automatic domain syncing)
- SSL ସର୍ଟିଫିକେଟ୍ ମାନେଜମେଣ୍ଟ (SSL certificate management)
- ଅତିରିକ୍ତ ଡୋमेन ପାଇଁ ସମର୍ଥନ (Support for extra domains)
- SSL ସର୍ଟିଫିକେଟ୍ ପାଇଁ DNS ଯାଞ୍ଚ (DNS validation for SSL certificates)

## ଆବଶ୍ୟକତା (Requirements) {#requirements}
ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ନିମ୍ନଲିଖିତ କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକ ବ୍ୟାଖ୍ୟା କରିବାକୁ ପଡ଼ିବ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ବିବେକୀୟ ଭାବରେ, ଆପଣ ଏହା ମଧ୍ୟ ବ୍ୟାଖ୍ୟା କରିପାରିବେ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## ସେଟଅପ ନିର୍ଦ୍ଦେଶ (Setup Instructions) {#setup-instructions}

### 1. ଆପଣଙ୍କର Cloudways API କ୍ରିଡେନସିଆଲ୍ ଗ୍ରହଣ କରନ୍ତୁ (Get Your Cloudways API Credentials) {#1-get-your-cloudways-api-credentials}

1. ଆପଣଙ୍କ Cloudways dashboard-ରେ ଲଗଇନ୍ କରନ୍ତୁ।
2. "Account" > "API Keys" ରେ ଯାଆନ୍ତୁ।
3. ଆପଣ ପାସ କରିନାହଁନ୍ତି, ସେଥିଲେ ଏକ API key ତିଆରି କରନ୍ତୁ।
4. ଆପଣଙ୍କର ଇମେଲ୍ ଏବଂ API key ଟି କପି କରନ୍ତୁ।

### 2. ଆପଣଙ୍କର ସର୍ଭର ଏବଂ ଆପ୍ ପ୍ରତି{ଦ୍ୱାରା (Server and Application IDs) ଗ୍ରହଣ କରନ୍ତୁ {#2-get-your-server-and-application-ids}

1. ଆପଣଙ୍କ Cloudways dashboard-ରେ, "Servers" ରେ ଯାଆନ୍ତୁ।
2. ସେହି ସର୍ଭରଟିକୁ ବାଛନ୍ତୁ ଯେଉଁଠି ଆପଣଙ୍କର WordPress multisite ରହିଛି।
3. Server ID ଟି URL ମଧ୍ୟ ଦେଖାଯାଏ: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" ରେ ଯାଇ ଆପଣଙ୍କର WordPress application ଟି ବାଛନ୍ତୁ।
5. App ID ଟି URL ମଧ୍ୟ ଦେଖାଯାଏ: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ରେ କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକ ଯୋଡନ୍ତୁ (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

ନିମ୍ନଲିଖିତ କన్‌ଷ୍ଟାଣ୍ଟଗୁଡ଼ିକୁ ଆପଣଙ୍କର `wp-config.php` ଫାଇଲରେ ଯୋଡନ୍ତୁ:

### 4. ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి {#4-enable-the-integration}

1. మీ WordPress admin లో, Ultimate Multisite > Settings కి వెళ్లండి
2. "Domain Mapping" ట్యాబ్‌కు వెళ్లండి
3. "Host Integrations" కిందకి స్క్రోల్ చేసి చూడండి
4. Cloudways ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి
5. "Save Changes" పై క్లిక్ చేయండి

## ఇది ఎలా పనిచేస్తుంది {#how-it-works}

### డొమైన్ సింక్రొనింగ్ (Domain Syncing) {#domain-syncing}

Ultimate Multisite లో ఒక డొమైన్‌ను మ్యాప్ చేసినప్పుడు:

1. ఇంటిగ్రేషన్ ప్రస్తుతం మ్యాప్ చేయబడిన అన్ని డొమైన్‌లను తీసుకుంటుంది
2. అది కొత్త డొమైన్‌ను జాబితాలో జోడిస్తుంది (అవసరమైతే www వెర్షన్‌తో కూడా)
3. ఇది పూర్తి జాబితాను API ద్వారా Cloudways కి పంపుతుంది
4. Cloudways మీ అప్లికేషన్ కోసం డొమైన్ అలియాస్‌లను అప్‌డేట్ చేస్తుంది

గమనిక: ప్రతిసారీ, కేవలం ఒక డొమైన్‌ను జోడించడం లేదా తొలగించడం మాత్రమే కాకుండా, పూర్తి డొమైన్ జాబితాను పంపడం Cloudways API కి అవసరం.

### SSL సర్టిఫికేట్ నిర్వహణ (SSL Certificate Management) {#ssl-certificate-management}

డొమైన్‌లు సింక్ అయిన తర్వాత:

1. ఇంటిగ్రేషన్ మీ సర్వర్‌కు సరిగ్గాpointing అయ్యే DNS రికార్డులు ఉన్న డొమైన్‌లను తనిఖీ చేస్తుంది
2. ఆ డొమైన్‌ల కోసం Let's Encrypt SSL సర్టిఫికేట్‌లను ఇన్‌స్టాల్ చేయమని Cloudways కి అభ్యర్థన పంపుతుంది
3. SSL సర్టిఫికేట్ జారీ మరియు ఇన్‌స్టాలేషన్‌ను Cloudways నిర్వహిస్తుంది

ସମସ୍ତ ସମୟରେ ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ କ୍ଲାଉଡୱେଜରୁ **ଷ୍ଟାଣ୍ଡାର୍ଡ** (ବାଇଲ୍ଡକାର୍ଡ ନଥିବା) Let's Encrypt ସର୍ଟିକେଟ୍ ମାଗେ। ଯଦି `WU_CLOUDWAYS_EXTRA_DOMAINS` ରେ କୌଣସି ବାଇଲ୍ଡକାର୍ଡ ପ୍ୟାଟର୍ଣ୍ଣ ଦିଆଯାଏ, ତେବେ SSL ଅନୁରୋଧ କରିବା ପୂର୍ବରୁ ପ୍ରଥମରେ `*.` ହ୍ରାସ କରାଯାଏ — ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ ବାଇଲ୍ଡକାର୍ଡକୁ କେବେ ବି ସ୍ଥାପନ କରେ ନାହିଁ। Cloudways ରେ ବାଇଲ୍ଡକାର୍ଡ ସର୍ଟିକେଟ୍ ବ୍ୟବହାର କରିବା ପାଇଁ ଆପଣ ଏହାକୁ ମାନୁବୀୟ ଭାବରେ ସ୍ଥାପନ କରିବାକୁ ପଡ଼ିବ, କିନ୍ତୁ ଏହା କରିବା ଦ୍ୱାରା ମ୍ୟାପ୍ କରାଯାଇଥିବା ପ୍ରତି-ଡୋମେନ୍ Let's Encrypt ଯୋଗାଣ ବନ୍ଦ ହୋଇଯାଏ (ତଳେ ବିପଦ ଦେଖନ୍ତୁ)।

## ଅତିରିକ୍ତ ଡୋମେନ୍ (Extra Domains) {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` କన్‌ଷ୍ଟାଣ୍ଟ ଆପଣଙ୍କୁ ଅଧିକ **ବହୁଲଚ୍ଛେଦ** ଡୋମେନ୍ ସ୍ପଷ୍ଟ କରିବାକୁ ଅନୁମତି ଦିଏ ଯାହାକୁ Cloudways ଆପ୍လီକେସନ୍‌ର ଅଲାଇସ୍ (aliases) ତାଲିକାରେ ସର୍ବଦା ରଖିବାକୁ ହେବ। ଏହା ବ୍ୟବହାର କରନ୍ତୁ:

- Ultimate Multisite ଦ୍ୱାରା ପରିଚାଳିତ ନଥିବା ବାହ୍ୟ ଡୋମେନ୍ (ଯେପରିକି, ଏକ ଭଲ ମାର୍କେଟିଂ ସାଇଟ୍ ଯାହା ସେହି Cloudways ଆପ୍လီକେସନକୁ ବ୍ୟବହାର କରେ)।
- ଆପଣ ଚାହାଁନ୍ତି ଯେ ଆପଣଙ୍କର ଡୋମେନ୍ ପାର୍କିଡ୍ (parked) କିମ୍ବା ଷ୍ଟେଜିଂ (staging) ଡୋମେନ୍, ଯାହାକୁ ଆପ୍လီକେସନ ଅଲାଇସ୍ ତାଲିକାରେ ରଖିବାକୁ ଚାହୁଁଛନ୍ତି।

ଆପଣଙ୍କ ନିଜ ନେଟୱାର୍କର ସବୁ-ଡୋମେନ୍ ବାଇଲ୍ଡକାର୍ଡ (ଯେପରିକି `*.your-network.com`) ପାଇଁ ଏହି କన్‌ଷ୍ଟାଣ୍ଟ ବ୍ୟବହାର **ନା** କରନ୍ତୁ। ବାଇଲ୍ଡକାର୍ଡ SSL ବିଷୟରେ ତଳେ ବିପଦ ଦେଖନ୍ତୁ।

## ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ — ବାଇଲ୍ଡକାର୍ଡ SSL ବିପଦ (Wildcard SSL Pitfall) {#important--wildcard-ssl-pitfall}

Cloudways ର ମାନକ ସେଟଅପ୍ ଅନୁସରଣ କରିବାରେ ଏକ ସାଧାରଣ ଭୁଲ ହେଉଛି `WU_CLOUDWAYS_EXTRA_DOMAINS` ରେ `*.your-network.com` ବାଇଲ୍ଡକାର୍ଡ ଯୋଗ addition କରିବା, କିମ୍ବା ସେହି ବାଇଲ୍ଡକାର୍ଡ ପାଇଁ Cloudways ରେ ମାନୁବୀୟ ଭାବରେ ଏକ ବାଇଲ୍ଡକାର୍ଡ SSL ସର୍ଟିକେଟ୍ ସ୍ଥାପନ କରିବା।

**ଯଦି ଆପଣ ଏହା କରନ୍ତି, ତେବେ Ultimate Multisite ଯେଉଁ ପ୍ରତି-ટેଣ୍ଟ (per-tenant) କଷ୍ଟମ୍ ଡୋମେନ୍‌ଗୁଡ଼ିକ ପାଇଁ Let's Encrypt ସର୍ଟିକେଟ୍ ଜାରି କରିବାକୁ Cloudways ମନା କରିଦେବ।** Cloudways ଆପ୍လီକେସନରେ ପ୍ରତିଥର SSL ସର୍ଟିକେଟ୍ ବଦଳାଇ ଦିଏ, ଏବଂ ଆପ୍လီକେସନରେ ପୂର୍ବରୁ ଥିବା ବାଇଲ୍ଡକାର୍ଡ ସର୍ଟିକେଟ୍ ଯୋଗୁଁ, ଏହି ଇଣ୍ଟିଗ୍ରେସନ୍ ଯାହା ଉପରେ ନିର୍ଭର କରେ, ପ୍ରତି-ଡୋମେନ୍ Let's Encrypt ଜାରି କରିବାକୁ ବାଧ୍ୟତା ମିଳେ।

### Ultimate Multisite ନେଟୱାର୍କ ପାଇଁ ଆବଶ୍ୟକ Cloudways SSL ସେଟଅପ୍ {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways ਐਪਲੀਕੇਸ਼ਨର **SSL Certificate** 탭ରେ, ਸਿਰਫ਼ `your-network.com` ਅਤੇ `www.your-network.com` ਨੂੰ ਕਵਰ ਕਰਨ ਵਾਲਾ ਇੱਕ **standard Let's Encrypt certificate** ਇੰਸਟਾਲ ਕਰੋ — ਵਾਈਲਡਕਾਰ (wildcard) ਨਹੀਂ।
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚ `*.your-network.com` (ਜਾਂ ਤੁਹਾਡੇ ਨੈੱਟਵਰਕ ਦੇ ਕਿਸੇ ਵੀ ਸਬਡੋਮੇਨ ਪੈਟਰਨ) ਨੂੰ **ਨਹੀਂ** ਰੱਖੋ। ਉਸ ਕੌਂਸਟੈਂਟ ਨੂੰ ਸਿਰਫ਼ **ਬਾਹਰੀ** ਡੋਮੇਨਾਂ ਲਈ ਰੱਖੋ।
3. per-tenant subdomain wildcard ਨੂੰ ਸਿਰਫ਼ **DNS** ਲੈਵਲ 'ਤੇ ਬਣਾਓ (ਤੁਹਾਡੇ Cloudways ਸਰਵਰ IP ਵੱਲ ਜਾਣ ਵਾਲਾ `*.your-network.com` ਲਈ ਇੱਕ `A` record) ਤਾਂ ਜੋ ਸਬਸਾਈਟਾਂ ਰਿਜ਼ੋਲਵ ਹੋ ਸਕਣ। ਵਿਅਕਤੀਗਤ ਮੈਪ ਕੀਤੇ ਕਸਟਮ ਡੋਮੇਨਾਂ ਲਈ SSL ਆਪਣੇ ਆਪ Let's Encrypt ਰਾਹੀਂ ਇਸ਼ੂ ਕੀਤਾ ਜਾਂਦਾ ਹੈ।

ਜੇ ਤੁਹਾਡੇ ਟੈਂਟਾਂ ਦੇ ਕਸਟਮ ਡੋਮੇਨ SSL ਤੋਂ ਰੁਕ ਗਏ ਹਨ, ਤਾਂ Cloudways SSL 탭 ਦੀ ਜਾਂਚ ਕਰੋ। ਜੇ ਉੱਥੇ ਕੋਈ ਵਾਈਲਡਕਾਰ ਸਰਟੀਫਿਕੇਟ ਚੱਲ ਰਿਹਾ ਹੈ, ਤਾਂ ਉਸਨੂੰ ਹਟਾ ਦਿਓ, ਸਿਰਫ਼ ਮੁੱਖ ਨੈੱਟਵਰਕ ਡੋਮੇਨ ਲਈ ਇੱਕ standard Let's Encrypt certificate ਦੁਬਾਰਾ ਇਸ਼ੂ ਕਰੋ, ਅਤੇ `WU_CLOUDWAYS_EXTRA_DOMAINS` ਵਿੱਚੋਂ ਕਿਸੇ ਵੀ ਵਾਈਲਡਕਾਰ ਐਂਟਰੀ ਨੂੰ ਹਟਾ ਦਿਓ। ਫਿਰ ਇੱਕ ਡੋਮੇਨ ਮੈਪਿੰਗ ਨੂੰ ਦੁਬਾਰਾ ਸ਼ੁਰੂ ਕਰੋ (ਜਾਂ ਅਗਲੇ ਦੀ ਉਡੀਕ ਕਰੋ) ਅਤੇ ਇੰਟੀਗ੍ਰੇਸ਼ਨ ਦੁਬਾਰਾ per-domain ਸਰਟੀਫਿਕੇਟ ਇਸ਼ੂ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰ ਦੇਵੇਗੀ।

## ਟ੍ਰਬੂਲਸ਼ੂਟਿੰਗ {#troubleshooting}

### API ਕਨੈਕਸ਼ਨ ਮੁੱਦੇ {#api-connection-issues}
- ਇਹ ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡਾ email ਅਤੇ API key ਸਹੀ ਹਨ
- ਜਾਂਚ ਕਰੋ ਕਿ ਤੁਹਾਡੇ server ਅਤੇ application IDs ਸਹੀ ਹਨ
- ਯਕੀਨੀ ਬਣਾਓ ਕਿ ਤੁਹਾਡੇ Cloudways account ਵਿੱਚ ਲੋੜੀਂਦੀਆਂ ਅਧਿਕਾਰ ਹਨ

### SSL సర్టిఫికేట్ సమస్యలు {#ssl-certificate-issues}
- SSL సర్టిఫికేట్‌లను జారీ చేయడానికి, మీ సర్వర్‌కు సరిపోయే DNS రికార్డులు ఉన్న డొమైన్‌లు తప్పనిసరిగా ఉండాలని Cloudways కోరుతుంది.
- SSL సర్టిఫికేట్‌ల కోసం అభ్యర్థించే ముందు ఈ ఇంటిగ్రేషన్ DNS రికార్డులను ధృవీకరిస్తుంది.
- SSL సర్టిఫికేట్‌లు జారీ చేయకపోతే, మీ డొమైన్‌లు మీ సర్వర్ IP చిరునామాకు సరిగ్గా పాయింట్ చేస్తున్నాయో లేదో తనిఖీ చేయండి.
- **SSL లేకుండా పెట్టిన కస్టమ్ డొమైన్‌లు ఆగిపోయాయా?** Cloudways అప్లికేషన్ యొక్క SSL Certificate ట్యాబ్‌ను తనిఖీ చేయండి. ఒక వైల్డ్‌కార్డ్ సర్టిఫికేట్ (మాన్యువల్‌గా ఇన్‌స్టాల్ చేసినది, లేదా `*.your-network.com` ను కవర్ చేసేది) యాక్టివ్‌గా ఉంటే, Cloudways విడిగా మ్యాప్ చేసిన కస్టమ్ డొమైన్‌ల కోసం Let's Encrypt సర్టిఫికేట్‌లను జారీ చేయదు. ప్రధాన నెట్‌వర్క్ డొమైన్ (`your-network.com`, `www.your-network.com`) ను మాత్రమే కవర్ చేసే ప్రామాణిక Let's Encrypt సర్టిఫికేట్‌తో దాన్ని భర్తీ చేయండి మరియు `WU_CLOUDWAYS_EXTRA_DOMAINS` నుండి ఏ వైల్డ్‌కార్డ్ ఎంట్రీలను తొలగించండి. ఆపై డొమైన్ మ్యాపింగ్‌ను మళ్లీ ట్రిగ్గర్ చేయండి (లేదా తదుపరి దాని కోసం వేచి ఉండండి) మరియు ఇంటిగ్రేషన్ డొమైన్-ప్రతి సర్టిఫికేట్‌లను అభ్యర్థిస్తుంది.

### డొమైన్ జోడించబడలేదు {#domain-not-added}
- ఏదైనా లోపం సందేశాలు ఉన్నాయో లేదో Ultimate Multisite లాగ్‌లను తనిఖీ చేయండి.
- డొమైన్ ఇప్పటికే Cloudwaysలో జోడించబడిందో లేదో నిర్ధారించుకోండి.
- మీరు జోడిస్తున్న డొమైన్‌ల సంఖ్యను మీ Cloudways ప్లాన్ సపోర్ట్ చేస్తుందో లేదో చూసుకోండి.
