---
title: Cloudways ஒருங்கிணைப்பு
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways ஒருங்கிணைப்பு

## கண்ணோட்டம்
Cloudways என்பது நிர்வகிக்கப்படும் cloud hosting தளம். இது DigitalOcean, AWS, Google Cloud போன்ற பல cloud வழங்குநர்களில் WordPress தளங்களை அமைக்க உதவுகிறது. இந்த ஒருங்கிணைப்பு Ultimate Multisite மற்றும் Cloudways இடையே தானியங்கி domain ஒத்திசைவு மற்றும் SSL சான்றிதழ் மேலாண்மையைச் செயல்படுத்துகிறது.

## அம்சங்கள்
- தானியங்கி domain ஒத்திசைவு
- SSL சான்றிதழ் மேலாண்மை
- கூடுதல் domains ஆதரவு
- SSL சான்றிதழ்களுக்கான DNS சரிபார்ப்பு

## தேவைகள்
பின்வரும் constants உங்கள் `wp-config.php` கோப்பில் வரையறுக்கப்பட்டிருக்க வேண்டும்:

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

## அமைப்பு வழிமுறைகள்

### 1. உங்கள் Cloudways API சான்றுகளைப் பெறுங்கள்

1. உங்கள் Cloudways dashboard-இல் உள்நுழையுங்கள்
2. "Account" > "API Keys" என்பதற்கு செல்லுங்கள்
3. ஏற்கனவே இல்லையெனில் API key ஒன்றை உருவாக்குங்கள்
4. உங்கள் email மற்றும் API key-ஐ நகலெடுக்குங்கள்

### 2. உங்கள் Server மற்றும் Application IDs-ஐப் பெறுங்கள்

1. உங்கள் Cloudways dashboard-இல், "Servers" என்பதற்கு செல்லுங்கள்
2. உங்கள் WordPress multisite host செய்யப்பட்டுள்ள server-ஐத் தேர்ந்தெடுக்குங்கள்
3. Server ID இந்த URL-இல் தெரியும்: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" என்பதற்கு சென்று உங்கள் WordPress application-ஐத் தேர்ந்தெடுக்குங்கள்
5. App ID இந்த URL-இல் தெரியும்: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-இல் Constants சேர்க்கவும்

பின்வரும் constants-ஐ உங்கள் `wp-config.php` கோப்பில் சேர்க்கவும்:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

