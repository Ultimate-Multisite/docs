---
title: Stripe सेट करणे
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway सेट करणे (v2)

_**महत्त्वाची सूचना: हा लेख Ultimate Multisite version 2.x साठी आहे.**_

आमच्या payment settings पेजवर तुम्ही चार पेमेंट पद्धती सक्रिय करू शकता: Stripe, Stripe Checkout, PayPal आणि Manual. या लेखात आपण **Stripe** सोबत integration कसे करायचे ते पाहू.

## Stripe सक्षम करणे

तुमच्या network वर Stripe हे payment gateway म्हणून सक्षम करण्यासाठी, **Ultimate Multisite > Settings > Payments** वर जा आणि Active Payment Gateways विभागात **Stripe** किंवा **Stripe Checkout** च्या बाजूला असलेला toggle चालू करा.

![Active payment gateways मध्ये Stripe सक्षम करणे](/img/config/settings-payment-gateways.png)

### Stripe विरुद्ध Stripe Checkout:

**Stripe:** या पद्धतीमध्ये checkout दरम्यान credit card नंबर टाकण्यासाठी एक जागा दिसेल.

![Checkout दरम्यान Stripe inline credit card फील्ड](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** या पद्धतीमध्ये checkout दरम्यान ग्राहकाला Stripe Checkout पेजवर redirect केले जाईल.

![Checkout दरम्यान Stripe Checkout redirect पेज](/img/config/settings-payment-gateways.png)

तुमच्या Stripe API keys मिळवणे

Stripe payment gateway म्हणून सक्षम केल्यानंतर, तुम्हाला **Stripe Publishable Key** आणि **Stripe Secret Key** साठी फील्ड भरणे आवश्यक आहे. हे तुम्ही तुमच्या Stripe account मध्ये login करून मिळवू शकता.

_**टीप:** payment method व्यवस्थित काम करत आहे का हे तपासण्यासाठी तुम्ही **Sandbox mode** सक्रिय करू शकता._

![Stripe API key फील्ड आणि sandbox mode toggle](/img/config/settings-payment-gateways.png)

तुमच्या Stripe dashboard वर, वरच्या उजव्या कोपऱ्यात **Developers** वर क्लिक करा, आणि नंतर डाव्या menu मध्ये **API Keys** वर क्लिक करा.

![API Keys सह Stripe dashboard Developers विभाग](/img/config/settings-payment-gateways.png)

तुम्ही **Test Data** वापरू शकता (तुमच्या production site वर integration काम करत आहे का हे तपासण्यासाठी) किंवा नाही. हे बदलण्यासाठी, **Viewing test data** toggle वापरा.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Token** column मधून **Publishable key** आणि **Secret key** ची value कॉपी करा आणि Ultimate Multisite Stripe Gateway फील्ड्समध्ये paste करा. नंतर **Save Changes** वर क्लिक करा.

![Stripe publishable आणि secret key values](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings मध्ये Stripe keys paste करणे](/img/config/settings-payment-gateways.png)

## Stripe Webhook सेट करणे

Stripe webhook events पाठवतो जे Ultimate Multisite ला **तुमच्या stripe account** वर कोणतीही घटना घडल्यावर सूचित करतात.

**Developers** वर क्लिक करा आणि नंतर डाव्या menu मधून **Webhooks** निवडा. नंतर उजव्या बाजूला **Add endpoint** वर क्लिक करा.

![Add endpoint button सह Stripe Webhooks पेज](/img/config/settings-payment-gateways.png)

तुम्हाला **Endpoint URL** आवश्यक असेल. Ultimate Multisite आपोआप endpoint URL तयार करतो जो तुम्हाला **Ultimate Multisite Stripe Gateway** विभागातील **Webhook Listener URL** फील्डच्या खाली मिळेल.

![Stripe gateway settings मध्ये Webhook Listener URL फील्ड](/img/config/settings-payment-gateways.png)

Endpoint URL **कॉपी** करा आणि Stripe च्या **Endpoint URL** फील्डमध्ये **paste** करा.

![Stripe webhook setup मध्ये endpoint URL paste करणे](/img/config/settings-payment-gateways.png)

पुढे **Event** निवडणे आहे. या पर्यायाखाली, तुम्हाला फक्त **Select all events** बॉक्स चेक करायचा आहे आणि **Add events** वर क्लिक करायचे आहे. त्यानंतर बदल save करण्यासाठी **Add Endpoint** वर क्लिक करा.

![सर्व events निवडणे आणि Stripe endpoint जोडणे](/img/config/settings-payment-gateways.png)

झालं, तुमचे Stripe payment integration पूर्ण झाले!
