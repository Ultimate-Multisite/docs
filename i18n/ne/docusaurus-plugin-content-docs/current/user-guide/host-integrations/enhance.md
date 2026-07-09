---
title: कन्ट्रोल प्यानल एकीकरणलाई बढाउनुहोस्
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# कन्ट्रोल प्यानल एकीकरण बढाउने {#enhance-control-panel-integration}

## अवलोकन {#overview}
Enhance एउटा आधुनिक कन्ट्रोल प्यानल हो जसले शक्तिशाली होस्टिङ automatization र व्यवस्थापन क्षमताहरू प्रदान गर्दछ। यो एकीकरणले Ultimate Multisite र Enhance Control Panel बीच स्वचालित डोमेन सिङ्किङ र SSL प्रमाणपत्र व्यवस्थापन सक्षम गर्दछ।

**सम्बन्धित छलफल:** समुदायका सुझावहरू र थप जानकारीको लागि [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) हेर्नुहोस्।

## सुविधाहरू {#features}
- Ultimate Multisite मा डोमेन नक्सा गरिएपछि स्वचालित डोमेन सिङ्किङ
- DNS समाधान भएमा LetsEncrypt मार्फत स्वचालित SSL प्रमाणपत्र प्रदान गर्ने
- सबडोमेन समर्थन, जुन सबडोमेन मोडमा चलाइने नेटवर्कहरूका लागि हो
- नक्साहरू मेटाउँदा डोमेन हटाउने
- API प्रमाणहरू प्रमाणित गर्नको लागि कनेक्ट परीक्षण

## आवश्यकताहरू {#requirements}

### प्रणाली आवश्यकताहरू {#system-requirements}
- Enhance Control Panel स्थापित र पहुँचयोग्य हुनुपर्छ
- Enhance सर्भरमा होस्ट गरिएको वा जोडिएको WordPress Multisite स्थापना
- Apache वेब सर्भर (Enhance ले अहिले Apache कन्फिगरेसनलाई समर्थन गर्दछ; LiteSpeed Enterprise कम लागतमा उपलब्ध छ)

### API पहुँच {#api-access}
API टोकनहरू बनाउनको लागि Enhance Control Panel मा एडमिन पहुँच हुनुपर्छ।

## आफ्नो API प्रमाणहरू प्राप्त गर्ने तरिका {#getting-your-api-credentials}

### १. API टोकन सिर्जना गर्नुहोस् {#1-create-an-api-token}

१. एडमिनको रूपमा आफ्नो Enhance Control Panel मा लग इन गर्नुहोस्
२. नेभिगेसन मेनुमा **Settings** मा क्लिक गर्नुहोस्
३. **Access Tokens** मा जानुहोस्
४. **Create Token** मा क्लिक गर्नुहोस्
५. टोकनलाई वर्णनात्मक नाम दिनुहोस् (जस्तै, "Ultimate Multisite Integration")
६. **System Administrator** भूमिका तोक्नुहोस्
७. समाप्ति मिति (expiry date) को लागि:
   - यदि तपाईं चाहनुहुन्छ भने टोकन कहिल्यै समाप्त नहोस् भने खाली छोड्नुहोस्
   - वा सुरक्षा प्रयोजनका लागि विशिष्ट समाप्ति मिति सेट गर्नुहोस्
८. **Create** मा क्लिक गर्नुहोस्

तपाईंले सिर्जना गरेपछि, तपाईंको **Access Token** र **Organization ID** देखाइनेछ। **यी तुरुन्त बचत गर्नुहोस्**, किनभने टोकन एक पटक मात्र देखाइने हुन्छ।

### २. आफ्नो Organization ID प्राप्त गर्नुहोस् {#2-get-your-organization-id}

Organization ID 'Org ID: {your_id}' लेबल भएको नीलो इन्फर्मेसन बक्समा Access Tokens पेजमा देखाइन्छ।

