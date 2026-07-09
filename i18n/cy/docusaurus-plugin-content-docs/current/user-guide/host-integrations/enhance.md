---
title: Pryddu y cyddefnyddio'r Panel Cwliant
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Gyfeiriau'r Panel Cwilio {#enhance-control-panel-integration}

## Oglwyddiciel {#overview}
Enhance yw panel cwrdd modern sy'n rhoi ffyddau mawr i ddefnyddio awtomatig a rheoli gweithredoedd. Mae’r cyfathiad hwn yn sylfaenu gwahanu domenaid a rheoli certysyddion SSL'n awtomatig rhwng Ultimate Multisite a Enhance Control Panel.

**Dysgysyllti Cyflwyniad:** Gwylio [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) i gael cyfathigion cymunedol a wybodaeth ychwanegol.

## Faeau {#features}
- Cyflwyniad domenaid awtomatig pan fydd domenaid wedi'u mapi yn Ultimate Multisite
- Cynllunio certysyddion SSL awtomatig drwy LetsEncrypt pan fydd DNS wedi'i ddefnyddio
- Cyddeall subdomenaid ar gyfer cyd-gynlluniau sydd mewn rheolau gyda subdomenaid
- Ailta domenaid pan fod mapi wedi'u ddifais
- Proffyniad cysylltiad i ddimethu cyfathigion API

## Cynlluniau {#requirements}

### Cynlluniau System {#system-requirements}
- Enhance Control Panel wedi'i chwarae a cyffredinol
- Cyflwyniad WordPress Multisite wedi'i gweithredu arno neu yn cysylltiedig â server Enhance
- Server web Apache (Mae Enhance yn cefnogi cyfathigion Apache; mae LiteSpeed Enterprise ar gael mewn cost wedi'i ddroi)

### Cynlluniau API {#api-access}
Rhaid i chi fod â chwarae administrator i Enhance Control Panel i creu tokenau API.

## Cyflwyniad y Chyfathigion API {#getting-your-api-credentials}

### 1. Creu Token API {#1-create-an-api-token}

1. Cyflwynwch i'r Enhace Control Panel eich bod yn administrator
2. Clic ar **Settings** (Cynlluniau) yn y menu cyfarwyddiadau
3. Rhewch i **Access Tokens** (Tokenau Cyffredinol)
4. Clic ar **Create Token** (Creu Token)
5. Tafarnwch enw ddefnyddiol i'r token (e.e., "Ultimate Multisite Integration")
6. Gyfynwch y rôl **System Administrator** (Administrator System)
7. Ar gyfer dyddiad cyflwyniad:
   - Rhaid i'i gadael yn gwbl os ydych chi eisiau nad yw'r token wedi'i ddroi
   - Neu rhoi dyddiad cyflwyniad penodol ar gyfer pwysiciarion am ystyriedau diogelwch
8. Clic ar **Create** (Creu)

Ar ôl yn cyfieithiadau ar gyfer ddefnyddwyr, mae'n cael ei ddefnyddio fel yr unigolwr naturiol i esbonio'r cynnwys.

Ar ôl creu, bydd eich **Access Token** a'r **Organization ID** yn cael eu dangos. **Mae'chwilio hyn ymlaen ar gyfer** felly bydd y token yn cael ei dangos yn unigol.

### 2. Derbyn eich Organization ID {#2-get-your-organization-id}

Mae'r Organization ID yn cael ei dangos ar y peidiad cyfieithiadau Access Tokens mewn boks gair sydd wedi'i ddefnyddio "Org ID: {your_id}".

Mae'r Organization ID yn cael ei ffurfio fel UUID fel: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Gallwch hefyd ddod o hyd i'r Organization ID o'r cydweithredig gan ddefnyddio y rheolau canlynol:
1. Ymddangos i'r peidiad **Customers**
2. Clic ar **Manage customer** ar gyfer y cydweithredig sydd yn perthnasol
3. Gwylio ar yr URL - mae'r Organization ID yn cael ei ddefnyddio'r cyfanau allan o `/customers/`

### 3. Derbyn eich Server ID {#3-get-your-server-id}

I ddod o hyd i'r Server ID (sydd angen i weithgareddau domain):

1. Yn y Panel Cwalo, ymddangos i **Servers**
2. Clic ar y server lle mae eich cyflwyniad WordPress yn cael ei rhedeg
3. Bydd y Server ID (ffurf UUID) yn cael ei dangos yn yr URL neu ddefnyddiau'r server

4. Fel alternatiw, gallwch ddefnyddio'r API i llywio'r serverau:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Mae'r Server ID yn ddefnyddio ffurf UUID fel: `00000000-0000-0000-0000-000000000000`

### 4. Derbyn eich API URL {#4-get-your-api-url}

Mae eich API URL yn cael ei ddefnyddio'r URL Panel Cwalo gyda `/api/` wedi'i ychwanegu:

```
https://your-enhance-panel.com/api/
```

**Mae'n bwysig:** Mae angen i'r llwybr `/api/`. Mae rhywfaint o chyflwyniadau cyffredin yn cynnwys:
- Defnyddio yr domain dim ond heb `/api/`
- Defnyddio HTTP yn lle HTTPS (Mae HTTPS angen i sicrwydd)

## Cynhyrchu {#configuration}

### Constantau angen {#required-constants}

Cynllunwch y constantau canlynol i'ch fyllyn `wp-config.php`:

// Gyfechrau'r Cwilioedd Panel (Control Panel) i'r Cyflwyniad
define('WU_ENHANCE_API_TOKEN', 'dyddiad-berth-gwrth-ydd-era');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'dyddiad-uuid-y-server-era');

