---
title: د ویښتان او واردات
sidebar_position: 12
_i18n_hash: 6536f9ebee269a8553a57733e4cb03fc
---
# داتا اخراج او واردات {#export--import}

Ultimate Multisite 2.9.0 ۾ **Tools > Export & Import** جي تحت هڪ واحد سائيٽ جو **Export & Import** اوزار شامل ڪيو آهي. ان جو استعمال تڏهن ڪريو ته جڏهن توهان کي هڪ WordPress سائيٽ کي ZIP فائل جي صورت ۾ پيءَڪ ڪرڻ، ان ZIP کي بحال ڪرڻ يا هڪ سائيٽ کي متناسب Ultimate Multisite ۽ single-site WordPress installation بابت منتقل ڪرڻ گهرجي.

## ضرورتن وارو اجازت ناما {#required-permissions}

توهان ان سائيٽ تي **Tools** منيو تک رسائي هڪ اديثار (administrator) جي طور تي لاگ ان ڪرڻ گهرجي جيڪو Export يا Import ٿي رهيا سائيٽ تي WordPress جا **Tools** منيو تک رسائي رکي ٿو. هڪ multisite network ۾، جڏهن توهان network-level Ultimate Multisite tools کان subsites export يا import ڪري رهيا هjande ته network administrator account استعمال ڪريو.

Export ZIP downloads کي هڪ authenticatated download endpoint جي ذريعي ڏنل ڪيو ويندو آهي، تنهن ڪري اديثار سيسشن کي فعال رکجو تائين جڏهن download ختم ٿي وڃي ۽ جنريٽ ٿيل download URLs کي پبلڪ طور تي شيئر نه ڪريو.

## هڪ سائيٽ جو ZIP ۾ اخراج ڪرڻ {#exporting-a-site-to-a-zip}

1. ان سائيٽ جي WordPress admin ۾ جيڪا توهان نقل ڪرڻ چاهيو، **Tools > Export & Import** ڏانهن وڃو.
2. export area کي کُھل ڪري ۽ ان سائيٽ کي چونڊيو جنهن کي توهان پيءَڪ ڪرڻ چاهيو.
3. اهڙي optional content کي چونڊيو جيڪو شامل ڪرڻ چاهيو، جهڙوڪ uploads، plugins، ۽ themes، جڏهن اهي خيار موجود هوندا آهن.
4. export شروع ڪريو ۽ عمل کي ختم ٿيڻ جو انتظار ڪريو. وڏن سائيٽن کي ZIP تيار ٿيڻ کان اڳ background ۾ ختم ڪرڻ جي ضرورت پئي ٿي.
5. exports list کان جتي ZIP تيار ٿي وڃي، ان کي download ڪريو.

ZIP کي محفوظ جاءِ تي رکجو. اهو سائيٽ جا مواد، settings، media files، ۽ چونڊيل code assets شامل ڪري سگهي ٿو.

## اخراج ۾ شموليت {#what-the-export-includes}

Export ZIP ۾ هي شيون شامل ٿي سگهن ٿيون:

- چونڊيل سائيٽ جو database content ۽ configuration.
- جڏهن uploads شامل ڪيا وڃن ته upload ڪيل media files.
- جڏهن اهي خيار چونڊيا ويندا آهن ته plugins ۽ themes.
- Import metadata جيڪو Export & Import tool طرفان target installation تي سائيٽ کي পুনرو بنائڻ لاءِ استعمال ٿيو آهي.

د دقیق ZIP اندازه د 미디어 مقدار، انتخاب شوي پلاگینونو او تھیمو او د سایت د پایډيټو جدولहरूको اندازه پورې اړه لري.

## د یو سایت د ZIP څخه راغلاست (Importing a site from a ZIP) {#importing-a-site-from-a-zip}

۱. په هدف WordPress سایت کې **Tools > Export & Import** ته لاړ شئ.
۲. راغلاست (import area) खोله کړئ او هغه ZIP فایل چې Export & Import инструменти جوړ کړی دی، آپلوډ کړئ.
۳. که سایت باید یو نوی پټendereco (URL) و کار کړي، نو یو بدل شوی URL ورسره کړئ، یا اصلي URL ساتل لپاره поле خالی لرئ.
۴. انتخاب وکړئ چې راغلاست پای ته رسېدو وروسته آپلوډ شوی ZIP فایل پاک کړئ او نه.
۵. **Begin Import** باندې کلیک وکړئ.
۶. په انتظار کې یې راغلاست تعقیب کړئ تر هغه وخته چې پوره نشوي. که تاسو غواړئ پروسه پای ته ورسره کار بند کړئ، نو یوازې **Cancel Import** प्रयोग کړئ.
۷. د معمول ترافیک یا کلاینټو رامنځته کولو اجازه ورکولو وروسته راغلاست پوښتنه وکړئ (Review).

په یو واحد سایت کې WordPress کې، ZIP فایل له واردول کیدو سره اوسني سایت د واردول شوي سایت په توګه بدل کیږي. پخوانی سایتको مکمل بیک اپ (backup) جوړ کړئ преди چې تاسو شروع کړئ، او همzeitig په یوه سایت لپاره ډېر راغلاستونه شروع کولو څخه ډډه وکړئ.

## محدودیتونه او همسازش کے یادونه {#limitations-and-compatibility-notes}

د ډېر لوی فایلونه یا ميديا لایبریری могат چې لوی ZIP فایلونه جوړول کړي. د لویو سایتونو د اکسپورت یا ایمپورټ کولو وروسته، پنهوندي چې د PHP 업로드 محدودیتونه (upload limits)، اجرا محدودیتونه (execution limits)، د ډیسک فضا (disk space)، حافظه (memory) او سرور تاؤټاوت تنظیمات کی څنګه دي.

د لویو ميديا لایبریری لپاره ممکن اړتیا وي چې په یو کم ترافیکي مرستې وخت کې یې منتقل کړل شي.

مخولی WordPress باید د متناسب WordPress، PHP، Ultimate Multisite، plugin او theme برخو کارکړې وي.

یو یوه سایت (single-site) ایمپورټ هدف شوي سایت بدلوي. دا یو ترکیب (merge tool) نه دی.

Multisite-to-single-site او single-site-to-multisite حرکتونه فقط هغه وخت پ suport کیږي کله چې هدف محیط (target environment) د اکسپورت شوی سایتका plugin، theme، URL او اړین Ultimate Multisite برخو کارول могат.

ZIP فایل تګوي ته راټی کړئ (private). دا ممکن د پایگاهي معلومات، 업로드 شوي فایلونه او د اکسپورت شوي سایت څخه تنظیمات شامل وي.

د پخوانیو شبکې-مستوى اکسپورت ورک فلو لپاره، وګورئ [Site Export](/user-guide/administration/site-export).
