---
title: கட்டுப்பாட்டு பலகம் ஒருங்கிணைப்பை மேம்படுத்து
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration - ஒருங்கிணைப்பு வழிகாட்டி

## கண்ணோட்டம்
Enhance என்பது சக்திவாய்ந்த ஹோஸ்டிங் தானியங்கி மற்றும் மேலாண்மை திறன்களை வழங்கும் நவீன control panel ஆகும். இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் Enhance Control Panel இடையே தானியங்கு domain ஒத்திசைவு மற்றும் SSL சான்றிதழ் மேலாண்மையை செயல்படுத்துகிறது.

**தொடர்புடைய கலந்துரையாடல்:** சமூக குறிப்புகள் மற்றும் கூடுதல் தகவல்களுக்கு [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) பார்க்கவும்.

## அம்சங்கள்
- Ultimate Multisite-ல் domains இணைக்கப்படும்போது தானியங்கு domain ஒத்திசைவு
- DNS resolve ஆகும்போது LetsEncrypt மூலம் தானியங்கு SSL சான்றிதழ் வழங்கல்
- subdomain முறையில் இயங்கும் networks-க்கு subdomain ஆதரவு
- mappings நீக்கப்படும்போது domain அகற்றல்
- API credentials-ஐ சரிபார்க்க இணைப்பு சோதனை

## தேவைகள்

### கணினி தேவைகள்
- Enhance Control Panel நிறுவப்பட்டு அணுகக்கூடியதாக இருக்க வேண்டும்
- Enhance server-ல் ஹோஸ்ட் செய்யப்பட்ட அல்லது இணைக்கப்பட்ட WordPress Multisite நிறுவல்
- Apache web server (Enhance தற்போது Apache configurations-ஐ ஆதரிக்கிறது; LiteSpeed Enterprise குறைந்த விலையில் கிடைக்கும்)

### API அணுகல்
API tokens உருவாக்க Enhance Control Panel-க்கு நிர்வாகி அணுகல் உங்களுக்கு இருக்க வேண்டும்.

## உங்கள் API Credentials பெறுதல்

### 1. API Token உருவாக்கவும்

1. உங்கள் Enhance Control Panel-ல் நிர்வாகியாக உள்நுழையவும்
2. navigation menu-வில் **Settings** கிளிக் செய்யவும்
3. **Access Tokens** பகுதிக்கு செல்லவும்
4. **Create Token** கிளிக் செய்யவும்
5. token-க்கு விளக்கமான பெயர் கொடுங்கள் (எ.கா., "Ultimate Multisite Integration")
6. **System Administrator** role-ஐ நியமிக்கவும்
7. காலாவதி தேதிக்கு:
   - token காலாவதியாகாமல் இருக்க காலியாக விடவும்
   - அல்லது பாதுகாப்பு நோக்கங்களுக்காக குறிப்பிட்ட காலாவதி தேதியை அமைக்கவும்
8. **Create** கிளிக் செய்யவும்

உருவாக்கிய பிறகு, உங்கள் **Access Token** மற்றும் **Organization ID** காட்டப்படும். **இவற்றை உடனடியாக சேமியுங்கள்** ஏனெனில் token ஒரே ஒரு முறை மட்டுமே காட்டப்படும்.

### 2. உங்கள் Organization ID பெறவும்

Organization ID ஆனது Access Tokens பக்கத்தில் "Org ID: {your_id}" என்று குறிப்பிடப்பட்ட நீல தகவல் பெட்டியில் காட்டப்படும்.

Organization ID இந்த வடிவத்தில் இருக்கும்: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

வாடிக்கையாளரின் Organization ID-ஐ இவ்வாறும் கண்டறியலாம்:
1. **Customers** பக்கத்திற்கு செல்லவும்
2. தொடர்புடைய வாடிக்கையாளருக்கு **Manage customer** கிளிக் செய்யவும்
3. URL-ஐ பாருங்கள் - `/customers/`-க்கு பிறகு வரும் எழுத்துக்கள் தான் Organization ID

### 3. உங்கள் Server ID பெறவும்

உங்கள் Server ID-ஐ கண்டறிய (domain செயல்பாடுகளுக்கு தேவை):

1. Enhance Control Panel-ல், **Servers** பகுதிக்கு செல்லவும்
2. உங்கள் WordPress நிறுவல் இயங்கும் server-ஐ கிளிக் செய்யவும்
3. Server ID (UUID வடிவம்) URL-ல் அல்லது server விவரங்களில் தெரியும்
4. மாற்றாக, servers-ஐ பட்டியலிட API-ஐ பயன்படுத்தலாம்:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

