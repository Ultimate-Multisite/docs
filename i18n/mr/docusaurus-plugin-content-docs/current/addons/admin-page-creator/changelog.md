---
title: ॲडमिन पेज क्रिएटर चेंजलॉग
sidebar_position: 99
_i18n_hash: 60442b433a1fe73d3624b115e3d153a5
---
# ॲडमिन पेज क्रिएटर बदलांचा इतिहास

### Version 1.9.0 - Released on 2026-01-18 {#version-190---released-on-2026-01-18}

* दुरुस्त केले: ॲक्टिव्हेट करताना येणाऱ्या गंभीर त्रुटी (Fatal errors).
* पुनर्रचना केली: Content source classes ला योग्य parent constructor initialization सह Singleton trait वापरण्यासाठी.
* दुरुस्त केले: Vue.js template compilation errors मुळे content type selector render होत नव्हता.
* दुरुस्त केले: Vue data properties (template_id, external_link_url_embedable, external_link_url_checking) गायब होत्या.
* दुरुस्त केले: पेज लोड होताना TinyMCE editor व्यवस्थित सुरू होत नव्हता.
* दुरुस्त केले: Divi support file Composer द्वारे autoload होत नव्हती.
* दुरुस्त केले: Divi support class मध्ये PHP सिंटॅक्स खराब झाला होता.
* सुधारणा केली: JavaScript asset organization आणि minification.
* सुधारणा केली: नवीनतम WordPress आणि page builder आवृत्त्यांशी सुसंगतता (Compatibility).

= Version: 1.8.8 - Released on 2025-09-28

* prefix 'ultimate-multisite' मध्ये बदल केला; text domain अपडेट केला; आणि version वाढवला.

### Version 1.8.7 - 04/10/2023 {#version-187---04102023}

* दुरुस्त केले: नवीन ॲडमिन पेज जोडण्याचा प्रयत्न केल्यावर येणारी गंभीर त्रुटी;
* दुरुस्त केले: Oxygen stylesheets prefix सोबत संघर्ष (Conflict) होत होता;

### Version 1.8.6 - 09/08/2023 {#version-186---09082023}

* जोडले: मुख्य साइट (main site) किंवा सध्याच्या सब-साइट (sub-site) कडून डेटा प्रदर्शित करण्याचा पर्याय जोडला.
* जोडले: WordPress Block Editor (Gutenberg) साठी सपोर्ट जोडला.
* दुरुस्त केले: Brizy page assets लोड न होची समस्या दुरुस्त केली.

### Version 1.8.5 - 09/12/2020 {#version-185---09122020}

* दुरुस्त केले: Screen Options मध्ये मेनू लपवण्याचा पर्याय काढून जात नव्हता;

### Version 1.8.4 - 11/11/2020 {#version-184---11112020}

* दुरुस्त केले: Multisite Ultimate v2 साठी सपोर्ट जोडला;

### Version 1.8.3 - 01/10/2020 {#version-183---01102020}

* दुरुस्त केले: मागील बिल्डमधील Beaver Builder सोबतची विसंगती (Incompatibilities);
* दुरुस्त केले: WP 5.5 सह मार्जिनमधील विसंगती;

### Version 1.8.2 - 21/09/2020 {#version-182---21092020}

* दुरुस्त केले: WP 5.5 सोबतची लहान विसंगती;

### Version 1.8.1 - 05/08/2020 {#version-181---05082020}

* दुरुस्त केले: Brizy 2.0 सोबतची विसंगती;
* दुरुस्त केले: मेनू लिस्ट तयार करताना लहान कार्यक्षमतेच्या समस्या (performance issues);

### Version 1.8.0 - 27/04/2020 {#version-180---27042020}

* दुरुस्त केले: जेव्हा margin mode निवडलेला नसतो, तेव्हा Notices टॉप-बारखाली लपलेले असायचे;
* जोडले: आता कस्टम पेजेस एकाच वेळी अनेक WordPress ॲडमिन टॉप-लेव्हल आणि सब-पेजेसची जागा घेऊ शकतात;
* जोडले: आता Admins WP Admin Pages PRO वापरून ॲडमिन पेजेस लपवू शकतात;

### Version 1.7.9 - 01/04/2020 {#version-179---01042020}

* दुरुस्त केले: Brizy 1.10.118 आणि त्यावरील आवृत्त्यांमध्ये ॲडमिन पेजेसवर SVG सपोर्ट तुटत होता;

### Version 1.7.8 - 26/03/2020 {#version-178---26032020}

* दुरुस्त केले: फ्रेंच वापरताना Editor पेज खराब होणारा escaping error;

### Version 1.7.7 - 04/03/2020 {#version-177---04032020}

* दुरुस्त केले: Brizy Builder सोबतची लहान विसंगती;
* सुधारणा केली: Freemius SDK ला 2.3.2 पर्यंत अपडेट केले;

### Version 1.7.6 - 10/02/2020 {#version-176---10022020}

