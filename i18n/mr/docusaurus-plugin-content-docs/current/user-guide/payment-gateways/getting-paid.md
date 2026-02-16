---
title: पैसे मिळवणे
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# पेमेंट मिळवणे (v2)

_**महत्त्वाची सूचना: हा लेख Ultimate Multisite आवृत्ती 2.x संदर्भात आहे.**_

Ultimate Multisite मध्ये एक अंगभूत सदस्यत्व आणि बिलिंग प्रणाली आहे. आमची बिलिंग प्रणाली कार्य करण्यासाठी, आम्ही ई-कॉमर्समध्ये सर्वाधिक वापरले जाणारे payment gateway समाविष्ट केले आहेत. Ultimate Multisite मधील डीफॉल्ट payment gateway म्हणजे _Stripe_, _PayPal_ आणि Manual Payment. तुम्ही _WooCommerce_, _GoCardless_ आणि _Payfast_ वापरूनही पेमेंट स्वीकारू शकता, त्यासाठी त्यांचे संबंधित add-on इंस्टॉल करावे लागतील.

## मूलभूत सेटिंग्ज

तुम्ही Ultimate Multisite च्या payment सेटिंग्जमध्ये यापैकी कोणताही payment gateway कॉन्फिगर करू शकता. **Ultimate Multisite menu > Settings > Payments** येथे जाऊन तुम्हाला ते मिळेल.

![Ultimate Multisite मधील Payment settings पेज](/img/config/settings-payment-gateways.png)

तुम्ही तुमचा payment gateway सेटअप करण्यापूर्वी, कृपया कॉन्फिगर करता येणाऱ्या मूलभूत payment सेटिंग्जवर एक नजर टाका:

**Force auto-renew:** हे सुनिश्चित करते की वापरकर्त्याने निवडलेल्या बिलिंग फ्रिक्वेन्सीनुसार प्रत्येक बिलिंग सायकलच्या शेवटी पेमेंट आपोआप पुनरावृत्त होईल.