server ID இந்த UUID வடிவத்தில் இருக்கும்: `00000000-0000-0000-0000-000000000000`

### 4. உங்கள் API URL பெறவும்

உங்கள் API URL என்பது உங்கள் Enhance Control Panel URL-ல் `/api/` சேர்த்தது:

```
https://your-enhance-panel.com/api/
```

**முக்கியம்:** `/api/` path அவசியம். பொதுவான தவறுகள்:
- `/api/` இல்லாமல் domain மட்டும் பயன்படுத்துவது
- HTTPS-க்கு பதிலாக HTTP பயன்படுத்துவது (பாதுகாப்புக்கு HTTPS அவசியம்)

## Configuration

### தேவையான Constants

பின்வரும் constants-ஐ உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard மூலம் அமைப்பு

1. உங்கள் WordPress admin-ல், **Ultimate Multisite** > **Settings** செல்லவும்
2. **Integrations** tab-க்கு செல்லவும்
3. **Enhance Control Panel Integration** கண்டுபிடித்து **Configuration** கிளிக் செய்யவும்
4. wizard அமைப்பு வழியாக உங்களை வழிநடத்தும்:
   - **படி 1:** அறிமுகம் மற்றும் அம்சங்களின் கண்ணோட்டம்
   - **படி 2:** உங்கள் API credentials உள்ளிடவும் (Token, API URL, Server ID)
   - **படி 3:** இணைப்பை சோதிக்கவும்
   - **படி 4:** மதிப்பாய்வு செய்து செயல்படுத்தவும்

நீங்கள் தேர்வு செய்யலாம்:
- wizard தானாகவே உங்கள் `wp-config.php` கோப்பில் constants-ஐ செலுத்த அனுமதிக்கலாம்
- constant definitions-ஐ நகலெடுத்து கைமுறையாக சேர்க்கலாம்

## கூடுதல் WordPress Configuration

சமூக கருத்துக்களின் அடிப்படையில் ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), இந்த கூடுதல் அமைப்புகளை configure செய்ய வேண்டியிருக்கலாம்:

### .htaccess Configuration

domain mapping-ல் சிக்கல்கள் ஏற்பட்டால்:
1. அசல் Enhance `.htaccess` கோப்பை நீக்கவும்
2. அதை நிலையான WordPress Multisite `.htaccess` கோப்பால் மாற்றவும்

### Cookie Constants

mapped domains முழுவதும் சரியான cookie கையாளுதலை உறுதிசெய்ய இந்த constants-ஐ `wp-config.php`-ல் சேர்க்கவும்:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## இது எப்படி வேலை செய்கிறது

### Domain Mapped செய்யப்படும்போது

1. பயனர் Ultimate Multisite-ல் custom domain இணைக்கிறார் (அல்லது subdomain mode-ல் புதிய site உருவாக்கப்படுகிறது)
2. integration, Enhance-ன் API-க்கு POST request அனுப்புகிறது: `/servers/{server_id}/domains`
3. Enhance உங்கள் server configuration-ல் domain-ஐ சேர்க்கிறது
4. DNS உங்கள் server-க்கு resolve ஆகும்போது, Enhance தானாகவே LetsEncrypt மூலம் SSL சான்றிதழை வழங்குகிறது
5. domain HTTPS-உடன் செயலில் வருகிறது

### Domain நீக்கப்படும்போது

1. Ultimate Multisite-ல் domain mapping நீக்கப்படுகிறது
2. integration, domain-ன் ID-ஐ கண்டறிய Enhance-ஐ query செய்கிறது
3. DELETE request அனுப்பப்படுகிறது: `/servers/{server_id}/domains/{domain_id}`
4. Enhance உங்கள் server configuration-லிருந்து domain-ஐ அகற்றுகிறது

### DNS மற்றும் SSL சோதனை

Ultimate Multisite-ல் உள்ளமைந்த DNS மற்றும் SSL சோதனை உள்ளது:
- **Domain Mapping Settings**-ல் சோதனை இடைவெளியை configure செய்யலாம் (இயல்புநிலை: 300 வினாடிகள்/5 நிமிடங்கள்)
- domain-ஐ செயலில் என்று குறிக்கும் முன் DNS propagation சரிபார்க்கப்படும்
- SSL சான்றிதழ் செல்லுபடியாகுமா என்று தானாக சோதிக்கப்படும்
- Enhance SSL வழங்கலை தானாக கையாள்வதால், கைமுறை SSL configuration தேவையில்லை

## அமைப்பை சரிபார்த்தல்

### இணைப்பை சோதிக்கவும்

