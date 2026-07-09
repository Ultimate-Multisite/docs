---
title: डोमेन विक्रेता बदलनोंद
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller बदलनोंद

आवृत्ती 1.3.0 - 2026-06-02 रोजी प्रकाशित
- नवीन: HostAfrica पुनर्विक्रेता शिल्लक खूप कमी झाल्यावर network-admin चेतावणी जोडली
- नवीन: नव्याने नोंदणीकृत domain चे network site शी स्वयंचलित mapping जोडले
- दुरुस्ती: नवीन domain नोंदणी करतानाच registrant field आवश्यकता लागू केल्या
- दुरुस्ती: monitor balance सूचना dismiss करता येण्याजोग्या केल्या
- दुरुस्ती: WooCommerce registrant billing तपशील जतन केले जातील याची खात्री केली
- दुरुस्ती: नोंदणीदरम्यान registrant contact आवश्यकता लागू केल्या
- दुरुस्ती: domain registration उत्पादने 0% markup सह तयार होण्यापासून रोखले
- दुरुस्ती: checkout session flow मधून domain निवडी आणि pricing जतन केले
- दुरुस्ती: HostAfrica domain pricing currency प्रदर्शन सुधारले
- दुरुस्ती: WP-core query-var विसंगती टाळण्यासाठी checkout form-action वर्तन सुधारले
- सुधारित: setup मार्गदर्शनात HostAfrica पुनर्विक्रेता configuration दस्तऐवजीकरण जोडले

आवृत्ती 1.2.0 - 2026-05-25 रोजी प्रकाशित
- नवीन: checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, आणि ID protection समर्थनासह HostAfrica domain-selling integration म्हणून जोडले
- नवीन: reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, आणि TLD sync समर्थनासह Openprovider domain-selling integration म्हणून जोडले
- नवीन: availability checks, registration, nameserver updates, registrar lock, आणि WHOIS privacy साठी core integration मधील सामायिक Hostinger API token वापरून Hostinger domain-selling integration म्हणून जोडले
- सुधारित: developer integration मार्गदर्शनासाठी domain lifecycle action आणि filter docblocks जोडले
- सुधारित: addon readme मध्ये plugin compatibility metadata WordPress 7.0 वर अद्ययावत केले
- सुधारित: आगामी release coordination साठी वापरले जाणारे planning templates अद्ययावत केले

आवृत्ती 1.1.0 - 2026-05-08 रोजी प्रकाशित
- नवीन: ResellerClub, Enom, आणि OpenSRS registrars साठी DNS record creation (add_dns_record) लागू केले
- दुरुस्ती: Default DNS Records parser आता {DOMAIN} आणि {SITE_URL} tokens सहन करतो
- दुरुस्ती: site_url शी collision टाळण्यासाठी domain selection checkout field slugs namespaced केले

आवृत्ती 1.0.8 - 2026-05-07 रोजी प्रकाशित
- दुरुस्ती: ResellerClub domain pricing आता योग्य API अंतिमबिंदूपासून live cost prices मिळवते

आवृत्ती 1.0.7 - 2026-05-06 रोजी प्रकाशित
* दुरुस्ती: ResellerClub test_connection आवश्यक tlds parameter पाठवते (#224)

आवृत्ती 1.0.6 - 2026-05-05 रोजी प्रकाशित
* दुरुस्ती: सुधारित API response handling आणि registry-driven provider routing सह ResellerClub domain registration आता योग्यरीत्या काम करते
* दुरुस्ती: Register Domain admin page UX सुधारणा
* काढले: CyberPanel registrar integration

आवृत्ती 1.0.5 - 2026-04-02 रोजी प्रकाशित
* नवीन: domain registration आणि management साठी GoDaddy registrar integration
* नवीन: NameSilo registrar integration
* नवीन: ResellerClub registrar integration
* नवीन: domain purchase आणि mapping वर SES sending domain auto-verify करा
* दुरुस्ती: test environment मध्ये plugin constants चे redefinition पासून संरक्षण करा
* दुरुस्ती: MySQL flags install-wp-tests.sh मध्ये योग्यरीत्या word-split होतात

आवृत्ती 1.0.4 - 2026-03-14 रोजी प्रकाशित
* **दुरुस्ती:** काही गहाळ css assets
* **दुरुस्ती:** अनुपलब्ध tlds संबंधित त्रुटी

आवृत्ती 1.0.3 - 2026-03-09 रोजी प्रकाशित
* **दुरुस्ती:** checkout shortcode सह legacy signup template वापरताना Vue reactive property त्रुटी (domain_option, selected_domain, domain_provider)
* **दुरुस्ती:** domain selection checkout field मध्ये subdomain input field चे misalignment आणि oversized text
* **दुरुस्ती:** domain selection field उपस्थित असताना "Your URL will be" preview block लपवा

आवृत्ती 1.0.2 - 2026-03-01 रोजी प्रकाशित
* **सुधारित:** settings page वरून global markup settings काढले — pricing आता फक्त per-product आहे
* **सुधारित:** झटपट navigation साठी settings page वर "Manage Domain Products" link जोडली
* **सुधारित:** domain product settings साठी अधिक स्पष्ट field descriptions आणि tooltips (catch-all vs TLD-specific, markup types, introductory pricing)
* **सुधारित:** संपूर्ण settings page मध्ये अधिक चांगली वर्णने (search TLDs, renewals, DNS, notifications)

आवृत्ती 1.0.1 - 2026-02-27 रोजी प्रकाशित

* **नवीन:** मोठ्या प्रमाणातील किंमत व्यवस्थापनासाठी TLD आयात साधन
* **नवीन:** डोमेन उत्पादनांसाठी प्रारंभिक किंमत समर्थन
* **नवीन:** Cypress सह E2E चाचणी संच
* **नवीन:** डोमेन जीवनचक्र सूचनांसाठी ईमेल टेम्पलेट्स
* **नवीन:** अॅडमिन डोमेन नोंदणी मॉडलवर नोंदणीकर्त्याच्या पत्त्याची फील्ड, सेटिंग्जमधून पूर्व-भरलेली
* **नवीन:** रेकॉर्ड जोडणे, संपादित करणे आणि हटवणे समर्थनासह ग्राहक DNS व्यवस्थापन इंटरफेस
* **नवीन:** स्वयंचलित डोमेन मॅपिंगसह "तुमचा स्वतःचा डोमेन आणा" checkout पर्याय
* **नवीन:** checkout दरम्यान डोमेन नावावरून साइट URL स्वयंचलितपणे तयार करा
* **नवीन:** सेटिंग्जमध्ये डीफॉल्ट नेमसर्व्हर आणि DNS रेकॉर्ड कॉन्फिगरेशन
* **नवीन:** मुख्य डोमेन संपादन पृष्ठावर डोमेन नोंदणी तपशील आणि DNS व्यवस्थापन
* **नवीन:** सेटअप विझार्ड समंजस डीफॉल्ट्ससह डीफॉल्ट डोमेन उत्पादन स्वयंचलितपणे तयार करतो
* **नवीन:** सर्व कॉन्फिगर केलेल्या पुरवठादारांमध्ये cron द्वारे दररोज स्वयंचलित TLD सिंक
* **नवीन:** प्रति-उत्पादन कॉन्फिगरेशनसह WHOIS गोपनीयता संरक्षण (नेहमी चालू, ग्राहकाची निवड, किंवा अक्षम)
* **नवीन:** किंमत प्रदर्शन आणि डार्क मोड समर्थनासह WHOIS गोपनीयता checkout चेकबॉक्स
* **नवीन:** मॅन्युअल डोमेन नोंदणीसाठी Register Domain अॅडमिन पृष्ठ
* **नवीन:** Ultimate Multisite अपडेट सर्व्हरद्वारे स्वयंचलित plugin अपडेट्स
* **नवीन:** जांभळ्या बॅज शैलीसह उत्पादन सूची तक्त्यात डोमेन उत्पादन प्रकार फिल्टर टॅब
* **नवीन:** डोमेन checkout फॉर्मवर नोंदणीकर्ता संपर्क फील्ड्स (नाव, पत्ता, शहर, राज्य, पोस्टल कोड, देश, फोन)
* **नवीन:** स्पष्ट त्रुटी संदेशांसह रजिस्ट्रार API कॉल करण्यापूर्वी नोंदणीकर्ता फील्ड प्रमाणीकरण
* **नवीन:** डोमेन नोंदणी घटनांसाठी पुरवठादार-विशिष्ट लॉग चॅनेल्स (उदा. domain-seller-namecheap.log)
* **नवीन:** मुख्य नोंदणी/साइनअप checkout फॉर्मवर नोंदणीकर्ता संपर्क फील्ड्स (डोमेन नोंदणी करताना दाखवले जातात)
* **सुधारित:** Domain Search checkout फील्डच्या जागी सबडोमेन, नोंदणी आणि विद्यमान डोमेन टॅबना समर्थन देणारे एकत्रित Domain Selection फील्ड
* **सुधारित:** डोमेन उत्पादन सेटिंग्ज मुख्य विजेट प्रणालीद्वारे उत्पादन संपादन पृष्ठावर इनलाइन रेंडर होतात
* **सुधारित:** ग्राहक डोमेन माहिती स्वतंत्र मेटाबॉक्सऐवजी मुख्य डोमेन मॅपिंग विजेटमध्ये हुक होते
* **सुधारित:** TLD आयात विझार्ड सर्व पुरवठादारांकडून वन-क्लिक सिंकमध्ये सोपा केला
* **सुधारित:** जलद शोधासाठी Namecheap डोमेन उपलब्धता बॅच API कॉल वापरते
* **सुधारित:** Namecheap किंमत API योग्य पॅरामीटर्स आणि प्रतिसाद पार्सिंग वापरते
* **सुधारित:** एकाच नेटवर्क पर्यायात केंद्रीकृत TLD संग्रहण
* **सुधारित:** DNS बदल, हस्तांतरणे आणि कॉन्फिग अनुप्रयोगासाठी डोमेन क्रियाकलाप लॉगिंग
* **सुधारित:** बॅच प्रमाणीकरणासह IANA मास्टर सूची वापरून OpenSRS साठी पूर्ण TLD सिंक
* **सुधारित:** पृष्ठांकित API विनंत्यांसह Namecheap साठी पूर्ण TLD सिंक
* **सुधारित:** लेगसी पुरवठादार क्लासेसच्या जागी Integration Registry पॅटर्न
* **सुधारित:** DNS आणि हस्तांतरण कॉन्फिगरेशनसह सेटिंग्ज पॅनेल
* **सुधारित:** फोन क्रमांक +CC.NNN रजिस्ट्रार फॉरमॅटमध्ये स्वयंचलितपणे फॉरमॅट केले जातात
* **सुधारित:** फोन फील्ड प्रमाणीकरण सबमिशनपूर्वी फॉरमॅटिंग वर्ण काढून टाकते
* **सुधारित:** अधिक स्पष्ट सूचनेसह आवृत्ती आवश्यकता Ultimate Multisite 2.4.12 पर्यंत वाढवली
* **सुधारित:** CI वर्कफ्लो addon आणि मुख्य plugin दोन्हीसाठी योग्य checkout वापरतो
* **सुधारित:** prepare_registrant_info() बिलिंग पत्ता फॉलबॅकसह checkout-जतन केलेल्या वापरकर्ता मेटामधून वाचते
* **निश्चित:** checkout दरम्यान लॉग-इन नसलेल्या वापरकर्त्यांसाठी डोमेन शोध AJAX अपयशी होत होता
* **निश्चित:** checkout दरम्यान लॉग-इन नसलेल्या वापरकर्त्यांसाठी डोमेन किंमत AJAX अपयशी होत होती
* **निश्चित:** WP-CLI कमांड्स चालवताना Spyc क्लास पुन्हा-घोषणा घातक त्रुटी
* **निश्चित:** Namecheap sandbox API टाइमआउट खूप कमी
* **निश्चित:** हिरव्या पार्श्वभूमीवर डोमेन शोध Select बटण मजकूर दिसत नव्हता
* **निश्चित:** संपर्क माहिती नसल्यामुळे "RegistrantFirstName is Missing" त्रुटीसह डोमेन नोंदणी अपयशी होत होती
* **निश्चित:** checkout वेळी साइट अजून अस्तित्वात नसताना blog_id=0 सह डोमेन रेकॉर्ड तयार झाला
* **निश्चित:** डीफॉल्ट TLDs सेटिंग पार्स केलेल्या अॅरेऐवजी स्ट्रिंग म्हणून परत येत होती
* **काढले:** स्वतंत्र Domain Management अॅडमिन पृष्ठ — आता मुख्य डोमेन पृष्ठांद्वारे हाताळले जाते

आवृत्ती 1.0.0 - 2025-09-28 रोजी प्रकाशित

**Ultimate Multisite v2 साठी मोठे पुनर्लेखन**

* **नवीन:** आधुनिक PHP 7.4+ आर्किटेक्चरसह पूर्ण पुनर्लेखन
* **नवीन:** Ultimate Multisite v2 checkout प्रणालीसह अखंड एकत्रीकरण
* **नवीन:** लवचिक किंमत पर्यायांसह डोमेन उत्पादन व्यवस्थापन
* **नवीन:** अनेक डोमेन पुरवठादार समर्थन आर्किटेक्चर
* **नवीन:** स्वयं-नूतनीकरण आणि सदस्यता एकत्रीकरण
* **नवीन:** ग्राहक डोमेन व्यवस्थापन इंटरफेस
* **नवीन:** अॅडमिन डोमेन मॉनिटरिंग आणि लॉग्स
* **नवीन:** डोमेन उत्पादनांसाठी कूपन समर्थन
* **नवीन:** सर्वसमावेशक सेटिंग्ज व्यवस्थापन
* **नवीन:** विकसक-अनुकूल विस्तारयोग्य कोडबेस
* **सुधारित:** पूर्ण वैशिष्ट्य समर्थनासह OpenSRS पुरवठादार अपडेट केला
* **सुधारित:** Ultimate Multisite v2 शी सुसंगत आधुनिक UI
* **निश्चित:** सर्व अप्रचलित v1 कोड v2 मानकांनुसार अपडेट केला
* **काढले:** लेगसी v1 सुसंगतता (ब्रेकिंग बदल)

### मागील आवृत्त्या (v1 लेगसी)

### आवृत्ती 0.0.3 - 20/08/2019

* निश्चित: Groundhogg CRM सह विसंगतता
* टीप: हे शेवटचे v1-सुसंगत प्रकाशन होते

### आवृत्ती 0.0.2 - 07/12/2018

* निश्चित: License Key फील्ड काढले
* निश्चित: वैशिष्ट्य plugin सक्रिय असताना योजना टॅब गायब
* सुधारित: नोंदणी फील्डवर वगळा बटण जोडले

### आवृत्ती 0.0.1 - प्रारंभिक प्रकाशन

* WP Ultimo v1 साठी मूलभूत OpenSRS एकत्रीकरण
* साधा डोमेन शोध आणि नोंदणी
* योजनाधारित डोमेन परवानग्या
