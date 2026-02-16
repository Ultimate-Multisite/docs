---
title: नियंत्रण पॅनेल एकत्रीकरण वाढवा
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel इंटिग्रेशन

## आढावा
Enhance हे एक आधुनिक control panel आहे जे शक्तिशाली hosting automation आणि व्यवस्थापन क्षमता प्रदान करते. हे इंटिग्रेशन Ultimate Multisite आणि Enhance Control Panel दरम्यान स्वयंचलित domain syncing आणि SSL certificate व्यवस्थापन सक्षम करते.

**संबंधित चर्चा:** समुदायाच्या टिप्स आणि अतिरिक्त माहितीसाठी [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) पहा.

## वैशिष्ट्ये
- Ultimate Multisite मध्ये domains map केल्यावर स्वयंचलित domain syncing
- DNS resolve झाल्यावर LetsEncrypt द्वारे स्वयंचलित SSL certificate provisioning
- Subdomain mode मध्ये चालणाऱ्या networks साठी subdomain support
- Mappings हटवल्यावर domain हटवणे
- API credentials सत्यापित करण्यासाठी connection testing

## आवश्यकता

### सिस्टम आवश्यकता
- Enhance Control Panel इन्स्टॉल केलेले आणि accessible असणे आवश्यक
- Enhance server वर host केलेले किंवा त्याशी connected असलेले WordPress Multisite installation
- Apache web server (Enhance सध्या Apache configurations सपोर्ट करते; LiteSpeed Enterprise कमी किमतीत उपलब्ध आहे)

### API Access
API tokens तयार करण्यासाठी तुम्हाला Enhance Control Panel मध्ये administrator access असणे आवश्यक आहे.

## तुमचे API Credentials मिळवणे

### 1. API Token तयार करा

1. Administrator म्हणून तुमच्या Enhance Control Panel मध्ये log in करा
2. Navigation menu मध्ये **Settings** वर क्लिक करा
3. **Access Tokens** वर जा
4. **Create Token** वर क्लिक करा
5. Token ला एक वर्णनात्मक नाव द्या (उदा., "Ultimate Multisite Integration")
6. **System Administrator** role assign करा
7. Expiry date साठी:
   - Token कधीही expire होऊ नये असे वाटत असल्यास रिक्त ठेवा
   - किंवा सुरक्षिततेसाठी विशिष्ट expiration date सेट करा
8. **Create** वर क्लिक करा

तयार केल्यानंतर, तुमचे **Access Token** आणि **Organization ID** दिसेल. **हे लगेच save करा** कारण token फक्त एकदाच दाखवला जाईल.

### 2. तुमचा Organization ID मिळवा

Organization ID Access Tokens पेजवर "Org ID: {your_id}" या label असलेल्या निळ्या माहिती बॉक्समध्ये दिसतो.

Organization ID हा UUID format मध्ये असतो: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

तुम्ही customer चा Organization ID असाही शोधू शकता:
1. **Customers** page वर जा
2. संबंधित customer साठी **Manage customer** वर क्लिक करा
3. URL पहा - Organization ID हा `/customers/` नंतरचे alphanumeric characters आहेत

### 3. तुमचा Server ID मिळवा

तुमचा Server ID शोधण्यासाठी (domain operations साठी आवश्यक):

1. Enhance Control Panel मध्ये, **Servers** वर जा
2. तुमचे WordPress installation चालू असलेल्या server वर क्लिक करा
3. Server ID (UUID format) URL किंवा server details मध्ये दिसेल
4. वैकल्पिकरित्या, तुम्ही servers ची यादी मिळवण्यासाठी API वापरू शकता:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID हा UUID format मध्ये असतो: `00000000-0000-0000-0000-000000000000`

### 4. तुमचा API URL मिळवा

तुमचा API URL हा तुमच्या Enhance Control Panel URL च्या शेवटी `/api/` जोडलेला आहे:

```
https://your-enhance-panel.com/api/
```

**महत्त्वाचे:** `/api/` path आवश्यक आहे. सामान्य चुकांमध्ये समाविष्ट आहे:
- `/api/` शिवाय फक्त domain वापरणे
- HTTPS ऐवजी HTTP वापरणे (सुरक्षिततेसाठी HTTPS आवश्यक आहे)

## Configuration

### आवश्यक Constants

तुमच्या `wp-config.php` फाइलमध्ये खालील constants जोडा:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard द्वारे Setup

