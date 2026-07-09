---
title: سنڌي فائل غلطي
sidebar_position: 12
_i18n_hash: 53d988d644c244d20f04444350bd5d3c
---
# Sunrise File انسٹال ڪرڻ ۾ غلطي {#error-installing-the-sunrise-file}

sunrise.php فائل هڪ خاص فائل آهي جيڪا WordPress خود کي شروع (bootstrap) ڪندي تلاش ڪري ٿي. WordPress کي sunrise.php فائل کي محسوس ڪرڻ لاءِ، اهو **wp-content فولڊر** اندر موجود هجڻ گهرجي.

جڏهن توهان Ultimate Multisite کي فعال ڪريو ۽ ان طرح جي set up wizard کان گذرو جيڪا اسان Screenshot ۾ ڏٺي آهي، تڏهن Ultimate Multisite سيمت جو sunrise.php فائل کي wp-content فولڊر ۾ ڪاپي ڪرڻ جي ڪوشش ڪري ٿو.

<!-- Screenshot unavailable: Setup wizard page showing sunrise.php installation step -->

धेरै جليءَن، اسان فائل کي ڪاپي ڪرڻ ۾ ڪامياب ٿي ويندي آهي ۽ سڀ شيءِ کام ڪندا آهن. پر جيڪڏهن ڪا شيءِ صحيح طرح set up نه هجي (جيسڪا فولڊر جا permissions مثال طور تي)، ته توهان هڪ صورتحال ۾ اچي سگهو ٿا جتي Ultimate Multisite فائل کي ڪاپي ڪرڻ ۾ نٿو گهرجي.

اگر توهان Ultimo جو غلطي جو پیغام پڙهيو، ته توهان ڏسڻ چڪو ٿا ته انٽرنيٽ تي exactly اهو ئي ٿيو: **Sunrise copy failed**.

<!-- Screenshot unavailable: Error message showing Sunrise copy failed -->

ان کي ٺهيل ڪرڻ لاءِ، توهان سڌو ڪري wp-ultimo plugin فولڊر اندر موجود sunrise.php فائل کي ڪاپي ڪريو ۽ ان کي پنهنجي wp-content فولڊر ۾ پیسٽ ڪريو. اهو ڪيو کان پوءِ، wizard جو صفحو ريلوڊ ڪريو ۽ checks پاس ٿيندا آهن.

<!-- Screenshot unavailable: File manager showing sunrise.php inside wp-ultimo plugin folder --> ڪا به صورت، ان وقت توهان کي پنهنجي فولڊر جي permissions جو عام هيٺ ڏسڻ گهرجي ته جيئن مستقبل ۾ مسئلا کان بچي سگهو (صرف Ultimate Multisite سان نه پر ٻين plugins ۽ themes سان به).

WordPress جو **Health Check tool** جيڪو WordPress کا حصو آهي (توهان ان کي پنهنجي main site **admin panel > Tools > Health Check** جي ذريعي وصول ڪري سگهو ٿا)، اهو توهان کي ٻڌائي سگهي ٿو ته هلندڙ فولڊر جا permissions ڪهڙين قيمتن تي set آهن جيڪي WordPress سان مسئلا پيدا ڪري سگهن.

<!-- اسکرین شاٹ موجود ناهي: ورڈپریس ہیلتھ چیک ٹول جو فولڈر پرمیشن کی صورتحال دکھا رہا آهي -->
