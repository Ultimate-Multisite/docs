---
title: GridPane Интеграция
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Интеграция

## Обзор {#overview}
GridPane — это специализированная панель управления хостингом для WordPress, созданная для серьезных профессионалов в этой сфере. Эта интеграция позволяет автоматически синхронизировать домены и управлять SSL-сертификатами между Ultimate Multisite и GridPane.

## Возможности {#features}
- Автоматическая синхронизация доменов
- Управление SSL-сертификатами
- Автоматическая настройка константы SUNRISE

## Требования {#requirements}
Следующие константы необходимо определить в вашем файле `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## Инструкции по настройке {#setup-instructions}

### 1. Получите учетные данные API GridPane {#1-get-your-gridpane-api-credentials}

1. Войдите в панель управления вашей GridPane
2. Перейдите в "Настройки" > "API"
3. Сгенерируйте ключ API, если у вас его еще нет
4. Скопируйте ваш ключ API

### 2. Получите ID вашего сервера и сайта {#2-get-your-server-and-site-ids}

1. В панели управления GridPane перейдите в раздел "Серверы" (Servers)
2. Выберите сервер, где размещен ваш WordPress multisite
3. Запомните Server ID (он виден в URL или на странице деталей сервера)
4. Перейдите в раздел "Сайты" (Sites) и выберите свой сайт WordPress
5. Запомните Site ID (он виден в URL или на странице деталей сайта)

### 3. Добавьте константы в wp-config.php {#3-add-constants-to-wp-configphp}

Добавьте следующие константы в ваш файл `wp-config.php`:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. Включите интеграцию {#4-enable-the-integration}

1. В админке WordPress перейдите в Ultimate Multisite > Настройки (Settings)
2. Перейдите на вкладку "Domain Mapping" (Сопоставление доменов)
3. Прокрутите вниз до раздела "Host Integrations" (Интеграции хостов)
4. Включите интеграцию GridPane
5. Нажмите "Save Changes" (Сохранить изменения)

## Как это работает {#how-it-works}

Когда домен сопоставляется в Ultimate Multisite:

1. Интеграция доменді сайтқа қосу үшін GridPane API-ға сұраныс жібереді.
2. GridPane автоматты түрде SSL сертификатын беруін басқарады.
3. Домен маппін аяқталған кезде, интеграция доменді GridPane-дан алып тастайды.

Интеграция сондай-ақ `wp-config.php` файлыңыздағы SUNRISE константасын автоматты түрде басқарады, бұл домен маппін дұрыс жұмыс істеу үшін қажет.

## SUNRISE Константасын Басқару {#sunrise-constant-management}

GridPane интеграциясының ерекшелігі – ол `wp-config.php` файлындағы SUNRISE константасын GridPane-ның өзінің домен маппінг жүйесімен қақтығысудан сақтау үшін автоматты түрде қайтарады. Бұл екі жүйені мәселесіз бірге жұмыс істеуін қамтамасыз етеді.

## Мәселені Шешу {#troubleshooting}

### API Байланыс Мәселелері {#api-connection-issues}
- API кілттерің дұрыс екенін тексеріңіз.
- Сервер және сайт ID-ларыңыздың дұрыс екенін тексеріңіз.
- GridPane аккаунтыңызда қажетті рұқсаттар бар екенін қамтамасыз етіңіз.

### SSL Сертификаты Мәселелері {#ssl-certificate-issues}
- GridPane SSL сертификаттарын беруге уақыт алады.
- Домендеріңіз сервердің IP-браундығына дұрыс бағытталғанын тексеріңіз.
- Сайтқа арналған GridPane SSL параметрлерін тексеріңіз.

### Домен Қосылмаған Кезде {#domain-not-added}
- Ultimate Multisite логида кез келген қате хабарламаларды тексеріңіз.
- Доменді GridPane-ға әлі қосылмаған екенін растаңыз.
- Доменіңіздің DNS тіркемелері дұрыс конфигурацияланғанын қамтамасыз етіңіз.
