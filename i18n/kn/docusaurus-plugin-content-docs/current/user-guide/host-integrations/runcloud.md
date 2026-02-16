---
title: RunCloud ಇಂಟಿಗ್ರೇಶನ್
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ಇಂಟಿಗ್ರೇಶನ್

## ಅವಲೋಕನ
RunCloud ಒಂದು ಕ್ಲೌಡ್-ಆಧಾರಿತ ಸರ್ವರ್ ನಿರ್ವಹಣಾ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್ ಆಗಿದ್ದು, ನಿಮ್ಮ ಸ್ವಂತ ಕ್ಲೌಡ್ ಸರ್ವರ್‌ಗಳಲ್ಲಿ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ಗಳನ್ನು ಸುಲಭವಾಗಿ ಡಿಪ್ಲಾಯ್ ಮಾಡಲು ಮತ್ತು ನಿರ್ವಹಿಸಲು ಅನುವು ಮಾಡಿಕೊಡುತ್ತದೆ. ಈ ಇಂಟಿಗ್ರೇಶನ್ Ultimate Multisite ಮತ್ತು RunCloud ನಡುವೆ ಸ್ವಯಂಚಾಲಿತ ಡೊಮೈನ್ ಸಿಂಕಿಂಗ್ ಮತ್ತು SSL ಸರ್ಟಿಫಿಕೇಟ್ ನಿರ್ವಹಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.

## ವೈಶಿಷ್ಟ್ಯಗಳು
- ಸ್ವಯಂಚಾಲಿತ ಡೊಮೈನ್ ಸಿಂಕಿಂಗ್
- SSL ಸರ್ಟಿಫಿಕೇಟ್ ನಿರ್ವಹಣೆ
- ಮ್ಯಾಪಿಂಗ್‌ಗಳನ್ನು ಅಳಿಸಿದಾಗ ಡೊಮೈನ್ ತೆಗೆದುಹಾಕುವಿಕೆ

## ಅವಶ್ಯಕತೆಗಳು
ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ಈ ಕೆಳಗಿನ constants ಅನ್ನು ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## ಸೆಟಪ್ ಸೂಚನೆಗಳು

### 1. ನಿಮ್ಮ RunCloud API ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ RunCloud dashboard ಗೆ ಲಾಗ್ ಇನ್ ಆಗಿ
2. "User Profile" ಗೆ ಹೋಗಿ (ಮೇಲಿನ ಬಲ ಮೂಲೆಯಲ್ಲಿರುವ ನಿಮ್ಮ ಪ್ರೊಫೈಲ್ ಚಿತ್ರದ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ)
3. ಮೆನುವಿನಿಂದ "API" ಆಯ್ಕೆ ಮಾಡಿ
4. ನಿಮ್ಮಲ್ಲಿ ಈಗಾಗಲೇ ಇಲ್ಲದಿದ್ದರೆ "Generate API Key" ಕ್ಲಿಕ್ ಮಾಡಿ
5. ನಿಮ್ಮ API Key ಮತ್ತು API Secret ಅನ್ನು ಕಾಪಿ ಮಾಡಿ

### 2. ನಿಮ್ಮ Server ಮತ್ತು App ID ಗಳನ್ನು ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ RunCloud dashboard ನಲ್ಲಿ, "Servers" ಗೆ ಹೋಗಿ
2. ನಿಮ್ಮ WordPress multisite ಹೋಸ್ಟ್ ಆಗಿರುವ ಸರ್ವರ್ ಆಯ್ಕೆ ಮಾಡಿ
3. Server ID ಯು URL ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" ಗೆ ಹೋಗಿ ಮತ್ತು ನಿಮ್ಮ WordPress ಅಪ್ಲಿಕೇಶನ್ ಆಯ್ಕೆ ಮಾಡಿ
5. App ID ಯು URL ನಲ್ಲಿ ಕಾಣಿಸುತ್ತದೆ: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php ಗೆ Constants ಸೇರಿಸಿ

ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಈ ಕೆಳಗಿನ constants ಸೇರಿಸಿ:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. ಇಂಟಿಗ್ರೇಶನ್ ಸಕ್ರಿಯಗೊಳಿಸಿ

1. ನಿಮ್ಮ WordPress admin ನಲ್ಲಿ, Ultimate Multisite > Settings ಗೆ ಹೋಗಿ
2. "Domain Mapping" ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. "Host Integrations" ಗೆ ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ
4. RunCloud ಇಂಟಿಗ್ರೇಶನ್ ಸಕ್ರಿಯಗೊಳಿಸಿ
5. "Save Changes" ಕ್ಲಿಕ್ ಮಾಡಿ

## ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ

Ultimate Multisite ನಲ್ಲಿ ಡೊಮೈನ್ ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ:

1. ಇಂಟಿಗ್ರೇಶನ್ ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗೆ ಡೊಮೈನ್ ಸೇರಿಸಲು RunCloud ನ API ಗೆ ವಿನಂತಿಯನ್ನು ಕಳುಹಿಸುತ್ತದೆ
2. ಡೊಮೈನ್ ಯಶಸ್ವಿಯಾಗಿ ಸೇರಿಸಿದರೆ, ಇಂಟಿಗ್ರೇಶನ್ SSL ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳನ್ನು ಮರು-ಡಿಪ್ಲಾಯ್ ಮಾಡುತ್ತದೆ
3. ಡೊಮೈನ್ ಮ್ಯಾಪಿಂಗ್ ತೆಗೆದುಹಾಕಿದಾಗ, ಇಂಟಿಗ್ರೇಶನ್ RunCloud ನಿಂದ ಡೊಮೈನ್ ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ

subdomain ಇನ್‌ಸ್ಟಾಲೇಶನ್‌ಗಳಿಗೆ, ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ಗೆ ಹೊಸ ಸೈಟ್‌ಗಳನ್ನು ಸೇರಿಸಿದಾಗ RunCloud ನಲ್ಲಿ subdomain ಗಳ ರಚನೆಯನ್ನು ಇಂಟಿಗ್ರೇಶನ್ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ.

## ಸಮಸ್ಯೆ ಪರಿಹಾರ

### API ಸಂಪರ್ಕ ಸಮಸ್ಯೆಗಳು
- ನಿಮ್ಮ API ಪ್ರಮಾಣಪತ್ರಗಳು ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ server ಮತ್ತು app ID ಗಳು ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
- ನಿಮ್ಮ RunCloud ಖಾತೆಗೆ ಅಗತ್ಯ ಅನುಮತಿಗಳಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

### SSL ಸರ್ಟಿಫಿಕೇಟ್ ಸಮಸ್ಯೆಗಳು
- RunCloud SSL ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳನ್ನು ನೀಡಲು ಸ್ವಲ್ಪ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳಬಹುದು
- ನಿಮ್ಮ ಡೊಮೈನ್‌ಗಳು ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸಕ್ಕೆ ಸರಿಯಾಗಿ ಪಾಯಿಂಟ್ ಆಗಿವೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ ಅಪ್ಲಿಕೇಶನ್‌ಗಾಗಿ RunCloud SSL ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ

### ಡೊಮೈನ್ ಸೇರಿಸಲಾಗಲಿಲ್ಲ
- ಯಾವುದೇ ದೋಷ ಸಂದೇಶಗಳಿಗಾಗಿ Ultimate Multisite ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ
- ಡೊಮೈನ್ ಈಗಾಗಲೇ RunCloud ಗೆ ಸೇರಿಸಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ RunCloud ಯೋಜನೆ ಬಹು ಡೊಮೈನ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ
