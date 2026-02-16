---
title: cPanel സംയോജനം
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ഇന്റഗ്രേഷൻ

## അവലോകനം
cPanel ആണ് ഏറ്റവും പ്രചാരമുള്ള വെബ് ഹോസ്റ്റിംഗ് കൺട്രോൾ പാനലുകളിൽ ഒന്ന്, പല shared, dedicated ഹോസ്റ്റിംഗ് പ്രൊവൈഡർമാരും ഇത് ഉപയോഗിക്കുന്നു. Ultimate Multisite-ഉം cPanel-ഉം തമ്മിലുള്ള ഓട്ടോമാറ്റിക് ഡൊമെയ്ൻ സിങ്കിംഗ് ഈ ഇന്റഗ്രേഷൻ സാധ്യമാക്കുന്നു, ഇത് നിങ്ങളുടെ cPanel അക്കൗണ്ടിലേക്ക് ഡൊമെയ്ൻ aliases-ഉം subdomains-ഉം സ്വയമേവ ചേർക്കാൻ നിങ്ങളെ അനുവദിക്കുന്നു.

## സവിശേഷതകൾ
- cPanel-ൽ ഓട്ടോമാറ്റിക് addon domain നിർമ്മാണം
- cPanel-ൽ ഓട്ടോമാറ്റിക് subdomain നിർമ്മാണം (subdomain multisite ഇൻസ്റ്റാളേഷനുകൾക്ക്)
- mappings നീക്കം ചെയ്യുമ്പോൾ ഡൊമെയ്ൻ നീക്കംചെയ്യൽ

## ആവശ്യകതകൾ
നിങ്ങളുടെ `wp-config.php` ഫയലിൽ താഴെപ്പറയുന്ന constants നിർവചിക്കണം:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ഓപ്ഷണലായി, നിങ്ങൾക്ക് ഇവയും നിർവചിക്കാം:

```php
define('WU_CPANEL_PORT', 2083); // Default 2083 ആണ്
define('WU_CPANEL_ROOT_DIR', '/public_html'); // Default /public_html ആണ്
```

## സെറ്റപ്പ് നിർദ്ദേശങ്ങൾ

### 1. നിങ്ങളുടെ cPanel ക്രെഡൻഷ്യലുകൾ നേടുക

1. നിങ്ങളുടെ ഹോസ്റ്റിംഗ് പ്രൊവൈഡറിൽ നിന്ന് cPanel യൂസർനെയിമും പാസ്‌വേഡും നേടുക
2. നിങ്ങളുടെ cPanel host നിർണ്ണയിക്കുക (സാധാരണയായി `cpanel.yourdomain.com` അല്ലെങ്കിൽ `yourdomain.com:2083`)

### 2. wp-config.php-ൽ Constants ചേർക്കുക

നിങ്ങളുടെ `wp-config.php` ഫയലിൽ താഴെപ്പറയുന്ന constants ചേർക്കുക:

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ഓപ്ഷണലായി, port-ഉം root directory-യും ഇഷ്ടാനുസരണം മാറ്റാം:

```php
define('WU_CPANEL_PORT', 2083); // നിങ്ങളുടെ cPanel വേറൊരു port ഉപയോഗിക്കുന്നെങ്കിൽ മാറ്റുക
define('WU_CPANEL_ROOT_DIR', '/public_html'); // നിങ്ങളുടെ document root വ്യത്യസ്തമാണെങ്കിൽ മാറ്റുക
```

### 3. ഇന്റഗ്രേഷൻ പ്രവർത്തനക്ഷമമാക്കുക

1. നിങ്ങളുടെ WordPress admin-ൽ, Ultimate Multisite > Settings-ലേക്ക് പോകുക
2. "Domain Mapping" ടാബിലേക്ക് നാവിഗേറ്റ് ചെയ്യുക
3. "Host Integrations" എന്നതിലേക്ക് സ്ക്രോൾ ചെയ്യുക
4. cPanel ഇന്റഗ്രേഷൻ പ്രവർത്തനക്ഷമമാക്കുക
5. "Save Changes" ക്ലിക്ക് ചെയ്യുക

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

### Addon Domains

Ultimate Multisite-ൽ ഒരു ഡൊമെയ്ൻ map ചെയ്യുമ്പോൾ:

