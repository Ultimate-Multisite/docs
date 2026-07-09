---
title: Ambrochdachadh a' chàrrpadh a' chàrrpadh
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Ailinn an Control Panel a' chlàradh {#enhance-control-panel-integration}

## Amasanachadh {#overview}
Enhance is tòiseachadh leat a tha panel control modern, a tha a thann sinn fòcas air atharrachadh agus amasanachais hosting. A tha seo a' bheachd a' chlàradh domhainn airson synch domain agus amasanachais SSL a' chlàradh beòsaid air Enhance Control Panel agus Ultimate Multisite.

**Amasanachadh a' sgeulachdainn:** Sealltainn [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) airson stiùiriche a' chlàradh agus fiosrachadh eile air an t-sgoil.

## Feàinean {#features}
- Synch domain a' chlàradh gu fìor nuair a tha domainan a' chlàradhdaidheadhaidda mar Ultimate Multisite
- Amasanachais SSL a' chlàradh beòsaid air LetsEncrypt gu sònach domhainn a' chlàradhdaidheadh
- Suidheachadh subdomain airson seòranna a' tha a' ginn a' chlàradhdaidheadh mar mode subdomain
- A' chlàradh domain a' tòisich nuair a thàidhean a' chlàradhdaidheadh a' tòisich
- Amasanachais a' chlàradh airson a' chlàradh beòsaid a' chlàradhdaidheadh

## Aighean {#requirements}

