---
title: ٽيئرٿ پارٽي موڊ مائجريشن
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# تھرڈ پارٹی موڈ مائگریشن

Superdav AI Agent v1.12.0 نے تھرڈ پارٹی صلاحیتوں کو سنبھالنے کے طریقے میں تبدیلی لائی ہے۔ **تھرڈ پارٹی موڈ اب خود بخود (auto) پر سیٹ ہوتا ہے**، جس سے WordPress 7.0+ پر دستی ترتیب کے بغیر نیٹو WordPress Abilities API انٹیگریشن ممکن ہو جاتی ہے۔

## کیا بدلا؟

### v1.12.0 سے پہلے

تھرڈ پارٹی صلاحیتوں کے لیے دستی ترتیب کی ضرورت تھی:

- آپ کو "تھرڈ پارٹی موڈ" کو واضح طور پر فعال کرنا پڑتا تھا
- صلاحیتیں ایک کسٹم رجسٹریاں سے لوڈ ہوتی تھیں
- WordPress Abilities API کے ساتھ انٹیگریشن اختیاری تھی
- پرانا موڈ ڈیفالٹ تھا۔

### v1.12.0 کے بعد

تھرڈ پارٹی صلاحیتیں خود بخود کام کرتی ہیں:

- تھرڈ پارٹی موڈ "auto" پر ڈیفالٹ ہوتا ہے
- صلاحیتیں WordPress Abilities API کے ساتھ نیٹو طریقے سے انٹیگریٹ ہوتی ہیں
- WordPress 7.0+ پر کسی دستی ترتیب کی ضرورت نہیں
- پرانے WordPress ورژن کے لیے پرانا موڈ اب بھی دستیاب ہے

## کون متاثر ہوگا؟

### نئے انسٹالیشنز (WordPress 7.0+)

**کوئی کارروائی درکار نہیں۔** تھرڈ پارٹی موڈ خود بخود "auto" پر سیٹ ہو جاتا ہے، اور صلاحیتیں بغیر کسی اضافی کام کے کام کرنا شروع ہو جاتی ہیں۔

### موجودہ انسٹالیشنز

**آپ کی سیٹنگز محفوظ رہتی ہیں۔** اگر آپ استعمال کر رہے تھے:

- **پرانا موڈ (Legacy mode)**: آپ پرانے موڈ میں ہی رہیں گے (کوئی تبدیلی نہیں)
- **دستی تھرڈ پارٹی موڈ**: آپ دستی موڈ میں ہی رہیں گے (کوئی تبدیلی نہیں)
- **آٹو موڈ**: آپ آٹو موڈ کے ساتھ جاری رکھیں گے (کوئی تبدیلی نہیں)

### WordPress 7.0 سے پہلے کے ورژن

**پرانا موڈ اب بھی دستیاب ہے۔** اگر آپ WordPress 6.x یا اس سے پہلے استعمال کر رہے ہیں:

- تھرڈ پارٹی موڈ "legacy" پر ڈیفالٹ ہوتا ہے
- آپ اپنی مرضی کے مطابق تھرڈ پارٹی موڈ کو دستی طور پر فعال کر سکتے ہیں
- نیٹو Abilities API استعمال کرنے کے لیے WordPress 7.0+ میں اپ گریڈ کریں۔

## موڈز کو سمجھنا

### آٹو موڈ (نیا ڈیفالٹ)

**آٹو موڈ** نیٹو WordPress Abilities API انٹیگریشن کا استعمال کرتا ہے:

- صلاحیتوں کو WordPress hooks کے ذریعے رجسٹر کیا جاتا ہے
- WordPress 7.0+ Abilities API کے ساتھ مکمل مطابقت
- تھرڈ پارٹی صلاحیتوں کی خودکار دریافت (Automatic discovery)
- کسی دستی ترتیب کی ضرورت نہیں

**کبڙي ڪهڙي وقت استعمال ڪجي**: WordPress 7.0+ سان، تيرڊ پارتي صلاحيتن (third-party abilities) سان

### ميانويل موڊ (Manual Mode)

**ميانويل موڊ** ۾ واضح ترتیب (explicit configuration) جي ضرورت آهي:

- توهان بيان ڪريو ٿا ته ڪهڙيون تيرڊ پارتي صلاحيتون لادڻ گهرجن
- تجربو ڪرڻ يا خاص صلاحيتون لادڻ لاءِ هي بهتر آهي
- کانفيجريشن فائلن کي هوڙڻ (editing configuration files) جي ضرورت آهي
- وڌيڪ ڪنٽرول ملندو آهي، پر وڌيڪ ترتیب (setup) پڻ گهرجي

**کبڙي وقت استعمال ڪجي**: تجربو ڪرڻ، خاص صلاحيتون لادڻ، يا مخصوص ترتيبي لاءِ

### ليگيسي موڊ (Legacy Mode)

**ليگيسي موڊ** پراني تيرڊ پارتي صلاحيتن جي نظام جو استعمال ڪري ٿو:

- خود ساختہ صلاحيت ريجسٽري (Custom ability registry) (WordPress Abilities API نه آهي)
- پرانے WordPress ايڪشنن سان مطابقت رکڻ (Backward compatible with older WordPress versions)
- واري طرف WordPress سان ڪنهن به ناتيويگري (No native WordPress integration)
- پرانا ٿي چڪو آهي پر اب به سپورٽ موجود آهي

**کبڙي وقت استعمال ڪجي**: WordPress 6.x يا ان کان پهرين، يا جڏهن توهان کي ليگيسي مطابقت جي ضرورت هجي

## پنهنجي موجوده موڊ جو جائزو وٺڻ

### اڊمن پینل (Admin Panel) ذريعي

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** جي ترتيبي ڏسو
3. توهان کي توهان جي موجوده موڊ ۽ ان کي بدلڻ جا خيار ڏسيلون هوندا

### ڪوڊ (Code) ذريعي

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## پنهنجي موڊ کي بدلائڻ

### آٽو موڊ (Auto Mode) تي منتقل ٿيو

جيڪڏهن توهان WordPress 7.0+ تي آهيو ۽ آٽو موڊ استعمال ڪرڻ چاهيو ٿا:

1. **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** ڏسو
3. **Auto (WordPress Abilities API)** چونڊيو
4. **Save** تي ڪلڪ ڪريو

Superdav AI Agent خود بخود تيرڊ پارتي صلاحيتون موڪل ۽ ريجيسٽر ڪري ڇڏيندي.

### ميانويل موڊ (Manual Mode) تي منتقل ٿيو

جيڪڏهن توهان چاهيو ته هي کنٽرول ڪيو ته ڪهڙيون صلاحيتون لادڻ گهرجن:

1. **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** ڏسو
3. **Manual** چونڊيو
4. **Save** تي ڪلڪ ڪريو
5. توهان جي کانفيجريشن فائل هوڙو (edit) ته بيان ڪريو ته ڪهڙيون صلاحيتون لادڻ گهرجن

### ليگيسي موڊ (Legacy Mode) تي منتقل ٿيو

جيڪڏهن توهان کي پراني مطابقت جي ضرورت آهي:

1. **Superdav AI Agent** تي وڃو → **Settings** (सेटिंग्स)
2. **Third-Party Mode** ڏسو
3. **Legacy** چونڊيو
4. **Save** کليڪ ڪريو

## Auto Mode جا فائدے (Benefits of Auto Mode)

### خود بخود گهرجي ٿي (Automatic Discovery)

قابليتاون هيٺين کان خود بخود ملي وينديون:

- انستل ڪيل plugins
- فعال theme
- Must-use plugins
- Drop-in plugins

ڪو به مانيوال registration نه ڪيو ويندو.

### ناتيوي انتغالي (Native Integration)

قابليتاون WordPress Abilities API سان جوڙجنديون آهن:

- WordPress core سان مطابق
- WordPress admin سان کام ڪن ٿيون
- Abilities API استعمال ڪند ٻين plugins سان مطابقت رکندا
- جڏهن WordPress وڌندو رهندو، هي مستقبل لاءِ محفوظ آهي.

### سڌي انتظام (Simplified Management)

