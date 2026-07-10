---
title: Bæta viðskiptaþjónustuáætlun
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Styrk innvegna panel {#enhance-control-panel-integration}

## Áttekking {#overview}
Enhance er nútíma kontrollpanel sem býður upp um sterk automatískum leiðang og stjórnunarferli fyrir vefsítana. Þessi tenging gerir mögulegt að sjálfsviðskipti domænum og stjórnun SSL-tækilorðanna á milli Ultimate Multisite og Enhance Control Panel.

**Tengd viðmiðing:** Sjá [GitHub Diskussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) fyrir samfélagsþekkingar og vöxtu upplýsingar.

## Stöðvar {#features}
- Sjálfsviðskipti domænum þegar domænum eru mappa í Ultimate Multisite
- Sjálfsviðskipti SSL-tækilorða með LetsEncrypt þegar DNS er lösgæð
- Stöðvar fyrir subdomænu net sem renna í subdomænu leiðum
- Fjármun domænsins þegar mappa eru fjarlægðar
- Tengingstesting til að staðfesta API-tækilorðin

## Kreftingar {#requirements}

### Systemkreftingar {#system-requirements}
- Enhance Control Panel er installað og aðgengilegt
- WordPress Multisite installation er hostað á eða tengd við Enhance server
- Apache vefsérfur (Enhance stendur með Apache uppsetningum; LiteSpeed Enterprise er til við sjaldandi verði)

### API Aðgangur {#api-access}
Þú þarft að hafa administratoraðgangur í Enhance Control Panel til að skapa API token.

## Skráning API-tækilorða þina {#getting-your-api-credentials}

### 1. Skapa API Token {#1-create-an-api-token}

1. Logga inn í Enhance Control Panel sem administrator
2. Klikka á **Settings** (Innstillingar) í menúinn fyrir leiðang
3. Navigera yfir til **Access Tokens** (Aðgangstækilorð)
4. Klikka á **Create Token** (Skapa tækilorð)
5. Gefðu tækilorðinu skýrna nafn (t.d., "Ultimate Multisite Integration")
6. Skyni **System Administrator** (Systemadministrator) ról
7. Til lausnar fyrir lausa tímann:
   - Látðu það eins og er ef þú vilt að tækilorðið aldrei launi
   - Eða setðu sérstaka lausar tíma fyrir öryggisþætti

8. Klikka á **Create** (Skapa)

Eftir að þú hefur skráð það, verður **Access Token** og **Organization ID** sýnd **eftir**. **Skrá þessar strax** þar sem tokeninn mun ekki sýnast aftur.

### 2. Fáðu eigin Organization ID {#2-get-your-organization-id}

Organization ID er sýnt á síðunni Access Tokens í blá upplýsingabokkinni merkt "Org ID: {your_id}".

Organization ID er UUID formátt sem: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Þú getur einnig farið í Organization ID fyrir viðskiptavininn með eftirfarandi skrefum:
1. Farið yfir síðuna **Customers** (Viðskiptavinir)
2. Klikka á **Manage customer** (Styri viðskiptavinann) fyrir viðkomandi viðskiptavinann
3. Sjáðu í URL - Organization ID er alfanumerískir teikn sem eru eftir `/customers/`

### 3. Fáðu eigin Server ID {#3-get-your-server-id}

Til að finna þennan Server ID (sem er nauðsynlegur fyrir að stýra domænum):

1. Í Enhance Control Panel, farið í **Servers** (Serverar)
2. Klikka á server sem heldur WordPress innreiðslu þína
3. Server ID (UUID formátt) verður sýnt í URL eða upplýsingum um serverinn
4. Eftir að það, geturð nota API til að lista serverar:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID fylgir UUID formátt: `00000000-0000-0000-0000-000000000000`

### 4. Fáðu eigin API URL {#4-get-your-api-url}

API URL þinn er URL Enhance Control Panel þinn með `/api/` viðbúið:

```
https://your-enhance-panel.com/api/
```

**Mikilvægt:** Stiginn `/api/` er nauðsynlegur. Almenn villur eru:
- Notkun bara domænsins án `/api/`
- Notkun HTTP í stað HTTPS (HTTPS er nauðsynlegt fyrir öryggi)

## Configuration {#configuration}

### Required Constants {#required-constants}

Blaðni eftirfarandi konstantar í skrá `wp-config.php`:

// Styrk viðskiptaflutningu í Control Panel
define('WU_ENHANCE_API_TOKEN', 'your-bearer-token-here');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'your-server-uuid-here');

