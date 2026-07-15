---
title: V1 کان مڪمل ڪرڻ
sidebar_position: 17
_i18n_hash: 1deefaf09206b741c89be6666fe2143c
---
# V1 کان ميو (Migrating from V1)

## Ultimate Multisite پنهنجي اصل 1.x ریلیز جي خاندان کان 2.x جي خاندان ۾ بدلجي ويو آهي. {#ultimate-multisite-has-switched-from-its-original-1x-family-of-releases-to-the-2x-family-of-releases}

Ultimate Multisite جو ورژن 2.0 ۽ ان کان وڌيڪ، ڪو مکمل ٻيهر لکڻ (complete rewrite) آهي، جس کا مطلب اهو آهي ته پرانا ورژن ۽ نئين ماڻهن تائه ٿي ٿي. ان ڪري، جڏهن توهان 1.x کان 2.x تي اپ گریڊ ڪري رهيا آهيو، توهان جي ڊيٽا کي هڪ اهڙي فارمٽ ۾ منتقل ڪرڻو پوندو ته جنه نيني ورژن سمجهي سگهن.

خوشڪاريءَ سان، Ultimate Multisite 2.0+ **هڪ مائجريٽر (migrator)** همراه آهي جيڪو ڪور (core) جو حصو آهي ۽ پرانے ورژن کان ڊيٽا کي موڪلڻ ۽ ان کي نئين فارمٽ ۾ تبديل ڪرڻ جي صلاحيت رکي ٿو. هي مائجريشن ورژن 2.0+ جي **Setup Wizard** دوران ٿيندي آهي.

هي سبق اسان ٻڌائي ٿو ته مائجريٽر ڪيئن ڪم ڪري ٿو، غلطي اچڻ صورت ۾ چهرو ڪهڙا قدم کڻڻ گهرجن، ۽ ان عمل دوران جنهن مسئلن جو حل ڪجي سگهي ٿو انهن کي ڪيئن ڳولي سگهون.

_**IMPORTANT: توهان 1.x کان 2.0 تي اپ گریڊ ڪرڻ شروع ڪرڻ کان اڳ اهو يقيني بڻايو ته توهان پنهنجي سائيٽ جي ڊيٽا جو backup بنايو آهي**_

## پهرين قدم (First steps) {#first-steps}

پهرين قدم ۾، توهان کي پليجن .zip فائل ڈاؤنلوڊ ڪرڻ ۽ پنهنجي نڪرائيندڙ (network admin dashboard) تي ورژن 2.0 نصب ڪرڻو پوندو.

جڏهن توهان [install and activate version 2.0](../getting-started/installing-ultimate-multisite.md) ڪندا، ته سسٽم خود ان کي محسوس ڪندو ته توهان جو Multisite پراني ورژن تي رن ٿا ۽ توهان کي پليجن جي صفحي جي اوپري طرف هيءَ mesaj ڏسڻ ۾ ايندو.

_**نوٽ:** جيڪڏهن توهان پنهنجي Multisite تي Ultimate Multisite 1.x نصب ڪيو آهي، ته توهان کي پليجن کي ان ورژن سان بدلڻ جو چوڻ ملندو آهي جيڪو توهان هن وقت ڈاؤنلوڊ ڪيو آهي. مهرباني ڪري، **Replace current with uploaded** تي کليڪ ڪريو._

<!-- Screenshot unavailable: Plugin page showing option to replace v1 with uploaded v2 version -->

نالي دي次 پيچ پر آپ کو پتہ چلائے گا کہ آپ نے ورژن 1.x سانگ ڪهڙا legacy add-ons انسٹال ڪيا آهن. اها توهان کي تعليمات ڏيندي ته جيڪو ورژن توهان استعمال ڪري رهيا آهيو اهو ورژن 2.0 سان مطابقت رکي ٿو يا هلڪو migration کان پوءِ توهان کي add-on جو اپ گریڊेड ورژن انسٹال ڪرڻ جي ضرورت آهي.

<!-- Screenshot unavailable: Message on the top of the plugins page about updating to v2.0, with list of add-ons that need updating -->

جڏهن توهان اڳتي وڌڻ لاءِ تيار ٿي جاون، ته توهان ان بٽون تي ڪلڪ ڪري سگهو ٿا جيڪو **Visit the Installer to finish the upgrade** چيو آهي.

<!-- Screenshot unavailable: Button saying Visit the Installer to finish the upgrade -->

پھر اهو توهان کي installation wizard جو صفحو ڏانهن رکو ويندو، جتي ڪجهه welcome messages هوندا آهن. توهان کي بس **Get Started** تي ڪلڪ ڪرڻ جي ضرورت آهي ته هيٺين پيچ تي وڃڻ لاءِ.

<!-- Screenshot unavailable: Setup Wizard welcoming page with Get Started button -->

**Get Started** تي ڪلڪ ڪرڻ کان پوءِ، اهو توهان کي Pre-install Checks_._ تي ريڊيڪٽ ڪندو. ان ۾ هو توهان جي System Information ۽ WordPress installation ڏيکاري ٿو ۽ توهان کي ٻڌائي ڇڏيندو ته هي **Ultimate Multisite's requirements** جو مطابق آهي يا نه.

<!-- Screenshot unavailable: Pre-install Checks page showing system requirements confirmation -->

نالي قدم اهو آهي ته توهان پنهنجو Ultimate Multisite license key داخل ڪريو ۽ plugin کي activate ڪريو. هي اسان کي يقيني بڻائي ڇڏيندو ته توهان جي سائيٽ تي سڀ features، add-ons شامل اهي، موجود هوندا.

<!-- Screenshot unavailable: License activation page with license key input and Agree and Activate button -->

پنهنجو key داخل ڪرڻ کان پوءِ، **Agree & Activate** تي ڪلڪ ڪريو.

License activation کان پوءِ، توهان اصل installation شروع ڪري سگهو ٿا ان نالي پيچ تي **Install** تي ڪلڪ ڪري. هي خود بخود Version 2.0 کي kaam ڪرڻ لاءِ ضروري files ۽ database bana ويندا آهن.

## ته، مائگريشن (Migration) {#now-the-migration}

مائگريٹر (migrator) وچ هڪ اندروني سيڪيورٽي فيچر آهي جنهن سان هو توهان جي سڄي ملٽي سائيٽ کي چيڪ ڪندو آهي ته هي ٺيڪ ٿيندي آهي ته توهان جو سڀئي Ultimate Multisite ڊيٽا ڪنهن به مسئلي کان وٺي مائگريٽ ڪري سگهجي ٿو. عمل شروع ڪرڻ لاءِ **Run Check** بٽڻ تي ڪلڪ ڪريو.

هي چيڪ چلائي کان پوءِ، توهان جي دو ئي رستو هوندا آهن: نتيجا يا ته هي **error سان** آهي يا **error کان سواءِ**.

### Error سان {#with-error}

جيڪڏهن توهان کي ڪا error جو ميغير ملي ٿو، ته توهان کي ان مسئلي کي ٺهيل ڪرڻ ۾ مدد لاءِ اسان جي سپورٽ ٽيم تائين رابطو ڪرڻو پوندو. ٽڪڙ (ticket) پيدا ڪندا وانگر وقت **error log** ضرور فراهم ڪريو. توهان لاگ ڈاؤن لوڈ ڪري سگهو ٿا يا ان لنک تي ڪلڪ ڪري سگهو ٿا جيڪو "contact our support team" لکيو آهي. اهو توهان جي صفحي جي ديرست طرف هڪ help widget کڻي ڇڏيندو، جتي توهان لاءِ پورا فارم پر ملي وڃن جن ۾ description تحت error logs شامل هوندا آهن.

_**چڱيءَ طرح، چونکہ اسان جي سسٽم کي ڪا error ملي آهي، تنهنجو 2.0 ورژن تي مائگريٽ ڪرڻ کان توهان گهرجي نه ٿا سگهو. ان وقت توهان 1.x ورژن تي واپس جا سکدا آهيو ته جيئن توهان جي نڪر (network) جو عمل ختم ٿي سگهي، هيٺ ڏنل error کي ٺهيل ڪرڻ تائين.**_

### Error کان سواءِ {#without-error}

جيڪڏهن سسٽم کي ڪا error نه ملي ٿي، ته توهان کي هڪ success message ۽ ان جي ذريعي **Migrate** بٽ جو ڏنل طرف ڏسيلو ڏسڻ ۾ ملندو، جيڪو توهان کي مائگريشن جو عمل جاري ڪرڻ لاءِ اجازت ڏيندو. هن صفحي تي، توهان کي پنهنجي database جو backup ڪيو رکڻ جو احساس دلائي ڇڏينداسين کان اڳ، جيڪو اسان سخت سفارش ڪنداسين. جيڪڏهن توهان وٽ پرانا backup موجود آهي ته **Migrate** بٽ تي ڪلڪ ڪريو.

هي بس اتني ئي گهرجي!

تجي توهان يا ویزارد سیٹ اپ کي چڱيءَ طرح چلائي سگهو ته پنهنجي لوگو ۽ ٻين گهرن تي ڪجهه تبديل ڪرڻ لاءِ، يا پنهنجي Ultimate Multisite version 2.0 جي مينيٽ ۽ ان جي نئين انٽر فيس کي ڏسڻ شروع ڪريو. وڃو ۽ مزو ڪريو.
