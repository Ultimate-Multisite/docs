---
title: സൈബർപാനൽ ഇന്റഗ്രേഷൻ
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

ഈ ഗൈഡ് Ultimate Multisite CyberPanel integration എങ്ങനെ കോൺഫിഗർ ചെയ്യണം എന്ന് വിശദീകരിക്കുന്നു. ഇത് നിങ്ങളുടെ network-ലെ mapped domains, CyberPanel-ൽ virtual hosts ആയി ഓട്ടോമാറ്റിക്കായി ചേർക്കാനും (കൂടാതെ നീക്കം ചെയ്യാനും) ചെയ്യും. കൂടാതെ, Let's Encrypt വഴി ഓപ്ഷണൽ auto-SSL provisioning-ഉം ഇതിലൂടെ സാധ്യമാകും.

## ഇത് എന്തുചെയ്യുന്നു

*   Ultimate Multisite-ൽ ഒരു domain map ചെയ്യുമ്പോൾ, ആ domain-ന് വേണ്ടി ഒരു virtual host ഉണ്ടാക്കാൻ integration, CyberPanel API-യെ വിളിക്കുന്നു.
*   ഒരു domain mapping നീക്കം ചെയ്യുമ്പോൾ, ബന്ധപ്പെട്ട virtual host delete ചെയ്യാൻ integration API-യെ വിളിക്കുന്നു.
*   auto-SSL എനേബിൾ ചെയ്യുമ്പോൾ, virtual host ഉണ്ടാക്കിയ ഉടൻ തന്നെ Let's Encrypt സർട്ടിഫിക്കറ്റ് ഇഷ്യൂ ചെയ്യാൻ integration ട്രിഗർ ചെയ്യുന്നു.
*   Domain Mapping settings-ലെ "Auto-create www subdomain" എന്ന സെറ്റിംഗ് അനുസരിച്ച്, `www.` alias ഓപ്ഷണലായി ചേർക്കുകയോ നീക്കം ചെയ്യുകയോ ചെയ്യുന്നു.

## മുൻകൂർ ആവശ്യകതകൾ (Prerequisites)

*   ഒരു പ്രവർത്തിക്കുന്ന CyberPanel instance (v2.3 അല്ലെങ്കിൽ അതിലും പുതിയത് ശുപാർശ ചെയ്യുന്നത്) ആവശ്യമാണ്. ഇത് നിങ്ങളുടെ WordPress server-ൽ നിന്ന് എത്താൻ കഴിയണം.
*   നിങ്ങളുടെ WordPress network root-നെ സർവ് ചെയ്യുകയായിട്ടുള്ള ഒരു നിലവിലുള്ള CyberPanel website വേണം. ഈ സെർവറിലാണ് integration പുതിയ virtual hosts ഘടിപ്പിക്കുന്നത്.
*   CyberPanel API access എനേബിൾ ചെയ്തിരിക്കണം. Authentication-നായി നിങ്ങളുടെ CyberPanel admin username, password എന്നിവ ഉപയോഗിക്കുന്നു.
*   auto-SSL സാധ്യമാവണമെങ്കിൽ, mapped domains-ന്റെ DNS records നിങ്ങളുടെ സെർവറിന്റെ IP address-നെ ചൂണ്ടിക്കാണിക്കണം.

## ആവശ്യകതകൾ (Requirements)

താഴെ പറയുന്ന constants നിങ്ങളുടെ `wp-config.php` ഫയലിൽ നിർവചിച്ചിരിക്കണം:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

ഓപ്ഷണലായി, നിങ്ങൾക്ക് ഇവയും നിർവചിക്കാവുന്നതാണ്:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain ഉണ്ടാക്കിയ ശേഷം Let's Encrypt SSL ഇഷ്യൂ ചെയ്യും
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL സർട്ടിഫിക്കറ്റ് കോൺടാക്റ്റിനായി ഉപയോഗിക്കുന്നു
```

## സജ്ജീകരണ നിർദ്ദേശങ്ങൾ (Setup Instructions)

### 1. CyberPanel API എനേബിൾ ചെയ്യുക

1.  ഒരു അഡ്മിനിസ്ട്രേറ്റർ എന്ന നിലയിൽ നിങ്ങളുടെ CyberPanel dashboard-ൽ ലോഗിൻ ചെയ്യുക.
2.  **Security** > **SSL** എന്നതിലേക്ക് പോവുക. CyberPanel interface-ൽ തന്നെ SSL active ആണെന്ന് ഉറപ്പാക്കുക (സുരക്ഷിതമായ API കോളുകൾക്ക് ഇത് ആവശ്യമാണ്).
3.  CyberPanel API സാധാരണയായി `https://your-server-ip:8090/api/` എന്ന വിലാസത്തിലാണ് ലഭ്യമാകുന്നത്. ഇത് എനേബിൾ ചെയ്യാൻ അധിക നടപടികൾ ആവശ്യമില്ല — അഡ്മിൻ യൂസർമാർക്ക് ഇത് ഡിഫോൾട്ടായി ഓൺ ആണ്.