உங்கள் multisite network-க்கு வெளியே உள்ள கூடுதல் **வெளிப்புற** domains எப்போதும் Cloudways aliases பட்டியலில் இருக்க வேண்டும் என்றால்:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning உங்கள் சொந்த network-இன் wildcard-ஐ சேர்க்க வேண்டாம்
`WU_CLOUDWAYS_EXTRA_DOMAINS`-இல் `*.your-network.com`-ஐ (அல்லது உங்கள் சொந்த network-இன் எந்த subdomain pattern-ஐயும்) சேர்க்க **வேண்டாம்**. இது ஏன் ஒவ்வொரு tenant-க்கும் தனி SSL சான்றிதழ்கள் வழங்கப்படுவதைத் தடுக்கிறது என்பதை கீழே உள்ள [முக்கியம் — wildcard SSL சிக்கல்](#important--wildcard-ssl-pitfall) பகுதியில் பார்க்கவும்.
:::

### 4. ஒருங்கிணைப்பை இயக்கவும்

1. உங்கள் WordPress admin-இல், Ultimate Multisite > Settings என்பதற்கு செல்லுங்கள்
2. "Domain Mapping" tab-க்கு செல்லுங்கள்
3. "Host Integrations" வரை கீழே செல்லுங்கள்
4. Cloudways ஒருங்கிணைப்பை இயக்குங்கள்
5. "Save Changes" என்பதைக் கிளிக் செய்யுங்கள்

## இது எப்படி செயல்படுகிறது

### Domain ஒத்திசைவு

Ultimate Multisite-இல் ஒரு domain map செய்யப்படும் போது:

1. ஒருங்கிணைப்பு தற்போது map செய்யப்பட்டுள்ள எல்லா domains-ஐயும் பெறுகிறது
2. அது புதிய domain-ஐ பட்டியலில் சேர்க்கிறது (தேவையானால் www பதிப்புடன்)
3. முழு பட்டியலையும் API மூலம் Cloudways-க்கு அனுப்புகிறது
4. Cloudways உங்கள் application-க்கான domain aliases-ஐ புதுப்பிக்கிறது

குறிப்பு: Cloudways API ஒவ்வொரு முறையும் domains-ன் முழு பட்டியலையும் அனுப்ப வேண்டும்; தனித்தனி domains-ஐ மட்டும் சேர்ப்பதோ நீக்குவதோ போதாது.

### SSL சான்றிதழ் மேலாண்மை

Domains ஒத்திசைக்கப்பட்ட பிறகு:

1. உங்கள் server-ஐ நோக்கி valid DNS records உள்ள domains எவை என்பதை ஒருங்கிணைப்பு சரிபார்க்கிறது
2. அந்த domains-க்கான Let's Encrypt SSL சான்றிதழ்களை நிறுவ Cloudways-க்கு கோரிக்கை அனுப்புகிறது
3. SSL சான்றிதழ் வழங்கல் மற்றும் நிறுவலை Cloudways கையாளுகிறது

ஒருங்கிணைப்பு எப்போதும் Cloudways-இலிருந்து **standard** (wildcard அல்லாத) Let's Encrypt சான்றிதழ்களையே கோருகிறது. `WU_CLOUDWAYS_EXTRA_DOMAINS`-இல் wildcard pattern கொடுக்கப்பட்டால், SSL கோரிக்கைக்கு முன் தொடக்கத்தில் உள்ள `*.` நீக்கப்படும் — wildcard தானாக இந்த ஒருங்கிணைப்பால் ஒருபோதும் நிறுவப்படாது. Cloudways-இல் wildcard சான்றிதழைப் பயன்படுத்த வேண்டுமெனில் அதை கைமுறையாக நிறுவ வேண்டும். ஆனால் அப்படிச் செய்வது map செய்யப்பட்ட custom domains-க்கான ஒவ்வொரு domain-க்கும் தனியான Let's Encrypt வழங்கலைத் தடுக்கிறது (கீழே உள்ள சிக்கலைப் பார்க்கவும்).

## கூடுதல் Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant, Cloudways application-இன் aliases பட்டியலில் எப்போதும் வைத்திருக்க வேண்டிய கூடுதல் **வெளிப்புற** domains-ஐ குறிப்பிட உதவுகிறது. இதைப் பயன்படுத்த வேண்டியவை:

- Ultimate Multisite மூலம் நிர்வகிக்கப்படாத வெளிப்புற domains (எ.கா. அதே Cloudways application-ஐப் பகிரும் தனியான marketing தளம்)
- application aliases பட்டியலில் வைத்திருக்க விரும்பும் parked அல்லது staging domains

உங்கள் சொந்த network-இன் subdomain wildcard-க்கு இந்த constant-ஐப் பயன்படுத்த **வேண்டாம்**
(எ.கா. `*.your-network.com`). கீழே உள்ள wildcard SSL சிக்கலைப் பார்க்கவும்.

## முக்கியம் — Wildcard SSL சிக்கல்

Cloudways-ன் default setup-ஐப் பின்பற்றும் போது பொதுவாக ஏற்படும் தவறு,
`*.your-network.com` போன்ற wildcard-ஐ `WU_CLOUDWAYS_EXTRA_DOMAINS`-இல் சேர்ப்பது, அல்லது அந்த wildcard-க்காக Cloudways wildcard SSL சான்றிதழை கைமுறையாக நிறுவுவது.

**இதைச் செய்தால், Ultimate Multisite map செய்யும் ஒவ்வொரு tenant-இன் custom domains-க்கான Let's Encrypt சான்றிதழ்களை வழங்க Cloudways மறுக்கும்.** Cloudways ஒவ்வொரு முறையும் application-இல் உள்ள active SSL சான்றிதழை மாற்றுகிறது. application-இல் ஏற்கனவே உள்ள wildcard சான்றிதழ், ஒருங்கிணைப்பு சார்ந்திருக்கும் ஒவ்வொரு domain-க்குமான Let's Encrypt வழங்கலைத் தடுக்கிறது.

### Ultimate Multisite network-க்கான பரிந்துரைக்கப்பட்ட Cloudways SSL அமைப்பு

1. Cloudways application-இன் **SSL Certificate** tab-இல், `your-network.com` மற்றும் `www.your-network.com` மட்டும் உள்ளடக்கும் **standard
   Let's Encrypt certificate**-ஐ நிறுவுங்கள்
   — wildcard **அல்ல**.
2. `WU_CLOUDWAYS_EXTRA_DOMAINS`-இல் `*.your-network.com`-ஐ (அல்லது உங்கள் சொந்த network-இன் எந்த subdomain pattern-ஐயும்) சேர்க்க **வேண்டாம்**. அந்த constant-ஐ **வெளிப்புற** domains-க்கு மட்டும் ஒதுக்குங்கள்.
3. ஒவ்வொரு tenant-க்கான subdomain wildcard-ஐ **DNS** மட்டத்தில் மட்டும் உருவாக்குங்கள் (`*.your-network.com`-க்கு உங்கள் Cloudways server IP-ஐ நோக்கும் `A` record) இதனால் subsites resolve ஆகும். தனித்தனியாக map செய்யப்பட்ட custom domains-க்கான SSL பின்னர் ஒருங்கிணைப்பால் Let's Encrypt மூலம் தானாக வழங்கப்படும்.

உங்கள் tenants-இன் தனிப்பயன் domains SSL இல்லாமல் சிக்கிக் கொண்டிருந்தால், Cloudways SSL தாவலைச் சரிபார்க்கவும். அங்கே ஒரு
wildcard certificate செயல்பாட்டில் இருந்தால், அதை நீக்கி, முதன்மை network domain-க்கு மட்டும் ஒரு நிலையான Let's Encrypt
certificate-ஐ மீண்டும் வழங்கி, `WU_CLOUDWAYS_EXTRA_DOMAINS` இலிருந்து wildcard பதிவுகளை நீக்கவும். பின்னர் domain mapping-ஐ மீண்டும் தூண்டவும் (அல்லது அடுத்ததற்காக காத்திருக்கவும்);
அப்போது integration மீண்டும் ஒவ்வொரு domain-க்கும் certificate-களை வழங்கத் தொடங்கும்.

## சிக்கல் தீர்வு

### API இணைப்பு சிக்கல்கள்
- உங்கள் email மற்றும் API key சரியாக உள்ளனவா என்று சரிபார்க்கவும்
- உங்கள் server மற்றும் application IDs சரியாக உள்ளனவா என்று சரிபார்க்கவும்
- உங்கள் Cloudways account-க்கு தேவையான அனுமதிகள் உள்ளனவா என்பதை உறுதிசெய்யவும்

### SSL Certificate சிக்கல்கள்
- SSL certificates வழங்குவதற்கு முன், domains உங்கள் server-ஐ நோக்கிச் செல்லும் செல்லுபடியாகும் DNS records-களை கொண்டிருக்க வேண்டும் என்று Cloudways தேவைப்படுத்துகிறது
- SSL certificates கோருவதற்கு முன், integration DNS records-களைச் சரிபார்க்கிறது
- SSL certificates வழங்கப்படவில்லை என்றால், உங்கள் domains உங்கள் server-இன் IP address-ஐ சரியாக நோக்கிச் செல்கிறதா என்று சரிபார்க்கவும்
- **ஒவ்வொரு tenant-இன் தனிப்பயன் domains SSL இல்லாமல் சிக்கியுள்ளனவா?** Cloudways application-இன் SSL Certificate தாவலைச் சரிபார்க்கவும். wildcard certificate (கைமுறையாக நிறுவப்பட்டது, அல்லது `*.your-network.com`-ஐ உள்ளடக்கியது) செயல்பாட்டில் இருந்தால், தனித்தனியாக map செய்யப்பட்ட custom domains-க்கு Let's Encrypt certificates-களை Cloudways வழங்காது. முதன்மை network domain (`your-network.com`, `www.your-network.com`) மட்டும் உள்ளடக்கும் நிலையான Let's Encrypt certificate-ஆல் அதை மாற்றி, `WU_CLOUDWAYS_EXTRA_DOMAINS` இலிருந்து wildcard பதிவுகளை நீக்கவும். பின்னர் domain mapping-ஐ மீண்டும் தூண்டவும் (அல்லது அடுத்ததற்காக காத்திருக்கவும்); அப்போது integration ஒவ்வொரு domain-க்கும் certificates-களை கோரும்.

### Domain சேர்க்கப்படவில்லை
- எந்தவொரு error messages உள்ளதா என்று Ultimate Multisite logs-ஐச் சரிபார்க்கவும்
- domain ஏற்கனவே Cloudways-க்கு சேர்க்கப்படவில்லை என்பதைச் சரிபார்க்கவும்
- நீங்கள் சேர்க்கும் domains எண்ணிக்கையை உங்கள் Cloudways plan ஆதரிக்கிறதா என்பதை உறுதிசெய்யவும்