1. तुमच्या WordPress admin मध्ये, **Ultimate Multisite** > **Settings** वर जा
2. **Integrations** tab वर जा
3. **Enhance Control Panel Integration** शोधा आणि **Configuration** वर क्लिक करा
4. Wizard तुम्हाला setup मधून मार्गदर्शन करेल:
   - **Step 1:** परिचय आणि वैशिष्ट्यांचा आढावा
   - **Step 2:** तुमचे API credentials प्रविष्ट करा (Token, API URL, Server ID)
   - **Step 3:** Connection test करा
   - **Step 4:** Review आणि activate करा

तुम्ही निवडू शकता:
- Wizard ला constants आपोआप तुमच्या `wp-config.php` फाइलमध्ये inject करू द्या
- Constant definitions copy करा आणि स्वतः जोडा

## अतिरिक्त WordPress Configuration

समुदायाच्या feedback वर आधारित ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), तुम्हाला या अतिरिक्त settings configure करणे आवश्यक असू शकते:

### .htaccess Configuration

Domain mapping मध्ये समस्या आल्यास:
1. मूळ Enhance `.htaccess` फाइल हटवा
2. ती standard WordPress Multisite `.htaccess` फाइलने बदला

### Cookie Constants

Mapped domains वर योग्य cookie handling सुनिश्चित करण्यासाठी `wp-config.php` मध्ये हे constants जोडा:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## हे कसे काम करते

### Domain Map केल्यावर

1. User Ultimate Multisite मध्ये custom domain map करतो (किंवा subdomain mode मध्ये नवीन site तयार होते)
2. Integration Enhance च्या API ला POST request पाठवते: `/servers/{server_id}/domains`
3. Enhance तुमच्या server configuration मध्ये domain जोडते
4. DNS तुमच्या server कडे resolve झाल्यावर, Enhance आपोआप LetsEncrypt द्वारे SSL certificate provision करते
5. Domain HTTPS सह active होतो

### Domain हटवल्यावर

1. Ultimate Multisite मध्ये domain mapping हटवली जाते
2. Integration domain चा ID शोधण्यासाठी Enhance ला query करते
3. DELETE request पाठवली जाते: `/servers/{server_id}/domains/{domain_id}`
4. Enhance तुमच्या server configuration मधून domain हटवते

### DNS आणि SSL तपासणी

Ultimate Multisite मध्ये built-in DNS आणि SSL checking आहे:
- तुम्ही **Domain Mapping Settings** मध्ये check interval configure करू शकता (default: 300 seconds/5 मिनिटे)
- System domain active म्हणून mark करण्यापूर्वी DNS propagation verify करेल
- SSL certificate validity आपोआप तपासली जाते
- Enhance SSL provisioning आपोआप handle करते, त्यामुळे manual SSL configuration आवश्यक नाही

## Setup सत्यापित करणे

### Connection Test करा

1. Integration Wizard मध्ये, **Test Connection** step वापरा
2. Plugin तुमच्या server वरील domains list करण्याचा प्रयत्न करेल
3. Success message याची पुष्टी करतो:
   - API credentials बरोबर आहेत
   - API URL accessible आहे
   - Server ID valid आहे
   - Permissions योग्यरित्या सेट आहेत

### Domain Map केल्यानंतर

