---
title: Integrado de GridPane
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane Integra {#gridpane-integration}

## Überblick {#overview}
GridPane estas specialigita WordPress host kontrolpanelo, konstruita por serios WordPress profesijoj. Ĉi tiu integraj permesas aŭtomatan domeno sincronigon kaj SSL-sertifikatoj manĝestion inter Ultimate Multisite kaj GridPane.

## Funkcioj {#features}
- Aŭtomata domeno sincronigo
- SSL-sertifikatoj manĝesto
- Aŭtomata konfigurado de SUNRISE konstanto

## Requisitoj {#requirements}
La seguenti konstanta devas esti definita en via `wp-config.php` filiro:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'via_api_clavo');
define('WU_GRIDPANE_SERVER_ID', 'via_server_ido');
define('WU_GRIDPANE_APP_ID', 'via_site_ido');
```

## Monti Instrukoj {#setup-instructions}

### 1. Akcepte Vian GridPane API Credencojn {#1-get-your-gridpane-api-credentials}

1. Logu-sin al via GridPane dashboardo
2. Altiĝu al "Settings" > "API"
3. Genere API-clavon, se vi ne havas un
4. Kopiu vian API-clavon

### 2. Akcepte Vian Server kaj Site ID'n {#2-get-your-server-and-site-ids}

1. En via GridPane dashboardo, altiĝu al "Servers"
2. Selektu la serveron, kie via WordPress multisite estas alojita
3. Notu la Server ID (vidbla en la URL aŭ sur la detaloj de la servera paĝo)
4. Altiĝu al "Sites" kaj selektu vian WordPress site
5. Notu la Site ID (vidbla en la URL aŭ sur la detaloj de la site paĝo)

### 3. Aggigev Vian Konstanto al wp-config.php {#3-add-constants-to-wp-configphp}

Aggivu la seguenti konstanto al via `wp-config.php` filiro:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'via_api_clavo');
define('WU_GRIDPANE_SERVER_ID', 'via_server_ido');
define('WU_GRIDPANE_APP_ID', 'via_site_ido');
```

### 4. Aktivizi la Integra {#4-enable-the-integration}

1. En via WordPress admino, altiĝu al Ultimate Multisite > Settings
2. Navigu al la tabulo "Domain Mapping"
3. Scrollu nedon en "Host Integrations"
4. Aktivizi la GridPane integraj
5. Kliku sur "Save Changes"

## Kiel Ĝi Funkcias {#how-it-works}

Kiam domeno estas mapita en Ultimate Multisite:

1. La integracio sendas petando al API de GridPane por adici la domeno a su sitio
2. GridPane mane automatice la provizio de sertifikato SSL
3. Kiam se eliminas mapeo de domeno, la integracio eliminera el domeno de GridPane

La integracio ankaŭ mane automatice la konstanta SUNRISE en su wp-config.php, kiu estas necesa por korektaj domeno mapei funkcii.

## Maneĝo de la Konstanto SUNRISE {#sunrise-constant-management}

Un unika funkcio de la integracio de GridPane estas ke ĝi automatice revertas la konstanton SUNRISE en wp-config.php por preveni konflikto kun la propra sistema de domeno mapeo de GridPane. Tio certigas, ke amba sistemoj povas labori kiam ne ekzistas problemo.

## Problemaĵoj (Troubleshooting) {#troubleshooting}

### Problemojn kun konekto per API {#api-connection-issues}
- Verifas ke via API key estas korekta
- Kontenas ke via server kaj sitio IDj estas korektaj
- Assureĝas, ke via GridPane konto havas la necesajn permisojn

### Problemojn kun sertifikato SSL {#ssl-certificate-issues}
- GridPane povas bezoni tempon por emiti sertifikato SSL
- Verifas ke via domeno apuntas korekte al la IP-adreso de via servero
- Kontenas la ŝanĝon de SSL de GridPane por via sitio

### Domeno ne ajditita {#domain-not-added}
- Kontenas la logoj de Ultimate Multisite por ĉian eraro mesaĝoj
- Verifas, ke la domeno ne estas déjà ajditita en GridPane
- Assureĝas, ke via DNS-registroj estas korektaj
