---
title: Gwagwada kan wajen cire nau'in gudanar da shafi na wuri
sidebar_position: 19
_i18n_hash: 3abf37d17f19e045e9d9da3ffe8e3179
---
# اطلاع در suje Site Builder Mode

**Site Builder mode a cikin Superdav AI Agent v1.12.0 an cire shi.** Idan kake amfani da Site Builder mode, dole ne ka tura shi ga **Setup Assistant agent** don samar da theme da shirya site.

## Me Ya Faruwa?

### Site Builder Mode (Wanda Ya Wuce)

Site Builder mode wuri ne mai amfani da hanyar magana (wizard-based interface) don:

- Samar da sites daga templates
- Shirye da wasu siffofi na asali
- Zaɓar theme
- Shirya abubuwan farko na bayanai

### Wane Ya Ƙirira Shi?

**Setup Assistant agent** yanzu yana gudanar da duk ayyukan Site Builder tare da:

- Shirye-shiryen shirya da sauƙi, wanda Agent ke bayarwa
- Zaɓuɗaci mafi kyau na shigar da theme
- Haɗin kai da onboarding na Theme Builder
- Hayataccen "site_brief" don wasu lokuta na gaba

## Idan Kake Amfani da Site Builder Mode

### Sites Ƙarewa Su Safe Ne

- Sites da aka ƙirƙira tare da Site Builder mode suna aiki nan yanzu
- Ba wata nasara ko rashin tsarin site ba
- Za ka ci gaba da sarrafa sites ɗinka cikin karshe

### Tura shi ga Setup Assistant Agent

Don shirya site na sabon ko canza theme, yi amfani da Setup Assistant agent:

```
"Help me set up a new site"
```

ko

```
"Start the Theme Builder onboarding"
```

Setup Assistant agent yana ba kaɗai wannan ayyukan tare da sauƙin magana.

## Bayanai: Site Builder vs. Setup Assistant

| Siffa | Site Builder (An Cire) | Setup Assistant (Mai Sabon) |
|---|---|---|
| Hanya na Shirya | Wurin Magana (Wizard form) | Tattaunawa da Agent |
| Zaɓar Theme | Templates da aka tsara a wuri | Samarwa ta musamman |
| Shirye-shiryen | Zaɓuɗaci Mai iyakancewa | Dijitalin Zane na Gaba |
| Site brief | Ba ya ajiye ba | Hayataccen "site_brief" |
| Wasu Lokuta Na Gaba | Shirya Da Sama | Amfani da site_brief da aka ajiye |
| Sauƙi | Workflow Mai Tsaro | Tattaunawa Mai Canza |

## Shirya ga Setup Assistant Agent

### Don Sites Na Sabon

به جای استفاده از حالت Site Builder:

۱. درخواست شما: "کمک کن یک سایت جدید را راه‌اندازی کنم"
۲. عامل کمک راه‌انداز (Setup Assistant agent) شما را در موارد زیر راهنمایی خواهد کرد:
   - هدف و اهداف سایت
   - مخاطبان هدف
   - هویت برند
   - تولید قالب (Theme generation)
   - تنظیمات اولیه

### برای سایت‌های موجود

اگر یک سایت از حالت Site Builder دارید:

۱. می‌توانید همچنان از آن به همان شکل استفاده کنید
۲. برای به‌روزرسانی قالب، درخواست دهید: "طراحی مجدد سایت من"
۳. عامل کمک راه‌انداز (Setup Assistant agent) به شما در ساختن یک قالب جدید کمک خواهد کرد
۴. داده‌های سایت شما بدون تغییر باقی می‌ماند

### برای تغییرات قالب

به جای انتخاب قالب در حالت Site Builder:

۱. درخواست دهید: "قالب من را تغییر بده"
۲. عامل کمک راه‌انداز (Setup Assistant agent) موارد زیر را انجام می‌دهد:
   - درباره ترجیحات طراحی شما سؤال می‌کند
   - یک قالب سفارشی تولید می‌کند
   - آن را روی سایت شما فعال می‌کند

## تفاوت‌های کلیدی

### حالت Site Builder

```
۱. انتخاب قالب
۲. انتخاب قالب (Theme)
۳. تنظیمات اولیه را پیکربندی کنید
۴. تمام شد
```

### عامل کمک راه‌انداز (Setup Assistant Agent)

```
۱. هدف سایت خود را توصیف کنید
۲. مخاطبان هدف خود را تعریف کنید
۳. ترجیحات طراحی خود را انتخاب کنید
۴. عامل قالب سفارشی تولید می‌کند
۵. عامل قالب را فعال می‌کند
۶. خلاصه سایت برای جلسات بعدی ذخیره می‌شود
```

## مزایای عامل کمک راه‌انداز (Setup Assistant Agent)

### انعطاف‌پذیری بیشتر

- سایت خود را به زبان طبیعی توصیف کنید
- توصیه‌های سفارشی دریافت کنید
- با نیازهای خاص خود سازگار شوید

### شخصی‌سازی بهتر

- تولید قالب سفارشی
- تصمیمات سیستم طراحی (Design system decisions)
- توکن‌های طراحی پایدار (Persistent design tokens)

### حافظه دائمی

- خلاصه سایت شما ذخیره می‌شود
- عامل‌های آینده از سایت شما با آن آشنا می‌شوند
- نیازی به تکرار اطلاعات راه‌اندازی نیست

### گردش کار یکپارچه

- آموزش سازنده قالب (Theme Builder onboarding)
- مهارت زیبایی‌شناسی سیستم طراحی (Design System Aesthetics skill)
- قابلیت کنترل دید (Ability Visibility controls)
- همه موارد به طور یکپارچه با هم کار می‌کنند

## عیب‌یابی

### من حالت Site Builder را پیدا نمی‌کنم

حالت Site Builder حذف شده است. لطفاً از عامل کمک راه‌انداز (Setup Assistant agent) استفاده کنید:

"من کمک کن یک سایت جدید را راه‌اندازی کنم"

### من می‌خواهم یک سایت را از Site Builder دوباره بسازم

شما می‌توانید آن را با عامل دستیار تنظیمات (Setup Assistant agent) بازسازی کنید:

۱. درخواست دهید: "من کمک کن یک سایت جدید را راه‌اندازی کنم"
۲. هدف و طراحی سایت اصلی خود را توصیف کنید
۳. عامل یک قالب مشابه تولید خواهد کرد
۴. خلاصه سایت شما (site_brief) برای مرجع بعدی ذخیره می‌شود

### سایت Site Builder فعلی من کار نمی‌کند

سایت‌های ساخته شده با حالت Site Builder همچنان کار می‌کنند. اگر مشکلی دارید:

۱. بررسی کنید که آیا قالب شما هنوز فعال است یا خیر
۲. مطمئن شوید که افزونه‌های شما فعال هستند
۳. لاگ‌های خطا (error logs) وردپرس را چک کنید
۴. اگر مشکل ادامه داشت، با پشتیبانی تماس بگیرید

### آیا می‌توانم از قالب‌های قدیمی Site Builder خود استفاده کنم؟

قالب‌های Site Builder دیگر در دسترس نیستند. اما:

- سایت‌های فعلی شما همچنان کار می‌کنند
- می‌توانید سایت‌های مشابه را با عامل دستیار تنظیمات بازسازی کنید
- عامل دستیار تنظیمات گزینه‌های سفارشی بیشتری ارائه می‌دهد

## مراحل بعدی

۱. **برای سایت‌های جدید**: از عامل دستیار تنظیمات (Setup Assistant agent) استفاده کنید
۲. **برای سایت‌های موجود**: همچنان از آن‌ها به همان شکل استفاده کنید
۳. **برای تغییر قالب**: از عامل دستیار تنظیمات کمک بگیرید
۴. **برای اصلاح طراحی**: از مهارت زیبایی سیستم طراحی (Design System Aesthetics skill) استفاده کنید

## موضوعات مرتبط

- **ورود در سازنده قالب (Theme Builder Onboarding)**: راه‌اندازی هدایت‌شده برای قالب‌های سفارشی
- **عامل دستیار تنظیمات (Setup Assistant Agent)**: راه‌اندازی سایت با راهنمایی عامل
- **مهارت مشخصات سایت (Site Specification Skill)**: اهداف و مخاطبان سایت خود را تعریف کنید
- **مهارت زیبایی سیستم طراحی (Design System Aesthetics Skill)**: هویت بصری سایت خود را اصلاح کنید
