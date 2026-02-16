---
title: साइट टेम्पलेट्स
sidebar_position: 4
_i18n_hash: 35467c61accd92dcfce7e212e2b35474
---
# साइट टेम्पलेट्स (v2)

_**टीप: हा लेख Ultimate Multisite आवृत्ती 2.x साठी आहे. जर तुम्ही आवृत्ती 1.x वापरत असाल,**_ **हा लेख पहा** _**.**_

Ultimate Multisite सह प्रीमियम नेटवर्क तयार करताना आमचे ध्येय म्हणजे शक्य तितक्या प्रक्रिया स्वयंचलित करणे आणि त्याचबरोबर आमच्या ग्राहकांना त्यांच्या वेबसाइट्स तयार करताना लवचिकता आणि विविध पर्याय देणे. हे संतुलन साधण्याचा एक सोपा मार्ग म्हणजे Ultimate Multisite च्या Site Templates वैशिष्ट्याचा वापर करणे.

## Site Template म्हणजे काय?

नावावरून समजते त्याप्रमाणे, Site Template हे एक बेस साइट आहे जे तुमच्या नेटवर्कमध्ये नवीन साइट्स तयार करताना पाया म्हणून वापरता येते.

याचा अर्थ तुम्ही एक बेस साइट तयार करू शकता, वेगवेगळे plugins सक्रिय करू शकता, एक थीम निवडू शकता आणि तुमच्या मनाप्रमाणे ते सानुकूलित करू शकता. मग, जेव्हा तुमचा ग्राहक नवीन खाते तयार करतो, तेव्हा त्याला आतमध्ये कोणताही अर्थपूर्ण मजकूर नसलेली डीफॉल्ट WordPress साइट मिळण्याऐवजी, सर्व सानुकूलने आणि मजकूर आधीच असलेली तुमच्या बेस साइटची प्रत मिळेल.

हे खूपच छान वाटतं, पण नवीन site template कसं तयार करायचं? हे अगदी सोपं आहे.

## नवीन Site Template तयार करणे आणि संपादित करणे

Site Templates हे तुमच्या नेटवर्कवरील सामान्य साइट्सच आहेत. नवीन template तयार करण्यासाठी तुम्ही फक्त **Network Admin > Ultimate Multisite > Sites > Add Site** वर जाऊ शकता.

**![Sites यादी पृष्ठावरील Add site बटण](/img/config/site-templates-list.png)**

यामुळे एक modal विंडो उघडेल जिथे **Site title, Site Domain/path,** आणि **Site type** विचारले जाईल. **Site Type** ड्रॉप-डाउन फील्डमध्ये तुम्ही **Site Template** निवडलं आहे याची खात्री करा.

_![Site type dropdown असलेली Add site template modal](/img/config/site-templates-list.png)_

फॉर्मच्या तळाशी, तुम्हाला **Copy Site** टॉगल स्विच दिसेल. यामुळे तुम्ही विद्यमान site template वर आधारित नवीन site template तयार करू शकता, जेणेकरून शून्यापासून site template तयार करण्याऐवजी वेळ वाचेल.

![Copy site toggle असलेली Add site template modal](/img/config/site-templates-list.png)

### Site Template चा मजकूर सानुकूलित करणे

तुमचे site template सानुकूलित करण्यासाठी, फक्त त्याच्या dashboard panel वर जा आणि आवश्यक बदल करा. तुम्ही नवीन posts, pages तयार करू शकता, plugins सक्रिय करू शकता आणि सक्रिय थीम बदलू शकता. तुम्ही Customizer वर जाऊन सर्व प्रकारचे सानुकूलन पर्याय बदलूही शकता.

जेव्हा ग्राहक त्या Site Template वर आधारित नवीन साइट तयार करतो तेव्हा हा सर्व डेटा कॉपी केला जाईल.

### प्रगत पर्याय

जर तुम्हाला कस्टम कोडिंगची माहिती असेल, तर तुम्ही आमच्या Search and Replace API चा वापर करून नवीन साइट तयार झाल्यानंतर त्यावरील माहिती स्वयंचलितपणे बदलू शकता. About पृष्ठावरील कंपनीचे नाव बदलणे, Contact पृष्ठावरील संपर्क ईमेल बदलणे इत्यादींसाठी हे उपयुक्त आहे.

### Site Templates वापरणे

ठीक आहे, तुम्ही वेगवेगळ्या डिझाइन्स, थीम्स आणि सेटिंग्ज असलेले अनेक Site Templates तयार केले. आता त्यांचा तुमच्या नेटवर्कवर उपयोग कसा करायचा?

मूलतः, तुम्ही आता दोन पद्धती वापरू शकता (एकाच वेळी नाही):

  * प्रत्येक Plan ला एक Site Template जोडणे

**किंवा**

  * साइन-अप करताना तुमच्या ग्राहकांना स्वतः site templates निवडण्याची परवानगी देणे.

#### Mode 1: Site Template नियुक्त करणे

