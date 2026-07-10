---
title: قابلیت‌های سازنده قالب
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# قابلیت‌های Theme Builder: ساختاردهی و فعال‌سازی Block Themes {#theme-builder-abilities-scaffold-and-activate-block-themes}

Superdav AI Agent v1.12.0 دو قابلیت قدرتمند معرفی می‌کند که به شما امکان می‌دهند قالب‌های بلوکی (block themes) سفارشی را مستقیماً از طریق رابط چت تولید و مستقر کنید.

## نمای کلی (Overview) {#overview}

قابلیت‌های **scaffold-block-theme** و **activate-theme** به ایجنت‌ها اجازه می‌دهند که:
- قالب‌های بلوکی کامل و آماده برای استفاده در محیط عملیاتی (production-ready) را بر اساس مشخصات شما تولید کنند.
- قالب‌ها را بدون نیاز به دخالت دستی، به طور خودکار در سایت شما فعال کنند.
- از طریق تصمیم‌گیری‌های طراحی هدایت‌شده، هویت بصری منسجمی ایجاد کنند.

## ساختاردهی Block Theme (Scaffold Block Theme) {#scaffold-block-theme}

قابلیت **scaffold-block-theme** یک قالب بلوکی WordPress جدید با یک ساختار کامل قالب، شامل موارد زیر، تولید می‌کند:

- تنظیمات `theme.json` با توکن‌های طراحی (design tokens)
- فایل‌های قالب بلوک برای طرح‌بندی‌های رایج
- استایل‌ها و تغییرات بلوک سفارشی
- متادیتا و اعلامیه پشتیبانی قالب

### نحوه فراخوانی (How to Invoke) {#how-to-invoke}

در چت خود با Superdav AI Agent، می‌توانید درخواست تولید قالب را بدهید:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

ایجنت این مراحل را انجام خواهد داد:
1. ترجیحات طراحی شما را از طریق مکالمه جمع‌آوری می‌کند.
2. ساختار کامل قالب را تولید می‌کند.
3. تمام فایل‌های لازم قالب را ایجاد می‌کند.
4. قالب را برای فعال‌سازی آماده می‌سازد.

### خروجی مورد انتظار (Expected Output) {#expected-output}

هنگامی که این قابلیت با موفقیت اجرا شود، موارد زیر را مشاهده خواهید کرد:

- تأیید اینکه قالب با موفقیت ساختاردهی شده است.
- نام و محل قرارگیری قالب.
- خلاصه‌ای از توکن‌های طراحی اعمال شده (رنگ‌ها، تایپوگرافی، فاصله).
- وضعیت آماده برای فعال‌سازی.

مثال خروجی:
```
✓ Theme "Modern Agency" scaffolded successfully
  Location: /wp-content/themes/modern-agency/
  Colors: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Status: Ready to activate
```

## فعال‌سازی Theme (Activate Theme) {#activate-theme}

قابلیت **activate-theme** سایت شما را به یک قالب بلوکی که اخیراً ساختاردهی شده یا یک قالب موجود، تغییر می‌دهد.

### نحوه فراخوانی (How to Invoke) {#how-to-invoke-1}

پس از ساختاردهی یک قالب، می‌توانید بلافاصله آن را فعال کنید:

```
"Activate the Modern Agency theme"
```

یا هر قالب موجود دیگری را فعال کنید:

```
"Switch to the Twentytwentyfour theme"
```

### خروجی مورد انتظار (Expected Output) {#expected-output-1}

هنگامی که فعال‌سازی موفقیت‌آمیز باشد:

- تأیید قالب فعال شده.
- نام قالب قبلی (برای مرجع).
- آدرس سایت که قالب در آن فعال شده است.
- هرگونه یادداشت تنظیمات خاص قالب.

مثال خروجی:
```
✓ Theme activated successfully
  Active theme: Modern Agency
  Previous theme: Twentytwentyfour
  Live at: https://yoursite.com
  Note: Check your homepage to verify the layout
```