### Uppsetning með Integrations Wizard {#setup-via-integration-wizard}
1. Í WordPress admin, gae til **Ultimate Multisite** > **Settings**
2. Navigdu yfir í flugvinnu **Integrations** (Integrations)
3. Finndu **Enhance Control Panel Integration** og klikktu á **Configuration** (Uppsetning)
4. Vinnarstigið mun leiða þig með uppsetningu:
   - **Stig 1:** Innleiðing og áhersla á eiginleika
   - **Stig 2:** Skrá inn API greindalögum þínum (Token, API URL, Server ID)
   - **Stig 3:** Prófa tengingu
   - **Stig 4:** Sjávar og aktivaðu

Þú getur velja:
- Látandi vinnarstigið sjálft innihelda þessar constantar í `wp-config.php` skrifstafinn með sjálfu
- Kopuna constantar og bætt við þær manuelle

## Aðgerðir á WordPress {#additional-wordpress-configuration}
Með tengingum frá samfélögum ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)) þarf þér að geta uppsetta þessar viðbótarsetningar:

### Uppsetning .htaccess {#htaccess-configuration}
Ef þú ert með því að upplifa þrýstingur á mappaðir domænar (domain mapping):
1. Drauma úr upprunalegu Enhance `.htaccess` skrifstafinu
2. Skynja það með standard WordPress Multisite `.htaccess` skrifstafi

