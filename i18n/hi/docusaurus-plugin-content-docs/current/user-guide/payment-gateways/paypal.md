---
title: PayPal सेट करना
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway सेट करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite संस्करण 2.x से संबंधित है।**_

आप हमारे भुगतान सेटिंग्स पृष्ठ पर भुगतान के अधिकतम चार तरीके सक्रिय कर सकते हैं: Stripe, Stripe Checkout, PayPal और मैनुअल। इस लेख में, हम देखेंगे कि **PayPal** के साथ कैसे एकीकृत करें।

Stripe की तरह, PayPal ऑनलाइन भुगतानों के लिए व्यापक रूप से उपयोग किया जाता है, खासकर WordPress वेबसाइटों पर। यह लेख आपको मार्गदर्शन देगा कि अपने नेटवर्क पर उपलब्ध भुगतान विधि के रूप में PayPal का उपयोग कैसे करें।

ध्यान दें कि इस एकीकरण के लिए आवश्यक API क्रेडेंशियल प्राप्त करने हेतु आपके पास **PayPal Business account** होना चाहिए।

## अपने नेटवर्क पर PayPal सक्षम करना

अपने नेटवर्क पर उपलब्ध भुगतान विधि के रूप में PayPal सक्षम करने के लिए, **Ultimate Multisite > Settings > Payments** टैब पर जाएँ और PayPal के बगल वाला बॉक्स चुनें।

![सक्रिय भुगतान गेटवे में PayPal सक्षम करना](/img/config/settings-payment-gateways.png)

## मार्गदर्शित सेटअप विज़ार्ड का उपयोग करना

Ultimate Multisite 2.10.0 भुगतान गेटवे सेटिंग्स में मार्गदर्शित PayPal सेटअप विज़ार्ड जोड़ता है। PayPal सक्षम करने के बाद, **Ultimate Multisite > Settings > Payments** पर विज़ार्ड का उपयोग करके चुनें कि आप गेटवे को कैसे जोड़ना चाहते हैं और सेव करने से पहले पुष्टि करें कि कौन-से क्रेडेंशियल अभी भी आवश्यक हैं।

विज़ार्ड दो सेटअप मार्गों का समर्थन करता है:

* **मैनुअल क्रेडेंशियल प्रविष्टि**: इस मार्ग का उपयोग तब करें जब आपके पास पहले से PayPal API क्रेडेंशियल हों, जब आपके Account के लिए OAuth सेटअप उपलब्ध न हो, या जब आप PayPal से क्रेडेंशियल स्वयं कॉपी करना पसंद करते हों। PayPal फ़ील्डों में API Username, API Password, और API Signature दर्ज करें, फिर भुगतान सेटिंग्स सेव करें।
* **OAuth कनेक्शन गेट**: इस मार्ग का उपयोग केवल तब करें जब OAuth विकल्प आपके इंस्टॉल के लिए उपलब्ध और सक्षम हो। विज़ार्ड OAuth प्रवाह को एक फ़ीचर फ़्लैग के पीछे दिखाता है, इसलिए जिन नेटवर्कों में फ़्लैग नहीं है वे मैनुअल क्रेडेंशियल प्रविष्टि फ़ील्डों का उपयोग जारी रखते हैं।

यदि आपको विज़ार्ड में OAuth विकल्प नहीं दिखता है, तो नीचे दिया गया मैनुअल क्रेडेंशियल प्रविष्टि प्रवाह पूरा करें। गेटवे पिछले Ultimate Multisite 2.x रिलीज़ जैसे ही PayPal Business API क्रेडेंशियल्स के साथ काम करता है।

## PayPal API क्रेडेंशियल प्राप्त करना

PayPal को भुगतान गेटवे के रूप में सक्षम करने के बाद, आपको PayPal API **Username** , PayPal API **Password** और PayPal API **Signature** के फ़ील्ड भरने होंगे।

आप इसे अपने PayPal [Live](https://www.paypal.com/home) या [Sandbox](https://www.sandbox.paypal.com/home) Account में लॉग इन करके प्राप्त कर सकते हैं।

(याद रखें कि आप भुगतानों की जाँच करने और यह देखने के लिए कि गेटवे सही ढंग से सेट है या नहीं, **sandbox mode** का उपयोग कर सकते हैं। बस संबंधित अनुभाग को चालू करें।)

![PayPal API क्रेडेंशियल फ़ील्ड और sandbox mode टॉगल](/img/config/settings-payment-gateways.png)

अपने PayPal Account के लिए API Signature या Certificate क्रेडेंशियल का अनुरोध करने के लिए:

  1. अपनी [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) पर जाएँ।

  2. **API access** अनुभाग में, **Update** पर क्लिक करें।
![API access अनुभाग के साथ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** के अंतर्गत, **Manage API credentials** पर क्लिक करें।
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * यदि आपने पहले ही API Signature या Certificate बना लिया है, तो आपको उस पृष्ठ पर भेजा जाएगा जहाँ आप अपने क्रेडेंशियल पा सकते हैं।

     * _**नोट:** यदि आपसे अपने PayPal Account की पुष्टि करने के लिए कहा जाए, तो स्क्रीन पर दिए गए निर्देशों का पालन करें।_

  4. निम्नलिखित विकल्पों में से _एक_ चुनें, फिर **Agree and Submit** पर क्लिक करें।

     * **Request API Signature** – API Signature प्रमाणीकरण के लिए चुनें।

     * **Request API Certificate** – API Certificate प्रमाणीकरण के लिए चुनें।

  5. PayPal आपके API क्रेडेंशियल इस प्रकार बनाता है:
![PayPal द्वारा बनाए गए API क्रेडेंशियल](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** में API Username, API Password, और Signature शामिल होते हैं, जो समाप्त नहीं होते। अतिरिक्त सुरक्षा के लिए ये मान डिफ़ॉल्ट रूप से छिपे होते हैं। इन्हें चालू और बंद करने के लिए **Show/Hide** पर क्लिक करें। समाप्त होने पर, **Done** पर क्लिक करें।

     * **API Certificate credentials** में API Username, API Password, और Certificate शामिल होते हैं, जो तीन वर्षों के बाद अपने-आप समाप्त हो जाता है। API Certificate को अपने डेस्कटॉप पर सेव करने के लिए **Download Certificate** पर क्लिक करें।

बस इतना ही, आपका PayPal भुगतान एकीकरण पूरा हो गया है!

यदि आपके पास PayPal सेटिंग्स से संबंधित कोई प्रश्न हैं, तो आप PayPal के [Help Center](https://www.paypal.com/br/smarthelp/home) को देख सकते हैं।
