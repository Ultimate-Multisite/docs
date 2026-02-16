---
title: RunCloud സംയോജനം
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud Integration

## അവലോകനം
RunCloud ഒരു cloud-based server management platform ആണ്, ഇത് നിങ്ങളുടെ സ്വന്തം cloud servers-ൽ web applications എളുപ്പത്തിൽ deploy ചെയ്യാനും manage ചെയ്യാനും സഹായിക്കുന്നു. ഈ integration Ultimate Multisite-ഉം RunCloud-ഉം തമ്മിൽ automatic domain syncing-ഉം SSL certificate management-ഉം സാധ്യമാക്കുന്നു.

## സവിശേഷതകൾ
- Automatic domain syncing
- SSL certificate management
- Mappings നീക്കം ചെയ്യുമ്പോൾ domain removal

## ആവശ്യകതകൾ
നിങ്ങളുടെ `wp-config.php` ഫയലിൽ താഴെപ്പറയുന്ന constants നിർവചിക്കണം:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## Setup നിർദ്ദേശങ്ങൾ

### 1. നിങ്ങളുടെ RunCloud API Credentials നേടുക

1. നിങ്ങളുടെ RunCloud dashboard-ൽ log in ചെയ്യുക
2. "User Profile"-ലേക്ക് പോകുക (മുകളിൽ വലത് മൂലയിലുള്ള നിങ്ങളുടെ profile picture-ൽ click ചെയ്യുക)
3. Menu-വിൽ നിന്ന് "API" തിരഞ്ഞെടുക്കുക
4. നിങ്ങൾക്ക് ഇതിനകം ഒന്നില്ലെങ്കിൽ "Generate API Key" click ചെയ്യുക
5. നിങ്ങളുടെ API Key-ഉം API Secret-ഉം copy ചെയ്യുക

### 2. നിങ്ങളുടെ Server-ഉം App IDs-ഉം നേടുക

1. നിങ്ങളുടെ RunCloud dashboard-ൽ "Servers"-ലേക്ക് പോകുക
2. നിങ്ങളുടെ WordPress multisite host ചെയ്തിരിക്കുന്ന server തിരഞ്ഞെടുക്കുക
3. Server ID URL-ൽ കാണാം: `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications"-ലേക്ക് പോയി നിങ്ങളുടെ WordPress application തിരഞ്ഞെടുക്കുക
5. App ID URL-ൽ കാണാം: `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### 3. wp-config.php-ൽ Constants ചേർക്കുക

നിങ്ങളുടെ `wp-config.php` ഫയലിൽ താഴെപ്പറയുന്ന constants ചേർക്കുക:

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### 4. Integration Enable ചെയ്യുക

1. നിങ്ങളുടെ WordPress admin-ൽ Ultimate Multisite > Settings-ലേക്ക് പോകുക
2. "Domain Mapping" tab-ലേക്ക് navigate ചെയ്യുക
3. "Host Integrations"-ലേക്ക് scroll down ചെയ്യുക
4. RunCloud integration enable ചെയ്യുക
5. "Save Changes" click ചെയ്യുക

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

Ultimate Multisite-ൽ ഒരു domain map ചെയ്യുമ്പോൾ:

1. Integration നിങ്ങളുടെ application-ലേക്ക് domain ചേർക്കാൻ RunCloud-ന്റെ API-ലേക്ക് ഒരു request അയയ്ക്കുന്നു
2. Domain വിജയകരമായി ചേർത്താൽ, integration SSL certificates-ഉം redeploy ചെയ്യും
3. ഒരു domain mapping നീക്കം ചെയ്യുമ്പോൾ, integration RunCloud-ൽ നിന്ന് domain നീക്കം ചെയ്യും

Subdomain installations-ന്, നിങ്ങളുടെ network-ലേക്ക് പുതിയ sites ചേർക്കുമ്പോൾ RunCloud-ൽ subdomains-ന്റെ creation integration automatically handle ചെയ്യും.

## പ്രശ്നപരിഹാരം

### API Connection പ്രശ്നങ്ങൾ
- നിങ്ങളുടെ API credentials ശരിയാണോ എന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ server-ഉം app IDs-ഉം ശരിയാണോ എന്ന് ഉറപ്പാക്കുക
- നിങ്ങളുടെ RunCloud account-ന് ആവശ്യമായ permissions ഉണ്ടെന്ന് ഉറപ്പാക്കുക

### SSL Certificate പ്രശ്നങ്ങൾ
- SSL certificates issue ചെയ്യാൻ RunCloud-ന് കുറച്ച് സമയം എടുത്തേക്കാം
- നിങ്ങളുടെ domains നിങ്ങളുടെ server-ന്റെ IP address-ലേക്ക് ശരിയായി point ചെയ്തിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ application-ന്റെ RunCloud SSL settings പരിശോധിക്കുക

### Domain ചേർക്കപ്പെട്ടില്ല
- ഏതെങ്കിലും error messages-ന് വേണ്ടി Ultimate Multisite logs പരിശോധിക്കുക
- Domain ഇതിനകം RunCloud-ൽ ചേർത്തിട്ടില്ല എന്ന് ഉറപ്പാക്കുക
- നിങ്ങളുടെ RunCloud plan multiple domains support ചെയ്യുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക
