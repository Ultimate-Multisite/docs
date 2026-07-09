---
title: سپورٽ ٽڪيٽن جو تبديلين جو لاگ
sidebar_position: 99
_i18n_hash: 4ef7d3adaed4523e799ec78da9843a3d
---
# Support Tickets تبديلي نامو

### 1.0.4 - 2026-05-05
* بهتر ڪيو ويو: Git ٽريڪنگ مان vendor/ ڊائريڪٽري هٽائي وئي (.gitignore اڳ ئي ڍڪي چڪو هو)، repository جو سائيز گهٽايو ويو
* بهتر ڪيو ويو: WordPress 7.0 تائين جانچيو ويو

### 1.0.3 - 2026-05-01
* درستگي: nullable ticket model setters ۾ null قدر قبول ڪريو
* درستگي: مناسب multisite سپورٽ لاءِ سڀ tickets global network-wide tables ۾ محفوظ ڪريو
* درستگي: staff fields لڪايو ۽ customer new-ticket form تي خالي صفحي واري redirect درست ڪريو
* درستگي: metadata storage لاءِ undefined add_meta() calls کي صحيح update_meta() سان تبديل ڪريو
* درستگي: unregistered capability check کي صحيح wu_view_all_support_tickets سان تبديل ڪريو
* درستگي: ticket status، assignment، ۽ quick-edit عملن لاءِ گم ٿيل AJAX handlers شامل ڪريو
* درستگي: ticket views ۾ staff response detection لاءِ method name درست ڪريو
* درستگي: duplicate reply handlers کي گڏ ڪريو ۽ nonce action names کي هم آهنگ ڪريو
* درستگي: [wu_submit_ticket] shortcode لاءِ گم ٿيل frontend view شامل ڪريو
* درستگي: گم ٿيل user_id column شامل ڪريو ۽ Support_Ticket::get_user_id() method درست ڪريو
* درستگي: priority filter option tag ۾ اضافي double-quote هٽايو
* درستگي: super admins لاءِ network admin ticket management panel شامل ڪريو
* بهتر ڪيو ويو: admin CSS کي هڪ ئي external stylesheet ۾ گڏ ڪيو ويو
* بهتر ڪيو ويو: subsite admin menu مان Settings submenu هٽايو ويو
* بهتر ڪيو ويو: frontend assets رڳو support ticket pages تي مشروط طور load ڪريو
* بهتر ڪيو ويو: جڏهن Bedrock root autoloader اڳ ئي dependencies load ڪري چڪو هجي ته plugin autoloader کي skip ڪريو

### 1.0.2 - 2025-12-11
* شامل ڪيو ويو: admin ۽ frontend لاءِ مڪمل ticket viewing functionality
* شامل ڪيو ويو: ticket reply submissions لاءِ AJAX handler
* شامل ڪيو ويو: مناسب form handling سان ticket reply functionality لاءِ سپورٽ
* شامل ڪيو ويو: admin ۾ ticket submissions ۽ replies لاءِ مناسب notice display
* شامل ڪيو ويو: customer self-submissions لاءِ موجوده user سان خودڪار ticket association
* شامل ڪيو ويو: customers کي ticket ownership override ڪرڻ کان روڪڻ لاءِ security enhancement
* شامل ڪيو ويو: گم ٿيل helper functions (wu_format_date, wu_user_can_view_ticket, etc.)
* شامل ڪيو ويو: مناسب file attachment download ۽ handling
* شامل ڪيو ويو: ticket replies ۽ status changes لاءِ email notification system
* درست ڪيو ويو: Ticket reply form ۾ هاڻي ضروري ticket ID شامل آهي
* درست ڪيو ويو: admin ticket views ۾ notice visibility مسئلا
* درست ڪيو ويو: support ticket functions ۾ syntax errors
* بهتر ڪيو ويو: responses ۽ attachments لاءِ مناسب query ۽ schema classes سان database structure
* بهتر ڪيو ويو: ticket models لاءِ attributes بدران real properties ڏانهن migration

### 1.0.1 - 2025-09-28
* اپڊيٽ ڪيو ويو: consistency لاءِ prefix کي ultimate-multisite نالو ڏنو ويو
* اپڊيٽ ڪيو ويو: Text domain standardization
* درست ڪيو ويو: ننڍيون bug fixes ۽ بهتريون

### 1.0.0 - 2025-09-01
* شروعاتي release
* مڪمل ticket management system
* Multi-level access control
* Threaded conversation system
* File attachment support
* Email notification system
* Admin ۽ customer interfaces
* Statistics ۽ reporting
