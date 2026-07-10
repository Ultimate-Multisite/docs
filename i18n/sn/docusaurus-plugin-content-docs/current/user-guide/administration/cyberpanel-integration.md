---
title: Kugadzirwa neCyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

Iyi ndiri kuunza kune nzira yekuti ungarure (configure) Ultimate Multisite CyberPanel integration kuti domain dzakare mapped mu network yako dzinogone (automatically added and removed) kubva kune virtual hosts mu CyberPanel, uye nekuona auto-SSL kupiwe nekubatsirwa neLet's Encrypt.

## Izvi Zvinotora {#what-it-does}

- Kana domain yakare mapped mu Ultimate Multisite, integration inokosha (calls) CyberPanel API kuti iwe vhoto (create) virtual host yakanzvimbo yacho.
- Kana mapping ye domain ikadzidzwa (removed), integration inokosha API kuti idzidzve (delete) virtual host yakaita zviyo.
- Kana auto-SSL inogone, integration inokosha certificate issuance yaLet's Encrypt mufaro doro kana virtual host yakaita zvakare.
- Kuti unogone kuona/kuondesha alias ye `www.` kana kuti kuondesha (removes) kune chii chinotevera "Auto-create www subdomain" setting yako mu Domain Mapping settings.

## Zvinoregererwa (Prerequisites) {#prerequisites}

- CyberPanel instance inokosha (v2.3 kana yakare) inogona kuone (reachable) kubva kune WordPress server yako.
- Website yakaita zviyo mu CyberPanel yakanaka uye inogona kutora root ya network yako ye WordPress. Integration inotora virtual hosts dzine zvakare kune iweya server iyi.
- CyberPanel API access inogone. Authentication inoshandisa username uye password dzedi dzako dzako dzinobva mu CyberPanel.
- DNS records dzako dzemdomain dzakare mapped dzinofanira kuonekwa (point) kune IP address ya server yako pfungwa kuti auto-SSL ingone kupiwa certificate inoshandiswa.

## Zvinoregererwa (Requirements) {#requirements}

Izvi constants dzinofanira kuone (defined) mu file yako `wp-config.php`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kuti unogone, unogonawo kuone (define) zvakare:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — issue Let's Encrypt SSL after domain creation
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Used for SSL certificate contact
```

## Maonero ya Kufamba (Setup Instructions) {#setup-instructions}

### 1. Faraura API ya CyberPanel {#1-enable-the-cyberpanel-api}

1. Ingira ku dashboard yako ya CyberPanel seunyu kana wenyu weusi (administrator).
2. Penda **Security** > **SSL** uye chireke kana SSL inenge yakati pane mufanzo we CyberPanel (ine kuitika kune kutora API dzakakwana).
3. CyberPanel API inogona kuva pamba pachikuru `https://your-server-ip:8090/api/` nekuita zvinhu. Haina zvinhu zvinotora kuti iwe utore, kana iye inenge yakati kune admin users.

### 2. Shanda Constants ku wp-config.php {#2-add-constants-to-wp-configphp}

