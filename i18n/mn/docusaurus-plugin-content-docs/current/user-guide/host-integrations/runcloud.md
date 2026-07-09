---
title: RunCloud-ийн нийлүүлэлт
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Нэгтгэл (Integration) {#runcloud-integration}

## Ерөнхий өгүүлэл (Overview) {#overview}
RunCloud бол таны өөрийн cloud серверүүдэд вэб аппликейшнуудыг хялбархан байрлуулах, удирдах боломжийг олгодог cloud-based сервер менежментийн платформ юм. Энэхүү нэгтгэл нь Ultimate Multisite ба RunCloud хоорондын домен синхронизуулалт болон SSL сертификатын удирдлагыг автоматаар хийх боломжийг олгодог.

## Онцлог (Features) {#features}
- Домен синхронизуулалт автоматаар хийгдэнэ
- SSL сертификатыг удирдах
- Тохиргоо хасагдахад домен арилна

## Шаардлага (Requirements) {#requirements}
Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор тодорхойлох шаардлагатай:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Тохируулах заавар (Setup Instructions) {#setup-instructions}

### 1. RunCloud API Ашиглах Зөвшөөрлийг Олох (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. Таны RunCloud dashboard-д нэвтэрнэ үү.
2. "User Profile"-д орно (хамгийн дээд баруун талын профиль зураг дээр дарна).
3. Мэнуас "API"-г сонгоно.
4. Хэрэв танд API Key байхгүй бол "Generate API Key"-г дарна.
5. Таны API Key болон API Secret-ийг хуулна уу.

### 2. Server ба App ID-г Олох (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

1. RunCloud dashboard дээр "Servers"-д орно.
2. Таны WordPress multisite байрласан серверыг сонгоно.
3. Server ID нь URL дотор харагдана: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-д очиж таны WordPress аппликейшнийг сонгоно.
5. App ID нь URL дотор харагдана: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-д Тогтмол Утгуудыг Нэмэх (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Дараах тогтмол утгуудыг таны `wp-config.php` файл дотор нэмнэ үү:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Нэгтгэлийг Идэвхжүүлэх (Enable the Integration) {#4-enable-the-integration}

1. WordPress администраторunuzda Ultimate Multisite > Settings bölümüne gidin
2. "Domain Mapping" (Alan Eşleştirmesi) sekmesine gidin
3. Aşağı kaydırarak "Host Integrations" (Barındırıcı Entegrasyonları) kısmına gelin
4. RunCloud entegrasyonunu etkinleştirin
5. "Save Changes" (Değişiklikleri Kaydet) butonuna tıklayın

## Nasıl Çalışır {#how-it-works}

Ultimate Multisite'ta bir alan eşleştirildiğinde:

1. Entegrasyon, alanı uygulamanıza eklemek için RunCloud API'sine istek gönderir
2. Alan başarıyla eklendiyse, entegrasyon SSL sertifikalarını da yeniden dağıtır (redeploy eder)
3. Bir alan eşleştirmesi kaldırıldığında, entegrasyon o alanı RunCloud'dan kaldırır

Alt alan adı (subdomain) kurulumları için, ağınıza yeni siteler eklendiğinde entegrasyon otomatik olarak RunCloud'da alt alan adlarının oluşturulmasını halleder.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- API kimlik bilgilerinizin doğru olduğundan emin olun
- Sunucu ve uygulama ID'lerinizin doğru olup olmadığını kontrol edin
- RunCloud hesabınızın gerekli izinlere sahip olduğundan emin olun

### SSL Sertifikası Sorunları {#ssl-certificate-issues}
- RunCloud'un SSL sertifikalarını düzenlemesi biraz zaman alabilir
- Alan adlarınızın sunucunuzun IP adresine doğru şekilde yönlendirildiğini doğrulayın
- Uygulamanız için RunCloud SSL ayarlarını kontrol edin

### Alan Adı Eklenemiyor {#domain-not-added}
- Ultimate Multisite loglarını herhangi bir hata mesajı olup olmadığı açısından kontrol edin
- Alan adının zaten RunCloud'a eklenmediğinden emin olun
- RunCloud planınızın birden fazla alanı desteklediğinden emin olun
