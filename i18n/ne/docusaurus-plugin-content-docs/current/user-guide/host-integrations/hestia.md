---
title: हेस्टिया कन्ट्रोल प्यानल एकीकरण
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# हेस्टिया कन्ट्रोल प्यानल एकीकरण

यो गाइडले अल्टीमेट मल्टिसिटेको हेस्टिया एकीकरण कसरी सेट गर्ने भन्ने बारे बताउँछ, जसले गर्दा तपाईंको नेटवर्कमा नक्सा गरिएका डोमेनहरू स्वचालित रूपमा Hestia मा वेब डोमेन एलायस (Web Domain Aliases) को रूपमा थपिने (र हटाउने) प्रक्रिया हुन्छ।

- हेस्टिया CLI सन्दर्भ: v-add-web-domain-alias / v-delete-web-domain-alias
- आधिकारिक REST API डकुमेन्टेशन: https://hestiacp.com/docs/server-administration/rest-api.html

## यसले के गर्छ {#what-it-does}
- अल्टीमेट मल्टिसिटेमा कुनै डोमेन नक्सा गरिएपछि, यो एकीकरण Hestia API लाई कल गरेर निम्न काम गर्छ:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- जब डोमेन मैपिंग हटाउँदा, यसले निम्न चलाउँछ:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- डोमेन मैपिंग सेटिङहरूमा तपाईंको "Auto-create www subdomain" सेटिङ अनुसार 'www.' एलायस थप्ने वा हटाउने विकल्प पनि हुन्छ।

## पूर्वतयारी {#prerequisites}
- पहिले नै Hestia Web Domain भएको हुनुपर्छ जुन तपाईंको वर्डप्रेस इन्स्टलेसनमा सिधै इंगित गरिरहेको छ। एकीकरणले यस आधारभूत डोमेनमा एलायसहरू जोड्ने काम गर्छ।
- Hestia API पहुँच सक्षम गरिएको हुनुपर्छ। तपाईं पासवर्ड वा API ह्याश/टोकन प्रयोग गरेर प्रमाणित गर्न सक्नुहुन्छ।

API पहुँच र प्रमाणीकरण विवरण सक्षम गर्न हेस्टियाको REST API डकुमेन्टेशन हेर्नुहोस्:
https://hestiacp.com/docs/server-administration/rest-api.html

## कन्फिगरेशन (Wizard → Integrations → Hestia) {#configuration-wizard--integrations--hestia}
निम्न मानहरू प्रदान गर्नुहोस्:

- `WU_HESTIA_API_URL` (अनिवार्य)
  - बेस API एन्डपॉइन्ट, सामान्यतया `https://your-hestia-host:8083/api/` हुन्छ।
- `WU_HESTIA_API_USER` (अनिवार्य)
  - API आदेशहरूका लागि प्रयोग गरिने Hestia प्रयोगकर्ता नाम (अक्सर `admin` हुन्छ)।
- `WU_HESTIA_API_PASSWORD` वा `WU_HESTIA_API_HASH` (कमसेकम एक)
  - प्रमाणीकरणको लागि एउटा विधि छान्नुहोस्: पासवर्ड वा API हैश/टोकन।
- `WU_HESTIA_ACCOUNT` (अनिवार्य)
  - Hestia मा रहेको वेब डोमेनको खाता (मालिक); यो CLI को पहिलो तर्क हो।
- `WU_HESTIA_WEB_DOMAIN` (अनिवार्य)
  - तपाईंको वर्डप्रेसलाई चलाइरहेको विद्यमान Hestia वेब डोमेन (अलिअसीहरू यहाँ जोडिनेछन्)।
- `WU_HESTIA_RESTART` (वैकल्पिक; डिफाल्ट `yes`)
  - अलिअसी परिवर्तन गरेपछि सेवाहरू पुनः सुरु/रिलोड गर्ने कि नगर्ने भन्ने कुरा।

तपाईं यी कन्स्ट्यान्टहरूलाई `wp-config.php` मा इन्जेक्ट गर्न सक्नुहुन्छ, वा तिनीहरूलाई आफैले परिभाषित गर्न सक्नुहुन्छ।

## सेटअप प्रमाणित गर्ने {#verifying-setup}
- विजार्डको "Testing" चरणमा, प्लगइन API मार्फत `v-list-web-domains <WU_HESTIA_ACCOUNT> json` को कल गर्छ। सफलता प्रतिक्रियाले कनेक्टिविटी र प्रमाणीकरण पुष्टि गर्दछ।
- डोमेन नक्सा (mapping) गरेपछि, Hestia मा जाँच गर्नुहोस्: Web > बेस डोमेन > Aliases. तपाईंले नयाँ अलिअसी थपिएको देख्नुहुनेछ।

## नोटहरू र सुझावहरू {#notes--tips}
- `WU_HESTIA_WEB_DOMAIN` पहिले नै मौजूद हुनुपर्छ र `WU_HESTIA_ACCOUNT` को स्वामित्वमा हुनुपर्छ।
- यदि SSL आवश्यक छ भने, प्रमाणपत्रहरू Hestia मा व्यवस्थापन गर्नुहोस्। यो एकीकरणले अहिले अलिअसीहरू मात्र ह्यान्डल गर्दछ।
- तपाईंको डोमेन नक्सा "www subdomain" सेटिङ अनुसार प्लगइनले `www.<domain>` थप्न वा हटाउन पनि सक्छ।

## उदाहरण API कल (cURL) {#example-api-call-curl}
तल एउटा अवधारणात्मक उदाहरण छ (तपाईंको वातावरण अनुसार मिलाउनुहोस्)। सही प्यारामिटरहरूको लागि आधिकारिक डकुमेन्ट हेर्नुहोस्।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (or &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (alias to add)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

डिलीट गर्न, `cmd=v-delete-web-domain-alias` र उस्तै तर्कहरू प्रयोग गर्नुहोस्।

## समस्या निवारण (Troubleshooting) {#troubleshooting}
- API बाट HTTP त्रुटि: जाँच गर्नुहोस् कि `WU_HESTIA_API_URL` पहुँचयोग्य छ र यसमा `/api` समावेश छ।
- प्रमाणीकरण त्रुटिहरू (Auth errors): `WU_HESTIA_API_USER` र `WU_HESTIA_API_PASSWORD` वा `WU_HESTIA_API_HASH` मध्ये कुनै एक कन्फर्म गर्नुहोस्।
- लगहरूमा “Missing account/base domain” देखिनु: Hestia मा `WU_HESTIA_ACCOUNT` र `WU_HESTIA_WEB_DOMAIN` सेट गरिएको छ र वैध छन् भनेर सुनिश्चित गर्नुहोस्।

## सन्दर्भ (References) {#references}
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
