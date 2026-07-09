---
title: तुमचा नोंदणी फॉर्म सानुकूलित करणे
sidebar_position: 17
_i18n_hash: 3dada0e900a1f46d950e1815ae8f5085
---
# तुमचा नोंदणी फॉर्म सानुकूलित करणे

WordPress प्लॅटफॉर्मवर तयार केलेल्या इतर सर्व SaaS पेक्षा तुमचे नेटवर्क वेगळे दिसावे यासाठी, Ultimate Multisite आमच्या **Checkout Forms** वैशिष्ट्याद्वारे तुम्हाला तुमची नोंदणी आणि लॉगिन पाने सानुकूलित करण्याची परवानगी देते.

नवीन ग्राहक रूपांतरित करण्याचा प्रयत्न करताना वेगवेगळ्या पद्धतींचे प्रयोग करण्यासाठी हे सोपे आणि लवचिक मार्ग असले तरी, ते मुख्यतः वैयक्तिकृत नोंदणी फॉर्म तयार करण्यासाठी वापरले जातात. तुम्ही हे कसे करू शकता ते दाखवणे हा या लेखाचा उद्देश आहे.

## लॉगिन आणि नोंदणी पाने:

Ultimate Multisite स्थापनेनंतर, ते तुमच्या मुख्य साइटवर आपोआप सानुकूल लॉगिन आणि नोंदणी पाने तयार करते. तुम्ही ही डीफॉल्ट पाने कधीही तुमच्या **Ultimate Multisite > Settings > Login & Registration** पानाखाली जाऊन बदलू शकता.

![लॉगिन आणि नोंदणी सेटिंग्ज पान](/img/config/settings-general.png)

लॉगिन आणि नोंदणी सेटिंग्ज पानाचे पूर्ण दृश्य येथे आहे:

![लॉगिन आणि नोंदणी सेटिंग्ज पूर्ण पान](/img/config/settings-login-registration-full.png)

**Login & Registration** पानावर तुम्ही सानुकूलित करू शकता अशा प्रत्येक पर्यायावर नजर टाकूया:

  * **नोंदणी सक्षम करा:** हा पर्याय तुमच्या नेटवर्कवरील नोंदणी सक्षम किंवा अक्षम करेल. तो बंद केला असल्यास, तुमचे ग्राहक नोंदणी करू शकणार नाहीत आणि तुमच्या उत्पादनांची सदस्यता घेऊ शकणार नाहीत.

  * **ईमेल पडताळणी सक्षम करा:** हा पर्याय चालू केला असल्यास, विनामूल्य प्लॅन किंवा चाचणी कालावधी असलेल्या सशुल्क प्लॅनची सदस्यता घेणाऱ्या ग्राहकांना पडताळणी ईमेल मिळेल आणि त्यांच्या वेबसाइट्स तयार होण्यासाठी त्यांना पडताळणी दुव्यावर क्लिक करावे लागेल.

  * **डीफॉल्ट नोंदणी पान:** हे नोंदणीसाठीचे डीफॉल्ट पान आहे. हे पान तुमच्या वेबसाइटवर प्रकाशित केलेले असणे आवश्यक आहे आणि त्यावर नोंदणी फॉर्म (checkout form म्हणूनही ओळखला जातो) असणे आवश्यक आहे - जिथे तुमचे ग्राहक तुमच्या उत्पादनांची सदस्यता घेतील. तुम्ही हवे तितकी नोंदणी पाने आणि checkout forms तयार करू शकता, फक्त नोंदणी पानावर checkout form shortcode ठेवणे लक्षात ठेवा, नाहीतर तो दिसणार नाही.

  * **सानुकूल लॉगिन पान वापरा:** हा पर्याय तुम्हाला डीफॉल्ट wp-login.php पानाव्यतिरिक्त सानुकूलित लॉगिन पान वापरण्याची परवानगी देतो. हा पर्याय चालू केला असल्यास, **Default login page** पर्यायात (अगदी खाली) लॉगिनसाठी कोणते पान वापरले जाईल ते तुम्ही निवडू शकता.

  * **मूळ लॉगिन url (wp-login.php) अस्पष्ट करा** : तुम्हाला मूळ लॉगिन URL लपवायची असल्यास, तुम्ही हा पर्याय चालू करू शकता. brute-force हल्ले रोखण्यासाठी हे उपयुक्त आहे. हा पर्याय सक्षम केला असल्यास, एखादा वापरकर्ता मूळ wp-login.php दुव्यावर प्रवेश करण्याचा प्रयत्न करतो तेव्हा Ultimate Multisite 404 त्रुटी दाखवेल

  * **समकालिक साइट प्रकाशन सक्तीचे करा:** ग्राहकाने नेटवर्कवरील एखाद्या उत्पादनाची सदस्यता घेतल्यानंतर, नवीन प्रलंबित साइटला खऱ्या नेटवर्क साइटमध्ये रूपांतरित करणे आवश्यक असते. प्रकाशन प्रक्रिया Job Queue द्वारे असमकालिकरीत्या होते. साइनअपप्रमाणेच त्याच विनंतीमध्ये प्रकाशन होण्यास भाग पाडण्यासाठी हा पर्याय सक्षम करा.

