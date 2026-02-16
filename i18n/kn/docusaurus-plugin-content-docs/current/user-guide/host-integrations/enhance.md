---
title: ನಿಯಂತ್ರಣ ಫಲಕ ಏಕೀಕರಣವನ್ನು ಸುಧಾರಿಸಿ
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel ಸಮನ್ವಯ

## ಅವಲೋಕನ
Enhance ಎಂಬುದು ಶಕ್ತಿಶಾಲಿ ಹೋಸ್ಟಿಂಗ್ ಸ್ವಯಂಚಾಲನೆ ಮತ್ತು ನಿರ್ವಹಣಾ ಸಾಮರ್ಥ್ಯಗಳನ್ನು ಒದಗಿಸುವ ಆಧುನಿಕ control panel ಆಗಿದೆ. ಈ ಸಮನ್ವಯವು Ultimate Multisite ಮತ್ತು Enhance Control Panel ನಡುವೆ ಸ್ವಯಂಚಾಲಿತ ಡೊಮೇನ್ ಸಿಂಕಿಂಗ್ ಮತ್ತು SSL ಪ್ರಮಾಣಪತ್ರ ನಿರ್ವಹಣೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ.

**ಸಂಬಂಧಿತ ಚರ್ಚೆ:** ಸಮುದಾಯದ ಸಲಹೆಗಳು ಮತ್ತು ಹೆಚ್ಚುವರಿ ಮಾಹಿತಿಗಾಗಿ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ನೋಡಿ.

## ವೈಶಿಷ್ಟ್ಯಗಳು
- Ultimate Multisite ನಲ್ಲಿ ಡೊಮೇನ್‌ಗಳನ್ನು ಮ್ಯಾಪ್ ಮಾಡಿದಾಗ ಸ್ವಯಂಚಾಲಿತ ಡೊಮೇನ್ ಸಿಂಕಿಂಗ್
- DNS ಪರಿಹಾರವಾದಾಗ LetsEncrypt ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತ SSL ಪ್ರಮಾಣಪತ್ರ ಒದಗಿಸುವಿಕೆ
- ಸಬ್‌ಡೊಮೇನ್ ಮೋಡ್‌ನಲ್ಲಿ ಚಾಲನೆಯಲ್ಲಿರುವ ನೆಟ್‌ವರ್ಕ್‌ಗಳಿಗೆ ಸಬ್‌ಡೊಮೇನ್ ಬೆಂಬಲ
- ಮ್ಯಾಪಿಂಗ್‌ಗಳನ್ನು ಅಳಿಸಿದಾಗ ಡೊಮೇನ್ ತೆಗೆಯುವಿಕೆ
- API ರುಜುವಾತುಗಳನ್ನು ಪರಿಶೀಲಿಸಲು ಸಂಪರ್ಕ ಪರೀಕ್ಷೆ

## ಅವಶ್ಯಕತೆಗಳು

### ಸಿಸ್ಟಮ್ ಅವಶ್ಯಕತೆಗಳು
- Enhance Control Panel ಸ್ಥಾಪಿತವಾಗಿ ಲಭ್ಯವಿರಬೇಕು
- Enhance ಸರ್ವರ್‌ನಲ್ಲಿ ಹೋಸ್ಟ್ ಮಾಡಲಾದ ಅಥವಾ ಸಂಪರ್ಕಿತವಾದ WordPress Multisite ಸ್ಥಾಪನೆ
- Apache ವೆಬ್ ಸರ್ವರ್ (Enhance ಪ್ರಸ್ತುತ Apache ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ; LiteSpeed Enterprise ಕಡಿಮೆ ವೆಚ್ಚದಲ್ಲಿ ಲಭ್ಯವಿದೆ)

### API ಪ್ರವೇಶ
API ಟೋಕನ್‌ಗಳನ್ನು ರಚಿಸಲು ನಿಮಗೆ Enhance Control Panel ಗೆ ನಿರ್ವಾಹಕ ಪ್ರವೇಶ ಇರಬೇಕು.

## ನಿಮ್ಮ API ರುಜುವಾತುಗಳನ್ನು ಪಡೆಯುವುದು

### 1. API ಟೋಕನ್ ರಚಿಸಿ

1. ನಿಮ್ಮ Enhance Control Panel ಗೆ ನಿರ್ವಾಹಕರಾಗಿ ಲಾಗ್ ಇನ್ ಮಾಡಿ
2. ನ್ಯಾವಿಗೇಶನ್ ಮೆನುವಿನಲ್ಲಿ **Settings** ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
3. **Access Tokens** ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
4. **Create Token** ಕ್ಲಿಕ್ ಮಾಡಿ
5. ಟೋಕನ್‌ಗೆ ವಿವರಣಾತ್ಮಕ ಹೆಸರು ನೀಡಿ (ಉದಾ., "Ultimate Multisite Integration")
6. **System Administrator** ಪಾತ್ರವನ್ನು ನಿಯೋಜಿಸಿ
7. ಅವಧಿ ಮುಕ್ತಾಯ ದಿನಾಂಕಕ್ಕಾಗಿ:
   - ಟೋಕನ್ ಎಂದಿಗೂ ಮುಕ್ತಾಯವಾಗಬಾರದೆಂದಿದ್ದರೆ ಖಾಲಿ ಬಿಡಿ
   - ಅಥವಾ ಭದ್ರತಾ ಉದ್ದೇಶಗಳಿಗಾಗಿ ನಿರ್ದಿಷ್ಟ ಮುಕ್ತಾಯ ದಿನಾಂಕ ಹೊಂದಿಸಿ
8. **Create** ಕ್ಲಿಕ್ ಮಾಡಿ

ರಚನೆಯ ನಂತರ, ನಿಮ್ಮ **Access Token** ಮತ್ತು **Organization ID** ಪ್ರದರ್ಶಿಸಲ್ಪಡುತ್ತದೆ. ಟೋಕನ್ ಒಮ್ಮೆ ಮಾತ್ರ ತೋರಿಸಲ್ಪಡುವುದರಿಂದ **ಇವುಗಳನ್ನು ತಕ್ಷಣ ಉಳಿಸಿ**.

### 2. ನಿಮ್ಮ Organization ID ಪಡೆಯಿರಿ

Organization ID ಅನ್ನು Access Tokens ಪುಟದಲ್ಲಿ "Org ID: {your_id}" ಎಂದು ಲೇಬಲ್ ಮಾಡಲಾದ ನೀಲಿ ಮಾಹಿತಿ ಬಾಕ್ಸ್‌ನಲ್ಲಿ ಪ್ರದರ್ಶಿಸಲಾಗುತ್ತದೆ.

Organization ID ಈ ರೀತಿಯ UUID ಫಾರ್ಮ್ಯಾಟ್‌ನಲ್ಲಿರುತ್ತದೆ: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ನೀವು ಗ್ರಾಹಕರ Organization ID ಅನ್ನು ಈ ರೀತಿ ಸಹ ಕಂಡುಹಿಡಿಯಬಹುದು:
1. **Customers** ಪುಟಕ್ಕೆ ಹೋಗಿ
2. ಸಂಬಂಧಿತ ಗ್ರಾಹಕರಿಗಾಗಿ **Manage customer** ಕ್ಲಿಕ್ ಮಾಡಿ
3. URL ನೋಡಿ - Organization ID ಎಂಬುದು `/customers/` ನಂತರದ ಅಕ್ಷರಾಂಕೀಯ ಅಕ್ಷರಗಳಾಗಿವೆ

### 3. ನಿಮ್ಮ Server ID ಪಡೆಯಿರಿ

ನಿಮ್ಮ Server ID ಕಂಡುಹಿಡಿಯಲು (ಡೊಮೇನ್ ಕಾರ್ಯಾಚರಣೆಗಳಿಗೆ ಅಗತ್ಯ):

1. Enhance Control Panel ನಲ್ಲಿ, **Servers** ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
2. ನಿಮ್ಮ WordPress ಸ್ಥಾಪನೆ ಚಾಲನೆಯಲ್ಲಿರುವ ಸರ್ವರ್ ಮೇಲೆ ಕ್ಲಿಕ್ ಮಾಡಿ
3. Server ID (UUID ಫಾರ್ಮ್ಯಾಟ್) URL ಅಥವಾ ಸರ್ವರ್ ವಿವರಗಳಲ್ಲಿ ಗೋಚರಿಸುತ್ತದೆ
4. ಪರ್ಯಾಯವಾಗಿ, ಸರ್ವರ್‌ಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಲು ನೀವು API ಬಳಸಬಹುದು:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

ಸರ್ವರ್ ID UUID ಫಾರ್ಮ್ಯಾಟ್ ಅನುಸರಿಸುತ್ತದೆ: `00000000-0000-0000-0000-000000000000`

### 4. ನಿಮ್ಮ API URL ಪಡೆಯಿರಿ

ನಿಮ್ಮ API URL ಎಂದರೆ ನಿಮ್ಮ Enhance Control Panel URL ಗೆ `/api/` ಸೇರಿಸಿದ್ದು:

```
https://your-enhance-panel.com/api/
```

**ಮುಖ್ಯ:** `/api/` ಮಾರ್ಗ ಅಗತ್ಯ. ಸಾಮಾನ್ಯ ತಪ್ಪುಗಳು ಸೇರಿವೆ:
- `/api/` ಇಲ್ಲದೆ ಕೇವಲ ಡೊಮೇನ್ ಬಳಸುವುದು
- HTTPS ಬದಲಿಗೆ HTTP ಬಳಸುವುದು (ಭದ್ರತೆಗಾಗಿ HTTPS ಅಗತ್ಯ)

## ಕಾನ್ಫಿಗರೇಶನ್

### ಅಗತ್ಯ Constants

ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಈ ಕೆಳಗಿನ constants ಸೇರಿಸಿ:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard ಮೂಲಕ ಸೆಟಪ್

1. ನಿಮ್ಮ WordPress admin ನಲ್ಲಿ, **Ultimate Multisite** > **Settings** ಗೆ ಹೋಗಿ
2. **Integrations** ಟ್ಯಾಬ್‌ಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡಿ
3. **Enhance Control Panel Integration** ಕಂಡುಹಿಡಿದು **Configuration** ಕ್ಲಿಕ್ ಮಾಡಿ
4. ವಿಝಾರ್ಡ್ ಸೆಟಪ್ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಮಾರ್ಗದರ್ಶಿಸುತ್ತದೆ:
   - **ಹಂತ 1:** ಪರಿಚಯ ಮತ್ತು ವೈಶಿಷ್ಟ್ಯ ಅವಲೋಕನ
   - **ಹಂತ 2:** ನಿಮ್ಮ API ರುಜುವಾತುಗಳನ್ನು ನಮೂದಿಸಿ (Token, API URL, Server ID)
   - **ಹಂತ 3:** ಸಂಪರ್ಕ ಪರೀಕ್ಷಿಸಿ
   - **ಹಂತ 4:** ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಸಕ್ರಿಯಗೊಳಿಸಿ

ನೀವು ಆಯ್ಕೆ ಮಾಡಬಹುದು:
- ವಿಝಾರ್ಡ್ ನಿಮ್ಮ `wp-config.php` ಫೈಲ್‌ಗೆ ಸ್ವಯಂಚಾಲಿತವಾಗಿ constants ಸೇರಿಸಲಿ
- constant ವ್ಯಾಖ್ಯಾನಗಳನ್ನು ನಕಲಿಸಿ ಹಸ್ತಚಾಲಿತವಾಗಿ ಸೇರಿಸಿ

## ಹೆಚ್ಚುವರಿ WordPress ಕಾನ್ಫಿಗರೇಶನ್

ಸಮುದಾಯದ ಪ್ರತಿಕ್ರಿಯೆಯ ಆಧಾರದ ಮೇಲೆ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ನೀವು ಈ ಹೆಚ್ಚುವರಿ ಸೆಟ್ಟಿಂಗ್‌ಗಳನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಬೇಕಾಗಬಹುದು:

### .htaccess ಕಾನ್ಫಿಗರೇಶನ್

ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್‌ನಲ್ಲಿ ಸಮಸ್ಯೆಗಳು ಅನುಭವಿಸಿದರೆ:
1. ಮೂಲ Enhance `.htaccess` ಫೈಲ್ ಅಳಿಸಿ
2. ಪ್ರಮಾಣಿತ WordPress Multisite `.htaccess` ಫೈಲ್‌ನೊಂದಿಗೆ ಬದಲಾಯಿಸಿ

### Cookie Constants

ಮ್ಯಾಪ್ ಮಾಡಿದ ಡೊಮೇನ್‌ಗಳಾದ್ಯಂತ ಸರಿಯಾದ cookie ನಿರ್ವಹಣೆಯನ್ನು ಖಚಿತಪಡಿಸಲು `wp-config.php` ಗೆ ಈ constants ಸೇರಿಸಿ:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ಇದು ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ

### ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಆದಾಗ

1. ಬಳಕೆದಾರರು Ultimate Multisite ನಲ್ಲಿ ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡುತ್ತಾರೆ (ಅಥವಾ ಸಬ್‌ಡೊಮೇನ್ ಮೋಡ್‌ನಲ್ಲಿ ಹೊಸ ಸೈಟ್ ರಚಿಸಲಾಗುತ್ತದೆ)
2. ಸಮನ್ವಯವು Enhance ನ API ಗೆ POST ವಿನಂತಿ ಕಳುಹಿಸುತ್ತದೆ: `/servers/{server_id}/domains`
3. Enhance ನಿಮ್ಮ ಸರ್ವರ್ ಕಾನ್ಫಿಗರೇಶನ್‌ಗೆ ಡೊಮೇನ್ ಸೇರಿಸುತ್ತದೆ
4. DNS ನಿಮ್ಮ ಸರ್ವರ್‌ಗೆ ಪರಿಹಾರವಾದಾಗ, Enhance LetsEncrypt ಮೂಲಕ ಸ್ವಯಂಚಾಲಿತವಾಗಿ SSL ಪ್ರಮಾಣಪತ್ರ ಒದಗಿಸುತ್ತದೆ
5. ಡೊಮೇನ್ HTTPS ನೊಂದಿಗೆ ಸಕ್ರಿಯವಾಗುತ್ತದೆ

### ಡೊಮೇನ್ ತೆಗೆದಾಗ

1. Ultimate Multisite ನಲ್ಲಿ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್ ಅಳಿಸಲಾಗುತ್ತದೆ
2. ಸಮನ್ವಯವು ಡೊಮೇನ್‌ನ ID ಕಂಡುಹಿಡಿಯಲು Enhance ಅನ್ನು ಪ್ರಶ್ನಿಸುತ್ತದೆ
3. DELETE ವಿನಂತಿ ಕಳುಹಿಸಲಾಗುತ್ತದೆ: `/servers/{server_id}/domains/{domain_id}`
4. Enhance ನಿಮ್ಮ ಸರ್ವರ್ ಕಾನ್ಫಿಗರೇಶನ್‌ನಿಂದ ಡೊಮೇನ್ ತೆಗೆಯುತ್ತದೆ

### DNS ಮತ್ತು SSL ಪರಿಶೀಲನೆ

Ultimate Multisite ಅಂತರ್ನಿರ್ಮಿತ DNS ಮತ್ತು SSL ಪರಿಶೀಲನೆಯನ್ನು ಒಳಗೊಂಡಿದೆ:
- ನೀವು **Domain Mapping Settings** ನಲ್ಲಿ ಪರಿಶೀಲನಾ ಮಧ್ಯಂತರವನ್ನು ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದು (ಡೀಫಾಲ್ಟ್: 300 ಸೆಕೆಂಡ್/5 ನಿಮಿಷಗಳು)
- ಡೊಮೇನ್ ಅನ್ನು ಸಕ್ರಿಯವೆಂದು ಗುರುತಿಸುವ ಮೊದಲು ಸಿಸ್ಟಮ್ DNS ಪ್ರಸರಣವನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ
- SSL ಪ್ರಮಾಣಪತ್ರ ಮಾನ್ಯತೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ
- Enhance SSL ಒದಗಿಸುವಿಕೆಯನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಹಸ್ತಚಾಲಿತ SSL ಕಾನ್ಫಿಗರೇಶನ್ ಅಗತ್ಯವಿಲ್ಲ

## ಸೆಟಪ್ ಪರಿಶೀಲನೆ

### ಸಂಪರ್ಕ ಪರೀಕ್ಷಿಸಿ

1. Integration Wizard ನಲ್ಲಿ, **Test Connection** ಹಂತ ಬಳಸಿ
2. plugin ನಿಮ್ಮ ಸರ್ವರ್‌ನಲ್ಲಿ ಡೊಮೇನ್‌ಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಲು ಪ್ರಯತ್ನಿಸುತ್ತದೆ
3. ಯಶಸ್ಸಿನ ಸಂದೇಶವು ದೃಢೀಕರಿಸುತ್ತದೆ:
   - API ರುಜುವಾತುಗಳು ಸರಿಯಾಗಿವೆ
   - API URL ಲಭ್ಯವಿದೆ
   - Server ID ಮಾನ್ಯವಾಗಿದೆ
   - ಅನುಮತಿಗಳು ಸರಿಯಾಗಿ ಹೊಂದಿಸಲಾಗಿದೆ

### ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿದ ನಂತರ

1. Ultimate Multisite ನಲ್ಲಿ ಪರೀಕ್ಷಾ ಡೊಮೇನ್ ಮ್ಯಾಪ್ ಮಾಡಿ
2. Ultimate Multisite ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel ನಲ್ಲಿ ಡೊಮೇನ್ ಸೇರಿಸಲಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ:
   - **Servers** > **Your Server** > **Domains** ಗೆ ಹೋಗಿ
   - ಹೊಸ ಡೊಮೇನ್ ಪಟ್ಟಿಯಲ್ಲಿ ಕಾಣಿಸಬೇಕು
4. DNS ಪ್ರಸರಣವಾದ ನಂತರ, SSL ಸ್ವಯಂಚಾಲಿತವಾಗಿ ಒದಗಿಸಲಾಗಿದೆಯೇ ಎಂದು ಪರಿಶೀಲಿಸಿ

## ಸಮಸ್ಯೆ ಪರಿಹಾರ

### API ಸಂಪರ್ಕ ಸಮಸ್ಯೆಗಳು

**ದೋಷ: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL` ಕೊನೆಯಲ್ಲಿ `/api/` ಒಳಗೊಂಡಿದೆಯೇ ಪರಿಶೀಲಿಸಿ
- ನೀವು HTTP ಅಲ್ಲ, HTTPS ಬಳಸುತ್ತಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿ
- Enhance panel ನಿಮ್ಮ WordPress ಸರ್ವರ್‌ನಿಂದ ಲಭ್ಯವಿದೆಯೇ ಪರಿಶೀಲಿಸಿ
- ಸಂಪರ್ಕವನ್ನು ತಡೆಯುವ ಯಾವುದೇ firewall ನಿಯಮಗಳಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ

**ದೋಷ: "Enhance API Token not found"**
- `WU_ENHANCE_API_TOKEN` `wp-config.php` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆಯೇ ಖಚಿತಪಡಿಸಿ
- ಟೋಕನ್ Enhance ನಲ್ಲಿ ಅಳಿಸಲಾಗಿಲ್ಲ ಅಥವಾ ಅವಧಿ ಮುಕ್ತಾಯವಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ಟೋಕನ್ ಮೌಲ್ಯದಲ್ಲಿ ಟೈಪೊಗಳಿವೆಯೇ ಪರಿಶೀಲಿಸಿ

**ದೋಷ: "Server ID is not configured"**
- `WU_ENHANCE_SERVER_ID` `wp-config.php` ನಲ್ಲಿ ವ್ಯಾಖ್ಯಾನಿಸಲಾಗಿದೆಯೇ ಪರಿಶೀಲಿಸಿ
- Server ID ಮಾನ್ಯ UUID ಫಾರ್ಮ್ಯಾಟ್‌ನಲ್ಲಿದೆಯೇ ಖಚಿತಪಡಿಸಿ
- ಸರ್ವರ್ ನಿಮ್ಮ Enhance panel ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆಯೇ ದೃಢೀಕರಿಸಿ

### ಡೊಮೇನ್ ಸೇರಿಸಲಾಗಲಿಲ್ಲ

**ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:**
1. **Ultimate Multisite** > **Logs** ಗೆ ಹೋಗಿ
2. **integration-enhance** ಮೂಲಕ ಫಿಲ್ಟರ್ ಮಾಡಿ
3. ಸಮಸ್ಯೆಯನ್ನು ಸೂಚಿಸುವ ದೋಷ ಸಂದೇಶಗಳನ್ನು ಹುಡುಕಿ

**ಸಾಮಾನ್ಯ ಕಾರಣಗಳು:**
- ಅಮಾನ್ಯ ಡೊಮೇನ್ ಹೆಸರು ಫಾರ್ಮ್ಯಾಟ್
- ಡೊಮೇನ್ ಈಗಾಗಲೇ Enhance ನಲ್ಲಿ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ
- ಅಸಮರ್ಪಕ API ಅನುಮತಿಗಳು (ಟೋಕನ್‌ಗೆ System Administrator ಪಾತ್ರ ಇದೆಯೇ ಖಚಿತಪಡಿಸಿ)
- Server ID Enhance ನಲ್ಲಿನ ನಿಜವಾದ ಸರ್ವರ್‌ಗೆ ಹೊಂದಿಕೆಯಾಗುತ್ತಿಲ್ಲ

### SSL ಪ್ರಮಾಣಪತ್ರ ಸಮಸ್ಯೆಗಳು

**SSL ಒದಗಿಸಲಾಗುತ್ತಿಲ್ಲ:**
- DNS ನಿಮ್ಮ ಸರ್ವರ್‌ನ IP ವಿಳಾಸಕ್ಕೆ ಪಾಯಿಂಟ್ ಆಗಿದೆಯೇ ಪರಿಶೀಲಿಸಿ
- ಡೊಮೇನ್ ಸರಿಯಾಗಿ ಪರಿಹಾರವಾಗುತ್ತದೆಯೇ ಪರಿಶೀಲಿಸಿ: `nslookup yourdomain.com`
- SSL ಒದಗಿಸುವ ಮೊದಲು Enhance ಗೆ DNS ಪರಿಹಾರವಾಗಬೇಕು
- SSL ಒದಗಿಸುವಿಕೆ ಸಾಮಾನ್ಯವಾಗಿ DNS ಪ್ರಸರಣದ ನಂತರ 5-10 ನಿಮಿಷಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ
- SSL-ನಿರ್ದಿಷ್ಟ ದೋಷಗಳಿಗಾಗಿ Enhance Control Panel ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ

**Enhance ನಲ್ಲಿ ಹಸ್ತಚಾಲಿತ SSL ಸಮಸ್ಯೆ ಪರಿಹಾರ:**
1. **Servers** > **Your Server** > **Domains** ಗೆ ಹೋಗಿ
2. ನಿಮ್ಮ ಡೊಮೇನ್ ಕಂಡುಹಿಡಿದು ಅದರ SSL ಸ್ಥಿತಿ ಪರಿಶೀಲಿಸಿ
3. ಅಗತ್ಯವಿದ್ದರೆ ಹಸ್ತಚಾಲಿತವಾಗಿ SSL ಒದಗಿಸುವಿಕೆಯನ್ನು ಪ್ರಚೋದಿಸಬಹುದು

### DNS ಪರಿಶೀಲನಾ ಮಧ್ಯಂತರ

ಡೊಮೇನ್‌ಗಳು ಅಥವಾ SSL ಪ್ರಮಾಣಪತ್ರಗಳು ಸಕ್ರಿಯಗೊಳ್ಳಲು ತುಂಬಾ ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತಿದ್ದರೆ:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** ಗೆ ಹೋಗಿ
2. **DNS Check Interval** ಸೆಟ್ಟಿಂಗ್ ಕಂಡುಹಿಡಿಯಿರಿ
3. ಡೀಫಾಲ್ಟ್ 300 ಸೆಕೆಂಡ್‌ಗಳಿಂದ ಕಡಿಮೆ ಮೌಲ್ಯಕ್ಕೆ ಹೊಂದಿಸಿ (ಕನಿಷ್ಠ: 10 ಸೆಕೆಂಡ್)
4. **ಗಮನಿಸಿ:** ಕಡಿಮೆ ಮಧ್ಯಂತರಗಳು ಹೆಚ್ಚು ಆಗಾಗ ಪರಿಶೀಲನೆಗಳನ್ನು ಅರ್ಥೈಸುತ್ತವೆ ಆದರೆ ಹೆಚ್ಚಿನ ಸರ್ವರ್ ಲೋಡ್

### ದೃಢೀಕರಣ ದೋಷಗಳು

**HTTP 401/403 ದೋಷಗಳು:**
- Enhance ನಲ್ಲಿ ನಿಮ್ಮ API ಟೋಕನ್ ಮರು-ಉತ್ಪಾದಿಸಿ
- ಟೋಕನ್‌ಗೆ **System Administrator** ಪಾತ್ರ ಇದೆಯೇ ಪರಿಶೀಲಿಸಿ
- ಟೋಕನ್ ಅವಧಿ ಮುಕ್ತಾಯವಾಗಿಲ್ಲ ಎಂದು ಪರಿಶೀಲಿಸಿ
- ನೀವು ಸರಿಯಾದ Organization ID ಬಳಸುತ್ತಿದ್ದೀರಿ ಎಂದು ಖಚಿತಪಡಿಸಿ (URL ನಲ್ಲಿ ಸಾಮಾನ್ಯವಾಗಿ ಅಗತ್ಯವಿಲ್ಲ)

### ಲಾಗ್ ವಿಶ್ಲೇಷಣೆ

ವಿವರವಾದ ಲಾಗಿಂಗ್ ಸಕ್ರಿಯಗೊಳಿಸಿ:
```php
// ವರ್ಧಿತ ಡೀಬಗ್ಗಿಂಗ್‌ಗಾಗಿ wp-config.php ಗೆ ಸೇರಿಸಿ
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

