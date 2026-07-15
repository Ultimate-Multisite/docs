---
title: Интеграция с Hostinger (hPanel)
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Интеграция с Hostinger (hPanel)

## Обзор {#overview}

Hostinger — популярный хостинг-провайдер с современной панелью управления под названием hPanel. Интеграция Ultimate Multisite с Hostinger позволяет автоматически синхронизировать домены между Ultimate Multisite и hPanel Hostinger. Это дает вам возможность управлять привязками доменов и поддоменами прямо из админ-панели WordPress, не выходя из нее.

## Возможности {#features}

- Автоматическое создание дополнительных доменов в hPanel
- Автоматическое создание поддоменов в hPanel (для установок с поддоменными мультисайтами)
- Удаление домена при удалении привязки
- Бесшовная интеграция с API управления доменами hPanel

## Требования {#requirements}

Для использования интеграции Hostinger вам потребуется:

1. Аккаунт Hostinger с доступом к hPanel
2. Токен API от Hostinger
3. Определение следующих констант в файле `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Опционально вы также можете определить:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Стандартный конечный API-адрес
```

## Инструкция по настройке {#setup-instructions}

### 1. Генерация токена API Hostinger {#1-generate-your-hostinger-api-token}

1. Войдите в свой аккаунт Hostinger и откройте hPanel.
2. Перейдите в **Account Settings** → **API Tokens**.
3. Нажмите **Create New Token**.
4. Присвойте токену описательное имя (например, "Ultimate Multisite").
5. Выберите необходимые разрешения:
   - Управление доменами (Domain management)
   - Управление поддоменами (Subdomain management)
6. Скопируйте сгенерированный токен и сохраните его в надежном месте.

### 2. Поиск ID аккаунта {#2-find-your-account-id}

1. В hPanel перейдите в **Account Settings** → **Account Information**.
2. Ваш ID аккаунта отображается на этой странице.
3. Скопируйте и сохраните этот ID для следующего шага.

### 3. Добавление констант в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Если ваш аккаунт Hostinger использует другой конечный API-адрес, вы можете настроить его вручную:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Активация интеграции {#4-enable-the-integration}

1. В админ-панели WordPress перейдите в **Ultimate Multisite > Settings**.
2. Перейдите на вкладку **Domain Mapping**.
3. Прокрутите вниз до раздела **Host Integrations**.
4. Активируйте интеграцию **Hostinger (hPanel)**.
5. Нажмите **Save Changes**.

## Как это работает {#how-it-works}

### Дополнительные домены (Addon Domains) {#addon-domains}

Когда вы привязываете домен в Ultimate Multisite:

1. Интеграция отправляет запрос в API Hostinger для добавления домена в качестве дополнительного.
2. Домен настраивается так, чтобы указывать на вашу корневую директорию.
3. Когда привязка домена удаляется, интеграция автоматически удаляет дополнительный домен из hPanel.

### Поддомены (Subdomains) {#subdomains}

Для установок с поддоменными мультисайтами, когда создается новый сайт:

1. Интеграция извлекает часть поддомена из полного доменного имени.
2. Она отправляет запрос в API Hostinger для добавления поддомена.
3. Поддомен настраивается так, чтобы указывать на вашу корневую директорию.

## Важные примечания {#important-notes}

- Интеграция использует REST API Hostinger для связи с вашим аккаунтом.
- Ваш токен API должен иметь необходимые разрешения для управления доменами и поддоменами.
- Интеграция не занимается настройкой DNS; домены должны быть уже направлены на ваш аккаунт Hostinger.
- Запросы API выполняются безопасно по протоколу HTTPS.
- Храните свой токен API в секрете и никогда не публикуйте его.

## Устранение неполадок {#troubleshooting}

### Проблемы с подключением к API {#api-connection-issues}

- Убедитесь, что ваш токен API корректен и не истек.
- Проверьте правильность ID аккаунта.
- Убедитесь, что ваш токен API имеет необходимые разрешения для управления доменами.
- Проверьте, что ваш аккаунт Hostinger активен и не имеет проблем.

### Домен не добавлен {#domain-not-added}

- Проверьте логи Ultimate Multisite на наличие сообщений об ошибках.
- Убедитесь, что домен еще не добавлен в ваш аккаунт Hostinger.
- Убедитесь, что ваш аккаунт Hostinger не достиг лимита по дополнительным доменам.
- Подтвердите, что домен правильно направлен на ваш nameservers Hostinger.

### Проблемы с SSL-сертификатами {#ssl-certificate-issues}

- Интеграция не занимается выдачей SSL-сертификатов.
- Hostinger обычно предоставляет бесплатные SSL-сертификаты через AutoSSL.
- Вы можете управлять SSL-сертификатами напрямую в hPanel в разделе **SSL/TLS**.
- В качестве альтернативы используйте Let's Encrypt с функцией AutoSSL Hostinger.

## Поддержка {#support}

Если вам нужна дополнительная помощь с интеграцией Hostinger, пожалуйста, обратитесь к:

- [Документации API Hostinger](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Документации Ultimate Multisite](/)
- [Поддержке Ultimate Multisite](https://ultimatemultisite.com/support)
