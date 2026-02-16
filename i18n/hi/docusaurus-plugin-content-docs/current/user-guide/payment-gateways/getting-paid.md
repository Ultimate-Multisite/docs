---
title: भुगतान प्राप्त करना
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# भुगतान प्राप्त करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite संस्करण 2.x के लिए है।**_

Ultimate Multisite में एक इन-बिल्ट सदस्यता और बिलिंग सिस्टम है। हमारे बिलिंग सिस्टम को सही तरीके से काम करने के लिए, हमने ई-कॉमर्स में सबसे ज़्यादा इस्तेमाल होने वाले payment gateways को इंटीग्रेट किया है। Ultimate Multisite में डिफ़ॉल्ट payment gateways हैं — _Stripe_, _PayPal_, और Manual Payment। आप _WooCommerce_, _GoCardless_ और _Payfast_ का भी इस्तेमाल कर सकते हैं — बस उनके add-ons इंस्टॉल करने होंगे।

## बुनियादी सेटिंग्स

आप इनमें से किसी भी payment gateway को Ultimate Multisite की payment settings में कॉन्फ़िगर कर सकते हैं। इसके लिए **Ultimate Multisite menu > Settings > Payments** पर जाएं।

![Ultimate Multisite में Payment settings पेज](/img/config/settings-payment-gateways.png)

अपना payment gateway सेटअप करने से पहले, कृपया इन बुनियादी payment settings पर एक नज़र डालें:

**Force auto-renew:** यह सुनिश्चित करता है कि उपयोगकर्ता द्वारा चुनी गई बिलिंग फ्रीक्वेंसी के अनुसार हर बिलिंग साइकल के अंत में भुगतान अपने आप रिन्यू हो जाएगा।

