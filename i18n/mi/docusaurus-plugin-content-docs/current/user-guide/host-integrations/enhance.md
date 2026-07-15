---
title: Whakawhanaungatanga Whakamaharat Pāne Kōrero
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Whakamahinga te Whakawhanaungatanga Panel Control

## Ōrero Whānui (Overview) {#overview}
Enhance he panel control hou, e whai whakaaro nui ki te whakamohoho (automation) me te whakamaumahara (management) o hosting. Ka tino whaihi i tēnei whakamahinga ki te whakamutunga ā-au (domain syncing) me te whakamaumahara i sertifikati SSL anō ki Ultimate Multisite me Enhance Control Panel.

**Whakawhanake Whānui:** Pātai i [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) mō ngā whakaaro o te hapori me whakamohiko whai akorua.

## Manawa (Features) {#features}
- Whakamutunga ā-au anō i te awhi i te Ultimate Multisite i roto i te whakamahinga o domain mapping.
- Whakawhanaungatanga sertifikati SSL anō anō via LetsEncrypt i roto i te whakatika DNS.
- Whakarongo i subdomain mō ngā wāhi (networks) e maha ana i subdomain mode.
- Whakamutunga o domain i roto i te whakamahinga o mapping whena.
- Whakawātea whakamārama i te koneki mō te whakamārama i ngā API credentials.

## Wāhi Whakamahi (Requirements) {#requirements}

### Wāhi Whakaaro System (System Requirements) {#system-requirements}
- Enhance Control Panel e whai ake ana me he tino pai.
- Installation o WordPress Multisite e hoakaa ana i te server pei i Enhance, akorua ki te koneki.
- Apache web server (E whai whakaaro ki ngā konfigurē o Apache; LiteSpeed Enterprise e pēnei ana i te whakatere).

### Whakawhiti API (API Access) {#api-access}
Kia tino pai koe mō administrator access ki Enhance Control Panel kia whakamaumahara i API tokens.

## Whakamahi Irowhi API Credentials (Getting Your API Credentials) {#getting-your-api-credentials}

### 1. Whakawhanaungatanga Token API (Create an API Token) {#1-create-an-api-token}

1. Whakarongo ki te Enhance Control Panel mo administrator
2. Whakawātea i **Settings** i te menu o whakatere (navigation menu).
3. Whakarongo ki **Access Tokens**.
4. Whakawātea i **Create Token**.
5. Ihi i te token ahau ingoa whai whakaaro (e.g., "Ultimate Multisite Integration").
6. Whakamahi te roa o **System Administrator**.
7. Mo te wā whakamutunga:
   - Rongo i te pēnei ana ki te whakatū i te token kia kore i hoakaa ahau.
   - Āwhi i te wā whakamutunga tika mō te whakahirahira (security purposes).
8. Whakawātea i **Create**.

Pō mārie, ka hoki mai i te whakamārama mō te whakamahi o tēnei whānau.

I raro i te whakamahinga, ka whakaataki i a koe i tō **Access Token** me tō **Organization ID**. **Whakawātea i ēnei tino whai ake** i runga i te pai, ko te token e whakaataki ana i tahi wakamārama anake.

### 2. Whakawātea I Tō Organization ID {#2-get-your-organization-id}

Ko te Organization ID e whakaataki ana i te puta mai o te Access Tokens page i tētahi bokonau whakamārama paku (blue information box) e whai te titohitanga "Org ID: {your_id}".

Ko te Organization ID he UUID, he whakaaturia i te format: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Kia kaha, ka taea ai koe te māmā i te Organization ID o te mea whai whānau e hoki ana i tēnei wahi:
1. Pāinga ki te page **Customers**.
2. Whakawatea i **Manage customer** mō te whānau e tika ana.
3. Titiro i te URL - ko te Organization ID he ngā kirimahi alphanumeric (alphanumeric characters) i whai i te `/customers/`.

### 3. Whakawātea I Tō Server ID {#3-get-your-server-id}

Mō te māmā i tō Server ID (he tino nui mō ngā mahi o te domain):

1. I roto i te Enhance Control Panel, whai i **Servers**.
2. Whakawatea i te server i tēnei i pēnei i te wherehere o tō WordPress installation e hoki ana.
3. Ko te Server ID (i format UUID) e whakaataki ana i te URL he tino tika i ngā korero o te server.
4. He aha, ka taea ai koe te whakamahi i te API mō te whakatū i ngā server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Ko te Server ID he pūrākau UUID, he whakaaturia i te format: `00000000-0000-0000-0000-000000000000`

