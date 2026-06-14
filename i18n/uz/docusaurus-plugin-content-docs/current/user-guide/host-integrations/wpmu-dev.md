---
title: WPMU DEV Integratsiyasi
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV Integratsiyasi

## Umumiy Ko'rinish
WPMU DEV — bu WordPress saytlari uchun hosting, pluginlar va xizmatlarni taqdim etadigan keng qamrovli WordPress platformasidir. Bu integratsiya Ultimate Multisite va WPMU DEV hostingi o'rtasida domen sinxronizatsiyasini avtomatik ravishda amalga oshirish va SSL sertifikatlarini boshqarish imkonini beradi.

## Xususiyatlar
- Domenlarni avtomatik sinxronlash
- SSL sertifikatlarini boshqarish
- Kengaytirilgan SSL sertifikatlarini tekshirish urinishlari

## Talablar
Integratsiya siz WPMU DEVda hosting qilsangiz, bu holatni avtomatik aniqlaydi va ichki API dan foydalanadi. Agar siz WPMU DEVda hosting qilsangiz qo'shimcha sozlash talab etilmaydi.

Integratsiya WPMU DEVda hosting qilinganida avtomatik belgilangan bo'ladigan `WPMUDEV_HOSTING_SITE_ID` konstantasining mavjudligini tekshiradi.

## Sozlash Ko'rsatmalari

### 1. WPMU DEV Hostingini Tasdiqlash

Agar siz WPMU DEV-da hosting qilsangiz, kerakli konstantalar allaqachon belgilangan bo'lishi kerak. Quyidagilarni tekshiring:

1. `WPMUDEV_HOSTING_SITE_ID` konstanta muhitingizda belgilanganmi
2. Siz APIga kirish imkoniyatiga ega faol WPMU DEV a'zosi bo'lsangiz

### 2. Integratsiyani Faollashtirish

1. WordPress admin panelida Ultimate Multisite > Settings (Sozlamalar) ga kiring
2. "Domain Mapping" (Domain Xaritasi) yorlig'iga o'ting
3. "Host Integrations" (Hosting Integratsiyalari) bo'limiga tushib boring
4. WPMU DEV integratsiyasini faollashtiring
5. "Save Changes" (O'zgarishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi

### Domain Sinxronizatsiyasi (Domain Syncing)

Ultimate Multisite-da domen xaritasi qilindi (mapped) paytda:

1. Integratsiya WPMU DEV API dan foydalanib, domen nomini hosting hisobingizga qo'shadi
2. U avtomatik ravishda domenning www versiyasini ham qo'shadi
3. Domen konfiguratsiyasi va SSL sertifikatini berishni WPMU DEV hal qiladi

### SSL Sertifikatini Boshqarish (SSL Certificate Management)

Integratsiya SSL sertifikatlarini tekshirish urinishlar sonini oshirish uchun sozlanadi, chunki SSL sertifikatlari berilishi va o'rnatilishi biroz vaqt olishi mumkin. Default holatda, bu standart 5 urinishga qaraganda SSL sertifikatini tekshirish uchun 10 gacha urinib ko'radi.

## Muhim Eslatmalar

### Domenlarni olib tashlash

Hozirda WPMU DEV API domenlarni olib tashlash imkonini bermaydi. Ultimate Multisite'da domen xaritasi (domain mapping) o'chirilsa, domen sizning WPMU DEV hosting hisobingizda qoladi. Agar kerak bo'lsa, uni WPMU DEV hosting dashboardidan qo'lda olib tashlashingiz kerak bo'ladi.

### API autentifikatsiyasi

Integratsiya uchun siz WordPress ma'lumotlar bazangizdagi `wpmudev_apikey` opsiyasi sifatida saqlangan WPMU DEV API kalitidan foydalaniladi. Bu saytingizni WPMU DEV bilan bog'langanda avtomatik sozlanadi.

## Muammolarni hal qilish (Troubleshooting)

### API Bog'lanish Muammolari
- Saytingizning WPMU DEV bilan to'g'ri bog'langanligini tekshiring.
- `wpmudev_apikey` opsiyasining WordPress ma'lumotlar bazangizda mavjudligini tekshiring.
- WPMU DEV a'zoligingiz faol ekanligiga ishonch hosil qiling.

### SSL Sertifikati Muammolari
- WPMU DEV SSL sertifikatlarini chiqarish biroz vaqt olishi mumkin (odatda 5-15 daqiqa).
- Integratsiya SSL sertifikatlarini tekshirish uchun 10 marta gacha sozlanadi.
- Bir nechta urinishdan so'ng ham SSL sertifikatlari berilmasa, WPMU DEV texnik yordamidan murojaat qiling.

### Domen qo'shilmagan

- Xatolik xabarlarini Ultimate Multisite loglaridan tekshiring.
- Domenning WPMU DEV ga allaqachon qo'shilmaganligini tasdiqlang.
- Sizning WPMU DEV hosting rejaingiz qo'shmoqchi bo'lgan domenlar sonini qo'llab-quvvatlayotganligiga ishonch hosil qiling.
