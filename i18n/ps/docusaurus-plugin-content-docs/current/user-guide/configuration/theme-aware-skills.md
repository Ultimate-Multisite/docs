---
title: موضوعات پر اساس مهارتونه
sidebar_position: 27
_i18n_hash: b61ebe1e7de0e5e8edb96c9bc21743cc
---
# مهارت‌های آگاه به قالب (Theme-Aware Skills) {#theme-aware-skills}

Superdav AI Agent v1.10.0 چهار مهارت جدید داخلی آگاه به قالب را عرضه کرده است که به طور خودکار با قالب وردپرس فعال شما سازگار می‌شوند. این مهارت‌ها راهنمایی و قابلیت‌های تخصصی را بر اساس معماری و ویژگی‌های قالب شما ارائه می‌دهند.

## مهارت‌های آگاه به قالب چیست؟ {#what-are-theme-aware-skills}

مهارت‌های آگاه به قالب، پایگاه‌های دانش و مجموعه‌های ابزاری از پیش تنظیم شده هستند که دستیار هوش مصنوعی بر اساس قالب وردپرس فعال در سایت شما به طور خودکار انتخاب می‌کند. وقتی شما قالب عوض می‌کنید، مهارت‌های موجود دستیار به صورت خودکار به‌روز می‌شوند — نیازی به تنظیم دستی نیست.

هر مهارت شامل موارد زیر است:

- **مستندات مخصوص قالب** — راهنمایی برای استفاده و سفارشی‌سازی قالب
- **ارجاعات بلوک و الگو (Block and pattern references)** — بلوک‌ها، الگوها و گزینه‌های طراحی موجود
- **مثال‌های سفارشی‌سازی** — قطعات کد و الگوهای پیکربندی برای کارهای رایج
- **بهترین شیوه‌ها (Best practices)** — توصیه‌هایی برای معماری و گردش کار قالب

## مهارت‌های آگاه به قالب موجود {#available-theme-aware-skills}

### قالب‌های بلوکی (Block Themes) {#block-themes}

**برای چه قاره‌ای است:** قالب‌هایی که از معماری مبتنی بر بلوک وردپرس (Full Site Editing) استفاده می‌کنند.

مهارت قالب‌های بلوکی راهنمایی در مورد موارد زیر ارائه می‌دهد:

- ساخت و ویرایش قالب‌ها با استفاده از ویرایشگر بلوک
- کار با الگوها و بلوک‌های قابل استفاده مجدد (reusable blocks)
- سفارشی‌سازی استایل‌های سراسری و تنظیمات theme.json
- استفاده از بلوک‌های قالب و تغییرات آن‌ها (variations)
- ساخت الگوهای بلوکی سفارشی برای سایت شما

**هنگام فعال شدن خودکار:** وقتی قالب فعال شما یک قالب بلوکی باشد (از ویژگی `block-templates` پشتیبانی می‌کند).

### قالب‌های کلاسیک (Classic Themes) {#classic-themes}

**برای چه قاره‌ای است:** قالب‌های سنتی وردپرس که از قالب‌های PHP و ویرایشگر کلاسیک استفاده می‌کنند.

مهارت قالب‌های کلاسیک راهنمایی در مورد موارد زیر ارائه می‌دهد:

PHP template files او hooks سان کار کولای دیلونه
Theme د ظاهر بدلون ورته په Customizer کې تنظیمول
Widget areas او sidebars کارول
CSS بدلول او child theme جوړول
Theme hierarchy او template tags پوهې کول

**د دې وخت کې خودکار فعال کیږي:** کله چې ستاسو فعال theme ein classic (non-block) theme وي.

### Kadence Blocks {#kadence-blocks}

**د دې لپاره適用:** هغه ویبسایټونه چې د advanced block-based design لپاره Kadence Blocks plugin کاروي.

Kadence Blocks مهارت تاسو ته لارښوونه کوي په:

