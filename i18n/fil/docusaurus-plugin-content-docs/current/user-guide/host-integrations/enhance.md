---
title: Pahusayin ang Pagsasama ng Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Integrasyon ng Enhance Control Panel

## Pangkalahatang-ideya
Ang Enhance ay isang modernong control panel na nagbibigay ng mga powerful na kakayahan para sa hosting automation at pamamahala. Ang integrasyon na ito ay nagbibigay-daan sa automatic na pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Enhance Control Panel.

**Kaugnay na Talakayan:** Tingnan ang [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) para sa mga tip mula sa komunidad at karagdagang impormasyon.

## Mga Tampok
- Automatic na pag-sync ng domain kapag ang mga domain ay na-map sa Ultimate Multisite
- Automatic na pagbibigay ng SSL certificate sa pamamagitan ng LetsEncrypt kapag nag-resolve ang DNS
- Suporta para sa subdomain sa mga network na gumagamit ng subdomain mode
- Pag-alis ng domain kapag tinanggal ang mga mapping
- Pagsubok ng koneksyon upang ma-verify ang mga API credential

## Mga Kinakailangan

### Mga Kinakailangan sa Sistema
- Naka-install at accessible ang Enhance Control Panel
- WordPress Multisite installation na naka-host sa o konektado sa isang Enhance server
- Apache web server (kasalukuyang sinusuportahan ng Enhance ang mga Apache configuration; available ang LiteSpeed Enterprise sa mas mababang presyo)

### Access sa API
Dapat kang may administrator access sa Enhance Control Panel upang makagawa ng mga API token.

## Pagkuha ng Iyong mga API Credential

### 1. Gumawa ng API Token

1. Mag-log in sa iyong Enhance Control Panel bilang administrator
2. I-click ang **Settings** sa navigation menu
3. Pumunta sa **Access Tokens**
4. I-click ang **Create Token**
5. Bigyan ang token ng mapaglarawang pangalan (hal., "Ultimate Multisite Integration")
6. I-assign ang **System Administrator** role
7. Para sa expiry date:
   - Iwanan itong walang laman kung gusto mong hindi ma-expire ang token
   - O magtakda ng partikular na expiration date para sa seguridad
8. I-click ang **Create**

Pagkatapos gawin, ipapakita ang iyong **Access Token** at **Organization ID**. **I-save agad ang mga ito** dahil isang beses lang ipapakita ang token.

### 2. Kunin ang Iyong Organization ID

Ipinapakita ang Organization ID sa Access Tokens page sa isang asul na information box na may label na "Org ID: {your_id}".

Ang Organization ID ay isang UUID na may format na ganito: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Maaari mo ring makita ang Organization ID ng isang customer sa pamamagitan ng:
1. Pumunta sa **Customers** page
2. I-click ang **Manage customer** para sa nauugnay na customer
3. Tingnan ang URL - ang Organization ID ay ang mga alphanumeric character pagkatapos ng `/customers/`

### 3. Kunin ang Iyong Server ID

Upang mahanap ang iyong Server ID (kinakailangan para sa mga domain operation):

1. Sa Enhance Control Panel, pumunta sa **Servers**
2. I-click ang server kung saan tumatakbo ang iyong WordPress installation
3. Makikita ang Server ID (UUID format) sa URL o server details
4. Bilang alternatibo, maaari mong gamitin ang API upang ilista ang mga server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Ang server ID ay sumusunod sa UUID format: `00000000-0000-0000-0000-000000000000`

### 4. Kunin ang Iyong API URL

Ang iyong API URL ay ang URL ng iyong Enhance Control Panel na may dagdag na `/api/`:

```
https://your-enhance-panel.com/api/
```

**Mahalaga:** Kinakailangan ang `/api/` path. Mga karaniwang pagkakamali:
- Paggamit lang ng domain nang walang `/api/`
- Paggamit ng HTTP sa halip na HTTPS (kinakailangan ang HTTPS para sa seguridad)

## Configuration

### Mga Kinakailangang Constant

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
// Enhance Control Panel Integration
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Setup gamit ang Integration Wizard

1. Sa iyong WordPress admin, pumunta sa **Ultimate Multisite** > **Settings**
2. Pumunta sa **Integrations** tab
3. Hanapin ang **Enhance Control Panel Integration** at i-click ang **Configuration**
4. Gagabayan ka ng wizard sa setup:
   - **Step 1:** Introduction at pangkalahatang-ideya ng mga tampok
   - **Step 2:** Ilagay ang iyong mga API credential (Token, API URL, Server ID)
   - **Step 3:** Subukan ang koneksyon
   - **Step 4:** Suriin at i-activate

