---
title: डोमेन विक्रेता परिवर्तन विवरण
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller परिवर्तन लग

संस्करण 1.3.0 - 2026-06-02 मा जारी गरिएको
- नयाँ: HostAfrica reseller शेष रकम धेरै कम हुँदा network-admin चेतावनी थपियो
- नयाँ: नयाँ दर्ता गरिएका domainहरूलाई network site मा स्वचालित mapping थपियो
- सुधार: नयाँ domain दर्ता गर्दा मात्र registrant field आवश्यकताहरू लागू गरियो
- सुधार: monitor balance सूचनाहरू खारेज गर्न मिल्ने बनाइयो
- सुधार: WooCommerce registrant billing विवरणहरू सुरक्षित रहने सुनिश्चित गरियो
- सुधार: दर्ता गर्दा registrant contact आवश्यकताहरू लागू गरियो
- सुधार: domain दर्ता productहरू 0% markup सँग सिर्जना हुनबाट रोकियो
- सुधार: checkout session flow भरि domain चयनहरू र pricing सुरक्षित राखियो
- सुधार: HostAfrica domain pricing currency प्रदर्शन सुधारियो
- सुधार: WP-core query-var बेमेल रोक्न checkout form-action व्यवहार सुधारियो
- सुधारिएको: setup मार्गदर्शनमा HostAfrica reseller configuration documentation link गरियो

संस्करण 1.2.0 - 2026-05-25 मा जारी गरिएको
- नयाँ: HostAfrica लाई checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, र ID protection समर्थनसहित domain बेच्ने integration रूपमा थपियो
- नयाँ: Openprovider लाई reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, र TLD sync समर्थनसहित domain बेच्ने integration रूपमा थपियो
- नयाँ: core integration बाट साझा Hostinger API token प्रयोग गरेर availability checks, registration, nameserver updates, registrar lock, र WHOIS privacy का लागि Hostinger लाई domain बेच्ने integration रूपमा थपियो
- सुधारिएको: developer integration मार्गदर्शनका लागि domain lifecycle action र filter docblockहरू थपियो
- सुधारिएको: addon readme मा plugin compatibility metadata लाई WordPress 7.0 मा अद्यावधिक गरियो
- सुधारिएको: आगामी release समन्वयका लागि प्रयोग हुने planning templateहरू अद्यावधिक गरियो

संस्करण 1.1.0 - 2026-05-08 मा जारी गरिएको
- नयाँ: DNS record सिर्जना (add_dns_record) ResellerClub, Enom, र OpenSRS registrarहरूका लागि लागू गरियो
- सुधार: Default DNS Records parser ले अब {DOMAIN} र {SITE_URL} tokenहरू सहन्छ
- सुधार: site_url सँग collision रोक्न domain selection checkout field slugहरू namespaced गरियो

संस्करण 1.0.8 - 2026-05-07 मा जारी गरिएको
- सुधार: ResellerClub domain pricing ले अब सही API endpoint बाट live cost priceहरू fetch गर्छ

