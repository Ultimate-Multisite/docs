---
title: සර්වර්පයිලට් ඒකාබද්ධ කිරීම
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# සර්වර්පයිලොට් (ServerPilot) ඒකාබද්ධ කිරීම

## දළ විශ්ලේෂණය (Overview)
ServerPilot කියන්නේ DigitalOcean, Amazon, Google හෝ වෙනත් ඕනෑම සේවාදායකයන් මත WordPress සහ වෙනත් PHP වෙබ් අඩවි 호스팅 කිරීමට භාවිතා කරන கிளவுඩ් සේවාවකි. Ultimate Multisite සහ ServerPilot අතර ස්වයංක්‍රීය ડોමේන් සමමුහුර්ත කිරීම (domain syncing) සහ SSL සහතිකපත් කළමනාකරණය සඳහා මෙම ඒකාබද්ධතාව ඉඩ සලසයි.

## විශේෂාංග (Features)
- ස්වයංක්‍රීය ડોමේන් සමමුහුර්ත කිරීම (Automatic domain syncing)
- Let's Encrypt සමඟ SSL සහතිකපත් කළමනාකරණය (SSL certificate management with Let's Encrypt)
- ස්වයංක්‍රීය SSL අලුත් කිරීම (Automatic SSL renewal)

## අවශ්‍යතා (Requirements)
ඔබේ `wp-config.php` ගොනුවේ පහත constant (ස්ථාවරයන්) නිර්වචනය කළ යුතුය:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## සැකසුම් උපදෙස් (Setup Instructions)

### 1. ඔබේ ServerPilot API තොරතුරු ලබා ගැනීම

1. ඔබේ ServerPilot dashboard එකට ලොග් වන්න.
2. "Account" > "API" වෙත යන්න.
3. ඔබට දැනටමත් API key එකක් නොමැති නම් අලුත් API key එකක් සාදන්න (Create a new API key).
4. ඔබේ Client ID සහ API Key පිටපත් කරන්න (Copy).

### 2. ඔබේ App ID ලබා ගැනීම

1. ඔබේ ServerPilot dashboard එකේ, "Apps" වෙත යන්න.
2. ඔබගේ WordPress multisite එක 호스팅 කර ඇති app එක තෝරන්න.
3. App ID එක URL එකේ පෙනේ: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php වල Constant එකතු කිරීම

පහත constant (ස්ථාවරයන්) ඔබේ `wp-config.php` ගොනුවේ එක් කරන්න:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ඒකාබද්ධතාව සක්‍රීය කිරීම (Enable the Integration)

1. ඔබේ WordPress admin එකේ, Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" ටැබයට (tab) යන්න.
3. පහළට "Host Integrations" වෙත ස්ක්‍රෝල් කරන්න.
4. ServerPilot integration එක සක්‍රීය කරන්න.
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works)

### ડોමේන් සමමුහුර්ත කිරීම (Domain Syncing)

Ultimate Multisite හිදී යම් ડોමේනයක් map කර ඇති විට:

1. මෙම ඒකාබද්ධ කිරීම මගින් ServerPilot වෙතින් වත්මන් ડોමේන් ලැයිස්තුව ලබා ගනී.
2. එය නව ડોමේනය ලැයිස්තුවේ එකතු කරයි (අදාළ නම් www අනුවාදයක් සමඟ).
3. එය යාවත්කාලීන කරන ලද ලැයිස්තුව API හරහා ServerPilot වෙත යවයි.
4. ServerPilot මගින් ඔබේ යෙදුම සඳහා ડોමේන් ලැයිස්තුව යාවත්කාලීන කරයි.

### SSL සහතික කළමනාකරණය (SSL Certificate Management)

ડોමේන් සමමුහුර්ත කිරීමෙන් පසු:

1. මෙම ඒකාබද්ධ කිරීම මගින් ඔබේ යෙදුම සඳහා AutoSSL ස්වයංක්‍රීයව සක්‍රිය කරයි.
2. ServerPilot විසින් Let's Encrypt භාවිතයෙන් SSL සහතික ප්‍රදානය සහ ස්ථාපනය කළමනාකරණය කරයි.
3. SSL සහතික ස්වයංක්‍රීයව අලුත් කිරීම ද ServerPilot මගින් සිදු කරයි.

## SSL සහතික සත්‍යාපනය (SSL Certificate Verification)

ServerPilot සඳහා SSL සහතික ප්‍රදාන සහ ස්ථාපනය කිරීමට සමහර වෙලාවක් ගත විය හැකි බැවින්, මෙම ඒකාබද්ධ කිරීම ServerPilot සඳහා SSL සහතික සත්‍යාපන උත්සාහයන් සංඛ්‍යාව වැඩි කිරීමට වින්‍යාස කර ඇත. පෙරනිමියෙන්, එය උපරිම වතාවක් 5 වරක් උත්සාහ කරන නමුත් මෙය ෆිල්ටර් (filters) භාවිතයෙන් වෙනස් කළ හැකිය.

## ගැටළු නිරාකරණය (Troubleshooting)

### API සම්බන්ධතා ගැටළු (API Connection Issues)
- ඔබේ Client ID සහ API Key නිවැරදි දැයි තහවුරු කරන්න.
- ඔබේ App ID නිවැරදි දැයි පරීක්ෂා කරන්න.
- ඔබේ ServerPilot ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න.

### SSL සහතික ගැටළු (SSL Certificate Issues)
- SSL සහතික ප්‍රදානය කිරීමට පෙර, ડોමේන් වල DNS වාර්තා ඔබේ සේවාදායකයට නිවැරදිව යොමු වී තිබිය යුතුය.
- SSL සහතික ප්‍රදානය නොකළහොත්, ඔබේ ડોමේන් ඔබේ සේවාදායකයේ IP ලිපිනයට නිසි ලෙස යොමු වී ඇත්දැයි පරීක්ෂා කරන්න.
- ServerPilot මගින් SSL සහතික ප්‍රදානය කිරීමට සහ ස්ථාපනය කිරීමට සමහර වෙලාවක් ගත විය හැකිය (සාමාන්‍යයෙන් මිනිත්තු 5-15).

### ડોමේන් එකක් එකතු නොවීම (Domain Not Added)
- Ultimate Multisite ලොග් වල ඇති දෝෂ පණිවිඩ සඳහා පරීක්ෂා කරන්න.
- එම ડોමේනය දැනටමත් ServerPilot හි එකතු වී ඇත්දැයි තහවුරු කරන්න.
- ඔබ එකතු කරන ડોමේන් ගණන ඔබේ ServerPilot සැලැස්ම (plan) විසින් සහාය දෙන බව තහවුරු කරන්න.

### ડોમેન ඉවත් කිරීම (Domain Removal)
- දැනට, ServerPilot API එකෙන් තනිโดಮೇන් (individual domains) ඉවත් කිරීමට ක්‍රමයක් ලබා දී නැත.
- Ultimate Multisite එකේ එක් ડોමේන් මූලික සම්බන්ධතාවක් (domain mapping) ඉවත් කරන විට, එම ඒකාබද්ධ කිරීම (integration) ServerPilot හි ඇති ડોමේන් ලැයිස්තුව යාවත්කාලීන කරනු ඇත. එවිට ඉවත් කරන ලද ડોමේන් එම ලැයිස්තුවෙන් බැහැරව තබා ගනී.
