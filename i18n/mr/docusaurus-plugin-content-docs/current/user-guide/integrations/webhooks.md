---
title: वेबहुक्स
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) वर पहिली नजर {#a-first-look-on-webhooks-v2}

_**लक्ष द्या: हे वैशिष्ट्य किंवा लेख प्रगत वापरकर्त्यांसाठी आहे याची नोंद घ्या.**_

**webhook** हा Ultimate Multisite सारख्या अ‍ॅप किंवा सॉफ्टवेअरला इतर अनुप्रयोगांना रिअल-टाइम माहिती देण्याचा एक मार्ग आहे. webhook डेटा किंवा payloads घडताच इतर अनुप्रयोगांपर्यंत पोहोचवतो, म्हणजे तुम्हाला **डेटा त्वरित मिळतो.**

Ultimate Multisite मधून दुसऱ्या CRM किंवा प्रणालीकडे एखादी घटना ट्रिगर होताना काही विशिष्ट डेटा इंटिग्रेट किंवा पास करायचा असल्यास हे उपयुक्त ठरते. उदाहरणार्थ, प्रत्येक वेळी नवीन वापरकर्ता Account तयार झाल्यावर तुम्हाला वापरकर्त्याचे नाव आणि ईमेल पत्ता mailing list कडे पाठवायचा आहे.

## webhook कसा तयार करावा {#how-to-create-a-webhook}

webhook तयार करण्यासाठी, तुमच्या नेटवर्क admin Dashboard वर जा. **Ultimate Multisite > Webhooks > Add New Webhook** वर क्लिक करा.

![Add New Webhook बटणासह रिकामी Webhooks यादी पान](/img/admin/webhooks-list-empty.png)

यानंतर तुम्ही webhook कॉन्फिगरेशन संपादित करू शकता:

![Name, Event आणि URL फील्डसह Add New Webhook फॉर्म](/img/admin/webhook-add-modal.png)

नवीन webhook तयार करताना तुम्हाला **Name, URL,** आणि **Event** अशी माहिती विचारली जाईल. तुमच्या webhook साठी तुम्ही हवे ते नाव वापरू शकता. सर्वात महत्त्वाची फील्ड्स URL आणि Event आहेत.

![URL फील्ड आणि payload पूर्वावलोकन दाखवणारा webhook संपादन इंटरफेस](/img/admin/webhook-url-field.png)

URL हा **endpoint किंवा गंतव्य** आहे ज्याकडे Ultimate Multisite **payload किंवा डेटा** पाठवेल. हा तो अनुप्रयोग आहे जो डेटा प्राप्त करेल.

Zapier हे सर्वात सामान्य समाधान आहे जे वापरकर्ते तृतीय-पक्ष अनुप्रयोगाशी इंटिग्रेशन सोपे करण्यासाठी वापरतात. Zapier सारख्या प्लॅटफॉर्मशिवाय, तुम्हाला डेटा पकडून त्यावर प्रक्रिया करणारे custom function हाताने तयार करावे लागेल. **Zapier सह Ultimate Multisite webhook कसा वापरावा** यावरील हा लेख पहा.

या लेखात, webhook कसा कार्य करतो याची मूलभूत संकल्पना आणि Ultimate Multisite मध्ये उपलब्ध घटना आपण पाहणार आहोत. आपण [requestbin.com](https://requestbin.com/) नावाची तृतीय-पक्ष साइट वापरणार आहोत. ही साइट आपल्याला कोणतेही coding न करता endpoint तयार करण्यास आणि payload पकडण्यास अनुमती देईल. _**अस्वीकरण: ती फक्त आपल्याला डेटा प्राप्त झाला आहे हे दाखवेल.**_ payload वर कोणतीही प्रक्रिया किंवा कोणत्याही प्रकारची कृती केली जाणार नाही.

[requestbin.com](https://requestbin.com/) वर जा आणि Create Request Bin वर क्लिक करा.

त्या बटणावर क्लिक केल्यानंतर, तुमचे Account आधीच असल्यास ते तुम्हाला लॉग इन करण्यास किंवा साइन अप करण्यास सांगेल. तुमचे Account आधीच असल्यास ते तुम्हाला थेट त्यांच्या Dashboard कडे नेईल. त्यांच्या Dashboard वर, Ultimate Multisite webhook तयार करताना वापरता येईल असा endpoint किंवा URL तुम्हाला लगेच दिसेल.

URL कॉपी करा आणि Ultimate Multisite कडे परत जा. URL फील्डमध्ये endpoint ठेवा आणि dropdown मधून घटना निवडा. या उदाहरणात, आपण **Payment Received** निवडणार आहोत.

वापरकर्ता payment करतो तेव्हा ही घटना ट्रिगर होते. उपलब्ध सर्व घटना, त्यांचे वर्णन आणि payloads पानाच्या तळाशी सूचीबद्ध आहेत. webhook जतन करण्यासाठी **Add New Webhook** बटणावर क्लिक करा.

![Payment Received निवडलेला webhook घटना dropdown](/img/admin/webhook-event-picker.png)

आता आपण तयार केलेला webhook कार्यरत आहे का हे पाहण्यासाठी endpoint कडे चाचणी घटना पाठवू शकतो. आपण तयार केलेल्या webhook खालील **Send Test Event** वर क्लिक करून हे करू शकतो.

![एक कॉन्फिगर केलेला webhook आणि Send Test कृती दाखवणारी Webhooks यादी](/img/admin/webhooks-list-populated.png)

यात चाचणी यशस्वी झाल्याचे सांगणारी पुष्टीकरण विंडो दिसते.

![चाचणी payload पाठवल्यानंतर webhook चाचणी घटना परिणाम](/img/admin/webhook-test-result.png)

आता आपण _Requestbin_ साइटकडे परत गेलो तर आपल्याला दिसेल की काही चाचणी डेटा असलेला payload प्राप्त झाला आहे.

webhook आणि endpoints कसे कार्य करतात याचे हे मूलभूत तत्त्व आहे. तुम्ही custom endpoint तयार करणार असाल, तर Ultimate Multisite कडून तुम्हाला मिळणाऱ्या डेटावर प्रक्रिया करण्यासाठी custom function तयार करावे लागेल.
