---
title: कंट्रोल पैनल इंटीग्रेशन को बेहतर बनाएं
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## अवलोकन
Enhance एक आधुनिक control panel है जो शक्तिशाली hosting automation और management क्षमताएं प्रदान करता है। यह integration Ultimate Multisite और Enhance Control Panel के बीच automatic domain syncing और SSL certificate management को सक्षम करता है।

**संबंधित चर्चा:** community tips और अतिरिक्त जानकारी के लिए [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) देखें।

## विशेषताएं
- Ultimate Multisite में domains map होने पर automatic domain syncing
- DNS resolve होने पर LetsEncrypt के माध्यम से automatic SSL certificate provisioning
- Subdomain mode में चलने वाले networks के लिए subdomain support
- Mappings delete होने पर domain removal
- API credentials verify करने के लिए connection testing

## आवश्यकताएं

### सिस्टम आवश्यकताएं
- Enhance Control Panel installed और accessible हो
- Enhance server पर hosted या connected WordPress Multisite installation
- Apache web server (Enhance वर्तमान में Apache configurations को support करता है; LiteSpeed Enterprise कम कीमत पर उपलब्ध है)

### API Access
API tokens बनाने के लिए आपके पास Enhance Control Panel का administrator access होना चाहिए।

## अपने API Credentials प्राप्त करना

### 1. API Token बनाएं

1. Administrator के रूप में अपने Enhance Control Panel में login करें
2. Navigation menu में **Settings** पर click करें
3. **Access Tokens** पर जाएं
4. **Create Token** पर click करें
5. Token को एक descriptive name दें (जैसे, "Ultimate Multisite Integration")
6. **System Administrator** role assign करें
7. Expiry date के लिए:
   - यदि आप चाहते हैं कि token कभी expire न हो तो खाली छोड़ दें
   - या security purposes के लिए एक specific expiration date set करें
8. **Create** पर click करें

Creation के बाद, आपका **Access Token** और **Organization ID** display होगा। **इन्हें तुरंत save करें** क्योंकि token केवल एक बार दिखाया जाएगा।

### 2. अपना Organization ID प्राप्त करें

Organization ID, Access Tokens page पर "Org ID: {your_id}" लेबल वाले blue information box में display होता है।

Organization ID इस format में एक UUID होता है: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

आप किसी customer का Organization ID इस तरह भी पा सकते हैं:
1. **Customers** page पर जाएं
2. संबंधित customer के लिए **Manage customer** पर click करें
3. URL देखें - Organization ID `/customers/` के बाद alphanumeric characters हैं

### 3. अपना Server ID प्राप्त करें

अपना Server ID खोजने के लिए (domain operations के लिए आवश्यक):

1. Enhance Control Panel में, **Servers** पर जाएं
2. उस server पर click करें जहां आपका WordPress installation चल रहा है
3. Server ID (UUID format) URL या server details में दिखाई देगा
4. वैकल्पिक रूप से, आप servers list करने के लिए API का उपयोग कर सकते हैं:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID UUID format में होता है: `00000000-0000-0000-0000-000000000000`

### 4. अपना API URL प्राप्त करें

आपका API URL आपका Enhance Control Panel URL है जिसमें `/api/` जोड़ा गया है:

```
https://your-enhance-panel.com/api/
```

**महत्वपूर्ण:** `/api/` path आवश्यक है। सामान्य गलतियों में शामिल हैं:
- `/api/` के बिना केवल domain का उपयोग करना
- HTTPS के बजाय HTTP का उपयोग करना (security के लिए HTTPS आवश्यक है)

## Configuration

### आवश्यक Constants

अपनी `wp-config.php` file में निम्नलिखित constants जोड़ें:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard के माध्यम से Setup

1. अपने WordPress admin में, **Ultimate Multisite** > **Settings** पर जाएं
2. **Integrations** tab पर जाएं
3. **Enhance Control Panel Integration** खोजें और **Configuration** पर click करें
4. Wizard आपको setup के माध्यम से guide करेगा:
   - **Step 1:** Introduction और feature overview
   - **Step 2:** अपने API credentials enter करें (Token, API URL, Server ID)
   - **Step 3:** Connection test करें
   - **Step 4:** Review और activate करें

