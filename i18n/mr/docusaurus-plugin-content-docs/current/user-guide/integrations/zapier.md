---
title: Zapier एकत्रीकरण
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite चे Zapier सोबत एकत्रीकरण

आधीच्या एका लेखात, आपण [Webhooks](webhooks.md) बद्दल आणि ते 3rd party अॅप्लिकेशन्ससोबत एकत्रीकरणासाठी कसे वापरता येतात याबद्दल चर्चा केली होती.

Webhooks वापरणे थोडे गुंतागुंतीचे आहे कारण त्यासाठी कोडिंग आणि payloads पकडण्याचे प्रगत ज्ञान आवश्यक आहे. **Zapier** वापरणे हा यावर मात करण्याचा एक मार्ग आहे.

Zapier चे 5000+ पेक्षा जास्त अॅप्ससोबत एकत्रीकरण आहे, ज्यामुळे वेगवेगळ्या अॅप्लिकेशन्समधील संवाद सोपा होतो.

तुम्ही **Triggers** तयार करू शकता जे तुमच्या नेटवर्कवर events घडल्यावर सुरू होतील (उदा. एक account तयार होतो आणि account_create event ट्रिगर होतो) किंवा बाह्य events ला प्रतिसाद देऊन तुमच्या नेटवर्कवर **Actions** निर्माण करू शकता (उदा. तुमच्या Ultimate Multisite नेटवर्कमध्ये नवीन account membership तयार करणे).

