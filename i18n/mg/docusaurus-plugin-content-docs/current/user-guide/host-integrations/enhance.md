---
title: Fanatsarana ny Fampifandraisana amin'ny Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Fanatsiarahana ny Fampandrosoana ny Control Panel

## Famarahabana (Overview)
Ny Enhance dia control panel maoderina izay manome fahaizana automatique amin'ny hosting sy fitantanana. Ity fampifandraisana ity dia ahafahana mifandray ho azy ny domain sy ny fitantanana ny SSL certificate eo anelanelan'i Ultimate Multisite sy ny Enhance Control Panel.

**Fifanakalozana Mifandraika:** Jereo [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) mba hahazoana torohevitra avy amin'ny vondrom-piara sy fampahalalana fanampiny.

## Toetran'ny Fahaizana (Features)
- Fandefasana domain ho azy rehefa voafidy ny domain ao amin'ny Ultimate Multisite
- Fanomezana SSL certificate ho azy mampiasa LetsEncrypt rehefa mandrefy ny DNS
- Fanohanana subdomain ho an'ireo tambajotra miasa amin'ny fomba subdomain
- Fandefasana domain rehefa esorina ny fifangaroana (mappings)
- Fitsapana fifandraisana mba hanamarinana ny API credentials

## Fepetra Takiana (Requirements)

### Fepetra Ara-pitaovana (System Requirements)
- Control Panel Enhance voaondrana sy azo ampiasaina
- Fandaharana WordPress Multisite izay voafatra eo amin'ny server na mifandray amin'ny server Enhance
- Apache web server (Mampanome fanohanana ny konfigurasionina Apache anefa; misy LiteSpeed Enterprise azo amin'ny vidiny latsaky ny fahaizana)

### Fidirana Amin'ny API (API Access)
Tsy maintsy manana fahazoan-dalana ho administrator ianao ao amin'ny Enhance Control Panel mba hamoronana API tokens.

## Famoronana ny API Credentials Anao

### 1. Mamorona API Token

1. Midira ao amin'ny Enhance Control Panel ho administrator
2. Kiky ny **Settings** eo amin'ny menio fampiharana (navigation menu)
3. Mandroso any amin'ny **Access Tokens**
4. Kiky ny **Create Token**
5. Ampio anarana manazava ny token (ohatra: "Ultimate Multisite Integration")
6. Ampidiro ny anjara toerana hoe **System Administrator**
7. Ho an'ny daty fahaverezana (expiry date):
   - Avelao ho botraka raha te-hataon'ny token tsy hivoaka mihitsy ianao
   - Na mametraha daty fahaverezana manokana ho an'ny fiarovana

8. Kiky ny **Create**

Fanamboana aorian'ny famoronana, dia hasehon'ny anao ny **Access Token** sy ny **Organization ID**. **Ataovy fitehirizina izany avy hatrany** satria ho voalaza tokana ihany ilay token.

### 2. Fandrefesana ny Organization ID

Ny Organization ID dia haseho eo amin'ny pejy Access Tokens ao anaty bokotra fampahalalana manga izay misy soratra hoe "Org ID: {your_id}".

Ny Organization ID dia UUID (Format manokana) toy izao: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Afaka mahita ny Organization ID an'ny mpanjifa ianao amin'ny alalan'ny fomba ireto:
1. Mandehana any amin'ny pejy **Customers** (Mpanjifa)
2. Tsindrio ny **Manage customer** (Fitantanana mpanjifa) ho an'ilay mpanjifa tianao
3. Jereo ny URL - ny Organization ID dia ireo litera sy isa aorian'ny `/customers/`

### 3. Fandrefesana ny Server ID anao

Mba hahitana ny Server ID anao (ilaina amin'ny asa momba ny domain):

1. Ao anatin'ny Enhance Control Panel, mandehana any amin'ny **Servers**
2. Tsindrio ilay server izay misy ny fametrahana WordPress anao
3. Ny Server ID (Format UUID) dia hita ao amin'ny URL na ao amin'ny antsipiriany momba ny server

Na hafa, afaka mampiasa ny API ianao mba handikana ireo server:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Ny Server ID dia manaraka ny format UUID toy izao: `00000000-0000-0000-0000-000000000000`

### 4. Fandrefesana ny API URL anao

Ny API URL anao dia ny URL an'ny Enhance Control Panel anao miaraka amin'ny `/api/`:

```
https://your-enhance-panel.com/api/
```

**Zava-dehibe:** Ilaina ny lalana (`path`) hoe `/api/`. Ny fahadisoana mahazatra dia:
- Fampiasana ny domain fotsiny nefa tsy misy `/api/`
- Fampiasana HTTP fa tsy HTTPS (Ilaina ny HTTPS ho fiarovana)

## Configuration

### Constants Ilaina

Ampidiro ireo constants manaraka ao anatin'ny rakitra `wp-config.php` anao:

```php
// Manatsy ny Fampandrosoana ny Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');
```

### Fanaovana Fanamboarana amin'ny alalan'ny Wizard (Wizard)

1. Ao anaty admin WordPress anao, mandehin'ny **Ultimate Multisite** > **Settings**
2. Mandehin'ny fizarana **Integrations** (Fampifandraisana)
3. Mitadiava ny **Enhance Control Panel Integration** ary tsindrio ny **Configuration** (Fanamboarana)
4. Ny wizard dia hitarika anao amin'ny fanamboarana:
   - **Dingana 1:** Fampahafantarana sy famakafakana ireo fiasa azo atao
   - **Dingana 2:** Ampidiro ny fampahalalana API anao (Token, API URL, Server ID)
   - **Dingana 3:** Andramo ny fifandraisana (Test the connection)
   - **Dingana 4:** Jereo sy ampahafantaro (Review and activate)

Afaka misafidy ianao hoe:
- Avela ho an'ny wizard izy mba hampidirana ireo constants ao amin'ny rakitra `wp-config.php` anao ho azy
- Apetraho ny famaritana ny constant sy ampiana manokana (manokana)

## Fampahafantarana WordPress Fanampiny

Miorina amin'ny fanehoan-kevitry ny vondrom-piarahamonina ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), mety mila manova ireo fepetra fanampiny ireo ianao:

### Fanaovana Configuration .htaccess

Raha misy olana amin'ny fametrahana ny domain (domain mapping) ianao:
1. Esory ny rakitra `.htaccess` an'ny Enhance tamin'ny voalohany
2. Ampidiro azy tamin'ilay rakitra `.htaccess` standard WordPress Multisite

### Constants Cookie

Ampiana ireo constants ireo ao amin'ny `wp-config.php` mba hiantohana ny fitahirizana cookie tsara eo amin'ireo domain mifandray:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Ahoana no Asa (How It Works)

### Rehefa Mipetraka Domain iray (When a Domain is Mapped)

1. Mampiasa mpampiasa ny domain manokana ao amin'ny Ultimate Multisite (na dia namboarina toerana vaovao aza amin'ny fomba subdomain)
2. Ny integration dia mandefa POST request ho an'ny API an'Enhance: `/servers/{server_id}/domains`
3. Ny Enhance dia ampiana ny domain ao amin'ny configuration an'ny server-nao
4. Rehefa mifandray amin'ny server anao ny DNS, ny Enhance dia manamboatra mari-panome SSL ho azy mampiasa LetsEncrypt
5. Ho azo ampiasaina ny domain miaraka amin'ny HTTPS

### Rehefa Esorina Domain iray

1. Esory ny mapping domain ao amin'ny Ultimate Multisite
2. Ny integration dia mangataka amin'ny Enhance mba hahita ny ID an'ilay domain
3. Mandefa DELETE request ho an'izany: `/servers/{server_id}/domains/{domain_id}`
4. Ny Enhance dia manala ilay domain ao amin'ny configuration an'ny server-nao

### Fanamarihana DNS sy SSL

Ny Ultimate Multisite dia ahitana fahaizana manamarina ny DNS sy SSL:
- Afaka mametraka ny fotoana fanamarinana (check interval) ao amin'ny **Domain Mapping Settings** (default: 300 seconds/5 minitra) ianao
- Ny rafitra dia hanamarina ny fandefasana ny DNS alohan'ny hanamarina ho aktiva ny domain iray
- Ny fahazoana mari-panome SSL dia voamarina ho azy
- Ny Enhance no mandray anjara amin'ny fanamboarana SSL, ka tsy mila manao configuration SSL manokana ianao

## Fanamarinana ny Fandrafetana (Verifying Setup)

### Manandrana ny Fifandraisana (Test the Connection)

1. Ao amin'ny Integration Wizard, dia ampiasao ny dingana **Test Connection**
2. Ny plugin dia hanandrana mamintina ireo domain ao amin'ny server anao
3. Fanamarihana fahombiazana dia manamarina izany:
   - Marina ny fampahalalana API (API credentials)
   - azo jerena ny API URL
   - marina ny Server ID
   - voafetra tsara ny zo (Permissions are properly set)

### Aorian'ny Fametrahana Domain

1. Ampidiro domain test iray ao amin'ny Ultimate Multisite
2. Jereo ny logs an'ny Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Fantaro ao amin'ny Enhance Control Panel fa nampiana ilay domain:
   - Mandehana any amin'ny **Servers** > **Your Server** > **Domains**
   - Tokony hiseho ny domain vaovao ao anatin'ilay lisitra
4. Rehefa mandefa ny DNS, dia fantaro fa voamarina ho azy ny fanamboarana SSL

## Fandiana (Troubleshooting)

### Olana Fifandra API Connection Issues

**Fahadiana: "Tsy nahazo ny Enhance API"**
- Jereo raha misy `/api/` eo amin'ny `WU_ENHANCE_API_URL`.
- Ataovy antoka fa mampiasa HTTPS ianao, fa tsy HTTP.
- Jereo raha azo jerena ny panel Enhance avy ao amin'ny server WordPress anao izy.
- Fantaro raha misy fitsipika (firewall rules) manakana ny fifandraisana.

**Fahadiana: "Tsy hita ny Enhace API Token"**
- Ataovy antoka fa voafidy tsara ny `WU_ENHANCE_API_TOKEN` ao amin'ny `wp-config.php`.
- Jereo raha nampidirina na nisy fahaverezana (expired) ilay token tao Enhance.
- Jereo raha misy diso fanoratana (typo) eo amin'ilay token.

**Fahadiana: "Tsy voafidy ny Server ID"**
- Ataovy antoka fa voafidy tsara ny `WU_ENHANCE_SERVER_ID` ao amin'ny `wp-config.php`.
- Ataovy antoka fa endrika UUID (UUID format) marina ilay Server ID.
- Fantaro raha misy io server io ao amin'ny panel Enhance anao.

### Domain Tsy Nampidirina

**Jereo ny logs:**
1. Mandehana any amin' **Ultimate Multisite** > **Logs**.
2. Manaraka (Filter) amin'ny **integration-enhance**.
3. Mitady hafatra fahadisoana mampahafantatra ny olana.

**Antsoina matetika:**
- Endrika anarana domain tsy marina.
- Anarana domain efa misy ao Enhance.
- Alalana API tsy ampy (ataovy antoka fa manana ny toerana System Administrator ilay token).
- Tsy mitovy ny Server ID amin'ilay server tena misy ao amin'ny Enhance.

### Olana momba ny SSL Certificate

**Tsy voafidy ny SSL:**
- Jereo raha mitondra (pointing) ny DNS mankany amin'ny adiresin'ny IP anao ilay domain.
- Fantaro raha mandray tsara ny domain: `nslookup yourdomain.com`.
- Mila DNS mivoaka aloha Enhance vao afaka manome SSL.
- Matetika dia mandritra 5 ka hatramin'ny 10 minitra aorian'ny fivoahan'ny DNS izany ny fanomezana SSL.
- Jereo ny logs ao amin'ny Enhance Control Panel raha misy fahadisoana momba ny SSL manokana.

**Fanamboarana SSL manokana (Manual SSL troubleshooting) ao anaty Enhance:**
1. Mandehana any amin' **Servers** > **Your Server** > **Domains**.
2. Mitady ny domain anao ary jereo ny sata SSL-ny.
3. Afaka manao fanomezana SSL ianao raha ilaina izany.

### Fandrefesana ny fotoana (DNS Check Interval)

Raha toa ka mihoatra ny domain na SSL certificate dia mandany fotoana be amin'ny fanatanterahana azy:
1. Mandehana any amin'ny **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Mitadiava ny fepetra hoe **DNS Check Interval**
3. Ampifanaraho avy amin'ny valin-teny (default) 300 seconds ho tsiny latsaky ny sandan'ny fotoana (minimum: 10 seconds)
4. **Fanamarihana:** Ny fepetra latsaky ny fotoana dia midika fa miova fanamarinana matetika kokoa izany, saingy mety mampitombo ny enta-mavesatra an'ny server izany.

### Fahasamihafana amin'ny Fanamarinana (Authentication Errors)

**HTTP 401/403 errors:**
- Atao indray ny API token ao amin'ny Enhance
- Fantaro fa manana ny toerana **System Administrator** ilay token
- Jereo raha tsy efa tapitra ny fampiasana azy io
- Antsoy mba hahazo ny Organization ID marina (na dia matetika aza tsy voatery eo amin'ny URL)

### Famakafakana ny Logs (Log Analysis)

Ampirisihina ny fametrahana logs antsipiriany:
```php
// Ampidirina ao amin'ny wp-config.php mba hanatsarana ny fanadihadiana
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Avy eo dia jereo ireo logs eto:
- Logs an'ny Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Logs an'ny Enhance panel: azo jerena ao amin'ny interface admin an'ny Enhance

## API Reference (Fanondroana API)

### Fanamarinana (Authentication)
Ny fangatahana API rehetra dia mampiasa fanamarinana Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints Mahazava Ampiasaina (Common Endpoints Used)

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Ampiana Domain Vaovao:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Manapahana Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Fanazavana API Feno (Full API Documentation)
Fanazavana API feno: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Fomba Fiasa Tsara Indrindra (Best Practices)

### Fiarovana (Security)
- **Tsy manome anjara amin'ny version control ny API tokens mihitsy**
- Ity tokens ireny dia tokony atao ao amin'ny `wp-config.php` izay tsy tokony ho ao amin'ny Git
- Ampiasao tokens misy zo (System Administrator ho an'ny fampifandraisana tanteraka)
- Ataovy ny daty fahataperan'ny token ho an'ny tontolo iainana (production environments)
- Atao fanavaozana (rotate) ireo tokens indraindray

### Fahaizana (Performance)
- Ampiasao ny fotoana fandinihana DNS ohatrinona (300 seconds) mba hisorohana ny fampiasana API be loatra
- Araho ny fampahafantarana ny harena an'ny server Enhance rehefa manao asa lehibe amin'ny domain maro
- Hevereso fa azo atao ny fametrahana (staggering) ny domain raha misy domain betsaka no atao indray mandeha avy hatrany

### Fanaraha-maso (Monitoring)
- Jereo tsy tapaka ny logs an'ny Ultimate Multisite mba hahitana ny fahadisoana amin'ny fampifandraisana
- Ataovy fanaraha-maso ny fampidirana domain tsy nahomby
- Fantaro raha mandeha tsara ny SSL certificates
- Araho ny fahaizana an'ny server Enhance sy ny fetran'ny domain

## Loharanon-kevitra Fanampiny (Additional Resources)

- **Dokumentation ofisialy an'Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentation API an'Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum iombonana an'Enhance (Community Forum):** [https://community.enhance.com](https://community.enhance.com)
- **Fandahiana GitHub:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Fehintsorohana Domain Mapping an'ny Ultimate Multisite:** Jereo ny pejy wiki "How to Configure Domain Mapping v2"

## Fanohanana (Support)

Raha misy olana ianao:
1. Jereo ny fizarana Troubleshooting etsy ambony
2. Fantaro ny logs an'ny Ultimate Multisite
3. Manatona ny [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Mifandraisa amin'ny fanohanana an'Enhance raha misy olana momba ny panel manokana
5. Mamorona adidy vaovao miaraka amin'ny logs fahadisoana antsipiriany ho fanampiana avy amin'ny vondrom-piarahamonina

## Fanamarihana (Notes)

- Ity fampifandraisana dia manokatra ny alias anaran-domaine ihany; Ny Enhance no mitantana ny SSL ho azy.
- Manohana ny fampifandraisana anarana domaine manokana sy ireo tranonkala mifototra amin'ny subdomain izy.
- Afaka mametraka ny famoronana subdomain www ho azy ao amin'ny Domain Mapping settings ianao.
- Ny Enhance dia manohana ny konfigurasionina Apache (LiteSpeed Enterprise azo ampiasaina).
- Rehefa apetrakao na apetrakao ny domain avy amin'ny Ultimate Multisite, dia hatao alefa avy amin'ny Enhance ilay domain fa mety tsy ho voaraha-diana avy hatrany ireo sertifika SSL mifandray.
