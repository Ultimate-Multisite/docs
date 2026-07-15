---
title: Sunrise फाइल त्रुटी
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise फाइल इन्स्टॉल करताना त्रुटी

sunrise.php ही एक खास फाइल आहे जी WordPress स्वतः सुरू होताना शोधते. WordPress ला sunrise.php फाइल शोधता यावी यासाठी ती **wp-content फोल्डर** मध्ये असणे आवश्यक आहे.

जेव्हा तुम्ही Ultimate Multisite सक्रिय करता आणि स्क्रीनशॉटमध्ये दाखवल्याप्रमाणे सेटअप विझार्ड पूर्ण करता, तेव्हा Ultimate Multisite आमची sunrise.php फाइल wp-content फोल्डरमध्ये कॉपी करण्याचा प्रयत्न करते.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

बहुतेक वेळा, आम्ही फाइल यशस्वीरित्या कॉपी करू शकतो आणि सर्व काही व्यवस्थित चालते. तथापि, जर काही योग्यरित्या सेट केलेले नसेल (उदाहरणार्थ, फोल्डर परवानग्या), तर अशी परिस्थिती येऊ शकते जिथे Ultimate Multisite फाइल कॉपी करू शकणार नाही.

जर तुम्ही Ultimo ने दिलेला त्रुटी संदेश वाचला, तर तुम्हाला दिसेल की नेमके हेच घडले आहे: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

हे दुरुस्त करण्यासाठी, तुम्ही फक्त wp-ultimo plugin फोल्डरमधील sunrise.php फाइल कॉपी करून तुमच्या wp-content फोल्डरमध्ये पेस्ट करू शकता. हे केल्यानंतर, विझार्ड पेज रीलोड करा आणि तपासण्या पास व्हायला हव्यात.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> कोणत्याही परिस्थितीत, भविष्यात समस्या टाळण्यासाठी (फक्त Ultimate Multisite साठी नाही तर इतर plugins आणि themes साठी देखील) तुमच्या फोल्डर परवानग्यांची सर्वसाधारण तपासणी करणे योग्य ठरेल.

WordPress मध्ये समाविष्ट असलेले **Health Check tool** (तुम्ही ते तुमच्या मुख्य साइटच्या **admin panel > Tools > Health Check** द्वारे वापरू शकता) तुमच्या फोल्डर परवानग्या WordPress साठी समस्या निर्माण करू शकणाऱ्या मूल्यांवर सेट आहेत का हे सांगण्यास सक्षम आहे.

<!-- Screenshot unavailable: WordPress Health Check tool showing folder permissions status -->
