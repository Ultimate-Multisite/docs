---
title: د درې برخې مود移行
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# دگرولیدي مود سړی طرفه انتقال (Third-Party Mode Migration) {#third-party-mode-migration}

Superdav AI Agent v1.12.0 په دې پرله چې څنګه د سړی طرفه وړتیاو (third-party abilities) مدیریت کیږي، بدلون راوړي دي. **د سړی طرفه مود اوس معمولاً "auto" ته ځي**، چې دا کار په WordPress 7.0+ کې له لارې Native WordPress Abilities API هم اجازه ورکوي، او تاسو باید manuall configuration (म्यानुअल تنظیمات) नगर्न اړتیا لرئ.

## څه بدلون راغلی؟ {#what-changed}

### v1.12.0 څخه مخکې {#before-v1120}

د سړی طرفه وړتیاو لپاره ماناول تنظیمات کیږي:

- تاسو باید "third-party mode" (سړی طرفه مود) په څرګند ډول فعال کړی وي
- وړتیاو له یو ځانګړي registry (رجستری) څخه راغلي وو
- د WordPress Abilities API سره هم integraton (یکړل) اختیاری وه
- Legacy mode (پہلی مود) معمول دی

### v1.12.0 وروسته {#after-v1120}

د سړی طرفه وړتیاو له لارې خودکار کار کوي:

- Third-party mode معمولاً "auto" ته ځي
- وړتیاو Native WordPress Abilities API سره هم integraton کوي
- د WordPress 7.0+ मा manuall configuration (म्यानुअल تنظیمات) هیڅ اړتیا نه ده
- Legacy mode ยังคง لپاره پرانې WordPress version (پیرې WordPress نسخه) کې موجود دی

## څوک متاثر کیږي؟ {#who-is-affected}

### نوي نصبونه (WordPress 7.0+) {#new-installations-wordpress-70}

**هیڅ کار नगर्न اړتیا.** Third-party mode خودکاراً "auto" ته تنظیم کیږي، او وړتیاو له پخوانی وخت څخه هم کار کوي.

### پرانې نصبونه (Existing Installations) {#existing-installations}

**ستاسو تنظیمات محفوظ دي.** که تاسو:

- **Legacy mode (پہلی مود)** کار کاوه: تاسو په Legacy mode کې ورسنده یاست (هیڅ بدلون نه دی)
- **Manual third-party mode (म्यानुअल سړی طرفه مود)** کار کاوه: تاسو په Manual mode کې ورسنده یاست (هیڅ بدلون نه دی)
- **Auto mode**: تاسو Auto mode ته دوام ورکړئ (هیڅ بدلون نه دی)

### 7.0 څخه مخکې WordPress Version {#wordpress-versions-before-70}

**Legacy mode لا هم موجود دی.** که تاسو WordPress 6.x یا له مخکې کار کوئ:

- Third-party mode معمولاً "legacy" ته ځي
- تاسو کولی شئ که غواړئ، third-party mode ماناول रूपमा فعال کړئ
- Native Abilities API کار کولو لپاره WordPress 7.0+ ته Upgrade (ارتقاء) وکړئ

## مودونو په اړه پوهه کول {#understanding-the-modes}

### Auto Mode (نوي معمول) {#auto-mode-new-default}

**Auto mode** له Native WordPress Abilities API هم integraton کار کوي:

- وړتیاو WordPress hooks له لارې register کیږي
- د WordPress 7.0+ Abilities API سره پوره compatibility (سازگاری)
- سړی طرفه وړتیاو خودکار रूपमा راټول کیږي
- manuall configuration (म्यानुअल تنظیمات) هیڅ اړتیا نه ده

**څو وخت کار ولرئ**: WordPress 7.0+ او তৃতীয় اړخیز قابلیتونه (third-party abilities)

### دستی حالت (Manual Mode) {#manual-mode}

**د دستی حالت** د دقیق تنظیم کولو پر مزاس دی:

- تاسو مشخص کوئ چې کومه üçüncü طرفي قابلیتونه (third-party abilities) کارولای شي
- د آزموینې یا غوره شوي قابلیتونو کارولو لپاره ګټور دی
- دا د تنظیمات فایلونو ویلو ته اړتیا لري
- ډیر کنټرول، خو زیات جوړښت هم کیږي

**څو وخت کار ولرئ**: آزموینې، غوره شوي قابلیتونو کارول، یا ځانګړي تنظیمات

### میراثي حالت (Legacy Mode) {#legacy-mode}

**میراثي حالت** د پخوانی üçüncü طرفي قابلیت سیسټم کاروي:

- ځانګړی قابلیت ريجستری (نه WordPress Abilities API)
- له پخوانیو WordPress نسخې سره سازگار دی
- هیڅ اصلي WordPress هم 통합 نه دی
- دا منقصه ده خو لا هم پشتیبانی کیږي

**څو وخت کار ولرئ**: WordPress 6.x یا تر او پایین، یا کله چې تاسو میراثي سازگاری ته اړتیا لرئ

