---
title: Интеграција со CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Интеграција со CyberPanel {#cyberpanel-integration}

Овој водич објаснува како да го конфигурирате интеграцијата меѓу Ultimate Multisite и CyberPanel за да се мапирани домени во вашата мрежа автоматски додадени (и отстранени) како виртуелни хостови во CyberPanel, со опционална автоматична провизија на SSL преку Let's Encrypt.

## Што прави {#what-it-does}

- Кога домен е мапиран во Ultimate Multisite, интеграцијата повикува CyberPanel API за создавање на виртуелен хост за тој домен.
- Кога ќе се отстрани мапирање на домен, интеграцијата повикува API за бришење на соодветниот виртуелен хост.
- Кога е овозможена автоматичната SSL, интеграцијата иницира издавање сертификат од Let's Encrypt веднаш по создавањето на виртуелниот хост.
- Опционално додаде/отстранува `www.` алиасолот во зависност од вашата поставка "Auto-create www subdomain" во поставките за мапирање на домените.

## Предвариви услови {#prerequisites}

- Работечка инстанција на CyberPanel (препорачува се v2.3 или подоцна) што е достапна од вашиот WordPress сервер.
- Существуваат веб-страници во CyberPanel кои веќе служат корено за вашата WordPress мрежа. Интеграцијата прилепува нови виртуелни хостови на овој сервер.
- Овозможен пристап до CyberPanel API. Аутентификација се врши со вашето административно име и лозинка во CyberPanel.
- Вашите DNS записи за мапирани домени мора веќе да укажуваат на IP адресата на вашиот сервер пред тоа што автоматичната SSL може да издаде валиден сертификат.

## Потребијања {#requirements}

Следниот правец треба да биде дефиниран во вашата `wp-config.php` датотека:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Опционално, можете да дефинирате и:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Дефолт: true — издава Let's Encrypt SSL след создавањето на домен
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Дефолт: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Се користи за контакт со сертификат за SSL
```

## Инструкции за поставување {#setup-instructions}

### 1. Вклучете CyberPanel API {#1-enable-the-cyberpanel-api}

1. Најавете се во вашата администраторска табла на CyberPanel.
2. Одете на **Security** > **SSL** и потврдете дека SSL е активен на самата интерфејс на CyberPanel (неопходно за сигурни повик на API).
3. CyberPanel API е достапен на `https://your-server-ip:8090/api/` по дефолт. Не се потребни дополнителни чекори за негово вклучување — тој е активен по дефолт за администраторските корисници.

### 2. Додадете константи во wp-config.php {#2-add-constants-to-wp-configphp}

Додадете ги следните константи во вашиот `wp-config.php` файл пред редот `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'ваша_сигурна_парола');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

За да активирате авто-SSL (препорачано):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Активирајте интеграцијата {#3-enable-the-integration}

1. Во вашата администраторска мрежа на WordPress, одете на **Ultimate Multisite** > **Settings**.
2. Направите префрлање на табот **Domain Mapping**.
3. Пролискувајте надолу до **Host Integrations**.
4. Активирајте интеграцијата за **CyberPanel**.
5. Кликнете на **Save Changes** (Зачувај промени).

### 4. Проверете поврзуемоста {#4-verify-connectivity}

Користите вградената проверка на поврзуемост во wizards-от за поставување:

1. Отидете на **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Кликнете на **Test Connection** (Тестирај ја врската).
3. По成功 порака потврдува дека плагинот може да дојде до CyberPanel API и правилна евиденција (аутентификација).

## Како работи {#how-it-works}

### Domain Mapping (Мапирање на домен) {#domain-mapping}

Кога домен се мапира во Ultimate Multisite:

1. Интеграција испраќа `POST` барање на `/api/createWebsite` на вашиот CyberPanel хост.
2. CyberPanel создава нов виртуелен хост за доменот под конфигурираниот пакет.
3. Корениот директориум (document root) се поставува да укажува на корениот директориум на вашата WordPress мрежа.
4. Кога мапирањето на доменот ќе биде отстрането, интеграцијата повикува `/api/deleteWebsite` за чистење на виртуелниот хост.

### Auto-SSL (Автоматско SSL) {#auto-ssl}

Кога `WU_CYBERPANEL_AUTO_SSL` е `true`:

1. По создавањето на виртуелниот хост, интеграцијата повикува `/api/issueSSL` за доменот.
2. CyberPanel бара сертификат од Let's Encrypt користејќи ACME HTTP-01 предизвик (challenge).
3. Сертификатот се автоматски обнове исклучително пред истекот преку CyberPanel пред да испадне.

> **Важно:** DNS мора целосно да се прошири на IP адресата на вашиот сервер пред Let's Encrypt може да ја валидира доменот. Ако издавањето на SSL не успее веднаш по мапирањето, чекајте со проширувањето на DNS и повторно активирајте SSL од CyberPanel табда **SSL** > **Manage SSL**.

### www Subdomain (Поддомен www) {#www-subdomain}

Ако е овозможено **Auto-create www subdomain** во поставките за Domain Mapping, интеграцијата исто така создава виртуелен алиас за `www.<domain>` и, кога авто-SSL е вклучен, издава сертификат што покрива и апекс (основен) и www варијантите.

### Email Forwarders (Пренасочувачи на е-пошта) {#email-forwarders}

Кога аддон [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) е активен, CyberPanel може да обезбеди и пренасока на е-пошта за клиентите. Пренасоките го ратуваат пораките од некоја домен адреса кон друга пошта без да се креи цела кутија (mailbox), што е корисно за алиаси како `info@customer-domain.test` или `support@customer-domain.test`.

Пред да овозможите пренасоки за клиентите:

1. Проверете дали горе наведените константи на CyberPanel се конфигурирани и дали тестот на врска е успешен.
2. Вклучете провадивачот на е-пошта на CyberPanel во поставките на аддонот Emails.
3. Проверете дали доменскиот префикс на клиентот веќе постои во CyberPanel пред да креите пренасока.
4. Создадете тестова пренасока и испрате порака преку нејзи ја предложење на функцијата за продажни планови.

Ако создавањето на пренасоката не успее, прво проверете активностите во логатите на Ultimate Multisite, а потоа потврдете во CyberPanel дека изворниот домен постои и дека API корисникот има дозволи за управување со е-поштата.

## Референтна конфигурација {#configuration-reference}

| Константа | Потребно | Дефолт | Опис |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Да | — | Целна URL на вашата инстанција на CyberPanel со порт, на пример: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Да | — | Потокен корисникот администратор на CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Да | — | Лозината за администратор на CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Да | `Default` | Пакетот на хостинг на CyberPanel што ќе се додели на нови виртуелни хостови |
| `WU_CYBERPANEL_AUTO_SSL` | Не | `true` | Испијате SSL сертификат Let's Encrypt по креирање на доменот |
| `WU_CYBERPANEL_PHP_VERSION` | Не | `PHP 8.2` | Верзија на PHP за нови виртуелни хостови (мора да одговара верзија инсталирана во CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Не | — | Е-пошта за контакт при регистрација на SSL сертификат |

## Важни забелешки {#important-notes}

API-то на CyberPanel користи автентикација со токени базирани на сесија (session-based token authentication). Интеграцијата автоматски го добива токенот при секој повик на API.
Административниот акаунт во вашиот CyberPanel мора да има дозволи за креирање и бришење веб-сајтови.
CyberPanel работи на дефолт порт `8090`. Ако вашиот сервер користи фајрвол, осигурајте се дека овој порт е пристапен од серверот на WordPress апликацијата.
Интеграцијата не управува со DNS записи. Мора да насочите DNS-от на домен кон IP адресата на вашиот сервер пред да го мапите доминот во Ultimate Multisite.
Ако користите OpenLiteSpeed (OLS), автоматски се активира грациозен рестарт по промена на виртуелни хостови. Не е потребно никаково рачно вмешателство.

## Решавање проблеми (Troubleshooting) {#troubleshooting}

### Отказ од API врска (API Connection Refused) {#api-connection-refused}

- Проверете дали порт `8090` е отворен во фајрволот на вашиот сервер.
- Потврдете дека вредноста `WU_CYBERPANEL_HOST` вклучува правилен протокол (`https://`) и порт.
- Проверете дали вашиот SSL сертификат на CyberPanel е валентен; самопознатите сертификати можат да предизвикаат грешки при верификација на TLS. Поставете `WU_CYBERPANEL_VERIFY_SSL` на `false` само во доверени приватни мрежи.

### Грешки при автентикација (Authentication Errors) {#authentication-errors}

- Потврдете дека вашиот `WU_CYBERPANEL_USERNAME` и `WU_CYBERPANEL_PASSWORD` се правилни со директно најавување во CyberPanel.
- CyberPanel блокира акаунтите по повторни некои успешни обиди за најава. Проверете **Security** > **Brute Force Monitor** во CyberPanel ако се случува блокирање.

### Доминот не е креиран (Domain Not Created) {#domain-not-created}

- Проверете лог активности на Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) за пораки за грешки на API.
- Потврдете дека пакетот дефиниран во `WU_CYBERPANEL_PACKAGE` постои во CyberPanel (**Packages** > **List Packages**).
- Осигурајте се дека доминот не е веќе регистриран како веб-сајт во CyberPanel — дуплирање на креирање на веб-сајт враќа грешка.

### SSL сертификат не е издаден (SSL Certificate Not Issued) {#ssl-certificate-not-issued}

Потврдете дека DNS е целосно пропагоран: `dig +short your-domain.com` треба да ја врати IP адресата на вашиот сервер.
Let's Encrypt принудува лимити на брзината. Ако претходно сте издале неколку сертификати за истата домен, чекајте пред да ги повторите операциите.
Проверете SSL логатите во CyberPanel под **Logs** > **Error Logs** за детали за грешки при издавање на сертификати.
Како резервна опција, можете да издадете SSL рачно од CyberPanel: **SSL** > **Manage SSL** > изберете ја доменet > **Issue SSL**.

## Референции {#references}

- Документација за API на CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Управување со SSL во CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Лимити на брзината од Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
