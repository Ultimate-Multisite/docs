---
title: मूलभूत संकल्पना
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# मूलभूत संकल्पना

WordPress Multisite वर नवीन असलेल्या वापरकर्त्यांसाठी आणि Ultimate Multisite वापरायला नुकतीच सुरुवात केलेल्यांसाठी, सुरुवातीला अनेक नवीन शब्द आणि वाक्प्रचार समजून घ्यावे लागतात. हे शिकणे महत्त्वाचे आहे कारण तुम्हाला हे प्लॅटफॉर्म आणि ते संपूर्णपणे कसे काम करते हे समजून घेणे आवश्यक आहे.

या लेखात, आम्ही WordPress मधील काही महत्त्वाच्या संकल्पना समजावून सांगण्याचा प्रयत्न करू. यातील काही वापरकर्त्यांसाठी अधिक उपयुक्त आहेत, काही डेव्हलपर्ससाठी, आणि काही दोघांसाठी.

## WordPress Multisite

WordPress **Multisite** हा WordPress installation चा एक प्रकार आहे जो तुम्हाला एकाच WordPress dashboard वरून अनेक वेबसाइट्सचे नेटवर्क तयार करण्यास आणि व्यवस्थापित करण्यास अनुमती देतो. तुम्ही साइट्सची संख्या, वैशिष्ट्ये, themes आणि user roles यासह सर्व काही व्यवस्थापित करू शकता. शेकडो आणि हजारो साइट्स व्यवस्थापित करणे शक्य आहे.

## Network

WordPress च्या संदर्भात, multisite network म्हणजे जिथे अनेक **subsites** एकाच dashboard वरून व्यवस्थापित केल्या जाऊ शकतात. जरी multisite network तयार करणे hosting providers नुसार वेगवेगळे असले तरी, अंतिम परिणाम सामान्यतः **wp-config.php** फाइलमध्ये काही अतिरिक्त directives असतात जे WordPress ला कळवतात की ते या विशिष्ट mode मध्ये काम करत आहे.

Multisite network आणि स्वतंत्र WordPress installation यांच्यात अनेक वेगळे फरक आहेत ज्यांची आपण थोडक्यात चर्चा करू.

## Database

Database म्हणजे व्यवस्थित, संघटित डेटाचा संच. संगणक शब्दावलीत, database म्हणजे डेटा साठवण्यासाठी आणि व्यवस्थित करण्यासाठी वापरले जाणारे सॉफ्टवेअर. याला एक फाइल कॅबिनेट समजा जिथे तुम्ही tables नावाच्या वेगवेगळ्या विभागांमध्ये डेटा साठवता.

WordPress Multisite एक database वापरते आणि प्रत्येक subsite ला prefix मध्ये blog id सह स्वतःचे tables मिळतात, म्हणून एकदा तुम्ही network installation करून subsite तयार केल्यावर, तुमच्याकडे हे tables असावेत:

_wp_1_options_ \- पहिल्या subsite साठी options table

_wp_2_options_ \- दुसऱ्या subsite साठी options table

## Hosting provider

Hosting provider ही एक कंपनी आहे जी व्यवसाय आणि व्यक्तींना त्यांच्या वेबसाइट्स World Wide Web द्वारे उपलब्ध करून देण्यास सक्षम करते. Web hosting providers द्वारे दिल्या जाणाऱ्या सेवा वेगवेगळ्या असतात परंतु सामान्यतः यात वेबसाइट डिझाइन, host वर storage space आणि Internet शी connectivity यांचा समावेश असतो.

## Domain