ನಂತರ ಇಲ್ಲಿ ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ:
- Ultimate Multisite ಲಾಗ್‌ಗಳು: **Ultimate Multisite** > **Logs**
- WordPress debug ಲಾಗ್: `wp-content/debug.log`
- Enhance panel ಲಾಗ್‌ಗಳು: Enhance ನ admin interface ನಲ್ಲಿ ಲಭ್ಯ

## API ಉಲ್ಲೇಖ

### ದೃಢೀಕರಣ
ಎಲ್ಲಾ API ವಿನಂತಿಗಳು Bearer token ದೃಢೀಕರಣ ಬಳಸುತ್ತವೆ:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ಬಳಸಲಾದ ಸಾಮಾನ್ಯ Endpoints

**ಸರ್ವರ್‌ಗಳ ಪಟ್ಟಿ:**
```
GET /servers
```

**ಸರ್ವರ್‌ನಲ್ಲಿ ಡೊಮೇನ್‌ಗಳ ಪಟ್ಟಿ:**
```
GET /servers/{server_id}/domains
```

**ಡೊಮೇನ್ ಸೇರಿಸಿ:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**ಡೊಮೇನ್ ಅಳಿಸಿ:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### ಸಂಪೂರ್ಣ API ದಸ್ತಾವೇಜನೆ
ಸಂಪೂರ್ಣ API ದಸ್ತಾವೇಜನೆ: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## ಉತ್ತಮ ಅಭ್ಯಾಸಗಳು

