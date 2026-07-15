---
title: API अन्त्यो दर्ता गर्नुहोस्
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# अल्टीमेट मल्टिसिट रजिस्टर API एन्डपॉइन्ट

यस ट्युटोरियलमा, तपाईंले आफ्नो नेटवर्कमा नयाँ ग्राहकको लागि सम्पूर्ण ऑनबोर्डिङ प्रक्रिया बनाउनका लागि Ultimate Multisite /register API एन्डपॉइन्ट कसरी प्रयोग गर्ने र यसलाई Zapier मार्फत कसरी गर्न सकिन्छ भन्ने कुरा सिक्नुहुनेछ।

यो एन्डपॉइन्ट POST विधि प्रयोग गर्दछ र यो URL `_**https://yoursite.com/wp-json/wu/v2/register**_` बाट बोलाइन्छ। यस कलमा, तपाईंको नेटवर्क भित्र ४ प्रक्रियाहरू निष्पादित हुन्छन्:

  * नयाँ WordPress प्रयोगकर्ता वा उसको User ID मार्फत पहिचान गरिने नयाँ प्रयोगकर्ता सिर्जना गरिन्छ।

  * Ultimate Multisite मा नयाँ ग्राहक वा उसको Customer ID मार्फत पहिचान गरिने नयाँ ग्राहक सिर्जना गरिन्छ।

  * WordPress नेटवर्कमा नयाँ साइट सिर्जना गरिन्छ।

  * अन्तमा, Ultimate Multisite मा नयाँ सदस्यता सिर्जना गरिन्छ।

यस प्रक्रियाका लागि, तपाईंलाई आफ्नो API क्रेडेंशियल्स चाहिन्छ। तिनीहरू प्राप्त गर्नको लागि, आफ्नो नेटवर्क एडमिन प्यानेलमा जानुहोस्, **Ultimate Multisite > Settings** मा नेभिगेट गर्नुहोस् > **API & Webhooks**, र API सेटिङ सेक्सन हेर्नुहोस्।

![Ultimate Multisite मा API सेटिङ सेक्सन](/img/config/settings-api.png)

यहाँ API सेटिङ पेजको पूर्ण दृश्य छ:

![API सेटिङ्सको पूर्ण पेज](/img/config/settings-api-full.png)

**Enable API** चयन गर्नुहोस् र आफ्नो API क्रेडेंशियल्स प्राप्त गर्नुहोस्।

अब, हामी एन्डपॉइन्ट अन्वेषण गरौं र त्यसपछि Zapier मा एक दर्ता कार्य (registration action) सिर्जना गरौं।

## एन्डपॉइन्ट बडी प्यारामिटरहरू {#endpoint-body-parameters}

एन्डपॉइन्टमा पठाउनुपर्ने न्यूनतम जानकारीको बारेमा हेरौं। यस लेखको अन्त्यमा, तपाईंले पूरा कल पाउनुहुनेछ।

### ग्राहक (Customer) {#customer}

यो User र Ultimate Multisite ग्राहक सिर्जना गर्ने प्रक्रियाका लागि आवश्यक जानकारी हो:

"customer_id" : integer

तपाईंको नेटवर्कमा सिर्जना गरिएको ग्राहक ID पठाउन सम्भव छ। यदि यो सबमिट गरिएन भने, तलको जानकारी प्रयोग गरेर नयाँ ग्राहक र नयाँ WordPress प्रयोगकर्ता बनाइनेछ। प्रयोगकर्ता ID पनि ग्राहक ID जस्तै यसरी पठाइने हुन सक्छ।

"customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", },

### **सदस्यता (Membership)** {#membership}

यस वस्तुभित्र हामीलाई आवश्यक पर्ने एकमात्र जानकारी सदस्यताको स्थिति हो।

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" मध्ये एक }

### **उत्पादनहरू (Products)** {#products}

उत्पादनहरूलाई तपाईंको नेटवर्कबाट १ वा सोभन्दा बढी उत्पादन ID भएको एरे दिइन्छ। ध्यान दिनुहोस्, यो endpoint ले उत्पादनहरू सिर्जना गर्दैन। उत्पादन सिर्जना गर्ने endpoint बारे राम्रोसँग बुझ्नका लागि Ultimate Multisite को documentation हेर्नुहोस्।

**"products" : [1,2],**

### भुक्तानी (Payment) {#payment}

सदस्यता जस्तै, हामीलाई केवल स्थिति चाहिन्छ।

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" मध्ये एक }**

### साइट (Site) {#site}

