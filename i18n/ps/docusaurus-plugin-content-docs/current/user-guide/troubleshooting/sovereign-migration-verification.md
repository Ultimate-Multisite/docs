---
title: سولانی مهاجرت کی تصدیق
sidebar_position: 16
_i18n_hash: a19bc6263b278573f09cbba17581f632
---
# Sovereign Migration Verification

Ultimate Multisite: Multi-Tenancy 1.2.0 کې د سۆڤرین تانټنټ (sovereign tenant) مېګريشن لپاره WP-CLI verification команди شتون لري. کله چې یو تانټنټ مېګريشن، SSO وزمنه مراجعه، یا انفرادی هم設置 نه کار کوي، نو دا命令ونه प्रयोग کړئ.

## د اجراsetClassلونه (Commands to run)

د شبکه WordPress هم設置 څخه verification وکړئ:

```bash
wp tenant verify-no-legacy --site=<site-id>
wp tenant verify-sovereign-push --site=<site-id>
```

تاسو هغه سیت آي دي (site ID) प्रयोग کړئ چې تاسو یې مېګريشن کوئ. په пърوونو命令 کې چک کیږي چې تانټنټ له پخوانی شبکه د دادهونو څخه نه DEPENDS نه دی. دوهم命令 چک کوي چې sovereign push کارونه کولی شي پردازش او خالی کړی (drain) کولای شي.

## عام ناکامۍ (Common failures)

### د ډیتابیس ګرانټونه سره توپیر لري (Database grants do not match the host)

که verification په ګرانټ یا writer-user کې ناکامی راپورته کوي، نو تنظیم شوی database host وګورئ. `localhost`، `127.0.0.1`، او container service نومونه MySQL د ګرانټ میزبانونه توپیر لري. تانټنټ میزبان بند (host binding) یا database grants بدل کړئ، بیا verification بیا اجرا کړئ.

### Bedrock یا محلي هم設置 نه کولی شي وصل شي (Bedrock or local installs cannot connect)

Bedrock او محلي socket هم設置 د ډیتابیس `localhost` په توګه راپورته کولای شي، پداسې حال کې چې runtime له یو نرمال شوي عمومي (normalized address) سره وصل کیږي. Version 1.2.0 ورته ماشین کې د میزبان سترو حروف نرمالوي، तर ځانګړتیاوو (custom host overrides) کولی شي د ډیتابیس ګرانټونو سره توپیر وکړي.

### Async push queue نه خالی کیږي (Async push queue does not drain)

که `verify-sovereign-push` پوره نه شي شوې، Action Scheduler یا تنظیم شوی async runner وګورئ. ناکام کارونه یوازې هغه وخت پاک کړئ چې تاسو ډاډ ترلاسه کړی چې دوی بیا تلاشي (retry) یا له منځه وړل (discard) لپاره محفوظ دي.

### تانټنټ کارګرۍ شمېر غلط دی (Tenant user count is wrong)

مېګريشن باید د sovereign تانټنټ لپاره کارونه جوړ کړي. که انتظار شوي install شوی کار نه وي، نو بیا SSO تلاشي کولو अونو پخوانی trin (user provisioning step) بیا اجرا کړئ.

### SSO وزمنه مراجعه رد شوې ده (SSO visit is rejected)

د حالت fără حالت (Stateless) د تلوینونکي خودکار ننوتل لپاره، باید د تلوینونکي ډومین، اوټن پین (origin pin)، ټوکنको هدف (token purpose)، نونس (nonce)، او منقصه (expiry) هم ورته وي. کیم مطمئن کړئ چې د تلوینونکي URL صحیح دی او که د SSO لندل (visit) جوړښت وروسته ننوتل پیل کیږي.

## کله بیا آزمویه गर्ने؟

د هر infrastrukture (infrastructure) بدلون وروسته تأیید (verification) بیا وکړئ. تر دې پاتې کې تولیدي ترافیک بدل नगئ، سرچيني داده حذف नगئ، یا مهاجنه معلومات (migration credentials) نه لرئ تر هغه وخته چې ټول تأییدی چکونه (checks) پاسه شي.
