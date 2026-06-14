---
title: भुक्तानी प्राप्त गर्नु
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# पैसा कमाउने (v2)

_**महत्वपूर्ण नोट: यो लेख Ultimate Multisite संस्करण 2.x को लागि हो।**_

Ultimate Multisite मा सदस्यता र बिलिङको प्रणाली पहिले नै बनेको हुन्छ। हाम्रो बिलिङ प्रणाली काम गर्नका लागि, हामी ई-कमर्समा सबैभन्दा सामान्य प्रयोग हुने भुक्तानी गेटवेहरूलाई एकीकृत गरेका छौं। Ultimate Multisite का डिफाल्ट भुक्तानी गेटवेहरू _Stripe_, _PayPal_, र म्यानुअल पेमेन्ट हुन्। तपाईं आफ्नो सम्बन्धित add-ons इन्स्टल गरेर भुक्तानी प्राप्त गर्नका लागि _WooCommerce_, _GoCardless_ र _Payfast_ पनि प्रयोग गर्न सक्नुहुन्छ।

## आधारभूत सेटिङहरू

तपाईं Ultimate Multisite को भुक्तानी सेटिङहरू अन्तर्गत यी मध्ये कुनै पनि भुक्तानी गेटवेहरू कन्फिगर गर्न सक्नुहुन्छ। तपाईं **Ultimate Multisite menu > Settings > Payments** मा गएर यसलाई भेट्टाउन सक्नुहुन्छ।

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

तपाईं आफ्नो भुक्तानी गेटवे सेट गर्नुअघि, तपाईंले कन्फिगर गर्न सक्ने आधारभूत भुक्तानी सेटिङहरू हेर्नुहोस्:

**Force auto-renew** **w:** यसले प्रयोगकर्ताले रोजेको बिलिङ आवृत्ति अनुसार प्रत्येक बिलिङ चक्रको अन्त्यमा भुक्तानी स्वचालित रूपमा दोहोर्याइने सुनिश्चित गर्दछ।

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 ले सक्रिय गेटवेमा पुन: प्रयोग गर्न सकिने नवीकरण प्रमाण (reusable renewal credential) छ कि छैन भनेर जाँच गर्छ, ताकि स्वतः नवीकरण सक्षम भएको सदस्यता सुरक्षित गर्न सकियोस्। नवीकरण प्रमाण एउटा गेटवे सदस्यता, बिलिङ सम्झौता, बचत गरिएको भल्ट टोकन वा समकक्ष पुन: प्रयोग गर्न सकिने भुक्तानी विधि हुन सक्छ। यदि गेटवेले कुनै प्रयोग गर्न सकिने प्रमाण छैन भनेर रिपोर्ट गर्छ भने, Ultimate Multisite ले सदस्यता सुरक्षित गर्छ तर स्वतः नवीकरण बन्द गर्छ र मिसिएको प्रमाणको अवस्था रेकर्ड गर्छ ताकि एडमिन वा सपोर्ट फ्लोले ग्राहकलाई नवीकरण मितिभन्दा पहिले भुक्तानी पुनः अधिकृत गर्न सोध्न सकून्।

