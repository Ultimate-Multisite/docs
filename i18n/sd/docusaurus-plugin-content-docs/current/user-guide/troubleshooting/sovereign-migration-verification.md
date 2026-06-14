---
title: ساروقي مائٽريڪشن تصديق
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 ۾ WP-CLI جو verification commands شامل آهن جيڪي sovereign tenant migrations لاءِ موجود آهن. ان کي انهن وقت استعمال ڪريو تڏهن ته جڏهن ڪا tenant migration، SSO visit، يا اڪيلو installation توقع مطابق کام نه ڪري رهيو هجي.

## چلائڻ وارن commands

Network WordPress install کان verification رن ڪريو:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

ان tenant جو site ID استعمال ڪريو جنهن کي توهان migrate ڪري رهيا آهيو. پهرين command ياري ڪري ٿو ته tenant هن legacy network-side data تي انحصار نه رکي ٿو. ٻئي command ياري ڪري ٿو ته sovereign push jobs کي process ۽ drain ڪرڻ جي صلاحيت آهي.

## عام غلطيون (Common failures)

### Database grants match host نه آهن

جيڪڏهن verification رپورٽ grant يا writer-user جو غلطي ڏिके ٿي، ته configure ڪيل database host کي چيڪ ڪريو. `localhost`، `127.0.0.1`، ۽ container service name مختلف MySQL grant hosts هوندا آهن. tenant host binding يا database grants کي اپڊيٽ ڪريو، پنهنجي verification کي ٻيهر رن ڪريو.

### Bedrock يا local installs جڳهه کان connect نه ٿين سگهن

Bedrock ۽ local socket installs ڊيٽابيس کي `localhost` طور رپورٽ ڪري سگهن ٿا جڏهن ته runtime normalized address تروضي سان connect ڪري ٿو. Version 1.2.0 هڪ ئي مشين جي host strings کي normalizes ڪري ٿو، پر custom host overrides گهڻيون grant سان ضد ڪري سگهن ٿيون.

### Async push queue drain نه ٿيو

جيڪڏهن `verify-sovereign-push` ختم نه ٿئي، ته Action Scheduler يا configure ڪيل async runner کي چيڪ ڪريو. غلطي واري jobs کي صرف تبديل ڪرڻ کان اڳ confirm ڪريو ته اهي retry ڪرڻ يا discard ڪرڻ لاءِ محفوظ آهن.

### Tenant user count غلط آهي

Migration کي sovereign tenant لاءِ users provision ڪرڻ گهرجي. جيڪڏهن توقع ڪيل install user مڪمل نه آهي، ته SSO رن ڪرڻ کان اڳ user provisioning جو قدم ٻيهر رن ڪريو.

### SSO visit رد ٿي وڃي

اسٹائلنس لِنٹنٹ آٹو لاگ ان لاءِ، ٹیننٹ ڈومین، اوریجن پِن (origin pin)، ٹوکن کا مقصد (token purpose)، نونس (nonce)، تے ایکسپائری (expiry) بالکل ایک جیسے ہونے چاہئیں۔ یقینی بنا لو کہ ٹیننٹ کا URL صحیح ہے تے SSO وزٹ جنریٹ کرنے کے فوراً بعد لاگ ان کی کوشش کی جا رہی ہے۔

## کب دوبارہ کوشش کرنی ہے

ہر انفراسٹرکچر تبدیلی کے بعد تصدیق کو دوبارہ چیک کریں۔ جب تک تمام تصدیقی چیک پاس نہ ہو جائیں، پروڈکشن ٹریفک تبدیل نہ کریں، سورس ڈیٹا ڈیلیٹ نہ کریں، یا مائگریشن کریڈینشلز ہٹانے نہ دیں۔
