---
title: سپورٽ ٽڪيٽن جو تبديلي لاگ
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets تبديلي نامو

### 1.0.4 - 2026-05-05
* بهتر ڪيو ويو: Git ٽريڪنگ مان vendor/ ڊائريڪٽري هٽائي وئي (اڳ ۾ ئي .gitignore سان ڍڪيل)، repository جو حجم گهٽايو ويو
* بهتر ڪيو ويو: WordPress 7.0 تائين آزمائيو ويو

### 1.0.3 - 2026-05-01
* درست ڪيو ويو: nullable ٽڪيٽ ماڊل setters ۾ null قدر قبول ڪريو
* درست ڪيو ويو: مناسب multisite سپورٽ لاءِ سڀ ٽڪيٽون عالمي network-wide ٽيبلن ۾ محفوظ ڪريو
* درست ڪيو ويو: اسٽاف فيلڊ لڪايو ۽ گراهڪ جي نئين ٽڪيٽ فارم تي خالي-صفحي redirect کي درست ڪيو
* درست ڪيو ويو: metadata اسٽوريج لاءِ اڻ بيان ڪيل add_meta() ڪالن کي صحيح update_meta() سان مٽايو
* درست ڪيو ويو: اڻ رجسٽر ٿيل capability چيڪ کي صحيح wu_view_all_support_tickets سان مٽايو
* درست ڪيو ويو: ٽڪيٽ اسٽيٽس، assignment، ۽ quick-edit عملن لاءِ گم ٿيل AJAX handlers شامل ڪريو
* درست ڪيو ويو: ٽڪيٽ views ۾ اسٽاف جواب جي سڃاڻپ لاءِ method نالو درست ڪريو
* درست ڪيو ويو: نقل reply handlers گڏ ڪريو ۽ nonce action نالن کي هم آهنگ ڪريو
* درست ڪيو ويو: [wu_submit_ticket] shortcode لاءِ گم ٿيل frontend view شامل ڪريو
* درست ڪيو ويو: گم ٿيل user_id ڪالم شامل ڪريو ۽ Support_Ticket::get_user_id() method درست ڪريو
* درست ڪيو ويو: priority filter option tag ۾ اضافي double-quote هٽايو
* درست ڪيو ويو: super admins لاءِ network admin ٽڪيٽ انتظام پينل شامل ڪريو
* بهتر ڪيو ويو: admin CSS کي هڪ واحد ٻاهرين stylesheet ۾ گڏ ڪيو ويو
* بهتر ڪيو ويو: subsite admin menu مان Settings submenu هٽايو
* بهتر ڪيو ويو: frontend assets کي صرف support ticket صفحن تي مشروط طور لوڊ ڪريو
* بهتر ڪيو ويو: جڏهن Bedrock root autoloader اڳ ۾ ئي dependencies لوڊ ڪري چڪو هجي ته plugin autoloader ڇڏي ڏيو

### 1.0.2 - 2025-12-11
* شامل ڪيو ويو: admin ۽ frontend لاءِ مڪمل ٽڪيٽ ڏسڻ جي ڪارڪردگي
* شامل ڪيو ويو: ٽڪيٽ reply submissions لاءِ AJAX handler
* شامل ڪيو ويو: مناسب form handling سان ٽڪيٽ reply ڪارڪردگي لاءِ سپورٽ
* شامل ڪيو ويو: admin ۾ ٽڪيٽ submissions ۽ replies لاءِ مناسب notice display
* شامل ڪيو ويو: گراهڪ self-submissions لاءِ موجوده user سان خودڪار ٽڪيٽ وابستگي
* شامل ڪيو ويو: گراهڪن کي ٽڪيٽ ownership override ڪرڻ کان روڪڻ لاءِ سيڪيورٽي بهتري
* شامل ڪيو ويو: گم ٿيل helper functions (wu_format_date, wu_user_can_view_ticket, وغيره)
* شامل ڪيو ويو: مناسب file attachment download ۽ handling
* شامل ڪيو ويو: ٽڪيٽ replies ۽ status changes لاءِ email notification system
* درست ڪيو ويو: ٽڪيٽ reply form ۾ هاڻي ضروري ticket ID شامل آهي
* درست ڪيو ويو: admin ticket views ۾ notice visibility مسئلا
* درست ڪيو ويو: support ticket functions ۾ syntax errors
* بهتر ڪيو ويو: responses ۽ attachments لاءِ مناسب query ۽ schema classes سان database structure
* بهتر ڪيو ويو: ٽڪيٽ ماڊلن لاءِ attributes بدران حقيقي properties ڏانهن migration

### 1.0.1 - 2025-09-28
* اپڊيٽ ڪيو ويو: consistency لاءِ prefix کي ultimate-multisite ۾ نالو مٽايو ويو
* اپڊيٽ ڪيو ويو: text domain standardization
* درست ڪيو ويو: ننڍيون bug fixes ۽ بهتريون

### 1.0.0 - 2025-09-01
* شروعاتي جاري ٿيڻ
* مڪمل ٽڪيٽ انتظام سسٽم
* گهڻ-سطحي access control
* threaded conversation system
* file attachment سپورٽ
* email notification system
* admin ۽ گراهڪ interfaces
* انگ اکر ۽ reporting
