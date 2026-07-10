---
title: Hostinger (hPanel) ஒருங்கிணைப்பு
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ஒருங்கிணைப்பு {#hostinger-hpanel-integration}

## கண்ணோட்டம் (Overview) {#overview}

Hostinger என்பது ஒரு பிரபலமான வெப் ஹோஸ்டிங் வழங்குநராகும். இது hPanel என்ற நவீன கன்ட்ரோல் பேனலைக் கொண்டுள்ளது. Ultimate Multisite Hostinger ஒருங்கிணைப்பு, Ultimate Multisite மற்றும் Hostinger-ன் hPanel இடையே டொமைன்களை தானாக ஒத்திசைக்க (sync) உதவுகிறது. இதன் மூலம், உங்கள் WordPress நிர்வாகப் பலகையிலிருந்து (admin) நேரடியாக டொமைன் மேப்பிங்க்களையும் (domain mappings) சப்-டொமைன்களையும் (subdomains) நிர்வகிக்க முடியும்.

## அம்சங்கள் (Features) {#features}

- hPanel-ல் தானாக addon domain உருவாக்கம்
- hPanel-ல் தானாக சப்-டொமைன் உருவாக்கம் (சப்-டொமைன் மல்டிசைட் நிறுவல்களுக்கு)
- மேப்பிங்க்கள் நீக்கப்படும்போது டொமைன் நீக்கம்
- hPanel-ன் டொமைன் மேலாண்மை API உடன் தடையற்ற ஒருங்கிணைப்பு

## தேவைகள் (Requirements) {#requirements}

Hostinger ஒருங்கிணைப்பைப் பயன்படுத்த, உங்களுக்கு இவை தேவை:

1. hPanel அணுகலுடன் கூடிய ஒரு Hostinger கணக்கு
2. Hostinger-ல் இருந்து பெறப்பட்ட ஒரு API டோக்கன்
3. உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட்ட பின்வரும் மாறிலிகள் (constants):

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

விரும்பினால், நீங்கள் இதை வரையறுக்கலாம்:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // இயல்புநிலை API endpoint
```

## அமைவு வழிமுறைகள் (Setup Instructions) {#setup-instructions}

### 1. உங்கள் Hostinger API டோக்கனை உருவாக்குதல் {#1-generate-your-hostinger-api-token}

1. உங்கள் Hostinger கணக்கில் உள்நுழைந்து hPanel-ஐ அணுகவும்
2. **Account Settings** → **API Tokens** என்பதற்குச் செல்லவும்
3. **Create New Token** என்பதைக் கிளிக் செய்யவும்
4. உங்கள் டோக்கனுக்கு ஒரு விளக்கமான பெயரை கொடுக்கவும் (உதாரணமாக, "Ultimate Multisite")
5. தேவையான அனுமதிகளை (permissions) தேர்ந்தெடுக்கவும்:
   - Domain management
   - Subdomain management
6. உருவாக்கப்பட்ட டோக்கனை நகலெடுத்து பாதுகாப்பாக சேமிக்கவும்

### 2. உங்கள் கணக்கு ID-ஐ கண்டறிதல் {#2-find-your-account-id}

1. hPanel-ல், **Account Settings** → **Account Information** என்பதற்குச் செல்லவும்
2. உங்கள் கணக்கு ID இந்தப் பக்கத்தில் காட்டப்படும்
3. அடுத்த படிக்கு இந்த ID-ஐ நகலெடுத்து சேமிக்கவும்

### 3. wp-config.php-ல் மாறிலிகளைச் சேர்த்தல் {#3-add-constants-to-wp-configphp}

பின்வரும் மாறிலிகளை உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

உங்கள் Hostinger கணக்கு வேறு API endpoint-ஐப் பயன்படுத்தினால், நீங்கள் அதை மாற்றியமைக்கலாம்:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. ஒருங்கிணைப்பை இயக்குதல் (Enable the Integration) {#4-enable-the-integration}

1. உங்கள் WordPress நிர்வாகப் பலகையில் (admin), **Ultimate Multisite > Settings** என்பதற்குச் செல்லவும்
2. **Domain Mapping** என்ற தாவலுக்கு (tab) செல்லவும்
3. **Host Integrations** என்பதற்கு ஸ்க்ரோல் செய்யவும்
4. **Hostinger (hPanel)** ஒருங்கிணைப்பை இயக்கவும் (Enable)
5. **Save Changes** என்பதைக் கிளிக் செய்யவும்

## இது எப்படி வேலை செய்கிறது (How It Works) {#how-it-works}

### Addon Domains (கூடுதல் டொமைன்கள்) {#addon-domains}

Ultimate Multisite-ல் நீங்கள் ஒரு டொமைனை மேப் செய்யும் போது:

1. ஒருங்கிணைப்பு, அந்த டொமைனை ஒரு addon domain ஆகச் சேர்க்க Hostinger-ன் API-க்கு ஒரு கோரிக்கையை (request) அனுப்பும்.
2. அந்த டொமைன் உங்கள் ரூட் டைரக்டரிக்கு (root directory) சுட்டிக்காட்டும்படி கட்டமைக்கப்படும்.
3. ஒரு டொமைன் மேப்பிங் நீக்கப்படும்போது, ஒருங்கிணைப்பு தானாகவே hPanel-ல் இருந்து அந்த addon domain-ஐ நீக்கும்.

### Subdomains (துணை டொமைன்கள்) {#subdomains}

சப்-டொமைன் மல்டிசைட் நிறுவல்களுக்கு, ஒரு புதிய Site உருவாக்கப்படும்போது:

1. ஒருங்கிணைப்பு, முழு டொமைனிலிருந்த சப்-டொமைன் பகுதியை பிரித்தெடுக்கும்.
2. சப்-டொமைனைச் சேர்க்க Hostinger-ன் API-க்கு ஒரு கோரிக்கையை அனுப்பும்.
3. சப்-டொமைன் உங்கள் ரூட் டைரக்டரிக்கு சுட்டிக்காட்டும்படி கட்டமைக்கப்படும்.

## முக்கியமான குறிப்புகள் (Important Notes) {#important-notes}

- இந்த ஒருங்கிணைப்பு, உங்கள் கணக்குடன் தொடர்பு கொள்ள Hostinger-ன் REST API-ஐப் பயன்படுத்துகிறது.
- உங்கள் API டோக்கன், டொமைன் மற்றும் சப்-டொமைன் மேலாண்மைக்கான தேவையான அனுமதிகளைக் கொண்டிருக்க வேண்டும்.
- இந்த ஒருங்கிணைப்பு DNS கட்டமைப்பை (configuration) கையாளாது; டொமைன்கள் ஏற்கனவே உங்கள் Hostinger கணக்கிற்கு சுட்டிக்காட்டப்பட்டிருக்க வேண்டும்.
- API கோரிக்கைகள் HTTPS மூலம் பாதுகாப்பாக அனுப்பப்படுகின்றன.
- உங்கள் API டோக்கனை பாதுகாப்பாக வைத்திருங்கள் மற்றும் அதை பொதுவில் பகிர வேண்டாம்.

## சிக்கல் தீர்க்கும் வழிகாட்டி (Troubleshooting) {#troubleshooting}

### API இணைப்புச் சிக்கல்கள் (API Connection Issues) {#api-connection-issues}

- உங்கள் API டோக்கன் சரியானதா மற்றும் காலாவதியாகவில்லை என்பதைச் சரிபார்க்கவும்.
- உங்கள் கணக்கு ID சரியாக உள்ளதா என்று சரிபார்க்கவும்.
- டொமைன் மேலாண்மைக்கான தேவையான அனுமதிகள் உங்கள் API டோக்கனில் உள்ளதா என்பதை உறுதிப்படுத்தவும்.
- உங்கள் Hostinger கணக்கு செயலில் உள்ளதா மற்றும் நல்ல நிலையில் உள்ளதா என்பதைச் சரிபார்க்கவும்.

### டொமைன் சேர்க்கப்படவில்லை (Domain Not Added) {#domain-not-added}

- ஏதேனும் பிழைச் செய்திகள் (error messages) உள்ளதா என Ultimate Multisite logs-ஐச் சரிபார்க்கவும்.
- அந்த டொமைன் ஏற்கனவே உங்கள் Hostinger கணக்கில் சேர்க்கப்படவில்லை என்பதை உறுதிப்படுத்தவும்.
- உங்கள் Hostinger கணக்கு addon domain-களுக்கான வரம்பை எட்டவில்லை என்பதை உறுதிப்படுத்தவும்.
- டொமைன் உங்கள் Hostinger nameservers-க்குச் சரியாக சுட்டிக்காட்டப்பட்டுள்ளதா என்பதை உறுதிப்படுத்தவும்.

### SSL சான்றிதழ் சிக்கல்கள் (SSL Certificate Issues) {#ssl-certificate-issues}

- இந்த ஒருங்கிணைப்பு SSL சான்றிதழ் வழங்குதலைக் கையாள்வதில்லை.
- Hostinger பொதுவாக AutoSSL மூலம் இலவச SSL சான்றிதழ்களை வழங்குகிறது.
- நீங்கள் **SSL/TLS** பிரிவின் கீழ் hPanel-ல் நேரடியாக SSL சான்றிதழ்களை நிர்வகிக்கலாம்.
- மாற்று வழியாக, Hostinger-ன் AutoSSL அம்சத்துடன் Let's Encrypt-ஐப் பயன்படுத்தவும்.

## ஆதரவு (Support) {#support}

Hostinger ஒருங்கிணைப்பு குறித்து கூடுதல் உதவி தேவைப்பட்டால், தயவுசெய்து இவற்றைப் பார்க்கவும்:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
