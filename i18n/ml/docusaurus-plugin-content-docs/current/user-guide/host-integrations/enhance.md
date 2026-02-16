---
title: കൺട്രോൾ പാനൽ ഇന്റഗ്രേഷൻ മെച്ചപ്പെടുത്തുക
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance കൺട്രോൾ പാനൽ ഇന്റഗ്രേഷൻ

## അവലോകനം
Enhance ഒരു ആധുനിക കൺട്രോൾ പാനൽ ആണ്, ഇത് ശക്തമായ hosting ഓട്ടോമേഷനും മാനേജ്മെന്റ് സൗകര്യങ്ങളും നൽകുന്നു. ഈ ഇന്റഗ്രേഷൻ Ultimate Multisite-ഉം Enhance Control Panel-ഉം തമ്മിലുള്ള ഓട്ടോമാറ്റിക് ഡൊമെയ്ൻ സിങ്കിംഗും SSL സർട്ടിഫിക്കറ്റ് മാനേജ്മെന്റും സാധ്യമാക്കുന്നു.

**ബന്ധപ്പെട്ട ചർച്ച:** കമ്മ്യൂണിറ്റി ടിപ്പുകളും കൂടുതൽ വിവരങ്ങളും അറിയാൻ [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) കാണുക.

## ഫീച്ചറുകൾ
- Ultimate Multisite-ൽ ഡൊമെയ്നുകൾ map ചെയ്യുമ്പോൾ ഓട്ടോമാറ്റിക് ഡൊമെയ്ൻ സിങ്കിംഗ്
- DNS resolve ആകുമ്പോൾ LetsEncrypt വഴി ഓട്ടോമാറ്റിക് SSL സർട്ടിഫിക്കറ്റ് provisioning
- subdomain മോഡിൽ പ്രവർത്തിക്കുന്ന നെറ്റ്‌വർക്കുകൾക്ക് Subdomain സപ്പോർട്ട്
- mappings നീക്കം ചെയ്യുമ്പോൾ ഡൊമെയ്ൻ removal
- API credentials പരിശോധിക്കാനുള്ള കണക്ഷൻ ടെസ്റ്റിംഗ്

## ആവശ്യകതകൾ

### സിസ്റ്റം ആവശ്യകതകൾ
- Enhance Control Panel ഇൻസ്റ്റാൾ ചെയ്തതും ആക്സസ് ചെയ്യാവുന്നതും
- Enhance സെർവറിൽ host ചെയ്തതോ കണക്ട് ചെയ്തതോ ആയ WordPress Multisite installation
- Apache web server (Enhance നിലവിൽ Apache configurations സപ്പോർട്ട് ചെയ്യുന്നു; LiteSpeed Enterprise കുറഞ്ഞ ചെലവിൽ ലഭ്യമാണ്)

### API ആക്സസ്
API tokens സൃഷ്ടിക്കാൻ Enhance Control Panel-ലേക്ക് administrator ആക്സസ് ഉണ്ടായിരിക്കണം.

## നിങ്ങളുടെ API Credentials എങ്ങനെ ലഭിക്കും

### 1. ഒരു API Token സൃഷ്ടിക്കുക

1. Enhance Control Panel-ൽ administrator ആയി ലോഗിൻ ചെയ്യുക
2. navigation menu-വിൽ **Settings** ക്ലിക്ക് ചെയ്യുക
3. **Access Tokens**-ലേക്ക് പോകുക
4. **Create Token** ക്ലിക്ക് ചെയ്യുക
5. token-ന് ഒരു വിവരണാത്മക പേര് നൽകുക (ഉദാ: "Ultimate Multisite Integration")
6. **System Administrator** role assign ചെയ്യുക
7. expiry date-ന്:
   - token ഒരിക്കലും expire ആകരുതെങ്കിൽ ശൂന്യമായി വിടുക
   - അല്ലെങ്കിൽ സുരക്ഷാ ആവശ്യങ്ങൾക്ക് ഒരു നിശ്ചിത expiration date സെറ്റ് ചെയ്യുക
8. **Create** ക്ലിക്ക് ചെയ്യുക

