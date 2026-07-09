---
title: GridPane Integration
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integration {#gridpane-integration}

## Overview {#overview}
GridPane అనేది సీరియస్ WordPress ప్రొఫెషనల్స్ కోసం ప్రత్యేకంగా రూపొందించబడిన WordPress హోస్టింగ్ కంట్రోల్ ప్యానెల్. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు GridPane మధ్య ఆటోమేటిక్ డొమైన్ సింకింగ్ మరియు SSL సర్టిఫికేట్ మేనేజ్‌మెంట్‌ను ఎనేబుల్ చేస్తుంది.

## Features {#features}
- ఆటోమేటిక్ డొమైన్ సింకింగ్
- SSL సర్టిఫికేట్ మేనేజ్‌మెంట్
- SUNRISE కాన్స్టాంట్ ఆటోమేటిక్ కాన్ఫిగరేషన్

## Requirements {#requirements}
కింది కాన్స్టాంట్‌లు మీ `wp-config.php` ఫైల్‌లో నిర్వచించబడాలి:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Setup Instructions {#setup-instructions}

### 1. Get Your GridPane API Credentials {#1-get-your-gridpane-api-credentials}

1. మీ GridPane డాష్‌బోర్డ్‌లోకి లాగిన్ అవ్వండి
2. "Settings" > "API" కి వెళ్లండి
3. మీకు ఇప్పటికే API కీ లేకపోతే, దాన్ని జనరేట్ చేయండి
4. మీ API కీని కాపీ చేసుకోండి

### 2. Get Your Server and Site IDs {#2-get-your-server-and-site-ids}

1. మీ GridPane డాష్‌బోర్డ్‌లో, "Servers" కి వెళ్లండి
2. మీ WordPress మల్టీసైట్ హోస్ట్ చేయబడిన సర్వర్‌ను ఎంచుకోండి
3. సర్వర్ IDని గమనించండి (ఇది URL లో లేదా సర్వర్ వివరాల పేజీలో కనిపిస్తుంది)
4. "Sites" కి వెళ్లి మీ WordPress సైట్‌ను ఎంచుకోండి
5. సైట్ IDని గమనించండి (ఇది URL లో లేదా సైట్ వివరాల పేజీలో కనిపిస్తుంది)

### 3. Add Constants to wp-config.php {#3-add-constants-to-wp-configphp}

కింది కాన్స్టాంట్‌లను మీ `wp-config.php` ఫైల్‌లో జోడించండి:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Enable the Integration {#4-enable-the-integration}

1. మీ WordPress అడ్మిన్ లో, Ultimate Multisite > Settings కి వెళ్లండి
2. "Domain Mapping" ట్యాబ్‌కి నావిగేట్ చేయండి
3. "Host Integrations" వరకు స్క్రోల్ చేయండి
4. GridPane ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి
5. "Save Changes" పై క్లిక్ చేయండి

## How It Works {#how-it-works}

Ultimate Multisite లో ఒక డొమైన్ మ్యాప్ చేయబడినప్పుడు:

1. ఇంటిగ్రేషన్ ఆ డొమైన్‌ను మీ సైట్‌కు జోడించడానికి GridPane యొక్క API కి ఒక రిక్వెస్ట్‌ను పంపుతుంది
2. GridPane ఆటోమేటిక్‌గా SSL సర్టిఫికేట్ ప్రొవిజనింగ్‌ను నిర్వహిస్తుంది
3. డొమైన్ మ్యాపింగ్ తొలగించబడినప్పుడు, ఇంటిగ్రేషన్ ఆ డొమైన్‌ను GridPane నుండి తొలగిస్తుంది

ఈ ఇంటిగ్రేషన్ మీ `wp-config.php` ఫైల్‌లోని SUNRISE కాన్స్టాంట్‌ను కూడా ఆటోమేటిక్‌గా నిర్వహిస్తుంది, ఇది డొమైన్ మ్యాపింగ్ సరిగ్గా పని చేయడానికి అవసరం.

## SUNRISE Constant Management {#sunrise-constant-management}

GridPane ఇంటిగ్రేషన్ యొక్క ప్రత్యేక ఫీచర్ ఏమిటంటే, GridPane యొక్క సొంత డొమైన్ మ్యాపింగ్ సిస్టమ్‌తో ఘర్షణ (conflict) రాకుండా ఉండటానికి, ఇది `wp-config.php` లోని SUNRISE కాన్స్టాంట్‌ను ఆటోమేటిక్‌గా రివర్ట్ చేస్తుంది. దీనివల్ల రెండు సిస్టమ్‌లు ఎలాంటి సమస్యలు లేకుండా కలిసి పనిచేయగలవు.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- మీ API కీ సరైనదో లేదో నిర్ధారించుకోండి
- మీ సర్వర్ మరియు సైట్ IDలు సరైనవో చెక్ చేయండి
- మీ GridPane ఖాతాకు అవసరమైన పర్మిషన్స్ ఉన్నాయో లేదో నిర్ధారించుకోండి

### SSL Certificate Issues {#ssl-certificate-issues}
- GridPane కి SSL సర్టిఫికేట్‌లను జారీ చేయడానికి కొంత సమయం పట్టవచ్చు
- మీ డొమైన్‌లు మీ సర్వర్ యొక్క IP అడ్రస్‌కు సరిగ్గా పాయింట్ చేస్తున్నాయో లేదో నిర్ధారించుకోండి
- మీ సైట్ కోసం GridPane SSL సెట్టింగ్‌లను చెక్ చేయండి

### Domain Not Added {#domain-not-added}
- ఏదైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite లాగ్‌లను చెక్ చేయండి
- ఆ డొమైన్ ఇప్పటికే GridPane లో జోడించబడిందో లేదో నిర్ధారించుకోండి
- మీ డొమైన్ యొక్క DNS రికార్డులు సరిగ్గా కాన్ఫిగర్ చేయబడి ఉన్నాయో లేదో నిర్ధారించుకోండి