या mode मध्ये, तुमचे ग्राहक खाते तयार करताना template निवडू शकणार नाहीत, तर तुम्ही प्रत्येक Plan साठी कोणते template वापरायचे ते ठरवाल.

हे करण्यासाठी, तुम्हाला **Ultimate Multisite > Products > Edit** वर जावे लागेल.

![Site template नियुक्त करण्यासाठी product संपादित करा](/img/config/product-site-templates.png)

यामुळे तुम्ही **Edit Product** पृष्ठावर याल. **Product Options** विभागात, **Site template** टॅब शोधा आणि ड्रॉप-डाउन फील्डमधून **Assign Site Template** पर्याय निवडा. यामुळे उपलब्ध site templates ची यादी दिसेल आणि तुम्ही product साठी समर्पित एकच site template निवडू शकता.

![Assign site template पर्याय असलेला Product site template टॅब](/img/config/product-site-templates.png)

#### Mode 2: उपलब्ध Site Template निवडा

या mode मध्ये, तुम्ही तुमच्या ग्राहकांना साइन-अप प्रक्रियेदरम्यान निवड देता. ते product settings मध्ये तुम्ही निर्धारित केलेल्या वेगवेगळ्या site templates मधून निवडू शकतात. निवडलेल्या product अंतर्गत ते कोणते site template निवडू शकतात हे मर्यादित करण्याचा तुमच्याकडे पर्याय आहे. यामुळे तुम्ही प्रत्येक product अंतर्गत site templates चे वेगवेगळे संच ठेवू शकता, जे जास्त किमतीच्या product साठी वेगवेगळी कार्ये आणि वैशिष्ट्ये हायलाइट करण्यासाठी आदर्श आहे.

**Edit Product** पृष्ठावर, **Product Options** विभागात, **Site template** टॅब शोधा आणि ड्रॉप-डाउन फील्डमधून **Choose Available Site Template** पर्याय निवडा. यामुळे उपलब्ध site templates ची यादी दिसेल आणि तुम्हाला उपलब्ध करू इच्छित असलेले site template निवडता येईल. तुम्ही त्याचे Behavior निवडून हे करू शकता: **Available** जर तुम्हाला site template यादीत समाविष्ट करायचे असेल. _**Not Available**_ जर तुम्हाला site template पर्याय म्हणून दाखवायचे नसेल. आणि **Pre-selected** जर तुम्हाला यादीतील एखादे site template डीफॉल्ट निवडलेले असावे असे वाटत असेल.

![Behavior पर्यायांसह उपलब्ध site templates निवडा](/img/config/product-site-templates.png)

### डीफॉल्ट Mode: Checkout form वर Site template निवड

जर तुम्हाला नोंदणी दरम्यान तुमचे सर्व site templates उपलब्ध करायचे असतील, किंवा तुम्ही तयार केलेल्या प्रत्येक product अंतर्गत site templates नियुक्त करणे किंवा निर्दिष्ट करण्याचे अतिरिक्त काम करू इच्छित नसाल, तर तुम्ही फक्त तुमच्या **Checkout Form** अंतर्गत site template निवड सेट करू शकता. हे करण्यासाठी, तुम्हाला फक्त **Ultimate Multisite > Checkout Forms** वर जावे लागेल. नंतर तुम्हाला कॉन्फिगर करायच्या असलेल्या form अंतर्गत **Edit** वर क्लिक करा.

![Checkout forms यादी पृष्ठ](/img/config/checkout-forms-list.png)

यामुळे **Edit Checkout Form** पृष्ठ उघडेल. **Template Selection** फील्ड शोधा आणि त्याखाली **Edit** वर क्लिक करा.

![Template selection field असलेला Checkout form editor](/img/config/checkout-form-editor.png)

एक modal विंडो दिसेल. **Template Sites** फील्ड अंतर्गत तुम्ही नोंदणी दरम्यान उपलब्ध असावेत असे सर्व site templates निवडू आणि यादीत टाकू शकता. येथून तुम्ही निर्दिष्ट केलेले site templates वापरकर्त्याने कोणताही product निवडला तरीही उपलब्ध असतील.

![Checkout form editor मधील Template sites field](/img/config/checkout-form-step.png)

### Site Template पर्याय

Ultimate Multisite settings अंतर्गत इतर site templates कार्ये उपलब्ध आहेत जी तुम्ही चालू किंवा बंद करू शकता.

![Ultimate Multisite settings मधील Site template पर्याय](/img/config/settings-sites.png)

#### Template स्विचिंगला परवानगी द्या

हा पर्याय सक्षम केल्याने तुमचे ग्राहक खाते आणि साइट तयार झाल्यानंतर साइन-अप प्रक्रियेदरम्यान त्यांनी निवडलेले template बदलू शकतात. ग्राहकांच्या दृष्टीकोनातून हे उपयुक्त आहे कारण जर त्यांना नंतर कळले की त्यांची मूळ निवड त्यांच्या विशिष्ट गरजांसाठी सर्वोत्तम नव्हती तर ते template पुन्हा निवडू शकतात.

