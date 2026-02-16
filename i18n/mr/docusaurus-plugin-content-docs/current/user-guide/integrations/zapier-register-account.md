---
title: Zapier द्वारे खाते नोंदणी करा
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# इव्हेंट: Zapier द्वारे खाते नोंदणी करा

[Ultimate Multisite चे Zapier सोबत एकत्रीकरण](zapier.md) या लेखात, आम्ही Ultimate Multisite मध्ये ट्रिगर्स आणि इव्हेंट्सच्या आधारे विविध क्रिया करण्यासाठी Zapier कसे वापरावे याबद्दल चर्चा केली. या लेखात, आम्ही तुम्हाला थर्ड पार्टी अॅप्लिकेशन्स कसे जोडायचे ते दाखवू. आम्ही Google Sheets चा डेटा स्रोत म्हणून वापर करू आणि खाते नोंदणी करण्यासाठी ती माहिती Ultimate Multisite ला पाठवू.

प्रथम, तुम्हाला तुमच्या Google Drive अंतर्गत एक **Google Sheet** तयार करावी लागेल. प्रत्येक कॉलम व्यवस्थित परिभाषित केल्याची खात्री करा जेणेकरून नंतर डेटा मॅप करणे सोपे जाईल.

![ग्राहक डेटासाठी कॉलम्स असलेली Google Sheet](/img/admin/webhooks-list.png)Google Sheet तयार केल्यानंतर, तुम्ही तुमच्या Zapier खात्यात लॉग इन करू शकता आणि zap तयार करणे सुरू करू शकता.

![Zap तयार करण्यासाठी Zapier डॅशबोर्ड](/img/admin/webhooks-list.png)**"App event"** साठी शोध फील्डमध्ये **"Google Sheets"** निवडा

![App event म्हणून Google Sheets निवडणे](/img/admin/webhooks-list.png)

त्यानंतर "**Event**" फील्डसाठी "**New spreadsheet row**" निवडा आणि "**Continue**" वर क्लिक करा

![Zapier मध्ये New spreadsheet row इव्हेंट निवडणे](/img/admin/webhooks-list.png)पुढील पायरीत तुम्हाला **Google Sheet** जिथे सेव्ह आहे ते **Google Account** निवडायला सांगितले जाईल. त्यामुळे योग्य Google खाते निवडल्याची खात्री करा.

![Google Sheet साठी Google Account निवडणे](/img/admin/webhooks-list.png)

**"Set up trigger"** अंतर्गत, तुम्हाला डेटा येणार असलेली Google स्प्रेडशीट आणि वर्कशीट निवडावी आणि निर्दिष्ट करावी लागेल. ती माहिती भरा आणि "**Continue**" वर क्लिक करा

![स्प्रेडशीट आणि वर्कशीट निवडीसह ट्रिगर सेट अप](/img/admin/webhooks-list.png)पुढे "**test your trigger**" करा जेणेकरून तुमची Google Sheet व्यवस्थित जोडली गेली आहे याची खात्री होईल.

![Zapier मध्ये तुमचा ट्रिगर टेस्ट करा पायरी](/img/admin/webhooks-list.png)तुमची टेस्ट यशस्वी झाल्यास, तुम्हाला तुमच्या स्प्रेडशीटमधील काही व्हॅल्यूज दाखवणारे रिझल्ट दिसेल. पुढे जाण्यासाठी "**Continue**" वर क्लिक करा.

![स्प्रेडशीट व्हॅल्यूज दाखवणारी यशस्वी ट्रिगर टेस्ट](/img/admin/webhooks-list.png)पुढील पायरी म्हणजे Ultimate Multisite मध्ये खाते तयार करणारी किंवा नोंदणी करणारी दुसरी अॅक्शन सेट करणे. शोध फील्डमध्ये "**Ultimate Multisite(2.0.2)**" निवडा

![अॅक्शन अॅप म्हणून Ultimate Multisite निवडणे](/img/admin/webhooks-list.png)

"**Event**" फील्ड अंतर्गत, "**Register an Account in Ultimate Multisite**" निवडा आणि नंतर "**Continue**" बटणावर क्लिक करा.

![Register an Account in Ultimate Multisite अॅक्शन इव्हेंट](/img/admin/webhooks-list.png)"**Set up an action**" अंतर्गत, तुम्हाला ग्राहक डेटा, सदस्यत्वे, उत्पादने इत्यादींसाठी वेगवेगळी फील्ड्स दिसतील. तुम्ही तुमच्या Google Sheet मधील व्हॅल्यूज मॅप करू शकता आणि खालील स्क्रीनशॉटमध्ये दाखवल्याप्रमाणे त्यांना योग्य फील्डमध्ये असाइन करू शकता.

![Google Sheet व्हॅल्यूज Ultimate Multisite फील्ड्सशी मॅप करणे](/img/admin/webhooks-list.png)

व्हॅल्यूज मॅप केल्यानंतर, तुम्ही अॅक्शन टेस्ट करू शकता.

![Register account Zapier अॅक्शन टेस्ट करणे](/img/admin/webhooks-list.png)