आता, लॉगिन आणि नोंदणी प्रक्रियेशी अजूनही संबंधित असलेले इतर पर्याय पाहूया. ते त्याच Login & registration पानावर **Other options** च्या अगदी खाली आहेत:

  * **डीफॉल्ट भूमिका:** साइनअप प्रक्रियेनंतर तुमच्या ग्राहकांची त्यांच्या वेबसाइटवर असणारी ही भूमिका आहे.

  * **Jumper सक्षम करा:** अ‍ॅडमिन क्षेत्रात Jumper शॉर्टकट सक्षम करते. Jumper प्रशासकांना प्रत्येक मेनूमधून ब्राउझ न करता Ultimate Multisite स्क्रीन, नेटवर्क ऑब्जेक्ट्स आणि इतर समर्थित गंतव्यस्थानांवर पटकन जाण्याची परवानगी देते. तुम्हाला ते झटपट नेव्हिगेशन साधन अ‍ॅडमिन इंटरफेसमधून लपवायचे असल्यास ते बंद करा.

  * **वापरकर्त्यांना मुख्य साइटवरही जोडा:** हा पर्याय सक्षम केल्यास साइनअप प्रक्रियेनंतर वापरकर्ता तुमच्या नेटवर्कच्या मुख्य साइटवरही जोडला जाईल. तुम्ही हा पर्याय सक्षम केल्यास, तुमच्या वेबसाइटवर या वापरकर्त्यांची **डीफॉल्ट भूमिका** सेट करण्याचा पर्यायही अगदी खाली दिसेल.

  * **एकाधिक खाती सक्षम करा:** वापरकर्त्यांना समान ईमेल पत्त्यासह तुमच्या नेटवर्कमधील वेगवेगळ्या साइट्सवर खाती ठेवण्याची परवानगी द्या. हा पर्याय बंद असल्यास, तुमचे ग्राहक समान ईमेल पत्त्यासह तुमच्या नेटवर्कवर चालणाऱ्या इतर वेबसाइट्सवर खाते तयार करू शकणार नाहीत.

आणि लॉगिन व नोंदणीशी संबंधित तुम्ही सानुकूलित करू शकता असे सर्व पर्याय इतकेच! संपादन पूर्ण झाल्यावर तुमच्या सेटिंग्ज जतन करायला विसरू नका.

## एकाधिक नोंदणी फॉर्म वापरणे:

Ultimate Multisite 2.0 एक checkout form संपादक देते, जो तुम्हाला वेगवेगळ्या फील्ड्स, ऑफरवरील उत्पादने इत्यादींसह हवे तितके फॉर्म तयार करण्याची परवानगी देतो.

लॉगिन आणि नोंदणी ही दोन्ही पाने shortcode सह एम्बेड केलेली असतात: लॉगिन पानावर **[wu_login_form]** आणि नोंदणी पानासाठी**[wu_checkout]**. checkout forms बांधून किंवा तयार करून तुम्ही नोंदणी पान आणखी सानुकूलित करू शकता.

या वैशिष्ट्यात प्रवेश करण्यासाठी, डाव्या साइड-बारवरील **Checkout Forms** मेनूमध्ये जा.

![साइडबारमधील Checkout Forms मेनू](/img/config/checkout-forms-list.png)

या पानावर, तुमच्याकडे असलेले सर्व checkout forms तुम्ही पाहू शकता.

तुम्हाला नवीन तयार करायचा असल्यास, पानाच्या वरच्या बाजूला **Add Checkout Form** वर क्लिक करा.