### 4. Whakawātea I Tō API URL {#4-get-your-api-url}

Ko tō API URL he URL o tō Enhance Control Panel me te whai i `/api/`:

```
https://your-enhance-panel.com/api/
```

**Tū mai:** He tino nui te path `/api/`. Ngā pahi whakamahine (common mistakes) e hoki ana:
- Whakawura i te domain anake, me te whai i `/api/`.
- Whakawura HTTP i tētahi HTTPS (he tika ana te HTTPS mō te whakatere).

## Configuration {#configuration}

### Constants Whai Wāhi {#required-constants}

Whakawātea i ngā constants berikut ki tō file `wp-config.php`:

// Whakamārama i te Whakawhanaungatanga me te Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Whakamārama i te Setup mā te Wizard (Mahi Whakawhanaungatanga) {#setup-via-integration-wizard}

1. I roto i te admin o yā WordPress, pakihi ki **Ultimate Multisite** > **Settings**
2. Pakihi ki te tab **Integrations** (Whakawhanaungatanga)
3. Khoi te **Enhance Control Panel Integration** ā, klik ki **Configuration** (Whakamahi Whakawhanaungatanga)
4. Ka tūmanaki ai i a koe i te setup:
   - **Step 1:** Pōwhiri me te whakataki mō ngā āhuatanga o te whare
   - **Step 2:** Whakarite i ngā credentials API (Token, API URL, Server ID)
   - **Step 3:** Whakawātea te konektanga (Test the connection)
   - **Step 4:** Tirohia me whakamōhaka (Review and activate)

Ka taea e koe te titiro ki:
- Kia whakatū i ngā constants ki te `wp-config.php` o koe ā, automatically (automatically)
- Whakarite i ngā definitions o ngā constants ā, manually (manawa)

## Whakawiranga WordPress Whakaaro Ahua (Additional WordPress Configuration) {#additional-wordpress-configuration}

I runga i te whakaahuatanga o te whānau (community feedback) ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ka taea e koe te whakamārama i ngā whakaritenga ahua hoki:

### Whakamārama i te .htaccess Configuration {#htaccess-configuration}

Ko, ko te mea i roto i te whakatūatanga o te domain (domain mapping) ka pēnei:
1. Whakawātea te file `.htaccess` o Enhance i te kōrero (original).
2. Rōpuke i ai te file `.htaccess` o WordPress Multisite standard.

### Cookie Constants {#cookie-constants}

Whakarite i ngā constants mō `wp-config.php` ki te whaiaro i te whakahaere cookie tika i roto i ngā domain e whakatū (mapped domains):

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## He aha Eke i te Mahi (How It Works) {#how-it-works}

### I roto i te Wā Tōtōi i te Domain (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. He whakatika te user i te domain mō te whānau (custom domain) i Ultimate Multisite (arau he pēnei i te whakawhiti i te wāhi hou i subdomain mode).
2. Ka ngahau te integration i te POST request ki te API o Enhance: `/servers/{server_id}/domains`
3. Ka whānui ai te Enhance te domain ki te whakaritenga o te server ahau.
4. I te wā ka whakawhiti te DNS ki te server ahau, ka whakatika ai te Enhance te SSL certificate automatically i roto i LetsEncrypt.
5. Ka pēnei te domain ak me HTTPS (active).

### I te Wā Ka Whakamutunga te Domain {#when-a-domain-is-removed}

1. Ka whakatika ai te whakatika domain mapping i Ultimate Multisite.
2. Ka whakamārama ai te integration ki Enhance kia whakatuku te ID o te domain.
3. Ka ngahau ai te DELETE request ki: `/servers/{server_id}/domains/{domain_id}`
4. Ka whakamutunga ai te Enhance te domain i te whakaritenga o te server ahau.

### Whakawhawha DNS me SSL {#dns-and-ssl-checking}

Ka hou Ultimate Multisite me whakamārama ana i te whakawhawha DNS me SSL:
- Ka taea e koe te whakarite i te wā o te whakawhawha (check interval) i **Domain Mapping Settings** (default: 300 seconds/5 minutes).
- Ka whakatika ai te system te propagation o te DNS mō te whakamahi domain ak me active.
- Ka whakačaka ai te validity o te SSL certificate automatically.
- Ka whakahaa ai te Enhance te SSL provisioning automatically, ko tautoko ana i te whakarite SSL manuahi (manual) ka mea e noho ana.

## Whakawhawha te Setup {#verifying-setup}

### Whakatika te Connection {#test-the-connection}

1. I te Integration Wizard, whakamahi te **Test Connection** step
2. Ka kainga ai te plugin ki te whakatūhia i ngā domain o te server ahau.
3. Ka whakaae ak me he tino pai ko te message o te whakatika:
   - Ko te API credentials ā tika ana
   - Ko te API URL e taea te whaihi (accessible)
   - Ko te Server ID ā tika ana
   - Ko te permissions ā tika ana

### I te Wā Ka Whakatika Domain {#after-mapping-a-domain}

1. Whakatika i te domain test i Ultimate Multisite
2. Ka whakačaka ai i ngā logs o Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Ka whakahirahira ak me he tino pai i Enhance Control Panel ko ka whānui ai te domain:
   - Pā te **Servers** > **Your Server** > **Domains**
   - Ka pēnei te domain hou e roa ana i te list
4. I te wā ka whakatika ai te DNS, ka whakačaka ak me he tino pai ko te SSL e whakatika automatically

## Whakamārama (Troubleshooting) {#troubleshooting}

### Ngā Pātai Whakaaro API Connection (API Connection Issues) {#api-connection-issues}

**Pātai: "Failed to connect to Enhance API"**
- Kia tū mai i te `WU_ENHANCE_API_URL` he whakatika `/api/` i te whāngai (end).
- Kia tiaki i te whakamahi HTTPS, ā, kia kore HTTP.
- Kia tino mārama ko ka taea e koe te whai ake i te panel Enhance mai i tō server WordPress.
- Kia tino tikanga ko he nui o ngā firewall rules e ka whakatika (block) te koneki.

**Pātai: "Enhance API Token not found"**
- Kia tiaki i te `WU_ENHANCE_API_TOKEN` he tino whakahihiko (defined) i `wp-config.php`.
- Kia tino mārama ko kaore he whakawā (deleted) ahau te token, ā, ka kore ai ia i te wā (expired) i Enhance.
- Kia whakaaro i ngā pakihi (typos) i te wā o te token.

**Pātai: "Server ID is not configured"**
- Kia tino mārama ko he `WU_ENHANCE_SERVER_ID` he whakahihiko i `wp-config.php`.
- Kia tiaki i te Server ID he format UUID he tino tika.
- Kia tino mārama ko kaore he server ahau i tō panel Enhance.

### Domain Kāore Whakawātea (Domain Not Added) {#domain-not-added}

**Kia whakaaro i ngā logs:**
1. Pāinga ki **Ultimate Multisite** > **Logs**.
2. Whakarite (Filter) i te **integration-enhance**.
3. Kia whakaaro i ngā pēpi (error messages) e tino whakatika ai te wakamārama o te wakamārama.

**Ngā mōhio nui:**
- Format o te domain he kore tikanga.
- He domain koe i Enhance ahau.
- Manaahi API he kore tika (kia tiaki i te token he role System Administrator).
- Server ID he kore ana ki te server tino tika i Enhance.

### Ngā Wāhi SSL Certificate Issues (SSL Certificate Issues) {#ssl-certificate-issues}

**Arohe SSL ka whakatika (not provisioning):**
- Kia tino mārama ko te DNS e pūmau ai i te IP address o tō server.
- Kia tino mārama ko ka taea te whakaahua (resolve) te domain he tino tika: `nslookup yourdomain.com`.
- He tino tino pēnei ko ka taea te whakatika SSL i Enhance i roto i te wā e ka taea te whakaahua te DNS.
- Ka whakawā te whakatika SSL ki te 5-10 minua i te wā o te whakaahua DNS.
- Kia whakaaro i ngā logs o Enhance Control Panel mō ngā pēpi (errors) o SSL.

**Whakamārama SSL manuahi i Enhance:**
1. Pāinga ki **Servers** > **Your Server** > **Domains**.
2. Kia whakatika tō domain he tino tika ā te SSL status.
3. He tino kaha koe te whakamahi (manually trigger) i te whakatika SSL he mea nui.

### Interval o te DNS Check {#dns-check-interval}

Mōhio ki te domain ahau ka whakatika i te SSL certificates:
1. Pā no **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Kia māmā i te whakaritenga **DNS Check Interval**
3. Whakatika i te mea eke ana i te default 300 seconds ki te wā pēnei i te whakataunga iti (minimum: 10 seconds)
4. **He whakamārama:** He wāhi iti mahinga (lower intervals) he tino whakamārama ake, engari he nui te mahi (higher server load).

### Ngā Wāhi Whakawhiti Kōrero (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Whakawhiti i tō token API i Enhance
- Kia tiaki i te token mō **System Administrator** role
- Kia tino mārama ana he kāore i pōutu i te token
- Kia tika ana koe i te Organization ID (engari ehara e pēnei te tino āhua i te URL)

### Whakawātea i ngā Log (Log Analysis) {#log-analysis}

Whakarite i logging mō te whakamārama mō te whakatika:
```php
// Whakawhiti ki wp-config.php mō whakamārama mō te debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kia whakačaki i ngā logs i:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Manawa ana i te interface admin o Enhance

## API Reference (Whakawhiti Kōrero API) {#api-reference}

### Authentication {#authentication}
Ngā pūtahe API katoa e whai i Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Ngā Endpoints Whakahaere (Common Endpoints Used) {#common-endpoints-used}

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

### Full API Documentation {#full-api-documentation}
Whakawhiti kōrero API mō te tino: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (Ngā Mahi Whakamahi Ahua) {#best-practices}

### Aotūnga (Security) {#security}
- **Kāore whakamahi i token API ki te version control**
- Tuku i ngā tokens i `wp-config.php` i te mea me te whakawhiti i a Git (Git)
- Whai i ngā tokens e huto ana i ngā whānau (System Administrator) mō whakamahi katoa
- Tāroro i ngā raupā o te token mō ngā wā o te pūtaiao (production environments)
- Huto i ngā tokens i ngā wā tahi

### Mahi (Performance) {#performance}
- Whai i te wā whakawhiti DNS default (300 seconds) kia kore e whai i whakamāhi API nui
- Tāroro i ngā rārangi manawa o Enhance i roto i ngā mahi domain nui
- He tino pai te whakaaro mō te whakatau i ngā domain ki te whakatika i ngā wā, kia kore e whakatika i ngā domain nui i tētahi wā
- Whakarite i ngā domain ki te whakatika i ngā wā (staggering)

### Tāroro (Monitoring) {#monitoring}
- Tāroro i ngā logs o Ultimate Multisite mō ngā pētranga integration (integration errors)
- Whakawātea whakamahi tāroro mō ngā whakatika domain ki pētranga (failed domain additions)
- He tino pai te whakaaro mō te whakamaoritanga i ngā SSL certificates
- Tāroro i te kaha o te server Enhance me ngā raupā domain

## Raukura Whakahaere (Additional Resources) {#additional-resources}

- **Dokumentation of Enhance Official:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentation of Enhance API:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum o Enhance Community:** [https://community.enhance.com](https://community.enhance.com)
- **Whakawhanake GitHub (GitHub Discussion):** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Māhi Whakatika Domain Mapping o Ultimate Multisite:** He tino pai te whakaaro i te wiki "How to Configure Domain Mapping v2"

## Whakawhanaungatanga (Support) {#support}

Ko te mea kei a koe he pētranga:
1. Tāroro i te sampano whakatau (Troubleshooting section) i runga mārie
2. Tāroro i ngā logs o Ultimate Multisite
3. Whai i ngā [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Whakawhanake me Enhance support mō ngā pētranga o te panel
5. Whakawātea he whakatau hou me ngā logs o pētranga nui mō tauira whai hoatu (community assistance)

## Ngā Pātai (Notes) {#notes}

- Ko te whaiaro mātou e whakamaoritia i te mōhio rau ohana; ka whātou tino pai ai.
- Ko te whānui ko pēramu ana i te whakamahi o domain aliases anake; ka whaiaro a Enhance i te SSL anō.
- Ka whakawhanaunga atu te whānui ki ngā mapping o domain mōhio me ngā wāhi site-based (subdomain).
- Ka taea te whakarite te whero whakamahi www subdomain anō i ngā settings o Domain Mapping.
- Ka pēramu a Enhance i ngā configuration o Apache (LiteSpeed Enterprise ka pēramu ai).
- Ka whero te whero domain mai Ultimate Multisite, ka whero i Enhance, engari ka taea eke i te SSL certificates associated anō i runga i te wā.
