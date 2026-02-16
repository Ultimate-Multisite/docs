---
title: तुमचा नोंदणी फॉर्म सानुकूलित करणे
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# तुमचा नोंदणी फॉर्म सानुकूलित करणे

तुमचे नेटवर्क WordPress प्लॅटफॉर्मवर तयार केलेल्या इतर SaaS पेक्षा वेगळे दिसावे यासाठी, Ultimate Multisite तुम्हाला आमच्या **Checkout Forms** वैशिष्ट्याद्वारे तुमची नोंदणी आणि लॉगिन पेजेस सानुकूलित करण्याची सुविधा देते.

नवीन ग्राहकांना आकर्षित करण्यासाठी वेगवेगळ्या पद्धतींचा प्रयोग करताना हे फॉर्म्स सोपे आणि लवचिक असले तरी, ते प्रामुख्याने वैयक्तिकृत नोंदणी फॉर्म तयार करण्यासाठी वापरले जातात. हा लेख तुम्हाला हे कसे करायचे ते दाखवण्यासाठी आहे.

## लॉगिन आणि नोंदणी पेजेस:

Ultimate Multisite इंस्टॉल केल्यावर, ते तुमच्या मुख्य साइटवर आपोआप सानुकूल लॉगिन आणि नोंदणी पेजेस तयार करते. तुम्ही कधीही **Ultimate Multisite > Settings > Login & Registration** पेजवर जाऊन ही डीफॉल्ट पेजेस बदलू शकता.

![Login and Registration settings page](/img/config/settings-general.png)

**Login & Registration** पेजवर तुम्ही सानुकूलित करू शकता अशा प्रत्येक पर्यायावर एक नजर टाकूया:

  * **Enable registration:** हा पर्याय तुमच्या नेटवर्कवरील नोंदणी सक्षम किंवा अक्षम करेल. हे बंद असल्यास, तुमचे ग्राहक नोंदणी करू शकणार नाहीत आणि तुमच्या उत्पादनांचे सबस्क्रिप्शन घेऊ शकणार नाहीत.

  * **Enable email verification:** हा पर्याय चालू असल्यास, मोफत प्लॅन किंवा ट्रायल कालावधी असलेल्या पेड प्लॅनसाठी सबस्क्राइब करणाऱ्या ग्राहकांना एक व्हेरिफिकेशन ईमेल प्राप्त होईल आणि त्यांच्या वेबसाइट्स तयार होण्यासाठी त्यांना व्हेरिफिकेशन लिंकवर क्लिक करणे आवश्यक असेल.

  * **Default registration page:** हे नोंदणीसाठीचे डीफॉल्ट पेज आहे. हे पेज तुमच्या वेबसाइटवर प्रकाशित असणे आवश्यक आहे आणि त्यात नोंदणी फॉर्म (ज्याला checkout form म्हणूनही ओळखले जाते) असणे आवश्यक आहे - जिथे तुमचे ग्राहक तुमच्या उत्पादनांसाठी सबस्क्राइब करतील. तुम्ही हवी तितकी नोंदणी पेजेस आणि checkout forms तयार करू शकता, फक्त नोंदणी पेजवर checkout form shortcode टाकण्याचे लक्षात ठेवा, अन्यथा ते दिसणार नाही.

  * **Use custom login page:** हा पर्याय तुम्हाला डीफॉल्ट wp-login.php पेजव्यतिरिक्त सानुकूलित लॉगिन पेज वापरण्याची परवानगी देतो. हा पर्याय चालू असल्यास, **Default login page** पर्यायावर (खाली) लॉगिनसाठी कोणते पेज वापरले जाईल ते तुम्ही निवडू शकता.

  * **Obfuscate the original login url (wp-login.php):** तुम्हाला मूळ लॉगिन URL लपवायचे असल्यास, तुम्ही हा पर्याय चालू करू शकता. brute-force हल्ले रोखण्यासाठी हे उपयुक्त आहे. हा पर्याय सक्षम असल्यास, जेव्हा कोणी मूळ wp-login.php लिंक ऍक्सेस करण्याचा प्रयत्न करेल तेव्हा Ultimate Multisite 404 error दाखवेल.

  * **Force synchronous site publication:** ग्राहकाने नेटवर्कवरील एखाद्या उत्पादनासाठी सबस्क्राइब केल्यानंतर, नवीन pending साइटला वास्तविक नेटवर्क साइटमध्ये रूपांतरित करणे आवश्यक असते. प्रकाशन प्रक्रिया Job Queue द्वारे असिंक्रोनसली होते. signup सोबतच प्रकाशन त्याच request मध्ये व्हावे यासाठी हा पर्याय सक्षम करा.