#### वापरकर्त्यांना त्यांची साइट templates म्हणून वापरण्याची परवानगी द्या

subsite वापरकर्त्यांनी त्यांची स्वतःची साइट तयार करण्यात आणि डिझाइन करण्यात वेळ घालवला असल्याने, त्यांना तुमच्या नेटवर्कवर दुसरी subsite तयार करताना उपलब्ध site templates पैकी एक म्हणून ते क्लोन करून वापरायचे असेल. हा पर्याय त्यांना ते साध्य करण्यास अनुमती देईल.

#### Template डुप्लिकेशनवर Media कॉपी करा

हा पर्याय चेक केल्याने template साइटवर अपलोड केलेला media नव्याने तयार केलेल्या साइटवर कॉपी होईल. हे प्रत्येक plan वर override करता येते.

#### **Search Engines ना Site Templates इंडेक्स करण्यापासून रोखा**

या लेखात चर्चा केल्याप्रमाणे Site templates हे बेस साइट्स आहेत पण तरीही तुमच्या नेटवर्कचा भाग आहेत, म्हणजे ते search engines ना शोधण्यासाठी अजूनही उपलब्ध आहेत. हा पर्याय तुम्हाला site templates लपवण्याची परवानगी देतो जेणेकरून search engines त्यांना इंडेक्स करू शकणार नाहीत.

## स्वयंचलित search-and-replace सह Site Templates पूर्व-भरणे

Ultimate Multisite चे सर्वात शक्तिशाली वैशिष्ट्य म्हणजे नोंदणी फॉर्मवर अनियंत्रित text, color आणि select fields जोडण्याची क्षमता. एकदा आम्ही तो डेटा कॅप्चर केला की, आम्ही निवडलेल्या site template च्या विशिष्ट भागांमधील मजकूर पूर्व-भरण्यासाठी त्याचा वापर करू शकतो. मग, जेव्हा नवीन साइट प्रकाशित केली जाते, तेव्हा Ultimate Multisite placeholders ला नोंदणी दरम्यान प्रविष्ट केलेल्या वास्तविक माहितीने बदलेल.

उदाहरणार्थ, जर तुम्हाला नोंदणी दरम्यान तुमच्या अंतिम-वापरकर्त्याचे कंपनीचे नाव मिळवायचे असेल आणि स्वयंचलितपणे मुख्यपृष्ठावर कंपनीचे नाव टाकायचे असेल. तुमच्या template साइटच्या मुख्यपृष्ठावर तुम्हाला खालील प्रतिमेप्रमाणे placeholders जोडणे आवश्यक आहे (placeholders दुहेरी कुरळे कंसांनी वेढलेले असावेत - {{placeholder_name}}).

![कुरळे कंसांमध्ये placeholder मजकूर असलेले मुख्यपृष्ठ](/img/config/site-templates-list.png)

नंतर, तुम्ही तो डेटा कॅप्चर करण्यासाठी तुमच्या checkout form वर जुळणारे नोंदणी फील्ड जोडू शकता:

![जुळणारे नोंदणी field असलेला Checkout form](/img/config/checkout-form-editor.png)

तुमचा ग्राहक नंतर नोंदणी दरम्यान ते field भरू शकेल.

![ग्राहकाने भरलेले नोंदणी field](/img/config/checkout-form-step.png)

![नोंदणी फॉर्मचे पूर्वावलोकन](/img/config/checkout-form-editor.png)

Ultimate Multisite नंतर ग्राहकाने दिलेल्या डेटाने placeholders स्वयंचलितपणे बदलेल.

![साइटवर ग्राहक डेटाने बदललेले Placeholders](/img/config/site-templates-list.png)

### "placeholders ने भरलेले template" समस्या सोडवणे

हे सर्व छान आहे, पण आम्हाला एक कुरूप समस्या येते: आता आमचे site templates - जे आमचे ग्राहक भेट देऊ शकतात - कुरूप placeholders ने भरलेले आहेत जे फारसे काही सांगत नाहीत.

हे सोडवण्यासाठी, आम्ही placeholders साठी खोटी मूल्ये सेट करण्याचा पर्याय देतो, आणि तुमचे ग्राहक भेट देत असताना template साइट्सवरील त्यांचा मजकूर शोधण्यासाठी आणि बदलण्यासाठी आम्ही ती मूल्ये वापरतो.

तुम्ही **Ultimate Multisite > Settings > Sites** वर जाऊन template placeholders editor मध्ये प्रवेश करू शकता, आणि नंतर, sidebar वर, **Edit Placeholders** लिंक वर क्लिक करा.

![Sites settings पृष्ठ अंतर्गत Placeholder settings](/img/config/settings-sites.png)

यामुळे तुम्ही placeholders मजकूर editor वर याल, जिथे तुम्ही placeholders आणि त्यांचा संबंधित मजकूर जोडू शकता.

![Template placeholders मजकूर editor](/img/config/settings-sites.png)
