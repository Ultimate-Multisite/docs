---
title: Ayyukan Mai Gida na Musamman
sidebar_position: 15
_i18n_hash: bcde2032a685b60e17f1944b5b588f25
---
# Ammalin Kayanin (Sovereign Tenant Operations)

Ultimate Multisite: Multi-Tenancy 1.2.0 yana ƙarin kayan aiki ga masu amfani da ikon sarauta (sovereign tenants): waɗannan subsites suna aiki da database, tsarin fayiloli (filesystem root), da bayanin wajen hanyar motsi (routing context) na kansu yayin da suke riƙe nuna daga ma'aikacin shaidar shaidar (network admin).

Yi amfani da wannan shafin lokacin da kake sarrafa wuraren abokan ciniki masu wucewa (isolated customer sites), canjin ayyukan wuraren taƙaitaccen (remote-site handoffs), ko canjawar hanyoyin motsi (migrations) waɗanda ke kanmayin ɗaukar subsite na kawai zuwa tsarin sarautar (sovereign infrastructure).

## Wane abubuwa suke canzawa ga masu sarrafa shaidar (administrators) {#what-changes-for-administrators}

- **Autologin mai rashin yanayin wuri (Stateless tenant autologin)** — Ma'aikaben shaidar suna iya ziyartar subsite na sarautar ba tare da dogara kan yanayin tattaunawa na tsawon lokaci. Token ɗin SSO yana da takaitaccen wajen amfani, an gina shi ga wuri (origin-pinned), a tsaro shi daga sake cin gaba (replay-protected), kuma an iyakarsa ga wani tsawon lokaci mai ƙarancin ƙarami.
- **Hanyar motsi mai fahimtar sarautar (Sovereign-aware routing)** — Yanarku na wuraren abokan ciniki masu wucewa da subsites na sarautar suna samar ta hanyar hanyar motsi ɗaya, wanda ke rage bambancin hanyoyin fara aiki tsakanin albashin da ya kasance da sabon da aka gina.
- **Jigon canjin migration (Verified migration state)** — Binciken canjin migration yana bincika samarwa ga masu amfani, iyakacin amrorta na rubuta database (database writer permissions), yanayin ƙara wajen tsarin (queue drain status), da rashin jadawalin jadawali na waje (legacy table absence) kafin a yi magana cewa subsite ya kammala.
- **Kafawa ga canjin tsari (Safer teardown)** — Canjin tsari na sarautar yanzu yana ɗaukar bayanan amfani da subsite cikin sauƙi don rashin sauran abokan ciniki su ji damar samun damar shiga database.

## Ziyartar subsite na sarautar (Visiting a sovereign tenant) {#visiting-a-sovereign-tenant}

1. Buɗe **Network Admin > Ultimate Multisite > Sites**.
2. Zaɓi subsite na sarautar.
3. Yi amfani da **Visit (SSO)** idan akwai don wannan maimakon kopyawa kalmomin sirri ko ƙirƙirar kayan amfani na gudanarwa na wuri (temporary admin accounts).

Wannan hanyar ziyartar tana samar da token na shiga mai tsawon lokaci ga subsite ɗin kuma tana rarraba ayyukan SSO a cikin lissafin binciken subsite. Idan babban abin da aka yi ya yi nasara ba, ka tabbata cewa domain na subsite yana bayyana hanyar gina da ake tsammanin kuma subsite na iya samun ƙarshen SSO na wajen shaidar (network-side SSO endpoint).

## Babban rarraba ayyukan wuraren taƙaitaccen (Remote-site operations checklist) {#remote-site-operations-checklist}

Kafin canza subsite na sarautar ko subsite na wucewa, tabbatar:

## حذف مستأجران سيادي (Sovereign Tenants) {#deleting-sovereign-tenants}

حذف مستأجر سيادي شيء مدمر. تأكد أولاً من حالة النسخ الاحتياطي والتصدير، ثم احذفه من شاشة إدارة الموقع. تدفق الإزالة 1.2.0 يزيل بيانات اعتماد قاعدة بيانات المستأجر كجزء من التنظيف، ولكن يجب على المسؤولين التحقق أيضًا من اختفاء مستخدمي وقواعد البيانات ومجلدات المستوى المضيف عند استخدام لوحات استضافة خارجية.

:::warning
لا تحذف مستأجرًا سياديًا بينما لا تزال عملية التحقق من الترحيل قيد التشغيل أو أثناء وجود مهام الدفع غير المتزامنة في قائمة الانتظار. انتظر حتى تكتمل عملية التحقق حتى لا يقوم الإزالة بإزالة بيانات الاعتماد التي تحتاجها المهام المعلقة.
:::
