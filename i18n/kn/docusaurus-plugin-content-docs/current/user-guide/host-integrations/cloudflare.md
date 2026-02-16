---
title: Cloudflare ಏಕೀಕರಣ
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ಇಂಟಿಗ್ರೇಶನ್

## ಅವಲೋಕನ
Cloudflare ಒಂದು ಪ್ರಮುಖ content delivery network (CDN) ಮತ್ತು ಭದ್ರತಾ ಸೇವೆಯಾಗಿದ್ದು, ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ರಕ್ಷಿಸಲು ಮತ್ತು ವೇಗಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಈ ಇಂಟಿಗ್ರೇಶನ್ Ultimate Multisite ಮತ್ತು Cloudflare ನಡುವೆ ಸ್ವಯಂಚಾಲಿತ ಡೊಮೇನ್ ನಿರ್ವಹಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ, ವಿಶೇಷವಾಗಿ subdomain multisite ಅನುಸ್ಥಾಪನೆಗಳಿಗೆ.

## ವೈಶಿಷ್ಟ್ಯಗಳು
- Cloudflare ನಲ್ಲಿ ಸ್ವಯಂಚಾಲಿತ subdomain ರಚನೆ
- Proxied subdomain ಬೆಂಬಲ
- DNS ರೆಕಾರ್ಡ್ ನಿರ್ವಹಣೆ
- Ultimate Multisite admin ನಲ್ಲಿ ಸುಧಾರಿತ DNS ರೆಕಾರ್ಡ್ ಪ್ರದರ್ಶನ

## ಅವಶ್ಯಕತೆಗಳು
ಕೆಳಗಿನ constants ಗಳನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ನಿರ್ಧರಿಸಬೇಕು:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## ಸೆಟಪ್ ಸೂಚನೆಗಳು

### 1. ನಿಮ್ಮ Cloudflare API Key ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ Cloudflare dashboard ಗೆ ಲಾಗಿನ್ ಆಗಿ
2. "My Profile" ಗೆ ಹೋಗಿ (ಮೇಲಿನ ಬಲ ಮೂಲೆಯಲ್ಲಿರುವ ನಿಮ್ಮ ಇಮೇಲ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ)
3. ಮೆನುವಿನಿಂದ "API Tokens" ಆಯ್ಕೆ ಮಾಡಿ
4. ಕೆಳಗಿನ ಅನುಮತಿಗಳೊಂದಿಗೆ ಹೊಸ API token ರಚಿಸಿ:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. ನಿಮ್ಮ API token ಅನ್ನು ನಕಲಿಸಿ

### 2. ನಿಮ್ಮ Zone ID ಪಡೆಯಿರಿ

1. ನಿಮ್ಮ Cloudflare dashboard ನಲ್ಲಿ, ನೀವು ಬಳಸಲು ಬಯಸುವ ಡೊಮೇನ್ ಆಯ್ಕೆ ಮಾಡಿ
2. "Overview" ಟ್ಯಾಬ್‌ನಲ್ಲಿ, ಬಲ ಸೈಡ್‌ಬಾರ್‌ನಲ್ಲಿ "API" ಅಡಿಯಲ್ಲಿ Zone ID ಕಾಣಿಸುತ್ತದೆ
3. Zone ID ಅನ್ನು ನಕಲಿಸಿ

### 3. wp-config.php ಗೆ Constants ಸೇರಿಸಿ

ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಕೆಳಗಿನ constants ಗಳನ್ನು ಸೇರಿಸಿ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ಇಂಟಿಗ್ರೇಶನ್ ಸಕ್ರಿಯಗೊಳಿಸಿ

1. ನಿಮ್ಮ WordPress admin ನಲ್ಲಿ, Ultimate Multisite > Settings ಗೆ ಹೋಗಿ
2. "Domain Mapping" ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. "Host Integrations" ಗೆ ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ
4. Cloudflare ಇಂಟಿಗ್ರೇಶನ್ ಸಕ್ರಿಯಗೊಳಿಸಿ
5. "Save Changes" ಕ್ಲಿಕ್ ಮಾಡಿ

## ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ

### Subdomain ನಿರ್ವಹಣೆ

subdomain multisite ಅನುಸ್ಥಾಪನೆಯಲ್ಲಿ ಹೊಸ ಸೈಟ್ ರಚಿಸಿದಾಗ:

1. ಇಂಟಿಗ್ರೇಶನ್ subdomain ಗಾಗಿ CNAME ರೆಕಾರ್ಡ್ ಸೇರಿಸಲು Cloudflare ನ API ಗೆ ವಿನಂತಿ ಕಳುಹಿಸುತ್ತದೆ
2. subdomain ಅನ್ನು ಪೂರ್ವನಿಯೋಜಿತವಾಗಿ Cloudflare ಮೂಲಕ proxy ಮಾಡಲು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗುತ್ತದೆ (ಇದನ್ನು filters ಮೂಲಕ ಬದಲಾಯಿಸಬಹುದು)
3. ಸೈಟ್ ಅಳಿಸಿದಾಗ, ಇಂಟಿಗ್ರೇಶನ್ Cloudflare ನಿಂದ subdomain ಅನ್ನು ತೆಗೆದುಹಾಕುತ್ತದೆ

### DNS ರೆಕಾರ್ಡ್ ಪ್ರದರ್ಶನ

ಇಂಟಿಗ್ರೇಶನ್ Ultimate Multisite admin ನಲ್ಲಿ DNS ರೆಕಾರ್ಡ್ ಪ್ರದರ್ಶನವನ್ನು ಈ ರೀತಿ ಸುಧಾರಿಸುತ್ತದೆ:

1. Cloudflare ನಿಂದ ನೇರವಾಗಿ DNS ರೆಕಾರ್ಡ್‌ಗಳನ್ನು ಪಡೆಯುತ್ತದೆ
2. ರೆಕಾರ್ಡ್‌ಗಳು proxy ಆಗಿವೆಯೇ ಇಲ್ಲವೇ ಎಂದು ತೋರಿಸುತ್ತದೆ
3. DNS ರೆಕಾರ್ಡ್‌ಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿಯನ್ನು ತೋರಿಸುತ್ತದೆ

## ಪ್ರಮುಖ ಟಿಪ್ಪಣಿಗಳು

Cloudflare ನ ಇತ್ತೀಚಿನ ನವೀಕರಣಗಳ ಪ್ರಕಾರ, wildcard proxying ಈಗ ಎಲ್ಲಾ ಗ್ರಾಹಕರಿಗೆ ಲಭ್ಯವಿದೆ. ಇದರರ್ಥ subdomain multisite ಅನುಸ್ಥಾಪನೆಗಳಿಗೆ Cloudflare ಇಂಟಿಗ್ರೇಶನ್ ಮೊದಲಿನಷ್ಟು ನಿರ್ಣಾಯಕವಲ್ಲ, ಏಕೆಂದರೆ ನೀವು Cloudflare ನಲ್ಲಿ ಸರಳವಾಗಿ wildcard DNS ರೆಕಾರ್ಡ್ ಹೊಂದಿಸಬಹುದು.

## ಸಮಸ್ಯೆ ಪರಿಹಾರ

### API ಸಂಪರ್ಕ ಸಮಸ್ಯೆಗಳು
- ನಿಮ್ಮ API token ಸರಿಯಾಗಿದೆಯೇ ಮತ್ತು ಅಗತ್ಯ ಅನುಮತಿಗಳನ್ನು ಹೊಂದಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನಿಮ್ಮ Zone ID ಸರಿಯಾಗಿದೆಯೇ ಎಂದು ತಪಾಸಿಸಿ
- ನಿಮ್ಮ Cloudflare ಖಾತೆಯು ಅಗತ್ಯ ಅನುಮತಿಗಳನ್ನು ಹೊಂದಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

### Subdomain ಸೇರಿಸಲಾಗಿಲ್ಲ
- ಯಾವುದೇ ದೋಷ ಸಂದೇಶಗಳಿಗಾಗಿ Ultimate Multisite logs ಪರಿಶೀಲಿಸಿ
- subdomain ಈಗಾಗಲೇ Cloudflare ಗೆ ಸೇರಿಸಲಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನೀವು ರಚಿಸುತ್ತಿರುವ DNS ರೆಕಾರ್ಡ್‌ಗಳ ಸಂಖ್ಯೆಯನ್ನು ನಿಮ್ಮ Cloudflare ಯೋಜನೆ ಬೆಂಬಲಿಸುತ್ತದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ

### Proxying ಸಮಸ್ಯೆಗಳು
- subdomains ಅನ್ನು proxy ಮಾಡಲು ನಿಮಗೆ ಬೇಡವಾದರೆ, `wu_cloudflare_should_proxy` filter ಬಳಸಬಹುದು
- proxy ಮಾಡಿದಾಗ ಕೆಲವು ವೈಶಿಷ್ಟ್ಯಗಳು ಸರಿಯಾಗಿ ಕೆಲಸ ಮಾಡದಿರಬಹುದು (ಉದಾ., ಕೆಲವು WordPress admin ಕಾರ್ಯಗಳು)
- admin ಪುಟಗಳಿಗೆ cache ಅನ್ನು bypass ಮಾಡಲು Cloudflare ನ Page Rules ಬಳಸುವುದನ್ನು ಪರಿಗಣಿಸಿ
