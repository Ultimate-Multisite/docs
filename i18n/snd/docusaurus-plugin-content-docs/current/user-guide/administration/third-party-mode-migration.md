---
title: ٽيئرٿ پارٽي موڊ مائجريشن
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# تھرڈ پارٹی موڈ مائگریشن {#third-party-mode-migration}

Superdav AI Agent v1.12.0 نے تھرڈ پارٹی صلاحیتوں کو سنبھالنے کا طریقہ بدل دیا ہے۔ **تھرڈ پارٹی موڈ اب خود بخود (auto) پر سیٹ ہوتا ہے**، جس سے WordPress 7.0+ پر دستی ترتیب کے بغیر نیٹو WordPress Abilities API انٹیگریشن ممکن ہو جاتی ہے۔

## کیا بدلا؟ {#what-changed}

### v1.12.0 سے پہلے {#before-v1120}

تھرڈ پارٹی صلاحیتوں کے لیے دستی ترتیب کی ضرورت تھی:

- آپ کو "تھرڈ پارٹی موڈ" کو واضح طور پر فعال کرنا پڑتا تھا
- صلاحیتیں ایک کسٹم رجسٹریاں سے لوڈ ہوتی تھیں
- WordPress Abilities API کے ساتھ انٹیگریشن اختیاری تھی
- پرانا موڈ ڈیفالٹ تھا۔

### v1.12.0 کے بعد {#after-v1120}

تھرڈ پارٹی صلاحیتیں خود بخود کام کرتی ہیں:

- تھرڈ پارٹی موڈ "auto" پر ڈیفالٹ ہوتا ہے
- صلاحیتیں WordPress Abilities API کے ساتھ نیٹو طریقے سے انٹیگریٹ ہوتی ہیں
- WordPress 7.0+ پر کسی دستی ترتیب کی ضرورت نہیں
- پرانے WordPress ورژن کے لیے بھی پرانا موڈ دستیاب ہے

## کون متاثر ہوگا؟ {#who-is-affected}

### نئے انسٹالیشنز (WordPress 7.0+) {#new-installations-wordpress-70}

**کوئی کارروائی درکار نہیں۔** تھرڈ پارٹی موڈ خود بخود "auto" پر سیٹ ہو جاتا ہے، اور صلاحیتیں بغیر کسی رکاوٹ کے کام کرتی ہیں۔

### موجودہ انسٹالیشنز {#existing-installations}

**آپ کی سیٹنگز محفوظ رہتی ہیں۔** اگر آپ استعمال کر رہے تھے:

- **پرانا موڈ (Legacy mode)**: آپ پرانے موڈ میں رہیں گے (کوئی تبدیلی نہیں)
- **دستی تھرڈ پارٹی موڈ (Manual third-party mode)**: آپ دستی موڈ میں رہیں گے (کوئی تبدیلی نہیں)
- **auto موڈ**: آپ خود بخود موڈ کے ساتھ جاری رکھیں گے (کوئی تبدیلی نہیں)

### WordPress 7.0 سے پہلے کے ورژن {#wordpress-versions-before-70}

**پرانا موڈ اب بھی دستیاب ہے۔** اگر آپ WordPress 6.x یا اس سے پہلے استعمال کر رہے ہیں:

- تھرڈ پارٹی موڈ "legacy" پر ڈیفالٹ ہوتا ہے
- آپ اپنی مرضی کے مطابق تھرڈ پارٹی موڈ کو دستی طور پر فعال کر سکتے ہیں
- نیٹو Abilities API استعمال کرنے کے لیے WordPress 7.0+ میں اپ گریڈ کریں۔

## موڈز کو سمجھنا {#understanding-the-modes}

### auto موڈ (نیا ڈیفالٹ) {#auto-mode-new-default}

**auto موڈ** نیٹو WordPress Abilities API انٹیگریشن کا استعمال کرتا ہے:

- صلاحیتیں WordPress hooks کے ذریعے رجسٹر کی جاتی ہیں
- WordPress 7.0+ Abilities API کے ساتھ مکمل مطابقت
- تھرڈ پارٹی صلاحیتوں کا خود بخود پتہ چلنا
- کسی دستی ترتیب کی ضرورت نہیں

