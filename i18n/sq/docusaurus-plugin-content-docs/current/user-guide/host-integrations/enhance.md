---
title: Përmirëso integrimin me Kontrol Panelën
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Përmirësojmë Integrimin me Control Panel

## Përmbledhje {#overview}
Enhance është një panel modern kontrolli që ofron automatizim dhe menaxhim të fuqishëm hosting-ut. Kjo integrim lejon sinkronizimin automatik të domenve dhe menaxhimin e sertifikave SSL midis Ultimate Multisite dhe Enhance Control Panel.

**Diskutim i lidhur:** Shiko [GitHub Discussion #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) për këshilla komunitare dhe informacion shtesë.

## Karakteristikat {#features}
- Sinkronizim automatik i domenve kur domene janë të mapi në Ultimate Multisite
- Provizionim automatik i sertifikave SSL përmes LetsEncrypt kur DNS zgjat
- Mbështetje për ndër-domene (subdomain) për rrjete që punojnë në modin e subdomainit
- Heqja e domeneve kur hiqni mapi
- Testimi i lidhjes për të vërtitu kredencialet API

## Kërkesat {#requirements}

### Kërkesat Sistemin {#system-requirements}
- Enhance Control Panel i instaluar dhe i aksesueshëm
- Instalimi WordPress Multisite i hostuar në ose lidhur me një server Enhance
- Server web Apache (Enhance mbështet aktualisht konfigurimet Apache; LiteSpeed Enterprise është i disponues me kosto ulur)

### Aksesi API {#api-access}
Duhet të keni akses administrator në Enhance Control Panel për të krijuar token API.

## Marrja e Kredencave API-të tuaja {#getting-your-api-credentials}

### 1. Krijoni një Token API {#1-create-an-api-token}

1. Logojuni në Enhance Control Panel si administrator
2. Klikoni te **Settings** (Opsione) në menyn e navigimit
3. Navigjoni drejt **Access Tokens** (Tokenet e Qasjes)
4. Klikoni te **Create Token** (Krijoni Token)
5. I jepni tokenit një emër përshkrues (p.sh., "Ultimate Multisite Integration")
6. Vendosni rolin **System Administrator** (Administrator Sistemit)
7. Për datën e skadimit:
   - Lëreni të zbehtë nëse dëshironi që tokeni të mos piqet kurrë
   - Ose vendosni një datë specifike skadimi për qëllime sigurie
8. Klikoni te **Create** (Krijoni)

Pasi krijoni, do të shfaqen **Access Token** dhe **Organization ID**. **Ruani këto menjëherë**, sepse tokeni do të shfaqet vetëm një herë.

### 2. Merrni ID-n tuaj të Organizatës (Organization ID) {#2-get-your-organization-id}

ID-ja e Organizatës shfaqet në faqen Access Tokens, brenda një kuti informacioni blu me etiketën "Org ID: {your_id}".

ID-ja e Organizatës është një UUID i formatuar si: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Kubuntu mund të gjeni ID-në e Organizatës të klientit duke bërë këto hapa:
1. Shkoni te faqja **Customers** (Klientët)
2. Klikoni në **Manage customer** (Menaxho klientin) për klientin në shq të rrelevant
3. Shikoni URL-in - ID-ja e Organizatës është karakteret alfanumërike pas `/customers/`

### 3. Merrni ID-n tuaj të Serverit (Server ID) {#3-get-your-server-id}

Për të gjetur ID-n tuaj të Serverit (i nevojshëm për operacionet në domen):

1. Në Enhance Control Panel, shkoni te **Servers** (Serverët)
2. Klikoni te server ku po ekzekutohet instalimi juaj i WordPress-it
3. ID-ja e Serverit (në format UUID) do të jetë e dukshme në URL ose detajet e serverit
4. Alternativisht, mund të përdorni API për të listuar serverët:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

ID-ja e serverit ndjek formatin UUID: `00000000-0000-0000-0000-000000000000`

### 4. Merrni URL-n tuaj API (API URL) {#4-get-your-api-url}

URL-ja juaj API është URL-ja e Enhance Control Panel tuaj me shtuar `/api/`:

```
https://your-enhance-panel.com/api/
```

**E Rëndësishme:** Rruga `/api/` është e nevojshme. Gabimet e zakonshme përfshijnë:
- Përdorimin vetëm të domenit pa `/api/`
- Përdorimin HTTP në vend të HTTPS (HTTPS është i nevojshëm për sigurinë)

## Konfigurimi {#configuration}

### Konstante të Nevojshme {#required-constants}

Shtoni konstante të mëposhtme në skedarin tuaj `wp-config.php`:

// Përmirësojmë integrimin me Control Panel
define('WU_ENHANCE_API_TOKEN', 'token-i-tuaj-këtu');
define('WU_ENHANCE_API_URL', 'https://your-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'id-i-serverit-tuaj-këtu');

### Konfigurimi përmes Wizard-it të Integrimit {#setup-via-integration-wizard}

1. Në adminin tuaj WordPress, shkoni te **Ultimate Multisite** > **Settings**
2. Navigjuni te tab **Integrations** (Integrime)
3. Gjeni **Enhance Control Panel Integration** dhe klikoni **Configuration** (Konfigurim)
4. Wizard-i do t'ju udhëheqë përmes këtyre hapat:
   - **Hapi 1:** Hyrje dhe përshkrimi i veçorive
   - **Hapi 2:** Vendosni kredencialet tuaja API (Token, URL API, ID Server)
   - **Hapi 3:** Testoni lidhjen
   - **Hapi 4:** Rishikoni dhe aktivizoni

Ju mund të zgjidhni të:
- Leni që wizard-i të injektojë konstante në skurtin tuaj `wp-config.php` automatikisht
- Kopjoni definicionet e konstanteve dhe i shtoni manualisht

## Konfigurime Shtesë WordPress {#additional-wordpress-configuration}

Bazuar në feedback-in e komunitetit ([Diskutimi #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), mund të keni nevojë të konfigurojë këto cilësime shtesë:

### Konfigurimi i .htaccess {#htaccess-configuration}

Nëse hasni probleme me mapiet e domenit (domain mapping):
1. Fshini skurtin origjinal `.htaccess` të Enhance
2. Zëvendësoni atë me skurtin standard WordPress Multisite `.htaccess`

### Konstante Cookie {#cookie-constants}

Shtoni këto konstante në `wp-config.php` për të siguruar trajtimin e duhur të cookie-ve nëpër domenët e mapiet:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Si Funksionon {#how-it-works}

### Kur Mapohet një Domen {#when-a-domain-is-mapped}

(Këtu do të vendoset përshkrimi i sekuencës së hapa, duke shprehur se si funksioni ndryshon kur lidhni një domen me sistemin e multisite.)

1. Përdoruesi mapon një domen të personalizuar në Ultimate Multisite (ose krijohet një faqe e re në modin e subdomainit).
2. Integracioni dërgon një kërkesë POST te API-ja e Enhance: `/servers/{server_id}/domains`
3. Enhance shton domenit në konfigurimin e serverit tuaj
4. Kur DNS-i zgjat tek serveri juaj, Enhance automatikisht providhon një certifikatë SSL përmes LetsEncrypt
5. Domeni bëhet i aktivizuar me HTTPS

### Kur Hiqet Një Domen {#when-a-domain-is-removed}

1. Mapimi i domeneve hiqet në Ultimate Multisite
2. Integracioni pyet Enhancen për të gjetur ID-në e domeneve
3. Dërgohet një kërkesë DELETE te: `/servers/{server_id}/domains/{domain_id}`
4. Enhance heq domenit nga konfigurimi i serverit tuaj

### Kontrolli i DNS dhe SSL {#dns-and-ssl-checking}

Ultimate Multisite përfshin kontrollin e integruar të DNS-it dhe SSL-it:
- Mund të konfigurosh intervalin e kontrollit në **Domain Mapping Settings** (viftesa: 300 sekonda/5 minuta)
- Sistemi do të verifikojë propagimin e DNS-it para se të etiketojë domenin si aktiv
- Vlefshmëria e certifikatës SSL vërtetohet automatikisht
- Enhance menaxhon provizionimin e SSL-it automatikisht, kështu që konfigurimi manual i SSL-it nuk është i nevojshëm

## Verifikimi i Konfigurimit {#verifying-setup}

### Testoni Lidhuritjen {#test-the-connection}

1. Në Wizardin e Integracionit, përdorni hapin **Test Connection**
2. Plugin-i do të provojë të listojë domenët në serverin tuaj
3. Një mesazh sukses konfirmon:
   - Kredencialet e API-së janë të sakta
   - URL-ja e API-së është i aksesueshme
   - ID-ja e serverit është valide
   - Permisionet janë vendosur si duhet

### Pas Mapimit të Një Domen {#after-mapping-a-domain}

1. Maponi një domen test në Ultimate Multisite
2. Kontrolloni logjet e Ultimate Multisite (**Ultimate Multisite** > **Logs** > **integration-enhance**)
3. Verifikoni në Control Panel-in e Enhance se domeni u shto:
   - Shkoni te **Servers** > **Your Server** > **Domains**
   - Domeni i ri duhet të shfaqet në listë

Kur DNS-i propagohet, verifikoni që SSL-i providhohet automatikisht

## Zgjidhja Problemet (Troubleshooting) {#troubleshooting}

### Probleme me Lidhur API-së {#api-connection-issues}

**Gabimhshtia: "Failed to connect to Enhance API" (Dështoi të lidhesh me Enhance API)**
- Kontrollo që `WU_ENHANCE_API_URL` të përfshijë `/api/` në fund.
- Sigurohu që po përdor HTTPS, jo HTTP.
- Kontrollo që paneli Enhance të jetë i aksesueshëm nga serveri juaj WordPress.
- Verifiko që nuk ka rregulla firewall që bllokojnë lidhjen.

**Gabimhshtia: "Enhance API Token not found" (Tokeni i API-së Enhance nuk u gjet)**
- Sigurohu që `WU_ENHANCE_API_TOKEN` të jetë i definuar në `wp-config.php`.
- Verifiko që tokeni nuk është fshirur ose ka skaduar në Enhance.
- Kontrollo për gabime shkrimi (typo) në vlerën e tokenit.

**Gabimhshtia: "Server ID is not configured" (ID i Serverit nuk është konfiguruar)**
- Verifiko që `WU_ENHANCE_SERVER_ID` të jetë i definuar në `wp-config.php`.
- Sigurohu që ID-ja e Serverit të jetë në formatin e vlefshëm UUID.
- Konfirmo se serveri ekziston në panelin tuaj Enhance.

### Domeni Nuk është Shtuar (Domain Not Added) {#domain-not-added}

**Kontrollo logjet:**
1. Shko te **Ultimate Multisite** > **Logs**.
2. Filtro me **integration-enhance**.
3. Kërko mesazhe gabimi që tregojnë problemin.

**Shkaqet e zakonshme:**
- Format e pa vlefshme të emrit të domenit.
- Domeni tashmë ekziston në Enhance.
- Leje të pazajshme API (sigurohu që tokeni ka rolin System Administrator).
- ID i Serverit nuk përputhet me serverin aktual në Enhance.

### Probleme me Sertifikatën SSL (SSL Certificate Issues) {#ssl-certificate-issues}

**Nuk po proviziohet SSL:**
- Kontrollo që DNS të tregojë drejt adresës IP të serverit tuaj.
- Kontrollo që domeni të zgjidhet si duhet: `nslookup yourdomain.com`.
- Enhance kërkon që DNS të zgjidhet para se mund të proviziojë SSL.
- Provizioja e SSL zakonisht varet 5-10 minuta pas propagimit të DNS-it.
- Kontrollo logjet në paneli i kontrollit Enhance për gabime specifike të SSL-së.

**Zgjidhje manuale e problemeve me SSL në Enhance:**
1. Shko te **Servers** > **Your Server** > **Domains**.
2. Gjej domenit tuaj dhe kontrolloni statusin e SSL-së së tij.
3. Mund të proviziojë manualisht SSL-në nëse është e nevojshme.

### Interval i Kontrollit DNS (DNS Check Interval) {#dns-check-interval}

Nëse domenet ose sertifikat SSL po marrin shumë kohë për të aktivizuar:
1. Shko te **Ultimate Multisite** > **Settings** > **Domain Mapping**
2. Gjej cilësimin **DNS Check Interval** (Interval i kontrollit DNS)
3. Rregullo nga vlerat e paracaktuar 300 sekonda në një vlerë më të ulët (minimal: 10 sekonda)
4. **Shënim:** Intervalet më të ulëta do të thonë kontroll më të shpeshtë, por ngarkesë më të lartë në server

### Gabime të Autentifikimit {#authentication-errors}

**Gabimet HTTP 401/403:**
- Rregjigjuni tokenin tuaj API në Enhance
- Verifiku që tokeni ka rolin **System Administrator** (Administrator Sistemit)
- Kontrollo që tokeni nuk është zgjetur (nuk ka skaduar)
- Sigurohu që po përdorni ID-në e duhur të Organizatës (edhe pse zakonisht nuk kërkohet në URL)

### Analiza Logjesh (Log Analysis) {#log-analysis}

Aktivizo logjet detajore:
```php
// Shtoni këtë në wp-config.php për debug më të avancuar
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Pastaj kontrolloni logjet në:
- Logjet e Ultimate Multisite: **Ultimate Multisite** > **Logs**
- Logji i debug të WordPress: `wp-content/debug.log`
- Logjet e paneli Enhance: Të disponues në interfejsin admin të Enhancës

## Referenca API (API Reference) {#api-reference}

### Autentifikimi (Authentication) {#authentication}
Të gjitha kërkesat API përdorin autentifikimin Bearer token:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Pikat Kryesore të Përdoruara (Common Endpoints Used) {#common-endpoints-used}

**Listim i Serverëve:**
```
GET /servers
```

**Listimi i Domenive në një Server:**
```
GET /servers/{server_id}/domains
```

**Shtoni një Domen:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Fshini një Domen:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Dokumentacioni i Plotë API (Full API Documentation) {#full-api-documentation}
Dokumentacioni i plotë i API: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Praktikat më të Mirat (Best Practices) {#best-practices}

### Siguria (Security) {#security}
- **Nukoni kur komit tokenet API në version control**
- Ruani tokenet në `wp-config.php` që duhet të përjashtohet nga Git
- Përdorni tokenet me leje të përshtatshme (System Administrator për integrim të plotë)
- Vendosni datat e skadimit të tokenit për mjediset prodhimi
- Rrotuloni tokenet periodikis

### Performancë (Performance) {#performance}
- Përdorni intervalin standard të kontrollit DNS (300 sekonda) për të shmangur thirrjet e tepër API
- Monitoroni burimet e serverit Enhance kur po kryeni operacione me skale të mëdha të domenve
- Konsideroni të ndryshoni shtimin e domenve nëse mapi shumë domaine njëkohësisht

### Monitorim (Monitoring) {#monitoring}
- Kontrolloni rregullisht logjet e Ultimate Multisite për gabime të integrimit
- Vendosni monitorim për shtimet e dështuara të domenve
- Verifikoni që sertifikat SSL po proviziohen si duhet
- Mbani në sy kapacitetin dhe kufizimet e serverit Enhance

## Burime Shtesë (Additional Resources) {#additional-resources}

- **Dokumentacioni Zyrtar i Enhance:** [https://enhance.com/docs](https://enhance.com/docs)
- **Dokumentacioni API i Enhance:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Forum Komunitari i Enhance:** [https://community.enhance.com](https://community.enhance.com)
- **Diskutimi në GitHub:** [Issue #265 - Këshilla për Integrimin e Enhance](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Udhëzuesi i Ultimate Multisite për Mapeimin e Domenive:** Shikoni faqen wiki "Si të Konfigurosh Mapeimin e Domenive v2"

## Mbështetje (Support) {#support}

Nëse hasni probleme:
1. Kontrolloni seksionin Troubleshooting sipër
2. Rishikoni logjet e Ultimate Multisite
3. Konsultoni [Diskutimet në GitHub](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Kontaktoni mbështetjen e Enhance për çështje specifike të paneli
5. Krijoni një diskutim të ri me logje gabimi të detajuara për ndihmë komunitare

## Shënime (Notes) {#notes}

Ky integrim menaxhon vetëm aliaset e domenit; Enhance menaxhon automatikisht SSL-in.
Integrimi mbështet si mape të domeneve personalizuara ashtu edhe faqe me subdomain.
Krijimi automatik i subdomain-eve www mund të konfigurohet në cilësimet e Mapeve të Domenive (Domain Mapping).
Enhance mbështet aktualisht konfigurimet Apache (është i disponueshëm LiteSpeed Enterprise).
Fishja e domeneve nga Ultimate Multisite do të fshihet nga Enhance, por mund të mos fshihet menjëherë sertifikatat SSL që janë të lidhura.