## د اوسني حالت پر چکین {#checking-your-current-mode}

### له ადمن پینل (Admin Panel) {#via-admin-panel}
۱. رته **WordPress Admin** → **Superdav AI Agent** → **Settings** ته لاړ شئ
۲. د **Third-Party Mode** تنظیم لټوئ
۳. تاسو خپل اوسني حالت او هغه alternativen لرئ چې بدل کړئ

### له کوډ (Via Code) {#via-code}
```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', یا 'legacy'
```

## د حالت بدلون {#changing-your-mode}

### ته به Auto Mode کېږی (Switch to Auto Mode) {#switch-to-auto-mode}
که تاسو په WordPress 7.0+ کې یئ او غواړئ چې auto mode کارولی شئ:

۱. رته **Superdav AI Agent** → **Settings** ته لاړ شئ
۲. د **Third-Party Mode** لټوئ
۳. **Auto (WordPress Abilities API)** غوره کړئ
۴. **Save** باندې کلیک وکړئ

Superdav AI Agent به په خودی ډول üçüncü طرفي قابلیتونه وپوړي او ثبت کړي.

### ته به Manual Mode کېږی (Switch to Manual Mode) {#switch-to-manual-mode}
که تاسو غواړئ چې manuallly کنټرول کړئ چې کوم قابلیتونه کارولای شي:

۱. رته **Superdav AI Agent** → **Settings** ته لاړ شئ
۲. د **Third-Party Mode** لټوئ
۳. **Manual** غوره کړئ
۴. **Save** باندې کلیک وکړئ
۵. خپل تنظیمات فایل ویئ چې مشخص کړئ چې کوم قابلیتونه کارولای شي

### ته به Legacy Mode کېږی (Switch to Legacy Mode) {#switch-to-legacy-mode}
که تاسو میراثي سازگاری ته اړتیا لرئ:

۱. **Superdav AI Agent** ته ورسئید → **Settings** (تنظیمات)
۲. **Third-Party Mode** (حالت شخص ثالث) ته غوښتل
۳. **Legacy** (وراثي) غوره کړئ
۴. **Save** (ذخیره) کلیک وکړئ

## Auto Mode (حالت خودکار) ګټې {#benefits-of-auto-mode}

### اتوماتیک پيدا کول (Automatic Discovery) {#automatic-discovery}

توانایيونه له مندرون درنښت څخه اتوماتیک پيدا کیږي:

- مندرونو چې نصب شوي وي (Installed plugins)
- تفعيل شوي Theme (Theme فعال)
- Must-use plugins (مندرون چې لازمی وي)
- Drop-in plugins (مندرون چې ورته کار کوي)

هیڅ ډول دستی ثبت کولو پرتو نه اړتیا ده.

### محلي همغږي (Native Integration) {#native-integration}

توانایيونه له WordPress Abilities API سره همغږي دي:

- له WordPress core سره همخocie
- له WordPress admin سره کار کوي
- د نورو درنونو لپاره چې Abilities API کاروي، سره متناسب دی
- لاندې ورځو لپاره ډاډه ده چې WordPress تکامل پیدا کړي.

### ساده مدیریت (Simplified Management) {#simplified-management}

- هیڅ ډول تنظیم کولو فایلونه نه دي چې بدل کړئ
- هیڅ ډول دستی ثبتولو توانایي نه دی
- Ability Visibility controls اتوماتیک کار کوي
- Admin notices تاسو ته د غیر класиفای شوي توانایي خبر ورکوي.

### ښه کارایی (Better Performance) {#better-performance}

- Abilities کیش (cached) کیږي
- په اړتیا پورې Lazy-loaded کیږي
- د WordPress 7.0+ لپاره অপټمائز شوی.

## ترمنسي لاره (Migration Path) {#migration-path}

### که تاسو په WordPress 6.x کې یاست {#if-youre-on-wordpress-6x}

۱. **Upgrade to WordPress 7.0+** ته ورسئ (کله چې تیار وي)
۲. **Superdav AI Agent** ته v1.12.0+ ته اپدیت کړئ
۳. **third-party mode** ته Auto بدل کړئ (اختياري؛ legacy mode لا هم کار کوي)
۴. **ability visibility** ته بیاکتنه وکړئ ترڅو ډاډ ترلاسه کړئ چې مناسب کنټرولونه شتون لري.

### که تاسو په WordPress 7.0+ کې یاست {#if-youre-on-wordpress-70}

۱. **Superdav AI Agent** ته v1.12.0+ ته اپدیت کړئ
۲. **third-party mode** د Auto تنظیم شوي ترڅو ډاډ ترلاسه کړئ (دا معمولاً دی)
۳. **ability visibility** ته بیاکتنه وکړئ ترڅو مناسب کنټرولونه شتون لري
۴. **third-party abilities** تستر کړئ ترڅو lai ډاډ ترلاسه کړئ چې دوی کار کوي.

## مشکلو حل (Troubleshooting) {#troubleshooting}

