---
title: Samþætting CyberPanel
sidebar_position: 21
_i18n_hash: d0607874b556c583dac2aaa33ba1dc1d
---
# CyberPanel Samningur

Þessi leiðferð útskýrir hvernig þú getur sett upp samningu milli Ultimate Multisite og CyberPanel svo að mappaðir domænar í nýtingu þín séu sjálfvirkt viðbúa (og fjarlægja) sem virtual hosts í CyberPanel, með valfræð heimildar fyrir auto-SSL með Let's Encrypt.

## Hvað þetta gerir

- Þegar domén er mappað í Ultimate Multisite, hugin kallar CyberPanel API til að skapa einn virtual host fyrir þennan domén.
- Þegar mappaður domén fjarlægist, kallar samningur API til að fjarlægja samsvarandi virtual host.
- Þegar auto-SSL er á, hugin fangar út sertifíki Let's Encrypt strax eftir að virtual hostin hefur verið sköpt.
- Valfræðarlega viðbúið/fjarlaga `www.` alias eins og þú setur í innstillingum Domæna mappa (Domain Mapping settings) undir "Auto-create www subdomain".

## Skilyrði fyrir framkvæmd

- Virkjan CyberPanel v1.3 eða nýri (v2.3 eða hærra) sem er aðgengileg frá WordPress server þinni.
- Eitt núverandi netvími í CyberPanel sem þjónar jákvæðan grunninn fyrir WordPress net þínu. Samningur viðbúir nýjar virtual hosts að þessum serveri.
- Aðgang til CyberPanel API er á lausnu. Aukferðin notar admin notkunana og lykilhefni CyberPanel þín.
- Þín DNS skráir fyrir mappaðar domænar verða að stendja við IP heimsérfið þitt áður en auto-SSL getur fanga út rétt sertifíki.

## Skilyrði

