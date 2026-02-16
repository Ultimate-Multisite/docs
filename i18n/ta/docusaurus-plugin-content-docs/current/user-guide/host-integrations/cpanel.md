---
title: cPanel ஒருங்கிணைப்பு
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ஒருங்கிணைப்பு

## மேலோட்டம்
cPanel என்பது பல shared மற்றும் dedicated hosting வழங்குநர்களால் பயன்படுத்தப்படும் மிகவும் பிரபலமான web hosting control panel ஆகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் cPanel இடையே தானியங்கு domain ஒத்திசைவை செயல்படுத்துகிறது, இது உங்கள் cPanel கணக்கில் domain aliases மற்றும் subdomains-ஐ தானாகவே சேர்க்க உதவுகிறது.

## அம்சங்கள்
- cPanel-ல் தானியங்கு addon domain உருவாக்கம்
- cPanel-ல் தானியங்கு subdomain உருவாக்கம் (subdomain multisite நிறுவல்களுக்கு)
- mappings நீக்கப்படும்போது domain நீக்கம்

## தேவைகள்
பின்வரும் constants உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட வேண்டும்:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

விருப்பமாக, நீங்கள் இவற்றையும் வரையறுக்கலாம்:

```php
define('WU_CPANEL_PORT', 2083); // இயல்புநிலை 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // இயல்புநிலை /public_html
```

## அமைவு வழிமுறைகள்

### 1. உங்கள் cPanel சான்றுகளைப் பெறுங்கள்

1. உங்கள் hosting வழங்குநரிடமிருந்து cPanel username மற்றும் password-ஐப் பெறுங்கள்
2. உங்கள் cPanel host-ஐ கண்டறியுங்கள் (பொதுவாக `cpanel.yourdomain.com` அல்லது `yourdomain.com:2083`)

### 2. wp-config.php-ல் Constants சேர்க்கவும்

பின்வரும் constants-ஐ உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

விருப்பமாக, port மற்றும் root directory-ஐ தனிப்பயனாக்கலாம்:

```php
define('WU_CPANEL_PORT', 2083); // உங்கள் cPanel வேறு port பயன்படுத்தினால் மாற்றுங்கள்
define('WU_CPANEL_ROOT_DIR', '/public_html'); // உங்கள் document root வேறாக இருந்தால் மாற்றுங்கள்
```

### 3. ஒருங்கிணைப்பை இயக்குங்கள்

1. உங்கள் WordPress admin-ல், Ultimate Multisite > Settings என்பதற்குச் செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லுங்கள்
3. "Host Integrations" என்பதற்கு கீழே உருட்டுங்கள்
4. cPanel ஒருங்கிணைப்பை இயக்குங்கள்
5. "Save Changes" என்பதைக் கிளிக் செய்யுங்கள்

## இது எப்படி வேலை செய்கிறது

### Addon Domains

Ultimate Multisite-ல் ஒரு domain map செய்யப்படும்போது:

1. ஒருங்கிணைப்பு cPanel-ன் API-க்கு domain-ஐ addon domain ஆக சேர்க்க கோரிக்கை அனுப்புகிறது
2. domain உங்கள் root directory-ஐ சுட்டிக்காட்ட அமைக்கப்படுகிறது
3. domain mapping நீக்கப்படும்போது, ஒருங்கிணைப்பு cPanel-லிருந்து addon domain-ஐ நீக்கும்

### Subdomains

Subdomain multisite நிறுவல்களுக்கு, புதிய site உருவாக்கப்படும்போது:

1. ஒருங்கிணைப்பு முழு domain-லிருந்து subdomain பகுதியைப் பிரித்தெடுக்கிறது
2. subdomain-ஐ சேர்க்க cPanel-ன் API-க்கு கோரிக்கை அனுப்புகிறது
3. subdomain உங்கள் root directory-ஐ சுட்டிக்காட்ட அமைக்கப்படுகிறது

## முக்கியமான குறிப்புகள்

- ஒருங்கிணைப்பு உங்கள் cPanel கணக்குடன் தொடர்புகொள்ள cPanel-ன் API2-ஐ பயன்படுத்துகிறது
- உங்கள் cPanel கணக்கிற்கு addon domains மற்றும் subdomains சேர்க்க அனுமதிகள் இருக்க வேண்டும்
- சில hosting வழங்குநர்கள் நீங்கள் உருவாக்கக்கூடிய addon domains அல்லது subdomains எண்ணிக்கையை கட்டுப்படுத்தலாம்
- ஒருங்கிணைப்பு DNS configuration-ஐ கையாளாது; உங்கள் domains-ஐ உங்கள் server-ன் IP முகவரிக்கு சுட்டிக்காட்ட நீங்கள் இன்னும் அமைக்க வேண்டும்

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் cPanel username மற்றும் password சரியானவை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் cPanel host சரியானது மற்றும் அணுகக்கூடியது என்பதைச் சரிபாருங்கள்
- உங்கள் cPanel கணக்கிற்கு தேவையான அனுமதிகள் இருப்பதை உறுதிசெய்யுங்கள்
- host-க்கு முழு URL-ஐ பயன்படுத்த முயற்சிக்கவும் (எ.கா., `https://cpanel.yourdomain.com`)

### Domain சேர்க்கப்படவில்லை
- ஏதேனும் பிழை செய்திகளுக்கு Ultimate Multisite logs-ஐ சரிபாருங்கள்
- domain ஏற்கனவே cPanel-ல் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்துங்கள்
- உங்கள் cPanel கணக்கு addon domains அல்லது subdomains வரம்பை அடையவில்லை என்பதை உறுதிசெய்யுங்கள்

### SSL Certificate சிக்கல்கள்
- ஒருங்கிணைப்பு SSL certificate வழங்குதலை கையாளாது
- உங்கள் domains-க்கு SSL certificates வழங்க cPanel-ன் SSL/TLS கருவிகள் அல்லது AutoSSL அம்சத்தைப் பயன்படுத்த வேண்டும்
- மாற்றாக, cPanel-ன் AutoSSL உடன் Let's Encrypt போன்ற சேவையைப் பயன்படுத்தலாம்
