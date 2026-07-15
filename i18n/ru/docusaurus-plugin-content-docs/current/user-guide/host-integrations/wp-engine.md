---
title: Интеграция WP Engine
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine Integration

## Overview {#overview}
WP Engine — премиальная управляемая платформа хостинга WordPress, которая обеспечивает оптимизированную производительность, безопасность и масштабируемость для сайтов WordPress. Эта интеграция позволяет автоматически синхронизировать домены между Ultimate Multisite и WP Engine.

## Features {#features}
- Автоматическое синхронизирование доменов
- Поддержка поддоменов для установок мультисайта
- Бесшовная интеграция с существующими системами WP Engine

## Requirements {#requirements}
Интеграция автоматически определяет, если вы размещаете сайт на WP Engine, и использует встроенный API WP Engine. Дополнительная настройка не требуется, если плагин WP Engine активен и правильно настроен.

Однако, если вам нужно вручную настроить интеграцию, вы можете определить одну из этих констант в файле `wp-config.php`:

```php
define('WPE_APIKEY', 'your_api_key'); // Preferred method
// OR
define('WPE_API', 'your_api_key'); // Alternative method
```

## Setup Instructions {#setup-instructions}

### 1. Verify WP Engine Plugin {#1-verify-wp-engine-plugin}
Если вы размещаете сайт на WP Engine, плагин WP Engine уже должен быть установлен и активирован. Убедитесь, что:
1. Плагин WP Engine активен
2. Файл `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` существует

### 2. Enable the Integration {#2-enable-the-integration}
1. В админке WordPress перейдите в Ultimate Multisite > Settings
2. Перейдите на вкладку «Domain Mapping»
3. Прокрутите вниз до «Host Integrations»
4. Включите интеграцию WP Engine
5. Нажмите «Save Changes»

## How It Works {#how-it-works}

### Domain Syncing {#domain-syncing}
Когда домен привязан в Ultimate Multisite:
1. Интеграция использует API WP Engine для добавления домена в вашу установку WP Engine
2. WP Engine обрабатывает конфигурацию домена и выдачу SSL-сертификата
3. При удалении привязки домена интеграция удалит домен из WP Engine

### Subdomain Support {#subdomain-support}
Для установок мультисайта с поддоменами:
1. Интеграция добавляет каждый поддомен в WP Engine при создании нового сайта
2. WP Engine обрабатывает конфигурацию поддомена
3. При удалении сайта интеграция удалит поддомен из WP Engine

## Important Notes {#important-notes}

### Wildcard Domains {#wildcard-domains}
Для установок мультисайта с поддоменами рекомендуется связаться со службой поддержки WP Engine и запросить конфигурацию wildcard-доменов. Это позволит всем поддоменам работать автоматически без необходимости добавлять каждый из них вручную.

### SSL Certificates {#ssl-certificates}
WP Engine автоматически обрабатывает выдачу и продление SSL-сертификатов для всех доменов, добавленных через эту интеграцию. Дополнительная настройка не требуется.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}
- Убедитесь, что плагин WP Engine активен и правильно настроен
- Если вы вручную задали ключ API, проверьте, что он правильный
- Свяжитесь со службой поддержки WP Engine, если у вас возникли проблемы с API

### Domain Not Added {#domain-not-added}
- Проверьте журналы Ultimate Multisite на наличие ошибок
- Убедитесь, что домен еще не добавлен в WP Engine
- Убедитесь, что ваш тарифный план WP Engine поддерживает количество добавляемых доменов

### Subdomain Issues {#subdomain-issues}
- Если поддомены не работают, свяжитесь со службой поддержки WP Engine и запросите конфигурацию wildcard-доменов
- Убедитесь, что настройки DNS правильно настроены для основного домена и поддоменов
