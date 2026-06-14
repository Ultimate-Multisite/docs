---
title: Closte Интеграция
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte Integration

## Genel Bakış
Closte, Google Cloud altyapısı üzerinde kurulu bir WordPress barındırma platformudur. Bu entegrasyon sayesinde Ultimate Multisite ile Closte arasında otomatik alan adı senkronizasyonu ve SSL sertifikası yönetimi sağlanır.

## Özellikler
- Otomatik alan adı senkronizasyonu
- SSL sertifikası yönetimi
- Wildcard alan adı desteği
- Closte üzerinde çalışıyorsanız herhangi bir yapılandırma gerekmez

## Gereksinimler
Closte kullanıyorsanız, `wp-config.php` dosyanızda aşağıdaki sabitin tanımlanmış olması gerekir:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Bu sabit genellikle Closte üzerinde barındırıyorsanız zaten tanımlıdır.

## Kurulum Talimatları

### 1. Closte API Anahtarınızı Doğrulayın

Closte üzerinde barındırıyorsanız, `CLOSTE_CLIENT_API_KEY` sabitin `wp-config.php` dosyanızda zaten tanımlanmış olması gerekir. Bunu `wp-config.php` dosyanızı kontrol ederek doğrulayabilirsiniz.

### 2. Entegrasyonu Etkinleştirin

1. WordPress yönetim panelinizde, Ultimate Multisite > Ayarlar'a gidin
2. "Domain Mapping" (Alan Adı Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırma Entegrasyonları) kısmına gelin
4. Closte entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır

Ultimate Multisite'ta bir alan adı eşleştirildiğinde:

1. Entegrasyon, alanı uygulamanıza eklemek için Closte API'sine bir istek gönderir
2. Closte otomatik olarak SSL sertifikası sağlama işlemini yönetir
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon bu alanı Closte'dan kaldırır

Entegrasyon aynı zamanda Ultimate Multisite'taki DNS kontrol aralığı ayarıyla da çalışır; bu sayede sistemin DNS yayılımını ve SSL sertifikası düzenlenmesini ne sıklıkta kontrol edeceğinizi yapılandırabilirsiniz.

## Alan Adı Kaydı Oluşturma

این اتصال این اطمینان را می‌دهد که وقتی یک سایت ساخته یا کپی می‌شود، یک رکورد دامنه به صورت خودکار ایجاد می‌شود. این موضوع به خصوص برای ادغام Closte مهم است، چون ایجاد رکورد دامنه باعث می‌شود APIِ Closte دستور ساخت دامنه و گواهی SSL را صادر کند.

## عیب‌یابی (Troubleshooting)

### مشکلات اتصال API
- بررسی کنید که کلید APIِ Closte شما درست باشد.
- مطمئن شوید که حساب Closte شما مجوزهای لازم را دارد.

### مشکلات گواهی SSL
- ممکن است Closte برای صدور گواهی‌های SSL کمی طول بکشد (معمولاً ۵ تا ۱۰ دقیقه).
- بررسی کنید که دامنه‌های شما به درستی به آدرس IP سرور Closte شما اشاره می‌کنند.
- رکوردهای DNS دامنه خود را چک کنید تا مطمئن شوید که به درستی تنظیم شده‌اند.

### اضافه نشدن دامنه
- لاگ‌های Ultimate Multisite را برای هر پیام خطایی بررسی کنید.
- تأیید کنید که دامنه قبلاً در Closte اضافه نشده باشد.
- مطمئن شوید که رکوردهای DNS دامنه شما به درستی پیکربندی شده باشند.

### فاصله زمانی بررسی DNS
- اگر صدور گواهی‌های SSL خیلی طول می‌کشد، می‌توانید فاصله زمانی بررسی DNS را در تنظیمات Domain Mapping تغییر دهید.
- مقدار پیش‌فرض ۳۰۰ ثانیه (۵ دقیقه) است، اما برای تست سریع‌تر کردن بررسی‌ها، می‌توانید آن را تا ۱۰ ثانیه هم تنظیم کنید.
