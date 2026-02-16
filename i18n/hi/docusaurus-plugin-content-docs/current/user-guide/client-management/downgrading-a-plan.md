---
title: प्लान को डाउनग्रेड करना
sidebar_position: 7
_i18n_hash: dc3ac67048002b04bfb952a01cf289c9
---
# प्लान डाउनग्रेड करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite वर्जन 2.x के बारे में है।**_

प्लान या सब्सक्रिप्शन डाउनग्रेड करना एक आम काम है जो आपके क्लाइंट्स तब कर सकते हैं जब उनका बजट सीमित हो या उन्हें लगे कि अपनी subsite चलाने के लिए उन्हें ज़्यादा resources की ज़रूरत नहीं है।

## प्लान कैसे डाउनग्रेड करें

आपके क्लाइंट्स कभी भी अपना प्लान डाउनग्रेड कर सकते हैं। इसके लिए उन्हें अपने subsite admin dashboard में लॉग इन करना होगा और अपने account page पर **Change** बटन पर क्लिक करना होगा।

![Account page जिसमें membership के नीचे Change बटन दिख रहा है](/img/admin/memberships-list.png)

**Change** बटन पर क्लिक करने के बाद, user/client checkout page पर पहुंच जाएगा जहां वे अपनी सब्सक्रिप्शन बदलने के लिए नया प्लान चुन सकते हैं।

![Checkout page जिसमें डाउनग्रेड के लिए प्लान के विकल्प दिख रहे हैं](/img/admin/memberships-list.png)

इस उदाहरण में, हम प्लान को **Premium** से **Free** में डाउनग्रेड कर रहे हैं।

आगे बढ़ने के लिए user को बस **Complete Checkout** बटन पर क्लिक करना होगा। इसके बाद वे account page पर वापस आ जाएंगे जहां membership में होने वाले बदलाव के बारे में एक pending message दिखेगा। ये बदलाव customer के **अगले billing cycle** में लागू होंगे।

![Account page जिसमें pending membership change का message दिख रहा है](/img/admin/memberships-list.png)

### जब कोई user अपना प्लान डाउनग्रेड करता है तो क्या होता है

यह जानना ज़रूरी है कि प्लान डाउनग्रेड करने से user की subsite की मौजूदा settings में कोई बदलाव नहीं होता।

यह site template को अपने आप नहीं बदलता क्योंकि site template बदलने से subsite पूरी तरह मिट जाएगी और reset हो जाएगी। यह अनावश्यक data loss से बचने के लिए है। इसलिए disk space, themes, plugins आदि सब वैसे ही रहेंगे, सिवाय posts के।

हम समझते हैं कि आपकी मुख्य चिंता हर प्लान के लिए तय की गई limits और quotas होगी, लेकिन हमें यह भी सोचना होगा कि अगर हम user की subsite की कोई भी setting delete या बदलते हैं तो इससे उन्हें कितना नुकसान हो सकता है।

प्लान में तय limit से ज़्यादा posts के लिए, आपके पास 3 विकल्प हैं: **Posts को वैसे ही रखें**, **Posts को trash में भेजें**, या **Posts को draft में भेजें**। आप इसे Ultimate Multisite settings में configure कर सकते हैं।

![Ultimate Multisite settings में post limit exceed होने पर मिलने वाले विकल्प](/img/config/settings-sites.png)

### पेमेंट का क्या होता है

वर्जन 2.0 में, proration के मामले में पेमेंट में किसी adjustment की ज़रूरत नहीं होती।

ऐसा इसलिए क्योंकि system मौजूदा membership का **billing cycle पूरा होने का इंतज़ार करता है** और उसके बाद ही नया plan/membership लागू होता है। नई membership की नई billing राशि अगले billing cycle में अपने आप apply और charge हो जाएगी।
