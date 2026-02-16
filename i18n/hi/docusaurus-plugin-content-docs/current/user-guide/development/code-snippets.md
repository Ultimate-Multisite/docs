---
title: कोड स्निपेट्स
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 के लिए कोड स्निपेट्स

असल में, **WordPress** के लिए कोड स्निपेट्स का उपयोग कुछ ऐसे काम करने के लिए किया जाता है जिनके लिए अन्यथा एक अलग छोटे plugin की जरूरत होती। ऐसे कोड स्निपेट्स को WordPress core या theme फाइलों में से किसी एक में रखा जाता है (आमतौर पर आपकी theme की functions.php फाइल में) या इन्हें MU plugin के रूप में उपयोग किया जा सकता है।

इस लेख में हम आपको तीन कोड स्निपेट्स दिखाएंगे जो **Ultimate Multisite v2** के साथ उपयोग किए जा सकते हैं:

  * [**Account मेनू आइटम की स्थिति बदलना**](#changing-the-position-of-the-account-menu-item)

  * [**यह कैसे जांचें कि उपयोगकर्ता किसी निश्चित प्लान के अंतर्गत है और/या उसकी सक्रिय सदस्यता है**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**मैप किए गए डोमेन में Font-Icons के साथ CORS समस्याओं को ठीक करना**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account मेनू आइटम की स्थिति बदलना

अपने क्लाइंट के Dashboard पर Account मेनू आइटम की स्थिति बदलने के लिए, बस निम्नलिखित कोड स्निपेट को अपनी मुख्य साइट की सक्रिय theme के functions.php में जोड़ें। आप इस स्निपेट को अपने mu-plugins या custom plugins में से किसी एक में भी रख सकते हैं।

add_filter('wu_my_account_menu_position', function() { return 10; // मेनू को वांछित स्थिति पर रखने के लिए इस मान को बदलें।

## यह कैसे जांचें कि उपयोगकर्ता किसी निश्चित प्लान के अंतर्गत है और/या उसकी सक्रिय सदस्यता है

एक network admin के रूप में, आपको ऐसे custom functions बनाने की जरूरत हो सकती है जो बुनियादी कार्य करें या किसी सेवा/सुविधा को चुनिंदा subscribers या end-users के समूह के लिए उपलब्ध कराएं, उनकी subscription की स्थिति और उनके द्वारा सब्सक्राइब किए गए प्लान के आधार पर।

ये Ultimate Multisite के native functions इसमें आपकी मदद करेंगे।

यह जांचने के लिए कि उपयोगकर्ता किसी निश्चित प्लान का सदस्य है या नहीं, आप इस function का उपयोग कर सकते हैं:

wu_has_plan($user_id, $plan_id)

यह जांचने के लिए कि subscription सक्रिय है या नहीं, आप इस function का उपयोग कर सकते हैं:

wu_is_active_subscriber($user_id)

नीचे एक उदाहरण स्निपेट है जो जांचता है कि वर्तमान उपयोगकर्ता किसी विशिष्ट प्लान (_Plan ID 50_) के अंतर्गत है या नहीं और उपयोगकर्ता की subscription सक्रिय है या नहीं।

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // उपयोगकर्ता प्लान का सदस्य है और उसकी SUBSCRIPTION सक्रिय है, कुछ करें} else { // उपयोगकर्ता प्लान का सदस्य नहीं है -- या -- उसकी SUBSCRIPTION सक्रिय नहीं है, कुछ और करें} // end if;

ध्यान दें कि _**wu_has_plan**_ को काम करने के लिए एक "Plan ID" की जरूरत होती है।

किसी प्लान की ID प्राप्त करने के लिए, आप **Ultimate Multisite > Products** पर जा सकते हैं। प्रत्येक product की ID टेबल के दाईं ओर दिखाई जाएगी।

ध्यान दें कि उपयोगकर्ता केवल **Plan** को सब्सक्राइब कर सकते हैं, Package या Service को नहीं, क्योंकि वे केवल **Plan** के लिए add-ons हैं।

![प्लान IDs दिखाती Products सूची](/img/admin/products-list.png)

## मैप किए गए डोमेन में Font-Icons के साथ CORS समस्याओं को ठीक करना
## मैप किए गए डोमेन में Font-Icons के साथ CORS समस्याओं को ठीक करना

किसी sub-site पर डोमेन मैप करने के बाद आप पा सकते हैं कि साइट को custom fonts लोड करने में समस्या हो रही है। यह आपकी server settings में cross-origin block के कारण होता है।

चूंकि font फाइलें लगभग हमेशा सीधे CSS से लोड होती हैं, हमारा domain mapping plugin मूल URLs को मैप किए गए डोमेन के बजाय उपयोग करने के लिए rewrite करने में सक्षम नहीं है, इसलिए इस समस्या को ठीक करने के लिए, आपको अपनी server configuration फाइलों में बदलाव करने होंगे।

नीचे Apache और NGINX के लिए इस समस्या को ठीक करने के कोड स्निपेट्स हैं। इन बदलावों के लिए server configuration फाइलों (.htaccess फाइलें और NGINX config फाइलें) का उन्नत ज्ञान आवश्यक है। यदि आप स्वयं ये बदलाव करने में सहज नहीं हैं, तो सहायता मांगते समय इस पेज को अपने hosting provider के support agents को भेजें।

### Apache

अपनी .htaccess फाइल में, यह जोड़ें:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

अपनी server config फाइल में (स्थान सर्वर से सर्वर अलग होती है), यह जोड़ें:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