तुमच्या सुरुवातीच्या बिंदूसाठी तुम्ही या तीन पर्यायांपैकी एक निवडू शकता: एकल टप्पा, बहु-टप्पा किंवा रिक्त. त्यानंतर, **Go to the Editor** वर क्लिक करा.

![एकल टप्पा, बहु-टप्पा किंवा रिक्त पर्यायांसह Add Checkout Form](/img/config/checkout-forms-list.png)

पर्यायाने, त्याच्या नावाखालील पर्यायांवर क्लिक करून तुम्ही तुमच्याकडे आधीपासून असलेले फॉर्म संपादित किंवा डुप्लिकेट करू शकता. तिथे, तुम्हाला फॉर्मचा shortcode कॉपी करण्याचे किंवा फॉर्म हटवण्याचे पर्यायही मिळतील.

![संपादन, डुप्लिकेट आणि हटवणे यांसह checkout form hover क्रिया](/img/config/checkout-form-hover-actions.png)

तुम्ही एकल टप्पा किंवा बहु-टप्पा निवडल्यास, checkout form कार्य करण्यासाठी आवश्यक मूलभूत टप्प्यांसह आधीच भरलेला असेल. त्यानंतर, तुम्हाला हवे असल्यास, तुम्ही त्यात अतिरिक्त टप्पे जोडू शकता.

### Checkout Form संपादित करणे:

आम्ही आधी नमूद केल्याप्रमाणे, तुम्ही वेगवेगळ्या उद्देशांसाठी checkout forms तयार करू शकता. या उदाहरणात आपण नोंदणी फॉर्मवर काम करू.

checkout form संपादकावर गेल्यानंतर, तुमच्या फॉर्मला एक नाव द्या (जे फक्त अंतर्गत संदर्भासाठी वापरले जाईल) आणि एक slug द्या (उदाहरणार्थ, shortcakes तयार करण्यासाठी वापरला जातो).

![नाव आणि स्लग फील्डसह checkout form editor](/img/config/checkout-form-name-slug.png)

Forms हे steps आणि fields ने बनलेले असतात. तुम्ही **नवीन Checkout Step जोडा** वर क्लिक करून नवीन step जोडू शकता.

![नवीन Checkout Step जोडा बटण](/img/config/checkout-form-add-step.png)

modal window च्या पहिल्या tab वर, तुमच्या form च्या step ची सामग्री भरा. त्याला ID, नाव आणि वर्णन द्या. हे घटक मुख्यतः अंतर्गत वापरले जातात.

![ID, नाव आणि वर्णनासह Checkout step content tab](/img/config/checkout-form-step-content.png)

पुढे, step ची visibility सेट करा. तुम्ही **नेहमी दाखवा** , **फक्त login केलेल्या users साठी दाखवा** किंवा **फक्त guests साठी दाखवा** यांपैकी निवड करू शकता.

![Checkout step visibility पर्याय](/img/config/checkout-form-step-visibility.png)

शेवटी, step style configure करा. हे पर्यायी fields आहेत.

![Checkout step style configuration](/img/config/checkout-form-step-style.png)

आता, आपल्या पहिल्या step मध्ये fields जोडण्याची वेळ आली आहे. फक्त **नवीन Field जोडा** वर क्लिक करा आणि तुम्हाला हवा असलेला section प्रकार निवडा.

![नवीन Field जोडा बटण](/img/config/checkout-form-add-field-button.png)![Field प्रकार निवड dropdown](/img/config/checkout-form-field-type-dropdown.png)

प्रत्येक field मध्ये भरण्यासाठी वेगवेगळे parameters असतात. या पहिल्या प्रवेशासाठी, आपण **Username** field निवडू.

![Username field configuration](/img/config/checkout-form-username-content.png)![Username field parameters](/img/config/checkout-form-username-visibility.png)![Username field additional settings](/img/config/checkout-form-username-style.png)

तुम्हाला जितके steps आणि fields हवे तितके तुम्ही जोडू शकता. तुमच्या customers ना निवडण्यासाठी तुमची products दाखवण्यासाठी, Pricing Table field वापरा. तुम्हाला तुमच्या clients ना template निवडू द्यायचे असल्यास, Template Selection field जोडा. आणि असेच पुढे.

![template selection field सह checkout form editor](/img/config/checkout-form-with-template-field.png)

_**टीप:** तुम्ही तुमचा checkout form तयार केल्यानंतर product तयार केल्यास, तुम्हाला तो product Pricing table section मध्ये जोडावा लागेल. तुम्ही तो जोडला नाही, तर तो product registration page वर तुमच्या customers ना दिसणार नाही._

