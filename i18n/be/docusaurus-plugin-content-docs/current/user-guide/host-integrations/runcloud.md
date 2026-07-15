---
title: Інтыграцыя RunCloud
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# Інтеграцыя з RunCloud

## Агляд {#overview}
RunCloud — гэта платформа для кіравання серверымі ў хэравой хмары, якая дазваляе вам лёгка размяшчаць і кіраваць веба-паслугамі на вашых уласных серверых адпавідах. Гэтая інтэграцыя дазваляе аўтаматычна синхронізаваць домены і кіраваць сертыфікатамі SSL паміж Ultimate Multisite і RunCloud.

## Функцыі {#features}
- Аўтаматычная синхронізацыя доменаў
- Кіраванне сертыфікатамі SSL
- Выбыванне доменаў пры выдаленні мапінг-парыўданняў

## Патрабаванні {#requirements}
У наступных канстантах павінны быць вызначаны ў файле `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Інструкцыі па наладзе {#setup-instructions}

### 1. Апісаць улагоджэнне API RunCloud {#1-get-your-runcloud-api-credentials}

1. Увайдзіце ў ваш дашборд RunCloud
2. Перайдзіце ў "User Profile" (націсніце на сваё профільнае вывучэнне ў верхнем правым кутку)
3. Выберыце "API" з меню
4. Націсніце "Generate API Key", калі ў вас яшчэ няма такога ключа
5. Скопіруйце ваш API Key і API Secret

### 2. Апісаць ID сервера і додатка {#2-get-your-server-and-app-ids}

1. У дашбордзе RunCloud перайдзіце ў "Servers"
2. Выберыце сервер, дзе размяшчаецца ваш WordPress multisite
3. Server ID бачны ў URL: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. Перайдзіце ў "Web Applications" і выберыце ваш WordPress додатак
5. App ID бачны ў URL: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. Дадаць канстанты ў wp-config.php {#3-add-constants-to-wp-configphp}

Дадайце наступныя канстанты ў ваш файл `wp-config.php`:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Актываваць інтэграцыю {#4-enable-the-integration}

1. У адмініструванні WordPress перайдзіце ў Ultimate Multisite > Settings
2. Перайдзіце на тэчку "Domain Mapping"
3. Праскользьце ўнізе да "Host Integrations"
4. Актывуйце інтэграцыю RunCloud
5. Націсніце "Save Changes"

## Як гэта працуе {#how-it-works}

Калі домен мапіруецца ў Ultimate Multisite:

1. Інтэграцыя адпраўляе запыт у API RunCloud, каб дадаць домен да вашага додатка
2. Калі домен паспяхова дададзены, інтэграцыя таксама пераразмяшчае сертыфікаты SSL
3. Калі мапінг домена выдаляецца, інтэграцыя выдаліць домен з RunCloud

Для ўстаноўлення паддоменаў інтэграцыя аўтаматычна адпраўляе запыты на стварэнне паддоменаў у RunCloud, калі дадаваецца новыя сайты ў вашу сетку.

## Выяўленне праблем {#troubleshooting}

### Праблемы з падключэннем API {#api-connection-issues}
- Праверце, што вашы API-улагоджэнні правільныя
- Праверце, што вашы ID сервера і додатка правільныя
- Убедзіцеся, што ваш акаўнт RunCloud мае неабходныя права

### Праблемы з сертыфікатам SSL {#ssl-certificate-issues}
- RunCloud можа патрабаваць трохі часу для выдачы сертыфікатаў SSL
- Праверце, што вашы домены правільна ўказваюць на IP-адрэс вашага сервера
- Праверце налады SSL RunCloud для вашага додатка

### Домен не дададзены {#domain-not-added}
- Праверце журналы Ultimate Multisite на наяўнасць памылак
- Убедзіцеся, што домен яшчэ не дададзены ў RunCloud
- Убедзіцеся, што ваш план RunCloud падтрымлівае некалькі доменаў