आप चुन सकते हैं:
- Wizard को अपनी `wp-config.php` file में automatically constants inject करने दें
- Constant definitions copy करें और manually add करें

## अतिरिक्त WordPress Configuration

Community feedback ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) के आधार पर, आपको इन अतिरिक्त settings को configure करने की आवश्यकता हो सकती है:

### .htaccess Configuration

यदि आपको domain mapping में समस्याएं आ रही हैं:
1. Original Enhance `.htaccess` file delete करें
2. इसे standard WordPress Multisite `.htaccess` file से replace करें

### Cookie Constants

Mapped domains में proper cookie handling सुनिश्चित करने के लिए `wp-config.php` में ये constants जोड़ें:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## यह कैसे काम करता है

### जब एक Domain Map होता है

1. User Ultimate Multisite में एक custom domain map करता है (या subdomain mode में एक नई site बनाई जाती है)
2. Integration Enhance के API को POST request भेजता है: `/servers/{server_id}/domains`
3. Enhance आपके server configuration में domain जोड़ता है
4. जब DNS आपके server को resolve करता है, Enhance automatically LetsEncrypt के माध्यम से SSL certificate provision करता है
5. Domain HTTPS के साथ active हो जाता है

### जब एक Domain Remove होता है

1. Ultimate Multisite में domain mapping delete होती है
2. Integration Enhance को query करके domain का ID खोजता है
3. DELETE request भेजी जाती है: `/servers/{server_id}/domains/{domain_id}`
4. Enhance आपके server configuration से domain remove करता है

### DNS और SSL Checking

Ultimate Multisite में built-in DNS और SSL checking शामिल है:
- आप **Domain Mapping Settings** में check interval configure कर सकते हैं (default: 300 seconds/5 minutes)
- System domain को active mark करने से पहले DNS propagation verify करेगा
- SSL certificate validity automatically check होती है
- Enhance SSL provisioning automatically handle करता है, इसलिए manual SSL configuration आवश्यक नहीं है

## Setup Verify करना

### Connection Test करें

1. Integration Wizard में, **Test Connection** step का उपयोग करें
2. Plugin आपके server पर domains list करने का प्रयास करेगा
3. Success message confirm करता है:
   - API credentials सही हैं
   - API URL accessible है
   - Server ID valid है
   - Permissions properly set हैं

### Domain Map करने के बाद

