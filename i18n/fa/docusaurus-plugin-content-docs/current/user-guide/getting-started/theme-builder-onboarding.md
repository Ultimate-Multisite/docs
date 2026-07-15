---
title: جریان آشناسازی سازنده قالب
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# جریان آشناسازی Theme Builder

Superdav AI Agent v1.12.0 یک **جریان آشناسازی Theme Builder** راهنمای تعاملی معرفی می‌کند که به شما کمک می‌کند در مرحله راه‌اندازی اولیه، یک قالب بلاک (block theme) سفارشی بسازید. این ویژگی، حالت قدیمی Site Builder را با رویکردی منعطف‌تر و مبتنی بر دستیار هوش مصنوعی جایگزین می‌کند.

## جریان آشناسازی Theme Builder چیست؟ {#what-is-the-theme-builder-onboarding-flow}

جریان آشناسازی Theme Builder یک ویزارد (wizard) راه‌اندازی تعاملی است که:

- شما را در تصمیمات طراحی (رنگ‌ها، تایپوگرافی، چیدمان) راهنمایی می‌کند.
- ترجیحات هویت بصری سایت شما را ثبت می‌کند.
- یک قالب بلاک سفارشی متناسب با نیازهای شما تولید می‌کند.
- پس از اتمام، قالب را به طور خودکار فعال می‌کند.

این جریان توسط **Setup Assistant agent** کار می‌کند؛ عاملی که سؤالات شفاف‌سازی می‌کند و قالب شما را به صورت تدریجی می‌سازد.

## شروع آشناسازی Theme Builder {#starting-the-theme-builder-onboarding}

### راه‌اندازی اولین بار {#first-run-setup}

هنگامی که برای اولین بار Superdav AI Agent را روی یک نصب WordPress جدید اجرا می‌کنید، این پیام را مشاهده خواهید کرد:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

برای ورود به جریان آشناسازی Theme Builder، گزینه **"Build a custom theme"** را انتخاب کنید.

### فعال‌سازی دستی {#manual-activation}

شما همچنین می‌توانید در هر زمانی با درخواست دستور زیر، آشناسازی Theme Builder را شروع کنید:

```
"Start the Theme Builder onboarding"
```

یا

```
"Help me create a custom theme"
```

## مراحل آشناسازی {#the-onboarding-steps}

### مرحله ۱: انتخاب حالت {#step-1-mode-selection}

Setup Assistant agent در مورد ترجیح شما سؤال می‌کند:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**حالت Guided** برای اکثر کاربران توصیه می‌شود؛ زیرا عامل، بر اساس صنعت و اهداف شما، توصیه‌های طراحی ارائه می‌دهد.

### مرحله ۲: مشخصات سایت {#step-2-site-specification}

از شما در مورد سایتتان سؤال می‌شود:

- **هدف سایت**: تجارت الکترونیک، وبلاگ، پورتفولیو، SaaS و غیره.
- **مخاطب هدف**: بازدیدکنندگان شما چه کسانی هستند؟
- **رنگ‌های برند**: رنگ‌های اصلی و ثانویه (یا "مطمئن نیستم")
- **لحن**: حرفه‌ای، خلاقانه، بازیگوش، مینیمال و غیره.

این اطلاعات در حافظه **site_brief** شما ذخیره می‌شود، که عامل‌ها در جلسات بعدی به آن ارجاع می‌دهند.

### مرحله ۳: تصمیمات سیستم طراحی (Design System) {#step-3-design-system-decisions}

عامل شما را در انتخاب توکن‌های طراحی راهنمایی می‌کند:

- **تایپوگرافی**: خانواده فونت (سریف، سنس-سریف، مونو اسپیس) و مقیاس اندازه
- **پالت رنگ**: رنگ‌های اصلی، ثانویه، تأکیدی و خنثی
- **فاصله‌گذاری**: چیدمان‌های فشرده، عادی یا باز
- **حرکت (Motion)**: انیمیشن‌ها و انتقال‌ها (در صورت تمایل)

### مرحله ۴: تولید قالب (Theme Generation) {#step-4-theme-generation}

Setup Assistant agent قالب بلاک سفارشی شما را با موارد زیر ساختاردهی می‌کند:

