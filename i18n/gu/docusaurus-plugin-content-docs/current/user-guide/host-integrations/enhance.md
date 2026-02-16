---
title: કંટ્રોલ પેનલ ઇન્ટિગ્રેશનને વધારો
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Enhance Control Panel Integration

## ઝાંખી
Enhance એક આધુનિક control panel છે જે શક્તિશાળી hosting automation અને management ક્ષમતાઓ પ્રદાન કરે છે. આ integration Ultimate Multisite અને Enhance Control Panel વચ્ચે automatic domain syncing અને SSL certificate management ને સક્ષમ બનાવે છે.

**સંબંધિત ચર્ચા:** સમુદાયની ટિપ્સ અને વધારાની માહિતી માટે [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) જુઓ.

## સુવિધાઓ
- Ultimate Multisite માં domains map થાય ત્યારે automatic domain syncing
- DNS resolve થાય ત્યારે LetsEncrypt દ્વારા automatic SSL certificate provisioning
- subdomain mode માં ચાલતા networks માટે subdomain support
- mappings delete થાય ત્યારે domain removal
- API credentials verify કરવા માટે connection testing

## જરૂરિયાતો

### System જરૂરિયાતો
- Enhance Control Panel installed અને accessible
- Enhance server પર hosted અથવા connected WordPress Multisite installation
- Apache web server (Enhance હાલમાં Apache configurations support કરે છે; LiteSpeed Enterprise ઓછી કિંમતે ઉપલબ્ધ છે)

### API Access
API tokens બનાવવા માટે તમારી પાસે Enhance Control Panel માં administrator access હોવો જરૂરી છે.

## તમારા API Credentials મેળવવા

### 1. API Token બનાવો

1. તમારા Enhance Control Panel માં administrator તરીકે login કરો
2. navigation menu માં **Settings** પર click કરો
3. **Access Tokens** પર navigate કરો
4. **Create Token** પર click કરો
5. token ને descriptive name આપો (દા.ત., "Ultimate Multisite Integration")
6. **System Administrator** role assign કરો
7. expiry date માટે:
   - token ક્યારેય expire ન થાય તે માટે ખાલી છોડો
   - અથવા security હેતુસર specific expiration date set કરો
8. **Create** પર click કરો

બનાવ્યા પછી, તમારું **Access Token** અને **Organization ID** દેખાશે. **આને તરત save કરો** કારણ કે token ફક્ત એક વાર જ બતાવવામાં આવશે.

### 2. તમારું Organization ID મેળવો

Organization ID Access Tokens page પર "Org ID: {your_id}" લેબલ સાથે blue information box માં દેખાય છે.

Organization ID આ format માં UUID છે: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

તમે customer નું Organization ID આ રીતે પણ શોધી શકો છો:
1. **Customers** page પર જાઓ
2. સંબંધિત customer માટે **Manage customer** પર click કરો
3. URL જુઓ - Organization ID `/customers/` પછીના alphanumeric characters છે

### 3. તમારું Server ID મેળવો

તમારું Server ID શોધવા માટે (domain operations માટે જરૂરી):

1. Enhance Control Panel માં, **Servers** પર navigate કરો
2. જે server પર તમારું WordPress installation ચાલી રહ્યું છે તેના પર click કરો
3. Server ID (UUID format) URL અથવા server details માં દેખાશે
4. વૈકલ્પિક રીતે, તમે servers list કરવા માટે API વાપરી શકો છો:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

server ID UUID format follow કરે છે: `00000000-0000-0000-0000-000000000000`

### 4. તમારું API URL મેળવો

તમારું API URL તમારા Enhance Control Panel URL સાથે `/api/` append કરેલું છે:

```
https://your-enhance-panel.com/api/
```

**મહત્વપૂર્ણ:** `/api/` path જરૂરી છે. સામાન્ય ભૂલોમાં સામેલ છે:
- `/api/` વગર ફક્ત domain વાપરવું
- HTTPS ની જગ્યાએ HTTP વાપરવું (security માટે HTTPS જરૂરી છે)

## Configuration

### જરૂરી Constants

તમારી `wp-config.php` file માં નીચેના constants ઉમેરો:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Integration Wizard દ્વારા Setup