Domain name हा एक पत्ता आहे जो लोक तुमच्या साइटला भेट देण्यासाठी वापरतात. हे web browser ला तुमची साइट कुठे शोधायची ते सांगते. रस्त्यावरील पत्त्याप्रमाणेच, domain म्हणजे लोक तुमच्या वेबसाइटला ऑनलाइन कसे भेट देतात. आणि, तुमच्या दुकानासमोर पाटी लावण्यासारखेच आहे. जर तुम्हाला आमच्या वेबसाइटला भेट द्यायची असेल, तर तुम्हाला तुमच्या browser च्या address bar मध्ये आमचा web address टाइप करावा लागेल जो आहे [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ जिथे [**ultimatemultisite.com**](http://ultimatemultisite.com) हे domain name आहे.

## Subdomain

Subdomain हा मुख्य domain अंतर्गत वेबसाइट hierarchy चा एक प्रकार आहे, परंतु वेबसाइटवरील content व्यवस्थापित करण्यासाठी folders वापरण्याऐवजी, त्याला स्वतःची एक वेबसाइट मिळते असे म्हणता येईल. हे [**https://site1.domain.com/**](https://site1.domain.com/) असे दर्शवले जाते जिथे _site1_ हे subdomain name आहे आणि [_domain.com_](http://domain.com) हे मुख्य domain आहे.

## Subdirectory

Subdirectory हा root domain अंतर्गत वेबसाइट hierarchy चा एक प्रकार आहे जो वेबसाइटवरील content व्यवस्थापित करण्यासाठी folders वापरतो. Subdirectory आणि subfolder हे सारखेच आहेत आणि ही नावे एकमेकांच्या ऐवजी वापरता येतात. हे [**https://domain.com/site1**](https://domain.com/site1) असे दर्शवले जाते जिथे _site1_ हे subdirectory name आहे आणि [_domain.com_](http://domain.com) हे मुख्य domain आहे.

## Subsite

Subsite ही Multisite network वर तुम्ही तयार केलेली child site आहे. तुमचे WordPress Multisite installation कसे configure केले आहे यावर अवलंबून ती **subdomain** किंवा **subdirectory** असू शकते.

## Super Admin

WordPress Super Admin हा एक user role आहे ज्याकडे Multisite network वरील सर्व subsites व्यवस्थापित करण्याच्या पूर्ण क्षमता आहेत. Multisite वापरकर्त्यांसाठी, तुम्ही तुमच्या WordPress installation ला देऊ शकता अशी ही **सर्वोच्च पातळीची access** आहे.

## Plugin

सर्वसाधारणपणे, plugin हा code चा एक संच आहे जो तुमच्या WordPress साइटला अतिरिक्त कार्यक्षमता देतो. हे login logo बदलण्याइतके सोपे किंवा e-commerce कार्यक्षमता जोडण्याइतके जटिल असू शकते. _Woocommerce आणि Contact Form_ हे plugin चे उदाहरण आहेत.

WordPress Multisite वर, plugins फक्त Super Admin द्वारे network admin dashboard वरून install केले जाऊ शकतात. Subsite Admins फक्त त्यांच्या subsite मध्ये plugins activate आणि deactivate करू शकतात.

## Themes

WordPress theme म्हणजे फाइल्सचा एक गट (_graphics, style sheets आणि code_) जो साइटचे एकूण स्वरूप ठरवतो. हे font styling, page layout, colors इत्यादी सर्व front-end styling प्रदान करते.

Plugins प्रमाणेच, WordPress Multisite मधील themes फक्त Super Admin द्वारे install केले जाऊ शकतात आणि subsite admins द्वारे subsite स्तरावर activate केले जाऊ शकतात.

## Site Template

**Site Template** ही एक boilerplate site आहे जी तुमच्या network मध्ये नवीन sites तयार करताना base म्हणून वापरली जाऊ शकते.

याचा अर्थ तुम्ही एक base site तयार करू शकता, वेगवेगळे plugins activate करू शकता, active theme सेट करू शकता आणि तुम्हाला हवे तसे customize करू शकता. मग, जेव्हा तुमचा customer नवीन account तयार करतो, तेव्हा त्यांना आतमध्ये काहीही अर्थपूर्ण content नसलेली default WordPress site मिळण्याऐवजी, सर्व customizations आणि contents आधीच असलेली तुमच्या base site ची copy मिळेल.

## Domain Mapping

WordPress सह **Domain mapping** म्हणजे वेबसाइटच्या पत्त्याद्वारे वापरकर्त्यांना योग्य host कडे redirect करण्याचा एक मार्ग. WordPress Multisite मध्ये, subsites subdirectory किंवा subdomain वापरून तयार केल्या जातात. Domain mapping जे करते ते म्हणजे subsite वापरकर्त्यांना [**joesbikeshop.com**](http://joesbikeshop.com) सारखे top-level domain वापरण्याची परवानगी देते जेणेकरून त्यांचा site address अधिक व्यावसायिक दिसेल.

## SSL

SSL म्हणजे **Secure Sockets Layer**. हे एक digital certificate आहे जे वेबसाइटची ओळख प्रमाणित करते आणि encrypted connection सक्षम करते. आजकाल हे internet connection सुरक्षित ठेवण्यासाठी आणि दोन systems दरम्यान पाठवल्या जाणाऱ्या कोणत्याही संवेदनशील डेटाचे रक्षण करण्यासाठी standard technology म्हणून वापरले जाते, गुन्हेगारांना वैयक्तिक तपशीलांसह हस्तांतरित केलेली कोणतीही माहिती वाचण्यापासून आणि बदलण्यापासून प्रतिबंधित करते. आधुनिक browsers ला SSL आवश्यक आहे ज्यामुळे वेबसाइट तयार करताना आणि चालवताना ते आवश्यक बनते.

## Media

Media म्हणजे images, audio, video आणि इतर फाइल्स ज्या वेबसाइट बनवतात.

WordPress Multisite मध्ये Network sites एकच database share करतात, पण media files साठी filesystem वर वेगळे paths राखतात.

Standard WordPress location (wp-content/uploads) तसेच राहते; तथापि, network site च्या unique ID प्रतिबिंबित करण्यासाठी त्याचा path बदलला जातो. परिणामी network site साठी media files wp-contents/uploads/site/[id] असे दिसतात.

## Permalinks

Permalinks म्हणजे तुमच्या साइटमधील वैयक्तिक blog post किंवा page चे कायमस्वरूपी URLs. Permalinks ना **pretty links** असेही म्हणतात. Default म्हणून, WordPress URLs query string format वापरतात जे असे काहीतरी दिसतात:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite हे एक WordPress plugin आहे, WordPress Multisite installs साठी बनवलेले, जे तुमचे WordPress install साइट्सच्या premium network मध्ये रूपांतरित करते – [WordPress.com](https://WordPress.com) सारखे – clients ना मासिक, त्रैमासिक किंवा वार्षिक शुल्काद्वारे sites तयार करण्याची परवानगी देते (तुम्ही Free plans देखील तयार करू शकता).

## Checkout Form

Checkout Form हा single किंवा multi-step order form आहे ज्यामध्ये Ultimate Multisite registration द्वारे subsite, membership आणि user accounts तयार करणे समाविष्ट आहे. यात वेगवेगळे fields आणि payment forms असतात जे वापरकर्त्याने sign-up process दरम्यान submit करणे आवश्यक असते.

## Webhook

Webhook (याला web callback किंवा HTTP push API असेही म्हणतात) हा एका app साठी इतर applications ला real-time माहिती प्रदान करण्याचा एक मार्ग आहे. Webhook डेटा जसा घडतो तसा इतर applications ला पोहोचवते, म्हणजे तुम्हाला लगेच डेटा मिळतो.

**Ultimate Multisite webhooks** अनंत शक्यता उघडतात, network admins ना सर्व प्रकारचे विचित्र-पण-उपयुक्त integrations करण्याची परवानगी देतात, विशेषतः _Zapier आणि IFTTT_ सारख्या सेवांसह वापरल्यास.

## Events

Event म्हणजे वापरकर्ता किंवा दुसऱ्या स्त्रोताच्या कृतीमुळे घडणारी क्रिया, जसे की mouse click. Ultimate Multisite तुमच्या संपूर्ण network मध्ये होणाऱ्या सर्व events आणि logs चा record ठेवते. हे तुमच्या multisite मध्ये होणाऱ्या वेगवेगळ्या activities track करते, जसे की plan changes.
