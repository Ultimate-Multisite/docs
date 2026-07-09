---
title: डोमेन विक्रेता परिवर्तन लॉग
sidebar_position: 99
_i18n_hash: 6b9be73c1503d8df8a806bb02b241873
---
# Domain Seller परिवर्तन-सूची

Version 1.3.0 - 2026-06-02 को जारी
- नया: HostAfrica reseller शेषराशि बहुत कम होने पर network-admin चेतावनी जोड़ी गई
- नया: नए पंजीकृत domain को network site से अपने-आप मैप करना जोड़ा गया
- सुधार: registrant field आवश्यकताएँ केवल नया domain पंजीकृत करते समय लागू की गईं
- सुधार: monitor balance सूचनाएँ खारिज करने योग्य बनाई गईं
- सुधार: सुनिश्चित किया गया कि WooCommerce registrant billing विवरण सुरक्षित रहें
- सुधार: पंजीकरण के दौरान registrant contact आवश्यकताएँ लागू की गईं
- सुधार: domain registration products को 0% markup के साथ बनने से रोका गया
- सुधार: checkout session प्रवाह के दौरान domain चयन और pricing सुरक्षित रखे गए
- सुधार: HostAfrica domain pricing currency प्रदर्शन बेहतर किया गया
- सुधार: WP-core query-var असंगतियों को रोकने के लिए checkout form-action व्यवहार बेहतर किया गया
- बेहतर: setup guidance में HostAfrica reseller configuration दस्तावेज़ जोड़ा गया

Version 1.2.0 - 2026-05-25 को जारी
- नया: HostAfrica को checkout, setup wizard, lookup, TLD/pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, और ID protection support के साथ domain-selling integration के रूप में जोड़ा गया
- नया: Openprovider को reseller pricing, registration, renewal, transfer, nameserver, DNS, EPP code, registrar lock, WHOIS privacy, और TLD sync support के साथ domain-selling integration के रूप में जोड़ा गया
- नया: उपलब्धता जाँच, registration, nameserver updates, registrar lock, और WHOIS privacy के लिए core integration से साझा Hostinger API token का उपयोग करते हुए Hostinger को domain-selling integration के रूप में जोड़ा गया
- बेहतर: developer integration guidance के लिए domain lifecycle action और filter docblocks जोड़े गए
- बेहतर: addon readme में plugin compatibility metadata को WordPress 7.0 पर updated किया गया
- बेहतर: upcoming release coordination के लिए उपयोग किए जाने वाले planning templates updated किए गए

Version 1.1.0 - 2026-05-08 को जारी
- नया: ResellerClub, Enom, और OpenSRS registrars के लिए DNS record creation (add_dns_record) लागू किया गया
- सुधार: Default DNS Records parser अब {DOMAIN} और {SITE_URL} tokens को सहन करता है
- सुधार: site_url से टकराव रोकने के लिए Domain selection checkout field slugs को namespaced किया गया

Version 1.0.8 - 2026-05-07 को जारी
- सुधार: ResellerClub domain pricing अब सही API endpoint से live cost prices लाता है