Maaari mong piliin na:
- Hayaan ang wizard na awtomatikong i-inject ang mga constant sa iyong `wp-config.php` file
- Kopyahin ang mga constant definition at manu-manong idagdag ang mga ito

## Karagdagang WordPress Configuration

Batay sa feedback ng komunidad ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), maaaring kailanganin mong i-configure ang mga karagdagang setting na ito:

### Configuration ng .htaccess

Kung nakakaranas ka ng mga problema sa domain mapping:
1. Burahin ang orihinal na Enhance `.htaccess` file
2. Palitan ito ng standard na WordPress Multisite `.htaccess` file

### Mga Cookie Constant

Idagdag ang mga constant na ito sa `wp-config.php` upang matiyak ang tamang pag-handle ng cookie sa mga na-map na domain:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Paano Ito Gumagana

### Kapag Na-map ang isang Domain

1. Isang user ang nag-map ng custom domain sa Ultimate Multisite (o nagawa ang bagong site sa subdomain mode)
2. Nagpapadala ang integration ng POST request sa API ng Enhance: `/servers/{server_id}/domains`
3. Idinaragdag ng Enhance ang domain sa configuration ng iyong server
4. Kapag nag-resolve ang DNS sa iyong server, awtomatikong nagbibigay ang Enhance ng SSL certificate sa pamamagitan ng LetsEncrypt
5. Naging active ang domain na may HTTPS

### Kapag Tinanggal ang isang Domain

1. Binura ang isang domain mapping sa Ultimate Multisite
2. Nagtatanong ang integration sa Enhance upang hanapin ang ID ng domain
3. Nagpapadala ng DELETE request sa: `/servers/{server_id}/domains/{domain_id}`
4. Tinatanggal ng Enhance ang domain mula sa configuration ng iyong server

### Pagsusuri ng DNS at SSL

May kasamang built-in na pagsusuri ng DNS at SSL ang Ultimate Multisite:
- Maaari mong i-configure ang check interval sa **Domain Mapping Settings** (default: 300 segundo/5 minuto)
- Ive-verify ng sistema ang DNS propagation bago markahan ang isang domain bilang active
- Awtomatikong sinusuri ang validity ng SSL certificate
- Awtomatikong hina-handle ng Enhance ang SSL provisioning, kaya hindi na kailangan ang manu-manong SSL configuration

## Pag-verify ng Setup

### Subukan ang Koneksyon

1. Sa Integration Wizard, gamitin ang **Test Connection** step
2. Susubukan ng plugin na ilista ang mga domain sa iyong server
3. Kinukumpirma ng success message na:
   - Tama ang mga API credential
   - Accessible ang API URL
   - Valid ang Server ID
   - Maayos ang mga permission

### Pagkatapos Mag-map ng Domain

1. Mag-map ng test domain sa Ultimate Multisite
2. Tingnan ang mga log ng Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. I-verify sa Enhance Control Panel na naidagdag ang domain:
   - Pumunta sa **Servers** > **Your Server** > **Domains**
   - Dapat lumabas ang bagong domain sa listahan
4. Kapag nag-propagate ang DNS, i-verify na awtomatikong na-provision ang SSL

## Troubleshooting

### Mga Problema sa API Connection

**Error: "Failed to connect to Enhance API"**
- I-verify na kasama ang `/api/` sa dulo ng `WU_ENHANCE_API_URL`
- Tiyaking gumagamit ka ng HTTPS, hindi HTTP
- Suriin kung accessible ang Enhance panel mula sa iyong WordPress server
- I-verify na walang mga firewall rule na humaharang sa koneksyon

**Error: "Enhance API Token not found"**
- Tiyaking defined ang `WU_ENHANCE_API_TOKEN` sa `wp-config.php`
- I-verify na hindi nabura o nag-expire ang token sa Enhance
- Suriin kung may mga typo sa token value

**Error: "Server ID is not configured"**
- I-verify na defined ang `WU_ENHANCE_SERVER_ID` sa `wp-config.php`
- Tiyaking valid ang format ng Server ID bilang UUID
- Kumpirmahin na umiiral ang server sa iyong Enhance panel

### Hindi Naidagdag ang Domain

**Suriin ang mga log:**
1. Pumunta sa **Ultimate Multisite** > **Logs**
2. I-filter ayon sa **integration-enhance**
3. Hanapin ang mga error message na nagsasabi ng problema

**Mga karaniwang sanhi:**
- Invalid na format ng domain name
- Umiiral na ang domain sa Enhance
- Hindi sapat ang mga API permission (tiyaking may System Administrator role ang token)
- Hindi tumutugma ang Server ID sa aktwal na server sa Enhance

### Mga Problema sa SSL Certificate

