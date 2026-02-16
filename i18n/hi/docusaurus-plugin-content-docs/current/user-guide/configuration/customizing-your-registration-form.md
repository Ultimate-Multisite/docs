---
title: अपना पंजीकरण फॉर्म कस्टमाइज़ करना
sidebar_position: 17
_i18n_hash: 01f3aeee38a564a8b5c4676a229748cf
---
# अपना रजिस्ट्रेशन फॉर्म कस्टमाइज़ करना

WordPress प्लेटफॉर्म पर बने अन्य SaaS से अपने नेटवर्क को अलग और यूनिक बनाने के लिए, Ultimate Multisite आपको हमारे **Checkout Forms** फीचर से अपने रजिस्ट्रेशन और लॉगिन पेज को कस्टमाइज़ करने की सुविधा देता है।

हालांकि ये नए कस्टमर्स को कन्वर्ट करने के लिए अलग-अलग तरीकों को आज़माने का एक आसान और फ्लेक्सिबल तरीका है, लेकिन इनका उपयोग ज़्यादातर पर्सनलाइज़्ड रजिस्ट्रेशन फॉर्म बनाने के लिए किया जाता है। इस आर्टिकल में हम आपको बताएंगे कि आप यह कैसे कर सकते हैं।

## लॉगिन और रजिस्ट्रेशन पेज:

Ultimate Multisite इंस्टॉल करने पर, यह ऑटोमैटिकली आपकी मुख्य साइट पर कस्टम लॉगिन और रजिस्ट्रेशन पेज बना देता है। आप इन डिफ़ॉल्ट पेजों को कभी भी **Ultimate Multisite > Settings > Login & Registration** पेज पर जाकर बदल सकते हैं।

![Login and Registration settings page](/img/config/settings-general.png)

आइए **Login & Registration** पेज पर मिलने वाले हर ऑप्शन को देखें जिन्हें आप कस्टमाइज़ कर सकते हैं:

  * **Enable registration:** यह ऑप्शन आपके नेटवर्क पर रजिस्ट्रेशन को enable या disable करेगा। अगर यह ऑफ है, तो आपके कस्टमर रजिस्टर नहीं कर पाएंगे और आपके प्रोडक्ट्स को सब्सक्राइब नहीं कर पाएंगे।

  * **Enable email verification:** अगर यह ऑप्शन ऑन है, तो फ्री प्लान या ट्रायल पीरियड वाले पेड प्लान के लिए सब्सक्राइब करने वाले कस्टमर्स को एक वेरिफिकेशन ईमेल मिलेगी और उन्हें अपनी वेबसाइट बनने के लिए वेरिफिकेशन लिंक पर क्लिक करना होगा।

  * **Default registration page:** यह रजिस्ट्रेशन के लिए डिफ़ॉल्ट पेज है। इस पेज को आपकी वेबसाइट पर पब्लिश होना चाहिए और इसमें एक रजिस्ट्रेशन फॉर्म (जिसे checkout form भी कहते हैं) होना चाहिए - जहाँ आपके क्लाइंट आपके प्रोडक्ट्स को सब्सक्राइब करेंगे। आप जितने चाहें उतने रजिस्ट्रेशन पेज और checkout फॉर्म बना सकते हैं, बस याद रखें कि checkout form shortcode को रजिस्ट्रेशन पेज पर डालना ज़रूरी है, वरना यह दिखाई नहीं देगा।

  * **Use custom login page:** यह ऑप्शन आपको डिफ़ॉल्ट wp-login.php पेज की जगह एक कस्टमाइज़्ड लॉगिन पेज का उपयोग करने देता है। अगर यह ऑप्शन ऑन है, तो आप **Default login page** ऑप्शन (जो ठीक नीचे है) में चुन सकते हैं कि लॉगिन के लिए कौन सा पेज उपयोग होगा।

  * **Obfuscate the original login url (wp-login.php):** अगर आप ओरिजिनल लॉगिन URL को छिपाना चाहते हैं, तो आप इस ऑप्शन को ऑन कर सकते हैं। यह brute-force अटैक्स को रोकने के लिए उपयोगी है। अगर यह ऑप्शन enable है, तो जब कोई यूज़र ओरिजिनल wp-login.php लिंक को एक्सेस करने की कोशिश करेगा, Ultimate Multisite एक 404 error दिखाएगा।

  * **Force synchronous site publication:** जब कोई कस्टमर नेटवर्क पर किसी प्रोडक्ट को सब्सक्राइब करता है, तो नई pending साइट को एक असली नेटवर्क साइट में बदलना होता है। पब्लिशिंग प्रोसेस Job Queue के ज़रिए asynchronously होती है। इस ऑप्शन को enable करें ताकि पब्लिकेशन signup के साथ ही उसी request में हो जाए।

