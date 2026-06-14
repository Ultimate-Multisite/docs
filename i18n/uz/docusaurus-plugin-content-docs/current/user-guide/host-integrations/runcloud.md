---
title: RunCloud Integratsiyasi
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integratsiyasi

## Umumiy Ko'rinish
RunCloud — bu bulutli serverlarni boshqarish platformasi bo‘lib, sizga veb-ilovalarni o‘zingizning bulut serverlaringizda oson joylashtirish va boshqarish imkonini beradi. Bu integratsiya Ultimate Multisite va RunCloud orasida avtomatik domen sinxronlash va SSL sertifikatlarini boshqarishni ta'minlaydi.

## Xususiyatlar
- Avtomatik domen sinxronlash
- SSL sertifikatlarini boshqarish
- Mappinglar o‘chirilganda domenlarni olib tashlash

## Talablar
`wp-config.php` faylingizda quyidagi konstantalar belgilanishi kerak:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Sozlash Ko'rsatmalari

### 1. RunCloud API Ma'lumotlaringizni Oling

1. RunCloud panelingizga tizimga kirish yapiring.
2. "User Profile" (o‘ng yuqori burchakdagi profil rasmingiz ustiga bosing) ga o‘ting.
3. menyudan "API" ni tanlang.
4. Agar sizda API kaliti bo‘lmasa, "Generate API Key" (API kalitini yaratish) tugmasini bosing.
5. API Kalitingiz va API Sirirni nusxalang.

### 2. Server va Ilova ID'laringizni Oling

1. RunCloud panelingizda "Servers" ga o‘ting.
2. WordPress multisite joylashgan serverni tanlang.
3. Server ID URL da ko‘rinadi: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" ga o‘ting va WordPress ilovangizni tanlang.
5. App ID URL da ko‘rinadi: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.phpga Konstanta Qo'shing

Quyidagi konstantalarni `wp-config.php` faylingizga qo‘shing:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integratsiyani Faollashtiring

1. WordPress admin panelingizda, **Ultimate Multisite > Settings** bölümüne gidin.
2. "Domain Mapping" (Alan Eşleştirmesi) sekmesine geçin.
3. Aşağı kaydırarak "Host Integrations" (Barındırıcı Entegrasyonları) kısmına gelin.
4. RunCloud entegrasyonunu etkinleştirin.
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın.

## Bu Nasıl Çalışır?

Ultimate Multisite'ta bir alan eşleştirildiğinde:

1. Entegrasyon, alanı uygulamanıza eklemek için RunCloud API'sine bir istek gönderir.
2. Alan başarıyla eklendiyse, entegrasyon SSL sertifikalarını da yeniden dağıtır (redeploy eder).
3. Bir alan eşleştirmesi kaldırıldığında, entegrasyon o alanı RunCloud'dan kaldırır.

Alt alan adları (subdomain) kurulumları için ise, ağınıza yeni siteler eklendiğinde entegrasyon otomatik olarak RunCloud'da alt alan adlarının oluşturulmasını halleder.

## Sorun Giderme

### API Bağlantı Sorunları
- API kimlik bilgilerinizin doğru olduğundan emin olun.
- Sunucu ve uygulama ID'lerinizin doğru olup olmadığını kontrol edin.
- RunCloud hesabınızın gerekli izinlere sahip olduğundan emin olun.

### SSL Sertifikası Sorunları
- RunCloud'un SSL sertifikalarını düzenlemesi biraz zaman alabilir.
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini doğrulayın.
- Uygulamanız için RunCloud SSL ayarlarını kontrol edin.

### Alan Adı Eklenmedi
- Ultimate Multisite loglarını herhangi bir hata mesajı olup olmadığı açısından kontrol edin.
- Alan adının zaten RunCloud'a eklenmediğinden emin olun.
- RunCloud planınızın birden fazla alanı desteklediğini doğrulayın.
