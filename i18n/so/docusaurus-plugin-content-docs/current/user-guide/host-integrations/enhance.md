---
title: Horumarinta isdhexgalka Control Panel
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Horumarinta Iskaashi-qa Dashboard-ga

## Guud-baadhitaanka {#overview}
Enhance waa dashboard casri oo bixiya awoodda sare ee automation iyo maamulka hosting-ka. Waxay inta badan u oggolaanaysaa isku xirnaansho toos ah oo domain-yada iyo SSL certificate-ka ka dhexeeya Ultimate Multisite iyo Enhance Control Panel.

**Wada hadalka la xiriira:** Arag [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) si aad u hesho talooyinka bulshada iyo macluumaadka dheeraadka ah.

## Wax-soo-saarno {#features}
- Isku xirnaansho toos ah oo domain-yada ka dhaca marka domain-yada la qabto Ultimate Multisite-ka.
- Bixinta SSL certificate-ka si toos ah iyadoo la isticmaalayo LetsEncrypt marka DNS-ku soo baxdo (resolves).
- Taageerada subdomain-ka oo loogu talagalay shabakadaha ku shaqeeya mode-ka subdomain.
- Ka saarista domain-ka marka la fuliyo caddeynta qabashada (mappings) la saxay.
- Hubinta xiriirka si loo ogaado macluumaadka API-da.

## Shuruudaha {#requirements}

### Shuruudaha Nidaamka {#system-requirements}
- Enhance Control Panel oo lagu soo dejiyay oo la heli karo.
- Install-ka WordPress Multisite ee la hosting-gareeyay ama la xiriiray server-ka Enhance.
- Apache web server (Enhance hadda taageersan yahay qaababka Apache; LiteSpeed Enterprise waxaa laga heli karaa qiimo yar).

### Faa'iidada API-da {#api-access}
Waa inaad haysataa fursad maamul ah oo ku ah Enhance Control Panel si aad u samayso API tokens.

## Helita Macluumaadka API-gaaga {#getting-your-api-credentials}

### 1. Samee API Token {#1-create-an-api-token}

1. Gel (Log in) Enhance Control Panel-kaaga adiga oo ah administrator.
2. Guji **Settings** ee menu-ga agabka (navigation menu).
3. Tag **Access Tokens**.
4. Guji **Create Token**.
5. Sii magac sharrax ah token-ka (tusaale: "Ultimate Multisite Integration").
6. U siiso doorashada **System Administrator** (Maamulaha Nidaamka).
7. Ku saabsan taariikhda dhacdo (expiry date):
   - Haddii aad rabto in token-ku weligood u dhammaado, heshiis weyn (Leave empty) oo ku qor.
   - Ama dejiso taariikh gaar ah oo la xiriira amniga.
8. Guji **Create**.

Ka dibadda, markaad samayso, **Access Token** iyo **Organization ID** ayaa la soo bandhigi doonaa. **Si degdeg ah u kaydi kuwa**, sababtoo ah token-ka kaliya wuxuu mar walba muujinayaa.

### 2. Hel Organization ID-gaaga {#2-get-your-organization-id}

Organization ID-gu wuxuu si muuqaal ah oo loo soo bandhigo bogga Access Tokens ee sanduuq macluumaad ah oo lagu tilmaamo "Org ID: {your_id}".

Organization ID-gu wuxuu qaab UUID ah yahay sida: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Waxaad sidoo kale heli kartaa Organization ID-ga macaamiisha adiga oo raacaya tillaabadaas:
1. Tag bogga **Customers** (Macaamiisha)
2. Guji **Manage customer** (Maamulka macmiilka) ee macmiilka la xiriira
3. Eeg URL-ka - Organization ID-gu waa ereyada alifbeed iyo nambarka ka dambeeya `/customers/`

### 3. Hel Server ID-gaaga {#3-get-your-server-id}

Si aad u hesho Server ID-gaaga (oo loo baahan yahay hawlaha domain-ka):

1. In Enhance Control Panel, tag **Servers** (Serverada)
2. Guji server-ka halkaas oo WordPress-kaagu ku shaqeeyo
3. Server ID-gu (qaabka UUID) wuxuu si cad u muuqdaa URL-ka ama faahfaahinta server-ka
4. Sida kale, waxaad isticmaali kartaa API-ga si aad u liisto serverada:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID-gu wuxuu qaab UUID ah yahay: `00000000-0000-0000-0000-000000000000`

### 4. Hel API URL-kaaga {#4-get-your-api-url}

API URL-kaagu waa URL-ka Enhance Control Panel-kaaga oo lagu daro `/api/`:

```
https://your-enhance-panel.com/api/
```

