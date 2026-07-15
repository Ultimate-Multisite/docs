---
title: Бояд Интегратсияи Панели Назоратиро таҳкам намуданд
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Нара мераи пайваст кардани интегратсияи Control Panel

## Обзор {#overview}
Enhance як панеڵی навиштаи муосир аст, ки қобилияти автоматизатсия ва идораи хостингро ба таври қавии пешниҳод мекунад. Ин интегратсия имконият медиҳад, ки синхронизатсияи автоматӣ аз доменҳо ва идораи сертификатҳои SSL байни Ultimate Multisite ва Enhance Control Panel-ро фароҳам орад.

**Музохиратно:** Барои маслиаҳои ҷомеа ва иттилооти иловагӣ, [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)-ро биёвед.

## Хусусиятҳо {#features}
- Синхронизатсияи автоматии доменҳо вақте ки доменҳо дар Ultimate Multisite пайваст карда мешаванд
- Пешниҳоди автоматии сертификати SSL тавассути LetsEncrypt, вақте ки DNS ҳаллида шавад
- Ҳампораи поддомини (Subdomain) барои шабакаҳое, ки дар режими subdomain идора мешаванд
- Ҳаттог кардани доменҳо вақте ки пайвасткунӣ аз онҳо удад карда мешавад
- Тести намудани пайвасткунӣ барои тасдиқи маълумоти API

## Талабот {#requirements}

### Талаботҳои система {#system-requirements}
- Enhance Control Panel насб шуда бошад ва ба он дастрас бошад
- Насоби WordPress Multisite, ки дар сервери Enhance ё ба он пайваст карда шудааст
- Сервери веб Apache (Enhance ҳоло аз таркибҳои Apache дастгирӣ мекунад; LiteSpeed Enterprise бо нархи камтар мавҷуд аст)

### Дастрасии API {#api-access}
Шумо бояд дастрасии администраторро ба Enhance Control Panel дошта бошед, то токенҳои API сохта тавонед.

## Гирифтани маълумоти API-и худ {#getting-your-api-credentials}

### 1. Сохтани Токени API {#1-create-an-api-token}

1. Ба Enhance Control Panel ҳамчун администратор ворид шавед
2. Дар менюи навигация ба **Settings** (Ҳамаи танзимҳо) клик кунед
3. Ба **Access Tokens** (Токенҳои дастрасӣ) равед
4. Ба **Create Token** (Сохтани токен) клик кунед
5. Номи тавзифии токенро диҳед (масалан, "Ultimate Multisite Integration")
6. Нақши **System Administrator** (Администратори Системӣ) ишора кунед
7. Барои санаи гузаштани вақт:
   - Агар мехоҳед токен ҳеҷ гоҳ гузашта набошад, онро хуālӣ (холо) гузоред
   - Ё санаи гузаштани мушаххас барои аманӣ тақдим кунед

8. Ба **Create** (Сохташ) клик кунед

После создания будут отображены ваш **Access Token** и **Organization ID**. **Сохраните их немедленно**, так как токен будет показан только один раз.

### 2. Получение вашего Organization ID (Идентификатора организации) {#2-get-your-organization-id}

Organization ID отображается на странице Access Tokens в синем информационном блоке с надписью "Org ID: {your_id}".

Organization ID имеет формат UUID, который выглядит так: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Вы также можете найти Organization ID клиента, сделав следующее:
1. Перейдите на страницу **Customers** (Клиенты).
2. Нажмите **Manage customer** (Управление клиентом) для нужного клиента.
3. Посмотрите на URL — Organization ID это буквенно-цифровые символы после `/customers/`.

### 3. Получение вашего Server ID (Идентификатора сервера) {#3-get-your-server-id}

Чтобы найти ваш Server ID (он нужен для операций с доменом):

1. В Enhance Control Panel перейдите в раздел **Servers** (Серверы).
2. Нажмите на сервер, где установлен ваш WordPress.
3. Server ID (в формате UUID) будет виден либо в URL, либо в деталях сервера.
4. Альтернативный способ — использовать API для списка серверов:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID имеет формат UUID: `00000000-0000-0000-0000-000000000000`

### 4. Получение вашего API URL (URL API) {#4-get-your-api-url}

Ваш API URL — это URL вашей Enhance Control Panel с добавлением `/api/`:

```
https://your-enhance-panel.com/api/
```

**Важно:** Путь `/api/` обязателен. Распространенные ошибки включают:
- Использование только домена без `/api/`.
- Использование HTTP вместо HTTPS (для безопасности требуется HTTPS).