अब, आइए कुछ और ऑप्शन देखें जो लॉगिन और रजिस्ट्रेशन प्रोसेस से संबंधित हैं। ये उसी Login & registration पेज पर **Other options** के नीचे हैं:

  * **Default role:** यह वह role है जो signup प्रोसेस के बाद आपके कस्टमर्स को उनकी वेबसाइट पर मिलेगी।

  * **Add users to the main site as well:** इस ऑप्शन को enable करने से signup प्रोसेस के बाद यूज़र को आपके नेटवर्क की मुख्य साइट पर भी जोड़ दिया जाएगा। अगर आप इस ऑप्शन को enable करते हैं, तो इन यूज़र्स की आपकी वेबसाइट पर **default role** सेट करने का ऑप्शन भी ठीक नीचे दिखाई देगा।

  * **Enable multiple accounts:** यूज़र्स को आपके नेटवर्क की अलग-अलग साइट्स पर एक ही ईमेल एड्रेस से अकाउंट बनाने की अनुमति दें। अगर यह ऑप्शन ऑफ है, तो आपके कस्टमर एक ही ईमेल एड्रेस से आपके नेटवर्क पर चल रही अन्य वेबसाइट्स पर अकाउंट नहीं बना पाएंगे।

और बस, ये सभी ऑप्शन हैं जो लॉगिन और रजिस्ट्रेशन से संबंधित हैं जिन्हें आप कस्टमाइज़ कर सकते हैं! एडिटिंग पूरी करने के बाद अपनी सेटिंग्स सेव करना न भूलें।

## कई रजिस्ट्रेशन फॉर्म का उपयोग करना:

Ultimate Multisite 2.0 एक checkout form editor देता है जिससे आप जितने चाहें उतने फॉर्म बना सकते हैं, अलग-अलग fields, ऑफर पर अलग-अलग प्रोडक्ट्स आदि के साथ।

लॉगिन और रजिस्ट्रेशन दोनों पेज shortcodes के साथ embed होते हैं: लॉगिन पेज पर **[wu_login_form]** और रजिस्ट्रेशन पेज के लिए **[wu_checkout]**। आप checkout forms बनाकर या बिल्ड करके रजिस्ट्रेशन पेज को और कस्टमाइज़ कर सकते हैं।

इस फीचर को एक्सेस करने के लिए, लेफ्ट साइड-बार में **Checkout Forms** मेन्यू पर जाएं।

![Checkout Forms menu in the sidebar](/img/config/checkout-forms-list.png)

इस पेज पर, आप अपने सभी checkout forms देख सकते हैं।

अगर आप एक नया बनाना चाहते हैं, तो बस पेज के ऊपर **Add Checkout Form** पर क्लिक करें।

आप अपने शुरुआती बिंदु के रूप में इन तीन ऑप्शन में से एक चुन सकते हैं: single step, multi-step या blank। फिर, **Go to the Editor** पर क्लिक करें।

![Add Checkout Form with single step, multi-step, or blank options](/img/config/checkout-forms-list.png)

