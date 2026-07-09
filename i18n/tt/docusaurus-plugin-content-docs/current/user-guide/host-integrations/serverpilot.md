---
title: СерверПалот Интеграция
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Интеграция {#serverpilot-integration}

## Обзор {#overview}
ServerPilot - это облачный сервис для хостинга WordPress и других PHP сайтов на серверах DigitalOcean, Amazon, Google или любом другом провайдере. Эта интеграция позволяет автоматически синхронизировать домены и управлять SSL-сертификатами между Ultimate Multisite и ServerPilot.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами с помощью Let's Encrypt
- Автоматическое продление SSL

## Требования {#requirements}
Следующие константы должны быть определены в вашем файле `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите учетные данные API ServerPilot {#1-get-your-serverpilot-api-credentials}

1. Войдите в панель управления ServerPilot.
2. Перейдите в "Account" (Учетная запись) > "API".
3. Создайте новый API-ключ, если у вас его еще нет.
4. Скопируйте свой Client ID и API Key.

### 2. Получите App ID {#2-get-your-app-id}

1. В панели управления ServerPilot перейдите в раздел "Apps" (Приложения).
2. Выберите приложение, где размещен ваш WordPress multisite.
3. App ID можно увидеть в URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Включите интеграцию {#4-enable-the-integration}

1. В админке WordPress перейдите в Ultimate Multisite > Settings (Настройки).
2. Перейдите на вкладку "Domain Mapping" (Сопоставление доменов).
3. Прокрутите вниз до раздела "Host Integrations" (Интеграции хостов).
4. Включите интеграцию ServerPilot.
5. Нажмите "Save Changes" (Сохранить изменения).

## Как это работает {#how-it-works}

### Синхронизация доменов {#domain-syncing}

Когда домен сопоставляется в Ultimate Multisite:

1. Интеграция текущий домен списки ServerPilot-таннаннандан ала тора.
2. Он новый домены спикке (эгерде қолайлы болса, www версиясы да) списокка косупт.
3. Оны обновленный список API аркылуу ServerPilot-a жөнөтә.
4. ServerPilot сизнинг приложение өчен домен спикине güncelleләшер.

### SSL Сертификатының Уештырылылуы (SSL Certificate Management) {#ssl-certificate-management}

Доменләр синхролдан咗ра:

1. Интеграция сизнинг приложение өчен AutoSSL-ны автомат түгелләшергә мөмкин.
2. ServerPilot Let's Encrypt аркылуу SSL сертификаты чыгару һәм куллануны уештыра.
3. ServerPilot SSL сертификатларын автомат җаRenewal (renewal) кармаган.

## SSL Сертификатының Теккелмәсеннәр (SSL Certificate Verification) {#ssl-certificate-verification}

Интеграция ServerPilot өчен SSL сертификатыны чыгару һәм куллануга сораулар санына артык күтә, чөнки ServerPilot-ы SSL сертификаты чыгару һәм уештырырга уақт кагып бирергә мөмкин. Әлбәттә, умолчанию 5 гача сыйла, ләкин фильтрләр белән булырга ясау кармаган.

## Проблемаларны Чекелеми (Troubleshooting) {#troubleshooting}

### API Сонылышы Проблемы (API Connection Issues) {#api-connection-issues}
- Клиент ID һәм API Key-ың туры елекче.
- App ID-ың туры елекче дип текшерегез.
- ServerPilot hesabыңның кирәкле рөхсәтләрен бар елекче.

### SSL Сертификаты Проблемы (SSL Certificate Issues) {#ssl-certificate-issues}
- ServerPilot SSL сертификатларын чыгарудан өчрә, доменләрнең сервергә турылган DNS запислары бар дип талап итә.
- Эгерде SSL сертификатылар чыгарыла торган булмаса, доменләрнең сизнинг сервернең IP адресына турылганына текшерегез.
- ServerPilot SSL сертификатларын чыгару һәм уештыруга уақт кагып бирергә мөмкин (әдетә 5-15 минут).

### Домен Әтирмилгән (Domain Not Added) {#domain-not-added}
- Ultimate Multisite логларында хәләтләр өчен яки ошибка хабарлашулар бар дип текшерегез.
- Домен ServerPilot-ында урылган булганды текшерегез.
- Сизнең ServerPilot планы сиз артык доменнәрне косуга мөмкин дип кагып бирергә ясагыз.

### Домен удаление {#domain-removal}
- Сейчас ServerPilot API'da конкрет доменыны улап (удаlamak) ýol bermez.
- Ultimate Multisite'da bir doimenin eşleşmesi ulap edilende, bu integrasiýa ServerPilot-daky doimenleri listini ulap edilen doimany ulaçyp bilmezlik üçin güncelleýär.
