---
title: Uchinchi tomon rejimiga ko'chish
sidebar_position: 17
_i18n_hash: 21e66c5c40d03011402c58addf6d96f3
---
# Uchinchi Uchun Modda Rejistratsiyasi (Third-Party Mode Migration)

Superdav AI Agent v1.12.0 orqida uchinchi tomon imkoniyatlari qanday boshqarilishi o'zgardi. **Uchinchi tomon rejimi endi avtomatik ("auto") deb belgilangan**, bu WordPress 7.0+ da qo'lda sozlash talab qilmasdan, nativ WordPress Abilities API integratsiyasini faollashtirish imkonini beradi.

## Nima o'zgardi? {#what-changed}

### v1.12.0 dan oldin {#before-v1120}

Uchinchi tomon imkoniyatlari uchun qo'lda sozlash kerak edi:

- "Third-party mode"ni aniq yoqishingiz kerak edi
- Imkoniyatlar maxsus ro'yxatdan (registry) yuklanardi
- WordPress Abilities API bilan integratsiya ixtiyoriy edi
- Eski rejim (Legacy mode) standart edi

### v1.12.0 dan keyin {#after-v1120}

Uchinchi tomon imkoniyatlari avtomatik ishlaydi:

- Uchinchi tomon rejimi "auto" deb belgilangan
- Imkoniyatlar WordPress Abilities API bilan nativ integratsiya qilinadi
- WordPress 7.0+ da qo'lda sozlash talab qilinmaydi
- Eski versiyalar uchun eski rejim (Legacy mode) hali ham mavjud

## Kimlar ta'sir qiladi? {#who-is-affected}

### Yangi o'rnatmalar (WordPress 7.0+) {#new-installations-wordpress-70}

**Hech qanday harakat talab qilinmaydi.** Uchinchi tomon rejimi avtomatik ravishda "auto" ga sozlanadi va imkoniyatlar ilovaning o'zi ishlay boshlaydi.

### Mavjud o'rnatmalar {#existing-installations}

**Sizning sozlamalaringiz saqlanib qoladi.** Agar siz quyidagilardan foydalansangiz:

