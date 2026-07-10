---
title: د تھیم بیلر شروع کولو جریان
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Theme Builder Onboarding Flow {#theme-builder-onboarding-flow}

Superdav AI Agent v1.12.0 تاسو ته یو **Theme Builder onboarding flow** وړاندې کوي چې په پیل کې د تنظیم کولو په جریان کې ستاسو لپاره یو ځانګړی block theme جوړول کې مرسته کوي. دا پایلې (legacy) Site Builder mode بدلوي چې ډیر انعطاف وړ او له Agent سره مرسته olacak approach دی.

## Theme Builder Onboarding Flow څه دی؟ {#what-is-the-theme-builder-onboarding-flow}

Theme Builder onboarding flow یو تعاملی تنظیم کولو wizard دی چې:

- تاسو ته په ډیزاین پریکړو کې لارښوونه کوي (رنګونه، فونټ، ترتیب)
- ستاسو د سایت بصريت اړتیاو اخیستلوي
- یو ځانګړی block theme جوړوي چې ستاسو اړتیاوو مطابق تنظیم شوی وي
- کله چې کار بشپای شي، Theme automatically فعال کیږي

دا flow له **Setup Assistant agent** دی چې وضاحت ورکونکې پوښتنې کوي او ستاسو theme په تدریجي ډول جوړوي.

## Theme Builder Onboarding پیل کول {#starting-the-theme-builder-onboarding}

### د پیل کولو لپاره пърو ځلې تنظیم (First-Run Setup) {#first-run-setup}

کله چې تاسو Superdav AI Agent ته په یو نوی WordPress installation کې په پیل کې راغږئ، تاسو به وګورئ:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

د Theme Builder onboarding flow ته ننوتل چې **"Build a custom theme"** غوره کړئ.

### manuall Activation {#manual-activation}

ستاسو کولی شئ په هر وخت کې Theme Builder onboarding پیل کړئ د درخواست کولو وسیله:

```
"Start the Theme Builder onboarding"
```

یا

```
"Help me create a custom theme"
```

## Onboarding Steps (Onboarding ګامونه) {#the-onboarding-steps}

### Step 1: Mode Selection (د ډول انتخاب) {#step-1-mode-selection}

Setup Assistant agent ستاسو غوره تاییدولو غوښتنه کوي:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** ډېری کارونکي لپاره توصیه کیږي؛ Agent ستاسو صنعت او اغیزو پر اساس ډیزاین وړاندیزونه کوي.

### Step 2: Site Specification (د سایت مشخصات) {#step-2-site-specification}

ستاسو د سایت په اړه پوښتنې ترلاسه کیږي:

- **مقرصه هدف**: تجارت الکترونیک، بلاگ، پورټ فولیو، SaaS او نور.
- **هدفونموونکي گروه**: کارلونکي یې څوک دي؟
- **برند رنگونه**: اصلي او دوهمي رنگونه (یا "زه معلوم نه دی")
- **لحن**: حرفي، خلاقانه، تفریحی، کمینه، او نور.

دا معلومات په **site_brief** یادګاری کې زیرمه کیږي، چې Agent هاید لاويو وختونو کې یې استعملوي.

### مرحله ۳: Design System Decisions (تصميم سیستمको निर्णयहरू) {#step-3-design-system-decisions}

Agent تاسو ته design token های انتخاب کولو راه وته لارښوونه کوي:

- **Typography**: فونټ Familie (serif, sans-serif, monospace) او اندازه کاڼي
- **Color palette**: اصلي، دوهمي، له stödونکي، او عصري رنگونه
- **Spacing**: کم حجم، عادي، یا په فراخ د ترتیبونو انداز کې
- **Motion**: انیمیشن او ترانسیسین (که غواړئ)

### مرحله ۴: Theme Generation (Theme جوړول) {#step-4-theme-generation}

Setup Assistant Agent ستاسو کاربنې block theme ته چارچوب ورکوي چې پکې موارد زیر شامل دي:

- `theme.json` چې ستاسو ټول design tokens یې ورته لري
- د عام ترتیبونو لپاره Block templates (د پرلپي صفحه، بلاگ، اړیکې)
- Custom block styles چې ستاسو design system سره مطابقت لري
- Theme metadata او WordPress سپورټ اعلانونه

### مرحله ۵: Activation and Verification (فعالیت او تایید) {#step-5-activation-and-verification}

Theme د خودی ترتیب سره په خودی ډول فعال کیږي، او تاسو به وګورئ:

```
✓ ستاسو کاربنې theme اوس ژوندۍ ده!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  د نوی design لیدو لپاره خپل site ته ورشي.
```

بیا تاسو کولی شئ ستاسو site ته راشي او تایید کړئ چې theme په سمه توګه ښکاره کیږي.

## Site Specification او site_brief Memory (مقرصه مشخصات او memory) {#site-specification-and-sitebrief-memory}

پله کولو وخت کې، Agent ستاسو site د مشخصات په **site_brief** memory category کې ترلاسه کوي. دا شامل دي:

- Site purpose او هدفونه
- Target audience
- Brand colors او لحن
- Design preferences
- Content structure

### site_brief مهم زه کوه؟ (چې site_brief مهم دی) {#why-sitebrief-matters}

په راتلونکو وختونو کې، Agent هاید ستاسو site_brief استعملوي ترڅو:

دیزاین هميشه ورخاستانه کړئ

همیشه تغییرات کې د ډیزاین هميشه ورخاستانه کړئ.
په دې اړه وړاندیز وکړئ چې د خپل سایت هدف سره سمول شي.
په شرایطو پام وکړئ او مشورې ورکړئ چې په هغه 상황 کې مناسب وي.
د تنظیم کولو لپاره پریکړو تکرار नगर्न وکړئ.

### د خپله site_brief لیدل {#viewing-your-sitebrief}

تاسو کولی شئ Agent ته پوښتنه وکړئ:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

Agent هغه مشخصات چې تاسو یې 저장 کړی، ښیي.

## د تنظیم کولو وروسته (After Onboarding) {#customizing-after-onboarding}

د Theme Builder onboarding پوره کیدو وروسته، تاسو کولی شئ:

### Design System Aesthetics Skill کارول {#use-the-design-system-aesthetics-skill}

د ډیزاین اصلاحات غوښتنه وکړئ:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** تاسو ته په ځانګړي ډیزایني تازه کولو کې مرسته کوي.

### theme.json Direktore Edit کړئ {#edit-themejson-directly}

د پیشرفته کارکوونکو لپاره، د `/wp-content/themes/[theme-name]/theme.json` ویره کړئ ترڅو زیرو شي:

- Color tokens (رنګ کوډونه)
- Typography scales (خطوطको اندازه)
- Spacing values (فاصلو मानहरू)
- Border and shadow definitions (مرز او سټhadow تعریفونه)

### Custom Block Templates جوړ کړئ {#create-custom-block-templates}

د WordPress block editor څخه کار وا관계 وکړئ ترڅو د زیرو لپاره ځانګړتیا شوي قالبونه جوړ کړئ:

- Homepage layouts (د پرچې ترتیبونه)
- Blog post pages (د بلاګ پوسټ صفحات)
- Product pages (د محصول صفحات)
- Contact forms (د اړیکې فارمونه)

## Comparison: Old vs. New Onboarding {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## مشکلو حلول (Troubleshooting) {#troubleshooting}

**د onboarding جریان پوره نه شوې**
- جریان بیا پیل کړئ: "Start the Theme Builder onboarding"
- وګورئ چې ستاسو WordPress installation تازه ده
- تأیید کړئ چې Setup Assistant agent فعال دی

**مخلوطی سایت به کار نرفته است**
- مطمئن شوید که عامل (agent) به حافظه دسترسی دارد
- از عامل بخواهید "خلاصه سایت من را یادآوری کند" (recall my site brief)
- بررسی کنید که آیا حافظه در تنظیمات شما فعال است یا خیر

**تم تولید شده با ترجیحات من مطابقت ندارد**
- برای اصلاح آن، از مهارت Design System Aesthetics استفاده کنید
- از عامل بخواهید "تم را با [تغییرات خاص] بازتولید کند" (regenerate the theme with [specific changes])
- مستقیماً فایل theme.json را ویرایش کنید تا کنترل دقیق داشته باشید

## مراحل بعدی {#next-steps}

بعد از تکمیل آموزش Theme Builder:

۱. **سایت خود را بررسی کنید**: به سایت خود بروید تا تم جدید را ببینید
۲. **طراحی را اصلاح کنید**: برای تنظیمات، از مهارت Design System Aesthetics استفاده کنید
۳. **محتوا اضافه کنید**: شروع به ساخت محتوای سایت خود کنید
۴. **قابلیت‌ها را کشف کنید**: در مورد قابلیت‌های دیگر عامل مانند scaffold-block-theme و activate-theme بیاموزید
