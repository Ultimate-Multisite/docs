---
title: ڪوڊ سنيپٽس
sidebar_position: 1
_i18n_hash: 2284b14474d86f665fa7c84cc305553e
---
# v2 لاءِ کوڈ سنيپٹس

بنیادی طور تي، **WordPress** لاءِ کوڈ سنيپٹس ان ڪنهن ڪنهن عمل ڪرڻ لاءِ استعمال ٿين ٿا جيڪي عام طور تي هڪ مخصوص ننڍڙي plugin جي ضرورت پوندا هوندو. اهڙيون سنيپٹس WordPress جو ڪنهن هميشه (core) يا ٺهي ويو ٿيل theme جي ملف (file) ۾ (عام طور تي توهان جي theme جي functions.php فائل ۾) رکيل هونديون آهن، يا انهن کي MU plugin جي صورت ۾ استعمال ڪيو ويندو آهي.

ان مضمون ۾ اسين توهان کي ٽي سنيپٹس ڏسائينداسين جيڪي **Ultimate Multisite v2** سان استعمال ٿي سگهن ٿا:

  * [**Account menu item جو پيغير بدلائڻ**](#changing-the-position-of-the-account-menu-item)

  * [**هي چیک ڪرڻ كيف صارف ڪنهن پلان تي آهي ۽/يا ڪو فعال سبسڪريپشن رکي ٿو**](#how-to-check-if-the-user-is-under-a-given-plan-andor-has-an-active-subscription)

  * [**Mapped domains ۾ Font-Icons سان CORS مسئلن کي ختم ڪرڻ**](#fixing-cors-issues-with-font-icons-in-mapped-domains)

## Account menu item جو پيغير بدلائڻ

توهان جي ڪلائين جي Dashboard تي Account menu item جو پيغير بدلڻ لاءِ، بس هي سنيپٽ توهان جي main site جي active theme جي functions.php ۾ شامل ڪريو. توهان ان سنيپٽ کي انهن مان هڪ ۾ به رکي سگهو ٿا جيڪي توهان جا mu-plugins يا custom plugins آهن.

add_filter('wu_my_account_menu_position', function() { return 10; // هي value tweak ڪريو ته جيئن menu کي مطلوب پيغير تي رکيو ويندو.

## صارف ڪنهن پلان تي آهي يا نه، ۽/يا ڪو فعال سبسڪريپشن رکي ٿو ان کي چيڪ ڪرڻ كيف

هڪ network admin جي طور تي، توهان کي custom functions banaڻ گهرجي جيڪي بنيادي عمل انجام ڏين يا ڪنه مخصوص گروپ جو سبسڪريبرز يا end-users لاءِ ڪنهن سروس/feature کي انهن جي سبسڪريپشن ۽ ان پلان جي حالت جي بنياد تي موجود بنائون.

هي Ultimate Multisite جا native functions توهان کي ان ۾ مدد ڪندا.

هي چيڪ ڪرڻ لاءِ ته صارف ڪنهن پلان جو ممبر آهي، توهان هي function استعمال ڪري سگهو ٿا:

wu_has_plan($user_id, $plan_id)

सब्सक्रिप्शन فعال हो कि न हो, चेक गर्न तपाईंले यो फंक्शन प्रयोग गर्न सक्नुहुन्छ:

`wu_is_active_subscriber($user_id)`

तल एउटा उदाहरण दिइएको छ जसले हेर्छ कि अहिलेको प्रयोगकर्ता कुनै विशेष प्लान (_Plan ID 50_) अन्तर्गत छ कि छैन र प्रयोगकर्ताको सदस्यता सक्रिय छ कि छैन।

`$user_id = get_current_user_id(); $plan_id = 50; if (wu_has_plan($user_id, $plan_id) && wu_is_active_subscriber($user_id)) { // प्रयोगकर्ता प्लानको सदस्य छ र उसको सदस्यता सक्रिय छ, काम गर्नुहोस् } else { // प्रयोगकर्ता प्लानको सदस्य छैन -- वा -- उसको सदस्यता सक्रिय छैन, अरू काम गर्नुहोस् } // end if;`

ध्यान दिनुहोस् कि `_**wu_has_plan**_` ले काम गर्नका लागि "Plan ID" चाहिन्छ।

एउटा प्लानको ID प्राप्त गर्न, तपाईं **Ultimate Multisite > Products** मा जान सक्नुहुन्छ। प्रत्येक प्रोडक्टको ID टेबलको दाहिनेतिर देखाइनेछ।

ध्यान दिनुहोस् कि प्रयोगकर्ताले कुनै **Package** वा **Service** मा मात्र सदस्यता लिन सक्छन्, किनभने तिनीहरू केवल एउटा **Plan** का लागि एप-अड-अन (add-ons) हुन्।

![Products list showing plan IDs](/img/admin/products-list.png)

## म्याप्ड डोमेनमा Font-Icons को कारण हुने CORS समस्या समाधान गर्ने
## म्याप्ड डोमेनमा Font-Icons को कारण हुने CORS समस्या समाधान गर्ने

एउटा डोमेनलाई सब-साइटसँग जोड्ने (mapping) पछि तपाईंले साइटमा कस्टम फन्ट लोड गर्न गाह्रो भएको देख्न सक्नुहुन्छ। यो तपाईंको सर्भर सेटिङहरूमा रहेको cross-origin ब्लकका कारण हुन्छ।

किनभने फन्ट फाइलहरू लगभग सधैं सिधै CSS बाट लोड गरिन्छ, हाम्रो डोमेन म्यापिङ प्लगइनले URL लाई परिवर्तन गर्न (rewrite) सक्दैन ताकि मूल URL को सट्टा म्याप्ड डोमेन प्रयोग होस्। त्यसैले समस्या समाधान गर्नका लागि, तपाईंले आफ्नो सर्भर कन्फिगरेसन फाइलहरूमा परिवर्तन गर्नुपर्नेछ।

Apache

توهان جي .htaccess فائل ۾، هي شي شامل ڪريو:

<FilesMatch “.(ttf|ttc|otf|eot|woff|font.css|css)$”> Header set Access-Control-Allow-Origin “*”

### NGINX

توهان جي سرور config فائل (جنهن جو مقام سرور تائين مختلف ٿئي ٿو)، ۾ هي شي شامل ڪريو:

location ~ .(ttf|ttc|otf|eot|woff|font.css|css)$ { add_header Access-Control-Allow-Origin “*”;}
