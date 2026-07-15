---
title: Chingira Kufamba neKupatsanana kweControl Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kufamba Kuenzanisa Control Panel

## Zvinoreva {#overview}
Enhance ndiyo control panel yakakwana inosimbisa zvinokosha dze hosting uye management. Izvi zvinhu zvinoita kuti domain syncing (kugadzirisa domain) uye SSL certificate management zvizere zvichitonga pakati pe Ultimate Multisite ne Enhance Control Panel.

**Kufamba Kwemabasa:** Ongore [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) kuti uve nechinangwa chekugona kune zvinhu zvakawanda nemapurovedzisi ekurudzira.

## Zvinoreva {#features}
- Domain syncing yakazara kana domain dziri kuonekwa (mapped) mu Ultimate Multisite
- SSL certificate provisioning yakazara nekubatsirwa neLetsEncrypt kana DNS inogadzirisa
- Subdomain support kune networks dziri kuenda mwoyo we subdomain mode
- Kuondedza domain kana mappings dzakachengetedzwa

## Zvinoda Kufamba (Requirements) {#requirements}

### Zvinoda Kune System {#system-requirements}
- Enhance Control Panel yakaiswa uye inogona kuonekwa (accessible)
- WordPress Multisite installation inosimbiswa kana inosimbiswa ne server ya Enhance
- Apache web server (Enhance inogona kudzidzisa Apache configurations; LiteSpeed Enterprise inogona kuonekwa nekuvaka zvakanyanya)

### Access Kune API {#api-access}
Unofanira kuva neaccess ye administrator kune Enhance Control Panel kuti uwe API tokens.

## Kuva NeAPI Credentials Yao {#getting-your-api-credentials}

### 1. Kuratidza API Token {#1-create-an-api-token}

1. Ingore (Log in) kune Enhance Control Panel yako seadministrator
2. Chibvumira **Settings** mu navigation menu
3. Ramba ku **Access Tokens**
4. Chibvumira **Create Token**
5. Tsvisa zvinhu zvinobatsira kuti token iwe (e.g., "Ultimate Multisite Integration")
6. Tsvisa role ya **System Administrator**
7. Kune expiry date:
   - Ramba inotarisirwa kana uchida token haunogone kuenda
   - Kana uchida kune expiry date yakakwana kuti uingine zvinhu zvinokosha

8. Chibvumira **Create**

Apashe chakanaka, **Access Token** yako uye **Organization ID** dzachazobva kuoneka. **Save izvi zvakare** nekuti token ichazowoneka panguva yakare chete.

### 2. Kuva NeOrganization ID Yako {#2-get-your-organization-id}

Organization ID inogoneka pane kurumbira kwenye Access Tokens page mu box yechinyorwa "Org ID: {your_id}" inochinjika.

Organization ID inogona kuoneka panguva yakare chete (UUID format): `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Unogona kutaura Organization ID ya munhu nekuti:
1.enda kwenye page **Customers**
2.Chibvumira **Manage customer** panguva unenge uri munhu iye
3.Ongorora URL - Organization ID inosvika pamusoro pe `/customers/`

### 3. Kuva NeServer ID Yako {#3-get-your-server-id}

Kuti utore Server ID yako (unoda kuti ubatane nemurimo we domain):

1.Mune Enhance Control Panel, ndirira ku **Servers**
2.Chibvumira server inosanganisira WordPress yako inogona kuenda
3.Server ID (UUID format) inogoneka kutaura mu URL kana zvinotevera dziri dzinobva munzvimbo rekutenderana

Kana uri kutenderana, unogona kushandisa API kuti utore servers:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID inogona kuoneka panguva yakare chete (UUID format): `00000000-0000-0000-0000-000000000000`

### 4. Kuva NeAPI URL Yako {#4-get-your-api-url}

API URL yako inosanganisira URL ya Enhance Control Panel yako ne `/api/`:

```
https://your-enhance-panel.com/api/
```

**Zvinotevera:** Path ya `/api/` inoda kuoneka. Mupfungwa yakare inogona kuva:
- Kutenda domain chete pane /api/
- Kutenda HTTP kunoita HTTPS (HTTPS inoda kuti ubatane nemurimo)

## Configuration {#configuration}

### Constants Zvinoda Kuva {#required-constants}

Chingira constants izvi mu file yako `wp-config.php`:

// Kufanisa Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Setup kupiwo Integration Wizard {#setup-via-integration-wizard}

1. Mu WordPress admin, ndirira ku **Ultimate Multisite** > **Settings**
2. Dira ku tab ya **Integrations**
3. Tsvaka **Enhance Control Panel Integration** uye chibvumira **Configuration**
4. Wizard ichakubatsira kuti uita setup:
   - **Step 1:** Chirevo nekuona zvinhu zvinoreva (Introduction and feature overview)
   - **Step 2:** Shandisa credentials dzako dze API (Token, API URL, Server ID)
   - **Step 3:** Simbisa kukosha kwe connection (Test the connection)
   - **Step 4:** Simbisa uye chibvumira (Review and activate)

Unogona kuita iye:
- Kuramba wizard inyira constants dzako mu file yako ya `wp-config.php` nekuti zvinhu zvinoreva (inject the constants into your `wp-config.php` file automatically)
- Kuramba kurisa definitions dzemakosha uye kuita iye manually

## Configuration yakatorerwa yechipfundo (Additional WordPress Configuration) {#additional-wordpress-configuration}

Kutiri kubva pa feedback ye vanhu vachikumbira ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), unogona kuitira configuration yese iyi:

### Configuration ya .htaccess {#htaccess-configuration}

Kana uri kuona matambudziko nekugadzirisa domain (domain mapping):
1. Dihira file original Enhance `.htaccess`
2. Ririre nefile standard WordPress Multisite `.htaccess`

### Constants dzemakokoto (Cookie Constants) {#cookie-constants}

Shandisa constants iyi mu `wp-config.php` kuti urobeure cookie zvakanaka pakati pe domains dzakagadzirwa:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Izvi zvinoreva sei (How It Works) {#how-it-works}

### Kana Domain Inogadzirwa (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Mwana anogona mapa domain wako wakanaka (custom domain) mu Ultimate Multisite (kana kana unyaya wechinyorwa mune subdomain mode).
2. Integration inenge inenge POST request ku Enhance API: `/servers/{server_id}/domains`.
3. Enhance inenge inenge idomain ineya ku server configuration yako.
4. Kana DNS inenge inenge yakaona server yako, Enhance inenge inenge SSL certificate inenge inenge via LetsEncrypt.
5. Idomain inenge inenge yakabva kuseka neHTTPS.

### Kana Domain Inenge Inenge Iremwa (When a Domain is Removed) {#when-a-domain-is-removed}

1. Mapping ye domain inenge inenge irimwa mu Ultimate Multisite.
2. Integration inenge inenge inenge iDomain ID ku Enhance kuti ibone.
3. DELETE request inenge inenge inenge inenge ku: `/servers/{server_id}/domains/{domain_id}`.
4. Enhance inenge inenge iDomain ineya ku server configuration yako.

### Kuona DNS neSSL Checking (DNS and SSL Checking) {#dns-and-ssl-checking}

Ultimate Multisite inenge inenge inenge kune checking ye DNS neSSL:
- Unogona ku configure check interval mu **Domain Mapping Settings** (default: 300 seconds/5 minutes).
- System inenge inenge inenge yakaona propagation ye DNS pashure kuti iDomain ineya yakabva yakasika.
- Validity ye SSL certificate inenge inenge inenge yakaona nekugutsa.
- Enhance inenge inenge inenge inenge SSL provisioning, pane haunenge kune configuration ya SSL manual.

## Kuona Setup (Verifying Setup) {#verifying-setup}

### Kuti Unge Test Connection (Test the Connection) {#test-the-connection}

1. Mu Integration Wizard, unenge use step we **Test Connection**.
2. Plugin inenge inenge inenge inenge ku list domains pa server yako.
3. Message ye success inenge inenge inenge inenge yakaona:
   - API credentials ndizvinhu zvakakosha (are correct)
   - API URL inenge inenge inenge yakabva kubatsirwa (is accessible)
   - Server ID inenge inenge inenge yakanaka (is valid)
   - Permissions inenge inenge inenge zvinenge zvinenge zvinenge zvinhu zvakakosha (are properly set).

### Pasi Kubva NeMapping Domain (After Mapping a Domain) {#after-mapping-a-domain}

1. Map domain yakatitso mu Ultimate Multisite.
2. Check logs ye Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Verify mu Enhance Control Panel kuti iDomain inenge inenge yakaedza:
   - Go ku **Servers** > **Your Server** > **Domains**.
   - IDomain yakatitso inenge inenge inenge yakabva kune list.
4. Kana DNS inenge inenge inenge yakabva, verify SSL inenge inenge inenge yakaedza:

## Kutirozo (Troubleshooting) {#troubleshooting}

### Matambudziko ekugadzirisa API Connection {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- Chireve kuti `WU_ENHANCE_API_URL` inenge inosanganisira `/api/` kuendapo.
- Zvinoreva kuti unenge uri HTTPS, asi HTTP.
- Chireve kuti panelu ya Enhance inogona kutambudzika kubva kune server yako ya WordPress.
- Chireve kuti pane rules dzakafamba (firewall) dzinokutanga connection.

**Error: "Enhance API Token not found"**
- Chireve kuti `WU_ENHANCE_API_TOKEN` inenge inogadzirwa mu `wp-config.php`.
- Chireve kuti token haunenge akazvisira kana akaenda (expired) mu Enhance.
- Chireve kuti pane typos (matambudziko vakuru) mu chine chine tokeni.

**Error: "Server ID is not configured"**
- Chireve kuti `WU_ENHANCE_SERVER_ID` inenge inogadzirwa mu `wp-config.php`.
- Chireve kuti Server ID inenge iwe UUID inoshandiswa zvakanaka.
- Chireve kuti server iyi ine ku Enhance panelu yako.

### Domain Haunenge Akatsanana (Not Added) {#domain-not-added}

**Chireve logs:**
1.enda ku **Ultimate Multisite** > **Logs**
2. Filter ne **integration-enhance**
3. Kuratidza zvinhu zvinoreva kuti kuna matambudziko.

**Zvinenge zvakasiya (Common causes):**
- Format ya domain inosanganisira zvakanaka kana inosanganisira zvakasiya.
- Domain haunenge akaita mu Enhance.
- Permissions dzakapiwa API dzinobva kune System Administrator (ensure token has System Administrator role).
- Server ID haunenge uine server wako wemakore mu Enhance.

### Matambudziko ekuti SSL Inenge Isanganisirwa (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL haunenge isanganisirwa:**
- Chireve kuti DNS inosanganisira ku IP address ya server yako.
- Chireve kuti domain inosanganisira zvakanaka: `nslookup yourdomain.com`
- Enhance inoda DNS inosanganisira pfungwa (resolve) panguva inenge isanganisirwa SSL.
- Isanganisirwa SSL chinogona kuenda 5-10 minutes panguva DNS inobudirira (propagation).
- Chireve logs dzakare mu Enhance Control Panel kuti pane matambudziko ekusanganisirwa SSL.

**Kuti usanganisirise SSL nehanda (Manual SSL troubleshooting in Enhance):**
1.enda ku **Servers** > **Your Server** > **Domains**
2. Kuratidza domain yako uye chireve status ya SSL yake.
3. Unogona kuteerera isanganisirwa SSL kana unoda.

### DNS Check Interval {#dns-check-interval}

Kana zvinodiwa kana domain dziri kana SSL certificates dzinotora nguva yakawanda kuti dzichireta:
1. Ndosvika pakati **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Tsvaga chine **DNS Check Interval** setting
3. Ramba isingabatana ne default 300 seconds, ramba iwe zvinhu zvakasiyi (minimum: 10 seconds)
4. **Chii:** Intervals dzinotsvaga dziri kuita checks dzakawanda asi dzichipa server load yakawanda

### Matambudziko ekutambudzika kweAuthentication (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Rerega API token yako mu Enhance
- Simbisa kuti token inenge inenge ine role ya **System Administrator**
- Simbisa kuti token haunenge inenge yakadzedzera (expired)
- Simbisa kuti unenge unogona kuita Organization ID yakakodzera (though it's typically not required in the URL)

### Kufamba neLog Analysis (Log Analysis) {#log-analysis}

Chirudzirwa kudzidza logs dzakawanda:
```php
// Shanda mu wp-config.php kuti ndikwanise kuona zvinhu zvakawanda
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Zvakanaka, simbisa logs panguva izvi:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Zvinogona kuoneka mu admin interface ya Enhance