Organization ID को स्वरूप यस्तो हुन्छ: `d8554b6d-5d0d-6719-009b-fec1189aa8f3` (UUID जस्तै)

तपाईं ग्राहकको Organization ID निम्न तरिकाले पनि फेला पार्न सक्नुहुन्छ:
१. **Customers** पेजमा जानुहोस्।
२. सम्बन्धित ग्राहकको लागि **Manage customer** मा क्लिक गर्नुहोस्।
३. URL हेर्नुहोस् - Organization ID भनेको `/customers/` पछि आउने अल्फान्युमेरिक अक्षरहरू हुन्।

### ३. आफ्नो Server ID प्राप्त गर्नुहोस् {#3-get-your-server-id}

तपाईंको Server ID (डोमेन सञ्चालनका लागि आवश्यक) पत्ता लगाउन:

१. Enhance Control Panel मा, **Servers** मा जानुहोस्।
२. जहाँ तपाईंको WordPress इन्स्टलेसन चलिरहेको छ, त्यो सर्भरमा क्लिक गर्नुहोस्।
३. URL वा सर्भर विवरणहरूमा Server ID (UUID स्वरूप) देखिनेछ।
४. वैकल्पिक रूपमा, सर्भरहरूको सूची लिन API प्रयोग गर्न सक्नुहुन्छ:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

सर्भर ID को स्वरूप यस्तो हुन्छ: `00000000-0000-0000-0000-000000000000` (UUID जस्तै)

### ४. आफ्नो API URL प्राप्त गर्नुहोस् {#4-get-your-api-url}

तपाईंको API URL भनेको तपाईंको Enhance Control Panel URL मा `/api/` जोडेर बनाइएको हुन्छ:

```
https://your-enhance-panel.com/api/
```

**महत्वपूर्ण:** `/api/` पाथ आवश्यक छ। सामान्य गल्तीहरू यस प्रकार छन्:
- केवल डोमेन प्रयोग गर्नु र `/api/` नजोड्नु।
- सुरक्षाका लागि HTTPS को सट्टा HTTP प्रयोग गर्नु (सुरक्षाको लागि HTTPS आवश्यक छ)।

## कन्फिगरेशन {#configuration}

### आवश्यक स्थिरांकहरू (Required Constants) {#required-constants}

निम्न स्थिरांकहरू आफ्नो `wp-config.php` फाइलमा थप्नुहोस्:

// कन्ट्रोल प्यानेल इन्टिग्रेशन बढाउनुहोस्
define('WU_ENHANCE_API_TOKEN', 'तपाईंको-बेयरर-टोकन-यहाँ-राख्नुहोस्');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'तपाईंको-सर्भर-युयुडी-यहाँ-राख्नुहोस्');

### इन्टिग्रेशन विजार्ड मार्फत सेटअप गर्ने तरिका {#setup-via-integration-wizard}

१. आफ्नो वर्डप्रेस एडमिनमा, **Ultimate Multisite** > **Settings** मा जानुहोस्।
२. **Integrations** ट्याबमा जानुहोस्।
३. **Enhance Control Panel Integration** फेला पार्नुहोस् र **Configuration** मा क्लिक गर्नुहोस्।
४. विजार्डले तपाईंलाई सेटअप प्रक्रियामा मार्गदर्शन गर्नेछ:
   - **चरण १:** परिचय र फिचरहरूको अवलोकन
   - **चरण २:** आफ्नो API क्रेडेंशियल्स (Token, API URL, Server ID) प्रविष्ट गर्नुहोस्
   - **चरण ३:** कनेक्ट परीक्षण गर्नुहोस्
   - **चरण ४:** समीक्षा गर्नुहोस् र सक्रिय गर्नुहोस्

तपाईं निम्न मध्ये कुनै एक विकल्प रोज्न सक्नुहुन्छ:
- विजार्डले स्वचालित रूपमा तपाईंको `wp-config.php` फाइलमा कन्स्ट्यान्टहरू इन्जेक्ट गर्न दिनुहोस्।
- कन्स्ट्यान्ट परिभाषाहरू प्रतिलिपि गरेर तिनीहरूलाई म्यानुअल रूपमा थप्नुहोस्।

