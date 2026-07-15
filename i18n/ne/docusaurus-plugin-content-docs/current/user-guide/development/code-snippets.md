---
title: कोड स्निपेटहरू
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 का लागि कोड स्निपेटहरू

मूल रूपमा, **WordPress** का लागि कोड स्निपेटहरू कुनै निश्चित कार्य गर्न प्रयोग गरिन्छ जुन अन्यथा छुट्टै सानो प्लगइनको आवश्यकता हुन सक्छ। यस्ता कोड स्निपेटहरू WordPress को कोर वा थीम फाइल (सामान्यतया तपाईंको थीमको functions.php फाइल) मा राखिन्छ वा तिनीहरूलाई MU प्लगइनको रूपमा पनि प्रयोग गर्न सकिन्छ।

यस लेखमा हामी **Ultimate Multisite v2** सँग प्रयोग गर्न सकिने तीनवटा कोड स्निपेटहरू देखाउँछौं:

  * [**अकाउन्ट मेनु आइटमको स्थान परिवर्तन गर्ने**](#changing-the-position-of-the-account-menu-item)

  * [**प्रयोगकर्ता कुनै निश्चित प्लान अन्तर्गत छन् कि छैनन् र/वा सक्रिय सदस्यता छ कि छैन भनेर कसरी जाँच गर्ने**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**म्याप गरिएका डोमेनहरूमा Font-Icons सँग CORS समस्या समाधान गर्ने**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## अकाउन्ट मेनु आइटमको स्थान परिवर्तन गर्ने {#changing-the-position-of-the-account-menu-item}

तपाईंको ग्राहकको ड्यासबोर्डमा अकाउन्ट मेनु आइटमको स्थान परिवर्तन गर्न, तपाईंले आफ्नो मुख्य साइटको सक्रिय थीमको functions.php मा निम्न कोड स्निपेट थप्नुहोस्। तपाईं यसलाई आफ्नै mu-plugins वा कस्टम प्लगइनभित्र पनि राख्न सक्नुहुन्छ।

add_filter('wu_my_account_menu_position', function() { return 10; // मेनुलाई चाहेको स्थानमा राख्न यो मान (value) लाई मिलाउनुहोस्।

सब्सक्रिप्शन सक्रिय छ कि हेर्नको लागि, तपाईंले निम्न function प्रयोग गर्न सक्नुहुन्छ:

`wu_is_active_subscriber($user_id)`

तल एउटा उदाहरण snippet दिइएको छ जसले वर्तमान प्रयोगकर्ता कुनै विशेष प्लान (_Plan ID 50_) अन्तर्गत छन् कि छैनन् र प्रयोगकर्ताको सदस्यता सक्रिय छ कि छैन भनेर जाँच गर्छ।

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // प्रयोगकर्ता प्लानको सदस्य छ र उसको सदस्यता सक्रिय छ, काम गर्नुहोस् } else { // प्रयोगकर्ता प्लानको सदस्य छैन -- वा -- उसको सदस्यता सक्रिय छैन, अन्य काम गर्नुहोस् } // end if;`

ध्यान दिनुहोस् कि `_**wu_has_plan**_` ले काम गर्नका लागि "Plan ID" चाहिन्छ।

एउटा प्लानको ID प्राप्त गर्न, तपाईं **Ultimate Multisite > Products** मा जान सक्नुहुन्छ। प्रत्येक प्रोडक्टको ID तालिकाको दाहिनेतिर देखाइनेछ।

ध्यान दिनुहोस् कि प्रयोगकर्ताले कुनै **Package** वा **Service** मा मात्र सदस्यता लिन सक्छन्, किनकि तिनीहरू केवल एउटा **Plan** का अतिरिक्त सामान (add-ons) हुन्।

![Products list showing plan IDs](/img/admin/products-list.png)

## म्याप्ड डोमेनमा Font-Icons को कारण हुने CORS समस्या समाधान गर्ने {#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription}
## म्याप्ड डोमेनमा Font-Icons को कारण हुने CORS समस्या समाधान गर्ने {#fixing-cors-issues-with-font-icons-in-mapped-domains}

कुनै डोमेनलाई सब-साइटसँग जोड्नुभएपछि, तपाईंले साइटले कस्टम फन्टहरू लोड गर्न गाह्रो भएको पत्ता लगाउन सक्नुहुन्छ। यो तपाईंको सर्भर सेटिङमा रहेको cross-origin ब्लक (cross-origin block) को कारण हुन्छ।

फन्ट फाइलहरू लगभग सधैँ CSS बाट सिधै लोड गरिन्छ, त्यसैले हाम्रो डोमेन म्यापिङ प्लगइनले URL लाई मूल भएको ठाउँको सट्टा म्याप्ड डोमेन प्रयोग गर्न पुनः लेख्न सक्दैन। त्यसैले समस्या समाधान गर्नका लागि, तपाईंले आफ्नो सर्भर कन्फिगरेशन फाइलहरू संशोधन गर्नुपर्ने हुन्छ।

Apache

तपाईंको .htaccess फाइलमा निम्न कुराहरू थप्नुहोस्:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

NGINX

तपाईंको सर्भर कन्फिग फाइल (सर्भर अनुसार यसको स्थान फरक हुन्छ) मा निम्न कुरा थप्नुहोस्:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
