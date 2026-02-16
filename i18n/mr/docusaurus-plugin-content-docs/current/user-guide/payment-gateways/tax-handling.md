---
title: कर हाताळणी
sidebar_position: 4
_i18n_hash: a50fddb07455f714128e042744ab5859
---
# कर (Tax) व्यवस्थापन

Ultimate Multisite मध्ये आमच्या मुख्य plugin मध्येच कर संकलन मॉड्यूल अंतर्भूत आहे, त्यामुळे तुम्हाला तुमच्या plans, packages आणि services वर विक्री कर संकलित करायचे असल्यास, कोणतेही add-ons इन्स्टॉल न करता तुम्ही ते सहजपणे करू शकता.

युरोपमध्ये असलेल्या कंपन्यांसाठी, आम्ही एक **add-on** देतो ज्यामध्ये **VAT** अनुपालनासाठी साधने आणि वैशिष्ट्ये समाविष्ट आहेत.

Ultimate Multisite तुमच्या वतीने सरकारकडे कर भरत नाही किंवा जमा करत नाही; आम्ही फक्त व्यवहाराच्या वेळी योग्य कर संकलित करण्यात मदत करतो. **तुम्हाला स्वतःच कर भरणे आवश्यक आहे.**

## कर संकलन सक्षम करणे

कर संकलन मुलभूतपणे सक्षम नसते. ते सक्षम करण्यासाठी, तुम्हाला **Ultimate Multisite > Settings > Taxes** वर जाऊन Enable Taxes सेटिंग toggle करून सक्षम करणे आवश्यक आहे.

![कर सेटिंग्समध्ये Enable Taxes toggle](/img/config/settings-taxes.png)

### कर वगळून vs. कर समाविष्ट

मुलभूतपणे, तुमच्या सर्व उत्पादनांच्या किंमतींमध्ये कर वगळलेला असतो, म्हणजे उत्पादनाच्या किंमतीत कर **समाविष्ट नाही**. जर आम्ही ठरवले की ग्राहकाने दिलेल्या खरेदीवर कर भरावा, तर आम्ही उपएकूण रकमेच्या **वर** कर जोडतो.

तुम्हाला तुमच्या उत्पादनाच्या किंमतीत कर समाविष्ट ठेवायचा असल्यास, तुम्ही **Inclusive Tax** सेटिंग सक्षम करून तसे करू शकता.

![Inclusive Tax सेटिंग toggle](/img/config/settings-taxes.png)

तुम्ही केलेले बदल **save** करायला विसरू नका.

### 

## कर दर तयार करणे

कर संकलन सक्षम केल्यानंतर, तुम्हाला आमच्या tax rates editor वापरून विशिष्ट ठिकाणांसाठी कर दर तयार करणे आवश्यक आहे.

Tax settings पेजच्या sidebar वरील **Manage Tax Rates** बटणावर क्लिक करून तुम्ही editor उघडू शकता.

![Sidebar वरील Manage Tax Rates बटण](/img/config/settings-taxes.png)

Tax rates editor पेजवर, तुम्ही **Add new Row** बटणावर क्लिक करून नवीन Tax Rates जोडू शकता.

![Add new Row बटणासह Tax rates editor](/img/config/settings-taxes.png)

तुम्हाला प्रत्येक कर दराला **title** (invoice वर वापरले जाते) देणे आवश्यक आहे. त्यानंतर तुम्ही **country** (आवश्यक), **state** आणि **city** (दोन्ही पर्यायी) निवडू शकता जिथे हा कर आकारला जाईल. शेवटी, **टक्केवारीत कर दर** जोडा.

### कर वर्ग (Tax Categories)

वेगवेगळ्या प्रकारच्या उत्पादनांसाठी वेगवेगळे कर दर जोडण्यासाठी तुम्ही अनेक Tax Categories देखील तयार करू शकता.

**Add new Tax Category** वर क्लिक करा, तुमच्या category चे नाव लिहा आणि **Create** दाबा.

![Add new Tax Category बटण](/img/config/settings-taxes.png)

![नवीन tax category तयार करणे](/img/config/settings-taxes.png)

Categories मध्ये फिरण्यासाठी, **Switch** वर क्लिक करा आणि ज्या category मध्ये तुम्हाला नवीन कर जोडायचे आहेत ती निवडा.

