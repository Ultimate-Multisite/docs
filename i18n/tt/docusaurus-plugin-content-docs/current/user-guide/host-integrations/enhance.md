---
title: Контроль панэли интеграциюны арттыру
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Контроль панели интеграции

## Обзор {#overview}
Enhance — это современная панель управления, которая предоставляет мощные возможности автоматизации и управления хостингом. Эта интеграция позволяет автоматически синхронизировать домены и управлять SSL-сертификатами между Ultimate Multisite и Enhance Control Panel.

**Связанное обсуждение:** Посмотрите [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) для советов сообщества и дополнительной информации.

## Функции {#features}
- Автоматическая синхронизация доменов при сопоставлении доменов в Ultimate Multisite
- Автоматическое предоставление SSL-сертификата через LetsEncrypt, когда DNS разрешается
- Поддержка поддоменов для сетей, работающих в режиме поддомена
- Удаление домена при удалении сопоставлений
- Проверка соединения для подтверждения учетных данных API

## Требования {#requirements}

### Системные требования {#system-requirements}
- Установленная и доступная Enhance Control Panel
- Установка WordPress Multisite на сервере Enhance или подключенном к нему
- Веб-сервер Apache (Enhance поддерживает конфигурации Apache; LiteSpeed Enterprise доступен по сниженной цене)

### Доступ к API {#api-access}
У вас должен быть административный доступ к Enhance Control Panel для создания токенов API.

## Получение учетных данных API {#getting-your-api-credentials}

### 1. Создание токена API {#1-create-an-api-token}

1. Войдите в свою Enhance Control Panel как администратор
2. Нажмите **Settings** (Настройки) в меню навигации
3. Перейдите в раздел **Access Tokens** (Токены доступа)
4. Нажмите **Create Token** (Создать токен)
5. Дайте токен описательное имя (например, "Ultimate Multisite Integration")
6. Назначьте роль **System Administrator** (Системный администратор)
7. Для даты истечения срока действия:
   - Оставьте пустым, если вы хотите, чтобы токен никогда не истекал
   - Или установите конкретную дату истечения срока для целей безопасности
8. Нажмите **Create** (Создать)

Ony creationdan sonra siz **Access Token** ve **Organization ID** görsende. Bunları hemen kaydedin, çünkü token bir kere gösterildikten sonra tekrar görünmez.

### 2. Organization ID'nizi Alın {#2-get-your-organization-id}

Organization ID, "Org ID: {your_id}" yazılı mavi bilgi kutusunda Access Tokens sayfasında gösterilir.

Organization ID şuna benzer bir UUID formatındadır: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Müşterinin Organization ID'sini şu yollarla da bulabilirsiniz:
1. **Customers** sayfasına gidin
2. İlgili müşteri için **Manage customer** (Müşteriyi yönet) butonuna tıklayın
3. URL'ye bakın - Organization ID, `/customers/` sonrasındaki harf ve rakamlardan oluşur.

### 3. Sunucu ID'nizi Alın {#3-get-your-server-id}

Sunucu ID'nizi bulmak için (alan işlemleri için gereklidir):

1. Enhance Control Panel'de **Servers** (Sunucular) bölümüne gidin
2. WordPress kurulumunuzun çalıştığı sunucuya tıklayın
3. Sunucu ID'si (UUID formatında) URL'de veya sunucu detaylarında görünür.
4. Alternatif olarak, sunucuları listelemek için API'yi kullanabilirsiniz:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Sunucu ID, şu UUID formatını takip eder: `00000000-0000-0000-0000-000000000000`

### 4. API URL'nizi Alın {#4-get-your-api-url}

API URL'niz, Enhance Control Panel URL'nuzun `/api/` ile sonlandırılmış halidir:

```
https://your-enhance-panel.com/api/
```

**Önemli:** `/api/` yolunun olması gerekir. Yaygın hatalar şunlardır:
- Sadece domaini `/api/` olmadan kullanmak
- Güvenlik için HTTP yerine HTTPS kullanmamak (HTTPS zorunludur)

## Yapılandırma {#configuration}

### Gerekli Sabitler (Constants) {#required-constants}

Aşağıdaki sabitleri `wp-config.php` dosyanıza ekleyin:

// Панель управления интеграцией улучшена
define('WU_ENHANCE_API_TOKEN', 'sizin-bearer-tokeniniz-burada');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'sizin-server-uuid-iniz-burada');

### Entegrasyon Sihirbazı ile Kurulum {#setup-via-integration-wizard}

1. WordPress admin panelinde **Ultimate Multisite** > **Ayarlar** bölümüne gidin.
2. **Entegrasyonlar** sekmesine geçin.
3. **Enhance Control Panel Integration**'ı bulun ve **Configuration** (Yapılandırma) butonuna tıklayın.
4. Sihirbaz size kurulum sırasında rehberlik edecek:
   - **Adım 1:** Tanıtım ve özellik genel bakışı
   - **Adım 2:** API kimlik bilgilerinizi girin (Token, API URL'si, Server ID)
   - **Adım 3:** Bağlantıyı test edin
   - **Adım 4:** Gözden geçirin ve etkinleştirin

Aşağıdakilerden birini seçebilirsiniz:
- Sihirbazın sabitleri (`constants`) otomatik olarak `wp-config.php` dosyanıza enjekte etmesine izin verin.
- Sabit tanımlarını kopyalayıp bunları manuel olarak ekleyin.

## Ek WordPress Yapılandırması {#additional-wordpress-configuration}

Topluluk geri bildirimlerine dayanarak ([Tartışma #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), bu ek ayarları yapılandırmanız gerekebilir:

### .htaccess Yapılandırması {#htaccess-configuration}

Alan adı eşleştirmesiyle ilgili sorunlar yaşıyorsanız:
1. Orijinal Enhance `.htaccess` dosyasını silin.
2. Yerine standart WordPress Multisite `.htaccess` dosyasını koyun.

### Cookie Sabitleri (Constants) {#cookie-constants}

Eşleştirilmiş alan adları arasında doğru cookie yönetimini sağlamak için bu sabitleri `wp-config.php` dosyasına ekleyin:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Nasıl Çalışır {#how-it-works}

### Bir Alan Adı Eşleştirildiğinde {#when-a-domain-is-mapped}

1. Пользователь в Ultimate Multisite привязывает свой кастомный домен (или создается новый сайт в режиме поддомена).
2. Интеграция отправляет POST-запрос к API Enhance: `/servers/{server_id}/domains`
3. Enhance добавляет этот домен в конфигурацию вашего сервера.
4. Когда DNS разрешается на ваш сервер, Enhance автоматически предоставляет SSL-сертификат через LetsEncrypt.
5. Домен становится активным с использованием HTTPS.

### Когда домен удаляется {#when-a-domain-is-removed}

1. Привязка домена удаляется в Ultimate Multisite.
2. Интеграция запрашивает у Enhance ID домена.
3. Отправляется запрос DELETE на: `/servers/{server_id}/domains/{domain_id}`
4. Enhance удаляет домен из конфигурации вашего сервера.

### Проверка DNS и SSL {#dns-and-ssl-checking}

Ultimate Multisite включает встроенную проверку DNS и SSL:
- Вы можете настроить интервал проверки в **Настройках привязки доменов** (по умолчанию: 300 секунд/5 минут).
- Система проверяет распространение DNS перед тем, как пометить домен как активный.
- Действительность SSL-сертификата проверяется автоматически.
- Enhance автоматически обрабатывает предоставление SSL, поэтому ручная настройка SSL не требуется.

## Проверка настройки {#verifying-setup}

### Проверить соединение {#test-the-connection}

1. В Мастере интеграции используйте шаг **Проверить соединение** (Test Connection).
2. Плагин попытается вывести список доменов на вашем сервере.
3. Сообщение об успехе подтверждает:
   - API учетные данные верны
   - URL API доступен
   - ID сервера действителен
   - Разрешения установлены правильно

### После привязки домена {#after-mapping-a-domain}

1. Привяжите тестовый домен в Ultimate Multisite.
2. Проверьте логи Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Убедитесь в Панели управления Enhance, что домен был добавлен:
   - Перейдите в **Серверы** > **Ваш сервер** > **Домены**.
   - Новый домен должен появиться в списке.
4. Как только DNS распространится, проверьте, что SSL автоматически предоставлен.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}

**Hata: "Enhance API'ye bağlanılamadı"**
- `WU_ENHANCE_API_URL` değişkeninin sonunda `/api/` olduğundan emin olun.
- HTTP yerine HTTPS kullandığınızdan emin olun.
- Enhance panelinin WordPress sunucunuzdan erişilebilir olup olmadığını kontrol edin.
- Bağlantıyı engelleyen herhangi bir güvenlik duvarı kuralı olup olmadığını kontrol edin.

**Hata: "Enhance API Token bulunamadı"**
- `WU_ENHANCE_API_TOKEN` değişkeninin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Token'ın Enhance'te silinmediğinden veya süresinin dolmadığından emin olun.
- Token değerinde yazım hatası olup olmadığını kontrol edin.

**Hata: "Sunucu Kimliği yapılandırılmamış"**
- `WU_ENHANCE_SERVER_ID` değişkeninin `wp-config.php` dosyasında tanımlı olduğundan emin olun.
- Sunucu Kimliğinin geçerli bir UUID formatında olduğundan emin olun.
- Sunucunun Enhance panelinizde mevcut olup olmadığını doğrulayın.

### Alan Adı Eklenmemiş {#domain-not-added}

**Logları kontrol edin:**
1. **Ultimate Multisite** > **Logs** bölümüne gidin.
2. Filtreyi **integration-enhance** olarak ayarlayın.
3. Sorunu gösteren hata mesajlarını arayın.

**Yaygın nedenler:**
- Geçersiz alan adı formatı.
- Alan adının Enhance'te zaten mevcut olması.
- Yetersiz API izinleri (token'ın Sistem Yöneticisi rolüne sahip olduğundan emin olun).
- Sunucu Kimliğinin Enhance'teki gerçek sunucu ile eşleşmemesi.

### SSL Sertifikası Sorunları {#ssl-certificate-issues}

**SSL sağlanmıyor:**
- DNS'in sunucunuzun IP adresine işaret ettiğini doğrulayın.
- Alan adının doğru çözümlendiğinden emin olun: `nslookup yourdomain.com`
- Enhance, SSL sağlayabilmeden önce DNS'in çözümlenmesini gerektirir.
- SSL sağlanması genellikle DNS yayılımından sonra 5-10 dakika sürer.
- SSL ile ilgili hatalar için Enhance Kontrol Paneli loglarını kontrol edin.

**Enhance'te Manuel SSL Sorun Giderme:**
1. **Servers** > **Your Server** > **Domains** bölümüne gidin.
2. Alan adınızı bulun ve SSL durumunu kontrol edin.
3. Gerekirse SSL sağlanmasını manuel olarak tetikleyebilirsiniz.

### DNS Kontrol Aralığı {#dns-check-interval}

Домен или SSL sertifikat aktivasiya çox vaqt alsa:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping**-e keçin.
2. **DNS Check Interval** parametrinini tapın.
3. Default olan 300 saniyeden daha düşük bir değere (minimum: 10 saniye) ayarlayın.
4. **Qeyd:** Daha düşük aralıklar daha sık kontrol demesinden başlar, amma server yükü artar.

### Kimlik Doğrulama Hataları {#authentication-errors}

**HTTP 401/403 hataları:**
- Enhance'de API tokeninizi yenileyin.
- Tokenin **System Administrator** rolünə sahib olduğundan əmin olun.
- Tokenin son süresinin bitmədiyindən əmin olun.
- Düzgün Təşkilat ID-sini (URL-də adətən tələb edilməsə də) istifadə etdiyinizdən əmin olun.

### Log Analizi {#log-analysis}

Ətraflı loqları aktiv edin:
```php
// Daha yaxşı səhvlər üçün wp-config.php-yə əlavə edin
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Sonra loqlara aşağıdakı yerlərdən baxın:
- Ultimate Multisite loqları: **Ultimate Multisite** > **Logs**
- WordPress debug logu: `wp-content/debug.log`
- Enhance paneli loqları: Enhance-in admin interfeysində əlçatandır

## API Referansı {#api-reference}

### Kimlik Doğrulama {#authentication}
Bütün API sorğuları Bearer token autentifikasiyasından istifadə edir:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### İstifadə Olunan Ümumi Endpointlər {#common-endpoints-used}

**Serverləri siyahılaşdırma:**
```
GET /servers
```

**Bir server üzərindəki domenləri siyahılaşdırma:**
```
GET /servers/{server_id}/domains
```

**Domen əlavə etmək:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domen silmək:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tam API Sənədləri {#full-api-documentation}
Tam API sənədləri: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Ən İyi Praktikalar {#best-practices}

### Безопасность (Security) {#security}
- **Никогда не коммить API токены в систему контроля версий**
- Храните токены в файле `wp-config.php`, который должен быть исключен из Git
- Используйте токены с соответствующими правами доступа (Системный администратор для полной интеграции)
- Установите даты истечения срока действия токенов для продакшн сред
- Периодически ротируйте токены

### Производительность (Performance) {#performance}
- Используйте стандартный интервал проверки DNS (300 секунд), чтобы избежать слишком большого количества вызовов API
- Следите за ресурсами сервера Enhance при выполнении крупномасштабных операций с доменами
- Рассмотрите возможность поэтапного добавления доменов, если нужно сопоставить много доменов сразу

### Мониторинг (Monitoring) {#monitoring}
- Регулярно проверяйте логи Ultimate Multisite на наличие ошибок интеграции
- Настройте мониторинг неудачных добавлений доменов
- Проверьте, корректно ли выдаются SSL-сертификаты
- Следите за пропускной способностью сервера Enhance и лимитами доменов

## Дополнительные ресурсы (Additional Resources) {#additional-resources}

- **Официальная документация Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Документация API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Форум сообщества Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Обсуждение на GitHub:** [Issue #265 - Советы по интеграции Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Руководство Ultimate Multisite по сопоставлению доменов:** Смотрите страницу вики "Как настроить сопоставление доменов v2"

## Поддержка (Support) {#support}

Если вы столкнулись с проблемами:
1. Проверьте раздел устранения неполадок выше
2. Просмотрите логи Ultimate Multisite
3. Обратитесь к [Обсуждениям на GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Свяжитесь с поддержкой Enhance по вопросам, специфичным для панели
5. Создайте новую дискуссию с подробными логами ошибок для помощи сообщества

## Примечания (Notes) {#notes}

- Bu интеграция только домен псевдонимы (aliases) обрабатывает; Enhance автоматически управляет SSL.
- Интеграция поддерживает как сопоставление пользовательских доменов, так и сайты на основе поддоменов.
- Автоматическое создание поддомена www можно настроить в настройках Domain Mapping.
- На данный момент Enhance поддерживает конфигурации Apache (доступно LiteSpeed Enterprise).
- Удаление домена из Ultimate Multisite удалит его из Enhance, но связанные с ним SSL-сертификаты могут не быть удалены сразу.