_**टीप २:** checkout form तयार करण्यासाठी username, email, password, site title, site URL, order summary, payment, आणि submit button ही अनिवार्य fields आहेत._

तुम्ही तुमच्या checkout form वर काम करत असताना, तुमच्या clients ना form कसा दिसेल हे पाहण्यासाठी तुम्ही नेहमी Preview बटण वापरू शकता. तुम्ही existing user किंवा visitor म्हणून view यांमध्येही अदलाबदल करू शकता.

![checkout form editor वरील Preview बटण](/img/config/checkout-form-preview-button.png)![visitor किंवा existing user म्हणून Checkout form preview](/img/config/checkout-form-preview-modal.png)

शेवटी, **Advanced Options** वर तुम्ही **Thank You** page साठी message configure करू शकता, conversions track करण्यासाठी snippets जोडू शकता, तुमच्या checkout form मध्ये custom CSS जोडू शकता किंवा ते विशिष्ट countries पर्यंत मर्यादित करू शकता.

![Thank You page, conversion tracking, आणि custom CSS सह Advanced Options](/img/config/checkout-form-advanced.png)

तुम्ही उजव्या column मधील हा पर्याय toggle करून तुमचा checkout form manually enable किंवा disable देखील करू शकता, किंवा form कायमचा delete करू शकता.

![checkout form साठी Active toggle आणि delete पर्याय](/img/config/checkout-form-active.png)

तुमचा checkout form save करायला विसरू नका!

![Checkout Form save बटण](/img/config/checkout-form-save.png)

तुमच्या form चा shortcode मिळवण्यासाठी **Shortcode Generate करा** वर क्लिक करा आणि modal window वर दाखवलेला result copy करा.

![copy करण्यासाठी shortcode सह Generate Shortcode modal](/img/config/checkout-form-editor.png)

_**टीप:** हा checkout form तुमच्या registration page मध्ये जोडण्यासाठी तुम्हाला हा shortcode तुमच्या registration page मध्ये जोडावा लागेल._

## URL parameters द्वारे products आणि templates pre-select करणे:

तुमच्या products साठी customized pricing tables तयार करायच्या असतील आणि तुमच्या pricing table किंवा templates page वरून customer निवडतो तो product किंवा template checkout form वर pre-select करायचा असेल, तर यासाठी तुम्ही URL parameters वापरू शकता.

### **Plans साठी:**

**Ultimate Multisite > Products > Select a plan** येथे जा. page च्या वरच्या भागात तुम्हाला **Shareable Link copy करण्यासाठी क्लिक करा** बटण दिसले पाहिजे. हा link तुम्ही तुमच्या checkout form वर हा विशिष्ट plan pre-select करण्यासाठी वापरू शकता.

![shareable link बटणासह Product page](/img/config/products-list.png)

लक्षात ठेवा की हा shareable link फक्त **Plans** साठी वैध आहे. packages किंवा services साठी तुम्ही shareable links वापरू शकत नाही.

### Templates साठी:

तुमच्या checkout form वर site templates pre-select करायचे असल्यास, तुम्ही तुमच्या registration page URL वर हा parameter वापरू शकता: **?template_id=X**. "X" च्या जागी **site template ID number** ठेवणे आवश्यक आहे. हा number मिळवण्यासाठी, **Ultimate Multisite > Sites** येथे जा.

तुम्हाला वापरायच्या असलेल्या site template च्या अगदी खाली **Manage** वर क्लिक करा. तुम्हाला SITE ID number दिसेल. हा विशिष्ट site template तुमच्या checkout form वर pre selected करण्यासाठी फक्त हा number वापरा. येथे आपल्या बाबतीत, URL parameter **?template_id=2** असेल.

![site template ID दाखवणारी Sites list](/img/config/site-templates-list.png)

समजा आपली network website [**www.mynetwork.com**](http://www.mynetwork.com) आहे आणि आपल्या checkout form सह registration page **/register** page वर आहे. हा site template pre-selected असलेला संपूर्ण URL असा दिसेल [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

आणि तुम्हाला हवे असल्यास, तुम्ही तुमच्या checkout form साठी products आणि templates दोन्ही pre-select करू शकता. तुम्हाला फक्त plan चा shareable link copy करून शेवटी template parameter paste करायचा आहे. तो असा दिसेल [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
