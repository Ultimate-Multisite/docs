---
title: Hostinger (hPanel) ಏಕೀಕರಣ
sidebar_position: 7
_i18n_hash: db876ad40b78d2075e03ba70fe7f541f
---
# Hostinger (hPanel) Integration

## Overview

Hostinger ಎಂಬುದು hPanel ಎಂಬ ಆಧುನಿಕ ಕಂಟ್ರೋಲ್ ಪ್ಯಾನೆಲ್ ಹೊಂದಿರುವ ಜನಪ್ರಿಯ ವೆಬ್ ಹೋಸ್ಟಿಂಗ್ ಪроваಡರ್ ಆಗಿದೆ. Ultimate Multisite Hostinger integration ಅನ್ನು ಬಳಸುವುದರಿಂದ Ultimate Multisite ಮತ್ತು Hostinger ನ hPanel ನಡುವೆ ಡೊಮೇನ್ ಸಿঙ্কিং ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಆಗುತ್ತದೆ. ಇದರಿಂದ ನೀವು ನಿಮ್ಮ WordPress ಆಡ್ಮಿನಿಂದಲೇ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್‌ಗಳು ಮತ್ತು ಸಬ್‌ಡೊಮೇನ್‌ಗಳನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿರ್ವಹಿಸಬಹುದು.

## Features

- hPanel ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ ಆಡ್‌ಆನ್ ಡೊಮೇನ್ ರಚನೆ
- hPanel ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ ಸಬ್‌ಡೊಮೇನ್ ರಚನೆ (ಸಬ್‌ಡೊಮೇನ್ ಮಲ್ಟಿಸಿಟ್ ಸ್ಥಾಪನೆಗಳಿಗೆ)
- ಮ್ಯಾಪಿಂಗ್‌ಗಳನ್ನು ಅಳಿಸಿದಾಗ ಡೊಮೇನ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆದುಹಾಕಲಾಗುತ್ತದೆ
- hPanel ನ ಡೊಮೇನ್ ಮ್ಯಾನೇಜ್ಮೆಂಟ್ API ಜೊತೆ ಸುಗಮ ಸಂಯೋಜನೆ

## Requirements

Hostinger integration ಅನ್ನು ಬಳಸಲು, ನಿಮಗೆ ಈ ಕೆಳಗಿನವುಗಳು ಬೇಕಾಗುತ್ತವೆ:

1. hPanel ಪ್ರವೇಶದೊಂದಿಗೆ Hostinger ಖಾತೆ
2. Hostinger ನಿಂದ ಪಡೆದ API ಟೋಕನ್
3. ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ಈ ಕೆಳಗಿನ ಸ್ಥಿರಾಂಕಗಳನ್ನು (constants) ವ್ಯಾಖ್ಯಾನಿಸುವುದು:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ಐಚ್ಛಿಕವಾಗಿ, ನೀವು ಇದನ್ನು ಸಹ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Setup Instructions

### 1. ನಿಮ್ಮ Hostinger API ಟೋಕನ್ ರಚಿಸಿ

1. ನಿಮ್ಮ Hostinger ಖಾತೆಗೆ ಲಾಗಿನ್ ಆಗಿ ಮತ್ತು hPanel ಗೆ ಪ್ರವೇಶಿಸಿ
2. **Account Settings** → **API Tokens** ಗೆ ಹೋಗಿ
3. **Create New Token** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
4. ನಿಮ್ಮ ಟೋಕನ್‌ಗೆ ವಿವರಣಾತ್ಮಕ ಹೆಸರನ್ನು ನೀಡಿ (ಉದಾಹರಣೆಗೆ, "Ultimate Multisite")
5. ಅಗತ್ಯವಿರುವ ಅನುಮತಿಗಳನ್ನು (permissions) ಆಯ್ಕೆಮಾಡಿ:
   - Domain management
   - Subdomain management
6. ರಚಿಸಲಾದ ಟೋಕನ್ ಅನ್ನು ನಕಲಿಸಿ ಮತ್ತು ಅದನ್ನು ಸುರಕ್ಷಿತವಾಗಿ ಸಂಗ್ರಹಿಸಿ

