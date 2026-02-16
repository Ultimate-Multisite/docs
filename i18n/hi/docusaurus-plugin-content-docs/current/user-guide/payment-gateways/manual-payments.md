---
title: मैनुअल भुगतान सेट अप करना
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# मैन्युअल पेमेंट सेट करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite version 2.x के लिए है।**_

मैन्युअल पेमेंट आपको अन्य payment methods ऑफर करने का तरीका देते हैं, जब **Stripe** या **PayPal** आपके users के लिए उपलब्ध न हो। यह wire या bank transfer हो सकता है, या कोई भी अन्य payment method जो आपके users के लिए locally उपलब्ध हो।

## Manual Payments कैसे enable करें

मैन्युअल पेमेंट सेट करना बहुत आसान है। आपको बस इसे payment gateways में enable करना है और विस्तृत निर्देश लिखने हैं कि user को payment कैसे भेजना है।

सबसे पहले, **Ultimate Multisite > Settings > Payments** पर जाएं। **Payment Gateways** के नीचे, **Manual** को toggle करके on करें। आप देखेंगे कि एक **Payment Instructions** box दिखाई देगा।

इस box में वह जानकारी जोड़ें जो आपके customer को payment करने के लिए चाहिए होगी। उदाहरण के लिए, यह आपके bank account की details और आपका email हो सकता है ताकि customer आपको payment confirmation भेज सके।

![Manual payment gateway toggle और payment instructions box](/img/config/settings-payment-gateways.png)

सेट करने के बाद, बस **Save Settings** पर क्लिक करें और हो गया। जब users आपके network पर register करेंगे, तो उन्हें एक message दिखेगा जो बताएगा कि purchase पूरी करने के लिए उन्हें आपके निर्देश मिलेंगे।

![Registration के दौरान दिखाया गया manual payment message](/img/config/settings-payment-gateways.png)

और उन्हें आपके **Thank You** page पर भी आपके payment instructions के साथ एक message मिलेगा।

![Payment instructions दिखाता Thank You page](/img/config/settings-payment-gateways.png)

## Manual payments को confirm करना

Manual payment confirm करने के लिए, left bar में **Payments** menu पर जाएं। वहां आप अपने network के सभी payments और उनकी details देख सकते हैं, जिसमें उनका **status** भी शामिल है। Manual payment का status हमेशा **Pending** रहेगा जब तक आप इसे manually नहीं बदलते।

![Pending manual payment दिखाती Payments list](/img/admin/payments-list.png)

**reference code** पर क्लिक करके payment page में जाएं। इस page पर आपको pending payment की सभी details मिलेंगी, जैसे reference ID, products, timestamps और बहुत कुछ।

![Reference code और products के साथ Payment details page](/img/admin/payments-list.png)

Right column में, आप payment का status बदल सकते हैं। इसे **Completed** में बदलने और **Activate Membership** option को toggle करने से आपके customer की site enable हो जाएगी और उनकी membership active हो जाएगी।

![Activate Membership toggle के साथ Payment status को Completed में बदलना](/img/admin/payments-list.png)
