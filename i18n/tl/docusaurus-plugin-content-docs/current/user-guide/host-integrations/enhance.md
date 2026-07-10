---
title: Pagandahin ang Integrasyon ng Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Pagpapahusay ng Integrasyon sa Control Panel {#enhance-control-panel-integration}

## Pangkalahatan {#overview}
Ang Enhance ay isang modernong control panel na nagbibigay ng malakas na automation at management capabilities para sa hosting. Ang integrasyong ito ay nagpapagana ng awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Enhance Control Panel.

**Kaugnay na Talakayan:** Tingnan ang [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para sa mga tips mula sa komunidad at karagdagang impormasyon.

## Mga Katangian {#features}
- Awtomatikong pag-sync ng domain kapag ang mga domain ay na-mapa (mapped) sa Ultimate Multisite
- Awtomatikong pagbibigay ng SSL certificate gamit ang LetsEncrypt kapag nag-resolve ang DNS
- Suporta para sa subdomain para sa mga network na tumatakbo sa subdomain mode
- Pagtanggal ng domain kapag tinanggal ang mga mapping
- Pagsubok ng koneksyon upang i-verify ang API credentials

## Mga Kinakailangan {#requirements}

### System Requirements {#system-requirements}
- Dapat naka-install at naa-access ang Enhance Control Panel
- WordPress Multisite installation na naka-host o nakakonekta sa isang Enhance server
- Apache web server (Sinusuportahan ngayon ng Enhance ang mga konfigurasyon ng Apache; may available na LiteSpeed Enterprise sa mas mababang halaga)

### API Access {#api-access}
Kailangan mo ng administrator access sa Enhance Control Panel upang makagawa ng API tokens.

## Pagkuha ng Iyong API Credentials {#getting-your-api-credentials}

### 1. Gumawa ng API Token {#1-create-an-api-token}

1. Mag-log in sa iyong Enhance Control Panel bilang administrator
2. I-click ang **Settings** sa navigation menu
3. Pumunta sa **Access Tokens**
4. I-click ang **Create Token**
5. Bigyan ng deskriptibong pangalan ang token (halimbawa: "Ultimate Multisite Integration")
6. Magtalaga ng tungkuling **System Administrator**
7. Para sa petsa ng pag-expire:
   - Hayaan itong walang laman kung gusto mong hindi mag-e-expire ang token
   - O magtakda ng tiyak na petsa ng pag-expire para sa seguridad
8. I-click ang **Create**

Pagkatapos mong gawin, ipapakita ang iyong **Access Token** at **Organization ID**. **I-save mo agad ito** dahil ipapakita lang ang token nang isang beses.

### 2. Kunin ang Iyong Organization ID {#2-get-your-organization-id}

Ang Organization ID ay makikita sa Access Tokens page sa isang blue information box na may label na "Org ID: {your_id}".

Ang Organization ID ay naka-format na UUID gaya ng: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Maaari mo ring mahanap ang Organization ID ng isang customer sa pamamagitan ng:
1. Pumunta sa **Customers** page
2. I-click ang **Manage customer** para sa kaukulang customer
3. Tingnan ang URL - ang Organization ID ay ang mga alphanumeric characters pagkatapos ng `/customers/`

### 3. Kunin ang Iyong Server ID {#3-get-your-server-id}

Para mahanap ang iyong Server ID (kinakailangan para sa domain operations):

1. Sa Enhance Control Panel, pumunta sa **Servers**
2. I-click ang server kung saan tumatakbo ang iyong WordPress installation
3. Ang Server ID (UUID format) ay makikita sa URL o sa mga detalye ng server
4. Bilang alternatibo, maaari mong gamitin ang API para ilista ang mga server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Ang server ID ay sumusunod sa UUID format na ito: `00000000-0000-0000-0000-000000000000`

### 4. Kunin ang Iyong API URL {#4-get-your-api-url}

Ang iyong API URL ay ang Enhance Control Panel URL mo na may `/api/` idinagdag:

```
https://your-enhance-panel.com/api/
```

**Mahalaga:** Kailangan ang path na `/api/`. Ang mga karaniwang pagkakamali ay:
- Paggamit lang ng domain nang walang `/api/`
- Paggamit ng HTTP sa halip na HTTPS (HTTPS ay kailangan para sa seguridad)

## Configuration {#configuration}

### Mga Kinakailangang Constant {#required-constants}

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
// Palakasin ang Integrasyon sa Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Setup Gamit ang Integration Wizard {#setup-via-integration-wizard}

1. Sa iyong WordPress admin, pumunta sa **Ultimate Multisite** > **Settings**
2. Pumunta sa tab na **Integrations**
3. Hanapin ang **Enhance Control Panel Integration** at i-click ang **Configuration**
4. Gabayan ka ng wizard sa setup:
   - **Step 1:** Panimula at overview ng mga feature
   - **Step 2:** Ilagay ang iyong API credentials (Token, API URL, Server ID)
   - **Step 3:** Subukan ang koneksyon
   - **Step 4:** Suriin at i-activate

Maaari kang pumili na:
- Hayaan ang wizard na magpasok ng mga constant sa iyong `wp-config.php` file nang awtomatiko
- Kopyahin ang mga definition ng constant at idagdag ito nang mano-mano

## Karagdagang WordPress Configuration {#additional-wordpress-configuration}

Batay sa feedback ng community ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), maaaring kailanganin mong i-configure ang mga karagdagang setting na ito:

### .htaccess Configuration {#htaccess-configuration}

Kung nakakaranas ka ng problema sa domain mapping:
1. Burahin ang orihinal na Enhance `.htaccess` file
2. Palitan ito ng standard WordPress Multisite `.htaccess` file

### Cookie Constants {#cookie-constants}

Idagdag ang mga constant na ito sa `wp-config.php` para masigurado ang tamang paghawak ng cookie sa lahat ng naka-map na domain:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Paano Ito Gumagana {#how-it-works}

### Kapag May Domain na Na-map {#when-a-domain-is-mapped}

1. Nag-map ang isang custom domain sa Ultimate Multisite (o gumawa ng bagong site sa subdomain mode)
2. Ang integration ay magpapadala ng POST request sa API ng Enhance: `/servers/{server_id}/domains`
3. Idadagdag ng Enhance ang domain sa configuration ng iyong server
4. Kapag na-resolve ng DNS patungo sa iyong server, awtomatikong magpo-provision ng SSL certificate ang Enhance gamit ang LetsEncrypt
5. Ang domain ay magiging aktibo na may HTTPS

### Kapag Tinanggal ang Isang Domain {#when-a-domain-is-removed}

1. Binubura ang isang domain mapping sa Ultimate Multisite
2. Kinukuha ng integration ang ID ng domain mula sa Enhance
3. Isang DELETE request ang ipinapadala sa: `/servers/{server_id}/domains/{domain_id}`
4. Tinatanggal ng Enhance ang domain mula sa configuration ng iyong server

### Pagsusuri ng DNS at SSL {#dns-and-ssl-checking}

May kasama sa Ultimate Multisite na built-in na pagche-check ng DNS at SSL:
- Maaari mong i-configure ang check interval sa **Domain Mapping Settings** (default: 300 seconds/5 minuto)
- Sisiguraduhin ng system na maayos ang DNS propagation bago ituring na aktibo ang isang domain
- Awtomatikong sinusuri ang validity ng SSL certificate
- Ang Enhance ang bahalang mag-provision ng SSL, kaya hindi mo kailangang gumawa ng manual na SSL configuration

## Pagpapatunay ng Setup {#verifying-setup}

### Subukan ang Koneksyon {#test-the-connection}

1. Sa Integration Wizard, gamitin ang hakbang na **Test Connection**
2. Susubukan ng plugin na ilista ang mga domain sa iyong server
3. Ang success message ay magpapatunay:
   - Tama ang API credentials
   - Accessible ang API URL
   - Valid ang Server ID
   - Tama ang mga permissions

### Pagkatapos Mag-map ng Domain {#after-mapping-a-domain}

1. Mag-map ng isang test domain sa Ultimate Multisite
2. Tingnan ang Ultimate Multisite logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. I-verify sa Enhance Control Panel na naidagdag ang domain:
   - Pumunta sa **Servers** > **Your Server** > **Domains**
   - Dapat lumabas ang bagong domain sa listahan
4. Kapag na-propagate na ang DNS, i-verify na awtomatikong na-provision ang SSL

## Pag-troubleshoot (Troubleshooting) {#troubleshooting}

### Mga Problema sa Koneksyon ng API (API Connection Issues) {#api-connection-issues}

**Error: "Failed to connect to Enhance API"**
- Siguraduhin na ang `WU_ENHANCE_API_URL` ay may `/api/` sa dulo.
- Tiyakin na gumagamit ka ng HTTPS, hindi HTTP.
- Tingnan kung accessible ba ang Enhance panel mula sa iyong WordPress server.
- I-check kung mayroon bang firewall rules na humaharang sa koneksyon.

**Error: "Enhance API Token not found"**
- Siguraduhin na ang `WU_ENHANCE_API_TOKEN` ay nakadefine (defined) sa `wp-config.php`.
- I-verify kung hindi pa nabura o nag-expire ang token sa Enhance.
- Tingnan kung may mga typo sa halaga ng token.

**Error: "Server ID is not configured"**
- Siguraduhin na ang `WU_ENHANCE_SERVER_ID` ay nakadefine (defined) sa `wp-config.php`.
- Tiyakin na ang Server ID ay may tamang format ng UUID.
- Kumpirmahin kung umiiral ang server sa iyong Enhance panel.

### Hindi Idinagdag na Domain (Domain Not Added) {#domain-not-added}

**Tingnan ang logs:**
1. Pumunta sa **Ultimate Multisite** > **Logs**.
2. Mag-filter gamit ang **integration-enhance**.
3. Hanapin ang mga error message na nagpapakita ng problema.

**Mga karaniwang sanhi (Common causes):**
- Hindi balid na format ng pangalan ng domain (Invalid domain name format).
- Ang domain ay mayroon nang umiiral sa Enhance.
- Kulang na API permissions (siguraduhin na ang token ay may System Administrator role).
- Hindi tumutugma ang Server ID sa aktwal na server sa Enhance.

### Mga Problema sa SSL Certificate (SSL Certificate Issues) {#ssl-certificate-issues}

**Hindi na-provision ang SSL:**
- Siguraduhin na ang DNS ay tumuturo sa IP address ng iyong server.
- I-check kung tama ang pagresolba ng domain: `nslookup yourdomain.com`.
- Kailangan ng Enhance na ma-resolve muna ang DNS bago ito mag-provision ng SSL.
- Karaniwan, tumatagal ng 5-10 minuto ang SSL provisioning pagkatapos mag-propagate ang DNS.
- Tingnan ang logs ng Enhance Control Panel para sa mga error na partikular sa SSL.

**Manual SSL troubleshooting sa Enhance:**
1. Pumunta sa **Servers** > **Your Server** > **Domains**.
2. Hanapin ang iyong domain at tingnan ang status ng SSL nito.
3. Maaari mong manu-trigger ang SSL provisioning kung kinakailangan.

### DNS Check Interval {#dns-check-interval}

Kung matagal ang pag-activate ng domains o SSL certificates:
1. Pumunta sa **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Hanapin ang setting na **DNS Check Interval**
3. Ayusin ito mula sa default na 300 seconds patungo sa mas mababang halaga (minimum: 10 seconds)
4. **Tandaan:** Ang mas mababang interval ay nangangahulugang mas madalas na pag-check pero mas mataas ang load ng server

### Mga Error sa Authentication {#authentication-errors}

**HTTP 401/403 errors:**
- Mag-regenerate ng iyong API token sa Enhance
- Siguraduhin na ang token ay may **System Administrator** role
- Tingnan kung hindi pa tumatagal ang expiration ng token
- Tiyakin na gumagamit ka ng tamang Organization ID (bagaman karaniwan itong hindi kailangan sa URL)

### Pagsusuri ng Logs {#log-analysis}

I-enable ang detalyadong pag-log:
```php
// Idagdag sa wp-config.php para sa mas mahusay na debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Pagkatapos ay tingnan ang logs sa mga sumusunod:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Available sa admin interface ng Enhance

## API Reference {#api-reference}

### Authentication {#authentication}
Lahat ng API requests ay gumagamit ng Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Mga Karaniwang Endpoint na Ginagamit {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains sa isang Server:**
```
GET /servers/{server_id}/domains
```

**Magdagdag ng Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Burahin ang Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Buong API Documentation {#full-api-documentation}
Buong dokumentasyon ng API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#best-practices}

### Seguridad {#security}
- **Huwag kailanman i-commit ang API tokens sa version control**
- Itago ang mga tokens sa `wp-config.php` na dapat tanggalin sa Git
- Gumamit ng mga token na may tamang pahintulot (System Administrator para sa buong integrasyon)
- Magtakda ng expiration dates para sa production environments
- Regular na i-rotate ang mga tokens

### Performance {#performance}
- Gamitin ang default DNS check interval (300 seconds) para maiwasan ang sobrang tawag sa API
- Bantayan ang resources ng Enhance server kapag nagpapatakbo ng malalaking operasyon sa domain
- Isaalang-alang ang pagpapahinga (staggering) ng mga idadagdag na domain kung maraming domain ang i-map nang sabay

### Monitoring {#monitoring}
- Regular na suriin ang Ultimate Multisite logs para sa mga error sa integrasyon
- Mag-set up ng monitoring para sa mga nabigong pagdaragdag ng domain
- I-verify na tama ang pag-provision ng SSL certificates
- Bantayan ang kapasidad at limitasyon ng domain ng Enhance server

## Karagdagang Resources {#additional-resources}

- **Enhance Official Documentation:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Documentation:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Community Forum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapping Guide:** Tingnan ang wiki page "How to Configure Domain Mapping v2"

## Suporta {#support}

Kung makakaramdam ka ng problema:
1. Suriin ang Troubleshooting section sa itaas
2. Balikan ang Ultimate Multisite logs
3. Kumunsulta sa [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Makipag-ugnayan sa Enhance support para sa mga isyu na partikular sa panel
5. Gumawa ng bagong discussion na may detalyadong error logs para sa tulong ng komunidad

## Mga Tala {#notes}

- Ang integration na ito ay tumatalakay lamang sa mga domain alias; AEnhance ang namamahala ng SSL nang awtomatiko.
- Sinusuportahan ng integration na ito ang parehong custom domain mappings at mga site batay sa subdomain.
- Maaaring i-configure ang awtomatikong paglikha ng www subdomain sa Domain Mapping settings.
- Suportado ngayon ng Enhance ang mga konfigurasyon ng Apache (may available na LiteSpeed Enterprise).
- Ang pagtanggal ng domain mula sa Ultimate Multisite ay magtatanggal ng domain mula sa Enhance ngunit maaaring hindi agad burahin ang mga kaugnay na SSL certificate.
