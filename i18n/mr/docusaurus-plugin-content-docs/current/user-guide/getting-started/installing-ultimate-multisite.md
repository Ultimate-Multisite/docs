---
title: अल्टिमेट मल्टिसाइट इंस्टॉल करत आहे
sidebar_position: 12
_i18n_hash: dda8f0d2b67bc421c0a484c76c8eae6d
---
# Ultimate Multisite इंस्टॉल करणे

:::note
या ट्यूटोरियलमध्ये असे गृहीत धरले आहे की तुमच्याकडे आधीच WordPress Multisite इंस्टॉल आणि कॉन्फिगर केले आहे. हे कसे करावे ते जाणून घेण्यासाठी, WP Beginner द्वारे तयार केलेला [हा ट्यूटोरियल](https://www.wpbeginner.com/glossary/multisite/) पहा.
:::

## प्लगइन इंस्टॉल करणे

Ultimate Multisite हे [WordPress.org](https://wordpress.org/plugins/ultimate-multisite/) वर मोफत उपलब्ध आहे.

तुमच्या **Network Admin Dashboard** मधून, **Plugins → Add New Plugin** वर जा.

![Network Admin Add New Plugin page](/img/installation/add-new-plugin.png)

**"Ultimate Multisite"** (अचूक जुळणीसाठी कोटेशन चिन्हांसह) शोधा आणि ते पहिल्या निकालात दिसेल. **Install Now** वर क्लिक करा.

![Search results showing Ultimate Multisite](/img/installation/search-ultimate-multisite.png)

इंस्टॉल झाल्यानंतर, प्लगइन तुमच्या संपूर्ण नेटवर्कवर सक्रिय करण्यासाठी **Network Activate** वर क्लिक करा.

![Plugin installed with Network Activate button](/img/installation/plugin-installed.png)

सक्रिय झाल्यानंतर, तुम्हाला स्वयंचलितपणे Setup Wizard वर रीडायरेक्ट केले जाईल.

![Plugin activated and redirected to wizard](/img/installation/plugin-activated.png)

## सेटअप विझार्ड

सेटअप विझार्ड तुम्हाला सुमारे १० मिनिटांत Ultimate Multisite कॉन्फिगर करण्यासाठी मार्गदर्शन करेल.

### स्वागत

सुरू करण्यासाठी **Get Started** वर क्लिक करा.

![Setup Wizard welcome screen](/img/installation/wizard-welcome.png)

### प्री-इंस्टॉल तपासणी

या टप्प्यात तुमची सिस्टम माहिती आणि WordPress इंस्टॉलेशन तपासले जाते जेणेकरून ते Ultimate Multisite च्या आवश्यकता पूर्ण करते हे सुनिश्चित करता येईल. सर्व काही बरोबर असेल तर, **Go to the Next Step** वर क्लिक करा.

![Pre-install checks showing system requirements](/img/installation/wizard-pre-install-checks.png)

:::note Network Activate बटण (v2.6.1+)
जर Ultimate Multisite इंस्टॉल केले असेल पण **अजून नेटवर्क-सक्रिय केले नसेल** — उदाहरणार्थ, जर तुम्ही नेटवर्क प्लगइन स्क्रीनवरून **Network Activate** ऐवजी **Activate** (सिंगल-साइट) वर क्लिक केले असेल — तर प्री-इंस्टॉल तपासणी टप्प्यात हे ओळखले जाईल आणि **Network Activate** बटण दाखवले जाईल.

**Network Activate** वर क्लिक केल्याने प्लगइन तुमच्या संपूर्ण मल्टीसाइट नेटवर्कवर स्वयंचलितपणे सक्रिय होते. एकदा सक्रिय झाल्यानंतर, विझार्ड सामान्यपणे इंस्टॉलेशन टप्प्यात पुढे जातो. सक्रियकरण स्थिती दुरुस्त करण्यासाठी तुम्हाला विझार्ड सोडण्याची गरज नाही.
:::

### इंस्टॉलेशन

इंस्टॉलर आवश्यक डेटाबेस टेबल्स तयार करेल आणि Ultimate Multisite च्या कार्यासाठी लागणारा `sunrise.php` फाइल इंस्टॉल करेल. पुढे जाण्यासाठी **Install** वर क्लिक करा.

![Installation step showing database tables and sunrise.php](/img/installation/wizard-installation.png)

### तुमची कंपनी

तुमची कंपनी माहिती भरा आणि तुमची डिफॉल्ट चलन सेट करा. ही माहिती तुमच्या WaaS प्लॅटफॉर्ममध्ये संपूर्णपणे वापरली जाईल. पूर्ण झाल्यावर **Continue** वर क्लिक करा.

![Your Company configuration step](/img/installation/wizard-your-company.png)

### डिफॉल्ट कंटेंट

या टप्प्यात तुम्ही पूर्वनिर्धारित टेम्पलेट्स, प्रॉडक्ट्स आणि इतर स्टार्टर कंटेंट इंस्टॉल करू शकता. हे Ultimate Multisite च्या वैशिष्ट्यांशी परिचित होण्यासाठी एक उत्तम मार्ग आहे. डिफॉल्ट कंटेंट जोडण्यासाठी **Install** वर क्लिक करा, किंवा जर तुम्हाला शून्यापासून सुरू करायचे असेल तर हा टप्पा वगळा.

![Default content installation step](/img/installation/wizard-default-content.png)

### शिफारस केलेले प्लगइन

ऐच्छिकपणे शिफारस केलेले सहकारी प्लगइन इंस्टॉल करा. त्यांना जोडण्यासाठी **Install** वर क्लिक करा किंवा पुढे जाण्यासाठी वगळा.

![Recommended plugins step](/img/installation/wizard-recommended-plugins.png)

### तयार!

इतकेच! तुमची Ultimate Multisite इंस्टॉलेशन पूर्ण झाली आहे. आता तुम्ही **Network Admin Dashboard** मधून तुमचा Website as a Service प्लॅटफॉर्म बनवण्यास सुरुवात करू शकता.

![Setup complete - Ready screen](/img/installation/wizard-ready.png)

![Network Admin Dashboard with Ultimate Multisite active](/img/installation/network-dashboard.png)

पुढे जा आणि मजा करा!
