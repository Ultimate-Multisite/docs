---
title: Интеграция CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Интеграция с CyberPanel {#cyberpanel-integration}

Инструкция объясняет, как настроить интеграцию Ultimate Multisite CyberPanel так, чтобы домены, привязанные в вашей сети, автоматически добавлялись (и удалялись) как виртуальные хосты в CyberPanel, а также с опциональным автоматическим предоставлением SSL через Let's Encrypt.

## Что это делает {#what-it-does}

- Когда домен привязывается в Ultimate Multisite, интеграция вызывает API CyberPanel для создания виртуального хоста для этого домена.
- Когда привязка домена удаляется, интеграция вызывает API для удаления соответствующего виртуального хоста.
- Когда автоматическое SSL включено, интеграция инициирует выдачу сертификата Let's Encrypt сразу после создания виртуального хоста.
- Опционально добавляет/удаляет псевдоним `www` в зависимости от вашей настройки "Auto-create www subdomain" (Автоматическое создание поддомена www) в настройках привязки доменов.

## Предварительные условия {#prerequisites}

- Запущенный экземпляр CyberPanel (рекомендуется v2.3 или новее), доступный с вашего сервера WordPress.
- Существующий сайт в CyberPanel, который уже обслуживает корневую сеть вашего WordPress. Интеграция прикрепляет новые виртуальные хосты к этому серверу.
- Разрешение доступа к API CyberPanel включено. Аутентификация использует ваше имя пользователя и пароль администратора CyberPanel.
- Ваши DNS-записи для привязанных доменов должны уже указывать на IP-адрес вашего сервера, прежде чем автоматическое SSL сможет выдать действительный сертификат.

## Требования {#requirements}

Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Опционально вы также можете определить:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — SSL-розыградиши Let's Encrypt пас аз тасвирии домен
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Барои истифодаи сертификати SSL

## Дастур кардани система (Setup Instructions)

### 1. Фасилитаи API-и CyberPanel-ро ба ҷо мерасонед (Enable the CyberPanel API)

1. Ба ролисти дар дашборди CyberPanel ҳамчун администратор ворид шавед.
2. Ба **Security** > **SSL** рафтан ва тасдиқ кардан, ки SSL дар худи интерфейси CyberPanel фаъол аст (барои даъватҳои API-и амман).
3. API-и CyberPanel ба таври восита `https://your-server-ip:8090/api/` дар ҳоли худкор мавҷуд аст. Барои фаъол кардани он ҳатти қадамҳои иловагӣ лозим нест — барои корбарони администратор он дифолт (default) фаъол аст.

### 2. Константаҳоро ба wp-config.php илова кунед (Add Constants to wp-config.php)

Константаҳои зеринро пеш аз қадами `/* That's all, stop editing! */` дар файли `wp-config.php` илова кунед:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Барои фаъол кардани auto-SSL (тавсия дода мешавад):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Интегратсияро фаъол кунед (Enable the Integration)

1. Дар администратори шабакаи WordPress-и худ, ба **Ultimate Multisite** > **Settings** равед.
2. Ба табби **Domain Mapping** равед.
3. Ба **Host Integrations** гузаред.
4. Интегратсияи **CyberPanel**-ро фаъол кунед.
5. Ба **Save Changes** клик кунед.

### 4. Ҳамаҷонибаро тасдиқ кунед (Verify Connectivity)

Барои истифодаи тест-и пайвасткунии дохилӣ дар дастурхонаи настройка:
```

1. Барои равед кӯшиш кунед: **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Барои тасдиқ, ба **Test Connection** клик кунед.
3. Пەیامی муваффақиятӣ тасдиқ мекунад, ки плагин метавонад ба API-и CyberPanel пайваст шавад ва дуруст масъулят (authenticate) шавад.

## Чӣ гуна кор мекунад {#setup-instructions}

### Domain Mapping (Маппинг доменҳо) {#1-enable-the-cyberpanel-api}

Вақте ки як домен дар Ultimate Multisite маппина карда мешавад:

1. Интеграт як лоиҳаи `POST` ба `/api/createWebsite` дар хости CyberPanel-и шумо фиристода месозад.
2. CyberPanel барои домени нав дар пакэжи муқарраршуда, хости виртуале (virtual host) навиёфзод мекунад.
3. Root-и ҳуҷҷат ба макон корнеи шабака WordPress-и шумо нишон дода мешавад.
4. Вақте ки маппинг домен аз нав бартарӣ карда мешавад, интеграт барои тоза кардан хости виртуале команда `/api/deleteWebsite`-ро истифода мебарад.

### Auto-SSL (Автоматик SSL) {#2-add-constants-to-wp-configphp}

Вақте ки `WU_CYBERPANEL_AUTO_SSL` ба `true` муқаррар шудааст:

1. Баъди фазли хости виртуале, интеграт барои домен команда `/api/issueSSL`-ро истифода мебарад.
2. CyberPanel сертификати Let's Encrypt-ро бо мушкилоти ACME HTTP-01 дархост мекунад.
3. CyberPanel сертификатҳоро пеш аз вақти пасаёти он автоматик таҷдид мекунад.

> **Муҳим:** DNS бояд ба адрес IP-и сервер шумо пурра тарҳанда (propagated) бошад, то Let's Encrypt домениро тасдиқ намояд. Агар пеш аз фаъолият кардани маппинг SSL ба таври фаврӣ нафарахӯяд, интизор кунед, то DNS тарҳанда шавад ва бо истифода аз дашбор CyberPanel дар **SSL** > **Manage SSL** онро дигар бор кунед.

### www Subdomain (Поддомени www) {#3-enable-the-integration}

Агар **Auto-create www subdomain** дар садори Domain Mapping-и шумо фаъол бошад, интеграт ҳамчунин як хости виртуале барои `www.<domain>` месозад ва вақте ки Auto-SSL фаъол аст, сертификатиро барои ҳарду навъи apex (барои домен асосӣ) ва www тақсим мекунад.

### Email Forwarders (Перехониҳо барои почта) {#4-verify-connectivity}

Вазида, вақте китти [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) аддон фаолият дароз карда мешавад, CyberPanel инчум мустаҳкамии имодаи мажорибаи корбарро (customer email forwarders) низ пешниҳод мекунад. Ин форвардерҳо пайвандҳоро аз як домени ба почтаи дигар равона мекунанд, бе иншоати почтаи пурра, ки барои алиасҳо чуно `info@customer-domain.test` ё `support@customer-domain.test` муфид аст.

Пеш аз фаъол кардани форвардерҳо барои муштариён:

1. Тасдиқ кунед, ки константаҳои дар боло зикршудаи CyberPanel сохт шудаанд ва тест пайвасткунӣ муваффақат мекунад.
2. Фаолият донандаи почтаи CyberPanel-ро дар садори танзимоти аддони Emails фаъол кунед.
3. Тасдиқ кунед, ки домени муштариён аллакай дар CyberPanel мавҷуд аст, пеш аз сар кардани форвардер.
4. Форвардери тестро сохта ва як паймондаи тасдиқкунанда-ро тавассути он фиристонед, пеш аз пешниҳоди ин хусусият дар намунаҳои иҷроия (production plans).

Агар сар кардани форвардер бадан шавад, аввал рӯйди логҳои фаолияти Ultimate Multisite-ро баррасӣ кунед ва пас дар CyberPanel тасдиқ кунед, ки домени манбаъ мавҷуд аст ва истифодабандаи API иҷозатҳои идоракунии почтаро дорад.

## Маълумоти санҷиш (Configuration Reference) {#how-it-works}

| Константа | Зарурӣ | Дефолт | Тавсиф |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ҳа | — | URL-и пурраи инстанси CyberPanel-и шумо, аз ҷумла порт, масалан: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ҳа | — | Исоми администратори CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Ҳа | — | Паролии администратори CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Ҳа | `Default` | Пакет хостинг-и CyberPanel, ки ба хостондагони виртуали нав муқаррар карда мешавад |
| `WU_CYBERPANEL_AUTO_SSL` | На | `true` | Пас аз сохтани домен, сертификати SSL-и Let's Encrypt иҷро кунед |
| `WU_CYBERPANEL_PHP_VERSION` | На | `PHP 8.2` | Нӯшати PHP барои хостондагони виртуали нав (ба бояд бо версияе мувофиқ дар CyberPanel инсталл шуда бошад) |
| `WU_CYBERPANEL_EMAIL` | На | — | Почтаи истилоҳат барои бартараф кардани сертификати SSL |

## Нотаъиҷотҳои муҳим (Important Notes) {#domain-mapping}

API CyberPanel аз тасдиқии токен ба аслии (session-based token authentication) истифода мебарад. Интегратсия ҳар як давраи API call-ро барои гирифтани токен автоматик идора мекунад.
Ҳусултари администратори CyberPanel бояд дохили имкониятҳо барои сохтани вебсайтҳо ва навсозии онҳо бошад.
CyberPanel пас аз тасдиқи воқеӣ (default) дар порт `8090` кор мекунад. Агар сервери шумо аз фаервол истифода барад, таъмин кунед, ки ин порт аз сервери иловагӣ (application server) WordPress дарост аст.
Интегратсия рӯйхати DNS-ро идора намекунад. Шумо бояд пеш аз тасвири домен дар Ultimate Multisite, DNS-и домениро ба нишондисро IP-и сервер хонаш ишора диҳед.
Агар шумо OpenLiteSpeed (OLS) истифода баред, пас аз тағйирёбии virtual host, перезагории худкор (graceful restart) автоматик ба кор меояд. Барои интихоби рухрии мулоҳизаҳо ҳатмӣ нест.

## Ҳалли мушкилот (Troubleshooting) {#auto-ssl}

### Навдодани пайвастагии API (API Connection Refused) {#www-subdomain}

- Тасдиқ кунед, ки порт `8090` дар фаерволи сервери шумо ошкор аст.
- Муайян кунед, ки арзиши `WU_CYBERPANEL_HOST` протоколи дуруст (`https://`) ва портро дар бар мегирад.
- Таъмин кунед, ки сертификати SSL-и CyberPanel шумо возняд аст; сертификатҳои худкор метавонанд ба ошиббодии TLS (TLS verification failures) роҳ дода шаванд. `WU_CYBERPANEL_VERIFY_SSL`-ро танҳо дар муҳити шабакаи махфий боварӣ наҷӯъ кунед.

### Ошиёти тасдиқ (Authentication Errors) {#email-forwarders}

- Барои тасдиқи дурусти `WU_CYBERPANEL_USERNAME` ва `WU_CYBERPANEL_PASSWORD`, ба мустақимат ворид шавед.
- CyberPanel ҳангоми кӯшишҳои бенамӣ аз ворид, ҳисоботҳоро қатъ мекунад. Агар ин тасдиқҳо рӯй намоянд, дар CyberPanel ба **Security** > **Brute Force Monitor** мураҷаба кунед.

### Домени сохта нашудааст (Domain Not Created) {#configuration-reference}

- Барои пайдо кардани паёми хатои API, лог фаъолияти Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) -ро баррасӣ кунед.
- Тасдиқ кунед, ки пакет, ки дар `WU_CYBERPANEL_PACKAGE` муайян шудааст, дар CyberPanel мавҷуд аст (**Packages** > **List Packages**).
- Ҳангоми сохтани вебсайт, таъмин кунед, ки домен аз қабили вебсайти дар CyberPanel навишта нашудааст — сохтани дублии вебсайт хато медиҳад.

### Сертификати SSL нафароҳам (SSL Certificate Not Issued) {#important-notes}

- Тасдиқ кунча (DNS) тўлиқ тарқалганлигини текширинг: `dig +short your-domain.com` сизнинг серверингиз IP адресни қайтаришга келиши керак.
- Let's Encrypt чекиш лимитларини қўяди. Агар сиз сўнгги пайт бир хил домен учун бир нечта сертификат тақдим этган бўлсангиз, қайта синашдан олдин кутиб туринг.
- Сертификат тақдим этишдаги муаммолар ҳақида бирор маълумот олиш учун **Logs** > **Error Logs** бўлимидаги CyberPanel SSL логларини текширинг.
- Альтернатива сифатида, сиз CyberPanelдан SSL ни ўзлаштирishingiz mumkin: **SSL** > **Manage SSL** > доменни танланг > **Issue SSL**.

## Маълумотлар {#troubleshooting}

- CyberPanel API Дастурий таъсири (Documentation): https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSLни бошқариш: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Чекиш Лимитлари: https://letsencrypt.org/docs/rate-limits/
