---
title: Control Panel ఇంటిగ్రేషన్‌ను మెరుగుపరచండి
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel ఇంటిగ్రేషన్

## అవలోకనం
Enhance అనేది శక్తివంతమైన హోస్టింగ్ ఆటోమేషన్ మరియు మేనేజ్‌మెంట్ సామర్థ్యాలను అందించే ఆధునిక control panel. ఈ ఇంటిగ్రేషన్ Ultimate Multisite మరియు Enhance Control Panel మధ్య ఆటోమేటిక్ డొమైన్ సింక్ మరియు SSL సర్టిఫికేట్ మేనేజ్‌మెంట్‌ను అనుమతిస్తుంది.

**సంబంధిత చర్చ:** కమ్యూనిటీ చిట్కాలు మరియు అదనపు సమాచారం కోసం [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) చూడండి.

## ఫీచర్లు
- Ultimate Multisite లో డొమైన్‌లు మ్యాప్ చేయబడినప్పుడు ఆటోమేటిక్ డొమైన్ సింక్
- DNS resolve అయినప్పుడు LetsEncrypt ద్వారా ఆటోమేటిక్ SSL సర్టిఫికేట్ provisioning
- subdomain మోడ్‌లో నడుస్తున్న నెట్‌వర్క్‌లకు subdomain సపోర్ట్
- mappings తొలగించినప్పుడు డొమైన్ తొలగింపు
- API credentials వెరిఫై చేయడానికి కనెక్షన్ టెస్టింగ్

## అవసరాలు

### సిస్టమ్ అవసరాలు
- Enhance Control Panel ఇన్‌స్టాల్ చేయబడి అందుబాటులో ఉండాలి
- Enhance సర్వర్‌లో హోస్ట్ చేయబడిన లేదా కనెక్ట్ చేయబడిన WordPress Multisite ఇన్‌స్టాలేషన్
- Apache వెబ్ సర్వర్ (Enhance ప్రస్తుతం Apache configurations కు మద్దతు ఇస్తుంది; LiteSpeed Enterprise తక్కువ ఖర్చుతో అందుబాటులో ఉంది)

### API యాక్సెస్
API tokens సృష్టించడానికి మీకు Enhance Control Panel కు administrator యాక్సెస్ ఉండాలి.

## మీ API Credentials పొందడం

### 1. API Token సృష్టించండి

1. మీ Enhance Control Panel లో administrator గా లాగిన్ అవండి
2. నావిగేషన్ మెనూలో **Settings** పై క్లిక్ చేయండి
3. **Access Tokens** కు నావిగేట్ చేయండి
4. **Create Token** పై క్లిక్ చేయండి
5. token కు వివరణాత్మక పేరు ఇవ్వండి (ఉదా., "Ultimate Multisite Integration")
6. **System Administrator** role అసైన్ చేయండి
7. expiry date కోసం:
   - token ఎప్పటికీ expire కాకుండా ఉండాలనుకుంటే ఖాళీగా వదిలేయండి
   - లేదా భద్రత కోసం నిర్దిష్ట expiration date సెట్ చేయండి
8. **Create** పై క్లిక్ చేయండి

సృష్టించిన తర్వాత, మీ **Access Token** మరియు **Organization ID** చూపించబడతాయి. **వీటిని వెంటనే సేవ్ చేయండి** ఎందుకంటే token ఒక్కసారి మాత్రమే చూపించబడుతుంది.

### 2. మీ Organization ID పొందండి

Organization ID, Access Tokens పేజీలో "Org ID: {your_id}" అనే లేబుల్‌తో నీలి సమాచార బాక్స్‌లో చూపించబడుతుంది.

Organization ID UUID ఫార్మాట్‌లో ఉంటుంది: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

మీరు కస్టమర్ యొక్క Organization ID ను ఈ విధంగా కూడా కనుగొనవచ్చు:
1. **Customers** పేజీకి వెళ్ళండి
2. సంబంధిత కస్టమర్ కోసం **Manage customer** పై క్లిక్ చేయండి
3. URL చూడండి - Organization ID `/customers/` తర్వాత ఉన్న alphanumeric characters

### 3. మీ Server ID పొందండి

మీ Server ID కనుగొనడానికి (డొమైన్ ఆపరేషన్లకు అవసరం):

