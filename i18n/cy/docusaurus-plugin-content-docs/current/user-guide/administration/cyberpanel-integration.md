---
title: Ychwanegiad CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# Ymddianol CyberPanel Integration

Mae'r cyfarwyddyd hwn yn esbonio sut i sicrhau eich bod yn llwybr y cyfathrebu (configure) y cyfathrebu Ultimate Multisite CyberPanel felly fod y domenau a ddarlangwyd (mapped domains) yn eich rheol yn cael eu cytuno (add) a'u cael eu talybo (remove) fel hostiau virtual yn CyberPanel, gyda chyd-fyddio auto-SSL sydd yn wybili drwy Let's Encrypt.

## Beth yw'r Cyfathrebu?

- Pan fod domen yn cael ei ddarlangio mewn Ultimate Multisite, mae'r cyfathrebu yn cyfarfod â API CyberPanel i creu host virtual ar gyfer y domenaidd hwnnw.
- Pan fod ddarlangio domen wedi'i talybo, mae'r cyfathrebu yn cyfarfod â'r API i ddefnyddio'r host virtual sydd yn ei ddefnyddio.
- Pan fod auto-SSL yn cael ei chynllunio (enabled), mae'r cyfathrebu'n gwthio cyflwyno certyf.iad Let's Encrypt yn gyflym ar ôl creu'r host virtual.
- Mae'n cael ei ddefnyddio/talybo'r alias `www.` yn ddeall yn ôl eich setiad "Auto-create www subdomain" mewn setiadau Darlangio Domen (Domain Mapping settings).

## Prifysgolion Cynllunio (Prerequisites)

- Cyfathrebu CyberPanel yn gweithredol (v2.3 neu fwy wedi'i cyflwyno’r cyffredinol) sydd yn cael ei ddefnyddio o'r server WordPress eich.
- Gwefan sydd yn cyflwyno mewn CyberPanel sydd yn rhoi'r rheol gyfrifol (network root) eich WordPress. Mae'r cyfathrebu'n cytuno hostiau virtual newydd i'r server hwnnw.
- Cyffredin API CyberPanel wedi'i chynllunio (enabled). Mae'r cyfathrebu yn defnyddio eich genedigau admin a gyfrifol CyberPanel.
- Rhaid i'ch drafod DNS ar gyfer domenaau ddarlangwyd fod wedi'i cyflwyno i'r adran IP'r server eich cyn y gallai auto-SSL chynllunio certyf.

## Mae'r Prifysgolion yn Cyffredinol (Requirements)

Rhaid i'r cyfresau canlynol fod wedi'u cyflwyno mewn ffeil `wp-config.php` eich:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Mae'n cael ei ddefnyddio/talybo hefyd:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Deifalt: true — cyflwch Let's Encrypt SSL ar ôl y gystadleuaeth
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Deifalt: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Defnyddir i gysylltiad â certfeydd SSL
```

## Cynlluniau Rheoliadau (Setup Instructions)

### 1. Gwellydd y API CyberPanel

1. Log in i'r dashboard CyberPanel eich bod fel admin.
2. Ymddangos i **Security** > **SSL** a sicrhau bod SSL ar gael ar ffurf CyberPanel ei hun (mae angen i'r cyflymion API diogel).
3. Mae'r API CyberPanel ar gael ar `https://your-server-ip:8090/api/` yn ddefnyddiol fel deifalt. Nid oes angen adegau ychwanegol i'i chynllunio — mae'n ar gael fel deifalt ar gyfer defnyddwyr admin.

### 2. Refynion Cynlluniau (Constants) i wp-config.php

Cynllunwch y cyflwyniadau canlynol i eich fyllyn `wp-config.php` cyn y llinell `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

I'r cyflwyniadau auto-SSL (arallwch yn cael ei roi):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Cynllunio'r Cyfathrebu (Enable the Integration)

1. Yn eich admin ystafell WordPress, ymddangos i **Ultimate Multisite** > **Settings**.
2. Ymddangos i'r tab **Domain Mapping**.
3. Slai i bennaf i **Host Integrations**.
4. Cynllunwch y cyfathrebu **CyberPanel**.
5. Clic ar **Save Changes**.

### 4. Gyflwyno'r Cyfyngiad (Verify Connectivity)

Defnyddiwch y gwylio cynnyrch a chynllunwyd yn yr adeiladu:

1. Ymddwch i **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Clic ar **Test Connection**.
3. Mae mesgarwch cyfathogh yn cywir bod y plugin yn gallu cyrraedd y API CyberPanel a chyfathogh yn dda.

## Sut mae hyn yn gweithio

### Domain Mapping (Mapiad Ddwyllt)

Pan cael ddwyllt yn cael ei mappio mewn Ultimate Multisite:

1. Mae'r cyfathiad yn anfon cyfle `POST` i `/api/createWebsite` ar eich host CyberPanel.
2. Creu'r CyberPanel host new virtual host ar gyfer y ddwyllt o ddefnyddio wedi'i setio.
3. Mae'r rheol ddogfen (document root) yn cael ei setio i gwneud cyfeiriad i'r rheol cyd-gynllun WordPress eich network.
4. Pan cael y mappiad ddwyllt wedi'i taro, mae'r cyfathiad yn galw `/api/deleteWebsite` i glânio'r virtual host.

### Auto-SSL (SSL Awtor)

Pan fod `WU_CYBERPANEL_AUTO_SSL` yn `true`:

1. Ar ôl creu'r virtual host, mae'r cyfathiad yn galw `/api/issueSSL` ar gyfer y ddwyllt.
2. Mae'r CyberPanel yn gofyn am cert Let's Encrypt gan ddefnyddio'r ACME HTTP-01 challenge.
3. Mae'r cert yn cael ei atalio'n awtor gan CyberPanel قبل y cyflawni.

> **Mae hyn yn hanfodol:** Rhaid i'r DNS fod wedi'i gyfathogh yn llwyr i'r adran IP eich server قبل gall Let's Encrypt gwneud y ddwyllt yn ddefnyddio. Os bod y cyflawni SSL yn failio yn gyflym ar ôl y mappiad, gwneud rhywun am gyfathodiad DNS a reiddi'r SSL eto o'r dashboard CyberPanel o hyd i **SSL** > **Manage SSL**.

### www Subdomain (Subdomain www)

Os oes **Auto-create www subdomain** yn cael ei gael yn y seteffau Domain Mapping eich, mae'r cyfathiad hefyd yn creu alias virtual host ar gyfer `www.<ddwyllt>` ac, pan fydd Auto-SSL yn cael ei gael, mae'n cyflawni cert sy'n gwriadu both y variant apex a www.

### Email Forwarders (Cyflawni E-bost)

Panwr y [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon yn gweithio, gallai CyberPanel hefyd rhoi amrywiol cyfathrebu'r cleientau. Mae forwarders yn rheoli messageoedd o adran domaint i bstafell arall heb creu mailbox llawn, sydd yn ddefnyddiol ar gyfer aliasau fel `info@customer-domain.test` neu `support@customer-domain.test`.

Ar ôl ychwanegu forwarders ar gyfer cleientau:

1. Cynnal y cyfathregau CyberPanel uchod a fod y gwylio cyfathrebu'r cyswllt yn ddefnyddiol.
2. Wneud y cyfathregwr email CyberPanel yn gweithio mewn setynau y Addon Emails.
3. Cynnal bod y adran domaint cleient yn cael ei gyflwyno mewn CyberPanel cyn creu'r forwarder.
4. Creu forwarder test a anfon messageu trwy'r cyfathregwr hyn قبل i rhoi'r ffeithrin ar y planau proddection.

Os mae creu forwarder yn failio, gweld y logau gweithredol Ultimate Multisite yn gyntaf, yna cynnal mewn CyberPanel bod y adran source yn cael ei gyflwyno ac fod y user API gyda chyfathregiadau rheoli email.

## Cyfeiriad Cysylltiadau

| Constant | Mae angen | Deifydol | Disgrifiad |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Yedd | — | URL llawn i'ch cyfathreg CyberPanel gan gynnwys port, fel `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Yedd | — | Username admin CyberPanel |
| `WU_CYBERPANEL_PASSWORD` | Yedd | — | Cyfathregiad admin CyberPanel |
| `WU_CYBERPANEL_PACKAGE` | Yedd | `Default` | Package hosting CyberPanel i ddarganfu ar gyfer hostau virtual newydd |
| `WU_CYBERPANEL_AUTO_SSL` | Nid | `true` | Cyflwyno certell SSL Let's Encrypt ar ôl creu adran domaint |
| `WU_CYBERPANEL_PHP_VERSION` | Nid | `PHP 8.2` | Versi PHP ar gyfer hostau virtual newydd (rhaid ei ddatblygu gyda versio aros yn CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nid | — | Cyfathreg email i ddefnyddio ar gyfer cyflwyno certell SSL |

## Notedion Importantiol

Mae'r API o CyberPanel yn defnyddio gael token ar adeiladau sesiwn (session-based token authentication). Mae’r cyfathrebu'r yn gwneud y cyfathrebu'r token yn awtomatig ar bwrpas API.

Rhaid i'ch cyfrifol CyberPanel admin gael permisiwnau i creu a ddifynion weboedd (websites).

Mae CyberPanel yn rhedeg ar port `8090` yn defnyddiol. Os oes eich server yn defnyddio firewall, sicrhewch bod y port hwn yn cael ei cyffredinol o'r server application WordPress.

Mae'r cyfathrebu'r yn gwneud y cyfeiriadau DNS yn ddefnyddiol. Rhaid i chi ddangos y domain DNS i'r adran IP o'ch server قبل y mapi'r domain mewn Ultimate Multisite.

Os ydych chi'n defnyddio OpenLiteSpeed (OLS), mae rhwystr newidiad (graceful restart) yn cael ei gweithredu'n awtomatig ar ôl newidiadau virtual host. Nid oes angen i chi wneud unrhyw fwytyrion manwl.

## Cynllunio Problemau (Troubleshooting)

### Mae Cyfathrebu API wedi'i Gofio (API Connection Refused)

- Sicrhewch bod port `8090` agored yn y firewall o'ch server.
- Cyflwynwch y gael `WU_CYBERPANEL_HOST` yn cynnwys y protocol cywir (`https://`) a'r port.
- Gwylio bod eich cert SSL CyberPanel yn gywir; gall certau sydd wedi'u cyfathriadu eu hunain (self-signed certificates) ei fod yn achosi pethau TLS verification. Rhowch `WU_CYBERPANEL_VERIFY_SSL` i `false` dim ond mewn adeiladau cyd-gynllunion (private network environments) sydd wedi'u chred.

### Errau Cyfathrebu (Authentication Errors)

- Cyflwynwch eich `WU_CYBERPANEL_USERNAME` a `WU_CYBERPANEL_PASSWORD` yn wir yn cyflwyno i CyberPanel yn uniongyrchol.
- Mae CyberPanel yn cael ei gysylltu ar gyfer account ar ôl ymdrechion cyffredinol o ddefnyddio (repeated failed login attempts). Gwylio **Security** > **Brute Force Monitor** mewn CyberPanel os oes anghyfrifau wedi'u clywed.

### Nid cael Domain wedi'i Creu (Domain Not Created)

- Gwylio'r log gweithredig Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) ar gyfer mesgau eror API.
- Cyflwynwch bod y package a ddefnyddiwyd mewn `WU_CYBERPANEL_PACKAGE` sydd yn cael ei chwarae mewn CyberPanel (**Packages** > **List Packages**).
- Sicrhewch nad yw'r domain wedi'i cyfeiriadu fel weboedd mewn CyberPanel — mae creu weboedd ddublygol yn dod â mesg eror.

### Nid cael Cert SSL wedi'i Cyflwyno (SSL Certificate Not Issued)

- Cynnal y DNS wedi cael ei gyflwyno'n llawn: Rhaid i `dig +short your-domain.com` dod â'r IP o'ch server yn cyflwyno.
- Mae Let's Encrypt yn gael hanesau cyflawniad (rate limits). Os ydych chi wedi cyflwyno nifer o certifigau am ystodol un arall yn rhy ddi, gwneudwch ffurf ar ôl قبل i ddechrau eto.
- Gwellydd'r log SSL CyberPanel o dan **Logs** > **Error Logs** i gael mwy o gyflwyniadau am ddefnyddio certifigau.
- Fel ddefnyddiol, gallwch chi cyflwyno SSL yn manwl o CyberPanel: **SSL** > **Manage SSL** > wybynolwch y stodol > **Issue SSL**.

## Cyfeiriadau

- Document API CyberPanel: https://docs.cyberpanel.net/docs/category/api
- Cynllunio SSL CyberPanel: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Hanesau cyflawniad Let's Encrypt: https://letsencrypt.org/docs/rate-limits/
