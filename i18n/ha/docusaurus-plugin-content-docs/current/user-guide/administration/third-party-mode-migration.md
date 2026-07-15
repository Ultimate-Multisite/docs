---
title: Tawagar Wurin Shiga na Urikwaji
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# ترغیب مودهای شخص ثالث (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 نحوه مدیریت قابلیت‌های شخص ثالث را تغییر داده است. **حالت مود شخص ثالث اکنون به صورت پیش‌فرض روی "خودکار" (auto) تنظیم شده است**، که این کار باعث می‌شود بدون نیاز به تنظیم دستی، از WordPress 7.0 به بالا برای ادغام با API قابلیت‌های وردپرس استفاده کنید.

## چه چیزی تغییر کرده است؟ {#what-changed}

### قبل از نسخه v1.12.0 {#before-v1120}

قابلیت‌های شخص ثالث نیاز به تنظیم دستی داشتند:

- شما مجبور بودید "حالت مود شخص ثالث" را صراحتاً فعال کنید
- قابلیت‌ها از یک رجیستری سفارشی بارگذاری می‌شدند
- ادغام با API قابلیت‌های وردپرس اختیاری بود
- حالت قدیمی (Legacy mode) به عنوان پیش‌فرض وجود داشت

### بعد از نسخه v1.12.0 {#after-v1120}

قابلیت‌های شخص ثالث به صورت خودکار کار می‌کنند:

- حالت مود شخص ثالث به "خودکار" (auto) تنظیم شده است
- قابلیت‌ها مستقیماً با API قابلیت‌های وردپرس ادغام می‌شوند
- برای WordPress 7.0 به بالا نیازی به تنظیم دستی نیست
- حالت قدیمی همچنان برای نسخه‌های قدیمی‌تر وردپرس در دسترس است

## چه کسانی تحت تأثیر قرار می‌گیرند؟ {#who-is-affected}

### نصب‌های جدید (WordPress 7.0+) {#new-installations-wordpress-70}

**نیازی به انجام کاری نیست.** حالت مود شخص ثالث به طور خودکار روی "خودکار" تنظیم می‌شود و قابلیت‌ها بدون نیاز به تنظیمات از جعبه خارج می‌شوند.

### نصب‌های موجود {#existing-installations}

**تنظیمات شما حفظ می‌شود.** اگر از موارد زیر استفاده می‌کردید:

- **حالت قدیمی (Legacy mode)**: شما در حالت قدیمی باقی می‌مانید (تغییری ایجاد نمی‌شود)
- **حالت مود شخص ثالث دستی**: شما در حالت دستی باقی می‌مانید (تغییری ایجاد نمی‌شود)
- **حالت خودکار (Auto mode)**: شما با حالت خودکار ادامه می‌دهید (تغییری ایجاد نمی‌شود)

### نسخه‌های وردپرس قبل از 7.0 {#wordpress-versions-before-70}

**حالت قدیمی همچنان موجود است.** اگر روی WordPress 6.x یا پایین‌تر هستید:

- حالت مود شخص ثالث به صورت پیش‌فرض روی "legacy" تنظیم می‌شود
- می‌توانید در صورت تمایل حالت مود شخص ثالث را دستی فعال کنید
- برای استفاده از API قابلیت‌های بومی، به WordPress 7.0+ ارتقا دهید

## درک کردن حالت‌ها {#understanding-the-modes}

### حالت خودکار (Auto Mode) (پیش‌فرض جدید) {#auto-mode-new-default}

**حالت خودکار** از ادغام بومی با API قابلیت‌های وردپرس استفاده می‌کند:

- قابلیت‌ها از طریق هوک‌های وردپرس ثبت می‌شوند
- سازگاری کامل با API قابلیت‌های وردپرس 7.0 به بالا
- کشف خودکار قابلیت‌های شخص ثالث
- نیازی به تنظیم دستی نیست

**کبارهایی که باید استفاده کنید**: وردپرس ۷.۰+ با قابلیت‌های شخص ثالث

### حالت دستی (Manual Mode) {#manual-mode}

**حالت دستی** نیاز به تنظیمات مشخص دارد:

- شما مشخص می‌کنید کدام قابلیت‌های شخص ثالث را بارگذاری کنید
- برای تست کردن یا بارگذاری انتخابی قابلیت‌ها مفید است
- نیاز به ویرایش فایل‌های پیکربندی دارد
- کنترل بیشتری دارید، اما تنظیمات بیشتری لازم است

**کبارهایی که باید استفاده کنید**: تست کردن، بارگذاری انتخابی قابلیت‌ها، یا تنظیمات سفارشی

### حالت قدیمی (Legacy Mode) {#legacy-mode}

**حالت قدیمی** از سیستم قدیمی قابلیت‌های شخص ثالث استفاده می‌کند:

- رجیستری قابلیت سفارشی (نه API قابلیت‌های وردپرس)
- با نسخه‌های قدیمی‌تر وردپرس سازگار است
- هیچ یکپارچه‌سازی بومی با وردپرس ندارد
- منسوخ شده اما هنوز پشتیبانی می‌شود

**کبارهایی که باید استفاده کنید**: وردپرس ۶.x یا قدیمی‌تر، یا زمانی که به سازگاری قدیمی نیاز دارید

## بررسی حالت فعلی خود {#checking-your-current-mode}

### از طریق پنل مدیریت (Admin Panel) {#via-admin-panel}

۱. به **WordPress Admin** → **Superdav AI Agent** → **Settings** بروید
۲. دنبال تنظیم **Third-Party Mode** بگردید
۳. حالت فعلی شما و گزینه‌های تغییر آن را خواهید دید

### از طریق کد (Via Code) {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual', or 'legacy'
```

## تغییر حالت خود {#changing-your-mode}

### تغییر به حالت اتوماتیک (Auto Mode) {#switch-to-auto-mode}

اگر روی وردپرس ۷.۰+ هستید و می‌خواهید از حالت اتوماتیک استفاده کنید:

۱. به **Superdav AI Agent** → **Settings** بروید
۲. دنبال **Third-Party Mode** بگردید
۳. گزینه **Auto (WordPress Abilities API)** را انتخاب کنید
۴. روی **Save** کلیک کنید

Superdav AI Agent به طور خودکار قابلیت‌های شخص ثالث را کشف و ثبت خواهد کرد.

### تغییر به حالت دستی (Manual Mode) {#switch-to-manual-mode}

اگر می‌خواهید کنترل دستی بر این کار داشته باشید که کدام قابلیت‌ها بارگذاری شوند:

۱. به **Superdav AI Agent** → **Settings** بروید
۲. دنبال **Third-Party Mode** بگردید
۳. گزینه **Manual** را انتخاب کنید
۴. روی **Save** کلیک کنید
۵. فایل پیکربندی خود را ویرایش کنید تا مشخص کنید کدام قابلیت‌ها بارگذاری شوند

### تغییر به حالت قدیمی (Legacy Mode) {#switch-to-legacy-mode}

اگر به سازگاری قدیمی نیاز دارید:

1. Zuwa **Superdav AI Agent** → **Settings**
2. Nemo **Third-Party Mode** (Rejista Ƙarin Wajen Jama'a)
3. Zaɓi **Legacy** (Wannan yana nufin amfani da tsarin da ya kasance a baya)
4. Danna **Save** (Ajiye)

## Amfanin Auto Mode (Tsarin Awtomatiki) {#benefits-of-auto-mode}

### Samun Abubuwa Ta Awtomatiki (Automatic Discovery) {#automatic-discovery}

Abubuwan da ake iya yi suna samunsu ne ta hanyar:

- Plugins da aka sanya
- Theme da ke aiki
- Plugins na zama dole don amfani (Must-use plugins)
- Plugins masu sauyi (Drop-in plugins)

Ba bu shigarwa kai tsaye ba.

### Haɗin Kai Na Gaskiya (Native Integration) {#native-integration}

Abubuwan da ake iya yi suna haɗuwa da WordPress Abilities API:

- Yana da lafiya tare da na asalin WordPress
- Yana aiki da admin ɗin WordPress
- Yana dacewa da sauran plugins da ke amfani da Abilities API
- Zai kasance mai inganci ga makomar WordPress yayin da ke canzawa

### Gabaɗaya Maida Mene (Simplified Management) {#simplified-management}

- Ba akwai fayilolin tsarin da ake gyara su ba
- Ba a bu shigarwa kai tsaye don rubuta abubuwan da za a iya yi
- Wajen nuna abubuwa yana aiki ne ta zahiri
- Admin notices suna gaya maka game da abubuwan da ba a taso ba

### Inganci Na Aiki (Better Performance) {#better-performance}

- Abubuwan da ake iya yi suna ajiya (cached)
- Ana shigarwa nan da nan idan an buƙata (Lazy-loaded on demand)
- An haɗa shi don ingancin WordPress 7.0+

## Hanya Na Canza Tsarin (Migration Path) {#migration-path}

### Idan Kake Amfani da WordPress 6.x {#if-youre-on-wordpress-6x}

1. **Yi Haɗi zuwa WordPress 7.0+** (lokacin da ka shirya)
2. **Gyara Superdav AI Agent zuwa v1.12.0+**
3. **Canza third-party mode zuwa Auto** (Wannan yana iya zama wani zaɓi ne; legacy mode ya ci gaba aiki)
4. **Bincika nuna abubuwan da za a iya yi** don tabbatar cewa an shirya tsarin samun su

### Idan Kake Amfani da WordPress 7.0+ {#if-youre-on-wordpress-70}

1. **Gyara Superdav AI Agent zuwa v1.12.0+**
2. **Tabbatar cewa third-party mode ya dace da Auto** (dole yake zama haka a farko)
3. **Bincika nuna abubuwan da za a iya yi** don tabbatar an shirya tsarin samun su
4. **Tari da abubuwan da za a iya yi na wajen jama'a** don tabbatar suna aiki

## Magance Matala (Troubleshooting) {#troubleshooting}

### Abubuwan da ake iya yi ba suke shiga a auto mode {#abilities-arent-loading-in-auto-mode}

- Tabbatar ka kan WordPress 7.0+
- Bincika cewa third-party mode ya dace da "Auto"
- Tabbatar wajen plugin da ke samar da wannan ikon
- Bincika logs na kuskuren WordPress don kuskuren rubuta (registration errors)

### Ina so in ci gaba da legacy mode {#i-want-to-keep-legacy-mode}

- Zuwa **Settings** → **Third-Party Mode**
- Zaɓi **Legacy**
- Danna **Save**
- Legacy mode zai ci gaba aiki

### Iyakinsu ba abubuwan da na musamman ba su bayyana {#my-custom-abilities-arent-showing}

- tabbatar cewa an rubuta su ta hanyar amfani da WordPress hooks
- bincika cewa sun aiwatar API na Abilities cikin kyakkyawan hanya
- duba login kuskuren WordPress

### Ina samun saƙonnin "ability" ba a tsarshewa {#im-getting-unclassified-ability-notices}

- Wannan yana faruwa ne ga sabbin abilities daga waje (third-party)
- duba su kuma ka tsara su a cikin saƙon admin notice
- duba **Ability Visibility** don cikakken bayani game da tsara su

## Compatibility na baya (Backward Compatibility) {#backward-compatibility}

### Tsarin da ya kasance da wuri (Existing Configurations) {#existing-configurations}

Idan kana da tsarin abilities na musamman da ya kasance a wurin:

- **Legacy mode**: Tsarin ka yana ci gaba da aiki
- **Manual mode**: Tsarin ka yana ci gaba da aiki
- **Auto mode**: Tsarin ka ba shi da amfani (auto mode zai ɗauka wuri)

Don kare tsarin musamman na ka, ka ci gaba da Manual ko Legacy mode.

### Lokacin da ake canza (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy and Manual modes suna aiki sosai
- **v1.13.0+**: Legacy mode zai iya nuna saƙonnin canzawa
- **v2.0.0**: Legacy mode za a iya cire shi (za a bayyana nan gaba)

## Amfani da hanyoyin da suka fi kyau (Best Practices) {#best-practices}

### Don sabbin installa {#for-new-installations}

- Yi amfani da Auto mode (wannan shi ne default)
- Bari Superdav AI Agent ya nemo abilities ko'ina kai tsaye
- Yi amfani da Ability Visibility don sarrafa damar shiga

### Don installan da suka kasance a wurin {#for-existing-installations}

- Ka mai da gogewa zuwa WordPress 7.0+ idan zai yiwu
- Canza zuwa Auto mode don sauƙaƙe sarrafa su
- Duba su kuma ka tsara su ta amfani da Ability Visibility

### Don abilities na musamman {#for-custom-abilities}

- Rubuta abilities ta hanyar WordPress hooks (Abilities API)
- Ka yi taka ra daga rubuta registry na ability na musamman
- Ka gwada a WordPress 7.0+ tare da Auto mode

## Matakan da suka wuce (Next Steps) {#next-steps}

1. **Bincika farkon WordPress ɗinka**: tabbatar ka kan 7.0+ don amfanin Auto (Auto mode).
2. **Gani yanayin mode na wajen uwo (third-party mode)**: Ka je Settings (Yanayin Wajen Uwo) kuma ka gani mode da kake bi yanzu.
3. **Gyara idan ya kamata**: Idan kana kan WordPress 7.0+ sai ka cansa zuwa Auto mode.
4. **Tarkewa da ikon**: Ka bincika da ka tsara duk wata ikon da ba a tsara ba (unclassified abilities).
5. **Tesa/Tesa**: Ka tabbatar cewa ikon na wajen uwo (third-party abilities) suna aiki yadda ya kamata.

## Batutuwan da suka shafi {#related-topics}

- **Gani Wurin Nuna Ikon (Ability Visibility)**: Ka sarrafa wane ikon ne za a nuna shi inda kake so.
- **WordPress Abilities API**: Ka koyi game da yadda ake rubuta ikon na asali (native WordPress ability registration).
- **Tattaunawa kan Horwin Ikon Na Wajen Uwo (Third-Party Ability Development)**: Ka ƙirƙira ikon da ke aiki tare da Auto mode.
