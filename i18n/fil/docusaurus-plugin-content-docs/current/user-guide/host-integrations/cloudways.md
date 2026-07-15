---
title: Integrasyon ng Cloudways
sidebar_position: 3
_i18n_hash: 09425d90def2b755c27a698d78d7d4b0
---
# Integrasyon ng Cloudways

## Pangkalahatang-ideya {#overview}
Ang Cloudways ay isang managed cloud hosting platform na nagbibigay-daan sa iyong mag-deploy ng mga WordPress site sa iba't ibang cloud provider tulad ng DigitalOcean, AWS, Google Cloud, at iba pa. Pinapagana ng integrasyong ito ang awtomatikong pag-sync ng domain at pamamahala ng SSL certificate sa pagitan ng Ultimate Multisite at Cloudways.

## Mga Tampok {#features}
- Awtomatikong pag-sync ng domain
- Pamamahala ng SSL certificate
- Suporta para sa mga karagdagang domain
- Pagpapatunay ng DNS para sa mga SSL certificate

## Mga Kinakailangan {#requirements}
Dapat tukuyin ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Opsyonal, maaari mo ring tukuyin ang:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## Mga Tagubilin sa Setup {#setup-instructions}

### 1. Kunin ang Iyong Cloudways API Credentials {#1-get-your-cloudways-api-credentials}

1. Mag-log in sa iyong Cloudways Dashboard
2. Pumunta sa "Account" > "Mga API Key"
3. Gumawa ng API key kung wala ka pa nito
4. Kopyahin ang iyong email at API key

### 2. Kunin ang Iyong Mga Server at Application ID {#2-get-your-server-and-application-ids}

1. Sa iyong Cloudways Dashboard, pumunta sa "Mga Server"
2. Piliin ang server kung saan naka-host ang iyong WordPress multisite
3. Makikita ang Server ID sa URL: `https://platform.cloudways.com/server/{SERVER_ID}`
4. Pumunta sa "Mga Application" at piliin ang iyong WordPress application
5. Makikita ang App ID sa URL: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### 3. Idagdag ang Mga Constant sa wp-config.php {#3-add-constants-to-wp-configphp}

Idagdag ang mga sumusunod na constant sa iyong `wp-config.php` file:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