* दुरुस्त केले: Dashboard Widgets वर ॲडमिन पेज edit बटण उजव्या खालच्या कोपऱ्यात काम करत नव्हते;
* दुरुस्त केले: Astra सोबतची लहान विसंगती;
* दुरुस्त केले: Brizy च्या नवीन आवृत्तीमुळे सुसंगतता तुटत होती;

### Version 1.7.5 - 14/12/2019 {#version-175---14122019}

* दुरुस्त केले: Replace Page option वर मेनू आयटम भरण्यासाठी एक नवीन edge-case handler जोडला;
* दुरुस्त केले: Elementor fonts काम करत नव्हते;
* सुधारणा केली: Account page कडून संवेदनशील माहिती लपवण्यासाठी Freemius SDK अपडेट केले;

### Version 1.7.4 - 29/11/2019 {#version-174---29112019}

* दुरुस्त केले: WooCommerce Memberships सोबतची विसंगती;
* दुरुस्त केले: Oxygen Builder tab component काम करत नव्हता;
* दुरुस्त केले: Beaver Themer काम करत नव्हता;

### Version 1.7.3 - 12/07/2019 {#version-173---12072019}

* दुरुस्त केले: जेव्हा त्यांचे parent पेज दुसऱ्या ॲडमिन पेज प्रकारात रूपांतरित केले जाते, तेव्हा पेजेस गायब व्हायचे;
* सुधारणा केली: Admin Page प्रकारांमध्ये सूची टेबल विभाजक (list table dividers) अधिक चांगले केले;
* सुधारणा केली: प्लगइनच्या संपूर्ण कोडबेसचे सुरक्षा पुनरावलोकन (Security Review) केले;
* सुधारणा केली: जेव्हा ही सुविधा दिलेल्या मेनू/content source प्रकारासाठी उपलब्ध नसते, तेव्हा Separator tab वरील चेतावणीबद्दल टीप दिली;

### Version 1.7.2 - 01/07/2019 {#version-172---01072019}

* दुरुस्त केले: Freemius SDK आवृत्ती 2.3.0 पर्यंत अपडेट केली;
* दुरुस्त केले: Flywheel सोबतची विसंगती समस्या;

### Version 1.7.1 - 27/06/2019 {#version-171---27062019}

* दुरुस्त केले: Welcome Widget आता सर्व भूमिकांना (all roles) प्रदर्शित होतो;
* दुरुस्त केले: Screen Option to hide/display the Admin Pages menu, जर मेनू https://docs.wpadminpagespro.com/knowledge-base/hiding-wp-admin-pages-pro-from-your-users/ वर document केलेल्या filter द्वारे लपवला जात असेल, तर तो जोडला जात नव्हता;
* सुधारणा केली: Admin Pages मेनू लपवल्यास, Beaver Builder saved templates या यादीतून तयार केलेले टेम्पलेट्स देखील लपतात;
* जोडले: ॲडमिन पेजेस बल्क ॲक्टिव्हेट आणि डीॲक्टिव्हेट करण्याचा पर्याय;
* जोडले: मुख्य साइटवर पेजेस प्रदर्शित करण्याचा पर्याय;
* जोडले: Replace mode मध्ये टॉप आणि सब-लेव्हल मेनू लेबल्सचे नाव बदलण्याचा पर्याय;

### Version 1.7.0 - 04/06/2019 {#version-170---04062019}

* दुरुस्त केले: Oxygen templates दिसण्यात येणाऱ्या समस्या;
* जोडले: Widget Creation साठी सपोर्ट!

### Version 1.6.1 - 22/05/2019 {#version-161---22052019}

* दुरुस्त केले: टायपोस (Typos);
* दुरुस्त केले: समान order value असलेल्या मागील सब-मेनू आयटमवर सब-मेनू पेजेसने ओव्हरराईड करणे;
* दुरुस्त केले: डुप्लिकेशन आता slug रीसेट करतो;
* सुधारणा केली: pt_BR आणि es_ES po files अपडेट केले;
* सुधारणा केली: सूची टेबल आता कस्टम पेजेसची नावे parent pages म्हणून देखील सूचीबद्ध करते;

### Version 1.6.0 - 21/05/2019 {#version-160---21052019}

* जोडले: External Links आता iframe लोडिंगला देखील सपोर्ट करतात;

### Version 1.5.5 - 17/05/2019 {#version-155---17052019}

* दुरुस्त केले: जेव्हा पेज डिलीट होते किंवा डुप्लिकेट केले जाते, तेव्हा Warning message येणे;
* दुरुस्त केले: Admins साठी Permission settings लागू होत नव्हत्या;

### Version 1.5.4 - 08/05/2019 {#version-154---08052019}

* दुरुस्त केले: Sliced Invoices सोबतची विसंगती;
* दुरुस्त केले: Oxygen सोबतची लहान समस्या;
* दुरुस्त केले: नवीन ॲडमिन पेज शीर्षक (title) फील्डवरील placeholder key-up वर जात नव्हता;

### Version 1.5.3 - 03/05/2019 {#version-153---03052019}