**کبڙي ڪهڙي وقت استعمال ڪريو**: WordPress 7.0+ سان ٻين طرفان جي صلاحيتن (third-party abilities) سان

### ميانويل موڊ (Manual Mode) {#manual-mode}

**ميانويل موڊ** ۾ واضح ترتیب (explicit configuration) گهرجي:

- توهان بيان ڪندا ته ڪهڙيون ٻيا طرفان جا صلاحيتون (abilities) لادڻ گهرجن
- تجربو ڪرڻ يا خاص صلاحيتون لادڻ لاءِ اسان جي مدد ڪري ٿي
- کانفيجريشن فائلن ۾ تبديل ڪرڻ گهرجي
- وڌيڪ ڪنٽرول ملندو آهي، پر وڌيڪ ترتیب (setup) گهرجي

**کبڙي استعمال ڪريو**: تجربو ڪرڻ، خاص صلاحيتون لادڻ، يا مخصوص ترتيبي لاءِ

### ليگيسي موڊ (Legacy Mode) {#legacy-mode}

**ليگيسي موڊ** پراني ٻين طرفان جي صلاحيتن جي نظام جو استعمال ڪري ٿو:

- ڪسائي صلاحيتن جي رجسٽري (Custom ability registry) (WordPress Abilities API نه آهي)
- پرانے WordPress ايڪشنن سان مطابقت رکي ٿو
- واري WordPress سان نيڪاليو گهڻو شامل نه آهي
- پرانا ته ختم ٿي چڪو آهي پر اب به سپورٽ ڪندو رهندو

**کبڙي استعمال ڪريو**: WordPress 6.x يا ان کان اڳ، يا جڏهن توهان کي ليگيسي مطابقت جي ضرورت هجي

## پنهنجي موجوده موڊ جو جائزو وٺڻ {#checking-your-current-mode}

### اڊمن پينل (Admin Panel) ذريعي {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** جي ترتيبي ڏسو
3. توهان کي پنهنجي موجوده موڊ ۽ ان کي تبديل ڪرڻ جا خيار ڏسڻ گهرين

### ڪوڊ (Code) ذريعي {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## پنهنجي موڊ کي تبديل ڪرڻ {#changing-your-mode}

### آٽو موڊ (Auto Mode) تي منتقل ٿيو {#switch-to-auto-mode}

جيڪڏهن توهان WordPress 7.0+ تي آهيو ۽ آٽو موڊ استعمال ڪرڻ چاهيو ٿا:

1. **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** ڏسو
3. **Auto (WordPress Abilities API)** چونڊيو
4. **Save** تي ڪلڪ ڪريو

Superdav AI Agent خودي طور تي ٻين طرفان جا صلاحيتون موڪل ۽ رجسٽر ڪري ڇڏيندو.

### ميانويل موڊ (Manual Mode) تي منتقل ٿيو {#switch-to-manual-mode}

جيڪڏهن توهان چاهيو ته توهان کسين صلاحيتن کي لادڻ گهرجي ان کي خودي طور تي ڪنٽرول ڪريو:

1. **Superdav AI Agent** → **Settings** تي وڃو
2. **Third-Party Mode** ڏسو
3. **Manual** چونڊيو
4. **Save** تي ڪلڪ ڪريو
5. توهان جي کانفيجريشن فائل ۾ تبديل ڪريو ته بيان ڪري سگهو ته ڪهڙيون صلاحيتون لادڻ گهرجن

### ليگيسي موڊ (Legacy Mode) تي منتقل ٿيو {#switch-to-legacy-mode}

جيڪڏهن توهان کي پراني مطابقت جي ضرورت آهي:

1. **Superdav AI Agent** تي وڃو → **Settings** (सेटिंग्स)
2. **Third-Party Mode** ڏسو
3. **Legacy** چونڊيو
4. **Save** کليو

## Auto Mode جا فائدن {#benefits-of-auto-mode}

### خود بخود گهرجي (Automatic Discovery) {#automatic-discovery}

قابليتا خود بخود ان ڳالهين کان ملي ويندي آهي:

- جتي پليجز (plugins) لادي واري نون هونديون آهن
- فعال ٿيل theme
- ضروري پليجز (Must-use plugins)
- Drop-in plugins

ڪو به مانيوال ريجيسٽر ڪرڻ جي ضرورت نه آهي.

### قدري مربوط ٿيڻ (Native Integration) {#native-integration}

قابليتا WordPress Abilities API سان مربوط ٿينديون آهن:

- WordPress جو بنيادي نظام (core) سان مطابقت رکي ٿيون
- WordPress admin سان ڪم ڪندڙ هونديون
- Abilities API استعمال ڪندڙ ٻين پليجز سان مطابقت رکي ٿيون
- جڏهن WordPress وڌندو رهندو، ته هي مستقبل لاءِ محفوظ آهي

### سڌو سنوارڻ (Simplified Management) {#simplified-management}

- ڪا به configuration files کي edit ڪرڻ جي ضرورت نه آهي
- مانيوال ability registration نه ڪيو ويندو
- Ability Visibility controls خود بخود کام ڪن ٿيون
- Admin notices توهان کي غير تصنيف ڪيل abilities بابت خبردار ڪندا آهن

### بهتر کارکردگی (Better Performance) {#better-performance}

- Abilities کي cache ڪيو ويندو آهي
- ضرورت پوندرى تي Lazy-loaded ٿيندا آهن
- WordPress 7.0+ لاءِ optimum ڪيل وڃن

## Migration Path (منتقلي جو رستو) {#migration-path}

### جيڪڏهن توهان WordPress 6.x تي آهيو {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ تي اپ گریڊ ڪريو** (جڏهن وقت پوي ٿو)
2. **Superdav AI Agent کي v1.12.0+ تائين اپڊيٽ ڪريو**
3. **third-party mode کي Auto تي بدل ڏيو** (اختياري؛ legacy mode اڃا به ڪم ڪندو رهندو)
4. **ability visibility جي جائزو وٺو** ته هي صحيح access controls سان ڪم ڪري رهيا آهن

### جيڪڏهن توهان WordPress 7.0+ تي آهيو {#if-youre-on-wordpress-70}

1. **Superdav AI Agent کي v1.12.0+ تائين اپڊيٽ ڪريو**
2. **verify ڪريو ته third-party mode Auto تي set آهي** (هي default طور تي هجڻ گهرجي)
3. **ability visibility جي جائزو وٺو** ته هي صحيح access controls سان ڪم ڪري رهيا آهن
4. **third-party abilities کي test ڪريو** ته تصديق ٿي سگهي ته اهي کام ڪن ٿا

## Troubleshooting (مسئلے حل ڪرڻ) {#troubleshooting}

### auto mode ۾ abilities load نه ٿيندا {#abilities-arent-loading-in-auto-mode}

- verify ڪريو ته توهان WordPress 7.0+ تي آهيو
- check ڪريو ته third-party mode "Auto" تي set آهي
- verify ڪريو ته ان plugin جو ability فراہم ڪندڙ active آهي
- registration errors لاءِ WordPress error logs کي check ڪريو

### مون کي legacy mode رکڻ چاهي ٿو {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** وڃو
- **Legacy** چونڊيو
- **Save** کليو
- Legacy mode اڃا به ڪم ڪندو رهندو

### मेरो कस्टम صلاحیتون ڏس نه آڻيندي ن آهن {#my-custom-abilities-arent-showing}

- تصديق ڪريو ته اهي WordPress hooks جي ذريعي رجسٹر ٿيل آهن
- چیک ڪريو ته اهي Abilities API کي صحيح طرح لاگو ڪن ٿا
- WordPress جو error logs ڏسو
- سڀني رجسٹر ٿيل abilities ڏسڻ لاءِ **Ability Visibility** admin page استعمال ڪريو

### مون کي "unclassified ability" جي نوٽس ملي رهيون آهن {#im-getting-unclassified-ability-notices}

