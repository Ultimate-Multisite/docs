---
title: सूर्योदय फाइल त्रुटि
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise फाइल इन्स्टल गर्दा गल्ती {#error-installing-the-sunrise-file}

sunrise.php फाइल एउटा विशेष फाइल हो जसलाई WordPress आफैं सुरु (bootstrap) गर्ने बेला खोज्छ। WordPress ले sunrise.php फाइल पत्ता लगाउनको लागि, त्यो **wp-content फोल्डरभित्र** हुनुपर्छ।

जब तपाईं Ultimate Multisite सक्रिय गर्नुहुन्छ र स्क्रीनशटमा देखाइएको जस्तै सेटअप विजुअल गाइडबाट अगाडि बढ्नुहुन्छ, Ultimate Multisite ले हाम्रो sunrise.php फाइललाई wp-content फोल्डरमा कपि गर्न प्रयास गर्छ।

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

धेरैजसो बेला, हामी फाइल सफलतापूर्वक कपि गर्न सक्छौं र सबै काम हुन्छ। तर, यदि केही राम्ररी सेट गरिएको छैन (उदाहरणका लागि, फोल्डर अनुमतिहरू), तपाईं यस्तो अवस्थामा पर्न सक्नुहुन्छ जहाँ Ultimate Multisite ले फाइल कपि गर्न असमर्थ हुन सक्छ।

यदि Ultimo ले दिने त्रुटि सन्देश पढ्नुभयो भने, तपाईंले यहाँ ठीक त्यही कुरा भएको देख्नुहुनेछ: **Sunrise copy failed** (Sunrise प्रतिलिपि असफल भयो)।

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

यसलाई सच्याउनको लागि, तपाईंले सरल रूपमा wp-ultimo प्लगइन फोल्डरभित्र रहेको sunrise.php फाइललाई कपि गरेर आफ्नो wp-content फोल्डरमा पेस्ट गर्न सक्नुहुन्छ। त्यो काम गरिसकेपछि, विजुअल गाइड पेज पुनः लोड गर्नुहोस् र जाँचहरू पास हुनुपर्छ।

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> कुनै पनि अवस्थामा, भविष्यमा समस्याबाट बच्न तपाईंको फोल्डर अनुमतिहरूको सामान्य जाँच गर्न यो आवश्यक हुन सक्छ (Ultimate Multisite सँग मात्र होइन, अन्य प्लगइन र थीमहरूसँग पनि)।

WordPress को **Health Check tool** (जसलाई तपाईं आफ्नो मुख्य साइटको **admin panel > Tools > Health Check** बाट पहुँच गर्न सक्नुहुन्छ) ले तपाईंलाई फोल्डर अनुमतिहरू WordPress का लागि समस्या निम्त्याउन सक्ने मानहरूमा सेट गरिएको छ कि छैन भने जानकारी दिन सक्छ।

<!-- स्क्रिनशट उपलब्ध छैन: वर्डप्रेस हेल्थ चेक टूल फोल्डर अनुमति स्थिति देखाउँदैछ -->
