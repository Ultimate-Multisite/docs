---
title: RunCloud Интеграциясы
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Интеграция {#runcloud-integration}

## Жалпы маалымат {#overview}
RunCloud — бул сиздин өз облак серверлеринде веб-маалымдарын оңой жайгаштырып, башкарууга мүмкүндүк берген облак дээр негизде турган серверди башкаруу платформасы. Бул интеграция Ultimate Multisite жана RunCloud ортосунда доменддердин автоматтык синхрондоосуна жана SSL сертификаттарын башкарууга мүмкүндүк берет.

## Функциялар {#features}
- Доменддердин автоматтык синхрондоосу
- SSL сертификатын башкаруу
- Маппингтер (mapping) жок кылынганда доменди алып салуу

## Талаптар {#requirements}
Төмөздөгү константаларды `wp-config.php` файлыңызда аныктоо керек:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Орнотуу боюнча нускамалар {#setup-instructions}

### 1. RunCloud API маалыматтарын алыңыз {#1-get-your-runcloud-api-credentials}

1. RunCloud панелинде кириңиз
2. "User Profile" (оңго арткы бурчтагы профиль сүрөтүңүздө клик кылыңыз) бөлүмүнө өтүңүз
3. менюдан "API"ди тандаңыз
4. Эгер сиздин API ключуңуз болбосо, "Generate API Key" (API ключун генерациялоо) баскычын басыңыз
5. API Ключуңузду жана API Секретиңизди көчүрүп алыңыз

### 2. Сервер жана App ID'дерин алыңыз {#2-get-your-server-and-app-ids}

1. RunCloud панелинде "Servers" (Серверлер) бөлүмүнө өтүңүз
2. WordPress multisite-ы жайгаштырылган серверди тандаңыз
3. Сервер ID URL-де көрүнөт: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" (Веб колдонмолору) бөлүмүнө өтүп, WordPress тиркемеңизди тандаңыз
5. App ID URL-де көрүнөт: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php дагы константаларды кошуу {#3-add-constants-to-wp-configphp}

Төмөнкү константаларды `wp-config.php` файлыңызга кошуңуз:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Интеграцияны иштетүү (Enable the Integration) {#4-enable-the-integration}

1. WordPress администраторыңызда, Ultimate Multisite > Settings (Төлөмдөр) бөлүмүнө кириңиз
2. "Domain Mapping" (Домен картасы) табына барыңыз
3. Төмөндө "Host Integrations" (Хост интеграциялары) деген бөлүмгө жылдыңыз
4. RunCloud интеграциясын активдештириңиз
5. "Save Changes" (Өзгөртүүлөрдү сактоо) баскычын басыңыз

## Иш кандай иштешет {#how-it-works}

Ultimate Multisite-та домен картасы жасалганда:

1. Интеграция RunCloud'дун API-сына домени сиздин тиркемеңизге кошуу үчүн сураныч жөнөтөт
2. Домен ийгиликтүү кошулса, интеграция SSL сертификаттарын да кайра жоюуга (redeploy) алат
3. Домен картасы алында болсо, интеграция домени RunCloud'дан алып салат

Субдомендерди орнотуу үчүн, сиздин тармагыңызга жаңы сайттар кошулганда интеграция RunCloud'да субдомендерди автоматтык түрдө түзүп берет.

## Ар кандай көйгөйлөрдү чечүү (Troubleshooting) {#troubleshooting}

### API Байланышы Көйгөйлөрү {#api-connection-issues}
- API киргизүүлөрүңүздүн туура экенин текшериңиз
- Сервердин жана app ID'лериңиз туура экенин текшериңиз
- RunCloud аккаунтуңузда зарыл укуктары бар экенин камсыздаңыз

### SSL Сертификаттары Көйгөйлөрү {#ssl-certificate-issues}
- RunCloud SSL сертификаттарын жоюуга бир аз убакыт кетиши мүмкүн
- Домендердин сиздин сервердин IP дарегине туура багытталганын текшериңиз
- Сиздин тиркемеңиз үчүн RunCloud SSL жөндөмдөрүн текшериңиз

### Домен Кошулбаган {#domain-not-added}
- Эч кандай ката билдирүүлөрү бар экенин Ultimate Multisite логдорунан текшериңиз
- Домен арбай RunCloud'га кошулган эмес экенин текшериңиз
- Сиздин RunCloud планы көп домендү колдоого турганын камсыздаңыз