![Force auto-renew टॉगल सेटिंग](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** इस ऑप्शन को ऑन करने पर आपके क्लाइंट को रजिस्ट्रेशन के दौरान कोई भी फाइनेंशियल जानकारी देने की ज़रूरत नहीं होगी। यह जानकारी सिर्फ़ तब मांगी जाएगी जब ट्रायल पीरियड खत्म हो जाएगा।

![Allow trials without payment method टॉगल](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** यह आपको यह तय करने का ऑप्शन देता है कि भुगतान के बाद invoice भेजना है या नहीं। ध्यान दें कि उपयोगकर्ता अपने subsite dashboard में अपनी payment history देख सकते हैं। यह ऑप्शन Manual Gateway पर लागू नहीं होता।

![Send invoice on payment confirmation टॉगल](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** यहां आप payment reference code या sequential number scheme में से कोई एक चुन सकते हैं। अगर आप अपने invoices के लिए payment reference code का इस्तेमाल करना चाहते हैं, तो आपको कुछ भी कॉन्फ़िगर करने की ज़रूरत नहीं है। अगर आप sequential number scheme चुनते हैं, तो आपको **next invoice number** (यह नंबर सिस्टम में जनरेट होने वाले अगले invoice के लिए इस्तेमाल होगा। हर नया invoice बनने पर यह एक से बढ़ता है। आप इसे बदलकर सेव कर सकते हैं ताकि invoice sequential number किसी खास वैल्यू से शुरू हो) और **invoice number prefix** कॉन्फ़िगर करना होगा।

![Invoice numbering scheme चयन](/img/config/settings-payment-gateways.png)

![Sequential invoice number और prefix सेटिंग्स](/img/config/settings-payment-gateways.png)

## Gateways कहां मिलेंगे:

आप उसी पेज पर payment gateways सेटअप कर सकते हैं (**Ultimate Multisite > Settings > Payments**)। **active payment gateways** के ठीक नीचे, आपको ये दिखेंगे: _Stripe_, _Stripe Checkout_, _PayPal_ और _Manual_।

![Active payment gateways की लिस्ट](/img/config/settings-payment-gateways.png)

हर payment gateway के लिए हमारे पास एक अलग लेख है जो आपको सेटअप के स्टेप्स समझाएगा। आप इन्हें नीचे दिए गए लिंक्स पर पा सकते हैं।

**Stripe gateway सेटअप करना**

**PayPal gateway सेटअप करना**

**Manual payments सेटअप करना**

अब, अगर आप _WooCommerce_, _GoCardless_ या _Payfast_ को अपने payment gateway के रूप में इस्तेमाल करना चाहते हैं, तो आपको **उनके add-ons इंस्टॉल और कॉन्फ़िगर करने होंगे**।

### WooCommerce add-on कैसे इंस्टॉल करें:

हम समझते हैं कि _Stripe_ और _PayPal_ कुछ देशों में उपलब्ध नहीं हैं, जिससे Ultimate Multisite उपयोगकर्ताओं को हमारे plugin का पूरी तरह इस्तेमाल करने में दिक्कत होती है। इसलिए हमने _WooCommerce_ को इंटीग्रेट करने के लिए एक add-on बनाया, जो एक बेहद लोकप्रिय ई-कॉमर्स plugin है। दुनिया भर के developers ने इसमें अलग-अलग payment gateways इंटीग्रेट करने के लिए add-ons बनाए हैं। हमने इसका फायदा उठाकर Ultimate Multisite बिलिंग सिस्टम में इस्तेमाल होने वाले payment gateways की सूची बढ़ाई है।

_**महत्वपूर्ण:** Ultimate Multisite: WooCommerce Integration के लिए ज़रूरी है कि WooCommerce कम से कम आपकी main site पर एक्टिवेट हो।_

सबसे पहले, add-ons पेज पर जाएं। इसके लिए **Ultimate Multisite > Settings** पर जाएं। आपको **Add-ons** टेबल दिखेगी। **Check our Add-ons** पर क्लिक करें।

![Add-ons सेक्शन के साथ Settings पेज](/img/config/settings-general.png)

**Check our Add-ons** पर क्लिक करने के बाद, आप add-ons पेज पर पहुंचेंगे। यहां आपको Ultimate Multisite के सभी add-ons मिलेंगे। **Ultimate Multisite: WooCommerce Integration** add-on पर क्लिक करें।

![उपलब्ध add-ons की लिस्ट वाला Add-ons पेज](/img/config/settings-general.png)

एक विंडो खुलेगी जिसमें add-on की जानकारी होगी। बस **Install Now** पर क्लिक करें।

![WooCommerce add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूरी होने के बाद, आप plugins पेज पर पहुंचेंगे। यहां बस **Network Activate** पर क्लिक करें और WooCommerce add-on आपके network पर एक्टिवेट हो जाएगा।

![WooCommerce add-on को Network Activate करें](/img/config/settings-general.png)

इसे एक्टिवेट करने के बाद, अगर आपकी वेबसाइट पर WooCommerce plugin अभी तक इंस्टॉल और एक्टिवेट नहीं है, तो आपको एक रिमाइंडर मिलेगा।

![WooCommerce एक्टिवेशन रिमाइंडर नोटिस](/img/config/settings-general.png)

WooCommerce Integration add-on के बारे में और जानने के लिए, **यहां क्लिक करें**।

### GoCardless add-on कैसे इंस्टॉल करें:

_GoCardless_ add-on इंस्टॉल करने के स्टेप्स _WooCommerce_ add-on जैसे ही हैं। कृपया add-ons पेज पर जाएं और **Ultimate Multisite: GoCardless Gateway** add-on चुनें।

![उपलब्ध add-ons की लिस्ट वाला Add-ons पेज](/img/config/settings-general.png)

Add-on विंडो खुलेगी। **Install Now** पर क्लिक करें।

![GoCardless add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूरी होने के बाद, आप plugins पेज पर पहुंचेंगे। यहां बस **Network Activate** पर क्लिक करें और _GoCardless_ add-on आपके network पर एक्टिवेट हो जाएगा।

![GoCardless add-on को Network Activate करें](/img/config/settings-general.png)

_GoCardless_ gateway के साथ शुरुआत करने के लिए, **यह लेख पढ़ें**।

### Payfast add-on कैसे इंस्टॉल करें:

Add-ons पेज पर जाएं और **Ultimate Multisite: Payfast Gateway** add-on चुनें।

![उपलब्ध add-ons की लिस्ट वाला Add-ons पेज](/img/config/settings-general.png)

Add-on विंडो खुलेगी। **Install Now** पर क्लिक करें।

![Payfast add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूरी होने के बाद, आप plugins पेज पर पहुंचेंगे। यहां बस **Network Activate** पर क्लिक करें और _Payfast_ add-on आपके network पर एक्टिवेट हो जाएगा।

![Payfast add-on को Network Activate करें](/img/config/settings-general.png)
