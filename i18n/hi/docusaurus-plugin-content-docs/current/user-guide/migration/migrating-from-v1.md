---
title: V1 से माइग्रेट करना
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 से माइग्रेशन

## Ultimate Multisite अपने मूल 1.x रिलीज़ फैमिली से 2.x रिलीज़ फैमिली में बदल गया है।

Ultimate Multisite वर्जन 2.0 और उसके बाद के वर्जन पूरी तरह से नए सिरे से लिखे गए हैं, यानी पुराने और नए वर्जन में बहुत कम समानता है। इसलिए, 1.x से 2.x में अपग्रेड करते समय, आपके डेटा को एक ऐसे फॉर्मेट में माइग्रेट करना होगा जिसे नए वर्जन समझ सकें।

अच्छी बात यह है कि Ultimate Multisite 2.0+ में **एक माइग्रेटर पहले से मौजूद है** जो पुराने वर्जन के डेटा को पहचानकर उसे नए फॉर्मेट में बदल सकता है। यह माइग्रेशन वर्जन 2.0+ के **Setup Wizard** के दौरान होता है।

इस लेसन में हम जानेंगे कि माइग्रेटर कैसे काम करता है, अगर कोई समस्या आए तो क्या करें, और इस प्रक्रिया में आने वाली परेशानियों को कैसे ठीक करें।

_**महत्वपूर्ण: वर्जन 1.x से वर्जन 2.0 में अपग्रेड करने से पहले कृपया अपनी साइट के डेटाबेस का बैकअप जरूर लें**_

## पहले कदम

पहला कदम है plugin की .zip फाइल डाउनलोड करना और अपने network admin dashboard पर वर्जन 2.0 इंस्टॉल करना।

[वर्जन 2.0 इंस्टॉल और एक्टिवेट](../getting-started/installing-ultimate-multisite.md) करने के बाद, सिस्टम अपने आप पहचान लेगा कि आपकी Multisite पुराने वर्जन पर चल रही है और आपको plugin पेज के ऊपर यह मैसेज दिखाई देगा।

_**नोट:** अगर आपके Multisite पर Ultimate Multisite 1.x इंस्टॉल है, तो आपको मौजूदा plugin को अभी डाउनलोड किए गए वर्जन से बदलने का विकल्प मिलेगा। कृपया **Replace current with uploaded** पर क्लिक करें।_

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

अगले पेज पर आपको बताया जाएगा कि वर्जन 1.x के साथ कौन-कौन से पुराने add-ons इंस्टॉल हैं। इसमें यह भी जानकारी होगी कि आपका मौजूदा वर्जन 2.0 के साथ compatible है या माइग्रेशन के बाद आपको add-on का अपग्रेडेड वर्जन इंस्टॉल करना होगा।

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

जब आप आगे बढ़ने के लिए तैयार हों, तो **Visit the Installer to finish the upgrade** बटन पर क्लिक करें।

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

इसके बाद आप installation wizard पेज पर पहुंच जाएंगे जहां कुछ स्वागत संदेश होंगे। अगले पेज पर जाने के लिए बस **Get Started** पर क्लिक करें।

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** पर क्लिक करने के बाद, आप Pre-install Checks पेज पर पहुंचेंगे। यहां आपको आपकी System Information और WordPress installation दिखाई देगी, साथ ही यह भी बताया जाएगा कि यह **Ultimate Multisite की जरूरतों** को पूरा करती है या नहीं।

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

अगला कदम है अपनी Ultimate Multisite license key डालना और plugin को एक्टिवेट करना। इससे यह सुनिश्चित होगा कि सभी फीचर्स, जिसमें add-ons भी शामिल हैं, आपकी साइट पर उपलब्ध होंगे।

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

अपनी key डालने के बाद, **Agree & Activate** पर क्लिक करें।

License एक्टिवेशन के बाद, अगले पेज पर **Install** पर क्लिक करके असल इंस्टॉलेशन शुरू कर सकते हैं। इससे वर्जन 2.0 के काम करने के लिए जरूरी फाइलें और डेटाबेस अपने आप बन जाएंगे।

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## अब, माइग्रेशन की बारी

माइग्रेटर में एक सुरक्षा फीचर है जो आपकी पूरी multisite को चेक करता है ताकि यह पक्का हो सके कि आपका सारा Ultimate Multisite डेटा बिना किसी समस्या के माइग्रेट हो सकता है। इस प्रक्रिया को शुरू करने के लिए **Run Check** बटन पर क्लिक करें।

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

चेक पूरा होने के बाद, दो संभावनाएं हैं: रिजल्ट **error के साथ** हो सकता है या **बिना error के**।

### Error के साथ

अगर आपको error मैसेज मिलता है, तो आपको हमारी support टीम से संपर्क करना होगा ताकि वे error ठीक करने में आपकी मदद कर सकें। टिकट बनाते समय **error log जरूर शामिल करें**। आप log डाउनलोड कर सकते हैं या contact our support team लिंक पर क्लिक कर सकते हैं। इससे आपके पेज के दाईं तरफ help widget खुलेगा जिसमें फील्ड्स पहले से भरे होंगे और description में error logs भी शामिल होंगे।

_**चूंकि सिस्टम को error मिला है, आप वर्जन 2.0 में माइग्रेट नहीं कर पाएंगे। जब तक error ठीक नहीं हो जाता, आप वर्जन 1.x पर वापस जाकर अपना network चला सकते हैं।**_

### बिना Error के

अगर सिस्टम को कोई error नहीं मिलता, तो आपको success मैसेज दिखाई देगा और नीचे एक **Migrate** बटन होगा जिससे आप माइग्रेशन आगे बढ़ा सकते हैं। इस पेज पर आपको आगे बढ़ने से पहले अपने डेटाबेस का बैकअप लेने की याद दिलाई जाएगी, जिसकी हम पुरजोर सिफारिश करते हैं। अगर आपने बैकअप ले लिया है तो **Migrate** पर क्लिक करें।

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

और बस इतना ही करना है!

अब आप या तो Wizard setup जारी रखकर अपने network पर logo और दूसरी चीजें अपडेट कर सकते हैं, या सीधे Ultimate Multisite वर्जन 2.0 के मेन्यू और इसके नए इंटरफेस को explore करना शुरू कर सकते हैं। आगे बढ़ें और मजे करें।
