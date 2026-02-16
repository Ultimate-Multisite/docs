---
title: RunCloud ఇంటిగ్రేషన్
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ఇంటిగ్రేషన్

## అవలోకనం
RunCloud అనేది క్లౌడ్-ఆధారిత సర్వర్ నిర్వహణ ప్లాట్‌ఫారమ్, ఇది మీ స్వంత క్లౌడ్ సర్వర్‌లలో వెబ్ అప్లికేషన్‌లను సులభంగా డిప్లాయ్ చేయడానికి మరియు నిర్వహించడానికి అనుమతిస్తుంది. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు RunCloud మధ్య ఆటోమేటిక్ డొమైన్ సింకింగ్ మరియు SSL సర్టిఫికేట్ నిర్వహణను అందిస్తుంది.

## ఫీచర్లు
- ఆటోమేటిక్ డొమైన్ సింకింగ్
- SSL సర్టిఫికేట్ నిర్వహణ
- మ్యాపింగ్‌లు తొలగించబడినప్పుడు డొమైన్ తొలగింపు

## అవసరాలు
మీ `wp-config.php` ఫైల్‌లో కింది constants తప్పనిసరిగా నిర్వచించబడాలి:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## సెటప్ సూచనలు

### 1. మీ RunCloud API క్రెడెన్షియల్స్ పొందండి

1. మీ RunCloud dashboard లో లాగిన్ అవ్వండి
2. "User Profile" కి వెళ్ళండి (కుడి ఎగువ మూలలో మీ ప్రొఫైల్ చిత్రంపై క్లిక్ చేయండి)
3. మెనూ నుండి "API" ఎంచుకోండి
4. మీకు ఇప్పటికే లేకపోతే "Generate API Key" క్లిక్ చేయండి
5. మీ API Key మరియు API Secret కాపీ చేయండి

### 2. మీ Server మరియు App IDలు పొందండి

1. మీ RunCloud dashboard లో, "Servers" కి వెళ్ళండి
2. మీ WordPress multisite హోస్ట్ చేయబడిన సర్వర్‌ను ఎంచుకోండి
3. Server ID URL లో కనిపిస్తుంది: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" కి వెళ్లి మీ WordPress అప్లికేషన్‌ను ఎంచుకోండి
5. App ID URL లో కనిపిస్తుంది: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php కు Constants జోడించండి

మీ `wp-config.php` ఫైల్‌కు కింది constants జోడించండి:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి

1. మీ WordPress admin లో, Ultimate Multisite > Settings కి వెళ్ళండి
2. "Domain Mapping" ట్యాబ్‌కు నావిగేట్ చేయండి
3. "Host Integrations" కు స్క్రోల్ చేయండి
4. RunCloud ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి
5. "Save Changes" క్లిక్ చేయండి

## ఇది ఎలా పని చేస్తుంది

Ultimate Multisite లో డొమైన్ మ్యాప్ చేయబడినప్పుడు:

1. మీ అప్లికేషన్‌కు డొమైన్ జోడించడానికి ఇంటిగ్రేషన్ RunCloud API కి రిక్వెస్ట్ పంపుతుంది
2. డొమైన్ విజయవంతంగా జోడించబడితే, ఇంటిగ్రేషన్ SSL సర్టిఫికేట్‌లను కూడా రీడిప్లాయ్ చేస్తుంది
3. డొమైన్ మ్యాపింగ్ తొలగించబడినప్పుడు, ఇంటిగ్రేషన్ RunCloud నుండి డొమైన్‌ను తొలగిస్తుంది

సబ్‌డొమైన్ ఇన్‌స్టాలేషన్‌ల కోసం, మీ నెట్‌వర్క్‌కు కొత్త సైట్‌లు జోడించబడినప్పుడు RunCloud లో సబ్‌డొమైన్‌ల సృష్టిని ఇంటిగ్రేషన్ ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తుంది.

## సమస్యల పరిష్కారం

### API కనెక్షన్ సమస్యలు
- మీ API క్రెడెన్షియల్స్ సరిగ్గా ఉన్నాయో వెరిఫై చేయండి
- మీ server మరియు app IDలు సరిగ్గా ఉన్నాయో చెక్ చేయండి
- మీ RunCloud అకౌంట్‌కు అవసరమైన అనుమతులు ఉన్నాయని నిర్ధారించుకోండి

### SSL సర్టిఫికేట్ సమస్యలు
- SSL సర్టిఫికేట్‌లను జారీ చేయడానికి RunCloud కొంత సమయం పట్టవచ్చు
- మీ డొమైన్‌లు మీ సర్వర్ IP అడ్రస్‌కు సరిగ్గా పాయింట్ చేస్తున్నాయో వెరిఫై చేయండి
- మీ అప్లికేషన్ కోసం RunCloud SSL సెట్టింగ్‌లను చెక్ చేయండి

### డొమైన్ జోడించబడలేదు
- ఏదైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite లాగ్‌లను చెక్ చేయండి
- డొమైన్ ఇప్పటికే RunCloud కి జోడించబడలేదని వెరిఫై చేయండి
- మీ RunCloud ప్లాన్ మల్టిపుల్ డొమైన్‌లకు సపోర్ట్ చేస్తుందని నిర్ధారించుకోండి
