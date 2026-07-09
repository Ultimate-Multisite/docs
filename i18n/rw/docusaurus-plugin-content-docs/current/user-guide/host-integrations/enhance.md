---
title: Gukomeza uburyo bwo gukoresha Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Gutsira Urugero mu Control Panel {#enhance-control-panel-integration}

## Umucozo (Overview) {#overview}
Enhance ni control panel ya modere yifasha uburyo bwiza bwo gukora hosting automation n'uburyo bwo gutera umuntu. Iyi gukoresha yifashisha gukoresha domain syncing cyangwa gukemura SSL certificate hagati ya Ultimate Multisite na Enhance Control Panel.

**Gukoresha Urugero:** Ubwumvikane: Anga [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) kugira ngo umuntu yire umwanya n'ubwumvikane bw'ibindi byo gukoresha.

## Icyiciro (Features) {#features}
- Gukora domain syncing mu gihe domain zishoboraga mu Ultimate Multisite
- Gutera SSL certificate cyangwa gukemura ni kwa LetsEncrypt mu gihe DNS yisobanura
- Gusobanura subdomains ku gihe ubushobozi bwo kurya mu buryo bw'ubwoko (subdomain mode)
- Gukora domain mu gihe uburyo bwo gutera umuhanda (mappings) guhagararwa
- Gutera uburyo bwo gukoresha API kugira ngo ubone uburyo bwo gukoresha API

## Ingozi (Requirements) {#requirements}

### Ingozi z'Umucozo (System Requirements) {#system-requirements}
- Enhance Control Panel yisanzwe kandi yishoborwa gukoreshwa
- WordPress Multisite yisanzwe mu gihe cyangwa ishyiramo ku server ya Enhance
- Apache web server (Enhance yifasha uburyo bwo gukora Apache; LiteSpeed Enterprise yishobora gutungwa mu gihe cyiza)

### Gutera API (API Access) {#api-access}
Ushobora kuba umuntu w'ubwumvikane ku Enhance Control Panel kugira ngo yitangire API tokens.

## Gukoresha Uburyo bwo gukoresha API Credentials {#getting-your-api-credentials}

### 1. Gukora API Token {#1-create-an-api-token}

1. Log in mu Enhance Control Panel nk'umuntu w'ubwumvikane (administrator)
2. Clickye kuri **Settings** mu menu ya ubushobozi (navigation menu)
3. Gutera ku **Access Tokens**
4. Clickye kuri **Create Token**
5. Yitera izina ryiza ku token yacu (urugero: "Ultimate Multisite Integration")
6. Gihagarira uburyo bwo kuba umuntu w'ubwumvikane (System Administrator)
7. Ku gihe cyo gukemura (expiry date):
   - Yitera mu gihe cyiza niba wifasha ko token yose itangira
   - Cyangwa gihagarira igihe cyiza cyo gutera umuntu bishobora kugira ngo ubone uburyo bwo gukoresha API

8. Clickye kuri **Create**

Après la création, votre **Access Token** et votre **Organization ID** seront affichés. **Sauvegardez-les immédiatement**, car le jeton ne sera montré qu'une seule fois.

### 2. Obtenir Votre Organization ID {#2-get-your-organization-id}

L'Organization ID est affiché sur la page des Access Tokens dans une boîte d'information bleue intitulée "Org ID: {your_id}".

L'Organization ID est un UUID formaté comme suit : `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Vous pouvez également trouver l'Organization ID d'un client en faisant ceci :
1. Allez sur la page **Customers** (Clients)
2. Cliquez sur **Manage customer** (Gérer le client) pour le client concerné
3. Regardez l'URL - l'Organization ID est les caractères alphanumériques après `/customers/`

### 3. Obtenir Votre Server ID {#3-get-your-server-id}

Pour trouver votre Server ID (nécessaire pour les opérations de domaine) :

1. Dans le Enhance Control Panel, allez dans **Servers** (Serveurs)
2. Cliquez sur le serveur où votre installation WordPress fonctionne
3. Le Server ID (format UUID) sera visible dans l'URL ou les détails du serveur
4. Alternativement, vous pouvez utiliser l'API pour lister les serveurs :

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Le server ID suit le format UUID : `00000000-0000-0000-0000-000000000000`

### 4. Obtenir Votre API URL {#4-get-your-api-url}

Votre API URL est l'URL de votre Enhance Control Panel avec `/api/` ajouté :

```
https://your-enhance-panel.com/api/
```

**Important :** Le chemin `/api/` est obligatoire. Les erreurs courantes incluent :
- Utiliser seulement le domaine sans `/api/`
- Utiliser HTTP au lieu de HTTPS (HTTPS est requis pour la sécurité)

## Configuration {#configuration}

### Constantes Requises {#required-constants}

Ajoutez les constantes suivantes à votre fichier `wp-config.php` :

// Gukira Uburyo mu Control Panel (Enhance)
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Gukira Uburyo bishobora ku Ubwumvikane (Integration Wizard) {#setup-via-integration-wizard}

1. Mu admin ya WordPress yawe, gukoresha **Ultimate Multisite** > **Settings**.
2. Gukoresha tab ya **Integrations**.
3. Shaka **Enhance Control Panel Integration** kandi ugukoresha **Configuration**.
4. Icyemezo (wizard) cyo gushobora ku gukora:
   - **Step 1:** Intumbuka n'uburyo bwo gukora ibyo.
   - **Step 2:** Gukoresha uburyo bwa API yawe (Token, API URL, Server ID).
   - **Step 3:** Gutera umwumvikane (test the connection).
   - **Step 4:** Gushyira mu buryo bwo gushobora ku gukora.

Ushobora gukora uburyo mwe:
- Kugira ngo cyemezo (constants) y'ibyo yitandukanye itandukanye mu file yawe `wp-config.php` mu buryo bw'umwumvikane.
- Gukoresha ibyo byemezo kandi ugukora mu buryo bwawe.

## Uburyo Bwo Gukora Icyemezo Cy'WordPress (Additional WordPress Configuration) {#additional-wordpress-configuration}

Urugero ku myitwarire y'umuganda ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), ushobora gutegura ibyo byemezo by'ingenzi:

### Gukoresha .htaccess Configuration {#htaccess-configuration}

Niba ukenya ibintu ku gukoresha domain (domain mapping):
1. Gusa file ya Enhance `.htaccess` y'inyuma.
2. Shyira file ya standard WordPress Multisite `.htaccess`.

### Icyemezo cy'Cookie (Cookie Constants) {#cookie-constants}

Shyira ibyo byemezo mu `wp-config.php` kugira ngo ukenye uburyo bwiza bwo gukoresha cookies ku domain zikwiye:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Icyemezo Cy'Uburyo Bwo Gukora (How It Works) {#how-it-works}

### Iyo Domain Ikenye (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Umuntu yashyira (maps) domain w'umutekano mu Ultimate Multisite (cyangwa umwe nshya uyu site urakoreshwa mu subdomain mode).
2. Urugendo rurimo (integration) rugenda POST request ku Enhance API: `/servers/{server_id}/domains`.
3. Enhance yashyira domain uyu mu konfigurasi ya server yawe.
4. Iyo DNS itangira kuri server yawe, Enhance yashyira certificate ya SSL cyangwa LetsEncrypt mu gihe cy'umwihariko (automatically).
5. Domain iraba ari HTTPS.

### Iyo Domain Iragurwa (When a Domain is Removed) {#when-a-domain-is-removed}

1. Urugendo rurimo rugurura (deletes) domain mapping mu Ultimate Multisite.
2. Urugendo rurimo rugenda ku Enhance kugira ngo yire umwujiza w'umutekano (find the domain's ID).
3. DELETE request iragurwa kuri: `/servers/{server_id}/domains/{domain_id}`.
4. Enhance yagurura domain uyu mu konfigurasi ya server yawe.

### Gukoresha DNS n'SSL Checking {#dns-and-ssl-checking}

Ultimate Multisite yifashije gukora DNS n'SSL checking cyangwa (built-in).
- Ufashishije igihe cyo gukora check muri **Domain Mapping Settings** (igice cy'umwihariko: 300 seconds/5 minutes).
- Inyandiko z'DNS zizera mbere y'ubwiriza domain ari mu gihe cyo kubaho.
- Uburyo bwo gukoresha SSL certificate bishobora kugaragara (checked automatically).
- Enhance yagurura SSL automatically, kandi nta ngombwa kwigira uburyo bwo gukoresha SSL yawe.

## Gukora Icyemezo (Verifying Setup) {#verifying-setup}

### Gutera Urugendo (Test the Connection) {#test-the-connection}

1. Mu Integration Wizard, gukoresha igice cyo **Test Connection**.
2. Plugin yoroshye kwigira uburyo bwo kubaza domain ku server yawe.
3. Umwumvikane w'ubwumvikane urashyira:
   - API credentials zishobora kuba zikoreshwa (correct).
   - API URL irashobora kugera (accessible).
   - Server ID iri mu cyemezo (valid).
   - Ubwumvikane bwo gukoresha (Permissions) yari yashyiramo neza.

### Nyuma yo Kugurura Domain {#after-mapping-a-domain}

1. Gura domain y'umutekano muri Ultimate Multisite.
2. Gukora check mu logs ya Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Gukoresha Enhance Control Panel kugira ngo uburyo bwo gukoresha (verify) ko domain yashyiramo:
   - Gukoresha **Servers** > **Your Server** > **Domains**.
   - Domain yshya yoroshye kwigira mu list.
4. Iyo DNS itangira, gukora check ko SSL yagurura automatically.

## Gukoresha (Troubleshooting) {#troubleshooting}

### Icyo mu Ubushobozi bw'API Connection Issues {#api-connection-issues}

**Erori: "Failed to connect to Enhance API"**
- Shobora kugenzura ko `WU_ENHANCE_API_URL` yashobora yitera `/api/` ku rugero.
- Shobora kwerekana ko ugiye n'HTTPS, ntabwo HTTP.
- Genzura ko Enhance panel igaragaza mu server ya WordPress yawe.
- Genzura ko hari uburyo bwo gukoresha (firewall rules) bishobora guhagarira urugero rw'API.

**Erori: "Enhance API Token not found"**
- Shobora kwerekana ko `WU_ENHANCE_API_TOKEN` yashobora yitera mu `wp-config.php`.
- Genzura ko token yashobora yagutwa cyangwa yashobora yisaba (expired) mu Enhance.
- Genzura ko hari uburyo bwo gukoresha (typos) mu muryango w'token.

**Erori: "Server ID is not configured"**
- Shobora kwerekana ko `WU_ENHANCE_SERVER_ID` yashobora yitera mu `wp-config.php`.
- Genzura ko Server ID yari igikorwa cy'UUID (format ya UUID).
- Genzura ko umusaruro (server) yari igikorwa mu Enhance panel.

### Icyo Cy'Ubutabera (Domain Not Added) {#domain-not-added}

**Genzura logs:**
1. Go ku **Ultimate Multisite** > **Logs**
2. Filter cyangwa gukoresha filter kuri **integration-enhance**
3. Genzura ibindi byo mu gihe bishobora guhagarira ikibazo.

**Uburyo bwo gukera (Common causes):**
- Ubutabera butagutwe neza (Invalid domain name format).
- Ubutabera buta igikorwa mu Enhance.
- Ubushobozi bw'API bukenye cyane (ensure token yashobora gufite uburenganzira bwo System Administrator).
- Server ID ntacyo gukoresha umusaruro w'igikorwa mu Enhance.

### Icyo Cy'SSL Certificate Issues {#ssl-certificate-issues}

**SSL ntacyo igikorwa (SSL not provisioning):**
- Genzura ko DNS yari itera ku IP yawe ya server.
- Genzura ko butabera bishobora guhagarira neza: `nslookup yourdomain.com`
- Enhance yashobora gukoresha DNS mbere yashobora gukora SSL.
- Uburyo bwo gukora SSL igikorwa cyane kigira igihe cy'5-10 minutes nyuma yo gukera (DNS propagation).
- Genzura logs mu Enhance Control Panel kugira ngo ugerere ibindi byo kwibajije SSL.

**Gukoresha SSL mu Enhace:**
1. Go ku **Servers** > **Your Server** > **Domains**
2. Genzura butabera rwawe kandi genzura uburenganzira bwo SSL (SSL status).
3. Ufite uburyo bwo gukora SSL igikorwa cyane niba hari ikibazo.

### Icyo Cy'DNS Check Interval {#dns-check-interval}

Nta domain cyangwa SSL certificates bishya mu gihe cyo gukoresha:
1. Kwihangira ku **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Gushyira umbwire **DNS Check Interval**
3. Guhindura ku 300 seconds (igice cy'umwihariko) ku gihe cyo gukoresha uburyo bw'umwihariko (minimum: 10 seconds)
4. **Ubwumvikane:** Igihe cyo gukoresha umwihariko mu gihe cyo gukunda gushyira ibyo kigaragaza cyinshi, ariko hari uburyo bwo kwihangira ku server (server load).

### Uburyo bwo guhindura (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Gukora ubwoko bw'API (API token) mu Enhance.
- Kwibona ko ubuto (token) ufite uruhare rwa **System Administrator**.
- Gushyira umwihariko ko buto bishya.
- Kumenya ko ugiye gukoresha Organization ID yiza (uko cyane ntabwo ari igice cy'URL).

### Kwibona amakuru (Log Analysis) {#log-analysis}

Gukora ubwoko bw'amakuru y'umwihariko:
```php
// Gufasha mu wp-config.php kugira ngo umakuru y'umwihariko yoroshye gukoreshwa
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Kandi kwibona amakuru mu gihe:
- Amakuru ya Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Amakuru y'WordPress debug log: `wp-content/debug.log`
- Amakuru ya Enhance panel: Icyo cyari cyihagaragara mu gice cy'admin ya Enhance

## API Reference (Uburyo bwo guhindura uburyo bwo gukoresha API) {#api-reference}

### Authentication {#authentication}
Inzego zose z'API zikoresha Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints Zishobora Gukoreshwa (Common Endpoints Used) {#common-endpoints-used}

**Gusobanura Servers:**
```
GET /servers
```

**Gusobanura Domains ku Server Yovugerezwe:**
```
GET /servers/{server_id}/domains
```

**Kugira Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Gukoresha/Kugabanya Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Uburyo bwo guhindura uburyo bwo gukoresha API (Full API Documentation) {#full-api-documentation}
Uburyo bwose bwo guhindura uburyo bwo gukoresha API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Uburyo bwo Gukora Icyemezo (Best Practices) {#best-practices}

### Urukundo (Security) {#security}
- **Aba nshira API tokens mu version control**
- Kurikiraho tokens mu `wp-config.php` uyuho yashobora kwitwa mu Git
- Gukoresha tokens zifite uburenganzira bwiza (System Administrator kugira uburyo bwo gukoresha cyane)
- Kurikiraho igihe cy'umukono (expiry dates) ku byiciro by'ubwoko bw'ibyo byerekana (production environments)
- Gukora urugero mu gihe cyinshi (rotate tokens)

### Uburyo bwo gukora (Performance) {#performance}
- Kurikiraho igihe cy'umukono cy'DNS (300 seconds) kugira ngo utagire uburyo bwiza bwo gukoresha API zikomeye
- Kurikiraho ibyerekeye ubushobozi bwo Enhance iyo ugiye gukora ibikorwa by'ubwoko bw'ibyo byerekana (large-scale domain operations)
- Kurikiraho gukora ibyiciro mu gihe cyinshi iyo ugiye gukoresha by'ubwoko bw'ibyo byerekana (staggering domain additions)

### Gukoresha (Monitoring) {#monitoring}
- Kurikiraho buri gihe logs za Ultimate Multisite kugira ngo utagire ibibazo by'uburyo bwo gukoresha (integration errors)
- Kurikiraho ibyiciro by'ubwoko bw'ibyo byerekana (failed domain additions)
- Kurikiraho ko SSL certificates zikora neza (provisioning correctly)
- Kurikiraho ubushobozi bwo Enhance n'ibinyabiko by'ubwoko bw'ibyo byerekana

## Icyiciro cyo gukoresha ibindi (Additional Resources) {#additional-resources}

- **Uburyo bwo gukora Enhace Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Uburyo bwo gukora Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Icyiciro cy'Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **Gukoresha GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Inzego z'Uburyo bwo gukora Domain Mapping ya Ultimate Multisite:** Kurikiraho wiki page "How to Configure Domain Mapping v2"

## Urugendo (Support) {#support}

Iyo utagira ibibazo:
1. Kurikiraho igice cyo gukoresha ibindi (Troubleshooting section) ku mwezi w'ibanze
2. Kurikiraho logs za Ultimate Multisite
3. Kurikiraho [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kuriramo Enhance support iyo ugiye gukora ibibazo by'ubwoko bw'ibyo byerekana (panel-specific issues)
5. Kurera umugondwa w'uburyo bwo gukoresha logs zikomeye ku umugondwa w'uburyo bwo gukoresha (community assistance)

## Inama (Notes) {#notes}

Iyi gukoreshwa ryitiramo igikorwa cyo gukoresha alias y'ibanga (domain aliases) gusa; Enhance ikora SSL mu gihe.
Iyi gikorwa kishobora gufasha uburyo bwo gukoresha domain mappings zikoresho n'ubwoko bw'ubwoko bw'ubwoko (subdomains).
Ushobora gukoresha ubwoko bw'ubwoko bw'ubwoko (www subdomain) mu gihe cyo gukoresha domain mapping settings.
Enhance ikora uburyo bwo gukoresha Apache configurations (LiteSpeed Enterprise ikora uburyo bwa LiteSpeed).
Gukoresha domain ku Ultimate Multisite kizakora gukoresha domain ku Enhance, ariko kintu cyangwa mu gihe cyiza, ikaba hari SSL certificates zitagira umwihariko w'ubwoko.
