---
title: 'पाठ ३: तुमचे नेटवर्क सेट करणे'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# धडा ३: तुमचे नेटवर्क सेट करणे {#lesson-3-setting-up-your-network}

आता प्रत्यक्ष काम करण्याची वेळ आहे. या धड्यात तुम्ही Ultimate Multisite इन्स्टॉल कराल आणि FitSite नेटवर्कचा पाया तयार कराल. इथे घेतलेला प्रत्येक निर्णय फिटनेस या विशिष्ट क्षेत्राच्या (niche) गरजेनुसार केला आहे.

## आपण कुठे थांबलो होतो {#where-we-left-off}

आम्ही फिटनेस स्टुडिओला आपले विशिष्ट क्षेत्र (niche) म्हणून निवडले आणि ही संधी योग्य आहे याची खात्री केली. आता आपण या कल्पनेला एका कार्यरत प्लॅटफॉर्ममध्ये रूपांतरित करणार आहोत.

## होस्टिंगची निवड करणे {#choosing-your-hosting}

तुमच्यासाठी होस्टिंगची निवड एका विशिष्ट क्षेत्रासाठी (niche platform) खूप महत्त्वाची आहे, केवळ एका वेबसाइटसाठी नाही. तुम्ही फक्त एक साइट होस्ट करत नाहीयेत—तुम्ही एक नेटवर्क होस्ट करत आहात, जे डझनभर किंवा शेकडो साइट्सपर्यंत वाढेल.

### काय पाहावे {#what-to-look-for}

- **WordPress Multisite सपोर्ट**: सर्व होस्ट्स मल्टीसाइट व्यवस्थित हाताळत नाहीत.
- **Wildcard SSL**: सबडोमेन-आधारित नेटवर्कसाठी हे आवश्यक आहे.
- **स्केलेबल रिसोर्सेस**: तुम्हाला स्थलांतर (migrate) न करता वाढण्यासाठी जागा हवी आहे.
- **Ultimate Multisite इंटिग्रेशन**: ऑटोमॅटिक डोमेन मॅपिंग आणि SSL मुळे खूप मोठा operacional effort वाचतो.

### शिफारस केलेला दृष्टिकोन {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) या यादीतील होस्ट निवडा. हे होस्ट Ultimate Multisite सोबत तपासले गेले आहेत आणि डोमेन मॅपिंग व SSL ऑटोमेशनसाठी तुम्हाला आवश्यक असलेले इंटिग्रेशन्स देतात.

FitSite साठी, आम्ही सबडोमेन कॉन्फिगरेशन वापरणार आहोत. याचा अर्थ असा की ग्राहक साइट्स सुरुवातीला `studioname.fitsite.com` या स्वरूपात दिसतील, त्यानंतर ते ऐच्छिकपणे त्यांचा स्वतःचा डोमेन मॅप करू शकतील.

## WordPress Multisite इन्स्टॉल करणे {#installing-wordpress-multisite}

जर तुमच्याकडे आधीच WordPress Multisite इन्स्टॉलेशन नसेल:

१. तुमच्या होस्टिंग प्रदात्यावर WordPress इन्स्टॉल करा.
२. [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) या मार्गदर्शकाचे अनुसरण करा.
३. जेव्हा विचारले जाईल, तेव्हा **subdomain** कॉन्फिगरेशन निवडा.

:::tip सबडोमेन का?
सबडोमेनमुळे प्रत्येक ग्राहक साइटला स्वतःचा वेगळा पत्ता (`studio.fitsite.com`) मिळतो, न की एक पाथ (`fitsite.com/studio`). तुमच्या ग्राहकांसाठी हे अधिक व्यावसायिक आहे आणि यामुळे परमालिंक (permalink) संघर्ष टाळता येतो. सखोल तुलना करण्यासाठी [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) पहा.
:::

## Ultimate Multisite इन्स्टॉल करणे {#installing-ultimate-multisite}

खालील गोष्टी करण्यासाठी [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) या मार्गदर्शकाचे अनुसरण करा:

१. प्लगइन नेटवर्क-व्यापी अपलोड आणि सक्रिय करा.
२. [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) चालवा.

सेटअप विजार्ड दरम्यान, FitSite या विशिष्ट क्षेत्राची (niche) आठवण ठेवा:

