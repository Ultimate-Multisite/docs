---
title: GridPane ஒருங்கிணைப்பு
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ஒருங்கிணைப்பு

## மேலோட்டம்
GridPane என்பது தீவிர WordPress வல்லுநர்களுக்காக உருவாக்கப்பட்ட சிறப்பு WordPress hosting கட்டுப்பாட்டு பேனல் ஆகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் GridPane இடையே தானியங்கி domain ஒத்திசைவு மற்றும் SSL சான்றிதழ் மேலாண்மையை செயல்படுத்துகிறது.

## அம்சங்கள்
- தானியங்கி domain ஒத்திசைவு
- SSL சான்றிதழ் மேலாண்மை
- SUNRISE constant-ன் தானியங்கி கட்டமைப்பு

## தேவைகள்
பின்வரும் constant-கள் உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட வேண்டும்:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## அமைப்பு வழிமுறைகள்

### 1. உங்கள் GridPane API சான்றுகளைப் பெறுதல்

1. உங்கள் GridPane dashboard-இல் உள்நுழையுங்கள்
2. "Settings" > "API" என்பதற்குச் செல்லுங்கள்
3. ஏற்கனவே API key இல்லையென்றால் ஒன்றை உருவாக்குங்கள்
4. உங்கள் API key-ஐ நகலெடுங்கள்

### 2. உங்கள் Server மற்றும் Site ID-களைப் பெறுதல்

1. உங்கள் GridPane dashboard-இல், "Servers" என்பதற்குச் செல்லுங்கள்
2. உங்கள் WordPress multisite host செய்யப்பட்டிருக்கும் server-ஐ தேர்வு செய்யுங்கள்
3. Server ID-ஐக் குறித்துக்கொள்ளுங்கள் (URL-இலோ அல்லது server விவரங்கள் பக்கத்திலோ காணலாம்)
4. "Sites" என்பதற்குச் சென்று உங்கள் WordPress site-ஐ தேர்வு செய்யுங்கள்
5. Site ID-ஐக் குறித்துக்கொள்ளுங்கள் (URL-இலோ அல்லது site விவரங்கள் பக்கத்திலோ காணலாம்)

### 3. wp-config.php-இல் Constant-களை சேர்த்தல்

பின்வரும் constant-களை உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### 4. ஒருங்கிணைப்பை செயல்படுத்துதல்

1. உங்கள் WordPress admin-இல், Ultimate Multisite > Settings என்பதற்குச் செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லுங்கள்
3. "Host Integrations" என்பதற்கு கீழே scroll செய்யுங்கள்
4. GridPane ஒருங்கிணைப்பை செயல்படுத்துங்கள்
5. "Save Changes" என்பதைக் கிளிக் செய்யுங்கள்

## இது எவ்வாறு செயல்படுகிறது

Ultimate Multisite-இல் ஒரு domain map செய்யப்படும்போது:

1. ஒருங்கிணைப்பு GridPane-ன் API-க்கு உங்கள் site-இல் domain-ஐ சேர்க்க ஒரு request அனுப்புகிறது
2. GridPane தானாகவே SSL சான்றிதழ் வழங்குதலை கையாளுகிறது
3. ஒரு domain mapping நீக்கப்படும்போது, ஒருங்கிணைப்பு அந்த domain-ஐ GridPane-இலிருந்து நீக்கும்

Domain mapping சரியாக செயல்படுவதற்கு தேவையான SUNRISE constant-ஐ உங்கள் wp-config.php கோப்பில் ஒருங்கிணைப்பு தானாகவே கையாளுகிறது.

## SUNRISE Constant மேலாண்மை

GridPane ஒருங்கிணைப்பின் ஒரு தனித்துவமான அம்சம் என்னவென்றால், GridPane-ன் சொந்த domain mapping அமைப்புடன் முரண்பாடுகளைத் தடுக்க wp-config.php-இல் உள்ள SUNRISE constant-ஐ தானாகவே மாற்றியமைக்கிறது. இது இரண்டு அமைப்புகளும் சிக்கல்கள் இல்லாமல் ஒன்றாக இணைந்து செயல்பட உறுதி செய்கிறது.

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் API key சரியானது என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் server மற்றும் site ID-கள் சரியானவை என்று சரிபாருங்கள்
- உங்கள் GridPane கணக்கு தேவையான அனுமதிகளைக் கொண்டுள்ளது என்பதை உறுதிப்படுத்துங்கள்

### SSL சான்றிதழ் சிக்கல்கள்
- SSL சான்றிதழ்களை வழங்க GridPane-க்கு சில நேரம் ஆகலாம்
- உங்கள் domain-கள் உங்கள் server-ன் IP முகவரியை சரியாக சுட்டிக்காட்டுகின்றனவா என்று சரிபாருங்கள்
- உங்கள் site-க்கான GridPane SSL அமைப்புகளை சரிபாருங்கள்

### Domain சேர்க்கப்படவில்லை
- ஏதேனும் பிழை செய்திகளுக்கு Ultimate Multisite logs-ஐ சரிபாருங்கள்
- Domain ஏற்கனவே GridPane-இல் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் domain-ன் DNS records சரியாக கட்டமைக்கப்பட்டுள்ளனவா என்று உறுதிப்படுத்துங்கள்
