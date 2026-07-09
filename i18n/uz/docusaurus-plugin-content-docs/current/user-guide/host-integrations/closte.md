---
title: Closte Integratsiyasi
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integratsiyasi {#closte-integration}

## Umumiy Ko'rinish {#overview}
Closte — Google Cloud infratuzilmasi asosida qurilgan boshqariladigan WordPress hosting platformasidir. Bu integratsiya Ultimate Multisite va Closte o'rtasida domenlarni avtomatik sinxronlash va SSL sertifikatlarini boshqarish imkonini beradi.

## Xususiyatlar {#features}
- Domenlarni avtomatik sinxronlash
- SSL sertifikatlarini boshqarish
- Wildcard domen qo'llab-quvvatlanishi
- Closte da ishlayotgan bo'lsa, hech qanday konfiguratsiya talab qilinmaydi

## Talablar {#requirements}
Agar siz Closte dan foydalansangiz, `wp-config.php` faylingizda quyidagi konstantni belgilashingiz kerak:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu konstant odatda Closte da hosting qilsangiz allaqachon belgilangan bo'ladi.

## O'rnatish Ko'rsatmalari {#setup-instructions}

### 1. Closte API kalitini tekshirish {#1-verify-your-closte-api-key}

Agar siz Closte da hosting qilsangiz, `CLOSTE_CLIENT_API_KEY` konstanti allaqachon `wp-config.php` faylingizda belgilangan bo'lishi kerak. Buni `wp-config.php` faylingizni tekshirib tasdiqlashingiz mumkin.

### 2. Integratsiyani faollashtirish {#2-enable-the-integration}

1. WordPress admin panelida Ultimate Multisite > Settings (Sozlamalar) ga o'ting
2. "Domain Mapping" (Domen xaritasi) yorlig'iga kiring
3. "Host Integrations" (Host integratsiyalari) bo'limiga tushib boring
4. Closte integratsiyasini faollashtiring
5. "Save Changes" (O'zgarishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi {#how-it-works}

Ultimate Multisite da domen xaritasi qilindi (mapping qilinganda):

1. Integratsiya domen nomini ilovangizga qo'shish uchun Closte API ga so'rov yuboradi
2. Closte avtomatik ravishda SSL sertifikatlarini taqdim etadi
3. Domen xaritasi o'chirilsa, integratsiya domeni Closte dan olib tashlaydi

Integratsiya Ultimate Multisite dagi DNS tekshiruv oralig'i (DNS check interval) sozlamasiga ham mos keladi, bu esa tizimning DNS tarqalishini va SSL sertifikatlarini chiqarishni qanchalik ko'p marta tekshirishi kerakligini sozlash imkonini beradi.

## Domen Yozuvini yaratish {#domain-record-creation}

Bu integratsiya sayt yaratilganda yoki ko'chirilganda domen ro'yxatmasini avtomatik yaratishni ta'minlaydi. Bu Closte integratsiyasi uchun ayniqsa muhim, chunki domen ro'yxatmasi yaratilishi Closte API-ni domen va SSL sertifikatini yaratishga ishontiradi.

## Muammolarni hal qilish (Troubleshooting) {#troubleshooting}

### API Bog'lanish Muammolari {#api-connection-issues}
- Closte API kalitning to'g'ri ekanligini tekshiring
- Closte hisobingizda kerakli ruxsatnomalar mavjudligiga ishonch hosil qiling

### SSL Sertifikati Muammolari {#ssl-certificate-issues}
- Closte SSL sertifikatlarini chiqarish uchun biroz vaqt olishi mumkin (odatda 5-10 daqiqa)
- Domenlaringizning Closte server IP manziliga to'g'ri ishora qilayotganligini tekshiring
- Domeningizning DNS yozuvlarini tekshirib, ular to'g'ri sozlangandan vaqonga ekanligini ta'minlang

### Domen Qo'shilmagan {#domain-not-added}
- Ultimate Multisite loglarida xatolik xabarlari bormi tekshiring
- Domen Closte'ga allaqachon qo'shilmaganligini tasdiqlang
- Domeningizning DNS yozuvlari to'g'ri sozlangandan vaqonga ekanligini ta'minlang

### DNS Tekshiruv Oralig'i (DNS Check Interval) {#dns-check-interval}
- Agar SSL sertifikatlari chiqarish juda uzoq vaqt olsayotgan bo'lsa, Domen Xaritasi (Domain Mapping) sozlamalaridagi DNS tekshiruv oralig'ini o'zgartirishingiz mumkin
- Default oralig'i 300 soniyadir (5 daqiqa), ammo testlar davomida tezroq tekshirish uchun uni 10 soniyagacha kamroq deb belgilashingiz mumkin
