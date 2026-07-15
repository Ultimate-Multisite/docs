---
title: Pleniĝu la integradon kun la kontrolpaneli
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Pleni Kontrolpanel Integracion

## Rezumi {#overview}
Enhance estas moderna kontrolpanel, kiu donas potentes funkciojnajn aŭtomataj kaj administrajn kapablitajn. Ĉi tiu integracio permesas aŭtomatan domen sincronigon kaj SSL-sertifikatoj laĉon inter Ultimate Multisite kaj Enhance Control Panel.

**Relata Diskuto:** Vidu [GitHub Diskuto #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) por komunaj tipoj kaj pli da informoj.

## Funkcioj {#features}
- Aŭtomata domen sincronigo, kiam domenoj estas mapitaj en Ultimate Multisite
- Aŭtomata provizio de SSL-sertifikato per LetsEncrypt, kiam DNS resolvas
- Subdomajno suporto por retoj, kiuj funkcias en subdomajno modo
- Domeno forigo, kiam mapoj estas delete
- Konektado testado por verifi la API kredencojn

## Requisitoj {#requirements}

### Sisteme Requisitoj {#system-requirements}
- Enhance Control Panel instalita kaj alaccessa
- WordPress Multisite instalita en aŭ konektita al Enhance servero
- Apache webservero (Enhance suportas aktualne Apache konfiguracojn; LiteSpeed Enterprise estas disponabla per malaj kostoj)

### API Aliro {#api-access}
Vi devas havi administratorj aliro al Enhance Control Panel por krei API token'ojn.

## Akvizi Vian API Kredencojn {#getting-your-api-credentials}

### 1. Krei API Tokenon {#1-create-an-api-token}

1. Logu-sin al via Enhance Control Panel kiel administratoro
2. Kliku sur **Settings** (Konfigurado) en la navigacia menuko
3. Navechu al **Access Tokens** (Aliro Tokenoj)
4. Kliku sur **Create Token** (Krei Tokenon)
5. Donu al la token nomon, kiu estas deskriptiva (ekz., "Ultimate Multisite Integration")
6. Atendigu la rolon **System Administrator** (Sisteme Administratoro)
7. Por la daton de ekspirado:
   - Laboru sen manko se vi volas, ke la token ne ekspiru jamais
   - Aŭ estatu specifan daton de ekspirado por sekureco celoj
8. Kliku sur **Create** (Krei)

Pós kreo, la **Access Token** kaj la **Organization ID** estas prezentita. **Sperte ĉi tiuj!** La token sera montrita nur unufoje.

### 2. Altiĝu vian Organization ID {#2-get-your-organization-id}

La Organization ID estas prezentita sur la paĝo de Access Tokens en blua informita kutimo etiketita "Org ID: {via_id}".

La Organization ID estas UUID formata kiel: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Vi ankaŭ povas trovi la Organization ID de klienton per:
1. Altiĝu al paĝo **Customers**
2. Kliku sur **Manage customer** por la relevante klienton
3. Rigardu la URL - la Organization ID estas la alfanumeraj karakteroj post `/customers/`

### 3. Altiĝu vian Server ID {#3-get-your-server-id}

Por trovi vian Server ID (neferita por domeno operaciaj):

1. En la Enhance Control Panel, navigu al **Servers**
2. Kliku sur la serveron kie funkcias via WordPress instalado
3. La Server ID (UUID formato) sera vidita en la URL aŭ detaloj de la servero
4. Alternativ, vi povas uzi la API por listi serverojn:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

La server ID sekvas la UUID formaton: `00000000-0000-0000-0000-000000000000`

### 4. Altiĝu vian API URL {#4-get-your-api-url}

Via API URL estas via Enhance Control Panel URL kun `/api/` alteniita:

```
https://your-enhance-panel.com/api/
```

**Importanta:** La `/api/` kurso estas necesa. Komtaj eraroj inkluzivas:
- Uzi nur la domeno sen `/api/`
- Uzi HTTP en plankton de HTTPS (HTTPS estas necesa por sekureco)

## Konfiguracio {#configuration}

### Neferitaj konstanta valoroj {#required-constants}

Altiĝu la seguenti konstanta valoroj al via `wp-config.php` fakto:

// Pleni la integracion Control Panel
define('WU_ENHANCE_API_TOKEN', 'vies-bearer-token-aie');
define('WU_ENHANCE_API_URL', 'https://vies-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'vies-server-uuid-aie');

### Montado per la Wizard de Integracio {#setup-via-integration-wizard}

1. Na via WordPress admin, al **Ultimate Multisite** > **Settings** (Ajustoj)
2. Naveche a la pestaña **Integrations** (Integraciones)
3. Encontre **Enhance Control Panel Integration** y cliqueje en **Configuration** (Konfiguracio)
4. La wizard le guiará:
   - **Paso 1:** Introdukcio kaj vidigo de la funkcioj
   - **Paso 2:** Inskriĉi via API kredencojn (Tokeno, API URLo, Server ID)
   - **Paso 3:** Testi la konekton
   - **Paso 4:** Revizi kaj aktivi

Vi povas elgli:
- Permitigi al la wizard injekti la konstanto en via `wp-config.php` filon aŭtomate
- Kopii definiciojn de la konstanto kaj aĉadi ilin manuele

## Pliaj WordPress Konfiguracioj {#additional-wordpress-configuration}

Baze sur la recenzoj de la komunumo ([Diskutado #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), vi povas bezoni konfiguri ĉi ti pliajn ŝanĝojn:

### Konfiguracio de .htaccess {#htaccess-configuration}

Se vi havas problemo kun mapado de domenoj:
1. Elige la originalan Enhance `.htaccess` filon
2. Substitu ĝin per la standardan WordPress Multisite `.htaccess` filon

### Cookie Konstantoj {#cookie-constants}

Aĉadi ĉi ti konstantojn en `wp-config.php` por zorgi pri la ĝusta maneĝo de cookie'oj inter mapitaj domenoj:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kiel Ĝi Funkcias {#how-it-works}

### Kiam Domeno Estas Mapita {#when-a-domain-is-mapped}

1. Uzanto uzanto domen en Ultimate Multisite (a nova saito estas kreita en subdomajno modo)
2. La integriĝo sendas POST petiron al API de Enhance: `/servers/{server_id}/domains`
3. Enhance aĉas la domenon al via serverkonfiguracio
4. Kiam DNS rezolvas al via servero, Enhance aŭtomate provizas SSL-sertifikaton per LetsEncrypt
5. La domenoj fariĝas aktive kun HTTPS

### Kiam Domeno Estas Elrečata {#when-a-domain-is-removed}

1. Uzanto de domenmapado estas elrečata en Ultimate Multisite
2. La integriĝo interroge Enhance por trovi la ID de la domeno
3. DELETE petiro estas sendita al: `/servers/{server_id}/domains/{domain_id}`
4. Enhance elrečatas la domenon de via serverkonfiguracio

### DNS kaj SSL Kontro {#dns-and-ssl-checking}

Ultimate Multisite inkluzas integritajn kontrolon de DNS kaj SSL:
- Vi povas konfiguri intervalon de kontrolon en **Domain Mapping Settings** (defaulto: 300 sekundoj/5 minutoj)
- La sistema verifas DNS propagadon antaŭ marki domenon kiel aktiv
- Valideco de SSL-sertifikato estas kontrolita aŭtomate
- Enhance maneĝas la provizadon de SSL aŭtomate, tiel manua SSL konfiguracio ne estas necesa

## Verifiĝo de Konfiguracio {#verifying-setup}

### Testu la Konektan {#test-the-connection}

1. En la Integration Wizard, uzu la paŝon **Test Connection**
2. La plugin provizos listi domenojn sur via servero
3. Sukcesaj mesaĝoj konfirmas:
   - API kredencoj estas ĝustataj
   - API URL estas alieakcesaj
   - Server ID estas valide
   - Permesoj estas ĝuste setitaj

### Post Mapado de Domeno {#after-mapping-a-domain}

1. Mapu testdomenon en Ultimate Multisite
2. Kontu la logojn de Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifas en Enhance Control Panel, ke la domeno estis aĉita:
   - Aliriĝu al **Servers** > **Via Servero** > **Domains**
   - La nova domeno devas aperi en la listo
4. Kiam DNS propagas, verifas, ke SSL estas provizata aŭtomate

## Problemojokaj {#troubleshooting}

### Problemojokaj kun API konekto {#api-connection-issues}

**Errare: "Failed to connect to Enhance API" (Nefak konekti al la Enhance API)**
- Verifuji, ke `WU_ENHANCE_API_URL` finmas `/api/` al la fini.
- Assureti, ke vi uzas HTTPS, ne HTTP.
- Kontrolu, ke la panel Enhance estas aksesebla de via WordPress servero.
- Verifuji, ke ne ek firewall reguloj blokas la konekti.

**Errare: "Enhance API Token not found" (Token API Enhance ne troviita)**
- Assureti, ke `WU_ENHANCE_API_TOKEN` estas definita en `wp-config.php`.
- Verifuji, ke la token ne estis deleteita aŭ expirita en Enhance.
- Kontrolu por tipografio (typos) en la valor de la tokeno.

**Errare: "Server ID is not configured" (Server ID ne estas konfigurita)**
- Verifuji, ke `WU_ENHANCE_SERVER_ID` estas definita en `wp-config.php`.
- Assureti, ke la Server ID estas valida UUID formato.
- Konfirme, ke la server ekzistas en via Enhance panelo.

### Domeno ne aldatita (Domain Not Added) {#domain-not-added}

**Kontrolu la logoj:**
1. Aliri **Ultimate Multisite** > **Logs**
2. Filtri per **integration-enhance**
3. Rigardu por errare mesajoj, kiuj indikas problemin.

**Komuna kaŭzoj:**
- Invalid domeno nomo formato (Nevalida formato de domeno).
- Domeno estas déjà ekzistita en Enhance.
- Insuficiaj API permesoj (assureti, ke la token havas la rolon System Administrator).
- Server ID ne korespondas al reala servero en Enhance.

### SSL Sertifikato Problemoj {#ssl-certificate-issues}

**SSL ne provizas:**
- Verifuji, ke DNS indikas al via servero's IP adreso.
- Kontrolu, ke la domeno resolvas ĝuste: `nslookup yourdomain.com`
- Enhance postulas, ke DNS resolvas antaŭ tio, ke ĝi povas provizi SSL.
- SSL provizio tipikite bezonas 5-10 minuutojn post DNS propagatio.
- Kontrolu la logoj de Enhace Control Panel por SSL-specifa eraro.

**Manual SSL problemoj en Enhance:**
1. Aliri **Servers** > **Your Server** > **Domains**
2. Trovu via domeno kaj kontrolu ĝian SSL staton.
3. Vi povas manuefe provizi SSL, se necesa.

### DNS Kontrol Intervalo {#dns-check-interval}

Se domeno aŭ SSL-sertifoj tre longas por aktiviĝi:
1. Aliri **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Trovu la ŝancon **DNS Check Interval**
3. Ajustu ĝin de la defaŭlta 300 sekondoj al pli malaj valoro (minimum: 10 sekundoj)
4. **Notu:** Malaj intervaloj signifas pli frekventajn kontrolojn, sed pli grandan serveran ŝarĝon

### Erraroj de autentifo {#authentication-errors}

**HTTP 401/403 eraroj:**
- Regeneru vian API token en Enhance
- Verifigu, ke la token havas la rolon **System Administrator**
- Kontatu, ke la token ne expiris
- Assuringuĝu, ke vi uzas la ĝustan Organization ID (tamen tio tipikite ne bezonas esti en la URL)

### Log Analizo {#log-analysis}

Aktivi detale logadon:
```php
// Aggi en wp-config.php por plibon debugado
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Tamen kontrolu la logojn al:
- Ultimate Multisite logoj: **Ultimate Multisite** > **Logs**
- WordPress debug log: `wp-content/debug.log`
- Enhance panel logoj: Disponibla en la admin interfaco de Enhance

## API Referenco {#api-reference}

### Autentifikado {#authentication}
Toutes la API petoj uzas Bearer token autentifikadon:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Komunaĵaj Endpointoj Utilizataj {#common-endpoints-used}

**List Servers:**
```
GET /servers
```

**List Domains on a Server:**
```
GET /servers/{server_id}/domains
```

**Aggi Domeno:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Dela Domeno:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Plena API Dokumentado {#full-api-documentation}
Plena API dokumentado: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## La plej bone praktika {#best-practices}

### Sekture (Security) {#security}
- **Ne komituri API tokens al versio kontroluri**
- Stortu tokens en `wp-config.php`, ki devojĝas el Git
- Uzu tokens kun la adekva permisadoj (System Administrator por plena integriĝo)
- Defini uzfariĝtempon de token por prodaj aĉetoj
- Roti tokens periodice

### Performeco (Performance) {#performance}
- Uzu la default DNS kontrolintervalon (300 sekundojn), por eviti tro multajn API vokojn
- Monitoru la resurs de servero Enhance, kiam vi faras grandajn operaciojn de domeno
- Konsideru stangon de domeno aĉetoj, se vi mapas multajn domenojn ekbevo

### Monitorado (Monitoring) {#monitoring}
- Kontrolu regularan volte Ultimate Multisite logojn por integriĝer errorej
- Defini monitoradon por neuzfariĝitaj domeno aĉetoj
- Verifaru, ke SSL sertifikatoj provizas ĝuste
- Tenu la oko sur la kapacito de servero Enhance kaj limitajn domenojn

## Pliaj Resursoj (Additional Resources) {#additional-resources}

- **Enhance Ofici tiu Dokumentado:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API Dokumentado:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance Komunita Forumo:** [https://community.enhance.com](https://community.enhance.com)
- **GitHub Diskutado:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite Domeno Mapado Gvidilo:** Vidu wiki pagin "Kiel konfigurigi domeno mapadon v2"

## Subteno (Support) {#support}

Se vi enas problemo:
1. Kontrolu la seksion de Troubleshooting supri
2. Revizi Ultimate Multisite logojn
3. Konsultu la [GitHub Diskutadoj](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontak Enhance subtenon por problemo specifaj al panelo
5. Kreu novan diskutadon kun detale errore logoj por komunita asisto

## Notoj (Notes) {#notes}

- ĉi tiu integracio handlas nur domajno alias'ojn; Enhancado manĝas la SSL aŭtomatisite.
- La integracio subtenas per ŝajvenaj domajno mapado kaj subdomajno bazataj sitaĵoj.
- La aŭtomata kreo de www subdomajno povas esti konfigurita en la ĝustoj de Domajno Mapado (Domain Mapping).
- Enhancado subtenas nun Apache-konfiguracojn (LiteSpeed Enterprise estas disponabla).
- La forigo de domajno el Ultimate Multisite rimuovas la domajno el Enhance, sed ĝi ne certigas tuj diliĝi la asociitajn SSL-sertifikatojn.
