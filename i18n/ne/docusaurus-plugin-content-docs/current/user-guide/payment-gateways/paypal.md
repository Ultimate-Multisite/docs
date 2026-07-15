---
title: पेपेल सेटअप गर्ने
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# पेपैल गेटवे सेट अप गर्ने (v2)

_**महत्वपूर्ण नोट: यो लेख Ultimate Multisite संस्करण 2.x मा आधारित छ।**_

तपाईंले हाम्रो भुक्तानी सेटिङ पृष्ठमा चार विधिहरूमासम्म भुक्तानी सक्रिय गर्न सक्नुहुन्छ: Stripe, Stripe Checkout, PayPal र म्यानुअल (Manual)। यस लेखमा, हामी **PayPal** सँग कसरी एकीकृत गर्ने हेर्नेछौं।

Stripe जस्तै, PayPal पनि अनलाइन भुक्तानीका लागि धेरै प्रयोग गरिन्छ, विशेष गरी WordPress वेबसाइटहरूमा। यो लेखले तपाईंलाई आफ्नो नेटवर्कमा उपलब्ध भुक्तानी विधिको रूपमा PayPal कसरी प्रयोग गर्ने भन्ने बारे मार्गदर्शन गर्दछ।

यसको ध्यान राख्नुहोस् कि यस एकीकरणका लागि आवश्यक API क्रेडेंशियल प्राप्त गर्न तपाईंलाई **PayPal Business account** हुनुपर्छ।

## आफ्नो नेटवर्कमा PayPal सक्षम गर्ने {#enabling-paypal-on-your-network}

आफ्नो नेटवर्कमा उपलब्ध भुक्तानी विधिको रूपमा PayPal सक्षम गर्न, **Ultimate Multisite > Settings > Payments** ट्याबमा जानुहोस् र PayPal को छेउमा रहेको बक्स टिक गर्नुहोस्।

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## निर्देशित सेटअप विझार्ड प्रयोग गर्ने {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ले भुक्तानी गेटवे सेटिङहरूमा एक निर्देशित PayPal सेटअप विझार्ड थपेको छ। तपाईंले PayPal सक्षम गरेपछि, गेटवे कसरी जोड्ने र बचत गर्नुअघि कुन क्रेडेंशियल आवश्यक छन् भनेर पुष्टि गर्न **Ultimate Multisite > Settings > Payments** मा विझार्ड प्रयोग गर्नुहोस्।

विझार्ड दुईवटा सेटअप मार्गहरूलाई समर्थन गर्दछ:

* **म्यानुअल क्रेडेंशियल प्रविष्टि (Manual credential entry)**: यदि तपाईंसँग पहिले नै PayPal API क्रेडेंशियलहरू छन्, तपाईंको खाताका लागि OAuth सेटअप उपलब्ध छैन, वा तपाईं आफैले PayPal बाट क्रेडेंशियलहरू नक्कल गर्न चाहनुहुन्छ भने यो बाटो प्रयोग गर्नुहोस्। PayPal फिल्डहरूमा API Username, API Password र API Signature प्रविष्ट गर्नुहोस्, त्यसपछि भुक्तानी सेटिङहरू बचत गर्नुहोस्।
* **OAuth कनेक्ट ग्याट (OAuth connection gate)**: यदि तपाईंको इन्स्टलेसनका लागि OAuth विकल्प उपलब्ध र सक्रिय छ भने मात्र यो बाटो प्रयोग गर्नुहोस्। विजुअल एड्जिट (wizard) मा फिचर फ्ल्याग पछाडि OAuth फ्लो देखाइएको हुन्छ, त्यसैले फ्ल्याग नभएका नेटवर्कहरूले म्यानुअल क्रेडेंशियल प्रविष्टि फिल्डहरू प्रयोग गर्न जारी राख्छन्।