1. તમારા WordPress admin માં, **Ultimate Multisite** > **Settings** પર જાઓ
2. **Integrations** tab પર navigate કરો
3. **Enhance Control Panel Integration** શોધો અને **Configuration** પર click કરો
4. wizard તમને setup માં guide કરશે:
   - **Step 1:** Introduction અને feature overview
   - **Step 2:** તમારા API credentials enter કરો (Token, API URL, Server ID)
   - **Step 3:** Connection test કરો
   - **Step 4:** Review કરો અને activate કરો

તમે આ પસંદ કરી શકો છો:
- wizard ને તમારી `wp-config.php` file માં constants automatically inject કરવા દો
- constant definitions copy કરો અને manually ઉમેરો

## વધારાનું WordPress Configuration

સમુદાયના feedback પર આધારિત ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), તમારે આ વધારાની settings configure કરવાની જરૂર પડી શકે છે:

### .htaccess Configuration

જો તમને domain mapping સાથે issues અનુભવાય:
1. original Enhance `.htaccess` file delete કરો
2. તેને standard WordPress Multisite `.htaccess` file સાથે replace કરો

### Cookie Constants

mapped domains પર proper cookie handling ensure કરવા માટે આ constants `wp-config.php` માં ઉમેરો:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## તે કેવી રીતે કામ કરે છે

### જ્યારે Domain Map થાય છે

1. user Ultimate Multisite માં custom domain map કરે છે (અથવા subdomain mode માં new site create થાય છે)
2. integration Enhance ના API ને POST request મોકલે છે: `/servers/{server_id}/domains`
3. Enhance તમારા server configuration માં domain ઉમેરે છે
4. જ્યારે DNS તમારા server ને resolve થાય છે, Enhance LetsEncrypt દ્વારા automatically SSL certificate provision કરે છે
5. domain HTTPS સાથે active થાય છે

### જ્યારે Domain Remove થાય છે

1. Ultimate Multisite માં domain mapping delete થાય છે
2. integration domain નું ID શોધવા માટે Enhance ને query કરે છે
3. DELETE request મોકલવામાં આવે છે: `/servers/{server_id}/domains/{domain_id}`
4. Enhance તમારા server configuration માંથી domain remove કરે છે

### DNS અને SSL Checking

Ultimate Multisite માં built-in DNS અને SSL checking સામેલ છે:
- તમે **Domain Mapping Settings** માં check interval configure કરી શકો છો (default: 300 seconds/5 minutes)
- system domain ને active તરીકે mark કરતા પહેલા DNS propagation verify કરશે
- SSL certificate validity automatically check થાય છે
- Enhance SSL provisioning automatically handle કરે છે, તેથી manual SSL configuration જરૂરી નથી

## Setup Verify કરવું

### Connection Test કરો

1. Integration Wizard માં, **Test Connection** step વાપરો
2. plugin તમારા server પર domains list કરવાનો પ્રયાસ કરશે
3. success message confirm કરે છે:
   - API credentials correct છે
   - API URL accessible છે
   - Server ID valid છે
   - Permissions properly set છે

### Domain Map કર્યા પછી

1. Ultimate Multisite માં test domain map કરો
2. Ultimate Multisite logs check કરો (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panel માં verify કરો કે domain ઉમેરાયું છે:
   - **Servers** > **Your Server** > **Domains** પર જાઓ
   - new domain list માં દેખાવું જોઈએ
4. DNS propagate થયા પછી, verify કરો કે SSL automatically provision થયું છે

## Troubleshooting

### API Connection Issues

**Error: "Failed to connect to Enhance API"**
- Verify કરો કે `WU_ENHANCE_API_URL` માં અંતે `/api/` છે
- ખાતરી કરો કે તમે HTTPS વાપરી રહ્યા છો, HTTP નહીં
- Check કરો કે Enhance panel તમારા WordPress server થી accessible છે
- Verify કરો કે connection block કરતા કોઈ firewall rules નથી

**Error: "Enhance API Token not found"**
- ખાતરી કરો કે `WU_ENHANCE_API_TOKEN` `wp-config.php` માં defined છે
- Verify કરો કે token Enhance માં delete અથવા expire નથી થયું
- token value માં typos check કરો

**Error: "Server ID is not configured"**
- Verify કરો કે `WU_ENHANCE_SERVER_ID` `wp-config.php` માં defined છે
- ખાતરી કરો કે Server ID valid UUID format માં છે
- Confirm કરો કે server તમારા Enhance panel માં exists છે

### Domain Not Added

**logs check કરો:**
1. **Ultimate Multisite** > **Logs** પર જાઓ
2. **integration-enhance** દ્વારા filter કરો
3. issue indicate કરતા error messages શોધો

**સામાન્ય કારણો:**
- Invalid domain name format
- Domain already Enhance માં exists છે
- Insufficient API permissions (ખાતરી કરો કે token ને System Administrator role છે)
- Server ID Enhance માં actual server સાથે match નથી થતું

### SSL Certificate Issues

**SSL provision નથી થતું:**
- Verify કરો કે DNS તમારા server ના IP address તરફ point કરે છે
- Check કરો કે domain correctly resolve થાય છે: `nslookup yourdomain.com`
- Enhance ને SSL provision કરતા પહેલા DNS resolve થવું જરૂરી છે
- SSL provisioning સામાન્ય રીતે DNS propagation પછી 5-10 minutes લે છે
- SSL-specific errors માટે Enhance Control Panel logs check કરો

**Enhance માં Manual SSL troubleshooting:**
1. **Servers** > **Your Server** > **Domains** પર જાઓ
2. તમારું domain શોધો અને તેની SSL status check કરો
3. જરૂર હોય તો તમે manually SSL provisioning trigger કરી શકો છો

### DNS Check Interval

જો domains અથવા SSL certificates activate થવામાં ઘણો સમય લાગે છે:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** પર જાઓ
2. **DNS Check Interval** setting શોધો
3. default 300 seconds થી ઓછી value પર adjust કરો (minimum: 10 seconds)
4. **નોંધ:** ઓછા intervals મતલબ વધુ વારંવાર checks પણ વધુ server load

### Authentication Errors

**HTTP 401/403 errors:**
- Enhance માં તમારું API token regenerate કરો
- Verify કરો કે token ને **System Administrator** role છે
- Check કરો કે token expire નથી થયું
- ખાતરી કરો કે તમે correct Organization ID વાપરી રહ્યા છો (જો કે તે સામાન્ય રીતે URL માં જરૂરી નથી)

### Log Analysis

detailed logging enable કરો:
```php
// enhanced debugging માટે wp-config.php માં ઉમેરો
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

પછી logs check કરો:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Enhance ના admin interface માં ઉપલબ્ધ

## API Reference

### Authentication
બધા API requests Bearer token authentication વાપરે છે:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### સામાન્ય રીતે વપરાતા Endpoints

**Servers List કરો:**
```
GET /servers
```

**Server પર Domains List કરો:**
```
GET /servers/{server_id}/domains
```

**Domain ઉમેરો:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain Delete કરો:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### સંપૂર્ણ API Documentation
Complete API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices

### Security
- **API tokens ને ક્યારેય version control માં commit ન કરો**
- tokens `wp-config.php` માં store કરો જે Git થી exclude હોવું જોઈએ
- appropriate permissions સાથે tokens વાપરો (full integration માટે System Administrator)
- production environments માટે token expiry dates set કરો
- tokens periodically rotate કરો

### Performance
- excessive API calls ટાળવા માટે default DNS check interval (300 seconds) વાપરો
- large-scale domain operations ચલાવતી વખતે Enhance server resources monitor કરો
- ઘણા domains એક સાથે map કરતી વખતે domain additions stagger કરવાનું consider કરો

### Monitoring
- integration errors માટે regularly Ultimate Multisite logs check કરો
- failed domain additions માટે monitoring set up કરો
- Verify કરો કે SSL certificates correctly provision થઈ રહ્યા છે
- Enhance server capacity અને domain limits પર નજર રાખો

## વધારાના Resources

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** wiki page "How to Configure Domain Mapping v2" જુઓ

## Support

જો તમને issues આવે:
1. ઉપર Troubleshooting section check કરો
2. Ultimate Multisite logs review કરો
3. [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) consult કરો
4. panel-specific issues માટે Enhance support નો સંપર્ક કરો
5. community assistance માટે detailed error logs સાથે new discussion create કરો

## નોંધો

- આ integration ફક્ત domain aliases handle કરે છે; Enhance SSL automatically manage કરે છે
- integration custom domain mappings અને subdomain-based sites બંને support કરે છે
- Automatic www subdomain creation Domain Mapping settings માં configure કરી શકાય છે
- Enhance હાલમાં Apache configurations support કરે છે (LiteSpeed Enterprise ઉપલબ્ધ)
- Ultimate Multisite માંથી domain removal Enhance માંથી domain remove કરશે પણ associated SSL certificates તરત delete ન પણ થાય
