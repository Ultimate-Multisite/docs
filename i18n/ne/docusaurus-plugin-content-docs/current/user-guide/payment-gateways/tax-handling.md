---
title: कर व्यवस्थापन
sidebar_position: 4
_i18n_hash: a331943b7d5764cc5f2277c08595b235
---
# कर ह्यान्डलिङ (Tax Handling)

Ultimate Multisite मा हाम्रो मुख्य प्लगइनमा कर संकलन मोड्युल बिल्ट-इन भएकोले, यदि तपाईंलाई आफ्ना प्लानहरू, प्याकेजहरू र सेवाहरूमा बिक्री कर संकलन गर्न आवश्यक छ भने, कुनै पनि add-ons इन्स्टल नगरी सजिलै यो गर्न सक्नुहुन्छ।

युरोपमा अवस्थित कम्पनीहरूको लागि, हामी **add-on** प्रदान गर्दछौं जसले VAT अनुपालनलाई राम्रोसँग समर्थन गर्न उपकरण र फिचरहरू थप्छ।

Ultimate Multisite तपाईंको तर्फबाट सरकारलाई कर फाइल वा जमा गर्दैन; हामी केवल कारोबारको समयमा उपयुक्त कर संकलन गर्न मद्दत गर्छौं। **तपाईंले आफ्नै तरिकाले कर जमा गर्नुपर्ने हुन्छ।**

## कर संकलन सक्षम गर्ने (Enabling Tax Collection)

कर संकलन डिफ्ल्ट रूपमा सक्षम गरिएको हुँदैन। यसलाई सक्षम गर्न, तपाईंले **Ultimate Multisite > Settings > Taxes** मा जानुपर्छ र Enable Taxes सेटिङलाई अन (toggle on) गर्नुहोला।

![Tax settings enable toggle at the top of the Tax settings page](/img/config/settings-taxes-enable.png)

कर सेटिङहरूको पूर्ण दृश्य यहाँ छ:

![Tax settings full page](/img/config/settings-taxes-full.png)

तपाईंले व्यक्तिगत उत्पादनहरूको लागि कर सेटिङहरू पनि हेर्न सक्नुहुन्छ:

![Tax settings for products](/img/config/settings-taxes.png)

### कर बाहिर बनाम कर सहित (Tax excluded vs. Tax included)

डिफल्ट रूपमा, तपाईंको सबै उत्पादन मूल्यहरू कर बाहिर हुन्छन्, जसको अर्थ कर **उत्पादनको मूल्यमा समावेश हुँदैन**। यदि हामीले कुनै ग्राहकलाई कुनै खास खरिदमा कर तिर्नुपर्छ भने, हामी उप-कुल (subtotal) मा कर **थप** जोड्नेछौं।

यदि तपाईं आफ्नो उत्पादनको मूल्यमा कर सहित राख्न चाहनुहुन्छ भने, तपाईं **Inclusive Tax** सेटिङ सक्षम गरेर यसो गर्न सक्नुहुन्छ।

![Inclusive Tax toggle row below the Enable Taxes setting](/img/config/settings-taxes-inclusive.png)

तपाईंले गरिसकेका परिवर्तनहरू **सेभ (save)** गर्न नबिर्सनुहोस्।

###

## कर दरहरू सिर्जना गर्ने (Creating Tax Rates)

कर संकलन सक्षम गरेपछि, तपाईंले हाम्रो कर दर एडिटर प्रयोग गरेर विशिष्ट स्थानहरूको लागि कर दरहरू बनाउनुपर्नेछ।

तपाईंले सेटिङ पेजको साइडबारमा रहेको **Manage Tax Rates** बटन क्लिक गरेर एडिटरमा पहुँच गर्न सक्नुहुन्छ।

![Tax Rates panel मा Manage Tax Rates लिंक](/img/config/settings-taxes-manage-rates.png)

ट्याक्स रेट्स एडिटर पेजमा, तपाईंले **Add new Row** बटन क्लिक गरेर नयाँ ट्याक्स रेटहरू थप्न सक्नुहुन्छ।

![शीर्षमा Add new Row बटन भएको ट्याक्स रेट्स एडिटर टेबल](/img/config/tax-rates-editor.png)

प्रत्येक ट्याक्स रेटलाई एक **title** (जुन इन्भाइसहरूमा प्रयोग हुन्छ) दिनुपर्नेछ। त्यसपछि, तपाईंले कुन **country** (अनिवार्य), **state**, र **city** (दुवै वैकल्पिक) मा यो ट्याक्स लगाइने छ त्यो रोज्न सक्नुहुन्छ। अन्तमा, **tax rate in percents** थप्नुहोस्।

### Tax Categories

तपाईंले विभिन्न प्रकारका उत्पादनहरूका लागि फरक-फरक ट्याक्स रेटहरू थप्न धेरै Tax Categories पनि बनाउन सक्नुहुन्छ।

**Add new Tax Category** मा क्लिक गर्नुहोस्, त्यसपछि आफ्नो सेगमेन्टको नाम लेख्नुहोस् र **Create** थिच्नुहोस्।

![ट्याक्स रेट्स एडिटरको शीर्षमा Add new Tax Category बटन](/img/config/tax-categories-add.png)

![कटेगरी बनाउने मोडलमा Tax Category Name इनपुट फिल्ड](/img/config/tax-categories-create-modal.png)

कटेगरीहरू ब्राउज गर्न, **Switch** मा क्लिक गर्नुहोस् र तपाईंले नयाँ ट्याक्स थप्न चाहेको कटेगरी चयन गर्नुहोस्।

![ट्याक्स कटेगरी परिवर्तन गर्न Switch ड्रॉपडाउन बटन](/img/config/tax-categories-switch.png)

![उपलब्ध कटेगरी देखाउने Tax category सेलेक्ट ड्रपडाउन](/img/config/tax-categories-select.png)

तपाईंले **Product edit page** मा गएर त्यसपछि Taxes ट्याबमा जान्दा कुनै विशेष उत्पादनको लागि ट्याक्स कटेगरी सेट गर्न सक्नुहुन्छ।

![ट्याक्स कटेगरी र करयोग्य (taxable) टगल भएको प्रोडक्ट ट्याक्स ट्याब](/img/config/product-taxes.png)

त्यसै नै स्क्रिनमा, तपाईंले **Is Taxable?** टगल अफ गरेर Ultimate Multisite लाई त्यो उत्पादनमा कुनै ट्याक्स संकलन नगर्न भन्न सक्नुहुन्छ।

## European VAT Support

जसरी पहिले उल्लेख गरियो, हामीसँग युरोपेली भ्याट नियमका कारण अतिरिक्त आवश्यकता भएका ग्राहकहरूका लागि एउटा add-on उपलब्ध छ।

हाम्रा VAT टूलले केही महत्त्वपूर्ण कुराहरूमा मद्दत गर्छन्:

* EU VAT दरहरू सजिलै लोड गर्ने;
* VAT नम्बर सङ्कलन र प्रमाणीकरण - र VAT छुट भएका संस्थाहरूको लागि रिभर्स चार्ज (जस्तै वैध VAT नम्बर भएका कम्पनीहरू)।

त्यो add-on इन्स्टल गर्न, **Ultimate Multisite > Settings** मा जानुहोस् र त्यसपछि **Check our Add-ons** साइडबार लिंकमा क्लिक गर्नुहोस्।

![Settings page sidebar with Check our Add-ons link](/img/config/settings-taxes-addons-link.png)

तपाईं हाम्रो add-ons पेजमा रिडायरेक्ट हुनुहुनेछ। त्यहाँ, तपाईंले **Ultimate Multisite VAT add-on** खोजेर यसलाई इन्स्टल गर्न सक्नुहुन्छ।

<!-- Screenshot unavailable: VAT add-on tile on the Add-ons page -->

<!-- Screenshot unavailable: VAT add-on Install Now dialog -->

त्यसपछि, **Network Admin > Plugins** मा जानुहोस् र त्यो add-on लाई नेटवर्कभर सक्रिय (activate) गर्नुहोस्।

<!-- Screenshot unavailable: Network Activate action for the VAT add-on on the Plugins page -->

यदि तपाईं **Tax Settings tab** मा फर्कनुभयो भने, तपाईंले नयाँ विकल्पहरू देख्नुहुनेछ। नयाँ VAT टूलहरू सक्रिय गर्न **Enable VAT Support** विकल्पलाई अन (toggle) गर्नुहोस्। आफ्नो सेटिङहरू **save** गर्न नबिर्सनुहोस्!

<!-- Screenshot unavailable: Enable VAT Support toggle in the Tax settings after add-on activation -->

### VAT कर दरहरू लोड गर्ने

हाम्रो integration ले थप्ने टूलहरू मध्ये एक भने EU सदस्य राष्ट्रहरूको लागि कर दरहरू लोड गर्ने क्षमता हो। EU VAT सपोर्ट सक्षम गरेपछि कर दरहरू एडिटर पेजमा गएर हेर्न सकिन्छ।

पेजको तल तपाईंले VAT पुल गर्ने विकल्पहरू देख्नुहुनेछ। कुनै दर प्रकार चयन गरेर **Update EU VAT Rates** बटनमा क्लिक गर्दा प्रत्येक EU सदस्य राज्यका लागि कर दरहरू समावेश भएको टेबल स्वतः लोड हुन्छ र भरिन्छ। त्यसपछि, तपाईंलाई केवल यसलाई सेभ गर्न मात्रする必要 हुन्छ।

![ट्याक्स रेट्स एडिटरको तल Update EU VAT Rates बटन](/img/config/tax-rates-vat-pull.png)

तपाईंले यसलाई पुल गरेपछि मानहरू सम्पादन पनि गर्न सक्नुहुन्छ। यो गर्नका लागि, तपाईंलाई आवश्यक पर्ने टेबल लाइन सम्पादन गर्नुहोस् र नयाँ मानहरू सेभ गर्न क्लिक गर्नुहोस्।

### VAT Validation

जब VAT सपोर्ट सक्षम हुन्छ, Ultimate Multisite ले बिलिङ ठेगाना फिल्डको तल चेकआउट फारममा एउटा अतिरिक्त फिल्ड थप्छ। यो फिल्ड केवल EU मा रहेका ग्राहकहरूको लागि मात्र देखिनेछ।

<!-- Screenshot unavailable: बिलिङ ठेगानाको तल फ्रन्टएन्ड चेकआउट फारममा VAT नम्बर फिल्ड -->

Ultimate Multisite ले त्यसपछि VAT नम्बर प्रमाणित गर्छ र यदि त्यो वैध रूपमा आएमा, रिभर्स चार्ज मेकानिजम लागू गरिन्छ र उक्त अर्डरको कर दर 0% मा सेट गरिन्छ।