![Tax categories मध्ये Switch करणे](/img/config/settings-taxes.png)

![पाहण्यासाठी tax category निवडणे](/img/config/settings-taxes.png)

तुम्ही एखाद्या विशिष्ट उत्पादनासाठी tax category सेट करू शकता **Product edit page** वर जाऊन आणि नंतर Taxes tab वर जाऊन.

![Tax category आणि taxable toggle सह Product taxes tab](/img/config/product-taxes.png)

त्याच स्क्रीनवर, तुम्ही **Is Taxable?** toggle बंद करू शकता जेणेकरून Ultimate Multisite ला कळेल की त्या विशिष्ट उत्पादनावर कर संकलित करू नये.

## युरोपियन VAT सपोर्ट

आधी सांगितल्याप्रमाणे, आमच्याकडे EU मधील ग्राहकांसाठी एक add-on उपलब्ध आहे ज्यांना युरोपियन VAT नियमांमुळे अतिरिक्त आवश्यकता आहेत.

आमची VAT साधने काही महत्त्वाच्या गोष्टींमध्ये मदत करतात:

  * EU VAT दर सहजपणे लोड करणे;

  * VAT Number संकलन आणि प्रमाणीकरण - आणि VAT exempt entities साठी (जसे की वैध VAT numbers असलेल्या कंपन्या) reverse charging;

हे add-on इन्स्टॉल करण्यासाठी, **Ultimate Multisite > Settings** वर जा आणि नंतर **Check our Add-ons** sidebar link वर क्लिक करा.

![Add-ons sidebar link सह Settings page](/img/config/settings-taxes.png)

तुम्हाला आमच्या add-ons page वर पुनर्निर्देशित केले जाईल. तिथे, तुम्ही **Ultimate Multisite VAT add-on** शोधू शकता आणि ते इन्स्टॉल करू शकता.

![Add-ons page वर VAT add-on](/img/config/settings-taxes.png)

![VAT add-on install dialog](/img/config/settings-taxes.png)

त्यानंतर, **Network Admin > Plugins** वर जा आणि ते add-on network-wide activate करा.

![VAT add-on Network Activate करा](/img/config/settings-taxes.png)

तुम्ही परत **Tax Settings tab** वर गेल्यास, तुम्हाला नवीन पर्याय उपलब्ध दिसतील. नवीन VAT साधने सक्षम करण्यासाठी **Enable VAT Support** पर्याय toggle करा. तुमची settings **save** करायला विसरू नका!

![Tax settings मध्ये Enable VAT Support toggle](/img/config/settings-taxes.png)

### VAT कर दर आणणे (Pulling)

आमचे integration जोडत असलेल्या साधनांपैकी एक म्हणजे EU सदस्य देशांचे कर दर लोड करण्याची क्षमता. EU VAT support सक्षम केल्यानंतर tax rates editor page ला भेट देऊन हे करता येते.

पेजच्या तळाशी, तुम्हाला VAT pulling पर्याय दिसतील. Rate type निवडणे आणि **Update EU VAT Rates** बटणावर क्लिक केल्याने प्रत्येक EU सदस्य देशाच्या कर दरांसह टेबल आपोआप भरले जाईल. त्यानंतर, तुम्हाला फक्त ते save करणे आवश्यक आहे.

### ![Update EU VAT Rates बटणासह VAT rates pulling पर्याय](/img/config/settings-taxes.png)

तुम्ही pull केल्यानंतर values संपादित देखील करू शकता. हे करण्यासाठी, तुम्हाला हवी असलेली टेबल line संपादित करा आणि नवीन values save करण्यासाठी क्लिक करा.

### VAT प्रमाणीकरण (Validation)

VAT support सक्षम असताना, Ultimate Multisite checkout form मध्ये billing address field च्या खाली एक अतिरिक्त field जोडेल. हे field फक्त EU मध्ये असलेल्या ग्राहकांसाठी दिसेल.

![Checkout form वर VAT number field](/img/config/settings-taxes.png)

Ultimate Multisite नंतर VAT Number प्रमाणित करेल आणि जर ते वैध असल्याचे आढळले, तर reverse charge यंत्रणा लागू होते आणि त्या order वर कर दर 0% वर सेट केला जातो.
