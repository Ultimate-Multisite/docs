---
title: Zapier एकत्रीकरण
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite ला Zapier सोबत एकत्रित करणे {#integrating-ultimate-multisite-with-zapier}

एका लेखात, आपण [वेबहुक्स](webhooks.md) बद्दल चर्चा केली आणि 3rd party अनुप्रयोगांशी एकत्रीकरणासाठी त्यांचा कसा वापर करता येतो ते पाहिले.

वेबहुक्स वापरणे थोडे गुंतागुंतीचे आहे कारण त्यासाठी कोडिंग आणि पेलोड पकडण्याचे प्रगत ज्ञान आवश्यक असते. **Zapier** वापरणे हा त्यावर मात करण्याचा एक मार्ग आहे.

Zapier चे 5000+ पेक्षा जास्त अॅप्ससोबत एकत्रीकरण आहे, ज्यामुळे वेगवेगळ्या अनुप्रयोगांमधील संवाद सोपा होतो.

तुमच्या नेटवर्कवर घटना घडल्यावर सुरू होणारे **ट्रिगर्स** तुम्ही तयार करू शकता (उदा. एखादे Account तयार होते आणि account_create घटना ट्रिगर करते) किंवा बाह्य घटनांना प्रतिसाद देत तुमच्या नेटवर्कवर **Actions** निर्माण करू शकता (उदा. तुमच्या Ultimate Multisite नेटवर्कमध्ये नवीन Account सदस्यत्व तयार करणे).

हे शक्य आहे कारण **Ultimate Multisite Zapier चे ट्रिगर्स** आणि actions [REST API](https://developer.ultimatemultisite.com/api/docs/) द्वारे समर्थित आहेत.

## सुरुवात कशी करावी {#how-to-start}

प्रथम, Zapier अॅप यादीत Ultimate Multisite शोधा. पर्यायाने, तुम्ही [या लिंकवर](https://zapier.com/apps/wp-ultimo/integrations) क्लिक करू शकता.

तुमच्या Dashboard वर जा आणि नवीन Zap सेट अप करण्यासाठी डाव्या साइडबारवरील **+** **Create Zap** बटण दाबा.

![Create Zap बटणासह Zapier Dashboard](/img/admin/webhooks-list.png)

तुम्हाला Zap निर्मिती पृष्ठावर पुनर्निर्देशित केले जाईल.

शोध बॉक्समध्ये "wp ultimo" टाइप करा. **Beta** आवृत्तीचा पर्याय निवडण्यासाठी क्लिक करा.

![Zapier अॅप यादीत WP Ultimo शोधणे](/img/admin/webhooks-list.png)

आमचे अॅप निवडल्यानंतर, उपलब्ध घटना निवडा: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event ट्रिगर निवडणे](/img/admin/webhooks-list.png)

आता आपल्याला Zapier ला **तुमच्या नेटवर्कला** प्रवेश द्यायचा आहे. **Sign in** वर क्लिक केल्यावर **API credentials** आवश्यक असलेली नवीन विंडो उघडेल.

![API credentials साठी Zapier Sign in सूचना](/img/admin/webhooks-list.png)

तुमच्या नेटवर्क अॅडमिन पॅनेलवर जा आणि **Ultimate Multisite > Settings** > **API & Webhooks** येथे नेव्हिगेट करा आणि API Settings विभाग शोधा.

या जोडणीने काम करण्यासाठी ते आवश्यक असल्याने **Enable API** पर्याय निवडा.

![API Settings आणि Enable API पर्यायांसह API and Webhooks सेटिंग्ज](/img/admin/settings-api-webhooks.png)

API Key आणि API Secret फील्डवरील **Copy to Clipboard** आयकॉन वापरा आणि ती मूल्ये एकत्रीकरण स्क्रीनवर पेस्ट करा.

URL फील्डमध्ये, प्रोटोकॉलसह (HTTP किंवा HTTPS) तुमच्या नेटवर्कचा पूर्ण URL घाला.

![API Key, Secret आणि URL फील्डसह Zapier एकत्रीकरण स्क्रीन](/img/admin/webhooks-list.png)

पुढील पायरीवर जाण्यासाठी **Yes, Continue** बटणावर क्लिक करा. सर्वकाही व्यवस्थित झाले, तर तुमच्या नवीन जोडलेल्या Account ने तुमचे स्वागत होईल! नवीन ट्रिगर तयार करण्यासाठी **Continue** वर क्लिक करा.

## नवीन Trigger कसा तयार करावा {#how-to-create-a-new-trigger}

आता तुमचे Account जोडले गेले आहे, त्यामुळे तुम्ही उपलब्ध घटना पाहू शकता. या ट्युटोरियलसाठी **payment_received** घटना निवडूया.

![Zapier ट्रिगरमध्ये payment_received घटना निवडणे](/img/admin/webhooks-list.png)

घटना निवडल्यानंतर आणि तुम्ही **continue** वर क्लिक केल्यावर, एक **चाचणी पायरी** दिसेल.

![ट्रिगरसाठी Zapier चाचणी पायरी](/img/admin/webhooks-list.png)

या टप्प्यावर, Zapier तुमचा Zap **त्या घटनेसाठी विशिष्ट पेलोड मिळवू शकतो का** याची चाचणी करेल. भविष्यात त्याच प्रकारच्या घटनांमध्ये, याच संरचनेतील माहिती पाठवली जाईल.

![पेलोडसह Zapier ट्रिगर चाचणी यशस्वीरित्या पूर्ण झाली](/img/admin/webhooks-list.png)

आमच्या ट्युटोरियलमध्ये चाचणी **यशस्वीरित्या पूर्ण झाली** आणि पेलोड उदाहरण माहिती परत आली. Actions तयार करताना मार्गदर्शनासाठी ही उदाहरण माहिती उपयुक्त ठरेल. तुमचा ट्रिगर आता तयार आहे आणि इतर अनुप्रयोगांशी जोडण्यासाठी सज्ज आहे.

## Actions कसे तयार करावेत {#how-to-create-actions}

Actions तुमच्या नेटवर्कमध्ये नवीन नोंदी तयार करण्यासाठी इतर ट्रिगर्समधील माहिती वापरतात.

**action तयार करण्याच्या पायरीत** तुम्ही Ultimate Multisite **Beta** आणि **Create Items on Ultimate Multisite** हा पर्याय निवडाल.

![Create Items on Ultimate Multisite सह action तयार करणे](/img/admin/webhooks-list.png)

पुढील पायरीत तुम्ही तुमचे प्रमाणीकरण तयार कराल, अगदी आपण **सुरुवात कशी करावी** मध्ये केले तसे, किंवा तयार केलेले प्रमाणीकरण निवडाल. या ट्युटोरियलमध्ये आपण आधी तयार केलेले तेच प्रमाणीकरण निवडू.

![Zapier action साठी प्रमाणीकरण निवडणे](/img/admin/webhooks-list.png)

### Action सेट अप करणे {#setting-up-the-action}

ही **action ची मुख्य पायरी** आहे आणि येथे गोष्टी थोड्या वेगळ्या आहेत. तुम्ही निवडणारी पहिली माहिती म्हणजे **Item**. Item हा तुमच्या नेटवर्कचा **माहिती मॉडेल** आहे जसे की **Customers, Payments, Sites, Emails** आणि इतर.

![Zapier action साठी Item प्रकार निवडणे](/img/admin/webhooks-list.png)

एखादा item निवडल्यावर, निवडलेल्या item साठी **आवश्यक आणि पर्यायी फील्ड आणण्यासाठी फॉर्म पुन्हा मांडला जाईल**.

उदाहरणार्थ, **Customer** हा item निवडल्यावर, नेटवर्कमध्ये नवीन Customer तयार करण्यासाठी भरावे लागणारे सर्व काही फॉर्म फील्डमध्ये येईल.

![Zapier action सेटअपमधील Customer item फील्ड्स](/img/admin/webhooks-list.png)

**required** म्हणून चिन्हांकित सर्व फील्ड भरल्यानंतर आणि continue वर क्लिक केल्यावर, शेवटची स्क्रीन तुम्हाला भरलेली फील्ड आणि रिकामी ठेवलेली फील्ड दाखवेल.

![भरलेली आणि न भरलेली फील्ड दाखवणारी Zapier action चाचणी](/img/admin/webhooks-list.png)

तुमची चाचणी पूर्ण होताच आणि यशस्वी होताच तुमची action कॉन्फिगर होते. तुमच्या action च्या चाचणीसह item तयार झाला आहे का हे तुमच्या नेटवर्कवर तपासणेही महत्त्वाचे आहे.