Fylgjaðar konstantum verða þau að skilja í skrá `wp-config.php` þinni:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'your_admin_username');
define('WU_CYBERPANEL_PASSWORD', 'your_admin_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Valfræðarlega geturð einnig skilgreina:

```php
define('WU_CYBERPANEL_AUTO_SSL', true);          // Skilyndur: sannarlega — skila Let's Encrypt SSL eftir domænsbyggingu
define('WU_CYBERPANEL_PHP_VERSION', 'PHP 8.2');  // Skilyndur: PHP 8.2
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com'); // Notkun fyrir tengil við SSL-sertifiki

## Uppsetningstendur

### 1. Aktiva CyberPanel API

1. Logga inn í CyberPanel dashboard þinn sem administrator.
2. Gangi yfir í **Security** > **SSL** og staðfesti að SSL sé aktíva á sjálfan CyberPanel myndinni (nødvendig fyrir öruggar API-kallar).
3. CyberPanel API er til aðgengi á `https://your-server-ip:8090/api/` með default. Engin viðbótstendur eru nauðsynlegar til aktíva þess — það er aktíva fyrir administratora af raunni.

### 2. Búa upp staðfestingar í wp-config.php

Búa upp eftirfarandi staðfestingar í lausnu `wp-config.php` innan fyrir linuna `/* That's all, stop editing! */`:

```php
define('WU_CYBERPANEL_HOST', 'https://your-cyberpanel-host:8090');
define('WU_CYBERPANEL_USERNAME', 'admin');
define('WU_CYBERPANEL_PASSWORD', 'your_secure_password');
define('WU_CYBERPANEL_PACKAGE', 'Default');
```

Til aktíva auto-SSL (skilyrð):

```php
define('WU_CYBERPANEL_AUTO_SSL', true);
define('WU_CYBERPANEL_EMAIL', 'admin@yourdomain.com');
```

### 3. Aktiva tengingu

1. Í netverslunum þínum WordPress, gangi yfir í **Ultimate Multisite** > **Settings**.
2. Gangi yfir í tabinn **Domain Mapping**.
3. Skoli niður til **Host Integrations**.
4. Aktiva **CyberPanel** tengingu.
5. Klikka á **Save Changes**.

### 4. Staðfesti tengingu

Noti innbyggð tengingstest í uppsetninga-wizardi:
```

1. Gangi **Ultimate Multisite** > **Settings** > **Domain Mapping** > **Host Integrations** > **CyberPanel**.
2. Klikk á **Test Connection**.
3. Ánraránni staðfestingstexturinn staðfestir, að plugin geti ná til CyberPanel API og innriðast á rétt.

## Hvernig það virkar

### Domain Mapping (Heimnana mappa)

Þegar heimur er mappa í Ultimate Multisite:

1. Samningurinn sendir `POST` skiptingu til `/api/createWebsite` á CyberPanel host þínum.
2. CyberPanel skapar nýja virtual host fyrir heimann undir settum pakka.
3. Document rootin er sett til að benda til grunnstæðar répertoire WordPress netinu þíns.
4. Þegar heimnana mappa fjernist, kallar samningurinn `/api/deleteWebsite` til að hreinsa virtual host-ann.

### Auto-SSL (Sjálfsvirki SSL)

Þegar `WU_CYBERPANEL_AUTO_SSL` er sett á `true`:

1. Í eftir því sem virtual hosturinn er skapaður, kallar samningurinn `/api/issueSSL` til heimans.
2. CyberPanel byrjar að spyrja Let's Encrypt um sertifikt með ACME HTTP-01 útsýn.
3. Sertifiktinu er sjálft uppfránað af CyberPanel áður en það laukið er.

> **Mikilvægt:** DNS verður fullyt breitt til IP heimsérfurinnar þínum áður en Let's Encrypt getur staðfest heimanninn. Ef SSL upphafnast ekki strax eftir mappa, væntu á breiðingu DNS-ins og fær aftur upphafnan SSL í CyberPanel dashboard under **SSL** > **Manage SSL**.

### www Subdomain (www undirheimild)

Ef **Auto-create www subdomain** er sett á `enabled` í settum þínum Domain Mapping, skapar samningurinn einnig virtual host alias fyrir `www.<domain>` og, þegar Auto-SSL er á, upphafnar hann sertifikt sem fangar bæði apex og www variantir.

### Email Forwarders (Tölvupóstfyrirsendur)

Þegar [Ultimate Multisite: Emails](../../addons/ultimate-multisite-emails/) addon er aktivt, getur CyberPanel auki veita viðskiptavinum tölvupóstsforgengli. Forgengarir leiða texta frá vörðuðu vönd um aðra innbokk án þess að skapa fullan innbokk, sem er htag fyrir alias eins og `info@customer-domain.test` eða `support@customer-domain.test`.

Fyrir að aktíva forgengarir fyrir viðskiptavini:

1. Staðfesti að yfirburðarnar CyberPanel ofnunarar eru settar upp og að tengingstestin sé lausn.
2. Aktiva CyberPanel textaþjónustu í innstillingum Addoninn Emails.
3. Staðfestu að viðskiptavindadómurinn sé ekki eingöngu til staðar í CyberPanel fyrir því að skapa forgengann.
4. Skapa testforgengann og sendi texta með þessum fyrir þáttinn á produkteplans.

Ef skapning forgengans missætir, skoða fyrst aktivitetarnátta Ultimate Multisite síðan staðfesti í CyberPanel að vörðuður dómur sé til staðar og að API-notkunarmannur hafi textaþjónustuþáttinn.

## Staðfesting
| Constant | Nauðsynleg | Standardverdi | Áskrift |
|---|---|---|---|
| `WU_CYBERPANEL_HOST` | Ja | — | Full URL til CyberPanel ofnunarann þinn með port, t.d. `https://cp.example.com:8090` |
| `WU_CYBERPANEL_USERNAME` | Ja | — | Notkunarnafn CyberPanel stjórnans |
| `WU_CYBERPANEL_PASSWORD` | Ja | — | Notkunarnafn CyberPanel stjórnans |
| `WU_CYBERPANEL_PACKAGE` | Ja | `Default` | CyberPanel hostaþjónustuþáttur sem er mælidir við nýja vörðuðar staðir |
| `WU_CYBERPANEL_AUTO_SSL` | Nei | `true` | Skapa Let's Encrypt SSL sertifikat eftir skapning dómursins |
| `WU_CYBERPANEL_PHP_VERSION` | Nei | `PHP 8.2` | PHP-versjun fyrir nýja vörðuðar staðir (verður að passa við versjuna sem er sett upp í CyberPanel) |
| `WU_CYBERPANEL_EMAIL` | Nei | — | Textaþjónustu e-mail til skráningar sertifikatsins |

## Mikilvægar athugasemdir

Notkunur API CyberPanel notar á session-based token authentication. Samningurinn huleur á að fá token á hverjum API call.
Skal þitt CyberPanel admin reikning hafa réttindi til að skapa og sýna úr vefsíðum (websites).
CyberPanel körrstar á fjöldanum `8090` með default settum. Ef vinnuverkið þitt notar firewall, skal þú tryggja að þessi port sé aðgengileg frá WordPress application server.
Samningurinn stýrir ekki DNS-skjaldi. Þú verður að stilla domain DNS á IP-heiti vinnuverksins þegar þú ert að mappa domain í Ultimate Multisite.
Ef þú notar OpenLiteSpeed (OLS), er mjúgasta uppstartur (graceful restart) hlutinn á meðan virtual hostum breytist sjálf. Engin mannvirkni er nauðsynleg.

## Aðgerðarstefna (Troubleshooting)

### API tenging er negtin
- Staðfesti að porturinn `8090` sé opinn í firewall vinnuverksins þíns.
- Staðfest að gildi `WU_CYBERPANEL_HOST` skili rétt protokoll (`https://`) og port.
- Staðfest að CyberPanel SSL sertifiki þitt sé viðeigandi; sjálfsvætt sertifiki geta orsaka TLS verification feilum. Set `WU_CYBERPANEL_VERIFY_SSL` á `false` aðeins í tryggjum persónulegum netum.

### Feil á samningun
- Staðfest að `WU_CYBERPANEL_USERNAME` og `WU_CYBERPANEL_PASSWORD` séu rétt með því að logga inn beint í CyberPanel.
- CyberPanel loka reikningana eftir uppspáðar feilinn logina. Staðfesti **Security** > **Brute Force Monitor** í CyberPanel ef lokkunir eru á gangi.

### Domain er ekki skapaður
- Staðfest að aktivitetarlogg Ultimate Multisite (**Ultimate Multisite** > **Activity Logs**) sé til staðar fyrir feilfelur API.
- Staðfest að pakkið sem er sett í `WU_CYBERPANEL_PACKAGE` sé til staðar í CyberPanel (**Packages** > **List Packages**).
- Tryggja að domain sér ekki þegar skapað vefsíða í CyberPanel — upphaflega skapandi vefsíða gerir feil.

### SSL sertifiki er ekki sett
(Þessi hluti var ekki fylgt texti, því er hann bara omarð fyrir að gefa til vinnuverksins.)

- Staðfestu að DNS er fullt uppfærst: `dig +short your-domain.com` þarf að svara með IP-heiti serverinnar þín.
- Let's Encrypt setur takmarkar á hversu oft þú getur skilað sertifikata. Ef þú hefur nýlega skilað fleiri sertifikata fyrir sama domén, venta áður en þú reynir að skila aftur.
- Skennu CyberPanel SSL logs undir **Logs** > **Error Logs** fyrir upplýsingar um feil við skráning sertifikata.
- Sem nýting (fallback), geturðu skila sertifikata mannvænt í CyberPanel: **SSL** > **Manage SSL** > veldu doméninn > **Issue SSL**.

## Viðmiðingar

- CyberPanel API Documentation: https://docs.cyberpanel.net/docs/category/api
- CyberPanel SSL Management: https://docs.cyberpanel.net/docs/cyberpanel/SSL/manageSSL
- Let's Encrypt Rate Limits: https://letsencrypt.org/docs/rate-limits/