## Настройка (Configuration) {#configuration}

### Обязательные константы (Required Constants) {#required-constants}

Добавьте следующие константы в ваш файл `wp-config.php`:

# ҳамгирии бо Интеграцияи Control Panel

```php
// Барои тасвириши Control Panel баланд бардоштани
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Насоботӣ тавассути Wizard (Ройгон) {#additional-wordpress-configuration}

1. Дар администри WordPress, ба **Ultimate Multisite** > **Settings** равед.
2. Ба таб **Integrations** (Интеграшнҳо) равед.
3. **Enhance Control Panel Integration**-ро пайдо кунед ва ба **Configuration** (Ташкил) клик кунед.
4. Wizard интизори шуморо дар ҷараёни танзим роҳнамоӣ мекунад:
   - **Қадами 1:** Муқаддима ва нуҳиди хусусиятҳо
   - **Қадами 2:** Маълумотҳои API (Token, API URL, Server ID) - интихоб кунед
   - **Қадами 3:** Тест кардани пайвастшавӣ
   - **Қадами 4:** Баррадани маълумот ва фаъол кардан

Шумо метавонед ин корро танзим кунед:
- Иҷозат диҳед, ки Wizard ин константаҳоро ба файл `wp-config.php` шумо автоматикӣ ворид намояд.
- Таърифҳои константаҳоро нусхабардорӣ карда, онҳоро худатон илова кунед.

## Ташкилоти Иловагӣ дар WordPress {#htaccess-configuration}

Ба аҳамияти мулоҳиёти ҷомеа (\[Discussion #265\]), шумо метавонед ин танзимҳоро тартиб диҳед:

### Ташкилоти `.htaccess` {#cookie-constants}

Агар шумо ба масъалаҳои пайваст кардани домен рӯ ба рӯ шавед:
1. Файли `.htaccess`и Enhance-и аслӣ-ро ифлос кунед.
2. Онро бо файли стандарт WordPress Multisite `.htaccess` иваз кунед.

### Константаҳои Cookie {#how-it-works}

Ин константаҳоро ба `wp-config.php` илова кунед, то таъмини равиши дуруст cookie дар доменҳои пайвастшуда гардад:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Чӣ гуна кор мекунад {#when-a-domain-is-mapped}

### Вақте ки домен пайваст карда мешавад (Mapped Domain) {#when-a-domain-is-removed}

1. Сарвар (site) дар Ultimate Multisite (ёки сайти навсои subdomain mode) тасвир мекард (map) мекунед.
2. Интеграт як request-и POST ба API-и Enhance фиристода мешавад: `/servers/{server_id}/domains`
3. Enhance доменро ба конфигуратсияи савраи шумо илова мекунад.
4. Вақте DNS ба савраи шумо ишора мекунад, Enhance автоматик сертификати SSL-ро тавассути LetsEncrypt таъмин мекунад.
5. Домен бо HTTPS фаъол мешавад.

### Вақте як домен аз навсозӣ карда мешавад (When a Domain is Removed) {#dns-and-ssl-checking}

1. Тасвири домени дар Ultimate Multisite ифрот (delete) карда мешавад.
2. Интеграт ба Enhance савол медиҳад, то ID-и домениро пайдо кунад.
3. Request-и DELETE ба: `/servers/{server_id}/domains/{domain_id}` фиристода мешавад.
4. Enhance доменро аз конфигуратсияи савраи шумо бартарӣ мекунад.

### Муайян кардани DNS ва SSL (DNS and SSL Checking) {#verifying-setup}

Ultimate Multisite назорати DNS ва SSL-ро дар худ дорад:
- Шумо метавонед интервали назориро дар **Domain Mapping Settings** тағйир диҳед (default: 300 секунд/5 дақиқа).
- Система пеш аз иҷозат додани домен ба фаъол кардани он, паст шудани DNS-ро тасдиқ мекунад.
- Ҳама интихоби ҳаёти сертификати SSL автоматик тасдиқ карда мешавад.
- Enhance таъмини SSL-ро автоматик идора мекунад, аз ин рӯ, конфигуратсияи мустақилли SSL лозим нест.

## Тасдиқи сохтшавӣ (Verifying Setup) {#test-the-connection}

### Пулӣ кардани пайвасткунӣ (Test the Connection) {#after-mapping-a-domain}

1. Дар Integration Wizard, аз қадами **Test Connection** истифода баред.
2. Плагин кӯшиш мекунад доменҳоро дар савраи шумо рӯйсозӣ намояд.
3. Пەیми муваффақият тасдиқ мекунад:
   - Маълумотҳои API дурустанд
   - URL-и API дастрас аст
   - Server ID ҳастадор аст
   - Иҷозатҳо дуруст дода шудаанд

### Баъди тасвири домен (After Mapping a Domain) {#troubleshooting}

1. Як домениро дар Ultimate Multisite тасвир кунед.
2. Логҳои Ultimate Multisite-ро тафтиш кунед (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Дар Enhance Control Panel тасдиқ кунед, ки домен илова шудааст:
   - Ба **Servers** > **Your Server** > **Domains** равед.
   - Домени нав бояд дар рӯйсозӣ пайдо шавад.
4. Вақте DNS паст шуд, тасдиқ кунед, ки SSL автоматик таъмин шудааст.

## Мушки кушодаи (Troubleshooting) {#api-connection-issues}

### Мушки пайвасткунӣ (API Connection Issues) {#domain-not-added}

**Хатои: "Насозии API Enhance намуд"**
- Барои тасдиқ кардан, `WU_ENHANCE_API_URL` охир аз `/api/` иборат аст.
- Истифодаи HTTPS-ро таъмин кунед, на HTTP.
- Таъкид кунед, ки панел Enhance аз сервер WordPress-и шумо дастрас аст.
- Барои тасдиқ кардан, ҳеч як қоидаи файрволӣ пайвасткунӣ (connection) -ро бартараф намесозад.

**Хатои: "Token-и API Enhance ёфта наметавонад"**
- Таъкид кунед, ки `WU_ENHANCE_API_TOKEN` дар `wp-config.php` муайян шудааст.
- Барои тасдиқ кардан, таъкид (token) аз Enhance бартараф ё вақти гузашта нест.
- Барои тасдиқ кардан, хатои навбиниши (typo) дар арзиши токенҳоро санҷед.

**Хатои: "ID-и сервер муайян карда нашудааст"**
- Таъкид кунед, ки `WU_ENHANCE_SERVER_ID` дар `wp-config.php` муайян шудааст.
- Барои тасдиқ кардан, ID-и сервер формати UUID сохт ва далелӣ аст.
- Истисно баъд аз панели Enhance тасдиқ кунед, ки сервер дар он мавҷуд аст.

### Домен илова нашудааст (Domain Not Added) {#ssl-certificate-issues}

**Логҳоро санҷед:**
1. Ба **Ultimate Multisite** > **Logs** равед.
2. Бо лоиҳаи **integration-enhance** филтр кунед.
3. Барои пайдо кардани хатои муайянкунанда, аз пайвасткунӣ (connection) ҷудо кунед.

**Сабабҳои маъмул:**
- Формати номи домен носохт.
- Домени аллакай дар Enhance мавҷуд аст.
- Иҷозатҳои API кам аст (таъкид кунед, ки токен намуди System Administratorро дорад).
- ID-и сервер бо сервери воқеӣ дар Enhance мувофиқ нест.

### Масъалаҳои Сартират SSL (SSL Certificate Issues) {#dns-check-interval}

**SSL таҳия нашудааст:**
- Барои тасдиқ кардан, DNS ба арсали IP-и сервери шумо нишон додааст.
- Барои тасдиқ кардан, домен дуруст ҳал карда мешавад: `nslookup yourdomain.com`
- Enhance пеш аз он ки SSL-ро таҳия кунад, бояд DNS дуруст ҳал карда шавад.
- Таҳияи SSL одатан пас аз паҳншавии DNS 5-10 дақиқа вақт мегирад.
- Барои хатоҳои махсуси SSL дар логҳои Enhance Control Panel санҷед.

**Ҳалли мушкилоти SSL дар Enhance:**
1. Ба **Servers** > **Your Server** > **Domains** равед.
2. Домени худро пайдо кунед ва ҳолати SSL-и онро санҷед.
3. Агар лозим бошад, метавонед таҳияи SSL-ро ба таври мустақим (manually) инишоъ кунед.

### Давраи санҷиши DNS (DNS Check Interval) {#authentication-errors}

Агар активация доменов ё сертификатҳои SSL хеле дароз муддат кунад:
1. Ба **Ultimate Multisite** > **Settings** > **Domain Mapping** равед баред.
2. Ҳусусияи **DNS Check Interval**-ро пайдо кунед.
3. Аз арзиши воситаи 300 секунд ба арзиши камтар (минималӣ: 10 секунд) тағйир диҳед.
4. **Эътибор:** Муддатҳои камтар маънои текшишҳои тезтарро доранд, аммо ҳавоти серверро баландтар месозад.

### Хатоҳои тасдиқ (Authentication Errors) {#log-analysis}

**Хатоҳои HTTP 401/403:**
- Токен API-и худро дар Enhance ибора кунед (Regenerate).
- Тасдиқ кунед, ки токен намудаи **System Administrator** дорад.
- Ҳама инро тасдиқ кунед, ки токен паси наздик нашудааст.
- Иштиҳсоби ID-и Организатсияи дурустро истифода баред (холи ки он одатан дар URL талаб карда намешавад).

### Таҳлили логҳо (Log Analysis) {#api-reference}

Логинг муфассалро фаъол кунед:
```php
// Ба wp-config.php илова кунед барои тасвири беҳтар
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Аз ин рӯ, логҳоро дар ҷойгоҳҳои зерин тафтиш кунед:
- Логҳои Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Логи безарутӣ (debug log) WordPress: `wp-content/debug.log`
- Логҳои панели Enhance: Дар интерфейси администратори Enhance мавҷуданд.

## Маълумоти API (API Reference) {#authentication}

### Тасдиқ (Authentication) {#common-endpoints-used}
Ҳамаи дархостҳои API аз тасдиқи Bearer token истифода мешаванд:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Нимбастрин Endpoint-ҳо (Common Endpoints Used) {#full-api-documentation}

**Фармои серверҳо (List Servers):**
```
GET /servers
```

**Фармои доменҳо дар як сервер (List Domains on a Server):**
```
GET /servers/{server_id}/domains
```

**Илова кардани домен (Add a Domain):**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Даровардани домен (Delete a Domain):**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Документалии API-и пурра {#best-practices}
Документалии мукаммали API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Азбаҳои амалӣ (Best Practices) {#security}

### Безопасность {#performance}
- **Никогда не вносите API токены в систему контроля версий**
- Храните токены в файле `wp-config.php`, который должен быть исключен из Git
- Используйте токены с соответствующими правами доступа (Системный администратор для полной интеграции)
- Установите даты истечения срока действия токенов для производственных сред
- Периодически ротируйте токены

### Производительность {#monitoring}
- Используйте стандартный интервал проверки DNS (300 секунд), чтобы избежать чрезмерного количества вызовов API
- Следите за ресурсами сервера Enhance при выполнении крупномасштабных операций с доменами
- Рассмотрите возможность поэтапного добавления доменов, если нужно сопоставлять много доменов сразу

### Мониторинг {#additional-resources}
- Регулярно проверяйте логи Ultimate Multisite на наличие ошибок интеграции
- Настройте мониторинг неудачных добавлений доменов
- Проверьте, корректно ли предоставляются SSL-сертификаты
- Следите за пропускной способностью сервера Enhance и лимитами доменов

## Дополнительные ресурсы {#support}

- **Официальная документация Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Документация API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Форум сообщества Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Обсуждение на GitHub:** [Issue #265 - Советы по интеграции Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Руководство Ultimate Multisite по сопоставлению доменов:** Смотрите страницу вики "Как настроить сопоставление доменов v2"

## Поддержка {#notes}

Если вы столкнулись с проблемами:
1. Проверьте раздел устранения неполадок выше
2. Просмотрите логи Ultimate Multisite
3. Обратитесь к [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Свяжитесь с поддержкой Enhance по вопросам, специфичным для панели
5. Создайте новую дискуссию с подробными логами ошибок для помощи сообщества

## Примечания

Ин интеграт танҳо домен алиасовалро меомӯзад; Enhance автоматикӣ SSL-ро идора мекунад.
Ин интеграт ҳам маппингҳои домени худкор ва ҳам сайтуудаи асосӣ (subdomain) дастгирӣ мекунад.
Эҷоди автоматики поддомини www метавонад дар садои Domain Mapping тартиб дода шавад.
Enhance ҳоло танҳо конфигурацияҳои Apache-ро дастгирӣ мекунад (LiteSpeed Enterprise мавҷуд аст).
Ҳатто агар домен аз Ultimate Multisite бартараф карда шавад, он аз Enhance бартараф мешавад, аммо метавонад сертификатҳои SSL-и пайвастшударо фавран бартараф накунад.
