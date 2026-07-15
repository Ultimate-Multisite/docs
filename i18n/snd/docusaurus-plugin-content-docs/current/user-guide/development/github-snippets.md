---
title: گھیبھر جي ڪيڪڊز
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# हाम्रो GitHub repository मा Ultimate Multisite snippets कसरी प्रयोग गर्ने

Ultimate Multisite प्रयोगकर्ताहरूले धेरै पटक अनुरोध गर्ने कोड स्निपेटहरू (code snippets) GitHub repository मा उपलब्ध छन्, जसले साइन-अप पेजमा Google Analytics स्क्रिप्ट थप्ने वा एडमिन ड्यासबोर्डबाट मेटा बक्स लुकाउने जस्ता सानो फिचरहरू जोड्न मद्दत गर्छ।

यो लेखले तपाईंलाई यी कोडहरू कसरी प्रयोग गर्ने वा विशेष गरी कहाँ राख्ने भन्ने कुरा देखाउँछ।

तपाईं निम्न लिंकमा स्निपेटहरू फेला पार्न सक्नुहुन्छ।

https://github.com/next-press/wp-ultimo-snippets/

कोड थप्नका लागि तपाईंको दुई तरिकाहरू छन्:

  १. आफ्नो थीमको functions.php फाइलमा।

  २. Must-Use Plugins (mu-plugins) मा।

# आफ्नो थीमको functions.php फाइलमा स्निपेट कसरी थप्ने

  १. आफ्नो WordPress Network admin dashboard मा लग इन गर्नुहोस् र Themes > Theme Editor मा जानुहोस् (तलको स्क्रिनशट हेर्नुहोस्)।

  २. "Edit Themes" पेजमा, सुनिश्चित गर्नुहोस् कि तपाईंले आफ्नो सक्रिय थीमलाई स्क्रीनको दाहिने माथिल्लो भागमा रहेको dropdown field मा चयन गर्नुभएको छ (#3 मा तलको स्क्रिनशट हेर्नुहोस्)।

  ३. "Theme Files" सेक्सन अन्तर्गत functions.php फाइलमा क्लिक गरेर फाइल लोड गर्नुहोस्। तलसम्म स्क्रोल गर्नुहोस् र GitHub repository बाट तपाईंले पाएको Ultimate Multisite snippet त्यहाँ पेस्ट गर्नुहोस्।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) कसरी बनाउने

WordPress मा एउटा फिचर छ जसले "Must-Use Plugins" वा छोटकरीमा "mu-plugins" नामक कस्टम कार्यक्षमता लोड गर्न अनुमति दिन्छ।

यी विशेष mu-plugins अन्य सबै नियमित प्लगइनहरूभन्दा पहिले लोड हुन्छन्, र तिनीहरूलाई निष्क्रिय (deactivate) गर्न सकिँदैन। एउटा multisite नेटवर्क मा, यी mu-plugins का कोड तपाईंको इन्स्टलेसनका सबै साइटहरूमा लोड हुनेछ।

१. आफ्नो WordPress इन्स्टलेसनको फाइलसिस्टममा पहुँच पाउन FTP वा SSH प्रयोग गर्नुहोस्।

2۔ توهان جي WordPress installation جو wp-content directory اندر، "mu-plugins" نالو وکھرو هڪ نون directory banaوا.

<!-- Screenshot unavailable: File manager showing wp-content directory with mu-plugins folder -->

3۔ پنهنجي ڪمپيوٽر تي Notepad يا ڪا به code editor استعمال ڪري هڪ نون PHP فائل بناوه جنه "wu-snippet.php" هجي.

4۔ Ultimate Multisite جو جيڪو GitHub repository کان توهان کي کوڈ مليو آهي، ان کي ان فائل اندر رکي save ڪريو. توهان هن کوڈ کان اوپر هيٺ ڏنل کوڈ شامل ڪري سگهو ٿا ته جيئن پنهنجي mu plugin کي لاين (label) ڏئي سگهو.
