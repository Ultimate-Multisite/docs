---
title: Closte मा Sunrise Constant सेट गर्ने
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte मा Sunrise constant लाई true सेट गर्ने तरिका

केही होस्ट प्रदायकहरू सुरक्षाका कारण wp-config.php लाई लक गर्छन्। यसको मतलब, Ultimate Multisite ले डोमेन मेप्यापिङ र अन्य फिचर काम गर्न आवश्यक constantहरू समावेश गर्न फाइललाई स्वचालित रूपमा सम्पादन गर्न सक्दैन। Closte त्यस्तो होस्ट मध्ये एक हो।

यद्यपि, Closte मा सुरक्षित तरिकाले wp-config.php मा constantहरू थप्ने उपाय उपलब्ध छ। तपाईंले तलका चरणहरू पालना गर्न मात्रुपर्छ:

## Closte ड्यासबोर्डमा

सबैभन्दा पहिले, [तपाईंको Closte खातामा लग इन गर्नुहोस्](https://app.closte.com/), त्यसपछि Sites मेनु आइटममा क्लिक गर्नुहोस्, र जुन साइटमा तपाईं काम गर्दै हुनुहुन्छ त्यसको Dashboard लिंकमा क्लिक गर्नुहोस्:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

तपाईंको स्क्रिनको बायाँ छेउमा धेरै नयाँ मेनु आइटमहरू देख्नुहुनेछ। त्यो मेनु प्रयोग गरेर **Settings** पेजमा जानुहोस्:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

त्यसपछि, **Settings** मा गएर WP-Config ट्याब फेला पार्नुहोस्, र त्यस ट्याबमा रहेको "Additional wp-config.php content" फिल्ड हेर्नुहोस्:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite इन्स्टल गर्ने सन्दर्भमा, तपाईंले त्यो फिल्डमा sunrise constant थप्नुपर्छ। केवल एउटा नयाँ लाइन थप्नुहोस् र तलको लाइन पेस्ट गर्नुहोस्। त्यसपछि, **Save All** बटनमा क्लिक गर्नुहोस्।

define('SUNRISE', true);

यति नै भयो, तपाईं तयार हुनुहुन्छ। Ultimate Multisite इन्स्टल विझार्डमा फर्कनुहोस् र प्रक्रिया जारी राख्न पेज रिफ्रेश गर्नुहोस्।
