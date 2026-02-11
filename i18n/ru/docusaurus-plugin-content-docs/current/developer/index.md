---
title: Документация разработчика
sidebar_position: 1
_i18n_hash: 6443e353aea8cf7592387aa5d9658951
---
# Документация для разработчиков

Это руководство предоставляет разработчикам всё необходимое для интеграции, расширения или разработки дополнений для Ultimate Multisite. Ultimate Multisite преобразует сеть WordPress Multisite в платформу Website-as-a-Service (WaaS).

## Что доступно

- **[REST API](./rest-api/overview)** — Полные операции CRUD для всех сущностей (customers, sites, memberships, payments, products, domains) с аутентификацией по API key
- **[Hooks Reference](./hooks/guide)** — 200+ action hooks и 280+ filter hooks для событий жизненного цикла и настройки
- **[Integration Guide](./integration-guide/)** — Примеры интеграции с CRM, аналитики, пользовательских шлюзов и вебхуков
- **[Code Examples](./code-examples/)** — Продвинутые шаблоны для динамического ценообразования, развертывания сайтов, пользовательских ограничений и многогateway обработки
- **[Addon Development](./addon-development/getting-started)** — Структурированный фреймворк для создания addon плагинов

## Требования

- Установка WordPress Multisite
- PHP 7.4 или выше
- Плагин Ultimate Multisite активирован

## Быстрый старт

### Использование REST API

```bash
curl -u "api_key:api_secret" https://yoursite.com/wp-json/wu/v2/customers
```

### Подключение к событиям

```php
add_action('wu_customer_post_create', function($customer) {
    // React to new customer signups
});
```

### Создание Addon

```bash
# Generate addon scaffold from the template
bash create-addon.sh
```

Смотрите каждый раздел для подробной документации и примеров.
