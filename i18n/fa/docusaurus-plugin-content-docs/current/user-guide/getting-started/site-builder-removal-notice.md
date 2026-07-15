---
title: اطلاعیه حذف حالت سازنده سایت
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# حذف حالت سازنده سایت (Site Builder Mode)

**حالت Site Builder در Superdav AI Agent v1.12.0 حذف شده است.** اگر از حالت Site Builder استفاده می‌کردید، باید برای ساخت قالب و راه‌اندازی سایت به **عامل Setup Assistant** مهاجرت کنید.

## چه اتفاقی افتاد؟ {#what-happened}

### Site Builder Mode (قدیمی) {#site-builder-mode-legacy}

حالت Site Builder یک رابط کاربری مبتنی بر ویزارد (Wizard) برای موارد زیر بود:

- ساخت سایت از قالب‌ها
- پیکربندی تنظیمات اولیه
- انتخاب یک قالب (Theme)
- تنظیم محتوای اولیه

### جایگزین آن چه شد؟ {#what-replaced-it}

اکنون **عامل Setup Assistant** تمام قابلیت‌های Site Builder را با موارد زیر مدیریت می‌کند:

- راه‌اندازی با راهنمایی عامل، که انعطاف‌پذیرتر است
- گزینه‌های سفارشی‌سازی قالب بهتر
- یکپارچه‌سازی با آشناسازی Theme Builder
- حافظه site_brief دائمی برای جلسات بعدی

## اگر از Site Builder Mode استفاده می‌کردید {#if-you-were-using-site-builder-mode}

### سایت‌های شما امن هستند {#your-sites-are-safe}

- سایت‌های موجود که با Site Builder Mode ساخته شده‌اند، همچنان کار می‌کنند.
- هیچ گونه از دست رفتن داده یا اختلال در سایت وجود ندارد.
- می‌توانید به طور عادی به مدیریت سایت‌های خود ادامه دهید.

### به عامل Setup Assistant مهاجرت کنید {#migrate-to-setup-assistant-agent}

برای راه‌اندازی سایت جدید یا تغییر قالب، از عامل Setup Assistant استفاده کنید:

```
"Help me set up a new site"
```

یا

```
"Start the Theme Builder onboarding"
```

عامل Setup Assistant با انعطاف‌پذیری بیشتر، همان عملکرد را ارائه می‌دهد.

## مقایسه: Site Builder در مقابل Setup Assistant {#comparison-site-builder-vs-setup-assistant}

| ویژگی | Site Builder (حذف شده) | Setup Assistant (جدید) |
|---------|----------------------|----------------------|
| روش راه‌اندازی | فرم ویزارد | مکالمه عامل (Agent conversation) |
| انتخاب قالب | قالب‌های از پیش تعریف شده | تولید سفارشی |
| سفارشی‌سازی | گزینه‌های محدود | سیستم طراحی کامل |
| خلاصه سایت (Site brief) | ذخیره نمی‌شود | حافظه دائمی |
| جلسات آینده | تکرار راه‌اندازی | استفاده از site_brief ذخیره‌شده |
| انعطاف‌پذیری | گردش کار ثابت | مکالمه تطبیقی |

## مهاجرت به عامل Setup Assistant {#migrating-to-setup-assistant-agent}

### برای سایت‌های جدید {#for-new-sites}

به جای استفاده از Site Builder Mode:

۱. درخواست دهید: "Help me set up a new site"
۲. عامل Setup Assistant شما را در مورد موارد زیر راهنمایی می‌کند:
   - هدف و اهداف سایت
   - مخاطب هدف
   - هویت برند
   - تولید قالب (Theme generation)
   - پیکربندی اولیه

### برای سایت‌های موجود {#for-existing-sites}

اگر سایت موجودی از Site Builder Mode دارید:

۱. می‌توانید همچنان با آن کار کنید.
۲. برای به‌روزرسانی قالب، درخواست دهید: "Redesign my site"
۳. عامل Setup Assistant به شما کمک می‌کند تا یک قالب جدید بسازید.
۴. داده‌های سایت شما بدون تغییر باقی می‌مانند.

### برای تغییر قالب {#for-theme-changes}

به جای انتخاب قالب در Site Builder Mode:

۱. درخواست دهید: "Change my theme"
۲. عامل Setup Assistant:
   - در مورد ترجیحات طراحی شما سؤال خواهد کرد.
   - یک قالب سفارشی تولید می‌کند.
   - آن را روی سایت شما فعال می‌کند.