- نئين ٽيئرڊ پارٽي abilities لاءِ هي عام آهي
- ان کي admin notice ۾ review ۽ classify ڪريو
- classification بابت تفصيل لاءِ **Ability Visibility** ڏسو

## Backward Compatibility (پچھلا سازگار ٿيڻ) {#backward-compatibility}

### موجودہ Configuration هاڻي {#existing-configurations}

جيڪڏهن توهان وٽ موجوده ٽيئرڊ پارٽي ability configurations آهن:

- **Legacy mode**: توهان جو configuration 계속 کام ڪندو رهندو
- **Manual mode**: توهان جو configuration 계속 کام ڪندو رهندو
- **Auto mode**: توهان جو configuration نظر انداز ٿيندو (auto mode اسان جي سڃاڻپ ڪري ويندي آهي)

پنهنجي custom configuration کي برقرار رکڻ لاءِ، Manual يا Legacy mode ۾ رهيو.

### Deprecation Timeline (ڪامياب ٿيڻ جو وقت) {#deprecation-timeline}

- **v1.12.0**: Legacy ۽ Manual modes اب به پورو سپورٽ ڏين ٿا
- **v1.13.0+**: Legacy mode عليه deprecation notices ڏيڪجي رهي ٿو
- **v2.0.0**: Legacy mode کمايل ٿي سگهي ٿو (TBD)

## Best Practices (سٺي عمليون) {#best-practices}

### نئين Installation لاءِ {#for-new-installations}

- Auto mode استعمال ڪريو (هي default آهي)
- Superdav AI Agent کي abilities خود بخود سڃاڻپ ڪرڻ لاء اجازه ڏيو
- رسائي ڪن لاءِ Ability Visibility استعمال ڪريو

### موجودہ Installations لاءِ {#for-existing-installations}

- جتي ممکن هجي WordPress 7.0+ تي اپ گریڊ ڪريو
- آسان management لاءِ Auto mode تي منتقل ٿيو
- Ability Visibility استعمال ڪري abilities کي review ۽ classify ڪريو

### Custom Abilities لاءِ {#for-custom-abilities}

- WordPress hooks جي ذريعي abilities register ڪريو (Abilities API)
- custom ability registries کان بچو
- Auto mode سان WordPress 7.0+ تي test ڪريو

## Next Steps (ٻين قدم) {#next-steps}

1. **پنهنجو پنهنجي ورڈپريس جو سرفیس تي آهي**: آٽو موڊ (Auto mode) لاءِ توهان کي 7.0 کان وڌيڪ ورژن استعمال ڪرڻ جي تصديق ڪريو.
2. **تائو سومڻي موڊ (third-party mode) جي جائزو لکڻ**: Settings मा जान پنهنجي موجوده موڊ ڏسو ته ڪهڙي آهي.
3. **جهڙيءَ صورت ۾ اپڊيٽ ڪريو**: جيڪڏهن توهان WordPress 7.0 کان وڌيڪ استعمال ڪري رهيا آهيو، ته آٽو موڊ تي منتقل ٿيو.
4. **قدرت کي تصنيف ڏيو (Classify abilities)**: ڪنهن به غير تصنيف ڪيل قدرتن جي جائزو وٺو ۽ ان کي تصنيف ڏيو.
5. **آزمائش ڪريو**: تصديق ڪريو ته توهان جون سومڻي قدرتا صحيح طور تي کام ڪري رهيون آهن.

## متعلقہ موضوعات (Related Topics) {#related-topics}

- **قدرت جو ڏسڻ (Ability Visibility)**: ڪهڙا قدرتا ڪٿي ظاهر ٿينند ان کي ڪنترول ڪريو.
- **WordPress Abilities API**: ناتي ورڈپريس جي قدرتن کي ريجيسٽ ڪرڻ بابت سکو.
- **سومڻي قدرت جو ترقي (Third-Party Ability Development)**: اهڙيون قدرتا بنائ جو آٽو موڊ سان ڪم ڪري سگهن.
