---
title: Интеграция с Cloudways
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways Integration

## Overview
Cloudways — это управляемая облачная хостинг‑платформа, которая позволяет развертывать сайты WordPress на различных облачных провайдерах, таких как DigitalOcean, AWS, Google Cloud и др. Эта интеграция обеспечивает автоматическую синхронизацию доменов и управление SSL‑сертификатами между Ultimate Multisite и Cloudways.

## Features
- Автоматическая синхронизация доменов
- Управление SSL‑сертификатами
- Поддержка дополнительных доменов
- Проверка DNS для SSL‑сертификатов

## Requirements
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

При желании вы также можете определить:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Setup Instructions

### 1. Get Your Cloudways API Credentials

1. Войдите в свою панель Cloudways
2. Перейдите в «Account» > «API Keys»
3. Сгенерируйте ключ API, если у вас его еще нет
4. Скопируйте ваш email и ключ API

### 2. Get Your Server and Application IDs

1. В панели Cloudways перейдите в «Servers»
2. Выберите сервер, на котором размещен ваш WordPress multisite
3. Server ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Перейдите в «Applications» и выберите ваше приложение WordPress
5. App ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Add Constants to wp-config.php

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Если у вас есть дополнительные домены, которые всегда должны быть включены:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. Enable the Integration

1. В админке WordPress перейдите в Ultimate Multisite > Settings
2. Перейдите на вкладку «Domain Mapping»
3. Прокрутите вниз до «Host Integrations»
4. Включите интеграцию Cloudways
5. Нажмите «Save Changes»

## How It Works

### Domain Syncing

When a domain is mapped in Ultimate Multisite:

1. Интеграция получает все текущие сопоставленные домены
2. Добавляет новый домен в список (включая www‑версию, если применимо)
3. Отправляет полный список в Cloudways через API
4. Cloudways обновляет алиасы доменов для вашего приложения

Примечание: API Cloudways требует отправки полного списка доменов каждый раз, а не только добавления или удаления отдельных доменов.

### SSL Certificate Management

После синхронизации доменов:

1. Интеграция проверяет, какие домены имеют действительные DNS‑записи, указывающие на ваш сервер
2. Отправляет запрос в Cloudways для установки SSL‑сертификатов Let's Encrypt для этих доменов
3. Cloudways занимается выдачей и установкой SSL‑сертификатов

## Extra Domains

Константа `WU_CLOUDWAYS_EXTRA_DOMAINS` позволяет указать дополнительные домены, которые всегда должны быть включены при синхронизации с Cloudways. Это полезно для:

- Доменов, которые не управляются Ultimate Multisite
- Доменов с подстановочным знаком (например, `*.example.com`)
- Доменных зон разработки или тестирования

## Troubleshooting

### API Connection Issues

- Убедитесь, что ваш email и ключ API корректны
- Проверьте, что ID вашего сервера и приложения верны
- Убедитесь, что у вашего аккаунта Cloudways есть необходимые разрешения

### SSL Certificate Issues

- Cloudways требует, чтобы домены имели действительные DNS‑записи, указывающие на ваш сервер, прежде чем выдавать SSL‑сертификаты
- Интеграция проверяет DNS‑записи перед запросом SSL‑сертификатов
- Если SSL‑сертификаты не выдаются, проверьте, что ваши домены правильно указывают на IP‑адрес вашего сервера

### Domain Not Added

- Проверьте логи Ultimate Multisite на наличие ошибок
- Убедитесь, что домен еще не добавлен в Cloudways
- Убедитесь, что ваш тарифный план Cloudways поддерживает количество добавляемых доменов