1. Enhance Control Panel లో, **Servers** కు నావిగేట్ చేయండి
2. మీ WordPress ఇన్‌స్టాలేషన్ నడుస్తున్న సర్వర్ పై క్లిక్ చేయండి
3. Server ID (UUID ఫార్మాట్) URL లేదా server details లో కనిపిస్తుంది
4. ప్రత్యామ్నాయంగా, సర్వర్ల జాబితా కోసం API ఉపయోగించవచ్చు:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

server ID UUID ఫార్మాట్‌ను అనుసరిస్తుంది: `00000000-0000-0000-0000-000000000000`

### 4. మీ API URL పొందండి

మీ API URL అనేది మీ Enhance Control Panel URL కు `/api/` జోడించినది:

```
https://your-enhance-panel.com/api/
```

**ముఖ్యమైనది:** `/api/` path అవసరం. సాధారణ తప్పులు:
- `/api/` లేకుండా కేవలం domain మాత్రమే ఉపయోగించడం
- HTTPS బదులు HTTP ఉపయోగించడం (భద్రత కోసం HTTPS అవసరం)

## కాన్ఫిగరేషన్

### అవసరమైన Constants

మీ `wp-config.php` ఫైల్‌కు ఈ క్రింది constants జోడించండి:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard ద్వారా సెటప్

1. మీ WordPress admin లో, **Ultimate Multisite** > **Settings** కు వెళ్ళండి
2. **Integrations** ట్యాబ్‌కు నావిగేట్ చేయండి
3. **Enhance Control Panel Integration** కనుగొని **Configuration** పై క్లిక్ చేయండి
4. wizard మిమ్మల్ని సెటప్ ద్వారా గైడ్ చేస్తుంది:
   - **Step 1:** పరిచయం మరియు ఫీచర్ అవలోకనం
   - **Step 2:** మీ API credentials నమోదు చేయండి (Token, API URL, Server ID)
   - **Step 3:** కనెక్షన్ టెస్ట్ చేయండి
   - **Step 4:** సమీక్షించి ఆక్టివేట్ చేయండి

మీరు ఈ ఆప్షన్లలో ఎంచుకోవచ్చు:
- wizard ను constants ను మీ `wp-config.php` ఫైల్‌లో ఆటోమేటిక్‌గా inject చేయనివ్వండి
- constant definitions కాపీ చేసి manual గా జోడించండి

## అదనపు WordPress కాన్ఫిగరేషన్

కమ్యూనిటీ ఫీడ్‌బ్యాక్ ఆధారంగా ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), మీరు ఈ అదనపు సెట్టింగ్‌లు కాన్ఫిగర్ చేయవలసి రావచ్చు:

### .htaccess కాన్ఫిగరేషన్

domain mapping తో సమస్యలు ఎదురైతే:
1. original Enhance `.htaccess` ఫైల్ తొలగించండి
2. standard WordPress Multisite `.htaccess` ఫైల్‌తో replace చేయండి

### Cookie Constants

mapped domains అంతటా సరైన cookie handling కోసం ఈ constants ను `wp-config.php` కు జోడించండి:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ఇది ఎలా పని చేస్తుంది

### డొమైన్ మ్యాప్ అయినప్పుడు

1. ఒక యూజర్ Ultimate Multisite లో custom domain మ్యాప్ చేస్తారు (లేదా subdomain మోడ్‌లో కొత్త సైట్ సృష్టించబడుతుంది)
2. ఇంటిగ్రేషన్ Enhance యొక్క API కి POST request పంపుతుంది: `/servers/{server_id}/domains`
3. Enhance మీ సర్వర్ కాన్ఫిగరేషన్‌కు domain జోడిస్తుంది
4. DNS మీ సర్వర్‌కు resolve అయినప్పుడు, Enhance LetsEncrypt ద్వారా ఆటోమేటిక్‌గా SSL certificate provision చేస్తుంది
5. domain HTTPS తో active అవుతుంది

### డొమైన్ తొలగించినప్పుడు

1. Ultimate Multisite లో domain mapping తొలగించబడుతుంది
2. ఇంటిగ్రేషన్ domain యొక్క ID కనుగొనడానికి Enhance ను query చేస్తుంది
3. DELETE request పంపబడుతుంది: `/servers/{server_id}/domains/{domain_id}`
4. Enhance మీ సర్వర్ కాన్ఫిగరేషన్ నుండి domain తొలగిస్తుంది

