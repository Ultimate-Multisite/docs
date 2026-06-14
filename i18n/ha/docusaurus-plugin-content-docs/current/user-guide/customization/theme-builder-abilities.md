---
title: Iyakoki na Theme Builder
sidebar_position: 20
_i18n_hash: 9289bf7c5f164c1b2052ea428e0e3898
---
# Khayyalwarin Kayayyakin: Scaffold da Amsa Block Themes

Superdav AI Agent v1.12.0 yana baƙin gwiwar biyu na musamman wa ku wajaba su don samar da block themes na musamman da kuma ajiye su kai tsaye daga interface na tattaunawa (chat).

## Bayani

Kayayyakin **scaffold-block-theme** da **activate-theme** suna ba masu aikatawa (agents) damar:
- Samar da block themes masu laushi, da suka shirya don aiki, bisa ga bayanan ku
- Amsa themes kai tsaye a wurin ku ba tare da shiga kai ko wajaba ba
- Samar da girmamawa na haske ta hanyar yanke shawara kan zane

## Scaffold Block Theme

Kayyakin **scaffold-block-theme** yana samar da sabon WordPress block theme tare da tsarin theme mai cikakken bayani, wanda ya haɗa da:

- `theme.json` configuration tare da design tokens (bayanan haske na zane)
- Fayan template na Block don tsarin gida na yawa
- Styles da bambancin block na musamman da suka shafi yanayin zane
- Metadata na theme da bayanan tallafi

### Yadda Ake Gudanarwa

A tattaunawar ku da Superdav AI Agent, za ku iya buƙatar samar da theme:

```
"Create a block theme called 'Modern Agency' with a blue and white color scheme,
sans-serif typography, and a professional layout"
```

Agent zai yi wa ku:
1. Samu ra'ayoyin zane na ku ta hanyar tattaunawa
2. Samar da tsarin theme na cikakken bayani
3. Samar da duk fayilolin theme da ake bukata
4. Shara theme don ajiya (activation)

### Bayan Ayyuka Da Za a Samu

Idan kayayyakin ya yi nasara, za ku gani:

- Bayanin cewa an scaffold theme
- Sunan theme da wurin yake
- Bayani kan design tokens da aka yi amfani da su (yanar gani, typography, tsakanin abubuwa)
- Jigo don ajiya (Ready-to-activate status)

Misali na bayani:
```
✓ Theme "Modern Agency" an scaffold shi cikin nasara
  Wuri: /wp-content/themes/modern-agency/
  Yanar Gani: Primary #0066CC, Secondary #FFFFFF
  Typography: Inter (sans-serif)
  Jigo: Ready to activate
```

## Amsa Theme

توان **activate-theme** توانايک شما را به یک قالب بلوکی جدید یا موجود که قبلاً ساختید، تغییر می‌دهد.

### چگونگی فراخوانی آن

بعد از اینکه یک قالب ساخته‌اید، می‌توانید بلافاصله آن را فعال کنید:

```
"فعال کردن قالب Modern Agency"
```

یا هر قالب موجودی را فعال کنید:

```
"تغییر به قالب Twentytwentyfour"
```

### خروجی مورد انتظار

وقتی فعال‌سازی با موفقیت انجام شد:

- تأیید قالب فعال شده
- نام قالب قبلی (برای مرجع)
- آدرس سایت که قالب در آن اکنون زنده است
- هر نکته تنظیمات خاص قالب

مثال خروجی:
```
✓ قالب با موفقیت فعال شد
  قالب فعال: Modern Agency
  قالب قبلی: Twentytwentyfour
  در دسترس در: https://yoursite.com
  نکته: برای تأیید طرح جدید، صفحه اصلی خود را بررسی کنید
```

## گردش کار: ساخت و فعال‌سازی (Scaffold and Activate)

یک گردش کار معمول شامل هر دو قابلیت است:

۱. **درخواست تولید قالب**: "یک قالب بلوکی برای صفحه فرود SaaS من بساز"
۲. **عامل (Agent) قالب را می‌سازد**: فایل‌ها و توکن‌های طراحی را تولید می‌کند
۳. **بررسی و اصلاح**: در صورت نیاز، تغییرات طراحی را بحث کنید
۴. **فعال‌سازی**: "قالب را اکنون فعال کن"
۵. **تأیید**: برای اطمینان از اینکه طرح جدید زنده است، به سایت خود مراجعه کنید

## توکن‌های طراحی و سفارشی‌سازی (Design Tokens and Customization)

قالب‌های ساخته شده از توکن‌های طراحی وردپرس (از طریق `theme.json`) برای موارد زیر استفاده می‌کنند:

- **رنگ‌ها**: پالت اصلی، ثانویه، تأکیدی، خنثی
- **تایپوگرافی**: خانواده فونت، اندازه‌ها، وزن‌ها، ارتفاع خطوط
- **فاصله (Spacing)**: حاشیه داخلی، حاشیه خارجی، مقیاس شکاف‌ها
- **حاشیه‌ها (Borders)**: توکن‌های شعاع و عرض
- **سایه‌ها (Shadows)**: سطوح بالا بودن

این توکن‌ها در `theme.json` متمرکز هستند، به طوری که تنظیم کل سیستم طراحی خود را از یک فایل راحت تغییر دهید.

## محدودیت‌ها و نکات

- Themes a cikin `/wp-content/themes/` suna fara da tsari kuma dole su bi ƙa'idodin WordPress na sunan.
- Gyara (Activation) yana buƙatar amince na wajen shafin WordPress ɗinka.
- Kodin PHP na musamman a cikin themes yana da ƙarami; yi amfani da plugins don ayyukan rikitarwa.
- Block themes suna aiki mafi kyau tare da WordPress 5.9 kuma fiya.

## Magance Matala (Troubleshooting)

**Ba wata theme ta bayyana bayan an fara tsarin (scaffolding)**
- Bincika cewa direktori na theme yana wajaba kuma yana da amince mai kyau.
- Ka tabbata cewa `theme.json` yana da tsarin JSON mai inganci.
- Ka tabbatar sunan theme ba ya rikitarwa da themes da ke bayyana a yanzu ba.

**Gyara (Activation) ba ta yi nasara**
- Ka tabbata kana da amince na administrator.
- Bincika cewa direktori na theme yana iya karantawa daga WordPress.
- Ka duba log-awo kuskuren WordPress don samun bayani dalla-dalla.

**Design tokens ba su aiki ba**
- Ka tabbatar tsarin `theme.json` yana da kyau.
- Ka tsaftace duk wajen caching plugins.
- Ka bincika cewa farkon WordPress ɗinka yana tattaunawa da waɗanda kake amfani da su (tokens).

## Matakan Na Gaba

Bayan an gyara theme, za ka iya:
- Amfani da **Design System Aesthetics skill** don inganta rubutu (typography), launi, da tsakanin abubuwa.
- Gyara kayan aiki na block (block styles) na kansa ta hanyar WordPress block editor.
- Tambaya CSS na musamman a cikin fayil ɗin `style.css` na theme.
- Samar da templates na block na musamman don nau'ikan shafuka na musamman.
