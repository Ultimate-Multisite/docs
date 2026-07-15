---
title: Інтеграцыя GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# Інтеграцыя з GridPane

## Агляд {#overview}
GridPane — гэта спецыялізаваная панэлі кантролю хостыంగ్‌ для WordPress, створаная для прафесіоналаў, якія па-настояشتні займаюцца WordPress. Гэтая интеграцыя дазваляе аўтаматычны синхронізацыю доменных імен і кіраванне сертыфіка́мі SSL паміж Ultimate Multisite і GridPane.

## Функцыі {#features}
- Аўтаматычная синхронізацыя доменных імен
- Кіраванне сертыфіка́мі SSL
- Аўтаматычная канфігурацыя канстанты SUNRISE

## Патрабаванні {#requirements}
Наступныя канстанты павінны быць вызначаны ў файле `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Інструкцыі па наладзе {#setup-instructions}

### 1. Атварыце API-даныя GridPane {#1-get-your-gridpane-api-credentials}

1. Увайдзіце на панэль кантролю GridPane
2. Перайце ў "Settings" > "API"
3. Згенэруйце API-ключ, калі яго яшчэ няма
4. Скопіруйце свой API-ключ

### 2. Атварыце ID сервера і сайта {#2-get-your-server-and-site-ids}

1. На панэлі кантролю GridPane перайце ў "Servers"
2. Выберыце сервер, дзе хастованы ваш WordPress multisite
3. Запісайце Server ID (які бачны ў URL або на адкажджыні сервера)
4. Перайце ў "Sites" і выбірайце свой сайт WordPress
5. Запісайце Site ID (які бачны ў URL або на адкажджыні сайта)

### 3. Дадайце канстанты ў wp-config.php {#3-add-constants-to-wp-configphp}

Дадайце наступныя канстанты ў ваш файл `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Актывацыя интеграцыі {#4-enable-the-integration}

1. У адмініструванні WordPress перайце ў Ultimate Multisite > Settings
2. Знайдзіце ўкладку "Domain Mapping"
3. Праскользьце ўніз да "Host Integrations"
4. Актывуйце интеграцыю GridPane
5. Націсніце "Save Changes"

## Як гэта працуе {#how-it-works}

Калі домен звязан (mapped) у Ultimate Multisite:

1. Інтеграцыя адпраўляе запыт да API GridPane, каб дадаць домен да вашага сайта.
2. GridPane аўтаматычна займаецца прадастаўленнем сертыфіка́ў SSL.
3. Калі звязанне домена выдаляецца, интеграцыя выдаліць домен з GridPane.

Інтеграцыя таксама аўтаматычна займаецца канстантой SUNRISE у файле wp-config.php, якая неабходна для правільнай працы звязанне доменаў.

## Кіраванне канстантой SUNRISE {#sunrise-constant-management}

Адной з унікальных функцый интеграцыі GridPane з'яўляецца тое, што яна аўтаматычна адкачвае (reverts) канстанту SUNRISE у wp-config.php, каб zaprechnaваць канфлікты з уласнай сістэмай звязанне доменаў GridPane. Гэта гарантуе, што абодве сістэмы змогуць працаваць разам без праблем.

## Выяўленне і выпраўленне памылак (Troubleshooting) {#troubleshooting}

### Праблемы з падключэннем API {#api-connection-issues}
- Праверце, што ваш API-ключ правільны
- Праверце, што ID вашага сервера і сайта правільныя
- Убедзіцеся, што ваш акаўнт GridPane мае неабходныя права

### Праблемы з сертыфіка́мі SSL {#ssl-certificate-issues}
- GridPane можа патрабаваць трохі часу для выдачы сертыфіка́ў SSL
- Праверце, што вашы домены правільна ўкаранены на IP-адрэс вашага сервера
- Праверце наладкі SSL GridPane для вашага сайта

### Домен не дададзены {#domain-not-added}
- Праверце журналы Ultimate Multisite на наяўнасць паведамленняў аб памылцы
- Праверце, што домен яшчэ не дададзены ў GridPane
- Убедзіцеся, што DNS-запісы вашага домена правільна канфігураваны
