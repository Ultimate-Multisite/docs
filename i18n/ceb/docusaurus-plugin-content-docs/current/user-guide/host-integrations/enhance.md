---
title: Pauswagon ang Integrasyon sa Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Pagpalambo sa Integrasyon sa Control Panel

## Panan-aw (Overview) {#overview}
Ang Enhance usa ka modernong control panel nga naghatag og gamhanang hosting automation ug management capabilities. Kini nga integrasyon nagtugot sa automatic domain syncing ug SSL certificate management tali sa Ultimate Multisite ug Enhance Control Panel.

**May Kalisod nga Diskussyon:** Tan-awa ang [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para sa mga tips sa komunidad ug dugang impormasyon.

## Mga Tampo (Features) {#features}
- Automatic domain syncing kung ang mga domain gipa-mapa sa Ultimate Multisite
- Automatic SSL certificate provisioning pinaagi sa LetsEncrypt kung ma-resolve ang DNS
- Suporta sa subdomain alang sa mga network nga nagpadagan sa subdomain mode
- Pag-remove sa domain kung ang mga mapping gihapus
- Pagsulay sa koneksyon aron masiguro ang API credentials

## Mga Kinahanglanon (Requirements) {#requirements}

### System Requirements {#system-requirements}
- Ang Enhance Control Panel kinahanglan na-install ug accessible
- WordPress Multisite installation nga gi-host o konektado sa usa ka Enhance server
- Apache web server (Ang Enhance nagsuporta karon sa mga konfigurasyon sa Apache; ang LiteSpeed Enterprise available sa mas ubos nga presyo)

### API Access {#api-access}
Kinahanglan nimo og administrator access sa Enhance Control Panel aron makakabAlright ng API tokens.

## Pagkuha sa Imong API Credentials {#getting-your-api-credentials}

### 1. Paghimo og API Token {#1-create-an-api-token}

1. Mag-login sa imong Enhance Control Panel isip administrator
2. I-click ang **Settings** sa navigation menu
3. Magpadulong sa **Access Tokens**
4. I-click ang **Create Token**
5. Hatagi og deskriptibong ngalan ang token (pananglitan, "Ultimate Multisite Integration")
6. Hatag og **System Administrator** role
7. Para sa petsa sa pag-expire:
   - Biyaan nga walay sulod kung gusto nimo nga dili gyud mag-expire ang token
   - O mag-set og espesipikong petsa sa pag-expire alang sa seguridad
8. I-click ang **Create**

Pagkatapos mag-create, ipakikita ang imong **Access Token** ug **Organization ID**. **I-save kini dayon** kay ang token ipakita lang usa ka higayon.

### 2. Kuhaa ang Imong Organization ID {#2-get-your-organization-id}

Ang Organization ID ipakita sa Access Tokens page sa usa ka asul nga information box nga naglangkob sa "Org ID: {your_id}".

Ang Organization ID usa ka UUID format sama niini: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Mahimo usab nimong makita ang Organization ID sa customer pinaagi sa:
1. Adto sa **Customers** page
2. I-click ang **Manage customer** para sa may kalabotan nga customer
3. Tan-awa ang URL - ang Organization ID mao ang mga alphanumeric characters human sa `/customers/`

### 3. Kuhaa ang Imong Server ID {#3-get-your-server-id}

Para makit-an ang imong Server ID (kinahanglanon para sa domain operations):

1. Sa Enhance Control Panel, maglakaw ngadto sa **Servers**
2. I-click ang server diin nag-run ang imong WordPress installation
3. Ang Server ID (UUID format) maabot sa URL o sa server details
4. Alternatibo, pwede nimong gamiton ang API para i-list ang mga servers:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Ang server ID nagsunod sa UUID format: `00000000-0000-0000-0000-000000000000`

### 4. Kuhaa ang Imong API URL {#4-get-your-api-url}

Ang imong API URL mao ang imong Enhance Control Panel URL nga dugangan sa `/api/`:

```
https://your-enhance-panel.com/api/
```

**Importante:** Kinahanglan ang path nga `/api/`. Ang mga kasagaran nga sayop mao ang:
- Paggamit lang sa domain nga walay `/api/`
- Paggamit og HTTP imbes nga HTTPS (HTTPS kinahanglanon para sa seguridad)

## Configuration {#configuration}

### Required Constants {#required-constants}

Ibutang ang mosunod nga mga constant sa imong `wp-config.php` file:

```php
// Palig-on sa Integrasyon sa Control Panel
define('WU_ENHANCE_API_TOKEN', 'imong-bearer-token-dinhi');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'imong-server-uuid-dinhi');
```

### Pagsugod pinaagi pinaagi sa Integration Wizard {#setup-via-integration-wizard}

1. Sa imong WordPress admin, adto sa **Ultimate Multisite** > **Settings**
2. Maglakaw sa tab nga **Integrations**
3. Pangitaa ang **Enhance Control Panel Integration** ug i-click ang **Configuration**
4. Ang wizard maggiya nimo sa setup:
   - **Step 1:** Introduksyon ug overview sa mga feature
   - **Step 2:** Isulod ang imong API credentials (Token, API URL, Server ID)
   - **Step 3:** I-test ang koneksyon
   - **Step 4:** Mag-review ug mag-activate

Mahimo nimong pilion:
- Tugotan ang wizard nga i-inject ang mga constants sa imong `wp-config.php` file awtomatiko
- Kopyahon ang mga definition sa constant ug i-add kini manually

## Dugang WordPress Configuration {#additional-wordpress-configuration}

Base sa feedback sa komunidad ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), basin kinahanglan nimo kining dugang settings:

