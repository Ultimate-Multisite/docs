---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) पर पहली नज़र

_**ध्यान दें: यह फ़ीचर या लेख उन्नत उपयोगकर्ताओं के लिए है।**_

**Webhook** एक ऐसा तरीका है जिससे Ultimate Multisite जैसा कोई ऐप या सॉफ़्टवेयर अन्य एप्लिकेशन को रियल-टाइम जानकारी भेज सकता है। Webhook डेटा या payloads को अन्य एप्लिकेशन में तुरंत पहुँचाता है, जिसका मतलब है कि आपको **डेटा तुरंत मिलता है।**

यह तब उपयोगी होता है जब आपको किसी event के trigger होने पर Ultimate Multisite से किसी अन्य CRM या सिस्टम में कुछ डेटा भेजना हो। उदाहरण के लिए, जब भी कोई नया उपयोगकर्ता खाता बनता है, आपको उपयोगकर्ता का नाम और ईमेल पता किसी mailing list में भेजना हो।

## Webhook कैसे बनाएं

Webhook बनाने के लिए, अपने network admin dashboard पर जाएं। **Ultimate Multisite > Webhooks > Add New Webhook** पर क्लिक करें।

![Add New Webhook बटन के साथ Webhooks सूची पेज](/img/admin/webhooks-list.png)

नया webhook बनाते समय आपसे **Name, URL,** और **Event** जैसी जानकारी मांगी जाएगी। आप अपने webhook के लिए कोई भी नाम रख सकते हैं। सबसे महत्वपूर्ण फ़ील्ड URL और Event हैं।

![Name, URL, और Event फ़ील्ड के साथ नया webhook फ़ॉर्म](/img/admin/webhooks-list.png)

URL वह **endpoint या गंतव्य** है जहाँ Ultimate Multisite **payload या डेटा** भेजेगा। यह वह एप्लिकेशन है जो डेटा प्राप्त करेगा।

Zapier सबसे आम समाधान है जिसका उपयोग लोग 3rd party एप्लिकेशन के साथ integration को आसान बनाने के लिए करते हैं। Zapier जैसे प्लेटफ़ॉर्म के बिना, आपको डेटा को पकड़ने और प्रोसेस करने के लिए मैन्युअल रूप से एक custom function बनाना होगा। **Ultimate Multisite webhook को Zapier के साथ कैसे उपयोग करें** इस पर यह लेख देखें।

इस लेख में, हम webhook कैसे काम करता है और Ultimate Multisite में उपलब्ध events की बुनियादी अवधारणा को समझेंगे। हम [requestbin.com](https://requestbin.com/) नामक एक 3rd party साइट का उपयोग करेंगे। यह साइट हमें बिना कोई coding किए एक endpoint बनाने और payload को पकड़ने की सुविधा देती है। _**अस्वीकरण: यह केवल हमें दिखाएगा कि डेटा प्राप्त हो गया है।**_ Payload पर कोई प्रोसेसिंग या किसी प्रकार की कार्रवाई नहीं होगी।

[requestbin.com](https://requestbin.com/) पर जाएं और Create Request Bin पर क्लिक करें।

![RequestBin वेबसाइट Create Request Bin बटन](/img/admin/webhooks-list.png)

उस बटन पर क्लिक करने के बाद, यदि आपके पास पहले से खाता है तो यह आपको लॉग इन करने के लिए कहेगा या साइन अप करने के लिए। यदि आपके पास पहले से खाता है तो यह आपको सीधे उनके dashboard पर ले जाएगा। उनके dashboard पर, आपको तुरंत वह endpoint या URL दिखाई देगा जिसका उपयोग आप अपना Ultimate Multisite webhook बनाने में कर सकते हैं।

![Endpoint URL दिखाता RequestBin dashboard](/img/admin/webhooks-list.png)

आगे बढ़ें और URL कॉपी करें और Ultimate Multisite पर वापस जाएं। Endpoint को URL फ़ील्ड में डालें और dropdown से एक event चुनें। इस उदाहरण में, हम **Payment Received** चुनेंगे।

यह event तब trigger होता है जब कोई उपयोगकर्ता भुगतान करता है। सभी उपलब्ध events, उनका विवरण और payloads पेज के नीचे सूचीबद्ध हैं। Webhook को सहेजने के लिए **Add New Webhook** बटन पर क्लिक करें।

![Payment Received event के साथ कॉन्फ़िगर किया गया Webhook](/img/admin/webhooks-list.png)

अब हम endpoint पर एक test event भेज सकते हैं ताकि देख सकें कि हमने जो webhook बनाया है वह काम कर रहा है या नहीं। हम यह अपने बनाए webhook के नीचे **Send Test Event** पर क्लिक करके कर सकते हैं।

![Webhook के नीचे Send Test Event विकल्प](/img/admin/webhooks-list.png)

यह एक पुष्टि विंडो दिखाता है जो बताती है कि test सफल रहा।

![Webhook test event सफल होने की पुष्टि](/img/admin/webhooks-list.png)

अब यदि हम _Requestbin_ साइट पर वापस जाएं तो देखेंगे कि payload प्राप्त हो गया है जिसमें कुछ test डेटा है।

![RequestBin प्राप्त webhook payload डेटा दिखा रहा है](/img/admin/webhooks-list.png)

यह webhook और endpoints के काम करने का बुनियादी सिद्धांत है। यदि आप एक custom endpoint बनाना चाहते हैं, तो आपको Ultimate Multisite से प्राप्त डेटा को प्रोसेस करने के लिए एक custom function बनाना होगा।