- **Legacy mode (Eski rejim)**: Siz eski rejimda qolasiz (o'zgarish yo'q)
- **Manual third-party mode (Qo'lda uchinchi tomon rejimi)**: Siz qo'lda rejimda qolasiz (o'zgarish yo'q)
- **Auto mode (Avtomatik rejim)**: Siz avtomatik rejimda davom etasiz (o'zgarish yo'q)

### 7.0 dan oldingi WordPress versiyalari {#wordpress-versions-before-70}

**Legacy mode hali ham mavjud.** Agar siz WordPress 6.x yoki undan eski versiyada bo'lsangiz:

- Uchinchi tomon rejimi "legacy" deb belgilangan
- Xohlasangiz, uchinchi tomon rejimi uchun qo'lda yoqishingiz mumkin
- Nativ Abilities API dan foydalanish uchun WordPress 7.0+ ga yangilashni tavsiya etamiz

## Rejimlarni tushunish {#understanding-the-modes}

### Auto Mode (Yangi standart) {#auto-mode-new-default}

**Auto mode** nativ WordPress Abilities API integratsiyasidan foydalanadi:

- Imkoniyatlar WordPress hook'lari orqali ro'yxatdan olinadi
- WordPress 7.0+ Abilities API bilan to'liq moslik
- Uchinchi tomon imkoniyatlarini avtomatik aniqlash
- Qo'lda sozlash talab qilinmaydi

**Qachon ishlatish kerak**: WordPress 7.0+ va uchinchi tomon imkoniyatlari bilan

### Manual Rejim {#manual-mode}

**Manual rejim** aniq sozlamalar talab qiladi:

- Qaysi uchinchi tomon imkoniyatlarini yuklashni belgilaysiz
- Test qilish yoki tanlangan imkoniyatlarni yuklash uchun foydali
- Sozlanish fayllarini tahrirlashni talab qiladi
- Ko'proq nazorat, lekin ko'proq sozlash kerak

**Qachon ishlatish kerak**: Test qilish, tanlangan imkoniyatlarni yuklash yoki maxsus konfiguratsiyalar uchun

### Eski Rejim (Legacy Mode) {#legacy-mode}

**Eski rejim** eski uchinchi tomon imkoniyati tizimini ishlatadi:

- Maxsus imkoniyat ro'yxati (WordPress Abilities API emas)
- Eski WordPress versiyalari bilan mos keladi
- Native WordPress integratsiyasi yo'q
- Eskirgan, lekin hali ham qo'llab-quvvatlanmoqda

**Qachon ishlatish kerak**: WordPress 6.x yoki undan avvalgi versiyalar uchun, yoki eski moslik kerak bo'lganda

## Joriy Rejimni Tekshirish {#checking-your-current-mode}

### Admin Paneli Orqali {#via-admin-panel}

1. **WordPress Admin** → **Superdav AI Agent** → **Settings** ga kiring
2. **Third-Party Mode** sozlamasini qidiring
3. Joriy rejim va uni o'zgartirish variantlarini ko'rasiz

### Kod Orqali {#via-code}

```php
$mode = get_option( 'superdav_third_party_mode' );
echo $mode; // 'auto', 'manual' yoki 'legacy'
```

## Rejimni O'zgartirish {#changing-your-mode}

### Auto Rejimga O'tish {#switch-to-auto-mode}

Agar siz WordPress 7.0+ da bo'lsangiz va auto rejimdan foydalanishni xohlasangiz:

1. **Superdav AI Agent** → **Settings** ga kiring
2. **Third-Party Mode** ni toping
3. **Auto (WordPress Abilities API)** ni tanlang
4. **Save** tugmasini bosing

Superdav AI Agent avtomatik ravishda uchinchi tomon imkoniyatlarini aniqlab va ro'yxatdan o'tadi.

### Manual Rejimga O'tish {#switch-to-manual-mode}

Agar qaysi imkoniyatlarni yuklashni qo'lda boshqarmoqchi bo'lsangiz:

1. **Superdav AI Agent** → **Settings** ga kiring
2. **Third-Party Mode** ni toping
3. **Manual** ni tanlang
4. **Save** tugmasini bosing
5. Qaysi imkoniyatlarni yuklashni belgilash uchun konfiguratsiya faylingizni tahrirlang

### Eski Rejimga O'tish {#switch-to-legacy-mode}

Agar siz eski moslikka muhtoj bo'lsangiz:

1. **Superdav AI Agent** ga kiring → **Settings**
2. **Third-Party Mode**ni toping
3. **Legacy**ni tanlang
4. **Save**ga bosing

## Auto Rejimining Afzalliklari {#benefits-of-auto-mode}

### Avtomatik Toplanish (Automatic Discovery) {#automatic-discovery}

Qobiliyatlar quyidagilardan avtomatik aniqlanadi:

- O'rnatilgan pluginlar
- Faol tema
- Majburiy ishlatiladigan pluginlar
- Drop-in pluginlar

Manuel ro'yxatdan o'tish shart emas.

### Mahalliy Integratsiya (Native Integration) {#native-integration}

Qobiliyatlar WordPress Abilities API bilan integratsiya qilinadi:

- WordPress yadrosi bilan mos keladi
- WordPress admin paneli bilan ishlaydi
- Abilities API dan foydalanadigan boshqa pluginlar bilan ham mos keladi
- WordPress rivojlanishi bilan kelajakga tayyor

### Oddiy Boshqaruv (Simplified Management) {#simplified-management}

- Tahrirlash uchun konfiguratsiya fayllari yo'q
- Manuel qobiliyatni ro'yxatdan o'tish shart emas
- Qobiliyat ko'rinishi nazoratlari avtomatik ishlaydi
- Admin eslatmalari sizga tasniflanmagan qobiliyatlar haqida ogohlantiradi

### Yaxshil Ishlash (Better Performance) {#better-performance}

- Qobiliyatlar cachelanadi
- Talab qilinganda sekin yuklanadi (Lazy-loaded)
- WordPress 7.0+ uchun optimallashtirilgan

## Migratsiya Yo'li {#migration-path}

### Agar Siz WordPress 6.x da Bo'lsangiz {#if-youre-on-wordpress-6x}

1. **WordPress 7.0+ ga yangilang** (tayyor bo'lgach)
2. **Superdav AI Agentni v1.12.0+ ga yangilang**
3. **Third-party mode ni Auto ga o'zgartiring** (ixtiyoriy; legacy rejim hali ham ishlaydi)
4. To'g'ri kirish nazoratlari uchun qobiliyat ko'rinishini tekshiring

### Agar Siz WordPress 7.0+ da Bo'lsangiz {#if-youre-on-wordpress-70}

1. **Superdav AI Agentni v1.12.0+ ga yangilang**
2. **Third-party mode ning Auto ga sozlangandan xavfsizligini tekshiring** (u ko'pincha avtomatik bo'lishi kerak)
3. To'g'ri kirish nazoratlari uchun qobiliyat ko'rinishini tekshiring
4. Ular ishlayotganini tasdiqlash uchun third-party qobiliyatlarini sinab ko'ring

## Muammolarni Qayta Ko'rib Chiqish (Troubleshooting) {#troubleshooting}

### Auto rejimida qobiliyatlar yuklanmayapti {#abilities-arent-loading-in-auto-mode}

- Siz WordPress 7.0+ da ekanligingizni tekshiring
- Third-party mode ning "Auto" ga sozlangandan xavfsizligini tekshiring
- Qobiliyatni taqdim etuvchi plugin faol ekanligini tekshiring
- Ro'yxatdan o'tish xatolarini aniqlash uchun WordPress xato yozuvlarini tekshiring

### Men legacy rejimi saqlab qolishim kerak {#i-want-to-keep-legacy-mode}

- **Settings** → **Third-Party Mode** ga kiring
- **Legacy**ni tanlang
- **Save**ga bosing
- Legacy rejim davomida ishlayveradi

### O'ziga xosiladigan qobiliyatlarim ko'rsatilmayapti {#my-custom-abilities-arent-showing}

- Ular WordPress hooklari orqali ro'yxatdan o'tganligini tekshiring
- Ular Abilities API ni to'g'ri amalga oshirayotganligini tekshiring
- WordPress xatolik yozuvlarini ko'rib chiqing
- Barcha ro'yxatdan o'tgan qobiliyatlarni ko'rish uchun **Ability Visibility** admin sahifasidan foydalaning

### "klassifikatsiz qobiliyat" haqida ogohlantirishlar olaman {#im-getting-unclassified-ability-notices}

- Bu yangi uchinchi tomon qobiliyatlari uchun normal holat
- Ularni admin ogohlantirisida ko'rib chiqing va klassifikatsiya qiling
- Klassifikatsiya haqida batafsil ma'lumotlar uchun **Ability Visibility** ni ko'ring

## Orqaga mos kelish (Backward Compatibility) {#backward-compatibility}

### Mavjud konfiguratsiyalar {#existing-configurations}

Agar sizda mavjud uchinchi tomon qobiliyatlari konfiguratsiyalari bo'lsa:

- **Legacy mode (Eski rejim)**: Sizning konfiguratsiyangiz ishlamoqda davom etadi
- **Manual mode (Manuel rejim)**: Sizning konfiguratsiyangiz ishlamoqda davom etadi
- **Auto mode (Avtomatik rejim)**: Sizning konfiguratsiyangiz e'tiborsiz qoladi (avtomatik rejim ustunlik qiladi)

O'ziga xos konfiguratsiyangizni saqlab qolish uchun Manuel yoki Legacy rejimda qoling.

### Eskirishi jadvali (Deprecation Timeline) {#deprecation-timeline}

- **v1.12.0**: Legacy va Manual modlar to'liq qo'llab-quvvatlanmoqda
- **v1.13.0+**: Legacy rejim eskirishi haqida ogohlantirishlar berishi mumkin
- **v2.0.0**: Legacy rejim olib tashlanishi mumkin (aniq emas)

## Eng yaxshi amaliyotlar (Best Practices) {#best-practices}

### Yangi o'rnatmalar uchun {#for-new-installations}

- Auto mode dan foydalaning (bu standart holatdir)
- Superdav AI Agentning qobiliyatlarni avtomatik aniqlashiga yozma rux berish
- Kirishni boshqarish uchun Ability Visibility dan foydalaning

### Mavjud o'rnatmalar uchun {#for-existing-installations}

- Mumkin bo'lgan va WordPress 7.0+ ga yangilang
- Oddiy boshqaruv uchun Auto mode ga o'ting
- Ability Visibility yordamida qobiliyatlarni ko'rib chiqing va klassifikatsiya qiling

### O'ziga xos qobiliyatlar uchun {#for-custom-abilities}

- Qobiliyatlarni WordPress hooklari orqali ro'yxatdan o'tish (Abilities API)
- O'ziga xos qobiliyat ro'yxatlardan foydalanishdan saqlaning
- Auto mode bilan WordPress 7.0+ da sinab ko'ring

## Keyingi qadamlar {#next-steps}

1. **Siz WordPress versiyangizni tekshiring**: Avtomatik rejim (Auto mode) uchun 7.0+ versiyasida ekanligingizni tasdiqlang.
2. **Uchinchi tomon rejimini ko'rib chiqing**: Settings (Sozlamalar) bo'limiga o'ting va hozirgi rejimni tekshiring.
3. **Kerak bo'lsa yangilang**: Agar siz WordPress 7.0+ versiyasida bo'lsangiz, Auto mode ga o'ting.
4. **Qobiliyatlarni tasniflang**: Tasniflanmagan qobiliyatlar mavjud bo'lsa ularni ko'rib chiqing va tasniflang.
5. **Sinovdan o'tkazing**: Uchinchi tomon qobiliyatlaringiz to'g'ri ishlayotganini tekshiring.

## Bog'liq Mavzular {#related-topics}

- **Qobiliyatlar ko'rinishi (Ability Visibility)**: Qaysi qobiliyatlar qayerda ochilishi kerakligini boshqarish
- **WordPress Abilities API**: WordPressning o'zida qanday ro'yxatdan o'tish haqida o'rganing
- **Uchinchi tomon qobiliyatlarini ishlab chiqish (Third-Party Ability Development)**: Auto mode bilan ishlaydigan qobiliyatlarni yarating