हे शक्य आहे कारण **Ultimate Multisite Zapier चे triggers** आणि actions हे [REST API](https://developer.ultimatemultisite.com/api/docs/) द्वारे चालतात.

## सुरुवात कशी करायची

प्रथम, Zapier अॅप यादीमध्ये Ultimate Multisite शोधा. किंवा तुम्ही [या लिंकवर](https://zapier.com/apps/wp-ultimo/integrations) क्लिक करू शकता.

तुमच्या dashboard वर जा आणि नवीन Zap सेट करण्यासाठी डाव्या sidebar वरील **+** **Create Zap** बटणावर क्लिक करा.

![Create Zap बटण असलेले Zapier dashboard](/img/admin/webhooks-list.png)

तुम्हाला Zap तयार करण्याच्या पेजवर नेले जाईल.

शोध बॉक्समध्ये "wp ultimo" टाइप करा. **Beta** version पर्याय निवडण्यासाठी क्लिक करा.

![Zapier अॅप यादीमध्ये WP Ultimo शोधत आहे](/img/admin/webhooks-list.png)

आमचे अॅप निवडल्यानंतर, उपलब्ध event निवडा: **New Ultimate Multisite Event**.

![New Ultimate Multisite Event trigger निवडत आहे](/img/admin/webhooks-list.png)

आता आपल्याला Zapier ला **तुमच्या नेटवर्कचा** access द्यायचा आहे. **Sign in** वर क्लिक केल्यावर **API credentials** आवश्यक असलेली नवीन विंडो उघडेल.

![API credentials साठी Zapier Sign in प्रॉम्प्ट](/img/admin/webhooks-list.png)

तुमच्या network admin panel वर जा आणि **Ultimate Multisite > Settings** > **API & Webhooks** वर navigate करा आणि API Settings विभाग शोधा.

**Enable API** पर्याय निवडा कारण हे कनेक्शन काम करण्यासाठी ते आवश्यक आहे.

![Ultimate Multisite मधील Enable API पर्यायासह API Settings](/img/admin/webhooks-list.png)

API Key आणि API Secret फील्ड्सवरील **Copy to Clipboard** आयकॉन वापरा आणि त्या values integration स्क्रीनवर paste करा.

URL फील्डमध्ये, protocol सह (HTTP किंवा HTTPS) तुमचा पूर्ण नेटवर्क URL टाका.

![API Key, Secret, आणि URL फील्ड्ससह Zapier integration स्क्रीन](/img/admin/webhooks-list.png)

पुढील टप्प्यावर जाण्यासाठी **Yes, Continue** बटणावर क्लिक करा. सर्व काही व्यवस्थित झाले तर, तुम्हाला तुमचे नवीन कनेक्टेड account दिसेल! नवीन trigger तयार करण्यासाठी **Continue** वर क्लिक करा.

## नवीन Trigger कसे तयार करायचे

आता तुमचे account कनेक्ट झाले आहे, तुम्ही उपलब्ध events पाहू शकता. या tutorial साठी **payment_received** event निवडूया.

![Zapier trigger मध्ये payment_received event निवडत आहे](/img/admin/webhooks-list.png)

एकदा event निवडला आणि तुम्ही **continue** वर क्लिक केले की, **test step** दिसेल.

![Trigger साठी Zapier test step](/img/admin/webhooks-list.png)

या टप्प्यावर, Zapier तपासेल की तुमचा Zap **त्या event साठी विशिष्ट payload मिळवू** शकतो का. भविष्यातील त्याच प्रकारच्या events मध्ये, याच संरचनेची माहिती पाठवली जाईल.

![Payload सह यशस्वीरित्या पूर्ण झालेली Zapier trigger चाचणी](/img/admin/webhooks-list.png)

आमच्या tutorial मध्ये चाचणी **यशस्वीरित्या पूर्ण झाली** आणि payload उदाहरण माहिती परत आली. ही उदाहरण माहिती actions तयार करताना मार्गदर्शन करण्यासाठी उपयुक्त असेल. तुमचा trigger आता तयार आहे आणि इतर अॅप्लिकेशन्सशी जोडण्यासाठी सज्ज आहे.

## Actions कसे तयार करायचे

Actions इतर triggers मधील माहिती वापरून तुमच्या नेटवर्कमध्ये नवीन entries तयार करतात.

**action तयार करण्याच्या टप्प्यात** तुम्ही Ultimate Multisite **Beta** आणि **Create Items on Ultimate Multisite** पर्याय निवडाल.

![Create Items on Ultimate Multisite सह action तयार करत आहे](/img/admin/webhooks-list.png)

पुढील टप्प्यात तुम्ही एकतर तुमची authentication तयार कराल, जसे आम्ही **सुरुवात कशी करायची** मध्ये केले, किंवा आधी तयार केलेली authentication निवडाल. या tutorial मध्ये आम्ही आधी तयार केलेली तीच authentication निवडू.

![Zapier action साठी authentication निवडत आहे](/img/admin/webhooks-list.png)

### Action सेट करणे

हा **action चा मुख्य टप्पा** आहे आणि इथे गोष्टी थोड्या वेगळ्या आहेत. तुम्ही निवडणारी पहिली माहिती म्हणजे **Item**. Item म्हणजे तुमच्या नेटवर्कचे **माहिती मॉडेल** जसे की **Customers, Payments, Sites, Emails** आणि इतर.

![Zapier action साठी Item प्रकार निवडत आहे](/img/admin/webhooks-list.png)

item निवडल्यावर, फॉर्म **निवडलेल्या item साठी आवश्यक आणि पर्यायी फील्ड्स आणण्यासाठी पुनर्रचित होईल**.

उदाहरणार्थ, **Customer** item निवडल्यावर, फॉर्म फील्ड्स नेटवर्कमध्ये नवीन Customer तयार करण्यासाठी आवश्यक असलेले सर्वकाही आणतील.

![Zapier action setup मधील Customer item फील्ड्स](/img/admin/webhooks-list.png)

**required** म्हणून चिन्हांकित सर्व फील्ड्स भरल्यानंतर आणि continue वर क्लिक केल्यावर, शेवटची स्क्रीन तुम्हाला भरलेली फील्ड्स आणि न भरलेली फील्ड्स दाखवेल.

![भरलेली आणि न भरलेली फील्ड्स दाखवणारी Zapier action चाचणी](/img/admin/webhooks-list.png)

तुमची चाचणी पूर्ण होताच आणि यशस्वी होताच तुमचा action कॉन्फिगर झाला. तुमच्या action च्या चाचणीसह item तयार झाला का हे तुमच्या नेटवर्कवर तपासणे देखील महत्त्वाचे आहे.
