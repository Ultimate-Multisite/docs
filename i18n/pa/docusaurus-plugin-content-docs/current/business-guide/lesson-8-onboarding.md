---
title: 'Lesson 8: ਗਾਹਕ ਨੂੰ ਸ਼ਾਮਲ ਕਰਨ ਦੀ ਪ੍ਰਕਿਰਿਆ'
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# Lesson 8: Customer Onboarding (ग्राहक को ऑनबोर्ड करना)

किसी ग्राहक को साइन अप कराना तो बस आधा काम है। अगर वे लॉग इन करते हैं, अभिभूत महसूस करते हैं, और फिर कभी वापस नहीं आते, तो आपने उन्हें खो दिया। यह लेसन वह अनुभव डिज़ाइन करता है जो एक नए साइनअप को एक सक्रिय, जुड़ा हुआ ग्राहक बनाता है।

## Where We Left Off (हम कहाँ थे) {#where-we-left-off}

FitSite पूरी तरह से ब्रांडेड है और इसमें एक काम करने वाला चेकआउट फ्लो भी है। अब हम इस बात पर ध्यान केंद्रित करेंगे कि एक फिटनेस स्टूडियो मालिक साइनअप पूरा करने के बाद और पहली बार अपने नए साइट पर आने के बाद क्या होता है।

## Why Onboarding Matters (ऑनबोर्डिंग क्यों ज़रूरी है) {#why-onboarding-matters}

साइनअप के बाद के पहले 30 मिनट यह तय करते हैं कि ग्राहक रुकेगा या चला जाएगा। एक फिटनेस स्टूडियो मालिक जो:

- लॉग इन करता है और एक ऐसी साइट देखता है जो पहले से ही एक फिटनेस वेबसाइट जैसी दिखती है → रुक जाता है
- ठीक से जानता है कि आगे क्या करना है → रुक जाता है
- एक सामान्य WordPress डैशबोर्ड में खोया हुआ महसूस करता है → चला जाता है

आपकी niche templates (Lesson 4) पहले पॉइंट को संभालते हैं। यह लेसन दूसरे पॉइंट को संभालता है।

## The First Login Experience (पहली बार लॉग इन करने का अनुभव) {#the-first-login-experience}

### Welcome Dashboard Widget (स्वागत डैशबोर्ड विजेट) {#welcome-dashboard-widget}

एक कस्टम डैशबोर्ड विजेट बनाएं जो नए ग्राहकों का स्वागत करे और उन्हें सेटअप के माध्यम से गाइड करे। यह तब प्रमुखता से दिखाई देना चाहिए जब वे पहली बार लॉग इन करें।

**FitSite Quick Start (फिटसाइट क्विक स्टार्ट):**

1. **अपना स्टूडियो का नाम और लोगो जोड़ें** -- Customizer या Site Identity सेटिंग्स का लिंक
2. **अपना क्लास शेड्यूल अपडेट करें** -- सीधे Classes पेज एडिटर का लिंक
3. **अपने ट्रेनर्स जोड़ें** -- Trainers पेज एडिटर का लिंक
4. **अपने संपर्क विवरण सेट करें** -- Contact पेज एडिटर का लिंक
5. **अपनी साइट का पूर्वावलोकन करें** -- फ्रंटएंड का लिंक

हर स्टेप सीधे संबंधित पेज या सेटिंग से जुड़ा होता है। मेनू में कहीं भी ढूंढने की ज़रूरत नहीं।

### Simplify the Dashboard (डैशबोर्ड को सरल बनाना) {#simplify-the-dashboard}

नए ग्राहकों को हर WordPress मेनू आइटम देखने की ज़रूरत नहीं है। इन बातों पर विचार करें:

- उन मेनू आइटम को छिपाना जो फिटनेस साइट प्रबंधन के लिए प्रासंगिक नहीं हैं (जैसे, यदि उपयोग नहीं किया जाता है तो Comments)
- मेनू को पुनर्व्यवस्थित करना ताकि सबसे ज़्यादा इस्तेमाल होने वाले आइटम पहले आएं
- कस्टम मेनू लेबल जोड़ना जो niche के लिए समझ में आएं ("Appearance" के बजाय "Your Studio")

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) ऐडऑन ग्राहकों को क्या दिखाई देगा, इसे नियंत्रित करने में मदद कर सकता है।

## Welcome Email Sequence (स्वागत ईमेल सीक्वेंस) {#welcome-email-sequence}

सिर्फ एक स्वागत ईमेल काफी नहीं है। एक सीक्वेंस सेट करें जो ग्राहकों को उनके पहले सप्ताह में गाइड करे:

### Email 1: Welcome (साइनअप के तुरंत बाद) {#email-1-welcome-immediately-after-signup}

- Subject: "Welcome to FitSite -- your studio website is live"
- Content: लॉग इन लिंक, क्विक स्टार्ट स्टेप्स, हेल्प रिसोर्सेज का लिंक
- Tone: उत्साहित, प्रोत्साहित करने वाला, फिटनेस-विशिष्ट

### Email 2: Quick Wins (दिन 1) {#email-2-quick-wins-day-1}

- Subject: "3 things to do first on your FitSite"
- Content: अपना लोगो जोड़ें, होमपेज हीरो इमेज अपडेट करें, अपना क्लास शेड्यूल जोड़ें
- स्क्रीनशॉट शामिल करें जो ठीक से क्लिक करने की जगह दिखाते हैं

