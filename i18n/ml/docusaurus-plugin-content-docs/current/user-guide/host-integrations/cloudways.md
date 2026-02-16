---
title: Cloudways സംയോജനം
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ഇന്റഗ്രേഷൻ

## അവലോകനം
Cloudways ഒരു managed cloud hosting പ്ലാറ്റ്ഫോമാണ്, DigitalOcean, AWS, Google Cloud തുടങ്ങിയ വിവിധ cloud providers-ൽ WordPress സൈറ്റുകൾ deploy ചെയ്യാൻ ഇത് നിങ്ങളെ അനുവദിക്കുന്നു. Ultimate Multisite-ഉം Cloudways-ഉം തമ്മിൽ ഓട്ടോമാറ്റിക് domain syncing-ഉം SSL certificate management-ഉം ഈ ഇന്റഗ്രേഷൻ സാധ്യമാക്കുന്നു.

## സവിശേഷതകൾ
- ഓട്ടോമാറ്റിക് domain syncing
- SSL certificate management
- അധിക domains-നുള്ള പിന്തുണ
- SSL certificates-നായി DNS validation

## ആവശ്യകതകൾ
താഴെ പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ define ചെയ്തിരിക്കണം:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ഓപ്ഷണലായി, നിങ്ങൾക്ക് ഇതും define ചെയ്യാം:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## സെറ്റപ്പ് നിർദ്ദേശങ്ങൾ

### 1. നിങ്ങളുടെ Cloudways API ക്രെഡൻഷ്യലുകൾ നേടുക

1. നിങ്ങളുടെ Cloudways dashboard-ൽ ലോഗിൻ ചെയ്യുക
2. "Account" > "API Keys" എന്നതിലേക്ക് പോകുക
3. നിങ്ങൾക്ക് ഇതുവരെ API key ഇല്ലെങ്കിൽ ഒരെണ്ണം generate ചെയ്യുക
4. നിങ്ങളുടെ email-ഉം API key-യും copy ചെയ്യുക

### 2. നിങ്ങളുടെ Server-ഉം Application IDs-ഉം നേടുക

1. നിങ്ങളുടെ Cloudways dashboard-ൽ, "Servers" എന്നതിലേക്ക് പോകുക
2. നിങ്ങളുടെ WordPress multisite host ചെയ്തിരിക്കുന്ന server തിരഞ്ഞെടുക്കുക
3. Server ID URL-ൽ കാണാം: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" എന്നതിലേക്ക് പോയി നിങ്ങളുടെ WordPress application തിരഞ്ഞെടുക്കുക
5. App ID URL-ൽ കാണാം: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-ൽ Constants ചേർക്കുക

താഴെ പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ ചേർക്കുക:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

എപ്പോഴും ഉൾപ്പെടുത്തേണ്ട അധിക domains ഉണ്ടെങ്കിൽ:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### 4. ഇന്റഗ്രേഷൻ പ്രവർത്തനക്ഷമമാക്കുക

1. നിങ്ങളുടെ WordPress admin-ൽ, Ultimate Multisite > Settings എന്നതിലേക്ക് പോകുക
2. "Domain Mapping" tab-ലേക്ക് നാവിഗേറ്റ് ചെയ്യുക
3. "Host Integrations" എന്നതിലേക്ക് സ്ക്രോൾ ചെയ്യുക
4. Cloudways ഇന്റഗ്രേഷൻ enable ചെയ്യുക
5. "Save Changes" ക്ലിക്ക് ചെയ്യുക

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

### Domain Syncing

Ultimate Multisite-ൽ ഒരു domain map ചെയ്യുമ്പോൾ:

1. നിലവിൽ map ചെയ്ത എല്ലാ domains-ഉം ഇന്റഗ്രേഷൻ retrieve ചെയ്യുന്നു
2. പുതിയ domain (ബാധകമെങ്കിൽ www version-ഉം ചേർത്ത്) ലിസ്റ്റിലേക്ക് ചേർക്കുന്നു
3. പൂർണ്ണ ലിസ്റ്റ് API വഴി Cloudways-ലേക്ക് അയയ്ക്കുന്നു
4. നിങ്ങളുടെ application-നായി Cloudways domain aliases അപ്ഡേറ്റ് ചെയ്യുന്നു

ശ്രദ്ധിക്കുക: Cloudways API-യ്ക്ക് ഓരോ തവണയും domains-ന്റെ പൂർണ്ണ ലിസ്റ്റ് അയയ്ക്കണം, വ്യക്തിഗത domains മാത്രം add ചെയ്യുകയോ remove ചെയ്യുകയോ ചെയ്യാൻ കഴിയില്ല.

### SSL Certificate Management

Domains sync ചെയ്ത ശേഷം:

1. നിങ്ങളുടെ server-ലേക്ക് point ചെയ്യുന്ന valid DNS records ഏതൊക്കെ domains-നുണ്ടെന്ന് ഇന്റഗ്രേഷൻ പരിശോധിക്കുന്നു
2. ആ domains-നായി Let's Encrypt SSL certificates install ചെയ്യാൻ Cloudways-ലേക്ക് request അയയ്ക്കുന്നു
3. SSL certificate issuance-ഉം installation-ഉം Cloudways കൈകാര്യം ചെയ്യുന്നു

## അധിക Domains

Cloudways-മായി sync ചെയ്യുമ്പോൾ എപ്പോഴും ഉൾപ്പെടുത്തേണ്ട അധിക domains specify ചെയ്യാൻ `WU_CLOUDWAYS_EXTRA_DOMAINS` constant നിങ്ങളെ അനുവദിക്കുന്നു. ഇത് ഉപയോഗപ്രദമാണ്:

- Ultimate Multisite manage ചെയ്യാത്ത domains-ന്
- Wildcard domains-ന് (ഉദാ., `*.example.com`)
- Development അല്ലെങ്കിൽ staging domains-ന്

## പ്രശ്നപരിഹാരം

### API Connection പ്രശ്നങ്ങൾ
- നിങ്ങളുടെ email-ഉം API key-യും ശരിയാണെന്ന് ഉറപ്പാക്കുക
- നിങ്ങളുടെ server-ഉം application IDs-ഉം ശരിയാണോ എന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ Cloudways account-ന് ആവശ്യമായ permissions ഉണ്ടെന്ന് ഉറപ്പാക്കുക

### SSL Certificate പ്രശ്നങ്ങൾ
- SSL certificates issue ചെയ്യുന്നതിന് മുമ്പ് domains-ന് നിങ്ങളുടെ server-ലേക്ക് point ചെയ്യുന്ന valid DNS records ഉണ്ടായിരിക്കണമെന്ന് Cloudways ആവശ്യപ്പെടുന്നു
- SSL certificates request ചെയ്യുന്നതിന് മുമ്പ് ഇന്റഗ്രേഷൻ DNS records validate ചെയ്യുന്നു
- SSL certificates issue ചെയ്യുന്നില്ലെങ്കിൽ, നിങ്ങളുടെ domains നിങ്ങളുടെ server-ന്റെ IP address-ലേക്ക് ശരിയായി point ചെയ്യുന്നുണ്ടോ എന്ന് പരിശോധിക്കുക

### Domain ചേർക്കപ്പെട്ടില്ല
- ഏതെങ്കിലും error messages-നായി Ultimate Multisite logs പരിശോധിക്കുക
- Domain ഇതിനകം Cloudways-ൽ ചേർത്തിട്ടില്ലെന്ന് ഉറപ്പാക്കുക
- നിങ്ങൾ ചേർക്കുന്ന domains-ന്റെ എണ്ണത്തെ നിങ്ങളുടെ Cloudways plan പിന്തുണയ്ക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക
