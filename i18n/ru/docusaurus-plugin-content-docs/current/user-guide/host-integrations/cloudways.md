---
title: Интеграция Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Интеграция Cloudways {#cloudways-integration}

## Обзор {#overview}
Cloudways — это платформа управляемого облачного хостинга, которая позволяет развертывать WordPress-сайты у различных облачных провайдеров, таких как DigitalOcean, AWS, Google Cloud и другие. Эта интеграция обеспечивает автоматическую синхронизацию доменов и управление SSL-сертификатами между Ultimate Multisite и Cloudways.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Поддержка дополнительных доменов
- DNS-валидация для SSL-сертификатов

## Требования {#requirements}
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

При необходимости вы также можете определить:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите свои учетные данные Cloudways API {#1-get-your-cloudways-api-credentials}

1. Войдите в свой Cloudways dashboard
2. Перейдите в "Account" > "API Keys"
3. Сгенерируйте API-ключ, если у вас его еще нет
4. Скопируйте свой email и API-ключ

### 2. Получите ID сервера и приложения {#2-get-your-server-and-application-ids}

1. В своем Cloudways dashboard перейдите в "Servers"
2. Выберите сервер, на котором размещена ваша WordPress multisite
3. Server ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Перейдите в "Applications" и выберите свое WordPress-приложение
5. App ID виден в URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Если у вас есть дополнительные **внешние** домены (за пределами вашей multisite-сети), которые всегда должны сохраняться в списке алиасов Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Не включайте wildcard собственной сети
**Не** добавляйте `*.your-network.com` (или любой шаблон поддомена вашей собственной сети) в
`WU_CLOUDWAYS_EXTRA_DOMAINS`. См. [Важно — ловушка wildcard SSL](#important--wildcard-ssl-pitfall)
ниже, чтобы понять, почему это препятствует выпуску SSL-сертификатов для отдельных арендаторов.
:::

### 4. Включите интеграцию {#4-enable-the-integration}

1. В админке WordPress перейдите в Ultimate Multisite > Settings
2. Перейдите на вкладку "Domain Mapping"
3. Прокрутите вниз до "Host Integrations"
4. Включите интеграцию Cloudways
5. Нажмите "Save Changes"

## Как это работает {#how-it-works}

### Синхронизация доменов {#domain-syncing}

Когда домен сопоставляется в Ultimate Multisite:

1. Интеграция получает все текущие сопоставленные домены
2. Она добавляет новый домен в список (вместе с версией www, если применимо)
3. Она отправляет полный список в Cloudways через API
4. Cloudways обновляет алиасы доменов для вашего приложения

Примечание: Cloudways API требует каждый раз отправлять полный список доменов, а не просто добавлять или удалять отдельные домены.

### Управление SSL-сертификатами {#ssl-certificate-management}

После синхронизации доменов:

1. Интеграция проверяет, какие домены имеют действительные DNS-записи, указывающие на ваш сервер
2. Она отправляет запрос в Cloudways на установку SSL-сертификатов Let's Encrypt для этих доменов
3. Cloudways обрабатывает выпуск и установку SSL-сертификатов

Интеграция всегда запрашивает **стандартные** (не wildcard) сертификаты Let's Encrypt у
Cloudways. Если шаблон wildcard указан в `WU_CLOUDWAYS_EXTRA_DOMAINS`, начальная часть
`*.` удаляется перед SSL-запросом — сам wildcard никогда не устанавливается этой
интеграцией. Чтобы использовать wildcard-сертификат на Cloudways, вам пришлось бы установить его
вручную, но это блокирует выпуск Let's Encrypt для каждого домена для сопоставленных пользовательских доменов
(см. ловушку ниже).

## Дополнительные домены {#extra-domains}

Константа `WU_CLOUDWAYS_EXTRA_DOMAINS` позволяет указать дополнительные **внешние**
домены, которые всегда должны сохраняться в списке алиасов приложения Cloudways. Используйте ее для:

- Внешних доменов, которые не управляются Ultimate Multisite (например, отдельный маркетинговый сайт, использующий то же приложение Cloudways)
- Припаркованных или staging-доменов, которые вы хотите сохранить в списке алиасов приложения

**Не** используйте эту константу для wildcard поддоменов вашей собственной сети
(например, `*.your-network.com`). См. ловушку wildcard SSL ниже.

## Важно — ловушка wildcard SSL {#important--wildcard-ssl-pitfall}

Распространенная ошибка при следовании стандартной настройке Cloudways — добавить wildcard, например
`*.your-network.com`, в `WU_CLOUDWAYS_EXTRA_DOMAINS` или вручную установить wildcard SSL-сертификат Cloudways
для этого wildcard.

**Если вы сделаете это, Cloudways откажется выпускать сертификаты Let's Encrypt для
пользовательских доменов отдельных арендаторов, которые сопоставляет Ultimate Multisite.** Cloudways каждый раз заменяет активный
SSL-сертификат в приложении, а уже существующий wildcard-сертификат в
приложении блокирует выпуск Let's Encrypt для каждого домена, на который опирается интеграция.

### Рекомендуемая настройка Cloudways SSL для сети Ultimate Multisite {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. На вкладке **SSL Certificate** приложения Cloudways установите **стандартный
   сертификат Let's Encrypt**, покрывающий только `your-network.com` и `www.your-network.com`
   — **не** wildcard.
2. **Не** помещайте `*.your-network.com` (или любой шаблон поддомена вашей собственной сети) в
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Оставьте эту константу только для **внешних** доменов.
3. Создайте wildcard поддоменов отдельных арендаторов только на уровне **DNS** (запись `A` для
   `*.your-network.com`, указывающая на IP вашего сервера Cloudways), чтобы подсайты разрешались. SSL
   для отдельных сопоставленных пользовательских доменов затем выпускается автоматически интеграцией
   через Let's Encrypt.

Если пользовательские домены ваших арендаторов зависли без SSL, проверьте вкладку SSL в Cloudways. Если там активен
wildcard-сертификат, удалите его, повторно выпустите стандартный сертификат Let's Encrypt
только для основного домена сети и удалите все wildcard-записи из
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Затем повторно запустите сопоставление домена (или дождитесь следующего),
и интеграция снова начнет выпускать сертификаты для каждого домена.

## Устранение неполадок {#troubleshooting}

### Проблемы с подключением к API {#api-connection-issues}
- Проверьте, что ваш email и API key указаны правильно
- Проверьте, что ID вашего сервера и приложения указаны правильно
- Убедитесь, что у вашего аккаунта Cloudways есть необходимые разрешения

### Проблемы с SSL-сертификатом {#ssl-certificate-issues}
- Cloudways требует, чтобы у доменов были действительные DNS-записи, указывающие на ваш сервер, перед выпуском SSL-сертификатов
- Интеграция проверяет DNS-записи перед запросом SSL-сертификатов
- Если SSL-сертификаты не выпускаются, проверьте, что ваши домены правильно указывают на IP-адрес вашего сервера
- **Пользовательские домены отдельных арендаторов зависли без SSL?** Проверьте вкладку SSL Certificate приложения Cloudways. Если активен wildcard-сертификат (установленный вручную или покрывающий `*.your-network.com`), Cloudways не будет выпускать сертификаты Let's Encrypt для индивидуально сопоставленных пользовательских доменов. Замените его стандартным сертификатом Let's Encrypt, покрывающим только основной домен сети (`your-network.com`, `www.your-network.com`), и удалите все wildcard-записи из `WU_CLOUDWAYS_EXTRA_DOMAINS`. Затем повторно запустите сопоставление домена (или дождитесь следующего), и интеграция запросит сертификаты для каждого домена.

### Домен не добавлен {#domain-not-added}
- Проверьте журналы Ultimate Multisite на наличие сообщений об ошибках
- Убедитесь, что домен еще не добавлен в Cloudways
- Убедитесь, что ваш план Cloudways поддерживает количество доменов, которые вы добавляете
