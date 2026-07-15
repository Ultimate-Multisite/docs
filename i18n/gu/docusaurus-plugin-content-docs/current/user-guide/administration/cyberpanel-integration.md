---
title: CyberPanel સંકલન
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration

આ ગાઈડ સમજાવે છે કે Ultimate Multisite CyberPanel integration કેવી રીતે configure કરવું, જેથી તમારા network માં મેપ કરેલા domains આપમેળે CyberPanel માં virtual hosts તરીકે ઉમેરાય (અને દૂર થાય), સાથે Let's Encrypt દ્વારા વૈકલ્પિક auto-SSL provisioning પણ ઉપલબ્ધ છે.

## What It Does {#what-it-does}

- જ્યારે Ultimate Multisite માં કોઈ domain મેપ થાય છે, ત્યારે આ integration તે domain માટે virtual host બનાવવા માટે CyberPanel API ને call કરે છે.
- જ્યારે domain mapping દૂર કરવામાં આવે છે, ત્યારે આ integration સંબંધિત virtual host ને delete કરવા માટે API ને call કરે છે.
- જ્યારે auto-SSL enable કરવામાં આવે છે, ત્યારે virtual host બન્યા પછી તરત જ આ integration Let's Encrypt certificate issuance શરૂ કરે છે.
- તે વૈકલ્પિક રીતે, Domain Mapping settings માં તમારા "Auto-create www subdomain" setting પર આધાર રાખીને `www.` alias ઉમેરે/દૂર કરે છે.

## Prerequisites {#prerequisites}

- એક ચાલતું CyberPanel instance (v2.3 અથવા તેનાથી ઉપરનું ભલામણ કરેલ) જે તમારા WordPress server માંથી પહોંચી શકાય.
- CyberPanel માં પહેલેથી એક website હોવી જોઈએ જે તમારા WordPress network root ને serve કરતી હોય. આ integration નવા virtual hosts આ server સાથે જોડે છે.
- CyberPanel API access enable કરેલું હોવું જોઈએ. Authentication માં તમારા CyberPanel admin username અને password નો ઉપયોગ થાય છે.
- auto-SSL ને માન્ય certificate ઇશ્યૂ કરવા માટે, મેપ કરેલા domains ના તમારા DNS records પહેલેથી જ તમારા server ના IP address તરફ પોઇન્ટ હોવા જોઈએ.

## Requirements {#requirements}

તમારી `wp-config.php` ફાઇલમાં નીચેના constants define કરેલા હોવા જોઈએ:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

વૈકલ્પિક રીતે, તમે આ પણ define કરી શકો છો:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — domain creation પછી Let's Encrypt SSL ઇશ્યૂ કરે છે
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // SSL certificate contact માટે વપરાય છે
```

## Setup Instructions {#setup-instructions}

### 1. Enable the CyberPanel API {#1-enable-the-cyberpanel-api}

1. એક એડમિનિસ્ટ્રેટર તરીકે તમારા CyberPanel dashboard માં લોગ ઇન કરો.
2. **Security** > **SSL** પર જાઓ અને ખાતરી કરો કે CyberPanel interface પર પોતે SSL active છે (સુરક્ષિત API calls માટે જરૂરી).
3. CyberPanel API By default `https://your-server-ip:8090/api/` પર ઉપલબ્ધ છે. તેને enable કરવા માટે કોઈ વધારાના પગલાંની જરૂર નથી — તે એડમિન યુઝર્સ માટે ડિફોલ્ટ રૂપે ચાલુ છે.

### 2. Add Constants to wp-config.php {#2-add-constants-to-wp-configphp}

નીચેના constants ને તમારી `wp-config.php` ફાઇલમાં `/* That's all, stop editing! */` લાઇન પહેલા ઉમેરો:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

auto-SSL enable કરવા માટે (ભલામણ કરેલ):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Enable the Integration {#3-enable-the-integration}

1. તમારા WordPress network admin માં, **Ultimate Multisite** > **Settings** પર જાઓ.
2. **Domain Mapping** ટેબ પર નેવિગેટ કરો.
3. **Host Integrations** સુધી સ્ક્રોલ કરો.
4. **CyberPanel** integration enable કરો.
5. **Save Changes** પર ક્લિક કરો.

### 4. Verify Connectivity {#4-verify-connectivity}

સેટિંગ્સ વિઝાર્ડમાં બનેલા બિલ્ટ-ઇન connection test નો ઉપયોગ કરો:

1. **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel** પર જાઓ.
2. **Test Connection** પર ક્લિક કરો.
3. સફળતા સંદેશની પુષ્ટિ કરે છે કે plugin CyberPanel API સુધી પહોંચી શકે છે અને યોગ્ય રીતે authenticate થઈ શકે છે.

## How It Works {#how-it-works}

### Domain Mapping {#domain-mapping}

જ્યારે Ultimate Multisite માં કોઈ domain મેપ થાય છે:

1. આ integration તમારા CyberPanel host પર `/api/createWebsite` ને `POST` request મોકલે છે.
2. CyberPanel નિર્ધારિત package હેઠળ domain માટે નવો virtual host બનાવે છે.
3. document root ને તમારા WordPress network root directory તરફ પોઇન્ટ કરવામાં આવે છે.
4. જ્યારે domain mapping દૂર કરવામાં આવે છે, ત્યારે આ integration virtual host ને સાફ કરવા માટે `/api/deleteWebsite` ને call કરે છે.

### Auto-SSL {#auto-ssl}

જ્યારે `WU_CYBERPANEL_AUTO_SSL` `true` હોય છે:

1. virtual host બન્યા પછી, આ integration domain માટે `/api/issueSSL` ને call કરે છે.
2. CyberPanel ACME HTTP-01 challenge નો ઉપયોગ કરીને Let's Encrypt certificate માટે વિનંતી કરે છે.
3. expirty પહેલા CyberPanel દ્વારા certificate આપમેળે renew કરવામાં આવે છે.

> **Important:** Let's Encrypt ને domain ને validate કરવા માટે DNS તમારા server ના IP address સુધી સંપૂર્ણપણે propagate થવું જરૂરી છે. જો મેપ કર્યા પછી તરત જ SSL issuance નિષ્ફળ જાય, તો DNS propagation ની રાહ જુઓ અને CyberPanel dashboard માં **SSL** > **Manage SSL** હેઠળ SSL ને ફરીથી trigger કરો.

### www Subdomain {#www-subdomain}

જો તમારા Domain Mapping settings માં **Auto-create www subdomain** enable હોય, તો આ integration `www.<domain>` માટે virtual host alias પણ બનાવે છે અને, auto-SSL ચાલુ હોય ત્યારે, apex અને www બંને variants ને આવરી લેતું certificate ઇશ્યૂ કરે છે.

### Email Forwarders {#email-forwarders}

જ્યારે [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon active હોય છે, ત્યારે CyberPanel ગ્રાહક email forwarders પણ પ્રદાન કરી શકે છે. Forwarders મેસેજીસને એક domain address થી બીજા inbox પર route કરે છે, જેના માટે સંપૂર્ણ મેઈલબોક્સ બનાવવાની જરૂર પડતી નથી. આ `info@customer-domain.test` અથવા `support@customer-domain.test` જેવા aliases માટે ઉપયોગી છે.

ગ્રાહકો માટે forwarders enable કરતા પહેલા:

1. ખાતરી કરો કે ઉપરના CyberPanel constants configure થયેલા છે અને connection test પાસ થાય છે.
2. Emails addon settings માં CyberPanel email provider enable કરો.
3. forwarder બનાવતા પહેલા ખાતરી કરો કે ગ્રાહક domain CyberPanel માં પહેલેથી જ અસ્તિત્વમાં છે.
4. production plans પર ફીચર ઓફર કરતા પહેલા એક test forwarder બનાવો અને તેના દ્વારા એક મેસેજ મોકલો.

જો forwarder બનાવવામાં નિષ્ફળતા મળે, તો પહેલા Ultimate Multisite activity logs તપાસો, અને પછી CyberPanel માં ખાતરી કરો કે source domain અસ્તિત્વમાં છે અને API user પાસે email-management permissions છે.

## Configuration Reference {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | તમારા CyberPanel instance નો સંપૂર્ણ URL, પોર્ટ સહિત, ઉદાહરણ તરીકે: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | CyberPanel admin username |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | CyberPanel admin password |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | નવા virtual hosts ને assign કરવા માટે CyberPanel hosting package |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | domain creation પછી Let's Encrypt SSL certificate ઇશ્યૂ કરે છે |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | નવા virtual hosts માટે PHP version (CyberPanel માં ઇન્સ્ટોલ કરેલા વર્ઝન સાથે મેળ ખાવો જોઈએ) |
| `WU_CYBERPANEL_EMAIL` | No | — | SSL certificate registration માટેનો contact email |

## Important Notes {#important-notes}

- CyberPanel's API session-based token authentication નો ઉપયોગ કરે છે. આ integration દરેક API call પર token acquisition ને આપમેળે સંભાળે છે.
- તમારા CyberPanel admin account માં websites બનાવવા અને delete કરવાની પરવાનગી હોવી જોઈએ.
- CyberPanel By default port `8090` પર ચાલે છે. જો તમારું server firewall નો ઉપયોગ કરે છે, તો ખાતરી કરો કે આ પોર્ટ WordPress application server માંથી ઍક્સેસિબલ છે.
- આ integration DNS records નું સંચાલન કરતું નથી. Ultimate Multisite માં domain મેપ કરતા પહેલા તમારે domain DNS ને તમારા server ના IP address પર પોઇન્ટ કરવું પડશે.
- જો તમે OpenLiteSpeed (OLS) નો ઉપયોગ કરો છો, તો virtual host માં ફેરફાર કર્યા પછી graceful restart આપમેળે trigger થાય છે. કોઈ મેન્યુઅલ intervention ની જરૂર નથી.

## Troubleshooting {#troubleshooting}

### API Connection Refused {#api-connection-refused}

- ખાતરી કરો કે તમારા server firewall માં પોર્ટ `8090` ખુલ્લું છે.
- ખાતરી કરો કે `WU_CYBERPANEL_HOST` value માં સાચો protocol (`https://`) અને port શામેલ છે.
- તપાસો કે તમારું CyberPanel SSL certificate માન્ય છે; self-signed certificates TLS verification failures નું કારણ બની શકે છે. `WU_CYBERPANEL_VERIFY_SSL` ને `false` સેટ કરો ફક્ત વિશ્વસનીય private network environments માં.

### Authentication Errors {#authentication-errors}

- CyberPanel માં સીધા લોગ ઇન કરીને ખાતરી કરો કે તમારા `WU_CYBERPANEL_USERNAME` અને `WU_CYBERPANEL_PASSWORD` સાચા છે.
- વારંવાર નિષ્ફળ લોગિન પ્રયાસો પછી CyberPanel accounts lock કરી શકે છે. જો lockouts થાય તો CyberPanel માં **Security** > **Brute Force Monitor** તપાસો.

### Domain Not Created {#domain-not-created}

- API error messages માટે Ultimate Multisite activity log (**Ultimate Multisite** > **Activity Logs**) તપાસો.
- ખાતરી કરો કે `WU_CYBERPANEL_PACKAGE` માં વ્યાખ્યાયિત package CyberPanel માં અસ્તિત્વમાં છે (**Packages** > **List Packages**).
- ખાતરી કરો કે domain CyberPanel માં પહેલેથી website તરીકે રજીસ્ટર થયેલ નથી — duplicate website creation error પાછો કરે છે.

### SSL Certificate Not Issued {#ssl-certificate-not-issued}

- ખાતરી કરો કે DNS સંપૂર્ણપણે propagate થયું છે: `dig +short your-domain.com` એ તમારા server ના IP પરત કરવું જોઈએ.
- Let's Encrypt rate limits લાગુ કરે છે. જો તમે તાજેતરમાં એક જ domain માટે ઘણા certificate ઇશ્યૂ કર્યા હોય, તો ફરી પ્રયાસ કરતા પહેલા રાહ જુઓ.
- certificate issuance failures પર વિગતો માટે **Logs** > **Error Logs** હેઠળ CyberPanel SSL logs તપાસો.
- fallback તરીકે, તમે CyberPanel માં મેન્યુઅલી SSL ઇશ્યૂ કરી શકો છો: **SSL** > **Manage SSL** > domain પસંદ કરો > **Issue SSL**.

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
