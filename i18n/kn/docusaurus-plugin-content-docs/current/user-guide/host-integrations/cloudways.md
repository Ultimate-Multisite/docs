---
title: Cloudways ಏಕೀಕರಣ
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ಅನುಸಂಧಾನ

## ಅವಲೋಕನ
Cloudways ಒಂದು managed cloud hosting ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಆಗಿದ್ದು, DigitalOcean, AWS, Google Cloud ಮತ್ತು ಇತರ ಹಲವು cloud providers ಮೂಲಕ WordPress ಸೈಟ್‌ಗಳನ್ನು deploy ಮಾಡಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ. ಈ ಅನುಸಂಧಾನವು Ultimate Multisite ಮತ್ತು Cloudways ನಡುವೆ ಸ್ವಯಂಚಾಲಿತ domain syncing ಮತ್ತು SSL certificate ನಿರ್ವಹಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.

## ವೈಶಿಷ್ಟ್ಯಗಳು
- ಸ್ವಯಂಚಾಲಿತ domain syncing
- SSL certificate ನಿರ್ವಹಣೆ
- ಹೆಚ್ಚುವರಿ domains ಗೆ ಬೆಂಬಲ
- SSL certificates ಗಾಗಿ DNS ಮಾನ್ಯತೆ ಪರಿಶೀಲನೆ

## ಅಗತ್ಯತೆಗಳು
ಕೆಳಗಿನ constants ಅನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ನಿರ್ವಚಿಸಬೇಕು:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ಐಚ್ಛಿಕವಾಗಿ, ನೀವು ಇದನ್ನು ಸಹ ನಿರ್ವಚಿಸಬಹುದು:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## ಸೆಟಪ್ ಸೂಚನೆಗಳು

### 1. ನಿಮ್ಮ Cloudways API ರುಜುವಾತುಗಳನ್ನು ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ Cloudways dashboard ಗೆ ಲಾಗಿನ್ ಆಗಿ
2. "Account" > "API Keys" ಗೆ ಹೋಗಿ
3. ನಿಮ್ಮ ಬಳಿ ಈಗಾಗಲೇ API key ಇಲ್ಲದಿದ್ದರೆ ಹೊಸದನ್ನು ರಚಿಸಿ
4. ನಿಮ್ಮ email ಮತ್ತು API key ಅನ್ನು ನಕಲಿಸಿ

### 2. ನಿಮ್ಮ Server ಮತ್ತು Application IDs ಅನ್ನು ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ Cloudways dashboard ನಲ್ಲಿ, "Servers" ಗೆ ಹೋಗಿ
2. ನಿಮ್ಮ WordPress multisite ಹೋಸ್ಟ್ ಆಗಿರುವ server ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ
3. Server ID URL ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" ಗೆ ಹೋಗಿ ಮತ್ತು ನಿಮ್ಮ WordPress application ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ
5. App ID URL ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php ಗೆ Constants ಸೇರಿಸಿ

ಕೆಳಗಿನ constants ಅನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಸೇರಿಸಿ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ಯಾವಾಗಲೂ ಸೇರಿಸಬೇಕಾದ ಹೆಚ್ಚುವರಿ domains ಇದ್ದರೆ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. ಅನುಸಂಧಾನವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ

1. ನಿಮ್ಮ WordPress admin ನಲ್ಲಿ, Ultimate Multisite > Settings ಗೆ ಹೋಗಿ
2. "Domain Mapping" ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. "Host Integrations" ಗೆ ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ
4. Cloudways ಅನುಸಂಧಾನವನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ
5. "Save Changes" ಕ್ಲಿಕ್ ಮಾಡಿ

## ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ

### Domain Syncing

Ultimate Multisite ನಲ್ಲಿ ಒಂದು domain map ಆದಾಗ:

1. ಅನುಸಂಧಾನವು ಪ್ರಸ್ತುತ map ಆಗಿರುವ ಎಲ್ಲಾ domains ಅನ್ನು ಪಡೆಯುತ್ತದೆ
2. ಹೊಸ domain ಅನ್ನು ಪಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತದೆ (ಅನ್ವಯವಾದರೆ www ಆವೃತ್ತಿಯೊಂದಿಗೆ)
3. API ಮೂಲಕ ಸಂಪೂರ್ಣ ಪಟ್ಟಿಯನ್ನು Cloudways ಗೆ ಕಳುಹಿಸುತ್ತದೆ
4. Cloudways ನಿಮ್ಮ application ಗಾಗಿ domain aliases ಅನ್ನು ನವೀಕರಿಸುತ್ತದೆ

ಗಮನಿಸಿ: Cloudways API ಪ್ರತಿ ಬಾರಿ ಸಂಪೂರ್ಣ domains ಪಟ್ಟಿಯನ್ನು ಕಳುಹಿಸುವುದು ಅಗತ್ಯ, ಕೇವಲ ಪ್ರತ್ಯೇಕ domains ಸೇರಿಸುವುದು ಅಥವಾ ತೆಗೆಯುವುದು ಸಾಧ್ಯವಿಲ್ಲ.

### SSL Certificate ನಿರ್ವಹಣೆ

Domains sync ಆದ ನಂತರ:

1. ಅನುಸಂಧಾನವು ಯಾವ domains ನಿಮ್ಮ server ಗೆ ಸರಿಯಾಗಿ ಪಾಯಿಂಟ್ ಆಗುವ ಮಾನ್ಯ DNS records ಹೊಂದಿವೆ ಎಂದು ಪರಿಶೀಲಿಸುತ್ತದೆ
2. ಆ domains ಗಾಗಿ Let's Encrypt SSL certificates ಅನ್ನು ಸ್ಥಾಪಿಸಲು Cloudways ಗೆ ವಿನಂತಿ ಕಳುಹಿಸುತ್ತದೆ
3. Cloudways SSL certificate ವಿತರಣೆ ಮತ್ತು ಸ್ಥಾಪನೆಯನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ

## ಹೆಚ್ಚುವರಿ Domains

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant Cloudways ನೊಂದಿಗೆ sync ಮಾಡುವಾಗ ಯಾವಾಗಲೂ ಸೇರಿಸಬೇಕಾದ ಹೆಚ್ಚುವರಿ domains ಅನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಲು ಅನುಮತಿಸುತ್ತದೆ. ಇದು ಈ ಕೆಳಗಿನವುಗಳಿಗೆ ಉಪಯುಕ್ತ:

- Ultimate Multisite ನಿಂದ ನಿರ್ವಹಿಸದ domains
- Wildcard domains (ಉದಾ., `*.example.com`)
- Development ಅಥವಾ staging domains

## ಸಮಸ್ಯೆ ಪರಿಹಾರ

### API ಸಂಪರ್ಕ ಸಮಸ್ಯೆಗಳು
- ನಿಮ್ಮ email ಮತ್ತು API key ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ server ಮತ್ತು application IDs ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ Cloudways ಖಾತೆಗೆ ಅಗತ್ಯ ಅನುಮತಿಗಳಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

### SSL Certificate ಸಮಸ್ಯೆಗಳು
- SSL certificates ವಿತರಿಸುವ ಮೊದಲು domains ನಿಮ್ಮ server ಗೆ ಪಾಯಿಂಟ್ ಆಗುವ ಮಾನ್ಯ DNS records ಹೊಂದಿರಬೇಕೆಂದು Cloudways ಅಗತ್ಯಪಡಿಸುತ್ತದೆ
- ಅನುಸಂಧಾನವು SSL certificates ವಿನಂತಿಸುವ ಮೊದಲು DNS records ಅನ್ನು ಮಾನ್ಯಗೊಳಿಸುತ್ತದೆ
- SSL certificates ವಿತರಣೆ ಆಗುತ್ತಿಲ್ಲದಿದ್ದರೆ, ನಿಮ್ಮ domains ನಿಮ್ಮ server ನ IP ವಿಳಾಸಕ್ಕೆ ಸರಿಯಾಗಿ ಪಾಯಿಂಟ್ ಆಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ

### Domain ಸೇರಿಸಲಾಗಿಲ್ಲ
- ಯಾವುದೇ error messages ಗಾಗಿ Ultimate Multisite logs ಪರಿಶೀಲಿಸಿ
- Domain ಈಗಾಗಲೇ Cloudways ಗೆ ಸೇರಿಸಲಾಗಿಲ್ಲವೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನೀವು ಸೇರಿಸುತ್ತಿರುವ domains ಸಂಖ್ಯೆಯನ್ನು ನಿಮ್ಮ Cloudways plan ಬೆಂಬಲಿಸುತ್ತದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