यदि तपाईंलाई विजुअल एड्जिटमा OAuth विकल्प देख्नुहुन्न भने, तलको म्यानुअल क्रेडेंशियल प्रविष्टि प्रक्रिया पूरा गर्नुहोस्। यो गेटवे अघिल्लो Ultimate Multisite 2.x रिलीजहरूसँगै एउटै PayPal Business API क्रेडेंशियलहरू प्रयोग गर्दछ।

## PayPal API क्रेडेंशियलहरू कसरी प्राप्त गर्ने {#getting-the-paypal-api-credentials}

एक पटक PayPal लाई भुक्तानी गेटवेको रूपमा सक्षम गरिसकेपछि, तपाईंले PayPal API **Username**, PayPal API **Password** र PayPal API **Signature** का फिल्डहरू भर्नुपर्नेछ।

तपाईं यो आफ्नो PayPal [Live](https://www.paypal.com/home) वा [Sandbox](https://www.sandbox.paypal.com/home) खातामा लगइन गरेर प्राप्त गर्न सक्नुहुन्छ।

(याद राख्नुहोस् कि तपाईं भुक्तानीहरू परीक्षण गर्न र गेटवे सही रूपमा सेट गरिएको छ कि छैन भनेर हेर्न **sandbox mode** प्रयोग गर्न सक्नुहुन्छ। बस सम्बन्धित सेक्सन अन गर्नुहोस्।)

![PayPal API क्रेडेंशियल फिल्डहरू र sandbox मोड टगल](/img/config/settings-payment-gateways.png)

तपाईंको PayPal खाताका लागि API Signature वा प्रमाणपत्र क्रेडेंशियलहरूको अनुरोध गर्न:

  १. आफ्नो [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) मा जानुहोस्।

  २. **API access** सेक्सनमा, **Update** मा क्लिक गर्नुहोस्।
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

३. **NVP/SOAP API integration (Classic)** अन्तर्गत, **Manage API credentials** मा क्लिक गर्नुहोस्।
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

* यदि तपाईंसँग पहिले नै कुनै API Signature वा Certificate बनाएको छ भने, तपाईंले आफ्नो प्रमाणहरू भेट्न सक्ने पेजमा पुनर्निर्देशित (redirect) हुनुहुनेछ।

* _**नोट:** यदि तपाईंलाई आफ्नो PayPal खाता प्रमाणित गर्न सोधिएको छ भने, कृपया स्क्रिनमा दिइएका निर्देशनहरू पालना गर्नुहोस्._

४. निम्न मध्ये **एउटा** विकल्प चयन गर्नुहोस्, त्यसपछि **Agree and Submit** मा क्लिक गर्नुहोस्।

* **Request API Signature** – API Signature प्रमाणीकरणको लागि चयन गर्नुहोस्।

* **Request API Certificate** – API Certificate प्रमाणीकरणको लागि चयन गर्नुहोस्।

५. PayPal ले तपाईंको API प्रमाणहरू निम्न अनुसार उत्पन्न गर्दछ:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

* **API Signature credentials** मा एक API Username, API Password र Signature समावेश हुन्छ, जुन समाप्त हुँदैन। सुरक्षाका लागि यी मानहरू डिफल্ট रूपमा लुकाइन्छन्। तिनीहरूलाई अन वा अफ गर्नको लागि **Show/Hide** मा क्लिक गर्नुहोस्। काम सकिएपछि, **Done** मा क्लिक गर्नुहोस्।

* **API Certificate credentials** मा एक API Username, API Password र Certificate समावेश हुन्छ, जुन तीन वर्षपछि स्वचालित रूपमा समाप्त हुन्छ। API Certificate लाई आफ्नो डेस्कटपमा सुरक्षित गर्न **Download Certificate** मा क्लिक गर्नुहोस्।

यति नै भयो, तपाईंको PayPal भुक्तानी एकीकरण पूरा भएको छ!

यदि तपाईंसँग PayPal सेटिङहरूसँग कुनै प्रश्नहरू छन् भने, तपाईंले PayPal को [Help Center](https://www.paypal.com/br/smarthelp/home) हेर्न सक्नुहुन्छ।