### 2. ನಿಮ್ಮ Account ID ಹುಡುಕಿ

1. hPanel ನಲ್ಲಿ, **Account Settings** → **Account Information** ಗೆ ಹೋಗಿ
2. ನಿಮ್ಮ Account ID ಈ ಪುಟದಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ
3. ಮುಂದಿನ ಹಂತಕ್ಕಾಗಿ ಈ ID ಅನ್ನು ನಕಲಿಸಿ ಮತ್ತು ಉಳಿಸಿ

### 3. wp-config.php ಗೆ ಸ್ಥಿರಾಂಕಗಳನ್ನು ಸೇರಿಸಿ

ಈ ಕೆಳಗಿನ ಸ್ಥಿರಾಂಕಗಳನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಸೇರಿಸಿ:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ನಿಮ್ಮ Hostinger ಖಾತೆಯು ಬೇರೆ API endpoint ಅನ್ನು ಬಳಸುತ್ತಿದ್ದರೆ, ನೀವು ಅದನ್ನು ಕಸ್ಟಮೈಸ್ ಮಾಡಬಹುದು:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. integration ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ

1. ನಿಮ್ಮ WordPress ಆಡ್ಮಿನಾದಲ್ಲಿ, **Ultimate Multisite > Settings** ಗೆ ಹೋಗಿ
2. **Domain Mapping** ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. **Host Integrations** ಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ
4. **Hostinger (hPanel)** integration ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ
5. **Save Changes** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ

## How It Works

### Addon Domains

ನೀವು Ultimate Multisite ನಲ್ಲಿ ಒಂದು ಡೊಮೇನ್ ಅನ್ನು ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ:

1. integration, ಆ ಡೊಮೇನ್ ಅನ್ನು ಆಡ್‌ಆನ್ ಡೊಮೇನ್ ಆಗಿ ಸೇರಿಸಲು Hostinger ನ API ಗೆ ಒಂದು ವಿನಂತಿಯನ್ನು (request) ಕಳುಹಿಸುತ್ತದೆ.
2. ಆ ಡೊಮೇನ್ ಅನ್ನು ನಿಮ್ಮ ರೂಟ್ ಡೈರೆಕ್ಟರಿಗೆ (root directory) ಪಾಯಿಂಟ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗುತ್ತದೆ.
3. ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿದಾಗ, integration ಆಡ್‌ಆನ್ ಡೊಮೇನ್ ಅನ್ನು hPanel ನಿಂದ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ತೆಗೆದುಹಾಕುತ್ತದೆ.

### Subdomains

ಸಬ್‌ಡೊಮೇನ್ ಮಲ್ಟಿಸಿಟ್ ಸ್ಥಾಪನೆಗಳಿಗೆ, ಹೊಸ ಸೈಟ್ ಅನ್ನು ರಚಿಸಿದಾಗ:

1. integration, ಸಂಪೂರ್ಣ ಡೊಮೇನ್‌ನಿಂದ ಸಬ್‌ಡೊಮೇನ್ ಭಾಗವನ್ನು ಹೊರತೆಗೆಯುತ್ತದೆ.
2. ಅದು ಸಬ್‌ಡೊಮೇನ್ ಅನ್ನು ಸೇರಿಸಲು Hostinger ನ API ಗೆ ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸುತ್ತದೆ.
3. ಸಬ್‌ಡೊಮೇನ್ ಅನ್ನು ನಿಮ್ಮ ರೂಟ್ ಡೈರೆಕ್ಟರಿಗೆ ಪಾಯಿಂಟ್ ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗುತ್ತದೆ.

## Important Notes