### DNS మరియు SSL చెకింగ్

Ultimate Multisite లో built-in DNS మరియు SSL చెకింగ్ ఉంది:
- **Domain Mapping Settings** లో check interval కాన్ఫిగర్ చేయవచ్చు (default: 300 సెకన్లు/5 నిమిషాలు)
- domain ను active గా మార్క్ చేయడానికి ముందు సిస్టమ్ DNS propagation వెరిఫై చేస్తుంది
- SSL certificate validity ఆటోమేటిక్‌గా check అవుతుంది
- Enhance SSL provisioning ఆటోమేటిక్‌గా handle చేస్తుంది, కాబట్టి manual SSL configuration అవసరం లేదు

## సెటప్ వెరిఫై చేయడం

### కనెక్షన్ టెస్ట్ చేయండి

1. Integration Wizard లో, **Test Connection** స్టెప్ ఉపయోగించండి
2. plugin మీ సర్వర్‌లో domains లిస్ట్ చేయడానికి ప్రయత్నిస్తుంది
3. success మెసేజ్ ఈ విషయాలు confirm చేస్తుంది:
   - API credentials సరైనవి
   - API URL అందుబాటులో ఉంది
   - Server ID valid
   - Permissions సరిగ్గా సెట్ అయ్యాయి

### డొమైన్ మ్యాప్ చేసిన తర్వాత

