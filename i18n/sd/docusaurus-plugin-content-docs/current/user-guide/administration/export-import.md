---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# निर्यात ۽ درآمد (Export & Import)

Ultimate Multisite 2.9.0 ۾ **Tools > Export & Import** تحت هڪ واحد سائيٽ جو **Export & Import** ٽول شامل ڪيو ويو آهي. ان جو استعمال تڏهن ڪريو جڏهن توهان کي هڪ WordPress سائيٽ کي ZIP فائل جي صورت ۾ پيڪيج ڪرڻ، ان ZIP کي بحال ڪرڻ يا هڪ سائيٽ کي متناسب Ultimate Multisite ۽ single-site WordPress installation بابت منتقل ڪرڻ گهرجي.

## ضروري اجازتون (Required permissions) {#required-permissions}

توهان ان سائيٽ تي جتي export يا import ڪندڙ **Tools** مينيئر تک رسائي هجڻ وارو administrator طور لاگ ان ڪرڻ گهرجي. هڪ multisite network ۾، جب توهان network-level Ultimate Multisite tools کان subsites export يا import ڪري رهيا هجيو، ته network administrator account استعمال ڪريو.

Export ZIP downloads authenticated download endpoint جي ذريعي ڏني وينديون آهن، تنهن ڪري admin session کي فعال رکجو تائين جڏهن download ختم ٿي وڃي ۽ جنريٽ ٿيل download URLs کي پبلڪ طور تي شيئر نه ڪيو.

## سائيٽ جو ZIP ۾ export ڪرڻ (Exporting a site to a ZIP) {#exporting-a-site-to-a-zip}

1. ان سائيٽ جي WordPress admin ۾ جتي توهان copy ڪرڻ چاهيو، **Tools > Export & Import** ڏانهان وڃو.
2. export area کي کُھل ڪري اوه سائيٽ چونڊيو جيڪا توهان پيڪيج ڪرڻ چاهيو.
3. optional content چونڊيو جنهن کي شامل ڪرڻ چاهيو، جهڙوڪ uploads، plugins، ۽ themes، جڏهن اهي خيار موجود hon.
4. export شروع ڪريو ۽ عمل کي ختم ٿيڻ جو انتظار ڪريو. وڏا سائيٽون ZIP تيار ٿيڻ کان اڳ background ۾ ختم ٿيڻ گهرجي.
5. exports list کان تيار ٿيل ZIP download ڪريو.

ZIP کي محفوظ جاءِ تي رکجو. ان ۾ سائيٽ جي مواد، settings، media files، ۽ چونڊيل code assets شامل ٿي سگهن ٿا.

## export ۾ شموليت (What the export includes) {#what-the-export-includes}

Export ZIP ۾ هي شاندار شيون شامل ٿي سگهن ٿيون:

- چونڊيل سائيٽ جو database content ۽ configuration.
- جڏهن uploads شامل ڪيا ويندا آهن ته upload ڪيل media files.
- جڏهن اهي خيار چونڊيا ويندا آهن ته plugins ۽ themes.
- Import metadata جيڪو Export & Import tool طرفان target installation تي سائيٽ کي পুনرو بنائڻ لاءِ استعمال ٿيو آهي.

ZIP جو سائز ميڊيا، منتخب ڪيل plugins ۽ themes جي مقدار ۽ سائيٽ جي database tables جي سائز تي منحصر هوندو.

## ZIP کان سائيٽ Import ڪرڻ {#importing-a-site-from-a-zip}

1. مقصد وارو WordPress site تي **Tools > Export & Import** تي وڃو.
2. import جو حصو کليل ڪريو ۽ Export & Import tool پاران بنائيل ZIP فائل upload ڪريو.
3. جيڪڏهن سائيٽ کي نئين address استعمال ڪرڻو آهي ته replacement URL داخل ڪريو، يا اصل URL برقرار رکڻ لاءِ field کي خالی رهي ڏيو.
4. import ختم ٿي وڃڻ کان پوءِ upload ڪيل ZIP کي حذف ڪرڻ جو انتخاب ڪريو.
5. **Begin Import** تي کليڪ ڪريو.
6. pending import کي ختم ٿي وڃڻ تائين ماني ڏيو. جيڪڏهن توهان کي پنهنجي عمل کي ختم ڪرڻ کان اڳ رڪانڻ جي ضرورت آهي ته **Cancel Import** استعمال ڪريو.
7. normal traffic يا ڪسٽمرن جي رسائي اجازت ڏيڻ کان اڳ import ٿيل سائيٽ جو جائزو وٺو.

هڪ single-site WordPress installation تي، ZIP import ڪرڻ سان موجوده سائيٽ کي import ٿيل سائيٽ سان بدل ڏني ويندي آهي. توهان شروع ڪرڻ کان اڳ مقصد وارو سائيٽ جو full backup bana لکو، ۽ هڪ ئي وقت هڪ ئي سائيٽ لاءِ متعدد imports شروع ڪرڻ کان بچو.

## محدوديتون ۽ compatibility جي نوٽس {#limitations-and-compatibility-notes}

اڪجهه بہت وڏي اپلوڊ ڪندڙ (uploads directories) يا ميڊيا لائبراries ان کي وڏيون ZIP فائلون بنائي سگهن ٿيون. وڏين سائٽس کي  Export ڪرڻ کان سواءِ، پنهنجي PHP اپلوڊ ليمائٽس (upload limits)، اڪيشن ليمائٽس (execution limits)، ڪارڊ اسپيس (disk space)، مييموري (memory)، ۽ سرور تاؤ آؤٹ سيتينگس (server timeout settings) کي ضرور تصديق ڪريو.

اڪجهه وڏين ميڊيا لائبراries کي گهٽtrafڪ وارن مينٽيغير ويندو دوران منتقل ڪرڻ جي ضرورت پئي ٿي.

توهان جيڪو WordPress installation آهي، ان ۾ مطابق WordPress، PHP، Ultimate Multisite، plugin، ۽ theme جا مناسب ورژن چلڻ گهرجن.

Single-site import توهان جي موجوده سائٽ جي جاءِ تي نئين سائٽ کي بدلائي ڇڏيندو آهي. اهو merge tool نه آهي.

Multisite-to-single-site ۽ single-site-to-multisite منتقل ڪرڻ جو سپورٽ تبديل ماحول (target environment) تائين موجود plugins، themes، URLs، ۽ Ultimate Multisite جا ضرورتان واري components کي چالو ڪري سگهي ٿو ته.

ZIP فائل کي پرائیوٽ رکيو. ان ۾ Export ڪيل سائٽ جي ڊيٽا بزي، اپلوڊ ڪيل فائلون، ۽ configuration details شامل ٿي سگهن ٿيون.

پهرين وقت جي نتيجي واري network-level export workflows لاءِ، [Site Export](/user-guide/administration/site-export) ڏسو.