സൃഷ്ടിച്ചതിന് ശേഷം, നിങ്ങളുടെ **Access Token**-ഉം **Organization ID**-യും പ്രദർശിപ്പിക്കും. **ഇവ ഉടൻ തന്നെ സേവ് ചെയ്യുക**, കാരണം token ഒരു തവണ മാത്രമേ കാണിക്കൂ.

### 2. നിങ്ങളുടെ Organization ID ലഭിക്കുക

Access Tokens പേജിൽ "Org ID: {your_id}" എന്ന് ലേബൽ ചെയ്ത നീല ഇൻഫർമേഷൻ ബോക്സിൽ Organization ID പ്രദർശിപ്പിക്കും.

Organization ID ഇതുപോലെയുള്ള UUID ഫോർമാറ്റിലാണ്: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

ഒരു customer-ന്റെ Organization ID ഇങ്ങനെയും കണ്ടെത്താം:
1. **Customers** പേജിലേക്ക് പോകുക
2. ബന്ധപ്പെട്ട customer-ന് **Manage customer** ക്ലിക്ക് ചെയ്യുക
3. URL നോക്കുക - `/customers/`-ന് ശേഷമുള്ള alphanumeric characters ആണ് Organization ID

### 3. നിങ്ങളുടെ Server ID ലഭിക്കുക

നിങ്ങളുടെ Server ID കണ്ടെത്താൻ (domain operations-ന് ആവശ്യം):

1. Enhance Control Panel-ൽ **Servers**-ലേക്ക് പോകുക
2. നിങ്ങളുടെ WordPress installation പ്രവർത്തിക്കുന്ന സെർവറിൽ ക്ലിക്ക് ചെയ്യുക
3. Server ID (UUID format) URL-ലോ server details-ലോ കാണാം
4. അല്ലെങ്കിൽ, servers ലിസ്റ്റ് ചെയ്യാൻ API ഉപയോഗിക്കാം:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

server ID ഈ UUID format പിന്തുടരുന്നു: `00000000-0000-0000-0000-000000000000`

### 4. നിങ്ങളുടെ API URL ലഭിക്കുക

നിങ്ങളുടെ API URL എന്നത് Enhance Control Panel URL-ന്റെ അവസാനം `/api/` ചേർത്തതാണ്:

```
https://your-enhance-panel.com/api/
```

**പ്രധാനം:** `/api/` path ആവശ്യമാണ്. സാധാരണ തെറ്റുകൾ:
- `/api/` ഇല്ലാതെ domain മാത്രം ഉപയോഗിക്കുന്നത്
- HTTPS-ന് പകരം HTTP ഉപയോഗിക്കുന്നത് (സുരക്ഷയ്ക്ക് HTTPS ആവശ്യമാണ്)

## Configuration

### ആവശ്യമായ Constants

നിങ്ങളുടെ `wp-config.php` ഫയലിൽ ഇനിപ്പറയുന്ന constants ചേർക്കുക:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard വഴി സെറ്റപ്പ്

1. നിങ്ങളുടെ WordPress admin-ൽ **Ultimate Multisite** > **Settings**-ലേക്ക് പോകുക
2. **Integrations** tab-ലേക്ക് പോകുക
3. **Enhance Control Panel Integration** കണ്ടെത്തി **Configuration** ക്ലിക്ക് ചെയ്യുക
4. wizard നിങ്ങളെ സെറ്റപ്പിലൂടെ നയിക്കും:
   - **Step 1:** ആമുഖവും feature overview-ഉം
   - **Step 2:** നിങ്ങളുടെ API credentials നൽകുക (Token, API URL, Server ID)
   - **Step 3:** connection ടെസ്റ്റ് ചെയ്യുക
   - **Step 4:** review ചെയ്ത് activate ചെയ്യുക

നിങ്ങൾക്ക് തിരഞ്ഞെടുക്കാം:
- wizard-നെ നിങ്ങളുടെ `wp-config.php` ഫയലിൽ constants ഓട്ടോമാറ്റിക്കായി inject ചെയ്യാൻ അനുവദിക്കുക
- constant definitions കോപ്പി ചെയ്ത് manually ചേർക്കുക

## കൂടുതൽ WordPress Configuration

