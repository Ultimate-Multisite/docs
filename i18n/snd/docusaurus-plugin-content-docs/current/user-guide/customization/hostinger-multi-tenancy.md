---
title: هوستينگر ملٹی-تیننسی
sidebar_position: 8
_i18n_hash: d7facb9c131877c2c834bd2184d9a073
---
# Hostinger Multi-Tenancy

Ultimate Multisite: Multi-Tenancy 1.2.0 ۾ Hostinger جي ملٽي-ٽينننس (multi-tenancy) جي صلاحيت شامل ڪيو آهي، جنهن سان هاستنگ ٿيل دوميني (hosted domains) موجوده Hostinger دومين ميپنگ انٽيغريشن (domain-mapping integration) جو سٺو عمل ڪري سگهن ٿيون ۽ انهن کي خود مختار ٽيننٽس (sovereign tenant provisioning) جي فراهمي سان گڏ شامل ڪيو ويندو آهي.

ان صلاحيت جو استعمال تڏهن ڪريو جڏهن توهان ٽيننٽ دوميني ۽ الگ محفوظ ٽيننٽ انفرنس (isolated tenant infrastructure) کي Hostinger hPanel ذريعي منظم ڪري رهيا آهيو.

## سٺي ڪاروبار (Setup notes) {#setup-notes}

1. **Ultimate Multisite > Settings > Host Integrations** ۾ موجوده Hostinger انٽيغريشن کي ترتیب ڏيو.
2. تصديق ڪريو ته Hostinger API token مطلوب دومين يا سبڊومين کي منظم ڪري سگهي ٿو.
3. ملٽي-ٽينننس addon کي فعال ڪريو.
4. ٽيننٽ کي پبلش ڪرڻ کان اڳ، ٽيننٽ جي الگ ٿيڻ (isolation) جي طريقو کي ترتیب ڏيو.
5. ٽيننٽ کي پروڊڪشن ٹرافڪ تي چونڊيو ته مائجريشن تصديقي ڪم جو عمل شروع ڪرڻ کان اڳ.

Hostinger جي صلاحيت ڪري سگهجي ٿو ته هاستنگ طرف (host-side) ڪمن لاءِ اشتراڪ وارو Hostinger ڪيئن استعمال ڪجي. DNS کي صحيح Hostinger اڪاؤنٽ تي پوائنٽ ڪرڻ گهرجي، ۽ hPanel اڪاؤنٽ جي حد اب به لاڳو آهي.

## صلاحيت سان مخصوص تبديلين (Capability-specific changes) {#capability-specific-changes}

- خود مختار ٽيننٽس (Sovereign tenants) کي هاستنگ سمجهڻ وارن دوميني عملن سان bana سگهجي ٿو.
- گرانٽ تصديق کان اڳ، ميڪسچين تي محفوظ ڪرڻ واري ڊيٽا بيسٽ اسٽرينگ کي عام شکل ڏني ويندي آهي (normalized).
- Hostinger جو منظم ڪيل ٽيننٽ hPanel ۾ ڏيکيل ڊيٽا بيسٽ هوست قيمت استعمال ڪندو، جڏهن ته WordPress رنٽائم کي لوڪل اووررائڊ جي ضرورت نه هجي.
- SSO يا سيسو (SSO) وڌيڪ ٽيننٽ دومين جو Hostinger طرف ٿيل ٽيننٽ تي حل ڪرڻ سان وابستا آهن.

## Hostinger ٽيننٽس کي حل ڪرڻ (Troubleshooting Hostinger tenants) {#troubleshooting-hostinger-tenants}

- جيڪڏهن ڪا ٽيننٽ انستان (install) فیل ٿئي، ته تصديق ڪريو ته دومين پہلے ئي Hostinger اڪاؤنٽ سان جوڙائي نه آهي.
- جيڪڏهن ڊيٽا بيسٽ جي تصديق فیل ٿئي، ته hPanel سان ٽيننٽ جي ڊيٽا بيسٽ صارف نامي (username)، ڊيٽا بيسٽ جو نام ۽ هوست بندڻ (host binding) جي موازنہ ڪريو.
- جيڪڏهن **Visit (SSO)** فیل ٿئي، ته تصديق ڪريو ته ٽيننٽ دومين لاءِ DNS ۽ SSL فعال آهن.
- جيڪڏهن ڪنهن کي ختم ڪرڻ کان پوءِ هوست جو ڪجهه سيڙيل ذخيرو (host resources) بچي رهيو آهي، ته بیک اپ جي تصديق کان پوءِ hPanel کان بقي ٿيل ڊيٽا بيسٽ، صارف يا فولڊر کي ختم ڪري ڇڏيو.
