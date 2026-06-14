---
title: GridPane ඒකාබද්ධ කිරීම
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ඒකාබද්ධ කිරීම (GridPane Integration)

## දළ විශ්ලේෂණය (Overview)
GridPane කියන්නේ බැරෑරුම් WordPress වෘත්තිකයන් සඳහා නිර්මාණය කරන ලද විශේෂිත WordPress hosting control panel එකක්. මේකෙන් Ultimate Multisite සහ GridPane අතර Automatic domain syncing සහ SSL certificate management පහසු කරයි.

## විශේෂාංග (Features)
- ස්වයංක්‍රීය ડોමේන් සමමුහුර්ත කිරීම (Automatic domain syncing)
- SSL සහතික කළමනාකරණය (SSL certificate management)
- SUNRISE constant එක ස්වයංක්‍රීයව වින්‍යාස කිරීම (Automatic configuration of SUNRISE constant)

## අවශ්‍යතා (Requirements)
පහත constant එක ඔබේ `wp-config.php` ගොනුවේ නිර්වචනය කළ යුතුයි:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## සැකසීමේ උපදෙස් (Setup Instructions)

### 1. ඔබේ GridPane API Credentials ලබා ගැනීම

1. ඔබේ GridPane dashboard එකට ලොග් වෙන්න.
2. "Settings" > "API" වෙත යන්න.
3. ඔබට API key එකක් නැත්නම්, එය ජනනය කරන්න (Generate).
4. ඔබේ API key එක පිටපත් කරන්න (Copy).

### 2. ඔබේ Server සහ Site ID ලබා ගැනීම

1. ඔබේ GridPane dashboard එකේ, "Servers" වෙත යන්න.
2. ඔබේ WordPress multisite ස්ථාපනය කර ඇති server එක තෝරන්න.
3. Server ID එක සටහන් කරන්න (URL එකේ හෝ server details page එකේ පෙනෙන).
4. "Sites" වෙත ගොස් ඔබේ WordPress site එක තෝරන්න.
5. Site ID එක සටහන් කරන්න (URL එකේ හෝ site details page එකේ පෙනෙන).

### 3. wp-config.php වල Constant එකතු කිරීම

පහත constant එක ඔබේ `wp-config.php` ගොනුවේ එක් කරන්න:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ඒකාබද්ධ කිරීම සක්‍රීය කිරීම (Enable the Integration)

1. ඔබේ WordPress admin එකේ, Ultimate Multisite > Settings වෙත යන්න.
2. "Domain Mapping" tab එකට යන්න.
3. පහළට "Host Integrations" වෙත ස්ක්‍රෝල් කරන්න.
4. GridPane integration එක සක්‍රීය කරන්න (Enable).
5. "Save Changes" ක්ලික් කරන්න.

## එය ක්‍රියා කරන ආකාරය (How It Works)

Ultimate Multisite එකේ යම් domain එකක් map කර ඇති විට:

1. මෙම ඒකාබද්ධ කිරීම මගින් ඔබේ වෙබ් අඩවියට ප්‍රදේශය (domain) එක් කිරීමට GridPane හි API වෙත ඉල්ලීමක් යවයි.
2. SSL සහතිකපත් සැපයීම ස්වයංක්‍රීයව GridPane විසින් සිදු කරයි.
3. ප්‍රදේශ සිතියම්කරණය (domain mapping) ඉවත් කරන විට, ඒකාබද්ධ කිරීම මගින් එම ප්‍රදේශය GridPane වෙතින් ඉවත් කරනු ඇත.

ඒකාබද්ධ කිරීම ඔබේ wp-config.php ගොනුවේ ඇති SUNRISE constant එක ස්වයංක්‍රීයව හැසිරවීම ද සිදු කරයි. මෙය ප්‍රදේශ සිතියම්කරණය නිවැරදිව ක්‍රියාත්මක වීමට අවශ්‍ය වේ.

## SUNRISE Constant කළමනාකරණය

GridPane ඒකාබද්ධ කිරීමේ අද්විතීය විශේෂාංගයක් නම්, එය GridPane හිම ප්‍රදේශ සිතියම්කරණ පද්ධතිය සමඟ ගැටුම් ඇතිවීම වැළැක්වීම සඳහා wp-config.php ගොනුවේ ඇති SUNRISE constant එක ස්වයංක්‍රීයව නැවත යොදනු ලබන බවයි. මෙය දෙයාකාර පද්ධති කිසිදු ගැටලුවකින් තොරව එක්ව ක්‍රියා කිරීමට සහතික කරයි.

## ගැටළු නිරාකරණය (Troubleshooting)

### API සම්බන්ධතා ගැටළු
- ඔබේ API key නිවැරදි දැයි තහවුරු කරන්න.
- ඔබේ සේවාදායකය (server) සහ වෙබ් අඩවි ID නිවැරදි දැයි පරීක්ෂා කරන්න.
- ඔබගේ GridPane ගිණුමට අවශ්‍ය අවසරයන් තිබේදැයි තහවුරු කරන්න.

### SSL සහතිකපත් ගැටළු
- GridPane විසින් SSL සහතිකපත් නිකුත් කිරීමට යම් කාලයක් ගත විය හැකිය.
- ඔබේ ප්‍රදේශ නිවැරදිව ඔබේ සේවාදායකයේ IP ලිපිනයට යොමු වී ඇත්දැයි පරීක්ෂා කරන්න.
- ඔබේ වෙබ් අඩවිය සඳහා GridPane හි SSL සැකසුම් පරීක්ෂා කරන්න.

### ප්‍රදේශ එකතු නොවීම
- Ultimate Multisite logs තුළ ඇති ඕනෑම දෝෂ පණිවිඩ පරීක්ෂා කරන්න.
- එම ප්‍රදේශය දැනටමත් GridPane වෙත එකතු වී ඇත්දැයි තහවුරු කරන්න.
- ඔබේ ප්‍රදේශයේ DNS වාර්තා නිවැරදිව වින්‍යාස කර ඇති බව සහතික කරන්න.