1. Ultimate Multisite में एक test domain map करें
2. Ultimate Multisite logs check करें (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel में verify करें कि domain add हुआ:
   - **Servers** > **Your Server** > **Domains** पर जाएं
   - नया domain list में दिखाई देना चाहिए
4. DNS propagate होने के बाद, verify करें कि SSL automatically provision हुआ

## समस्या निवारण

### API Connection समस्याएं

**Error: "Failed to connect to Enhance API"**
- Verify करें कि `WU_ENHANCE_API_URL` में अंत में `/api/` शामिल है
- सुनिश्चित करें कि आप HTTPS का उपयोग कर रहे हैं, HTTP नहीं
- Check करें कि Enhance panel आपके WordPress server से accessible है
- Verify करें कि कोई firewall rules connection block नहीं कर रहे

**Error: "Enhance API Token not found"**
- सुनिश्चित करें कि `WU_ENHANCE_API_TOKEN` `wp-config.php` में defined है
- Verify करें कि token Enhance में delete या expire नहीं हुआ
- Token value में typos check करें

**Error: "Server ID is not configured"**
- Verify करें कि `WU_ENHANCE_SERVER_ID` `wp-config.php` में defined है
- सुनिश्चित करें कि Server ID valid UUID format में है
- Confirm करें कि server आपके Enhance panel में exist करता है

### Domain Add नहीं हुआ

**Logs check करें:**
1. **Ultimate Multisite** > **Logs** पर जाएं
2. **integration-enhance** से filter करें
3. Issue indicate करने वाले error messages देखें

**सामान्य कारण:**
- Invalid domain name format
- Domain पहले से Enhance में exist करता है
- Insufficient API permissions (सुनिश्चित करें कि token में System Administrator role है)
- Server ID Enhance में actual server से match नहीं करता

### SSL Certificate समस्याएं

**SSL provision नहीं हो रहा:**
- Verify करें कि DNS आपके server के IP address की ओर point कर रहा है
- Check करें कि domain सही से resolve हो रहा है: `nslookup yourdomain.com`
- Enhance को SSL provision करने से पहले DNS resolve होना आवश्यक है
- SSL provisioning में आमतौर पर DNS propagation के बाद 5-10 minutes लगते हैं
- SSL-specific errors के लिए Enhance Control Panel logs check करें

**Enhance में Manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains** पर जाएं
2. अपना domain खोजें और उसका SSL status check करें
3. यदि आवश्यक हो तो आप manually SSL provisioning trigger कर सकते हैं

### DNS Check Interval

यदि domains या SSL certificates activate होने में बहुत समय लग रहा है:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** पर जाएं
2. **DNS Check Interval** setting खोजें
3. Default 300 seconds से कम value में adjust करें (minimum: 10 seconds)
4. **नोट:** कम intervals का मतलब अधिक frequent checks लेकिन higher server load

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance में अपना API token regenerate करें
- Verify करें कि token में **System Administrator** role है
- Check करें कि token expire नहीं हुआ
- सुनिश्चित करें कि आप सही Organization ID का उपयोग कर रहे हैं (हालांकि यह आमतौर पर URL में required नहीं है)

### Log Analysis

Detailed logging enable करें:
```php
// Enhanced debugging के लिए wp-config.php में add करें
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

फिर logs यहां check करें:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance के admin interface में उपलब्ध

## API Reference

### Authentication
सभी API requests Bearer token authentication का उपयोग करते हैं:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### उपयोग किए जाने वाले सामान्य Endpoints

**Servers List करें:**
```
GET /servers
```

**Server पर Domains List करें:**
```
GET /servers/{server_id}/domains
```

**Domain Add करें:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain Delete करें:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation
Complete API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### Security
- **API tokens को कभी version control में commit न करें**
- Tokens को `wp-config.php` में store करें जो Git से excluded होनी चाहिए
- Appropriate permissions वाले tokens का उपयोग करें (full integration के लिए System Administrator)
- Production environments के लिए token expiry dates set करें
- Tokens को periodically rotate करें

### Performance
- Excessive API calls से बचने के लिए default DNS check interval (300 seconds) का उपयोग करें
- Large-scale domain operations चलाते समय Enhance server resources monitor करें
- एक साथ कई domains map करते समय domain additions को stagger करने पर विचार करें

### Monitoring
- Integration errors के लिए नियमित रूप से Ultimate Multisite logs check करें
- Failed domain additions के लिए monitoring set up करें
- Verify करें कि SSL certificates सही से provision हो रहे हैं
- Enhance server capacity और domain limits पर नज़र रखें

## अतिरिक्त Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" देखें

## Support

यदि आपको समस्याएं आती हैं:
1. ऊपर दिए गए समस्या निवारण section को check करें
2. Ultimate Multisite logs review करें
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) से परामर्श करें
4. Panel-specific issues के लिए Enhance support से संपर्क करें
5. Community assistance के लिए detailed error logs के साथ एक नई discussion create करें

## नोट्स

- यह integration केवल domain aliases handle करता है; Enhance SSL automatically manage करता है
- Integration custom domain mappings और subdomain-based sites दोनों को support करता है
- Automatic www subdomain creation को Domain Mapping settings में configure किया जा सकता है
- Enhance वर्तमान में Apache configurations को support करता है (LiteSpeed Enterprise उपलब्ध है)
- Ultimate Multisite से domain removal करने पर Enhance से domain remove हो जाएगा लेकिन associated SSL certificates तुरंत delete नहीं हो सकते
