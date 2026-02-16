---
title: बुनियादी अवधारणाएं
sidebar_position: 1
_i18n_hash: 03ddda7b2873ef4873873b81a1ee546b
---
# मूलभूत अवधारणाएं

नए WordPress Multisite उपयोगकर्ता और जो अभी-अभी Ultimate Multisite का इस्तेमाल शुरू कर रहे हैं, उनके लिए शुरुआत में कई नए शब्द और वाक्यांश समझने होते हैं। इन्हें सीखना एक महत्वपूर्ण काम है क्योंकि आपको पूरे प्लेटफॉर्म और इसके काम करने के तरीके को समझना होगा।

इस लेख में, हम WordPress की कुछ प्रमुख अवधारणाओं को परिभाषित और समझाने का प्रयास करेंगे। इनमें से कुछ उपयोगकर्ताओं के लिए अधिक प्रासंगिक हैं, कुछ डेवलपर्स के लिए, और कुछ दोनों के लिए।

## WordPress Multisite

WordPress **Multisite** एक प्रकार का WordPress इंस्टॉलेशन है जो आपको एक ही WordPress dashboard से कई वेबसाइटों का नेटवर्क बनाने और प्रबंधित करने की सुविधा देता है। आप साइटों की संख्या, फीचर्स, थीम्स और user roles सहित सब कुछ प्रबंधित कर सकते हैं। सैकड़ों और हजारों साइटों को प्रबंधित करना संभव है।

## Network

WordPress के संदर्भ में, एक multisite network वह जगह है जहां कई **subsites** को एक ही dashboard से प्रबंधित किया जा सकता है। हालांकि multisite network बनाना अलग-अलग hosting providers के बीच भिन्न होता है, अंतिम परिणाम आमतौर पर **wp-config.php** फ़ाइल में कुछ अतिरिक्त directives होते हैं जो WordPress को बताते हैं कि यह इस विशेष मोड में काम कर रहा है।

एक multisite network और एक स्वतंत्र WordPress इंस्टॉलेशन के बीच कई अलग-अलग अंतर हैं जिन पर हम संक्षेप में चर्चा करेंगे।

## Database

Database एक संरचित, व्यवस्थित डेटा का समूह है। कंप्यूटिंग शब्दावली में, database उस सॉफ्टवेयर को संदर्भित करता है जो डेटा को स्टोर और व्यवस्थित करने के लिए उपयोग किया जाता है। इसे एक फाइल कैबिनेट की तरह समझें जहां आप डेटा को अलग-अलग सेक्शन में स्टोर करते हैं जिन्हें tables कहते हैं।

WordPress Multisite एक database का उपयोग करता है और प्रत्येक subsite को prefix में blog id के साथ अपनी tables मिलती हैं, इसलिए एक बार जब आप network इंस्टॉल करते हैं और एक subsite बनाते हैं, तो आपके पास ये tables होनी चाहिए:

_wp_1_options_ \- पहली subsite के लिए options table

_wp_2_options_ \- दूसरी subsite के लिए options table

## Hosting provider

Hosting provider एक कंपनी है जो व्यवसायों और व्यक्तियों को उनकी वेबसाइटों को World Wide Web के माध्यम से उपलब्ध कराने में सक्षम बनाती है। Web hosting providers जो सेवाएं प्रदान करते हैं वे अलग-अलग होंगी लेकिन आमतौर पर इसमें वेबसाइट डिजाइन, होस्ट पर स्टोरेज स्पेस और इंटरनेट से कनेक्टिविटी शामिल होती है।

## Domain