![Force auto-renew टॉगल सेटिंग](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** हा पर्याय सक्षम केल्यास, नोंदणी प्रक्रियेदरम्यान तुमच्या क्लायंटला कोणतीही आर्थिक माहिती देण्याची गरज नाही. ट्रायल कालावधी संपल्यावरच हे आवश्यक असेल.

![Allow trials without payment method टॉगल](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** पेमेंटनंतर invoice पाठवायचे की नाही हा पर्याय तुम्हाला यातून मिळतो. लक्षात घ्या की वापरकर्त्यांना त्यांच्या subsite dashboard वर त्यांचा पेमेंट इतिहास पाहता येतो. हा पर्याय Manual Gateway ला लागू होत नाही.

![Send invoice on payment confirmation टॉगल](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** येथे तुम्ही payment reference code किंवा sequential number scheme निवडू शकता. तुम्ही तुमच्या invoice साठी payment reference code वापरणे निवडल्यास, तुम्हाला काहीही कॉन्फिगर करण्याची गरज नाही. तुम्ही sequential number scheme वापरणे निवडल्यास, तुम्हाला **next invoice number** (हा नंबर सिस्टमवर तयार होणाऱ्या पुढच्या invoice साठी invoice नंबर म्हणून वापरला जाईल. प्रत्येक नवीन invoice तयार झाल्यावर तो एकाने वाढतो. तुम्ही तो बदलून invoice sequential number एका विशिष्ट मूल्यावर रीसेट करण्यासाठी सेव्ह करू शकता) आणि **invoice number prefix** कॉन्फिगर करावे लागेल.

![Invoice numbering scheme निवड](/img/config/settings-payment-gateways.png)

![Sequential invoice number आणि prefix सेटिंग्ज](/img/config/settings-payment-gateways.png)

## Gateway कुठे शोधायचे:

तुम्ही त्याच पेजवर payment gateway सेटअप करू शकता (**Ultimate Multisite > Settings > Payments**). **active payment gateways** च्या खाली तुम्हाला दिसेल: _Stripe_, _Stripe Checkout_, _PayPal_ आणि _Manual_.

![Active payment gateways यादी](/img/config/settings-payment-gateways.png)

प्रत्येक payment gateway साठी आमच्याकडे एक स्वतंत्र लेख आहे जो तुम्हाला सेटअपच्या सर्व टप्प्यांमधून मार्गदर्शन करेल, जो तुम्ही खालील लिंक्सवर शोधू शकता.

**Stripe gateway सेटअप करणे**

**PayPal gateway सेटअप करणे**

**Manual payments सेटअप करणे**

आता, जर तुम्हाला _WooCommerce_, _GoCardless_ किंवा _Payfast_ तुमचा payment gateway म्हणून वापरायचा असेल, तर तुम्हाला **त्यांचे add-on इंस्टॉल आणि कॉन्फिगर करावे लागतील**.

### WooCommerce add-on कसे इंस्टॉल करायचे:

आम्हाला माहीत आहे की _Stripe_ आणि _PayPal_ काही देशांमध्ये उपलब्ध नाहीत, ज्यामुळे Ultimate Multisite वापरकर्त्यांना आमचे plugin प्रभावीपणे वापरण्यात अडचण येते. म्हणून आम्ही _WooCommerce_ समाविष्ट करण्यासाठी एक add-on तयार केला, जो एक अतिशय लोकप्रिय e-commerce plugin आहे. जगभरातील डेव्हलपर्सनी विविध payment gateway समाविष्ट करण्यासाठी add-on तयार केले आहेत. Ultimate Multisite बिलिंग प्रणालीसह वापरता येणाऱ्या payment gateway चा विस्तार करण्यासाठी आम्ही याचा फायदा घेतला.

_**महत्त्वाचे:** Ultimate Multisite: WooCommerce Integration साठी किमान तुमच्या main site वर WooCommerce activate असणे आवश्यक आहे._

प्रथम, कृपया add-ons पेजवर जा. **Ultimate Multisite > Settings** येथे जाऊन तुम्हाला ते मिळेल. तुम्हाला **Add-ons** टेबल दिसेल. **Check our Add-ons** वर क्लिक करा.

![Add-ons सेक्शनसह Settings पेज](/img/config/settings-general.png)

**Check our Add-ons** वर क्लिक केल्यानंतर, तुम्हाला add-ons पेजवर रीडायरेक्ट केले जाईल. येथे तुम्हाला सर्व Ultimate Multisite add-on मिळतील. **Ultimate Multisite: WooCommerce Integration** add-on वर क्लिक करा.

![उपलब्ध add-on दर्शवणारे Add-ons पेज](/img/config/settings-general.png)

Add-on तपशीलांसह एक विंडो उघडेल. फक्त **Install Now** वर क्लिक करा.

![WooCommerce add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूर्ण झाल्यावर, तुम्हाला plugins पेजवर रीडायरेक्ट केले जाईल. येथे फक्त **Network Activate** वर क्लिक करा आणि WooCommerce add-on तुमच्या नेटवर्कवर activate होईल.

![WooCommerce add-on Network Activate करा](/img/config/settings-general.png)

ते activate केल्यानंतर, जर तुमच्या वेबसाइटवर अजूनही WooCommerce plugin इंस्टॉल आणि activate नसेल, तर तुम्हाला एक रिमाइंडर मिळेल.

![WooCommerce activation रिमाइंडर नोटीस](/img/config/settings-general.png)

WooCommerce Integration add-on बद्दल अधिक वाचण्यासाठी, **येथे क्लिक करा**.

### GoCardless add-on कसे इंस्टॉल करायचे:

_GoCardless_ add-on इंस्टॉल करण्याच्या पायऱ्या _WooCommerce_ add-on सारख्याच आहेत. कृपया add-ons पेजवर जा आणि **Ultimate Multisite: GoCardless Gateway** add-on निवडा.

![उपलब्ध add-on दर्शवणारे Add-ons पेज](/img/config/settings-general.png)

Add-on विंडो उघडेल. **Install Now** वर क्लिक करा.

![GoCardless add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूर्ण झाल्यावर, तुम्हाला plugins पेजवर रीडायरेक्ट केले जाईल. येथे फक्त **Network Activate** वर क्लिक करा आणि _GoCardless_ add-on तुमच्या नेटवर्कवर activate होईल.

![GoCardless add-on Network Activate करा](/img/config/settings-general.png)

_GoCardless_ gateway सुरू कसे करायचे हे जाणून घेण्यासाठी, **हा लेख वाचा**.

### Payfast add-on कसे इंस्टॉल करायचे:

Add-ons पेजवर जा आणि **Ultimate Multisite: Payfast Gateway** add-on निवडा.

![उपलब्ध add-on दर्शवणारे Add-ons पेज](/img/config/settings-general.png)

Add-on विंडो उघडेल. **Install Now** वर क्लिक करा.

![Payfast add-on इंस्टॉल डायलॉग](/img/config/settings-general.png)

इंस्टॉलेशन पूर्ण झाल्यावर, तुम्हाला plugins पेजवर रीडायरेक्ट केले जाईल. येथे फक्त **Network Activate** वर क्लिक करा आणि _Payfast_ add-on तुमच्या नेटवर्कवर activate होईल.

![Payfast add-on Network Activate करा](/img/config/settings-general.png)
