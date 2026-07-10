---
title: RunCloud ඒකාබද්ධ කිරීම
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ඒකාබද්ධ කිරීම (RunCloud Integration) {#runcloud-integration}

## දළ විශ්ලේෂණය (Overview) {#overview}
RunCloud කියන්නේ ඔබගේම கிளவுட் සේවාදායකයන් මත වෙබ් යෙදුම් පහසුවෙන් ස්ථාපනය කිරීමට සහ කළමනාකරණය කිරීමට ඉඩ සලසන, ක්ලවුඩ් පාදක සේවාදායක කළමනාකරණ වේදිකාවකි. Ultimate Multisite සහ RunCloud අතර ස්වයංක්‍රීය ડોමේන් සමමුහුර්ත කිරීම (domain syncing) සහ SSL සහතිකපත් කළමනාකරණය සඳහා මෙම ඒකාබද්ධතාව භාවිතා කළ හැකියි.

## විශේෂාංග (Features) {#features}
- ස්වයංක්‍රීය ડોමේන් සමමුහුර්ත කිරීම (Automatic domain syncing)
- SSL සහතිකපත් කළමනාකරණය (SSL certificate management)
- මැප් කිරීම් මකා දැමූ විට ડોමේන් ඉවත් කිරීම (Domain removal when mappings are deleted)

## අවශ්‍යතා (Requirements) {#requirements}
ඔබේ `wp-config.php` ගොනුවේ පහත නියතයන් (constants) නිර්වචනය කළ යුතුය:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## සැකසුම් උපදෙස් (Setup Instructions) {#setup-instructions}

### 1. ඔබේ RunCloud API තොරතුරු ලබා ගැනීම (Get Your RunCloud API Credentials) {#1-get-your-runcloud-api-credentials}

1. ඔබගේ RunCloud dashboard එකට ලොග් වන්න.
2. "User Profile" වෙත යන්න (වම් ඉහළ කෙළවරේ ඇති ඔබේ ප්‍රොෆයිල් පින්තූරය මත ක්ලික් කරන්න).
3. මෙනුවෙන් "API" තෝරන්න.
4. ඔබට API Key එකක් නොමැති නම්, "Generate API Key" ක්ලික් කරන්න.
5. ඔබගේ API Key සහ API Secret පිටපත් (Copy) ගන්න.

### 2. ඔබේ සේවාදායක ID සහ යෙදුම් ID ලබා ගැනීම (Get Your Server and App IDs) {#2-get-your-server-and-app-ids}

1. ඔබගේ RunCloud dashboard එකේ, "Servers" වෙත යන්න.
2. ඔබගේ WordPress multisite ස්ථාපනය කර ඇති සේවාදායකය තෝරන්න.
3. Server ID එක URL එකේ පෙනේ: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" වෙත ගොස් ඔබේ WordPress යෙදුම තෝරන්න.
5. App ID එක URL එකේ පෙනේ: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php හි නියතයන් එක් කිරීම (Add Constants to wp-config.php) {#3-add-constants-to-wp-configphp}

පහත නියතයන් ඔබේ `wp-config.php` ගොනුවේ එක් කරන්න:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ඒකාබද්ධතාව සක්‍රිය කිරීම (Enable the Integration) {#4-enable-the-integration}

1. ඔබේ WordPress admin එකට ගොස්, Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" tab එකට යන්න.
3. "Host Integrations" යටතේ පහළට સ્ક્રોલ කරන්න.
4. RunCloud integration එක Enable කරන්න.
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works) {#how-it-works}

Ultimate Multisite එකේ domain එකක් map කර ඇති විට:

1. Integration එක ඔබේ application එකට domain එක එකතු කිරීමට RunCloud API වෙත request එකක් යවයි.
2. Domain එක සාර්ථකව එකතු කළහොත්, integration එක SSL certificates ද නැවත deploy (deploy) කරයි.
3. Domain mapping එක ඉවත් කරන විට, integration එක RunCloud එකෙන් එම domain එක ඉවත් කරනු ඇත.

Subdomain installations සඳහා, ඔබේ ජාලයට නව sites එකතු කරන විට, integration එක RunCloud එකේ subdomain නිර්මාණය කිරීම ස්වයංක්‍රීයව (automatically) කළ හැක.

## ගැටළු විසඳීම (Troubleshooting) {#troubleshooting}

### API සම්බන්ධතා ගැටළු (API Connection Issues) {#api-connection-issues}
- ඔබේ API credentials නිවැරදි දැයි තහවුරු කරන්න.
- ඔබේ server සහ app IDs නිවැරදි දැයි පරීක්ෂා කරන්න.
- RunCloud ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කර ගන්න.

### SSL Certificate ගැටළු (SSL Certificate Issues) {#ssl-certificate-issues}
- RunCloud එකෙන් SSL certificates නිකුත් කිරීමට යම් කාලයක් ගත විය හැක.
- ඔබේ domain එකలు ඔබේ server IP ලිපිනයට නිවැරදිව pointing වී ඇත්දැයි පරීක්ෂා කරන්න.
- ඔබේ application සඳහා RunCloud SSL settings පරීක්ෂා කරන්න.

### Domain එක එකතු නොවීම (Domain Not Added) {#domain-not-added}
- Ultimate Multisite logs වල ඇති කිසියම් error message එකක් තිබේදැයි බලන්න.
- domain එක දැනටමත් RunCloud එකේ එකතු වී ඇත්දැයි තහවුරු කරන්න.
- ඔබේ RunCloud plan එක බහු domain සඳහා සහාය දෙන බව තහවුරු කර ගන්න.