### Cookie Constantar {#cookie-constants}
Bættu þessar constantar í `wp-config.php` til að tryggja rétt handlun með cookie-um á mappaðir domænum:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Hvernig það virkar {#how-it-works}

### Þegar domæna er mappað {#when-a-domain-is-mapped}


1. Notkunirðilli notkunarann tengist sérsniðnum domæni í Ultimate Multisite (eða nýtt svið er skiptist í subdomain mode)
2. Tengingin sendir POST-skynstild til Enhance API: `/servers/{server_id}/domains`
3. Enhance aðaddar domænið í uppsetningu serverinnar þín
4. Þegar DNS-tengslanir leiða til serverinn þinn, aðaddar Enhance sjálf automatisk SSL-sertifikat með LetsEncrypt
5. Domænið verður aktivt með HTTPS

### Þegar domæni er fjarlægð {#when-a-domain-is-removed}

1. Fjarlægja domænin tengingu í Ultimate Multisite
2. Tengingin spyrir Enhance eftir ID domænsins
3. DELETE-skynstild sendur til: `/servers/{server_id}/domains/{domain_id}`
4. Enhance fjarlægðar domænið úr uppsetningu serverinnar þín

### DNS og SSL tölvunarmiðlun {#dns-and-ssl-checking}

Ultimate Multisite hefur innbyggd tölvunarmiðlun fyrir DNS og SSL:
- Þú getur sett upp tölvunarmiðlunartíma í **Domain Mapping Settings** (eða Domænin tengingu settar) (eða mótum: 300 sekúnd/5 mínútur)
- Systeminu skynstir DNS-þróun áður en domænið blir merkt sem aktivt
- Validitet SSL-sertifikat er skynst í sjálf
- Enhance tekur hálfgerðina fyrir SSL með sjálfum, svo þarf manuelle SSL-tölvunarmiðlun ekki

## Verifisering uppsetningar {#verifying-setup}

### Prófa tengingu {#test-the-connection}

1. Í Integration Wizard (Tengingshættustíð) nota **Test Connection** skrefið
2. Addoninn reynir að lista domæni á serverinn þínum
3. Árangursmiðja staðfestir:
   - API tengingarnar eru réttar
   - API URL er aðgengileg
   - Server ID er réttur
   - Aðgengi er sett rétt

### Í eftir tengingu domænsins {#after-mapping-a-domain}

1. Tengi prófanlegum domæni í Ultimate Multisite
2. Skynst Ultimate Multisite logs (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifisð í Enhance Control Panel að domænið hafi verið aðaddar:
   - Gangi til **Servers** > **Your Server** > **Domains**
   - Nýtt domænið þarf að koma í lista

4. Eftir að DNS er þróun, verifisð að SSL sé að addast sjálf

## Feilanirfar villur {#troubleshooting}

### Vantennu á API tengingu {#api-connection-issues}

**Vantenn:** "Failed to connect to Enhance API" (Feilanngið ekki tengja sér við Enhance API)
- Staða `WU_ENHANCE_API_URL` er í endinni `/api/`.
- Staða, að þú notar HTTPS og ekki HTTP.
- Staða, að Enhance panelinn sé aðgengur á WordPress serverinn þinn.
- Vantenn, að engin firewall reglur hækka tengingu.

**Vantenn:** "Enhance API Token not found" (Enhance API token er ekki fundinn)
- Staða, að `WU_ENHANCE_API_TOKEN` sé skilgreind í `wp-config.php`.
- Vantenn, að tokenin hefur ekki verið slettin eða laukið á Enhance.
- Vantenn, að það sé ekki fyrir villur í gildi tokenins.

**Vantenn:** "Server ID is not configured" (Server ID er ekki skilgreind)
- Staða, að `WU_ENHANCE_SERVER_ID` sé skilgreind í `wp-config.php`.
- Vantenn, að Server ID sé rétt UUID formáttur.
- Vantenn, að serverinn sé til staðar í Enhance panelinu þínu.

### Domæni ekki viðbúið {#domain-not-added}

**Vantenn á loggum:**
1. Gangi **Ultimate Multisite** > **Logs**.
2. Skilblaði eftir **integration-enhance**.
3. Leitað eftir villumótum sem sýna þennan vanda.

**Almenn afirrar ástæður:**
- Órétt formáttur domænsnafnans.
- Domæni er ekki enn til staðar í Enhance.
- Ítrúleg skilyrði fyrir API (vitið það að tokenin sé með rólina System Administrator).
- Server ID er ekki tónn við raunverulegan server í Enhance.

### Vantenn á SSL kerfi {#ssl-certificate-issues}

**SSL er ekki viðbúið:**
- Staða, að DNS sé reiknað til IP hefðar þín.
- Vantenn, að domæni sé reiknað rétt: `nslookup yourdomain.com`.
- Enhance þarf DNS að vera reiknaður fyrir það sem það getur viðbúið SSL.
- Viðbúning SSL tekur tíma á 5–10 minuttum eftir því að DNS sé breytt (propagation).
- Staða, að þú skoða logg Enhance Control Panelinn fyrir sérstök villur um SSL.

**Manuell feilanir á SSL í Enhance:**
1. Gangi **Servers** > **Your Server** > **Domains**.
2. Finndu domænið og skoða staðleika SSL þess.
3. Þú getur manningastartað viðbúning SSL ef það er nauðsynlegt.

### Tími fyrir DNS-skilblaði {#dns-check-interval}

Ef domænir eða SSL-certifikat eru að því að taka yfir of mikið tíma:
1. Gangi í **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Finndu innstillinguna **DNS Check Interval** (Tími fyrir DNS-skilning)
3. Breyti þennan verdi frá skrefum 300 (sekundir) til einn lítillari gildi (minimum: 10 sekúndur)
4. **Athugið:** Lítilari timalegni þýða fleiri skilningarnir, en mögulegt er að það hækki sjálfshlutlanum á serveri.

### Skilningartryggingarsvæði (Authentication Errors) {#authentication-errors}

**HTTP 401/403 villur:**
- Uppfráðu API tokeninn þinn í Enhance
- Staða tokenins skal vera **System Administrator**
- Þýðu að tokenin hefur ekki laukið
- Staðfesti að þú notar rétt Organization ID (þótt það er oft ekki nauðsynlegt í URL)

### Skilningarskýrslur (Log Analysis) {#log-analysis}

Aktiva detallda skýrslur:
```php
// Bæri í wp-config.php fyrir betri feilanaskipti
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Þá skoða skýrslurnar á:
- Ultimate Multisite skýrslur: **Ultimate Multisite** > **Logs**
- WordPress debug logginn: `wp-content/debug.log`
- Enhance panel skýrslur: Til að finna þau í admin interface Enhances

## API Viðmið (API Reference) {#api-reference}

### Skilningartryggingarsvæði (Authentication) {#authentication}
Allar API-skynstök nota Bearer token authentication:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Almenn endepunkt sem notarðu (Common Endpoints Used) {#common-endpoints-used}

**Listar servera:**
```
GET /servers
```

**Listar domænir á einum serveri:**
```
GET /servers/{server_id}/domains
```

**Búa til domén:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Sýn/Tala domén:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Full API Dokumentation {#full-api-documentation}
Full API dokumentation: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Best Practices {#best-practices}

### Trygging (Security) {#security}
- **Kom aldrei leggja API-token í version control**
- Skrá token á `wp-config.php` sem þarf að vera útskipt í Git
- Nota token með viðeigandi réttum (System Administrator fyrir fullan tengingu)
- Setu tíðar fyrir lauxið token í produktionsemnum
- Hlutta token periodically

### Árangur (Performance) {#performance}
- Nota almenn DNS skekkju-tíma (300 sekund) til að undirbúa yfirborga API-samtök
- Fylgjast með Enhance server okkar þegar við framkvæmum stóru domén-aukningarnar
- Hugsa um að byrja á nýjum doménaukinum ef þú mappa mikið af doménum á einu tíma

### Fylgja (Monitoring) {#monitoring}
- Fylgjast reglulega með Ultimate Multisite logs fyrir tengingarfarhverfisvanda
- Set upp fylgja fyrir felaðar doménaukinar
- Staða SSL-tífa til að sjá hvort þau séu sett upp rétt
- Fylgjast með fjölda og hámarkshættu Enhance server okkar

## Aðferðarleiðar (Additional Resources) {#additional-resources}

- **Enhance Officiell Leiðarleiðar:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Leiðarleiðar:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Samfélagsforum:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Samræmi:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Guide fyrir Doménaukinningu Ultimate Multisite:** Sjá wiki-sida "Hvernig að uppsetja doménaukinningu v2"

## Stöðun (Support) {#support}

Ef þú ert í vanda:
1. Fylgja með ágreiningarhlutstriðum ofan
2. Fyrirspáðu Ultimate Multisite logs
3. Ráðvaldi [GitHub Samræmi](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Tengjast Enhance stöðun fyrir vanda í sérstökum panel-i
5. Skapa nýja ágreiningu með nákvæmum villu-logs fyrir samfélagshjálp

## Athugasemdir (Notes) {#notes}

Þessi tengingur huleur aðeins fyrir domænsalias; Enhance stýrir SSL-skiptum sjálf um.
Tengingin stendurðar gegn bæði sérsniðnum domænsmápningum og vísafyrirbáta síðum (subdomain-based sites).
Automatísk sköpun www subdomainna getur sést í innstillingum Domain Mapping.
Enhance stendur nú að því að stuðla við Apache-skjalði (LiteSpeed Enterprise er til við disponeringu).
Fjara domæni úr Ultimate Multisite mun fjarlægja domæni úr Enhance, en gæti ekki strax fjarlægja tengd SSL-skipti.