## گردش کار: ساختاردهی و فعال‌سازی (Workflow: Scaffold and Activate) {#workflow-scaffold-and-activate}

یک گردش کار معمول، هر دو قابلیت را ترکیب می‌کند:

1. **درخواست تولید قالب**: "Create a block theme for my SaaS landing page"
2. **ایجنت ساختاردهی قالب**: فایل‌ها و توکن‌های طراحی را تولید می‌کند.
3. **بررسی و اصلاح**: در صورت نیاز، تغییرات طراحی را بحث می‌کنید.
4. **فعال‌سازی**: "Activate the theme now"
5. **تأیید**: برای اطمینان از فعال بودن طراحی جدید، به سایت خود مراجعه می‌کنید.

## توکن‌های طراحی و سفارشی‌سازی (Design Tokens and Customization) {#design-tokens-and-customization}

قالب‌های ساختاردهی شده از توکن‌های طراحی WordPress (از طریق `theme.json`) برای موارد زیر استفاده می‌کنند:

- **رنگ‌ها**: پالت اصلی (Primary)، ثانویه (Secondary)، تأکید (Accent)، خنثی (Neutral)
- **تایپوگرافی**: خانواده‌های فونت، اندازه‌ها، وزن‌ها، ارتفاع خطوط
- **فاصله**: مقیاس‌های پدینگ (Padding)، مارجین (Margin)، گپ (Gap)
- **حاشیه**: توکن‌های شعاع و عرض
- **سایه**: سطوح ارتفاع (Elevation levels)

این توکن‌ها در `theme.json` متمرکز شده‌اند، که تنظیم کل سیستم طراحی شما را از یک فایل آسان می‌سازد.

## محدودیت‌ها و نکات (Limitations and Notes) {#limitations-and-notes}

- قالب‌ها در مسیر `/wp-content/themes/` ساختاردهی می‌شوند و باید از قراردادهای نام‌گذاری WordPress پیروی کنند.
- فعال‌سازی نیاز به مجوزهای مناسب در سایت WordPress شما دارد.
- کد PHP سفارشی در قالب‌ها حداقل است؛ برای عملکرد پیچیده، از پلاگین‌ها استفاده کنید.
- قالب‌های بلوکی با WordPress 5.9 و نسخه‌های جدیدتر بهترین عملکرد را دارند.

## عیب‌یابی (Troubleshooting) {#troubleshooting}

**قالب پس از ساختاردهی ظاهر نمی‌شود**
- بررسی کنید که دایرکتوری قالب وجود داشته و مجوزهای مناسبی داشته باشد.
- مطمئن شوید که `theme.json` یک JSON معتبر است.
- اطمینان حاصل کنید که نام قالب با قالب‌های موجود تداخلی ندارد.

**فعال‌سازی ناموفق است**
- تأیید کنید که مجوز مدیر (administrator) را دارید.
- بررسی کنید که دایرکتوری قالب توسط WordPress قابل خواندن باشد.
- برای جزئیات بیشتر، گزارش‌های خطای WordPress را مرور کنید.

**توکن‌های طراحی اعمال نمی‌شوند**
- بررسی کنید که نحو (syntax) `theme.json` صحیح باشد.
- هرگونه پلاگین کش (caching plugins) را پاک کنید.
- مطمئن شوید که نسخه WordPress شما از توکن‌های مورد استفاده پشتیبانی می‌کند.

## گام‌های بعدی (Next Steps) {#next-steps}

پس از فعال‌سازی قالب، می‌توانید:
- از **Design System Aesthetics skill** برای اصلاح تایپوگرافی، رنگ‌ها و فاصله استفاده کنید.
- استایل‌های بلوک منفرد را از طریق ویرایشگر بلوک WordPress سفارشی‌سازی کنید.
- CSS سفارشی را در فایل `style.css` قالب اضافه نمایید.
- قالب‌های بلوک سفارشی برای انواع صفحات خاص ایجاد کنید.
