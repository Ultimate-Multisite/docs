---
title: Lula ho nna le lilikong la control panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Goeletsa Ho Letsopeho Control Panel {#enhance-control-panel-integration}

## Leholo (Overview) {#overview}
Enhance ke control panel e modern se e leba ho fana ka baithang le fetoga ea hosting le management e tšepang. Le fetoga le fetisa le fetoga le fetisa lefetso la domain le certificate SSL ho tloha ho Ultimate Multisite le Enhance Control Panel.

**Lekgetho le fetisa:** Le bona [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ho ba le litšepo tsa setso le litšepo tse ling le litšepo tse nyane.

## Litšepo (Features) {#features}
- Le fetoga la domain lefetisa ho tloha ha domains a fetilwe ka Ultimate Multisite
- Le fetoga la certificate SSL le fetisa ka LetsEncrypt ha DNS e fetola
- Ho ba le support le subdomains ho networks a ba ba le subdomain mode
- Ho fana ka domain ha mappings a fetilwe
- Ho batla ho fetisa ho bona litšepo tsa API

## Litšepo (Requirements) {#requirements}

### Litšepo tsa Setso (System Requirements) {#system-requirements}
- Enhance Control Panel e fetilwe le e fetilwe
- WordPress Multisite e fetilwe e ba ba laokanyetswe ka server ea Enhance le e fetilwe ho e fetisa
- Apache web server (Enhance e fetisa configuration ea Apache; LiteSpeed Enterprise e fetisa ka tšepo e fetileng)

### Ho Ba Le Fetoga API (API Access) {#api-access}
O hloka ho ba le access la administrator la Enhance Control Panel ho fetola API tokens.

## Ho Ba Lefetisa Litšepo tsa API (Getting Your API Credentials) {#getting-your-api-credentials}

### 1. Fetola API Token {#1-create-an-api-token}

1. Baithoa ka Enhance Control Panel ea hau ka administrator
2. Thaba ka **Settings** sa menu ea navigation
3. Baithoa ka **Access Tokens**
4. Thaba ka **Create Token**
5. Le fetola token le le tšepo (e.g., "Ultimate Multisite Integration")
6. Fetola role ea **System Administrator**
7. Ho certificate ea ho fana:
   - Le a le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le le

Ho fana, ha u feta, **Access Token** le **Organization ID** ho tla ba tsamaiswa. **Tlhola li ka ntlha** ka nako e kholo, ka nako e kholo ka nako e kholo, ka nako e kholo ka nako e kholo, ka nako e kholo ka nako e kholo, ka nako e kholo ka nako e kholo.

### 2. Get Your Organization ID {#2-get-your-organization-id}

Organization ID ho tla tsamaiswa ka leela la Access Tokens le box ya rona ya mofuta a tšhoang kae "Org ID: {your_id}".

Organization ID e le UUID e fetang ka: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

O ka utloha Organization ID ya mofuta a morao ho:
1. Laela le page ya **Customers**
2. Leela **Manage customer** ho mofuta o ntsaang
3. Leela URL - Organization ID e le litšepo tsa alifabetso le litshelo tse di fetang /customers/

### 3. Get Your Server ID {#3-get-your-server-id}

Ho utloha Server ID (ho hloka ho tlhahlobo ea domain) ho:

1. Ka Enhance Control Panel, laela **Servers**
2. Leela server se se na le WordPress e tsamaisang
3. Server ID (UUID format) o tla ba hlokomelang mo URL kapa ka details tsa server
4. Ho fana ka lina API ho lina servers:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID e fetang UUID format: `00000000-0000-0000-0000-000000000000`

### 4. Get Your API URL {#4-get-your-api-url}

API URL ya hau e le URL ya Enhance Control Panel ya hau le /api/ e fetang:

```
https://your-enhance-panel.com/api/
```

**Lekutso:** Path ya `/api/` e hloka. Thuto tsa ntlha e leng:
- Ho u sebelisa domain fa ho na le /api/
- Ho u sebelisa HTTP fa ho na le HTTPS (HTTPS e hloka ho ba le bohlokoa)

## Configuration {#configuration}

### Required Constants {#required-constants}

Leela constants tse hlokang mo file ya hau `wp-config.php`:

// Enhla Control Panel Integration

define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Setup via Integration Wizard {#setup-via-integration-wizard}

1. Morago ka WordPress admin, go to **Ultimate Multisite** > **Settings** (Go to Ultimate Multisite admin settings)
2. Navigate to the **Integrations** tab (Go to Integrations tab)
3. Find **Enhance Control Panel Integration** and click **Configuration** (Find Enhance Control Panel Integration and click Configuration)
4. The wizard o tla go ntlha ka set-up: (The wizard will guide you through the setup:)
   - **Step 1:** Introduction and feature overview (Step 1: Introduction and feature overview)
   - **Step 2:** Enter your API credentials (Token, API URL, Server ID) (Step 2: Enter your API credentials (Token, API URL, Server ID))
   - **Step 3:** Test the connection (Step 3: Test the connection)
   - **Step 4:** Review and activate (Step 4: Review and activate)

You ka kopa go: (You can choose to:)
- Let the wizard inject the constants into your `wp-config.php` file automatically (Let the wizard inject the constants into your `wp-config.php` file automatically)
- Copy the constant definitions and add them manually (Copy the constant definitions and add them manually)

## Additional WordPress Configuration {#additional-wordpress-configuration}

Based on feedback ya ba community ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), you ka na le go set up these settings e leng: (Based on community feedback, you might need to configure these additional settings:)

### .htaccess Configuration {#htaccess-configuration}

If you experience issues with domain mapping: (If you experience issues with domain mapping:)
1. Delete the original Enhance `.htaccess` file (Delete the original Enhance `.htaccess` file)
2. Replace it with the standard WordPress Multisite `.htaccess` file (Replace it with the standard WordPress Multisite `.htaccess` file)

### Cookie Constants {#cookie-constants}

Add these constants to `wp-config.php` to ensure proper cookie handling across mapped domains: (Add these constants to `wp-config.php` to ensure proper cookie handling across mapped domains:)

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## How It Works {#how-it-works}

### When a Domain is Mapped {#when-a-domain-is-mapped}

(When a Domain is Mapped)

1. Morero a morero o domain custom ka Ultimate Multisite (ka morero le site tshedi ka subdomain mode)
2. Ka integration e fana POST request mo Enhance API: `/servers/{server_id}/domains`
3. Enhance e fana domain ea hau mo configuration ea server ea hau
4. Fa morero a DNS a fetoga mo server ea hau, Enhance e fana SSL certificate ka LetsEncrypt
5. Morero a domain a ba lehle le HTTPS

### Le fa morero a domain {#when-a-domain-is-removed}

1. A deletea mapping ea domain ka Ultimate Multisite
2. Ka integration e query Enhance ho hloba ID ea domain
3. DELETE request e fana mo: `/servers/{server_id}/domains/{domain_id}`
4. Enhance e fetola domain se server ea hau

### Ho le fa DNS le SSL {#dns-and-ssl-checking}

Ultimate Multisite e na le checking ea DNS le SSL ka ho ba lehle:
- U ka setse interval ea checking sa **Domain Mapping Settings** (default: 300 seconds/5 minutes)
- Ka system e tla tsamaela propagation ea DNS haholo ha e fetola domain se active
- Validity ea SSL certificate e fetoga ka auto
- Enhance e fetola SSL automatically, ka ho hlokomisa configuration ea SSL manually

## Ho le fa setup {#verifying-setup}

### Le fa connection a fetoga {#test-the-connection}

1. Ka Integration Wizard, u sebelisa step ea **Test Connection**
2. Plugin e tla batla ho lishoa domains ka server ea hau
3. Message ea success e fetola:
   - API credentials ke tseba
   - API URL e le lehle
   - Server ID e le tseba
   - Permissions e setse ka bonako

### Ha morero a domain {#after-mapping-a-domain}

1. Morero test domain ka Ultimate Multisite
2. Le fa logs ea Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Tsamaela ka Enhance Control Panel hore domain e fetilwe:
   - Ho fana **Servers** > **Your Server** > **Domains**
   - Domain e ntlha e tla ba le mo list ea hau
4. Ha DNS a fetoga, tsamaela SSL e fetolwe ka auto

## Ho Tloko (Troubleshooting) {#troubleshooting}

### Masimo a Sebope (API Connection Issues) {#api-connection-issues}

**Tsela: "Failed to connect to Enhance API"**
- Re bona `WU_ENHANCE_API_URL` e bolela `/api/` a tsone.
- Bonele hore o batse HTTPS, e se ke HTTP.
- Tsela hore panel ya Enhance e lele ho ba ka WordPress server ya hau.
- Bonele hore na rules ya firewall e hlokotsa kone kone.

**Tsela: "Enhance API Token not found"**
- Re bona `WU_ENHANCE_API_TOKEN` e bolela mo `wp-config.php`.
- Bonele hore token ya Enhance a se ke lelongilwe kapa e lehle.
- Tsela hore na tsela (typos) ya token ya mofuta.

**Tsela: "Server ID is not configured"**
- Re bona `WU_ENHANCE_SERVER_ID` e bolela mo `wp-config.php`.
- Bonele hore Server ID e le sebope sa UUID (valid format).
- Bonele hore server ya hau e le ho ba Enhance panel.

### Domain E Sebope (Domain Not Added) {#domain-not-added}

**Re bona logs:**
1. La **Ultimate Multisite** > **Logs**.
2. Re fihla ka **integration-enhance**.
3. Bonele hore na messages ya tsela e bolela gore go na problema.

**Tsela ya bohloko (Common causes):**
- Format ya domain e sebope.
- Domain e lehle ho ba Enhance.
- Permissions ya API e sebope (bonele hore token e le System Administrator role).
- Server ID e sebope sa server ya tsela ya hau mo Enhance.

### Masimo a Sertifika ya SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL e sebope:**
- Re bona DNS e bolela mo IP address ya hau ya server.
- Bonele hore domain e lehle ho ba ka: `nslookup yourdomain.com`.
- Enhance e hloka DNS e lehle fa e tla boela (resolve) pele e ka leba SSL.
- Masimo a SSL e sebope go tloha le 5-10 diana fa DNS e tla tsama.
- Re bona logs ya Enhance Control Panel hore na messages ya tsela ya SSL.

**Tsela ya bohloko ya SSL mo Enhance:**
1. La **Servers** > **Your Server** > **Domains**.
2. Bonele domain ya hau le bone status ya SSL.
3. O ka leba manual go ba lela (trigger) masimo a SSL fa o na dikgwetlho.

### Tsela ya DNS Check Interval {#dns-check-interval}

Ha o se domain a le SSL certificates a le fa motho ho fana:
1. La **Ultimate Multisite** > **Settings** > **Domain Mapping** e la.
2. Ha le seting ea **DNS Check Interval**.
3. Le fetoha ho tlo haholo (default 300 seconds) ho seting le lalo (minimum: 10 seconds).
4. **Lekgetso:** Seting le lalo li bolela hore e tla le fa motho a lefa, empa li tla fana ka load ea server e leholo.

### Leano la Thaba (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Re-generate API token ha Enhance.
- Leha token e le **System Administrator** role.
- Leha token e ne e le fa fana.
- Leha u sebelise Organization ID e ntse e le hlophiso (empa haholo ha e hlophiswe ka URL).

### Ho Hlalosa Logs (Log Analysis) {#log-analysis}

Leha logging le le fetoha:
```php
// Ha ho fana ka wp-config.php ho fana ka debugging lehle
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Lapa ha u le fa logs:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Ha fana ka interface ea admin ea Enhance

## Leano la API (API Reference) {#api-reference}

### Authentication {#authentication}
Mona u le thata hloekoe ho seting sa Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints e sebelisoang haholo {#common-endpoints-used}

**Ho Hlalosa Servers:**
```
GET /servers
```

**Ho Hlalosa Domains ea Server:**
```
GET /servers/{server_id}/domains
```

**Ho Ntshoa Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Ho Ntshoa Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Leano lehle la API (Full API Documentation) {#full-api-documentation}
Leano lehle la API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Ho Baetsi Boetsoang (Best Practices) {#best-practices}

### Bopelofetso (Security) {#security}
- **A re nna ba le token API e fana ka seba mo version control**
- Ba tsena tokens mo `wp-config.php` le e tla ba fana ka seba mo Git
- Ba u le ba le token le ba le tselaetso (System Administrator) ho ba le tselaetso e fetang (full integration)

### Ho Lefa (Performance) {#performance}
- U le ba le tsena ea DNS check interval e fetang (300 seconds) ho fana ka seba sa API sefane
- U le ba le tsena resourses ea Enhance ha u le ba le feta ka tselaetso ea domain e fetang
- Le tla ba le tsena ho fana ka seba tsa domain ha u le ba le feta ka tselaetso ea domain e fetang

### Ho Tlhaloso (Monitoring) {#monitoring}
- U le ba le tsena logs ea Ultimate Multisite ka tselaetso ea litietsi (integration errors)
- U le ba le setseba ho fana ka seba tsa domain tse di fetileng (failed domain additions)
- U le ba le tsena hore SSL certificates li feta ka bonako e fetang
- U le ba le tsena ha u le ba le feta ka tselaetso ea Enhance le limits ea domain

## Boitshwaro Bafane (Additional Resources) {#additional-resources}

- **Dokumente ea Enhance Efetang:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumente ea API ea Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum ea Komuniti ea Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Tlhahlobo ea GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Melemo ea Ho Hlalosa Domain Mapping ea Ultimate Multisite:** Le tla ba le tsena wiki page "How to Configure Domain Mapping v2"

## Ho Tlhaloso (Support) {#support}

Ha u le ba le tselaetso:
1. U le ba le tsena sefane sa Troubleshooting sefane leng
2. U le ba le hlalosa logs ea Ultimate Multisite
3. U le ba le qala [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. U le ba le tselaetso ea Enhance ho litietsi tsa panel
5. U le ba le qala sefane se fetang sa logs le sefane sa error ho ntsha ho ho thusa komuniti

## Melemo (Notes) {#notes}

- Ho fana ha le fa'aiga o le fa'aiga o le domain aliases fua; O Enhance e fa'amalosia le SSL automatically.
- O le fa'aiga o le integration e fa'amalosia both custom domain mappings ma subdomain-based sites.
- O le automatic www subdomain creation e mafai ona fa'amalosia i Domain Mapping settings.
- O Enhance e fa'amalosia Apache configurations (LiteSpeed Enterprise e mafai ona fa'aiga).
- O le fa'aiga o le domain removal o Ultimate Multisite e fa'aalia le domain o Enhance, ae e mafai ona fa'aalia SSL certificates i luga.
