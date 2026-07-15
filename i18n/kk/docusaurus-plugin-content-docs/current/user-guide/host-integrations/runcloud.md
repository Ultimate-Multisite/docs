---
title: RunCloud Интеграциясы
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Интеграция

## Жалпы ақпарат (Overview) {#overview}
RunCloud — бұл bulut-негізді сервер басқару платформасы, ол сізге веб-қосымшаларды өз bulut серверлеріңізде оңай орнатуға және басқаруға мүмкіндік береді. Бұл интеграция Ultimate Multisite мен RunCloud арасында автоматты домен синхрондау және SSL сертификаттарын басқаруды іске асырады.

## Ерекшеліктері (Features) {#features}
- Автоматты домен синхрондау
- SSL сертификатын басқару
- Маппінгтер өшірілгенде доменді алып тастау

## Қажеттілігілер (Requirements) {#requirements}
Төмендегі тұрақты санды (`constants`) `wp-config.php` файлыңызда анықтауыңыз керек:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Орнату нұсқаулары (Setup Instructions) {#setup-instructions}

### 1. RunCloud API құжаттарын алыңыз (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. RunCloud дашбордына кіріңіз.
2. "User Profile" (жоғарғы оң жақ бұрыштагі профиль суретіне басыңыз) бөліміне өтіңіз.
3. Мәндерден "API" таңдаңыз.
4. Егер сізде API кілті болмаса, "Generate API Key" (API кілтін генерациялау) батырмасын басыңыз.
5. API Кілттеріңізді және API Құпиясын көшіріп алыңыз.

### 2. Сервер және қосымша ID-лерін алыңыз (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

1. RunCloud дашбордыңызда "Servers" (Серверлер) бөліміне өтіңіз.
2. WordPress мультисайттың орналасқан серверді таңдаңыз.
3. Сервер ID-сі URL-де көрініспен көрсетілген: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" (Веб қосымшалары) бөліміне өтіп, WordPress қосымшаңызды таңдаңыз.
5. Қосымша ID-сі URL-де көрініспен көрсетілген: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-ке тұрақты сандарды қосыңыз (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

Төмендегі тұрақты сандарды `wp-config.php` файлыңызға қосыңыз:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Интеграцияны іске қосыңыз (Enable the Integration) {#4-enable-the-integration}

1. WordPress администраторында Ultimate Multisite > Settings-ке өтіңіз
2. "Domain Mapping" таб-қа өтіңіз
3. Төменгі бөлімге "Host Integrations"-қа жылжыңыз
4. RunCloud интеграциясын іске қосыңыз (Enable)
5. "Save Changes" батырмасын басыңыз

## Қалай жұмыс істейді {#how-it-works}

Ultimate Multisite-та доменді маптарған кезде:

1. Интеграция доменді қолданбаңызға қосу үшін RunCloud API-ге сұраныс жібереді
2. Домен сәтті қосылса, интеграция SSL сертификаттарын қайта деплой (redeploy) етеді
3. Домен маптармасы алынылған кезде, интеграция доменді RunCloud-тан алып тастайды

Субдомен орнату үшін, сіздің желіңізге жаңа сайттар қосылған кезде интеграция RunCloud-та субдомендерді автоматты түрде құруды басқарады.

## Түзету мәселелерін шешу (Troubleshooting) {#troubleshooting}

### API الاتصال мәселелері {#api-connection-issues}
- API куәлігіңіздің дұрыс екенін тексеріңіз
- Сервер және қолданба ID-лерінің дұрыс екенін тексеріңіз
- RunCloud аккаунтыңызда қажетті рұқсаттар бар екенін қамтамасыз етіңіз

### SSL сертификат мәселелері {#ssl-certificate-issues}
- RunCloud SSL сертификаттарын шығару бірнеше уақыт алады
- Домендеріңіз сервердің IP-браундығына дұрыс бағытталғанын тексеріңіз
- Қолданбаңыз үшін RunCloud SSL параметрлерін тексеріңіз

### Домен қосылмаған {#domain-not-added}
- Ultimate Multisite логинда кез келген қате хабарламаларды тексеріңіз
- Доменді RunCloud-қа әлі қосылмағанын растаңыз
- RunCloud жоспарыңыз көптеген домендерді қолдайтынын қамтамасыз етіңіз
