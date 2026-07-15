---
title: CyberPanel ஒருங்கிணைப்பு
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel ஒருங்கிணைப்பு

உங்கள் நெட்வொர்க்கில் உள்ள மேப் செய்யப்பட்ட டொமைன்கள் (mapped domains) CyberPanel-இல் virtual hosts ஆக தானாகச் சேர்க்கப்படவும் (மற்றும் நீக்கப்படவும்), விருப்பப்பட்டால் Let's Encrypt மூலம் auto-SSL வசதியையும் எப்படி கட்டமைப்பது என்பதை இந்தக் கையேடு விளக்குகிறது.

## இது என்ன செய்யும் {#what-it-does}

- Ultimate Multisite-இல் ஒரு டொமைன் மேப் செய்யப்படும்போது, அந்த டொமைனுக்கான virtual host-ஐ உருவாக்க, இந்த ஒருங்கிணைப்பு CyberPanel API-ஐ அழைக்கும்.
- ஒரு டொமைன் மேப்பிங் நீக்கப்படும்போது, அதற்குச் சம்மந்தமான virtual host-ஐ நீக்க API அழைப்பு செய்யப்படும்.
- auto-SSL இயக்கப்படும்போது, virtual host உருவாக்கப்பட்ட உடனேயே, Let's Encrypt சான்றிதழ் வழங்க இந்த ஒருங்கிணைப்பு தூண்டப்படும் (trigger).
- டொமைன் மேப்பிங் அமைப்புகளில் உள்ள "Auto-create www subdomain" அமைப்பைப் பொறுத்து, `www.` alias-ஐ விருப்பப்பட்டால் சேர்க்கும்/நீக்கும்.

## முன்நிபந்தனைகள் (Prerequisites) {#prerequisites}

- இயங்கிக் கொண்டிருக்கும் CyberPanel இன்ஸ்டன்ஸ் (v2.3 அல்லது அதற்கு மேல் பரிந்துரைக்கப்படுகிறது), இது உங்கள் WordPress சேவையகத்திலிருந்து அணுகக்கூடியதாக இருக்க வேண்டும்.
- உங்கள் WordPress நெட்வொர்க் ரூட்டை ஏற்கனவே வழங்கும் ஒரு CyberPanel-இல் உள்ள வலைத்தளம் தேவை. இந்த ஒருங்கிணைப்பு புதிய virtual hosts-களை இந்த சேவையகத்துடன் இணைக்கும்.
- CyberPanel API அணுகல் இயக்கப்பட வேண்டும். அங்கீகாரத்திற்காக (Authentication) உங்கள் CyberPanel நிர்வாகப் பயனர் பெயர் மற்றும் கடவுச்சொல் பயன்படுத்தப்படும்.
- auto-SSL சரியான சான்றிதழை வழங்க, மேப் செய்யப்பட்ட டொமைன்களுக்கான உங்கள் DNS பதிவுகள் ஏற்கனவே உங்கள் சேவையகத்தின் IP முகவரிக்கு சுட்டிக்காட்டப்பட்டிருக்க வேண்டும்.

## தேவைகள் (Requirements) {#requirements}

பின்வரும் மாறிலிகள் (constants) உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட வேண்டும்:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

விருப்பப்பட்டால், நீங்கள் இதை வரையறுக்கலாம்:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // இயல்புநிலை: true — டொமைன் உருவாக்கப்பட்ட பிறகு Let's Encrypt SSL வழங்கவும்
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // இயல்புநிலை: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL சான்றிதழ் தொடர்புக்குப் பயன்படுத்தப்படும்
```

## அமைவு வழிமுறைகள் (Setup Instructions) {#setup-instructions}

### 1. CyberPanel API-ஐ இயக்குதல் {#1-enable-the-cyberpanel-api}

1. ஒரு நிர்வாகியாக உங்கள் CyberPanel டாஷ்போர்டில் உள்நுழையவும்.
2. **Security** > **SSL** என்பதற்குச் சென்று, CyberPanel இடைமுகத்திலேயே SSL செயல்படுகிறதா என்பதை உறுதிப்படுத்தவும் (பாதுகாப்பான API அழைப்புகளுக்கு இது தேவை).
3. CyberPanel API இயல்பாகவே `https://your-server-ip:8090/api/` என்ற முகவரியில் கிடைக்கும். இதை இயக்க கூடுதல் படிகள் எதுவும் தேவையில்லை — இது நிர்வாகப் பயனர்களுக்கு இயல்பாகவே இயக்கத்தில் உள்ளது.