1. Ultimate Multisite मध्ये test domain map करा
2. Ultimate Multisite logs तपासा (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel मध्ये domain जोडला गेला का ते verify करा:
   - **Servers** > **Your Server** > **Domains** वर जा
   - नवीन domain यादीत दिसला पाहिजे
4. DNS propagate झाल्यावर, SSL आपोआप provision झाला का ते verify करा

## समस्यानिवारण

### API Connection समस्या

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` मध्ये शेवटी `/api/` आहे का ते verify करा
- तुम्ही HTTP नाही तर HTTPS वापरत आहात याची खात्री करा
- तुमच्या WordPress server वरून Enhance panel accessible आहे का ते तपासा
- Connection block करणारे firewall rules नाहीत का ते verify करा

**Error: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` `wp-config.php` मध्ये define केला आहे याची खात्री करा
- Enhance मध्ये token हटवला किंवा expire झाला नाही का ते verify करा
- Token value मध्ये typos तपासा

**Error: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` `wp-config.php` मध्ये define केला आहे का ते verify करा
- Server ID valid UUID format मध्ये आहे याची खात्री करा
- Server तुमच्या Enhance panel मध्ये अस्तित्वात आहे याची पुष्टी करा

### Domain जोडला गेला नाही

**Logs तपासा:**
1. **Ultimate Multisite** > **Logs** वर जा
2. **integration-enhance** ने filter करा
3. समस्या दर्शवणारे error messages शोधा

**सामान्य कारणे:**
- Invalid domain name format
- Domain आधीच Enhance मध्ये अस्तित्वात आहे
- अपुऱ्या API permissions (token ला System Administrator role असल्याची खात्री करा)
- Server ID Enhance मधील actual server शी जुळत नाही

### SSL Certificate समस्या

**SSL provision होत नाही:**
- DNS तुमच्या server च्या IP address कडे point होत आहे का ते verify करा
- Domain योग्यरित्या resolve होतो का ते तपासा: `nslookup yourdomain.com`
- SSL provision करण्यापूर्वी Enhance ला DNS resolve होणे आवश्यक आहे
- DNS propagation नंतर SSL provisioning ला सामान्यतः 5-10 मिनिटे लागतात
- SSL-specific errors साठी Enhance Control Panel logs तपासा

**Enhance मध्ये Manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains** वर जा
2. तुमचा domain शोधा आणि त्याचा SSL status तपासा
3. आवश्यक असल्यास तुम्ही manually SSL provisioning trigger करू शकता

### DNS Check Interval

Domains किंवा SSL certificates activate होण्यास जास्त वेळ लागत असल्यास:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** वर जा
2. **DNS Check Interval** setting शोधा
3. Default 300 seconds वरून कमी value मध्ये adjust करा (minimum: 10 seconds)
4. **टीप:** कमी intervals म्हणजे जास्त वारंवार तपासणी पण server वर जास्त load

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance मध्ये तुमचा API token regenerate करा
- Token ला **System Administrator** role आहे का ते verify करा
- Token expire झाला नाही का ते तपासा
- तुम्ही योग्य Organization ID वापरत आहात याची खात्री करा (जरी ते सामान्यतः URL मध्ये आवश्यक नसते)

### Log Analysis

तपशीलवार logging enable करा:
```php
// Enhanced debugging साठी wp-config.php मध्ये जोडा
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

नंतर logs येथे तपासा:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance च्या admin interface मध्ये उपलब्ध

## API Reference

### Authentication
सर्व API requests Bearer token authentication वापरतात:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### वापरलेले सामान्य Endpoints

**Servers ची यादी:**
```
GET /servers
```

**Server वरील Domains ची यादी:**
```
GET /servers/{server_id}/domains
```

**Domain जोडा:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain हटवा:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### संपूर्ण API Documentation
संपूर्ण API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## सर्वोत्तम पद्धती

### सुरक्षितता
- **API tokens कधीही version control मध्ये commit करू नका**
- Tokens `wp-config.php` मध्ये store करा जे Git मधून exclude केले पाहिजे
- योग्य permissions असलेले tokens वापरा (पूर्ण integration साठी System Administrator)
- Production environments साठी token expiry dates सेट करा
- नियमितपणे tokens बदलत राहा

### Performance
- जास्त API calls टाळण्यासाठी default DNS check interval (300 seconds) वापरा
- मोठ्या प्रमाणात domain operations चालवताना Enhance server resources monitor करा
- एकाच वेळी अनेक domains map करत असल्यास domain additions stagger करण्याचा विचार करा

### Monitoring
- Integration errors साठी नियमितपणे Ultimate Multisite logs तपासा
- Failed domain additions साठी monitoring set up करा
- SSL certificates योग्यरित्या provision होत आहेत का ते verify करा
- Enhance server capacity आणि domain limits वर लक्ष ठेवा

## अतिरिक्त संसाधने

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" पहा

## Support

समस्या आल्यास:
1. वरील समस्यानिवारण विभाग तपासा
2. Ultimate Multisite logs review करा
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) चा सल्ला घ्या
4. Panel-specific समस्यांसाठी Enhance support शी संपर्क साधा
5. समुदायाच्या मदतीसाठी तपशीलवार error logs सह नवीन discussion तयार करा

## टिपा

- हे integration फक्त domain aliases handle करते; SSL Enhance आपोआप व्यवस्थापित करते
- Integration custom domain mappings आणि subdomain-based sites दोन्हींना support करते
- Automatic www subdomain creation Domain Mapping settings मध्ये configure करता येते
- Enhance सध्या Apache configurations support करते (LiteSpeed Enterprise उपलब्ध)
- Ultimate Multisite मधून domain हटवल्यास Enhance मधून domain हटेल पण संबंधित SSL certificates लगेच हटवले जाणार नाहीत
