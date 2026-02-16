---
title: cPanel ಏಕೀಕರಣ
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ಸಂಯೋಜನೆ

## ಅವಲೋಕನ
cPanel ಎಂಬುದು ಅನೇಕ ಶೇರ್ಡ್ ಮತ್ತು ಡೆಡಿಕೇಟೆಡ್ ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ಗಳು ಬಳಸುವ ಅತ್ಯಂತ ಜನಪ್ರಿಯ ವೆಬ್ ಹೋಸ್ಟಿಂಗ್ ಕಂಟ್ರೋಲ್ ಪ್ಯಾನೆಲ್‌ಗಳಲ್ಲಿ ಒಂದು. ಈ ಸಂಯೋಜನೆಯು Ultimate Multisite ಮತ್ತು cPanel ನಡುವೆ ಸ್ವಯಂಚಾಲಿತ ಡೊಮೇನ್ ಸಿಂಕಿಂಗ್ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ಇದರಿಂದ ನಿಮ್ಮ cPanel ಖಾತೆಗೆ ಡೊಮೇನ್ ಅಲಿಯಾಸ್‌ಗಳು ಮತ್ತು ಸಬ್‌ಡೊಮೇನ್‌ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೇರಿಸಬಹುದು.

## ವೈಶಿಷ್ಟ್ಯಗಳು
- cPanel ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ addon domain ರಚನೆ
- cPanel ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ subdomain ರಚನೆ (subdomain multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ)
- ಮ್ಯಾಪಿಂಗ್‌ಗಳನ್ನು ಅಳಿಸಿದಾಗ ಡೊಮೇನ್ ತೆಗೆದುಹಾಕುವಿಕೆ

## ಅಗತ್ಯತೆಗಳು
ಕೆಳಗಿನ constants ಅನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ಐಚ್ಛಿಕವಾಗಿ, ನೀವು ಇವುಗಳನ್ನೂ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು:

```php
define('WU_CPANEL_PORT', 2083); // ಡೀಫಾಲ್ಟ್ 2083
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ಡೀಫಾಲ್ಟ್ /public_html
```

## ಸೆಟಪ್ ಸೂಚನೆಗಳು

### 1. ನಿಮ್ಮ cPanel ಕ್ರೆಡೆನ್ಶಿಯಲ್‌ಗಳನ್ನು ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ನಿಂದ ನಿಮ್ಮ cPanel username ಮತ್ತು password ಪಡೆಯಿರಿ
2. ನಿಮ್ಮ cPanel host ಅನ್ನು ಗುರುತಿಸಿ (ಸಾಮಾನ್ಯವಾಗಿ `cpanel.yourdomain.com` ಅಥವಾ `yourdomain.com:2083`)

### 2. wp-config.php ಗೆ Constants ಸೇರಿಸಿ

ಕೆಳಗಿನ constants ಅನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಸೇರಿಸಿ:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ಐಚ್ಛಿಕವಾಗಿ, ನೀವು port ಮತ್ತು root directory ಅನ್ನು ಕಸ್ಟಮೈಜ್ ಮಾಡಬಹುದು:

```php
define('WU_CPANEL_PORT', 2083); // ನಿಮ್ಮ cPanel ಬೇರೆ port ಬಳಸಿದರೆ ಬದಲಾಯಿಸಿ
define('WU_CPANEL_ROOT_DIR', '/public_html'); // ನಿಮ್ಮ document root ಬೇರೆಯಾಗಿದ್ದರೆ ಬದಲಾಯಿಸಿ
```

### 3. ಸಂಯೋಜನೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ

1. ನಿಮ್ಮ WordPress admin ನಲ್ಲಿ, Ultimate Multisite > Settings ಗೆ ಹೋಗಿ
2. "Domain Mapping" ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. "Host Integrations" ಗೆ ಕೆಳಗೆ ಸ್ಕ್ರೋಲ್ ಮಾಡಿ
4. cPanel ಸಂಯೋಜನೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ
5. "Save Changes" ಕ್ಲಿಕ್ ಮಾಡಿ

## ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ

### Addon Domains

Ultimate Multisite ನಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ:

1. ಡೊಮೇನ್ ಅನ್ನು addon domain ಆಗಿ ಸೇರಿಸಲು ಸಂಯೋಜನೆಯು cPanel ನ API ಗೆ ವಿನಂತಿ ಕಳುಹಿಸುತ್ತದೆ
2. ಡೊಮೇನ್ ನಿಮ್ಮ root directory ಯನ್ನು ಪಾಯಿಂಟ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಆಗುತ್ತದೆ
3. ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ತೆಗೆದುಹಾಕಿದಾಗ, ಸಂಯೋಜನೆಯು cPanel ನಿಂದ addon domain ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ

### Subdomains

Subdomain multisite ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ, ಹೊಸ ಸೈಟ್ ರಚಿಸಿದಾಗ:

1. ಸಂಯೋಜನೆಯು ಪೂರ್ಣ ಡೊಮೇನ್‌ನಿಂದ subdomain ಭಾಗವನ್ನು ಹೊರತೆಗೆಯುತ್ತದೆ
2. Subdomain ಸೇರಿಸಲು ಅದು cPanel ನ API ಗೆ ವಿನಂತಿ ಕಳುಹಿಸುತ್ತದೆ
3. Subdomain ನಿಮ್ಮ root directory ಯನ್ನು ಪಾಯಿಂಟ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಆಗುತ್ತದೆ

## ಮಹತ್ವದ ಟಿಪ್ಪಣಿಗಳು

- ನಿಮ್ಮ cPanel ಖಾತೆಯೊಂದಿಗೆ ಸಂವಹನ ಮಾಡಲು ಸಂಯೋಜನೆಯು cPanel ನ API2 ಅನ್ನು ಬಳಸುತ್ತದೆ
- ನಿಮ್ಮ cPanel ಖಾತೆಗೆ addon domains ಮತ್ತು subdomains ಸೇರಿಸಲು ಅನುಮತಿಗಳಿರಬೇಕು
- ಕೆಲವು ಹೋಸ್ಟಿಂಗ್ ಪ್ರೊವೈಡರ್‌ಗಳು ನೀವು ರಚಿಸಬಹುದಾದ addon domains ಅಥವಾ subdomains ಸಂಖ್ಯೆಯನ್ನು ಮಿತಿಗೊಳಿಸಬಹುದು
- ಸಂಯೋಜನೆಯು DNS ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ; ನಿಮ್ಮ ಡೊಮೇನ್‌ಗಳನ್ನು ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸಕ್ಕೆ ಪಾಯಿಂಟ್ ಮಾಡುವುದನ್ನು ನೀವೇ ಮಾಡಬೇಕು

## ಸಮಸ್ಯೆ ನಿವಾರಣೆ

### API ಸಂಪರ್ಕ ಸಮಸ್ಯೆಗಳು
- ನಿಮ್ಮ cPanel username ಮತ್ತು password ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ cPanel host ಸರಿಯಾಗಿದೆಯೇ ಮತ್ತು ಆಕ್ಸೆಸ್ ಮಾಡಬಹುದೇ ಎಂದು ಪರೀಕ್ಷಿಸಿ
- ನಿಮ್ಮ cPanel ಖಾತೆಗೆ ಅಗತ್ಯ ಅನುಮತಿಗಳಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿ
- host ಗೆ ಪೂರ್ಣ URL ಬಳಸಲು ಪ್ರಯತ್ನಿಸಿ (ಉದಾ., `https://cpanel.yourdomain.com`)

### ಡೊಮೇನ್ ಸೇರಿಸಲಾಗಿಲ್ಲ
- ಯಾವುದೇ ದೋಷ ಸಂದೇಶಗಳಿಗಾಗಿ Ultimate Multisite logs ಪರೀಕ್ಷಿಸಿ
- ಡೊಮೇನ್ ಈಗಾಗಲೇ cPanel ಗೆ ಸೇರಿಸಲಾಗಿಲ್ಲವೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ cPanel ಖಾತೆಯು addon domains ಅಥವಾ subdomains ಗೆ ತನ್ನ ಮಿತಿಯನ್ನು ತಲುಪಿಲ್ಲವೇ ಎಂದು ಖಚಿತಪಡಿಸಿ

### SSL Certificate ಸಮಸ್ಯೆಗಳು
- ಸಂಯೋಜನೆಯು SSL certificate ವಿತರಣೆಯನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ
- ನಿಮ್ಮ ಡೊಮೇನ್‌ಗಳಿಗೆ SSL certificates ವಿತರಿಸಲು cPanel ನ SSL/TLS ಟೂಲ್‌ಗಳು ಅಥವಾ AutoSSL ವೈಶಿಷ್ಟ್ಯವನ್ನು ಬಳಸಬೇಕು
- ಪರ್ಯಾಯವಾಗಿ, cPanel ನ AutoSSL ಜೊತೆಗೆ Let's Encrypt ನಂತಹ ಸೇವೆಯನ್ನು ಬಳಸಬಹುದು