Kung mayroon kang karagdagang **external** na mga domain (sa labas ng iyong multisite network) na dapat palaging panatilihin sa listahan ng mga alias ng Cloudways:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'extradomain1.com,extradomain2.com');
```

:::warning Huwag isama ang wildcard ng sarili mong network
**Huwag** idagdag ang `*.your-network.com` (o anumang pattern ng subdomain ng sarili mong network) sa
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Tingnan ang [Mahalaga — bitag ng wildcard SSL](#important--wildcard-ssl-pitfall)
sa ibaba kung bakit pinipigilan nito ang pag-isyu ng mga SSL certificate para sa bawat tenant.
:::

### 4. I-enable ang Integrasyon {#4-enable-the-integration}

1. Sa iyong WordPress admin, pumunta sa Ultimate Multisite > Mga Setting
2. Mag-navigate sa tab na "Pagmamapa ng Domain"
3. Mag-scroll pababa sa "Mga Integrasyon ng Host"
4. I-enable ang integrasyon ng Cloudways
5. I-click ang "I-save ang mga Pagbabago"

## Paano Ito Gumagana {#how-it-works}

### Pag-sync ng Domain {#domain-syncing}

Kapag na-map ang isang domain sa Ultimate Multisite:

1. Kinukuha ng integrasyon ang lahat ng kasalukuyang naka-map na domain
2. Idinaragdag nito ang bagong domain sa listahan (kasama ang bersyong www kung naaangkop)
3. Ipinapadala nito ang kumpletong listahan sa Cloudways sa pamamagitan ng API
4. Ina-update ng Cloudways ang mga domain alias para sa iyong application

Tandaan: Kinakailangan ng Cloudways API na ipadala ang kumpletong listahan ng mga domain sa bawat pagkakataon, hindi lang pagdaragdag o pag-aalis ng mga indibidwal na domain.

### Pamamahala ng SSL Certificate {#ssl-certificate-management}

Pagkatapos ma-sync ang mga domain:

1. Sinusuri ng integrasyon kung aling mga domain ang may valid na DNS record na nakaturo sa iyong server
2. Nagpapadala ito ng request sa Cloudways upang i-install ang Let's Encrypt SSL certificates para sa mga domain na iyon
3. Pinangangasiwaan ng Cloudways ang pag-isyu at pag-install ng SSL certificate

Palaging humihiling ang integrasyon ng **standard** (hindi wildcard) na Let's Encrypt certificates mula sa
Cloudways. Kung may ibinigay na wildcard pattern sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, ang nangungunang
`*.` ay inaalis bago ang SSL request — ang wildcard mismo ay hindi kailanman ini-install ng
integrasyong ito. Upang gumamit ng wildcard certificate sa Cloudways, kakailanganin mong i-install ito
nang manu-mano, ngunit ang paggawa nito ay humaharang sa pag-isyu ng Let's Encrypt para sa bawat domain para sa mga naka-map na custom domain
(tingnan ang bitag sa ibaba).

## Mga Karagdagang Domain {#extra-domains}

Pinapayagan ka ng `WU_CLOUDWAYS_EXTRA_DOMAINS` constant na tumukoy ng karagdagang **external**
na mga domain na dapat palaging panatilihin sa listahan ng mga alias ng Cloudways application. Gamitin ito para sa:

- Mga external domain na hindi pinamamahalaan ng Ultimate Multisite (hal. isang hiwalay na marketing site na gumagamit ng parehong Cloudways application)
- Mga parked o staging domain na gusto mong panatilihin sa listahan ng mga application alias

**Huwag** gamitin ang constant na ito para sa subdomain wildcard ng sarili mong network
(hal. `*.your-network.com`). Tingnan ang bitag ng wildcard SSL sa ibaba.

## Mahalaga — Bitag ng Wildcard SSL {#important--wildcard-ssl-pitfall}

Isang karaniwang pagkakamali kapag sinusunod ang default na setup ng Cloudways ay ang pagdaragdag ng wildcard tulad ng
`*.your-network.com` sa `WU_CLOUDWAYS_EXTRA_DOMAINS`, o ang manu-manong pag-install ng Cloudways
wildcard SSL certificate para sa wildcard na iyon.

**Kung gagawin mo ito, tatanggihan ng Cloudways na mag-isyu ng Let's Encrypt certificates para sa
mga custom domain ng bawat tenant na mina-map ng Ultimate Multisite.** Pinapalitan ng Cloudways ang aktibong
SSL certificate sa application sa bawat pagkakataon, at ang dati nang wildcard certificate sa
application ay humaharang sa pag-isyu ng Let's Encrypt para sa bawat domain na inaasahan ng integrasyon.

### Inirerekomendang Cloudways SSL setup para sa isang Ultimate Multisite network {#recommended-cloudways-ssl-setup-for-an-ultimate-multisite-network}

1. Sa tab na **SSL Certificate** ng Cloudways application, mag-install ng **standard
   Let's Encrypt certificate** na sumasaklaw lamang sa `your-network.com` at `www.your-network.com`
   — **hindi** wildcard.
2. **Huwag** ilagay ang `*.your-network.com` (o anumang pattern ng subdomain ng sarili mong network) sa
   `WU_CLOUDWAYS_EXTRA_DOMAINS`. Ilaan ang constant na iyon para sa **external** na mga domain lamang.
3. Gumawa ng subdomain wildcard para sa bawat tenant sa antas ng **DNS** lamang (isang `A` record para sa
   `*.your-network.com` na nakaturo sa IP ng iyong Cloudways server) upang mag-resolve ang mga subsite. Ang SSL
   para sa mga indibidwal na naka-map na custom domain ay pagkatapos awtomatikong ini-isyu ng integrasyon
   sa pamamagitan ng Let's Encrypt.

Kung ang mga custom domain ng iyong mga tenant ay naipit na walang SSL, tingnan ang SSL tab ng Cloudways. Kung may
aktibong wildcard certificate doon, alisin ito, mag-isyu muli ng karaniwang Let's Encrypt
certificate para lamang sa pangunahing network domain, at alisin ang anumang wildcard entry mula sa
`WU_CLOUDWAYS_EXTRA_DOMAINS`. Pagkatapos ay muling mag-trigger ng domain mapping (o hintayin ang susunod)
at magsisimulang mag-isyu muli ang integration ng mga certificate para sa bawat domain.

## Pag-troubleshoot {#troubleshooting}

### Mga Isyu sa Koneksyon ng API {#api-connection-issues}
- Tiyaking tama ang iyong email at API key
- Suriin na tama ang iyong server at application ID
- Tiyaking may kinakailangang mga pahintulot ang iyong Cloudways account

### Mga Isyu sa SSL Certificate {#ssl-certificate-issues}
- Kinakailangan ng Cloudways na ang mga domain ay may valid na DNS record na nakaturo sa iyong server bago mag-isyu ng mga SSL certificate
- Bine-validate ng integration ang mga DNS record bago humiling ng mga SSL certificate
- Kung hindi naiisyu ang mga SSL certificate, suriin na ang iyong mga domain ay maayos na nakaturo sa IP address ng iyong server
- **Naipit ba na walang SSL ang mga custom domain ng bawat tenant?** Tingnan ang SSL Certificate tab ng Cloudways application. Kung may aktibong wildcard certificate (manu-manong na-install, o sumasaklaw sa `*.your-network.com`), hindi mag-iisyu ang Cloudways ng Let's Encrypt certificates para sa mga indibidwal na naka-map na custom domain. Palitan ito ng karaniwang Let's Encrypt certificate na sumasaklaw lamang sa pangunahing network domain (`your-network.com`, `www.your-network.com`) at alisin ang anumang wildcard entry mula sa `WU_CLOUDWAYS_EXTRA_DOMAINS`. Pagkatapos ay muling mag-trigger ng domain mapping (o hintayin ang susunod) at hihiling ang integration ng mga certificate para sa bawat domain.

### Hindi Naidagdag ang Domain {#domain-not-added}
- Tingnan ang mga log ng Ultimate Multisite para sa anumang mensahe ng error
- Tiyaking hindi pa naidagdag ang domain sa Cloudways
- Tiyaking sinusuportahan ng iyong Cloudways plan ang bilang ng mga domain na idinaragdag mo
