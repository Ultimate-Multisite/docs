---
title: सवलत कोड तयार करणे
sidebar_position: 19
_i18n_hash: d6adaf916f3e21b4fda2deeaa6672d00
---
# Discount Codes तयार करणे (v2)

_**महत्त्वाची नोंद: हा लेख Ultimate Multisite आवृत्ती 2.x संदर्भित करतो.**_

Ultimate Multisite सह तुम्ही तुमच्या ग्राहकांना त्यांच्या subscriptions वर सवलत देण्यासाठी discount codes तयार करू शकता. आणि ते तयार करणे सोपे आहे!

## Discount Codes तयार करणे आणि संपादित करणे

discount code तयार किंवा संपादित करण्यासाठी, **Ultimate Multisite > Discount Codes** येथे जा.

![कोणतेही codes अस्तित्वात येण्यापूर्वीची रिकामी स्थिती असलेली discount codes यादी](/img/config/discount-codes-empty.png)

तेथे तुम्हाला तुम्ही आधीच तयार केलेल्या discount codes ची यादी दिसेल.

नवीन coupon तयार करण्यासाठी तुम्ही **Add Discount** **Code** वर क्लिक करू शकता किंवा तुमच्याकडे असलेल्यांवर hover करून आणि **Edit** क्लिक करून ते संपादित करू शकता.

![Edit आणि Delete दुवे दाखवणाऱ्या hover क्रियांसह discount codes यादी](/img/config/discount-codes-list-hover.png)

![पृष्ठ शीर्षकात Add Discount Code बटण](/img/config/discount-codes-add-button.png)

तुम्हाला त्या पृष्ठावर पुनर्निर्देशित केले जाईल जिथे तुम्ही तुमचा coupon code तयार किंवा संपादित कराल. या उदाहरणात आपण नवीन तयार करू.

![सर्व विभाग दृश्यमान असलेले discount code संपादन पृष्ठ](/img/config/discount-code-edit.png)

येथे उपलब्ध settings पाहूया:

**Discount Code प्रविष्ट करा:** हे फक्त तुमच्या discount code चे नाव आहे. हा तो code नाही जो तुमच्या ग्राहकांना checkout form वर वापरावा लागेल.

**वर्णन:** येथे, हा coupon कशासाठी आहे ते तुम्ही थोडक्यात वर्णन करू शकता.

![संपादन पृष्ठाच्या वरच्या भागातील discount code नाव आणि वर्णन fields](/img/config/discount-code-description.png)

तुम्ही discount code सक्रिय किंवा निष्क्रिय म्हणूनही पाहू शकता:

![discount code सक्रिय स्थिती](/img/config/discount-code-active.png)

**Coupon code:** येथे तुम्ही checkout दरम्यान तुमच्या ग्राहकांना प्रविष्ट करावा लागणारा code परिभाषित करता.

![checkout वेळी ग्राहक code प्रविष्ट करतात ते coupon code field](/img/config/discount-code-coupon-field.png)

**Discount:** येथे, तुम्ही तुमच्या discount code साठी पैशांची **टक्केवारी** किंवा **निश्चित रक्कम** सेट करू शकता.

![टक्केवारी किंवा निश्चित-रक्कम dropdown सह discount रक्कम setting](/img/config/discount-code-amount.png)

**नूतनीकरणांवर लागू करा:** हा पर्याय बंद केला असल्यास, हा discount code फक्त **पहिल्या पेमेंट** वर लागू केला जाईल. इतर सर्व पेमेंट्सना कोणतीही सवलत नसेल. हा पर्याय चालू केला असल्यास, discount code सर्व भविष्यातील पेमेंट्ससाठी वैध असेल.

**Setup fee discount:** हा पर्याय बंद केला असल्यास, coupon code ऑर्डरच्या setup fee साठी **कोणतीही सवलत देणार नाही**. हा पर्याय चालू केला असल्यास, हा coupon code तुमच्या plans च्या setup fee वर लागू करेल अशी सवलत (टक्केवारी किंवा निश्चित रक्कम) तुम्ही सेट करू शकता.

![नूतनीकरणांवर लागू करा आणि setup fee discount toggle पर्याय](/img/config/discount-code-renewals.png)