- `theme.json` شامل تمام توکن‌های طراحی شما
- قالب‌های بلاک برای چیدمان‌های رایج (صفحه اصلی، وبلاگ، تماس با ما)
- استایل‌های بلاک سفارشی که با سیستم طراحی شما مطابقت دارند
- متادیتا و اعلامیه پشتیبانی WordPress قالب

### مرحله ۵: فعال‌سازی و تأیید {#step-5-activation-and-verification}

قالب به طور خودکار فعال می‌شود و شما این پیام را مشاهده خواهید کرد:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

سپس می‌توانید به سایت خود مراجعه کرده و تأیید کنید که قالب به درستی نمایش داده می‌شود.

## مشخصات سایت و حافظه site_brief {#site-specification-and-sitebrief-memory}

در طول آشناسازی، عامل مشخصات سایت شما را در یک دسته حافظه به نام **site_brief** ثبت می‌کند. این شامل موارد زیر است:

- هدف و اهداف سایت
- مخاطب هدف
- رنگ‌ها و لحن برند
- ترجیحات طراحی
- ساختار محتوا

### اهمیت site_brief {#why-sitebrief-matters}

در جلسات آینده، عامل‌ها از site_brief شما برای:

- حفظ ثبات طراحی در طول تغییرات
- پیشنهاد ویژگی‌های همسو با هدف سایت شما
- ارائه توصیه‌های آگاه به بافت (context-aware)
- جلوگیری از تکرار سؤالات راه‌اندازی

### مشاهده site_brief شما {#viewing-your-sitebrief}

می‌توانید از عامل بپرسید:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

عامل مشخصات سایت ذخیره‌شده شما را نمایش خواهد داد.

## سفارشی‌سازی پس از آشناسازی {#customizing-after-onboarding}

پس از تکمیل آشناسازی Theme Builder، شما می‌توانید:

### استفاده از مهارت زیبایی‌شناسی سیستم طراحی (Design System Aesthetics Skill) {#use-the-design-system-aesthetics-skill}

درخواست اصلاحات طراحی:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** شما را در به‌روزرسانی‌های هدفمند طراحی راهنمایی می‌کند.

### ویرایش مستقیم theme.json {#edit-themejson-directly}

برای کاربران پیشرفته، فایل `/wp-content/themes/[theme-name]/theme.json` را ویرایش کنید تا موارد زیر را تنظیم نمایید:

- توکن‌های رنگ
- مقیاس‌های تایپوگرافی
- مقادیر فاصله‌گذاری
- تعاریف حاشیه و سایه

### ایجاد قالب‌های بلاک سفارشی {#create-custom-block-templates}

از ویرایشگر بلاک WordPress برای ایجاد قالب‌های سفارشی برای موارد زیر استفاده کنید:

- چیدمان‌های صفحه اصلی
- صفحات پست وبلاگ
- صفحات محصول
- فرم‌های تماس

## مقایسه: آشناسازی قدیمی در مقابل جدید {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## عیب‌یابی (Troubleshooting) {#troubleshooting}

**جریان آشناسازی کامل نشد**
- جریان را مجدداً شروع کنید: "Start the Theme Builder onboarding"
- بررسی کنید که نصب WordPress شما به‌روز باشد
- تأیید کنید که Setup Assistant agent فعال است

**site_brief من استفاده نمی‌شود**
- تأیید کنید که عامل به حافظه دسترسی دارد
- از عامل بخواهید که "recall my site brief" کند
- بررسی کنید که حافظه در تنظیمات شما فعال باشد

**قالب تولید شده با ترجیحات من مطابقت ندارد**
- از Design System Aesthetics skill برای اصلاح آن استفاده کنید
- از عامل بخواهید که "regenerate the theme with [specific changes]" کند
- برای کنترل دقیق، theme.json را مستقیماً ویرایش کنید

## گام‌های بعدی {#next-steps}

پس از تکمیل آشناسازی Theme Builder:

۱. **سایت خود را تأیید کنید**: به سایت خود مراجعه کنید تا قالب جدید را ببینید
۲. **طراحی را اصلاح کنید**: از Design System Aesthetics skill برای تنظیمات استفاده کنید
۳. **محتوا اضافه کنید**: شروع به ساخت محتوای سایت خود کنید
۴. **قابلیت‌ها را کاوش کنید**: درباره قابلیت‌های دیگر عامل مانند scaffold-block-theme و activate-theme بیاموزید
