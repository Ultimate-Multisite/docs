---
title: Cloudways ஒருங்கிணைப்பு
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ஒருங்கிணைப்பு

## கண்ணோட்டம்
Cloudways என்பது DigitalOcean, AWS, Google Cloud போன்ற பல்வேறு cloud சேவை வழங்குநர்களில் WordPress தளங்களை deploy செய்ய உதவும் ஒரு managed cloud hosting தளமாகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் Cloudways இடையே தானியங்கி domain syncing மற்றும் SSL சான்றிதழ் மேலாண்மையை செயல்படுத்துகிறது.

## அம்சங்கள்
- தானியங்கி domain syncing
- SSL சான்றிதழ் மேலாண்மை
- கூடுதல் domains-க்கான ஆதரவு
- SSL சான்றிதழ்களுக்கான DNS சரிபார்ப்பு

## தேவைகள்
பின்வரும் constants உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட வேண்டும்:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

விருப்பமாக, இதையும் வரையறுக்கலாம்:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## அமைவு வழிமுறைகள்

### 1. உங்கள் Cloudways API சான்றுகளைப் பெறுங்கள்

1. உங்கள் Cloudways dashboard-ல் உள்நுழையுங்கள்
2. "Account" > "API Keys" என்பதற்குச் செல்லுங்கள்
3. உங்களிடம் API key இல்லையென்றால் ஒன்றை உருவாக்குங்கள்
4. உங்கள் email மற்றும் API key-ஐ நகலெடுங்கள்

### 2. உங்கள் Server மற்றும் Application ID-களைப் பெறுங்கள்

1. உங்கள் Cloudways dashboard-ல், "Servers" என்பதற்குச் செல்லுங்கள்
2. உங்கள் WordPress multisite host செய்யப்பட்டுள்ள server-ஐ தேர்ந்தெடுங்கள்
3. Server ID URL-ல் காணலாம்: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" என்பதற்குச் சென்று உங்கள் WordPress application-ஐ தேர்ந்தெடுங்கள்
5. App ID URL-ல் காணலாம்: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-ல் Constants சேர்க்கவும்

உங்கள் `wp-config.php` கோப்பில் பின்வரும் constants-ஐ சேர்க்கவும்:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

எப்போதும் சேர்க்கப்பட வேண்டிய கூடுதல் domains இருந்தால்:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. ஒருங்கிணைப்பை இயக்கவும்

1. உங்கள் WordPress admin-ல், Ultimate Multisite > Settings என்பதற்குச் செல்லுங்கள்
2. "Domain Mapping" tab-க்கு navigate செய்யுங்கள்
3. "Host Integrations" என்பதற்கு கீழே scroll செய்யுங்கள்
4. Cloudways ஒருங்கிணைப்பை enable செய்யுங்கள்
5. "Save Changes" என்பதை click செய்யுங்கள்

## இது எவ்வாறு செயல்படுகிறது

### Domain Syncing

Ultimate Multisite-ல் ஒரு domain map செய்யப்படும்போது:

1. ஒருங்கிணைப்பு தற்போது map செய்யப்பட்ட அனைத்து domains-ஐயும் பெறுகிறது
2. புதிய domain-ஐ பட்டியலில் சேர்க்கிறது (பொருந்துமானால் www version-உடன்)
3. முழுமையான பட்டியலை API வழியாக Cloudways-க்கு அனுப்புகிறது
4. உங்கள் application-க்கான domain aliases-ஐ Cloudways புதுப்பிக்கிறது

குறிப்பு: Cloudways API ஒவ்வொரு முறையும் முழுமையான domains பட்டியலை அனுப்ப வேண்டும், தனித்தனி domains-ஐ சேர்ப்பது அல்லது நீக்குவது மட்டும் போதாது.

### SSL சான்றிதழ் மேலாண்மை

Domains sync ஆன பிறகு:

1. உங்கள் server-ஐ சுட்டிக்காட்டும் செல்லுபடியான DNS records உள்ள domains எவை என்று ஒருங்கிணைப்பு சரிபார்க்கிறது
2. அந்த domains-க்கு Let's Encrypt SSL சான்றிதழ்களை நிறுவ Cloudways-க்கு கோரிக்கை அனுப்புகிறது
3. SSL சான்றிதழ் வழங்குதல் மற்றும் நிறுவலை Cloudways கையாளுகிறது

## கூடுதல் Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant, Cloudways-உடன் sync செய்யும்போது எப்போதும் சேர்க்கப்பட வேண்டிய கூடுதல் domains-ஐ குறிப்பிட உதவுகிறது. இது இவற்றுக்கு பயனுள்ளது:

- Ultimate Multisite மூலம் நிர்வகிக்கப்படாத domains
- Wildcard domains (எ.கா., `*.example.com`)
- Development அல்லது staging domains

## சிக்கல்களைத் தீர்த்தல்

### API இணைப்பு சிக்கல்கள்
- உங்கள் email மற்றும் API key சரியானவை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் server மற்றும் application ID-கள் சரியானவை என்பதை சரிபார்க்கவும்
- உங்கள் Cloudways கணக்குக்கு தேவையான அனுமதிகள் இருப்பதை உறுதிசெய்யுங்கள்

### SSL சான்றிதழ் சிக்கல்கள்
- SSL சான்றிதழ்களை வழங்குவதற்கு முன், domains உங்கள் server-ஐ சுட்டிக்காட்டும் செல்லுபடியான DNS records கொண்டிருக்க வேண்டும் என்று Cloudways தேவைப்படுத்துகிறது
- SSL சான்றிதழ்களைக் கோருவதற்கு முன் ஒருங்கிணைப்பு DNS records-ஐ சரிபார்க்கிறது
- SSL சான்றிதழ்கள் வழங்கப்படவில்லை என்றால், உங்கள் domains சரியாக உங்கள் server-ன் IP முகவரியை சுட்டிக்காட்டுகிறதா என்று சரிபார்க்கவும்

### Domain சேர்க்கப்படவில்லை
- ஏதேனும் error messages உள்ளதா என்று Ultimate Multisite logs-ஐ சரிபார்க்கவும்
- Domain ஏற்கனவே Cloudways-ல் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்துங்கள்
- நீங்கள் சேர்க்கும் domains எண்ணிக்கையை உங்கள் Cloudways plan ஆதரிக்கிறதா என்பதை உறுதிசெய்யுங்கள்
