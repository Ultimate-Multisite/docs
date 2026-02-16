---
title: Cloudways ఇంటిగ్రేషన్
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ఇంటిగ్రేషన్

## అవలోకనం
Cloudways అనేది మేనేజ్డ్ క్లౌడ్ హోస్టింగ్ ప్లాట్‌ఫారమ్, ఇది DigitalOcean, AWS, Google Cloud మరియు ఇతర క్లౌడ్ ప్రొవైడర్లపై WordPress సైట్లను డిప్లాయ్ చేయడానికి మిమ్మల్ని అనుమతిస్తుంది. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు Cloudways మధ్య ఆటోమేటిక్ డొమైన్ సింక్ మరియు SSL సర్టిఫికేట్ మేనేజ్‌మెంట్‌ను ఎనేబుల్ చేస్తుంది.

## ఫీచర్లు
- ఆటోమేటిక్ డొమైన్ సింకింగ్
- SSL సర్టిఫికేట్ మేనేజ్‌మెంట్
- అదనపు డొమైన్‌లకు సపోర్ట్
- SSL సర్టిఫికేట్‌ల కోసం DNS వ్యాలిడేషన్

## అవసరాలు
మీ `wp-config.php` ఫైల్‌లో కింది constants తప్పనిసరిగా డిఫైన్ చేయాలి:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

అవసరమైతే, మీరు ఇవి కూడా డిఫైన్ చేయవచ్చు:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## సెటప్ సూచనలు

### 1. మీ Cloudways API క్రెడెన్షియల్స్ పొందండి

1. మీ Cloudways dashboard లో లాగిన్ అవ్వండి
2. "Account" > "API Keys" కు వెళ్ళండి
3. మీ దగ్గర ఇప్పటికే లేకపోతే API key జనరేట్ చేయండి
4. మీ email మరియు API key కాపీ చేయండి

### 2. మీ Server మరియు Application IDs పొందండి

1. మీ Cloudways dashboard లో, "Servers" కు వెళ్ళండి
2. మీ WordPress multisite హోస్ట్ అయిన server ను ఎంచుకోండి
3. Server ID URL లో కనిపిస్తుంది: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" కు వెళ్ళి మీ WordPress application ఎంచుకోండి
5. App ID URL లో కనిపిస్తుంది: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php కు Constants జోడించండి

మీ `wp-config.php` ఫైల్‌కు కింది constants జోడించండి:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ఎల్లప్పుడూ చేర్చవలసిన అదనపు డొమైన్‌లు మీ దగ్గర ఉంటే:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి

1. మీ WordPress admin లో, Ultimate Multisite > Settings కు వెళ్ళండి
2. "Domain Mapping" tab కు నావిగేట్ చేయండి
3. "Host Integrations" వరకు స్క్రోల్ చేయండి
4. Cloudways ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి
5. "Save Changes" క్లిక్ చేయండి

## ఇది ఎలా పని చేస్తుంది

### డొమైన్ సింకింగ్

Ultimate Multisite లో డొమైన్ మ్యాప్ అయినప్పుడు:

1. ఇంటిగ్రేషన్ ప్రస్తుతం మ్యాప్ అయిన అన్ని డొమైన్‌లను రిట్రీవ్ చేస్తుంది
2. ఇది కొత్త డొమైన్‌ను లిస్ట్‌కు జోడిస్తుంది (వర్తించే www వెర్షన్‌తో పాటు)
3. ఇది పూర్తి లిస్ట్‌ను API ద్వారా Cloudways కు పంపుతుంది
4. Cloudways మీ application కోసం డొమైన్ aliases ను అప్‌డేట్ చేస్తుంది

గమనిక: Cloudways API ప్రతిసారి పూర్తి డొమైన్‌ల లిస్ట్ పంపడం అవసరం, వ్యక్తిగత డొమైన్‌లను జోడించడం లేదా తీసివేయడం మాత్రమే కాదు.

### SSL సర్టిఫికేట్ మేనేజ్‌మెంట్

డొమైన్‌లు సింక్ అయిన తర్వాత:

1. ఇంటిగ్రేషన్ మీ server కు పాయింట్ అవుతున్న చెల్లుబాటు అయ్యే DNS రికార్డ్‌లు ఏ డొమైన్‌లకు ఉన్నాయో చెక్ చేస్తుంది
2. ఇది ఆ డొమైన్‌ల కోసం Let's Encrypt SSL సర్టిఫికేట్‌లను ఇన్‌స్టాల్ చేయడానికి Cloudways కు రిక్వెస్ట్ పంపుతుంది
3. Cloudways SSL సర్టిఫికేట్ ఇష్యూయన్స్ మరియు ఇన్‌స్టాలేషన్ హ్యాండిల్ చేస్తుంది

## అదనపు డొమైన్‌లు

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant Cloudways తో సింక్ చేసేటప్పుడు ఎల్లప్పుడూ చేర్చవలసిన అదనపు డొమైన్‌లను స్పెసిఫై చేయడానికి మిమ్మల్ని అనుమతిస్తుంది. ఇది వీటికి ఉపయోగపడుతుంది:

- Ultimate Multisite ద్వారా మేనేజ్ కాని డొమైన్‌లు
- Wildcard డొమైన్‌లు (ఉదా., `*.example.com`)
- Development లేదా staging డొమైన్‌లు

## ట్రబుల్‌షూటింగ్

### API కనెక్షన్ సమస్యలు
- మీ email మరియు API key సరిగ్గా ఉన్నాయో వెరిఫై చేయండి
- మీ server మరియు application IDs సరిగ్గా ఉన్నాయో చెక్ చేయండి
- మీ Cloudways అకౌంట్‌కు అవసరమైన పర్మిషన్‌లు ఉన్నాయని నిర్ధారించుకోండి

### SSL సర్టిఫికేట్ సమస్యలు
- SSL సర్టిఫికేట్‌లు ఇష్యూ చేయడానికి ముందు డొమైన్‌లకు మీ server కు పాయింట్ అవుతున్న చెల్లుబాటు అయ్యే DNS రికార్డ్‌లు ఉండాలని Cloudways అవసరం
- SSL సర్టిఫికేట్‌లను రిక్వెస్ట్ చేయడానికి ముందు ఇంటిగ్రేషన్ DNS రికార్డ్‌లను వ్యాలిడేట్ చేస్తుంది
- SSL సర్టిఫికేట్‌లు ఇష్యూ కావడం లేదంటే, మీ డొమైన్‌లు మీ server యొక్క IP address కు సరిగ్గా పాయింట్ అవుతున్నాయో చెక్ చేయండి

### డొమైన్ జోడించబడలేదు
- ఏదైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite logs చెక్ చేయండి
- డొమైన్ ఇప్పటికే Cloudways కు జోడించబడలేదని వెరిఫై చేయండి
- మీ Cloudways ప్లాన్ మీరు జోడిస్తున్న డొమైన్‌ల సంఖ్యను సపోర్ట్ చేస్తుందని నిర్ధారించుకోండి