र शरीर बन्द गर्नका लागि, हामीलाई साइटको URL र शीर्षक चाहिन्छ, दुवै Site वस्तुभित्र।

**"site" : { "site_url" : "string", "site_title" : "string" }**

पंजीकरण endpoint को फिर्ताले नयाँ सिर्जना गरिएको सदस्यता जानकारी भएको एरे दिनेछ।

## Zapier मा कार्य (action) सिर्जना गर्ने {#creating-an-action-in-zapier}

यो नयाँ र अझ बलियो खाता सिर्जना endpoint को परिचयसँगै तपाईंले Zapier मा नयाँ action पनि प्रयोग गर्न सक्नुहुन्छ।

नयाँ संस्करणको Zapier ले केही नयाँ कुराहरू दिन्छ भन्ने बारे तपाईंलाई थाहा छ? यहाँ थप जान्नुहोस्। (लिंक?)

### कार्य सिर्जना गर्ने {#creating-an-action}

Zapier प्रयोग गरेर registration endpoint कसरी प्रयोग गर्ने भनेर राम्रोसँग देखाउनको लागि, हामी Google Forms सँग एउटा integration बनाउनेछौं। यो form भर्न र जानकारी form को answer sheet मा सुरक्षित हुने हरेक पटक, Ultimate Multisite नेटवर्कमा नयाँ membership सिर्जना गरिनेछ।

Google Forms मा, नेटवर्कमा नयाँ membership सिर्जना गर्न आवश्यक न्यूनतम fields भएको एक form बनाउनुहोस्।

<!-- Screenshot unavailable: Google Forms form with fields for creating a new membership -->

अब Zapier मा, एउटा नयाँ Zap बनाउनुहोस् र जहाँ data सुरक्षित गरिएको छ त्यसको spreadsheet मार्फत Google मा बनाएको form लाई connect गर्नुहोस्।

<!-- Screenshot unavailable: Zapier trigger configuration connecting to Google Forms spreadsheet -->

भयो! Google Forms form लाई Zapier सँग जोडिन्छ र नेटवर्कसँग integrate गर्न तयार हुन्छ। अब Trigger बाट हुने Action मा जाउँ, जुन Google Forms भर्न हरेक पटक ट्रिगर हुन्छ।

नयाँ Ultimate Multisite app पत्ता लगाउनुहोस् र त्यसलाई select गर्नुहोस्। यस प्रकारको Zap को लागि Register option छान्नुहोस्।

<!-- Screenshot unavailable: Zapier action selection showing Ultimate Multisite app with Register option -->

यो पहिलो चरणपछि, यो Zapसँग जोडिने account छान्नुहोस्।<!-- Screenshot unavailable: Zapier account connection step for Ultimate Multisite -->

यो सम्पूर्ण प्रक्रियाको सबैभन्दा संवेदनशील भाग हो। हामीले Google Forms बाट आएका fields लाई यस लेखको अघिल्लो खण्डमा देखाइएको register endpoint का लागि आवश्यक न्यूनतम fields सँग मिलाउनुपर्छ।

यस उदाहरणमा, हामीलाई username, email, password, name र वेबसाइटको URL कन्फिगर गर्न मात्रै पर्ने हुन्छ। बाँकी कुरा पहिले नै तय गरिएको छ ताकि यस Google Forms मा उत्पन्न गरिएका सबै memberships एउटै product र status pattern पालना गरुन्।

### सम्पूर्ण एन्डपॉइन्ट प्यारामिटरहरू {#complete-endpoint-parameters}

यहाँ पूरा कल (call) र केही पनि हुन सक्ने फिल्डहरूको सबै सम्भावनाहरू दिइएका छन्।

"customer_id" : integer, "customer" : { "user_id" : integer "username" : "string", "password" : "string", "email" : "string", }, "membership" : { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "cancelled" मध्ये कुनै एक, "date_expiration" : "string", "date_trial_end" : "string", "date_activated" : "string", "date_renewed" : "string", "date_cancellation" : "string", "date_payment_plan_completed": "string", }, "products" : [1,2], "duration" : "string", "duration_unit" : "string", "discount_code" : "string", "auto_renew" : "boolean", "country" : "string", "currency" : "string", "payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" मध्ये कुनै एक }, "payment_method" : { "gateway" : "string", "gateway_customer_id" : "string", "gateway_subscription_id" : "string", "gateway_payment_id" : "string", }, "site" : { "site_url" : "string", "site_title" : "string", "publish" : "boolean", "template_id" : "string", }
