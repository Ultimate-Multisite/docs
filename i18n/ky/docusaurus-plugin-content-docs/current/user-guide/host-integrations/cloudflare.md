---
title: Cloudflare интеграциясы
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare Интеграция {#cloudflare-integration}

## Обзор {#overview}
Cloudflare — это ведущая сеть доставки контента (CDN) и провайдер безопасности, который помогает защищать и ускорять веб-сайты. Эта интеграция позволяет автоматически управлять доменами между Ultimate Multisite и Cloudflare, особенно для установок мультисайта на поддоменах.

## Возможности {#features}
- Автоматическое создание поддоменов в Cloudflare
- Поддержка проксирования поддоменов
- Управление DNS-записями
- Расширенное отображение DNS-записей в админке Ultimate Multisite

## Требования {#requirements}
Следующие константы необходимо определить в вашем файле `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите ваш API-ключ Cloudflare {#1-get-your-cloudflare-api-key}

1. Войдите в свою панель управления Cloudflare
2. Перейдите в раздел "My Profile" (нажмите на свой email в правом верхнем углу)
3. Выберите "API Tokens" из меню
4. Создайте новый API-токен со следующими разрешениями:
   - Zone.Zone: Чтение (Read)
   - Zone.DNS: Редактирование (Edit)
5. Скопируйте свой API-токен

### 2. Получите ваш ID зоны {#2-get-your-zone-id}

1. В панели управления Cloudflare выберите домен, который хотите использовать
2. ID зоны виден во вкладке "Overview" в правой боковой панели под заголовком "API"
3. Скопируйте ID зоны

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Включите интеграцию {#4-enable-the-integration}

1. В админке WordPress перейдите в Ultimate Multisite > Settings (Настройки)
2. Перейдите на вкладку "Domain Mapping" (Сопоставление доменов)
3. Прокрутите вниз до раздела "Host Integrations" (Интеграции хостов)
4. Включите интеграцию Cloudflare
5. Нажмите "Save Changes" (Сохранить изменения)

## Как это работает {#how-it-works}

### Управление поддоменами {#subdomain-management}

Когда создается новый сайт в установке мультисайта на поддоменах:

1. Интеграция подготавливает запрос к API Cloudflare для добавления записи CNAME для поддомена.
2. Поддомен по умолчанию настроен на проксирование через Cloudflare (это можно изменить с помощью фильтров).
3. Когда сайт удаляется, интеграция удаляет поддомен из Cloudflare.

### Отображение DNS-записей {#dns-record-display}

Интеграция улучшает отображение DNS-записей в админке Ultimate Multisite следующими способами:

1. Получает DNS-записи напрямую из Cloudflare
2. Показывает, проксируются ли записи или нет
3. Отображает дополнительную информацию о DNS-записях

## Пользовательские хосты Cloudflare (Cloudflare Custom Hostnames) {#cloudflare-custom-hostnames}

**Пользовательские хосты Cloudflare** (ранее назывались "Cloudflare for SaaS") — это функция Cloudflare, которая позволяет вашим клиентам использовать свои собственные домены с SSL на вашей сети мультисайта. Это рекомендуемый подход для установок мультисайтов, привязанных к домену, которые используют Cloudflare, потому что Cloudflare автоматически управляет выдачей и продлением SSL-сертификатов для каждого пользовательского домена.

### Чем это отличается от стандартной интеграции Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Стандартная интеграция | Пользовательские хосты Cloudflare (Cloudflare Custom Hostnames) |
|---|---|---|
| **Назначение** | Автоматически создает DNS-записи для поддоменов | Позволяет использовать пользовательские (привязанные) домены с SSL, управляемым Cloudflare |
| **Лучше всего подходит для** | Мультисайта на основе поддомена | Мультисайта, привязанного к домену |
| **SSL** | Управляется отдельно | Автоматически управляется Cloudflare |

### Настройка пользовательских хостов Cloudflare {#setting-up-cloudflare-custom-hostnames}

1. Cloudflare панелинде сиздин негизги доменünüzün zonasına girin.
2. **SSL/TLS > Custom Hostnames** (Özelleştirilmiş Ana Bilgisayar Adları) bölümüne gidin.
3. Sunucunuzun IP adresine veya ana bilgisayar adına işaret eden bir yedek kaynak (fallback origin) ekleyin.
4. Ultimate Multisite'ta haritalanmış her müşteri alanı için Cloudflare'de Özel Ana Bilgisayar Adı (Custom Hostname) girişi ekleyin. Bu adımı Cloudflare API'sini kullanarak avtomatikleştirebilirsiniz.
5. Müşterinin DNS'i ağınıza yönlendirildiğinde, Cloudflare otomatik olarak her özel ana bilgisayar adı için TLS sertifikalarını düzenler ve yeniler.

Tam API referansı için [Cloudflare Custom Hostnames dokümantasyonuna](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) bakın.

:::note Terminoloji güncellemesi
Ultimate Multisite v2.6.1 sürümünden itibaren bu özellik, tüm eklenti ayarlarında ve etiketlerde **Cloudflare Custom Hostnames** olarak adlandırılmaktadır. Önceki sürümlerde ise altyapı ürünü olan "Cloudflare for SaaS" adı kullanılıyordu.
:::

## Önemli Notlar {#important-notes}

Cloudflare'in son güncellemeleriyle birlikte, tüm müşteriler için joker karakter (wildcard) proxying artık mevcut. Bu, alt alan adı çoklu kurulumları için standart Cloudflare DNS entegrasyonunun eskisi kadar kritik olmadığını gösterir; çünkü Cloudflare'de basit bir joker karakter DNS kaydı ayarlayabilirsiniz.

## Sorun Giderme {#troubleshooting}

### API Bağlantı Sorunları {#api-connection-issues}
- API tokeninizin doğru olduğunu ve gerekli izinlere sahip olduğunu doğrulayın.
- Zon ID'nizin doğru olup olmadığını kontrol edin.
- Cloudflare hesabınızın gerekli izinlere sahip olduğundan emin olun.

### Alt Alan Adı Eklenmedi {#subdomain-not-added}
- Ultimate Multisite loglarını herhangi bir hata mesajı için kontrol edin.
- Alt alan adının zaten Cloudflare'e eklenip eklenmediğini doğrulayın.
- Oluşturduğunuz DNS kaydı sayısını Cloudflare planınızın desteklediğinden emin olun

### Проксиу суюктуулук маселелери {#proxying-issues}

- Эгер сиз поддомендерди проксилоо каалабасаңыз, `wu_cloudflare_should_proxy` фильтрүн колдонушуңуз мүмкүн.
- Кээ бир функциялар проксилөндү когда туура иштебей калышы мүмкүн (мисалы, кээ бир WordPress администратордук функциялары).
- Администратордук саптарга 캐штан өтүү үчүн Cloudflare'дин Page Rules-ын колдонууну карап көрүңүз.
