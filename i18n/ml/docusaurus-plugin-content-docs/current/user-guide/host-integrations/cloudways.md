---
title: Cloudways സംയോജനം
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Cloudways സംയോജനം

## അവലോകനം {#overview}
DigitalOcean, AWS, Google Cloud തുടങ്ങിയ വിവിധ ക്ലൗഡ് ദാതാക്കളിൽ WordPress സൈറ്റുകൾ വിന്യസിക്കാൻ അനുവദിക്കുന്ന managed cloud hosting പ്ലാറ്റ്ഫോമാണ് Cloudways. ഈ സംയോജനം Ultimate Multisite-നും Cloudways-നും ഇടയിൽ സ്വയമേവയുള്ള ഡൊമെയ്ൻ സമന്വയവും SSL സർട്ടിഫിക്കറ്റ് മാനേജ്മെന്റും സാധ്യമാക്കുന്നു.

## സവിശേഷതകൾ {#features}
- സ്വയമേവയുള്ള ഡൊമെയ്ൻ സമന്വയം
- SSL സർട്ടിഫിക്കറ്റ് മാനേജ്മെന്റ്
- അധിക ഡൊമെയ്‌നുകൾക്കുള്ള പിന്തുണ
- SSL സർട്ടിഫിക്കറ്റുകൾക്കുള്ള DNS സാധൂകരണം

## ആവശ്യകതകൾ {#requirements}
താഴെപ്പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ നിർവചിച്ചിരിക്കണം:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ഐച്ഛികമായി, നിങ്ങൾക്ക് ഇതും നിർവചിക്കാം:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## സജ്ജീകരണ നിർദ്ദേശങ്ങൾ {#setup-instructions}

### 1. നിങ്ങളുടെ Cloudways API Credentials നേടുക {#1-get-your-cloudways-api-credentials}

1. നിങ്ങളുടെ Cloudways dashboard-ലേക്ക് log in ചെയ്യുക
2. "Account" > "API Keys" എന്നതിലേക്ക് പോകുക
3. നിങ്ങൾക്ക് ഇതിനകം ഒന്ന് ഇല്ലെങ്കിൽ ഒരു API key സൃഷ്ടിക്കുക
4. നിങ്ങളുടെ email-ഉം API key-യും പകർത്തുക

### 2. നിങ്ങളുടെ Server, Application IDs നേടുക {#2-get-your-server-and-application-ids}

