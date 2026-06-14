---
title: RunCloud ସମନ୍ୱୟ
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ఇంటిగ్రేషన్ (Integration)

## అవలోకనం (Overview)
RunCloud అనేది క్లౌడ్ ఆధారిత సర్వర్ మేనేజ్‌మెంట్ ప్లాట్‌ఫారమ్. దీని ద్వారా మీరు మీ సొంత క్లౌడ్ సర్వర్‌లపై వెబ్ అప్లికేషన్‌లను సులభంగా డిప్లాయ్ చేసి నిర్వహించవచ్చు. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు RunCloud మధ్య ఆటోమేటిక్ డొమైన్ సింక్రొనింగ్ మరియు SSL సర్టిఫికేట్ మేనేజ్‌మెంట్‌ను అనుమతిస్తుంది.

## ఫీచర్లు (Features)
- ఆటోమేటిక్ డొమైన్ సింక్రొనింగ్
- SSL సర్టిఫికేట్ నిర్వహణ
- మ్యాపింగ్‌లు తొలగించినప్పుడు డొమైన్ తొలగింపు

## అవసరాలు (Requirements)
మీరు మీ `wp-config.php` ఫైల్‌లో ఈ కన్స్టాంట్‌లను నిర్వచించాలి:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## సెటప్ సూచనలు (Setup Instructions)

### 1. మీ RunCloud API కrédెంటియల్స్ పొందండి (Get Your RunCloud API Credentials)

1. మీ RunCloud డాష్‌బోర్డ్‌లోకి లాగిన్ అవ్వండి.
2. "User Profile" కి వెళ్లండి (టాప్-రైట్ కార్నర్ లో ఉన్న మీ ప్రొఫైల్ పిక్ పై క్లిక్ చేయండి).
3. మెనూ నుండి "API" ని ఎంచుకోండి.
4. మీకు API Key లేకపోతే, "Generate API Key" పై క్లిక్ చేయండి.
5. మీ API Key మరియు API Secret ను కాపీ చేసుకోండి.

### 2. మీ సర్వర్ మరియు యాప్ ID పొందండి (Get Your Server and App IDs)

1. మీ RunCloud డాష్‌బోర్డ్‌లో, "Servers" కి వెళ్లండి.
2. మీ WordPress మల్టీసైట్ హోస్ట్ చేయబడిన సర్వర్‌ను ఎంచుకోండి.
3. సర్వర్ ID URL లో కనిపిస్తుంది: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" కి వెళ్లి మీ WordPress అప్లికేషన్‌ను ఎంచుకోండి.
5. యాప్ ID URL లో కనిపిస్తుంది: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php లో కన్స్టాంట్‌లను జోడించండి (Add Constants to wp-config.php)

కింది కన్స్టాంట్‌లను మీ `wp-config.php` ఫైల్‌లో జోడించండి:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి (Enable the Integration)

୧. ଆପଣଙ୍କ WordPress admin ରେ, Ultimate Multisite > Settings କୁ ଯାଆନ୍ତୁ
୨. "Domain Mapping" tab ରେ ନିର୍ଦ୍ଦେଶ କରନ୍ତୁ
୩. "Host Integrations" కిందକୁ ସ୍କ୍ରୋଲ୍ କରନ୍ତୁ
୪. RunCloud integration ଟି ଅନ୍ (Enable) କରନ୍ତୁ
୫. "Save Changes" ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ

## ଏହା କିପରି କାମ କରେ

Ultimate Multisite ରେ ଏକ ଡୋमेन ମ୍ୟାପ୍ (map) କରାଯିବା ସମୟରେ:

୧. integration ବ୍ୟବହାର କରି RunCloud ର API କୁ ଏକ ଅନୁରୋଧ ପଠାଇଥାଏ ଯେ ଆପଣଙ୍କ ଡୋमेनକୁ ଆପଣଙ୍କ application ରେ ଯୋଗ କରନ୍ତୁ
୨. ଯଦି ଡୋमेन ସଫଳତାର ସହିତ ଯୋଗ କରାଯାଏ, ତେବେ integration SSL certificate များကို ମଧ୍ୟ redeploy କରିବ
୩. ଯେତେବେଳେ ଏକ domain mapping ହଟାଯାଏ, integration RunCloud ରୁ ଡୋमेनଟି हटा ଦିଏ

subdomain installations ପାଇଁ, ଆପଣଙ୍କ ନେଟୱାର୍କରେ ନୂଆ ସାଇଟ୍ ଯୋଗ କରାଯିବା ବେଳେ integration ଆପଣଙ୍କ RunCloud ରେ subdomain ଗୁଡ଼ିକ ସୃଷ୍ଟି କରିବାରେ ଆତ୍ମେଶା (automatically) ସହାୟକ ହେବ।

## ସମସ୍ୟା ସମାଧାନ (Troubleshooting)

### API Connection Issues
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ API credentials ଠିକ୍ ଅଛି କି ନାହିଁ
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ server ଏବଂ app IDs ଠିକ୍ ଅଛି କି ନାହିଁ
- ସୁନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ RunCloud accountରେ ଆବଶ୍ୟକ ଅନୁମତି (permissions) ରହିଛି

### SSL Certificate Issues
- RunCloud ପକ୍ଷରୁ SSL certificate ଜାରି କରିବାକୁ କିଛି ସମୟ ନେଇପାରେ
- ଯାଞ୍ଚ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ ଡୋमेनଗୁଡ଼ିକ ଆପଣଙ୍କ serverର IP address ସହିତ ଠିକ୍ ଭାବରେ ପଏଣ୍ଟ କରୁଛନ୍ତି କି
- ଆପଣଙ୍କ application ପାଇଁ RunCloud SSL settings ଯାଞ୍ଚ କରନ୍ତୁ

### Domain Not Added
- କୌଣସି error message ପାଇବା ପାଇଁ Ultimate Multisite logs ଯାଞ୍ଚ କରନ୍ତୁ
- ସୁନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଡୋमेनଟି RunCloud ରେ ଆବେଗ କରିପାରିଛି କି ନାହିଁ
- ସୁନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କ RunCloud plan ବହୁତ ଅଧିକ ଡୋमेनକୁ ସମର୍ଥନ କରେ
