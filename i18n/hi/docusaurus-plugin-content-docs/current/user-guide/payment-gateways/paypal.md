---
title: PayPal सेट अप करना
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway सेटअप करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite version 2.x के लिए है।**_

आप हमारे payment settings पेज पर चार payment methods को activate कर सकते हैं: Stripe, Stripe Checkout, PayPal और Manual। इस लेख में, हम **PayPal** को integrate करना सीखेंगे।

Stripe की तरह ही, PayPal भी online payments के लिए काफी लोकप्रिय है, खासकर WordPress websites पर। यह लेख आपको बताएगा कि अपने network पर PayPal को payment method के रूप में कैसे उपयोग करें।

ध्यान रखें कि इस integration के लिए जरूरी API credentials पाने के लिए आपके पास **PayPal Business account** होना चाहिए।

## अपने network पर PayPal enable करना

अपने network पर PayPal को available payment method के रूप में enable करने के लिए, **Ultimate Multisite > Settings > Payments** tab पर जाएं और PayPal के बगल वाले box पर tick करें।

![Active payment gateways में PayPal enable करना](/img/config/settings-payment-gateways.png)

## PayPal API credentials प्राप्त करना

PayPal को payment gateway के रूप में enable करने के बाद, आपको PayPal API **Username**, PayPal API **Password** और PayPal API **Signature** के fields भरने होंगे।

इन्हें पाने के लिए अपने PayPal [Live](https://www.paypal.com/home) या [Sandbox](https://www.sandbox.paypal.com/home) account में login करें।

(याद रखें कि आप payments test करने और gateway सही से setup है या नहीं देखने के लिए **sandbox mode** का उपयोग कर सकते हैं। बस संबंधित section को toggle on करें।)

![PayPal API credentials fields और sandbox mode toggle](/img/config/settings-payment-gateways.png)

अपने PayPal account के लिए API Signature या Certificate credentials request करने के लिए:

  1. अपनी [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) पर जाएं।

  2. **API access** section में, **Update** पर click करें।  
![PayPal Account Settings जिसमें API access section है](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** के नीचे, **Manage API credentials** पर click करें।  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * अगर आपने पहले से API Signature या Certificate generate किया है, तो आपको उस page पर redirect किया जाएगा जहां आप अपने credentials पा सकते हैं।

     * _**नोट:** अगर आपसे अपना PayPal account verify करने के लिए कहा जाता है, तो screen पर दिए गए निर्देशों का पालन करें।_

  4. नीचे दिए गए options में से _एक_ चुनें, फिर **Agree and Submit** पर click करें।

     * **Request API Signature** – API Signature authentication के लिए चुनें।

     * **Request API Certificate** – API Certificate authentication के लिए चुनें।

  5. PayPal आपके API credentials इस तरह generate करता है:  
![PayPal द्वारा generate किए गए API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** में API Username, API Password, और Signature शामिल हैं, जो expire नहीं होते। अतिरिक्त सुरक्षा के लिए ये values default रूप से hidden रहती हैं। इन्हें on और off करने के लिए **Show/Hide** पर click करें। जब हो जाए, **Done** पर click करें।

     * **API Certificate credentials** में API Username, API Password, और Certificate शामिल हैं, जो तीन साल बाद automatically expire हो जाता है। API Certificate को अपने desktop पर save करने के लिए **Download Certificate** पर click करें।

बस इतना ही, आपका PayPal payment integration पूरा हो गया है!

अगर PayPal settings के बारे में आपके कोई सवाल हैं, तो आप PayPal के [Help Center](https://www.paypal.com/br/smarthelp/home) पर जा सकते हैं।
