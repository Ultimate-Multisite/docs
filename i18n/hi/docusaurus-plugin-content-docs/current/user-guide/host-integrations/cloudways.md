---
title: Cloudways एकीकरण
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways एकीकरण {#cloudways-integration}

## अवलोकन {#overview}
Cloudways एक managed cloud hosting platform है, जो आपको DigitalOcean, AWS, Google Cloud आदि जैसे विभिन्न cloud providers पर WordPress साइटें deploy करने देता है। यह एकीकरण Ultimate Multisite और Cloudways के बीच automatic domain syncing और SSL certificate प्रबंधन सक्षम करता है।

## विशेषताएँ {#features}
- Automatic domain syncing
- SSL certificate प्रबंधन
- अतिरिक्त domain के लिए support
- SSL certificates के लिए DNS validation

## आवश्यकताएँ {#requirements}
आपकी `wp-config.php` file में निम्न constants defined होने चाहिए:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

वैकल्पिक रूप से, आप यह भी define कर सकते हैं:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup निर्देश {#setup-instructions}

### 1. अपने Cloudways API credentials प्राप्त करें {#1-get-your-cloudways-api-credentials}

1. अपने Cloudways Dashboard में log in करें
2. "Account" > "API Keys" पर जाएँ
3. अगर आपके पास पहले से API key नहीं है, तो एक API key generate करें
4. अपना email और API key copy करें

### 2. अपने Server और Application IDs प्राप्त करें {#2-get-your-server-and-application-ids}

1. अपने Cloudways Dashboard में, "Servers" पर जाएँ
2. वह server चुनें जहाँ आपका WordPress multisite host किया गया है
3. Server ID URL में दिखती है: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" पर जाएँ और अपनी WordPress application चुनें
5. App ID URL में दिखती है: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php में Constants जोड़ें {#3-add-constants-to-wp-configphp}

अपनी `wp-config.php` file में निम्न constants जोड़ें:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

अगर आपके पास अतिरिक्त **external** domains हैं (आपके multisite network के बाहर) जिन्हें हमेशा Cloudways aliases list में रखना चाहिए:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning अपने network का wildcard शामिल न करें
`WU_CLOUDWAYS_EXTRA_DOMAINS` में `*.your-network.com` (या अपने network का कोई भी subdomain pattern) **न** जोड़ें। ऐसा करने से प्रति-tenant SSL certificates जारी क्यों नहीं हो पाते, यह जानने के लिए नीचे [महत्वपूर्ण — wildcard SSL जोखिम](#important--wildcard-ssl-pitfall) देखें।
:::

### 4. एकीकरण सक्षम करें {#4-enable-the-integration}

1. अपने WordPress admin में, Ultimate Multisite > Settings पर जाएँ
2. "Domain Mapping" tab पर जाएँ
3. "Host Integrations" तक नीचे scroll करें
4. Cloudways एकीकरण सक्षम करें
5. "Save Changes" पर click करें

## यह कैसे काम करता है {#how-it-works}

### Domain Syncing {#domain-syncing}

जब Ultimate Multisite में कोई domain map किया जाता है:

1. एकीकरण वर्तमान में mapped सभी domains प्राप्त करता है
2. यह नए domain को list में जोड़ता है (यदि लागू हो तो www version के साथ)
3. यह पूरी list API के माध्यम से Cloudways को भेजता है
4. Cloudways आपकी application के domain aliases update करता है

ध्यान दें: Cloudways API में हर बार domains की पूरी list भेजनी होती है, केवल अलग-अलग domains जोड़ना या हटाना पर्याप्त नहीं है।

### SSL Certificate प्रबंधन {#ssl-certificate-management}

Domains sync होने के बाद:

1. एकीकरण जाँचता है कि किन domains के valid DNS records आपके server की ओर point कर रहे हैं
2. यह उन domains के लिए Let's Encrypt SSL certificates install करने हेतु Cloudways को request भेजता है
3. Cloudways SSL certificate जारी करने और installation को संभालता है

एकीकरण हमेशा Cloudways से **standard** (non-wildcard) Let's Encrypt certificates का अनुरोध करता है। यदि `WU_CLOUDWAYS_EXTRA_DOMAINS` में कोई wildcard pattern दिया गया है, तो SSL request से पहले शुरुआती `*.` हटा दिया जाता है — इस एकीकरण द्वारा wildcard स्वयं कभी install नहीं किया जाता। Cloudways पर wildcard certificate उपयोग करने के लिए आपको इसे manually install करना होगा, लेकिन ऐसा करने से mapped custom domains के लिए per-domain Let's Encrypt issuance block हो जाता है (नीचे दिया जोखिम देखें)।

## अतिरिक्त Domains {#extra-domains}

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant आपको अतिरिक्त **external** domains specify करने देता है, जिन्हें हमेशा Cloudways application की aliases list में रखा जाना चाहिए। इसका उपयोग इनके लिए करें:

- External domains जो Ultimate Multisite द्वारा managed नहीं हैं (जैसे वही Cloudways application साझा करने वाली अलग marketing साइट)
- Parked या staging domains जिन्हें आप application aliases list में रखना चाहते हैं

इस constant का उपयोग अपने network के subdomain wildcard के लिए **न** करें
(जैसे `*.your-network.com`)। नीचे wildcard SSL जोखिम देखें।

## महत्वपूर्ण — Wildcard SSL जोखिम {#important--wildcard-ssl-pitfall}

Cloudways के default setup का पालन करते समय एक आम गलती यह है कि `WU_CLOUDWAYS_EXTRA_DOMAINS` में `*.your-network.com` जैसा wildcard जोड़ दिया जाता है, या उस wildcard के लिए Cloudways wildcard SSL certificate manually install कर दिया जाता है।

**यदि आप ऐसा करते हैं, तो Cloudways उन per-tenant custom domains के लिए Let's Encrypt certificates जारी करने से मना कर देगा जिन्हें Ultimate Multisite map करता है।** Cloudways हर बार application पर active SSL certificate replace करता है, और application पर पहले से मौजूद wildcard certificate उस per-domain Let's Encrypt issuance को block कर देता है जिस पर यह एकीकरण निर्भर करता है।

### Ultimate Multisite network के लिए सुझाया गया Cloudways SSL setup {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application के **SSL Certificate** tab में, केवल `your-network.com` और `www.your-network.com` को cover करने वाला **standard
   Let's Encrypt certificate** install करें
   — wildcard **नहीं**।
2. `WU_CLOUDWAYS_EXTRA_DOMAINS` में `*.your-network.com` (या अपने network का कोई भी subdomain pattern) **न** डालें। इस constant को केवल **external** domains के लिए रखें।
3. केवल **DNS** level पर per-tenant subdomain wildcard बनाएँ (`*.your-network.com` के लिए आपके Cloudways server IP की ओर point करता हुआ एक `A` record) ताकि subsites resolve हों। अलग-अलग mapped custom domains के लिए SSL फिर इस एकीकरण द्वारा Let's Encrypt के माध्यम से automatically जारी किया जाता है।

यदि आपके किरायेदारों के कस्टम डोमेन SSL के बिना अटके हुए हैं, तो Cloudways SSL टैब जाँचें। यदि वहाँ
वाइल्डकार्ड प्रमाणपत्र सक्रिय है, तो उसे हटाएँ, केवल मुख्य नेटवर्क डोमेन के लिए मानक Let's Encrypt
प्रमाणपत्र फिर से जारी करें, और `WU_CLOUDWAYS_EXTRA_DOMAINS` से सभी वाइल्डकार्ड प्रविष्टियाँ हटाएँ।
फिर डोमेन मैपिंग दोबारा शुरू करें (या अगली का इंतज़ार करें)
और इंटीग्रेशन फिर से प्रति-डोमेन प्रमाणपत्र जारी करना शुरू कर देगा।

## समस्या-निवारण {#troubleshooting}

### API कनेक्शन समस्याएँ {#api-connection-issues}
- सत्यापित करें कि आपका ईमेल और API Key सही हैं
- जाँचें कि आपके server और application IDs सही हैं
- सुनिश्चित करें कि आपके Cloudways Account के पास आवश्यक अनुमतियाँ हैं

### SSL प्रमाणपत्र समस्याएँ {#ssl-certificate-issues}
- Cloudways के लिए SSL प्रमाणपत्र जारी करने से पहले डोमेन के पास आपके server की ओर संकेत करने वाले वैध DNS रिकॉर्ड होना आवश्यक है
- इंटीग्रेशन SSL प्रमाणपत्रों का अनुरोध करने से पहले DNS रिकॉर्ड सत्यापित करता है
- यदि SSL प्रमाणपत्र जारी नहीं हो रहे हैं, तो जाँचें कि आपके डोमेन आपके server के IP address की ओर सही ढंग से संकेत कर रहे हैं
- **प्रति-किरायेदार कस्टम डोमेन SSL के बिना अटके हुए हैं?** Cloudways application का SSL Certificate टैब जाँचें। यदि कोई वाइल्डकार्ड प्रमाणपत्र (मैन्युअल रूप से इंस्टॉल किया गया, या `*.your-network.com` को कवर करने वाला) सक्रिय है, तो Cloudways अलग-अलग मैप किए गए कस्टम डोमेन के लिए Let's Encrypt प्रमाणपत्र जारी नहीं करेगा। इसे ऐसे मानक Let's Encrypt प्रमाणपत्र से बदलें जो केवल मुख्य नेटवर्क डोमेन (`your-network.com`, `www.your-network.com`) को कवर करता हो और `WU_CLOUDWAYS_EXTRA_DOMAINS` से सभी वाइल्डकार्ड प्रविष्टियाँ हटाएँ। फिर डोमेन मैपिंग दोबारा शुरू करें (या अगली का इंतज़ार करें) और इंटीग्रेशन प्रति-डोमेन प्रमाणपत्रों का अनुरोध करेगा।

### डोमेन नहीं जोड़ा गया {#domain-not-added}
- किसी भी त्रुटि संदेश के लिए Ultimate Multisite लॉग जाँचें
- सत्यापित करें कि डोमेन पहले से Cloudways में जोड़ा नहीं गया है
- सुनिश्चित करें कि आपका Cloudways प्लान आपके द्वारा जोड़े जा रहे डोमेन की संख्या का समर्थन करता है
