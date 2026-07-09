---
title: GitHub स्निपेटहरू
sidebar_position: 3
_i18n_hash: c643f3d76aace8c15fd224b984af6633
---
# हाम्रो GitHub repository मा Ultimate Multisite snippets कसरी प्रयोग गर्ने {#how-to-use-ultimate-multisite-snippets-on-our-github-repository}

Ultimate Multisite प्रयोगकर्ताहरूले बारम्बार अनुरोध गर्ने कोड स्निपेटहरू GitHub repository मा उपलब्ध छन्, जसले साइन-अप पेजमा Google Analytics स्क्रिप्ट थप्ने वा एडमिन ड्यासबोर्डबाट मेटा बक्स लुकाउने जस्ता साना कार्यक्षमताहरू जोड्न मद्दत गर्दछ।

यो लेखले तपाईंलाई यी कोडहरू कसरी प्रयोग गर्ने वा विशेष गरी कहाँ राख्ने भन्ने कुरा देखाउँछ।

तपाईं निम्न लिंकमा स्निपेटहरू फेला पार्न सक्नुहुन्छ।

https://github.com/next-press/wp-ultimo-snippets/

कोड थप्नका लागि तपाईंको दुई तरिकाहरू छन्:

  १. आफ्नो थीमको functions.php फाइलमा।

  २. Must-Use Plugins (mu-plugins) मा।

# आफ्नो थीमको functions.php फाइलमा स्निपेट कसरी थप्ने {#how-to-add-the-snippet-on-your-themes-functionsphp-file}

  १. आफ्नो WordPress Network admin dashboard मा लगइन गर्नुहोस् र Themes > Theme Editor मा जानुहोस् (तलको स्क्रिनशट हेर्नुहोस्)।

  २. "Edit Themes" पेजमा, तपाईंको स्क्रीनको दाहिने माथिल्लो भागमा रहेको dropdown field मा सक्रिय थीम चयन गरिएको छ कि छैन भनेर सुनिश्चित गर्नुहोस् (#3 मा तलको स्क्रिनशट हेर्नुहोस्)।

  ३. फाइल लोड गर्न "Theme Files" सेक्सन अन्तर्गत functions.php फाइलमा क्लिक गर्नुहोस्। तल स्क्रोल गरेर GitHub repository बाट प्राप्त Ultimate Multisite स्निपेट पेस्ट गर्नुहोस्।

<!-- Screenshot unavailable: WordPress Theme Editor showing functions.php file editing -->

# Must-Use Plugins (mu-plugins) कसरी बनाउने {#how-to-create-must-use-plugins-mu-plugins}

WordPress मा एउटा फिचर छ जसले "Must-Use Plugins" वा छोटकरीमा "mu-plugins" नामक कस्टम कार्यक्षमता लोड गर्न अनुमति दिन्छ।

यी विशेष mu-plugins अन्य सबै नियमित प्लगइनहरूभन्दा पहिले लोड हुन्छन्, र तिनीहरूलाई निष्क्रिय (deactivate) गर्न सकिँदैन। multisite नेटवर्क मा, यी mu-plugins मा रहेको कोड तपाईंको सम्पूर्ण इन्स्टलेसनका सबै साइटहरूमा लोड हुनेछ।

१. आफ्नो WordPress इन्स्टलेसनको फाइलसिस्टममा पहुँच पाउन FTP वा SSH प्रयोग गर्नुहोस्।

२। आफ्नो वर्डप्रेस इन्स्टलेसनको `wp-content` डाइरेक्टरी भित्र `mu-plugins` नामको नयाँ डाइरेक्टरी बनाउनुहोस्।

<!-- स्क्रिनशट उपलब्ध छैन: फाइल म्यानेजरमा `wp-content` डाइरेक्टरी र `mu-plugins` फोल्डर देखाइएको -->

३। नोटपड वा कुनै पनि कोड एडिटर प्रयोग गरेर आफ्नो कम्प्युटरमा `wu-snippet.php` नामको नयाँ PHP फाइल बनाउनुहोस्।

४। तपाईंले GitHub repository बाट प्राप्त गर्नुभएको Ultimate Multisite कोड स्निपेटलाई उक्त फाइलमा राख्नुहोस् र सेभ गर्नुहोस्। तपाईं यो कोड स्निपेटको माथि पनि थप्न सक्नुहुन्छ ताकि आफ्नो `mu plugin` लाई लेबल गर्न सकियोस्।
