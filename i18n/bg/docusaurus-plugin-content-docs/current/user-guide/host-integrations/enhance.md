---
title: Подобряване на интеграцията с панела за управление
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Подобряване на Интеграцията с Контролното Панел

## Общ преглед {#overview}
Enhance е модерен контролен панел, който предоставя мощни възможности за автоматизация и управление на хостинга. Тази интеграция позволява автоматично синхронизиране на домейни и управление на SSL сертификати между Ultimate Multisite и Enhance Control Panel.

**Свърдана дискусия:** Вижте [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) за съвети от общността и допълнителна информация.

## Характеристики {#features}
- Автоматично синхронизиране на домейни, когато домейните са мапирани в Ultimate Multisite
- Автоматично предоставяне на SSL сертификати чрез LetsEncrypt, когато DNS резолвира
- Поддръжка на поддомейни за мрежи, работещи в режим на поддомейни
- Премахване на домейн при изтриване на мапирания
- Тестване на връзката за проверка на API потребителските данни

## Изисквания {#requirements}

### Системни изисквания {#system-requirements}
- Инсталиран и достъпен Enhance Control Panel
- Инсталация на WordPress Multisite, хоствана на или свързана с Enhance сървър
- Apache уеб сървър (Enhance в момента поддържа Apache конфигурации; LiteSpeed Enterprise е налично на намалена цена)

### Достъп до API {#api-access}
Трябва да имате административен достъп до Enhance Control Panel, за да създадете API токени.

## Получаване на API потребителските данни {#getting-your-api-credentials}

### 1. Създаване на API Токен {#1-create-an-api-token}

1. Влезте в Enhance Control Panel като администратор
2. Кликнете върху **Settings** в навигационното меню
3. Навигирайте до **Access Tokens**
4. Кликнете **Create Token**
5. Дайте описателно име на токена (напр. "Ultimate Multisite Integration")
6. Присвоете ролята **System Administrator**
7. За датата на изтичане:
   - Оставете празно, ако искате токенът никога да не изтече
   - Или задайте конкретна дата на изтичане за сигурност
8. Кликнете **Create**

След създаването, вашият **Access Token** и **Organization ID** ще бъдат изведени. **Запазете ги веднага**, тъй като токенът ще бъде показан само веднъж.

### 2. Получаване на Organization ID {#2-get-your-organization-id}

Organization ID се извежда на страницата Access Tokens в синя информационна кутия с етикет "Org ID: {your_id}".

Organization ID е UUID във формат като: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Можете също да намерите Organization ID на клиента по следния начин:
1. Отидете на страницата **Customers**
2. Кликнете **Manage customer** за съответния клиент
3. Погледнете URL-адресата – Organization ID е буквено-цифрен набор от символи след `/customers/`

### 3. Получаване на Server ID {#3-get-your-server-id}

За да намерите Server ID (необходим за операции с домейни):

1. В Enhance Control Panel, навигирайте до **Servers**
2. Кликнете върху сървъра, където работи вашата WordPress инсталация
3. Server ID (UUID формат) ще бъде видим в URL-адресата или в детайлите на сървъра
4. Алтернативно, можете да използвате API, за да изведете сървърите:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID следва UUID формата: `00000000-0000-0000-0000-000000000000`

### 4. Получаване на API URL {#4-get-your-api-url}

Вашият API URL е URL на Enhance Control Panel, към който е добавен `/api/`:

```
https://your-enhance-panel.com/api/
```

**Важно:** Патът `/api/` е задължителен. Честите грешки включват:
- Използване само на домейна без `/api/`
- Използване на HTTP вместо HTTPS (HTTPS е задължителен за сигурност)

## Конфигурация {#configuration}

### Необходими константи {#required-constants}

Добавете следните константи във вашия `wp-config.php` файл:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Настройка чрез Интеграционен Асистент {#setup-via-integration-wizard}

1. В административната част на WordPress, отидете на **Ultimate Multisite** > **Settings**
2. Навигирайте до таба **Integrations**
3. Намерете **Enhance Control Panel Integration** и кликнете **Configuration**
4. Асистентът ще ви проведе през настройката:
   - **Step 1:** Въведение и преглед на функциите
   - **Step 2:** Въвеждане на API потребителските данни (Токен, API URL, Server ID)
   - **Step 3:** Тестване на връзката
   - **Step 4:** Преглед и активиране

Можете да изберете:
- Асистентът да инжектира константите във вашия `wp-config.php` файл автоматично
- Да копирате дефинициите на константите и да ги добавите ръчно

## Допълнителна конфигурация на WordPress {#additional-wordpress-configuration}

Въз основа на обратната връзка от общността ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), може да се наложи да конфигурирате тези допълнителни настройки:

### Конфигурация на .htaccess {#htaccess-configuration}

Ако се сблъскате с проблеми с мапирането на домейни:
1. Изтрийте оригиналния Enhance `.htaccess` файл
2. Заменете го със стандартния WordPress Multisite `.htaccess` файл

### Константи за бисквитки (Cookie Constants) {#cookie-constants}

Добавете тези константи в `wp-config.php`, за да осигурите правилна обработка на бисквитките през мапираните домейни:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Как работи {#how-it-works}

### Когато домейнът е мапиран {#when-a-domain-is-mapped}

1. Потребителят мапира персонализиран домейн в Ultimate Multisite (или се създава нов сайт в режим на поддомейни)
2. Интеграцията изпраща POST заявка към API на Enhance: `/servers/{server_id}/domains`
3. Enhance добавя домейна към конфигурацията на вашия сървър
4. Когато DNS резолвира към вашия сървър, Enhance автоматично предоставя SSL сертификат чрез LetsEncrypt
5. Домейнът става активен с HTTPS

### Когато домейнът е премахнат {#when-a-domain-is-removed}

1. Мапиранието на домейн се изтрива в Ultimate Multisite
2. Интеграцията заявка към Enhance, за да намери ID на домейна
3. Се изпраща DELETE заявка към: `/servers/{server_id}/domains/{domain_id}`
4. Enhance премахва домейна от конфигурацията на вашия сървър

### Проверка на DNS и SSL {#dns-and-ssl-checking}

Ultimate Multisite включва вградена проверка на DNS и SSL:
- Можете да конфигурирате интервала на проверката в **Domain Mapping Settings** (по подразбиране: 300 секунди/5 минути)
- Системата ще провери разпространението на DNS, преди да маркира домейнът като активен
- Валидността на SSL сертификата се проверява автоматично
- Enhance автоматично управлява предоставянето на SSL, така че ръчната конфигурация на SSL не е необходима

## Проверка на настройката {#verifying-setup}

### Тестване на връзката {#test-the-connection}

1. В Интеграционния Асистент, използвайте стъпка **Test Connection**
2. Плъгинът ще се опита да изведе домейни на вашия сървър
3. Съобщение за успех потвърждава:
   - API потребителските данни са коректни
   - API URL е достъпен
   - Server ID е валиден
   - Разрешенията са правилно зададени

### След мапиране на домейн {#after-mapping-a-domain}

1. Мапирайте тестови домейн в Ultimate Multisite
2. Проверете лог файловете на Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Проверете в Enhance Control Panel дали домейнът е добавен:
   - Отидете на **Servers** > **Your Server** > **Domains**
   - Новият домейн трябва да се появи в списъка
4. След като DNS се разпространи, проверете дали SSL е предоставен автоматично

## Отстраняване на неизправности {#troubleshooting}

### Проблеми с връзката към API {#api-connection-issues}

**Грешка: "Failed to connect to Enhance API"**
- Проверете дали `WU_ENHANCE_API_URL` включва `/api/` в края
- Уверете се, че използвате HTTPS, а не HTTP
- Проверете дали Enhance панелът е достъпен от вашия WordPress сървър
- Проверете дали няма firewall правила, блокиращи връзката

**Грешка: "Enhance API Token not found"**
- Уверете се, че `WU_ENHANCE_API_TOKEN` е дефиниран в `wp-config.php`
- Проверете дали токенът не е изтрит или изтекъл в Enhance
- Проверете за грешки в токенната стойност

**Грешка: "Server ID is not configured"**
- Уверете се, че `WU_ENHANCE_SERVER_ID` е дефиниран в `wp-config.php`
- Уверете се, че Server ID е валиден UUID формат
- Потвърдете дали сървърът съществува в Enhance панела

### Домейнът не е добавен {#domain-not-added}

**Проверете лог файловете:**
1. Отидете на **Ultimate Multisite** > **Logs**
2. Филтрирайте по **integration-enhance**
3. Търсете съобщения за грешки, които показват проблема

**Чести причини:**
- Невалиден формат на името на домейна
- Домейнът вече съществува в Enhance
- Недостатъчни API права (уверете се, че токенът има роля System Administrator)
- Server ID не съответства на действителния сървър в Enhance

### Проблеми с SSL сертификати {#ssl-certificate-issues}

**SSL не се предоставя:**
- Проверете дали DNS сочи към IP адреса на вашия сървър
- Проверете дали домейнът резолвира правилно: `nslookup yourdomain.com`
- Enhance изисква DNS да резолвира, преди да може да предостави SSL
- Предоставянето на SSL обикновено отнема 5-10 минути след разпространението на DNS
- Проверете лог файловете на Enhance Control Panel за специфични грешки, свързани с SSL

**Ръчно отстраняване на неизправности на SSL в Enhance:**
1. Отидете на **Servers** > **Your Server** > **Domains**
2. Намерете домейна си и проверете неговия статус на SSL
3. Можете ръчно да активирате предоставянето на SSL, ако е необходимо

### Интервал на проверка на DNS {#dns-check-interval}

Ако домейните или SSL сертификатите отнемат твърде много време за активиране:
1. Отидете на **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Намерете настройката **DNS Check Interval**
3. Настройте от стандартните 300 секунди на по-ниска стойност (минимално: 10 секунди)
4. **Забележка:** По-ниските интервали означават по-чести проверки, но и по-висока натовареност на сървъра

### Грешки при автентикацията {#authentication-errors}

**Грешки HTTP 401/403:**
- Регенерирайте API токена си в Enhance
- Проверете дали токенът има роля System Administrator
- Проверете дали токенът не е изтекъл
- Уверете се, че използвате правилния Organization ID (въпреки че обикновено не е необходим в URL-адресата)

### Анализ на лог файловете {#log-analysis}

Включете подробен лог:
```php
// Добавете в wp-config.php за подобрена отладка
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

След това проверете лог файловете на:
- Лог файлове на Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Лог файлове на Enhance панела: Достъпни в административния интерфейс на Enhance

## API Референция {#api-reference}

### Автентикация {#authentication}
Всички API заявки използват Bearer токен автентикация:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Често използвани ендпойнти {#common-endpoints-used}

**Извеждане на сървъри:**
```
GET /servers
```

**Извеждане на домейни на сървър:**
```
GET /servers/{server_id}/domains
```

**Добавяне на домейн:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Изтриване на домейн:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Пълна API документация {#full-api-documentation}
Пълна API документация: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Най-добри практики {#best-practices}

### Сигурност {#security}
- **Никога не пушете API токени в version control**
- Съхранявайте токените в `wp-config.php`, който трябва да бъде изключен от Git
- Използвайте токени с подходящи права (System Administrator за пълна интеграция)
- Задавайте дати на изтичане на токените за производствени среди
- Ротирайте токените периодично

### Производителност {#performance}
- Използвайте стандартния интервал за проверка на DNS (300 секунди), за да избегнете прекалено много API заявки
- Следете ресурсите на сървъра на Enhance при изпълнение на операции с домейни в голям мащаб
- Помислете за поетапно добавяне на домейни, ако мапирате много домейни наведнъж

### Мониторинг {#monitoring}
- Редовно проверявайте лог файловете на Ultimate Multisite за грешки в интеграцията
- Настройте мониторинг за неуспешни добавяния на домейни
- Проверете дали SSL сертификатите се предоставят правилно
- Следете капацитета на сървъра на Enhance и лимита на домейни

## Допълнителни ресурси {#additional-resources}

- **Официална документация на Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **API документация на Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Форум на Enhance общността:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Дискусия:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ръководство за мапиране на домейни в Ultimate Multisite:** Вижте страницата на wiki "How to Configure Domain Mapping v2"

## Поддръжка {#support}

Ако се сблъскате с проблеми:
1. Проверете секцията за отстраняване на неизправности по-горе
2. Прегледайте лог файловете на Ultimate Multisite
3. Посетете [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Свържете се с поддръжката на Enhance за проблеми, специфични за панела
5. Създайте нова дискусия с подробни лог файлове за помощ от общността

## Забележки {#notes}

- Тази интеграция обработва само псевдоними на домейни; Enhance управлява SSL автоматично
- Интеграцията поддържа както мапиране на персонализирани домейни, така и сайтове, базирани на поддомейни
- Автоматичното създаване на поддомейн www може да се конфигурира в настройките за мапиране на домейни
- Enhance в момента поддържа Apache конфигурации (LiteSpeed Enterprise е налично)
- Премахването на домейн от Ultimate Multisite ще премахне домейна от Enhance, но може да не изтрие веднага свързаните SSL сертификати