### .htaccess Configuration {#htaccess-configuration}

Kung nasinati nimo ang problema sa domain mapping:
1. Burahin ang orihinal nga Enhance `.htaccess` file
2. Palitan kini sa standard WordPress Multisite `.htaccess` file

### Cookie Constants {#cookie-constants}

I-add kining mga constants sa `wp-config.php` aron masiguro ang husto nga pag-handle sa cookies sa tanang domain nga gipa-mapa:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Unsaon Kini Paglihok {#how-it-works}

### Kung Gi-map ang Usa ka Domain {#when-a-domain-is-mapped}

1. Nagmapa ang usa ka custom domain sa Ultimate Multisite (o naghimo og bag-ong site sa subdomain mode)
2. Ang integration magpadala og POST request ngadto sa Enhance's API: `/servers/{server_id}/domains`
3. Ang Enhance magdadagdag sa domain sa imong server configuration
4. Kung ang DNS mo-resolve sa imong server, awtomatikong magpro-provision ang Enhance og SSL certificate pinaagi sa LetsEncrypt
5. Ang domain mahimong aktibo uban ang HTTPS

### Kung Alisa na ang Usa ka Domain {#when-a-domain-is-removed}

1. Ang mapping sa domain mapili sa Ultimate Multisite
2. Ang integration mag-query sa Enhance aron pangitaon ang ID sa domain
3. Ang DELETE request ipadala ngadto sa: `/servers/{server_id}/domains/{domain_id}`
4. Ang Enhance magtangtang sa domain gikan sa imong server configuration

### DNS ug SSL Checking {#dns-and-ssl-checking}

Ang Ultimate Multisite adunay built-in nga DNS ug SSL checking:
- Mahimo nimong i-configure ang check interval sa **Domain Mapping Settings** (default: 300 seconds/5 minutos)
- Ang sistema mag-verify sa DNS propagation sa dili pa kini i-marka nga aktibo ang domain
- Ang validity sa SSL certificate awtomatikong gi-check
- Ang Enhance ma-handle ang SSL provisioning, busa wala kinahanglan og manual na SSL configuration

## Pag-verify sa Setup {#verifying-setup}

### I-test ang Koneksyon {#test-the-connection}

1. Sa Integration Wizard, gamita ang **Test Connection** step
2. Ang plugin magtentro nga i-list ang mga domain sa imong server
3. Usa ka success message nagpamatuod:
   - Tama ang API credentials
   - Accessible ang API URL
   - Valid ang Server ID
   - Maayo ang permissions

### Human Mapirma og Domain {#after-mapping-a-domain}

1. Mapirma og usa ka test domain sa Ultimate Multisite
2. I-check ang Ultimate Multisite logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Siguraduhon sa Enhance Control Panel nga gidagdag na ang domain:
   - Adto sa **Servers** > **Imong Server** > **Domains**
   - Ang bag-ong domain kitang makita sa listahan
4. Kung ma-propagate na ang DNS, i-verify nga awtomatikong na-provision ang SSL

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

### Problema sa API Connection {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- Siguraduhon nga ang `WU_ENHANCE_API_URL` naglakip og `/api/` sa katapusan.
- Siguraduhon nga naggagamit ka og HTTPS, dili HTTP.
- Siguraduhon nga ang Enhance panel ma-access gikan sa imong WordPress server.
- Siguraduhon nga walay firewall rules nga nagabalo sa koneksyon.

**Error: "Enhance API Token not found"**
- Siguraduhon nga ang `WU_ENHANCE_API_TOKEN` gi-define sa `wp-config.php`.
- Siguraduhon nga wala kini gubli o expired sa Enhance.
- Siguraduhon nga walay sayop (typo) sa value sa token.

**Error: "Server ID is not configured"**
- Siguraduhon nga ang `WU_ENHANCE_SERVER_ID` gi-define sa `wp-config.php`.
- Siguraduhon nga ang Server ID usa ka valid UUID format.
- Kumpirmaha nga ang server anaa na sa imong Enhance panel.

### Dili Gitakda ang Domain (Domain Not Added) {#domain-not-added}

**Suri sa logs:**
1. Adto sa **Ultimate Multisite** > **Logs**.
2. Filter gamit ang **integration-enhance**.
3. Pangitaa ang mga error messages nga nagpakita sa problema.

**Mga kasagaran nga hinungdan:**
- Sayop nga format sa domain name.
- Ang domain kay anaa na sa Enhance.
- Dili igo ang API permissions (siguraduhon nga ang token adunay System Administrator role).
- Ang Server ID dili tugma sa aktuwal nga server sa Enhance.

### Problema sa SSL Certificate {#ssl-certificate-issues}

**Dili ma-provision ang SSL:**
- Siguraduhon nga ang DNS nagtudlo sa IP address sa imong server.
- Suriha kung ang domain ma-resolve og tarong: `nslookup yourdomain.com`.
- Kinahanglan ang DNS nga ma-resolve una pa kini makaprovide og SSL.
- Ang pag-provision sa SSL kasagaran molungtad og 5-10 ka minutos human sa DNS propagation.
- Suriha ang Enhance Control Panel logs para sa mga error nga espesipiko sa SSL.

**Manual SSL troubleshooting sa Enhance:**
1. Adto sa **Servers** > **Your Server** > **Domains**.
2. Pangitaa ang imong domain ug suriha ang status sa SSL niini.
3. Mahimo nimo manu-manually i-trigger ang SSL provisioning kung gikinahanglan.

### DNS Check Interval {#dns-check-interval}

Kung ang mga domain o SSL certificate nagadulong og dugay sa pag-activate:
1. Adto sa **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Pangitaa ang setting nga **DNS Check Interval**
3. I-adjust kini gikan sa default nga 300 seconds ngadto sa mas ubos nga value (minimum: 10 seconds)
4. **Nota:** Ang mas ubos nga intervals nagpasabot og mas daghang checks pero mas taas ang load sa server

### Mga Sayop sa Authentication {#authentication-errors}

**HTTP 401/403 errors:**
- I-regenerate imong API token sa Enhance
- Siguraduhon nga ang token adunay **System Administrator** role
- Siguraduhon nga wala pa kini expired
- Siguraduhon nga naggamit ka og husto nga Organization ID (bisan tuod kasagaran dili kinahanglan sa URL)

### Pagsusi sa Logs {#log-analysis}

I-enable ang detalyado nga logging:
```php
// Idugang ni sa wp-config.php para sa mas maayong debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Dayon i-check ang logs dinhi:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Magamit sa admin interface sa Enhance

## API Reference {#api-reference}

### Authentication {#authentication}
Ang tanang API requests naggamit og Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Mga Kasagarang Endpoints nga Gigamit {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains sa usa ka Server:**
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

### Full API Documentation {#full-api-documentation}
Kompleto nga API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#best-practices}

### Seguridad {#security}
- **Ayaw gyud i-commit ang API tokens sa version control**
- I-store ang mga tokens sa `wp-config.php` nga kinahanglan usbon gikan sa Git
- Gamita ang mga tokens nga adunay saktong permiso (System Administrator para sa bug-os nga integrasyon)
- I-set ang mga petsa sa pag-expire sa token alang sa production environments
- Regular nga i-rotate ang mga tokens

### Performance {#performance}
- Gamita ang default DNS check interval (300 seconds) aron malikayan ang sobra nga API calls
- Monitor ang resources sa Enhance server kung nagpadagan og dagkong operasyon sa domain
- Hunahunaa ang pag-stagger sa pagdadaghan sa domain kung magmapa og daghang domain sa usa ka higayon

### Monitoring {#monitoring}
- Regular nga i-check ang Ultimate Multisite logs para sa mga sayop sa integrasyon
- Mag-set up og monitoring alang sa mga napakyang pagdadaghan sa domain
- Siguraduhon nga ang SSL certificates ma-provision sa husto
- Bantayan ang kapasidad sa Enhance server ug mga limitasyon sa domain

## Mga Dugang Resources {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Tan-awa ang wiki page "How to Configure Domain Mapping v2"

## Suporta {#support}

Kung makakita ka og mga problema:
1. I-check ang Troubleshooting section sa ibabaw
2. Usbon ang Ultimate Multisite logs
3. Konsulta ang [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaka ang Enhance support para sa mga isyu nga espesipiko sa panel
5. Paghimo og bag-ong discussion uban ang detalyado nga error logs alang sa tabang sa komunidad

## Mga Nota {#notes}

Ang integration ani nag-handle lang sa mga domain aliases; ang Enhance ma-manage na dayon ang SSL.
Ang integration ni suporta sa custom domain mappings ug subdomain-based sites.
Ang automatic paghimo og www subdomain pwede i-configure sa Domain Mapping settings.
Karon, ang Enhance nagsuporta sa Apache configurations (available na pud ang LiteSpeed Enterprise).
Kung imong tangtangon ang domain gikan sa Ultimate Multisite, tangtangon ni kini sa Enhance ang domain pero dili dayon mawala ang mga SSL certificates nga konektado niana.