1. Ultimate Multisite లో test domain మ్యాప్ చేయండి
2. Ultimate Multisite logs చెక్ చేయండి (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel లో domain జోడించబడిందో వెరిఫై చేయండి:
   - **Servers** > **Your Server** > **Domains** కు వెళ్ళండి
   - కొత్త domain లిస్ట్‌లో కనిపించాలి
4. DNS propagate అయిన తర్వాత, SSL ఆటోమేటిక్‌గా provision అయిందో వెరిఫై చేయండి

## ట్రబుల్‌షూటింగ్

### API కనెక్షన్ సమస్యలు

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` చివరలో `/api/` ఉందో వెరిఫై చేయండి
- మీరు HTTP కాకుండా HTTPS ఉపయోగిస్తున్నారో నిర్ధారించుకోండి
- Enhance panel మీ WordPress సర్వర్ నుండి అందుబాటులో ఉందో చెక్ చేయండి
- కనెక్షన్‌ను block చేస్తున్న firewall rules లేవో వెరిఫై చేయండి

**Error: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` `wp-config.php` లో define అయిందో నిర్ధారించుకోండి
- Enhance లో token delete లేదా expire అవలేదో వెరిఫై చేయండి
- token value లో typos ఉన్నాయేమో చెక్ చేయండి

**Error: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` `wp-config.php` లో define అయిందో వెరిఫై చేయండి
- Server ID valid UUID ఫార్మాట్‌లో ఉందో నిర్ధారించుకోండి
- సర్వర్ మీ Enhance panel లో ఉందో confirm చేయండి

### డొమైన్ జోడించబడలేదు

**logs చెక్ చేయండి:**
1. **Ultimate Multisite** > **Logs** కు వెళ్ళండి
2. **integration-enhance** ద్వారా filter చేయండి
3. సమస్యను సూచించే error messages కోసం చూడండి

**సాధారణ కారణాలు:**
- Invalid domain name ఫార్మాట్
- Enhance లో domain ఇప్పటికే ఉంది
- తగినంత API permissions లేవు (token కు System Administrator role ఉందో నిర్ధారించుకోండి)
- Server ID Enhance లోని actual server కు match అవడం లేదు

### SSL Certificate సమస్యలు

**SSL provision అవడం లేదు:**
- DNS మీ సర్వర్ యొక్క IP address కు point అవుతుందో వెరిఫై చేయండి
- domain సరిగ్గా resolve అవుతుందో చెక్ చేయండి: `nslookup yourdomain.com`
- Enhance SSL provision చేయడానికి DNS resolve అవడం అవసరం
- DNS propagation తర్వాత SSL provisioning సాధారణంగా 5-10 నిమిషాలు పడుతుంది
- SSL-specific errors కోసం Enhance Control Panel logs చెక్ చేయండి

**Enhance లో manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains** కు వెళ్ళండి
2. మీ domain కనుగొని దాని SSL status చెక్ చేయండి
3. అవసరమైతే manually SSL provisioning trigger చేయవచ్చు

### DNS Check Interval

domains లేదా SSL certificates activate అవడానికి చాలా సమయం పడుతుంటే:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** కు వెళ్ళండి
2. **DNS Check Interval** setting కనుగొనండి
3. default 300 సెకన్ల నుండి తక్కువ విలువకు adjust చేయండి (minimum: 10 సెకన్లు)
4. **గమనిక:** తక్కువ intervals అంటే తరచుగా checks కానీ ఎక్కువ సర్వర్ లోడ్

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance లో మీ API token regenerate చేయండి
- token కు **System Administrator** role ఉందో వెరిఫై చేయండి
- token expire అవలేదో చెక్ చేయండి
- మీరు correct Organization ID ఉపయోగిస్తున్నారో నిర్ధారించుకోండి (URL లో సాధారణంగా అవసరం లేనప్పటికీ)

### Log Analysis

detailed logging enable చేయండి:
```php
// enhanced debugging కోసం wp-config.php కు జోడించండి
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

తర్వాత ఈ logs చెక్ చేయండి:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance యొక్క admin interface లో అందుబాటులో ఉంటాయి

## API Reference

### Authentication
అన్ని API requests Bearer token authentication ఉపయోగిస్తాయి:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ఉపయోగించే సాధారణ Endpoints

**List Servers:**
```
GET /servers
```

**సర్వర్‌లో Domains లిస్ట్ చేయడం:**
```
GET /servers/{server_id}/domains
```

**Domain జోడించడం:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain తొలగించడం:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### పూర్తి API Documentation
పూర్తి API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## ఉత్తమ పద్ధతులు

### భద్రత
- **API tokens ను ఎప్పుడూ version control కు commit చేయవద్దు**
- Tokens ను `wp-config.php` లో store చేయండి, ఇది Git నుండి exclude చేయబడాలి
- తగిన permissions తో tokens ఉపయోగించండి (full integration కోసం System Administrator)
- Production environments కోసం token expiry dates సెట్ చేయండి
- Tokens ను క్రమం తప్పకుండా rotate చేయండి

### పనితీరు
- అధిక API calls నివారించడానికి default DNS check interval (300 సెకన్లు) ఉపయోగించండి
- large-scale domain operations నడుపుతున్నప్పుడు Enhance సర్వర్ resources monitor చేయండి
- ఒకేసారి చాలా domains మ్యాప్ చేస్తుంటే domain additions ను stagger చేయడం పరిగణించండి

### Monitoring
- Integration errors కోసం క్రమం తప్పకుండా Ultimate Multisite logs చెక్ చేయండి
- Failed domain additions కోసం monitoring సెటప్ చేయండి
- SSL certificates సరిగ్గా provision అవుతున్నాయో వెరిఫై చేయండి
- Enhance సర్వర్ capacity మరియు domain limits పై నిఘా ఉంచండి

## అదనపు వనరులు

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" చూడండి

## సపోర్ట్

మీకు సమస్యలు ఎదురైతే:
1. పైన ఉన్న Troubleshooting విభాగం చెక్ చేయండి
2. Ultimate Multisite logs సమీక్షించండి
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) సంప్రదించండి
4. Panel-specific సమస్యల కోసం Enhance support ను సంప్రదించండి
5. కమ్యూనిటీ సహాయం కోసం detailed error logs తో కొత్త discussion సృష్టించండి

## గమనికలు

- ఈ integration domain aliases మాత్రమే handle చేస్తుంది; Enhance SSL ను ఆటోమేటిక్‌గా manage చేస్తుంది
- ఇంటిగ్రేషన్ custom domain mappings మరియు subdomain-based sites రెండింటికీ మద్దతు ఇస్తుంది
- Automatic www subdomain creation Domain Mapping settings లో configure చేయవచ్చు
- Enhance ప్రస్తుతం Apache configurations కు మద్దతు ఇస్తుంది (LiteSpeed Enterprise అందుబాటులో ఉంది)
- Ultimate Multisite నుండి domain తొలగింపు Enhance నుండి domain ను తొలగిస్తుంది కానీ associated SSL certificates వెంటనే delete కాకపోవచ్చు
