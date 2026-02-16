---
title: GridPane ఇంటిగ్రేషన్
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ఇంటిగ్రేషన్

## అవలోకనం
GridPane అనేది సీరియస్ WordPress ప్రొఫెషనల్స్ కోసం ప్రత్యేకంగా రూపొందించిన WordPress హోస్టింగ్ కంట్రోల్ ప్యానెల్. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు GridPane మధ్య ఆటోమేటిక్ డొమైన్ సింకింగ్ మరియు SSL సర్టిఫికేట్ మేనేజ్‌మెంట్‌ను అందిస్తుంది.

## ఫీచర్లు
- ఆటోమేటిక్ డొమైన్ సింకింగ్
- SSL సర్టిఫికేట్ మేనేజ్‌మెంట్
- SUNRISE కాన్‌స్టంట్ యొక్క ఆటోమేటిక్ కాన్ఫిగరేషన్

## అవసరాలు
మీ `wp-config.php` ఫైల్‌లో కింది constants నిర్వచించబడాలి:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## సెటప్ సూచనలు

### 1. మీ GridPane API క్రెడెన్షియల్స్ పొందండి

1. మీ GridPane dashboard లోకి లాగిన్ అవ్వండి
2. "Settings" > "API" కు వెళ్ళండి
3. మీకు ఇప్పటికే లేకపోతే API key జనరేట్ చేయండి
4. మీ API key కాపీ చేయండి

### 2. మీ Server మరియు Site IDs పొందండి

1. మీ GridPane dashboard లో, "Servers" కు వెళ్ళండి
2. మీ WordPress multisite హోస్ట్ చేయబడిన సర్వర్‌ను ఎంచుకోండి
3. Server ID నోట్ చేయండి (URL లో లేదా సర్వర్ వివరాల పేజీలో కనిపిస్తుంది)
4. "Sites" కు వెళ్ళి మీ WordPress సైట్‌ను ఎంచుకోండి
5. Site ID నోట్ చేయండి (URL లో లేదా సైట్ వివరాల పేజీలో కనిపిస్తుంది)

### 3. wp-config.php కు Constants జోడించండి

మీ `wp-config.php` ఫైల్‌కు కింది constants జోడించండి:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి

1. మీ WordPress admin లో, Ultimate Multisite > Settings కు వెళ్ళండి
2. "Domain Mapping" ట్యాబ్‌కు నావిగేట్ చేయండి
3. "Host Integrations" కు స్క్రోల్ చేయండి
4. GridPane ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి
5. "Save Changes" క్లిక్ చేయండి

## ఇది ఎలా పని చేస్తుంది

Ultimate Multisite లో డొమైన్ మ్యాప్ చేయబడినప్పుడు:

1. ఇంటిగ్రేషన్ మీ సైట్‌కు డొమైన్ జోడించడానికి GridPane యొక్క API కి రిక్వెస్ట్ పంపుతుంది
2. GridPane ఆటోమేటిక్‌గా SSL సర్టిఫికేట్ ప్రొవిజనింగ్ హ్యాండిల్ చేస్తుంది
3. డొమైన్ మ్యాపింగ్ తొలగించబడినప్పుడు, ఇంటిగ్రేషన్ GridPane నుండి డొమైన్‌ను తొలగిస్తుంది

డొమైన్ మ్యాపింగ్ సరిగ్గా పని చేయడానికి అవసరమైన మీ wp-config.php ఫైల్‌లోని SUNRISE constant ను ఇంటిగ్రేషన్ ఆటోమేటిక్‌గా హ్యాండిల్ చేస్తుంది.

## SUNRISE Constant మేనేజ్‌మెంట్

GridPane ఇంటిగ్రేషన్ యొక్క ఒక ప్రత్యేక ఫీచర్ ఏమిటంటే, GridPane యొక్క స్వంత డొమైన్ మ్యాపింగ్ సిస్టమ్‌తో conflicts నివారించడానికి wp-config.php లోని SUNRISE constant ను ఆటోమేటిక్‌గా రివర్ట్ చేస్తుంది. ఇది రెండు సిస్టమ్‌లు సమస్యలు లేకుండా కలిసి పని చేయగలవని నిర్ధారిస్తుంది.

## ట్రబుల్‌షూటింగ్

### API కనెక్షన్ సమస్యలు
- మీ API key సరైనదని వెరిఫై చేయండి
- మీ server మరియు site IDs సరైనవని చెక్ చేయండి
- మీ GridPane account కు అవసరమైన permissions ఉన్నాయని నిర్ధారించుకోండి

### SSL సర్టిఫికేట్ సమస్యలు
- GridPane SSL సర్టిఫికేట్లు జారీ చేయడానికి కొంత సమయం పట్టవచ్చు
- మీ డొమైన్లు మీ సర్వర్ IP address కు సరిగ్గా పాయింట్ అవుతున్నాయని వెరిఫై చేయండి
- మీ సైట్ కోసం GridPane SSL సెట్టింగ్స్ చెక్ చేయండి

### డొమైన్ జోడించబడలేదు
- ఏదైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite logs చెక్ చేయండి
- డొమైన్ ఇప్పటికే GridPane కు జోడించబడలేదని వెరిఫై చేయండి
- మీ డొమైన్ DNS రికార్డ్స్ సరిగ్గా కాన్ఫిగర్ చేయబడ్డాయని నిర్ధారించుకోండి
