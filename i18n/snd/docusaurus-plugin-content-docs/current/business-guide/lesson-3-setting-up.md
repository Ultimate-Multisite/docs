---
title: 'سبق 3: پنهنجي نيٽ ورڪ کي ترتيب ڏيڻ'
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# سبق 3: پنهنجو نيٽ ورڪ سيٽ ڪرڻ {#lesson-3-setting-up-your-network}

هاڻي ٺاهڻ جو وقت آهي. هن سبق ۾ توهان Ultimate Multisite انسٽال ڪندا ۽ FitSite نيٽ ورڪ جو بنياد ترتيب ڏيندا. هتي هر فيصلو فٽنيس واري خاص شعبي کي ذهن ۾ رکي ڪيو ويو آهي.

## اسان ڪٿي ڇڏي آيا هئاسين {#where-we-left-off}

اسان فٽنيس اسٽوڊيوز کي پنهنجي خاص شعبي طور چونڊيو ۽ موقعي جي تصديق ڪئي. هاڻي اسان ان خيال کي هڪ ڪم ڪندڙ پليٽ فارم ۾ بدلائينداسين.

## پنهنجي هوسٽنگ چونڊڻ {#choosing-your-hosting}

هڪ خاص شعبي واري پليٽ فارم لاءِ توهان جي هوسٽنگ جو انتخاب هڪ واحد ويب سائيٽ جي ڀيٽ ۾ وڌيڪ اهم آهي. توهان هڪ سائيٽ هوسٽ نه پيا ڪريو -- توهان هڪ اهڙو نيٽ ورڪ هوسٽ پيا ڪريو جيڪو وڌي درجنين يا سَوَن سائيٽن تائين پهچندو.

### ڇا ڳولڻو آهي {#what-to-look-for}

- **WordPress Multisite سپورٽ**: سڀ هوسٽ Multisite کي چڱيءَ طرح نٿا سنڀالين
- **Wildcard SSL**: سب ڊومين تي ٻڌل نيٽ ورڪن لاءِ ضروري
- **وڌائي سگهجندڙ وسيلا**: توهان کي مائيگريٽ ڪرڻ کانسواءِ وڌڻ لاءِ گنجائش گهرجي
- **Ultimate Multisite انٽيگريشن**: خودڪار ڊومين ميپنگ ۽ SSL نمايان آپريشنل محنت بچائي ٿو

### سفارش ڪيل طريقو {#recommended-approach}

[مطابقت رکندڙ فراهم ڪندڙن](/user-guide/host-integrations/closte) جي فهرست مان هوسٽ چونڊيو. اهي Ultimate Multisite سان آزمائيا ويا آهن ۽ ڊومين ميپنگ ۽ SSL آٽوميشن لاءِ توهان کي گهربل انٽيگريشن مهيا ڪن ٿا.

FitSite لاءِ، اسان سب ڊومين ترتيب استعمال ڪنداسين. ان جو مطلب آهي ته ڪسٽمر سائيٽون شروع ۾ `studioname.fitsite.com` طور ظاهر ٿينديون، ان کان اڳ جو اهي اختياري طور پنهنجي ڊومين کي ميپ ڪن.

## WordPress Multisite انسٽال ڪرڻ {#installing-wordpress-multisite}

جيڪڏهن توهان وٽ اڳ ۾ WordPress Multisite انسٽاليشن ناهي:

1. پنهنجي هوسٽنگ فراهم ڪندڙ تي WordPress انسٽال ڪريو
2. [WordPress Multisite ڪيئن انسٽال ڪجي](/user-guide/getting-started/how-to-install-wordpress-multisite) گائيڊ تي عمل ڪريو
3. جڏهن پڇيو وڃي ته **سب ڊومين** ترتيب چونڊيو

:::tip Why Subdomains?
Subdomains give each customer site its own distinct address (`studio.fitsite.com`) rather than a path (`fitsite.com/studio`). This is more professional for your customers and avoids permalink conflicts. See [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) for a detailed comparison.
:::

## Ultimate Multisite انسٽال ڪرڻ {#installing-ultimate-multisite}

[Ultimate Multisite انسٽال ڪرڻ](/user-guide/getting-started/installing-ultimate-multisite) گائيڊ تي عمل ڪريو ته جيئن:

1. پلاگ ان کي اپلوڊ ڪري سڄي نيٽ ورڪ ۾ فعال ڪريو
2. [سيٽ اپ وزرڊ](/user-guide/getting-started/multisite-setup-wizard) هلائو

سيٽ اپ وزرڊ دوران، FitSite جي خاص شعبي کي ذهن ۾ رکو:

