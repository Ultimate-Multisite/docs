---
title: سائٽ ايڪسبوٽ
sidebar_position: 11
_i18n_hash: d25255aa1b01df64a9008f91e3dcbeb1
---
# साइट एक्सपोर्ट (Site Export)

**साइट एक्सपोर्ट** एडमिन पेज نیٹवर्क एडमिनिस्ट्रेटरलाई एउटा साइट, वा पूरा नेटवर्कलाई माइग्रेशन, ब्याकअप, वा हस्तान्तरणका कामको लागि डाउनलोड गर्न सकिने आर्काइभमा प्याकेज गर्न मद्दत गर्छ।

## एउटा साइट एक्सपोर्ट गर्ने (Exporting one site)

**Ultimate Multisite > Site Export** मा जानुहोस् र **Generate new Site Export** छान्नुहोस्। तपाईंले निर्यात गर्न चाहेको सबसाइट चयन गर्नुहोस्, त्यसपछि आर्काइभमा अपलोडहरू (uploads), प्लगइनहरू (plugins), र थीमहरू (themes) समावेश गर्ने कि नगर्ने भन्ने कुरा छान्नुहोस्।

जब एक्सपोर्ट पूरा हुन्छ, **Existing Exports** सूचीबाट ZIP डाउनलोड गर्नुहोस्। अहिलेका Export ZIP हरूमा एउटा सेल्फ-बूटिङ `index.php` र एउटा `readme.txt` पनि समावेश हुन्छन्, ताकि आर्काइभलाई छुट्टै इम्पोर्टर प्लगइन इन्स्टल नगरी नयाँ होस्टमा अपलोड गर्न सकियोस् र सुरु गर्न सकियोस्।

## पूरा नेटवर्क एक्सपोर्ट गर्ने (Exporting the whole network)

जब तपाईंलाई नेटवर्कका सबै सबसाइटहरू भएको एउटै आर्काइभ चाहिन्छ, तब Site Export पेजमा **Network Export** प्रयोग गर्नुहोस्। यो होस्ट माइग्रेशन, डिजास्टर-रिकभरी ड्रिल, वा स्टेजिङ रिबिल्डको लागि उपयोगी हुन्छ जहाँ प्रत्येक सबसाइट एकसाथ यात्रा गर्नुपर्छ।

किनकि नेटवर्क एक्सपोर्ट एउटा साइट एक्सपोर्ट भन्दा धेरै ठूलो हुन सक्छ, त्यसैले कम ट्राफिक भएको समयमा यसलाई चलाउनुहोस् र सुनिश्चित गर्नुहोस् कि लक्ष्य गरिएको स्टोरेजमा अपलोडहरू, प्लगइनहरू, थीमहरू, र जनरेट गरिएका ZIP फाइलहरूको लागि पर्याप्त खाली ठाउँ छ।

### नेटवर्क इम्पोर्ट बन्डल्स (Network Import Bundles)

Ultimate Multisite 2.12.0 बाट सुरु भएर, Site Exporter ले **network import bundles** बनाउन सक्छ — जुन नेटवर्क-व्यापी साइट पुनर्स्थापनाको लागि डिजाइन गरिएका विशेष आर्काइभहरू हुन्। एउटा network import bundle मा नयाँ नेटवर्क इन्स्टलेसनमा धेरै साइटहरू पुनर्स्थापित गर्न आवश्यक सबै फाइलहरू र मेटाडेटा हुन्छ।

#### नेटवर्क इम्पोर्ट बन्डल्स बनाउने (Generating a Network Import Bundle)

1. **Ultimate Multisite > Site Export** تي وڃو
2. **Generate new Network Export** تي ڪلڪ ڪريو
3. export type جي طور تي **Network Import Bundle** چونڊيو
4. چُنو ته uploads، plugins، ۽ themes شامل ڪرڻ گهرجي يا نه
5. **Generate** تي ڪلڪ ڪريو
6. **Existing Exports** لسٹ کان bundle ZIP download ڪريو

#### Network Import Bundle کان واپس وڃڻ (Restoring from a Network Import Bundle)

network import bundle کان sites واپس وٺڻ لاءِ:

1. پنهنجي target host تي Ultimate Multisite نصب ڪريو
2. multisite setup wizard کي ختم ڪريو
3. نئين network تي **Ultimate Multisite > Site Export** تي وڃو
4. **Import Network Bundle** تي ڪلڪ ڪريو
5. network import bundle ZIP فائل upload ڪريو
6. screen تي ڏنل import instructions جي عمل ۾ آيو
7. import process سڀني sites، انهن جي content، ۽ configurations کي واپس وٺندو

Network import bundles ان ڳين کي محفوظ رکندا:
- Site content (posts، pages، custom post types)
- Site settings and options
- User roles and permissions
- Plugins and themes (if included in the bundle)
- Media uploads (if included in the bundle)
- Custom database tables and data

## خود چبوڻ واري export ZIP نصب ڪرڻ (Installing a self-booting export ZIP)

نئين host تي خود چبوڻ واري ZIP کي واپس وٺڻ لاءِ:

1. export ٿيل ZIP جي contents کي target web root تي upload ڪريو
2. browser ۾ upload ڪيل `index.php` کي کُھل ڪريو
3. bundled export package کان screen تي ڏنل installer instructions جي عمل ۾ آيو
4. temporary files ختم ڪرڻ کان اڳ، export-specific notes لاءِ bundled `readme.txt` کي ڏسو

addon-specific installation ۽ import details لاءِ، [Site Exporter addon documentation](/addons/site-exporter) ڏسو.

Ultimate Multisite 2.9.0 ۾ شامل ڪيل single-site tool لاءِ، [Export & Import](/user-guide/administration/export-import) ڏسو.
