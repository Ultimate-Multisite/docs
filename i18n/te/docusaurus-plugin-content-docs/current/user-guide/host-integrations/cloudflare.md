---
title: Cloudflare ఇంటిగ్రేషన్
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ఇంటిగ్రేషన్

## అవలోకనం
Cloudflare అనేది వెబ్‌సైట్‌లను రక్షించడానికి మరియు వేగవంతం చేయడానికి సహాయపడే ప్రముఖ content delivery network (CDN) మరియు భద్రతా ప్రొవైడర్. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు Cloudflare మధ్య ఆటోమేటిక్ డొమైన్ మేనేజ్‌మెంట్‌ను అనుమతిస్తుంది, ముఖ్యంగా subdomain multisite ఇన్‌స్టాలేషన్‌ల కోసం.

## ఫీచర్లు
- Cloudflare లో ఆటోమేటిక్ subdomain సృష్టి
- Proxied subdomain సపోర్ట్
- DNS రికార్డ్ మేనేజ్‌మెంట్
- Ultimate Multisite admin లో మెరుగైన DNS రికార్డ్ ప్రదర్శన

## అవసరాలు
మీ `wp-config.php` ఫైల్‌లో కింది constants నిర్వచించబడాలి:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## సెటప్ సూచనలు

### 1. మీ Cloudflare API Key పొందండి

1. మీ Cloudflare dashboard లో లాగిన్ అవ్వండి
2. "My Profile" కి వెళ్ళండి (కుడి-ఎగువ మూలలో మీ ఇమెయిల్ పై క్లిక్ చేయండి)
3. మెనూ నుండి "API Tokens" ఎంచుకోండి
4. కింది అనుమతులతో కొత్త API token సృష్టించండి:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. మీ API token కాపీ చేయండి

### 2. మీ Zone ID పొందండి

1. మీ Cloudflare dashboard లో, మీరు ఉపయోగించాలనుకుంటున్న డొమైన్ ఎంచుకోండి
2. Zone ID "Overview" ట్యాబ్‌లో, "API" కింద కుడి సైడ్‌బార్‌లో కనిపిస్తుంది
3. Zone ID కాపీ చేయండి

### 3. wp-config.php కు Constants జోడించండి

మీ `wp-config.php` ఫైల్‌కు కింది constants జోడించండి:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి

1. మీ WordPress admin లో, Ultimate Multisite > Settings కి వెళ్ళండి
2. "Domain Mapping" ట్యాబ్‌కు నావిగేట్ చేయండి
3. "Host Integrations" కు స్క్రోల్ డౌన్ చేయండి
4. Cloudflare ఇంటిగ్రేషన్ ఎనేబుల్ చేయండి
5. "Save Changes" క్లిక్ చేయండి

## ఇది ఎలా పని చేస్తుంది

### Subdomain మేనేజ్‌మెంట్

subdomain multisite ఇన్‌స్టాలేషన్‌లో కొత్త సైట్ సృష్టించినప్పుడు:

1. subdomain కోసం CNAME రికార్డ్ జోడించడానికి ఇంటిగ్రేషన్ Cloudflare API కి రిక్వెస్ట్ పంపుతుంది
2. subdomain డిఫాల్ట్‌గా Cloudflare ద్వారా proxy అయ్యేలా కాన్ఫిగర్ చేయబడుతుంది (ఇది filters తో మార్చవచ్చు)
3. సైట్ తొలగించినప్పుడు, ఇంటిగ్రేషన్ Cloudflare నుండి subdomain తీసివేస్తుంది

### DNS రికార్డ్ ప్రదర్శన

ఇంటిగ్రేషన్ Ultimate Multisite admin లో DNS రికార్డ్ ప్రదర్శనను మెరుగుపరుస్తుంది:

1. Cloudflare నుండి నేరుగా DNS రికార్డ్‌లను పొందడం
2. రికార్డ్‌లు proxy అయ్యాయా లేదా అని ప్రదర్శించడం
3. DNS రికార్డ్‌ల గురించి అదనపు సమాచారం చూపించడం

## ముఖ్యమైన గమనికలు

Cloudflare యొక్క ఇటీవలి అప్‌డేట్‌ల ప్రకారం, wildcard proxying ఇప్పుడు అన్ని కస్టమర్‌లకు అందుబాటులో ఉంది. దీని అర్థం subdomain multisite ఇన్‌స్టాలేషన్‌ల కోసం Cloudflare ఇంటిగ్రేషన్ గతంలో కంటే తక్కువ అవసరమైనది, ఎందుకంటే మీరు Cloudflare లో wildcard DNS రికార్డ్ సెటప్ చేయవచ్చు.

## సమస్యల పరిష్కారం

### API కనెక్షన్ సమస్యలు
- మీ API token సరైనదా మరియు అవసరమైన అనుమతులు ఉన్నాయా అని నిర్ధారించండి
- మీ Zone ID సరైనదా చెక్ చేయండి
- మీ Cloudflare ఖాతాకు అవసరమైన అనుమతులు ఉన్నాయని నిర్ధారించుకోండి

### Subdomain జోడించబడలేదు
- ఏవైనా ఎర్రర్ మెసేజ్‌ల కోసం Ultimate Multisite logs చెక్ చేయండి
- subdomain ఇప్పటికే Cloudflare కు జోడించబడలేదని నిర్ధారించండి
- మీరు సృష్టిస్తున్న DNS రికార్డ్‌ల సంఖ్యను మీ Cloudflare ప్లాన్ సపోర్ట్ చేస్తుందని నిర్ధారించుకోండి

### Proxying సమస్యలు
- మీరు subdomains proxy కావడం ఇష్టపడకపోతే, `wu_cloudflare_should_proxy` filter ఉపయోగించవచ్చు
- proxy అయినప్పుడు కొన్ని ఫీచర్లు సరిగ్గా పని చేయకపోవచ్చు (ఉదా., కొన్ని WordPress admin ఫంక్షన్లు)
- admin పేజీల కోసం cache ను bypass చేయడానికి Cloudflare యొక్క Page Rules ఉపయోగించడం పరిగణించండి