आता, लॉगिन आणि नोंदणी प्रक्रियेशी संबंधित इतर पर्याय पाहूया. ते त्याच Login & registration पेजवर **Other options** खाली आहेत:

  * **Default role:** signup प्रक्रियेनंतर तुमच्या ग्राहकांची त्यांच्या वेबसाइटवर ही भूमिका असेल.

  * **Add users to the main site as well:** हा पर्याय सक्षम केल्यास signup प्रक्रियेनंतर वापरकर्त्याला तुमच्या नेटवर्कच्या मुख्य साइटवर देखील जोडले जाईल. तुम्ही हा पर्याय सक्षम केल्यास, तुमच्या वेबसाइटवर या वापरकर्त्यांची **default role** सेट करण्याचा पर्याय खाली दिसेल.

  * **Enable multiple accounts:** वापरकर्त्यांना तुमच्या नेटवर्कच्या वेगवेगळ्या साइट्सवर एकाच ईमेल पत्त्याने खाती ठेवण्याची परवानगी द्या. हा पर्याय बंद असल्यास, तुमचे ग्राहक तुमच्या नेटवर्कवर चालणाऱ्या इतर वेबसाइट्सवर त्याच ईमेल पत्त्याने खाते तयार करू शकणार नाहीत.

आणि लॉगिन व नोंदणीशी संबंधित तुम्ही सानुकूलित करू शकता असे सर्व पर्याय हेच आहेत! editing पूर्ण केल्यानंतर तुमची सेटिंग्ज save करायला विसरू नका.

## एकाधिक नोंदणी फॉर्म वापरणे:

Ultimate Multisite 2.0 एक checkout form editor देते जे तुम्हाला वेगवेगळी फील्ड्स, ऑफरवरील उत्पादने इत्यादींसह हवे तितके फॉर्म्स तयार करण्याची परवानगी देते.

लॉगिन आणि नोंदणी दोन्ही पेजेस shortcodes सह एम्बेड केलेली आहेत: लॉगिन पेजवर **[wu_login_form]** आणि नोंदणी पेजसाठी **[wu_checkout]**. checkout forms तयार करून तुम्ही नोंदणी पेज आणखी सानुकूलित करू शकता.

हे वैशिष्ट्य ऍक्सेस करण्यासाठी, डाव्या साइडबारवरील **Checkout Forms** मेनूवर जा.

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

या पेजवर, तुमच्याकडे असलेले सर्व checkout forms तुम्ही पाहू शकता.

तुम्हाला नवीन तयार करायचा असल्यास, पेजच्या वरच्या बाजूला **Add Checkout Form** वर क्लिक करा.

तुम्ही यापैकी एक पर्याय तुमचा प्रारंभ बिंदू म्हणून निवडू शकता: single step, multi-step किंवा blank. नंतर, **Go to the Editor** वर क्लिक करा.

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

वैकल्पिकरित्या, तुमच्याकडे आधीपासून असलेल्या फॉर्म्सच्या नावाखालील पर्यायांवर क्लिक करून तुम्ही त्यांचे edit किंवा duplicate करू शकता. तिथे, तुम्हाला फॉर्मचा shortcode कॉपी करण्याचा किंवा फॉर्म delete करण्याचा पर्याय देखील मिळेल.

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

तुम्ही single step किंवा multi-step निवडल्यास, checkout form काम करण्यासाठी आवश्यक मूलभूत टप्प्यांसह आधीच pre-populated असेल. नंतर, तुम्हाला हवे असल्यास, त्यात अतिरिक्त टप्पे जोडू शकता.

### Checkout Form संपादित करणे:

आम्ही आधी सांगितल्याप्रमाणे, तुम्ही वेगवेगळ्या उद्देशांसाठी checkout forms तयार करू शकता. या उदाहरणात आम्ही नोंदणी फॉर्मवर काम करू.

checkout form editor वर गेल्यानंतर, तुमच्या फॉर्मला एक नाव द्या (जे फक्त अंतर्गत संदर्भासाठी वापरले जाईल) आणि एक slug (shortcodes तयार करण्यासाठी वापरले जाते, उदाहरणार्थ).

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

फॉर्म्स टप्पे आणि फील्ड्स यांनी बनलेले असतात. **Add New Checkout Step** वर क्लिक करून तुम्ही नवीन टप्पा जोडू शकता.

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window च्या पहिल्या tab वर, तुमच्या फॉर्मच्या टप्प्याची सामग्री भरा. त्याला ID, नाव आणि वर्णन द्या. या आयटम्स प्रामुख्याने अंतर्गत वापरासाठी आहेत.

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

पुढे, टप्प्याची visibility सेट करा. तुम्ही **Always show**, **Only show for logged in users** किंवा **Only show for guests** यांमधून निवडू शकता.

![Checkout step visibility options](/img/config/checkout-form-step.png)

शेवटी, step style कॉन्फिगर करा. ही वैकल्पिक फील्ड्स आहेत.

![Checkout step style configuration](/img/config/checkout-form-step.png)

आता, आमच्या पहिल्या टप्प्यात फील्ड्स जोडण्याची वेळ आली आहे. फक्त **Add New Field** वर क्लिक करा आणि तुम्हाला हवा असलेला section प्रकार निवडा.

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

प्रत्येक फील्डमध्ये भरण्यासाठी वेगवेगळे parameters असतात. या पहिल्या entry साठी, आम्ही **Username** फील्ड निवडू.

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

