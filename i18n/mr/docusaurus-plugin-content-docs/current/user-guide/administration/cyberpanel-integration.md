---
title: CyberPanel एकत्रीकरण
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

हा गाईड (guide) स्पष्ट करतो की Ultimate Multisite CyberPanel integration कसे कॉन्फिगर करायचे, जेणेकरून तुमच्या नेटवर्कमधील मॅप्ड डोमेन (mapped domains) आपोआप CyberPanel मध्ये व्हर्च्युअल होस्ट (virtual hosts) म्हणून जोडले (आणि काढले) जातील. यात Let's Encrypt द्वारे पर्यायी auto-SSL provisioning देखील समाविष्ट आहे.

## हे काय करते {#what-it-does}

- जेव्हा Ultimate Multisite मध्ये एखादे डोमेन मॅप केले जाते, तेव्हा हे integration त्या डोमेनसाठी व्हर्च्युअल होस्ट तयार करण्यासाठी CyberPanel API ला कॉल करते.
- जेव्हा डोमेन मॅपिंग काढले जाते, तेव्हा हे integration संबंधित व्हर्च्युअल होस्ट हटवण्यासाठी API ला कॉल करते.
- जेव्हा auto-SSL सक्षम (enabled) केले जाते, तेव्हा व्हर्च्युअल होस्ट तयार होताच हे integration त्वरित Let's Encrypt सर्टिफिकेट जारी (issue) करण्यासाठी ट्रिगर करते.
- पर्यायानुसार, डोमेन मॅपिंग सेटिंग्जमधील "Auto-create www subdomain" सेटिंगनुसार ते `www.` alias जोडते/काढते.

## पूर्वअट (Prerequisites) {#prerequisites}

- एक कार्यरत CyberPanel instance (v2.3 किंवा त्यावरील आवृत्ती शिफारसित) जे तुमच्या WordPress server पासून पोहोचू शकेल.
- CyberPanel मध्ये आधीपासून एक वेबसाइट असणे आवश्यक आहे जी तुमच्या WordPress network root ला सेवा देत असेल. हे integration नवीन व्हर्च्युअल होस्ट या सर्व्हरला जोडते.
- CyberPanel API ॲक्सेस सक्षम असणे आवश्यक आहे. प्रमाणीकरण (Authentication) तुमच्या CyberPanel admin username आणि password वापरून होते.
- auto-SSL ला वैध सर्टिफिकेट जारी करता यावे यासाठी, मॅप्ड डोमेनसाठी तुमचे DNS रेकॉर्ड आधीच तुमच्या सर्व्हरच्या IP ॲड्रेसकडे निर्देशित (point) केलेले असावेत.

## आवश्यकता (Requirements) {#requirements}

तुमच्या `wp-config.php` फाइलमध्ये खालील कॉन्स्टंट्स (constants) परिभाषित करणे आवश्यक आहे:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

पर्यायीरित्या, तुम्ही खालील कॉन्स्टंट्स देखील परिभाषित करू शकता:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — डोमेन तयार झाल्यावर Let's Encrypt SSL जारी करा
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL सर्टिफिकेट कॉन्टॅक्टसाठी वापरले जाते
```

## सेटअप सूचना (Setup Instructions) {#setup-instructions}

### 1. CyberPanel API सक्षम करा {#1-enable-the-cyberpanel-api}

1. तुमच्या CyberPanel dashboard मध्ये प्रशासक (administrator) म्हणून लॉग इन करा.
2. **Security** > **SSL** वर जा आणि तपासा की CyberPanel इंटरफेसवरच SSL सक्रिय आहे (सुरक्षित API कॉलसाठी आवश्यक).
3. CyberPanel API डीफॉल्टनुसार `https://your-server-ip:8090/api/` वर उपलब्ध आहे. हे सक्षम करण्यासाठी कोणतेही अतिरिक्त पाऊल आवश्यक नाही — ते admin users साठी डीफॉल्टनुसार चालू असते.

### 2. wp-config.php मध्ये कॉन्स्टंट्स जोडा {#2-add-constants-to-wp-configphp}

