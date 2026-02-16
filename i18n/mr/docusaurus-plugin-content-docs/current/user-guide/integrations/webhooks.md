---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) ची पहिली ओळख

_**लक्ष द्या: हे feature किंवा लेख प्रगत वापरकर्त्यांसाठी आहे.**_

**Webhook** म्हणजे Ultimate Multisite सारख्या app किंवा software ला इतर applications ना रिअल-टाइम माहिती पुरवण्याचा एक मार्ग. Webhook डेटा किंवा payloads इतर applications ना घटना घडताच पाठवतो, म्हणजे तुम्हाला **डेटा लगेच मिळतो.**

Ultimate Multisite मधून दुसऱ्या CRM किंवा system मध्ये प्रत्येक वेळी event trigger झाल्यावर विशिष्ट डेटा integrate करणे किंवा पाठवणे आवश्यक असल्यास हे उपयुक्त आहे. उदाहरणार्थ, प्रत्येक वेळी नवीन user account तयार झाल्यावर तुम्हाला वापरकर्त्याचे नाव आणि email address mailing list मध्ये पाठवायचे आहे.

## Webhook कसे तयार करायचे

Webhook तयार करण्यासाठी, तुमच्या network admin dashboard वर जा. **Ultimate Multisite > Webhooks > Add New Webhook** वर क्लिक करा.

![Add New Webhook बटण असलेले Webhooks list page](/img/admin/webhooks-list.png)

नवीन webhook तयार करताना तुम्हाला **Name, URL,** आणि **Event** सारखी माहिती विचारली जाईल. तुम्ही तुमच्या webhook साठी कोणतेही नाव वापरू शकता. सर्वात महत्त्वाचे fields म्हणजे URL आणि Event.

![Name, URL, आणि Event fields असलेला नवीन webhook form](/img/admin/webhooks-list.png)

URL म्हणजे **endpoint किंवा गंतव्य** जिथे Ultimate Multisite **payload किंवा डेटा** पाठवेल. हा तो application आहे जो डेटा प्राप्त करेल.

Zapier हे सर्वात सामान्य solution आहे जे वापरकर्ते 3rd party application सह integration सोपे करण्यासाठी वापरतात. Zapier सारख्या platform शिवाय, तुम्हाला डेटा पकडण्यासाठी आणि त्यावर प्रक्रिया करण्यासाठी custom function स्वतः तयार करावे लागेल. **Ultimate Multisite webhook Zapier सोबत कसे वापरायचे** यावरील हा लेख पहा.

या लेखात, आपण webhook कसे काम करते याची मूलभूत संकल्पना आणि Ultimate Multisite मध्ये उपलब्ध events पाहणार आहोत. आपण [requestbin.com](https://requestbin.com/) नावाची 3rd party साइट वापरणार आहोत. ही साइट कोणतेही coding न करता endpoint तयार करून payload पकडण्याची परवानगी देते. _**सूचना: हे फक्त आपल्याला दाखवेल की डेटा प्राप्त झाला आहे.**_ Payload वर कोणतीही प्रक्रिया किंवा कोणत्याही प्रकारची action केली जाणार नाही.

[requestbin.com](https://requestbin.com/) वर जा आणि Create Request Bin वर क्लिक करा.

![RequestBin website Create Request Bin बटण](/img/admin/webhooks-list.png)

त्या बटणावर क्लिक केल्यानंतर, तुमचे आधीच account असल्यास log in करायला सांगितले जाईल किंवा sign up करायला सांगितले जाईल. तुमचे आधीच account असल्यास ते तुम्हाला थेट त्यांच्या dashboard वर नेईल. त्यांच्या dashboard वर, तुम्हाला तुमचे Ultimate Multisite webhook तयार करण्यासाठी वापरता येणारा endpoint किंवा URL लगेच दिसेल.

![Endpoint URL दाखवणारे RequestBin dashboard](/img/admin/webhooks-list.png)

URL copy करा आणि Ultimate Multisite वर परत जा. URL field मध्ये endpoint टाका आणि dropdown मधून event निवडा. या उदाहरणात, आपण **Payment Received** निवडणार आहोत.

हा event वापरकर्त्याने payment केल्यावर trigger होतो. सर्व उपलब्ध events, त्यांचे वर्णन, आणि payloads page च्या तळाशी सूचीबद्ध आहेत. Webhook save करण्यासाठी **Add New Webhook** बटणावर क्लिक करा.

![Payment Received event सह configure केलेला Webhook](/img/admin/webhooks-list.png)

आता आपण तयार केलेला webhook काम करत आहे का हे पाहण्यासाठी endpoint वर test event पाठवू शकतो. आपण तयार केलेल्या webhook खाली **Send Test Event** वर क्लिक करून हे करू शकतो.

![Webhook खालील Send Test Event पर्याय](/img/admin/webhooks-list.png)

हे test यशस्वी झाला असे सांगणारी confirmation window दाखवते.

![Webhook test event यशस्वी confirmation](/img/admin/webhooks-list.png)

आता जर आपण _Requestbin_ साइटवर परत गेलो तर आपल्याला दिसेल की काही test data असलेला payload प्राप्त झाला आहे.

![प्राप्त झालेला webhook payload data दाखवणारे RequestBin](/img/admin/webhooks-list.png)

हे webhook आणि endpoints कसे काम करतात याचे मूलभूत तत्त्व आहे. जर तुम्हाला custom endpoint तयार करायचे असेल, तर Ultimate Multisite कडून प्राप्त होणाऱ्या डेटावर प्रक्रिया करण्यासाठी तुम्हाला custom function तयार करावे लागेल.
