---
title: Hestia கட்டுப்பாட்டு பேனல் ஒருங்கிணைப்பு
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ஒருங்கிணைப்பு

உங்கள் நெட்வொர்க்கில் map செய்யப்பட்ட domains தானாகவே Hestia-வில் Web Domain Aliases ஆக சேர்க்கப்படவும் (மற்றும் நீக்கப்படவும்) Ultimate Multisite Hestia ஒருங்கிணைப்பை எவ்வாறு கட்டமைப்பது என்பதை இந்த வழிகாட்டி விளக்குகிறது.

- Hestia CLI குறிப்பு: v-add-web-domain-alias / v-delete-web-domain-alias
- அதிகாரப்பூர்வ REST API ஆவணம்: https://hestiacp.com/docs/server-administration/rest-api.html

## இது என்ன செய்கிறது
- Ultimate Multisite-ல் ஒரு domain map செய்யப்படும்போது, இந்த ஒருங்கிணைப்பு Hestia API-ஐ அழைத்து பின்வருவதை இயக்குகிறது:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ஒரு domain mapping நீக்கப்படும்போது, இதை இயக்குகிறது:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping அமைப்புகளில் உள்ள "Auto-create www subdomain" விருப்பத்தின் அடிப்படையில் `www.` alias-ஐ சேர்க்கவும்/நீக்கவும் செய்கிறது.

## முன்தேவைகள்
- உங்கள் WordPress நிறுவலை ஏற்கனவே சுட்டிக்காட்டும் ஒரு Hestia Web Domain இருக்க வேண்டும். இந்த ஒருங்கிணைப்பு aliases-ஐ இந்த அடிப்படை domain-உடன் இணைக்கும்.
- Hestia API அணுகல் இயக்கப்பட்டிருக்க வேண்டும். password அல்லது API hash/token பயன்படுத்தி அங்கீகரிக்கலாம்.

API அணுகலை இயக்குவது மற்றும் அங்கீகரிப்பு விவரங்களுக்கு Hestia-வின் REST API ஆவணங்களைப் பார்க்கவும்:
https://hestiacp.com/docs/server-administration/rest-api.html

## கட்டமைப்பு (Wizard → Integrations → Hestia)
பின்வரும் மதிப்புகளை வழங்கவும்:

- `WU_HESTIA_API_URL` (கட்டாயம்)
  - அடிப்படை API endpoint, பொதுவாக `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (கட்டாயம்)
  - API கட்டளைகளுக்குப் பயன்படுத்தப்படும் Hestia பயனர் (பொதுவாக `admin`).
- `WU_HESTIA_API_PASSWORD` அல்லது `WU_HESTIA_API_HASH` (குறைந்தது ஒன்று)
  - ஒரு அங்கீகரிப்பு முறையைத் தேர்வு செய்யவும்: password அல்லது API hash/token.
- `WU_HESTIA_ACCOUNT` (கட்டாயம்)
  - Hestia-வில் உள்ள Web Domain-ன் கணக்கு (உரிமையாளர்); இது CLI-க்கான முதல் argument.
- `WU_HESTIA_WEB_DOMAIN` (கட்டாயம்)
  - உங்கள் WordPress-ஐ வழங்கும் தற்போதுள்ள Hestia Web Domain (aliases இங்கே இணைக்கப்படும்).
- `WU_HESTIA_RESTART` (விருப்பத்தேர்வு; இயல்புநிலை `yes`)
  - alias மாற்றங்களுக்குப் பிறகு சேவைகளை restart/reload செய்யவா என்பது.

இந்த constants-ஐ `wp-config.php`-ல் wizard மூலம் செருக விடலாம், அல்லது கைமுறையாக வரையறுக்கலாம்.

## அமைப்பைச் சரிபார்த்தல்
- wizard-ன் "Testing" படியில், plugin API மூலம் `v-list-web-domains <WU_HESTIA_ACCOUNT> json` என்பதை அழைக்கிறது. வெற்றிகரமான பதில் இணைப்பு மற்றும் அங்கீகரிப்பை உறுதிப்படுத்துகிறது.
- ஒரு domain-ஐ map செய்த பிறகு, Hestia-வில் சரிபார்க்கவும்: Web > அடிப்படை domain > Aliases. புதிய alias சேர்க்கப்பட்டிருப்பதைக் காணலாம்.

## குறிப்புகள் & உதவிக்குறிப்புகள்
- `WU_HESTIA_WEB_DOMAIN` ஏற்கனவே இருக்க வேண்டும் மற்றும் `WU_HESTIA_ACCOUNT`-க்கு சொந்தமானதாக இருக்க வேண்டும்.
- SSL தேவைப்பட்டால், சான்றிதழ்களை Hestia-வில் நிர்வகிக்கவும். இந்த ஒருங்கிணைப்பு தற்போது aliases-ஐ மட்டுமே கையாளுகிறது.
- உங்கள் Domain Mapping "www subdomain" அமைப்பின் அடிப்படையில் plugin `www.<domain>`-ஐயும் சேர்க்கலாம்/நீக்கலாம்.

## எடுத்துக்காட்டு API அழைப்பு (cURL)
கீழே ஒரு கருத்தியல் எடுத்துக்காட்டு உள்ளது (உங்கள் சூழலுக்கு ஏற்றவாறு மாற்றவும்). சரியான parameters-க்கு அதிகாரப்பூர்வ ஆவணத்தைப் பார்க்கவும்.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (அல்லது &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (சேர்க்க வேண்டிய alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

நீக்குவதற்கு, `cmd=v-delete-web-domain-alias` மற்றும் அதே args-ஐ பயன்படுத்தவும்.

## சிக்கல் தீர்வு
- API-யிலிருந்து HTTP பிழை: `WU_HESTIA_API_URL` அணுகக்கூடியதா மற்றும் `/api` உள்ளடங்கியதா என்பதைச் சரிபார்க்கவும்.
- அங்கீகரிப்பு பிழைகள்: `WU_HESTIA_API_USER` மற்றும் `WU_HESTIA_API_PASSWORD` அல்லது `WU_HESTIA_API_HASH`-ஐ உறுதிப்படுத்தவும்.
- logs-ல் "Missing account/base domain": `WU_HESTIA_ACCOUNT` மற்றும் `WU_HESTIA_WEB_DOMAIN` அமைக்கப்பட்டு Hestia-வில் செல்லுபடியாகும் என்பதை உறுதிசெய்யவும்.

## குறிப்புகள்
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI குறிப்பு (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
