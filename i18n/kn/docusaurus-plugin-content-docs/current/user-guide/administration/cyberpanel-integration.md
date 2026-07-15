---
title: CyberPanel ಏಕೀಕರಣ
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

ಈ ಮಾರ್ಗದರ್ಶಿ Ultimate Multisite CyberPanel integration ಅನ್ನು ಹೇಗೆ ಕಾನ್ಫಿಗರ್ ಮಾಡುವುದು ಎಂದು ವಿವರಿಸುತ್ತದೆ, ಇದರಿಂದ ನಿಮ್ಮ ನೆಟ್‌ವರ್ಕ್‌ನಲ್ಲಿ ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್‌ಗಳನ್ನು CyberPanel ನಲ್ಲಿ virtual hosts ಆಗಿ ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಸೇರಿಸಲಾಗುತ್ತದೆ (ಮತ್ತು ತೆಗೆದುಹಾಕಲಾಗುತ್ತದೆ). ಇದರ ಜೊತೆಗೆ, Let's Encrypt ಮೂಲಕ ಆಪ್ಟಿಮಲ್ auto-SSL provisioning ಕೂಡ ಲಭ್ಯವಿದೆ.

## ಇದು ಏನು ಮಾಡುತ್ತದೆ {#what-it-does}

- Ultimate Multisite ನಲ್ಲಿ ಒಂದು ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ, ಈ integration ಆ ಡೊಮೇನ್‌ಗಾಗಿ virtual host ಅನ್ನು ರಚಿಸಲು CyberPanel API ಅನ್ನು ಕರೆಯುತ್ತದೆ.
- ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿದಾಗ, ಸಂಬಂಧಪಟ್ಟ virtual host ಅನ್ನು ಅಳಿಸಲು integration API ಅನ್ನು ಕರೆಯುತ್ತದೆ.
- auto-SSL ಅನ್ನು ಆನ್ ಮಾಡಿದಾಗ, virtual host ರಚನೆಯಾದ ತಕ್ಷಣ integration Let's Encrypt ಸರ್ಟಿಫಿಕೇಟ್ ಅನ್ನು ನೀಡಲು ಪ್ರಚೋದಿಸುತ್ತದೆ.
- ಆಪ್ಟಿಮಲ್ ಆಗಿ, ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿರುವ "Auto-create www subdomain" ಸೆಟ್ಟಿಂಗ್‌ಗೆ ಅನುಗುಣವಾಗಿ `www.` ಎಂಬ alias ಅನ್ನು ಸೇರಿಸುತ್ತದೆ/ತೆಗೆದುಹಾಕುತ್ತದೆ.

## ಪೂರ್ವ-ಪರಮಾವಶ್ಯಕತೆಗಳು {#prerequisites}

- ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ CyberPanel instance (v2.3 ಅಥವಾ ನಂತರದ ಆವೃತ್ತಿಯನ್ನು ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ) ನಿಮ್ಮ WordPress server ನಿಂದ ಲಭ್ಯವಿರಬೇಕು.
- ನಿಮ್ಮ WordPress ನೆಟ್‌ವರ್ಕ್ ರೂಟ್ ಅನ್ನು ಈಗಾಗಲೇ ಸರ್ವಿಸುವ CyberPanel ನಲ್ಲಿ ಇರುವ ಒಂದು ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ವೆಬ್‌ಸೈಟ್. ಈ integration ಹೊಸ virtual hosts ಅನ್ನು ಈ ಸರ್ವರ್‌ಗೆ ಜೋಡಿಸುತ್ತದೆ.
- CyberPanel API ಪ್ರವೇಶವನ್ನು ಆನ್ ಮಾಡಿರಬೇಕು. authentication ಗಾಗಿ ನಿಮ್ಮ CyberPanel admin username ಮತ್ತು password ಅನ್ನು ಬಳಸಲಾಗುತ್ತದೆ.
- auto-SSL ಯಶಸ್ವಿಯಾಗಿ ಸರ್ಟಿಫಿಕೇಟ್ ನೀಡಲು, ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್‌ಗಳ DNS records ಈಗಾಗಲೇ ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸವನ್ನು ತೋರಿಸಬೇಕು.

## ಅಗತ್ಯತೆಗಳು {#requirements}

