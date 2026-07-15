---
title: سائٽ ٽيپليٽن ۾ آٽو سرچ ۽ ريبليس
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# साइट टेम्प्लेटमा آٹو سرچ ۽ ريپليس (v2)

_**هي ৱائبرل پيئر (WP UItimo) جو ورژن 2.x گهرجي.**_

Ultimate Multisite جي سڀ کان طاقتور خصوصيتن مان هڪ آهي ته توهان ريجيسٽريشن فارم ۾ ڪا به متن، رنگ ۽ فیلڊز شامل ڪري سگهو ٿا. جڏهن اسان ان معلومات کي حاصل ڪري وٺون ٿا، تڏهن اسان ان جو استعمال ڪري سگهون ٿا ته منتخب ڪيل ڪجهه حصن جي سائيٽ टेम्प्लेट ۾ مواد کي پنهنجي قيمت سان پري پورو ڪريو (pre-populate). پوءِ جڏهن نئين سائيٽ کي پبلش ڪيو ويندو، Ultimate Multisite ان هيلينج placeholders کي ريجيسٽريشن دوران داخل ڪيل اصل معلومات سان بدل ڏيندو.

مثال طور، توهان پنهنجي टेम्प्लेट سائيٽن ۾ placeholders استعمال ڪري سگهو ٿا. placeholders کي ٻئي ڪلور برڪس (double curly braces) سان گھرو بند ڪرڻ گهرجي - {{placeholder_name}}.

پھر، توهان صرف ان معلومات کي حاصل ڪرڻ لاءِ هڪ مطابق ريجيسٽريشن فیلڊ شامل ڪري سگهو ٿا.

پھر توهان جو ڪارئيري ريجيسٽريشن دوران ان فیلڊ ۾ پورو ڪري سگهندو.

پھر Ultimate Multisite خود بخود placeholders کي ڪارئيري طرف کان مليايل معلومات سان بدل ڏيندو.

## **"placeholder سان پوري टेम्प्लेट" جي مسئلي جو حل** {#solving-the-template-full-of-placeholders-problem}

هي سڀ ريت آهي، پر اسان هڪ بدصورت مسئلي ۾ فاسي ٿين ٿا: اهي سائيٽ टेम्प्लेट جيڪي हामرا ڪارئيري طرف کان ملي سگهن ٿا - انهن ۾ بدصورت placeholders پوري آهن جيڪي گهڻو ٻڌائين نه ٿا.

ان جو حل ڪرڻ لاءِ، اسان placeholders لاءِ ڊيڪشن (fake values) مقرر ڪرڻ جو خيار ڏئي ٿو، ۽ اسان ان قيمتن کي टेम्प्लेट سائيٽن تي سرچ ۽ ريپليس ڪرڻ لاءِ استعمال ڪنداسين جڏهن توهان جا ڪارئيري انهن تي وڃڻ وارو رهندا.

توهان **Ultimate Multisite > Settings > Sites** تي وڃي، Site Template Options علق ۾ سکرول ڪريو، ۽ پوءِ **Edit Placeholders** ڊي link تي ڪلڪ ڪري سگهو ٿا ته توهان placeholders جي مواد جي ايڊيتر تک رسائي سگهو ٿا، جتي توهان placeholders ۽ انهن جي متعلق مواد شامل ڪري سگهو ٿا.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