1. Integration Wizard-ல், **Test Connection** படியை பயன்படுத்தவும்
2. plugin உங்கள் server-ல் domains-ஐ பட்டியலிட முயற்சிக்கும்
3. வெற்றி செய்தி இவற்றை உறுதிப்படுத்துகிறது:
   - API credentials சரியானவை
   - API URL அணுகக்கூடியது
   - Server ID செல்லுபடியாகும்
   - அனுமதிகள் சரியாக அமைக்கப்பட்டுள்ளன

### Domain Mapped செய்த பிறகு

1. Ultimate Multisite-ல் சோதனை domain இணைக்கவும்
2. Ultimate Multisite logs-ஐ சோதிக்கவும் (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel-ல் domain சேர்க்கப்பட்டதை சரிபார்க்கவும்:
   - **Servers** > **Your Server** > **Domains** செல்லவும்
   - புதிய domain பட்டியலில் தெரிய வேண்டும்
4. DNS propagate ஆனதும், SSL தானாக வழங்கப்பட்டதை சரிபார்க்கவும்

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்

**பிழை: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` முடிவில் `/api/` உள்ளதா சரிபார்க்கவும்
- HTTP அல்ல, HTTPS பயன்படுத்துகிறீர்களா உறுதிசெய்யவும்
- உங்கள் WordPress server-லிருந்து Enhance panel அணுகக்கூடியதா சோதிக்கவும்
- இணைப்பை தடுக்கும் firewall விதிகள் இல்லை என்பதை சரிபார்க்கவும்

**பிழை: "Enhance API Token not found"**
- `wp-config.php`-ல் `WU_ENHANCE_API_TOKEN` வரையறுக்கப்பட்டுள்ளதா உறுதிசெய்யவும்
- Enhance-ல் token நீக்கப்படவில்லை அல்லது காலாவதியாகவில்லை என்பதை சரிபார்க்கவும்
- token மதிப்பில் எழுத்துப்பிழைகள் இல்லை என்பதை சோதிக்கவும்

**பிழை: "Server ID is not configured"**
- `wp-config.php`-ல் `WU_ENHANCE_SERVER_ID` வரையறுக்கப்பட்டுள்ளதா சரிபார்க்கவும்
- Server ID சரியான UUID வடிவத்தில் உள்ளதா உறுதிசெய்யவும்
- உங்கள் Enhance panel-ல் server இருப்பதை உறுதிப்படுத்தவும்

### Domain சேர்க்கப்படவில்லை

**logs-ஐ சோதிக்கவும்:**
1. **Ultimate Multisite** > **Logs** செல்லவும்
2. **integration-enhance** மூலம் வடிகட்டவும்
3. சிக்கலைக் குறிக்கும் பிழை செய்திகளைத் தேடவும்

**பொதுவான காரணங்கள்:**
- தவறான domain பெயர் வடிவம்
- Enhance-ல் domain ஏற்கனவே உள்ளது
- போதுமான API அனுமதிகள் இல்லை (token-க்கு System Administrator role உள்ளதா உறுதிசெய்யவும்)
- Server ID, Enhance-ல் உள்ள உண்மையான server-உடன் பொருந்தவில்லை

### SSL சான்றிதழ் சிக்கல்கள்

**SSL வழங்கப்படவில்லை:**
- DNS உங்கள் server-ன் IP முகவரியை சுட்டிக்காட்டுகிறதா சரிபார்க்கவும்
- domain சரியாக resolve ஆகிறதா சோதிக்கவும்: `nslookup yourdomain.com`
- SSL வழங்க Enhance-க்கு DNS resolve ஆக வேண்டும்
- DNS propagation-க்குப் பிறகு SSL வழங்கல் பொதுவாக 5-10 நிமிடங்கள் எடுக்கும்
- SSL-குறிப்பிட்ட பிழைகளுக்கு Enhance Control Panel logs-ஐ சோதிக்கவும்

**Enhance-ல் கைமுறை SSL சிக்கல் தீர்வு:**
1. **Servers** > **Your Server** > **Domains** செல்லவும்
2. உங்கள் domain-ஐ கண்டுபிடித்து அதன் SSL நிலையை சோதிக்கவும்
3. தேவைப்பட்டால் SSL வழங்கலை கைமுறையாக தூண்டலாம்

### DNS சோதனை இடைவெளி

domains அல்லது SSL சான்றிதழ்கள் செயல்பட அதிக நேரம் எடுத்தால்:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** செல்லவும்
2. **DNS Check Interval** அமைப்பைக் கண்டறியவும்
3. இயல்புநிலை 300 வினாடிகளிலிருந்து குறைந்த மதிப்புக்கு மாற்றவும் (குறைந்தபட்சம்: 10 வினாடிகள்)
4. **குறிப்பு:** குறைந்த இடைவெளிகள் அதிக சோதனைகளை அர்த்தப்படுத்துகின்றன, ஆனால் அதிக server load

### Authentication பிழைகள்

**HTTP 401/403 பிழைகள்:**
- Enhance-ல் உங்கள் API token-ஐ மீண்டும் உருவாக்கவும்
- token-க்கு **System Administrator** role உள்ளதா சரிபார்க்கவும்
- token காலாவதியாகவில்லை என்பதை சோதிக்கவும்
- சரியான Organization ID பயன்படுத்துகிறீர்களா உறுதிசெய்யவும் (URL-ல் பொதுவாக தேவையில்லை)

### Log பகுப்பாய்வு

விரிவான logging-ஐ செயல்படுத்தவும்:
```php
// மேம்படுத்தப்பட்ட debugging-க்கு wp-config.php-ல் சேர்க்கவும்
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

பின்னர் logs-ஐ இங்கு சோதிக்கவும்:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance-ன் admin interface-ல் கிடைக்கும்

## API Reference

### Authentication
அனைத்து API requests-ம் Bearer token authentication பயன்படுத்துகின்றன:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### பயன்படுத்தப்படும் பொதுவான Endpoints

**Servers பட்டியலிடல்:**
```
GET /servers
```

**Server-ல் Domains பட்டியலிடல்:**
```
GET /servers/{server_id}/domains
```

**Domain சேர்த்தல்:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain நீக்குதல்:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### முழு API ஆவணம்
முழுமையான API ஆவணம்: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## சிறந்த நடைமுறைகள்

### பாதுகாப்பு
- **API tokens-ஐ version control-ல் commit செய்யாதீர்கள்**
- Git-லிருந்து விலக்கப்பட வேண்டிய `wp-config.php`-ல் tokens-ஐ சேமிக்கவும்
- தகுந்த அனுமதிகளுடன் tokens பயன்படுத்தவும் (முழு integration-க்கு System Administrator)
- production சூழல்களுக்கு token காலாவதி தேதிகள் அமைக்கவும்
- tokens-ஐ அவ்வப்போது மாற்றவும்

### செயல்திறன்
- அதிகப்படியான API calls-ஐ தவிர்க்க இயல்புநிலை DNS சோதனை இடைவெளியை (300 வினாடிகள்) பயன்படுத்தவும்
- பெரிய அளவிலான domain செயல்பாடுகளை இயக்கும்போது Enhance server வளங்களை கண்காணிக்கவும்
- ஒரே நேரத்தில் பல domains இணைக்கும்போது domain சேர்க்கைகளை படிப்படியாக செய்ய பரிசீலிக்கவும்

### கண்காணிப்பு
- integration பிழைகளுக்கு Ultimate Multisite logs-ஐ தொடர்ந்து சோதிக்கவும்
- தோல்வியுற்ற domain சேர்க்கைகளுக்கு கண்காணிப்பை அமைக்கவும்
- SSL சான்றிதழ்கள் சரியாக வழங்கப்படுகிறதா சரிபார்க்கவும்
- Enhance server திறன் மற்றும் domain வரம்புகளை கவனியுங்கள்

## கூடுதல் ஆதாரங்கள்

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki பக்கம் "How to Configure Domain Mapping v2" பார்க்கவும்

## ஆதரவு

சிக்கல்கள் எதிர்கொண்டால்:
1. மேலே உள்ள சிக்கல் தீர்வு பகுதியை சோதிக்கவும்
2. Ultimate Multisite logs-ஐ மதிப்பாய்வு செய்யவும்
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ஆலோசிக்கவும்
4. panel-குறிப்பிட்ட சிக்கல்களுக்கு Enhance support-ஐ தொடர்பு கொள்ளவும்
5. விரிவான பிழை logs-உடன் சமூக உதவிக்காக புதிய discussion உருவாக்கவும்

## குறிப்புகள்

- இந்த integration domain aliases-ஐ மட்டுமே கையாளுகிறது; Enhance SSL-ஐ தானாக நிர்வகிக்கிறது
- integration custom domain mappings மற்றும் subdomain-அடிப்படையிலான sites இரண்டையும் ஆதரிக்கிறது
- தானியங்கு www subdomain உருவாக்கத்தை Domain Mapping settings-ல் configure செய்யலாம்
- Enhance தற்போது Apache configurations-ஐ ஆதரிக்கிறது (LiteSpeed Enterprise கிடைக்கும்)
- Ultimate Multisite-லிருந்து domain அகற்றுவது Enhance-லிருந்து domain-ஐ அகற்றும், ஆனால் தொடர்புடைய SSL சான்றிதழ்கள் உடனடியாக நீக்கப்படாமல் போகலாம்