## API Reference (Rupiro reAPI) {#api-reference}

### Authentication {#authentication}
Mazuva onozivawe weAPI onoshandisa Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints dzakasiyana dzinoshwa {#common-endpoints-used}

**Kutanga Servers:**
```
GET /servers
```

**Kutanga Domains panovhu (On a Server):**
```
GET /servers/{server_id}/domains
```

**Kutanga Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Kupusa Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### API Documentation Yese (Full API Documentation) {#full-api-documentation}
API documentation yese: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (Zvinoreva Zvinhu Zvinoreva) {#best-practices}

### Security {#security}
- **Hapana kuta API tokens kuita version control** (Never commit API tokens to version control)
- Store tokens mu `wp-config.php` inozvire, uye inofanira kuva panguva isingazviitwa Git (Store tokens in `wp-config.php` which should be excluded from Git)
- Shandisa tokens nekuvimbiso zvakodzera (System Administrator kuti uve neintegration yakare) (Use tokens with appropriate permissions (System Administrator for full integration))
- Tsvira mazuva ekupedzisira (expiry dates) kwetokens dzinogona kuita production environments (Set token expiry dates for production environments)
- Rereta tokens zvakare (Rotate tokens periodically)

### Performance {#performance}
- Shandisa interval ya DNS check inotarisirwa (300 seconds) kuti usina kuta API calls zvinokurudzira (Use the default DNS check interval (300 seconds) to avoid excessive API calls)
- Funga zvinhu zveEnhance server kana munenge uchitenderera mari yakawanda dzinogona kuita domain operations (Monitor Enhance server resources when running large-scale domain operations)
- Rururura kuita domain additions kana unenge uchitenderera domain dzakawanda kumashure (Consider staggering domain additions if mapping many domains at once)

### Monitoring {#monitoring}
- Kururura zvakare Ultimate Multisite logs kuti usina matambudziko ekintegration (Regularly check Ultimate Multisite logs for integration errors)
- Tsvira monitoring kuita domain additions dzinofamba (Set up monitoring for failed domain additions)
- Tsanidza SSL certificates dzine kuta zvakanaka (Verify SSL certificates are provisioning correctly)
- Kururura mari yaEnhance server uye limits dzeno domain (Keep an eye on Enhance server capacity and domain limits)

## Additional Resources {#additional-resources}

- **Documentation ya Enhace:** [https://enhance.com/docs](https://enhance.com/docs)
- **API Documentation ya Enhace:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guide ya Ultimate Multisite Domain Mapping:** Shandisa wiki page "How to Configure Domain Mapping v2"

## Support {#support}

Kana uchitambudzika:
1. Kururura Troubleshooting section yakare (Check the Troubleshooting section above)
2. Rururura Ultimate Multisite logs
3. Tsanidza [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Riramba neEnhance support kuti vashandise issues dzine kuita panel (Contact Enhance support for panel-specific issues)
5. Tsvira discussion yepamusoro neerror logs dzine zvinobatsira community

## Notes {#notes}

Iyiwe, iye zvinotevera:

- Iye inotevera mapuroke anoma (domain aliases) chete; Enhancenya inoreke SSL kwawo nekubatsira.
- Iye inosimbisa zvinangwa dzakare (custom domain mappings) uye madzo (subdomain-based sites).
- Kuratidza www subdomain kutanga kunogona kuva nekuvaka mhinduro mu settings dzakare (Domain Mapping settings).
- Enhancenya inosimbisa configurations dze Apache (LiteSpeed Enterprise inogona kuva yakaita).
- Kurarurudza anoma mumwe wemutauro weUltimate Multisite kunotora anoma kuEnhance, asi kungava hakuna kurarurudza SSL certificates nekubvisa zvakare.
