---
title: Dalilin shiga Theme Builder
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# جریان شروع Theme Builder

Superdav AI Agent v1.12.0 شما را با یک **جریان راهنمای Theme Builder onboarding** آشنا می‌کند که در تنظیمات اولیه شما به ساختن یک قالب بلوکی سفارشی کمک می‌کند. این روش جایگزین حالت قدیمی Site Builder شده و رویکردی انعطاف‌پذیرتر است که توسط عامل (agent) کمک می‌شود.

## جریان شروع Theme Builder چیست؟ {#what-is-the-theme-builder-onboarding-flow}

جریان راهنمای Theme Builder یک wizard تنظیمات تعاملی است که کارهای زیر را انجام می‌دهد:

- شما را در تصمیمات طراحی (رنگ‌ها، تایپوگرافی، چیدمان) راهنمایی می‌کند
- ترجیحات هویت بصری سایت شما را ثبت می‌کند
- یک قالب بلوکی سفارشی متناسب با نیازهای شما تولید می‌کند
- وقتی کار تمام شد، قالب به طور خودکار فعال می‌شود

این جریان توسط **Setup Assistant agent** پشتیبانی می‌شود که سؤالات روشن‌کننده می‌پرسد و قالب شما را به صورت مرحله‌ای می‌سازد.

## شروع Theme Builder Onboarding {#starting-the-theme-builder-onboarding}

### تنظیم اولیه (First-Run Setup) {#first-run-setup}

وقتی برای اولین بار Superdav AI Agent را روی یک نصب جدید وردپرس اجرا می‌کنید، این موارد را خواهید دید:

```
به Superdav AI Agent خوش آمدید!

چه کاری دوست دارید انجام دهید؟
۱. ساخت یک قالب سفارشی (Theme Builder)
۲. از یک قالب موجود استفاده کنید
۳. فعلاً تنظیمات را رد کنید
```

برای ورود به جریان راهنمای Theme Builder، **"Build a custom theme"** را انتخاب کنید.

### فعال‌سازی دستی (Manual Activation) {#manual-activation}

شما می‌توانید هر زمان که بخواهید با درخواست زیر شروع Theme Builder onboarding را آغاز کنید:

```
"Start the Theme Builder onboarding"
```

یا

```
"Help me create a custom theme"
```

## مراحل Onboarding {#the-onboarding-steps}

### مرحله ۱: انتخاب حالت (Mode Selection) {#step-1-mode-selection}

Setup Assistant agent در مورد ترجیح شما سؤال می‌کند:

```
می‌خواهید قالب خود را چگونه بسازید؟
- راهنمایی شده (من سؤال می‌پرسم و برای شما می‌سازم)
- عملی (من گزینه‌ها را به شما نشان می‌دهم و شما تصمیم می‌گیرید)
```

**Guided mode** برای اکثر کاربران توصیه می‌شود؛ عامل بر اساس صنعت و اهداف شما، توصیه‌های طراحی ارائه می‌دهد.

### مرحله ۲: مشخصات سایت (Site Specification) {#step-2-site-specification}

از شما در مورد سایتتان سؤال خواهد کرد:

- **Ma'adin wannan gida**: E-commerce (sayarwawa ta intanet), blog (labarin), portfolio (bayani na aiki), SaaS (software ta hanyar intanet), da sauransu.
- **Abin da kake so ya shiga**: Wane mutane ne masu zuwa gare ka?
- **Lawar launi**: Launin gaba da na biyu (ko "ba shaka").
- **Ton:** Mai kasuwanci, mai kirkira, mai wasa, ko mai sauƙi, da sauransu.

Wannan bayani an ajiye a cikin ƙwaƙwalwar **site_brief** ɗinka, wadda masu aiki za su amfani da ita a wasu lokuta.

### Mataki na 3: Shakatawar Tsarin Zana (Design System Decisions) {#step-3-design-system-decisions}

Masu aiki suna ba ka shawarwari game da zaɓar "design tokens" (abubuwan da ke nuna yadda zane ya kasance):

- **Rubutu**: Nau'in font (serif, sans-serif, monospace) da tsarin girman su.
- **Layar launi**: Launin gaba, na biyu, laurin tasiri (accent), da lauran sauƙi (neutral).
- **Tsare-tsaren wuri (Spacing)**: Tsare-tsaren ƙarami, na yau da kowa, ko tsare-tsaren girma.
- **Haraku**: Animashin da ke tattare da canjin (transitions) (idan ka so).

### Mataki na 4: Samar da Tema (Theme Generation) {#step-4-theme-generation}

Masu taimaka wa shakatawa suna samar maka tema ɗinka mai tsarin block (custom block theme) tare da:

- `theme.json` wanda ke da duk design tokens ɗinka.
- Saman template na blocks ga tsare-tsaren da ake amfani da su (homepage, blog, contact).
- Sauƙan styles na blocks da suka dace da tsarin zannarka.
- Bayanan metadata na tema da bayanin samun tallafi na WordPress.

### Mataki na 5: Shiga Aiki da Bincike (Activation and Verification) {#step-5-activation-and-verification}

Tema zai shiga aiki ne kai tsaye, kuma za ka ga wannan:

```
✓ Tema ɗinka ta musamman tana aiki!
  Wannan tema: [Sunan Wurin Ka] Theme
  Layar launi: [Gaba] / [Na Biya]
  Rubutu: [Nau'in Font]

  Zama wurin ka don ganin sabon zane.
```

Daga wannan, za ka iya zuwa wajenka don tabbatar da cewa tema ɗin yana nuna yadda ya kamata.

