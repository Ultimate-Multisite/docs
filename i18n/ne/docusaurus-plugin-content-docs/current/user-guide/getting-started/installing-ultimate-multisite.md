---
title: अल्टीमेट मल्टिसिट इन्स्टल गर्दै
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# अल्टीमेट मल्टिसिट इन्स्टल गर्ने

:::note
यो ट्युटोरियल तपाईंले पहिले नै WordPress Multisite इन्स्टल र कन्फिगर गर्नुभएको मानिएकोमा आधारित छ। कसरी गर्ने भने, WP Beginner को [यस ट्युटोरियल](https://www.wpbeginner.com/glossary/multisite/) हेर्नुहोस्।
:::

## प्लगइन इन्स्टल गर्ने

Ultimate Multisite निःशुल्क रूपमा [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) मा उपलब्ध छ।

तपाईंको **Network Admin Dashboard** बाट, **Plugins → Add New Plugin** मा जानुहोस्।

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (सटीक मिलानका लागि उद्धरण चिह्न प्रयोग गर्नुहोस्) खोज्नुहोस् र यो पहिलो परिणामको रूपमा देखिनेछ। **Install Now** मा क्लिक गर्नुहोस्।

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

एक पटक इन्स्टल भएपछि, सम्पूर्ण नेटवर्कमा प्लगइन सक्रिय गर्न **Network Activate** मा क्लिक गर्नुहोस्।

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

सक्रिय गरेपछि, तपाईं स्वचालित रूपमा सेटअप विझार्ड (Setup Wizard) मा पुनर्निर्देशित हुनुहुनेछ।

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## सेटअप विझार्ड

सेटअप विझार्डले लगभग १० मिनेटमा Ultimate Multisite कन्फिगर गर्न तपाईंलाई मार्गदर्शन गर्नेछ।

### स्वागत (Welcome)

शुरू गर्न **Get Started** मा क्लिक गर्नुहोस्।

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### पूर्व-इन्स्टल जाँचहरू (Pre-install Checks)

यो चरणले Ultimate Multisite को आवश्यकता पूरा गर्छ कि नगर्ने भनेर तपाईंको सिस्टम जानकारी र WordPress इन्स्टलेसन जाँच गर्दछ। यदि सबै राम्रो देखिन्छ भने, **Go to the Next Step** मा क्लिक गर्नुहोस्।

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note नेटवर्क सक्रिय बटन (v2.6.1+)
यदि Ultimate Multisite इंस्टॉल है लेकिन **अभी नेटवर्क सक्रिय नहीं किया गया है** — उदाहरण के लिए, यदि आपने नेटवर्क प्लगइन्स स्क्रीन से **नेटवर्क एक्टिवेट** के बजाय **Activate** (सिंगल-साइट) पर क्लिक किया है — तो प्री-इंस्टॉल चेक स्टेप इसे डिटेक्ट करेगा और आपको एक **Network Activate** बटन दिखाएगा।

**Network Activate** पर क्लिक करने से यह प्लगइन स्वचालित रूप से आपके पूरे मल्टीसाइट नेटवर्क में सक्रिय हो जाता है। एक बार सक्रिय होने के बाद, विज़ार्ड सामान्य रूप से इंस्टॉलेशन चरण पर आगे बढ़ता है। एक्टिवेशन स्थिति ठीक करने के लिए आपको विज़ार्ड छोड़ने की ज़रूरत नहीं है।
:::

### इंस्टॉलेशन

इंस्टॉलर आवश्यक डेटाबेस टेबल बनाएगा और `sunrise.php` फ़ाइल इंस्टॉल करेगा जिसकी Ultimate Multisite को काम करने के लिए ज़रूरत होती है। आगे बढ़ने के लिए **Install** पर क्लिक करें।

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### आपकी कंपनी

अपनी कंपनी की जानकारी भरें और अपनी डिफ़ॉल्ट मुद्रा सेट करें। इस जानकारी का उपयोग आपके WaaS प्लेटफॉर्म में किया जाएगा। पूरा होने पर **Continue** पर क्लिक करें।

![Your Company configuration step](/img/installation/wizard-your-company.png)

### डिफ़ॉल्ट सामग्री

यह स्टेप आपको पहले से परिभाषित टेम्पलेट्स, उत्पादों और अन्य शुरुआती सामग्री को इंस्टॉल करने की अनुमति देता है। Ultimate Multisite की सुविधाओं से परिचित होने का यह एक शानदार तरीका है। डिफ़ॉल्ट सामग्री जोड़ने के लिए **Install** पर क्लिक करें, या यदि आप बिल्कुल शुरू से शुरू करना पसंद करते हैं तो इस स्टेप को छोड़ दें।

![Default content installation step](/img/installation/wizard-default-content.png)

### अनुशंसित प्लगइन्स

वैकल्पिक रूप से अनुशंसित साथी प्लगइन्स इंस्टॉल करें। उन्हें जोड़ने के लिए **Install** पर क्लिक करें या आगे बढ़ने के लिए छोड़ दें।

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### तैयार!

त्यो नै हो! तपाईंको अल्टीमेट मल्टिसिट स्थापना पूरा भयो। अब तपाईं **नेटकष्ट एडमिन ड्यासबोर्ड** बाट आफ्नो वेबसाइटलाई एउटा सेवाको रूपमा बनाउन सुरु गर्न सक्नुहुन्छ।

![सेटअप पूरा - रेडी स्क्रिन](/img/installation/wizard-ready.png)

![अल्टीमेट मल्टिसिट सक्रिय भएको नेटकष्ट एडमिन ड्यासबोर्ड](/img/installation/network-dashboard.png)

अब मजा लिनुहोस्!