- ڪنه به configuration files کي edit ڪرڻ جي ضرورت نه آهي
- مانيوال ability registration نه ڪيو ويندو
- Ability Visibility controls خود بخود کام ڪندا
- Admin notices توهان کي غير تصنيف ڪيل abilities بابت خبردار ڪن ٿا.

### بهتر کارکردگی (Better Performance)

- Abilities کي cache ڪيو ويندو
- ضرورت پوندر تي lazy-loaded ٿيندا آهن
- WordPress 7.0+ لاءِ optimize ڪيا ويا آهن

## Migration Path (انتقال جو رستو)

### جيڪڏهن توهان WordPress 6.x تي آهيو

1. **WordPress 7.0+ تي اپ گریڊ ڪريو** (جڏهن وقت پويارو هجي)
2. **Superdav AI Agent کي v1.12.0+ تائين اپڊيٽ ڪريو**
3. **third-party mode کي Auto ۾ بدلائيو** (اختياري؛ legacy mode اڃا به کام ڪندو رهندو)
4. **ability visibility جي جائزو وٺو** ته هي صحيح access controls سان محفوظ آهن

### جيڪڏهن توهان WordPress 7.0+ تي آهيو

1. **Superdav AI Agent کي v1.12.0+ تائين اپڊيٽ ڪريو**
2. **verify ڪريو ته third-party mode Auto تي set آهي** (هي default طور تي هجڻ گهرجي)
3. **ability visibility جي جائزو وٺو** ته هي صحيح access controls سان محفوظ آهن
4. **third-party abilities کي test ڪريو** ته تصديق ٿي سگهي ته اهي کام ڪن ٿا

## Troubleshooting (مسئلے حل ڪرڻ)

### auto mode ۾ abilities load نه ٿيندا

- verify ڪريو ته توهان WordPress 7.0+ تي آهيو
- check ڪريو ته third-party mode "Auto" تي set آهي
- verify ڪريو ته ان ability کي فراہم ڪند plugin فعال آهي
- registration errors لاءِ WordPress error logs کي check ڪريو

### مون کي legacy mode رکڻ چاهي ٿو

- **Settings** → **Third-Party Mode** وڃو
- **Legacy** چونڊيو
- **Save** کليڪ ڪريو
- Legacy mode اڳتي وارو کام ڪندو رهندو

### मेरो कस्टम صلاحیتون ڏسڻ ۾ نه آڻيندي

- تصديق ڪريو ته اهي WordPress hooks جي ذريعي رجسٹر ٿيل آهن
- چیک ڪريو ته اهي Abilities API کي صحيح طرح لاگو ڪن ٿا
- WordPress جو error logs ڏسو
- سڀني رجسٹر ٿيل abilities ڏسڻ لاءِ **Ability Visibility** admin page استعمال ڪريو

### مون کي "unclassified ability" جي نوٽس ملي رهيون آهن

- نئين ٽيئرڊ پارٽي abilities لاءِ اهو عام آهي
- ان کي admin notice ۾ review ۽ classify ڪريو
- classification بابت تفصيل لاءِ **Ability Visibility** ڏسو

## Backward Compatibility (پچھلا مطابقت)

### موجودہ Configuration هاڻي

جيڪڏهن توهان جي پاسي ڪا موجودہ ٽيئرڊ پارٽي ability configurations آهن:

- **Legacy mode**: توهان جو configuration 계속 کام ڪري سگهي ٿو
- **Manual mode**: توهان جو configuration 계속 کام ڪري سگهي ٿو
- **Auto mode**: توهان جو configuration نظر انداز ڪيو ويندو آهي (auto mode اسان جي جاءِ وٺجي وڃي ٿو)

پنهنجي custom configuration کي برقرار رکڻ لاءِ، Manual يا Legacy mode ۾ رهيو.

### Deprecation Timeline (برداري کا وقت)

- **v1.12.0**: Legacy ۽ Manual modes اب به پورو سپورٽ ڏني وينديون آهن
- **v1.13.0+**: Legacy mode deprecation notices ڏئي سگهي ٿو
- **v2.0.0**: Legacy mode ختم ٿي سگهي ٿو (TBD)

## Best Practices (سٺا عمل)

### نئين Installation لاءِ