കമ്മ്യൂണിറ്റി ഫീഡ്‌ബാക്കിന്റെ അടിസ്ഥാനത്തിൽ ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), നിങ്ങൾ ഈ അധിക settings configure ചെയ്യേണ്ടി വരാം:

### .htaccess Configuration

domain mapping-ൽ പ്രശ്‌നങ്ങൾ അനുഭവപ്പെടുകയാണെങ്കിൽ:
1. ഒറിജിനൽ Enhance `.htaccess` ഫയൽ ഡിലീറ്റ് ചെയ്യുക
2. സ്റ്റാൻഡേർഡ് WordPress Multisite `.htaccess` ഫയൽ കൊണ്ട് replace ചെയ്യുക

### Cookie Constants

mapped domains-ൽ ശരിയായ cookie handling ഉറപ്പാക്കാൻ `wp-config.php`-ൽ ഈ constants ചേർക്കുക:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു

### ഒരു Domain Map ചെയ്യുമ്പോൾ

1. ഒരു user Ultimate Multisite-ൽ ഒരു custom domain map ചെയ്യുന്നു (അല്ലെങ്കിൽ subdomain mode-ൽ ഒരു പുതിയ site സൃഷ്ടിക്കുന്നു)
2. integration Enhance-ന്റെ API-യിലേക്ക് ഒരു POST request അയക്കുന്നു: `/servers/{server_id}/domains`
3. Enhance നിങ്ങളുടെ server configuration-ൽ domain ചേർക്കുന്നു
4. DNS നിങ്ങളുടെ സെർവറിലേക്ക് resolve ആകുമ്പോൾ, Enhance ഓട്ടോമാറ്റിക്കായി LetsEncrypt വഴി SSL certificate provision ചെയ്യുന്നു
5. domain HTTPS-ൽ active ആകുന്നു

### ഒരു Domain നീക്കം ചെയ്യുമ്പോൾ

1. Ultimate Multisite-ൽ ഒരു domain mapping ഡിലീറ്റ് ചെയ്യുന്നു
2. integration domain-ന്റെ ID കണ്ടെത്താൻ Enhance-നോട് query ചെയ്യുന്നു
3. ഒരു DELETE request അയക്കുന്നു: `/servers/{server_id}/domains/{domain_id}`
4. Enhance നിങ്ങളുടെ server configuration-ൽ നിന്ന് domain നീക്കം ചെയ്യുന്നു

### DNS-ഉം SSL Checking-ഉം

Ultimate Multisite-ൽ built-in DNS, SSL checking ഉണ്ട്:
- **Domain Mapping Settings**-ൽ check interval configure ചെയ്യാം (default: 300 seconds/5 minutes)
- domain active ആയി mark ചെയ്യുന്നതിന് മുമ്പ് system DNS propagation verify ചെയ്യും
- SSL certificate validity ഓട്ടോമാറ്റിക്കായി check ചെയ്യും
- Enhance SSL provisioning ഓട്ടോമാറ്റിക്കായി കൈകാര്യം ചെയ്യുന്നു, അതിനാൽ manual SSL configuration ആവശ്യമില്ല

## സെറ്റപ്പ് Verify ചെയ്യൽ

### Connection ടെസ്റ്റ് ചെയ്യുക

1. Integration Wizard-ൽ **Test Connection** step ഉപയോഗിക്കുക
2. plugin നിങ്ങളുടെ സെർവറിലെ domains ലിസ്റ്റ് ചെയ്യാൻ ശ്രമിക്കും
3. ഒരു success message ഇവ confirm ചെയ്യുന്നു:
   - API credentials ശരിയാണ്
   - API URL accessible ആണ്
   - Server ID valid ആണ്
   - Permissions ശരിയായി set ചെയ്തിട്ടുണ്ട്

### Domain Map ചെയ്തതിന് ശേഷം

