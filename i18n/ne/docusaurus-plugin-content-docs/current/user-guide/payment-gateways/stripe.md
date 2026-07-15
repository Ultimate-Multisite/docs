---
title: स्ट्राइप सेट अप गर्ने
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# स्ट्राइप गेटवे सेटअप गर्ने (v2)

_**महत्वपूर्ण नोट: यो लेख Ultimate Multisite संस्करण २.x मा आधारित छ।**_

तपाईंले हाम्रो भुक्तानी सेटिङ पृष्ठमा चार तरिकाहरूमासम्म भुक्तानी सक्रिय गर्न सक्नुहुन्छ: Stripe, Stripe Checkout, PayPal र म्यानुअल (Manual)। यस लेखमा, हामी **Stripe** सँग कसरी एकीकृत गर्ने हेर्नेछौं।

## स्ट्राइप सक्षम गर्ने {#enabling-stripe}

तपाईंको नेटवर्कमा उपलब्ध भुक्तानी गेटवेको रूपमा Stripe लाई सक्षम गर्न, **Ultimate Multisite > Settings > Payments** मा जानुहोस् र Active Payment Gateways खण्डमा **Stripe** वा **Stripe Checkout** को छेउमा रहेको टगल (toggle) मा टिक गर्नुहोस्।

![Active payment gateways मा Stripe सक्षम गर्ने](/img/config/settings-payment-gateways.png)

### स्ट्राइप बनाम स्ट्राइप चेकआउट: {#stripe-vs-stripe-checkout}

**Stripe:** यो विधिले चेकआउटको समय क्रेडिट कार्ड नम्बर राख्ने ठाउँ देखाउनेछ।

![चेकआउटको समय स्ट्राइप इन्लाइन क्रेडिट कार्ड फिल्ड](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** यो विधिले चेकआउटको समय ग्राहकलाई Stripe Checkout पृष्ठमा पुनर्निर्देशित गर्दछ।

![चेकआउटको समय स्ट्राइप चेकआउट पुनर्निर्देशन पृष्ठ](/img/config/settings-payment-gateways.png)

### आफ्नो स्ट्राइप API keys प्राप्त गर्ने {#setting-up-stripe-webhook}

एक पटक Stripe लाई भुक्तानी गेटवेको रूपमा सक्षम गरिसकेपछि, तपाईंले **Stripe Publishable Key** र **Stripe Secret Key** का लागि फिल्डहरू भर्नुपर्नेछ। तपाईंले यो आफ्नो Stripe खातामा लगइन गरेर प्राप्त गर्न सक्नुहुन्छ।

_**नोट:** भुक्तानी विधि काम गर्छ कि गर्दैन परीक्षण गर्नको लागि तपाईं **Sandbox mode** सक्रिय गर्न सक्नुहुन्छ._

![Stripe API key फिल्ड र Sandbox मोड टगल](/img/config/settings-payment-gateways.png)

तपाईंको Stripe ड्यासबोर्डमा, माथि दायाँ कुनामा **Developers** मा क्लिक गर्नुहोस्, र त्यसपछि बायाँ मेनुमा **API Keys** मा जानुहोस्।

![API Keys सहितको स्ट्राइप ड्यासबोर्डका Developers खण्ड](/img/config/settings-payment-gateways.png)

तपाईंले **Test Data** प्रयोग गर्न सक्नुहुन्छ (यदि यो इन्टिग्रेशन तपाईंको उत्पादन साइटमा काम गरिरहेको छ कि छैन भने परीक्षण गर्नका लागि)। यसलाई परिवर्तन गर्न, **Viewing test data** टगल (toggle) लाई स्विच गर्नुहोस्।

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** र **Secret key** बाट मानहरू **Token** स्तम्भबाट प्रतिलिपि गर्नुहोस् र त्यसलाई Ultimate Multisite Stripe Gateway फिल्डहरूमा पेस्ट गर्नुहोस्। त्यसपछि परिवर्तनहरू **Save Changes** मा क्लिक गर्नुहोस्।

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook सेटअप गर्ने

Stripe ले webhook events पठाउँछ जसले **तपाईंको stripe account** मा कुनै पनि घटना घट्दा Ultimate Multisite लाई जानकारी दिन्छ।

**Developers** मा क्लिक गर्नुहोस् र त्यसपछि बायाँ मेनुमा **Webhooks** आइटम छान्नुहोस्। त्यसपछि दाहिने तर्फ **Add endpoint** मा क्लिक गर्नुहोस् *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

तपाईंलाई एउटा **Endpoint URL** चाहिन्छ *.* Ultimate Multisite ले स्वचालित रूपमा Endpoint URL उत्पन्न गर्छ जुन तपाईंले **Ultimate Multisite Stripe Gateway** खण्डको **Webhook Listener URL** फिल्डको ठीक तल फेला पार्न सक्नुहुन्छ।_._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL **Copy** गर्नुहोस् र Stripe **Endpoint URL** फिल्डमा **Paste** गर्नुहोस्।

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

अब एउटा **Event** छान्नुपर्छ *.* यस विकल्प अन्तर्गत, तपाईंले केवल **Select all events** बक्स चेक गरेर **Add events** मा क्लिक गर्नुपर्छ। त्यसपछि परिवर्तनहरू सुरक्षित गर्न **Add Endpoint** मा क्लिक गर्नुहोस्।

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

तपाईंको स्ट्राइप (Stripe) भुक्तानी एकीकरण पूरा भयो!
