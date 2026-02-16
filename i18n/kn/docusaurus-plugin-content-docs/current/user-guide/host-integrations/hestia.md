---
title: Hestia ನಿಯಂತ್ರಣ ಫಲಕ ಏಕೀಕರಣ
sidebar_position: 7
_i18n_hash: 252519613f4d84d44875a5b2090e4bd6
---
# Hestia Control Panel ಸಂಯೋಜನೆ

ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್‌ಗಳನ್ನು Hestia ನಲ್ಲಿ Web Domain Aliases ಆಗಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೇರಿಸಲು (ಮತ್ತು ತೆಗೆದುಹಾಕಲು) Ultimate Multisite Hestia ಸಂಯೋಜನೆಯನ್ನು ಹೇಗೆ ಕಾನ್ಫಿಗರ್ ಮಾಡುವುದು ಎಂದು ಈ ಮಾರ್ಗದರ್ಶಿ ವಿವರಿಸುತ್ತದೆ.

- Hestia CLI ಉಲ್ಲೇಖ: v-add-web-domain-alias / v-delete-web-domain-alias
- ಅಧಿಕೃತ REST API ದಾಖಲೆ: https://hestiacp.com/docs/server-administration/rest-api.html

## ಇದು ಏನು ಮಾಡುತ್ತದೆ
- Ultimate Multisite ನಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಆದಾಗ, ಸಂಯೋಜನೆಯು Hestia API ಅನ್ನು ಕರೆದು ಈ ಕೆಳಗಿನದನ್ನು ರನ್ ಮಾಡುತ್ತದೆ:
  - `v-add-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ತೆಗೆದುಹಾಕಿದಾಗ, ಇದು ರನ್ ಆಗುತ್ತದೆ:
  - `v-delete-web-domain-alias <USER> <DOMAIN> <ALIAS> [RESTART]`
- Domain Mapping ಸೆಟ್ಟಿಂಗ್ಸ್‌ನಲ್ಲಿರುವ "Auto-create www subdomain" ಸೆಟ್ಟಿಂಗ್ ಪ್ರಕಾರ `www.` alias ಅನ್ನು ಐಚ್ಛಿಕವಾಗಿ ಸೇರಿಸುತ್ತದೆ/ತೆಗೆದುಹಾಕುತ್ತದೆ.

## ಪೂರ್ವಾಪೇಕ್ಷಿತಗಳು
- ನಿಮ್ಮ WordPress ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗೆ ಈಗಾಗಲೇ ಪಾಯಿಂಟ್ ಆಗಿರುವ Hestia Web Domain. ಸಂಯೋಜನೆಯು ಈ ಬೇಸ್ ಡೊಮೇನ್‌ಗೆ aliases ಅನ್ನು ಲಗತ್ತಿಸುತ್ತದೆ.
- Hestia API ಆಕ್ಸೆಸ್ ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ. ನೀವು password ಅಥವಾ API hash/token ಬಳಸಿ ದೃಢೀಕರಿಸಬಹುದು.

API ಆಕ್ಸೆಸ್ ಸಕ್ರಿಯಗೊಳಿಸುವುದು ಮತ್ತು ದೃಢೀಕರಣ ವಿವರಗಳಿಗಾಗಿ Hestia ನ REST API ದಾಖಲೆಗಳನ್ನು ನೋಡಿ:
https://hestiacp.com/docs/server-administration/rest-api.html

## ಕಾನ್ಫಿಗರೇಶನ್ (Wizard → Integrations → Hestia)
ಈ ಕೆಳಗಿನ ಮೌಲ್ಯಗಳನ್ನು ಒದಗಿಸಿ:

- `WU_HESTIA_API_URL` (ಅಗತ್ಯ)
  - ಬೇಸ್ API endpoint, ಸಾಮಾನ್ಯವಾಗಿ `https://your-hestia-host:8083/api/`.
- `WU_HESTIA_API_USER` (ಅಗತ್ಯ)
  - API ಕಮಾಂಡ್‌ಗಳಿಗೆ ಬಳಸುವ Hestia ಯೂಸರ್ (ಸಾಮಾನ್ಯವಾಗಿ `admin`).
- `WU_HESTIA_API_PASSWORD` ಅಥವಾ `WU_HESTIA_API_HASH` (ಕನಿಷ್ಠ ಒಂದು)
  - ಒಂದು ದೃಢೀಕರಣ ವಿಧಾನವನ್ನು ಆಯ್ಕೆಮಾಡಿ: password ಅಥವಾ API hash/token.
- `WU_HESTIA_ACCOUNT` (ಅಗತ್ಯ)
  - Hestia ನಲ್ಲಿ Web Domain ನ ಖಾತೆ (ಮಾಲೀಕ); ಇದು CLI ಗೆ ಮೊದಲ argument.
- `WU_HESTIA_WEB_DOMAIN` (ಅಗತ್ಯ)
  - ನಿಮ್ಮ WordPress ಅನ್ನು ಸರ್ವ್ ಮಾಡುವ ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ Hestia Web Domain (aliases ಇಲ್ಲಿ ಲಗತ್ತಿಸಲಾಗುತ್ತದೆ).
- `WU_HESTIA_RESTART` (ಐಚ್ಛಿಕ; ಡೀಫಾಲ್ಟ್ `yes`)
  - alias ಬದಲಾವಣೆಗಳ ನಂತರ ಸರ್ವೀಸ್‌ಗಳನ್ನು ರೀಸ್ಟಾರ್ಟ್/ರಿಲೋಡ್ ಮಾಡಬೇಕೇ.

ನೀವು wizard ಮೂಲಕ ಈ constants ಅನ್ನು `wp-config.php` ಗೆ ಸೇರಿಸಬಹುದು, ಅಥವಾ ಅವುಗಳನ್ನು ಹಸ್ತಚಾಲಿತವಾಗಿ ಡಿಫೈನ್ ಮಾಡಬಹುದು.

## ಸೆಟಪ್ ಪರಿಶೀಲನೆ
- wizard ನ "Testing" ಹಂತದಲ್ಲಿ, plugin ಆನ್ API ಮೂಲಕ `v-list-web-domains <WU_HESTIA_ACCOUNT> json` ಅನ್ನು ಕರೆಯುತ್ತದೆ. ಯಶಸ್ವಿ ಪ್ರತಿಕ್ರಿಯೆಯು ಸಂಪರ್ಕ ಮತ್ತು ದೃಢೀಕರಣವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ.
- ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿದ ನಂತರ, Hestia ನಲ್ಲಿ ಪರಿಶೀಲಿಸಿ: Web > ಬೇಸ್ ಡೊಮೇನ್ > Aliases. ಹೊಸ alias ಸೇರಿಸಲಾಗಿದೆಯೇ ಎಂದು ನೋಡಬೇಕು.

## ಟಿಪ್ಪಣಿಗಳು ಮತ್ತು ಸಲಹೆಗಳು
- `WU_HESTIA_WEB_DOMAIN` ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಮತ್ತು `WU_HESTIA_ACCOUNT` ನ ಮಾಲೀಕತ್ವದಲ್ಲಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- SSL ಅಗತ್ಯವಿದ್ದರೆ, Hestia ನಲ್ಲಿ certificates ನಿರ್ವಹಿಸಿ. ಈ ಸಂಯೋಜನೆಯು ಪ್ರಸ್ತುತ aliases ಅನ್ನು ಮಾತ್ರ ನಿರ್ವಹಿಸುತ್ತದೆ.
- ನಿಮ್ಮ Domain Mapping "www subdomain" ಸೆಟ್ಟಿಂಗ್ ಪ್ರಕಾರ plugin `www.<domain>` ಅನ್ನು ಸೇರಿಸಬಹುದು/ತೆಗೆದುಹಾಕಬಹುದು.

## API ಕರೆಯ ಉದಾಹರಣೆ (cURL)
ಕೆಳಗೆ ಒಂದು ಪರಿಕಲ್ಪನಾತ್ಮಕ ಉದಾಹರಣೆ ಇದೆ (ನಿಮ್ಮ ಪರಿಸರಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಿಸಿ). ನಿಖರವಾದ parameters ಗಾಗಿ ಅಧಿಕೃತ ದಾಖಲೆಯನ್ನು ನೋಡಿ.

```
POST https://your-hestia-host:8083/api/
Content-Type: application/x-www-form-urlencoded

cmd=v-add-web-domain-alias
&user=admin
&password=YOUR_API_PASSWORD  (ಅಥವಾ &hash=YOUR_API_HASH)
&arg1=admin                  (WU_HESTIA_ACCOUNT)
&arg2=network.example.com    (WU_HESTIA_WEB_DOMAIN)
&arg3=customer-domain.com    (ಸೇರಿಸಬೇಕಾದ alias)
&arg4=yes                    (WU_HESTIA_RESTART)
&returncode=yes
```

ಅಳಿಸಲು, `cmd=v-delete-web-domain-alias` ಮತ್ತು ಅದೇ args ಬಳಸಿ.

## ಸಮಸ್ಯೆ ನಿವಾರಣೆ
- API ಯಿಂದ HTTP ದೋಷ: `WU_HESTIA_API_URL` ತಲುಪಬಹುದಾಗಿದೆಯೇ ಮತ್ತು `/api` ಒಳಗೊಂಡಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.
- Auth ದೋಷಗಳು: `WU_HESTIA_API_USER` ಮತ್ತು `WU_HESTIA_API_PASSWORD` ಅಥವಾ `WU_HESTIA_API_HASH` ಅನ್ನು ಖಚಿತಪಡಿಸಿ.
- logs ನಲ್ಲಿ "Missing account/base domain": `WU_HESTIA_ACCOUNT` ಮತ್ತು `WU_HESTIA_WEB_DOMAIN` ಸೆಟ್ ಆಗಿದೆ ಮತ್ತು Hestia ನಲ್ಲಿ ಮಾನ್ಯವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

## ಉಲ್ಲೇಖಗಳು
- Hestia REST API: https://hestiacp.com/docs/server-administration/rest-api.html
- Hestia CLI ಉಲ್ಲೇಖ (Aliases): https://hestiacp.com/docs/reference/cli.html#v-add-web-domain-alias
