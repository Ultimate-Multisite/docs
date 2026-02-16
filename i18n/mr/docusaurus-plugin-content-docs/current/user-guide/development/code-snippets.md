---
title: कोड स्निपेट्स
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 साठी कोड स्निपेट्स

मुळात, **WordPress** साठी कोड स्निपेट्स काही विशिष्ट कार्ये करण्यासाठी वापरले जातात जी अन्यथा एखाद्या छोट्या plugin ची आवश्यकता असू शकते. असे कोड स्निपेट्स WordPress core किंवा theme फाइल्समध्ये (सामान्यतः तुमच्या theme च्या functions.php फाइलमध्ये) ठेवले जातात किंवा ते MU plugin म्हणून वापरले जाऊ शकतात.

या लेखात आम्ही तुम्हाला तीन कोड स्निपेट्स दाखवणार आहोत जे **Ultimate Multisite v2** सोबत वापरता येतात:

  * [**Account मेनू आयटमची स्थिती बदलणे**](#changing-the-position-of-the-account-menu-item)

  * [**वापरकर्ता एखाद्या विशिष्ट plan अंतर्गत आहे का आणि/किंवा त्याची subscription सक्रिय आहे का हे कसे तपासायचे**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**mapped domains मध्ये Font-Icons च्या CORS समस्या सोडवणे**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account मेनू आयटमची स्थिती बदलणे

तुमच्या क्लायंटच्या Dashboard वर Account मेनू आयटमची स्थिती बदलण्यासाठी, खालील कोड स्निपेट तुमच्या मुख्य साइटच्या सक्रिय theme च्या functions.php मध्ये जोडा. तुम्ही हा स्निपेट तुमच्या mu-plugins किंवा custom plugins मध्ये देखील ठेवू शकता.

add_filter('wu_my_account_menu_position', function() { return 10; // मेनू इच्छित स्थानावर ठेवण्यासाठी ही value बदला.

## वापरकर्ता एखाद्या विशिष्ट plan अंतर्गत आहे का आणि/किंवा त्याची subscription सक्रिय आहे का हे कसे तपासायचे

नेटवर्क admin म्हणून, तुम्हाला कदाचित असे custom functions तयार करावे लागतील जे मूलभूत कार्ये करतात किंवा subscription ची स्थिती आणि ते ज्या plan अंतर्गत subscribe आहेत त्यावर आधारित निवडक subscribers किंवा end-users ना एखादी सेवा/feature उपलब्ध करून देतात.

या Ultimate Multisite native functions तुम्हाला यात मदत करतील.

वापरकर्ता एखाद्या विशिष्ट plan चा सदस्य आहे का हे तपासण्यासाठी, तुम्ही हे function वापरू शकता:

wu_has_plan($user_id, $plan_id)

subscription सक्रिय आहे का हे तपासण्यासाठी, तुम्ही हे function वापरू शकता:

wu_is_active_subscriber($user_id)

खाली एक उदाहरण स्निपेट आहे जे सध्याचा वापरकर्ता विशिष्ट plan अंतर्गत आहे का (_Plan ID 50_) आणि त्याची subscription सक्रिय आहे का हे तपासते.

$user_id = get_current_user_id();$plan_id = 50;if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // वापरकर्ता PLAN चा सदस्य आहे आणि त्याची SUBSCRIPTION सक्रिय आहे, काहीतरी करा} else { // वापरकर्ता PLAN चा सदस्य नाही -- किंवा -- त्याची SUBSCRIPTION सक्रिय नाही, इतर काहीतरी करा} // end if;

लक्षात घ्या की _**wu_has_plan**_ ला कार्य करण्यासाठी "Plan ID" आवश्यक आहे.

plan चा ID मिळवण्यासाठी, तुम्ही **Ultimate Multisite > Products** वर जाऊ शकता. प्रत्येक product चा ID टेबलच्या उजवीकडे दाखवला जाईल.

लक्षात घ्या की वापरकर्ते फक्त **Plan** ला subscribe करू शकतात, Package किंवा Service ला नाही, कारण ते फक्त **Plan** साठी add-ons आहेत.

![Products यादी plan IDs दाखवत आहे](/img/admin/products-list.png)

## mapped domains मध्ये Font-Icons च्या CORS समस्या सोडवणे
## mapped domains मध्ये Font-Icons च्या CORS समस्या सोडवणे

एखाद्या sub-site ला domain map केल्यानंतर तुम्हाला कदाचित आढळेल की साइटला custom fonts लोड करण्यात अडचण येत आहे. हे तुमच्या server settings मधील cross-origin block मुळे होते.

font files जवळजवळ नेहमीच थेट CSS मधून लोड केल्या जातात, आमचे domain mapping plugin मूळ URL ऐवजी mapped domain वापरण्यासाठी URLs पुन्हा लिहू शकत नाही, त्यामुळे ही समस्या सोडवण्यासाठी, तुम्हाला तुमच्या server configuration files मध्ये बदल करावे लागतील.

खाली Apache आणि NGINX साठी ही समस्या सोडवण्यासाठी कोड स्निपेट्स आहेत. या बदलांसाठी server configuration files (.htaccess files आणि NGINX config files) चे प्रगत ज्ञान आवश्यक आहे. जर तुम्हाला हे बदल स्वतः करण्यात अवघड वाटत असेल, तर मदत मागताना हे पेज तुमच्या hosting provider च्या support agents ना पाठवा.

### Apache

तुमच्या .htaccess फाइलमध्ये, हे जोडा:

<FilesMatch ".(ttf|ttc|otf|eot|woff|font.css|css)$"> Header set Access-Control-Allow-Origin "*" 

### NGINX

तुमच्या server config फाइलमध्ये (स्थान server नुसार बदलते), हे जोडा:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin "*";}
