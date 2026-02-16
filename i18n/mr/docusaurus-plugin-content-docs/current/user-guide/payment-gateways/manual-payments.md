---
title: मॅन्युअल पेमेंट्स सेट करणे
sidebar_position: 20
_i18n_hash: 1046fae1e97189ace8966057920da6eb
---
# मॅन्युअल पेमेंट्स सेट करणे (v2)

_**महत्त्वाची सूचना: हा लेख Ultimate Multisite आवृत्ती 2.x साठी आहे.**_

जर तुमच्या वापरकर्त्यांसाठी **Stripe** किंवा **PayPal** उपलब्ध नसेल, तर मॅन्युअल पेमेंट्स हा इतर पेमेंट पद्धती ऑफर करण्याचा एक मार्ग आहे. हे वायर ट्रान्सफर, बँक ट्रान्सफर किंवा तुमच्या वापरकर्त्यांसाठी स्थानिक पातळीवर उपलब्ध असलेली कोणतीही पेमेंट पद्धत असू शकते.

## मॅन्युअल पेमेंट्स कसे सक्षम करावे

मॅन्युअल पेमेंट सेट करणे अतिशय सोपे आहे. तुम्हाला फक्त payment gateways अंतर्गत ते सक्षम करायचे आहे आणि वापरकर्त्याने पेमेंट कसे पाठवावे याबद्दल सविस्तर सूचना लिहायच्या आहेत.

प्रथम, **Ultimate Multisite > Settings > Payments** वर जा. **Payment Gateways** खाली, **Manual** टॉगल ऑन करा. तुम्हाला दिसेल की एक **Payment Instructions** बॉक्स दिसेल.

या बॉक्समध्ये तुमच्या ग्राहकाला पेमेंट करण्यासाठी आवश्यक असलेली माहिती जोडा. उदाहरणार्थ, तुमच्या बँक खात्याचे तपशील आणि तुमचा ईमेल जेणेकरून ग्राहक तुम्हाला पेमेंट पुष्टीकरण पाठवू शकेल.

![Manual payment gateway toggle and payment instructions box](/img/config/settings-payment-gateways.png)

सेटअप केल्यानंतर, फक्त **Save Settings** वर क्लिक करा आणि झाले. जेव्हा वापरकर्ते तुमच्या नेटवर्कवर नोंदणी करतात, तेव्हा त्यांना एक संदेश दिसेल जो त्यांना सांगेल की खरेदी पूर्ण करण्यासाठी त्यांना तुमच्या सूचना प्राप्त होतील.

![Manual payment message shown during registration](/img/config/settings-payment-gateways.png)

आणि त्यांना तुमच्या **Thank You** पेजवर देखील तुमच्या पेमेंट सूचनांसह एक संदेश मिळेल.

![Thank You page showing payment instructions](/img/config/settings-payment-gateways.png)

## मॅन्युअल पेमेंट्सची पुष्टी करणे

मॅन्युअल पेमेंटची पुष्टी करण्यासाठी, डाव्या बारवरील **Payments** मेनूवर जा. तिथे तुम्ही तुमच्या नेटवर्कवरील सर्व पेमेंट्स आणि त्यांचे तपशील पाहू शकता, ज्यात त्यांची **status** समाविष्ट आहे. तुम्ही मॅन्युअली बदलेपर्यंत मॅन्युअल पेमेंटची status नेहमी **Pending** असेल.

![Payments list showing pending manual payment](/img/admin/payments-list.png)

**reference code** वर क्लिक करून पेमेंट पेजमध्ये प्रवेश करा. या पेजवर तुम्हाला पेंडिंग पेमेंटचे सर्व तपशील आहेत, जसे की reference ID, products, timestamps आणि बरेच काही.

![Payment details page with reference code and products](/img/admin/payments-list.png)

उजव्या स्तंभात, तुम्ही पेमेंटची status बदलू शकता. ती **Completed** वर बदलणे आणि **Activate Membership** पर्याय टॉगल केल्याने तुमच्या ग्राहकाची साइट सक्षम होईल आणि त्यांची membership सक्रिय होईल.

![Payment status change to Completed with Activate Membership toggle](/img/admin/payments-list.png)
