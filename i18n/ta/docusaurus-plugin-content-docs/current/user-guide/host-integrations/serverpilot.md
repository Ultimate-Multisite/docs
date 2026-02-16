---
title: ServerPilot ஒருங்கிணைப்பு
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ஒருங்கிணைப்பு

## கண்ணோட்டம்
ServerPilot என்பது DigitalOcean, Amazon, Google அல்லது வேறு எந்த server வழங்குநரிடமும் WordPress மற்றும் பிற PHP வலைத்தளங்களை host செய்வதற்கான ஒரு cloud சேவையாகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் ServerPilot இடையே தானியங்கி domain ஒத்திசைவு மற்றும் SSL சான்றிதழ் மேலாண்மையை செயல்படுத்துகிறது.

## அம்சங்கள்
- தானியங்கி domain ஒத்திசைவு
- Let's Encrypt மூலம் SSL சான்றிதழ் மேலாண்மை
- தானியங்கி SSL புதுப்பிப்பு

## தேவைகள்
பின்வரும் constant-களை உங்கள் `wp-config.php` கோப்பில் வரையறுக்க வேண்டும்:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## அமைப்பு வழிமுறைகள்

### 1. உங்கள் ServerPilot API சான்றுகளைப் பெறுங்கள்

1. உங்கள் ServerPilot dashboard-இல் உள்நுழையுங்கள்
2. "Account" > "API" என்பதற்குச் செல்லுங்கள்
3. உங்களிடம் ஏற்கனவே இல்லையென்றால் புதிய API key உருவாக்குங்கள்
4. உங்கள் Client ID மற்றும் API Key-ஐ நகலெடுங்கள்

### 2. உங்கள் App ID-ஐப் பெறுங்கள்

1. உங்கள் ServerPilot dashboard-இல், "Apps" என்பதற்குச் செல்லுங்கள்
2. உங்கள் WordPress multisite host செய்யப்பட்டுள்ள app-ஐ தேர்ந்தெடுங்கள்
3. App ID URL-இல் தெரியும்: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. wp-config.php-இல் Constant-களைச் சேர்க்கவும்

பின்வரும் constant-களை உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### 4. ஒருங்கிணைப்பை இயக்கவும்

1. உங்கள் WordPress admin-இல், Ultimate Multisite > Settings என்பதற்குச் செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லவும்
3. "Host Integrations" வரை கீழே உருட்டவும்
4. ServerPilot ஒருங்கிணைப்பை இயக்கவும்
5. "Save Changes" என்பதைக் கிளிக் செய்யவும்

## இது எப்படி செயல்படுகிறது

### Domain ஒத்திசைவு

Ultimate Multisite-இல் ஒரு domain map செய்யப்படும்போது:

1. ஒருங்கிணைப்பு ServerPilot-இலிருந்து தற்போதைய domain பட்டியலை எடுக்கிறது
2. புதிய domain-ஐ பட்டியலில் சேர்க்கிறது (பொருந்தினால் www பதிப்புடன் சேர்த்து)
3. புதுப்பிக்கப்பட்ட பட்டியலை API வழியாக ServerPilot-க்கு அனுப்புகிறது
4. ServerPilot உங்கள் application-க்கான domain பட்டியலைப் புதுப்பிக்கிறது

### SSL சான்றிதழ் மேலாண்மை

Domain-கள் ஒத்திசைக்கப்பட்ட பிறகு:

1. ஒருங்கிணைப்பு உங்கள் application-க்கு AutoSSL-ஐ தானாக இயக்குகிறது
2. Let's Encrypt பயன்படுத்தி SSL சான்றிதழ் வழங்குதல் மற்றும் நிறுவுதலை ServerPilot கையாளுகிறது
3. SSL சான்றிதழ்களின் தானியங்கி புதுப்பிப்பையும் ServerPilot கையாளுகிறது

## SSL சான்றிதழ் சரிபார்ப்பு

ServerPilot SSL சான்றிதழ்களை வழங்கி நிறுவுவதற்கு சிறிது நேரம் ஆகலாம் என்பதால், ServerPilot-க்கான SSL சான்றிதழ் சரிபார்ப்பு முயற்சிகளின் எண்ணிக்கையை அதிகரிக்க இந்த ஒருங்கிணைப்பு கட்டமைக்கப்பட்டுள்ளது. இயல்பாக, இது 5 முறை வரை முயற்சிக்கும், ஆனால் filter-கள் பயன்படுத்தி இதை மாற்றலாம்.

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் Client ID மற்றும் API Key சரியானவை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் App ID சரியானது என்பதை சரிபார்க்கவும்
- உங்கள் ServerPilot கணக்கில் தேவையான அனுமதிகள் உள்ளன என்பதை உறுதிப்படுத்துங்கள்

### SSL சான்றிதழ் சிக்கல்கள்
- SSL சான்றிதழ்களை வழங்குவதற்கு முன் domain-கள் உங்கள் server-ஐ சுட்டிக்காட்டும் செல்லுபடியாகும் DNS records இருக்க வேண்டும் என்று ServerPilot தேவைப்படுகிறது
- SSL சான்றிதழ்கள் வழங்கப்படவில்லை என்றால், உங்கள் domain-கள் உங்கள் server-இன் IP முகவரியை சரியாக சுட்டிக்காட்டுகின்றனவா என்று சரிபார்க்கவும்
- ServerPilot SSL சான்றிதழ்களை வழங்கி நிறுவ சிறிது நேரம் ஆகலாம் (பொதுவாக 5-15 நிமிடங்கள்)

### Domain சேர்க்கப்படவில்லை
- ஏதேனும் error செய்திகளுக்கு Ultimate Multisite log-களை சரிபார்க்கவும்
- Domain ஏற்கனவே ServerPilot-இல் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்துங்கள்
- நீங்கள் சேர்க்கும் domain-களின் எண்ணிக்கையை உங்கள் ServerPilot plan ஆதரிக்கிறதா என்பதை உறுதிப்படுத்துங்கள்

### Domain நீக்குதல்
- தற்போது, ServerPilot API தனிப்பட்ட domain-களை நீக்க வழி வழங்கவில்லை
- Ultimate Multisite-இல் ஒரு domain mapping நீக்கப்படும்போது, நீக்கப்பட்ட domain-ஐ விலக்கி ServerPilot-இல் domain பட்டியலை ஒருங்கிணைப்பு புதுப்பிக்கும்