Domain name वह पता है जिसका उपयोग लोग आपकी साइट पर जाने के लिए करते हैं। यह वेब ब्राउज़र को बताता है कि आपकी साइट कहां खोजनी है। बिल्कुल street address की तरह, domain वह तरीका है जिससे लोग ऑनलाइन आपकी वेबसाइट पर जाते हैं। और, यह आपकी दुकान के सामने एक साइन लगाने जैसा है। अगर आप हमारी वेबसाइट पर जाना चाहते हैं, तो आपको अपने ब्राउज़र के एड्रेस बार में हमारा वेब एड्रेस टाइप करना होगा जो है [_www.ultimatemultisite.com_](http://www.ultimatemultisite.com) _,_ जहां [**ultimatemultisite.com**](http://ultimatemultisite.com) domain name है।

## Subdomain

Subdomain मुख्य domain के अंतर्गत एक प्रकार की वेबसाइट पदानुक्रम है, लेकिन वेबसाइट पर सामग्री को व्यवस्थित करने के लिए फोल्डर्स का उपयोग करने के बजाय, इसे अपनी एक तरह की वेबसाइट मिलती है। इसे [**https://site1.domain.com/**](https://site1.domain.com/) के रूप में प्रस्तुत किया जाता है जहां _site1_ subdomain name है और [_domain.com_](http://domain.com) मुख्य domain है।

## Subdirectory

Subdirectory एक root domain के अंतर्गत एक प्रकार की वेबसाइट पदानुक्रम है जो वेबसाइट पर सामग्री को व्यवस्थित करने के लिए फोल्डर्स का उपयोग करती है। Subdirectory subfolder के समान है और दोनों नामों का परस्पर उपयोग किया जा सकता है। इसे [**https://domain.com/site1**](https://domain.com/site1) के रूप में प्रस्तुत किया जाता है जहां _site1_ subdirectory name है और [_domain.com_](http://domain.com) मुख्य domain है।

## Subsite

Subsite एक चाइल्ड साइट है जिसे आप Multisite network पर बनाते हैं। यह या तो **subdomain** या **subdirectory** हो सकती है, यह इस बात पर निर्भर करता है कि आपका WordPress Multisite इंस्टॉलेशन कैसे कॉन्फ़िगर किया गया है।

## Super Admin

WordPress Super Admin एक user role है जिसके पास Multisite network पर सभी subsites को प्रबंधित करने की पूर्ण क्षमताएं होती हैं। Multisite उपयोगकर्ताओं के लिए, यह **सबसे उच्च स्तर की पहुंच** है जो आप अपने WordPress इंस्टॉलेशन को प्रदान कर सकते हैं।

## Plugin

सामान्य तौर पर, plugin कोड का एक सेट है जो आपकी WordPress साइट में अतिरिक्त कार्यक्षमता जोड़ता है। यह login logo बदलने जितना सरल हो सकता है या e-commerce कार्यक्षमता जोड़ने जितना जटिल। _Woocommerce और Contact Form_ plugin के उदाहरण हैं।

WordPress Multisite पर, plugins केवल Super Admin द्वारा network admin dashboard से इंस्टॉल किए जा सकते हैं। Subsite Admins केवल अपनी subsite के भीतर plugins को activate और deactivate कर सकते हैं।

## Themes

WordPress theme फाइलों का एक समूह है (_ग्राफिक्स, style sheets, और code_) जो साइट की समग्र दिखावट तय करता है। यह सभी front-end स्टाइलिंग प्रदान करता है जैसे font styling, page layout, colors, आदि।

Plugins की तरह ही, WordPress Multisite में themes केवल Super Admin द्वारा इंस्टॉल की जा सकती हैं और subsite स्तर पर subsite admins द्वारा activate की जा सकती हैं।

## Site Template

**Site Template** एक boilerplate साइट है जिसे आपके network में नई साइटें बनाते समय आधार के रूप में उपयोग किया जा सकता है।

इसका मतलब है कि आप एक base साइट बना सकते हैं, विभिन्न plugins activate कर सकते हैं, एक active theme सेट कर सकते हैं, और इसे जैसे चाहें customize कर सकते हैं। फिर, जब आपका ग्राहक एक नया अकाउंट बनाता है, तो उसे बिना किसी सार्थक सामग्री वाली default WordPress साइट मिलने के बजाय, उसे आपकी base साइट की एक प्रति मिलेगी जिसमें सभी customizations और सामग्री पहले से मौजूद होंगी।

## Domain Mapping

WordPress के साथ **Domain mapping** उपयोगकर्ताओं को वेबसाइट के पते के माध्यम से सही host पर redirect करने का एक तरीका है। WordPress Multisite में, subsites या तो subdirectory या subdomain का उपयोग करके बनाई जाती हैं। Domain mapping जो करता है वह यह है कि यह subsite उपयोगकर्ताओं को [**joesbikeshop.com**](http://joesbikeshop.com) जैसे top-level domain का उपयोग करने की अनुमति देता है ताकि उनकी साइट का पता अधिक पेशेवर दिखे।

## SSL

SSL का मतलब है **Secure Sockets Layer**। यह एक डिजिटल certificate है जो वेबसाइट की पहचान को प्रमाणित करता है और एक encrypted connection सक्षम करता है। आजकल इसका उपयोग इंटरनेट कनेक्शन को सुरक्षित रखने और दो सिस्टम के बीच भेजे जाने वाले किसी भी संवेदनशील डेटा की सुरक्षा के लिए मानक तकनीक के रूप में किया जाता है, जो अपराधियों को स्थानांतरित की गई किसी भी जानकारी को पढ़ने और संशोधित करने से रोकता है, जिसमें संभावित व्यक्तिगत विवरण भी शामिल हैं। आधुनिक browsers SSL की आवश्यकता होती है जो इसे वेबसाइट बनाने और चलाने के लिए आवश्यक बनाता है।

## Media

Media वे images, audio, video, और अन्य फाइलें हैं जो एक वेबसाइट बनाती हैं।

WordPress Multisite में Network sites एक ही database साझा करती हैं, लेकिन वे media files के लिए filesystem पर अलग-अलग paths बनाए रखती हैं।

मानक WordPress स्थान (wp-content/uploads) वही रहता है; हालांकि, इसका path network site की unique ID को दर्शाने के लिए बदल दिया जाता है। परिणामस्वरूप network site के लिए media files wp-contents/uploads/site/[id] के रूप में दिखाई देती हैं।

## Permalinks

Permalinks आपकी साइट के भीतर आपके व्यक्तिगत blog post या page के स्थायी URLs हैं। Permalinks को **pretty links** भी कहा जाता है। डिफ़ॉल्ट रूप से, WordPress URLs query string format का उपयोग करते हैं जो कुछ इस तरह दिखता है:

[**http://www.example.com/registration**](http://www.example.com/registration)

## Ultimate Multisite

Ultimate Multisite एक WordPress plugin है, जो WordPress Multisite installs के लिए बनाया गया है, जो आपके WordPress install को साइटों के एक premium network में बदल देता है – [WordPress.com](https://WordPress.com) की तरह – जो ग्राहकों को मासिक, त्रैमासिक, या वार्षिक शुल्क के माध्यम से साइटें बनाने की अनुमति देता है (आप Free plans भी बना सकते हैं)।

## Checkout Form

Checkout Form एक single या multi-step order form है जिसमें Ultimate Multisite registration के माध्यम से subsite, membership, और user accounts का निर्माण शामिल होता है। इसमें विभिन्न fields और payment forms होते हैं जो एक उपयोगकर्ता को sign-up प्रक्रिया के दौरान submit करने होते हैं।

## Webhook

Webhook (जिसे web callback या HTTP push API भी कहा जाता है) एक ऐप के लिए अन्य applications को real-time जानकारी प्रदान करने का एक तरीका है। Webhook अन्य applications को डेटा तभी deliver करता है जब यह होता है, जिसका मतलब है कि आपको डेटा तुरंत मिलता है।

**Ultimate Multisite webhooks** अनंत संभावनाएं खोलते हैं, जो network admins को सभी प्रकार के अनोखे-लेकिन-उपयोगी integrations करने की अनुमति देते हैं, खासकर अगर _Zapier और IFTTT_ जैसी सेवाओं के साथ उपयोग किया जाए।

## Events

Event एक action है जो उपयोगकर्ता या किसी अन्य स्रोत की action के परिणामस्वरूप होता है, जैसे माउस क्लिक। Ultimate Multisite आपके पूरे network में होने वाली सभी events और logs का रिकॉर्ड रखता है। यह आपके multisite में होने वाली विभिन्न गतिविधियों को track करता है, जैसे plan changes।
