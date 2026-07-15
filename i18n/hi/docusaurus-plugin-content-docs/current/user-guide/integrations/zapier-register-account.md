---
title: Zapier के ज़रिए Account पंजीकृत करें
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# इवेंट: Zapier के ज़रिए Account पंजीकृत करें

लेख [Ultimate Multisite को Zapier के साथ एकीकृत करना](zapier.md) में, हमने चर्चा की थी कि triggers और events के आधार पर Ultimate Multisite के भीतर अलग-अलग कार्रवाइयाँ करने के लिए Zapier का उपयोग कैसे करें। इस लेख में, हम दिखाएँगे कि आप 3rd party अनुप्रयोगों को कैसे एकीकृत कर सकते हैं। हम डेटा के स्रोत के रूप में Google Sheets का उपयोग करेंगे और Account पंजीकृत करने के लिए जानकारी Ultimate Multisite को भेजेंगे।

Zapier कनेक्ट करने से पहले, **Ultimate Multisite > Settings > API & Webhooks** पर जाएँ और पुष्टि करें कि API सक्षम है। जब Zapier Ultimate Multisite Account credentials माँगे, तो इस स्क्रीन से API Key और API Secret कॉपी करें।

![API Key, API Secret, और Enable API विकल्पों के साथ API और Webhooks settings](/img/admin/settings-api-webhooks.png)

सबसे पहले, आपको अपने Google Drive के अंतर्गत एक **Google Sheet** बनानी होगी। सुनिश्चित करें कि आप हर कॉलम को सही तरह से परिभाषित करें, ताकि बाद में डेटा को आसानी से मैप कर सकें।

Google sheet बनाने के बाद, आप अपने Zapier account में लॉग इन कर सकते हैं और zap बनाना शुरू कर सकते हैं।

**"App event"** के खोज field के अंतर्गत **"Google Sheets"** चुनें


फिर "**Event** " field के लिए "**New spreadsheet row** " चुनें और "**Continue** " दबाएँ

अगला चरण आपसे एक **Google Account** चुनने के लिए कहेगा जहाँ **Google Sheet** सहेजी गई है। इसलिए बस सुनिश्चित करें कि सही google account निर्दिष्ट है।


**"Set up trigger** " के अंतर्गत, आपको google spreadsheet और worksheet चुनकर निर्दिष्ट करनी होगी, जिसका आप उपयोग करेंगे और जहाँ से डेटा आएगा। बस उन्हें भरें और "**Continue** " दबाएँ

इसके बाद "**test your trigger** " करना है, ताकि सुनिश्चित हो सके कि आपकी google sheet सही तरह से कनेक्ट है।

यदि आपका परीक्षण सफल है, तो आपको अपनी spreadsheets से कुछ मान दिखाने वाला परिणाम दिखाई देना चाहिए। आगे बढ़ने के लिए "**Continue** " पर क्लिक करें।

अगला चरण दूसरी कार्रवाई सेट करना है, जो Ultimate Multisite में Account बनाएगी या पंजीकृत करेगी। खोज field में "**Ultimate Multisite(2.0.2)** " चुनें


"**Event** " field के अंतर्गत, "**Register an Account in Ultimate Multisite** " चुनें, फिर "**Continue** " बटन पर क्लिक करें।

"**Set up an action** " के अंतर्गत, आपको ग्राहक डेटा, memberships, products आदि के लिए उपलब्ध अलग-अलग fields दिखाई देंगे। आप अपनी google sheet के अंतर्गत मानों को मैप कर सकते हैं और उन्हें उचित field में असाइन कर सकते हैं, जहाँ उन्हें नीचे स्क्रीनशॉट में दिखाए अनुसार भरा जाना चाहिए।


मानों को मैप करने के बाद, आप कार्रवाई का परीक्षण कर सकते हैं।