- Auto mode استعمال ڪريو (هي default آهي)
- Superdav AI Agent کي abilities خود بخود دریافت ڪرڻ لاء اجازه ڏيو
- رسائي کي ڪنڊڻ لاءِ Ability Visibility استعمال ڪريو

### موجودہ Installations لاءِ

- جتي ممکن هجي WordPress 7.0+ تي اپ گریڊ ڪريو
- آسان management لاءِ Auto mode تي منتقل ٿيو
- Ability Visibility جو استعمال ڪري abilities کي review ۽ classify ڪريو

### Custom Abilities لاءِ

- WordPress hooks (Abilities API) جي ذريعي abilities رجسٹر ڪريو
- custom ability registries کان بچو
- Auto mode سان WordPress 7.0+ تي test ڪريو

## Next Steps (ٻين قدم)

1. **پنهنجو پنهنجو ورڈپریس ورژن چیک ڪريو**: آٽو موڊ (Auto mode) لاءِ توهان کي 7.0+ تي هجڻ جو تصديق ڪريو
2. **اپرو تھرڊ-پارٽي موڊ ڏسو**: Settings ۾ وڃو ۽ اپرو موجوده موڊ جي هيٺيان ڏسو
3. **جهڙي ضرورت هجي ته اپڊيٽ ڪريو**: جيڪڏهن توهان ورڈپریس 7.0+ تي آهيو ته آٽو موڊ تي منتقل ٿيو
4. **قابليتن کي تصنيف ڪريو**: ڪنهن به غير تصنيف ڪيل قابليتن جي جائزو وٺو ۽ ان کي تصنيف ڪريو
5. **آزمائش ڪريو**: تصديق ڪريو ته اپرو تھرڊ-پارٽي قابليتون صحيح طور تي ڪم ڪيون ٿيون

## متعلقہ موضوعات

- **قابلیت جي ڏسڻ (Ability Visibility)**: ڪهڙين قابليتن کي ڪٿي ظاهر ڪرڻ آهي ان کي ڪنترول ڪريو
- **ورڈپریس قابليت API (WordPress Abilities API)**: ناتيوي ورڈپریس قابليت جي ريجيسٽر ڪرڻ بابت سکو
- **تھرڊ-پارٽي قابليت جو ترقي**: اهڙيون قابليتون banaيو جيڪي آٽو موڊ سان ڪم ڪن

```html
<p>1. <strong>پنهنجو ورڈپریس ورژن چیک ڪريو</strong>: آٽو موڊ (Auto mode) لاءِ توهان کي 7.0+ تي هجڻ جو تصديق ڪريو</p>
<p>2. <strong>اپرو تھرڊ-پارٽي موڊ ڏسو</strong>: Settings ۾ وڃو ۽ اپرو موجوده موڊ جي هيٺيان ڏسو</p>
<p>3. <strong>جهڙي ضرورت هجي ته اپڊيٽ ڪريو</strong>: جيڪڏهن توهان ورڈپریس 7.0+ تي آهيو ته آٽو موڊ تي منتقل ٿيو</p>
<p>4. <strong>قابليتن کي تصنيف ڪريو</strong>: ڪنهن به غير تصنيف ڪيل قابليتن جي جائزو وٺو ۽ ان کي تصنيف ڪريو</p>
<p>5. <strong>آزمائش ڪريو</strong>: تصديق ڪريو ته اپرو تھرڊ-پارٽي قابليتون صحيح طور تي ڪم ڪيون ٿيون</p>

<h2>متعلقہ موضوعات</h2>
<ul>
<li><strong>قابلیت جي ڏسڻ (Ability Visibility)</strong>: ڪهڙين قابليتن کي ڪٿي ظاهر ڪرڻ آهي ان کي ڪنترول ڪريو</li>
<li><strong>ورڈپریس قابليت API (WordPress Abilities API)</strong>: ناتيوي ورڈپریس قابليت جي ريجيسٽر ڪرڻ بابت سکو</li>
<li><strong>تھرڊ-پارٽي قابليت جو ترقي (Third-Party Ability Development)</strong>: اهڙيون قابليتون banaيو جيڪي آٽو موڊ سان ڪم ڪن</li>
</ul>
```