### ಭದ್ರತೆ
- **API ಟೋಕನ್‌ಗಳನ್ನು ಎಂದಿಗೂ version control ಗೆ commit ಮಾಡಬೇಡಿ**
- ಟೋಕನ್‌ಗಳನ್ನು `wp-config.php` ನಲ್ಲಿ ಸಂಗ್ರಹಿಸಿ, ಇದು Git ನಿಂದ ಹೊರಗಿಡಬೇಕು
- ಸೂಕ್ತ ಅನುಮತಿಗಳೊಂದಿಗೆ ಟೋಕನ್‌ಗಳನ್ನು ಬಳಸಿ (ಸಂಪೂರ್ಣ ಸಮನ್ವಯಕ್ಕಾಗಿ System Administrator)
- ಉತ್ಪಾದನಾ ಪರಿಸರಗಳಿಗೆ ಟೋಕನ್ ಅವಧಿ ಮುಕ್ತಾಯ ದಿನಾಂಕಗಳನ್ನು ಹೊಂದಿಸಿ
- ಟೋಕನ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ತಿರುಗಿಸಿ

### ಕಾರ್ಯಕ್ಷಮತೆ
- ಅತಿಯಾದ API ಕರೆಗಳನ್ನು ತಪ್ಪಿಸಲು ಡೀಫಾಲ್ಟ್ DNS ಪರಿಶೀಲನಾ ಮಧ್ಯಂತರ (300 ಸೆಕೆಂಡ್) ಬಳಸಿ
- ದೊಡ್ಡ ಪ್ರಮಾಣದ ಡೊಮೇನ್ ಕಾರ್ಯಾಚರಣೆಗಳನ್ನು ನಡೆಸುವಾಗ Enhance ಸರ್ವರ್ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಮೇಲ್ವಿಚಾರಣೆ ಮಾಡಿ
- ಅನೇಕ ಡೊಮೇನ್‌ಗಳನ್ನು ಒಮ್ಮೆಗೇ ಮ್ಯಾಪ್ ಮಾಡುತ್ತಿದ್ದರೆ ಡೊಮೇನ್ ಸೇರ್ಪಡೆಗಳನ್ನು ಹಂತ ಹಂತವಾಗಿ ಮಾಡುವುದನ್ನು ಪರಿಗಣಿಸಿ