- Kadence د advanced block library (Hero، Testimonials، Pricing، او نور) کارول
- Kadence block settings او responsive خنډونو تنظیمول
- له Kadence grid او container blocks سره custom layouts جوړول
- Kadence blocks توګه ستاسو theme سره راټولول
- Kadence design system او presets څخه ګټه پورته کول

**د دې وخت کې خودکار فعال کیږي:** کله چې Kadence Blocks plugin ستاسو ویبسایټमा فعال وي.

### Kadence Theme {#kadence-theme}

**د دې لپاره適用:** هغه ویبسایټونه چې د block-based design او customization لپاره Kadence theme کاروي.

Kadence Theme مهارت تاسو ته لارښوونه کوي په:

- له global styles او theme.json له لارې Kadence theme تنظیمول
- Kadence built-in block patterns او templates کارول
- Kadence theme settings او options تنظیمول
- له Kadence design system سره custom designs جوړول
- Kadence توګه populār plugins او tools راټولول

**د دې وخت کې خودکار فعال کیږي:** کله چې Kadence theme ستاسو فعال theme وي.

## Skills څنګه انتخاب کیږي {#how-skills-are-selected}

Assistant په हरेک پیغام کې ستاسو فعال theme او نصب شوي plugins وایي. که کوم مطابق theme-aware skill موجود وي، نو دا د assistant context ته خودکار اضافه کیږي. تاسو باید skills manuallly enable یا switch नगर्न اړتیا لرئ.

### متعدد Skills {#multiple-skills}

که دغه سایتت متعدد مهارتونه (مثلاً، اگر هم Kadence Blocks و Kadence Theme فعال داشته باشی)، دستیار به تمام مهارت‌های قابل اجرا دسترسی داره و می‌تونه از راهنمایی هر کدوم استفاده کنه.

### تغییر قالب‌ها (Switching Themes) {#switching-themes}

وقتی شما قالب فعال خود را عوض می‌کنید، مهارت‌های موجود دستیار در پیام بعدی به صورت خودکار به‌روز می‌شوند. مثلاً:

۱. شما از یک قالب مبتنی بر بلوک با مهارت **Block Themes** فعال استفاده می‌کنید.
۲. شما به یک قالب کلاسیک تغییر می‌دهید.
۳. در پیام بعدی شما، مهارت **Classic Themes** به طور خودکار بارگذاری می‌شود و مهارت **Block Themes** دیگر در دسترس نخواهد بود.

## استفاده از مهارت‌های آگاه به قالب (Using Theme-Aware Skills) {#using-theme-aware-skills}

برای اینکه از یک مهارت آگاه به قالب استفاده کنید، کافی است آنچه را که می‌خواهید انجام دهید در رابط چت توصیف کنید. دستیار به طور خودکار راهنمایی مهارت مناسب را ارجاع می‌دهد.

### مثال‌های پرامپت (Example Prompts) {#example-prompts}

**برای Block Themes:**
> "یک بخش قهرمان (hero section) با تصویر پس‌زمینه و متن وسط صفحه با استفاده از الگوهای بلوک بساز."

**برای Classic Themes:**
> "با استفاده از یک قالب فرزند (child theme)، یک ناحیه ویجت سفارشی به سایدبار اضافه کن."

**برای Kadence Blocks:**
> "یک بخش نظرات مشتریان (testimonials section) با استفاده از بلاک Kadence Testimonials بساز."

**برای Kadence Theme:**
> "طراحی چیدمان هدر و استایل‌دهی منوی ناوبری را سفارشی کن."

دستیار راهنمایی‌های خاص قالب و مثال‌های کد مخصوص به قالب و افزونه فعال شما را ارائه خواهد داد.

:::note
مهارت‌های آگاه به قالب به صورت خودکار در Superdav AI Agent نسخه v1.10.0 و بالاتر در دسترس هستند. هیچ تنظیمات یا پیکربندی اضافی نیاز نیست.
:::