## Bayanai na Wurin Ka da ƙwaƙwalwar site_brief Memory {#site-specification-and-sitebrief-memory}

Bayan fara shiga aiki (onboarding), masu aiki suna samun bayanan wurinka a cikin wani nau'in ƙwaƙwalwar **site_brief** memory. Wannan ya haɗa da:

- Ma'adin gida da manufofinsa.
- Abin da kake so ya shiga (Target audience).
- Launin gaba, laurin ton, da ton.
- Shawarwari na zane.
- Tsarin abubuwan da ake rubutu a kan wurin.

### Me Yasa site_brief Ya Muhimmaci? {#why-sitebrief-matters}

A wasu lokuta na gaba, masu aiki za su amfani da **site_brief** ɗinka don:

### تداوم همسار طراحی در تغییرات {#viewing-your-sitebrief}

*   همیشه سعی کنید ظاهر سایت شما یکپارچه بماند.
*   ویژگی‌هایی را پیشنهاد دهید که با هدف سایت شما همخوانی داشته باشد.
*   توصیه‌هایی را ارائه دهید که متناسب با موقعیت فعلی سایت باشند.
*   از تکرار سوالات مربوط به تنظیمات اولیه خودداری کنید.

### مشاهده خلاصه سایت_brief (site\_brief) {#customizing-after-onboarding}

می‌توانید از عامل (agent) بپرسید:

```
"Show me my site brief"
```

یا

```
"What do you know about my site?"
```

عامل، مشخصات ذخیره شده سایت شما را نمایش خواهد داد.

## سفارشی‌سازی پس از شروع کار (Onboarding) {#use-the-design-system-aesthetics-skill}

بعد از اینکه آموزش سازنده قالب (Theme Builder) تمام شد، می‌توانید کارهای زیر را انجام دهید:

### استفاده از مهارت زیبایی سیستم طراحی (Design System Aesthetics Skill) {#edit-themejson-directly}

برای درخواست اصلاحات طراحی:

```
"Refine the typography to be more modern"
```

یا

```
"Adjust the color palette to be warmer"
```

**مهارت زیبایی سیستم طراحی** شما را در به‌روزرسانی‌های طراحی هدفمند راهنمایی می‌کند.

### ویرایش مستقیم theme.json {#create-custom-block-templates}

برای کاربران حرفه‌ای، فایل `/wp-content/themes/[theme-name]/theme.json` را برای تنظیم موارد زیر ویرایش کنید:

*   توکن‌های رنگی (Color tokens)
*   مقیاس‌های تایپوگرافی (Typography scales)
*   مقادیر فاصله (Spacing values)
*   تعاریف حاشیه و سایه (Border and shadow definitions)

### ایجاد قالب‌های بلوک سفارشی (Custom Block Templates) {#comparison-old-vs-new-onboarding}

از ویرایشگر بلوک وردپرس برای ساخت قالب‌های سفارشی برای موارد زیر استفاده کنید:

*   طرح صفحه اصلی (Homepage layouts)
*   صفحات پست وبلاگ (Blog post pages)
*   صفحات محصول (Product pages)
*   فرم‌های تماس (Contact forms)

## مقایسه: روش قدیمی در مقابل جدید آموزش {#troubleshooting}

| ویژگی | سازنده سایت (Legacy Site Builder) | سازنده قالب (Theme Builder - جدید) |
| :--- | :--- | :--- |
| روش تنظیمات | فرم مبتنی بر راهنما (Wizard-based form) | مکالمه هدایت شده توسط عامل (Agent-guided conversation) |
| تولید قالب | قالب‌های محدود | اسکلت‌بندی سفارشی (Custom scaffolding) |
| توکن‌های طراحی | ورود دستی (Manual entry) | تصمیمات هدایت شده (Guided decisions) |
| انعطاف‌پذیری | گزینه‌های ثابت | قابل تنظیم (Customizable) |
| به‌روزرسانی‌های آینده | ارجاع داده نمی‌شدند | در site\_brief ذخیره می‌شوند |

## عیب‌یابی (Troubleshooting) {#next-steps}

**فرایند آموزش کامل نشد**
*   فرایند را دوباره شروع کنید: "Start the Theme Builder onboarding"
*   بررسی کنید که نصب وردپرس شما به‌روز است.
*   تأیید کنید که عامل دستیار تنظیمات (Setup Assistant agent) فعال باشد

**site_brief ɗin ban yi amfani da shi**
- tabbatar cewa agent yana da damar samun ƙwarewa (memory)
- nemi daga agent a "recall my site brief" (tabbatar wuri game da bayanin wurin ku)
- bincika cewa an samar da samun ƙwarewa (memory) a cikin settings ɗinku

**Tema da aka samar ba ya dace da ra'ayoyiyata**
- Yi amfani da ƙwarewar Design System Aesthetics don gyara shi
- nemi daga agent a "regenerate the theme with [specific changes]" (tabbatar wuri game da canje-canje na musamman)
- gyara file.json kai tsaye don kawai ku iya sarrafa shi da kyau

## Matakai Na Gaba

Bayan an kammala shigarwa (onboarding) na Theme Builder:

1. **Tabbatar wurin ku**: Zuwa wurin ku don ganin tema ɗin sabawa
2. **Gyara zane**: Yi amfani da ƙwarewar Design System Aesthetics don gyaran abubuwa
3. **Ƙara abubuwa**: fara gina abubuwan da za suke cikin wurin ku
4. **Bincika ikon**: koyi game da sauran ikon agent kamar scaffold-block-theme da activate-theme