### Abilities په auto mode کې نه کیږي {#abilities-arent-loading-in-auto-mode}

- وګورئ چې تاسو WordPress 7.0+ ته ورسای یاست
- چک کړئ چې **third-party mode** د "Auto" تنظیم شوی دی
- چک کړئ چې هغه plugin چې توانایي ورکوي، فعال دی
- د ثبتولو غلطۍ لپاره WordPress error logs وګورئ.

### زه legacy mode غواړم {#i-want-to-keep-legacy-mode}

- ته ورسئ **Settings** → **Third-Party Mode** (تنظیمات)
- **Legacy** غوره کړئ
- **Save** کلیک وکړئ
- Legacy mode لا هم کار کوي

### ځانګړتیاوو زما نښه نه ښکاري {#my-custom-abilities-arent-showing}

- وګوره چې دوی د WordPress hooks له لارې ثبت شوي دي
- چک کړئ چې دوی Abilities API په سمه توګه پیاده کړی دی
- د WordPress error logs (غلطي لاگونه) بیاکتنه وکړئ
- د **Ability Visibility** admin page څخه کار واخلئ ترڅو ټول ثبت شوي abilities وګورئ

### زه "unclassified ability" (غیر تصنیف شوی ځانګړتیا) پیغامونه ترلاسه کوم {#im-getting-unclassified-ability-notices}

- دا د نوي üçüncü اړخیز abilities لپاره معمول دی
- په admin notice کې دوی بیاکتنه وکړئ او تصنیف کړئ
- د تصنیف کولو جزئیاتو لپاره **Ability Visibility** وګورئ

## پخوانی سازگاری (Backward Compatibility) {#backward-compatibility}

### پرانە تنظیمات (Existing Configurations) {#existing-configurations}

که تاسو پرانې üçüncü اړخیز ability configurations لرئ:

- **Legacy mode**: ستاسو تنظیم یې کار کوي
- **Manual mode**: ستاسو تنظیم یې کار کوي
- **Auto mode**: ستاسو تنظیم وي منغله کیږي (auto mode عمل ورته پورې کوي)

ستاسو ځانګړي تنظیم ساتل لپاره، په Manual یا Legacy mode کې پاتې شئ.

### د منقصه وخت پلان (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy او Manual modes لاهمي دعمي دي
- **v1.13.0+**: Legacy mode ممکن منقصه پیغامونه ښکاري
- **v2.0.0**: Legacy mode ممکن منغله شي (تیین کیدو)

## غوره عملونه (Best Practices) {#best-practices}

### د نوي تثبیتونو لپاره {#for-new-installations}

- Auto mode کار وا관계 کړئ (دا پیشټا دی)
- Superdav AI Agent ته اجازه ورکړئ چې abilities په خودکار ډول ومومي
- رامنځته کولو کنټرول لپاره Ability Visibility کار وا관계 کړئ

### د پرانې تثبیتونو لپاره {#for-existing-installations}

- کله که ممکن وي، تر WordPress 7.0+ ارتقاء وکړئ
- ساده مدیریت لپاره Auto mode ته بدل کړئ
- Ability Visibility په کارولو سره abilities بیاکتنه وکړئ او تصنیف کړئ

### د ځانګړو abilities لپاره {#for-custom-abilities}

- Abilities API له لارې ثبت کړئ (Abilities API)
- ځانګړتیاو registries څخه ډډه وکړئ
- تر WordPress 7.0+ کې Auto mode ته آزمویني وکړئ

## وروستۍ ګامونه (Next Steps) {#next-steps}

۱. **د خپل ووردپرس نسخه وګورئ**: د اتوماتیک حالت (Auto mode) لپاره ډاډ ترلاسه کړئ چې تاسو ۷.۰ یا او تر او تر نسخه کې یمامئون یاست.
۲. **د درې درې اړخیز حالت (third-party mode) بیاکتنه وکړئ**: بلکې ته ورته (Settings) لاړ شئ او اوسني حالت (mode) وګورئ.
۳. **که لازم شه، تازه کړئ**: که تاسو ووردپرس ۷.۰ یا تر او تر نسخه کې یاست، نو به اتوماتیک حالتमा بدل کړئ.
۴. **توانایی‌ها را طبق کړئ**: هر هغه توانایي چې класиفای شوي نه دی، یې بیاکتنه وکړئ او طبق کړئ.
۵. **تست وکړئ**: ډاډ ترلاسه کړئ چې ستاسو درې درې اړخیز توانایي په سمه توګه کار کوي.

## تړاو موضوعات (Related Topics) {#related-topics}

- **توانایی د ښودلو (Ability Visibility)**: کنټرول کړئ چې کوم توانایي چیرته ښکاره کیږي
- **د ووردپرس توانایی API (WordPress Abilities API)**: د اصلي ووردپرس توانایی ثبت کولو په اړه زده کړئ
- **د درې درې اړخیز تواناییونه روزلوله (Third-Party Ability Development)**: هغه تواناییونه جوړ کړئ چې له اتوماتیک حالت سره کار کوي