**Muhiim:** Waa in la isticmaalaa waddada `/api/`. Khaladkuna caawinaya waxaa ka mid ah:
- Isticmaalka domain-ka kaliya iyadoo aan la isticmaalin `/api/`
- Isticmaalka HTTP halkii HTTPS (HTTPS waa loo baahan yahay amniga)

## Configuration (Isdhexgalka) {#configuration}

### Constants (Xaddidda Muhiimka ah) {#required-constants}

Ku dar xaddidda soo socda faylkaaga `wp-config.php`:

// Horumarinta Isticmaalka Control Panel-ka
define('WU_ENHANCE_API_TOKEN', 'token-ga-agaaga-halkan');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'uuid-ka-server-ga-agaaga-halkan');

### Sida Loo Diiwaangelinta Wizard-ka (Wizard Setup) {#setup-via-integration-wizard}

1. Admin-ka WordPress-ka ku socda, u tag **Ultimate Multisite** > **Settings**.
2. Tag tab-ka **Integrations** (Isdiiwaangelinta).
3. Raadi **Enhance Control Panel Integration** oo guji **Configuration** (Diiwaangelinta).
4. Wizard-ku wuxuu ku hagayaa sida loo dhisayo:
   - **Step 1:** Hordhac iyo soo bandhigidda astaamaha (feature overview)
   - **Step 2:** Ku qor macluumaadka API-gaaga (Token, API URL, Server ID)
   - **Step 3:** Hubi xiriirka (Test the connection)
   - **Step 4:** Dib u eeg oo fur (Review and activate)

Waxaad dooran kartaa inaad:
- Wizard-ka si toos ah ugu darsato constants-kaaga faylka `wp-config.php`
- Ku nuquldo qoraalka constants-kaaga oo si gacanta loogu darsado (manually add)

## Diiwaangelinta WordPress-ka Kale ee Muhiimka Ah {#additional-wordpress-configuration}

Isagoo la saldhigaya fikradaha bulshada ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), waxaa laga yaabaa inaad u baahan tahay inaad hagaajiso qorsheoyinka kale ee soo socda:

### Diiwaangelinta .htaccess {#htaccess-configuration}

Haddii aad la kulanto dhibaatooyin ku saabsan habka domain-ka loo xiriro (domain mapping):
1. Faylka Enhance `.htaccess` ee asalka ah ka saar.
2. Ka beddel faylka standard-ka WordPress Multisite `.htaccess`.

### Constants-ka Cookie-ga {#cookie-constants}

