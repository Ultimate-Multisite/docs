---
title: Подобрување на интеграцијата со Контролна панел
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Подобрување на интеграција со Control Panel

## Преглед {#overview}
Enhance е модерен контролен панел кој нуди моќни способности за автоматизација и управување со хостирање. Ова интегрира автоматско синхронизирање на домен и управување со SSL сертификати помеѓу Ultimate Multisite и Enhance Control Panel.

**Поврзана дискусија:** Видете [GitHub Дискусија #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) за совети од заедницата и дополнителни информации.

## Функции {#features}
- Автоматско синхронизирање на домени кога се мапирани во Ultimate Multisite
- Автоматско обезбедување на SSL сертификат преку LetsEncrypt кога DNS е резолуциран
- Поддршка за поддомени за мрежи што работат во режим со поддомен
- Прекинување на домен при бришење на мапирањата
- Тестирање на врска за проверка на API податоците

## Задолжинија {#requirements}

### Системски задолжини {#system-requirements}
- Enhance Control Panel инсталиран и пристапен
- Инсталација на WordPress Multisite хостирана на или поврзана со сервер на Enhance
- Apache вебен сервер (Enhance всушност поддржува конфигурации на Apache; LiteSpeed Enterprise е достапен по намалена цена)

### Достап до API {#api-access}
Мора да имате администраторски пристап до Enhance Control Panel за создавање API токени.

## Прифаќање на вашите API податоци {#getting-your-api-credentials}

### 1. Создадете API Токен {#1-create-an-api-token}

1. Најавете се во вашиот Enhance Control Panel како администратор
2. Кликнете на **Settings** (Поставки) во менито за навигација
3. Најдете **Access Tokens** (API Токени)
4. Кликнете на **Create Token** (Создади Токен)
5. Дајте му описен име на токенот (на пр., "Ultimate Multisite Integration")
6. Поставете ја ровата **System Administrator** (Системски администратор)
7. За датумот на истекување:
   - Оставете празен ако сакате да токенот никогаш не истече
   - Или постави конкретна датум за истекување за цели причини на сигурност
8. Кликнете на **Create** (Создади)

По завршувањето, ќе се прикажат и **Access Token** и **Organization ID**. **Зачувај ги веднаш**, бидејќи токенот ќе се прикаже само еднаш.

### 2. Пронајдете го Вашето Organization ID {#2-get-your-organization-id}

Organization ID-то е прикажан на страницата за Access Tokens во сина информативна кутија со ознака "Org ID: {your_id}".

Organization ID-то е UUID формат како: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Можете да го најдете Organization ID-то на клиентиот преку следниве чекори:
1. Ојдете на страницата **Customers** (Клиенти).
2. Кликнете на **Manage customer** (Управување со клиент) за релевантниот клиент.
3. Погледнете ја URL-от – Organization ID-то е алфанумеричките знаци што се направени по `/customers/`.

### 3. Пронајдете го Вашето Server ID {#3-get-your-server-id}

За да најдете го Вашиот Server ID (неопходен за операции со домен):

1. Во Enhance Control Panel, ојдите на **Servers** (Сервери).
2. Кликнете на серверот каде се инсталиран вашиот WordPress.
3. Server ID-то (UUID формат) ќе биде видлив во URL-от или деталите на серверот.
4. Или, можете да го користите API за списување на сервери:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID-то следи UUID формат: `00000000-0000-0000-0000-000000000000`

### 4. Пронајдете го Вашата API URL {#4-get-your-api-url}

Вашата API URL е URL-от на вашиот Enhance Control Panel со додавање `/api/`:

```
https://your-enhance-panel.com/api/
```

**Важно:** Путът `/api/` е задолжител. Чести грешки вклучуваат:
- Користење само на домено без `/api/`.
- Користење HTTP наместо HTTPS (HTTPS е потребно за сигурност).

## Конфигурација {#configuration}

### Потребно константи {#required-constants}

Додадете ги следните константи во вашиот `wp-config.php` датотека:

// Подобрушавање на интеграцијата со Control Panel
define('WU_ENHANCE_API_TOKEN', 'вашиот-bearer-token-тука');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'вашиот-server-uuid-тука');

### Поставување преку Wizard (Магија за поставување) {#setup-via-integration-wizard}

1. Во административниот панел на WordPress, отидете на **Ultimate Multisite** > **Settings**
2. Најдете ќе одите на табот **Integrations** (Интеграции)
3. Пронајдете **Enhance Control Panel Integration** и кликнете на **Configuration** (Конфигурација)
4. Wizard-от ќе ви ги води со чекорите за поставување:
   - **Чекор 1:** Вовед и преглед на функциите
   - **Чекор 2:** Внесете вашите API податоци (Token, API URL, Server ID)
   - **Чекор 3:** Тестирајте ја врската
   - **Чекор 4:** Прегледајте и активирајте