वैकल्पिक रूप से, आप पहले से मौजूद फॉर्म को उसके नाम के नीचे दिए ऑप्शन पर क्लिक करके edit या duplicate कर सकते हैं। वहाँ, आपको फॉर्म का shortcode कॉपी करने या फॉर्म को डिलीट करने के ऑप्शन भी मिलेंगे।

![Checkout form hover actions with edit, duplicate, and delete](/img/config/checkout-form-hover-actions.png)

अगर आप single step या multi-step चुनते हैं, तो checkout form पहले से ही बेसिक steps के साथ pre-populated होगा ताकि यह काम करे। फिर, अगर आप चाहें, तो इसमें अतिरिक्त steps जोड़ सकते हैं।

### Checkout Form को एडिट करना:

जैसा कि हमने पहले बताया, आप अलग-अलग उद्देश्यों के लिए checkout forms बना सकते हैं। इस उदाहरण में हम एक रजिस्ट्रेशन फॉर्म पर काम करेंगे।

checkout form editor पर जाने के बाद, अपने फॉर्म को एक नाम दें (जो केवल internal reference के लिए उपयोग होगा) और एक slug दें (जो shortcodes बनाने आदि के लिए उपयोग होगा)।

![Checkout form editor with name and slug fields](/img/config/checkout-form-editor.png)

फॉर्म steps और fields से बने होते हैं। आप **Add New Checkout Step** पर क्लिक करके एक नया step जोड़ सकते हैं।

![Add New Checkout Step button](/img/config/checkout-form-add-step.png)

modal window के पहले टैब पर, अपने फॉर्म के step का content भरें। इसे एक ID, एक नाम और एक description दें। ये items ज़्यादातर internally उपयोग होते हैं।

![Checkout step content tab with ID, name, and description](/img/config/checkout-form-step.png)

इसके बाद, step की visibility सेट करें। आप **Always show**, **Only show for logged in users** या **Only show for guests** में से चुन सकते हैं।

![Checkout step visibility options](/img/config/checkout-form-step.png)

अंत में, step style कॉन्फ़िगर करें। ये optional fields हैं।

![Checkout step style configuration](/img/config/checkout-form-step.png)

अब, हमारे पहले step में fields जोड़ने का समय है। बस **Add New Field** पर क्लिक करें और जिस तरह का section चाहिए उसे चुनें।

![Add New Field button](/img/config/checkout-form-editor.png)![Field type selection dropdown](/img/config/checkout-form-step.png)

हर field में अलग-अलग parameters भरने होते हैं। इस पहली एंट्री के लिए, हम **Username** field चुनेंगे।

![Username field configuration](/img/config/checkout-form-step.png)![Username field parameters](/img/config/checkout-form-step.png)![Username field additional settings](/img/config/checkout-form-step.png)

आप जितने चाहें उतने steps और fields जोड़ सकते हैं। अपने कस्टमर्स को प्रोडक्ट्स दिखाने के लिए जिनमें से वे एक चुन सकें, Pricing Table field का उपयोग करें। अगर आप अपने क्लाइंट्स को template चुनने देना चाहते हैं, तो Template Selection field जोड़ें। और इसी तरह आगे बढ़ें।

_**नोट:** अगर आप checkout form बनाने के बाद कोई प्रोडक्ट बनाते हैं, तो आपको उस प्रोडक्ट को Pricing table सेक्शन में जोड़ना होगा। अगर आप इसे नहीं जोड़ते, तो प्रोडक्ट रजिस्ट्रेशन पेज पर आपके कस्टमर्स को दिखाई नहीं देगा।_

_**नोट 2:** username, email, password, site title, site URL, order summary, payment, और submit button checkout form बनाने के लिए ज़रूरी fields हैं।_

जब आप अपने checkout form पर काम कर रहे हों, तो आप हमेशा Preview बटन का उपयोग करके देख सकते हैं कि आपके क्लाइंट्स को फॉर्म कैसा दिखेगा। आप existing user या visitor के रूप में देखने के बीच भी स्विच कर सकते हैं।

![Preview button on the checkout form editor](/img/config/checkout-form-editor.png)![Checkout form preview as visitor or existing user](/img/config/checkout-form-editor.png)

अंत में, **Advanced Options** में आप **Thank You** पेज के लिए मैसेज कॉन्फ़िगर कर सकते हैं, conversions ट्रैक करने के लिए snippets जोड़ सकते हैं, अपने checkout form में custom CSS जोड़ सकते हैं या इसे कुछ खास देशों तक restrict कर सकते हैं।

![Advanced Options with Thank You page, conversion tracking, and custom CSS](/img/config/checkout-form-advanced.png)

आप राइट कॉलम पर इस ऑप्शन को toggle करके अपने checkout form को manually enable या disable भी कर सकते हैं, या फॉर्म को permanently डिलीट कर सकते हैं।

![Active toggle and delete option for checkout form](/img/config/checkout-form-active.png)

अपना checkout form सेव करना न भूलें!

![Save Checkout Form button](/img/config/checkout-form-save.png)

अपने फॉर्म का shortcode पाने के लिए **Generate Shortcode** पर क्लिक करें और modal window पर दिखाए गए result को कॉपी करें।

![Generate Shortcode modal with shortcode to copy](/img/config/checkout-form-editor.png)

_**नोट:** इस checkout form को रजिस्ट्रेशन पेज पर जोड़ने के लिए आपको यह shortcode अपने रजिस्ट्रेशन पेज पर डालना होगा।_

## URL parameters के ज़रिए प्रोडक्ट्स और templates को pre-select करना:

अगर आप अपने प्रोडक्ट्स के लिए कस्टमाइज़्ड pricing tables बनाना चाहते हैं और checkout form पर वह प्रोडक्ट या template pre-select करना चाहते हैं जो आपका कस्टमर आपके pricing table या templates पेज से चुनता है, तो आप इसके लिए URL parameters का उपयोग कर सकते हैं।

### **Plans के लिए:**

**Ultimate Multisite > Products > Select a plan** पर जाएं। आपको पेज के ऊपर **Click to copy Shareable Link** बटन दिखाई देगा। यह वह लिंक है जिसका उपयोग आप अपने checkout form पर इस specific plan को pre-select करने के लिए कर सकते हैं।

![Product page with shareable link button](/img/config/products-list.png)

ध्यान दें कि यह shareable link केवल **Plans** के लिए valid है। आप packages या services के लिए shareable links का उपयोग नहीं कर सकते।

### Templates के लिए:

अगर आप अपने checkout form पर site templates को pre-select करना चाहते हैं, तो आप अपने रजिस्ट्रेशन पेज URL पर parameter: **?template_id=X** का उपयोग कर सकते हैं। "X" को **site template ID number** से बदलना होगा। यह नंबर पाने के लिए, **Ultimate Multisite > Sites** पर जाएं।

जिस site template का उपयोग करना चाहते हैं उसके नीचे **Manage** पर क्लिक करें। आपको SITE ID number दिखाई देगा। अपने checkout form पर इस specific site template को pre-select करने के लिए बस इस नंबर का उपयोग करें। हमारे यहाँ के case में, URL parameter होगा **?template_id=2**।

![Sites list showing site template ID](/img/config/site-templates-list.png)

मान लीजिए हमारी नेटवर्क वेबसाइट [**www.mynetwork.com**](http://www.mynetwork.com) है और हमारे checkout form वाला रजिस्ट्रेशन पेज **/register** पेज पर है। इस site template के pre-selected होने के साथ पूरा URL ऐसा दिखेगा [**www.mynetwork.com/register/?template**](http://www.mynetwork.com/register/?template)**_id=2**।

और अगर आप चाहें, तो आप अपने checkout form पर प्रोडक्ट्स और templates दोनों को pre-select कर सकते हैं। बस plan का shareable link कॉपी करें और अंत में template parameter पेस्ट करें। यह ऐसा दिखेगा [**www.mynetwork.com/register/premium-plan/?template**](http://www.mynetwork.com/register/premium-plan/?template)**_id=2**।