### 2. wp-config.php-இல் மாறிலிகளைச் சேர்த்தல் {#2-add-constants-to-wp-configphp}

பின்வரும் மாறிலிகளை உங்கள் `wp-config.php` கோப்பில் `/* That's all, stop editing! */` என்ற வரியுக்கு முன் சேர்க்கவும்:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL-ஐ இயக்க (பரிந்துரைக்கப்படுகிறது):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. ஒருங்கிணைப்பை இயக்குதல் {#3-enable-the-integration}

1. உங்கள் WordPress நெட்வொர்க் நிர்வாகத்தில், **Ultimate Multisite** > **Settings** என்பதற்குச் செல்லவும்.
2. **Domain Mapping** டேபிற்குச் செல்லவும்.
3. **Host Integrations** என்பதற்குச் ஸ்க்ரோல் செய்யவும்.
4. **CyberPanel** ஒருங்கிணைப்பை இயக்கவும்.
5. **Save Changes** என்பதைக் கிளிக் செய்யவும்.

### 4. இணைப்பைச் சரிபார்த்தல் (Verify Connectivity) {#4-verify-connectivity}

அமைவு விசாடில் உள்ள உள்ளமைக்கப்பட்ட இணைப்புச் சோதனையைப் பயன்படுத்தவும்:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** என்பதற்குச் செல்லவும்.
2. **Test Connection** என்பதைக் கிளிக் செய்யவும்.
3. ஒரு வெற்றிச் செய்தி, இந்த plugin ஆனது CyberPanel API-ஐ அணுகி, சரியாக அங்கீகரிக்க முடியும் என்பதை உறுதிப்படுத்தும்.

## இது எப்படி வேலை செய்கிறது (How It Works) {#how-it-works}

### டொமைன் மேப்பிங் (Domain Mapping) {#domain-mapping}

Ultimate Multisite-இல் ஒரு டொமைன் மேப் செய்யப்படும்போது:

1. இந்த ஒருங்கிணைப்பு உங்கள் CyberPanel ஹோஸ்டில் உள்ள `/api/createWebsite` என்ற முகவரிக்கு ஒரு `POST` கோரிக்கையை அனுப்பும்.
2. CyberPanel, கட்டமைக்கப்பட்ட தொகுப்பின் (configured package) கீழ் அந்த டொமைனுக்கான புதிய virtual host-ஐ உருவாக்கும்.
3. டொமைன் ரூட், உங்கள் WordPress நெட்வொர்க் ரூட் கோப்பகத்தை (directory) சுட்டிக்காட்டும்படி அமைக்கப்படும்.
4. டொமைன் மேப்பிங் நீக்கப்படும்போது, virtual host-ஐ சுத்தம் செய்ய இந்த ஒருங்கிணைப்பு `/api/deleteWebsite` என்பதை அழைக்கும்.

### auto-SSL {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` என்பது `true` ஆக இருக்கும்போது:

1. virtual host உருவாக்கப்பட்ட பிறகு, இந்த ஒருங்கிணைப்பு டொமைனுக்காக `/api/issueSSL` என்பதை அழைக்கும்.
2. CyberPanel, ACME HTTP-01 சவாலைப் (challenge) பயன்படுத்தி Let's Encrypt சான்றிதழை கோரும்.
3. சான்றிதழ் காலாவதற்கு முன் CyberPanel தானாகவே புதுப்பிக்கப்படும்.

> **முக்கியமானது:** Let's Encrypt டொமைனைச் சரிபார்க்க, DNS உங்கள் சேவையகத்தின் IP முகவரிக்கு முழுமையாகப் பரவியிருக்க (fully propagated) வேண்டும். மேப்பிங் செய்யப்பட்ட உடனேயே SSL வழங்கத் தவறினால், DNS பரவலை எதிர்பார்த்து காத்திருந்து, CyberPanel டாஷ்போர்டில் **SSL** > **Manage SSL** என்பதன் கீழ் SSL-ஐ மீண்டும் தூண்டவும்.

### www துணை டொமைன் (www Subdomain) {#www-subdomain}

உங்கள் Domain Mapping அமைப்புகளில் **Auto-create www subdomain** இயக்கப்பட்டிருந்தால், இந்த ஒருங்கிணைப்பு `www.<domain>` க்கான ஒரு virtual host alias-ஐயும் உருவாக்கும், மேலும் auto-SSL இயக்கப்பட்டிருந்தால், உச்சநிலை (apex) மற்றும் www ஆகிய இரண்டு மாறுபாடுகளையும் உள்ளடக்கிய சான்றிதழை வழங்கும்.

### மின்னஞ்சல் ஃபார்வர்டர்கள் (Email Forwarders) {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon செயல்படும்போது, CyberPanel வாடிக்கையாளர் மின்னஞ்சல் ஃபார்வர்டர்களையும் வழங்க முடியும். ஃபார்வர்டர்கள், முழு மெயில் பாக்ஸை உருவாக்காமல், ஒரு டொமைன் முகவரியில் இருந்து மற்றொரு இன்பாக்ஸிற்குச் செய்திகளை வழிநடத்துகின்றன. இது `info@customer-domain.test` அல்லது `support@customer-domain.test` போன்ற alias-களுக்குப் பயனுள்ளதாக இருக்கும்.

வாடிக்கையாளர்களுக்கு ஃபார்வர்டர்களை இயக்குவதற்கு முன்:

1. மேலே உள்ள CyberPanel மாறிலிகள் கட்டமைக்கப்பட்டு, இணைப்புச் சோதனை வெற்றி பெற்றதை உறுதிப்படுத்தவும்.
2. Emails addon அமைப்புகளில் CyberPanel மின்னஞ்சல் வழங்குநரை (email provider) இயக்கவும்.
3. ஃபார்வர்டரை உருவாக்குவதற்கு முன், வாடிக்கையாளர் டொமைன் CyberPanel-இல் ஏற்கனவே இருக்கிறதா என்பதை உறுதிப்படுத்தவும்.
4. சோதனை ஃபார்வர்டரை உருவாக்கி, அதைக்கொண்டு ஒரு செய்தியை அனுப்பிவிட்டு, உற்பத்தித் திட்டங்களில் (production plans) இந்த அம்சத்தை வழங்குங்கள்.

ஃபார்வர்டரை உருவாக்குவதில் தோல்வியடைந்தால், முதலில் Ultimate Multisite activity logs-ஐச் சரிபார்க்கவும், பின்னர் CyberPanel-இல் மூல டொமைன் இருக்கிறதா, மேலும் API பயனர் மின்னஞ்சல் நிர்வாக அனுமதிகளைக் கொண்டிருக்கிறாரா என்பதை உறுதிப்படுத்தவும்.

## உள்ளமைவு குறிப்பு (Configuration Reference) {#configuration-reference}

| Constant | தேவை | இயல்புநிலை | விளக்கம் |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | ஆம் | — | உங்கள் CyberPanel இன்ஸ்டன்ஸுக்கு முழு URL, போர்ட் உட்பட, எ.கா. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | ஆம் | — | CyberPanel நிர்வாகப் பயனர் பெயர் |
| `WU_CYBERPANEL_PASSWORD` | ஆம் | — | CyberPanel நிர்வாக கடவுச்சொல் |
| `WU_CYBERPANEL_PACKAGE` | ஆம் | `Default` | புதிய virtual hosts-களுக்கு ஒதுக்கப்படும் CyberPanel ஹோஸ்டிங் தொகுப்பு |
| `WU_CYBERPANEL_AUTO_SSL` | இல்லை | `true` | டொமைன் உருவாக்கப்பட்ட பிறகு Let's Encrypt SSL சான்றிதழை வழங்கவும் |
| `WU_CYBERPANEL_PHP_VERSION` | இல்லை | `PHP 8.2` | புதிய virtual hosts-களுக்கான PHP பதிப்பு (CyberPanel-இல் நிறுவப்பட்ட பதிப்புடன் பொருந்த வேண்டும்) |
| `WU_CYBERPANEL_EMAIL` | இல்லை | — | SSL சான்றிதழ் பதிவுக் தொடர்பு மின்னஞ்சல் |

## முக்கியமான குறிப்புகள் (Important Notes) {#important-notes}

- CyberPanel-இன் API, session-based token authentication-ஐப் பயன்படுத்துகிறது. ஒவ்வொரு API அழைப்பிலும் இந்த ஒருங்கிணைப்பு தானாகவே டோக்கன் பெறுதலை (token acquisition) கையாளுகிறது.
- உங்கள் CyberPanel நிர்வாகக் கணக்குக்கு வலைத்தளங்களை உருவாக்கவும் நீக்கவும் அனுமதி இருக்க வேண்டும்.
- CyberPanel இயல்பாகவே `8090` போர்ட்டில் இயங்குகிறது. உங்கள் சேவையகம் ஃபயர்வால் பயன்படுத்துகிறது என்றால், இந்த போர்ட் WordPress application server இலிருந்து அணுகக்கூடியதாக இருப்பதை உறுதிப்படுத்தவும்.
- இந்த ஒருங்கிணைப்பு DNS பதிவுகளை நிர்வகிக்காது. Ultimate Multisite-இல் டொமைனை மேப் செய்வதற்கு முன், டொமைன் DNS-ஐ உங்கள் சேவையகத்தின் IP முகவரிக்கு சுட்டிக்காட்ட வேண்டும்.
- நீங்கள் OpenLiteSpeed (OLS) பயன்படுத்துவீர்கள் என்றால், virtual host மாற்றங்களுக்குப் பிறகு ஒரு graceful restart தானாகவே தூண்டப்படும். இதற்கு எந்த கைமுறை தலையீடும் தேவையில்லை.

## சிக்கல் தீர்க்கும் வழிகாட்டி (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- உங்கள் சேவையக ஃபயர்வாலில் `8090` போர்ட் திறக்கப்பட்டுள்ளதா என்பதைச் சரிபார்க்கவும்.
- `WU_CYBERPANEL_HOST` மதிப்பு சரியான நெறிமுறை (`https://`) மற்றும் போர்ட் உட்பட உள்ளதா என்பதை உறுதிப்படுத்தவும்.
- உங்கள் CyberPanel SSL சான்றிதழ் செல்லுபடியாகிறதா என்று சரிபார்க்கவும்; சுய-அடையாள சான்றிதழ்கள் (self-signed certificates) TLS சரிபார்ப்பு தோல்விகளை ஏற்படுத்தக்கூடும். நம்பகமான தனிப்பட்ட நெட்வொர்க் சூழல்களில் மட்டுமே `WU_CYBERPANEL_VERIFY_SSL`-ஐ `false` என்று அமைக்கவும்.

### Authentication Errors {#authentication-errors}

- CyberPanel-இல் நேரடியாக உள்நுழைந்து உங்கள் `WU_CYBERPANEL_USERNAME` மற்றும் `WU_CYBERPANEL_PASSWORD` ஆகியவை சரியானதா என்பதை உறுதிப்படுத்தவும்.
- மீண்டும் மீண்டும் தோல்வியடையும் உள்நுழைவு முயற்சிகளுக்குப் பிறகு CyberPanel கணக்குகளைப் பூட்டிவிடும். பூட்டுதல் ஏற்பட்டால், CyberPanel-இல் **Security** > **Brute Force Monitor** என்பதைச் சரிபார்க்கவும்.

### Domain Not Created {#domain-not-created}

- API பிழைச் செய்திகளுக்காக Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) என்பதைச் சரிபார்க்கவும்.
- `WU_CYBERPANEL_PACKAGE`-இல் வரையறுக்கப்பட்ட தொகுப்பு CyberPanel-இல் இருக்கிறதா என்பதை உறுதிப்படுத்தவும் (**Packages** > **List Packages**).
- டொமைன் CyberPanel-இல் ஏற்கனவே ஒரு வலைத்தளமாகப் பதிவு செய்யப்படவில்லை என்பதை உறுதிப்படுத்தவும் — duplicate website creation ஒரு பிழையைத் தரும்.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- DNS முழுமையாகப் பரவியுள்ளதா என்பதை உறுதிப்படுத்தவும்: `dig +short your-domain.com` என்பது உங்கள் சேவையகத்தின் IP-ஐத் திருப்பி அனுப்ப வேண்டும்.
- Let's Encrypt rate limits-ஐ அமல்படுத்துகிறது. நீங்கள் சமீபத்தில் ஒரே டொமைனுக்காக பல சான்றிதழ்களை வழங்கியிருந்தால், மீண்டும் முயற்சிக்கும் முன் காத்திருக்கவும்.
- சான்றிதழ் வழங்கல் தோல்விகள் பற்றிய விவரங்களுக்கு **Logs** > **Error Logs** என்பதன் கீழ் CyberPanel SSL logs-ஐச் சரிபார்க்கவும்.
- மாற்று வழியாக, CyberPanel-இல் இருந்து SSL-ஐ கைமுறையாக வழங்கலாம்: **SSL** > **Manage SSL** > டொமைனைத் தேர்ந்தெடுத்து > **Issue SSL**.

## குறிப்புகள் (References) {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