- integration, ನಿಮ್ಮ ಖಾತೆಯೊಂದಿಗೆ ಸಂವಹನ ನಡೆಸಲು Hostinger ನ REST API ಅನ್ನು ಬಳಸುತ್ತದೆ.
- ನಿಮ್ಮ API ಟೋಕನ್‌ನಲ್ಲಿ ಡೊಮೇನ್ ಮತ್ತು ಸಬ್‌ಡೊಮೇನ್ ನಿರ್ವಹಣೆಗಾಗಿ ಅಗತ್ಯವಾದ ಅನುಮತಿಗಳು ಇರಬೇಕು.
- integration DNS ಕಾನ್ಫಿಗರೇಶನ್ ಅನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ; ಡೊಮೇನ್‌ಗಳು ಈಗಾಗಲೇ ನಿಮ್ಮ Hostinger ಖಾತೆಗೆ ಪಾಯಿಂಟ್ ಆಗಿರಬೇಕು.
- API ವಿನಂತಿಗಳನ್ನು HTTPS ಮೂಲಕ ಸುರಕ್ಷಿತವಾಗಿ ಮಾಡಲಾಗುತ್ತದೆ.
- ನಿಮ್ಮ API ಟೋಕನ್ ಅನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಿ ಮತ್ತು ಅದನ್ನು ಎಂದಿಗೂ ಸಾರ್ವಜನಿಕವಾಗಿ ಹಂಚಿಕೊಳ್ಳಬೇಡಿ.

## Troubleshooting

### API Connection Issues

- ನಿಮ್ಮ API ಟೋಕನ್ ಸರಿಯಾಗಿದೆಯೇ ಮತ್ತು ಅದು ಅವಧಿ ಮೀರದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.
- ನಿಮ್ಮ Account ID ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ.
- ನಿಮ್ಮ API ಟೋಕನ್‌ನಲ್ಲಿ ಡೊಮೇನ್ ನಿರ್ವಹಣೆಗಾಗಿ ಅಗತ್ಯವಾದ ಅನುಮತಿಗಳು ಇವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ನಿಮ್ಮ Hostinger ಖಾತೆ ಸಕ್ರಿಯವಾಗಿದೆ ಮತ್ತು ಉತ್ತಮ ಸ್ಥಿತಿಯಲ್ಲಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ.

### Domain Not Added

- ಯಾವುದೇ ಎರೆರ್ ಸಂದೇಶಗಳಿಗಾಗಿ Ultimate Multisite logs ಅನ್ನು ಪರಿಶೀಲಿಸಿ.
- ಆ ಡೊಮೇನ್ ಅನ್ನು ಈಗಾಗಲೇ ನಿಮ್ಮ Hostinger ಖಾತೆಗೆ ಸೇರಿಸಲಾಗಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ನಿಮ್ಮ Hostinger ಖಾತೆಯು ಆಡ್‌ಆನ್ ಡೊಮೇನ್‌ಗಳ ಮಿತಿಯನ್ನು ತಲುಪಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ಆ ಡೊಮೇನ್ ಅನ್ನು ನಿಮ್ಮ Hostinger nameservers ಗೆ ಸರಿಯಾಗಿ ಪಾಯಿಂಟ್ ಮಾಡಲಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

### SSL Certificate Issues

- integration, SSL ಸರ್ಟಿಫಿಕೇಟ್ ನೀಡುವ ಪ್ರಕ್ರಿಯೆಯನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ.
- Hostinger ಸಾಮಾನ್ಯವಾಗಿ AutoSSL ಮೂಲಕ ಉಚಿತ SSL ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.
- ನೀವು **SSL/TLS** ಅಡಿಯಲ್ಲಿ hPanel ನಲ್ಲಿ ನೇರವಾಗಿ SSL ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳನ್ನು ನಿರ್ವಹಿಸಬಹುದು.
- ಪರ್ಯಾಯವಾಗಿ, Hostinger ನ AutoSSL ವೈಶಿಷ್ಟ್ಯದೊಂದಿಗೆ Let's Encrypt ಅನ್ನು ಬಳಸಿ.

## Support

Hostinger integration ಕುರಿತು ಹೆಚ್ಚಿನ ಸಹಾಯ ಬೇಕಿದ್ದರೆ, ದಯವಿಟ್ಟು ಈ ಕೆಳಗಿನವುಗಳನ್ನು ನೋಡಿ:

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/docs)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
