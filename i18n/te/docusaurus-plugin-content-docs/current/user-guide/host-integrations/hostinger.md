---
title: Hostinger (hPanel) Integration
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ఇంటిగ్రేషన్ {#hostinger-hpanel-integration}

## అవలోకనం (Overview) {#overview}

Hostinger అనేది ఒక ప్రముఖ వెబ్ హోస్టింగ్ ప్రొవైడర్. దీనికి hPanel అనే ఆధునిక కంట్రోల్ ప్యానెల్ ఉంది. Ultimate Multisite Hostinger ఇంటిగ్రేషన్ అనేది Ultimate Multisite మరియు Hostinger యొక్క hPanel మధ్య డొమైన్‌లను ఆటోమేటిక్‌గా సింక్ (sync) చేయడానికి వీలు కల్పిస్తుంది. దీని ద్వారా మీరు మీ WordPress అడ్మిన్ నుండి నేరుగా డొమైన్ మ్యాపింగ్‌లు మరియు సబ్-డొమైన్‌లను ఆటోమేటిక్‌గా నిర్వహించవచ్చు.

## ఫీచర్లు (Features) {#features}

- hPanel లో ఆటోమేటిక్ అడ్-ఆన్ డొమైన్ క్రియేషన్
- hPanel లో ఆటోమేటిక్ సబ్-డొమైన్ క్రియేషన్ (సబ్-డొమైన్ మల్టీసైట్ ఇన్‌స్టాలేషన్‌ల కోసం)
- మ్యాపింగ్‌లు తొలగించినప్పుడు డొమైన్ తొలగింపు
- hPanel యొక్క డొమైన్ మేనేజ్‌మెంట్ API తో సులభమైన ఇంటిగ్రేషన్

## అవసరాలు (Requirements) {#requirements}

Hostinger ఇంటిగ్రేషన్‌ను ఉపయోగించడానికి, మీకు ఈ క్రిందివి అవసరం:

1. hPanel యాక్సెస్ ఉన్న Hostinger ఖాతా
2. Hostinger నుండి ఒక API టోకెన్
3. మీ `wp-config.php` ఫైల్‌లో ఈ కన్స్టాంట్‌లు నిర్వచించబడాలి:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ఐచ్ఛికంగా, మీరు వీటిని కూడా నిర్వచించవచ్చు:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // డిఫాల్ట్ API ఎండ్ పాయింట్
```

## సెటప్ సూచనలు (Setup Instructions) {#setup-instructions}

### 1. మీ Hostinger API టోకెన్‌ను రూపొందించండి (Generate Your Hostinger API Token) {#1-generate-your-hostinger-api-token}

1. మీ Hostinger ఖాతాలోకి లాగిన్ అవ్వండి మరియు hPanel యాక్సెస్ చేయండి.
2. **Account Settings** → **API Tokens** కు నావిగేట్ చేయండి.
3. **Create New Token** పై క్లిక్ చేయండి.
4. మీ టోకెన్‌కు వివరణాత్మక పేరు ఇవ్వండి (ఉదాహరణకు, "Ultimate Multisite").
5. అవసరమైన అనుమతులను ఎంచుకోండి:
   - డొమైన్ మేనేజ్‌మెంట్ (Domain management)
   - సబ్-డొమైన్ మేనేజ్‌మెంట్ (Subdomain management)
6. రూపొందించబడిన టోకెన్‌ను కాపీ చేసి, దానిని సురక్షితంగా నిల్వ చేయండి.

### 2. మీ ఖాతా IDని కనుగొనండి (Find Your Account ID) {#2-find-your-account-id}

1. hPanel లో, **Account Settings** → **Account Information** కు వెళ్లండి.
2. మీ ఖాతా ID ఈ పేజీలో ప్రదర్శించబడుతుంది.
3. ఈ IDని కాపీ చేసి, తదుపరి దశ కోసం సేవ్ చేయండి.

### 3. wp-config.php లో కన్స్టాంట్‌లను జోడించండి (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

కింది కన్స్టాంట్‌లను మీ `wp-config.php` ఫైల్‌లో జోడించండి:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

మీ Hostinger ఖాతా వేరే API ఎండ్ పాయింట్‌ను ఉపయోగిస్తే, మీరు దానిని కస్టమైజ్ చేయవచ్చు:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి (Enable the Integration) {#4-enable-the-integration}

1. మీ WordPress అడ్మిన్‌లో, **Ultimate Multisite > Settings** కు వెళ్లండి.
2. **Domain Mapping** ట్యాబ్‌కు నావిగేట్ చేయండి.
3. **Host Integrations** వరకు స్క్రోల్ చేయండి.
4. **Hostinger (hPanel)** ఇంటిగ్రేషన్‌ను ఎనేబుల్ చేయండి.
5. **Save Changes** పై క్లిక్ చేయండి.

## ఇది ఎలా పనిచేస్తుంది (How It Works) {#how-it-works}

### అడ్-ఆన్ డొమైన్‌లు (Addon Domains) {#addon-domains}

మీరు Ultimate Multisite లో ఒక డొమైన్‌ను మ్యాప్ చేసినప్పుడు:

1. ఇంటిగ్రేషన్ డొమైన్‌ను అడ్-ఆన్ డొమైన్‌గా జోడించడానికి Hostinger యొక్క API కి ఒక రిక్వెస్ట్‌ను పంపుతుంది.
2. డొమైన్ మీ రూట్ డైరెక్టరీని చూపించడానికి కాన్ఫిగర్ చేయబడుతుంది.
3. డొమైన్ మ్యాపింగ్ తొలగించబడినప్పుడు, ఇంటిగ్రేషన్ ఆటోమేటిక్‌గా hPanel నుండి అడ్-ఆన్ డొమైన్‌ను తొలగిస్తుంది.

### సబ్-డొమైన్‌లు (Subdomains) {#subdomains}

సబ్-డొమైన్ మల్టీసైట్ ఇన్‌స్టాలేషన్‌ల కోసం, కొత్త సైట్ సృష్టించినప్పుడు:

1. ఇంటిగ్రేషన్ పూర్తి డొమైన్ నుండి సబ్-డొమైన్ భాగాన్ని సంగ్రహిస్తుంది.
2. సబ్-డొమైన్‌ను జోడించడానికి Hostinger యొక్క API కి ఒక రిక్వెస్ట్‌ను పంపుతుంది.
3. సబ్-డొమైన్ మీ రూట్ డైరెక్టరీని చూపించడానికి కాన్ఫిగర్ చేయబడుతుంది.

## ముఖ్య గమనికలు (Important Notes) {#important-notes}

- ఈ ఇంటిగ్రేషన్ మీ ఖాతాతో కమ్యూనికేట్ చేయడానికి Hostinger యొక్క REST API ని ఉపయోగిస్తుంది.
- మీ API టోకెన్‌లో డొమైన్ మరియు సబ్-డొమైన్ మేనేజ్‌మెంట్ కోసం అవసరమైన అనుమతులు ఉండాలి.
- ఈ ఇంటిగ్రేషన్ DNS కాన్ఫిగరేషన్‌ను నిర్వహించదు; డొమైన్‌లు ఇప్పటికే మీ Hostinger ఖాతాకు పాయింట్ చేయబడి ఉండాలి.
- API రిక్వెస్ట్‌లు HTTPS ద్వారా సురక్షితంగా చేయబడతాయి.
- మీ API టోకెన్‌ను సురక్షితంగా ఉంచండి మరియు ఎప్పుడూ బహిరంగంగా పంచుకోవద్దు.

## ట్రబుల్‌షూటింగ్ (Troubleshooting) {#troubleshooting}

### API కనెక్షన్ సమస్యలు (API Connection Issues) {#api-connection-issues}

- మీ API టోకెన్ సరైనదో కాదో మరియు గడువు ముగిసిపోలేదో ధృవీకరించండి.
- మీ ఖాతా ID సరైనదో లేదో తనిఖీ చేయండి.
- డొమైన్ మేనేజ్‌మెంట్ కోసం మీ API టోకెన్‌లో అవసరమైన అనుమతులు ఉన్నాయని నిర్ధారించుకోండి.
- మీ Hostinger ఖాతా యాక్టివ్‌గా మరియు మంచి స్థితిలో ఉందని ధృవీకరించండి.

### డొమైన్ జోడించకపోవడం (Domain Not Added) {#domain-not-added}

- ఏదైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite లాగ్‌లను తనిఖీ చేయండి.
- డొమైన్ ఇప్పటికే మీ Hostinger ఖాతాలో జోడించబడలేదని ధృవీకరించండి.
- మీ Hostinger ఖాతా అడ్-ఆన్ డొమైన్‌ల పరిమితిని చేరుకోలేదని నిర్ధారించుకోండి.
- డొమైన్ మీ Hostinger నేమ్సర్వర్‌లకు సరిగ్గా పాయింట్ చేసిందని నిర్ధారించుకోండి.

### SSL సర్టిఫికేట్ సమస్యలు (SSL Certificate Issues) {#ssl-certificate-issues}

- ఈ ఇంటిగ్రేషన్ SSL సర్టిఫికేట్ జారీని నిర్వహించదు.
- Hostinger సాధారణంగా AutoSSL ద్వారా ఉచిత SSL సర్టిఫికేట్‌లను అందిస్తుంది.
- మీరు **SSL/TLS** కింద hPanel లో నేరుగా SSL సర్టిఫికేట్‌లను నిర్వహించవచ్చు.
- ప్రత్యామ్నాయంగా, Hostinger యొక్క AutoSSL ఫీచర్‌తో Let's Encryptని ఉపయోగించండి.

## సపోర్ట్ (Support) {#support}

Hostinger ఇంటిగ్రేషన్‌కు అదనపు సహాయం కావాలంటే, దయచేసి వీటిని చూడండి:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
