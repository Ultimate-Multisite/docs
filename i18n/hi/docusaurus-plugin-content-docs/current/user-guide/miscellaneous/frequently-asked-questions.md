---
title: अक्सर पूछे जाने वाले प्रश्न
sidebar_position: 18
_i18n_hash: 2aae003605ca306aebc782d92f605d7c
---
# अक्सर पूछे जाने वाले प्रश्न

यहाँ कुछ **अक्सर पूछे जाने वाले प्रश्न** दिए गए हैं जो support requests के दौरान आमतौर पर सामने आते हैं।

  * **Ultimate Multisite क्या है?**

Ultimate Multisite एक WordPress plugin है, जो WordPress multisite installs के लिए बनाया गया है। यह आपके WordPress install को एक premium network of sites में बदल देता है – जैसे [WordPress.com](https://WordPress.com) – जिससे clients मासिक, त्रैमासिक, या वार्षिक शुल्क के माध्यम से sites बना सकते हैं (आप Free plans भी बना सकते हैं)।

  * **क्या Ultimate Multisite बिना Multisite के काम करेगा?**

नहीं। Ultimate Multisite के लिए WordPress multisite, subdirectory, या subdomain ज़रूरी है।

  * **Ultimate Multisite के लिए क्या requirements हैं?**

Ultimate Multisite के लिए ज़रूरी है:

**WordPress Version** : v5.3+ (अनुशंसित: Last Stable Version)  
**PHP Version** : 7.4.x (> 8.0 के लिए Support जल्द आ रहा है)  
**MySQL Version** : v5+ (अनुशंसित: Version 5.6, अगर आपके hosting provider पर 8.0 उपलब्ध नहीं है)

_Multisite (subdomain या subdirectory) को भी activate करना होगा।_ [WordPress Multisite कैसे Install करें](/user-guide/getting-started/how-to-install-wordpress-multisite)।

  * **क्या Ultimate Multisite Subdirectories वाले Multisite के साथ काम करेगा?**

हाँ। Ultimate Multisite subdirectory installs और subdirectory installs दोनों को support करता है।

  * **क्या Ultimate Multisite Subdomains वाले Multisite के साथ काम करेगा?**

हाँ। Ultimate Multisite subdirectory installs और subdomain installs दोनों को support करता है।

  * **क्या मैं Ultimate Multisite का उपयोग करके यह सीमित कर सकता हूँ कि users कौन से Plugins और Themes इस्तेमाल कर सकते हैं?**

हाँ। Ultimate Multisite के साथ आप चुन सकते हैं कि आपके network पर प्रत्येक plan के लिए कौन से plugins और themes उपलब्ध हों।

  * **क्या मैं Ultimate Multisite का उपयोग करके यह सीमित कर सकता हूँ कि एक user अपनी site पर कितनी posts बना सकता है?**

हाँ। Ultimate Multisite के साथ आप अपने network पर **हर उपलब्ध post type** के लिए post quotas निर्धारित कर सकते हैं। आप यह भी सीमित कर सकते हैं कि admin कितने users को invite कर सकता है, **disk space की मात्रा,** और भी बहुत कुछ।

  * **क्या Ultimate Multisite Site Templates को support करता है?**

हाँ। Ultimate Multisite के साथ आप जितने चाहें उतने Site Templates बना सकते हैं। Site Templates themes नहीं हैं, ये आपके network पर सामान्य sites हैं। आप plugins, themes activate कर सकते हैं, और उस Site Template को जैसे चाहें customize कर सकते हैं। अगर कोई user उस template को चुनता है, तो उसकी site उस template की copy के रूप में बनाई जाएगी, सभी customizations के साथ।

आप किसी plan के लिए एक विशेष template भी set कर सकते हैं। ऐसा करने से, उस plan पर sign up करने वाले हर user की site उस Site Template की duplicate के रूप में बनाई जाएगी।

  * **क्या Ultimate Multisite WooCommerce के साथ integrate होता है?**

हाँ!

अगर आप चाहते हैं कि आपके network users के लिए WooCommerce उपलब्ध हो, जिससे वे stores set up कर सकें, तो यह Ultimate Multisite का उपयोग करके संभव है। आप यह भी सीमित कर सकते हैं कि आपके clients प्रत्येक plan tier पर कितने products बना सकते हैं।

Ultimate Multisite के लिए subscription payments के मामले में, आप [Ultimate Multisite: WooCommerce Integration Add-on](https://ultimatemultisite.com/addons/wp-ultimo-woocommerce/) का उपयोग कर सकते हैं ताकि आपके Ultimate Multisite clients आपकी main site पर WooCommerce gateways का उपयोग करके भुगतान कर सकें। इस तरह, आप WooCommerce के लिए विकसित payment gateways की विशाल library का लाभ उठा सकते हैं और उनका उपयोग अपने Ultimate Multisite clients को bill करने के लिए कर सकते हैं।

  * **क्या WPMUDEV Pro Sites से subscriptions migrate करने का कोई तरीका है?**

हाँ, Ultimate Multisite अब आपको [अपने Pro Sites network को migrate करने के लिए एक helpful tool](https://ultimatemultisite.com/addons/wp-ultimo-pro-sites-migrator/) प्रदान करता है।

  * **मेरे Plan Edit Page पर "Allowed Plugins" tab खाली क्यों है?**

Ultimate Multisite आपको केवल उन plugins को allow या deny करने देता है जो आपके network पर network-activated नहीं हैं। जब कोई plugin network-activated होता है, तो स्वाभाविक रूप से, यह आपके network की हर site पर default रूप से load होगा।

अगर आपको "Allowed Plugins" tab पर कोई plugins listed नहीं दिख रहे हैं, तो check करें कि desired plugin network-active है या नहीं।

  * **क्या मैं अपना खुद का Pricing Table design उपयोग कर सकता हूँ?**

हाँ। Version 1.4.0 के बाद से, Ultimate Multisite template overrides को support करता है।

  * **क्या Ultimate Multisite WP Engine के साथ काम करता है?**

हाँ। Ultimate Multisite हमेशा से WP Engine द्वारा supported था, लेकिन domain mapping को काम करने के लिए admin से manual extra steps की ज़रूरत होती थी (WP Engine panel में domain add करना)। **Version 1.6.0 के बाद से अब ऐसा नहीं है।** Ultimate Multisite सीधे WP Engine API के साथ integrate होता है और mapping के बाद domains automatically panel में add हो जाते हैं।

  * **आप कौन से hosting provider की सिफारिश करते हैं?**

Ultimate Multisite किसी भी hosting provider के साथ काम करना चाहिए। बस फर्क यह है कि कुछ hosting companies जैसे Closte, Serverpilot, WPMUDEV, WP Engine, Cloudways, Gridpane और [Runcloud.io](http://Runcloud.io) में domain mapping capabilities के लिए tighter integration है इसलिए वे out of the box काम करती हैं। अन्य hostings के लिए, आपको domain mapping manually set up करना पड़ सकता है।
