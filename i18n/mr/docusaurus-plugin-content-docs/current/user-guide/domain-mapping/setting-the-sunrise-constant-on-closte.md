---
title: Closte वर Sunrise Constant सेट करणे
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte वर Sunrise कॉन्स्टंट true वर सेट करणे

काही होस्ट प्रोव्हायडर सुरक्षिततेच्या कारणास्तव wp-config.php फाइल लॉक करतात. याचा अर्थ असा की Ultimate Multisite डोमेन मॅपिंग आणि इतर फीचर्स काम करण्यासाठी आवश्यक असलेले कॉन्स्टंट्स जोडण्यासाठी ही फाइल आपोआप एडिट करू शकत नाही. Closte हा असाच एक होस्ट आहे.

तरीही, Closte wp-config.php मध्ये सुरक्षित पद्धतीने कॉन्स्टंट्स जोडण्याचा एक मार्ग देतो. तुम्हाला फक्त खालील स्टेप्स फॉलो करायच्या आहेत:

## Closte डॅशबोर्डवर

प्रथम, [तुमच्या Closte अकाउंटमध्ये लॉग इन करा](https://app.closte.com/), Sites मेनू आयटमवर क्लिक करा, आणि नंतर तुम्ही सध्या काम करत असलेल्या साइटवरील Dashboard लिंकवर क्लिक करा:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

तुम्हाला स्क्रीनच्या डाव्या बाजूला अनेक नवीन मेनू आयटम्स दिसतील. त्या मेनूचा वापर करून **Settings** पेजवर जा:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

त्यानंतर, **Settings** वर, WP-Config टॅब शोधा, आणि त्या टॅबवरील "Additional wp-config.php content" फील्ड शोधा:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite इन्स्टॉल करण्याच्या संदर्भात, तुम्हाला त्या फील्डमध्ये sunrise कॉन्स्टंट जोडणे आवश्यक आहे. फक्त एक नवीन ओळ जोडा आणि खालील लाइन पेस्ट करा. त्यानंतर, **Save All** बटणावर क्लिक करा.

define('SUNRISE', true);

झालं, तुमचं सेटअप पूर्ण झालं. Ultimate Multisite इन्स्टॉल विझार्डवर परत जा आणि प्रक्रिया पुढे सुरू ठेवण्यासाठी पेज रिफ्रेश करा.
