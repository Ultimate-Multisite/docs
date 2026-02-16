---
title: Zapier एकीकरण
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite को Zapier के साथ जोड़ना

हमारे एक आर्टिकल में हमने [Webhooks](webhooks.md) के बारे में बात की थी और यह भी बताया था कि इनका इस्तेमाल थर्ड पार्टी एप्लिकेशन के साथ जुड़ने के लिए कैसे किया जा सकता है।

Webhooks का इस्तेमाल थोड़ा मुश्किल है क्योंकि इसके लिए कोडिंग और payloads को संभालने की एडवांस जानकारी होनी चाहिए। **Zapier** का इस्तेमाल करके आप इस समस्या से बच सकते हैं।

Zapier 5000 से ज़्यादा apps के साथ जुड़ा हुआ है, जिससे अलग-अलग एप्लिकेशन के बीच संपर्क आसान हो जाता है।

आप **Triggers** बना सकते हैं जो आपके network पर कोई event होने पर activate होंगे (जैसे कोई account बनता है और account_create event trigger होता है) या आप बाहरी events के जवाब में अपने network पर **Actions** जनरेट कर सकते हैं (जैसे अपने Ultimate Multisite network में नई account membership बनाना)।

यह संभव है क्योंकि **Ultimate Multisite Zapier के triggers** और actions [REST API](https://developer.ultimatemultisite.com/api/docs/) द्वारा संचालित हैं।

## शुरुआत कैसे करें

सबसे पहले, Zapier की app list में Ultimate Multisite खोजें। या फिर आप [इस लिंक](https://zapier.com/apps/wp-ultimo/integrations) पर क्लिक कर सकते हैं।

अपने dashboard पर जाएं और नया Zap सेट अप करने के लिए बाएं sidebar में **+** **Create Zap** बटन दबाएं।

![Create Zap बटन के साथ Zapier dashboard](/img/admin/webhooks-list.png)

आप Zap creation पेज पर redirect हो जाएंगे।

Search box में "wp ultimo" टाइप करें। **Beta** version option चुनने के लिए क्लिक करें।

![Zapier app list में WP Ultimo खोजना](/img/admin/webhooks-list.png)

हमारी app select करने के बाद, उपलब्ध event चुनें: **New Ultimate Multisite Event**।

![New Ultimate Multisite Event trigger select करना](/img/admin/webhooks-list.png)

अब हमें Zapier को **आपके network** तक पहुंच देनी होगी। **Sign in** पर क्लिक करने से एक नई window खुलेगी जिसमें **API credentials** मांगे जाएंगे।

![API credentials के लिए Zapier Sign in prompt](/img/admin/webhooks-list.png)

अपने network admin panel में जाएं और **Ultimate Multisite > Settings** > **API & Webhooks** पर जाएं और API Settings section देखें।

**Enable API** option select करें क्योंकि यह connection काम करने के लिए ज़रूरी है।

![Ultimate Multisite में Enable API option के साथ API Settings](/img/admin/webhooks-list.png)

API Key और API Secret fields पर **Copy to Clipboard** icon का इस्तेमाल करें और उन values को integration screen पर paste करें।

URL field में, अपने network का पूरा URL डालें, protocol (HTTP या HTTPS) सहित।

![API Key, Secret, और URL fields के साथ Zapier integration screen](/img/admin/webhooks-list.png)

अगले स्टेप पर जाने के लिए **Yes, Continue** बटन पर क्लिक करें। अगर सब कुछ ठीक रहा, तो आपको अपना नया connected account दिखाई देगा! नया trigger बनाने के लिए **Continue** पर क्लिक करें।

## नया Trigger कैसे बनाएं

अब जबकि आपका account connected है, आप उपलब्ध events देख सकते हैं। इस tutorial के लिए हम **payment_received** event चुनेंगे।

![Zapier trigger में payment_received event select करना](/img/admin/webhooks-list.png)

Event select करने के बाद जब आप **continue** पर क्लिक करेंगे, तो एक **test step** दिखाई देगा।

![Trigger के लिए Zapier test step](/img/admin/webhooks-list.png)

इस स्टेज में, Zapier test करेगा कि आपका Zap **उस event के लिए specific payload fetch** कर सकता है या नहीं। भविष्य में इसी type के events में, इसी structure की information भेजी जाएगी।

![Payload के साथ Zapier trigger test सफलतापूर्वक पूरा](/img/admin/webhooks-list.png)

हमारे tutorial में test **सफलतापूर्वक पूरा हुआ** और payload example information return हुई। यह example information actions बनाते समय हमारा मार्गदर्शन करने में उपयोगी होगी। आपका trigger अब बन गया है और अन्य applications से जुड़ने के लिए तैयार है।

## Actions कैसे बनाएं

Actions अन्य triggers की information का इस्तेमाल करके आपके network में नई entries बनाते हैं।

**Action बनाने के स्टेप** में आप Ultimate Multisite **Beta** और **Create Items on Ultimate Multisite** का option चुनेंगे।

![Create Items on Ultimate Multisite के साथ action बनाना](/img/admin/webhooks-list.png)

अगले स्टेप में आप या तो अपना authentication बनाएंगे, जैसा हमने **शुरुआत कैसे करें** में किया था, या पहले से बना हुआ authentication select करेंगे। इस tutorial में हम पहले बनाया गया authentication ही चुनेंगे।

![Zapier action के लिए authentication select करना](/img/admin/webhooks-list.png)

### Action सेट अप करना

यह **action का main स्टेप** है और यहां चीज़ें थोड़ी अलग हैं। पहली information जो आप चुनेंगे वह है **Item**। Item आपके network का **information model** है जैसे **Customers, Payments, Sites, Emails** और अन्य।

![Zapier action के लिए Item type चुनना](/img/admin/webhooks-list.png)

जब आप कोई item select करते हैं, तो form **selected item के लिए required और optional fields दिखाने के लिए बदल जाता है**।

उदाहरण के लिए, जब आप **Customer** item select करते हैं, तो form fields में वह सब कुछ आ जाएगा जो network में नया Customer बनाने के लिए भरना ज़रूरी है।

![Zapier action setup में Customer item fields](/img/admin/webhooks-list.png)

**Required** के रूप में चिह्नित सभी fields भरने और continue पर क्लिक करने के बाद, एक आखिरी screen आपको भरे हुए fields और खाली छोड़े गए fields दिखाएगी।

![भरे और खाली fields दिखाता Zapier action test](/img/admin/webhooks-list.png)

जैसे ही आपका test पूरा होता है और सफल होता है, आपका action configure हो जाता है। यह भी ज़रूरी है कि आप अपने network पर check करें कि आपके action के test से item बना या नहीं।
