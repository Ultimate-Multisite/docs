---
title: Níos éascaigh an t-aonach ar an chontail a bheith ag cur chuimhneacht
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Nádhús an Chonraithear na Panel

## Oibríocht {#overview}
Enhance is panel nua agus ceartas a thugann fáil ar athrúcháin agus ar chuid ar chuid rialúcháin hosting. Féachfaidh an chéad seo a bheith ag cur isteach sincontróir domáin agus cur chuimhneachán sertaic SSL go dtí chuid Ultimate Multisite agus Enhance Control Panel.

**Caint aige:** Déan cinnte go bhfuil [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ar fáil chun cur isteach iarrachtaí comhrá agus stiúradh eile.

## Fáilteanna {#features}
- Athrúchán domáin go dtí chuid anseo nuair a bhfaigheann domáin ag cur isteach i Ultimate Multisite
- Cur chuimhneachán sertaic SSL go dtí chuid LetsEncrypt nuair a thabann DNS
- Suíomh subdomain chun na ngrúpaí a bheith ag iarraidh in modhanna subdomain
- Athraí domáin nuair a bhíonn cur isteach i gcurtaí
- Teastáil connadh chun cur chuimhneachán API a chosaint

## Cuidithe {#requirements}

### Cuidithe Sysstêm {#system-requirements}
- Is é an Enhance Control Panel ag cur isteach agus ag cur fáil ar fáil
- Is é WordPress Multisite ag cur isteach ar chur i bhfeidhm nó ag cur connadh leat ar chur annamh
- Apache web server (Tá Apache a chosaint go léir ag Enhance; tá LiteSpeed Enterprise ar fáil ar chuid cur chuimhneachán leat)

### Cur chuimhneacháin API {#api-access}
Is féidir leat ealaíocht administrator ar an Enhance Control Panel chun token API a chur i bhfeidhm.

## Aos do Cuidithe API {#getting-your-api-credentials}

### 1. Déan Token API {#1-create-an-api-token}

1. Is é an Enhance Control Panel ag cur isteach mar administrator
2. Cliog ar **Settings** (Cur chuimhneacháin) i liosta na hiontaí
3. Cur isteach go dtí **Access Tokens** (Token API)
4. Cliog ar **Create Token** (Déan Token)
5. Déan leimeann a chur ar an token (e.g., "Ultimate Multisite Integration")
6. Déan an ról **System Administrator** (Administrator Sysstêm)
7. Do chuid cur chuimhneacháin:
   - Déan go bhfuil sé óiríocht gan athrúchán nuair a bhíonn tú ag iarraidh an token a bheith ar fáil
   - Nó déan cur ieachtar áirithe ar chur chuimhneachán chun cur chuimhneachán a chosaint

8. Cliog ar **Create** (Déan)

Tar é an **Access Token** agus **Organization ID** a bhfaidh tú a shaanachadh tar éifeachtach tar éifeachtach ar aghaidh. **Sábháil iad ghráid go dtí an t-am, toisc go háirítear an token gan aon am.**

### 2. Déan do Organization ID {#2-get-your-organization-id}

Tá an Organization ID ag bheith ag ardán ar an lús Access Tokens, ag cur isteach mewn boks ina chothabhairt "Org ID: {your_id}".

Tá an Organization ID ag bheith mar UUID a bhíonn ag foirme: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Is féidir leat hefyd a fháil ar an Organization ID de oileúch gan:
1. Go dtí an lús **Customers**
2. Cliom ar **Manage customer** chun an oileúch atá ag teachtaireacht agat
3. Glac ar an URL - tá an Organization ID ag bheith mar chárta alphanumeric a bhíonn tar éifeachtach tar éifeachtach de `/customers/`

### 3. Déan do Server ID {#3-get-your-server-id}

Chun fháil ar do Server ID (a bhí ag teachtaireacht ar na rialacha domáina):

1. Iar a chluainn an Enhance Control Panel, ard go dtí **Servers**
2. Cliom ar an server a bhfuil do WordPress installation ag teachtaireacht
3. Beidh an Server ID (foirme UUID) ag bheith beag ar an URL nó ar na stiúirí an server
4. Mar chuid eile, le ghlac le API chun servera a lístigh:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Tá an Server ID ag foirme UUID: `00000000-0000-0000-0000-000000000000`

### 4. Déan do API URL {#4-get-your-api-url}

Is é an API URL atá agat mar an Enhance Control Panel URL le `/api/` a chothabhairt:

```
https://your-enhance-panel.com/api/
```

**Go háirí réidh:** Tá an cur síos `/api/` ag teachtaireacht. Is é astainní commona:
- Uaigh an domáin gan `/api/`
- Uaigh HTTP go cnagm HTTPS (Is gá duit HTTPS chun sprioc a chuidiú)

## Configuration {#configuration}

### Constants ag teachtaireacht {#required-constants}

Add an constants seo go dtí do fáil `wp-config.php`:

// Níos le fáil an t-aonadh (Enhance Control Panel Integration)
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Setup tríd an Chuidir (Setup via Integration Wizard) {#setup-via-integration-wizard}

1. Ag cur in admin WordPress, cur **Ultimate Multisite** > **Settings**
2. Cur na gcur ar an tab **Integrations**
3. Cuimhnigh **Enhance Control Panel Integration** agus cur **Configuration**
4. Beidh an fhuair ag cur chun cinn tú tríd an chur-fháil:
   - **Step 1:** Intreo agus féachaint ar na feoireacht
   - **Step 2:** Cur tú do chuid tástáil API (Token, API URL, Server ID)
   - **Step 3:** Test an cur chuimhneachán
   - **Step 4:** Féachaint agus fáilte

Is féidir leat a bheith ag:
- Le linn an chur-fháil a chuid constantaí i do cur `wp-config.php` a chuiditeoir go hiomlán
- Coptaidh na cur tástála agus cur tú léi manualmente

## Cur Fhinn WordPress (Additional WordPress Configuration) {#additional-wordpress-configuration}

Ar dtús féachaint an cộngracha ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), leat éigin a bheith ag cur fháil ar na cur sonraí seo:

### Cur .htaccess ( .htaccess Configuration) {#htaccess-configuration}

Má tá tú masalah le cur mapáil do domáin:
1. Déan an t-aonadh ar an cur `.htaccess` Enhance original
2. Rinn an cur a shonraithe leis an cur `.htaccess` WordPress Multisite stiúrtha

### Curraí Cookie (Cookie Constants) {#cookie-constants}

Cuimhnigh na cur seo i `wp-config.php` chun cur fháil ar chuid cookie go hiomlán ar na domáin a mapáilte:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Conas Tá Éiteann (How It Works) {#how-it-works}

### Nuair Bhíonn Domán Mapála (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Tá an chuidiúch ag mapáil domáin custom i Ultimate Multisite (nó caithfidh tú site nua a bheith ag fáil ar subdomain mode)
2. An curtiúint airdfhaonaigh POST go API Enhance: `/servers/{server_id}/domains`
3. Tá Enhance ag iarraidh domáin a chuidiú ar an curteoir server atá agat
4. Nuair a bhfaigheann DNS ar do server, tá Enhance ag fháil SSL certificate go mbealach LetsEncrypt
5. Bếtfaidh an domán beag le HTTPS

### Nuair a Bhíonn Domán Ag Bhailte (When a Domain is Removed) {#when-a-domain-is-removed}

1. Baileann cur chuig an mapáil domáin i Ultimate Multisite
2. Beidh an curtiúint ag iarraidh Enhance a fháil an ID domáin
3. Bheann cur isteach DELETE ar: `/servers/{server_id}/domains/{domain_id}`
4. Baileann Enhance an domán ó chuidiú server atá agat

### Chéadtaí DNS agus SSL (DNS and SSL Checking) {#dns-and-ssl-checking}

Tá chéadtaí DNS agus SSL ag cur chuig Ultimate Multisite:
- Is féidir leat a chur in áit an t-amach ar an chéadtaí i **Domain Mapping Settings** (default: 300 second/5 faim)
- Beidh an comhthéacs DNS ag iarraidh a bheith go bhfuil an domán beag mar activ.
- Baileann an t-aontú SSL go hiomlán, mar ábharfháil SSL manual níl ag cur chuig

## Aistriú an Setup (Verifying Setup) {#verifying-setup}

### Test an Cónaí (Test the Connection) {#test-the-connection}

1. Iarainn i Bhrointí an Curtiúint (Integration Wizard), usaí an **Test Connection**
2. Baillfidh an plugin ag iarraidh a líst domáin ar do server
3. Beidh meán a chur in iúl:
   - Tá curteoir API ceart
   - Is féidir an URL API a bheith ag fáil
   - Tá ID Server ceart
   - Tá breiseanna ceart cur chuig

### Tar éis an Mapáil Domáin (After Mapping a Domain) {#after-mapping-a-domain}

1. Mapáil domán test i Ultimate Multisite
2. Chéadtais log Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Beidh an domán ag fháil i Enhance Control Panel:
   - Déan cur isteach ar **Servers** > **Your Server** > **Domains**
   - Baillfidh an domán nua ag cur isteach i liosta
4. Nuair a bhfaigheann DNS, chéadtais SSL beag le HTTPS ag fháil go hiomlán

## Treoicíocht (Troubleshooting) {#troubleshooting}

### Problemaíocht Connáisteanna API (API Connection Issues) {#api-connection-issues}

**Earráid: "Failed to connect to Enhance API"**
- Déan cinnte go bhfuil `WU_ENHANCE_API_URL` ag cur `/api/` ar an deithí.
- Déan cinnte go bhfuil tú ag úsáid HTTPS, ní HTTP.
- Déan cinnte go bhfuil an panel Enhance ar fáil ó chuid server WordPress.
- Déan cinnte go bhfuil aon réimse (firewall rules) ag blocadh an connadh.

**Earráid: "Enhance API Token not found"**
- Déan cinnte go bhfuil `WU_ENHANCE_API_TOKEN` deiridh i `wp-config.php`.
- Déan cinnte go bhfuil an token ó theastaú mar bhfáthó nó tapa in Enhance.
- Déan cinnte go bhfuil aon gortó (typos) ag an chuid táirge ar an token.

**Earráid: "Server ID is not configured"**
- Déan cinnte go bhfuil `WU_ENHANCE_SERVER_ID` deiridh i `wp-config.php`.
- Déan cinnte go bhfuil an Server ID ag cur fáil ar fómá UUID.
- Déan cinnte go bhfuil an server ag teacht i bhfinn Enhance.

### Níl an Domhan Ag Brú (Domain Not Added) {#domain-not-added}

**Chonfadh an logaí:**
1. Déan cur **Ultimate Multisite** > **Logs**.
2. Filtrigh ar **integration-enhance**.
3. Léigh ar chuid meán a bhíonn ag cur isteach inní an tarráid.

**Céad sinte:**
- Fómá domhan an-dathúil (Invalid domain name format).
- Tá an domhan déanaithe mar chuid Enhance.
- Foirmeanna API níl tú ag cur isteach (déan cinnte go bhfuil an token le ról System Administrator).
- Níl an Server ID a bhíonn ag cur fáil ar an server réel i Enhance.

### Problemaíocht Certat SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**Níl an SSL ag cur isteach:**
- Déan cinnte go bhfuil DNS ag cur fáil ar an chuid IP de do chuid server.
- Déan cinnte go bhfuil an domhan ag cur fáil go héifeachtach: `nslookup yourdomain.com`.
- Is féidir le Enhance a bheith ag cur isteach SSL tar éifeachtach tar éifeachtach nach bhfuil DNS ag cur fáil primaois.
- Tá an cur isteach SSL tílgochtaí 5-10 minuta tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar éifeachtach tar

Má táiméad an domáin nó curtaina SSL a bheith go leat go léir:
1. Róg go **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Déan ar an t-aisce **DNS Check Interval**
3. Athrúch isteach ó chuid deiridh 300 second chun cur chuig chuid chuid leathanach (mínte: 10 second)
4. **Note:** Leathanach lúthacha cur chuig cur chuig leathanach níos mó ach cur chuig leathanach ar an chéad t-am

### Tráidí Athbhreithniú (Authentication Errors) {#dns-check-interval}

**Tráidí HTTP 401/403:**
- Athrúch an token API duit i Enhance
- Déan ar an t-aisce go bhfuil an token ag rôl **System Administrator**
- Chnail an token a bheith ag cur chuig
- Déan cinnte go bhfuil an ID Urbocht (Organization ID) cuimhneachán cuaimseartha (mar sin níl é seo deacair ag cur chuig i URL)

### Analís Log {#authentication-errors}

Féach ar log leathanach:
```php
// Atháir i wp-config.php chun cur chuig léamh níos fearr
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Ansin déan ar na log ag:
- Log Ultimate Multisite: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Log panel Enhance: Ar fáil i an chuid admin de Enhance

## API Reference {#log-analysis}

### Tráidí Athbhreithniú (Authentication) {#api-reference}
Ní bhfháil aon cheist API a bheith ag cur chuig Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints a Bhíonn Ag Uirlis {#authentication}

**Lista Servers:**
```
GET /servers
```

**Lista Domains ar Server:**
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

### Documentation API Lúthacha {#common-endpoints-used}
Documentation API leat: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#full-api-documentation}

### Sécurité {#best-practices}
- **Níos éirí an API tokens i version control**
- Stoir tokenacha i `wp-config.php` a bhfá freagúil ó Git
- Use tokenacha le breiseanna fhéadreacha (System Administrator do chuid isteach go léir)
- Set dateanna deiridh tokenacha chun ardánacha a bheith ar fáil
- Roinite tokenacha go dtí an t-am

### Foirmeacht {#security}
- Use the default DNS check interval (300 seconds) chun calla API eile a bhaint as
- Monitor resource server Enhance nuair a bheith ar chuid oiriúnach domainacha mór
- Consider staggering domain additions nuair a bhíonn go leimneann domainacha go leimneach ag cur sin
-

### Monitóirí {#performance}
- Check logacha Ultimate Multisite go láidre chun éirí isteach a bheith ar fáil a fheiceáil
- Set up monitoring do chuid isteach domainacha a tháinig go léir
- Verify SSL certificates a bheith ar fáil go ceart
- Keep an eye on captaill server Enhance agus liomada domainacha

## Rúcaí eile {#monitoring}

- **Documentation Official Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **API Documentation Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fora Comhráith Community Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Discussion:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guide Mapping Domainacha Ultimate Multisite:** Déan ar an cur síos "How to Configure Domain Mapping v2"

## Cuimhneacháin {#additional-resources}

Má thug tú éirí a bheith ar fáil:
1. Check the Troubleshooting section above (Check an t-ionacht Troubleshooting seo a bhí)
2. Review the Ultimate Multisite logs (Roinite logacha Ultimate Multisite)
3. Consult the [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contact Enhance support for panel-specific issues (Contact an sproin Enhance do éirí a bheith ar fáil)
5. Create a new discussion with detailed error logs for community assistance (Creoliad nua le logacha éirí ar fáil chun cabhrú comhráith)

## Nótaí {#support}

- Tá an chéad aisiúin seo chun alias domains leat éige; An Enhance curann an SSL go léir go dtí.
- Tá an chéad aisiúin seo iadúil leis na fáilteanna domain agus leis na sitií ar adarbaí (subdomain).
- Is féidir a chur in áit an t-aistriú www subdomain acu ag curtha iarrachtaí ar an t-aistriú domain.
- Tá An Enhance ag súil leis na cúigí Apache (Tá LiteSpeed Enterprise ar fáil go léir).
- Nuair a bhíonn an domain ag iarraidh a bhaint ó Ultimate Multisite, beidh an domain ag cur an t-aistriú i gceart leat, ach ní féidir é a dtalaigh an SSL certificates go léir ina chuid ar fáil agad.
