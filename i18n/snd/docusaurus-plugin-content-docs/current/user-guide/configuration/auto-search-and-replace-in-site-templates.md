---
title: سائٽ ٽيملٽن ۾ آٽو سرچ ۽ ريپليس
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# साइट टेम्प्लेट्स ۾ آٽو سرچ ۽ ريپليس (v2)

_**هي تعلیمی مواد WP UItimo جو ورژن 2.x گهرجي.**_

Ultimate Multisite جي سڀ کان طاقتور خصوصيتن مان هڪ آهي ته توهان ريجيسٽريشن فارم ۾ ڪنهن به متن، رنگ ۽ سلڪٽ ڪرڻ جا فيلڊز شامل ڪري سگهو ٿا. جڏهن اسان ان ڊيٽا کي حاصل ڪري وٺون ٿا، تڏهن اسان ان جو استعمال ڪري سگهون ٿا ته منتخب ڪيل ڪنهن حصي جي سائيٽ टेम्प्लेट ۾ مواد کي پنهنجي قيمت سان پري-پوبليش (pre-populate) ڪريو. پوءِ جڏهن نئين سائيٽ کي پبلش ڪيو ويندو، Ultimate Multisite ان هدايتن کي ريجيسٽريشن دوران داخل ڪيل اصل معلومات سان بدل ڏيندو.

مثال طور، توهان curs your template sites ۾ placeholders جو استعمال ڪري سگهو ٿا. Placeholders کي ٻئي ڪلور برڪڙن (double curly braces) سان گھرو بند ڪرڻ گهرجي - {{placeholder_name}}.

پھر، توهان صرف ان ڊيٽا کي حاصل ڪرڻ لاءِ هڪ مطابقت وارو ريجيسٽريشن فيلڊ شامل ڪري سگهو ٿا.

پھر توهان جو ڪسٽمر ريجيسٽريشن دوران ان فيلڊ ۾ پورو ڪري سگهندو.

پھر Ultimate Multisite خود هي هدايتن کي ڪسٽمر طرفان فراهم ڪيل ڊيٽا سان خود بدل ڏيندو.

## **"placeholder مان بھراو ٿيل टेम्प्लेट" جي مسئلي جو حل** {#solving-the-template-full-of-placeholders-problem}

هي سڀ ريت آهي، پر اسان هڪ بدصورت مسئلي ۾ فاسي ٿين ٿا: اهي موجوده سائيٽ टेम्प्लेट्स - جنهن کي हामرا ڪسٽمرز اچي سگهن ٿا - ان ۾ بدصورت placeholders سان پورو آهن جيڪي گهڻو ٻڌائين نه ٿا.

ان جو حل ڪرڻ لاءِ، اسان توهان کي placeholders لاءِ ڦلڪل (fake) قيمت رکڻ جو چونڊ ڏئيون ٿا، ۽ اسان انهن قيمتن جو استعمال ڪندي سائيٽ टेम्प्लेट्स تي ان جي محتوا کي سرچ ڪري بدلائينداسين جڏهن توهان جا ڪسٽمرز اچي رهيا هجن.

توهان **Ultimate Multisite > Settings > Sites** تي وڃي، Site Template Options علامات ڏانهن سکرول ڪريو، ۽ پوءِ **Edit Placeholders** ڊي link تي ڪلڪ ڪري سگهو ٿا ته توهان placeholders جي محتوا جو ايڊيتر ۾ پهچ سگهو ٿا، جتي توهان placeholders ۽ انهن جي متعلق مواد کي شامل ڪري سگهو ٿا.

![Site Template Options area in the Sites settings page](/img/config/settings-sites-templates-section.png)

![Template placeholders editor entry point](/img/config/settings-sites-templates-section.png)