* दुरुस्त केले: Advanced Custom Field option pages सोबतची विसंगती;
* जोडले: कस्टम ॲडमिन पेजेसचे लक्ष्य (targets) विशिष्ट वापरकर्त्यांमध्ये (users) जोडण्याचा पर्याय;

### Version 1.5.2 - 30/04/2019 {#version-152---30042019}

* दुरुस्त केले: Brizy च्या नवीन आवृत्त्यांसोबतची विसंगती;
* जोडले: स्पॅनिश भाषांतर जोडले - John Rozzo यांचे आभार. धन्यवाद, John!
* जोडले: Oxygen Builder साठी बीटा सपोर्ट;

### Version 1.5.1 - 15/04/2019 {#version-151---15042019}

* दुरुस्त केले: Normal आणि HTML editors वरील placeholders ची समस्या;
* दुरुस्त केले: Admin Pages Tools -> Export वर दिसत नव्हते;
* दुरुस्त केले: फक्त आमच्या स्वतःच्या पेजेसवर स्क्रिप्ट्स आणि स्टाईल्स लोड करणे;
* जोडले: Super Admins आता Admin Pages डुप्लिकेट करू शकतात;

### Version 1.5.0 - 29/03/2019 {#version-150---29032019}

* दुरुस्त केले: Sentry द्वारे पकडलेल्या लहान बग्स;
* दुरुस्त केले: Edit Admin page screen वर Delete button काम करत नव्हता;
* सुधारणा केली: BeaverBuilder button बदलला, जेणेकरून Standard BB license देखील समर्थित आहे हे स्पष्ट होईल;
* जोडले: Admins आता सब-मेनूचा क्रम (order) सेट करू शकतात;
* जोडले: Replace page mode मध्ये आता सर्व मेनू आयटमला सपोर्ट आहे;

### Version 1.4.0 - 14/02/2019 (stand-alone) & 27/02/2019 (add-on) {#version-140---14022019-stand-alone--27022019-add-on}

* जोडले: https://wpadminpagespro.com वर Stand-alone plugin म्हणून लॉन्च केले;
* जोडले: पेज तयार करण्याची प्रक्रिया पूर्ण झाल्यावर मेनू आयटम काढून टाकण्याचा पर्याय;
* जोडले: ॲडमिन पेजेसवरून ॲडमिन सूचना (admin notices) काढून टाकण्याचा पर्याय;
* जोडले: Content processing, जेणेकरून तुम्ही {{user:first_name}} सारखे placeholders ठेवू शकता आणि ते आपोआप वापरकर्त्याचे first_name meta field ने बदलले जातील;
* जोडले: Inline Editor;
* जोडले: भविष्यात नवीन Page Builders/Content Sources जोडणे सोपे करण्यासाठी consolidated content source parent class जोडला;
* जोडले: External URLs साठी सपोर्ट;

### Version 1.3.0 - 15/01/2019 {#version-130---15012019}

* दुरुस्त केले: multisite environments वर Admin Pages मुख्य साइटवर दिसत नव्हते;
* सुधारणा केली: subsites च्या export screen मधून Multisite Ultimate custom post types काढले;
* जोडले: create pages वर network admins साठी quick actions सह टॉप-बार;
* जोडले: मोठे! Elementor Support!
* जोडले: मोठे! Brizy Support!

### Version 1.2.1 - 17/11/2018 {#version-121---17112018}

* दुरुस्त केले: प्लगइनला Multisite Ultimate 1.9.0 सोबत सुसंगत बनवले;

### Version 1.2.0 - 10/09/2018 {#version-120---10092018}

* जोडले: जर wp-config.php वर WU_APC_ALLOW_PHP_PROCESSING true सेट केले असेल, तर PHP सपोर्ट जोडला. हे PHP चे eval वापरत नाही, परंतु यामुळे अजूनही सुरक्षा त्रुटी (security holes) निर्माण होऊ शकतात. याचा काळजीपूर्वक वापर करा;
* सुधारणा केली: Add-on plugin updater;
* सुधारणा केली: अपडेट सर्व्हरसाठी नवीन URL;

### Version 1.1.2 - 16/08/2018 {#version-112---16082018}

* दुरुस्त केले: WP Engine सोबतची लहान समस्या;

### Version 1.1.1 - 16/08/2018 {#version-111---16082018}

* दुरुस्त केले: replace pages वर परवानग्या (Permissions) योग्यरित्या लागू होत नव्हत्या;

### Version 1.1.0 - 15/08/2018 {#version-110---15082018}

* जोडले: Beaver Builder templates आता समर्थित आहेत! तुम्ही कस्टम ॲडमिन पेजेस तयार करण्यासाठी तुमच्या आवडत्या page builder चा वापर करू शकता;
* जोडले: आता WordPress च्या डिफॉल्ट ॲडमिन पेजेसची सामग्री (content) बदलणे शक्य आहे;
* जोडले: आता तयार केलेली सामग्री डिफॉल्ट WordPress ॲडमिन पेजेसच्या वर किंवा खाली जोडणे देखील शक्य आहे;

### 0.0.1 {#001}
- प्रारंभिक प्रकाशन