**भुक्तानीमा सदस्यता स्वतः नवीकरण हुनबाट रोक्नुहोस्** **विधि:** यो विकल्प अनलाइन भएपछि, तपाईंको ग्राहकले दर्ता प्रक्रियाको समयमा कुनै पनि आर्थिक जानकारी थप्नु पर्दैन। यो ट्रायल अवधि समाप्त भएपछि मात्र आवश्यक पर्नेछ।

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**भुक्तानी पुष्टिमा इनभइस गरौं:** यसले तपाईंलाई भुक्तानी पछि इनभइस पठाउने वा नपठाउने भन्ने विकल्प दिन्छ। ध्यान दिनुहोस् कि प्रयोगकर्ताहरूले आफ्नो सबसाइट ड्यासबोर्ड अन्तर्गत आफ्नो भुक्तानी इतिहास हेर्न सक्नेछन्। यो विकल्प म्यानुअल गेटवेमा लागू हुँदैन।

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**इनभइस नम्बरिङ योजना:** यहाँ, तपाईंले कुनै भुक्तानी सन्दर्भ कोड वा क्रमिक नम्बर प्रणाली मध्ये एक छान्नु सक्नुहुन्छ। यदि तपाईं आफ्नो इनभइसका लागि भुक्तानी सन्दर्भ कोड प्रयोग गर्न रोज्नुहुन्छ भने, तपाईंलाई केही पनि कन्फिगर गर्न आवश्यक छैन। यदि तपाईं क्रमिक नम्बर प्रणाली प्रयोग गर्न रोज्नुहुन्छ भने, तपाईंले **अर्को इनभइस नम्बर** (यो नम्बर सिस्टममा उत्पन्न हुने अर्को इनभइसको लागि इनभइस नम्बरको रूपमा प्रयोग गरिनेछ। नयाँ इनभइस सिर्जना हरेक पटक यसले एकले बढाइन्छ। तपाईं यसलाई परिवर्तन गर्न र इनभइसको क्रमिक नम्बरलाई निश्चित मानमा रिसेट गर्न सुरक्षित गर्न सक्नुहुन्छ) र **इनभइस नम्बर उपसर्ग** कन्फिगर गर्नुपर्ने हुन्छ।

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: सीक्वेंशियल नम्बर चयन गर्दा नेक्स्ट इनभ्वाइस नम्बर र इनभ्वाइस नम्बर उपसर्ग फिल्डहरू देखाइएको छ -->

## गेटवे कहाँ खोज्ने:

तपाईंले payment gateways (भुक्तानी गेटवे) एउटै पेजमा सेट अप गर्न सक्नुहुन्छ (**Ultimate Multisite > Settings > Payments**)। **active payment gateways** को ठीक तल, तपाईंले निम्न कुराहरू देख्न सक्नुहुनेछ: _Stripe_, _Stripe_ Checkout, _PayPal_ र _Manual_.

![Active Payment Gateways सेक्सनमा Stripe, Stripe Checkout, PayPal र Manual सूची दिइएको छ](/img/config/payments-active-gateways.png)

हामीले प्रत्येक payment gateway को लागि छुट्टै आर्टिकल बनाएका छ जसले तपाईंलाई यसलाई कसरी सेट अप गर्ने भन्ने चरणहरू मार्गदर्शन गर्छ। तपाईं यी लिंकहरूमा भेट्टाउन सक्नुहुन्छ।

तपाईंले payment details (भुक्तानी विवरण) हेर्न र सम्पादन गर्न सक्नुहुन्छ:

![Payment edit interface](/img/admin/payment-edit.png)

यहाँ payment edit पेजको पूर्ण दृश्य छ:

![Payment edit full interface](/img/admin/payment-edit-full.png)

यहाँ payment gateways सेटिङहरूको पनि पूर्ण दृश्य छ:

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe गेटवे सेटअप गर्ने**

**PayPal गेटवे सेटअप गर्ने**** **

**मैनुअल भुक्तानीहरू सेटअप गर्ने**

अब, यदि तपाईं _WooCommerce_, _GoCardless_ वा _Payfast_ लाई आफ्नो payment gateway को रूपमा प्रयोग गर्न चाहनुहुन्छ भने, तपाईंले तिनीहरूको **add-ons (अड-अन) इन्स्टल र कन्फिगर गर्नुपर्नेछ**।

### WooCommerce add-on कसरी इन्स्टल गर्ने:

हामी बुझ्छौं कि केही देशहरूमा _Stripe_ र _PayPal_ उपलब्ध छैनन् जसले Ultimate Multisite प्रयोगकर्ताहरूलाई हाम्रो प्लगइनको प्रभावकारी रूपमा प्रयोग गर्न सीमित गर्दछ वा रोक्छ। त्यसैले हामीले _WooCommerce_, जुन एउटा धेरै लोकप्रिय e-commerce प्लगइन हो, लाई एकीकृत गर्न एक add-on बनाएका छ। विश्वभरका डेभलपरहरूले यसलाई विभिन्न payment gateways सँग एकीकृत गर्न add-ons बनाएका छन्। हामीले यसको फाइदा लिएर Ultimate Multisite बिलिङ प्रणालीसँग प्रयोग गर्न सक्ने payment gateways विस्तार गरेका छौं।

**महत्वपूर्ण:** Ultimate Multisite मा WooCommerce प्रयोग गर्नको लागि तपाईंको मुख्य साइटमा कम से कम एक पटक WooCommerce सक्रिय हुनुपर्छ।

सबैभन्दा पहिले, कृपया Add-ons पेजमा जानुहोस्। तपाईंले **Ultimate Multisite > Settings** मा गएर यसलाई भेट्टाउन सक्नुहुन्छ। तपाईंले **Add-ons** टेबल देख्नुहुनेछ। **Check our Add-ons** मा क्लिक गर्नुहोस्।

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar मा Add-ons table र Check our Add-ons लिंक -->

**Check our Add-ons** मा क्लिक गरेपछि, तपाईं Add-ons पेजमा रिडायरेक्ट हुनुहुनेछ। यहाँ तपाईंले सबै Ultimate Multisite add-onsहरू फेला पार्न सक्नुहुन्छ। **Ultimate Multisite: WooCommerce Integration** add-on मा क्लिक गर्नुहोस्।

![Ultimate Multisite add-ons page मा WooCommerce Integration सहित Ultimate Multisite add-ons सूची](/img/addons/addons-page.png)

add-on को विवरण भएको एउटा विन्डो खुल्नेछ। तपाईंले केवल **Install Now** मा क्लिक गर्नुहोस्।

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on details dialog मा Install Now बटन -->

स्थापना सकिएपछि, तपाईं plugins पेजमा रिडायरेक्ट हुनुहुनेछ। यहाँ, तपाईंले केवल **Network Activate** मा क्लिक गर्नुहोस् र WooCommerce add-on तपाईंको नेटवर्कमा सक्रिय हुनेछ।

<!-- Screenshot unavailable: WooCommerce Integration add-on को लागि Network Activate लिंक भएको Plugins page -->

सक्रिय गरेपछि, यदि तपाईंको वेबसाइटमा अझै WooCommerce प्लगइन इन्स्टल र सक्रिय छैन भने, तपाईंले एउटा सम्झाव पाउनुहुनेछ।

<!-- Screenshot unavailable: एडमिन नोट जुन एडमिनलाई WooCommerce प्लगइन इन्स्टल गर्न र सक्रिय गर्न सम्झाउँछ -->

WooCommerce Integration add-on को बारेमा थप पढ्नको लागि, **यहाँ क्लिक गर्नुहोस्**।

### GoCardless add-on कसरी इन्स्टल गर्ने:

_GoCardless_ add-ऑन इन्स्टल गर्ने चरणहरू _WooCommerce_ add-ऑन जस्तै नै छन्। कृपया add-ons पेजमा जानुहोस् र **Ultimate Multisite: GoCardless Gateway** add-on चयन गर्नुहोस्।

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

add-on को विन्डो खुल्नेछ। **Install Now** मा क्लिक गर्नुहोस्।

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

इन्स्टल गरिसकेपछि, तपाईं प्लगइन पेजमा रिडायरेक्ट हुनुहुनेछ। यहाँ, केवल **Network Activate** मा क्लिक गर्नुहोस् र _GoCardless_ add-ऑन तपाईंको नेटवर्कमा सक्रिय हुनेछ।

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

_GoCardless_ गेटवे कसरी सुरु गर्ने भनेर जान्नका लागि, **यो लेख पढ्नुहोस्**।

### Payfast add-ऑन कसरी इन्स्टल गर्ने:

add-ons पेजमा जानुहोस् र **Ultimate Multisite: Payfast Gateway** add-on चयन गर्नुहोस्।

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

add-on को विन्डो खुल्नेछ। **Install Now** मा क्लिक गर्नुहोस्।

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

इन्स्टल गरिसकेपछि, तपाईं प्लगइन पेजमा रिडायरेक्ट हुनुहुनेछ। यहाँ, केवल **Network Activate** मा क्लिक गर्नुहोस् र _Payfast_ add-ऑन तपाईंको नेटवर्कमा सक्रिय हुनेछ।

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