### ಮೇಲ್ವಿಚಾರಣೆ
- ಸಮನ್ವಯ ದೋಷಗಳಿಗಾಗಿ Ultimate Multisite ಲಾಗ್‌ಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಪರಿಶೀಲಿಸಿ
- ವಿಫಲ ಡೊಮೇನ್ ಸೇರ್ಪಡೆಗಳಿಗಾಗಿ ಮೇಲ್ವಿಚಾರಣೆ ಹೊಂದಿಸಿ
- SSL ಪ್ರಮಾಣಪತ್ರಗಳು ಸರಿಯಾಗಿ ಒದಗಿಸಲಾಗುತ್ತಿವೆಯೇ ಪರಿಶೀಲಿಸಿ
- Enhance ಸರ್ವರ್ ಸಾಮರ್ಥ್ಯ ಮತ್ತು ಡೊಮೇನ್ ಮಿತಿಗಳ ಮೇಲೆ ಗಮನ ಇಡಿ

## ಹೆಚ್ಚುವರಿ ಸಂಪನ್ಮೂಲಗಳು

- **Enhance ಅಧಿಕೃತ ದಸ್ತಾವೇಜನೆ:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API ದಸ್ತಾವೇಜನೆ:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance ಸಮುದಾಯ ಫೋರಮ್:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub ಚರ್ಚೆ:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping ಮಾರ್ಗದರ್ಶಿ:** "How to Configure Domain Mapping v2" wiki ಪುಟ ನೋಡಿ

## ಬೆಂಬಲ

ನೀವು ಸಮಸ್ಯೆಗಳನ್ನು ಎದುರಿಸಿದರೆ:
1. ಮೇಲಿನ ಸಮಸ್ಯೆ ಪರಿಹಾರ ವಿಭಾಗವನ್ನು ಪರಿಶೀಲಿಸಿ
2. Ultimate Multisite ಲಾಗ್‌ಗಳನ್ನು ಪರಿಶೀಲಿಸಿ
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) ಸಂಪರ್ಕಿಸಿ
4. panel-ನಿರ್ದಿಷ್ಟ ಸಮಸ್ಯೆಗಳಿಗೆ Enhance ಬೆಂಬಲವನ್ನು ಸಂಪರ್ಕಿಸಿ
5. ಸಮುದಾಯ ಸಹಾಯಕ್ಕಾಗಿ ವಿವರವಾದ ದೋಷ ಲಾಗ್‌ಗಳೊಂದಿಗೆ ಹೊಸ ಚರ್ಚೆ ರಚಿಸಿ

## ಟಿಪ್ಪಣಿಗಳು

- ಈ ಸಮನ್ವಯವು ಕೇವಲ ಡೊಮೇನ್ aliases ಅನ್ನು ನಿರ್ವಹಿಸುತ್ತದೆ; Enhance SSL ಅನ್ನು ಸ್ವಯಂಚಾಲಿತವಾಗಿ ನಿರ್ವಹಿಸುತ್ತದೆ
- ಸಮನ್ವಯವು ಕಸ್ಟಮ್ ಡೊಮೇನ್ ಮ್ಯಾಪಿಂಗ್‌ಗಳು ಮತ್ತು ಸಬ್‌ಡೊಮೇನ್-ಆಧಾರಿತ ಸೈಟ್‌ಗಳೆರಡನ್ನೂ ಬೆಂಬಲಿಸುತ್ತದೆ
- ಸ್ವಯಂಚಾಲಿತ www ಸಬ್‌ಡೊಮೇನ್ ರಚನೆಯನ್ನು Domain Mapping ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಕಾನ್ಫಿಗರ್ ಮಾಡಬಹುದು
- Enhance ಪ್ರಸ್ತುತ Apache ಕಾನ್ಫಿಗರೇಶನ್‌ಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ (LiteSpeed Enterprise ಲಭ್ಯ)
- Ultimate Multisite ನಿಂದ ಡೊಮೇನ್ ತೆಗೆಯುವಿಕೆಯು Enhance ನಿಂದ ಡೊಮೇನ್ ಅನ್ನು ತೆಗೆಯುತ್ತದೆ ಆದರೆ ಸಂಬಂಧಿತ SSL ಪ್ರಮಾಣಪತ್ರಗಳನ್ನು ತಕ್ಷಣ ಅಳಿಸದಿರಬಹುದು
