---
title: Pālabdīt kontrol panelas integrāciju
sidebar_position: 2
_i18n_hash: 2b4047e6b7b32a1c96a0b562e251cbfb
---
# Uzlabot kontrol panelas integrāciju

## Īsszums {#overview}
Enhance ir mūsdienu kontrol panelas, kas sniedz spēcīgas hostings automātiskās un pārvaldības iespējas. Šī integrācija ļauj automātiski sincronizēt domānos un pārvaldīt SSL sertifikātu starp Ultimate Multisite un Enhance Control Panel.

**Saistīta diskusija:** Skatieties [GitHub Diskusi #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265) pirms, lai saņemtu kopienas padomus un papildu informāciju.

## Funkcionalitātes {#features}
- Automātiskais domānu sincronizēšana, kad domāni ir mapeti Ultimate Multisite
- Automātiskais SSL sertifikāta sniegšana ar LetsEncrypt, kad DNS atrisinās
- Subdomēnu atbalsts tīklām, kas darbojas subdomēnu režīmā
- Domāna izslēgšana, kad tiek noņemtas mape
- Savienojuma tests API kredenci pārbaudīšanai

## Prasības {#requirements}

### Sistēmas prasības {#system-requirements}
- Enhance Control Panel ir instalēta un pieejama
- WordPress Multisite instalācija hostēta vai savienota ar Enhance serveri
- Apache vebservera (Enhance pašlaik atbalsta Apache konfigurācijas; LiteSpeed Enterprise ir pieejams samazinātā cenā)

### API piekļuve {#api-access}
Jums jābūt administratoram piekļuvei Enhance Control Panel, lai izdarītu API tokenus.

## Jums API kredenci iegūšana {#getting-your-api-credentials}

### 1. Izveidot API tokenu {#1-create-an-api-token}

1. Loginieties uz savu Enhance Control Panel kā administratoris
2. Nospressiet **Settings** (Iestatījumi) navigācijas menüs
3. Navigējieties uz **Access Tokens** (Piekļuves tokeni)
4. Nospressiet **Create Token** (Izveidot tokenu)
5. Doti tokenam doti nosaukumu (piemēram, "Ultimate Multisite Integrācija")
6. Piesaisti **System Administrator** (Sistēmas administratora) lomu
7. Laiks atkoptas datums:
   - Atstājiet tukšu, ja vēlaties, lai token nepadarītos nekad
   - Vai noteikiet konkrētu atkoptas datumu drošības iemeslu
8. Nospressiet **Create** (Izveidot)

Pēc izveidošanas jums tiks redzami **Access Token** un **Organization ID**. **Saglabājiet tos neatkarīgi**, jo token parādīsies tikai reizi.

### 2. Saņemiet savu Organization ID {#2-get-your-organization-id}

Organization ID redzams Access Tokens lapā, kur ir zils informācijas bloks ar rakstu "Org ID: {your_id}".

Organization ID ir UUID formātā: `d8554b6d-5d0d-6719-009b-fec1189aa8f3`

Jūs varat atrast klienta Organization ID šādi:
1. Atgriezties pie **Customers** lapas
2. Nospressiet **Manage customer** attiecīgajam klientam
3. Skatieties URL adresi - Organization ID ir alfanumeriskie raksti pēc `/customers/`

### 3. Saņemiet savu Server ID {#3-get-your-server-id}

Lai atrastu savu Server ID (kas ir nepieciešams domānu operācijām):

1. Enhance Control Panel-ā pārvietojieties uz **Servers**
2. Nospressiet serveri, kurā ir instalēts jūsu WordPress
3. Server ID (UUID formātā) redzams URL adredē vai servera detaļās
4. Alternatīvi, jūs varat izmantot API, lai sarakstītu serverus:

```bash
curl -s -X GET https://your-enhance-panel.com/api/servers \
  -H "Accept: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" | jq
```

Server ID seko UUID formātam: `00000000-0000-0000-0000-000000000000`

### 4. Saņemiet savu API URL {#4-get-your-api-url}

Jūsu API URL ir jūsu Enhance Control Panel URL ar pievienotu `/api/`:

```
https://your-enhance-panel.com/api/
```

**Svarīgi:** Nepieciešams ir `/api/` ceļšs. Kopas kļūdas ietver:
- Izmantot tikai domānu bez `/api/`
- Izmantot HTTP vietā HTTPS (HTTPS ir nepieciešams drošības dēļ)

## Konfigurācija {#configuration}

### Nepieciešami konstantes {#required-constants}

Pievienojiet šo konstantes savam `wp-config.php` failam:

// Pārdod kontrol panel integrācijas uzlabošanu
define('WU_ENHANCE_API_TOKEN', 'jūsu-bearer-token-lūk- šeit');
define('WU_ENHANCE_API_URL', 'https://jūsu-enhance-panel.com/api/');
define('WU_ENHANCE_SERVER_ID', 'jūsu-servera-uuid-lūk- šeit');

### Iestatījumi ar integrācijas palīdzību (Wizard) {#setup-via-integration-wizard}

1. Jūrējieties savā WordPress admin panelā uz **Ultimate Multisite** > **Settings**.
2. Navigējiet uz tabuli **Integrations**.
3. Atrodiet **Enhance Control Panel Integration** un noklikšķiniet uz **Configuration**.
4. Palīdzība (wizard) visbiežāk jums novirzī:
   - **1. soļums:** Ievads un funkciju ievades pārskats
   - **2. soļums:** Ievadiet savas API atļaujas (Token, API URL, Server ID)
   - **3. soļums:** Pārtests savienojums
   - **4. soļums:** Atzīmējiet un aktivizējiet

Jūs varat izvēlēties:
- Laistiet palīdzību automātiski ieviekt konstantes jūsu `wp-config.php` failā
- Kopēt konstantu definīcijas un pievienot tās maniski

## Papildu WordPress iestatījumi {#additional-wordpress-configuration}

Atbildot uz saimnieku atsauksmēm ([Diskussija #265](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)), jums var būt nepieciešams konfigurēt šos papildu iestatījumi:

### .htaccess Konfigurācija {#htaccess-configuration}

Ja jums ir problēmas ar domānu mapi (mapping):
1. Izslēdziet oriģinālo Enhance `.htaccess` failu
2. Atstājiet to vietā standarta WordPress Multisite `.htaccess` faila

### Cookie konstantes {#cookie-constants}

Pievienojiet šīs konstantes `wp-config.php` failam, lai nodrošinātu pareizu cookie pārvaldību mapeju domānu:

```php
define('COOKIE_DOMAIN', $_SERVER['HTTP_HOST']);
define('COOKIEPATH', '/');
define('ADMIN_COOKIE_PATH', '/');
```

## Kā tas darbojas {#how-it-works}

### Kad tiek mapi (mapping) domāns {#when-a-domain-is-mapped}

1. Lietotājs mapē ir personālajām domēniem Ultimate Multisite (vai tiek izveidots jauns sites subdomēnu režīmā).
2. Integrācija sūta POST pieprasījumu Enhance API: `/servers/{server_id}/domains`.
3. Enhance pievieno domēnu jūsu servera konfigurācijai.
4. Kad DNS atrisinās uz jūsu serveru, Enhance automātiski sniedz SSL sertifikātu ar LetsEncrypt.
5. Domēns kļūst aktīva ar HTTPS.

### Kad domēnu noņemšana {#when-a-domain-is-removed}

1. Ultimate Multisite-ā tiek izslēgta domēna mapēšana.
2. Integrācija jautā Enhance, lai atrastu domēnas ID.
3. Sūta DELETE pieprasījumu uz: `/servers/{server_id}/domains/{domain_id}`.
4. Enhance noņem domēnu jūsu servera konfigurācijai.

### DNS un SSL pārbaude {#dns-and-ssl-checking}

Ultimate Multisite ietver integrētu DNS un SSL pārbaudi:
- Jūs varat konfigūriju intervali pārbaudes **Domain Mapping Settings** (default: 300 sekund/5 minūtes).
- Sistēma pārbauda DNS propagāciju pirms domēnas atzīmējot to par aktīvu.
- SSL sertifikāta saskaņas ir automātiski pārbaudītas.
- Enhance automātiski sniedz SSL, tāpēc man nepieciešams manuāli konfigūruēt SSL.

## Konfigurācijas apstiprināšana {#verifying-setup}

### Pārbaude savienojumu {#test-the-connection}

1. Integrācijas wizardā izmantojiet **Test Connection** solīti.
2. Plugin mēģina sarakstīt domēnus jūsu serverā.
3. Svarīgi ziņojums apstiprina:
   - API kredenci ir pareizi
   - API URL ir pieejams
   - Servera ID ir pareizs
   - Uzliekumi ir labi iestati

### Domēnas mapēšanas pēc domēnas mapēšanas {#after-mapping-a-domain}

1. Mapējiet tests domēnu Ultimate Multisite-ā.
2. Pārbaudiet Ultimate Multisite logus (**Ultimate Multisite** > **Logs** > **integration-enhance**).
3. Apstipriniet Enhance Kontrol panelī, ka domēns tika pievienots:
   - Dodieties uz **Servers** > **Jums servera** > **Domains**.
   - Jauns domēns jāparādās sarakstā.
4. Kad DNS propagējas, pārbaudiet, vai SSL ir automātiski sniegts.

## Kļūdu likums (Troubleshooting) {#troubleshooting}

### API savienojumu problēmas {#api-connection-issues}

**Kļūda: "Enhance API savienojuma neizveidots" (Failed to connect to Enhance API)**
- Pārbaudiet, vai `WU_ENHANCE_API_URL` beidzjas `/api/` rakstiem.
- Nodrošiniet, ka jūs izmantojat HTTPS, bet ne HTTP.
- Pārbaudiet, vai Enhance panel ir pieejama no jūsu WordPress servera.
- Pārbaudiet, vai nav firewalli, kas blokē savienojumu.

**Kļūda: "Enhance API token nav atrodīts" (Enhance API Token not found)**
- Nodrošiniet, ka `WU_ENHANCE_API_TOKEN` ir definēts `wp-config.php` failā.
- Pārbaudiet, vai token nav izdzēsts vai pēdējais laiks nebeidzies Enhance sistēmā.
- Pārbaudiet, vai tokena vērtībā nav vārdu kļūdas (typos).

**Kļūda: "Server ID nav konfiguriēts" (Server ID is not configured)**
- Pārbaudiet, vai `WU_ENHANCE_SERVER_ID` ir definēts `wp-config.php` failā.
- Nodrošiniet, ka Server ID ir pareizais UUID formātāts.
- Confirmējiet, ka serveri ir pieejams jūsu Enhance panelī.

### Domen nepievienots (Domain Not Added) {#domain-not-added}

**Pārbaudiet logus:**
1. Dodieties uz **Ultimate Multisite** > **Logs**.
2. Filtrējiet pēc `integration-enhance`.
3. Meklējiet kļūdu ziņojumus, kas norāda uz problēmu.

**Parasti iemesli:**
- Nepareizais domēna nosaukuma formāts.
- Domēns jau ir pieejams Enhance sistēmā.
- Neatkarīgi API atļaujas (nodrošiniet, ka tokenam ir "System Administrator" loma).
- Servera ID nepiemērojams ar patiekošu serveri Enhance panelī.

### SSL sertifikāta problēmas {#ssl-certificate-issues}

**SSL nekonfigūrots:**
- Pārbaudiet, vai DNS punkti norāda uz jūsu servera IP adresi.
- Pārbaudiet, vai domēns atrisinās pareizi: `nslookup yourdomain.com`.
- Enhance prasa, lai DNS atrisinātos pirms tas, kad varēs konfigūrirot SSL sertifikātu.
- SSL sertifikāta konfigūracija parasti aizņem 5–10 minūtes pēc DNS propagācijas.
- Pārbaudiet Enhance Kontrol panelas logus uz SSL specifiskām kļūdu ziņojumiem.

**Manuāla SSL problēmu likums Enhance panelā:**
1. Dodieties uz **Servers** > **Jums serveris** > **Domeni**.
2. Atrodiet savu domēnu un pārbaudiet tās SSL statusu.
3. Ja nepieciešams, varat manuāli izraisīt SSL sertifikāta konfigūraciju.

### DNS pārbaudes intervāls (DNS Check Interval) {#dns-check-interval}

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

---
Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja! Ja, ja, ja!

### Jaunojumi domenus vai SSL sertifikāti attivēšanai ir pārāk ilgi: {#authentication-errors}
1. Ieiet uz **Ultimate Multisite** > **Settings** > **Domain Mapping**.
2. Atrodiet iestatījumu **DNS Check Interval**.
3. Pārējiet no defaulta 300 sekundiem uz mazāku vērtību (minimāls: 10 sekundes).
4. **Piezīme:** Mazākas atkarības laikas nozīmē biežākus pārbaudes, bet augstāka servera slodze.

### Autentifikācijas kļūdas {#log-analysis}

**HTTP 401/403 kļūdas:**
- Pievienojiet (regenerējiet) savu API tokeni Enhance sistemā.
- Noteikiet, ka tokenam ir **System Administrator** loma.
- Pārbaudiet, vai tokenis nav pēdējais.
- Nodrošinieties, ka izmantojat pareizu Organizācijas ID (lai gan tas parasti nav nepieciešams URL adresē).

### Log analīze {#api-reference}

Iespējiet detalizētu logu:
```php
// Pievienojiet wp-config.php failā uz uzlabotu debugu
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

Pēc tam pārbaudiet logus šajos vietās:
- Ultimate Multisite logi: **Ultimate Multisite** > **Logs**.
- WordPress debug log: `wp-content/debug.log`.
- Enhance panela logi: Pieejami Enhance admin interfejsā.

## API referance {#authentication}

### Autentifikācija {#common-endpoints-used}
Visas API pieprasījumus izmanto Bearer token autentifikāciju:
```
Authorization: Bearer YOUR_TOKEN_HERE
```

### Parasti lietotie endpoints {#full-api-documentation}

**Sarakstīt serverus:**
```
GET /servers
```

**Sarakstīt domenus konkrētā serverā:**
```
GET /servers/{server_id}/domains
```

**Pievienot domēnu:**
```
POST /servers/{server_id}/domains
Body: {"domain": "example.com"}
```

**Izvēlēties (izslēgt) domēnu:**
```
DELETE /servers/{server_id}/domains/{domain_id}
```

### Pilna API dokumentācija {#best-practices}
Pilna API dokumentācija: [https://apidocs.enhance.com](https://apidocs.enhance.com)

## Labākās praktikas {#security}

### Drošums (Security) {#performance}
- **Nekad neietot API tokenus versiju kontrolē**
- Tokenus glabāt `wp-config.php` failā, kas jāizņem no Gita
- Izmantojiet tokenus ar atbilstošām iestatas (Sistēmas administratoris, ja vajadzīgs pilns integrācija)
- Iestati tokenu izkārtojumu datumu produktīvās vidi
- Periodiski mainiet tokenus

### Darba veiksmi (Performance) {#monitoring}
- Izmantojiet default DNS pārbaudes intervālu (300 sekund), lai izvairītos no pārāk daudz API attiecībām
- Uzraudziet Enhance serveru resursus, ja veiciet lielas domēnu operācijas
- Izvēlieties atsevišķi domēnu pievienošanos, ja vienlaikus mapejojat vairākus domēnus

### Uzraudzība (Monitoring) {#additional-resources}
- Regulāri pārbaudiet Ultimate Multisite logus integrācijas kļūdu noteikšanai
- Iestati uzraudzību neizveidoto domēnu pievienošanos
- Noteiciet, vai SSL sertifikāti tiek izveidoti pareizi
- Uzraudziet Enhance servera kapacitāti un domēnu ierobežojumus

## Papildu resursi (Additional Resources) {#support}

- **Enhance oficiālais dokuments:** [https://enhance.com/docs](https://enhance.com/docs)
- **Enhance API dokuments:** [https://apidocs.enhance.com](https://apidocs.enhance.com)
- **Enhance saite (Community Forum):** [https://community.enhance.com](https://community.enhance.com)
- **GitHub diskusija:** [Issue #265 - Enhance Integration Tips](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions/265)
- **Ultimate Multisite domēnu mapejošanas gida:** Skatīt wiki lapu "How to Configure Domain Mapping v2"

## Atbalsts (Support) {#notes}

Ja jums radīsies problēmas:
1. Pārbaudiet iepriekšminēto Kļūdu likumu (Troubleshooting) sadaļu
2. Atspējiet Ultimate Multisite logus
3. Sazinājieties ar [GitHub diskusijām](https://github.com/Multisite-Ultimate/ultimate-multisite/discussions)
4. Sazinājieties ar Enhance atbalstu panelas specifiskās problēmu gadījumā
5. Izveido jaunu diskusiju ar detaļai kļūdu logiem, lai saņemtu komunitātes palīdzību

## Piezīmes (Notes)

Šī integrācija strādā tikai ar domēnu aliasiem; Enhace automātiski pārvaldī SSL sertifikātu.
Integrācija atbalsta gan personīgu domēnu mappers un subdomēnu balstītos vietnes.
Automātiskās www subdomēnu izveide var konfigurēt Domēnu Mappers iestatījumos.
Enhace pašlaik atbalsta Apache konfigurācijas (pieejams LiteSpeed Enterprise).
Domēna izņemšana Ultimate Multisite nozīmē, ka domēna tiek izņemta Enhace, bet saistītie SSL sertifikāti nevar automātiski iztikt.
