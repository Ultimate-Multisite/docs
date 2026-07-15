---
title: 'पाठ 3: अपना नेटवर्क सेट करना'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# Lesson 3: अपनी नेटवर्क की स्थापना करना

अब निर्माण का समय है। इस पाठ में आप Ultimate Multisite इंस्टॉल करेंगे और FitSite नेटवर्क की नींव को कॉन्फ़िगर करेंगे। यहाँ लिया गया हर फैसला फिटनेस के विशिष्ट क्षेत्र (niche) को ध्यान में रखकर किया गया है।

## हमने कहाँ छोड़ा था {#where-we-left-off}

हमने फिटनेस स्टूडियो को अपना विशिष्ट क्षेत्र चुना और इस अवसर को मान्य किया। अब हम उस विचार को एक काम करने वाले प्लेटफॉर्म में बदलेंगे।

## अपनी होस्टिंग चुनना {#choosing-your-hosting}

एक विशिष्ट प्लेटफॉर्म के लिए आपकी होस्टिंग का चुनाव एक सिंगल वेबसाइट की तुलना में कहीं ज़्यादा मायने रखता है। आप सिर्फ एक साइट होस्ट नहीं कर रहे हैं—आप एक ऐसा नेटवर्क होस्ट कर रहे हैं जो दर्जनों या सैकड़ों साइटों तक बढ़ने वाला है।

### क्या देखना है {#what-to-look-for}

- **WordPress Multisite सपोर्ट**: सभी होस्ट मल्टीसाइट को अच्छी तरह से हैंडल नहीं करते
- **Wildcard SSL**: सबडोमेन-आधारित नेटवर्क के लिए यह ज़रूरी है
- **स्केलेबल रिसोर्सेज**: आपको बिना माइग्रेट किए बढ़ने के लिए जगह चाहिए
- **Ultimate Multisite इंटीग्रेशन**: ऑटोमेटेड डोमेन मैपिंग और SSL से काफी ऑपरेशनल प्रयास बचता है

### अनुशंसित तरीका {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) सूची से एक होस्ट चुनें। इन्हें Ultimate Multisite के साथ टेस्ट किया गया है और ये डोमेन मैपिंग और SSL ऑटोमेशन के लिए ज़रूरी इंटीग्रेशन प्रदान करते हैं।

FitSite के लिए, हम सबडोमेन कॉन्फ़िगरेशन का उपयोग करेंगे। इसका मतलब है कि ग्राहक साइटें शुरुआत में `studioname.fitsite.com` के रूप में दिखाई देंगी, इससे पहले कि वे वैकल्पिक रूप से अपना डोमेन मैप करें।

## WordPress Multisite इंस्टॉल करना {#installing-wordpress-multisite}

यदि आपके पास पहले से WordPress Multisite इंस्टॉलेशन नहीं है:

1. अपने होस्टिंग प्रोवाइडर पर WordPress इंस्टॉल करें
2. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) गाइड का पालन करें
3. जब प्रॉम्प्ट किया जाए तो **subdomain** कॉन्फ़िगरेशन चुनें

:::tip सबडोमेन क्यों?
सबडोमेन हर ग्राहक साइट को एक अलग पता (`studio.fitsite.com`) देते हैं, न कि एक पाथ (`fitsite.com/studio`)। यह आपके ग्राहकों के लिए ज़्यादा पेशेवर है और परमालिंक कॉन्फ्लिक्ट से बचाता है। विस्तृत तुलना के लिए [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) देखें।
:::

## Ultimate Multisite इंस्टॉल करना {#installing-ultimate-multisite}

निम्नलिखित गाइड का पालन करें: [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) ताकि आप:

1. प्लगइन को नेटवर्क-वाइड अपलोड और एक्टिवेट कर सकें
2. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) चला सकें

सेटअप विज़ार्ड के दौरान, FitSite niche को ध्यान में रखें:

- **Currency**: उस मुद्रा पर सेट करें जिसका उपयोग आपके फिटनेस स्टूडियो ग्राहक करते हैं
- **Company name**: "FitSite" (या आपका चुना हुआ ब्रांड नाम)
- **Company logo**: अपना ब्रांड लोगो अपलोड करें -- यह इनवॉइस और ईमेल पर दिखाई देगा

## फिटनेस niche के लिए कॉन्फ़िगर करना {#configuring-for-the-fitness-niche}

Ultimate Multisite इंस्टॉल होने के बाद, ये niche-विशिष्ट कॉन्फ़िगरेशन विकल्प चुनें:

### General Settings {#general-settings}

**Ultimate Multisite > Settings** पर जाएँ और कॉन्फ़िगर करें:

- **Site name**: FitSite
- **Default role**: Administrator -- फिटनेस स्टूडियो मालिकों को अपनी साइट सामग्री पर पूरा नियंत्रण चाहिए
- **Registration**: उपयोगकर्ता पंजीकरण सक्षम करें ताकि स्टूडियो मालिक खुद साइन अप कर सकें

### Email Configuration {#email-configuration}

आपके सिस्टम ईमेल को आपके niche की भाषा बोलनी चाहिए। **Ultimate Multisite > Settings > Emails** पर जाएँ और कस्टमाइज़ करें:

- सामान्य "your new site" भाषा को फिटनेस-विशिष्ट मैसेजिंग से बदलें
- उदाहरण स्वागत विषय: "आपकी फिटनेस स्टूडियो वेबसाइट तैयार है"
- उदाहरण स्वागत बॉडी: उनके स्टूडियो, कक्षाओं और उनकी फिटनेस साइट के साथ शुरुआत करने का संदर्भ दें

हम इन्हें पाठ 8 (Customer Onboarding) में और बेहतर करेंगे, लेकिन अभी टोन सेट करने से यह सुनिश्चित होता है कि शुरुआती टेस्ट साइनअप भी niche-specific महसूस हों।

### Domain Configuration {#domain-configuration}

यदि आप एक संगत होस्टिंग प्रोवाइडर का उपयोग कर रहे हैं, तो अभी डोमेन मैपिंग कॉन्फ़िगर करें:

1. **Ultimate Multisite > Settings > Domain Mapping** पर जाएँ
2. अपने विशिष्ट होस्ट के लिए इंटीग्रेशन गाइड का पालन करें
3. यह टेस्ट करें कि नए सबसाइट्स को स्वचालित रूप से SSL मिल रहा है या नहीं

यह सुनिश्चित करता है कि जब हम अगले पाठ में टेम्पलेट और टेस्ट साइट बनाना शुरू करें, तो सब कुछ एंड-टू-एंड काम करे।

## FitSite Network अब तक {#the-fitsite-network-so-far}

इस पाठ के अंत में, आपके पास यह है:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## इस पाठ में हमने क्या बनाया {#what-we-built-this-lesson}

- सबडोमेन मोड में एक काम करने वाला WordPress Multisite इंस्टॉलेशन
- FitSite ब्रांडिंग के साथ Ultimate Multisite इंस्टॉल और कॉन्फ़िगर
- एक बढ़ते नेटवर्क के लिए होस्टिंग और SSL सेट अप
- आपके होस्टिंग प्रोवाइडर के लिए कॉन्फ़िगर किया गया डोमेन मैपिंग
- पहले दिन से ही niche-विशिष्ट ईमेल टोन स्थापित

---

**अगला:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- हम साइट टेम्पलेट बनाएंगे जिनका उपयोग फिटनेस स्टूडियो मालिकों को वास्तव में करना पसंद आएगा।
