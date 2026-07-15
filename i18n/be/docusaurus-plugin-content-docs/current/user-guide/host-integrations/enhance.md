---
title: Палепшыць інтэграцыю Панелі кіравання
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Палепшыць Інтеграцыю Панелі Кітралення

## Агляд {#overview}
Enhance — гэта сучасная панель кітралення, якая прадугледжвае магутныя магчымасці аўтаматызацыі і кіравання хостынгу. Гэтая інтэграцыя дазваляе аўтаматычны сінкаванне доменных імен і кіраванне сартыфікатам SSL паміж Ultimate Multisite і Enhance Control Panel.

**Звязаныя абмеркаванні:** Для парад ад кантэнтнай сгудоўі і дадатчай інфармацыі спасылайцеся на [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265).

## Функцыі {#features}
- Аўтаматычнае сінкаванне доменных імен пры мапійгнаванні доменных імен у Ultimate Multisite
- Аўтаматычнае прадастаўленне сартыфікатаў SSL праз LetsEncrypt, калі DNS выпраўляецца
- Падтрымка субдоменаў для сетёў, якія працуюць у рэжыме субдоменаў
- Выбыванне домена пры выдаленні мапійгнаванняў
- Тэставанне злучэння для праверкі ўвайдзяў API

## Патрапатлівасці {#requirements}

### Патрапатлівасці сістэмы {#system-requirements}
- Устаноўлена і даступна Enhance Control Panel
- Установленне WordPress Multisite, хастованае на серверы Enhance або злучэнне з імі
- Веб-сервер Apache (Enhance на бягут адрэчыні канфігурацыі Apache; LiteSpeed Enterprise даступны па зніжнай цане)

### Доступ да API {#api-access}
Для стварэння токенаў API вы павінны мець права адміністратара ў Enhance Control Panel.

## Атримання API-ўвайдзяў {#getting-your-api-credentials}

### 1. Стварыць токен API {#1-create-an-api-token}

1. Увайдзіце ў свой Enhance Control Panel як адміністратар
2. Націсніце на **Settings** у навігацыйным меню
3. Агрэніце **Access Tokens**
4. Націсніце **Create Token**
5. Падаруйце токен апісальную назву (напрыклад, "Ultimate Multisite Integration")
6. Назначце ролю **System Administrator**
7. Для даты выгасання:
   - Пакінуйце пажністым, калі вы не хочаце, каб токен выгасаў
   - Або ўсталюйце канкрэдную дату выгасання з мэтаў бяспекі
8. Націсніце **Create**

Пасля стварэння вашы **Access Token** і **Organization ID** будуць адказаны. **Захавайце іх неадкладна**, бо токен будуць адказаны толькі адзін раз.

### 2. Атримаць Organization ID {#2-get-your-organization-id}

Organization ID адказаны на адканіцы Access Tokens у блакіце інфармацыі блакай "Org ID: {your_id}".

Organization ID — гэта UUID, сфарматыраваны як: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Вы таксама можаце знайсці Organization ID кліента, выкарыстоўваючы:
1. Зайдзіце на адканіцу **Customers**
2. Націсніце **Manage customer** для адпаведнага кліента
3. Паглядзіце URL — Organization ID гэта альфануметры ў паслядоўванні `/customers/`

### 3. Атримаць Server ID {#3-get-your-server-id}

Каб знайсці свой Server ID (неабходна для працоў з доменнымі іменамі):

1. У Enhance Control Panel зайдзіце на **Servers**
2. Націсніце на сервер, дзе працуе ваша ўстаноўванне WordPress
3. Server ID (формат UUID) будзе бачны ў URL або дэталях сервера
4. Альтэрнатыўна, вы можаце выкарыстоўваць API для вылічэння сервераў:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID паслядоўваецца фармату UUID: `00000000-0000-0000-0000-000000000000`

### 4. Атримаць API URL {#4-get-your-api-url}

Ваш API URL — гэта URL вашай Enhance Control Panel з дададзеным `/api/`:

```
https://your-enhance-panel.com/api/
```

**Важна:** Паслядоўванне `/api/` неабходна. Частыя памылкі ўключаюць:
- Выкарыстанне толькі домену без `/api/`
- Выкарыстанне HTTP замест HTTPS (HTTPS неабходна для бяспекі)

## Канфігурацыя {#configuration}

### Неабходныя канстанты {#required-constants}

Дадайце наступныя канстанты ў ваш файл `wp-config.php`:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Наладванне праз Wizard інтэграцыі {#setup-via-integration-wizard}

1. У адмініструванні WordPress зайдзіце на **Ultimate Multisite** > **Settings**
2. Агрэніце тэчку **Integrations**
3. Знайдзіце **Enhance Control Panel Integration** і націсніце **Configuration**
4. Wizard паведоміць вас пра наладванне:
   - **Step 1:** Уводзіны і агляд функцый
   - **Step 2:** Увайдзіце ў вашыя ўвайдзьі API (Токен, API URL, Server ID)
   - **Step 3:** Тэставанне злучэння
   - **Step 4:** Пагледжаць і актываваць

Вы можаце выбраць:
- Дазволіць wizard аўтаматычна ўвесці канстанты ў ваш файл `wp-config.php`
- Капіяваць вызначэнні канстант і дадаць іх навадоўчна

## Дадатковая канфігурацыя WordPress {#additional-wordpress-configuration}

На аснове адзначэнняў кантэнтнай сгудоўі ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), вам можа быць неабходна канфігураваць наступныя дадатковыя налады:

### Канфігурацыя .htaccess {#htaccess-configuration}

Калі вы адчуваеце праблемы з мапійгнаваннем доменных імен:
1. Выбярыце арыгінальны файл `.htaccess` Enhance
2. Замяніце яго стандартным файлам `.htaccess` WordPress Multisite

### Канстанты Cookies {#cookie-constants}

Дадайце гэтыя канстанты ў `wp-config.php`, каб гарантаваць правільную праводзімісць cookies па ўсіх мапіяваных доменах:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Як гэта працуе {#how-it-works}

### Калі домен мапіяваны {#when-a-domain-is-mapped}

1. Па\\карыстальнік мапіявае карыстальніцкі домен у Ultimate Multisite (або ствараецца новае спажыванне ў рэжыме субдоменаў)
2. Інтэграцыя адпраўляе POST-запыт да API Enhance: `/servers/{server_id}/domains`
3. Enhance дадае домен да канфігурацыі вашага сервера
4. Калі DNS выпраўляецца на ваш сервер, Enhance аўтаматычна прадастаўляе сартыфікат SSL праз LetsEncrypt
5. Домен становіцца актыўным з HTTPS

### Калі домен выдалены {#when-a-domain-is-removed}

1. Мапійгнаванне домена выдалена ў Ultimate Multisite
2. Інтэграцыя запытвае Enhance, каб знайсці ID домена
3. DELETE-запыт адпраўляецца на: `/servers/{server_id}/domains/{domain_id}`
4. Enhance выдаляе домен з канфігурацыі вашага сервера

### Праверка DNS і SSL {#dns-and-ssl-checking}

Ultimate Multisite ўключае ў сабе праверку DNS і SSL:
- Вы можаце канфігураваць паслядоўванне праверкі ў **Domain Mapping Settings** (па\\чаткова: 300 секунд/5 хвілін)
- Сістэма праверыць прапаўсюванне DNS, перш чым адзначыць домен як актыўны
- Валіднасць сартыфікату SSL праверяецца аўтаматычна
- Enhance кіруе прадастаўленнем SSL аўтаматычна, таму ручная канфігурацыя SSL не неабходна

## Праверка наладжання {#verifying-setup}

### Тэставанне злучэння {#test-the-connection}

1. У Wizard інтэграцыі выкарыстоўце крок **Test Connection**
2. Плагін паспрабуюць вылічыць домены на вашым серверы
3. Паведамленне пра поспех пацвярджае:
   - Увайдзьі API ўвайдзьі правільныя
   - API URL даступны
   - Server ID валідны
   - Права адстаноўлены правільна

### Пасля мапіявання домена {#after-mapping-a-domain}

1. Мапіяваецца тэставы домен у Ultimate Multisite
2. Пагледзіце журналы Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Пацверце ў Enhance Control Panel, што домен быў дададзены:
   - Зайдзіце на **Servers** > **Ваш Сервер** > **Domains**
   - Новы домен павінен з'явіцца ў спісе
4. Пасля прапаўсювання DNS, пацверце, што SSL прадастаўлены аўтаматычна

## Выяўленне праблем {#troubleshooting}

### Праблемы з злучэннем API {#api-connection-issues}

**Памылка: "Failed to connect to Enhance API"**
- Пацверце, што `WU_ENHANCE_API_URL` ўключае `/api/` на канцы
- Гарантуйце, што вы выкарыстоўваеце HTTPS, а не HTTP
- Праверце, што Enhance panel даступны з вашага сервера WordPress
- Пацверце, што няма firewall-пакінных, якія блакуюць злучэнне

**Памылка: "Enhance API Token not found"**
- Гарантуйце, што `WU_ENHANCE_API_TOKEN` вызначаны ў `wp-config.php`
- Пацверце, што токен не быў выдалены або выгасываецца ў Enhance
- Пагледзьце на памылкі ў значэнні токена

**Памылка: "Server ID is not configured"**
- Пацверце, што `WU_ENHANCE_SERVER_ID` вызначаны ў `wp-config.php`
- Гарантуйце, што Server ID валідны ў фармаце UUID
- Патвердзіце, што сервер існуе ў вашай панелі Enhance

### Домен не дададзены {#domain-not-added}

**Пагледзьце журналы:**
1. Зайдзіце на **Ultimate Multisite** > **Logs**
2. Фільтруйце па **integration-enhance**
3. Шукайце паведамленні пра памылкі, якія паказваюць праблему

**Частыя прычыны:**
- Невалідны фармат доменнага імені
- Домен ужо існуе ў Enhance
- Недостатнія права API (гарантуйце, што токен мае ролю System Administrator)
- Server ID не адпавядае сапраўднаму серверу ў Enhance

### Праблемы сартыфікатаў SSL {#ssl-certificate-issues}

**SSL не прадастаўляецца:**
- Пацверце, што DNS паказвае на IP-адрэс вашага сервера
- Пагледзьце, што домен выпраўляецца правільна: `nslookup yourdomain.com`
- Enhance патрабуе, каб DNS выпраўляўся, перш чым ён можа прадаставіць SSL
- Прадастаўленне SSL звычайна займае 5-10 хвілін пасля прапаўсювання DNS
- Пагледзьце журналы Enhance Control Panel на памылкі, спецыфічныя для SSL

**Ручная праверка SSL у Enhance:**
1. Зайдзіце на **Servers** > **Ваш Сервер** > **Domains**
2. Знайдзіце свой домен і праверце статус SSL
3. Вы можаце ручна запускваць прадастаўленне SSL, калі гэта неабходна

### Паслядоўванне праверкі DNS {#dns-check-interval}

Калі домены або сартыфікаты SSL задымаюцца з актывацыі:
1. Зайдзіце на **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Знайдзіце наладванні **DNS Check Interval**
3. Выправіце з па\\чатковага 300 секунд на больш нізкое значэнне (мінімум: 10 секунд)
4. **Заўвага:** Менш паслядоўванне азначае больш частыя праверкі, але больш высокае навантажэнне на сервер

### Памылкі аўтэнтыкацыі {#authentication-errors}

**Памылкі HTTP 401/403:**
- Пагенеруйце свой токен API ў Enhance
- Пацверце, што токен мае ролю **System Administrator**
- Пагледзьце, што токен не выгасываецца
- Гарантуйце, што вы выкарыстоўваеце правільны Organization ID (хоць ён звычайна не неабходны ў URL)

### Аналіз журналаў {#log-analysis}

Уключыце дэталёўны логінг:
```php
// Дадаць у wp-config.php для палепшанага наладжвання
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Затым пагледзьце журналы ў:
- Журналы Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Журнал наладжвання WordPress: `wp-content/debug.log`
- Журналы пані: Даступны ў адмін-інтерфейсе Enhance

## Спасылкі на API {#api-reference}

### Аўтэнтыкацыя {#authentication}
Усе запыты API выкарыстоўваюць аўтэнтыкацыю токенам Bearer:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Частыя адканіцы, якія выкарыстоўваюцца {#common-endpoints-used}

**Вылічэнне сервераў:**
```
GET /servers
```

**Вылічэнне доменных імен на серверы:**
```
GET /servers/{server_id}/domains
```

**Дадаванне домена:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Выбыванне домена:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Поўная дакументацыя API {#full-api-documentation}
Поўная дакументацыя API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Найлепшыя практыкі {#best-practices}

### Бяспека {#security}
- **Ніколі не захапляйце токены API ў кантролі версій**
- Захапляйце токены ў `wp-config.php`, які павінен быць выключэн з Git
- Выкарыстоўвайце токены з адпаведнымі правамі (System Administrator для поўнай інтэграцыі)
- Усталюйце даты выгасання токенаў для прадуктовых асяроддзяў
- Пераварочвайце токены з часу ў час

### Падатлівасць {#performance}
- Выкарыстоўвайце па\\чатковае паслядоўванне праверкі DNS (300 секунд), каб пазбегнуць зайзбыткавых выклікаў API
- Адбірайце рэсурсы сервера Enhance пры працы з доменнымі іменамі вялікага маштаба
- Падумайце пра паэтапнае дадаванне доменных імен, калі мапіяваецца шмат доменных імен адно раз

### Маніторынг {#monitoring}
- Рэгулярна пагледзьце журналы Ultimate Multisite на памылкі інтэграцыі
- Наладзьце маніторынг для невыспастых дадаванняў доменных імен
- Пацверце, што сартыфікаты SSL прадастаўляюцца правільна
- Пагадзьце ўвагу на магчымасць сервера Enhance і ліміты доменных імен

## Дадатковыя рэсурсы {#additional-resources}

- **Афіцыйная дакументацыя Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Дакументацыя API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Форум Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Гайд па мапійгнаванні доменных імен Ultimate Multisite:** Пагледзьце старонку wiki "How to Configure Domain Mapping v2"

## Падтрымка {#support}

Калі вы сутыкаецеся з праблемамі:
1. Пагледзьце секцыю Выяўленне праблем вышэй
2. Пагледзьце журналы Ultimate Multisite
3. Зверніцеся да [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Звярніцеся да падтрымкі Enhance для праблем, спецыфічных для пані
5. Стварыце новае абмеркаванне з дэталёўнымі журналамі памылак для памогі кантэнтнай сгудоўі

## Заўвагі {#notes}

- Гэтая інтэграцыя кіруе толькі псеўдонімамі доменных імен; Enhance аўтаматычна кіруе SSL
- Інтэграцыя падтрымлівае як мапіяванне карыстальніцкіх доменных імен, так і спажыванні на аснове субдоменаў
- Аўтаматычнае стварэнне субдомена www можа быць канфігуравана ў наладках мапіявання доменных імен
- Enhance на бягут адрэчыні канфігурацыі Apache (LiteSpeed Enterprise даступны)
- Выбыванне домена з Ultimate Multisite выдаліць домен з Enhance, але не можа адразу выдаліць звязаныя сартыфікаты SSL
