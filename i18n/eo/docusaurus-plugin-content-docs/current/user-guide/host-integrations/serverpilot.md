---
title: Integriteco de ServerPilot
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot Integrazione {#serverpilot-integration}

## Aprovizio {#overview}
ServerPilot estas cloud servco por hospabli WordPress kaj alia PHP-vobĝaj sitawebajn sur serveroj de DigitalOcean, Amazon, Google aŭ alia servera providanto. Ĉi tiu integriĝo permesas aŭtomatan domen sincronigon kaj SSL-sertifikoĵon manĝestion inter Ultimate Multisite kaj ServerPilot.

## Funkcioj {#features}
- Aŭtomata domeno sincronigo
- SSL-sertifiko manĝestro kun Let's Encrypt
- Aŭtomata SSL-renovo

## Requisitoj {#requirements}
La seguenti konstantaĵoj devas esti definita en via `wp-config.php` fakto:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'via_client_id');
define('WU_SERVER_PILOT_API_KEY', 'via_api_key');
define('WU_SERVER_PILOT_APP_ID', 'via_app_id');
```

## Monti Instrukoj {#setup-instructions}

### 1. Akcepte Via ServerPilot API Credencijoj {#1-get-your-serverpilot-api-credentials}

1. Logu-sin al via ServerPilot dashboardo
2. Aliri "Account" > "API"
3. Kreu novan API-claven, se vi ne havas un
4. Kopiu vian Client ID kaj API-claven

### 2. Akcepte Via App ID {#2-get-your-app-id}

1. En via ServerPilot dashboardo, aliri "Apps"
2. Selektu la appon, kie via WordPress multisite estas hospita
3. La App ID estas vidbla en la URL: `https://manage.serverpilot.io/apps/{APP_ID}`

### 3. Aggivi Konstantaĵojn al wp-config.php {#3-add-constants-to-wp-configphp}

Aggivu la seguenti konstantaĵoj al via `wp-config.php` fakto:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'via_client_id');
define('WU_SERVER_PILOT_API_KEY', 'via_api_key');
define('WU_SERVER_PILOT_APP_ID', 'via_app_id');
```

### 4. Aktivado de la Integriĝo {#4-enable-the-integration}

1. En via WordPress admino, aliri Ultimate Multisite > Settings
2. Navigu al la tabelo "Domain Mapping" (Domeno-mapado)
3. Scrollu nedon al "Host Integrations" (Hospita integriĝoj)
4. Aktivu la ServerPilot integriĝon
5. Kliku sur "Save Changes" (Salva ŝanĝojn)

## Kiel Ĝi Funkcias {#how-it-works}

### Domeno Sincronigo {#domain-syncing}

Kiam domeno estas mapita en Ultimate Multisite:

1. La integracio rekuperas la lista aktual de domen de ServerPilot
2. Ĝi adigas la nova domen al la listo (joo la versio www se estas aplika)
3. Ĝi sendas la aktualizitan liston al ServerPilot per la API
4. ServerPilot aktualizas la liston de domen por via de viajn aplikacio

### Administrado de Sertifikato SSL {#ssl-certificate-management}

Post kiam domenoj estas sincronitaj:

1. La integracio aŭtomate aktivas AutoSSL por viaj aplikacio
2. ServerPilot faras la emisiadon kaj instaladon de sertifikato SSL uzante Let's Encrypt
3. ServerPilot ankaŭ faras la aŭtomatan renovadon de sertifikato SSL

## Verifikado de Sertifikato SSL {#ssl-certificate-verification}

La integracio estas konfigurita plenumi pli da provoj por verifi certifikaton SSL por ServerPilot, ĉar tio povas bezoni tempon por ServerPilot emisi i instali sertifikato SSL. Per defolo ĝi provos ĝis 5 fois, sed tion povas esti ajustita uzante filtromojn.

## Problemoj kaj Solvoj {#troubleshooting}

### Problemoj kun API-konfimo {#api-connection-issues}
- Verifas, ke via Client ID kaj API Key estas ĝustataj
- Kontenas, ke via App ID estas ĝusta
- Assureĝu, ke via ServerPilot konto havas la necesajn permesojn

### Problemoj kun Sertifikato SSL {#ssl-certificate-issues}
- ServerPilot postulas, ke domenoj havu validad DNS-registroj, kiuj indikas al via servero antaŭ emisi sertifikato SSL
- Se sertifikato SSL ne estas emisitita, kontrolu, ke via domenoj indikas ĝuste al la IP-adreso de via servero
- Ĝi povas bezoni tempon por ServerPilot emisi i instali sertifikato SSL (normalaj 5-15 minutoj)

### Domen Ne Adita {#domain-not-added}
- Kontenu la logojn de Ultimate Multisite por ĉian eraro mesaĝon
- Verifas, ke la dominio ne estas déjà adita al ServerPilot
- Assureĝu, ke via plan de ServerPilot suportas la nombro de domenoj, kiujn vi adigas

### Domeno Entferon {#domain-removal}

- Aktualmente bietet die ServerPilot API keine Möglichkeit, einzelne Domains zu entfernen.
- Wenn eine Domain-Zuordnung in Ultimate Multisite entfernt wird, aktualisiert die Integration die Domainliste in ServerPilot, um die entfernte Domain auszuschließen.