ಈ ಕೆಳಗಿನ constants ಗಳನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಬೇಕು:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ಆಪ್ಟಿಮಲ್ ಆಗಿ, ನೀವು ಇದನ್ನು ಕೂಡ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — ಡೊಮೇನ್ ರಚನೆಯ ನಂತರ Let's Encrypt SSL ನೀಡುತ್ತದೆ
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL ಸರ್ಟಿಫಿಕೇಟ್ ಸಂಪರ್ಕಕ್ಕಾಗಿ ಬಳಸಲಾಗುತ್ತದೆ
```

## ಸೆಟಪ್ ಸೂಚನೆಗಳು {#setup-instructions}

### 1. CyberPanel API ಅನ್ನು ಆನ್ ಮಾಡಿ {#1-enable-the-cyberpanel-api}

1. ನಿಮ್ಮ CyberPanel dashboard ಗೆ ಆಡಮಿನ್ ಆಗಿ ಲಾಗಿನ್ ಮಾಡಿ.
2. **Security** > **SSL** ಗೆ ಹೋಗಿ, CyberPanel interface ನಲ್ಲಿಯೇ SSL ಸಕ್ರಿಯವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ (ಸುರಕ್ಷಿತ API ಕರೆಗಳಿಗೆ ಇದು ಅಗತ್ಯ).
3. CyberPanel API ಅನ್ನು default ಆಗಿ `https://your-server-ip:8090/api/` ನಲ್ಲಿ ಲಭ್ಯವಿದೆ. ಇದನ್ನು ಆನ್ ಮಾಡಲು ಯಾವುದೇ ಹೆಚ್ಚುವರಿ ಹಂತಗಳು ಬೇಕಾಗಿಲ್ಲ — ಇದು ಆಡಮಿನ್ ಬಳಕೆದಾರರಿಗೆ default ಆಗಿ ಆನ್ ಆಗಿದೆ.

### 2. wp-config.php ಗೆ Constants ಗಳನ್ನು ಸೇರಿಸಿ {#2-add-constants-to-wp-configphp}

ಈ ಕೆಳಗಿನ constants ಗಳನ್ನು ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ನಲ್ಲಿ `/* That's all, stop editing! */` ಲೈನ್‌ನ ಮೊದಲು ಸೇರಿಸಿ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL ಅನ್ನು ಆನ್ ಮಾಡಲು (ಶಿಫಾರಸು ಮಾಡಲಾಗಿದೆ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integration ಅನ್ನು ಆನ್ ಮಾಡಿ {#3-enable-the-integration}

1. ನಿಮ್ಮ WordPress network admin ನಲ್ಲಿ, **Ultimate Multisite** > **Settings** ಗೆ ಹೋಗಿ.
2. **Domain Mapping** ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ.
3. **Host Integrations** ಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ.
4. **CyberPanel** integration ಅನ್ನು ಆನ್ ಮಾಡಿ.
5. **Save Changes** ಕ್ಲಿಕ್ ಮಾಡಿ.

### 4. ಸಂಪರ್ಕವನ್ನು ಪರಿಶೀಲಿಸಿ {#4-verify-connectivity}

ಸೆಟ್ಟಿಂಗ್ಸ್ ವಿಸರ್ಡ್‌ನಲ್ಲಿ ಅಂತರ್ನಿರ್ಮಿತ connection test ಅನ್ನು ಬಳಸಿ:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** ಗೆ ಹೋಗಿ.
2. **Test Connection** ಕ್ಲಿಕ್ ಮಾಡಿ.
3. ಯಶಸ್ವಿ ಸಂದೇಶವು ಪ್ಲಗ್ಇನ್ CyberPanel API ಗೆ ತಲುಪಲು ಮತ್ತು ಸರಿಯಾಗಿ authenticate ಮಾಡಲು ಸಾಧ್ಯವಾಯಿತು ಎಂದು ಖಚಿತಪಡಿಸುತ್ತದೆ.

## ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ {#how-it-works}

### Domain Mapping {#domain-mapping}

Ultimate Multisite ನಲ್ಲಿ ಒಂದು ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ:

1. integration ನಿಮ್ಮ CyberPanel host ನಲ್ಲಿ `/api/createWebsite` ಗೆ ಒಂದು `POST` request ಅನ್ನು ಕಳುಹಿಸುತ್ತದೆ.
2. CyberPanel ಕಾನ್ಫಿಗರ್ ಮಾಡಿದ package ಅಡಿಯಲ್ಲಿ ಆ ಡೊಮೇನ್‌ಗಾಗಿ ಹೊಸ virtual host ಅನ್ನು ರಚಿಸುತ್ತದೆ.
3. document root ಅನ್ನು ನಿಮ್ಮ WordPress network root directory ಗೆ ತೋರಿಸಲು ಸೆಟ್ ಮಾಡಲಾಗುತ್ತದೆ.
4. ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅನ್ನು ತೆಗೆದುಹಾಕಿದಾಗ, virtual host ಅನ್ನು ಸ್ವಚ್ಛಗೊಳಿಸಲು integration `/api/deleteWebsite` ಅನ್ನು ಕರೆಯುತ್ತದೆ.

### Auto-SSL {#auto-ssl}

`WU_CYBERPANEL_AUTO_SSL` `true` ಆಗಿದ್ದರೆ:

1. virtual host ರಚನೆಯಾದ ನಂತರ, integration ಡೊಮೇನ್‌ಗಾಗಿ `/api/issueSSL` ಅನ್ನು ಕರೆಯುತ್ತದೆ.
2. CyberPanel ACME HTTP-01 challenge ಬಳಸಿ Let's Encrypt ಸರ್ಟಿಫಿಕೇಟ್ ಅನ್ನು ವಿನಂತಿಸುತ್ತದೆ.
3. ಸರ್ಟಿಫಿಕೇಟ್ ಅನ್ನು Expiry ಆಗುವ ಮೊದಲು CyberPanel ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನವೀಕರಿಸುತ್ತದೆ.

> **ಪ್ರಮುಖ:** Let's Encrypt ಗೆ ಡೊಮೇನ್ ಅನ್ನು ಪರಿಶೀಲಿಸಲು DNS ಸಂಪೂರ್ಣವಾಗಿ ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸಕ್ಕೆ ಪ್ರಸಾರವಾಗಬೇಕು. ಮ್ಯಾಪಿಂಗ್ ಮಾಡಿದ ತಕ್ಷಣ SSL issuance ವಿಫಲವಾದರೆ, DNS ಪ್ರಸಾರಕ್ಕಾಗಿ ಕಾಯಿರಿ ಮತ್ತು CyberPanel dashboard ನಲ್ಲಿ **SSL** > **Manage SSL** ಅಡಿಯಲ್ಲಿ SSL ಅನ್ನು ಮರು-ಪ್ರಚೋದಿಸಿ.

### www Subdomain {#www-subdomain}

ನಿಮ್ಮ Domain Mapping ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ **Auto-create www subdomain** ಆನ್ ಆಗಿದ್ದರೆ, integration `www.<domain>` ಗಾಗಿ virtual host alias ಅನ್ನು ಸಹ ರಚಿಸುತ್ತದೆ ಮತ್ತು auto-SSL ಆನ್ ಆಗಿದ್ದರೆ, apex ಮತ್ತು www ಎರಡೂ variants ಅನ್ನು ಒಳಗೊಂಡ ಸರ್ಟಿಫಿಕೇಟ್ ಅನ್ನು ನೀಡುತ್ತದೆ.

### Email Forwarders {#email-forwarders}

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon ಸಕ್ರಿಯವಾಗಿದ್ದರೆ, CyberPanel ಗ್ರಾಹಕರ ಇಮೇಲ್ ಫಾರ್ವರ್ಡರ್‌ಗಳನ್ನು ಸಹ ಒದಗಿಸುತ್ತದೆ. ಫಾರ್ವರ್ಡರ್‌ಗಳು ಸಂಪೂರ್ಣ ಮೇಲ್‌બોಕ್ಸ್ ಅನ್ನು ರಚಿಸದೆ, ಡೊಮೇನ್ ವಿಳಾಸದಿಂದ ಮತ್ತೊಂದು ಇನ್‌ಬಾಕ್ಸ್ ಗೆ ಸಂದೇಶಗಳನ್ನು ರೂಟ್ ಮಾಡುತ್ತವೆ. ಇದು `info@customer-domain.test` ಅಥವಾ `support@customer-domain.test` ನಂತಹ aliases ಗಾಗಿ ಉಪಯುಕ್ತವಾಗಿದೆ.

ಗ್ರಾಹಕರಿಗೆ ಫಾರ್ವರ್ಡರ್‌ಗಳನ್ನು ಆನ್ ಮಾಡುವ ಮೊದಲು:

1. ಮೇಲೆ ತಿಳಿಸಿದ CyberPanel constants ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಲಾಗಿದೆ ಮತ್ತು connection test ಯಶಸ್ವಿಯಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
2. Emails addon ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ CyberPanel email provider ಅನ್ನು ಆನ್ ಮಾಡಿ.
3. ಫಾರ್ವರ್ಡರ್ ರಚಿಸುವ ಮೊದಲು ಗ್ರಾಹಕ ಡೊಮೇನ್ CyberPanel ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
4. ಪ್ರೊಡಕ್ಷನ್ ಯೋಜನೆಗಳಲ್ಲಿ ಈ ವೈಶಿಷ್ಟ್ಯವನ್ನು ನೀಡುವ ಮೊದಲು ಒಂದು test forwarder ಅನ್ನು ರಚಿಸಿ ಮತ್ತು ಅದರ ಮೂಲಕ ಒಂದು ಸಂದೇಶವನ್ನು ಕಳುಹಿಸಿ.

ಫಾರ್ವರ್ಡರ್ ರಚನೆ ವಿಫಲವಾದರೆ, ಮೊದಲು Ultimate Multisite activity logs ಅನ್ನು ಪರಿಶೀಲಿಸಿ, ನಂತರ CyberPanel ನಲ್ಲಿ ಮೂಲ ಡೊಮೇನ್ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಮತ್ತು API ಬಳಕೆದಾರರಿಗೆ email-management permissions ಇದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.

## Configuration Reference {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | ನಿಮ್ಮ CyberPanel instance ಗೆ ಸಂಪೂರ್ಣ URL, ಪೋರ್ಟ್ ಸೇರಿದಂತೆ, ಉದಾಹರಣೆಗೆ. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | ಹೊಸ virtual hosts ಗೆ ನಿಯೋಜಿಸಲು CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | ಡೊಮೇನ್ ರಚನೆಯ ನಂತರ Let's Encrypt SSL ಸರ್ಟಿಫಿಕೇಟ್ ನೀಡುತ್ತದೆ |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | ಹೊಸ virtual hosts ಗಾಗಿ PHP ಆವೃತ್ತಿ (CyberPanel ನಲ್ಲಿ ಅಳವಡಿಸಲಾದ ಆವೃತ್ತಿಯೊಂದಿಗೆ ಹೊಂದಿಕೆಯಾಗಬೇಕು) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL ಸರ್ಟಿಫಿಕೇಟ್ ನೋಂದಣಿಗಾಗಿ ಸಂಪರ್ಕ ಇಮೇಲ್ |

## ಪ್ರಮುಖ ಟಿಪ್ಪಣಿಗಳು {#important-notes}

- CyberPanel ನ API session-based token authentication ಅನ್ನು ಬಳಸುತ್ತದೆ. ಪ್ರತಿ API ಕರೆಯಲ್ಲಿ integration ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಟೋಕನ್ ಸ್ವಾಧೀನವನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ.
- ನಿಮ್ಮ CyberPanel admin account ಗೆ ವೆಬ್‌ಸೈಟ್‌ಗಳನ್ನು ರಚಿಸಲು ಮತ್ತು ಅಳಿಸಲು ಅನುಮತಿ ಇರಬೇಕು.
- CyberPanel default ಆಗಿ `8090` ಪೋರ್ಟ್‌ನಲ್ಲಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ನಿಮ್ಮ ಸರ್ವರ್ ಫೈರ್‌ವಾಲ್ ಅನ್ನು ಬಳಸುತ್ತಿದ್ದರೆ, ಈ ಪೋರ್ಟ್ WordPress application server ನಿಂದ ಲಭ್ಯವಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- integration DNS records ಅನ್ನು ನಿರ್ವಹಿಸುವುದಿಲ್ಲ. Ultimate Multisite ನಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡುವ ಮೊದಲು ನೀವು ಡೊಮೇನ್ DNS ಅನ್ನು ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸಕ್ಕೆ ತೋರಿಸಬೇಕು.
- ನೀವು OpenLiteSpeed (OLS) ಅನ್ನು ಬಳಸಿದರೆ, virtual host ಬದಲಾವಣೆಗಳ ನಂತರ graceful restart ಸ್ವಯಂಚಾಲಿತವಾಗಿ décliged ಆಗುತ್ತದೆ. ಯಾವುದೇ manual intervention ಅಗತ್ಯವಿಲ್ಲ.

## ಸಮಸ್ಯೆ ಪರಿಹಾರ (Troubleshooting) {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- ನಿಮ್ಮ ಸರ್ವರ್ ಫೈರ್‌ವಾಲ್‌ನಲ್ಲಿ `8090` ಪೋರ್ಟ್ ತೆರೆದಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ.
- `WU_CYBERPANEL_HOST` ಮೌಲ್ಯವು ಸರಿಯಾದ protocol (`https://`) ಮತ್ತು ಪೋರ್ಟ್ ಅನ್ನು ಒಳಗೊಂಡಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ನಿಮ್ಮ CyberPanel SSL ಸರ್ಟಿಫಿಕೇಟ್ ಮಾನ್ಯವಾಗಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ; self-signed certificates ಗಳು TLS verification failure ಗೆ ಕಾರಣವಾಗಬಹುದು. ವಿಶ್ವಾಸಾರ್ಹ private network environment ನಲ್ಲಿ ಮಾತ್ರ `WU_CYBERPANEL_VERIFY_SSL` ಅನ್ನು `false` ಗೆ ಸೆಟ್ ಮಾಡಿ.

### Authentication Errors {#authentication-errors}

- CyberPanel ಗೆ ನೇರವಾಗಿ ಲಾಗಿನ್ ಮಾಡುವ ಮೂಲಕ ನಿಮ್ಮ `WU_CYBERPANEL_USERNAME` ಮತ್ತು `WU_CYBERPANEL_PASSWORD` ಸರಿಯಾಗಿವೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ.
- ಪದೇ ಪದೇ ವಿಫಲವಾದ ಲಾಗಿನ್ ಪ್ರಯತ್ನಗಳ ನಂತರ CyberPanel account ಗಳನ್ನು ಲಾಕ್ ಮಾಡುತ್ತದೆ. ಲಾಕ್‌ಔಟ್‌ಗಳು ಸಂಭವಿಸಿದರೆ CyberPanel ನಲ್ಲಿ **Security** > **Brute Force Monitor** ಅನ್ನು ಪರಿಶೀಲಿಸಿ.

### Domain Not Created {#domain-not-created}

- API error ಸಂದೇಶಗಳಿಗಾಗಿ Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) ಅನ್ನು ಪರಿಶೀಲಿಸಿ.
- `WU_CYBERPANEL_PACKAGE` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾದ package CyberPanel ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ ಎಂದು ಪರಿಶೀಲಿಸಿ (**Packages** > **List Packages**).
- ಡೊಮೇನ್ CyberPanel ನಲ್ಲಿ ಈಗಾಗಲೇ ವೆಬ್‌ಸೈಟ್ ಆಗಿ ನೋಂದಾಯಿಸಲಾಗಿಲ್ಲ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ — duplicate website creation ಒಂದು error ಅನ್ನು ನೀಡುತ್ತದೆ.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- DNS ಸಂಪೂರ್ಣವಾಗಿ ಪ್ರಸಾರವಾಗಿದೆ ಎಂದು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ: `dig +short your-domain.com` ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ಅನ್ನು ಮರಳಿ ನೀಡಬೇಕು.
- Let's Encrypt rate limits ಅನ್ನು ಜಾರಿಗೊಳಿಸುತ್ತದೆ. ನೀವು ಇತ್ತೀಚೆಗೆ ಅದೇ ಡೊಮೇನ್‌ಗಾಗಿ ಹಲವಾರು ಸರ್ಟಿಫಿಕೇಟ್‌ಗಳನ್ನು ನೀಡಿದ್ದರೆ, ಪ್ರಯತ್ನಿಸುವ ಮೊದಲು ಕಾಯಿರಿ.
- ಸರ್ಟಿಫಿಕೇಟ್ issuance ವಿಫಲತೆಗಳ ವಿವರಗಳಿಗಾಗಿ **Logs** > **Error Logs** ಅಡಿಯಲ್ಲಿ CyberPanel SSL logs ಅನ್ನು ಪರಿಶೀಲಿಸಿ.
- ಒಂದು fallback ಆಗಿ, ನೀವು CyberPanel ನಿಂದ manully SSL ಅನ್ನು ನೀಡಬಹುದು: **SSL** > **Manage SSL** > ಡೊಮೇನ್ ಅನ್ನು ಆಯ್ಕೆಮಾಡಿ > **Issue SSL**.

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
