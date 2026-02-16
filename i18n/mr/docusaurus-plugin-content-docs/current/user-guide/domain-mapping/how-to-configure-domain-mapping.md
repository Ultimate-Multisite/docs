---
title: डोमेन मॅपिंग कसे कॉन्फिगर करावे
sidebar_position: 6
_i18n_hash: 1bb022a0d812fd87791d9ea476f7be84
---
# डोमेन मॅपिंग कसे सेट करावे (v2)

_**महत्त्वाची सूचना: हा लेख Ultimate Multisite आवृत्ती 2.x संदर्भात आहे.**_

प्रीमियम नेटवर्कच्या सर्वात शक्तिशाली वैशिष्ट्यांपैकी एक म्हणजे आपल्या ग्राहकांना त्यांच्या साइटवर टॉप-लेव्हल डोमेन जोडण्याची संधी देणे. शेवटी, कोणते अधिक व्यावसायिक दिसते: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) की [_**joesbikeshop.com**_](http://joesbikeshop.com)? म्हणूनच Ultimate Multisite हे वैशिष्ट्य आधीपासूनच समाविष्ट करून देते, थर्ड-पार्टी plugins वापरण्याची गरज नाही.

## डोमेन मॅपिंग म्हणजे काय?

नावावरून स्पष्ट होते त्याप्रमाणे, डोमेन मॅपिंग म्हणजे Ultimate Multisite द्वारे दिलेली सुविधा जी कस्टम डोमेनसाठी आलेली विनंती घेऊन त्या विशिष्ट डोमेनशी जोडलेल्या नेटवर्कमधील संबंधित साइटवर मॅप करते.

### तुमच्या Ultimate Multisite नेटवर्कवर डोमेन मॅपिंग कसे सेट करावे

डोमेन मॅपिंग काम करण्यासाठी तुम्हाला काही सेटअप करावे लागते. सुदैवाने, Ultimate Multisite कठीण काम स्वयंचलित करते जेणेकरून तुम्ही आवश्यकता सहज पूर्ण करू शकता.

Ultimate Multisite इन्स्टॉलेशन दरम्यान, विझार्ड आपोआप **sunrise.php** निर्दिष्ट फोल्डरमध्ये कॉपी आणि इन्स्टॉल करेल. **हा टप्पा पूर्ण होईपर्यंत विझार्ड तुम्हाला पुढे जाऊ देणार नाही**.

![Ultimate Multisite इन्स्टॉलेशन विझार्ड sunrise.php टप्प्यासह](/img/config/settings-domain-mapping.png)

याचा अर्थ असा की Ultimate Multisite इन्स्टॉलेशन विझार्डने तुमचे नेटवर्क सेट करणे पूर्ण केल्यावर, तुम्ही लगेच कस्टम डोमेन मॅप करणे सुरू करू शकता.

लक्षात घ्या की Ultimate Multisite मध्ये डोमेन मॅपिंग अनिवार्य नाही. तुमच्याकडे WordPress Multisite चे नेटिव्ह डोमेन मॅपिंग फंक्शन किंवा इतर कोणतेही डोमेन मॅपिंग सोल्यूशन वापरण्याचा पर्याय आहे.

इतर डोमेन मॅपिंग सोल्यूशन्सना जागा देण्यासाठी तुम्हाला Ultimate Multisite डोमेन मॅपिंग बंद करायचे असल्यास, तुम्ही **Ultimate Multisite > Settings > Domain Mapping** अंतर्गत हे वैशिष्ट्य बंद करू शकता.

![Enable toggle सह Domain Mapping सेटिंग्ज](/img/config/settings-domain-mapping.png)

या पर्यायाच्या खाली, तुम्हाला **Force Admin Redirect** पर्याय देखील दिसेल. हा पर्याय तुम्हाला नियंत्रित करू देतो की तुमचे ग्राहक त्यांच्या admin dashboard वर कस्टम डोमेन आणि subdomain दोन्हीवरून प्रवेश करू शकतील की फक्त एकावरून.

तुम्ही **Force redirect to mapped domain** निवडल्यास, तुमचे ग्राहक फक्त त्यांच्या कस्टम डोमेनवरून admin dashboard वर प्रवेश करू शकतील.

**Force redirect to network domain** पर्याय नेमके उलट करेल - तुमच्या ग्राहकांना फक्त त्यांच्या subdomain वरून dashboard वर प्रवेश करता येईल, जरी ते कस्टम डोमेनवर साइन इन करण्याचा प्रयत्न करत असले तरीही.

आणि **Allow access to the admin by both mapped domain domain and network domain** पर्याय त्यांना subdomain आणि कस्टम डोमेन दोन्हीवरून admin dashboard वर प्रवेश करू देतो.

![डोमेन मॅपिंगसाठी Force Admin Redirect पर्याय](/img/config/settings-domain-mapping.png)

कस्टम डोमेन मॅप करण्याचे दोन मार्ग आहेत. पहिला म्हणजे super admin म्हणून तुमच्या network admin dashboard वरून डोमेन नाव मॅप करणे आणि दुसरा म्हणजे account page अंतर्गत subsite admin dashboard द्वारे.

पण तुम्ही तुमच्या नेटवर्कमधील एखाद्या subsite वर कस्टम डोमेन मॅप करण्यापूर्वी, तुम्हाला खात्री करावी लागेल की डोमेन नावाच्या **DNS सेटिंग्ज** योग्यरित्या कॉन्फिगर केल्या आहेत.

### 

### डोमेन DNS सेटिंग्ज योग्यरित्या कॉन्फिगर केल्याची खात्री करणे

मॅपिंग काम करण्यासाठी, तुम्हाला खात्री करावी लागेल की तुम्ही मॅप करण्याचे नियोजन करत असलेला डोमेन तुमच्या नेटवर्कच्या IP पत्त्याकडे पॉइंट करत आहे. लक्षात घ्या की तुम्हाला नेटवर्क IP पत्ता हवा आहे - जिथे Ultimate Multisite इन्स्टॉल केले आहे त्या डोमेनचा IP पत्ता - तुम्हाला मॅप करायच्या असलेल्या कस्टम डोमेनचा IP पत्ता नाही. विशिष्ट डोमेनचा IP पत्ता शोधण्यासाठी, आम्ही [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) वर जाण्याची शिफारस करतो, उदाहरणार्थ.

डोमेन योग्यरित्या मॅप करण्यासाठी, तुम्हाला तुमच्या **DNS** कॉन्फिगरेशनमध्ये त्या **IP पत्त्याकडे** पॉइंट करणारा **A RECORD** जोडणे आवश्यक आहे. DNS व्यवस्थापन वेगवेगळ्या domain registrars मध्ये खूप वेगळे असते, पण "_Creating A Record on XXXX_" शोधल्यास ऑनलाइन भरपूर ट्यूटोरियल्स उपलब्ध आहेत जिथे XXXX तुमचा domain registrar आहे (उदा.: "_Creating A Record on GoDaddy_").

हे काम करण्यात तुम्हाला अडचण येत असल्यास, **तुमच्या domain registrar च्या support शी संपर्क साधा** आणि ते या भागात तुम्हाला मदत करू शकतील.

तुम्ही तुमच्या ग्राहकांना त्यांचे स्वतःचे डोमेन मॅप करण्याची परवानगी देण्याचा विचार करत असल्यास, त्यांना हे काम स्वतः करावे लागेल. त्यांना A Record तयार करण्यात अडचण येत असल्यास त्यांना त्यांच्या registrar च्या support system कडे पाठवा.

### Super Admin म्हणून कस्टम डोमेन नाव मॅप करणे

तुम्ही तुमच्या नेटवर्कवर super admin म्हणून लॉग इन केल्यावर, तुम्ही **Ultimate Multisite > Domains** अंतर्गत जाऊन सहज कस्टम डोमेन नावे जोडू आणि व्यवस्थापित करू शकता.

![Ultimate Multisite मधील Domains यादी पेज](/img/admin/domains-list.png)

या पेजवर, तुम्ही वरच्या **Add Domain** बटणावर क्लिक करू शकता आणि हे एक modal विंडो आणेल जिथे तुम्ही **कस्टम डोमेन नाव**, तुम्हाला कस्टम डोमेन नाव लागू करायचे असलेली **subsite**, आणि ते **primary domain** नाव म्हणून सेट करायचे की नाही हे ठरवू शकता (लक्षात घ्या की तुम्ही **एका subsite वर अनेक डोमेन नावे मॅप** करू शकता).

![डोमेन नाव आणि साइट फील्ड्ससह Add Domain modal](/img/admin/domains-list.png)

सर्व माहिती भरल्यानंतर, तुम्ही तळाशी असलेल्या **Add Existing Domain** बटणावर क्लिक करू शकता.

यामुळे कस्टम डोमेनची DNS माहिती सत्यापित करण्याची आणि मिळवण्याची प्रक्रिया सुरू होईल. प्रक्रिया कुठपर्यंत पोहोचली आहे हे पाहण्यासाठी पेजच्या तळाशी एक log देखील दिसेल. ही प्रक्रिया पूर्ण होण्यास काही मिनिटे लागू शकतात.

सर्वकाही योग्यरित्या सेट केले असल्यास **Stage** किंवा स्थिती **Checking DNS** वरून **Ready** मध्ये बदलेल.

![Domain stage Checking DNS वरून Ready मध्ये बदलत आहे](/img/admin/domains-list.png)

![Domains यादीत Ready स्थिती असलेला डोमेन](/img/admin/domains-list.png)

तुम्ही डोमेन नावावर क्लिक केल्यास, तुम्हाला त्यामध्ये काही पर्याय दिसतील. त्यांवर एक नजर टाकूया:

![Stage, site, active आणि SSL पर्यायांसह Domain तपशील पेज](/img/admin/domains-list.png)

**Stage:** डोमेन कोणत्या टप्प्यावर आहे हे दर्शवते. तुम्ही पहिल्यांदा डोमेन जोडता तेव्हा, ते कदाचित **Checking DNS** टप्प्यावर असेल. प्रक्रिया DNS एंट्रीज तपासेल आणि त्या योग्य असल्याची पुष्टी करेल. त्यानंतर, डोमेन **Checking SSL** टप्प्यावर जाईल. Ultimate Multisite डोमेनला SSL आहे की नाही हे तपासेल आणि तुमचा डोमेन **Ready** किंवा **Ready (without SSL)** म्हणून वर्गीकृत करेल.

**Site:** या डोमेनशी संबंधित subdomain. मॅप केलेला डोमेन या विशिष्ट साइटचे content दाखवेल.

**Active:** डोमेन सक्रिय किंवा निष्क्रिय करण्यासाठी तुम्ही हा पर्याय चालू किंवा बंद करू शकता.

**Is Primary Domain?:** तुमच्या ग्राहकांकडे प्रत्येक साइटसाठी एकापेक्षा जास्त मॅप केलेले डोमेन असू शकतात. विशिष्ट साइटसाठी हा primary domain आहे का ते निवडण्यासाठी हा पर्याय वापरा.

**Is Secure?:** Ultimate Multisite डोमेन सक्षम करण्यापूर्वी त्याला SSL certificate आहे की नाही हे तपासत असले तरी, तुम्ही मॅन्युअली SSL certificate सह किंवा त्याशिवाय डोमेन लोड करणे निवडू शकता. लक्षात घ्या की वेबसाइटला SSL certificate नसल्यास आणि तुम्ही SSL सह लोड करण्याचा प्रयत्न केल्यास, त्रुटी येऊ शकतात.

### Subsite वापरकर्ता म्हणून कस्टम डोमेन नाव मॅप करणे

Subsite administrators देखील त्यांच्या subsite admin dashboard वरून कस्टम डोमेन नावे मॅप करू शकतात.

प्रथम, तुम्हाला **Domain mapping** सेटिंग्ज अंतर्गत हा पर्याय सक्षम केल्याची खात्री करावी लागेल. खालील स्क्रीनशॉट पहा.

![Subsite वापरकर्त्यांना डोमेन मॅप करण्याची परवानगी देणारी Domain mapping सेटिंग्ज](/img/config/settings-domain-mapping.png)

तुम्ही **Ultimate Multisite > Products** वर **Plan** स्तरावर किंवा product पर्यायांमध्ये देखील हा पर्याय सेट किंवा कॉन्फिगर करू शकता.

![Product सेटिंग्जमधील Product custom domains पर्याय](/img/config/settings-domain-mapping.png)

यापैकी कोणताही पर्याय सक्षम असल्यास आणि subsite वापरकर्त्याला कस्टम डोमेन नावे मॅप करण्याची परवानगी असल्यास, subsite वापरकर्त्याला **Account** पेज अंतर्गत **Domains** नावाचा metabox दिसेल.

![Subsite account पेजवरील Domains metabox](/img/admin/domains-list.png)

वापरकर्ता **Add Domain** बटणावर क्लिक करू शकतो आणि ते काही सूचनांसह modal विंडो आणेल.

![Subsite वापरकर्त्यांसाठी DNS सूचनांसह Add Domain modal](/img/admin/domains-list.png)

वापरकर्ता नंतर **Next Step** वर क्लिक करून कस्टम डोमेन नाव जोडू शकतो. ते हा primary domain असेल की नाही हे देखील निवडू शकतात.

![Primary domain पर्यायासह कस्टम डोमेन नाव फील्ड जोडा](/img/admin/domains-list.png)

![DNS verification सुरू करण्यासाठी Add Domain वर क्लिक करा](/img/admin/domains-list.png)**Add Domain** वर क्लिक केल्यास कस्टम डोमेनची DNS माहिती सत्यापित करण्याची आणि मिळवण्याची प्रक्रिया सुरू होईल.

### Domain Syncing बद्दल

Domain Syncing ही एक प्रक्रिया आहे जिथे Ultimate Multisite **डोमेन मॅपिंग काम करण्यासाठी** तुमच्या hosting account मध्ये add-on domain म्हणून कस्टम डोमेन नाव जोडते.

जर तुमच्या hosting provider चे Ultimate Multisite domain mapping वैशिष्ट्यासह integration असेल तर Domain syncing आपोआप होते. सध्या, हे hosting providers आहेत _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ आणि _Cpanel._

तुम्हाला हे integration Ultimate Multisite settings मध्ये **Integration** tab अंतर्गत सक्रिय करावे लागेल.

![Ultimate Multisite settings मधील Integration tab](/img/config/settings-domain-mapping.png)

![Domain syncing साठी Hosting provider integration सेटिंग्ज](/img/config/settings-domain-mapping.png)

_लक्षात घ्या की तुमचा hosting provider वर नमूद केलेल्यांपैकी एक नसल्यास, **तुम्हाला तुमच्या hosting account मध्ये मॅन्युअली डोमेन नाव sync किंवा जोडावे लागेल**._