खालील कॉन्स्टंट्स `/* That's all, stop editing! */` या ओळीच्या आधी तुमच्या `wp-config.php` फाइलमध्ये जोडा:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL सक्षम करण्यासाठी (शिफारस केलेले):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integration सक्षम करा {#3-enable-the-integration}

1. तुमच्या WordPress network admin मध्ये, **Ultimate Multisite** > **Settings** वर जा.
2. **Domain Mapping** टॅबवर नेव्हिगेट करा.
3. **Host Integrations** पर्यंत खाली स्क्रोल करा.
4. **CyberPanel** integration सक्षम करा.
5. **Save Changes** वर क्लिक करा.

### 4. कनेक्टिव्हिटी तपासा (Verify Connectivity) {#4-verify-connectivity}

सेटिंग्ज विजार्डमधील अंगभूत कनेक्शन चाचणी (built-in connection test) वापरा:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** वर जा.
2. **Test Connection** वर क्लिक करा.
3. यश मिळाल्याची (success) सूचना येते, जी पुष्टी करते की plugin ला CyberPanel API पर्यंत पोहोचता येते आणि ते योग्यरित्या प्रमाणित (authenticate) होऊ शकते.

## हे कसे कार्य करते (How It Works) {#how-it-works}

### Domain Mapping {#domain-mapping}

जेव्हा Ultimate Multisite मध्ये एखादे डोमेन मॅप केले जाते:

1. हे integration तुमच्या CyberPanel host वर `/api/createWebsite` ला एक `POST` request पाठवते.
2. CyberPanel कॉन्फिगर केलेल्या पॅकेज अंतर्गत त्या डोमेनसाठी एक नवीन व्हर्च्युअल होस्ट तयार करते.
3. डॉक्युमेंट रूट (document root) तुमच्या WordPress network root directory कडे निर्देशित केला जातो.
4. जेव्हा डोमेन मॅपिंग काढले जाते, तेव्हा हे integration व्हर्च्युअल होस्ट साफ करण्यासाठी `/api/deleteWebsite` ला कॉल करते.

### Auto-SSL {#auto-ssl}

जेव्हा `WU_CYBERPANEL_AUTO_SSL` `true` असते:

1. व्हर्च्युअल होस्ट तयार झाल्यानंतर, हे integration त्या डोमेनसाठी `/api/issueSSL` ला कॉल करते.
2. CyberPanel ACME HTTP-01 challenge वापरून Let's Encrypt सर्टिफिकेटची विनंती करते.
3. हे सर्टिफिकेट CyberPanel द्वारे एक्सपायर होण्यापूर्वी आपोआप नूतनीकरण (renew) केले जाते.

> **महत्वाचे:** Let's Encrypt ला डोमेन प्रमाणित (validate) करण्यासाठी DNS पूर्णपणे तुमच्या सर्व्हरच्या IP ॲड्रेसपर्यंत प्रसारित (propagated) झालेले असणे आवश्यक आहे. मॅपिंगनंतर लगेच SSL जारी करण्यात अयशस्वी झाल्यास, DNS propagation होण्याची वाट पाहा आणि CyberPanel dashboard मधील **SSL** > **Manage SSL** अंतर्गत SSL पुन्हा ट्रिगर करा.

### www Subdomain {#www-subdomain}

जर तुमच्या Domain Mapping सेटिंग्जमध्ये **Auto-create www subdomain** सक्षम असेल, तर हे integration `www.<domain>` साठी व्हर्च्युअल होस्ट alias देखील तयार करते आणि auto-SSL चालू असल्यास, apex आणि www दोन्ही प्रकारांना कव्हर करणारे सर्टिफिकेट जारी करते.

### Email Forwarders {#email-forwarders}

जेव्हा [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon सक्रिय असतो, तेव्हा CyberPanel ग्राहकांसाठी ईमेल फॉरवर्डर देखील प्रदान करू शकते. फॉरवर्डर संदेशांना पूर्ण मेलबॉक्स तयार न करता एका डोमेन ॲड्रेसवरून दुसऱ्या इनबॉक्सकडे वळवतात, जे `info@customer-domain.test` किंवा `support@customer-domain.test` सारख्या aliases साठी उपयुक्त आहे.

ग्राहकांसाठी फॉरवर्डर सक्षम करण्यापूर्वी:

1. वर नमूद केलेले CyberPanel कॉन्स्टंट्स कॉन्फिगर केले आहेत आणि कनेक्शन चाचणी पास झाली आहे याची खात्री करा.
2. Emails addon सेटिंग्जमध्ये CyberPanel email provider सक्षम करा.
3. फॉरवर्डर तयार करण्यापूर्वी ग्राहक डोमेन CyberPanel मध्ये अस्तित्वात आहे याची खात्री करा.
4. उत्पादन योजनांवर (production plans) ही सुविधा देण्यापूर्वी एक चाचणी फॉरवर्डर तयार करा आणि त्याद्वारे एक संदेश पाठवा.

जर फॉरवर्डर तयार करण्यात अपयश आले, तर प्रथम Ultimate Multisite activity logs तपासा, आणि नंतर CyberPanel मध्ये तपासा की सोर्स डोमेन अस्तित्वात आहे आणि API वापरकर्त्याला ईमेल-व्यवस्थापन (email-management) परवानग्या आहेत.

## कॉन्फिगरेशन संदर्भ (Configuration Reference) {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | तुमच्या CyberPanel instance चा पूर्ण URL, पोर्टसह, उदा. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | नवीन व्हर्च्युअल होस्टला नियुक्त करण्यासाठी CyberPanel होस्टिंग पॅकेज |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | डोमेन तयार झाल्यावर Let's Encrypt SSL सर्टिफिकेट जारी करा |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | नवीन व्हर्च्युअल होस्टसाठी PHP आवृत्ती (CyberPanel मध्ये स्थापित केलेल्या आवृत्तीशी जुळणे आवश्यक आहे) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL सर्टिफिकेट नोंदणीसाठी संपर्क ईमेल |

## महत्त्वाचे मुद्दे (Important Notes) {#important-notes}

- CyberPanel चे API सेशन-आधारित टोकन प्रमाणीकरण (session-based token authentication) वापरते. हे integration प्रत्येक API कॉलवर आपोआप टोकन मिळवते.
- तुमच्या CyberPanel admin account मध्ये वेबसाइट तयार करण्याची आणि हटवण्याची परवानग्या असणे आवश्यक आहे.
- CyberPanel डीफॉल्टनुसार पोर्ट `8090` वर चालते. जर तुमच्या सर्व्हरवर फायरवॉल वापरले असेल, तर हे पोर्ट WordPress application server पासून ॲक्सेसिबल असल्याची खात्री करा.
- हे integration DNS रेकॉर्ड्स व्यवस्थापित करत नाही. Ultimate Multisite मध्ये डोमेन मॅप करण्यापूर्वी तुम्हाला डोमेन DNS तुमच्या सर्व्हरच्या IP ॲड्रेसकडे निर्देशित करणे आवश्यक आहे.
- जर तुम्ही OpenLiteSpeed (OLS) वापरत असाल, तर व्हर्च्युअल होस्ट बदलांनंतर आपोआप graceful restart ट्रिगर होतो. यासाठी कोणत्याही मॅन्युअल हस्तक्षेपाची (manual intervention) आवश्यकता नाही.

## समस्या निवारण (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- तपासा की तुमच्या सर्व्हरच्या फायरवॉलमध्ये पोर्ट `8090` उघडा आहे.
- पुष्टी करा की `WU_CYBERPANEL_HOST` मूल्यामध्ये योग्य प्रोटोकॉल (`https://`) आणि पोर्ट समाविष्ट आहे.
- तपासा की तुमचे CyberPanel SSL सर्टिफिकेट वैध आहे; self-signed certificates मुळे TLS verification failures होऊ शकतात. `WU_CYBERPANEL_VERIFY_SSL` फक्त विश्वासार्ह खाजगी नेटवर्क वातावरणात `false` वर सेट करा.

### Authentication Errors {#authentication-errors}

- CyberPanel मध्ये थेट लॉग इन करून तुमचे `WU_CYBERPANEL_USERNAME` आणि `WU_CYBERPANEL_PASSWORD` बरोबर आहेत याची पुष्टी करा.
- वारंवार अयशस्वी लॉगिन प्रयत्नांनंतर CyberPanel खाती लॉक करते. जर लॉकआउट झाले असतील तर CyberPanel मध्ये **Security** > **Brute Force Monitor** तपासा.

### Domain Not Created {#domain-not-created}

- API त्रुटी संदेशांसाठी Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) तपासा.
- तपासा की `WU_CYBERPANEL_PACKAGE` मध्ये परिभाषित केलेले पॅकेज CyberPanel मध्ये अस्तित्वात आहे (**Packages** > **List Packages**).
- खात्री करा की डोमेन CyberPanel मध्ये आधीच वेबसाइट म्हणून नोंदणीकृत नाही — डुप्लिकेट वेबसाइट तयार केल्यास त्रुटी येते.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- पुष्टी करा की DNS पूर्णपणे प्रसारित झाले आहे: `dig +short your-domain.com` ने तुमच्या सर्व्हरचा IP परत केला पाहिजे.
- Let's Encrypt दर मर्यादा (rate limits) लागू करते. जर तुम्ही अलीकडेच त्याच डोमेनसाठी अनेक सर्टिफिकेट जारी केली असतील, तर पुन्हा प्रयत्न करण्यापूर्वी थांबा.
- सर्टिफिकेट जारी करण्यात अपयशाच्या तपशीलांसाठी **Logs** > **Error Logs** अंतर्गत CyberPanel SSL logs तपासा.
- बॅकअप म्हणून, तुम्ही CyberPanel मधून मॅन्युअली SSL जारी करू शकता: **SSL** > **Manage SSL** > डोमेन निवडा > **Issue SSL**.

## संदर्भ (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