### Rheoliant drwy Gweithrediad Cyflwyniad (Integration Wizard) {#setup-via-integration-wizard}

1. Yn eich admin WordPress, mynd i **Ultimate Multisite** > **Settings**
2. Mynd i'r tab **Integrations**
3. Draig **Enhance Control Panel Integration** a chwarae **Configuration**
4. Bydd y gweithrediad yn rhoi'n ddefnyddioch eich rheoliadau:
   - **Cyflwyniad 1:** Cyflwyniad a ddefnyddioch y ffeithiau (feature overview)
   - **Cyflwyniad 2:** Rheoli eich cyfrifau API (Token, API URL, Server ID)
   - **Cyflwyniad 3:** Gwarchod y cysylltiad (Test the connection)
   - **Cyflwyniad 4:** Ddychwion a chwarae (Review and activate)

Gallwch chi dewis:
- Mae'n rhoi'r gweithrediad i ddefnyddio'r constantau yn eich fyllyn `wp-config.php` yn awtomatig
- Copio'r cyfrifau constantau a droselu nhw yn manwl

## Rheoliadau WordPress Addysgol {#additional-wordpress-configuration}

Ar gyfer y cyd-fynd y gymuned ([Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), gallwch angen rheoli'r setegau addysgol hyn:

### Rheoliadau .htaccess {#htaccess-configuration}

Os ydych chi'n cael anwybydion gyda chwarae dros y domenaid (domain mapping):
1. Ddychwch y fyllyn `.htaccess` o Enhace gyntaf
2. Rhaid ei gwahanu â'r fyllyn `.htaccess` standard WordPress Multisite

### Constantau Cookie {#cookie-constants}

Dyna'r constantau hyn i `wp-config.php` i sicrhau rheoliad cookie yn dda arall domenaid a chwarae:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Sut mae hyn yn gweithio {#how-it-works}

### Pan mae domenaid yn cael eu cyflwyno (When a Domain is Mapped) {#when-a-domain-is-mapped}

1. Mae'r benw syddi'n cyfathrebu domain custom yn Ultimate Multisite (neu gwnaethai site new mewn modd subdomain)
2. Mae'r cysylltiad yn anfon rhestr POST i API Enhance: `/servers/{server_id}/domains`
3. Mae Enhance yn ychwanegu'r domain i eich cyfrifolau server
4. Pan mae DNS yn cael ei ddefnyddio ar eich server, mae Enhance yn cyflwyno certyftext SSL yn awtomatig drwy LetsEncrypt
5. Mae'r domain yn cael ei gweithredu gyda HTTPS

### Pan cael domain wedi'i taro {#when-a-domain-is-removed}

1. Mae cyfathrebu domain wedi'i taro mewn Ultimate Multisite
2. Mae'r cysylltiad yn cwesti Enhance i ddod o hyd i'r ID y domain
3. Mae rhestr DELETE yn cael ei anfon i: `/servers/{server_id}/domains/{domain_id}`
4. Mae Enhance yn taro'r domain o eich cyfrifolau server

### Cynodiad DNS a SSL {#dns-and-ssl-checking}

Mae Ultimate Multisite yn cynnwys cynodiad DNS a SSL sydd wedi'i gweithredu:
- Gallwch ddefnyddio'r cyflawniad ychwanegol mewn **Domain Mapping Settings** (deallt: 300 second/5 minyt)
- Bydd y system yn gwirio'r ddefnydd DNS قبل ychwanegu domain fel weithredol
- Mae cyfathrebu certyftext SSL wedi'i gwirio'n awtomatig
- Mae Enhance yn cael ei gweithredu gyda SSL yn awtomatig, felly nid oes angen i'r cyfrifolau SSL manual

## Cynodiad y Rhestr {#verifying-setup}

### Gwylio'r Cysylltiad {#test-the-connection}

1. Mewn y Wizard Cysylltiad, defnyddiwch y stad **Test the Connection**
2. Bydd y plugin yn ceisio listri domain ar eich server
3. Mae mesgar cyfathrebu yn cywir:
   - Mae cyfrifolau API'n wir
   - Mae URL API'n cael ei cyffredin
   - Mae ID Server yn wir
   - Mae permisiynau wedi'u setio'n iawn

### Ar ôl taro domain {#after-mapping-a-domain}

1. Taro domain test mewn Ultimate Multisite
2. Gwylio'r logau Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Cynodiad mewn Enhance Control Panel bod y domain wedi'i chwilio:
   - Ymddangos i **Servers** > **Your Server** > **Domains**
   - Bydd y domain newydd yn dangos yn y llyfr

Once DNS mae'n cael ei ddefnyddio, gwirio bod certyftext SSL wedi'i gweithredu'n awtomatig

## Gwylioedd (Troubleshooting) {#troubleshooting}

### Problemy gyda Chonnectiwn API {#api-connection-issues}

**Eithaf: "Failed to connect to Enhance API" (Nid oes y cyfathrebu i'r API Enhace)**
- Cynnalwch bod `WU_ENHANCE_API_URL` yn cynnwys `/api/` ar ben y diwedd.
- Sicrhewch bod chi'n defnyddio HTTPS, nid HTTP.
- Cynnalwch fod y panel Enhance yn cyffredinol o gyfrifol o'r server WordPress eich.
- Cynnalwch nad oes unrhyw rheolaethau firewall sy'n blio'r cysylltiad.

**Eithaf: "Enhance API Token not found" (Nid cael y Token API Enhace)**
- Sicrhewch bod `WU_ENHANCE_API_TOKEN` wedi'i cyflwyno mewn `wp-config.php`.
- Cynnalwch nad yw'r token wedi'i ddifyn neu ddefnyddio yn llawn mewn Enhance.
- Cynnalwch am gyfeiriadau (typos) yn y gael o'r werth y token.

**Eithaf: "Server ID is not configured" (Nid oes ganlaf Server ID)**
- Cynnalwch bod `WU_ENHANCE_SERVER_ID` wedi'i cyflwyno mewn `wp-config.php`.
- Sicrhewch bod y Server ID yn ffurf UUID gywir.
- Cyffurfio bod y server sydd ar gael yn eich panel Enhance.

### Nid cael y Domen wedi'i Ymddangos (Domain Not Added) {#domain-not-added}

**Cynnalwch y logau:**
1. Ymddangos i **Ultimate Multisite** > **Logs**.
2. Filwch gan **integration-enhance**.
3. Cynnalwch am ychwanegau erifol sy'n dangos y problem.

**Gweithrediadau cyffredinol:**
- Ffurf d domen yn anghy trwyll.
- Mae'r domen wedi'i ddangos ystod mewn Enhance.
- Mae permisiwn API yn ddigon (sicrhewch bod y token gyda rôl System Administrator).
- Nid yw Server ID yn cyflwyno â'r server sydd ar gael mewn Enhance.

### Problemy gyda Sertifig SSL {#ssl-certificate-issues}

**Nid oes gan sertifig SSL wedi'i cyfathrioli:**
- Cynnalwch bod DNS yn cyfeiriadu i'r adran eich IP.
- Cynnalwch fod y domen yn cael ei ddefnyddio'n iawn: `nslookup yourdomain.com`.
- Mae Enhance'n eisiau bod DNS wedi'i cyfathrioli قبل iddo gallai ei ffurfio SSL.
- Mae cyfathrioli SSL yn aml yn cymryd 5-10 min ar ôl y chwarae DNS (DNS propagation).
- Cynnalwch y logau o'r Panel Kontrol Enhance ar gyfer erifol SSL.

**Cyfrifol SSL manwl mewn Enhance:**
1. Ymddangos i **Servers** > **Your Server** > **Domains**.
2. Cynnalwch eich domen a cynnalwch ei statws SSL.
3. Gallwch chi ffurfio cyfrifol SSL yn manwl os oes angen.

### Cyfrifol Check Interval (DNS Check Interval) {#dns-check-interval}

Os domenau neu SSL certificates yn cael eu cyflwyno'n rhy lawer?
1. Ymddangos i **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Draffwch y setiad **DNS Check Interval**
3. Rheoli o'r gaelol 300 segwn (seconds) i werth isel (min: 10 segwn)
4. **Meddefnyddiw:** Mae cyflwynau isel yn rhoi gwch melyn cysylltu, ond mae'n rhoi chwarae server yn ddiweddarach.

### Errau Cynaliad (Authentication Errors) {#authentication-errors}

**Erru HTTP 401/403:**
- Cyfnewidiwch eich token API yn Enhance
- Assurwch bod y token gyda rôl **System Administrator**
- Gwylio bod y token nid wedi cael ei ddefnyddio
- Sicrhewch bod chi'n defnyddio ID Organigau cywir (erbyn iddo, mae'n cyffredinol nid yn cael ei hanfod yn yr URL)

### Analysu Logau (Log Analysis) {#log-analysis}

Gofyn logau cyfathoghial:
```php
// Ymddangos i wp-config.php ar gyfer ddefnyddio debug wella
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Yna gwylio'r logau ar:
- Logau Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Logau debug WordPress: `wp-content/debug.log`
- Logau panel Enhance: Ar gael yn y cyfathrebu admin o Enhance

## Cyfeiriad API (API Reference) {#api-reference}

### Cynaliad (Authentication) {#authentication}
Mae pob cyflwyniad API yn defnyddio cynaliad Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Pethau Gymunedol a Defnyddiatwyd (Common Endpoints Used) {#common-endpoints-used}

**Llisti Serverau:**
```
GET /servers
```

**Llistri Domenau ar Server:**
```
GET /servers/{server_id}/domains
```

**Ymyddu Domen:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Talybu Domen:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Documentasiwn API Cyflawn (Full API Documentation) {#full-api-documentation}
Documentasiwn API cyffredinol: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Prif Gwybodaeth (Best Practices) {#best-practices}

### Diogelwch (Security) {#security}
- **Nid ddatblygu token API i'r gwylio (version control)**
- Mae'n cael ei storio yn `wp-config.php` sydd ei ddefnyddio, a fyddai'n cael ei diffiog o Git
- Defnyddiwch token gyda chyfderau pwysig (System Administrator ar gyfer cyfluniad llawn)
- Rheoli dyddiadau ddefnyddio token i'r amgylcheddol (production environments)
- Rhyddwch y token yn rhywfaint o amser

### Perfformiad (Performance) {#performance}
- Defnyddiwch y cyflenau DNS ddefnyddiol (300 second) i ddarganfod bod y cyfathiad API yn rhy fawr
- Monitorea'r resursau o'r server Enhance pan fyddwch yn gwneud operadau domain mawr-llaw
- Meddyliwch am ddatblygu'r domainau yn rhywfaint os oes angen i mapi'r domainau llawer yn unig

### Monitoreaeth (Monitoring) {#monitoring}
- Rheoli'r log Ultimate Multisite yn aml i ddarganfod erioedd cyfathiad
- Rheoli monitorion ar gyfer ychwanegiadau domainau wedi'u cael eu gwblhau
- Cynllunwch bod certiau SSL yn cael eu cyfluniadu'n dda
- Rhyddwch y capabiliti o'r server Enhance a'r hanesau domainau

## Rhyngrwyd Addlawg (Additional Resources) {#additional-resources}

- **Documentiad Cyffredinol Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Documentiad API Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Fforwm Cymunedol Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Dysgyblhau GitHub:** [Issue #265 - Enhancing Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Cyfarwyddyd Mapi'r Domainau Ultimate Multisite:** Gwylio y dudalen wiki "How to Configure Domain Mapping v2"

## Cysylltiadau (Support) {#support}

Os oes gennych angen gael gymhlefur:
1. Rheoli'r sefyllfa Gweithredu (Troubleshooting) isod
2. Ddychwch y log Ultimate Multisite
3. Cynghorwch y [GitHub Discussions](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Contactai gynnigol Enhance ar gyfer pethau penodol i'r panel
5. Creu fforwm newydd gyda log erioedd cyffredinol i helpu y cymuned

## Notedau (Notes) {#notes}

Mae'r cyfathriadau hwn yn gwch yn gael y cyfathriadau domenaid yn unig; mae Enhance yn rheoli SSL yn awtomatig.
Mae'r cyfathriadau hyn yn cefnogi drosymau domenaid a chyflwyniadau ar adeiladau (subdomain-based sites).
Gall gael y cyfathriadau www subdomain yn cael eu cyflawni mewn setynau Cyfathriadau Domenaid.
Mae Enhance yn cefnogi cyfleiwid Apache (LiteSpeed Enterprise mae ar gael hefyd).
Bydd y taro domenaidd o Ultimate Multisite yn taro'r domenaidd o Enhance, ond gallai nid yw'n cael ei ddifynnu certydd SSL a chyflwyniadau sy'n cael eu cyflawni yn gyflym.