### 2. wp-config.php-ൽ Constants ചേർക്കുക

`/* That's all, stop editing! */` എന്ന വരിക്ക് മുകളിൽ നിങ്ങളുടെ `wp-config.php` ഫയലിൽ താഴെ പറയുന്ന constants ചേർക്കുക:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL എനേബിൾ ചെയ്യാൻ (ശുപാർശ ചെയ്യുന്നത്):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Integration എനേബിൾ ചെയ്യുക

1.  നിങ്ങളുടെ WordPress network admin-ൽ, **Ultimate Multisite** > **Settings** എന്നതിലേക്ക് പോകുക.
2.  **Domain Mapping** ടാബിലേക്ക് പോകുക.
3.  **Host Integrations** എന്നതിലേക്ക് സ്ക്രോൾ ചെയ്യുക.
4.  **CyberPanel** integration എനേബിൾ ചെയ്യുക.
5.  **Save Changes** ക്ലിക്ക് ചെയ്യുക.

### 4. കണക്റ്റിവിറ്റി പരിശോധിക്കുക

സെറ്റിംഗ്സ് വിസാർഡിലെ ബിൽറ്റ്-ഇൻ കണക്ഷൻ ടെസ്റ്റ് ഉപയോഗിക്കുക:

1.  **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** എന്നതിലേക്ക് പോകുക.
2.  **Test Connection** ക്ലിക്ക് ചെയ്യുക.
3.  ഒരു സക്സസ് സന്ദേശം, plugin-ന് CyberPanel API-യെത്താനും ശരിയായി authenticate ചെയ്യാനും കഴിയുന്നു എന്ന് സ്ഥിരീകരിക്കും.

## ഇത് എങ്ങനെ പ്രവർത്തിക്കുന്നു (How It Works)

### Domain Mapping

Ultimate Multisite-ൽ ഒരു domain map ചെയ്യുമ്പോൾ:

1.  integration, നിങ്ങളുടെ CyberPanel host-ലെ `/api/createWebsite` എന്നതിലേക്ക് ഒരു `POST` request അയയ്ക്കുന്നു.
2.  CyberPanel, കോൺഫിഗർ ചെയ്ത package-ന് കീഴിൽ ആ domain-ന് വേണ്ടി ഒരു പുതിയ virtual host സൃഷ്ടിക്കുന്നു.
3.  document root നിങ്ങളുടെ WordPress network root directory-യെ ചൂണ്ടിക്കാണിക്കാൻ സജ്ജമാക്കുന്നു.
4.  domain mapping നീക്കം ചെയ്യുമ്പോൾ, virtual host വൃത്തിയാക്കാൻ integration `/api/deleteWebsite` നെ വിളിക്കുന്നു.

### Auto-SSL

`WU_CYBERPANEL_AUTO_SSL` എന്നത് `true` ആണെങ്കിൽ:

1.  virtual host സൃഷ്ടിച്ച ശേഷം, domain-ന് വേണ്ടി `/api/issueSSL` എന്നതിലേക്ക് integration call ചെയ്യുന്നു.
2.  ACME HTTP-01 challenge ഉപയോഗിച്ച് CyberPanel, ഒരു Let's Encrypt സർട്ടിഫിക്കറ്റ് ആവശ്യപ്പെടുന്നു.
3.  സർട്ടിഫിക്കറ്റ് കാലഹരണപ്പെടുന്നതിന് മുമ്പ് CyberPanel സ്വയമേവ പുതുക്കുന്നു.

> **പ്രധാനമായി ശ്രദ്ധിക്കുക:** Let's Encrypt-ന് domain സാധൂകരിക്കണമെങ്കിൽ, DNS നിങ്ങളുടെ സെർവറിന്റെ IP address-ലേക്ക് പൂർണ്ണമായി propagate ആകണം. mapping ചെയ്ത ഉടൻ SSL ഇഷ്യൂ ചെയ്യാൻ പരാജയപ്പെട്ടാൽ, DNS propagation-നായി കാത്തിരിക്കുക, തുടർന്ന് CyberPanel dashboard-ലെ **SSL** > **Manage SSL** എന്നതിലൂടെ SSL വീണ്ടും ട്രിഗർ ചെയ്യുക.

### www Subdomain