Version 1.0.7 - 2026-05-06 को जारी
* सुधार: ResellerClub test_connection आवश्यक tlds parameter भेजता है (#224)

Version 1.0.6 - 2026-05-05 को जारी
* सुधार: बेहतर API response handling और registry-driven provider routing के साथ ResellerClub domain registration अब सही ढंग से काम करता है
* सुधार: Register Domain admin page UX सुधार
* हटाया गया: CyberPanel registrar integration

Version 1.0.5 - 2026-04-02 को जारी
* नया: domain registration और management के लिए GoDaddy registrar integration
* नया: NameSilo registrar integration
* नया: ResellerClub registrar integration
* नया: domain purchase और mapping पर SES sending domain को auto-verify करना
* सुधार: test environment में redefinition से plugin constants की सुरक्षा की गई
* सुधार: install-wp-tests.sh में MySQL flags word-split सही ढंग से होते हैं

Version 1.0.4 - 2026-03-14 को जारी
* **सुधार:** कुछ missing css assets
* **सुधार:** unavailable tlds से संबंधित error

Version 1.0.3 - 2026-03-09 को जारी
* **सुधार:** checkout shortcode के साथ legacy signup template का उपयोग करते समय Vue reactive property errors (domain_option, selected_domain, domain_provider)
* **सुधार:** domain selection checkout field में Subdomain input field misalignment और oversized text
* **सुधार:** domain selection field मौजूद होने पर "Your URL will be" preview block छिपाएँ

Version 1.0.2 - 2026-03-01 को जारी
* **बेहतर:** settings page से global markup settings हटाई गईं — pricing अब केवल per-product है
* **बेहतर:** तेज़ navigation के लिए settings page पर "Manage Domain Products" link जोड़ा गया
* **बेहतर:** domain product settings के लिए अधिक स्पष्ट field descriptions और tooltips (catch-all बनाम TLD-specific, markup types, introductory pricing)
* **बेहतर:** settings page भर में बेहतर descriptions (search TLDs, renewals, DNS, notifications)

Version 1.0.1 - 2026-02-27

* **नया:** थोक मूल्य-निर्धारण प्रबंधन के लिए TLD आयात टूल
* **नया:** डोमेन उत्पादों के लिए प्रारंभिक मूल्य-निर्धारण समर्थन
* **नया:** Cypress के साथ E2E परीक्षण सूट
* **नया:** डोमेन जीवनचक्र सूचनाओं के लिए ईमेल टेम्पलेट
* **नया:** एडमिन डोमेन पंजीकरण मोडल पर पंजीयक पते के फ़ील्ड, सेटिंग्स से पहले से भरे हुए
* **नया:** रिकॉर्ड जोड़ने, संपादित करने और हटाने के समर्थन के साथ ग्राहक DNS प्रबंधन इंटरफ़ेस
* **नया:** स्वचालित डोमेन मैपिंग के साथ "अपना खुद का डोमेन लाएँ" checkout विकल्प
* **नया:** checkout के दौरान डोमेन नाम से साइट URL अपने-आप बनाएँ
* **नया:** सेटिंग्स में डिफ़ॉल्ट नेमसर्वर और DNS रिकॉर्ड कॉन्फ़िगरेशन
* **नया:** मुख्य डोमेन संपादन पेज पर डोमेन पंजीकरण विवरण और DNS प्रबंधन
* **नया:** सेटअप विज़ार्ड उचित डिफ़ॉल्ट के साथ एक डिफ़ॉल्ट डोमेन उत्पाद अपने-आप बनाता है
* **नया:** सभी कॉन्फ़िगर किए गए प्रदाताओं में cron के ज़रिए दैनिक स्वचालित TLD सिंक
* **नया:** प्रति-उत्पाद कॉन्फ़िगरेशन के साथ WHOIS गोपनीयता सुरक्षा (हमेशा चालू, ग्राहक की पसंद, या अक्षम)
* **नया:** मूल्य प्रदर्शन और डार्क मोड समर्थन के साथ WHOIS गोपनीयता checkout चेकबॉक्स
* **नया:** मैन्युअल डोमेन पंजीकरण के लिए Register Domain एडमिन पेज
* **नया:** Ultimate Multisite अपडेट सर्वर के ज़रिए स्वचालित plugin अपडेट
* **नया:** बैंगनी बैज शैली के साथ उत्पाद सूची तालिका में डोमेन उत्पाद प्रकार फ़िल्टर टैब
* **नया:** डोमेन checkout फ़ॉर्म पर पंजीयक संपर्क फ़ील्ड (नाम, पता, शहर, राज्य, डाक कोड, देश, फ़ोन)
* **नया:** स्पष्ट त्रुटि संदेशों के साथ registrar API कॉल करने से पहले पंजीयक फ़ील्ड सत्यापन
* **नया:** डोमेन पंजीकरण इवेंट के लिए प्रदाता-विशिष्ट लॉग चैनल (जैसे domain-seller-namecheap.log)
* **नया:** मुख्य पंजीकरण/साइनअप checkout फ़ॉर्म पर पंजीयक संपर्क फ़ील्ड (डोमेन पंजीकृत करते समय दिखाए जाते हैं)
* **बेहतर:** Domain Search checkout फ़ील्ड को एकीकृत Domain Selection फ़ील्ड से बदला गया, जो सबडोमेन, पंजीकरण और मौजूदा डोमेन टैब का समर्थन करता है
* **बेहतर:** डोमेन उत्पाद सेटिंग्स मुख्य विजेट सिस्टम के ज़रिए उत्पाद संपादन पेज पर इनलाइन रेंडर होती हैं
* **बेहतर:** ग्राहक डोमेन जानकारी अलग metabox के बजाय मुख्य डोमेन मैपिंग विजेट में जुड़ती है
* **बेहतर:** TLD आयात विज़ार्ड को सभी प्रदाताओं से एक-क्लिक सिंक तक सरल किया गया
* **बेहतर:** Namecheap डोमेन उपलब्धता तेज़ खोज के लिए बैच API कॉल का उपयोग करती है
* **बेहतर:** Namecheap मूल्य-निर्धारण API सही पैरामीटर और रिस्पॉन्स पार्सिंग का उपयोग करती है
* **बेहतर:** एकल नेटवर्क विकल्प में केंद्रीकृत TLD स्टोरेज
* **बेहतर:** DNS बदलावों, ट्रांसफ़र और कॉन्फ़िगरेशन लागू करने के लिए डोमेन गतिविधि लॉगिंग
* **बेहतर:** बैच सत्यापन के साथ IANA मास्टर सूची का उपयोग करके OpenSRS के लिए पूर्ण TLD सिंक
* **बेहतर:** पेजिनेटेड API अनुरोधों के साथ Namecheap के लिए पूर्ण TLD सिंक
* **बेहतर:** पुराने प्रदाता क्लासों को Integration Registry पैटर्न से बदला गया
* **बेहतर:** DNS और ट्रांसफ़र कॉन्फ़िगरेशन के साथ सेटिंग्स पैनल
* **बेहतर:** फ़ोन नंबर अपने-आप +CC.NNN registrar फ़ॉर्मैट में स्वरूपित होते हैं
* **बेहतर:** फ़ोन फ़ील्ड सत्यापन सबमिशन से पहले फ़ॉर्मैटिंग वर्ण हटाता है
* **बेहतर:** अधिक स्पष्ट सूचना के साथ संस्करण आवश्यकता Ultimate Multisite 2.4.12 तक बढ़ाई गई
* **बेहतर:** CI वर्कफ़्लो addon और मुख्य plugin दोनों के लिए सही checkout का उपयोग करता है
* **बेहतर:** prepare_registrant_info() checkout-सहेजे गए उपयोगकर्ता मेटा से पढ़ता है, बिलिंग पते के fallback के साथ
* **ठीक किया गया:** checkout के दौरान लॉगिन न किए हुए उपयोगकर्ताओं के लिए डोमेन खोज AJAX विफल हो रहा था
* **ठीक किया गया:** checkout के दौरान लॉगिन न किए हुए उपयोगकर्ताओं के लिए डोमेन मूल्य-निर्धारण AJAX विफल हो रहा था
* **ठीक किया गया:** WP-CLI कमांड चलाते समय Spyc क्लास redeclaration fatal error
* **ठीक किया गया:** Namecheap sandbox API टाइमआउट बहुत छोटा था
* **ठीक किया गया:** डोमेन खोज Select बटन टेक्स्ट हरे बैकग्राउंड पर दिखाई नहीं दे रहा था
* **ठीक किया गया:** संपर्क जानकारी गायब होने के कारण "RegistrantFirstName is Missing" त्रुटि के साथ डोमेन पंजीकरण विफल हो रहा था
* **ठीक किया गया:** checkout समय पर साइट अभी मौजूद नहीं होने पर blog_id=0 के साथ डोमेन रिकॉर्ड बन रहा था
* **ठीक किया गया:** डिफ़ॉल्ट TLDs सेटिंग पार्स किए गए array के बजाय string के रूप में लौट रही थी
* **हटाया गया:** अलग Domain Management एडमिन पेज — अब मुख्य डोमेन पेजों के ज़रिए संभाला जाता है

संस्करण 1.0.0 - 2025-09-28 को रिलीज़ किया गया

**Ultimate Multisite v2 के लिए बड़ा पुनर्लेखन**

* **नया:** आधुनिक PHP 7.4+ आर्किटेक्चर के साथ पूरा पुनर्लेखन
* **नया:** Ultimate Multisite v2 checkout सिस्टम के साथ सहज एकीकरण
* **नया:** लचीले मूल्य-निर्धारण विकल्पों के साथ डोमेन उत्पाद प्रबंधन
* **नया:** कई डोमेन प्रदाता समर्थन आर्किटेक्चर
* **नया:** auto-renewal और subscription एकीकरण
* **नया:** ग्राहक डोमेन प्रबंधन इंटरफ़ेस
* **नया:** एडमिन डोमेन निगरानी और लॉग
* **नया:** डोमेन उत्पादों के लिए कूपन समर्थन
* **नया:** व्यापक सेटिंग्स प्रबंधन
* **नया:** डेवलपर-अनुकूल विस्तारणीय कोडबेस
* **बेहतर:** पूर्ण फ़ीचर समर्थन के साथ अपडेट किया गया OpenSRS प्रदाता
* **बेहतर:** Ultimate Multisite v2 के अनुरूप आधुनिक UI
* **ठीक किया गया:** सभी अप्रचलित v1 कोड v2 मानकों में अपडेट किया गया
* **हटाया गया:** पुराने v1 की अनुकूलता (ब्रेकिंग बदलाव)

### पिछले संस्करण (v1 Legacy)

### संस्करण 0.0.3 - 20/08/2019

* ठीक किया गया: Groundhogg CRM के साथ असंगति
* नोट: यह अंतिम v1-संगत रिलीज़ था

### संस्करण 0.0.2 - 07/12/2018

* ठीक किया गया: License Key फ़ील्ड हटाया गया
* ठीक किया गया: फ़ीचर plugin सक्रिय होने पर प्लान टैब गायब थे
* बेहतर: पंजीकरण फ़ील्ड पर skip बटन जोड़ा गया

### संस्करण 0.0.1 - प्रारंभिक रिलीज़

* WP Ultimo v1 के लिए बुनियादी OpenSRS एकीकरण
* सरल डोमेन खोज और पंजीकरण
* प्लान-आधारित डोमेन अनुमतियाँ
