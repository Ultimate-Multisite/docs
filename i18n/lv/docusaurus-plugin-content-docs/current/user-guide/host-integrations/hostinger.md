---
title: Hostinger (hPanel) integrācija
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Integrācija ar Hostinger (hPanel)

## Īskatsauce {#overview}

Hostinger ir populārs veb hostings sniedzējs, kuram ir mūsdienu kontrol panelis hPanel. Ultimate Multisite Hostinger integrācija ļauj automātiski sincronizēt domānu starp Ultimate Multisite un Hostinger's hPanel, ļaujot jums automātiski pārvaldīt domānu mappers un subdomānu tieši no savas WordPress admina.

## Funkcionalitātes {#features}

- Automātiska addon domānu izveide hPanel-ā
- Automātiskās subdomānu izveide hPanel-ā (subdomānu multisite instalācijām)
- Domānas atņemšana, ja mappers tiek noņemti
- Neparetrināma integrācija ar Hostinger's domānu pārvaldības API

## Prasības {#requirements}

Lai izmantotu Hostinger integrāciju, jums nepieciešams:

1. Hostinger konta ar hPanel piekļuvu
2. API token no Hostinger
3. Lūdzu definēt šos konstantes savā `wp-config.php` failā:

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

Optiāli, jūs varat definēt arī:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## Iestatījumu instrukcijas {#setup-instructions}

### 1. Izveidiet savu Hostinger API token {#1-generate-your-hostinger-api-token}

1. Loginieties savā Hostinger kontā un piekļūst hPanel
2. Navigējieties uz **Account Settings** → **API Tokens**
3. Nospressiet **Create New Token** (Izveidot jaunu tokenu)
4. Doti savam tokenam apzīmējiet aprakstītu nosaukumu (piemēram, "Ultimate Multisite")
5. Izvēlieties nepieciešamos iestatījumus:
   - Domain management (Domānu pārvaldība)
   - Subdomain management (Subdomānu pārvaldība)
6. Kopējiet izveidoto tokenu un saglabājiet to droši

### 2. Atrod savu konta ID {#2-find-your-account-id}

1. HPanel-ā navigējieties uz **Account Settings** → **Account Information** (Kontas informācija)
2. Jūsu Konta ID ir redzams šajā lapā
3. Kopējiet un saglabājiet šo ID nākamajai instrukcijai

### 3. Pievienojiet konstantes `wp-config.php` failam {#3-add-constants-to-wp-configphp}

Pievienojiet šīs konstantes savam `wp-config.php` failam:

```php
define('WU_HOSTINGER_API_TOKEN', 'jūsu hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'jūsu hostinger_account_id');
```

Ja, ja, ja! Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja.

Ja, ja, ja! Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja.

Ja, ja, ja! Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja. Ja, ja, ja.

If jūsu Hostinger konts ir ar atšķirīgu API galvu, jūs varat to pielāgot:

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### 4. Iespējot integrāciju {#4-enable-the-integration}

1. Savienojieties ar savu WordPress admini un dodieties uz **Ultimate Multisite > Settings** (Ievēro, ka šis ir Ultimate Multisite).
2. Navigējiet uz tabuli **Domain Mapping**.
3. Scrolliet nedirgus līdz **Host Integrations**.
4. Iespējot integrāciju **Hostinger (hPanel)**.
5. Nospiediet **Save Changes** (Saglabāt izmaiņas).

## Kā tas darbojas {#how-it-works}

### Addon domēni {#addon-domains}

Kad jūs mapojat domēnu Ultimate Multisite:

1. Integrācija sūta pieprasījumu Hostinger API, lai domēnu pievienotu kā addon domēnu.
2. Domēns ir konfigurēts, lai punktu savu galveno direktoriju (root directory).
3. Kad mapējums tiek atņemts, integrācija automātiski izņem addon domēnu no hPanel.

### Subdomēni {#subdomains}

Subdomēnu multisite instalācijām, kad tiek radīts jauns vietne:

1. Integrācija izņem subdomēna daļu no pilnā domēna.
2. Tas sūta pieprasījumu Hostinger API, lai pievienotu subdomēnu.
3. Subdomēns ir konfigurēts punktot savu galveno direktoriju (root directory).

## Saviņi svarīgas paziņojumi {#important-notes}

- Integrācija izmanto Hostinger REST API komunikācijā ar jūsu kontu.
- Jums API tokenam jābūt nepieciešamo iestatījumam domēnu un subdomēnu pārvaldīšanai.
- Integrācija nav atbildīga par DNS konfigurēšanu; domēni ir jāpunktu jau Hostinger kontam.
- API pieprasījumi tiek veikti droši caur HTTPS.
- Saglabājiet savu API tokenu drošu un nekad neizplatiet to publiski.

## Kļūdu likums {#troubleshooting}

### API saistīšanās problēmas {#api-connection-issues}

* Pārbaudiet, vai jūsu API token ir pareizs un nav pēdējais termiņš.
* Pārbaudiet, vai jūsu konta ID ir pareizs.
* Nodrošiniet, ka jūsu API tokenam ir nepieciešami atļautumju domānu pārvaldīšanai.
* Pārbaudiet, vai jūsu Hostinger konta ir aktīva un labi lietota.

### Domāns nav pievienots {#domain-not-added}

* Pārbaudiet Ultimate Multisite logus meklējot kļūdas ziņojumus.
* Pārbaudiet, vai domāns vēl nav pievienots jūsu Hostinger kontai.
* Nodrošiniet, ka jūsu Hostinger kontam nav atteikts ierobežums papildu domānu (addon domains) lietošanai.
* Apstipriniet, ka domāns ir pareizi nokļauts uz jūsu Hostinger nameserveriem.

### SSL sertifikāta problēmas {#ssl-certificate-issues}

* Integrācija neapkalpo SSL sertifikātu izdošanu.
* Hostinger parasti sniedz bezmaksas SSL sertifikātus ar AutoSSL.
* Jūs varat pārvaldīt SSL sertifikatus tieši hPanelī sadaļā **SSL/TLS**.
* Alternatīvi, izmantojiet Let's Encrypt ar Hostinger AutoSSL funkciju.

## Atbalsts {#support}

Papildu palīdzības saistībā uz Hostinger integrāciju lūdzu apskati:

* [Hostinger API Dokumentācija](https://support.hostinger.com/en/articles/4286-api-documentation)
* [Ultimate Multisite Dokumentācija](/)
* [Ultimate Multisite Atbalsts](https://ultimatemultisite.com/support)
