---
title: Zapier मार्फत खाता दर्ता गर्नुहोस्
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# कार्यक्रम: Zapier मार्फत खाता दर्ता गर्ने {#event-register-an-account-via-zapier}

लेख [Integrating Ultimate Multisite with Zapier](zapier.md) मा, हामीले ट्रिगर र इभेन्टहरूको आधारमा Ultimate Multisite भित्र विभिन्न कार्यहरू गर्नका लागि Zapier कसरी प्रयोग गर्ने भन्ने बारे छलफल गरेका थियौं। यस लेखमा, हामी तपाईंलाई तेस्रो पक्षका एपहरू (3rd party applications) कसरी एकीकृत (integrate) गर्न सकिन्छ भनेर देखाउनेछौं। हामी डेटाको स्रोतको रूपमा Google Sheets प्रयोग गर्नेछौं र खाता दर्ता गर्न Ultimate Multisite मा जानकारी पठाउनेछौं।

Zapier जोड्नुअघि, **Ultimate Multisite > Settings > API & Webhooks** मा जानुहोस् र API सक्रिय (enabled) छ कि छैन भनेर पुष्टि गर्नुहोस्। जब Zapier ले Ultimate Multisite खाता विवरणको लागि API Key र API Secret सोध्नेछ, तब यो स्क्रिनबाट ती कुराहरू प्रतिलिपि (copy) गर्नुहोस्।

![API and Webhooks settings with API Key, API Secret, and Enable API options](/img/admin/settings-api-webhooks.png)

सबैभन्दा पहिले, तपाईंको Google Drive मा एउटा **Google Sheet** बनाउनुहोस्। पछि डेटा मिलाउन सजिलो होस् भनेर प्रत्येक स्तम्भ (column) लाई राम्ररी परिभाषित गर्नुहोस्।

Google sheet बनाएपछि, तपाईं आफ्नो Zapier खातामा लगइन गर्न र एक zap बनाउन सुरु गर्न सक्नुहुन्छ।

**"App event"** को लागि खोज क्षेत्र अन्तर्गत **"Google Sheets"** चयन गर्नुहोस्।

त्यसपछि "**Event** " फिल्डका लागि "**New spreadsheet row** " चयन गर्नुहोस् र "**Continue** " मा क्लिक गर्नुहोस्।

अर्को चरणले तपाईंलाई त्यो Google Account छान्ने कुरा सोध्नेछ जहाँ **Google Sheet** सुरक्षित गरिएको छ। त्यसैले सही Google account निर्दिष्ट भएको सुनिश्चित गर्नुहोस्।

**"Set up trigger** " अन्तर्गत, तपाईंले डेटा कहाँबाट आउँछ भन्ने प्रयोग गर्नका लागि जुन Google spreadsheet र वर्कशीट प्रयोग गर्ने हो, त्यसलाई चयन गर्न र निर्दिष्ट गर्नुपर्नेछ। बस ती भर्न जानुहोस् र "**Continue** " मा क्लिक गर्नुहोस्।

अर्को काम भनेको **"test your trigger** " गर्नु हो ताकि तपाईंको Google sheet सही रूपमा जोडिएको छ कि छैन भनेर सुनिश्चित गर्न सकियोस्।

यदि तपाईंको परीक्षण सफल भएमा, तपाईंले आफ्नो स्प्रेडशीटबाट केही मानहरू देखाउने परिणाम देख्नुपर्छ। अगाडि बढ्नका लागि "**Continue** " मा क्लिक गर्नुहोस्।

अर्को चरण भनेको Ultimate Multisite मा खाता बनाउने वा दर्ता गर्ने दोस्रो कार्य सेट गर्नु हो। खोज (search) फिल्डमा "**Ultimate Multisite(2.0.2)** " चयन गर्नुहोस्।

"**Event**" फिल्ड अन्तर्गत, "**Register an Account in Ultimate Multisite** " चयन गर्नुहोस् र त्यसपछि "**Continue** " बटन क्लिक गर्नुहोस्।

"**Set up an action**" अन्तर्गत, तपाईंले ग्राहक डेटा, सदस्यताहरू (memberships), उत्पादनहरू आदिका लागि विभिन्न फिल्डहरू देख्नुहुनेछ। तपाईं आफ्नो Google Sheet मा भएका मानहरूलाई यी फिल्डहरूसँग मिलाउन (map) सक्नुहुन्छ र तलको स्क्रिनशटमा देखाजस्तै तिनीहरू सही फिल्डहरूमा भर्नका लागि तोक्न सक्नुहुन्छ।

मानहरू मिलाइसकेपछि, तपाईंले त्यो कार्य परीक्षण गर्न सक्नुहुन्छ।