- **ڪرنسي**: ان ڪرنسي تي سيٽ ڪريو جيڪا توهان جا فٽنيس اسٽوڊيو ڪسٽمر استعمال ڪن ٿا
- **ڪمپني جو نالو**: "FitSite" (يا توهان جو چونڊيل برانڊ نالو)
- **ڪمپني جو لوگو**: پنهنجو برانڊ لوگو اپلوڊ ڪريو -- اهو انوائسن ۽ اي ميلن ۾ ظاهر ٿيندو

## فٽنيس واري خاص شعبي لاءِ ترتيب ڏيڻ {#configuring-for-the-fitness-niche}

Ultimate Multisite انسٽال ٿيڻ کان پوءِ، اهي خاص شعبي سان لاڳاپيل ترتيب جا انتخاب ڪريو:

### عام سيٽنگون {#general-settings}

**Ultimate Multisite > Settings** ڏانهن وڃو ۽ ترتيب ڏيو:

- **سائيٽ جو نالو**: FitSite
- **ڊفالٽ ڪردار**: ايڊمنسٽريٽر -- فٽنيس اسٽوڊيو مالڪن کي پنهنجي سائيٽ جي مواد تي مڪمل ڪنٽرول گهرجي
- **رجسٽريشن**: يوزر رجسٽريشن فعال ڪريو ته جيئن اسٽوڊيو مالڪ پاڻ سائن اپ ڪري سگهن

### اي ميل ترتيب {#email-configuration}

توهان جي سسٽم اي ميلن کي توهان جي خاص شعبي جي ٻولي ڳالهائڻ گهرجي. **Ultimate Multisite > Settings > Emails** ڏانهن وڃو ۽ ڪسٽمائيز ڪريو:

- عام "your new site" ٻولي کي فٽنيس سان لاڳاپيل پيغام سان مٽايو
- ڀليڪار واري موضوع جو مثال: "توهان جي فٽنيس اسٽوڊيو ويب سائيٽ تيار آهي"
- ڀليڪار واري متن جو مثال: انهن جي اسٽوڊيو، ڪلاسن، ۽ انهن جي فٽنيس سائيٽ سان شروعات ڪرڻ جو حوالو ڏيو

اسان سبق 8 (ڪسٽمر آن بورڊنگ) ۾ انهن کي وڌيڪ بهتر ڪنداسين، پر هاڻي لهجو مقرر ڪرڻ سان يقيني ٿيندو ته شروعاتي ٽيسٽ سائن اپس به خاص شعبي سان لاڳاپيل محسوس ٿين.

### ڊومين ترتيب {#domain-configuration}

جيڪڏهن مطابقت رکندڙ هوسٽنگ فراهم ڪندڙ استعمال ڪري رهيا آهيو، ته هاڻي ڊومين ميپنگ ترتيب ڏيو:

1. **Ultimate Multisite > Settings > Domain Mapping** ڏانهن وڃو
2. پنهنجي مخصوص هوسٽ لاءِ انٽيگريشن گائيڊ تي عمل ڪريو
3. ٽيسٽ ڪريو ته نين سب سائيٽن کي SSL پاڻمرادو ملي ٿو

اهو يقيني بڻائي ٿو ته جڏهن اسان ايندڙ سبق ۾ ٽيمپليٽس ۽ ٽيسٽ سائيٽون ٺاهڻ شروع ڪنداسين، ته سڀ ڪجهه شروع کان آخر تائين ڪم ڪندو.

## FitSite نيٽ ورڪ هن وقت تائين {#the-fitsite-network-so-far}

هن سبق جي آخر ۾، توهان وٽ هي هوندو:

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## هن سبق ۾ اسان ڇا ٺاهيو {#what-we-built-this-lesson}

- سب ڊومين موڊ ۾ **هڪ ڪم ڪندڙ WordPress Multisite** انسٽاليشن
- FitSite برانڊنگ سان **Ultimate Multisite انسٽال ٿيل** ۽ ترتيب ڏنل
- وڌندڙ نيٽ ورڪ لاءِ **هوسٽنگ ۽ SSL** سيٽ ڪيل
- توهان جي هوسٽنگ فراهم ڪندڙ لاءِ **ڊومين ميپنگ** ترتيب ڏنل
- پهرين ڏينهن کان **خاص شعبي سان لاڳاپيل اي ميل لهجو** قائم ڪيل

---

**اڳيون:** [سبق 4: خاص شعبي جا ٽيمپليٽس ٺاهڻ](lesson-4-templates) -- اسان اهڙا سائيٽ ٽيمپليٽس ٺاهينداسين جيڪي فٽنيس اسٽوڊيو مالڪ واقعي استعمال ڪرڻ چاهيندا.