- **Currency**: तुमच्या फिटनेस स्टुडिओच्या ग्राहकांकडून वापरली जाणारी चलन (currency) सेट करा.
- **Company name**: "FitSite" (किंवा तुम्ही निवडलेले ब्रँड नाव).
- **Company logo**: तुमचा ब्रँड लोगो अपलोड करा — हा लोगो इनव्हॉइस आणि ईमेलवर दिसतो.

## फिटनेस क्षेत्रासाठी कॉन्फिगर करणे {#configuring-for-the-fitness-niche}

Ultimate Multisite इन्स्टॉल केल्यानंतर, ही विशिष्ट क्षेत्राशी (niche-specific) संबंधित कॉन्फिगरेशन निवडा:

### सामान्य सेटिंग्ज (General Settings) {#general-settings}

**Ultimate Multisite > Settings** येथे जा आणि खालील गोष्टी कॉन्फिगर करा:

- **Site name**: FitSite
- **Default role**: Administrator — फिटनेस स्टुडिओ मालकांना त्यांच्या साइटच्या कंटेंटवर पूर्ण नियंत्रण हवे असते.
- **Registration**: वापरकर्ता नोंदणी (user registration) सक्षम करा जेणेकरून स्टुडिओ मालक स्वतःची नोंदणी करू शकतील.

### ईमेल कॉन्फिगरेशन (Email Configuration) {#email-configuration}

तुमच्या सिस्टीमचे ईमेल तुमच्या विशिष्ट क्षेत्राच्या (niche) भाषेतील असले पाहिजेत. **Ultimate Multisite > Settings > Emails** येथे जा आणि खालीलप्रमाणे बदल करा:

- सामान्य "your new site" भाषेऐवजी फिटनेस-विशिष्ट संदेश वापरा.
- उदाहरणादाखल स्वागत विषय (subject): "तुमची फिटनेस स्टुडिओ वेबसाइट तयार आहे"
- उदाहरणादाखल स्वागत मजकूर (body): त्यांच्या स्टुडिओचा, क्लासेसचा आणि त्यांच्या फिटनेस साइटची सुरुवात कशी करावी याचा संदर्भ द्या.

आम्ही हे धडा ८ (Customer Onboarding) मध्ये अधिक सुधारू, पण आताच टोन सेट केल्याने सुरुवातीच्या चाचणी नोंदणी करणाऱ्यांनाही विशिष्ट क्षेत्राशी संबंधित वाटेल.

### डोमेन कॉन्फिगरेशन (Domain Configuration) {#domain-configuration}

जर तुम्ही एखादा सुसंगत होस्टिंग प्रदाता (compatible hosting provider) वापरत असाल, तर आता डोमेन मॅपिंग कॉन्फिगर करा:

१. **Ultimate Multisite > Settings > Domain Mapping** येथे जा.
२. तुमच्या विशिष्ट होस्टसाठी इंटिग्रेशन मार्गदर्शकाचे अनुसरण करा.
३. तपासा की नवीन सबसाइट्सना आपोआप SSL मिळत आहे की नाही.

हे सुनिश्चित करते की पुढील धड्यात जेव्हा आपण टेम्पलेट्स आणि चाचणी साइट्स तयार करण्यास सुरुवात करू, तेव्हा सर्व काही एंड-टू-एंड (end to end) काम करेल.

## FitSite नेटवर्क आतापर्यंत {#the-fitsite-network-so-far}

या धड्याच्या शेवटी, तुमच्याकडे हे आहे:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## या धड्यात आपण काय तयार केले {#what-we-built-this-lesson}

- सबडोमेन मोडमध्ये एक कार्यरत WordPress Multisite इन्स्टॉलेशन.
- FitSite ब्रँडिंगसह इन्स्टॉल आणि कॉन्फिगर केलेले Ultimate Multisite.
- वाढणाऱ्या नेटवर्कसाठी होस्टिंग आणि SSL सेटअप.
- तुमच्या होस्टिंग प्रदात्यासाठी कॉन्फिगर केलेले डोमेन मॅपिंग.
- पहिल्या दिवसापासूनच विशिष्ट क्षेत्राशी संबंधित ईमेल टोन स्थापित केला.

---

**पुढील:** [Lesson 4: Building Niche Templates](lesson-4-templates) — येथे आपण अशा साइट टेम्पलेट्स तयार करू जे फिटनेस स्टुडिओ मालकांना खरोखर वापरायला आवडतील.
