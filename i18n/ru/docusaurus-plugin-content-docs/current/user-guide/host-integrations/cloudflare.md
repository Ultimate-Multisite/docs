---
title: Интеграция Cloudflare
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Интеграция Cloudflare

## Обзор {#overview}
Cloudflare — ведущая сеть доставки контента (CDN) и поставщик решений безопасности, который помогает защищать и ускорять веб-сайты. Эта интеграция обеспечивает автоматическое управление доменами между Ultimate Multisite и Cloudflare, особенно для multisite-установок с поддоменами.

## Возможности {#features}
- Автоматическое создание поддоменов в Cloudflare
- Поддержка проксируемых поддоменов
- Управление DNS-записями
- Улучшенное отображение DNS-записей в админке Ultimate Multisite

## Требования {#requirements}
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите ваш API-ключ Cloudflare {#1-get-your-cloudflare-api-key}

1. Войдите в ваш Dashboard Cloudflare
2. Перейдите в "My Profile" (нажмите на ваш email в правом верхнем углу)
3. Выберите "API Tokens" в меню
4. Создайте новый API-токен со следующими разрешениями:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. Скопируйте ваш API-токен

### 2. Получите ваш Zone ID {#2-get-your-zone-id}

1. В вашем Dashboard Cloudflare выберите домен, который хотите использовать
2. Zone ID отображается на вкладке "Overview" в правой боковой панели в разделе "API"
3. Скопируйте Zone ID

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. Включите интеграцию {#4-enable-the-integration}

1. В вашей админке WordPress перейдите в Ultimate Multisite > Settings
2. Перейдите на вкладку "Domain Mapping"
3. Прокрутите вниз до "Host Integrations"
4. Включите интеграцию Cloudflare
5. Нажмите "Save Changes"

## Как это работает {#how-it-works}

### Управление поддоменами {#subdomain-management}

Когда новый сайт создается в multisite-установке с поддоменами:

1. Интеграция отправляет запрос в API Cloudflare, чтобы добавить CNAME-запись для поддомена
2. Поддомен по умолчанию настраивается на проксирование через Cloudflare (это можно изменить с помощью фильтров)
3. Когда сайт удаляется, интеграция удалит поддомен из Cloudflare

### Отображение DNS-записей {#dns-record-display}

Интеграция улучшает отображение DNS-записей в админке Ultimate Multisite за счет:

1. Получения DNS-записей напрямую из Cloudflare
2. Отображения того, проксируются записи или нет
3. Показа дополнительной информации о DNS-записях

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ранее называлось "Cloudflare for SaaS") — это функция Cloudflare, которая позволяет вашим клиентам использовать собственные домены с SSL в вашей multisite-сети. Это рекомендуемый подход для multisite-установок с сопоставленными доменами, которые используют Cloudflare, поскольку Cloudflare автоматически управляет выпуском и продлением SSL-сертификатов для каждого пользовательского домена.

### Чем это отличается от стандартной интеграции Cloudflare {#how-it-differs-from-the-standard-cloudflare-integration}

| | Стандартная интеграция | Cloudflare Custom Hostnames |
|---|---|---|
| **Назначение** | Автоматически создает DNS-записи для поддоменов | Включает пользовательские (сопоставленные) домены с SSL, управляемым Cloudflare |
| **Лучше всего подходит для** | Multisite с поддоменами | Multisite с сопоставленными доменами |
| **SSL** | Обрабатывается отдельно | Автоматически управляется Cloudflare |

### Настройка Cloudflare Custom Hostnames {#setting-up-cloudflare-custom-hostnames}

1. В вашем Dashboard Cloudflare откройте зону для вашего основного домена.
2. Перейдите в **SSL/TLS > Custom Hostnames**.
3. Добавьте резервный origin, указывающий на IP-адрес или hostname вашего сервера.
4. Для каждого клиентского домена, сопоставленного в Ultimate Multisite, добавьте запись Custom Hostname в Cloudflare. Вы можете автоматизировать этот шаг с помощью API Cloudflare.
5. Cloudflare автоматически выпускает и продлевает TLS-сертификаты для каждого пользовательского hostname, как только DNS клиента будет направлен на вашу сеть.

Полную справку по API см. в [документации Cloudflare Custom Hostnames](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/).

:::note Обновление терминологии
Начиная с Ultimate Multisite v2.6.1, эта функция называется **Cloudflare Custom Hostnames** во всех настройках и метках plugin. В более ранних версиях использовалось название "Cloudflare for SaaS", которое является названием базового продукта Cloudflare.
:::

## Важные примечания {#important-notes}

После недавних обновлений Cloudflare проксирование wildcard теперь доступно всем клиентам. Это означает, что стандартная интеграция Cloudflare DNS стала менее критичной для multisite-установок с поддоменами, чем раньше, поскольку вы можете просто настроить wildcard DNS-запись в Cloudflare.

## Устранение неполадок {#troubleshooting}

### Проблемы с подключением API {#api-connection-issues}
- Убедитесь, что ваш API-токен корректен и имеет необходимые разрешения
- Проверьте, что ваш Zone ID корректен
- Убедитесь, что ваш Account Cloudflare имеет необходимые разрешения

### Поддомен не добавлен {#subdomain-not-added}
- Проверьте журналы Ultimate Multisite на наличие сообщений об ошибках
- Убедитесь, что поддомен еще не добавлен в Cloudflare
- Убедитесь, что ваш план Cloudflare поддерживает количество DNS-записей, которые вы создаете

### Проблемы с проксированием {#proxying-issues}
- Если вы не хотите, чтобы поддомены проксировались, вы можете использовать фильтр `wu_cloudflare_should_proxy`
- Некоторые функции могут работать некорректно при проксировании (например, определенные функции админки WordPress)
- Рассмотрите возможность использования Page Rules Cloudflare, чтобы обходить кэш для страниц админки