Domain Mapping settings-ൽ **Auto-create www subdomain** എനേബിൾ ചെയ്തിട്ടുണ്ടെങ്കിൽ, `www.<domain>`-ന് വേണ്ടി ഒരു virtual host alias-ഉം integration സൃഷ്ടിക്കുകയും, auto-SSL ഓൺ ആണെങ്കിൽ, apex-ഉം www വേരിയന്റുകൾ ഉൾക്കൊള്ളുന്ന ഒരു സർട്ടിഫിക്കറ്റ് ഇഷ്യൂ ചെയ്യുകയും ചെയ്യുന്നു.

### Email Forwarders

[Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon active ആണെങ്കിൽ, CyberPanel ഉപഭോക്താക്കളുടെ email forwarders നൽകാനും കഴിയും. forwarders, ഒരു full mailbox ഉണ്ടാക്കാതെ, ഒരു domain address-ൽ നിന്നുള്ള സന്ദേശങ്ങൾ മറ്റൊരു ഇൻബോക്സിലേക്ക് റൂട്ട് ചെയ്യുന്നു. ഇത് `info@customer-domain.test` അല്ലെങ്കിൽ `support@customer-domain.test` പോലുള്ള aliases-ന് ഉപയോഗപ്രദമാണ്.

ഉപഭോക്താക്കൾക്കായി forwarders എനേബിൾ ചെയ്യുന്നതിന് മുമ്പ്:

1.  മുകളിലുള്ള CyberPanel constants കോൺഫിഗർ ചെയ്തിട്ടുണ്ടെന്നും കണക്ഷൻ ടെസ്റ്റ് വിജയിച്ചിട്ടുണ്ടെന്നും ഉറപ്പാക്കുക.
2.  Emails addon settings-ൽ CyberPanel email provider എനേബിൾ ചെയ്യുക.
3.  forwarder ഉണ്ടാക്കുന്നതിന് മുമ്പ്, customer domain CyberPanel-ൽ നിലവിലുണ്ടെന്ന് ഉറപ്പാക്കുക.
4.  പ്രൊഡക്ഷൻ പ്ലാനുകളിൽ ഈ ഫീച്ചർ നൽകുന്നതിന് മുമ്പ് ഒരു ടെസ്റ്റ് forwarder ഉണ്ടാക്കി അതിലൂടെ ഒരു സന്ദേശം അയച്ച് പരിശോധിക്കുക.

forwarder സൃഷ്ടിക്കാൻ പരാജയപ്പെട്ടാൽ, ആദ്യം Ultimate Multisite activity logs പരിശോധിക്കുക. തുടർന്ന്, source domain നിലവിലുണ്ടോ എന്നും API user-ന് email-management permissions ഉണ്ടോ എന്നും CyberPanel-ൽ സ്ഥിരീകരിക്കുക.

## കോൺഫിഗറേഷൻ റഫറൻസ് (Configuration Reference)

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | നിങ്ങളുടെ CyberPanel instance-ന്റെ പൂർണ്ണമായ URL, port ഉൾപ്പെടെ, ഉദാഹരണത്തിന്. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | പുതിയ virtual hosts-ന് നൽകേണ്ട CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | domain സൃഷ്ടിച്ച ശേഷം Let's Encrypt SSL സർട്ടിഫിക്കറ്റ് ഇഷ്യൂ ചെയ്യുക |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | പുതിയ virtual hosts-നുള്ള PHP പതിപ്പ് (CyberPanel-ൽ ഇൻസ്റ്റാൾ ചെയ്ത പതിപ്പുമായി പൊരുത്തപ്പെടണം) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL സർട്ടിഫിക്കറ്റ് രജിസ്ട്രേഷനുള്ള കോൺടാക്റ്റ് ഇമെയിൽ |

## പ്രധാന കുറിപ്പുകൾ (Important Notes)

*   CyberPanel-ന്റെ API session-based token authentication ഉപയോഗിക്കുന്നു. ഓരോ API കോളിലും integration ടോക്കൺ സ്വയമേവ നേടുന്നു.
*   നിങ്ങളുടെ CyberPanel admin account-ന് websites സൃഷ്ടിക്കാനും നീക്കം ചെയ്യാനുമുള്ള അനുമതി ഉണ്ടായിരിക്കണം.
*   CyberPanel ഡിഫോൾട്ടായി `8090` port-ൽ പ്രവർത്തിക്കുന്നു. നിങ്ങളുടെ സെർവർ ഒരു firewall ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ, ഈ port WordPress application server-ൽ നിന്ന് ആക്‌സസ് ചെയ്യാൻ കഴിയുന്നുണ്ടെന്ന് ഉറപ്പാക്കുക.
*   integration DNS records കൈകാര്യം ചെയ്യുന്നില്ല. Ultimate Multisite-ൽ domain map ചെയ്യുന്നതിന് മുമ്പ്, domain DNS നിങ്ങളുടെ സെർവറിന്റെ IP address-ലേക്ക് ചൂണ്ടിക്കാണിക്കണം.
*   നിങ്ങൾ OpenLiteSpeed (OLS) ഉപയോഗിക്കുന്നുണ്ടെങ്കിൽ, virtual host മാറ്റങ്ങൾ കഴിഞ്ഞാൽ ഒരു graceful restart ഓട്ടോമാറ്റിക്കായി ട്രിഗർ ചെയ്യപ്പെടും. ഇതിന് manual intervention ആവശ്യമില്ല.

## ട്രബിൾഷൂട്ടിംഗ് (Troubleshooting)

### API Connection Refused

*   നിങ്ങളുടെ സെർവർ firewall-ൽ `8090` port തുറന്നിട്ടുണ്ടോ എന്ന് പരിശോധിക്കുക.
*   `WU_CYBERPANEL_HOST` മൂല്യത്തിൽ ശരിയായ protocol (`https://`) ഉം port ഉം ഉൾപ്പെടുത്തിയിട്ടുണ്ടോ എന്ന് ഉറപ്പാക്കുക.
*   നിങ്ങളുടെ CyberPanel SSL സർട്ടിഫിക്കറ്റ് സാധുവാണോ എന്ന് പരിശോധിക്കുക; self-signed സർട്ടിഫിക്കറ്റുകൾ TLS verification failure ഉണ്ടാക്കിയേക്കാം. വിശ്വസ്തമായ private network environment-ൽ മാത്രമേ `WU_CYBERPANEL_VERIFY_SSL` നെ `false` ആക്കി വെക്കാവൂ.

### Authentication Errors

*   CyberPanel-ൽ നേരിട്ട് ലോഗിൻ ചെയ്ത് നിങ്ങളുടെ `WU_CYBERPANEL_USERNAME` ഉം `WU_CYBERPANEL_PASSWORD` ഉം ശരിയാണോ എന്ന് ഉറപ്പാക്കുക.
*   ആവർത്തിച്ച് ലോഗിൻ ചെയ്യാൻ ശ്രമിച്ചാൽ CyberPanel അക്കൗണ്ടുകൾ ലോക്ക് ചെയ്യും. ലോക്കൗട്ടുകൾ സംഭവിക്കുകയാണെങ്കിൽ CyberPanel-ലെ **Security** > **Brute Force Monitor** പരിശോധിക്കുക.

### Domain Not Created

*   API error സന്ദേശങ്ങൾക്കായി Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) പരിശോധിക്കുക.
*   `WU_CYBERPANEL_PACKAGE`-ൽ നിർവചിച്ചിരിക്കുന്ന package CyberPanel-ൽ നിലവിലുണ്ടോ എന്ന് പരിശോധിക്കുക (**Packages** > **List Packages**).
*   domain CyberPanel-ൽ ഒരു website ആയി ഇതിനകം രജിസ്റ്റർ ചെയ്തിട്ടില്ലെന്ന് ഉറപ്പാക്കുക — duplicate website creation error നൽകും.

### SSL Certificate Not Issued

*   DNS പൂർണ്ണമായി propagate ആയെന്ന് ഉറപ്പാക്കുക: `dig +short your-domain.com` എന്നത് നിങ്ങളുടെ സെർവറിന്റെ IP നൽകണം.
*   Let's Encrypt rate limits നടപ്പിലാക്കുന്നുണ്ട്. നിങ്ങൾ അടുത്തിടെ ഒരേ domain-ന് വേണ്ടി നിരവധി സർട്ടിഫിക്കറ്റുകൾ ഇഷ്യൂ ചെയ്തിട്ടുണ്ടെങ്കിൽ, വീണ്ടും ശ്രമിക്കുന്നതിന് മുമ്പ് കാത്തിരിക്കുക.
*   സർട്ടിഫിക്കറ്റ് ഇഷ്യൂ ചെയ്യുന്നതിലെ പരാജയങ്ങൾ സംബന്ധിച്ച വിശദാംശങ്ങൾക്കായി **Logs** > **Error Logs** എന്നതിലെ CyberPanel SSL logs പരിശോധിക്കുക.
*   ഒരു fallback ആയി, നിങ്ങൾക്ക് CyberPanel-ൽ നിന്ന് തന്നെ SSL മാനുവലായി ഇഷ്യൂ ചെയ്യാവുന്നതാണ്: **SSL** > **Manage SSL** > domain തിരഞ്ഞെടുക്കുക > **Issue SSL**.

## റഫറൻസുകൾ (References)

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