संस्करण 1.0.7 - 2026-05-06 मा जारी गरिएको
* सुधार: ResellerClub test_connection ले आवश्यक tlds parameter पठाउँछ (#224)

संस्करण 1.0.6 - 2026-05-05 मा जारी गरिएको
* सुधार: ResellerClub domain registration अब सुधारिएको API response handling र registry-driven provider routing सँग सही रूपमा काम गर्छ
* सुधार: Register Domain admin page UX सुधारहरू
* हटाइएको: CyberPanel registrar integration

संस्करण 1.0.5 - 2026-04-02 मा जारी गरिएको
* नयाँ: domain registration र management का लागि GoDaddy registrar integration
* नयाँ: NameSilo registrar integration
* नयाँ: ResellerClub registrar integration
* नयाँ: domain purchase र mapping मा SES sending domain auto-verify गर्ने
* सुधार: test environment मा redefinition विरुद्ध plugin constants guard गरियो
* सुधार: MySQL flags install-wp-tests.sh मा सही रूपमा word-split हुन्छन्

संस्करण 1.0.4 - 2026-03-14 मा जारी गरिएको
* **सुधार:** केही छुटेका css assetहरू
* **सुधार:** उपलब्ध नभएका tlds सँग सम्बन्धित त्रुटि

संस्करण 1.0.3 - 2026-03-09 मा जारी गरिएको
* **सुधार:** checkout shortcode सँग legacy signup template प्रयोग गर्दा Vue reactive property त्रुटिहरू (domain_option, selected_domain, domain_provider)
* **सुधार:** domain selection checkout field मा subdomain input field को misalignment र अत्यधिक ठूलो पाठ
* **सुधार:** domain selection field उपस्थित हुँदा "तपाईंको URL हुनेछ" preview block लुकाउने

संस्करण 1.0.2 - 2026-03-01 मा जारी गरिएको
* **सुधारिएको:** settings page बाट global markup settings हटाइयो — pricing अब पूर्ण रूपमा प्रति-product मात्र हो
* **सुधारिएको:** छिटो navigation का लागि settings page मा "Domain Products व्यवस्थापन गर्नुहोस्" link थपियो
* **सुधारिएको:** domain product settings का लागि अझ स्पष्ट field descriptions र tooltips (catch-all बनाम TLD-specific, markup types, introductory pricing)
* **सुधारिएको:** settings page भरि अझ राम्रो descriptions (search TLDs, renewals, DNS, notifications)

संस्करण 1.0.1 - 2026-02-27 मा जारी गरिएको

* **नयाँ:** थोक मूल्य व्यवस्थापनका लागि TLD आयात उपकरण
* **नयाँ:** डोमेन उत्पादनहरूका लागि प्रारम्भिक मूल्य समर्थन
* **नयाँ:** Cypress सहित E2E परीक्षण सुइट
* **नयाँ:** डोमेन जीवनचक्र सूचनाहरूका लागि इमेल टेम्प्लेटहरू
* **नयाँ:** प्रशासक डोमेन दर्ता मोडलमा दर्ताकर्ता ठेगाना फिल्डहरू, सेटिङहरूबाट पहिले नै भरिएका
* **नयाँ:** रेकर्ड थप्ने, सम्पादन गर्ने, र मेटाउने समर्थन सहित ग्राहक DNS व्यवस्थापन इन्टरफेस
* **नयाँ:** स्वचालित डोमेन म्यापिङसहित "आफ्नै डोमेन ल्याउनुहोस्" चेकआउट विकल्प
* **नयाँ:** चेकआउटका क्रममा डोमेन नामबाट साइट URL स्वतः सिर्जना गर्नुहोस्
* **नयाँ:** सेटिङहरूमा पूर्वनिर्धारित नेमसर्भर र DNS रेकर्ड कन्फिगरेसन
* **नयाँ:** कोर डोमेन सम्पादन पृष्ठमा डोमेन दर्ता विवरण र DNS व्यवस्थापन
* **नयाँ:** सेटअप विजार्डले उपयुक्त पूर्वनिर्धारितहरूसहित पूर्वनिर्धारित डोमेन उत्पादन स्वतः सिर्जना गर्छ
* **नयाँ:** सबै कन्फिगर गरिएका प्रदायकहरूमा cron मार्फत दैनिक स्वचालित TLD सिंक
* **नयाँ:** प्रति-उत्पादन कन्फिगरेसनसहित WHOIS गोपनीयता सुरक्षा (सधैँ सक्रिय, ग्राहकको छनोट, वा निष्क्रिय)
* **नयाँ:** मूल्य प्रदर्शन र डार्क मोड समर्थनसहित WHOIS गोपनीयता चेकआउट चेकबक्स
* **नयाँ:** म्यानुअल डोमेन दर्ताका लागि Register Domain प्रशासक पृष्ठ
* **नयाँ:** Ultimate Multisite अपडेट सर्भरमार्फत स्वचालित plugin अपडेटहरू
* **नयाँ:** बैजनी ब्याज शैलीसहित उत्पादन सूची तालिकामा डोमेन उत्पादन प्रकार फिल्टर ट्याब
* **नयाँ:** डोमेन चेकआउट फारममा दर्ताकर्ता सम्पर्क फिल्डहरू (नाम, ठेगाना, सहर, प्रदेश, हुलाक कोड, देश, फोन)
* **नयाँ:** स्पष्ट त्रुटि सन्देशहरूसहित registrar API बोलाउनु अघि दर्ताकर्ता फिल्ड प्रमाणीकरण
* **नयाँ:** डोमेन दर्ता घटनाहरूका लागि प्रदायक-विशिष्ट लग च्यानलहरू (जस्तै domain-seller-namecheap.log)
* **नयाँ:** मुख्य दर्ता/साइनअप चेकआउट फारममा दर्ताकर्ता सम्पर्क फिल्डहरू (डोमेन दर्ता गर्दा देखाइन्छ)
* **सुधारिएको:** Domain Search चेकआउट फिल्डलाई सबडोमेन, दर्ता, र विद्यमान डोमेन ट्याबहरू समर्थन गर्ने एकीकृत Domain Selection फिल्डले प्रतिस्थापन गरियो
* **सुधारिएको:** डोमेन उत्पादन सेटिङहरू कोर विजेट प्रणालीमार्फत उत्पादन सम्पादन पृष्ठमै रेन्डर हुन्छन्
* **सुधारिएको:** ग्राहक डोमेन जानकारी स्वतन्त्र मेटाबक्सको सट्टा कोर डोमेन म्यापिङ विजेटमा जोडिन्छ
* **सुधारिएको:** TLD आयात विजार्ड सबै प्रदायकहरूबाट एक-क्लिक सिंकमा सरलीकृत गरियो
* **सुधारिएको:** Namecheap डोमेन उपलब्धताले छिटो खोजका लागि ब्याच API कल प्रयोग गर्छ
* **सुधारिएको:** Namecheap मूल्य API ले सही प्यारामिटरहरू र प्रतिक्रिया पार्सिङ प्रयोग गर्छ
* **सुधारिएको:** एकल नेटवर्क विकल्पमा केन्द्रीकृत TLD भण्डारण
* **सुधारिएको:** DNS परिवर्तन, ट्रान्सफर, र कन्फिगरेसन लागू गर्ने कार्यका लागि डोमेन गतिविधि लगिङ
* **सुधारिएको:** ब्याच प्रमाणीकरणसहित IANA मास्टर सूची प्रयोग गरेर OpenSRS का लागि पूर्ण TLD सिंक
* **सुधारिएको:** पृष्ठाङ्कित API अनुरोधहरूसहित Namecheap का लागि पूर्ण TLD सिंक
* **सुधारिएको:** पुराना प्रदायक क्लासहरूलाई Integration Registry ढाँचाले प्रतिस्थापन गरियो
* **सुधारिएको:** DNS र ट्रान्सफर कन्फिगरेसनसहित सेटिङ प्यानल
* **सुधारिएको:** फोन नम्बरहरू स्वतः +CC.NNN registrar ढाँचामा फर्म्याट हुन्छन्
* **सुधारिएको:** फोन फिल्ड प्रमाणीकरणले पेस गर्नुअघि फर्म्याटिङ क्यारेक्टरहरू हटाउँछ
* **सुधारिएको:** संस्करण आवश्यकता Ultimate Multisite 2.4.12 मा बढाइयो, अझ स्पष्ट सूचनासहित
* **सुधारिएको:** CI कार्यप्रवाहले addon र कोर plugin दुवैका लागि उचित checkout प्रयोग गर्छ
* **सुधारिएको:** prepare_registrant_info() ले बिलिङ ठेगाना fallback सहित checkout-मा-सुरक्षित प्रयोगकर्ता meta बाट पढ्छ
* **ठीक गरिएको:** चेकआउटका क्रममा लगइन नगरेका प्रयोगकर्ताहरूका लागि डोमेन खोज AJAX असफल भइरहेको
* **ठीक गरिएको:** चेकआउटका क्रममा लगइन नगरेका प्रयोगकर्ताहरूका लागि डोमेन मूल्य AJAX असफल भइरहेको
* **ठीक गरिएको:** WP-CLI आदेशहरू चलाउँदा Spyc क्लास पुनःघोषणा घातक त्रुटि
* **ठीक गरिएको:** Namecheap sandbox API टाइमआउट धेरै छोटो
* **ठीक गरिएको:** हरियो पृष्ठभूमिमा डोमेन खोज Select बटनको पाठ नदेखिने
* **ठीक गरिएको:** सम्पर्क जानकारी छुटेका कारण "RegistrantFirstName is Missing" त्रुटिसहित डोमेन दर्ता असफल भइरहेको
* **ठीक गरिएको:** चेकआउट समयमा साइट अझै अस्तित्वमा नभएको बेला blog_id=0 सहित डोमेन रेकर्ड सिर्जना भएको
* **ठीक गरिएको:** पूर्वनिर्धारित TLDs सेटिङ पार्स गरिएको array को सट्टा string का रूपमा फर्किएको
* **हटाइएको:** स्वतन्त्र Domain Management प्रशासक पृष्ठ — अब कोर डोमेन पृष्ठहरूबाटै सम्हालिन्छ

संस्करण 1.0.0 - 2025-09-28 मा जारी

**Ultimate Multisite v2 का लागि प्रमुख पुनर्लेखन**

* **नयाँ:** आधुनिक PHP 7.4+ संरचनासहित पूर्ण पुनर्लेखन
* **नयाँ:** Ultimate Multisite v2 चेकआउट प्रणालीसँग सहज एकीकरण
* **नयाँ:** लचिलो मूल्य विकल्पहरूसहित डोमेन उत्पादन व्यवस्थापन
* **नयाँ:** धेरै डोमेन प्रदायक समर्थन संरचना
* **नयाँ:** स्वतः-नवीकरण र subscription एकीकरण
* **नयाँ:** ग्राहक डोमेन व्यवस्थापन इन्टरफेस
* **नयाँ:** प्रशासक डोमेन निगरानी र लगहरू
* **नयाँ:** डोमेन उत्पादनहरूका लागि coupon समर्थन
* **नयाँ:** व्यापक सेटिङ व्यवस्थापन
* **नयाँ:** विकासकर्तामैत्री विस्तारयोग्य codebase
* **सुधारिएको:** पूर्ण सुविधा समर्थनसहित OpenSRS प्रदायक अद्यावधिक गरियो
* **सुधारिएको:** Ultimate Multisite v2 सँग मिल्दोजुल्दो आधुनिक UI
* **ठीक गरिएको:** सबै deprecated v1 code v2 मापदण्डहरूमा अद्यावधिक गरियो
* **हटाइएको:** पुरानो v1 संगतता (breaking change)

### अघिल्ला संस्करणहरू (v1 Legacy) {#previous-versions-v1-legacy}

### संस्करण 0.0.3 - 20/08/2019 {#version-003---20082019}

* ठीक गरिएको: Groundhogg CRM सँग असंगतता
* टिप्पणी: यो अन्तिम v1-संगत रिलीज थियो

### संस्करण 0.0.2 - 07/12/2018 {#version-002---07122018}

* ठीक गरिएको: License Key फिल्ड हटाइयो
* ठीक गरिएको: सुविधा plugin सक्रिय हुँदा योजना ट्याबहरू हराइरहेका
* सुधारिएको: दर्ता फिल्डमा skip बटन थपियो

### संस्करण 0.0.1 - प्रारम्भिक रिलीज {#version-001---initial-release}

* WP Ultimo v1 का लागि आधारभूत OpenSRS एकीकरण
* सरल डोमेन खोज र दर्ता
* योजनामा आधारित डोमेन अनुमतिहरू
