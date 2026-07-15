---
title: Хостингер (hPanel) Интеграция
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) Интеграция

## Обзор {#overview}

Hostinger - это популярный хостинг-провайдер с современным панелью управления под названием hPanel. Интеграция Ultimate Multisite и Hostinger позволяет автоматически синхронизировать домены между Ultimate Multisite и hPanel от Hostinger, что дает вам возможность автоматически управлять сопоставлениями доменов и поддоменами прямо из вашей админ-панели WordPress.

## Возможности {#features}

- Автоматическое создание дополнительных доменов в hPanel
- Автоматическое создание поддоменов в hPanel (для установок с мультисайтом поддоменов)
- Удаление домена при удалении сопоставлений
- Бесшовная интеграция с API управления доменами hPanel

## Требования {#requirements}

Чтобы использовать интеграцию Hostinger, вам понадобится:

1. Аккаунт Hostinger с доступом к hPanel
2. Токен API от Hostinger
3. Следующие константы, определенные в вашем файле `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'ваш_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'ваш_hostinger_account_id');
```

Опционально вы также можете определить:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Стандартная конечная точка API
```

## Инструкции по настройке {#setup-instructions}

### 1. Сгенерируйте ваш токен API Hostinger {#1-generate-your-hostinger-api-token}

1. Войдите в свой аккаунт Hostinger и перейдите в hPanel
2. Перейдите в **Настройки аккаунта** → **Токены API** (API Tokens)
3. Нажмите **Создать новый токен** (Create New Token)
4. Дайте вашему токену понятное имя (например, "Ultimate Multisite")
5. Выберите необходимые разрешения:
   - Управление доменами (Domain management)
   - Управление поддоменами (Subdomain management)
6. Скопируйте сгенерированный токен и сохраните его в надежном месте

### 2. Найдите свой ID аккаунта {#2-find-your-account-id}

1. В hPanel перейдите в **Настройки аккаунта** → **Информация об аккаунте** (Account Information)
2. Ваш ID аккаунта отображается на этой странице
3. Скопируйте и сохраните этот ID для следующего шага

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'sizin_hostinger_api_tokeniniz');
define('WU_HOSTINGER_ACCOUNT_ID', 'sizin_hostinger_hesab_idiniz');
```

Əgər Hostinger hesabınız başqa bir API son nöqtəsi (endpoint) istifadə edirsə, onu özünüz dəyişdirə bilərsiniz:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Integrasiyonu Etkinleştirme {#4-enable-the-integration}

1. WordPress admin panelinizde **Ultimate Multisite > Settings** (Ayarlar) bölümüne gidin.
2. **Domain Mapping** (Alan Eşleştirmesi) sekmesine geçin.
3. Aşağı kaydırarak **Host Integrations** (Host Entegrasyonları) kısmına gelin.
4. **Hostinger (hPanel)** entegrasyonunu etkinleştirin.
5. **Save Changes** (Değişiklikleri Kaydet) butonuna tıklayın.

## Nasıl Çalışır? {#how-it-works}

### Addon Domains (Ek Alan Adları) {#addon-domains}

Ultimate Multisite'ta bir alan adını eşleştirdiğinizde:

1. Entegrasyon, alanı ek bir alan adı olarak Hostinger API'sine istek gönderir.
2. Alan adı, ana dizininize işaret edecek şekilde yapılandırılır.
3. Bir alan adı eşleştirmesi kaldırıldığında, entegrasyon otomatik olarak hPanel'den o ek alan adını kaldırır.

### Subdomains (Alt Alan Adları) {#subdomains}

Alt alan adı multisite kurulumları için, yeni bir site oluşturulduğunda:

1. Entegrasyon, tam alan adından alt alan adı kısmını ayıklar.
2. Alt alanı Hostinger API'sine eklemek için bir istek gönderir.
3. Alt alan adı, ana dizininize işaret edecek şekilde yapılandırılır.

## Önemli Notlar {#important-notes}

- Bu entegrasyon, hesabınızla iletişim kurmak için Hostinger'ın REST API'sini kullanır.
- API tokeninizin alan ve alt alan adı yönetimi için gerekli izinlere sahip olması gerekir.
- Entegrasyon DNS yapılandırmasını işlemez; alan adları zaten Hostinger hesabınıza yönlendirilmiş olmalıdır.
- API istekleri HTTPS üzerinden güvenli bir şekilde yapılır.
- API tokeninizi güvende tutun ve asla herkese açık olarak paylaşmayın.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}

API токенinizin doğru olup olmadığını ve süresinin dolup dolmadığını kontrol edin
Hesap numaranızın doğru olduğundan emin olun
API tokeninizin alan yönetimi için gerekli izinlere sahip olduğundan emin olun
Hostinger hesabınızın aktif olduğunu ve iyi durumda olduğunu doğrulayın

### Alan Eklendi Değilse {#domain-not-added}

- Ultimate Multisite loglarında herhangi bir hata mesajı olup olmadığını kontrol edin
- Alanın Hostinger hesabınıza zaten eklenip eklenmediğini doğrulayın
- Hostinger hesabınızın ek alanlar için limitine ulaşmadığından emin olun
- Alanın Hostinger isim sunucularına doğru şekilde yönlendirildiğini teyit edin

### SSL Sertifikası Sorunları {#ssl-certificate-issues}

- Entegrasyon SSL sertifikası düzenleme işlemini yapmaz
- Hostinger genellikle AutoSSL aracılığıyla ücretsiz SSL sertifikaları sağlar
- SSL sertifikalarını hPanel'de **SSL/TLS** altında doğrudan yönetebilirsiniz
- Alternatif olarak, Hostinger'ın AutoSSL özelliğini kullanarak Let's Encrypt'i kullanabilirsiniz

## Destek {#support}

Hostinger entegrasyonuyla ilgili ek yardıma ihtiyacınız olursa lütfen şuralara bakın:

- [Hostinger API Dokümantasyonu](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Dokümantasyonu](/)
- [Ultimate Multisite Desteği](https://ultimatemultisite.com/support)