### Email 3: Make It Yours (दिन 3) {#email-3-make-it-yours-day-3}

- Subject: "Make your fitness site stand out"
- Content: रंगों को कस्टमाइज़ करें, ट्रेनर की तस्वीरें जोड़ें, अपनी स्टूडियो की कहानी लिखें
- प्लेटफॉर्म पर बेहतरीन फिटनेस साइट्स के उदाहरणों का लिंक

### Email 4: Go Live (दिन 7) {#email-4-go-live-day-7}

- Subject: "Ready to share your FitSite with the world?"
- Content: साझा करने से पहले क्या सत्यापित करना है इसकी चेकलिस्ट, कस्टम डोमेन कैसे कनेक्ट करें (यदि Growth/Pro पर हैं), सोशल शेयरिंग टिप्स

:::tip Email Automation
इन ईमेल को ट्रिगर करने के लिए [Webhooks](/user-guide/integrations/webhooks) या [Zapier](/user-guide/integrations/zapier) का उपयोग अपनी ईमेल मार्केटिंग प्लेटफॉर्म के माध्यम से करें। यह आपको समय पर अधिक नियंत्रण देता है और आपको जुड़ाव (engagement) को ट्रैक करने की अनुमति देता है।
:::

## Help Resources (सहायता संसाधन) {#help-resources}

niche-specific मदद की सामग्री बनाएं जो उन सवालों का जवाब दे जो फिटनेस स्टूडियो मालिक वास्तव में पूछते हैं:

### Knowledge Base Articles (ज्ञानकोष लेख) {#knowledge-base-articles}

- "अपने क्लास शेड्यूल को कैसे अपडेट करें"
- "ट्रेनर प्रोफाइल जोड़ना और एडिट करना"
- "अपने स्टूडियो के लोगो और रंगों को बदलना"
- "अपना खुद का डोमेन नाम कनेक्ट करना" (Growth/Pro ग्राहकों के लिए)
- "अपनी साइट पर बुकिंग विजेट जोड़ना"

इन्हें गैर-तकनीकी उपयोगकर्ताओं के लिए लिखें। स्क्रीनशॉट का उपयोग करें। WordPress के जार्गन से बचें।

### Video Walkthroughs (वीडियो वॉकथ्रू) {#video-walkthroughs}

छोटे (2-3 मिनट) स्क्रीन रिकॉर्डिंग जो दिखाते हैं:

- पहली बार लॉग इन करना और ओरिएंटेशन
- होमपेज एडिट करना
- क्लास शेड्यूल अपडेट करना
- एक नए ट्रेनर को जोड़ना

इनको पॉलिश प्रोडक्शन होने की ज़रूरत नहीं है। स्पष्ट, मददगार, और niche-specific होना ज़रूरी है।

## The Account Page (खाता पेज) {#the-account-page}

Ultimate Multisite में एक ग्राहक-सामने का [Account Page](/user-guide/client-management/account-page) शामिल है जहाँ ग्राहक अपनी सदस्यता (subscription) प्रबंधित करते हैं। इसे कस्टमाइज़ करें ताकि:

- उनका वर्तमान FitSite प्लान दिखाया जा सके
- फिटनेस-विशिष्ट लाभों के साथ अपग्रेड विकल्प प्रदर्शित हों
- बिलिंग इतिहास और इनवॉइस डाउनलोड प्रदान किए जा सकें
- मदद संसाधनों से लिंक किया जा सके

## Measuring Onboarding Success (ऑनबोर्डिंग सफलता को मापना) {#measuring-onboarding-success}

यह जानने के लिए इन संकेतकों (indicators) को ट्रैक करें कि आपकी ऑनबोर्डिंग काम कर रही है या नहीं:

- **Activation rate**: साइनअप का कितना प्रतिशत वास्तव में पहले सप्ताह के भीतर अपनी साइट को कस्टमाइज़ करता है?
- **First-week logins**: एक नया ग्राहक पहले सप्ताह में कितनी बार लॉग इन करता है?
- **Support tickets from new customers**: उच्च मात्रा का मतलब है कि आपकी ऑनबोर्डिंग में कमियाँ हैं
- **Trial-to-paid conversion**: यदि आप ट्रायल देते हैं, तो कितना प्रतिशत कन्वर्ट होता है?

## The FitSite Network So Far (फिटसाइट नेटवर्क अब तक) {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## What We Built This Lesson (हमने इस लेसन में क्या बनाया) {#what-we-built-this-lesson}

- **एक गाइडेड पहली-लॉगिन अनुभव** जिसमें एक Quick Start विजेट है
- **एक सरल डैशबोर्ड** जो फिटनेस साइट प्रबंधन कार्यों पर केंद्रित है
- **एक स्वागत ईमेल सीक्वेंस** जो ग्राहकों को उनके पहले सप्ताह में गाइड करता है
- **niche-specific मदद संसाधन** जो गैर-तकनीकी फिटनेस स्टूडियो मालिकों के लिए लिखे गए हैं
- **ऑनबोर्डिंग मेट्रिक्स** ताकि अनुभव को ट्रैक और बेहतर बनाया जा सके

---

**Next:** [Lesson 9: Pricing for Profit](lesson-9-pricing) -- हम राजस्व को अधिकतम करने और चर्न (churn) को कम करने के लिए मूल्य निर्धारण रणनीति को परिष्कृत करेंगे।