**Active:** हा coupon code हाताने सक्रिय किंवा निष्क्रिय करा.

![discount code हाताने सक्षम किंवा अक्षम करण्यासाठी Active toggle](/img/config/discount-code-active.png)

**Advanced Options** अंतर्गत, आपल्याकडे खालील settings आहेत:

![discount code प्रगत पर्याय](/img/config/discount-code-advanced.png)

**वापर मर्यादित करा:**

  * **Uses:** येथे, discount code किती वेळा वापरला गेला ते तुम्ही पाहू शकता.

  * **Max uses:** यामुळे वापरकर्ते हा discount code किती वेळा वापरू शकतात याची मर्यादा लागेल. उदाहरणार्थ, तुम्ही येथे 10 ठेवले, तर coupon फक्त 10 वेळा वापरता येईल. या मर्यादेनंतर, coupon code आणखी वापरता येणार नाही.

![सध्याच्या uses count आणि max uses field सह Limit uses setting](/img/config/discount-code-limit-uses.png)

**प्रारंभ आणि समाप्ती तारखा:** येथे तुम्हाला तुमच्या coupon मध्ये प्रारंभ तारीख आणि/किंवा समाप्ती तारीख जोडण्याचा पर्याय असेल.

![discount code वेळापत्रकासाठी प्रारंभ आणि समाप्ती तारीख fields](/img/config/discount-code-dates.png)

**products मर्यादित करा:** तुम्ही **Select products** चालू केल्यास, तुमचे सर्व products तुम्हाला दाखवले जातील. कोणता product हा coupon code स्वीकारू शकतो हे हाताने निवडण्याचा (चालू किंवा बंद करून) पर्याय तुम्हाला असेल. येथे बंद केलेले products तुमचे ग्राहक त्यांच्यासाठी हा coupon code वापरण्याचा प्रयत्न केल्यास कोणताही बदल दाखवणार नाहीत.

![प्रत्येक product साठी toggle switches असलेला Limit products विभाग](/img/config/discount-code-limit-products.png)

हे सर्व पर्याय सेट केल्यानंतर, तुमचा coupon जतन करण्यासाठी **Save Discount Code** वर क्लिक करा आणि काम झाले!

![संपादन पृष्ठाच्या तळाशी Save Discount Code बटण](/img/config/discount-code-save.png)

coupon आता तुमच्या यादीत आहे आणि तेथून तुम्ही तो **संपादित किंवा हटवण्यासाठी** क्लिक करू शकता.

![Edit आणि Delete hover क्रियांसह यादीतील discount code ओळ](/img/config/discount-codes-list-hover.png)

###

### URL Parameters वापरणे:

तुम्हाला तुमच्या pricing tables सानुकूल करायच्या असतील किंवा तुमच्या website साठी छान coupon code पृष्ठ तयार करायचे असेल आणि तुमच्या checkout form वर discount code आपोआप लागू करायचा असेल, तर तुम्ही हे URL parameters द्वारे करू शकता.

प्रथम, तुम्हाला तुमच्या plan साठी shareable link मिळवावी लागेल. हे करण्यासाठी, **Ultimate Multisite > Products** येथे जा आणि plan निवडा.

**Click to Copy Shareable Link** बटणावर क्लिक करा. यामुळे तुम्हाला या विशिष्ट plan ची shareable link मिळेल. आमच्या बाबतीत, दिलेली shareable link [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/)_._ होती.

![shareable link बटणासह product पृष्ठ](/img/config/products-list.png)

या विशिष्ट plan वर तुमचा discount code लागू करण्यासाठी, URL मध्ये फक्त **?discount_code=XXX** हा parameter जोडा. येथे **XXX** हा coupon code आहे.

येथे आमच्या उदाहरणात, आम्ही या विशिष्ट product वर **50OFF** हा coupon code लागू करू.

या विशिष्ट plan साठी आणि 50OFF discount code लागू केलेला URL असा दिसेल: [_**mynetworkdomain.com/register/premium/**_](http://mynetworkdomain.com/register/premium/) _**?discount_code=50OFF**_.

###
