---
title: WPMU DEV انٽيغريشن
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integration {#wpmu-dev-integration}

## جائزہ (Overview) {#overview}
WPMU DEV هڪ جامع WordPress پليٽ فارم آهي جيڪو WordPress سائيٽن لاءِ هاستنگ، پلگينز ۽ سروسز فراهم ڪري ٿو. هي ان انٽيغريشن سان Ultimate Multisite ۽ WPMU DEV هاستنگ جي وچ ۾ ڊومين جو خود بخود سنڪرائس (sync) ڪرڻ ۽ SSL سرٽيفڪيٽ جي انتظام کي آسان بڻائي ٿو.

## خصوصيتون (Features) {#features}
- خود بخود ڊومين سنڪرائس (Automatic domain syncing)
- SSL سرٽيفڪيٽ جو انتظام (SSL certificate management)
- وڌيڪ SSL سرٽيفڪيٽ جي تصديق ڪندڙ ڪوشون (Extended SSL certificate verification attempts)

## گهرجن (Requirements) {#requirements}
هي ان انٽيغريشن خود بخود اهو محسوس ڪري ٿو ته توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو ۽ اندر موجود API جو استعمال ڪري ٿو. جيڪڏهن توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو ته ڪنهن به اضافي ڪارگيري (configuration) جي ضرورت نه آهي.

هي ان انٽيغريشن `WPMUDEV_HOSTING_SITE_ID` constant جو موجود هجڻ جي جانچ ڪندو آهي، جيڪو WPMU DEV تي هاستنگ ڪرڻ وقت خود بخود تعريف ٿيندو آهي.

## ترتیب ڏيڻ جا تعليمات (Setup Instructions) {#setup-instructions}

### 1. WPMU DEV هاستنگ کي تصديق ڪريو (Verify WPMU DEV Hosting) {#1-verify-wpmu-dev-hosting}

جيڪڏهن توهان WPMU DEV تي هاستنگ ڪري رهيا آهيو، ته ضروري constant پر پہلے سے تعريف ٿيندا آهن. هي تصديق ڪريو ته:

1. `WPMUDEV_HOSTING_SITE_ID` constant توهان جي ماحول (environment) ۾ موجود آهي
2. توهان جو WPMU DEV سان فعال ممبرشپ ۽ API رسائي (access) موجود آهي

### 2. ان انٽيغريشن کي فعال ڪريو (Enable the Integration) {#2-enable-the-integration}

1. پنهنجي WordPress admin ۾، Ultimate Multisite > Settings تي وڃو
2. "Domain Mapping" ٽاب تي وينو
3. "Host Integrations" تائين سکرول ڪريو
4. WPMU DEV انٽيغريشن کي فعال ڪريو (Enable)
5. "Save Changes" تي ڪلڪ ڪريو

## اهو ڪيئن کام ڪري ٿو (How It Works) {#how-it-works}

### ڊومين سنڪرائسنگ (Domain Syncing) {#domain-syncing}

جڏهن Ultimate Multisite ۾ هڪ ڊومين جو مئپ ڪيو ويندو آهي:

1. ان انٽيغريشن پنهنجي WPMU DEV API جو استعمال ڪري توهان جي هاستنگ اڪاؤنٽ ۾ ڊومين شامل ڪرڻ لاءِ ڪم ڪري ٿو
2. اهو خود بخود ڊومين جو www حصو به شامل ڪري ٿو
3. ڊومين جي ترتیب ۽ SSL سرٽيفڪيٽ ڏناءڻ (issuance) جو ڪم WPMU DEV سنڀالندو

### SSL سرٽيفڪيٽ جو انتظام (SSL Certificate Management) {#ssl-certificate-management}

Integration کي اس طرح ترتیب ڏنل آهي ته وएमपीಎಂو ديو (WPMU DEV) هوسٽنگ لاءِ SSL سرٽيفڪيٽ جي تصديق ڪندڙ ڪوشون (verification attempts) جي تعداد وڌائي ويندي، ڇاڪاڻ ته SSL سرٽيفڪيٽ ڏناءن وقت لڳي ٿو ۽ ان کي نصب ڪرڻ ۾ وقت لاڳو ٿي سگهي ٿو. عام طور تي، اهو standard 5 ڪوشون جي مقابلي ۾ SSL سرٽيفڪيٽ جي تصديق لاءِ 10 کائڻ تائين ڪوش ڪري ٿو.

## اهم نوٽس (Important Notes) {#important-notes}

### ডومين ريموول (Domain Removal) {#domain-removal}

اڄ، وएमपीಎಂو ديو API ۾ دومين کي ختم ڪرڻ جو طريقو موجود نه آهي. جڏهن Ultimate Multisite ۾ دومين مئپنگ ختم ڪئي ويندي، ته دومين توهان جي WPMU DEV هوسٽنگ اڪاؤنٽ ۾ رهي ٿي. جيڪڏهن ضرورت پئي ٿي، تنهنجي WPMU DEV هوسٽنگแดش بورڊ کان اهو خود هي ختم ڪريو سگهو ٿا.

### API تصديق (API Authentication) {#api-authentication}

هي integration وएमपीಎಂو ديو API key جو استعمال ڪري ٿو جيڪو توهان جي WordPress ڊيٽابيز ۾ `wpmudev_apikey` option طور محفوظ آهي. جڏهن به توهان پنهنجي سائيٽ کي WPMU DEV سان جوڙيندا، اهو خود بخاري طور تي ترتیب ڏني ويندي.

## گريونگ (Troubleshooting) {#troubleshooting}

### API ڪنيڪشن جي مسئلن (API Connection Issues) {#api-connection-issues}
- تصديق ڪريو ته توهان جي سائيٽ وएमपीಎಂو ديو سان صحيح طرح جوڙي آهي.
- چیک ڪريو ته `wpmudev_apikey` option توهان جي WordPress ڊيٽابيز ۾ set آهي.
- يقيني بڻايو ته توهان جي WPMU DEV ممبرشپ فعال آهي.

### SSL سرٽيفڪيٽ جي مسئلن (SSL Certificate Issues) {#ssl-certificate-issues}
- وएमपीಎಂو ديو SSL سرٽيفڪيٽ ڏناءن وقت لڳائي سگهي ٿو (عام طور تي 5-15 منٽا).
- هي integration SSL سرٽيفڪيٽ لاءِ 10 کائڻ تائين تصديق ڪرڻ جي ترتيب ۾ آهي.
- جيڪڏهن ڪيترن ئي ڪوشون کان পরেও SSL سرٽيفڪيٽ ڏناءو نه ٿا ڏني، ته وएमपीಎಂو ديو سپورٽ سان رابطو ڪريو.

### دومين شامل نه ٿيو (Domain Not Added) {#domain-not-added}
- ڪنهن به غلطي جو پيغام لاءِ Ultimate Multisite جا logs ضرور ڏسو.
- تصديق ڪريو ته دومين پہلے کان ئي WPMU DEV ۾ شامل نه آهي.
- يقيني بڻايو ته توهان جي WPMU DEV هوسٽنگ پلان ان تعداد کي سپورٽ ڪري ٿو جيڪا توهان دومين شامل ڪري رهيا آهيو.
