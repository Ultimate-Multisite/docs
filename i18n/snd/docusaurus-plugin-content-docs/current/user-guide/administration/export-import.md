---
title: Export & Import
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# निर्यात ۽ درآمد (Export & Import)

Ultimate Multisite 2.9.0 ۾ **Tools > Export & Import** تحت هڪ سڪل-سايت (single-site) جو **Export & Import** ٽول شامل ڪيو آهي. ان جو استعمال تڏهن ڪريو جڏهن توهان کي هڪ WordPress سائيٽ کي ZIP فائل جي صورت ۾ پيڪيج ڪرڻ، ان ZIP کي بحال ڪرڻ يا ڪنهن Compatible Ultimate Multisite ۽ single-site WordPress installation بابت سائيٽ کي منتقل ڪرڻ جي ضرورت هجي.

## گهرجن اجازتون (Required permissions)

توهان ان سائيٽ تي جتي export يا import ٿي رهيو آهي ان جو **Tools** مينيئل استعمال ڪري هڪ administrator طور لاگ ان ڪيو ذاتيئن. multisite network ۾، جب توهان network-level Ultimate Multisite tools کان subsites export يا import ڪري رهيا هجي ته network administrator account استعمال ڪريو.

Export ZIP downloads authenticated download endpoint جي ذريعي ڏني وينديون آهن، تنهن ڪري admin session کي فعال رکجو تائين جڏهن download ختم ٿي وڃي ۽ جنريٽ ٿيل download URLs کي پبلڪ طور تي شيئر نه ڪيو.

## سائيٽ جو ZIP ۾ export ڪرڻ (Exporting a site to a ZIP)

1. ان سائيٽ جي WordPress admin ۾ جتي توهان copy ڪرڻ چاهيو، **Tools > Export & Import** ڏانهان وڃو.
2. export area کي کُھل ڪري ان سائيٽ کي چونڊيو جيڪا توهان پيڪيج ڪرڻ چاهيو.
3. optional content چونڊيو جنهن کي شامل ڪرڻ آهي، جهڙوڪ uploads، plugins، ۽ themes، جڏهن اهي خيار موجود hon.
4. export شروع ڪريو ۽ عمل کي ختم ٿيڻ جو انتظار ڪريو. وڏا سائيٽس ZIP تيار ٿيڻ کان اڳ background ۾ ختم ٿي سگهن ٿيون.
5. exports list کان پورو ٿيل ZIP download ڪريو.

ZIP کي محفوظ جاءِ تي رکجو. ان ۾ سائيٽ جي مواد، settings، media files، ۽ چونڊيل code assets شامل ٿي سگهن ٿا.

## export ۾ شموليت (What the export includes)

Export ZIP ۾ هي شيون شامل ٿي سگهن ٿيون:

- چونڊيل سائيٽ جو database content ۽ configuration.
- جڏهن uploads شامل ڪيا ويندا آهن ته upload ڪيل media files.
- جڏهن اهي خيار چونڊيا ويندا آهن ته plugins ۽ themes.
- Import metadata جيڪو Export & Import tool طرفان target installation تي سائيٽ کي دوبارہ banaڻ لاءِ استعمال ٿيو آهي.

ZIP جو سائز ميڊيا، منتخب ڪيل پليجنٽس ۽ ٿيمز جي مقدار ۽ سائٽ جا ڊيٽا بيس تيبلن جي سائز تي منحصر هوندو آهي.

## ZIP کان سائٽ درآمد ڪرڻ (Importing a site from a ZIP)

1. مقصد وارو WordPress سائيٽ **Tools > Export & Import** تي وڃو.
2. درآمد جو حصو کُھل ڪريو ۽ Export & Import ٽول پاران بنائيل ZIP فائل کي اپلوڊ ڪريو.
3. جيڪڏهن سائٽ کي نئين adres جي ضرورت آهي ته بدلايل URL داخل ڪريو، يا اصل URL برقرار رکڻ لاءِ فیلڊ کي خالي رهي ڏيو.
4. درآمد ختم ٿي وڃي تائين اپلوڊ ڪيل ZIP کي مڪمل ڪرڻ تي چونڊيو.
5. **Begin Import** تي کلڪ ڪريو.
6. انتظار ڪريو ته جيئن پنهنجي pending import ختم ٿي وڃي. جيڪڏهن توهان کي عمل کي كامل ٿيڻ کان اڳ رڪانڻ جي ضرورت آهي ته صرف **Cancel Import** استعمال ڪريو.
7. عام ترڪي يا ڪسٽمر رسائي ڏناءن کان سواءِ درآمد ڪيل سائٽ جو جائزو وٺو.

هڪ سائيٽ وارو WordPress installation هجڻ تي، ZIP کي درآمد ڪرڻ سان موجوده سائٽ جي جاءِ تي درآمد ڪيل سائٽ بدلجي ويندي آهي. شروع ڪرڻ کان اڳ مقصد وارو سائٽ جو پورو backup bana ليو، ۽ هڪ ئي وقت هڪ ئي سائٽ لاءِ متعدد import شروع ڪرڻ کان بچيو.

## محدوديتون ۽ مطابقت جي نوٽس (Limitations and compatibility notes)

اڪجهه بہت وڏي اپلوڊ ڪنڊري يا ميڊيا لائبراries مان وڏيون ZIP فائلون بڻجي سگهن ٿيون. وڏين سائٽن کي 엑سبوٽ ڪرڻ کان سواءِ پنهنجي PHP اپلوڊ ليمٹس، ايڪسيشن ليمٹس، ڊسڪ اسپيس، ميڪني (memory)، ۽ سرور تاؤ آؤٹ سيتين جي هيٺيان سمجهي وٺڻ گهرجي.

بہت وڏيون ميڊيا لائبراries کي ڪجهه وقت تيڪرائي (low-traffic) مينٽيننس ويندو دوران منتقل ڪرڻ جي ضرورت پئي ٿي.

تارگت WordPress installation ان سان مطابقت ورتو جيڪو Compatible WordPress، PHP، Ultimate Multisite، plugin، ۽ theme versions چالو ڪري سگهجي.

Single-site import تيار سائٽ جي جاءِ تي موجود سائٽ کي بدلائي ڇڏيندي آهي. اهو merge tool ناهي.

Multisite-to-single-site ۽ single-site-to-multisite منتقل ڪرڻ جو سپورٽ تبديل ماحول (target environment) ان plugins، themes، URLs، ۽ Ultimate Multisite جي ضرورتن وارن components کي چالو ڪري سگهي ته ڏنل سائٽ کي چالو ڪري سگهي ٿو.

ZIP کي پرائیوٽ رکيو رهيو. ان ۾ ڊيٽا بيس (database content)، اپلوڊ ڪيل فائلون، ۽ Export ڪيل سائٽ جي configuration details شامل ٿي سگهن ٿيون.

پورا نڪتا (older) network-level export workflows لاءِ [Site Export](/user-guide/administration/site-export) ڏسو.
