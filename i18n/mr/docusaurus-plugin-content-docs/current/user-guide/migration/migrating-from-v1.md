---
title: V1 वरून स्थलांतर करणे
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 वरून स्थलांतरण

## Ultimate Multisite ने आपल्या मूळ 1.x आवृत्त्यांमधून 2.x आवृत्त्यांमध्ये बदल केला आहे.

Ultimate Multisite आवृत्ती 2.0 आणि त्यापुढील आवृत्त्या संपूर्ण कोडबेसचे पुनर्लेखन आहेत, म्हणजेच जुन्या आवृत्तीत आणि नवीन आवृत्तीत फारच कमी समानता आहे. या कारणास्तव, 1.x वरून 2.x वर अपग्रेड करताना, तुमचा डेटा नवीन आवृत्त्यांना समजेल अशा स्वरूपात स्थलांतरित करणे आवश्यक आहे.

सुदैवाने, Ultimate Multisite 2.0+ मध्ये **एक migrator अंतर्भूत आहे** जो जुन्या आवृत्तीचा डेटा शोधून त्याला नवीन स्वरूपात रूपांतरित करू शकतो. हे स्थलांतरण आवृत्ती 2.0+ च्या **Setup Wizard** दरम्यान होते.

हा धडा migrator कसे कार्य करतो, अपयशाच्या प्रकरणांमध्ये काय करावे आणि या प्रक्रियेदरम्यान उद्भवू शकणाऱ्या समस्यांचे निवारण कसे करावे हे समाविष्ट करतो.

_**महत्त्वाचे: आवृत्ती 1.x वरून आवृत्ती 2.0 वर अपग्रेड करण्यापूर्वी कृपया तुमच्या साइट डेटाबेसचा बॅकअप घ्या**_

## पहिली पायरी

पहिली पायरी म्हणजे plugin .zip फाइल डाउनलोड करणे आणि तुमच्या network admin dashboard वर आवृत्ती 2.0 इन्स्टॉल करणे.

तुम्ही [आवृत्ती 2.0 इन्स्टॉल आणि सक्रिय](../getting-started/installing-ultimate-multisite.md) केल्यानंतर, सिस्टम आपोआप शोधेल की तुमची Multisite जुन्या आवृत्तीवर चालू आहे आणि तुम्हाला plugin पेजच्या वरच्या बाजूला हा संदेश दिसेल.

_**टीप:** जर तुमच्या Multisite वर Ultimate Multisite 1.x इन्स्टॉल असेल, तर तुम्हाला विद्यमान plugin नुकत्याच डाउनलोड केलेल्या आवृत्तीने बदलण्याचा पर्याय मिळेल. कृपया **Replace current with uploaded** वर क्लिक करा._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

पुढील पेजवर तुम्हाला आवृत्ती 1.x सोबत कोणते legacy add-ons इन्स्टॉल आहेत ते दिसेल. तुम्ही वापरत असलेली आवृत्ती 2.0 शी सुसंगत आहे की स्थलांतरणानंतर तुम्हाला add-on ची अपग्रेडेड आवृत्ती इन्स्टॉल करणे आवश्यक आहे याबद्दल सूचना असतील.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

तुम्ही पुढे जाण्यास तयार असाल, तेव्हा **Visit the Installer to finish the upgrade** असे लिहिलेल्या बटणावर क्लिक करा.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

त्यानंतर तुम्हाला काही स्वागत संदेशांसह installation wizard पेजवर नेले जाईल. पुढील पेजवर जाण्यासाठी फक्त **Get Started** वर क्लिक करा.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** वर क्लिक केल्यानंतर, तुम्हाला Pre-install Checks वर पुनर्निर्देशित केले जाईल. यामध्ये तुमची System Information आणि WordPress installation दिसेल आणि ती **Ultimate Multisite च्या आवश्यकता** पूर्ण करते का हे सांगितले जाईल.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

पुढची पायरी म्हणजे तुमची Ultimate Multisite license key टाकणे आणि plugin सक्रिय करणे. यामुळे add-ons सह सर्व वैशिष्ट्ये तुमच्या साइटवर उपलब्ध होतील याची खात्री होईल.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

तुमची key टाकल्यानंतर, **Agree & Activate** वर क्लिक करा.

License सक्रिय झाल्यानंतर, पुढील पेजवर **Install** वर क्लिक करून तुम्ही प्रत्यक्ष installation सुरू करू शकता. यामुळे आवृत्ती 2.0 कार्य करण्यासाठी आवश्यक फाइल्स आणि डेटाबेस आपोआप तयार होतील.

<!-- Screenshot unavailable: Installation page showing what will be updated with Install button -->

## आता, स्थलांतरण

Migrator मध्ये एक अंतर्भूत सुरक्षा वैशिष्ट्य आहे ज्याद्वारे ते तुमची संपूर्ण multisite तपासेल आणि तुमचा सर्व Ultimate Multisite डेटा कोणत्याही समस्यांशिवाय स्थलांतरित होऊ शकतो याची खात्री करेल. प्रक्रिया सुरू करण्यासाठी **Run Check** बटणावर क्लिक करा.

<!-- Screenshot unavailable: Migration page with Run Check button to verify data can be converted -->

तपासणी पूर्ण झाल्यानंतर, दोन शक्यता आहेत: निकाल एकतर **त्रुटीसह** असू शकतो किंवा **त्रुटीशिवाय**.

### त्रुटीसह

जर तुम्हाला त्रुटी संदेश मिळाला, तर त्रुटी दुरुस्त करण्यात मदत करण्यासाठी तुम्हाला आमच्या support टीमशी संपर्क साधावा लागेल. तुम्ही ticket तयार करताना **error log प्रदान करा**. तुम्ही log डाउनलोड करू शकता किंवा contact our support team असे लिहिलेल्या लिंकवर क्लिक करू शकता. त्यामुळे तुमच्या पेजच्या उजव्या बाजूला help widget उघडेल ज्यामध्ये फील्ड्स आधीच भरलेले असतील आणि description अंतर्गत error logs समाविष्ट असतील.

_**सिस्टमला त्रुटी आढळल्याने, तुम्ही आवृत्ती 2.0 वर स्थलांतरण करू शकणार नाही. त्रुटी दुरुस्त होईपर्यंत तुमचे network चालू ठेवण्यासाठी तुम्ही आवृत्ती 1.x वर परत जाऊ शकता.**_

### त्रुटीशिवाय

जर सिस्टमला कोणतीही त्रुटी आढळली नाही, तर तुम्हाला यशाचा संदेश आणि तळाशी **Migrate** बटण दिसेल जे तुम्हाला स्थलांतरणासह पुढे जाण्याची परवानगी देईल. या पेजवर, पुढे जाण्यापूर्वी तुमच्या डेटाबेसचा बॅकअप तयार करण्याची आठवण करून दिली जाईल, जे आम्ही जोरदार शिफारस करतो. तुमचा बॅकअप आधीच असल्यास **Migrate** वर क्लिक करा.

<!-- Screenshot unavailable: Migration page showing success message and backup recommendation -->

<!-- Screenshot unavailable: Migrate button on the bottom-right corner -->

आणि हे एवढेच आहे!

तुम्ही एकतर तुमचा logo आणि इतर गोष्टी अपडेट करण्यासाठी Wizard setup चालू ठेवू शकता किंवा तुमच्या Ultimate Multisite आवृत्ती 2.0 मेनू आणि त्याच्या नवीन interface वर नेव्हिगेट करणे सुरू करू शकता. पुढे जा आणि मजा करा.
