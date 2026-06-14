---
title: ServerPilot Integratsiyasi
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integratsiyasi

## Umumiy Ko'rinish
ServerPilot — bu WordPress va boshqa PHP veb-saytlarini DigitalOcean, Amazon, Google yoki boshqa server provayderlaridagi serverlarda joylashtirish uchun bulut xizmatidir. Bu integratsiya Ultimate Multisite va ServerPilot o'rtasida domenlarni avtomatik sinxronlash va SSL sertifikatlarini boshqarish imkonini beradi.

## Xususiyatlar
- Domenlarni avtomatik sinxronlash
- Let's Encrypt orqali SSL sertifikatlarini boshqarish
- SSL sertifikatlarini avtomatik yangilash

## Talablar
`wp-config.php` faylingizda quyidagi konstantalar belgilangan bo'lishi kerak:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Sozlash Ko'rsatmalari

### 1. ServerPilot API Ma'lumotlaringizni Oling

1. ServerPilot panelingizga kiring
2. "Account" > "API" (Hisob > API) bo'limiga o'ting
3. Agar sizda hali mavjud bo'lmasa, yangi API kalitini yarating
4. Client ID va API Kalitingizni nusxalang

### 2. App ID Ma'lumotlaringizni Oling

1. ServerPilot panelingizda "Apps" (Ilovalar) bo'limiga o'ting
2. WordPress multisite joylashgan ilovani tanlang
3. App ID URL da ko'rinadi: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php ga Konstanta Qo'shish

Quyidagi konstantalarni `wp-config.php` faylingizga qo'shing:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Integratsiyani Faollashtirish

1. WordPress admin panelida Ultimate Multisite > Settings (Sozlamalar) ga o'ting
2. "Domain Mapping" (Domen xaritasi) yorlig'iga kiring
3. "Host Integrations" (Mezbon integratsiyalari) bo'limiga tushib boring
4. ServerPilot integratsiyasini faollashtiring
5. "Save Changes" (O'zgartirishlarni saqlash) tugmasini bosing

## Qanday Ishlaydi

### Domenlarni Sinxronlash

Ultimate Multisite da domen xaritasi qilinganida:

1. Integratsiya ServerPilotdan joriy domenlar ro'yxatini olib keladi.
2. U yangi domenni ro'yxatga qo'shadi (agar tegishli bo'lsa, www versiyasi bilan birga).
3. Yangilangan ro'yxatni API orqali ServerPilotga yuboradi.
4. ServerPilot sizning ilovangiz uchun domenlar ro'yxatini yangilaydi.

### SSL Sertifikatlarini Boshqarish

Domenlar sinxron qilingandan so'ng:

1. Integratsiya sizning ilovangiz uchun AutoSSLni avtomatik yoqadi.
2. ServerPilot Let's Encrypt yordamida SSL sertifikatini berish va o'rnatishni amalga oshiradi.
3. ServerPilot shuningdek, SSL sertifikatlarini avtomatik yangilashni ham boshqaradi.

## SSL Sertifikatlarini Tasdiqlash

Integratsiya ServerPilot uchun SSL sertifikatlarini berish va o'rnatish biroz vaqt olishi mumkinligi sababli, ServerPilotning SSL sertifikatini tasdiqlash urinishlar sonini oshirish uchun sozlanadi. Default holatda u 5 marta urinib ko'radi, ammo bu filtrlardan foydalanib sozlanishi mumkin.

## Muammolarni Kelishdan Qutqarish (Troubleshooting)

### API Bog'lanish Muammolari
- Client ID va API Key to'g'ri ekanligini tekshiring.
- App ID to'g'ri ekanligini tekshiring.
- ServerPilot hisobingizda kerakli huquqlarga ega ekanligiga ishonch hosil qiling.

### SSL Sertifikati Muammolari
- ServerPilot SSL sertifikatlarini berishdan oldin domenlarning sizning serveringizga yo'naltirilgan amal qiladigan DNS yozuvlariga ega bo'lishini talab qiladi.
- Agar SSL sertifikatlari berilmasa, domenlaringizning server IP manziliga to'g'ri yo'naltirilganligini tekshiring.
- ServerPilot SSL sertifikatlarini berish va o'rnatishi biroz vaqt olishi mumkin (odatda 5-15 daqiqa).

### Domen Qo'shilmagan
- Ultimate Multisite loglarida xatolik xabarlari bormi tekshiring.
- Domen ServerPilotga allaqachon qo'shilmaganligini tasdiqlang.
- Sizning ServerPilot reja qo'shmoqchi bo'lgan domenlar sonini qo'llab-quvvatlayotganligiga ishonch hosil qiling.

### Domenani O'chisini Olish

- Hozirda, ServerPilot API individu domenlarni olib tashlash imkonini bermaydi.
- Ultimate Multisite'da domen xaritasi o'chirilsa, integratsiya ServerPilotdagi domen ro'yxatini o'zgartiradi va o'chirib tashlangan domenni chiqarib tashlaydi.
