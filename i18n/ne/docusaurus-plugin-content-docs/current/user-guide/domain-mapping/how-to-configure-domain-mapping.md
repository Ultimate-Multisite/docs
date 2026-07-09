---
title: Domain Mapping कसरी कन्फिगर गर्ने
sidebar_position: 6
_i18n_hash: 5e3edfad8e0d51fa677f5c6f40a105e4
---
# Domain Mapping कसरी कन्फिगर गर्ने (v2)

_**महत्त्वपूर्ण नोट: यो लेख Ultimate Multisite संस्करण 2.x सँग सम्बन्धित छ।**_

प्रिमियम नेटवर्कका सबैभन्दा शक्तिशाली सुविधामध्ये एक भनेको हाम्रा ग्राहकहरूलाई उनीहरूका साइटहरूमा शीर्ष-स्तरको डोमेन जोड्ने अवसर दिन सक्नु हो। आखिर, कुन बढी व्यावसायिक देखिन्छ: [_**joesbikeshop.yournetwork.com**_](http://joesbikeshop.yournetwork.com) वा [_**joesbikeshop.com**_](http://joesbikeshop.com)? त्यसैले Ultimate Multisite ले तेस्रो-पक्ष plugin प्रयोग गर्नुपर्ने आवश्यकता बिना नै यो सुविधा भित्रै उपलब्ध गराउँछ।

## Domain mapping भनेको के हो?

नामले जनाएझैँ, domain mapping भनेको custom domain को अनुरोध लिएर त्यस अनुरोधलाई नेटवर्कमा उक्त विशेष डोमेन जोडिएको सम्बन्धित साइटसँग map गर्ने Ultimate Multisite ले उपलब्ध गराउने क्षमता हो।

### तपाईंको Ultimate Multisite Network मा domain mapping कसरी setup गर्ने

Domain mapping काम गर्न तपाईंको तर्फबाट केही setting up आवश्यक हुन्छ। धन्यबाद, Ultimate Multisite ले कठिन काम तपाईंका लागि स्वचालित गर्छ, त्यसैले तपाईंले आवश्यकताहरू सजिलै पूरा गर्न सक्नुहुन्छ।

Ultimate Multisite स्थापना गर्दा, wizard ले **sunrise.php** लाई निर्दिष्ट folder मा स्वतः copy र install गर्नेछ। **यो चरण पूरा नभएसम्म wizard ले तपाईंलाई अगाडि बढ्न अनुमति दिनेछैन**।

<!-- Screenshot unavailable: Ultimate Multisite installation wizard with sunrise.php step -->

यसको अर्थ, Ultimate Multisite installation wizard ले तपाईंको network setup पूरा गरेपछि, तपाईंले तुरुन्तै custom domain mapping सुरु गर्न सक्नुहुन्छ।

ध्यान दिनुहोस् कि Ultimate Multisite मा domain mapping अनिवार्य छैन। तपाईंसँग WordPress Multisite को native domain mapping function वा कुनै अन्य domain mapping solution प्रयोग गर्ने विकल्प छ।

यदि तपाईंलाई अन्य domain mapping solutions का लागि Ultimate Multisite domain mapping disable गर्न आवश्यक परेमा, तपाईंले यो सुविधा **Ultimate Multisite > Settings > Domain Mapping** अन्तर्गत disable गर्न सक्नुहुन्छ।

![admin redirect, mapping message र DNS विकल्पहरू देखाउने Domain Mapping settings page](/img/config/domain-mapping-settings.png)

यस विकल्पको ठीक तल, तपाईंले **Force Admin Redirect** विकल्प पनि देख्न सक्नुहुन्छ। यो विकल्पले तपाईंका customers ले उनीहरूको custom domain र subdomain दुवैमा आफ्नो admin Dashboard access गर्न सक्नेछन् कि तीमध्ये केवल एउटामा मात्र भन्ने कुरा नियन्त्रण गर्न अनुमति दिन्छ।

यदि तपाईंले **Force redirect to mapped domain** चयन गर्नुभयो भने, तपाईंका customers ले आफ्नो admin Dashboard केवल आफ्ना custom domains मा मात्र access गर्न सक्नेछन्।

**Force redirect to** **network domain** विकल्पले ठीक उल्टो काम गर्छ - तपाईंका customers ले आफ्ना custom domains मा sign in गर्ने प्रयास गरे पनि, उनीहरूलाई आफ्नो subdomain मा मात्र Dashboard access गर्न अनुमति दिइनेछ।

र **Allow access to the admin by both mapped domain domain and network domain** विकल्पले उनीहरूलाई subdomain र custom domain दुवैमा आफ्ना admin Dashboards access गर्न अनुमति दिन्छ।

![तीनवटा redirect विकल्पहरू देखाउँदै expanded Admin Redirect dropdown](/img/config/domain-mapping-redirect-options.png)

custom domain map गर्ने दुई तरिका छन्। पहिलो, super admin का रूपमा आफ्नो network admin Dashboard बाट domain name map गर्नु हो र दोस्रो, Account page अन्तर्गत subsite admin Dashboard मार्फत हो।

तर तपाईंले आफ्नो network का subsites मध्ये कुनै एकमा custom domain map गर्न सुरु गर्नुअघि, domain name का **DNS settings** ठीकसँग configure भएका छन् भनी सुनिश्चित गर्नुपर्छ।

###

### domain का DNS settings ठीकसँग configure भएका छन् भनी सुनिश्चित गर्ने

mapping काम गर्न, तपाईंले map गर्न योजना बनाइरहेको domain तपाईंको Network को IP address तर्फ point गरिरहेको छ भनी सुनिश्चित गर्नुपर्छ। ध्यान दिनुहोस्, तपाईंलाई Network IP address चाहिन्छ - Ultimate Multisite install गरिएको domain को IP address - तपाईंले map गर्न चाहेको custom domain को IP address होइन। कुनै specific domain को IP address खोज्नका लागि, उदाहरणका लागि, हामी [Site24x7](https://www.site24x7.com/find-ip-address-of-web-site.html) मा जान सुझाव दिन्छौँ।

domain सही तरिकाले map गर्न, तपाईंले आफ्नो **DNS** configuration मा उक्त **IP address** तर्फ point गर्ने **A RECORD** थप्नुपर्छ। DNS management विभिन्न domain registrars बीच धेरै फरक हुन्छ, तर यदि तपाईंले " _Creating A Record on XXXX_ " खोज्नुभयो भने, जहाँ XXXX तपाईंको domain registrar हो (जस्तै: " _Creating A Record on_ _GoDaddy_ "), यसबारे online धेरै tutorials छन्।

यदि तपाईंलाई यो काम गराउन समस्या भइरहेको छ भने, **आफ्नो domain registrar support लाई सम्पर्क गर्नुहोस्** र उनीहरूले तपाईंलाई यस भागमा मद्दत गर्न सक्नेछन्।

यदि तपाईं आफ्ना clients लाई उनीहरूका आफ्नै domains map गर्न अनुमति दिने योजना बनाउनुहुन्छ भने, उनीहरूले यस भागको काम आफैँ गर्नुपर्नेछ। यदि उनीहरू A Record सिर्जना गर्न असमर्थ भए भने, उनीहरूलाई आफ्नो registrar support system तर्फ देखाइदिनुहोस्।

### Super Admin का रूपमा custom domain name mapping गर्ने

जब तपाईं आफ्नो network मा super admin का रूपमा logged in हुनुहुन्छ, तपाईंले **Ultimate Multisite > Domains** अन्तर्गत गएर custom domain names सजिलै थप्न र manage गर्न सक्नुहुन्छ।

![Ultimate Multisite मा Domains list page](/img/admin/domains-list.png)

यस page अन्तर्गत, तपाईंले माथि रहेको **Add Domain** button मा click गर्न सक्नुहुन्छ र यसले modal window खोल्नेछ जहाँ तपाईंले **custom domain name** , custom domain name लागू गर्न चाहनुभएको **subsite** set र fill in गर्न सक्नुहुन्छ, साथै त्यसलाई **primary domain** name को रूपमा set गर्ने कि नगर्ने निर्णय गर्न सक्नुहुन्छ (ध्यान दिनुहोस् कि तपाईंले **एक subsite मा धेरै domain names map** गर्न सक्नुहुन्छ)।

![domain name, site picker र primary domain toggle सहित Add Domain modal](/img/admin/domain-add-modal.png)

सबै information राखिसकेपछि, तपाईंले तल रहेको **Add Existing Domain** button मा click गर्न सक्नुहुन्छ।

यसले custom domain को DNS information verify र fetch गर्ने process सुरु गर्नेछ। तपाईंले page को तल एउटा log पनि देख्नुहुनेछ, जसबाट तपाईंले यो कुन process हुँदै गइरहेको छ भनेर follow गर्न सक्नुहुन्छ। यो process पूरा हुन केही minutes लाग्न सक्छ।

Ultimate Multisite v2.13.0 ले नयाँ साइट प्रत-साइट डोमेनका रूपमा व्यवहार गरिनुपर्ने होस्टमा सिर्जना हुँदा आन्तरिक डोमेन रेकर्ड पनि स्वचालित रूपमा सिर्जना गर्छ। यदि होस्ट नेटवर्कको प्राथमिक डोमेन हो, वा **Site URL** फिल्डमा कन्फिगर गरिएका साझा checkout-form आधार डोमेनमध्ये एक हो भने, स्वचालित mapped-domain रेकर्ड छोडिन्छ ताकि साझा आधार डोमेन त्यसलाई प्रयोग गर्ने हरेक साइटका लागि उपलब्ध रहोस्।

जब ग्राहकले Domain Seller v1.3.0 वा नयाँ संस्करणमार्फत नयाँ डोमेन दर्ता गर्छ, Ultimate Multisite ले पूर्वनिर्धारित रूपमा दर्ता गरिएको डोमेनलाई ग्राहकको नेटवर्क साइटसँग स्वचालित रूपमा map गर्छ। सफल दर्तापछि प्रशासकहरूले अब अलग mapped-domain रेकर्ड थप्न आवश्यक पर्दैन, जबसम्म उनीहरू प्राथमिक-डोमेन flag, सक्रियता अवस्था, वा SSL handling जस्ता विकल्पहरू समायोजन गर्न चाहँदैनन्।

यदि सबै कुरा ठीकसँग सेटअप गरिएको छ भने **चरण** वा स्थिति **DNS जाँच गर्दै** बाट **तयार** मा परिवर्तन हुनुपर्छ।

<!-- स्क्रिनसट उपलब्ध छैन: डोमेनहरूको सूचीमा Checking DNS चरण देखाउने डोमेन पङ्क्ति -->

<!-- स्क्रिनसट उपलब्ध छैन: हरियो स्थिति सूचकसहित Ready चरण देखाउने डोमेन पङ्क्ति -->

यदि तपाईं डोमेन नाममा क्लिक गर्नुहुन्छ भने, तपाईंले त्यसभित्र केही विकल्पहरू देख्न सक्नुहुनेछ। तिनीहरूलाई छिटो हेरौँ:

![चरण, साइट, सक्रिय, प्राथमिक र SSL toggles सहितको डोमेन विवरण पृष्ठ](/img/admin/domain-edit.png)

**चरण:** यो डोमेन रहेको चरण हो। तपाईंले पहिलो पटक डोमेन थप्दा, यो सम्भवतः **DNS जाँच गर्दै** चरणमा हुनेछ। प्रक्रियाले DNS entries जाँच गर्नेछ र ती सही छन् भनेर पुष्टि गर्नेछ। त्यसपछि, डोमेनलाई **SSL जाँच गर्दै** चरणमा राखिनेछ। Ultimate Multisite ले डोमेनमा SSL छ वा छैन भनेर जाँच गर्नेछ र तपाईंको डोमेनलाई **तयार** वा **तयार (SSL बिना)** का रूपमा वर्गीकरण गर्नेछ।

**साइट:** यो डोमेनसँग सम्बन्धित subdomain। mapped डोमेनले यही विशिष्ट साइटको सामग्री देखाउनेछ।

**सक्रिय:** तपाईंले डोमेन सक्रिय वा निष्क्रिय गर्न यो विकल्प अन वा अफ गर्न सक्नुहुन्छ।

**प्राथमिक डोमेन हो?:** तपाईंका ग्राहकहरूसँग प्रत्येक साइटका लागि एकभन्दा बढी mapped डोमेन हुन सक्छ। यो विशिष्ट साइटका लागि प्राथमिक डोमेन हो कि होइन चयन गर्न यो विकल्प प्रयोग गर्नुहोस्।

**सुरक्षित छ?:** Ultimate Multisite ले डोमेन सक्षम गर्नुअघि डोमेनमा SSL प्रमाणपत्र छ वा छैन भनेर जाँच गरे पनि, तपाईंले डोमेनलाई SSL प्रमाणपत्रसहित वा बिना लोड गर्न म्यानुअल रूपमा चयन गर्न सक्नुहुन्छ। ध्यान दिनुहोस् कि यदि वेबसाइटमा SSL प्रमाणपत्र छैन र तपाईंले यसलाई SSL सहित जबर्जस्ती लोड गर्न प्रयास गर्नुभयो भने, यसले तपाईंलाई त्रुटिहरू दिन सक्छ।

### Subsite प्रयोगकर्ताका रूपमा custom डोमेन नाम mapping गर्ने

Subsite प्रशासकहरूले पनि आफ्नो subsite admin dashboard बाट custom डोमेन नामहरू map गर्न सक्छन्।

पहिले, तपाईंले **डोमेन mapping** सेटिङहरूअन्तर्गत यो विकल्प सक्षम गरेको सुनिश्चित गर्नुपर्छ। तलको स्क्रिनसट हेर्नुहोस्।

<!-- स्क्रिनसट उपलब्ध छैन: Customer DNS Management toggle मार्फत subsite प्रयोगकर्ताहरूलाई डोमेन map गर्न दिने Domain mapping सेटिङहरू -->

तपाईंले यो विकल्प **Plan** स्तर वा **Ultimate Multisite > Products** मा उत्पादन विकल्पहरूअन्तर्गत पनि सेट वा कन्फिगर गर्न सक्नुहुन्छ।

![उत्पादन सम्पादन पृष्ठमा Custom Domains खण्ड](/img/config/product-custom-domains.png)

जब तीमध्ये कुनै विकल्प सक्षम हुन्छन् र subsite प्रयोगकर्तालाई custom डोमेन नामहरू map गर्न अनुमति दिइन्छ, subsite प्रयोगकर्ताले **Account** पृष्ठअन्तर्गत **डोमेनहरू** भनिने metabox देख्नुपर्छ।

<!-- स्क्रिनसट उपलब्ध छैन: Add Domain बटनसहित subsite Account पृष्ठमा Domains metabox -->

प्रयोगकर्ताले **डोमेन थप्नुहोस्** बटन क्लिक गर्न सक्छ र यसले केही निर्देशनहरूसहितको modal window देखाउनेछ।

<!-- स्क्रिनसट उपलब्ध छैन: subsite प्रयोगकर्ताहरूका लागि DNS A-record निर्देशनहरू देखाउने Add Domain modal -->

त्यसपछि प्रयोगकर्ताले **अर्को चरण** क्लिक गरेर custom डोमेन नाम थप्न अघि बढ्न सक्छ। उनीहरूले यो प्राथमिक डोमेन हुने हो कि होइन पनि छनोट गर्न सक्छन्।

<!-- स्क्रिनसट उपलब्ध छैन: custom डोमेन नाम field र प्राथमिक डोमेन toggle सहितको Add Domain form -->

<!-- स्क्रिनसट उपलब्ध छैन: DNS प्रमाणीकरण सुरु गर्ने Add Domain पुष्टि चरण -->

**डोमेन थप्नुहोस्** क्लिक गर्दा custom डोमेनको DNS जानकारी प्रमाणीकरण र fetch गर्ने प्रक्रिया सुरु हुनेछ।

### डोमेन Syncing बारे

डोमेन Syncing यस्तो प्रक्रिया हो जहाँ Ultimate Multisite ले **डोमेन mapping काम गर्नका लागि** तपाईंको hosting account मा custom डोमेन नाम add-on डोमेनका रूपमा थप्छ।

यदि तपाईंको hosting provider सँग Ultimate Multisite डोमेन mapping सुविधासँग integration छ भने डोमेन syncing स्वचालित रूपमा हुन्छ। हाल, यी hosting providers _Runcloud, Closte, WP Engine, Gridpane, WPMU Dev, Cloudways,_ र _Cpanel_ हुन्।

जब host-provider integration सक्रिय हुन्छ, Ultimate Multisite ले नयाँ सिर्जना गरिएका साइटहरूका लागि provider-side DNS वा subdomain creation task पनि enqueue गर्न सक्छ। यदि कुनै integration ले त्यो task का लागि सुनिरहेको छैन भने, no-op queue entries बाट बच्न background job छोडिन्छ। mapped डोमेनहरूका लागि DNS र SSL जाँचहरू सामान्य domain-stage प्रक्रियामार्फत चलिरहन्छन्।

तपाईंले यो integration Ultimate Multisite सेटिङहरूमा **Integration** tab अन्तर्गत सक्रिय गर्नुपर्नेछ।

![hosting providers देखाउने Ultimate Multisite सेटिङहरूमा Integrations tab](/img/config/integrations-tab.png)

<!-- स्क्रिनसट उपलब्ध छैन: Integrations settings tab मा Hosting provider Configuration links -->

_ध्यान दिनुहोस् कि यदि तपाईंको hosting provider माथि उल्लेख गरिएका providers मध्ये एक होइन भने, **तपाईंले आफ्नो hosting account मा डोमेन नाम म्यानुअल रूपमा sync वा थप्नुपर्नेछ**।_
