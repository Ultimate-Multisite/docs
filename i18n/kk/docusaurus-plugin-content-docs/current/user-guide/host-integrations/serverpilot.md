---
title: СерверPilot Интеграция
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Интеграция {#serverpilot-integration}

## Жалпы ақпарат (Overview) {#overview}
ServerPilot — бұл WordPress және басқа PHP веб-сайттарын DigitalOcean, Amazon, Google немесе басқа сервер провайдерлерінде хостингтеуге арналған bulut қызмет. Бұл интеграция Ultimate Multisite мен ServerPilot арасында доменді автоматты синхролдау және SSL сертификаттарын басқаруға мүмкіндік береді.

## Ерекшеліктері (Features) {#features}
- Доменді автоматты синхролдау
- Let's Encrypt арқылы SSL сертификатын басқару
- SSL сертификатын автоматты жаңарту

## Қажеттілігілер (Requirements) {#requirements}
Төмендегі тұрақты санды (constants) `wp-config.php` файлыңызда анықтауыңыз керек:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## Орнату нұсқаулары (Setup Instructions) {#setup-instructions}

### 1. ServerPilot API құжаттарын алыңыз (Get Your ServerPilot API Credentials) {#1-get-your-serverpilot-api-credentials}

1. ServerPilot дашбордыңызға кіріңіз.
2. "Account" > "API" бөліміне өтіңіз.
3. Егер сізде API кілті болмаса, жаңа API кілтін жасаңыз.
4. Өзіңіздің Client ID-ңызды және API Key-іңізді көшіріп алыңыз.

### 2. App ID-ны алыңыз (Get Your App ID) {#2-get-your-app-id}

1. ServerPilot дашбордыңызда "Apps" бөліміне өтіңіз.
2. WordPress multisite орналасқан қосымшаны таңдаңыз.
3. App ID URL-де көрінеді: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php-ке тұрақты сандарды қосыңыз (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Төмендегі тұрақты сандарды `wp-config.php` файлыңызға қосыңыз:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. Интеграцияны іске қосыңыз (Enable the Integration) {#4-enable-the-integration}

1. WordPress администраторыңызда Ultimate Multisite > Settings-ке өтіңіз.
2. "Domain Mapping" табына өтіңіз.
3. Төмендегі "Host Integrations" бөліміне жылжыңыз.
4. ServerPilot интеграциясын іске қосыңыз (Enable).
5. "Save Changes" батырмасын басыңыз.

## Қалай жұмыс істейді (How It Works) {#how-it-works}

### Доменді синхролдау (Domain Syncing) {#domain-syncing}

Ultimate Multisite-те доменді маптарған кезде:

1. Интеграция ServerPilot-тандырынан ағымдағы домендер тізімін алады
2. Ол жаңа доменді тізімге қосады (егер қолданылса, www нұсқасын да)
3. Жаңартылған тізімді API арқылы ServerPilot-қа жібереді
4. ServerPilot сіздің қосымшаңыз үшін домендер тізімін жаңартады

### SSL Сертификаттарын басқару {#ssl-certificate-management}

Домендер синхрондалғаннан кейін:

1. Интеграция сіздің қосымшаңыз үшін AutoSSL-ді автоматты түрде іске қосады
2. ServerPilot Let's Encrypt арқылы SSL сертификатын беру мен орнатуды басқарады
3. ServerPilot SSL сертификаттарын автоматты түрде жаңартуды да басқарады

## SSL Сертификаттарын тексеру {#ssl-certificate-verification}

Интеграция ServerPilot үшін SSL сертификаттарын тексеру әрекеттерінің санын арттыруға реттелген, өйткені ServerPilot SSL сертификатын беруге және орнатуға уақыт алады. Әдетте ол 5 مرة дейін тарайды, бірақ бұл фильтрлерді қолданып өзгертілуі мүмкін.

## Түзету жұмыстары (Troubleshooting) {#troubleshooting}

### API қосылымы мәселелері {#api-connection-issues}
- Клиент ID мен API Key дұрыс екенін тексеріңіз
- App ID дұрыс екенін тексеріңіз
- ServerPilot аккаунтыңызда қажетті рұқсаттар бар екенін қамтамасыз етіңіз

### SSL сертификаттары мәселелері {#ssl-certificate-issues}
- ServerPilot SSL сертификаттарын беруден бұрын домендердің серверге бағытталған дұрыс DNS тіркемелері болуын талап етеді
- Егер SSL сертификаттары берілмей тұрса, домендеріңіздің IP-адресіне дұрыс бағытталып жатқанын тексеріңіз
- ServerPilot SSL сертификаттарын беруге және орнатуға уақыт алады (әдетте 5-15 минут)

### Домен қосылмаған {#domain-not-added}
- Ultimate Multisite логида кез келген қате хабарламаларды тексеріңіз
- Домен ServerPilot-қа әлі қосылмаған екенін растаңыз
- Сіздің ServerPilot жоспары қосатын домендер санына қолданып отырғанын қамтамасыз етіңіз

### Доменді алып тастау {#domain-removal}
- Қазіргі уақытта ServerPilot API жеке домендерді алып тастау мүмкіндігін ұсынбауы тиіс.
- Ultimate Multisite-та домен картасы (domain mapping) алынылған кезде, интеграция ServerPilot-тың домен тізімін ағымдағы доменді шығарып, оны жою арқылы жаңартып отырады.
