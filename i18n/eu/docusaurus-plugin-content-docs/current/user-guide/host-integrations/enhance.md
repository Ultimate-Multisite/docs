---
title: Control Panel Integrazioa hobetzea
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Kontrol Panelaren Integrazioa Hobatzea

## Deskuntzua {#overview}
Enhance da modern kontrol panel bat dauden potente hostizazio automatizazio eta administrazio funtunalitatea ematen du. Horrek Ultimate Multisite eta Enhance Control Panel-a gitelako domainerak automatican sinxetzeko eta SSL bidegiturak administrazio egiteko espezialitate ematen du.

**Eskaintza Erdatu:** Komunitatearen lehen osuntzak eta informazio gehiago hartzeko [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) ikusi.

## Funktionalitateak {#features}
- Ultimate Multisite-an domainerak mapatuta dagoenean domainerak automatican sinxetzea
- DNS-ek iradoketa egiten duenean LetsEncrypt bidegiturak automatican ematezea
- Subdomain modu erabiltzen dituen arraketari (networks) suporta
- Mapatutakoak borratzen duenean domaineraren borratzea
- API identifikazioak bideratzea bidez konektibitatea probatzeko

## Erreguntzak {#requirements}

### Sistematiko Erreguntzak {#system-requirements}
- Enhance Control Panel instalatuta eta erabilera dutela
- WordPress Multisite instalazioa Enhance serverra edo Enhance serverra konektatuta dagoela
- Apache web server (Enhance-ak Apache konfiguratura bat suportatzen du; LiteSpeed Enterprise da, jarduera handiagoan erreguntzu gabe prezio txikiagoan dago)

### API Bideratzea {#api-access}
API tokenak sortzeko Enhance Control Panelaren administrazio bideratu behar duzu.

## API Identifikazioak Hondamendua {#getting-your-api-credentials}

### 1. API Token Sortzea {#1-create-an-api-token}

1. Administrazio gisa Enhance Control Panelera logiatu
2. Menu nagusiarean **Settings** (Konfigurazioa) funtzialari klik egin
3. **Access Tokens** (Bideratutako Tokenak) funtzialari aurkitu
4. **Create Token** (Token sortzea) funtzialari klik egin
5. Token-ei emateko deskribapena duen irudi ematu (adibidez, "Ultimate Multisite Integrazioa")
6. **System Administrator** (Sistema Administradura) rolaren asignatu
7. Expirazio datua (expiry date)-ren:
   - Token-ek ez geratu behar dutenean, erreguntzu ez duzu
   - Orain segurtasun bidez egindako datu horretara, egindua datua emateko datua ematu
8. **Create** (Sortzea) funtzialari klik egin

Ukreizatu ondoren, er **Access Token** eta **Organization ID** ematen dira. **Savedzu horiek hemen** gaur du, karena tokena batra aldiz ez da ematen da.

### 2. Hondaritu Idietu (Organization ID) {#2-get-your-organization-id}

Hondaritu Idietua (Organization ID) ematen da Access Tokens eskuratzeko lapurikoan, "Org ID: {your_id}" labelatutako ahalegin informazio box-ean.

Hondaritu Idietua da UUID formatan jakinai da: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Kunde batzaren Hondaritu Idietua aldatzeko, hauek ere egin dezakezu:
1. **Customers** lapurikoan jarraitu
2. Horrek duen kudeaketa (Manage customer) klikatu
3. URL-era begiratu du - Hondaritu Idietua da `/customers/` ondoren dagoen alfanumeriko karakterak

### 3. Hondaritu Idietu (Server ID) emate {#3-get-your-server-id}

Idietu Hondaritu Idietua (Server ID) aurkitzeko (domain operazioetara beharrezkoa da):

1. Enhance Control Panel-an, **Servers** (Hondaritu Idietuak) funtziokoa jarraitu
2. WordPress instalazioa dagoen serverra klikatu
3. Server ID (UUID formatua) URL edo server detallak ondoren erabiliko da
4. Alternatiboa, serverak listatzeko API-a ere erabil dezakezu:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID da UUID formatua aldatzen du: `00000000-0000-0000-0000-000000000000`

### 4. API URL emate {#4-get-your-api-url}

API URL-a da zure Enhance Control Panel lapurikoaren URL-a `/api/` ondoren apenderatuta:

```
https://your-enhance-panel.com/api/
```

**Importante:** `/api/` bidea beharrezkoa da. Okerrako ezagutzaileak:
- `/api/` gabe domaina bat lekuan erabiliz
- HTTPS-en alde HTTP-aren erabiliz (seguritatebidebi HTTPS da)

## Konfigurazioa {#configuration}

### Konstante beharrezkoak {#required-constants}

Hauko konstante hauek `wp-config.php` lapurikoan gehitu:

// Control Panel Integrazioa hobetzeko
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Integrazioa Wizarden bidez konfiguratzea {#setup-via-integration-wizard}

1. WordPress administrazioan, **Ultimate Multisite** > **Settings** (Konfigurazioak) funtziara jarraitu.
2. **Integrations** (Integrazioak) tabera jarraitu.
3. **Enhance Control Panel Integration** (Enhance Control Panel Integrazioa) aurkitu eta **Configuration** (Konfigurazioa) klikatu.
4. Wizard-ek irakurri du:
   - **Step 1:** Introduktio eta funtzio batzuk zer egin duzu.
   - **Step 2:** API identifikazioak (Token, API URL, Server ID) inputatu.
   - **Step 3:** Konektibitatea jartzen jakinarazteko pruebaa egin.
   - **Step 4:** Ebaluatu eta aktibatu.

Mendataritza daiteke:
- Wizard-ek konstante hauek automaticoki `wp-config.php` file-era sartu (inject) ematean.
- Konstanteak kopiotu eta manuaz gehiago ezartu.

## WordPressaren garrantziendu konfiguratura horiek {#additional-wordpress-configuration}

Komunitatearen iragailuk (\[Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) erabiliz, hauek gehiago konfiguratzea beharrezkoa izan daiteke:

### .htaccess Konfigurazioa {#htaccess-configuration}

Domain mapping (domainak jartzen) erantzunak eragiten dutenean:
1. Origoaren Enhance `.htaccess` file-a boratu.
2. Standard WordPress Multisite `.htaccess` file-a erabiliz aldatu.

### Cookie Konstanteak {#cookie-constants}

Mapped domainetan cookie handling (cookie-ak jartzen) ondo egin eta hauek `wp-config.php`-le sartu:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Ondo jakinarazteko erantzuna {#how-it-works}

### Domain bat jartzen duenean {#when-a-domain-is-mapped}

1. Errekariak erabiltzaileak Ultimate Multisitean (edo da leku batean subdomain moduan irudi bat)
2. Integrazioa Enhance API-rraren POST request bat bidala: `/servers/{server_id}/domains`
3. Enhance domain-a server konfiguratura zehatzera jodez da
4. DNS-ek serverra ireki denean, Enhance automaticoki LetsEncrypt bidez SSL sertifikatua ematen du
5. Domain-a HTTPS-rekin aktibo da

### Domainu Erregitu Dugu {#when-a-domain-is-removed}

1. Ultimate Multisitean domain mapping bat boratzen da
2. Integrazioa Enhance-ri galdu egiten du domain-aren ID-a aurkitzeko
3. DELETE request bat bidala: `/servers/{server_id}/domains/{domain_id}`
4. Enhance domain-a server konfiguratura zehatzera ustez da

### DNS eta SSL Kontrolla {#dns-and-ssl-checking}

Ultimate Multisitean DNS eta SSL kontrolak inplikatuta dira:
- Kontrolaren iraupenean **Domain Mapping Settings** (default: 300 segundea/5 minutu) konfiguratuta duzu
- Sistema domain bat aktibo ematen aurretik DNS propagaziora jartzen du
- SSL sertifikatua bereziki kontrolatzen da
- Enhance automaticoki SSL ematen du, zehatza manuala SSL konfiguratzea ez da beharrezkoa

## Konfigurazioa Bidez Kontrolla {#verifying-setup}

### Konektibitatea Probatzea {#test-the-connection}

1. Integrazio Wizardan, **Test Connection** irudiena eratu duzu
2. Plugin-ek serverra domainak listatzeko proposatuko da
3. Oneraren testu bat konpondu egiten du:
   - API credentials bereziak direla
   - API URL-a erabili daiteke
   - Server ID berezia da
   - Permisoak lehiak aukera dutela

### Domainu Boratzenaren Orain {#after-mapping-a-domain}

1. Ultimate Multisitean test domain bat boratu duzu
2. Ultimate Multisite log-ak kontrolatu (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Enhance Control Panelan bidez domain-a jodez da:
   - **Servers** > **Your Server** > **Domains** lazu duzu
   - Domainu berria listan erabiliz da
4. DNS propagaziora jartzen denean, SSL automaticoki ematen da kontrollatu

## Problema jak ez da konponbatu (Troubleshooting) {#troubleshooting}

### Problema konektibitatea API-aren {#api-connection-issues}

**Error: "Failed to connect to Enhance API" (Konektibitatea Enhance API-ra konektatzeko sumagana)**
- Ezkiritu `WU_ENHANCE_API_URL` hasi eta `/api/` da irralatu.
- HTTPS erabiltzen duzu, HTTP ez duzu.
- Enhance panelak WordPress server-ren bat dauden jakin.
- Konektibitatea blokeatzen duen firewall erreguntzak ez dagoeliko jakin.

**Error: "Enhance API Token not found" (Enhance API Tokena ez da)**
- `wp-config.php` funtziokoan `WU_ENHANCE_API_TOKEN` definidua jakin.
- Enhance-an tokena borratuta edo eduki dagoela irralatu.
- Tokenaren balioan erraziak (typos) ez daiko irralatu.

**Error: "Server ID is not configured" (Server ID-ak konfigurtatuta ez da)**
- `wp-config.php` funtziokoan `WU_ENHANCE_SERVER_ID` definidua jakin.
- Server ID-ak UUID format bat bereziko jakin.
- Enhance panelan servera dagoela konfirmatu.

### Domenia ez hasituratu (Domain Not Added) {#domain-not-added}

**Log-ak errazatu:**
1. **Ultimate Multisite** > **Logs** (Log-ak) funtziora jarraitu.
2. **integration-enhance** dela filtrazioa egin.
3. Problema bat iragitzeko error mezuak bilatu.

**Arreterri erantzunak:**
- Domenia-ren formatua ez dagoeliko (Invalid domain name format).
- Domenia aldatuta dagoela Enhance-an.
- API permietza ez duena (token-ek System Administrator role bereziko jakin).
- Server ID-ak Enhance-an dagoen serverrekin ez bat dagoela.

### SSL Sertifikatua Problemaak {#ssl-certificate-issues}

**SSL ez hasituratu (SSL not provisioning):**
- DNS-ak server-ren IP-ra apuntatzen duen irralatu.
- Domenia-ren erantzunarekin konponbatu jakin: `nslookup yourdomain.com`
- Enhance-ek SSL hasitzea ere DNS-aren erantzunez daitezke.
- SSL hasitzea tipikian DNS propagazioaren ondoren 5-10 min iritu ditu.
- SSL-eko errorak Enhance Control Panel-ren log-etan irralatu.

**Enhance-an manuala SSL problema bat jakinarazteko:**
1. **Servers** > **Your Server** (Server-ek) > **Domains** (Domeniak) funtziora jarraitu.
2. Domenia-ren aurkitu eta SSL status-ak errazatu.
3. Bezatzera SSL hasitzea beharrezkoa dela jakin.

### DNS Erantzunaren Irraldu Aldazpenak (DNS Check Interval) {#dns-check-interval}

Domain edo SSL-akordeak hasten daitezke oso luze jakin dituzenean:
1. **Ultimate Multisite** > **Settings** > **Domain Mapping** fun jarri duzu.
2. **DNS Check Interval** aukera fun aurkitu duzu.
3. Default 300 segundik bat txikiago (minimuma: 10 segund) aldatu duzu.
4. **Ez zurekin:** Txikiko intervalak erantzunak lehen daude, baina serveraren zergabatoreko irudi handiagoa izan daiteke.

### Autentifikazio Errorrak {#authentication-errors}

**HTTP 401/403 errorrak:**
- Enhance-an API tokena berriago (Regenerate) duzu.
- Tokenak **System Administrator** rola dutela jabetzen duzu.
- Tokena ez dagoen duen jakinarazteko jarduera ez daiko.
- Organikazio ID (Organization ID) iruditzen duzu (mendia URL-an ez behar da).

### Log Analisia {#log-analysis}

Log detallatuak aktibatu duzu:
```php
// Debugging handiagoa egin dezake wp-config.php-rean gehitu duzu
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Gero, logak jartu duzu:
- Ultimate Multisite logak: **Ultimate Multisite** > **Logs**
- WordPress debug loga: `wp-content/debug.log`
- Enhance panel logak: Enhance-ren admin interfacean aurkitu daitezke.

## API Referentzia {#api-reference}

### Autentifikazio {#authentication}
API eskaera guztiek Bearer token autentifikazioa erabiltzen du:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Lehen Erantzunak Erabiltzenak {#common-endpoints-used}

**Servers listatzea:**
```
GET /servers
```

**Serveraren Domainak listatzea:**
```
GET /servers/{server_id}/domains
```

**Domain bat jartzea:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Domain bat boratzen (Delete)a:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### API Dokumentazioa Nagusia {#full-api-documentation}
API dokumentazioa oso guztia: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practiceak {#best-practices}

### Seguritate (Security) {#security}
- **Ez ez dut API tokens edo version control-an ez emitu**
- Tokens hauek `wp-config.php`-an garduin behar dira, eta hori Git-etik ez dagoela behar da.
- Token hauek espezifiko permietua (System Administrator) erabiliztenbe (integrazio guztiaren bitartean).
- Produksio (production) erabilera token-ekaren amaierak (expiry dates) emitu.
- Periodikoki token-ek rotatzi ditu.

### Prestazioa (Performance) {#performance}
- API anizki gehiago ez dute, hori gabe default DNS kontrola intervala (300 segundea) erabiliztenbe.
- Domain-ek handi-lerra operazioak egiten ari denge gutxi edo server resource hauek monitorizatu.
- Domain-ek asko bat barne mapatzen ari den gehiago da, hori gabe domain-ek ezarri eta jarraitu (staggering) iruditzen dena.

### Monitorizazioa (Monitoring) {#monitoring}
- Integrazio errorrak bitartean Ultimate Multisite log-ek regularment kontrolatu.
- Domain-ek ezarritzenaren errazaingoak monitorizatu.
- SSL certificate hauek lehenik gabe emitu daitezkeen jakin.
- Enhance server-ren kapasitatea eta domain-ekaren limitazioak ikusten ditu.

## Ressurgarriak Nagusiak (Additional Resources) {#additional-resources}

- **Enhance Ofizial Dokumentazioa:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokumentazioa:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Komunitate Forumua:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskusiokoa:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domain Mapatzea Gida:** "How to Configure Domain Mapping v2" wiki paginaz ikusten duzu.

## Udalak (Support) {#support}

Problema bat aurkitu jakin:
1. Atalean dagoen Troubleshooting (Aurrekontzako) seksioa kontrolatu.
2. Ultimate Multisite log-ek ikustu.
3. [GitHub Diskusiokoa](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions) zuzendu.
4. Panel-eko problema bat izan, Enhance suportiari kontaktatu.
5. Komunitatearen laguntza eskolari log-ek detallatuak eta error logs-ek handiagoak emitu diskusio berria sortu.

## Nota (Notes) {#notes}

- Hauzenak handalegia horrek domain alias-ez betetzeko; Enhance-ek SSL-a automatikoki jartzen du.
- Handalegia horrek både custom domain mapping eta subdomain-bazte websteiak ere suportatzen du.
- Automatic www subdomain-ek sortzea Domain Mapping hengaileak (settings) arauetan konfiguriatuta daiteke.
- Enhance-ek orain Apache konfiguraazioak (LiteSpeed Enterprise disponibile daiteke) suportatzen du.
- Ultimate Multisite-n domain hau lehen daiteke, Enhance-ek domaina aldatzen du baina SSL sertifikatua hemen ez daialdi dezake.