**Hindi nagpo-provision ang SSL:**
- I-verify na nakaturong ang DNS sa IP address ng iyong server
- Suriin kung tama ang pag-resolve ng domain: `nslookup yourdomain.com`
- Kinakailangan ng Enhance na mag-resolve ang DNS bago ito makapag-provision ng SSL
- Karaniwang tumatagal ng 5-10 minuto ang SSL provisioning pagkatapos ng DNS propagation
- Suriin ang mga log ng Enhance Control Panel para sa mga SSL-specific na error

**Manu-manong SSL troubleshooting sa Enhance:**
1. Pumunta sa **Servers** > **Your Server** > **Domains**
2. Hanapin ang iyong domain at suriin ang status ng SSL nito
3. Maaari mong manu-manong i-trigger ang SSL provisioning kung kinakailangan

### DNS Check Interval

Kung masyadong matagal ang pag-activate ng mga domain o SSL certificate:
1. Pumunta sa **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Hanapin ang **DNS Check Interval** setting
3. Baguhin mula sa default na 300 segundo patungo sa mas mababang value (minimum: 10 segundo)
4. **Tandaan:** Ang mas mababang interval ay nangangahulugan ng mas madalas na pagsusuri ngunit mas mataas na server load

### Mga Error sa Authentication

**HTTP 401/403 error:**
- I-regenerate ang iyong API token sa Enhance
- I-verify na may **System Administrator** role ang token
- Suriin kung hindi pa nag-expire ang token
- Tiyaking ginagamit mo ang tamang Organization ID (bagaman karaniwang hindi ito kinakailangan sa URL)

### Pagsusuri ng Log

I-enable ang detailed logging:
```php
// Idagdag sa wp-config.php para sa enhanced debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Pagkatapos ay suriin ang mga log sa:
- Mga log ng Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Mga log ng Enhance panel: Available sa admin interface ng Enhance

## API Reference

### Authentication
Lahat ng API request ay gumagamit ng Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Mga Karaniwang Ginagamit na Endpoint

**Ilista ang mga Server:**
```
GET /servers
```

**Ilista ang mga Domain sa isang Server:**
```
GET /servers/{server_id}/domains
```

**Magdagdag ng Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Mag-delete ng Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Buong API Documentation
Kumpletong API documentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Mga Pinakamahuhusay na Kasanayan

### Seguridad
- **Huwag kailanman i-commit ang mga API token sa version control**
- Itago ang mga token sa `wp-config.php` na dapat i-exclude sa Git
- Gumamit ng mga token na may naaangkop na mga permission (System Administrator para sa buong integration)
- Magtakda ng mga token expiry date para sa mga production environment
- Regular na palitan ang mga token

### Performance
- Gamitin ang default na DNS check interval (300 segundo) upang maiwasan ang sobrang API call
- Subaybayan ang mga resource ng Enhance server kapag nagpapatakbo ng malakihang domain operation
- Isaalang-alang ang pagsasaayos ng timing ng pagdaragdag ng domain kung maraming domain ang ima-map nang sabay-sabay

### Monitoring
- Regular na suriin ang mga log ng Ultimate Multisite para sa mga error sa integration
- Mag-setup ng monitoring para sa mga nabigong pagdaragdag ng domain
- I-verify na tama ang pagpo-provision ng mga SSL certificate
- Bantayan ang kapasidad ng Enhance server at mga limitasyon ng domain

## Karagdagang Mga Mapagkukunan

- **Opisyal na Dokumentasyon ng Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **API Documentation ng Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum ng Komunidad ng Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Gabay sa Domain Mapping ng Ultimate Multisite:** Tingnan ang wiki page na "How to Configure Domain Mapping v2"

## Suporta

Kung may mga problema kang nakatagpo:
1. Suriin ang seksyon ng Troubleshooting sa itaas
2. Suriin ang mga log ng Ultimate Multisite
3. Kumonsulta sa [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Makipag-ugnayan sa suporta ng Enhance para sa mga isyung partikular sa panel
5. Gumawa ng bagong discussion na may detalyadong error log para sa tulong mula sa komunidad

## Mga Tala

- Ang integration na ito ay nagha-handle lamang ng mga domain alias; awtomatikong pinapamahalaan ng Enhance ang SSL
- Sinusuportahan ng integration ang parehong custom domain mapping at subdomain-based na mga site
- Maaaring i-configure ang awtomatikong paggawa ng www subdomain sa mga setting ng Domain Mapping
- Kasalukuyang sinusuportahan ng Enhance ang mga Apache configuration (available ang LiteSpeed Enterprise)
- Ang pag-alis ng domain mula sa Ultimate Multisite ay mag-aalis ng domain mula sa Enhance ngunit maaaring hindi agad mabura ang mga nauugnay na SSL certificate