## थप वर्डप्रेस कन्फिगरेसन {#additional-wordpress-configuration}

समुदायको प्रतिक्रिया ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) मा आधारित, तपाईंले यी अतिरिक्त सेटिङहरू कन्फिगर गर्नुपर्ने हुन सक्छ:

### .htaccess कन्फिगरेसन {#htaccess-configuration}

डोमेन मैपिंगसँग समस्या आउँछ भने:
१. मूल Enhance `.htaccess` फाइल मेटाउनुहोस्।
२. यसलाई मानक वर्डप्रेस मल्टीसाइट `.htaccess` फाइलले प्रतिस्थापन गर्नुहोस्।

### कुकी कन्स्ट्यान्टहरू {#cookie-constants}

मैप गरिएका डोमेनहरूमा सही कुकी ह्यान्डलिङ सुनिश्चित गर्न यी कन्स्ट्यान्टहरू `wp-config.php` मा थप्नुहोस्:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## यो कसरी काम गर्छ {#how-it-works}

### डोमेन मैप गरिएपछि {#when-a-domain-is-mapped}

१. एक प्रयोगकर्ताले Ultimate Multisite मा कस्टम डोमेन नक्सा (map) गर्छन् (वा सबडोमेन मोडमा नयाँ साइट सिर्जना गरिन्छ)।
२. यो integration ले Enhance को API मा POST request पठाउँछ: `/servers/{server_id}/domains`
३. Enhance ले तपाईंको सर्भर कन्फिगरेसनमा डोमेन थप्छ।
४. जब DNS तपाईंको सर्भरमा रिजल्भ हुन्छ, Enhance ले Let'sEncrypt मार्फत स्वचालित रूपमा SSL प्रमाणपत्र प्रदान गर्छ।
५. डोमेन HTTPS सँग सक्रिय (active) हुन्छ।

### डोमेन हटाउँदा {#when-a-domain-is-removed}

१. Ultimate Multisite मा डोमेन म्यापिङ डिलिट गरिन्छ।
२. यो integration ले डोमेनको ID पत्ता लगाउन Enhance लाई क्वेरी गर्छ।
३. `/servers/{server_id}/domains/{domain_id}` मा DELETE request पठाउँछ।
४. Enhance ले तपाईंको सर्भर कन्फिगरेसनबाट डोमेन हटाउँछ।

### DNS र SSL जाँच {#dns-and-ssl-checking}

Ultimate Multisite मा बिल्ट-इन DNS र SSL जाँच समावेश छ:
- तपाईंले **Domain Mapping Settings** मा जाँच गर्ने समय (check interval) सेट गर्न सक्नुहुन्छ (डिफल्ट: ३०० सेकेन्ड/५ मिनेट)।
- डोमेनलाई सक्रिय (active) चिन्ह लगाउनुअघि प्रणालीले DNS propagation जाँच गर्छ।
- SSL प्रमाणपत्रको वैधता स्वचालित रूपमा जाँच गरिन्छ।
- Enhance ले SSL provisioning स्वचालित रूपमा ह्यान्डल गर्छ, त्यसैले म्यानुअल SSL कन्फिगरेसन आवश्यक पर्दैन।

## सेटअप प्रमाणित गर्ने (Verifying Setup) {#verifying-setup}

### कनेक्शन परीक्षण गर्नुहोस् (Test the Connection) {#test-the-connection}

१. Integration Wizard मा, **Test Connection** चरण प्रयोग गर्नुहोस्।
२. प्लगइनले तपाईंको सर्भरमा डोमेनहरूको सूची बनाउने प्रयास गर्छ।
३. सफलता सन्देशले पुष्टि गर्छ:
   - API credentials सही छन्
   - API URL पहुँचयोग्य छ
   - Server ID मान्य छ
   - अनुमतिहरू (Permissions) ठीक सेट गरिएका छन्