### Aighean Sysit {#system-requirements}
- Enhance Control Panel a' chlàradh agus a' chlàradhdaidheadh
- Installation WordPress Multisite a' ginn a' chlàradhdaidheadh air an server Enhance gu fìor mar a tha e a' chlàradhdaidheadh
- Apache web server (Tha Enhance a' tòisich a' chlàradh Apache; Tha LiteSpeed Enterprise aig tairgheadan a' chlàradh beòsaid)

### Amasanachais API {#api-access}
Mus e sinne a' chlàradhdaidheadh air Enhance Control Panel airson token API a' chlàradh, musnach faic thu a' chlàradhdaidheadh.

## Aighean Eòlas Eòlas API-n {#getting-your-api-credentials}

### 1. Creag Token API {#1-create-an-api-token}
1. A' chlàradh gu fìor air Enhance Control Panel mar administrator
2. Tha **Settings** (Amasanachais) a' chlàradh anns an meall a' chlàradhdaidheadh
3. Tòisich air **Access Tokens** (Tokenan Amasanachais)
4. Tòisich air **Create Token** (Creag Token)
5. Ghearr namh fìor do token (e.g., "Ultimate Multisite Integration")
6. Tha an rôl **System Administrator** a' chlàradhdaidheadh
7. airson tairgheadh a' chlàradh:
   - Leath a' chlàradh air a' chlàradh gu fìor mus thu a' chlàradh a' tòisich an t-sgoil
   - Mar a tha e a' chlàradh beòsaid airson fiosrachadh a' chlàradh

8. Tòisich air **Create** (Creag)

An tair a chlàradh, beidh an **Access Token** agus **Organization ID** a' tuairt. **Gabhain amach seo agad agad**, is casadh a thàllaidh an token gu mbeidh ean am bheachd.

### 2. Gabhail Eògadh Riaghladh (Organization ID) {#2-get-your-organization-id}

Tha an Eògadh Riaghladh a' tuairt ar an sìos Access Tokens, anns an t-uisge ionnsaicheach le fhaighinn "Org ID: {your_id}".

Tha an Eògadh Riaghladh air a bhith mar UUID a thaileachd: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Is eadar thuig a tha an Eògadh Riaghladh a fhaighinn airson ùr-dheargais:
1. Ràdh an sìos **Customers**.
2. Clic ar **Manage customer** airson an custaim sin.
3. Bhaigh air an URL - tha an Eògadh Riaghladh mar chàrrtaichean alphanumeric a tha air a dhèanamh an t-aithris `/customers/` a tha air a dhèanamh.

### 3. Gabhail Eògadh Server (Server ID) {#3-get-your-server-id}

 airson fhaighinn an Eògadh Server (a tha riatach airson obair ar domain):

1. San Enhance Control Panel, ràdh do **Servers**.
2. Clic air an server a màir a' tòiseachadh an WordPress agad.
3. Tha an Eògadh Server (mar UUID) a' tuairt anns an URL no dachaighan an server.
4. Mar eadar-dheargais, is eadar thuig a tha an API a fhaighinn an serveran:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Tha an Eògadh Server a thaileachd mar UUID: `00000000-0000-0000-0000-000000000000`

### 4. Gabhail URL API {#4-get-your-api-url}

Tha an URL API agad gu h-URL Enhance Control Panel a tha air a thàllaidh `/api/` a' tuairt:

```
https://your-enhance-panel.com/api/
```

**Important:** Tha an curtach `/api/` riatach. Tha earrachaidhean a thaileachd aig an t-aithris:
- Aig an t-aithris domhain gu mbeidh /api/ a' tuairt.
- Aig HTTP gu HTTPS (Tha HTTPS riatach airson sealltainn).

## Configuration {#configuration}

### Constants Riatach {#required-constants}

Gabhail an curtach seo air an `wp-config.php` agad:

// Ailinn an tasanachadh le sealladh (Enhance Control Panel Integration)
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Sealladh a thoil airson an tasanachadh (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. I admin WordPress, ràdhsa do **Ultimate Multisite** > **Settings**
2. Ràdhsa gu **Integrations** tab
3. Thoir air **Enhance Control Panel Integration** agus cluich air **Configuration**
4. Bidh an sealladh a th'annachadh agad:
   - **Step 1:** Sealladh agus cur às do fìrinn (feature overview)
   - **Step 2:** Cuimhneach ainmhan API agad (Token, API URL, Server ID)
   - **Step 3:** Teast an tasanachadh (connection)
   - **Step 4:** Rannsachail agus thòil (activate)

Is e cheannach a thig air:
- A leadh an sealladh a th'annachadh na constants sin gu fìor iad anns an `wp-config.php` agad
- A leadh na deighneacha constant sin agus a thòil gu fìor

## Sealladh WordPress adda (Additional WordPress Configuration) {#additional-wordpress-configuration}

Mar a tha e cudair a bh'annachaidh a bhith a' chùineachadh air faicinn (community feedback) ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), leide sin thuig a bhith agad gu fìor:

### Sealladh .htaccess {#htaccess-configuration}

Mar a tha thuig a bhith agad deiseil airson cur às air an tasanach (domain mapping):
1. Muileadh an file Enhance `.htaccess` buntainneach
2. Leathainn e gu an file Multisite `.htaccess` buntainneach de WordPress

### Constants Cookie {#cookie-constants}

Thoir sealladh sin anns an `wp-config.php` airson cur às air cookie gu fìor a' chùineachadh air domain sinne:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Conas a tha e a' tòiseachadh (How It Works) {#how-it-works}

### Nuair a thig air an domain (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. A user maps a custom domain in Ultimate Multisite (or a new site is created in subdomain mode)
2. The integration sends a POST request to Enhance's API: `/servers/{server_id}/domains`
3. Enhance adds the domain to your server configuration
4. When DNS resolves to your server, Enhance automatically provisions an SSL certificate via LetsEncrypt
5. The domain becomes active with HTTPS

### Nuairt an Domain a' tòrcha {#when-a-domain-is-removed}

1. Delet an mape domain a chùlaidh (mapping) mar a tha'n Ultimate Multisite
2. Aig an teacsa (integration) a thaith le POST request do Enhance API: `/servers/{server_id}/domains`
3. Enhanse a thann an domain a' tòrchaidh (configuration) a ghràdh
4. Nuair a thàir an DNS gu do server, a thann Enhance a thann sealltainn SSL certificate a leith chùlaidh LetsEncrypt
5. Tha an domain a' tòrchaidh le HTTPS

### A' cheannachadh DNS agus SSL {#dns-and-ssl-checking}

Includs Ultimate Multisite cheannachais DNS agus SSL:
- Is e gu bheil thu a' cheannachail (check interval) yn fhaighinn anns **Domain Mapping Settings** (default: 300 second/5 minit)?
- Tha an siostam a thaith le bhith a' cheannachadh DNS a dimintseach gu bheil an domain a' tòrchaidh
- Tha sealltainn SSL a cheannachail gu fhaighinn air a chùlaidh, mar tha Enhance a thann ean a' cheannachail, mar a tha thu a' cheannachadh SSL a' cheannachail

## A' cheannachadh an setup {#verifying-setup}

### A' cheannachadh an t-seòl (Test the Connection) {#test-the-connection}

1. Inne an Wizard an teacsa (Integration Wizard), usaig an step **Test Connection**
2. Tha an plugin a' cheannachail a' cheannachail domain a' do server
3. Tha meilinn sealltainn a' cheannachail:
   - Tha cridheann API a' fhaighinn
   - Tha URL API a' cheannachail
   - Tha ID Server a' tòrchaidh
   - Tha earrachaigh (permissions) a' cheannachail gu fìor

### An dàrna tar a dhèanamh an domain a' tòrchaidh {#after-mapping-a-domain}

1. Mape an domain test a' chùlaidh mar a tha'n Ultimate Multisite
2. Cheannachail an logs a' Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Cheannachail a' cheannachail i Enhance Control Panel gu bheil an domain a' tòrchaidh:
   - Ath a' cheannachail do **Servers** > **Your Server** > **Domains**
   - Tha an domain ùr a' tòrchaidh anns an lùth

Once tha an DNS a' cheannachail, cheannachail gu bheil sealltainn SSL a' cheannachail.

## Troubleshooting {#troubleshooting}

### API Connection Issues {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- Stadach `WU_ENHANCE_API_URL` a' che `/api/` a stià an seach.
- Assurese gu cun fhaigh HTTPS, cha mhòr de HTTP.
- Chea chea an panel Enhance eolais a bhith agad air do server WordPress.
- Chea chea tha thighearaidhean firewall a' chlàradh an t-sìth.

**Error: "Enhance API Token not found"**
- Assurese gu cun fhaigh `WU_ENHANCE_API_TOKEN` yn definid i `wp-config.php`.
- Chea chea tha an token a tha wedi' sealladh air a' chlàradh mar Enhance.
- Chea chea tha thighearaidhean (typos) aig an fhaisg an token.

**Error: "Server ID is not configured"**
- Assurese gu cun fhaigh `WU_ENHANCE_SERVER_ID` yn definid i `wp-config.php`.
- Chea chea tha an Server ID a tha air a bhith un fòmage UUID.
- Chea chea tha an server agad aig an panel Enhance.

### Domain Not Added {#domain-not-added}

**Chea na log:**
1. Ràdh gu **Ultimate Multisite** > **Logs**
2. Fhàgadh (Filter) gu **integration-enhance**
3. Sealladh airson meilinn a' chlàradh an t-sìth.

**Amhasan a tha air a bhith ag obair:**
- Fòmage namhail (domain name format) a tha a' cheannach.
- Tha an namhaail agad air a bhith beag mar Enhance.
- Tha amhdan API (API permissions) a tha a' chlàradh (assurese gu cun fhaigh an token rôl System Administrator).
- Tha an Server ID a' cheannach a' cheannach an server a tha ag obair.

### SSL Certificate Issues {#ssl-certificate-issues}

**SSL cha tha a' cur-rachadh:**
- Assurese gu cun fhaigh DNS a' cheannach air an IP agad.
- Chea chea tha an namhaail a' cheannach gu sònach: `nslookup yourdomain.com`
- Tha Enhance ag iarraidh DNS a bhith a' cheannach a' sealladh SSL.
- Tha cur-rachadh SSL (SSL provisioning) a' cheannach 5-10 minut an cur-rachadh DNS.
- Chea chea tha thighearaidhean SSL-specific air an panel Enhance.

**Cur-rachadh SSL a' chlàradh mar manual i Enhance:**
1. Ràdh gu **Servers** > **Your Server** > **Domains**
2. Sealladh an namhaail agad agus chea tha an stat SSL air a bheir.
3. Is e cheannach a bhith ag cur-rachadh SSL (SSL provisioning) mar manual thuair a tha thuair a' cheannach.

### DNS Check Interval {#dns-check-interval}

Tha domàinachan no SSL certifigiatachan a tha a' tòl a' tòl airson a' chluich:
1. Ràdhda gu **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Thànaidh an setadh **DNS Check Interval** (Taisg a' cheannach)
3. Ràdhsa e frum de 'sgeulach' 300 second air cur fhaighinn (minime: 10 second)
4. **Note:** Air taisg a' cheannach a tha a' tòl, tha e cheannach a' tòl gu mòr air an server.

### Earrachdan a' chluich (Authentication Errors) {#authentication-errors}

**Earrachdan HTTP 401/403:**
- Ràdhsa a' sgaith (Regenerate) an API token agad anns an Enhance.
- Comharrach gu bheil an token de dhòigh **System Administrator**.
- Comharrach gu bheil an token a tha a' tòl.
- Comharrach gu bheil thu a' lasaig an ID Organization sin (air dùil, chan eil e roinn a' tòl anns an URL).

### Analís Logachan (Log Analysis) {#log-analysis}

Ràdhsa logasan a' tòl:
```php
// Ràdhsa a' tòl air wp-config.php airson fhaighinn fhaighinn a' chluich
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

An uair a tha thu a' lasaig an logasan:
- Logasan Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Logasan WordPress debug: `wp-content/debug.log`
- Logasan panel Enhance: Aer a' tòl anns an interface admin de Enhance

## API Reference (Rannsachadh API) {#api-reference}

### Authentication {#authentication}
A gcothrom API requests a' chluich a' lasaig Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints a' chluich a' lasaig (Common Endpoints Used) {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Add a Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Delete a Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Documentation (Rannsachadh API latha) {#full-api-documentation}
Rannsachadh API latha: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (Fàilte a' chluich) {#best-practices}

### Sécurité (Security) {#security}
- **Néjam commit token API ar chuidh** (Never commit API tokens to version control)
- Stòr tokenan mewn `wp-config.php` a tha thuig a chan eil a' tòiseachadh de Git (Store tokens in `wp-config.php` which should be excluded from Git)
- Aiguseach tokenan le eamhan fìor (System Administrator airson cur-aithreachadh fìor) (Use tokens with appropriate permissions (System Administrator for full integration))
- Seth seachd tairgsean a' chuidh airson eamhan (Set token expiry dates for production environments)
- Ròghainn tokenan gu fìor (Rotate tokens periodically)

### Fòcas (Performance) {#performance}
- Aiguseach an tairgseall DNS a tha thuig (300 second) airson a bhith a' chluas API fìor (Use the default DNS check interval (300 seconds) to avoid excessive API calls)
- Ròghainn resursan server Enhance nuair a tha thuig cur-aithreachadh domainan mòra (Monitor Enhance server resources when running large-scale domain operations)
- Bhaigh an tairgseallachadh na domainan a' chluas air a' chluas gu fìor mar a tha e cur-aithreachadh mòr (Consider staggering domain additions if mapping many domains at once)

### Monitóir (Monitoring) {#monitoring}
- Aiguseach gu rath na logan Ultimate Multisite airson earrachda cur-aithreachaidh (Regularly check Ultimate Multisite logs for integration errors)
- Seth monatóir airson cur-aithreachaid domainan a tha thuig (Set up monitoring for failed domain additions)
- Bhaigh an tairgseallachadh SSLan a' chluas gu fìor (Verify SSL certificates are provisioning correctly)
- Ròghainn air cur-aithreachadh server Enhance agus liath domainan (Keep an eye on Enhance server capacity and domain limits)

## Rannachan Fòcasach (Additional Resources) {#additional-resources}

- **Documentation Ealaidh Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentation API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fòrum Comann Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Discutadh GitHub:** [Issue #265 - Enhancing Tips airson Cur-aithreachaidh] (GitHub Discussion: Issue #265 - Enhance Integration Tips)
- **Latha Cur-aithreachaidh Domainan Ultimate Multisite:** Sealltainn an seachdain wiki "How to Configure Domain Mapping v2"

## Cuimhneachdan (Support) {#support}

Tha thuig a' chluas:
1. Aiguseach an seachd a' chluas cur-aithreachaidh (Check the Troubleshooting section above)
2. Ràdhsa na logan Ultimate Multisite (Review the Ultimate Multisite logs)
3. Sealltainn cuimhneachdan GitHub Discussions (Consult the [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions))
4. Contact Enhance support airson earrachda a tha thuig (Contact Enhance support for panel-specific issues)
5. Creag seachdain ùr le logan earrachaidh fìor airson cur-aithreachadh comann (Create a new discussion with detailed error logs for community assistance)

## Cuimhneachdan (Notes) {#notes}

- Tha seo a' leantainn dìreach alias domain; Enhances a' leantainn SSL gu fìor.
- A' leantainn a' tòiseachadh air cur mhaith le fhaighinn (integration) cuideachd mapping domain ùr agus sitiùishean (subdomain-based sites).
- Is e possible a tharann cur mhaith an t-subdomain www a leantainn mar tha's a' leantainn air seòl na h-mapping domain.
- Tha Enhance a' leantainn cuideachd cur mhaith ar Apache configurations (Tha LiteSpeed Enterprise a' leantainn).
- Nuair a tharann an domain a' leantainn air Ultimate Multisite, tha an domain a' leantainn air Enhance ach eadar-dheargadh SSL certificates a' leantainn gu sgeulach.