Можете да изберете дали:
- Wizard-от автоматски ќе ги вметне константните во вашиот `wp-config.php` файл
- Ќе копирате дефинициите на константите и ќе ги додадете ручно

## Дополнително конфигурацирање на WordPress {#additional-wordpress-configuration}

На основу повратните информации од заедницата ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), може да ви треба да ги конфигурирате овие дополнителни поставки:

### Конфигурација на .htaccess {#htaccess-configuration}
Ако имате проблеми со мапирање на домените (domain mapping):
1. Избришете го оригиналниот файл Enhance `.htaccess`
2. Заменете го со стандардниот WordPress Multisite `.htaccess` файл

### Константи за Cookie-и {#cookie-constants}
Додадете овие константи во `wp-config.php` за да се осигурате правилно обра работа на cookie-ите преку мапираните домени:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Како работи {#how-it-works}

### Кога се мапира некој домен {#when-a-domain-is-mapped}

1. Корисникот мапира кастомна домен во Ultimate Multisite (или се создава нова локација на поддомен режим).
2. Интеграција испраќа POST барање до API на Enhance: `/servers/{server_id}/domains`
3. Enhance го додава доменet во вашата конфигурација на сервер.
4. Кога DNS-от ќе се реши на вашиот сервер, Enhance автоматски обезбедува SSL сертификат преку LetsEncrypt.
5. Домените стануваат активни со HTTPS.

### Кога Доменet е Проширен (Ремекнат) {#when-a-domain-is-removed}

1. Мапирањето на доменet се брише во Ultimate Multisite.
2. Интеграцијата прашува Enhance за да најде ID-то на доменet.
3. Се испраќа DELETE барање на: `/servers/{server_id}/domains/{domain_id}`
4. Enhance го отстранува доменet од вашата конфигурација на сервер.

### Проверка на DNS и SSL {#dns-and-ssl-checking}

Ultimate Multisite вклучува вградена проверка на DNS и SSL:
- Можете да го конфигурирате интервалот за проверка во **Domain Mapping Settings** (дефолт: 300 секунди/5 минути).
- Системот ќе ја верификува пропирањето на DNS пред да го означи доменet како активен.
- Валидноста на SSL сертификатот се проверува автоматски.
- Enhance го управува обезбедувањето на SSL автоматично, па не е потребно ручно конфигурирање на SSL.

## Проверка на Поставката {#verifying-setup}

### Тестирајте ја Поврзата {#test-the-connection}

1. Во Integration Wizard (Магија за интеграција), користите го чекорот **Test Connection** (Тестирај ја поврзата).
2. Плугинот ќе се обиде да ги листа домените на вашиот сервер.
3. Порака за успех потврдува:
   - API податоците (credentials) се правилни
   - API URL е пристапен
   - Server ID е валентен
   - Дозволите (permissions) се поставени правилно

### По Мапирање на Доменet {#after-mapping-a-domain}

1. Мапирајте тестови доменet во Ultimate Multisite.
2. Проверете ги логатите на Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Проверете во Enhance Control Panel дали е додаден:
   - Одете на **Servers** > **Your Server** > **Domains** (Сервери > Вашиот сервер > Домени)
   - Новиот доменet треба да појави во листата
4. Кога DNS-от ќе се пропира, проверете дека SSL е автоматски обезбеден.

## Решавање проблеми {#troubleshooting}

### Проблеми со врската на API {#api-connection-issues}

**Грешка: "Не е успешно поврзана со Enhance API"**
- Проверете дали `WU_ENHANCE_API_URL` завршува со `/api/`
- Сигурно секогаш користите HTTPS, а не HTTP
- Проверете дали панелот за Enhance е пристапен од вашиот WordPress сервер
- Проверете дали нема никакви правила во фајерволот што го блокираат начинот на поврзување

**Грешка: "Не се наоѓа токенуот на Enhance API"**
- Сигурно проверете дали `WU_ENHANCE_API_TOKEN` е дефиниран во `wp-config.php`
- Проверете дали токенот не е означен или исцршен во Enhance
- Проверете за грешки во вредноста на токенот

**Грешка: "Server ID не е конфигуриран"**
- Проверете дали `WU_ENHANCE_SERVER_ID` е дефиниран во `wp-config.php`
- Сигурно секогаш проверете дали Server ID е валиден формат UUID
- Потврдете дека серверумот постои во вашиот Enhance панел

### Домен не додаден {#domain-not-added}

**Проверете лозите:**
1. Ојдете на **Ultimate Multisite** > **Logs**
2. Фирмулирајте по **integration-enhance**
3. Побарајте пораки за грешки кои укажуваат на проблемот

**Чести причини:**
- Невалиден формат на името на доменот
- Домен е веќе постои во Enhance
- Недостасни API дозволи (сигурно проверете дали токенот има улога Системски администратор)
- Server ID не одговара на вистинскиот сервер во Enhance

### Проблеми со SSL сертификат {#ssl-certificate-issues}

**SSL не се конфигурира:**
- Проверете дали DNS ја насочува кон IP адресата на вашиот сервер
- Проверете дали домен е правилно резолуван: `nslookup yourdomain.com`
- Enhance бара да DNS се резолува пред тоа што може да го конфигурира SSL
- Конфигурирањето на SSL обично трае 5-10 минути по пропагацијата на DNS
- Проверете лозите во Enhance Control Panel за специфични грешки со SSL

**Ручно решавање проблеми со SSL во Enhance:**
1. Ојдете на **Servers** > **Your Server** > **Domains**
2. Најдете го вашиот домен и проверете неговиот статус на SSL
3. Можете да го активирате ручно конфигурирањето на SSL ако е потребно

### Интервал за проверка на DNS {#dns-check-interval}

Ако домените или SSL сертификати долго се активираат:
1. Одете на **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Најдете поставката **DNS Check Interval** (Интервал за проверка на DNS)
3. Променете ја од внатрешното значење 300 секунди на помала вредност (минимум: 10 секунди)
4. **Забелешка:** Помалите интервали значи повеќе чекања за проверка, но и поголем примарниот оптоварување на серверот

### Грешки со автентикација (Authentication Errors) {#authentication-errors}

**HTTP 401/403 грешки:**
- Регенирај го вашиот API токен во Enhance.
- Проверете дека токенот има улогата **System Administrator**.
- Проверете дали токенот не е исцршен.
- Убедете се дека користите правилниот Organization ID (иако обично не е потребно во URL).

### Анализа на логтови (Log Analysis) {#log-analysis}

Овозможете детализирани лог-ови:
```php
// Додадете во wp-config.php за подобрено дебагирање
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Потоа проверете логтовите на следниве места:
- Ultimate Multisite логтови: **Ultimate Multisite** > **Logs**
- WordPress дебаг лог: `wp-content/debug.log`
- Логтови на Enhance панелот: Достапни во административниот интерфејс на Enhance

## API Референци (API Reference) {#api-reference}

### Автентикација (Authentication) {#authentication}
Сите API барања користат автентикација со Bearer токен:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Чести конек точки што се користат (Common Endpoints Used) {#common-endpoints-used}

**Листа на сервери:**
```
GET /servers
```

**Листа на домени на даден сервер:**
```
GET /servers/{server_id}/domains
```

**Додај домен:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Избриши домен:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Целосна API документација (Full API Documentation) {#full-api-documentation}
Целосна API документација: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Најдобри праксели (Best Practices) {#best-practices}

### Безбедност {#security}
- **Никога не вчи API токени во верзионирање**
- Склади токените во `wp-config.php` кој треба да биде исклучен од Git-а
- Користи токени со соодветни дозволи (Системски администратор за целосна интеграција)
- Постави датуми на истекување на токените за продукционите средини
- Периодично ротирајте токени

### Перформанси {#performance}
- Користи ја внатрешната интервал за проверка на DNS (300 секунди) за да избегнете премногу повик на API
- Мониторирајте ресурсите на серверот Enhance кога се извршуваат големи операции со домени
- Размислете за поставување на домените во неколку фази ако мапирате многу домени едновременно

### Мониторинг {#monitoring}
- Редовно проверувајте логто Ultimate Multisite за грешки при интеграцијата
- Постави мониторинг за некои неуспешни додадења на домени
- Провери дали SSL сертификатите се поставуваат правилно
- Следете капацитетот на серверот Enhance и лимитите на домените

## Дополнителни ресурси {#additional-resources}

- **Официална документација за Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Документација за API на Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Форум на Enhance за заедница:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Дискусија:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Водич за мапирање домени на Ultimate Multisite:** Видете вики страница "Како да конфигурирате мапирање на домените v2"

## Поддршка {#support}

Ако имате проблеми:
1. Проверете го делот за решавање проблеми горе
2. Прегледајте ги лозите на Ultimate Multisite
3. Консултирајте се со [GitHub Дискусијата](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Контактирајте ја поддршката на Enhance за проблеми специфични за панелот
5. Создадете нова дискусија со детализирани лог-ов записи за помош за заедница

## Белешки {#notes}

Оваа интеграција работеи само со алиаси на домен; Enhance управува со SSL автоматично.
Интеграцијата поддржува и кастомни мапирање на domeni и сајтови базирани на субадомени.
Автоматското креирање на www субадомена може да се конфигурира во поставките за мапирање на домен (Domain Mapping settings).
Enhance в момента поддржува конфигурации со Apache (Достапна е LiteSpeed Enterprise).
Прекинување на домен од Ultimate Multisite ќе го отстрани домето од Enhance, но може не да го избрише веднаш поврзаните SSL сертификати.