Shandisa constants izvi mu file yako `wp-config.php` pamba pachikuru pa line ya `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Kuti utore auto-SSL (ine inenge yakakwana):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Faraura Integration {#3-enable-the-integration}

1. Mu network admin ya WordPress yako, penda **Ultimate Multisite** > **Settings**.
2. Penda ku tab ya **Domain Mapping**.
3. Penda kune **Host Integrations**.
4. Penda integration ya **CyberPanel**.
5. Penda **Save Changes**.

### 4. Kuona Kuti Zvinoregerera (Verify Connectivity) {#4-verify-connectivity}

Shandisa nzira ya kutora connection inotanga pamba pachikuru:

1. Penda ku **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Chira **Test Connection**.
3. Mufanzo wekuwana kunokumbira kuti plugin inogona kuenda ku CyberPanel API uye inopfuura zvakanaka.

## Inoenda sei {#how-it-works}

### Domain Mapping {#domain-mapping}

Nekuti domain ine mapfura (mapped) mu Ultimate Multisite:

1. Integration inopa request ya `POST` ku `/api/createWebsite` pa host yako ya CyberPanel.
2. CyberPanel inokera virtual host yepamusoro yedu yakachengetedza kuti domain iwe.
3. Document root inogadzirwa kuti inopfuura directory yechipiri WordPress yako (WordPress network root directory).
4. Nekuti mapfura ekdomain ine kuondwa, integration inokumbira `/api/deleteWebsite` kuti itende virtual host iye.

### Auto-SSL {#auto-ssl}

Nekuti `WU_CYBERPANEL_AUTO_SSL` inenge `true`:

1. Panguva virtual host inokera, integration inokumbira `/api/issueSSL` yekudomaini iwe.
2. CyberPanel inokumbira certificate ya Let's Encrypt nekubatsirwa ne-ACME HTTP-01 challenge.
3. Certificate inogadzirwa nekudzireta (renewed) neCyberPanel panguva inodzidzera (expiry).

> **Zvinotora:** DNS inofanira kuenda zvakare (fully propagated) kune IP address yenyika yako panguva Let's Encrypt inogona kukumbira domain iwe. Nekuti SSL inopfuura nekukurumidza panguva mapfura, ndiramba uine kuramba uye shandisa SSL kubva mu dashboard ya CyberPanel pa **SSL** > **Manage SSL**.

### www Subdomain {#www-subdomain}

Nekuti **Auto-create www subdomain** inenge ine chakanaka mu settings dzako dze Domain Mapping, integration inokera alias ye virtual host yeku `www.<domain>` uye, nekuti Auto-SSL inenge inenge yakati, inogadzirisa certificate inogona kuita kuti iwe (apex) ne www variants.

### Email Forwarders {#email-forwarders}

Nekuti [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon inachivye, CyberPanel inogona kuwanisa kuno forwarders dze customer. Forwarders dziri kuita kuti messages dziri kubva pa domain address kuitwa ku inbox inotevera (another inbox) ndokuti haunave mailbox yakakuru, zvichiri kudzidzisa kuti zvinogona kutangwa kwealiases maibhuromi chekudzidzisa zvinhu se `info@customer-domain.test` kana `support@customer-domain.test`.

Panguva dzinenge dzichikwanisa forwarders kuvanhu:

1. Simbisa kuti constants dzakarekuita CyberPanel dziri kubva uye kuti connection test inenge yakapfuura.
2. Onge email provider ya CyberPanel mu settings ye Emails addon.
3. Simbisa kuti domain dze customer iri raine mune CyberPanel panguva unotsvaga forwarder.
4. Shandisa forwarder yechikoro (test forwarder) uye shandisa message kubva kwake panguva unoti feature iwe kuita pa production plans.

Kana forwarder kuita kuitwa, simbisa logs dzakarekuita Ultimate Multisite pane zvinhu zvinogona kutangwa kweAPI user kuti aine permissions dze email-management mu CyberPanel.

## Configuration Reference {#configuration-reference}

| Constant | Required | Default | Description |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yes | — | URL yakakuru ya instance yako ye CyberPanel inosanganisira port, sei: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yes | — | Username dze admin ya CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yes | — | Password dze admin ya CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yes | `Default` | Package ye hosting ya CyberPanel inosanganisira kuita kune virtual hosts mapfiri |
| `WU_CYBERPANEL_AUTO_SSL` | No | `true` | Kuita Let's Encrypt SSL certificate panguva domain raine kuita |
| `WU_CYBERPANEL_PHP_VERSION` | No | `PHP 8.2` | PHP version yakanaka kune virtual hosts mapfiri (inofanira kuita zvinhu zvakakosha neversion inotanga mu CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | No | — | Email dze kunge kuita SSL certificate registration |

## Important Notes {#important-notes}

API ya CyberPanel inoratira authentication yakasiyana ne session token. Integration iyi inoreva token iye ine mazuva ekupfungwa yechikoro chine API call.
Account yako ye admin ya CyberPanel inofanira kuva nekuvaka uye kuenda (delete) websites.
CyberPanel inedarisa neport `8090` nekuti inoratirwa chete. Kana server yako inoda firewall, ndichida kuti uone kuti port iye inogona kuonekwa kubva kune WordPress application server.
Integration iyi haine kuratidza DNS records. Unofanira kuita kuti domain DNS iratidze ku IP address ya server yako pfungwa dzako munzira dze Ultimate Multisite.
Kana unenge uchigona OpenLiteSpeed (OLS), restart inokwanisa kuitika nekukurumidza ndiri inoratirwa mazuva anogara nevirtual host changes. Haunoda kufamba nekuita zvinhu.

## Kuti Unzire (Troubleshooting) {#troubleshooting}

### API Connection Inorekererwa {#api-connection-refused}

- Onge kuona kuti port `8090` inosvika mu firewall ya server yako.
- Onge kuona kuti value ye `WU_CYBERPANEL_HOST` inoratidza protocol yakakodzera (`https://`) uye port.
- Onge kuona kuti CyberPanel SSL certificate yako inenge ine zvinhu; certificates dzine self-signed zina dzinogona kuva zvinoreva TLS verification failures. Onge shandisa `WU_CYBERPANEL_VERIFY_SSL` iwe `false` chete munzira dzakare ne network dzine chokwadi (trusted private network environments).

### Errors Ye Authentication {#authentication-errors}

- Onge kuona kuti `WU_CYBERPANEL_USERNAME` uye `WU_CYBERPANEL_PASSWORD` yako dzinogona kuva zvakanaka nekuti unenge uingira CyberPanel nekuita iye.
- CyberPanel inakutanga accounts kana uchigona kuingira nguva dzimwe zvinoreva kuti ndiri munhu anokumbwa (brute force). Onge onge kuona **Security** > **Brute Force Monitor** mu CyberPanel kana zvinhu zvinoita.

### Domain Haine Kuva {#domain-not-created}

- Onge kuona activity log ya Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) kuti uone error messages ye API.
- Onge kuona kuti package inotariswa mu `WU_CYBERPANEL_PACKAGE` inosvika mu CyberPanel (**Packages** > **List Packages**).
- Onge kuona kuti domain haine kuva website mune CyberPanel — kuita zvinhu zvekuvaka website zvinoreva error.

### SSL Certificate Haine Kuva {#ssl-certificate-not-issued}

- Chiri kuti DNS yakazivaka zvakadzama: `dig +short your-domain.com` inofanira kurudzirira IP ya server yako.
- Let's Encrypt inenge inopa mashoma (rate limits). Usi kuitira retrying kana uine kuopa certificates dzakawanda dzinogona kuti domain yese.
- Qinga chine zvigadzirwa zvinobva mu **Logs** > **Error Logs** kuti uve nezvinhu zvakakosha nezvekuita certificate issuance failures.
- Seunyangwe, unogona kuopa SSL manually kubva mu CyberPanel: **SSL** > **Manage SSL** > chine domain > **Issue SSL**.

## References {#references}

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
