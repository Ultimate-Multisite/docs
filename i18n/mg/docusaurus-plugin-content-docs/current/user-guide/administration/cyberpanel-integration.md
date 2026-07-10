---
title: Fampidirana CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Integration {#cyberpanel-integration}

Ity toromarika ity toromarika momba ny fomba fanaovana fametrahana (configuration) ny integration Ultimate Multisite CyberPanel mba hahafahana manampy sy mamoaka ho virtual host ao amin'ny CyberPanel ireo domain voafidy (mapped domains) ao amin'ny tambajotra anareo aho, ary azo atao koa ny fanomezana auto-SSL amin'ny alalan'i Let's Encrypt.

## Inona no ataony {#what-it-does}

- Rehefa misy domain voafidy ao amin'ny Ultimate Multisite, dia mitondra ny integration API an'ny CyberPanel mba hamoronana virtual host ho an'io domain io.
- Rehefa esorina ny fametrahana domain (domain mapping), dia mitondra ny integration ny API mba hanesorana ilay virtual host mifandraika amin'izany.
- Rehefa voafidy ny auto-SSL, dia manomboka avy hatrany ny integration ny fanomezana sertifika Let's Encrypt rehefa vita ny famoronana ilay virtual host.
- Azo ampiana/esorina raha tianao arakaraka ny fepetra "Auto-create www subdomain" ao amin'ny Domain Mapping settings anareo.

## Fepetra takiana (Prerequisites) {#prerequisites}

- Fandaharana CyberPanel miasa (v2.3 na avo kokoa no tsara) azo jerena avy amin'ny server WordPress anareo.
- Website efa misy ao amin'ny CyberPanel izay manome ny fototra (root) ho an'ny tambajotran'ny WordPress anareo. Ny integration dia mampiditra virtual host vaovao amin'ity server ity.
- Fanaovana access amin'ny API an'ny CyberPanel. Ny fanamarinana dia mampiasa ny anaran'ny mpitantana (admin username) sy ny teny fidirana (password) anareo ao amin'ny CyberPanel.
- Ilaina fa ny DNS records ho an'ireo domain voafidy dia tokony haneho ny adiresin'ny server anareo alohan'ny hanomezana sertifika marina ny auto-SSL.

## Fepetra (Requirements) {#requirements}

Ireo constants ireo dia tsy maintsy voarakitra ao amin'ny rakitra `wp-config.php` anareo:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Azo atao koa ny mamaritra:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Default: true — ny misy Let's Encrypt SSL aorian'ny famantarana domain
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Default: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Ampiasaina ho fifandraisana amin'ny sertifika SSL

## Fampahafantarana ny Fikarakarana (Setup Instructions)

### 1. Ampirisihina ny CyberPanel API

1. Midira ao anaty dashboard CyberPanel ankoatram-pahaizana (administrator).
2. Mandehana any amin'ny **Security** > **SSL** ary avereno fa mandeha ny SSL eo amin'ny interface CyberPanel mihitsy (ilay ilaina mba hahazoana API secure).
3. Ny CyberPanel API dia azo ampiasaina ao amin'ny `https://your-server-ip:8090/api/` ho an'ny ankapobeny. Tsy mila dingana hafa iantsoana azy — efa misy eo amin'ny ankapobeny ho an'ny mpampiasa administrator izany.

### 2. Ampidirina ny Constants ao amin'ny wp-config.php

Ampidiro ireo constants manaraka ao amin'ny rakitra `wp-config.php` alohan'ny tsipika hoe `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Mba hampandehanana auto-SSL (tena manoro hevitra):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Ampirisihina ny Fampifandraisana (Enable the Integration)

1. Ao amin'ny network admin an'ny WordPress, mandehana any amin'ny **Ultimate Multisite** > **Settings**.
2. Mandehana any amin'ny tabilao **Domain Mapping**.
3. Mandehana any ambany mankany amin'ny **Host Integrations**.
4. Ampirisihina ny fampifandraisana **CyberPanel**.
5. Tsindrio ny **Save Changes** (Te-hamboary ny fanovana).

### 4. Fantaro ny Fandefasana (Verify Connectivity)

Ampiasao ny fitsapana fifandraisana anaty wizard amin'ny fampahalalana:

1. Mandehina ao **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Tsindrio ny **Test Connection**.
3. Fanamariana fahombiazana dia manamarina fa afaka mahatratra ny API an'ny CyberPanel sy mandray anjara tsara izy ilay plugin.

## Ahoana no fiasany

### Domain Mapping

Rehefa misy domain iray atao mapping ao amin'ny Ultimate Multisite:

1. Ny integration dia mandefa fangatahana `POST` any amin'ny `/api/createWebsite` eo amin'ny host CyberPanel anareo.
2. Ny CyberPanel dia mamorona virtual host vaovao ho an'ilay domain eo ambanin'ny package voafidy.
3. Ny document root dia apetraka mba hanondro ny lalana fototra (root directory) an'ny tambajotra WordPress anareo.
4. Rehefa esorina ny domain mapping, dia mitondra ny integration ny `/api/deleteWebsite` mba hanadiovana ilay virtual host.

### Auto-SSL

Rehefa `WU_CYBERPANEL_AUTO_SSL` dia `true`:

1. Aorian'ny famoronana ny virtual host, dia mitondra ny integration ny `/api/issueSSL` ho an'ilay domain.
2. Ny CyberPanel dia mangataka sertifika Let's Encrypt mampiasa ny ACME HTTP-01 challenge.
3. Ny sertifika dia averina azy ho vaovao ho azy alohan'ny fandrosoana azy.

> **Zava-dehibe:** Tsy maintsy mivelatra tanteraka ny DNS mankany amin'ny adiresin'ny IP an'ny server anareo alohan'ny ahafahan'ny Let's Encrypt manamarina ilay domain. Raha tsy mandeha ny famoronana SSL avy eo dia aorian'ny mapping, andramo indray ny fandrosoana DNS ary avereno ny SSL avy ao amin'ny dashboard an'ny CyberPanel eo ambanin'ny **SSL** > **Manage SSL**.

### www Subdomain

Raha voafidy ny **Auto-create www subdomain** ao amin'ny Domain Mapping anareo, dia mamorona virtual host alias ho an'i `www.<domain>` koa ny integration ary, rehefa mandeha ny auto-SSL, dia manome sertifika manao feno ireo endrika apex sy www.

### Email Forwarders

Rehefa ny [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon dia miasa, afaka manome mpanohana mailaka ho an'ny mpanjifa i CyberPanel koa. Ny forwarder dia mitondra hafatra avy amin'ny adiresy domain iray mankany amin'ny inbox hafa tsy mila mamorona mailbox feno izany, izay tena ilaina ho an'ireo alias toy ny `info@customer-domain.test` na `support@customer-domain.test`.

Alohan'ny fanondroana forwarder ho an'ny mpanjifa:

1. Fantaro fa voarafitra tsara ireo constant ao ambony dia vita ary mandeha ny fanandramana fifandraisana (connection test).
2. Ampirisihina ny CyberPanel email provider ao amin'ny fepetra an'ny Emails addon.
3. Fantaro fa efa misy ny domain mpanjifa tao amin'ny CyberPanel alohan'ny famoronana ny forwarder.
4. Atao test forwarder iray ary alefa hafatra amin'izany alohan'ny atolotra ilay fahaiza-manao (feature) ho an'ny production plans.

Raha tsy mandeha ny famoronana forwarder, jereo aloha ny logs iasan'ny Ultimate Multisite, dia fantaro ao CyberPanel fa misy ny domain loharano ary manana zo fitantanana mailaka ilay API user.

## Fampahafantarana Fepetra (Configuration Reference)

| Constant | Ilaina | Default | Famaritana |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Eny | — | Ny URL feno an'ny CyberPanel anao ahitana ny port, ohatra: `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Eny | — | Anaran'ny admin ao amin'ny CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Eny | — | Tenin'ny admin ao amin'ny CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Eny | `Default` | Ny package hosting an'ny CyberPanel ho an'ny virtual host vaovao |
| `WU_CYBERPANEL_AUTO_SSL` | Tsia | `true` | Famoronana sertifika Let's Encrypt aorian'ny famoronana domain |
| `WU_CYBERPANEL_PHP_VERSION` | Tsia | `PHP 8.2` | Ny dikan'ny PHP ho an'ny virtual host vaovao (tsy mainka amin'ny dikan'ny PHP voasokajy ao CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Tsia | — | Maila fifandraisana ho an'ny fametrahana sertifika SSL |

## Fanamarihana Manan-danja (Important Notes)

Ny API an'ny CyberPanel dia mampiasa fanamarinana token mifototra amin'ny session (session-based token authentication). Ny fampifandraisana dia mandray ny fangatahana token ho azy isaky ny antso API.
Tsy maintsy manana zo famoronana sy fanesorana tranonkala ianao ao amin'ny kaontina admin an'ny CyberPanel.
Mandeha amin'ny port `8090` eo amin'ny ankapobeny ny CyberPanel. Raha mampiasa firewall ve ny server-nao, dia antoky fa azo miditra io port io avy amin'ny server WordPress ianao.
Tsy mitantana ny fampahalalana DNS (DNS records) ity fampifandraisana ity. Mila manondro ny DNS an'ilay domain ho any amin'ny adiresin'ny IP an'ny server-nao ianao alohan'ny hifandray ilay domain ao amin'ny Ultimate Multisite.
Raha mampiasa OpenLiteSpeed (OLS) ianao, dia misy fametrahana indray tsara (graceful restart) ho voarafitra azy ho azy rehefa miova ny virtual host. Tsy mila fandraisana an-tanana intsony izany.

## Fandresena Olana (Troubleshooting)

### Refusion'ny Fifandraisana API (API Connection Refused)

- Fantaro fa misokatra io port `8090` io ao amin'ny firewall an'ny server-nao.
- Ampahafantarina fa ny sandan'ny `WU_CYBERPANEL_HOST` dia ahitana ny protokol (protocol) marina (`https://`) sy ny port.
- Jereo raha mandeha ny sertifika SSL an'ny CyberPanel anao; mety hiteraka tsy fahampian'ny TLS verification ireo sertifika mifandray amin'ny tena (self-signed certificates). Apetraho `WU_CYBERPANEL_VERIFY_SSL` ho `false` ihany ao amin'ny tontolo manokana izay ankasitrahana (trusted private network environments).

### Fahaverezan'ny Fanamarinana (Authentication Errors)

- Fantaro fa marina ny `WU_CYBERPANEL_USERNAME` sy ny `WU_CYBERPANEL_PASSWORD` anao amin'ny alalan'ny fidirana mivantana ao CyberPanel.
- Manakana ny kaonty ny CyberPanel rehefa misy fahaverezan'ny fidirana (failed login attempts) maro. Jereo ny **Security** > **Brute Force Monitor** ao amin'ny CyberPanel raha misy fanakianana (lockouts).

### Tsy Nisy Famoronana Domain (Domain Not Created)

- Jereo ny log fampandehanana an'ny Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) mba hahitana hafatra fahadisoana API.
- Fantaro fa misy ny package voafetra ao amin'ny `WU_CYBERPANEL_PACKAGE` eo amin'ny CyberPanel (**Packages** > **List Packages**).
- Antoky fa tsy nisy fametrahana website efa misy anarana domain ao amin'ny CyberPanel — ny famoronana website mitovy dia miteraka fahadisoana.

### Tsy Nisy Famoronana Sertifika SSL (SSL Certificate Not Issued)

- Ampahina raha efa nampitana tanteraka ny DNS: `dig +short your-domain.com` dia tokony hamerina ny IP an'ny server anao.
- Ny Let's Encrypt dia manery fetran-tsindrim-panjakana (rate limits). Raha vao nanao taratasy maromaro ianao tamin'ny domain mitovy, andramo indray alohan'ny fanaovana izany.
- Jereo ny logs SSL ao amin'ny **Logs** > **Error Logs** mba hahazoana antsipiriany momba ny tsy fahombiazana famoronana taratasy.
- Ho an'ny fanampiana, afaka manao SSL manokana ianao avy amin'ny CyberPanel: **SSL** > **Manage SSL** > safidio ny domain > **Issue SSL**.

## References

- Documentation momba ny API an'ny CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Fitantanana SSL an'ny CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
