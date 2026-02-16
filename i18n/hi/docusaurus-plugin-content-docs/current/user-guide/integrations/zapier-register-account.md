---
title: Zapier के माध्यम से खाता पंजीकृत करें
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# इवेंट: Zapier के ज़रिए अकाउंट रजिस्टर करें

[Ultimate Multisite को Zapier के साथ इंटीग्रेट करना](zapier.md) लेख में हमने देखा कि Zapier का इस्तेमाल करके triggers और events के आधार पर Ultimate Multisite में अलग-अलग actions कैसे करें। इस लेख में हम दिखाएंगे कि आप third-party applications को कैसे इंटीग्रेट कर सकते हैं। हम Google Sheets को डेटा सोर्स के तौर पर इस्तेमाल करेंगे और जानकारी Ultimate Multisite को भेजकर एक अकाउंट रजिस्टर करेंगे।

सबसे पहले, आपको अपने Google Drive में एक **Google Sheet** बनानी होगी। हर column को सही तरीके से define करें ताकि बाद में डेटा को आसानी से map कर सकें।

![ग्राहक डेटा के लिए columns वाली Google Sheet](/img/admin/webhooks-list.png)Google Sheet बनाने के बाद, आप अपने Zapier अकाउंट में लॉग इन करें और zap बनाना शुरू करें।

![Zap बनाने के लिए Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** के सर्च फ़ील्ड में **"Google Sheets"** चुनें

![App event के रूप में Google Sheets चुनना](/img/admin/webhooks-list.png)

फिर "**Event**" फ़ील्ड में "**New spreadsheet row**" चुनें और "**Continue**" पर क्लिक करें

![Zapier में New spreadsheet row event चुनना](/img/admin/webhooks-list.png)अगले स्टेप में आपसे वह **Google Account** चुनने को कहा जाएगा जहाँ **Google Sheet** सेव है। बस यह सुनिश्चित करें कि सही Google अकाउंट चुना गया है।

![Google Sheet के लिए Google Account चुनना](/img/admin/webhooks-list.png)

**"Set up trigger"** में, आपको वह Google spreadsheet और worksheet चुनना और specify करना होगा जिससे डेटा आएगा। इन्हें भरें और "**Continue**" पर क्लिक करें

![Spreadsheet और worksheet चुनने के साथ trigger सेट अप करें](/img/admin/webhooks-list.png)अगला स्टेप है "**test your trigger**" ताकि यह पक्का हो सके कि आपकी Google Sheet सही तरीके से कनेक्ट है।

![Zapier में test your trigger स्टेप](/img/admin/webhooks-list.png)अगर आपका टेस्ट सफल रहा, तो आपको रिज़ल्ट में अपनी spreadsheet की कुछ values दिखेंगी। आगे बढ़ने के लिए "**Continue**" पर क्लिक करें।

![Spreadsheet values दिखाता सफल trigger टेस्ट](/img/admin/webhooks-list.png)अगला स्टेप है दूसरा action सेट अप करना जो Ultimate Multisite में अकाउंट बनाएगा या रजिस्टर करेगा। सर्च फ़ील्ड में "**Ultimate Multisite(2.0.2)**" चुनें

![Action app के रूप में Ultimate Multisite चुनना](/img/admin/webhooks-list.png)

"**Event**" फ़ील्ड में, "**Register an Account in Ultimate Multisite**" चुनें और फिर "**Continue**" बटन पर क्लिक करें।

![Register an Account in Ultimate Multisite action event](/img/admin/webhooks-list.png)"**Set up an action**" में, आपको customer data, memberships, products आदि के लिए अलग-अलग fields दिखेंगे। आप अपनी Google Sheet की values को map कर सकते हैं और उन्हें सही field में assign कर सकते हैं जैसा नीचे screenshot में दिखाया गया है।

![Google Sheet values को Ultimate Multisite fields में map करना](/img/admin/webhooks-list.png)

Values map करने के बाद, आप action को टेस्ट कर सकते हैं।

![Register account Zapier action का टेस्ट करना](/img/admin/webhooks-list.png)