### डोमेन म्याप गरेपछि (After Mapping a Domain) {#after-mapping-a-domain}

१. Ultimate Multisite मा एउटा टेस्ट डोमेन नक्सा गर्नुहोस्।
२. Ultimate Multisite लगहरू जाँच गर्नुहोस् (**Ultimate Multisite** > **Logs** > **integration-enhance**)।
३. Enhance Control Panel मा डोमेन थपिएको प्रमाणित गर्नुहोस्:
   - **Servers** > **Your Server** > **Domains** मा जानुहोस्।
   - नयाँ डोमेन सूचीमा देखा पर्नुपर्छ।
४. एक पटक DNS propagation भएपछि, SSL स्वचालित रूपमा प्रदान गरिएको छ भनेर जाँच गर्नुहोस्।

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API कनेक्ट न हुनुको समस्याहरू (API Connection Issues) {#api-connection-issues}

**त्रुटि: "Enhance API मा कनेक्ट हुन असफल भयो" ("Failed to connect to Enhance API")**
- `WU_ENHANCE_API_URL` मा अन्त्यमा `/api/` समावेश छ कि छैन, त्यो जाँच गर्नुहोस्।
- तपाईं HTTP होइन तर HTTPS प्रयोग गर्दै हुनुहुन्छ भन्ने कुरा सुनिश्चित गर्नुहोस्।
- Enhance प्यानल तपाईंको वर्डप्रेस सर्भरबाट पहुँचयोग्य (accessible) छ कि छैन भनेर जाँच गर्नुहोस्।
- कुनै फायरवाल नियमले कनेक्ट हुन अवरोध गरिरहेको छैन भनेर पुष्टि गर्नुहोस्।

**त्रुटि: "Enhance API टोकन भेटिएन" ("Enhance API Token not found")**
- `wp-config.php` मा `WU_ENHANCE_API_TOKEN` परिभाषित (defined) छ कि छैन, त्यो जाँच गर्नुहोस्।
- Enhance मा टोकन मेटाएको वा समाप्त भएको छैन भनेर पुष्टि गर्नुहोस्।
- टोकनको मानमा कुनै टाइपो (typo) छ कि छैन हेर्नुहोस्।

**त्रुटि: "सर्भर ID कन्फिगर गरिएको छैन" ("Server ID is not configured")**
- `wp-config.php` मा `WU_ENHANCE_SERVER_ID` परिभाषित (defined) छ कि छैन, त्यो जाँच गर्नुहोस्।
- सर्भर ID वैध UUID ढाँचामा छ भनेर सुनिश्चित गर्नुहोस्।
- तपाईंको Enhance प्यानलमा सर्भर अवस्थित छ वा छैन भनेर पुष्टि गर्नुहोस्।

### डोमेन थपिएको छैन (Domain Not Added) {#domain-not-added}

**लॉगहरू जाँच गर्नुहोस्:**
1. **Ultimate Multisite** > **Logs** मा जानुहोस्।
2. **integration-enhance** ले फिल्टर गर्नुहोस्।
3. समस्या देखाउने त्रुटि सन्देशहरूको खोजी गर्नुहोस्।

**सामान्य कारणहरू:**
- अवैध डोमेन नाम ढाँचा (Invalid domain name format)।
- डोमेन पहिले नै Enhance मा मौजूद (exists) छ।
- अपर्याप्त API अनुमतिहरू (API permissions) - सुनिश्चित गर्नुहोस् कि टोकनमा System Administrator भूमिका छ।
- सर्भर ID Enhance मा भएका वास्तविक सर्भरसँग मेल खाएको छैन।

### SSL प्रमाणपत्र समस्याहरू (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL प्रावधान नहुनु:**
- DNS तपाईंको सर्भरको IP ठेगानामा इंगित (pointing) गरिरहेको छ कि छैन, त्यो जाँच गर्नुहोस्।
- डोमेन सही रूपमा रिजल्भ हुन्छ कि हुँदैन हेर्नुहोस्: `nslookup yourdomain.com`
- SSL प्रदान गर्नुअघि Enhance ले DNS रिजल्भ गर्नुपर्छ।
- DNS प्रवर्द्धन (propagation) पछि सामान्यतया ५-१० मिनेट लाग्छ।
- SSL सम्बन्धी त्रुटिहरूका लागि Enhance Control Panel को लॉग जाँच गर्नुहोस्।

**Enhance मा म्यानुअल SSL समस्या निवारण:**
1. **Servers** > **Your Server** > **Domains** मा जानुहोस्।
2. आफ्नो डोमेन फेला पार्नुहोस् र यसको SSL स्थिति (status) जाँच गर्नुहोस्।
3. आवश्यक परेमा तपाईंले म्यानुअल रूपमा SSL प्रावधान ट्रिगर गर्न सक्नुहुन्छ।

### DNS जाँच अंतराल (DNS Check Interval) {#dns-check-interval}

डोमेन वा SSL सर्टिफिकेट सक्रिय हुन धेरै समय लाग्छ भने:
१. **Ultimate Multisite** > **Settings** > **Domain Mapping** मा जानुहोस्।
२. **DNS Check Interval** सेटिङ फेला पार्नुहोस्।
३. डिफल्ट ३०० सेकेन्डबाट यसलाई कम मानमा (न्यूनतम: १० सेकेन्ड) समायोजन गर्नुहोस्।
४. **नोट:** कम इन्टर्भेलको मतलब धेरै बार जाँच हुन्छ तर सर्भरमा लोड बढ्छ।

### प्रमाणीकरण त्रुटिहरू (Authentication Errors) {#authentication-errors}

**HTTP 401/403 त्रुटिहरू:**
- Enhance मा आफ्नो API टोकन पुनः उत्पन्न गर्नुहोस् (Regenerate)।
- टोकनमा **System Administrator** भूमिका छ कि छैन भनेर जाँच गर्नुहोस्।
- टोकन समाप्त भएको छैन भनेर सुनिश्चित गर्नुहोस्।
- सही Organization ID प्रयोग गरिरहनुभएको छ कि छैन भनेर सुनिश्चित गर्नुहोस् (यद्यपि यो URL मा सामान्यतया आवश्यक हुँदैन)।

### लग विश्लेषण (Log Analysis) {#log-analysis}

विस्तृत लगहरू सक्षम गर्नुहोस्:
```php
// राम्रो डिबगको लागि wp-config.php मा थप्नुहोस्
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

त्यसपछि निम्न ठाउँहरूमा लगहरू जाँच गर्नुहोस्:
- Ultimate Multisite लगहरू: **Ultimate Multisite** > **Logs**
- WordPress डिबग लग: `wp-content/debug.log`
- Enhance प्यानल लगहरू: Enhance को एडमिन इन्टरफेसमा उपलब्ध छन्।

## API सन्दर्भ (API Reference) {#api-reference}

### प्रमाणीकरण (Authentication) {#authentication}
सबै API अनुरोधहरू Bearer टोकन प्रमाणीकरण प्रयोग गर्छन्:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### सामान्य प्रयोग गरिने Endpoints {#common-endpoints-used}

**सर्भरहरूको सूची (List Servers):**
```
GET /servers
```

**सर्भरमा डोमेनहरूको सूची (List Domains on a Server):**
```
GET /servers/{server_id}/domains
```

**डोमेन थप्ने (Add a Domain):**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**डोमेन मेटाउने (Delete a Domain):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### पूर्ण API कागजात (Full API Documentation) {#full-api-documentation}
पूर्ण API कागजात: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## उत्तम अभ्यासहरू (Best Practices) {#best-practices}

### सुरक्षा (Security) {#security}
- **API टोकनलाई कहिल्यै पनि संस्करण नियन्त्रण (version control) मा कमिट नगर्नुहोस्**
- टोकनहरू `wp-config.php` मा सुरक्षित राख्नुहोस्, जुन Git बाट बाहिर राखिएको हुनुपर्छ।
- उपयुक्त अनुमति भएका टोकनहरू प्रयोग गर्नुहोस् (पूर्ण एकीकरणका लागि सिस्टम एडमिनिस्ट्रेटर प्रयोग गर्नुहोस्)।
- उत्पादन (production) वातावरणको लागि टोकनको समाप्ति मिति सेट गर्नुहोस्।
- नियमित रूपमा टोकनहरू बदल्नुहोस् (Rotate tokens periodically)।

### कार्यसम्पादन (Performance) {#performance}
- धेरै API कलहरू हुनबाट बच्न डिफोल्ट DNS जाँच इन्टर्भेल (३०० सेकेन्ड) प्रयोग गर्नुहोस्।
- ठूलो स्तरका डोमेन सञ्चालन गर्दा Enhance सर्भरको स्रोतहरूको निगरानी गर्नुहोस्।
- एकै पटक धेरै डोमेनहरू नक्सा (mapping) गर्ने योजना बनाउँदा डोमेन थप्ने प्रक्रियालाई चरणबद्ध (staggering) गर्न विचार गर्नुहोस्।

### निगरानी (Monitoring) {#monitoring}
- एकीकरण त्रुटिहरूका लागि Ultimate Multisite को लगहरू नियमित रूपमा जाँच गर्नुहोस्।
- असफल डोमेन थप्नको लागि निगरानी सेट गर्नुहोस्।
- SSL प्रमाणपत्रहरू सही तरिकाले प्रदान गरिएका छन् कि छैनन् भने जाँच गर्नुहोस्।
- Enhance सर्भरको क्षमता र डोमेन सीमाहरूमा नजर राख्नुहोस्।

## अतिरिक्त स्रोतहरू (Additional Resources) {#additional-resources}

- **Enhance आधिकारिक कागजात:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API कागजात:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance सामुदायिक फोरम:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub छलफल:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite डोमेन नक्सा गाइड:** "How to Configure Domain Mapping v2" भन्ने wiki पेज हेर्नुहोस्।

## समर्थन (Support) {#support}

यदि तपाईंलाई समस्याहरू भेटिएमा:
१. माथिको ट्रबलशुटिंग (Troubleshooting) खण्ड जाँच गर्नुहोस्।
२. Ultimate Multisite को लगहरू समीक्षा गर्नुहोस्।
३. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) मा परामर्श लिनुहोस्।
४. प्यानल-विशिष्ट समस्याहरूको लागि Enhance सपोर्टलाई सम्पर्क गर्नुहोस्।
५. सामुदायिक सहयोगका लागि विस्तृत त्रुटि लगहरू सहित नयाँ छलफल (discussion) बनाउनुहोस्।

## नोटहरू (Notes) {#notes}

यो इन्टिग्रेसनले डोमेन एलायसहरू मात्र ह्यान्डल गर्छ; एन्हांसले SSL लाई स्वचालित रूपमा व्यवस्थापन गर्छ।
यो इन्टिग्रेसनले कस्टम डोमेन मैपिंग र सबडोमेन-आधारित साइटहरू दुवैलाई समर्थन गर्दछ।
डोमेन मैपिंग सेटिङहरूमा स्वचालित www सबडोमेन सिर्जना गर्न कन्फिगर गर्न सकिन्छ।
एन्हांस अहिले Apache कन्फिगरेसनलाई समर्थन गर्छ (LiteSpeed Enterprise उपलब्ध छ)।
Ultimate Multisite बाट डोमेन हटाउँदा Enhance बाट त्यो डोमेन हट्छ तर सम्बन्धित SSL प्रमाणपत्रहरू तुरुन्तै मेटाउन नसकिने हुन सक्छ।
