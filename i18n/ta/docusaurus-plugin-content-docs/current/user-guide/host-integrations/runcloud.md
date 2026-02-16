---
title: RunCloud ஒருங்கிணைப்பு
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ஒருங்கிணைப்பு

## கண்ணோட்டம்
RunCloud என்பது cloud அடிப்படையிலான server மேலாண்மை தளமாகும், இது உங்கள் சொந்த cloud servers-ல் web applications-ஐ எளிதாக deploy செய்து நிர்வகிக்க உதவுகிறது. இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் RunCloud இடையே தானியங்கி domain syncing மற்றும் SSL certificate மேலாண்மையை செயல்படுத்துகிறது.

## அம்சங்கள்
- தானியங்கி domain syncing
- SSL certificate மேலாண்மை
- mappings நீக்கப்படும்போது domain அகற்றுதல்

## தேவைகள்
பின்வரும் constants உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட வேண்டும்:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## அமைப்பு வழிமுறைகள்

### 1. உங்கள் RunCloud API சான்றுகளைப் பெறுங்கள்

1. உங்கள் RunCloud dashboard-ல் உள்நுழையுங்கள்
2. "User Profile"-க்கு செல்லுங்கள் (மேல்-வலது மூலையில் உள்ள உங்கள் profile படத்தை கிளிக் செய்யவும்)
3. menu-விலிருந்து "API"-ஐ தேர்ந்தெடுங்கள்
4. உங்களிடம் ஏற்கனவே இல்லையென்றால் "Generate API Key"-ஐ கிளிக் செய்யவும்
5. உங்கள் API Key மற்றும் API Secret-ஐ நகலெடுங்கள்

### 2. உங்கள் Server மற்றும் App IDs-ஐப் பெறுங்கள்

1. உங்கள் RunCloud dashboard-ல், "Servers"-க்கு செல்லுங்கள்
2. உங்கள் WordPress multisite host செய்யப்பட்டுள்ள server-ஐ தேர்ந்தெடுங்கள்
3. Server ID URL-ல் தெரியும்: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-க்கு சென்று உங்கள் WordPress application-ஐ தேர்ந்தெடுங்கள்
5. App ID URL-ல் தெரியும்: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-ல் Constants சேர்க்கவும்

பின்வரும் constants-ஐ உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ஒருங்கிணைப்பை இயக்குங்கள்

1. உங்கள் WordPress admin-ல், Ultimate Multisite > Settings-க்கு செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லுங்கள்
3. "Host Integrations"-க்கு கீழே scroll செய்யுங்கள்
4. RunCloud ஒருங்கிணைப்பை இயக்குங்கள்
5. "Save Changes"-ஐ கிளிக் செய்யுங்கள்

## இது எவ்வாறு செயல்படுகிறது

Ultimate Multisite-ல் ஒரு domain map செய்யப்படும்போது:

1. ஒருங்கிணைப்பு RunCloud-ன் API-க்கு உங்கள் application-ல் domain-ஐ சேர்க்க ஒரு request அனுப்புகிறது
2. domain வெற்றிகரமாக சேர்க்கப்பட்டால், ஒருங்கிணைப்பு SSL certificates-ஐயும் redeploy செய்யும்
3. ஒரு domain mapping நீக்கப்படும்போது, ஒருங்கிணைப்பு RunCloud-லிருந்து அந்த domain-ஐ அகற்றும்

Subdomain installations-க்கு, உங்கள் network-ல் புதிய sites சேர்க்கப்படும்போது RunCloud-ல் subdomains உருவாக்குவதை ஒருங்கிணைப்பு தானாகவே கையாளும்.

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் API சான்றுகள் சரியானவை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் server மற்றும் app IDs சரியானவை என்பதை சரிபாருங்கள்
- உங்கள் RunCloud account-க்கு தேவையான அனுமதிகள் உள்ளன என்பதை உறுதிப்படுத்துங்கள்

### SSL Certificate சிக்கல்கள்
- RunCloud SSL certificates வழங்க சிறிது நேரம் ஆகலாம்
- உங்கள் domains உங்கள் server-ன் IP address-க்கு சரியாக point ஆகியுள்ளன என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் application-க்கான RunCloud SSL settings-ஐ சரிபாருங்கள்

### Domain சேர்க்கப்படவில்லை
- ஏதேனும் error messages உள்ளதா என்று Ultimate Multisite logs-ஐ சரிபாருங்கள்
- அந்த domain ஏற்கனவே RunCloud-ல் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் RunCloud plan பல domains-ஐ ஆதரிக்கிறது என்பதை உறுதிப்படுத்துங்கள்