1. Ultimate Multisite-ൽ ഒരു test domain map ചെയ്യുക
2. Ultimate Multisite logs check ചെയ്യുക (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel-ൽ domain ചേർത്തോ എന്ന് verify ചെയ്യുക:
   - **Servers** > **Your Server** > **Domains**-ലേക്ക് പോകുക
   - പുതിയ domain ലിസ്റ്റിൽ കാണണം
4. DNS propagate ആയാൽ, SSL ഓട്ടോമാറ്റിക്കായി provision ചെയ്തോ എന്ന് verify ചെയ്യുക

## Troubleshooting

### API Connection പ്രശ്നങ്ങൾ

**Error: "Failed to connect to Enhance API"**
- `WU_ENHANCE_API_URL`-ൽ അവസാനം `/api/` ഉണ്ടോ എന്ന് verify ചെയ്യുക
- HTTP അല്ല, HTTPS ഉപയോഗിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക
- നിങ്ങളുടെ WordPress server-ൽ നിന്ന് Enhance panel accessible ആണോ എന്ന് check ചെയ്യുക
- connection block ചെയ്യുന്ന firewall rules ഇല്ലെന്ന് verify ചെയ്യുക

**Error: "Enhance API Token not found"**
- `wp-config.php`-ൽ `WU_ENHANCE_API_TOKEN` define ചെയ്തിട്ടുണ്ടെന്ന് ഉറപ്പാക്കുക
- Enhance-ൽ token delete ചെയ്തിട്ടില്ലെന്നോ expire ആയിട്ടില്ലെന്നോ verify ചെയ്യുക
- token value-ൽ typos ഉണ്ടോ എന്ന് check ചെയ്യുക

**Error: "Server ID is not configured"**
- `wp-config.php`-ൽ `WU_ENHANCE_SERVER_ID` define ചെയ്തിട്ടുണ്ടെന്ന് verify ചെയ്യുക
- Server ID valid UUID format ആണെന്ന് ഉറപ്പാക്കുക
- നിങ്ങളുടെ Enhance panel-ൽ server നിലവിലുണ്ടെന്ന് confirm ചെയ്യുക

### Domain ചേർക്കപ്പെട്ടില്ല

**logs check ചെയ്യുക:**
1. **Ultimate Multisite** > **Logs**-ലേക്ക് പോകുക
2. **integration-enhance** വഴി filter ചെയ്യുക
3. പ്രശ്നം indicate ചെയ്യുന്ന error messages നോക്കുക

**സാധാരണ കാരണങ്ങൾ:**
- Invalid domain name format
- Enhance-ൽ domain ഇതിനകം നിലവിലുണ്ട്
- API permissions പോരാ (token-ന് System Administrator role ഉണ്ടെന്ന് ഉറപ്പാക്കുക)
- Server ID Enhance-ലെ actual server-മായി match ആകുന്നില്ല

### SSL Certificate പ്രശ്നങ്ങൾ

**SSL provision ആകുന്നില്ല:**
- DNS നിങ്ങളുടെ server-ന്റെ IP address-ലേക്ക് point ചെയ്യുന്നുണ്ടോ verify ചെയ്യുക
- domain ശരിയായി resolve ആകുന്നുണ്ടോ check ചെയ്യുക: `nslookup yourdomain.com`
- SSL provision ചെയ്യുന്നതിന് മുമ്പ് Enhance-ന് DNS resolve ആകണം
- DNS propagation-ന് ശേഷം SSL provisioning സാധാരണയായി 5-10 മിനിറ്റ് എടുക്കും
- SSL-specific errors-ന് Enhance Control Panel logs check ചെയ്യുക

**Enhance-ൽ Manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains**-ലേക്ക് പോകുക
2. നിങ്ങളുടെ domain കണ്ടെത്തി അതിന്റെ SSL status check ചെയ്യുക
3. ആവശ്യമെങ്കിൽ SSL provisioning manually trigger ചെയ്യാം

### DNS Check Interval

domains-ഓ SSL certificates-ഓ activate ആകാൻ കൂടുതൽ സമയം എടുക്കുകയാണെങ്കിൽ:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping**-ലേക്ക് പോകുക
2. **DNS Check Interval** setting കണ്ടെത്തുക
3. default 300 seconds-ൽ നിന്ന് കുറഞ്ഞ value-ലേക്ക് adjust ചെയ്യുക (minimum: 10 seconds)
4. **ശ്രദ്ധിക്കുക:** കുറഞ്ഞ intervals എന്നാൽ കൂടുതൽ frequent checks, പക്ഷേ server load കൂടുതൽ

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance-ൽ നിങ്ങളുടെ API token regenerate ചെയ്യുക
- token-ന് **System Administrator** role ഉണ്ടെന്ന് verify ചെയ്യുക
- token expire ആയിട്ടില്ലെന്ന് check ചെയ്യുക
- ശരിയായ Organization ID ഉപയോഗിക്കുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക (സാധാരണയായി URL-ൽ ആവശ്യമില്ല)

### Log Analysis

detailed logging enable ചെയ്യുക:
```php
// enhanced debugging-ന് wp-config.php-ൽ ചേർക്കുക
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

പിന്നെ logs ഇവിടെ check ചെയ്യുക:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance-ന്റെ admin interface-ൽ ലഭ്യം

## API Reference

### Authentication
എല്ലാ API requests-ഉം Bearer token authentication ഉപയോഗിക്കുന്നു:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### ഉപയോഗിക്കുന്ന സാധാരണ Endpoints

**Servers ലിസ്റ്റ് ചെയ്യുക:**
```
GET /servers
```

**Server-ലെ Domains ലിസ്റ്റ് ചെയ്യുക:**
```
GET /servers/{server_id}/domains
```

**Domain ചേർക്കുക:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain ഡിലീറ്റ് ചെയ്യുക:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation
പൂർണ്ണ API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### സുരക്ഷ
- **API tokens ഒരിക്കലും version control-ലേക്ക് commit ചെയ്യരുത്**
- Git-ൽ നിന്ന് exclude ചെയ്ത `wp-config.php`-ൽ tokens സൂക്ഷിക്കുക
- ഉചിതമായ permissions ഉള്ള tokens ഉപയോഗിക്കുക (full integration-ന് System Administrator)
- production environments-ന് token expiry dates സെറ്റ് ചെയ്യുക
- tokens periodically rotate ചെയ്യുക

### Performance
- അമിത API calls ഒഴിവാക്കാൻ default DNS check interval (300 seconds) ഉപയോഗിക്കുക
- large-scale domain operations run ചെയ്യുമ്പോൾ Enhance server resources monitor ചെയ്യുക
- ഒരേ സമയം നിരവധി domains map ചെയ്യുകയാണെങ്കിൽ domain additions stagger ചെയ്യുന്നത് പരിഗണിക്കുക

### Monitoring
- integration errors-ന് Ultimate Multisite logs regular ആയി check ചെയ്യുക
- failed domain additions-ന് monitoring സെറ്റ് ചെയ്യുക
- SSL certificates ശരിയായി provision ആകുന്നുണ്ടോ verify ചെയ്യുക
- Enhance server capacity-യും domain limits-ഉം ശ്രദ്ധിക്കുക

## കൂടുതൽ Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" കാണുക

## Support

പ്രശ്നങ്ങൾ നേരിടുകയാണെങ്കിൽ:
1. മുകളിലെ Troubleshooting section check ചെയ്യുക
2. Ultimate Multisite logs review ചെയ്യുക
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) പരിശോധിക്കുക
4. panel-specific issues-ന് Enhance support-നെ contact ചെയ്യുക
5. community assistance-ന് detailed error logs-ഉമായി ഒരു പുതിയ discussion create ചെയ്യുക

## കുറിപ്പുകൾ

- ഈ integration domain aliases മാത്രമേ handle ചെയ്യുന്നുള്ളൂ; SSL Enhance ഓട്ടോമാറ്റിക്കായി manage ചെയ്യുന്നു
- integration custom domain mappings-ഉം subdomain-based sites-ഉം രണ്ടും support ചെയ്യുന്നു
- Automatic www subdomain creation Domain Mapping settings-ൽ configure ചെയ്യാം
- Enhance നിലവിൽ Apache configurations support ചെയ്യുന്നു (LiteSpeed Enterprise ലഭ്യം)
- Ultimate Multisite-ൽ നിന്ന് domain remove ചെയ്താൽ Enhance-ൽ നിന്ന് domain remove ആകും, പക്ഷേ ബന്ധപ്പെട്ട SSL certificates ഉടൻ delete ആകണമെന്നില്ല
