---
title: Інтыграцыя CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Інтеграцыя з CyberPanel {#cyberpanel-integration}

Гайд паказвае, як накіраваць і накіраваць інстыляцыю Ultimate Multisite з CyberPanel, каб доменныя імя, якія ў вашай сетцы, аўтаматычна дадаваліся (і выдаляліся) як віртуальныя хосты ў CyberPanel, з магчымасцю аўтаматычнага правайдання SSL праз Let's Encrypt.

## Што яна робіць {#what-it-does}

- Калі домен звязан у Ultimate Multisite, інстыляцыя выкарыстоўвае API CyberPanel, каб стварыць віртуальны хост для гэтага домену.
- Калі звязанне домену выдаляецца, інстыляцыя выкарыстоўвае API, каб выдаліць адпаведны віртуальны хост.
- Калі ўключаны auto-SSL, інстыляцыя неадкладна запускае правайданне сертификата Let's Encrypt пасля стварэння віртуальнага хоста.
- Па вагаванні дадае/выдаляе псеўдонім `www.` залежна ад вашага надыстаўкі "Auto-create www subdomain" у настройках Domain Mapping.

## Папярэднія патрабаванні {#prerequisites}

- Працуе інстыляцыя CyberPanel (рэкамендуецца версія v2.3 або больш высока) з магчымасцю злучэння з вашага сервера WordPress.
- Існуюцыйны сайт у CyberPanel, які ўжо выкарыстоўвае коранёвы каталог вашай сеткі WordPress. Інстыляцыя дадае новыя віртуальныя хосты да гэтага сервера.
- Уключаны доступ да API CyberPanel. Аўтэнтыкацыя выкарыстоўвае імя карыстальніка і пароль адміністратара CyberPanel.
- Вашы DNS-запісы для звязаных домен вымушаны ўжо паказваць на IP-адрэс вашага сервера, перш чым auto-SSL можа правайдаць карысны сертификат.

## Патрабаванні {#requirements}

У наступных канстантах павінна быць вызначана ў файле `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Па вагаванні вы таксама можаце вызначыць:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Па вагаванні: true — правайданне SSL Let's Encrypt пасля стварэння домену
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Па вагаванні: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Выкарыстоўваецца для кантакту па SSL-сертыфікаце
```

## Інструкцыі па наладзе {#setup-instructions}

### 1. Уключэнне API CyberPanel {#1-enable-the-cyberpanel-api}

1. Увайдзіце ў ваш дашборд CyberPanel як адміністратар.
2. Зайдзіце ў **Security** > **SSL** і пацверце, што SSL актыўны на самім інтэрфейсе CyberPanel (неабходна для бяспечных выклікаў API).
3. API CyberPanel па спілкуванні з `https://your-server-ip:8090/api/` па спілкуванні з адпавіданнямі. Не патрэбны дадатковыя крокі для яго ўключэння — ён па спілкуванні з адпавіданнямі для карыстальнікаў адміністрацыі.

### 2. Дадаванне канстант у wp-config.php {#2-add-constants-to-wp-configphp}

Дадайце наступныя канстанты ў ваш файл `wp-config.php` перад ryзкай `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Каб актываваць auto-SSL (рэкамендуецца):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Актывацыя інстыляцыі {#3-enable-the-integration}

1. У адмініструванні вашай сеткі WordPress зайдзіце ў **Ultimate Multisite** > **Settings**.
2. Пайміце на тэчку **Domain Mapping**.
3. Праскользьце да **Host Integrations**.
4. Актывуйце інстыляцыю **CyberPanel**.
5. Націсніце **Save Changes**.

### 4. Праверка злучэння {#4-verify-connectivity}

Выкарыстоўвайце ўбудаваную праверку злучэння ў візар адналагі.

1. Зайдзіце ў **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Націсніце **Test Connection**.
3. Паведамленне пра поспех пацвярджае, што плагін можа дасягнуць API CyberPanel і правільна аўтэнтыкавацца.

## Як гэта працуе {#how-it-works}

### Domain Mapping {#domain-mapping}

Калі домен звязан у Ultimate Multisite:

1. Інстыляцыя адпраўляе пасылку `POST` на `/api/createWebsite` на ваш хост CyberPanel.
2. CyberPanel стварае новы віртуальны хост для домену ў канфігурававаным пакеце.
3. Коранёвы каталог наладжаны паказваць на каталог вашай сеткі WordPress.
4. Калі звязанне домену выдаляецца, інстыляцыя выклікае `/api/deleteWebsite` для прыбрання віртуальнага хоста.

### Auto-SSL {#auto-ssl}

Калі `WU_CYBERPANEL_AUTO_SSL` роўны `true`:

1. Пасля стварэння віртуальнага хоста інстыляцыя выклікае `/api/issueSSL` для домену.
2. CyberPanel запрашвае сертификат Let's Encrypt выкарыстоўваючы выклік ACME HTTP-01.
3. Сертыфікат аўтаматычна папраўляецца CyberPanel перад спыніваннем дзеяння.

> **Важна:** DNS павінна быць напоўнена да IP-адрэсу вашага сервера, перш чым Let's Encrypt можа праверыць домен. Калі правайданне SSL не ўдалося неадкладна пасля звязанне, пачакайце напоўнення DNS і запусціце auto-SSL з дашборда CyberPanel у **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Калі **Auto-create www subdomain** актыўны ў настройках Domain Mapping, інстыляцыя таксама стварае псеўдонім віртуальны хост для `www.<домен>` і, калі auto-SSL актыўны, правайдоўвае сертыфікат, які пакрывае і апекс, і www варыянты.

### Email Forwarders {#email-forwarders}

Калі аддон [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) актыўны, CyberPanel таксама можа правайдаць паштовых форварды для кліентаў. Форварды маршрутуюць паведамленні з адраса домену на іншы паштоўк Box без стварэння поўнага паштоўк Box, што ў зручнасці для псеўдонімів, такіх як `info@customer-domain.test` або `support@customer-domain.test`.

Перш чым актываваць форварды для кліентаў:

1. Пацверце, што канстанты CyberPanel вызначаны і праверка злучэння праходзіць.
2. Актывуйце пастаўшчыка паштовых адрасоў CyberPanel у настройках аддона Emails.
3. Пацверце, што домен кліента ўжо існуюць у CyberPanel, перш чым ствараць форвард.
4. Стварыце тэставы форвард і адпраўце праз яго паведамленне, перш чым прапанаваць гэтую функцыю ў прадуктовых планах.

Калі стварэнне форварда не ўдалося, праверце перш за ўсё журналы актыўнасці Ultimate Multisite, а потым пацверце ў CyberPanel, што існуюць домен-адрэс і што карыстальнік API мае права адпраўлення пашты.

## Спасылнікі на канфігурацыю {#configuration-reference}

| Канстанта | Неабходна | Па вагаванні | Апісанне |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Так | — | Поўны URL да вашай інстыляцыі CyberPanel, уключаючы порт, напрыклад: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Так | — | Імя карыстальніка адміністратара CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Так | — | Пароль адміністратара CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Так | `Default` | Пакет хасцінгу CyberPanel, які адзначаецца для новых віртуальных хостаў |
| `WU_CYBERPANEL_AUTO_SSL` | Nie | `true` | Правайданне сертыфікату SSL Let's Encrypt пасля стварэння домену |
| `WU_CYBERPANEL_PHP_VERSION` | Nie | `PHP 8.2` | Версія PHP для новых віртуальных хостаў (павінна адпавядаць версіі, усталяванай у CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nie | — | Паштовае адрасанне кантакту для рэгістрацыі SSL-сертыфікату |

## Важнае заўважэнне {#important-notes}

- API CyberPanel выкарыстоўвае аўтэнтыкацыю токена на аснове сесіі. Інстыляцыя аўтаматычна кіруе атрыманне токена па кожным выкліку API.
- Ваш аккаунт адміністратара CyberPanel павінен мець права ствараць і выдаляць сайты.
- CyberPanel па спілкуванні з порту `8090` па спілкуванні з адпавіданнямі. Калі ваш сервер выкарыстоўвае брандмаўэр, пераканайцеся, што гэты порт даступны з сервера праграмы WordPress.
- Інстыляцыя не кіруе DNS-запісамі. Вы павінны паказаць DNS домен на IP-адрэс вашага сервера, перш чым звязваць домен у Ultimate Multisite.
- Калі вы выкарыстоўваеце OpenLiteSpeed (OLS), аўтаматычна запускаецца паступленне перазапуску пасля змены віртуальных хостаў. Не патрэбна ручная ўтрымлівальнасць.

## Выяўленне праблем {#troubleshooting}

### API Connection Refused (Адмова ў злучэнні API) {#api-connection-refused}

- Пацверце, што порт `8090` адкрыты ў брандмаўэры вашага сервера.
- Пацверце, што значэнне `WU_CYBERPANEL_HOST` ўключае правільны пратокол (`https://`) і порт.
- Праверце, што ваш SSL-сертыфікат CyberPanel валідны; самоазначаныя сертыфікаты могуць выклікаць збоі праверкі TLS. Уставіце `WU_CYBERPANEL_VERIFY_SSL` на `false` толькі ў дастаўленых прыватных сетках.

### Authentication Errors (Памылкі аўтэнтыкацыі) {#authentication-errors}

- Пацверце, што вашы `WU_CYBERPANEL_USERNAME` і `WU_CYBERPANEL_PASSWORD` правільныя, увайшоўшы ў CyberPanel непасрэдна.
- CyberPanel блокуе аккаунты пасля паўторных непаспелых спроб увайсці. Праверце **Security** > **Brute Force Monitor** у CyberPanel, калі магчымасць блокування вынікае.

### Domain Not Created (Домен не створаны) {#domain-not-created}

- Праверце журналы актыўнасці Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) на паведамленні пра памылкі API.
- Пацверце, што пакет, вызначаны ў `WU_CYBERPANEL_PACKAGE`, існуюць у CyberPanel (**Packages** > **List Packages**).
- Пабярэдніцеся, што домен не існуюць ужо як сайт у CyberPanel — стварэнне дубліката сайта вяртае памылку.

### SSL Certificate Not Issued (Сертыфікат SSL не правайдарваны) {#ssl-certificate-not-issued}

- Пацверце, што DNS напоўнена: `dig +short your-domain.com` павінен вяртаць IP-адрэс вашага сервера.
- Let's Encrypt выкарыстоўвае ліміты выкарыстання. Калі вы недаўна правайдарвалі некалькі сертыфікатаў для аднаго домену, пачакайце, перш чым папрабаваць зноў.
- Праверце журналы SSL CyberPanel у **Logs** > **Error Logs** для падрабязнай інфармацыі пра збоі правайданне сертыфікатаў.
- Як запасны варыянт, вы можаце правайдарваць SSL на мануляцыі з CyberPanel: **SSL** > **Manage SSL** > выбірайце домен > **Issue SSL**.

## Спасылнікі {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
