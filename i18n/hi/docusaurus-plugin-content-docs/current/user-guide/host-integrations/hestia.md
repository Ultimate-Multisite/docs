---
title: Hestia Control Panel Integration
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel इंटीग्रेशन

यह गाइड बताती है कि Ultimate Multisite Hestia इंटीग्रेशन को कैसे कॉन्फ़िगर करें, ताकि आपके नेटवर्क में मैप किए गए डोमेन Hestia में Web Domain Aliases के रूप में अपने आप जुड़ें (और हटाए जाएं)।

- Hestia CLI रेफरेंस: v-add-web-domain-alias / v-delete-web-domain-alias
- आधिकारिक REST API डॉक्यूमेंट: https://hestiacp.com/docs/server-administration/rest-api.html

## यह क्या करता है
- जब Ultimate Multisite में कोई डोमेन मैप होता है, तो इंटीग्रेशन Hestia API को कॉल करता है और यह कमांड चलाता है:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- जब कोई डोमेन मैपिंग हटाई जाती है, तो यह चलता है:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping सेटिंग्स में "Auto-create www subdomain" के अनुसार, `www.` alias को जोड़ना/हटाना भी वैकल्पिक रूप से होता है।

## आवश्यकताएं
- एक मौजूदा Hestia Web Domain जो पहले से आपके WordPress इंस्टॉलेशन की ओर पॉइंट करता हो। इंटीग्रेशन इसी बेस डोमेन में aliases जोड़ेगा।
- Hestia API एक्सेस इनेबल हो। आप password या API hash/token में से किसी एक का उपयोग करके authenticate कर सकते हैं।

API एक्सेस इनेबल करने और authentication की जानकारी के लिए Hestia का REST API डॉक्यूमेंट देखें:
https://hestiacp.com/docs/server-administration/rest-api.html

## कॉन्फ़िगरेशन (Wizard → Integrations → Hestia)
निम्नलिखित वैल्यू प्रदान करें:

- `WU_HESTIA_API_URL` (आवश्यक)
  - बेस API endpoint, आमतौर पर `https://your-hestia-host:8083/api/`।
- `WU_HESTIA_API_USER` (आवश्यक)
  - API कमांड के लिए उपयोग होने वाला Hestia यूज़र (अक्सर `admin`)।
- `WU_HESTIA_API_PASSWORD` या `WU_HESTIA_API_HASH` (कम से कम एक)
  - एक authentication तरीका चुनें: password या API hash/token।
- `WU_HESTIA_ACCOUNT` (आवश्यक)
  - Hestia में Web Domain का owner (account); यह CLI का पहला argument है।
- `WU_HESTIA_WEB_DOMAIN` (आवश्यक)
  - मौजूदा Hestia Web Domain जो आपके WordPress को serve करता है (aliases इसी से जुड़ेंगे)।
- `WU_HESTIA_RESTART` (वैकल्पिक; डिफ़ॉल्ट `yes`)
  - alias बदलने के बाद services को restart/reload करना है या नहीं।

आप wizard को इन constants को `wp-config.php` में inject करने दे सकते हैं, या इन्हें मैन्युअली define कर सकते हैं।

## सेटअप की जांच करना
- Wizard के "Testing" स्टेप में, plugin API के ज़रिए `v-list-web-domains <WU_HESTIA_ACCOUNT> json` कॉल करता है। सफल response से connectivity और authentication की पुष्टि होती है।
- डोमेन मैप करने के बाद, Hestia में जांचें: Web > बेस डोमेन > Aliases। आपको नया alias जुड़ा हुआ दिखना चाहिए।

## नोट्स और टिप्स
- सुनिश्चित करें कि `WU_HESTIA_WEB_DOMAIN` पहले से मौजूद है और `WU_HESTIA_ACCOUNT` का owner है।
- अगर SSL ज़रूरी है, तो certificates को Hestia में मैनेज करें। यह इंटीग्रेशन फ़िलहाल सिर्फ़ aliases को हैंडल करता है।
- आपकी Domain Mapping "www subdomain" सेटिंग के अनुसार, plugin `www.<domain>` को भी जोड़/हटा सकता है।

## उदाहरण API Call (cURL)
नीचे एक conceptual उदाहरण है (अपने environment के अनुसार बदलें)। सटीक parameters के लिए आधिकारिक डॉक्यूमेंट देखें।

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (या &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (जोड़ने के लिए alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

delete के लिए, `cmd=v-delete-web-domain-alias` और वही args उपयोग करें।

## समस्या निवारण
- API से HTTP error: जांचें कि `WU_HESTIA_API_URL` accessible है और इसमें `/api` शामिल है।
- Auth errors: `WU_HESTIA_API_USER` और `WU_HESTIA_API_PASSWORD` या `WU_HESTIA_API_HASH` की पुष्टि करें।
- Logs में "Missing account/base domain": सुनिश्चित करें कि `WU_HESTIA_ACCOUNT` और `WU_HESTIA_WEB_DOMAIN` सेट हैं और Hestia में valid हैं।

## संदर्भ
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI Reference (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
