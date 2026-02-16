---
title: भुगतान और चालान प्रबंधन
sidebar_position: 15
_i18n_hash: fc6e16106af648bfca0812d24168b582
---
# भुगतान और इनवॉइस प्रबंधन

## भुगतान सेटिंग्स

भुगतान प्राप्त करना शुरू करने से पहले, आपको भुगतान से संबंधित सेटिंग्स कॉन्फ़िगर करनी होंगी। **Ultimate Multisite → Settings** पर जाएं और **Payment** टैब पर क्लिक करें।

![Payment settings tab](/img/admin/settings-payments-top.png)

### सामान्य भुगतान विकल्प

सामान्य सेटिंग्स में आप ये कॉन्फ़िगर कर सकते हैं:

- **Currency** — लेनदेन के लिए उपयोग की जाने वाली डिफ़ॉल्ट मुद्रा
- **Currency Position** — मुद्रा चिह्न कहां दिखाई दे (राशि से पहले/बाद में)

![Payment gateway settings](/img/admin/settings-payments-options.png)

### Payment Gateways

Ultimate Multisite कई payment gateways को सपोर्ट करता है। आप Payment settings टैब से प्रत्येक को enable और configure कर सकते हैं।

![Payment gateway configuration](/img/admin/settings-payments-gateways.png)

उपलब्ध gateways में शामिल हैं:

- **Stripe** — Stripe के माध्यम से क्रेडिट कार्ड भुगतान
- **PayPal** — PayPal भुगतान
- **Manual** — ऑफलाइन या कस्टम भुगतान प्रोसेसिंग के लिए

प्रत्येक gateway का अपना configuration सेक्शन है जहां आप API keys और अन्य सेटिंग्स दर्ज करते हैं।

![Additional gateway settings](/img/admin/settings-payments-gateways-2.png)

### Sandbox Mode

लाइव होने से पहले अपने payment integration का परीक्षण करने के लिए आप **Sandbox Mode** enable कर सकते हैं। जब sandbox mode सक्रिय होता है, तो कोई वास्तविक शुल्क नहीं लिया जाएगा।

## भुगतान देखना

अपने नेटवर्क के सभी लेनदेन देखने के लिए Ultimate Multisite के अंतर्गत **Payments** पेज पर जाएं।

![Payments list](/img/admin/payments-list.png)

आप स्थिति (completed, pending, failed, refunded) के अनुसार भुगतान फ़िल्टर कर सकते हैं और विशिष्ट लेनदेन खोज सकते हैं।

किसी भुगतान पर क्लिक करके उसका पूरा विवरण देखें जिसमें line items, संबंधित membership, ग्राहक जानकारी, और payment gateway डेटा शामिल है।

## इनवॉइस

Ultimate Multisite भुगतान के लिए स्वचालित रूप से इनवॉइस जनरेट कर सकता है। आप Payment settings से इनवॉइस टेम्पलेट और नंबरिंग फॉर्मेट को कस्टमाइज़ कर सकते हैं।

इनवॉइस कस्टमाइज़ेशन विकल्पों में शामिल हैं:

- इनवॉइस पर प्रदर्शित **कंपनी का नाम और पता**
- **Invoice numbering** फॉर्मेट और क्रम
- इनवॉइस हेडर पर प्रदर्शित **लोगो**
- शर्तों, नोट्स, या कानूनी जानकारी के लिए **कस्टम फुटर टेक्स्ट**

इनवॉइस टेम्पलेट कस्टमाइज़ करने के लिए, **Ultimate Multisite → Settings → Payment** पर जाएं और इनवॉइस से संबंधित सेटिंग्स देखें।