1. ഡൊമെയ്ൻ ഒരു addon domain ആയി ചേർക്കാൻ ഇന്റഗ്രേഷൻ cPanel-ന്റെ API-യിലേക്ക് ഒരു request അയയ്ക്കുന്നു
2. ഡൊമെയ്ൻ നിങ്ങളുടെ root directory-യിലേക്ക് പോയിന്റ് ചെയ്യാൻ കോൺഫിഗർ ചെയ്യുന്നു
3. ഒരു domain mapping നീക്കം ചെയ്യുമ്പോൾ, ഇന്റഗ്രേഷൻ cPanel-ൽ നിന്ന് addon domain നീക്കം ചെയ്യും

### Subdomains

Subdomain multisite ഇൻസ്റ്റാളേഷനുകളിൽ, ഒരു പുതിയ സൈറ്റ് സൃഷ്ടിക്കുമ്പോൾ:

1. ഇന്റഗ്രേഷൻ മുഴുവൻ ഡൊമെയ്നിൽ നിന്ന് subdomain ഭാഗം എക്സ്ട്രാക്ട് ചെയ്യുന്നു
2. subdomain ചേർക്കാൻ cPanel-ന്റെ API-യിലേക്ക് ഒരു request അയയ്ക്കുന്നു
3. subdomain നിങ്ങളുടെ root directory-യിലേക്ക് പോയിന്റ് ചെയ്യാൻ കോൺഫിഗർ ചെയ്യുന്നു

## പ്രധാനപ്പെട്ട കുറിപ്പുകൾ

- നിങ്ങളുടെ cPanel അക്കൗണ്ടുമായി ആശയവിനിമയം നടത്താൻ ഇന്റഗ്രേഷൻ cPanel-ന്റെ API2 ഉപയോഗിക്കുന്നു
- addon domains-ഉം subdomains-ഉം ചേർക്കാനുള്ള അനുമതികൾ നിങ്ങളുടെ cPanel അക്കൗണ്ടിന് ഉണ്ടായിരിക്കണം
- ചില ഹോസ്റ്റിംഗ് പ്രൊവൈഡർമാർ നിങ്ങൾക്ക് സൃഷ്ടിക്കാവുന്ന addon domains-ന്റെയോ subdomains-ന്റെയോ എണ്ണം പരിമിതപ്പെടുത്തിയേക്കാം
- ഇന്റഗ്രേഷൻ DNS കോൺഫിഗറേഷൻ കൈകാര്യം ചെയ്യുന്നില്ല; നിങ്ങളുടെ ഡൊമെയ്നുകൾ സെർവറിന്റെ IP വിലാസത്തിലേക്ക് പോയിന്റ് ചെയ്യേണ്ടത് നിങ്ങൾ തന്നെയാണ്

## പ്രശ്നപരിഹാരം

### API കണക്ഷൻ പ്രശ്നങ്ങൾ
- നിങ്ങളുടെ cPanel യൂസർനെയിമും പാസ്‌വേഡും ശരിയാണെന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ cPanel host ശരിയാണെന്നും ആക്സസ് ചെയ്യാവുന്നതാണെന്നും ഉറപ്പാക്കുക
- നിങ്ങളുടെ cPanel അക്കൗണ്ടിന് ആവശ്യമായ അനുമതികൾ ഉണ്ടെന്ന് ഉറപ്പാക്കുക
- host-ന് മുഴുവൻ URL ഉപയോഗിച്ച് ശ്രമിക്കുക (ഉദാ: `https://cpanel.yourdomain.com`)

### ഡൊമെയ്ൻ ചേർക്കപ്പെട്ടില്ല
- എന്തെങ്കിലും error messages-ന് Ultimate Multisite logs പരിശോധിക്കുക
- ഡൊമെയ്ൻ ഇതിനകം cPanel-ൽ ചേർത്തിട്ടില്ലെന്ന് പരിശോധിക്കുക
- addon domains-ന്റെയോ subdomains-ന്റെയോ പരിധി നിങ്ങളുടെ cPanel അക്കൗണ്ടിൽ എത്തിയിട്ടില്ലെന്ന് ഉറപ്പാക്കുക

### SSL Certificate പ്രശ്നങ്ങൾ
- SSL certificate നൽകൽ ഇന്റഗ്രേഷൻ കൈകാര്യം ചെയ്യുന്നില്ല
- നിങ്ങളുടെ ഡൊമെയ്നുകൾക്ക് SSL certificates നൽകാൻ cPanel-ന്റെ SSL/TLS ടൂളുകളോ AutoSSL ഫീച്ചറോ ഉപയോഗിക്കേണ്ടതുണ്ട്
- പകരമായി, cPanel-ന്റെ AutoSSL-നൊപ്പം Let's Encrypt പോലുള്ള ഒരു സേവനം ഉപയോഗിക്കാം