1. നിങ്ങളുടെ Cloudways dashboard-ൽ, "Servers" എന്നതിലേക്ക് പോകുക
2. നിങ്ങളുടെ WordPress multisite hosted ചെയ്യുന്ന server തിരഞ്ഞെടുക്കുക
3. Server ID URL-ൽ കാണാം: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" എന്നതിലേക്ക് പോയി നിങ്ങളുടെ WordPress application തിരഞ്ഞെടുക്കുക
5. App ID URL-ൽ കാണാം: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. wp-config.php-ലേക്ക് Constants ചേർക്കുക {#3-add-constants-to-wp-configphp}

താഴെപ്പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിലേക്ക് ചേർക്കുക:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

നിങ്ങളുടെ multisite network-ിന് പുറത്തുള്ള അധിക **ബാഹ്യ** ഡൊമെയ്‌നുകൾ ഉണ്ടെങ്കിൽ, അവ Cloudways aliases ലിസ്റ്റിൽ എല്ലായ്പ്പോഴും നിലനിർത്തണം:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning നിങ്ങളുടെ സ്വന്തം network-ന്റെ wildcard ഉൾപ്പെടുത്തരുത്
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ലേക്ക് `*.your-network.com` (അല്ലെങ്കിൽ നിങ്ങളുടെ സ്വന്തം network-ന്റെ ഏതെങ്കിലും subdomain pattern) ചേർക്കരുത്.
ഇത് ഓരോ tenant-നും ഉള്ള SSL സർട്ടിഫിക്കറ്റുകൾ നൽകുന്നത് എന്തുകൊണ്ട് തടയുന്നു എന്ന് അറിയാൻ താഴെയുള്ള [പ്രധാനപ്പെട്ടത് — wildcard SSL പ്രശ്നം](#important--wildcard-ssl-pitfall) കാണുക.
:::

### 4. സംയോജനം പ്രവർത്തനക്ഷമമാക്കുക {#4-enable-the-integration}

1. നിങ്ങളുടെ WordPress admin-ൽ, Ultimate Multisite > Settings എന്നതിലേക്ക് പോകുക
2. "Domain Mapping" tab-ലേക്ക് പോകുക
3. "Host Integrations" വരെ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക
4. Cloudways സംയോജനം പ്രവർത്തനക്ഷമമാക്കുക
5. "Save Changes" ക്ലിക്ക് ചെയ്യുക

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു {#how-it-works}

### ഡൊമെയ്ൻ സമന്വയം {#domain-syncing}

Ultimate Multisite-ൽ ഒരു ഡൊമെയ്ൻ map ചെയ്യുമ്പോൾ:

1. സംയോജനം നിലവിൽ map ചെയ്ത എല്ലാ ഡൊമെയ്‌നുകളും വീണ്ടെടുക്കുന്നു
2. പുതിയ ഡൊമെയ്ൻ ലിസ്റ്റിലേക്ക് ചേർക്കുന്നു (ബാധകമായാൽ www പതിപ്പിനോടൊപ്പം)
3. API വഴി പൂർണ്ണ ലിസ്റ്റ് Cloudways-ലേക്ക് അയയ്ക്കുന്നു
4. Cloudways നിങ്ങളുടെ application-നുള്ള domain aliases അപ്ഡേറ്റ് ചെയ്യുന്നു

കുറിപ്പ്: ഓരോ തവണയും വ്യക്തിഗത ഡൊമെയ്‌നുകൾ മാത്രം ചേർക്കുകയോ നീക്കുകയോ ചെയ്യുന്നതിന് പകരം, ഡൊമെയ്‌നുകളുടെ പൂർണ്ണ ലിസ്റ്റ് അയയ്ക്കണം എന്ന് Cloudways API ആവശ്യപ്പെടുന്നു.

### SSL സർട്ടിഫിക്കറ്റ് മാനേജ്മെന്റ് {#ssl-certificate-management}

ഡൊമെയ്‌നുകൾ സമന്വയിപ്പിച്ചതിന് ശേഷം:

1. നിങ്ങളുടെ server-ിലേക്ക് സൂചിപ്പിക്കുന്ന valid DNS records ഉള്ള ഡൊമെയ്‌നുകൾ ഏതൊക്കെയെന്ന് സംയോജനം പരിശോധിക്കുന്നു
2. ആ ഡൊമെയ്‌നുകൾക്കായി Let's Encrypt SSL സർട്ടിഫിക്കറ്റുകൾ install ചെയ്യാൻ Cloudways-ലേക്ക് അഭ്യർത്ഥന അയയ്ക്കുന്നു
3. SSL സർട്ടിഫിക്കറ്റ് issuance-ഉം installation-ഉം Cloudways കൈകാര്യം ചെയ്യുന്നു

സംയോജനം എപ്പോഴും Cloudways-ൽ നിന്ന് **standard** (non-wildcard) Let's Encrypt സർട്ടിഫിക്കറ്റുകളാണ് അഭ്യർത്ഥിക്കുന്നത്. `WU_CLOUDWAYS_EXTRA_DOMAINS`-ൽ wildcard pattern നൽകിയാൽ, SSL അഭ്യർത്ഥനയ്ക്ക് മുമ്പ് തുടക്കത്തിലുള്ള
`*.` നീക്കം ചെയ്യും — ഈ സംയോജനം wildcard തന്നെ ഒരിക്കലും install ചെയ്യില്ല. Cloudways-ൽ wildcard certificate ഉപയോഗിക്കാൻ അത്
സ്വയം install ചെയ്യേണ്ടിവരും, എന്നാൽ അങ്ങനെ ചെയ്യുന്നത് map ചെയ്ത custom domains-ക്കായുള്ള per-domain Let's Encrypt issuance തടയും
(താഴെയുള്ള പ്രശ്നം കാണുക).

## അധിക ഡൊമെയ്‌നുകൾ {#extra-domains}

Cloudways application-ന്റെ aliases ലിസ്റ്റിൽ എല്ലായ്പ്പോഴും നിലനിർത്തേണ്ട അധിക **ബാഹ്യ**
ഡൊമെയ്‌നുകൾ വ്യക്തമാക്കാൻ `WU_CLOUDWAYS_EXTRA_DOMAINS` constant അനുവദിക്കുന്നു. ഇത് ഇതിന് ഉപയോഗിക്കുക:

- Ultimate Multisite മാനേജ് ചെയ്യാത്ത ബാഹ്യ ഡൊമെയ്‌നുകൾ (ഉദാ. അതേ Cloudways application പങ്കിടുന്ന പ്രത്യേക marketing site)
- application aliases ലിസ്റ്റിൽ നിലനിർത്താൻ നിങ്ങൾ ആഗ്രഹിക്കുന്ന parked അല്ലെങ്കിൽ staging ഡൊമെയ്‌നുകൾ

നിങ്ങളുടെ സ്വന്തം network-ന്റെ subdomain wildcard-ിനായി ഈ constant ഉപയോഗിക്കരുത്
(ഉദാ. `*.your-network.com`). താഴെയുള്ള wildcard SSL പ്രശ്നം കാണുക.

## പ്രധാനപ്പെട്ടത് — Wildcard SSL പ്രശ്നം {#important--wildcard-ssl-pitfall}

Cloudways-ന്റെ default setup പിന്തുടരുമ്പോൾ സാധാരണ സംഭവിക്കുന്ന ഒരു പിശക്,
`WU_CLOUDWAYS_EXTRA_DOMAINS`-ലേക്ക് `*.your-network.com` പോലുള്ള wildcard ചേർക്കുക, അല്ലെങ്കിൽ ആ wildcard-ിനായി Cloudways
wildcard SSL certificate സ്വയം install ചെയ്യുക എന്നതാണ്.

**നിങ്ങൾ ഇത് ചെയ്താൽ, Ultimate Multisite map ചെയ്യുന്ന ഓരോ tenant-ന്റെയും custom domains-ക്കായി Let's Encrypt സർട്ടിഫിക്കറ്റുകൾ നൽകാൻ Cloudways നിരസിക്കും.** Cloudways ഓരോ തവണയും application-ലുള്ള active
SSL certificate മാറ്റിസ്ഥാപിക്കുന്നു, കൂടാതെ application-ലുള്ള മുൻകൂട്ടി നിലവിലുള്ള wildcard certificate, സംയോജനം ആശ്രയിക്കുന്ന per-domain Let's Encrypt issuance തടയും.

### Ultimate Multisite network-ിനായുള്ള ശുപാർശ ചെയ്യുന്ന Cloudways SSL setup {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Cloudways application-ന്റെ **SSL Certificate** tab-ൽ, `your-network.com`-ഉം `www.your-network.com`-ഉം മാത്രം ഉൾക്കൊള്ളുന്ന **standard
   Let's Encrypt certificate** install ചെയ്യുക
   — wildcard അല്ല.
2. `*.your-network.com` (അല്ലെങ്കിൽ നിങ്ങളുടെ സ്വന്തം network-ന്റെ ഏതെങ്കിലും subdomain pattern)
   `WU_CLOUDWAYS_EXTRA_DOMAINS`-ൽ ഇടരുത്. ആ constant **ബാഹ്യ** ഡൊമെയ്‌നുകൾക്കായി മാത്രം മാറ്റിവെക്കുക.
3. per-tenant subdomain wildcard **DNS** തലത്തിൽ മാത്രം സൃഷ്ടിക്കുക (`*.your-network.com`-നായി നിങ്ങളുടെ Cloudways server IP-യിലേക്ക് സൂചിപ്പിക്കുന്ന ഒരു `A` record), അതുവഴി subsites resolve ചെയ്യും. individual mapped custom domains-ക്കായുള്ള SSL
   പിന്നീട് Let's Encrypt വഴി സംയോജനം സ്വയമേവ നൽകും.

നിങ്ങളുടെ tenants-ന്റെ കസ്റ്റം ഡൊമെയിനുകൾ SSL ഇല്ലാതെ കുടുങ്ങിയിരിക്കുകയാണെങ്കിൽ, Cloudways SSL ടാബ് പരിശോധിക്കുക. അവിടെ ഒരു
wildcard certificate സജീവമാണെങ്കിൽ, അത് നീക്കം ചെയ്യുക, പ്രധാന നെറ്റ്‌വർക്ക് ഡൊമെയിനിനായി മാത്രം ഒരു സാധാരണ Let's Encrypt
certificate വീണ്ടും നൽകുക, കൂടാതെ `WU_CLOUDWAYS_EXTRA_DOMAINS`-ൽ നിന്ന് wildcard എൻട്രികൾ നീക്കം ചെയ്യുക. തുടർന്ന് ഒരു domain mapping വീണ്ടും ട്രിഗർ ചെയ്യുക (അല്ലെങ്കിൽ അടുത്തതിനായി കാത്തിരിക്കുക)
അപ്പോൾ integration വീണ്ടും ഓരോ ഡൊമെയിനിനുമുള്ള certificates നൽകാൻ തുടങ്ങും.

## പ്രശ്നപരിഹാരം {#troubleshooting}

### API കണക്ഷൻ പ്രശ്നങ്ങൾ {#api-connection-issues}
- നിങ്ങളുടെ email-വും API key-യും ശരിയാണെന്ന് സ്ഥിരീകരിക്കുക
- നിങ്ങളുടെ server, application IDs ശരിയാണെന്ന് പരിശോധിക്കുക
- നിങ്ങളുടെ Cloudways Account-ന് ആവശ്യമായ permissions ഉണ്ടെന്ന് ഉറപ്പാക്കുക

### SSL Certificate പ്രശ്നങ്ങൾ {#ssl-certificate-issues}
- SSL certificates നൽകുന്നതിന് മുമ്പ് domains-ന് നിങ്ങളുടെ server-ലേക്ക് ചൂണ്ടുന്ന സാധുവായ DNS records ഉണ്ടായിരിക്കണമെന്ന് Cloudways ആവശ്യപ്പെടുന്നു
- SSL certificates അഭ്യർത്ഥിക്കുന്നതിന് മുമ്പ് integration DNS records സാധൂകരിക്കുന്നു
- SSL certificates നൽകപ്പെടുന്നില്ലെങ്കിൽ, നിങ്ങളുടെ domains നിങ്ങളുടെ server-ന്റെ IP address-ലേക്ക് ശരിയായി ചൂണ്ടുന്നുണ്ടെന്ന് പരിശോധിക്കുക
- **ഓരോ-tenant കസ്റ്റം ഡൊമെയിനുകളും SSL ഇല്ലാതെ കുടുങ്ങിയിരിക്കുകയാണോ?** Cloudways application-ന്റെ SSL Certificate ടാബ് പരിശോധിക്കുക. ഒരു wildcard certificate (കൈമാറി ഇൻസ്റ്റാൾ ചെയ്തത്, അല്ലെങ്കിൽ `*.your-network.com` ഉൾക്കൊള്ളുന്നത്) സജീവമാണെങ്കിൽ, വ്യക്തിഗതമായി mapped ചെയ്ത custom domains-ന് വേണ്ടി Let's Encrypt certificates Cloudways നൽകില്ല. പ്രധാന network domain (`your-network.com`, `www.your-network.com`) മാത്രം ഉൾക്കൊള്ളുന്ന ഒരു സാധാരണ Let's Encrypt certificate ഉപയോഗിച്ച് അത് മാറ്റിസ്ഥാപിക്കുക, കൂടാതെ `WU_CLOUDWAYS_EXTRA_DOMAINS`-ൽ നിന്ന് wildcard entries നീക്കം ചെയ്യുക. തുടർന്ന് ഒരു domain mapping വീണ്ടും ട്രിഗർ ചെയ്യുക (അല്ലെങ്കിൽ അടുത്തതിനായി കാത്തിരിക്കുക), integration ഓരോ ഡൊമെയിനിനുമുള്ള certificates അഭ്യർത്ഥിക്കും.

### Domain ചേർത്തിട്ടില്ല {#domain-not-added}
- error messages ഉണ്ടോ എന്ന് Ultimate Multisite logs പരിശോധിക്കുക
- domain ഇതിനകം Cloudways-ലേക്ക് ചേർത്തിട്ടില്ലെന്ന് സ്ഥിരീകരിക്കുക
- നിങ്ങൾ ചേർക്കുന്ന domains-ന്റെ എണ്ണം നിങ്ങളുടെ Cloudways plan പിന്തുണയ്ക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക
