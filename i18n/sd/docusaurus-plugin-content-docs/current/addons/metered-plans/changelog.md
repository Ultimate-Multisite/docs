---
title: ميٽرڊ منصوبن جي تبديلين جو لاگ
sidebar_position: 99
_i18n_hash: ee036a85eb635b4b503c94798251e839
---
# Metered Plans تبديلي لاگ {#metered-plans-changelog}

ورجن 1.1.0 - 2026-05-05 تي جاري ڪيو ويو
- نئون: multisite ذيلي سائيٽن لاءِ AI ٽوڪن بلنگ — گراهڪ سائيٽن ۾ AI ٽوڪن جي استعمال کي ترتيب ڏئي سگهجندڙ في-ٽوڪن ريٽن سان ٽريڪ ۽ بل ڪريو
- نئون: Connector لاڳو ڪرڻ dynamic حد دريافت ۽ write-through سان ٻيهر ٺاهيو ويو، سڀني connectors ۾ real-time درستگي کي يقيني بڻائيندي
- درستگي: Database ٽيبل اپگريڊ هاڻي BerlinDB schema وصفن سان صحيح نموني هم آهنگ آهن، نون انسٽالن تي اپگريڊ ناڪامين کي روڪيندي
- درستگي: Database اپگريڊ callbacks صحيح format ۾ تبديل ڪيا ويا، خاموش اپگريڊ ناڪامين کي حل ڪندي
- درستگي: Fractional قيمتون هاڻي AI Usage Overage Markup input field ۾ قبول ڪيون وڃن ٿيون
- درستگي: plugin لوڊ ٿيڻ تي fatal errors ۽ double-initialization مسئلا حل ڪيا ويا
- بهتر: check-env npm script شامل ڪيو ويو ته جيئن developer ماحول پهرين هلڻ تي پاڻ-مرادو configure ٿين

### 1.0.3 {#103}
* Plugin Update Checker v5 ڏانهن اپڊيٽ ڪيو ويو
* جديد WordPress plugin headers شامل ڪيا ويا
* تازن WordPress ورجنس سان compatibility بهتر ڪئي وئي
* استعمال ٽريڪنگ جي ڪارڪردگي وڌائي وئي

### 1.0.2 {#102}
* Bug fixes ۽ ڪارڪردگي بهترگيون
* استعمال رپورٽنگ بهتر ڪئي وئي

### 1.0.0 {#100}
* ابتدائي جاري ڪرڻ
* بنيادي metered بلنگ functionality
* استعمال ٽريڪنگ ۽ overage حساب
* خودڪار invoice تيار ڪرڻ
