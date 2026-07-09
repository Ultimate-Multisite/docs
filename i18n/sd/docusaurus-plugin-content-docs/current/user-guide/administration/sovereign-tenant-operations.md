---
title: ساروقي تنينٽ ايپريشنز
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Sovereign Tenant Operations {#sovereign-tenant-operations}

Ultimate Multisite: Multi-Tenancy 1.2.0 ۾ سارون تيئن (sovereign tenants) لاءِ ڪم ڪندڙ اوزار شامل ڪيو آهي: اهي سبساائٽس جيڪي پنهنجو پنهنجو ڊيٽا بيس، فائل سسٽم جو رুট، ۽ راؤٽنگ ڪنٽيڪس سان چلون ٿا پر نتيجي ۾ رابطي ڪري سگهجن وڃن.

ان صفح کان استعمال ڪريو ته جڏهن توهان اڪيلين ڪسٹمر سائٽس، دوري تي موجود سائٽن جو انتقال (remote-site handoffs)، يا ان جي standard subsite کي sovereign infrastructure ۾ منتقل ڪرڻ وارن مڪملي عملن جو انتظام ڪري رهيا هجي.

## اراكن (administrators) لاءِ ڪهڙا بدلاوان آهن {#what-changes-for-administrators}

- **State-less tenant autologin** — رابطي ڪندڙ اراكن (Network admins) لڳاتار سمجهڻ وارن شيئرڊ سيشن سٽيٽ تي انھن جي باري رهڻ کان سواءِ، sovereign tenant اچي سگهن ٿا. SSO توڪر (token) جو مقصد مخصوص آهي، اسان جي اصل (origin) کي پنهنجو رکو ڪيو آهي، دوبارہ استعمال ڪرڻ کان بچائيندڙ آهي، ۽ مختصر وقت لاءِ ختم ٿي ويندو آهي.
- **Sovereign-aware routing** — پراني اڪيلين رابطن (legacy isolated networks) ۽ sovereign tenants هڪ ئي سائٽ راؤٽر پاتھ جي ذريعي حل ٿين ٿا، جنهن سان پرانے ۽ نئين اڪيلين انستالهن جو فرق ختم ٿئي ويندو آهي.
- **Verified migration state** — انتقال جي تصديق جا چڪس صارف جي فراهمي (user provisioning)، ڊيٽا بيس رائيٽر اجازتن، ڪيو وڃي رهڻ وارن صف جي حالت (queue drain status)، ۽ پرانے جدولن جي مڪملي ناهي کي چیک ڪندا آهن تڏهن کان ته هن tenant کي كامل سمجھيو ويندو آهي.
- **Safer teardown** — sovereign جو گهٽ ڪرڻ (teardown) هاڻي Tenant credentials کي صاف طور تي ختم ڪري ڇڏيندو آهي، تاهه مڪمل ٿيل tenants جي مڪملي ڊيٽا بيس رسائي پنهنجي طرف نه رهندي.

## sovereign tenant جي سگهڻ {#visiting-a-sovereign-tenant}

1. **Network Admin > Ultimate Multisite > Sites** کي کليل ڪريو.
2. sovereign tenant کي چونڊيو.
3. جڏهن ممکن هجي ته پاسورڊ ڪاپي ڪرڻ يا موقت اراكن (temporary admin accounts) ٺاهڻ جي بجاء **Visit (SSO)** جو استعمال ڪريو.

هي سگهڻ واري عمل ان tenant لاءِ هڪ مختصر وقت وارو لاگ ان توڪر (login token) ٺاهي ٿو ۽ Tenant audit trail ۾ SSO واقعن کي درج ڪندو آهي. جيڪڏهن هي بٽون ڪم نه ڪري، ته چیک ڪريو ته هن tenant جو domain توقع ڪيل انستاله سان مطابقت رکي ٿو ۽ ته هن tenant network-سائڊ SSO endpoint تائين پهچي سگهي ٿو.

## remote-site operations checklist {#remote-site-operations-checklist}

sovereign يا remote tenant کي تبديل ڪرڻ کان اڳ، هي ڳولڻ ضرور ڪريو:

- टेनेन्ट डोमेन ان اسโตร์ جو پويزٹ ٿئي ٿو جيڪا اسٽ جو فزیکل سائيٽ جي مالڪ آهي.
- 테नेन्ट ڈیٹا بیس هوست ان اناسٽل لاءِ configure ڪيل هوست بندي جي مطابق آهي.
- مائجريشن تصديق ڪمان 테नेन्ट لاءِ پاس ٿين ٿيون.
- DNS يا اوپنر شپ جي تبديل ڪرڻ کان اڳ ايسنڪ مائجريشن ڪيوز کي ختم ڪري ڇڏيو ويندو آهي.
- 테नेन्टءَ جو اڊمن صارف مائجريشن دوران فراهم ڪيو ويو هو ۽ SSO جي ذريعي لاگ ان ڪري سگهي ٿو.

## سوورين (sovereign) 테नेنٽس کي مڪمل ڪرڻ (Deleting sovereign tenants) {#deleting-sovereign-tenants}

سوورين 테नेنٽ کي مڪمل ڪرڻ نقصانڪار آهي. پنهنجي بڪ اپ ۽ ايڪسپوٽ جي صورتحال جو تصديق کان پوءِ، سائيٽ مينيجمنت اسڪرين کان مڪمل ڪريو. 1.2.0 تي ڪورڊ (teardown) فلو مڪمل ڪرڻ جي صف جي حصة طور تي 테नेنٽ ڈیٹا بیس ڪرداني کي ختم ڪري ڇڏي ٿو، پر اديثن هميشه تصديق ڪرڻ گهرجي ته EXTERNAL هوست پینل استعمال ڪرڻ وقت هوست-سطح جي ڈیٹا بیس صارفين ۽ فولڊرز ختم ٿي ويا آهن.

:::warning
مائجريشن تصديق چڱيءَ طرح چلڻ دوران يا ايسنڪ پش جوبس ڪيو وڃن تائين مڪمل نه ٿيو، سوورين 테नेنٽ کي مڪمل نه ڪريو. تصديق مڪمل ٿيڻ جو انتظار ڪريو ته جيئن teardown ان ڪرداني کي ختم نه ڪري سگهي جيڪي پنهنجي pending جوبس لاءِ گهرجن آهن.
:::