## تفاوت‌های کلیدی {#key-differences}

### Site Builder Mode {#site-builder-mode}

```
۱. انتخاب یک قالب
۲. انتخاب یک Theme
۳. پیکربندی تنظیمات اولیه
۴. اتمام
```

### Setup Assistant Agent {#setup-assistant-agent}

```
۱. توصیف هدف سایت شما
۲. تعریف مخاطب هدف شما
۳. انتخاب ترجیحات طراحی
۴. عامل قالب سفارشی تولید می‌کند
۵. عامل قالب را فعال می‌کند
۶. site_brief برای جلسات آینده ذخیره می‌شود
```

## مزایای عامل Setup Assistant {#benefits-of-setup-assistant-agent}

### انعطاف‌پذیری بیشتر {#more-flexible}

- توصیف سایت خود به زبان طبیعی
- دریافت توصیه‌های سفارشی
- تطبیق با نیازهای خاص شما

### سفارشی‌سازی بهتر {#better-customization}

- تولید قالب سفارشی
- تصمیم‌گیری در سیستم طراحی
- توکن‌های طراحی دائمی (Persistent design tokens)

### حافظه دائمی {#persistent-memory}

- site_brief شما ذخیره می‌شود.
- عامل‌های آینده سایت شما را درک می‌کنند.
- نیازی به تکرار اطلاعات راه‌اندازی نیست.

### گردش کار یکپارچه {#integrated-workflow}

- آشناسازی Theme Builder
- مهارت Design System Aesthetics
- کنترل‌های قابلیت در دسترس بودن (Ability Visibility controls)
- همه چیز به طور یکپارچه کار می‌کنند.

## عیب‌یابی {#troubleshooting}

### من Site Builder Mode را پیدا نمی‌کنم {#i-cant-find-site-builder-mode}

حالت Site Builder حذف شده است. در عوض از عامل Setup Assistant استفاده کنید:

```
"Help me set up a new site"
```

### می‌خواهم سایتی را که با Site Builder ساخته شده بود، بازسازی کنم {#i-want-to-recreate-a-site-from-site-builder}

می‌توانید آن را با عامل Setup Assistant بازسازی کنید:

۱. درخواست دهید: "Help me set up a new site"
۲. هدف و طراحی سایت اصلی خود را توصیف کنید.
۳. عامل یک قالب مشابه تولید خواهد کرد.
۴. site_brief شما برای مراجع بعدی ذخیره خواهد شد.

### سایت Site Builder موجود من کار نمی‌کند {#my-existing-site-builder-site-isnt-working}

سایت‌های موجود ساخته شده با Site Builder Mode همچنان کار می‌کنند. اگر با مشکل مواجه شدید:

۱. بررسی کنید که آیا قالب شما همچنان فعال است.
۲. تأیید کنید که پلاگین‌های شما فعال هستند.
۳. گزارش‌های خطای WordPress را بررسی کنید.
۴. اگر مشکل ادامه داشت، با پشتیبانی تماس بگیرید.

### آیا هنوز می‌توانم از قالب‌های قدیمی Site Builder خودم استفاده کنم؟ {#can-i-still-use-my-old-site-builder-templates}

قالب‌های Site Builder دیگر در دسترس نیستند. با این حال:

- سایت‌های موجود شما همچنان کار می‌کنند.
- می‌توانید سایت‌های مشابه را با عامل Setup Assistant بازسازی کنید.
- عامل Setup Assistant گزینه‌های سفارشی‌سازی بیشتری ارائه می‌دهد.

## مراحل بعدی {#next-steps}

۱. **برای سایت‌های جدید**: از عامل Setup Assistant استفاده کنید.
۲. **برای سایت‌های موجود**: همچنان از آن‌ها استفاده کنید.
۳. **برای تغییر قالب**: از عامل Setup Assistant کمک بگیرید.
۴. **برای بهبود طراحی**: از مهارت Design System Aesthetics استفاده کنید.

## موضوعات مرتبط {#related-topics}

- **Theme Builder Onboarding**: راه‌اندازی راهنمای قالب‌های سفارشی
- **Setup Assistant Agent**: راه‌اندازی سایت با راهنمایی عامل
- **Site Specification Skill**: تعریف اهداف و مخاطب سایت شما
- **Design System Aesthetics Skill**: بهبود هویت بصری سایت شما