Ku dar constants-kan `wp-config.php`-ka si loo hubiyo in cookie-yada si sax ah loo maamulo dhammaan domain-yada la xiriira (mapped domains):

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Sida Loo Shaqeeyo {#how-it-works}

### Marka Domain La Xiriro (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Istic uu mapaynta domain gaar ah Ultimate Multisite (ama website cusub oo la abuuro mode subdomain)
2. Isku-dhafka wuxuu u dirayaa POST request API-ga Enhance: `/servers/{server_id}/domains`
3. Enhance wuxuu ku darayaa domain-kaaga qaabka server-kaaga (server configuration)
4. Markaha DNS-ku uu gaaro server-kaaga, Enhance wuxuu si toos ah u soo saarayaa SSL certificate iyada oo loo marayo LetsEncrypt
5. Domain-ku wuxuu noqonayaa mid firfircoon (active) iyadoo la isticmaalayo HTTPS

### Marka Domain La Sahaysto (Removed) {#when-a-domain-is-removed}

1. Mapaynta domain-ka ayaa laga saaraa Ultimate Multisite
2. Isku-dhafka wuxuu u weydiinayaa Enhance si uu u helo ID-ga domain-kaas
3. DELETE request ayaa la dirayaa: `/servers/{server_id}/domains/{domain_id}`
4. Enhance wuxuu ka saarayaa domain-kaaga qaabka server-kaaga

### Hubinta DNS iyo SSL {#dns-and-ssl-checking}

Ultimate Multisite wuxuu leeyahay hubinta DNS iyo SSL oo ku dhex jira (built-in):
- Waxaad dejin kartaa inta uu yahay mudnaanta hubinta **Domain Mapping Settings** (default: 300 seconds/5 daqiiqo)
- Nidaamku wuxuu hubinayaa isbeddelka DNS-ka ka hor inta u qorsheeyo domain-ka inuu noqdo mid firfircoon
- Shidan SSL certificate-kiina ayaa si toos ah loo hubiyaa
- Enhance wuxuu si toos ah u maareeyaa SSL-ka, sidaas darteed ma laha wax loo baahan yahay in la dejiyo SSL-ka gacanta

## Hubinta Dejinta (Verifying Setup) {#verifying-setup}

### Isku day inaad Xiriirka Hubiso (Test the Connection) {#test-the-connection}

1. In Wizard-ka Isku-dhafka (Integration Wizard), isticmaal tallaabada **Test Connection**
2. Plugin-ku wuxuu isku dayayaa inuu liqriyo domain-yada ku jira server-kaaga
3. Fariin guuleystii waxay xaqiijinaysaa:
   - Macluumaadka API (credentials) waa sax
   - URL-ka API-ga la heli karo
   - Server ID-gu wuxuu yahay mid shaqaynaya
   - Ujeeddooyinka (Permissions) si sax ah loo dejiyay

### Marka Domain La Mapaysto (After Mapping a Domain) {#after-mapping-a-domain}

1. Mapayso domain test ah Ultimate Multisite-ka
2. Hubi logs-ka Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Hubi Control Panel-ka Enhance in domain-ka la daray:
   - Tag **Servers** > **Your Server** > **Domains**
   - Domain-ka cusub wuxuu ku soo muuqdaa liiska

Marka DNS-ku uu gaaro, hubi in SSL-ku si toos ah loo saaray

## Wax-dhaafid {#troubleshooting}

### Masalaha Xiriirka API (API Connection Issues) {#api-connection-issues}

**Qodobka qaladka: "Failed to connect to Enhance API"**
- Hubi in `WU_ENHANCE_API_URL` ay ku dhammaatay `/api/`.
- Hubi inaad isticmaalayso HTTPS, ma aha HTTP.
- Hubi in barnaamijka Enhance uu ka heli karo server-ka WordPress-kaaga.
- Hubi inaan wax caawin ah (firewall rules) ku xannibayo xiriirka.

**Qodobka qaladka: "Enhance API Token not found"**
- Hubi in `WU_ENHANCE_API_TOKEN` uu qoran yahay `wp-config.php`.
- Hubi in token-ka laasoo saaray ama uu dhacdo (expire) Enhance-ka.
- Hubi inuu jiro qalad ku qoran qiimaha token-ka.

**Qodobka qaladka: "Server ID is not configured"**
- Hubi in `WU_ENHANCE_SERVER_ID` uu qoran yahay `wp-config.php`.
- Hubi in Server ID uu yahay qaab UUID-ga saxda ah.
- Hubi inaad hubiso in server-kaas jiro barnaamijka Enhance-kaaga.

### Domain-ka Aan La Bixinin (Domain Not Added) {#domain-not-added}

**Hubi logs-ka:**
1. Tag **Ultimate Multisite** > **Logs**.
2. Filter iyadoo la isticmaalayo **integration-enhance**.
3. Raadi fariimo qalad ah oo muujinaysa dhibaatada.

**Sababaha caawina:**
- Qaabka magaca domain-ka aan sax ahayn.
- Domain-ku horeyey jiro Enhance-ka.
- Ujeedo API (API permissions) aysan ku filnayn (hubi in token-ka uu leeyahay doorka System Administrator).
- Server ID-gu ma la mid yahay server-ka dhabta ah ee Enhance-kaaga.

### Masalahaatada Sertifikaanka SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**SSL-ku aan la bixinin:**
- Hubi in DNS uu u socdo IP-ga server-kaaga.
- Hubi in domain-ku si sax ah u soo baxayo: `nslookup yourdomain.com`.
- Enhance waxay u baahan tahay in DNS-ku si sax ah u soo baxdo ka hor inta aanay bixin SSL.
- Bixinta SSL-ka waxay qaadanaysaa 5 ilaa 10 daqiiqo ka dib markii DNS-ku la isku dhafka (propagation).
- Hubi logs-ka Enhance Control Panel-kaaga fariimo qalad ah oo ku saabsan SSL.

**Wax-soo-dhididda SSL-ka gacanta lagu sameeyo Enhance:**
1. Tag **Servers** > **Your Server** > **Domains**.
2. Hel domain-kaaga oo hubi xaaladda SSL-kiisa.
3. Waxaad si gacanta u dhigi kartaa bixinta SSL-ka haddii loo baahdo.

### Xaddidda Saacadaha DNS (DNS Check Interval) {#dns-check-interval}

хaddiisa domain-ka ama SSL certificates-ku soo dejin waqti badan qaadanayo:
1. Tag **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Raadi dejinta **DNS Check Interval**
3. Beddel dejinta ka dib 300 seconds (daqiiqood) oo aad u yar (dhimis ugu dambaysa: 10 ilbiriqsi)

4. **Xusuusin:** Waqtiga kooban ee la beddelo wuxuu macnaa in la hubiyo mar kasta, laakiin wuxuu keenaa in server-ka uu si badan u shaqeeyo (server load).

### Khaladaadka Xaqiijinta (Authentication Errors) {#authentication-errors}

**HTTP 401/403 errors:**
- Token-ka API-gaaga ku soo celiso (Regenerate your API token) Enhance-ka.
- Hubi in token-ka uu leeyahay doorashada **System Administrator**.
- Hubi inuu token-ku aanu dhicin (expired).
- Hubi inaad isticmaalayso Organization ID-ga saxda ah (inkasta oo inta badan ma loo baahna URL-ka).

### Falanqaynta Logs (Log Analysis) {#log-analysis}

Fur logs-ka faahfaahanka leh:
```php
// Ku dar wp-config.php-ka si aad u hagaajisid debugging-ga
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Markaas hubi logs-ka ku:
- Ultimate Multisite logs: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logs: Waxaa laga heli karaa interface-ka admin ee Enhance.

## API Reference (Tixraacda API) {#api-reference}

### Authentication (Xaqiijinta) {#authentication}
Waxaa la isticmaalaa dhammaan codsiyada API-ga token-ka Bearer authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Endpoints Lagu Isticmaalay (Common Endpoints Used) {#common-endpoints-used}

**Liisashada Servers:**
```
GET /servers
```

**Liisashada Domains ee Server-ka:**
```
GET /servers/{server_id}/domains
```

**Ku darid Domain:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Ka saarid Domain:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Tixraacda API-ga oo Dhammaystiran (Full API Documentation) {#full-api-documentation}
Tixraacda API-ga: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices (Hababka Wanaagsan) {#best-practices}

### Amniga (Security) {#security}
- **Marnaha API tokens-ka haad-geliye Git-ga ku dhex galin**
- Tokens-ka `wp-config.php` gudahaa kayso, kaas oo laga saari lahaa Git-ga
- Isticmaal tokens-ka leh u hoggaansana (System Administrator si loo helo isdhaafidda buuxda)
- Sameeyso taariikhda dhacdooyinka tokens-ka ee deegaanka wax soo saarka ah (production environments)
- Si joogto ah dib u beddel tokens-ka

### Waxqabadka (Performance) {#performance}
- Isticmaal inta badan la isku dayay in la hubiyo DNS-ga (300 ilbiriqsi) si aan u yaraa wicitaan API-yada badan
- La daawasho kasta oo ku saabsan shaqada serverka Enhance marka la fulinayo hawlo waaweyn oo domain ah
- Ka tago in la isku beddelo dheerka domain-yada haddii la qabto domain badan mar walba

### La Dhaawashada (Monitoring) {#monitoring}
- Si joogto ah u hubi logs-ka Ultimate Multisite ee qaladkii isdhaafka
- Sidoo kale, siiso hab lagu daawado ku dhashay in la dariyo domain-yada cusub
- Hubi in SSL certificates-ku si sax ah u hagaagsan yihiin (provisioning)
- Si joogto ah ula socda awoodda serverka Enhance iyo xaddidda domain-yada

## Warxarrooyinka Kale ee Laguu heli karto {#additional-resources}

- **Warxaraha Rasmiga ee Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Warxaraha API-ga Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fooraha Bulshada (Community Forum) ee Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Wada hadalka GitHub:** [Issue #265 - Talooyin ku saabsan Isdhaafka Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Hoggaanshaha Domain Mapping ee Ultimate Multisite:** Arka bogga wiki-da "Sidee loo hagaajiyo Domain Mapping v2"

## Taageerada (Support) {#support}

Haddii aad la kulanto dhibaatooyin:
1. Hubi qaybta Xallinta Dhibaatooyinka (Troubleshooting) ee sare
2. Dib u eeg logs-ka Ultimate Multisite
3. La tasho [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. La xiriir taageerada Enhance haddii ay jiraan arrimo gaar ah oo ku saabsan panel-ka (dashboard-ka)
5. Samee wada hadal cusub adigaaga ku filan logs-ka qaladka si bulshadu u caawiso

## Qoraallo Gaar Ah (Notes) {#notes}

Waa in la hubiyo inuu isku-dhafkaas kaliya maamulo magacyada domain-ka kale (domain aliases); Enhance wuxuu si toos ah u maareynaya SSL-ka.
Isku-dhafkaasi wuxuu taageera laba shay: isbeddellada magacyada domain-ka gaarka ah iyo meelaha website-yada ku dhaca subdomain-ka.
Waxaad samayn kartaa in abuuraan www subdomain cusub si toos ah oo aad u habaysato settings-ka Domain Mapping.
Enhance hadda wuxuu taageera qaabka Apache (LiteSpeed Enterprise ayaa la heli karaa).
In kasta oo aan la saarin magaca domain-ka Ultimate Multisite, Enhance wuxuu ka saari doonaa domain-ka laga soo saaray Enhance, laakiin waxaa laga yaaba in aan si degdeg ah u nisbo shahaadada SSL-ka la xiriira.
