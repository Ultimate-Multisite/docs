---
title: PayPal सेट करणे
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway सेट करणे (v2)

_**महत्त्वाची सूचना: हा लेख Ultimate Multisite आवृत्ती 2.x साठी आहे.**_

तुम्ही आमच्या payment settings पेजवर चार पैकी कोणत्याही पेमेंट पद्धती सक्रिय करू शकता: Stripe, Stripe Checkout, PayPal आणि Manual. या लेखात, आपण **PayPal** सोबत कसे integrate करायचे ते पाहू.

Stripe प्रमाणेच, PayPal हे ऑनलाइन पेमेंटसाठी मोठ्या प्रमाणावर वापरले जाते, विशेषतः WordPress वेबसाइट्सवर. हा लेख तुम्हाला तुमच्या नेटवर्कवर PayPal ला पेमेंट पद्धती म्हणून कसे वापरायचे याबद्दल मार्गदर्शन करेल.

या integration साठी आवश्यक API credentials मिळवण्यासाठी तुमच्याकडे **PayPal Business खाते** असणे आवश्यक आहे.

## तुमच्या नेटवर्कवर PayPal सक्षम करणे

तुमच्या नेटवर्कवर PayPal ला उपलब्ध पेमेंट पद्धती म्हणून सक्षम करण्यासाठी, **Ultimate Multisite > Settings > Payments** टॅबवर जा आणि PayPal च्या बाजूला असलेल्या बॉक्सवर टिक करा.

![सक्रिय payment gateways मध्ये PayPal सक्षम करणे](/img/config/settings-payment-gateways.png)

## PayPal API credentials मिळवणे

PayPal payment gateway म्हणून सक्षम केल्यानंतर, तुम्हाला PayPal API **Username**, PayPal API **Password** आणि PayPal API **Signature** साठीची फील्ड्स भरणे आवश्यक आहे.

तुम्ही हे तुमच्या PayPal [Live](https://www.paypal.com/home) किंवा [Sandbox](https://www.sandbox.paypal.com/home) खात्यात लॉग इन करून मिळवू शकता.

(लक्षात ठेवा की तुम्ही पेमेंट तपासण्यासाठी आणि gateway योग्यरित्या सेट केले आहे का ते पाहण्यासाठी **sandbox mode** वापरू शकता. फक्त संबंधित विभाग टॉगल करा.)

![PayPal API credentials फील्ड्स आणि sandbox mode टॉगल](/img/config/settings-payment-gateways.png)

तुमच्या PayPal खात्यासाठी API Signature किंवा Certificate credentials मागवण्यासाठी:

  1. तुमच्या [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) वर जा.

  2. **API access** विभागात, **Update** वर क्लिक करा.  
![PayPal Account Settings मध्ये API access विभाग](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** अंतर्गत, **Manage API credentials** वर क्लिक करा.  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * जर तुम्ही आधीच API Signature किंवा Certificate तयार केले असेल, तर तुम्हाला अशा पेजवर पुनर्निर्देशित केले जाईल जिथे तुम्ही तुमचे credentials शोधू शकता.

     * _**टीप:** जर तुम्हाला तुमचे PayPal खाते सत्यापित करण्यास सांगितले गेले, तर स्क्रीनवरील सूचनांचे अनुसरण करा._

  4. खालीलपैकी _एक_ पर्याय निवडा, नंतर **Agree and Submit** वर क्लिक करा.

     * **Request API Signature** – API Signature प्रमाणीकरणासाठी निवडा.

     * **Request API Certificate** – API Certificate प्रमाणीकरणासाठी निवडा.

  5. PayPal तुमचे API credentials खालीलप्रमाणे तयार करते:  
![PayPal ने तयार केलेले API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** मध्ये API Username, API Password आणि Signature समाविष्ट आहे, जे कधीही कालबाह्य होत नाही. अतिरिक्त सुरक्षिततेसाठी ही मूल्ये डिफॉल्टनुसार लपवलेली असतात. ती चालू आणि बंद करण्यासाठी **Show/Hide** वर क्लिक करा. पूर्ण झाल्यावर, **Done** वर क्लिक करा.

     * **API Certificate credentials** मध्ये API Username, API Password आणि Certificate समाविष्ट आहे, जे तीन वर्षांनंतर आपोआप कालबाह्य होते. API Certificate तुमच्या डेस्कटॉपवर सेव्ह करण्यासाठी **Download Certificate** वर क्लिक करा.

बस्स, तुमचे PayPal payment integration पूर्ण झाले!

PayPal settings बद्दल तुम्हाला काही प्रश्न असल्यास, तुम्ही PayPal च्या [Help Center](https://www.paypal.com/br/smarthelp/home) चा संदर्भ घेऊ शकता.
