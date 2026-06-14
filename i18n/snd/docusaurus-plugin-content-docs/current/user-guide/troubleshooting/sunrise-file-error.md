---
title: سنڌ جي فائل غلطي
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise File انسٹال ڪرڻ ۾ غلطي

sunrise.php فائل هڪ خاص فائل آهي جيڪا WordPress خود کي شروع (bootstrap) ڪندي تلاش ڪري ٿي. WordPress کي sunrise.php فائل کي محسوس ڪرڻ لاءِ، اهو **wp-content فولڊر** اندر موجود هجڻ گهرجي.

جڏهن توهان Ultimate Multisite کي فعال ڪريو ۽ ان طرح جي set up wizard کان گذرو جيڪا اسان Screenshot ۾ ڏٺي آهي، تڏهن Ultimate Multisite سيمر sunrise.php فائل کي wp-content فولڊر ۾ ڪاپي ڪرڻ جو ڪوشش ڪري ٿو.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

धेरै جليءَن وقت، اسان فائل کي ڪاميابن سان ڪاپي ڪري سگهون ٿا ۽ سڀ شيءِ کام ڪندا آهن. پر جيڪڏهن ڪجهه صحيح طرح set up نه هجي (جيسڪا فولڊر جي permissions مثال طور تي)، ته توهان هڪ صورتحال ۾ اچي سگهو ٿا جتي Ultimate Multisite فائل کي ڪاپي ڪرڻ ۾ نٿو گهرجي.

اگر توهان Ultimo جو غلطي جو پیغام پڙهيو، ته توهان ڏسڻ چڪو ٿا ته هيئن ئي هن جي ڪري ٿيو آهي: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ان کي ٺهيل ڪرڻ لاءِ، توهان سڌو طرح wp-ultimo plugin فولڊر اندر موجود sunrise.php فائل کي ڪاپي ڪري پنهنجي wp-content فولڊر ۾ پیسٽ ڪري سگهو ٿا. اهو ڪيو پوهڻ بعد wizard جو صفحو reload ڪريو ۽ checks پاس ٿيندا آهن.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ڪنهن به صورت ۾، هي توهان جي مستقبل ۾ مسئلا کان بچڻ لاءِ پنهنجي فولڊر جي permissions کي عام طور تي چیک ڪرڻ جو سبب بڻجي سگهي ٿو (صرف Ultimate Multisite سان نه پر ٻين plugins ۽ themes سان به).

WordPress کا هڪ حصو **Health Check tool** آهي (توهان ان تک رسائي ڪري سگهو ٿا پنهنجي main site **admin panel > Tools > Health Check** جي ذريعي)، جيڪو توهان کي ٻڌائي سگهي ٿو ته هلندڙ فولڊر جي permissions ڪجهه قيمت تي set هجن جن جا WordPress سان مسئلا پيدا ٿي سگهن.

<!-- اسکرین شاٹ دستیاب نہیں ہے: ورپریس ہیلتھ چیک ٹول فولڈر پرمیشن کی حیثیت دکھا رہا ہے -->