तुम्हाला हवे तितके टप्पे आणि फील्ड्स जोडू शकता. तुमच्या ग्राहकांना तुमची उत्पादने निवडण्यासाठी दाखवण्यासाठी, Pricing Table फील्ड वापरा. तुमच्या ग्राहकांना template निवडू द्यायचे असल्यास, Template Selection फील्ड जोडा. आणि असेच पुढे.

_**टीप:** तुम्ही checkout form तयार केल्यानंतर एखादे उत्पादन तयार केल्यास, तुम्हाला ते उत्पादन Pricing table section मध्ये जोडणे आवश्यक आहे. तुम्ही ते जोडले नाही तर, नोंदणी पेजवर ते उत्पादन तुमच्या ग्राहकांना दिसणार नाही._

_**टीप २:** checkout form तयार करण्यासाठी username, email, password, site title, site URL, order summary, payment, आणि submit button ही अनिवार्य फील्ड्स आहेत._

तुम्ही checkout form वर काम करत असताना, तुमचे ग्राहक फॉर्म कसा पाहतील हे बघण्यासाठी तुम्ही नेहमी Preview बटण वापरू शकता. तुम्ही existing user किंवा visitor म्हणून पाहणे यांमध्ये बदलही करू शकता.

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

शेवटी, **Advanced Options** मध्ये तुम्ही **Thank You** पेजसाठी संदेश कॉन्फिगर करू शकता, conversions track करण्यासाठी snippets जोडू शकता, तुमच्या checkout form मध्ये custom CSS जोडू शकता किंवा विशिष्ट देशांपुरते मर्यादित करू शकता.

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

तुम्ही उजव्या स्तंभातील या पर्यायाला toggle करून तुमचा checkout form manually सक्षम किंवा अक्षम करू शकता, किंवा फॉर्म कायमचा delete करू शकता.

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

तुमचा checkout form save करायला विसरू नका!

![Save Checkout Form button](/img/config/checkout-form-save.png)

तुमच्या फॉर्मचा shortcode मिळवण्यासाठी **Generate Shortcode** वर क्लिक करा आणि modal window वर दाखवलेला परिणाम कॉपी करा.

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**टीप:** हा checkout form तुमच्या नोंदणी पेजवर जोडण्यासाठी तुम्हाला हा shortcode तुमच्या नोंदणी पेजवर add करणे आवश्यक आहे._

## URL parameters द्वारे उत्पादने आणि templates पूर्व-निवड करणे:

तुम्हाला तुमच्या उत्पादनांसाठी सानुकूलित pricing tables तयार करायचे असतील आणि checkout form वर तुमच्या ग्राहकाने तुमच्या pricing table किंवा templates पेजवरून निवडलेले उत्पादन किंवा template पूर्व-निवड करायचे असल्यास, तुम्ही यासाठी URL parameters वापरू शकता.

### **Plans साठी:**

**Ultimate Multisite > Products > Select a plan** वर जा. पेजच्या वरच्या बाजूला तुम्हाला **Click to copy Shareable Link** बटण दिसेल. तुमच्या checkout form वर हा विशिष्ट plan पूर्व-निवड करण्यासाठी तुम्ही ही लिंक वापरू शकता.

![Product page with shareable link button](/img/config/products-list.png)

लक्षात घ्या की ही shareable link फक्त **Plans** साठी वैध आहे. packages किंवा services साठी तुम्ही shareable links वापरू शकत नाही.

### Templates साठी:

तुम्हाला तुमच्या checkout form वर site templates पूर्व-निवड करायचे असल्यास, तुम्ही तुमच्या नोंदणी पेज URL वर **?template_id=X** parameter वापरू शकता. "X" ला **site template ID number** ने बदलणे आवश्यक आहे. हा नंबर मिळवण्यासाठी, **Ultimate Multisite > Sites** वर जा.

तुम्हाला वापरायचे असलेल्या site template च्या खाली **Manage** वर क्लिक करा. तुम्हाला SITE ID नंबर दिसेल. तुमच्या checkout form वर हा विशिष्ट site template पूर्व-निवड होण्यासाठी फक्त हा नंबर वापरा. आमच्या बाबतीत येथे, URL parameter असेल **?template_id=2**.

![Sites list showing site template ID](/img/config/site-templates-list.png)

समजा आमची नेटवर्क वेबसाइट [**www.mynetwork.com**](http://www.mynetwork.com) आहे आणि आमचे checkout form असलेले नोंदणी पेज **/register** पेजवर आहे. या site template पूर्व-निवडीसह संपूर्ण URL असे दिसेल [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**.

आणि तुम्हाला हवे असल्यास, तुम्ही तुमच्या checkout form वर उत्पादने आणि templates दोन्ही पूर्व-निवड करू शकता. तुम्हाला फक्त plan ची shareable link कॉपी करायची आहे आणि शेवटी template parameter पेस्ट करायचा आहे. ते असे दिसेल [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**.
