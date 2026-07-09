---
title: Zapier मार्फत Account नोंदणी करा
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Event: Zapier द्वारे Account नोंदणी करा {#event-register-an-account-via-zapier}

[Ultimate Multisite ला Zapier सोबत एकत्रित करणे](zapier.md) या लेखात, आम्ही triggers आणि events च्या आधारे Ultimate Multisite मध्ये विविध कृती करण्यासाठी Zapier कसे वापरावे याबद्दल चर्चा केली. या लेखात, तुम्ही 3rd party applications कसे integrate करू शकता ते आम्ही दाखवू. आम्ही डेटाचा स्रोत म्हणून Google Sheets वापरू आणि Account नोंदणी करण्यासाठी माहिती Ultimate Multisite कडे पाठवू.

Zapier जोडण्यापूर्वी, **Ultimate Multisite > Settings > API & Webhooks** येथे जा आणि API सक्षम आहे याची पुष्टी करा. Zapier Ultimate Multisite Account credentials विचारेल तेव्हा या स्क्रीनवरून API Key आणि API Secret कॉपी करा.

![API Key, API Secret आणि Enable API पर्यायांसह API आणि Webhooks सेटिंग्ज](/img/admin/settings-api-webhooks.png)

प्रथम, तुम्हाला तुमच्या Google Drive अंतर्गत एक **Google Sheet** तयार करणे आवश्यक आहे. प्रत्येक स्तंभ योग्यरित्या परिभाषित केल्याची खात्री करा, जेणेकरून तुम्ही नंतर डेटा सहजपणे मॅप करू शकाल.

Google sheet तयार केल्यानंतर, तुम्ही तुमच्या Zapier account मध्ये log in करून zap तयार करणे सुरू करू शकता.

**"App event"** साठी शोध फील्डखाली **"Google Sheets"** निवडा


मग "**Event** " फील्डसाठी "**New spreadsheet row** " निवडा आणि "**Continue** " दाबा

पुढील टप्प्यात तुम्हाला **Google Account** निवडण्यास सांगितले जाईल जिथे **Google Sheet** जतन केले आहे. त्यामुळे फक्त योग्य google account निर्दिष्ट केले आहे याची खात्री करा.


**"Set up trigger** " अंतर्गत, तुम्हाला डेटा जिथून येणार आहे ती google spreadsheet आणि worksheet निवडून निर्दिष्ट करावी लागेल. ते भरून "**Continue** " दाबा

पुढे तुमचा google sheet योग्यरित्या जोडलेला आहे याची खात्री करण्यासाठी "**test your trigger** " आहे.

तुमची चाचणी यशस्वी असल्यास, तुम्हाला तुमच्या spreadsheets मधील काही मूल्ये दाखवणारा निकाल दिसेल. पुढे जाण्यासाठी "**Continue** " क्लिक करा.

पुढील टप्पा म्हणजे Ultimate Multisite मध्ये Account तयार किंवा नोंदणी करणारी दुसरी कृती सेट करणे. शोध फील्डमध्ये "**Ultimate Multisite(2.0.2)** " निवडा


"**Event** " फील्ड अंतर्गत, "**Register an Account in Ultimate Multisite** " निवडा आणि नंतर "**Continue** " बटण क्लिक करा.

"**Set up an action** " अंतर्गत, तुम्हाला ग्राहक डेटा, सदस्यत्वे, उत्पादने इत्यादींसाठी उपलब्ध विविध फील्ड दिसतील. खालील screenshot मध्ये दाखवल्याप्रमाणे तुम्ही तुमच्या google sheet अंतर्गत मूल्ये मॅप करून ती ज्या योग्य फील्डमध्ये भरली पाहिजेत त्यांना assign करू शकता.


मूल्ये मॅप केल्यानंतर, तुम्ही action चाचणी करू शकता.
