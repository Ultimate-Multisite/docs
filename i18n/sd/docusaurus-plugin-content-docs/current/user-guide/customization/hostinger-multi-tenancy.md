---
title: هوستينگر ملٹی-تیننسی
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy {#hostinger-multi-tenancy}

Ultimate Multisite: Multi-Tenancy 1.2.0 ۾ Hostinger جي ملٽي-ٽيننسي (multi-tenancy) جي صلاحيت شامل ڪئي آهي، جنهن سان هاستنگ ٿيل دوميني (hosted domains) موجوده Hostinger دومين ميپنگ انٽيغريشن کان سواءِ خود مختار تيننٽس (sovereign tenants) جي فراهمي ۾ شموليت ڪري سگهجن ٿا.

ان صلاحيت جو استعمال تڏهن ڪريان جڏهن تيننٽ دوميني ۽ الگ تيننٽ انفراسٽرڪچر کي Hostinger hPanel ذريعي منظم ڪجي وڃي.

## Setupp جي نوٽس (Setup notes) {#setup-notes}

1. **Ultimate Multisite > Settings > Host Integrations** اندر ڪري Core Hostinger انٽيغريشن کي ترتیب ڏيو.
2. تصديق ڪريو ته Hostinger API token مطلوبہ دومين يا سبڊومين کي منظم ڪري سگهي ٿو.
3. Multi-Tenancy addon کي فعال ڪريو.
4. تيننٽ کي پبلش ڪرڻ کان اڳ، تيننٽ جي الگ ڪرڻ جي طريقو (tenant isolation strategy) کي ترتیب ڏيو.
5. تيننٽ کي پروڊڪشن ٹرافڪ تي چونڊڻ کان اڳ migration verification workflow کي چالو ڪريو.

Hostinger صلاحيت هاستنگ طرف ڪم ڪندڙ عملن لاءِ شريڪت وارو Hostinger ڪيئن استعمال ڪندو، DNS کي صحيح Hostinger اڪاؤنٽ ڏانهن پوائنٽ ڪرڻ گهرجي، ۽ hPanel اڪاؤنٽ جي حد اب همڻ جهڙيون رهون ٿيون.

## صلاحيت-خاص تبديلون (Capability-specific changes) {#capability-specific-changes}

- هاستنگ طرف سمجهڻ وارن دومين سان خود مختار تيننٽس (Sovereign tenants) کي bana سگهجي ٿو.
- گرانٽ تصديق ڪرڻ کان اڳ، ميچين تي موجود ڊيٽا بيسٽ قيمت (database host strings) کي باقاعده ڪيو ويندو آهي.
- Hostinger جو منظم تيننٽ hPanel ۾ ڏيڪل ڊيٽا بيسٽ قيمت استعمال ڪندو، جڏهن ته WordPress runtime کي لوڪل اووررائڊ جي ضرورت نه هجي.
- SSO جي وزٺون (SSO visits) تيننٽ دومين جو Hostinger طرف هاستنگ ٿيل تيننٽ تي حل ڪرڻ سان وابسته آهن.

## Hostinger تيننٽس جي گهرج (Troubleshooting Hostinger tenants) {#troubleshooting-hostinger-tenants}

- جيڪڏهن تيننٽ انٽال ڪميل نه ٿئي، ته تصديق ڪريو ته دومين پہلے ئي Hostinger اڪاؤنٽ ۾ جڙيل آهي.
- جيڪڏهن ڊيٽا بيسٽ جي تصديق ڪميل نه ٿئي، ته hPanel سان تيننٽ جو DB صارف نام (username)، ڊيٽا بيسٽ جو نالو ۽ هاستنگ بندڻ (host binding) جي موازنہ ڪريو.
- جيڪڏهن **Visit (SSO)** ڪم ڪندڙ نه هجي، ته تصديق ڪريو ته تيننٽ دومين لاءِ DNS ۽ SSL فعال آهن.
- جيڪڏهن teardown کان پوءِ هاستنگ جا سيورس پنهنجي پياري رهون ٿا، ته بیک اپ جي تصديق ڪرڻ کان پوءِ hPanel کان ڪالا ركه (databases)، صارف (users) يا فولڊر کي ختم ڪري ڇڏيو.
